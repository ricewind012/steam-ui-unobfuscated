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

## Credits

Most of the job of unpacking was done by [webcrack](https://github.com/j4k0xb/webcrack) and translation to JSX (except "chunk~2dcc5aaf7.js", since it errors out after some time (?)) by [wakaru](https://github.com/pionxzh/wakaru).
