# Steam UI unobfuscated

The entire Steam UI source code, except readable.

Differences:

- Partly linted with [Biome](https://biomejs.dev/)
- TypeScript types are added where needed
- No SCSS - possible, but the focus is on the TypeScript part right now
- According to webcrack, most of the codebase uses CommonJS, this will use entirely ESM
- Namespace/dynamic imports are replaced by named imports & sorted (I don't know whether or not it's done by webpack, but yeah)
- The obfuscated variables are replaced with Hungarian notation names, the readable parts (React props, class methods, etc.) stay as is

Based on the following Steam version:

```
Steam Beta Branch:  Stable Client
Steam Version:  1741737356
Steam Client Build Date:  Tue, Mar 11 20:39 UTC -08:00
Steam Web Build Date:  Tue, Mar 11 23:45 UTC -08:00
Steam API Version:  SteamClient021
```

Note that this is not actually tested or whatever, it's only a huge guesswork.

## Some (most likely wrong) info

### Additional APIs

The "websocket open/closed" console message(s) on app startup is from the Clientdll/SteamUI WebSockets that are used for some APIs much like SteamClient, except done through protobuf services.

You can replace the existing connections (see webpack module 12251) with your own like this (there will be errors about "multiple attempts", that means it works):
```ts
const mod = findModuleExport( (e) => e.toString().includes( "SendSerializedMessage" ) );
await mod.Init();
await mod.MakeReady();
```

They follow the same structure, and are simple objects, so they are easy to find as webpack modules:

```ts
const BluetoothManagerService = findModuleExport( (e) => e.GetAdapterDetailsHandler );
```

All return a `Promise< CBaseProtoBufMsg< T > >` (I don't care enough to describe the type, but the repo has something about it, probably):
```ts
const msg = await BluetoothManagerService.GetState();
console.log( msg.Body().toObject() );
// -> {is_service_available: false, adapters: Array(0), devices: Array(0)}
````

Clientdll handles:

- SteamEngine;
- SteamInputManager.

SteamUI handles:

- BluetoothManager;
- GameRecording.

Others I could not catch, but there are many more of them - look up `#1"` in Steam's files to dig up the rest.

## Credits

Unpacking was done by [webcrack](https://github.com/j4k0xb/webcrack) and unminifying by [wakaru](https://github.com/pionxzh/wakaru).
