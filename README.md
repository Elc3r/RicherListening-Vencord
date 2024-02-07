# RicherListening Plugin for Vencord
A plugin that provides a simple header rewrite to allow other music clients to show as the listening activity type.

This is a fork, the original creator is cryptofyre.

## Supported music clients
- [Cider](https://cider.sh/)
- [AMWin-RP](https://github.com/PKBeam/AMWin-RP)
- [apple-music-discord-rpc](https://github.com/NextFire/apple-music-discord-rpc)
- [PreMiD Youtube Music](https://premid.app/store/presences/YouTube%20Music)
- [PreMiD SoundCloud](https://premid.app/store/presences/SoundCloud)

## Installation Guide

#### You'll need the following dependencies
- Git ([https://git-scm.com](https://git-scm.com/download))
- Node.JS (https://nodejs.org/dist/v18.16.0/node-v18.16.0-x64.msi)
- pnpm (Install with `npm install -g pnpm`)

### How to build
```
git clone https://github.com/Vendicated/Vencord;
cd Vencord/src/plugins/;
git clone https://github.com/Elc3r/RicherListening-Vencord.git;
cd ..;
cd ..;
pnpm install; pnpm build; pnpm inject;
```


#### Do not use public forks including this file as we cannot assure the legitmacy of the repo and its contents.
