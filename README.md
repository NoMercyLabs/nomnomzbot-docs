# NomNomzBot Documentation

This repository holds the documentation website for [NomNomzBot](https://github.com/NoMercyLabs/nomnomzbot).
NomNomzBot is a free, open-source chat bot for live streamers. It connects Twitch, Kick, YouTube and X Live in one dashboard.

Read the documentation at **https://docs.nomnomz.bot**.

## What is here

- The home page explains what the bot can do.
- The Reference section lists every capability: what it does, which fields it takes, and what it gives back.
- The Reference pages are generated from the bot's own capability list, so they always match the code.

## Run it locally

You need Node.js (the version in `.nvmrc`) with Corepack enabled.

```bash
corepack enable
yarn install
yarn dev
```

Then open the address that `yarn dev` prints.

## Publishing

Every push to `main` builds the site and publishes it to GitHub Pages.

## License

[AGPL-3.0-or-later](LICENSE). Copyright © NoMercy Labs.
