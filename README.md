# Steam UI unobfuscated

The entire Steam UI source code, except readable.

Differences:

- Linted with [Biome](https://biomejs.dev/)
- TypeScript types are added where needed
- Namespace/dynamic imports are replaced by named imports & sorted (I don't know whether or not it's done by webpack, but yeah)
- The obfuscated variables are replaced with Hungarian notation names, the readable parts (React props, class methods, etc.) stay as is

Note that this is not actually tested or whatever, it's only a huge guesswork.

## Credits

Most of the job of unpacking was done by [webcrack](https://github.com/j4k0xb/webcrack) and translation to JSX (except "chunk~2dcc5aaf7.js", since it errors out after some time (?)) by [wakaru](https://github.com/pionxzh/wakaru).
