# NomNomzBot Documentation

This is the source of the documentation website for [NomNomzBot](https://github.com/NoMercyLabs/nomnomzbot).
The live site is **https://docs.nomnomz.bot**.

## What it does

The site explains what NomNomzBot can do and how to use it.
NomNomzBot is a free, open-source chat bot for live streamers.

The site has two parts:

| Part | Address | What it holds |
| --- | --- | --- |
| Home | `/` | What the bot is and what it can do. |
| Reference | `/reference/overview` | The bot's capabilities, one page per area. |

The Reference pages will be generated from the bot's own list of capabilities.
Today the Reference section holds one overview page.

## Requirements

- Node.js 22. The version is set in `.nvmrc`.
- Yarn 4.18.1, through Corepack. The version is set in `package.json`.

## Getting started

1. Enable Corepack, so the project's own Yarn version runs:

   ```bash
   corepack enable
   ```

2. Install the packages:

   ```bash
   yarn install
   ```

3. Start the local site:

   ```bash
   yarn dev
   ```

4. Open the address that `yarn dev` prints.
   You see the NomNomzBot Documentation home page.

To build the site the way it is published, run `yarn build`.
The result is in `dist/`.

## Publishing

A push to `main` runs the workflow in `.github/workflows/pages.yml`.
The workflow builds the site and publishes it to GitHub Pages at https://docs.nomnomz.bot.

## Project structure

| Folder | What it holds |
| --- | --- |
| `src/pages/` | The routes of the site. |
| `src/content/reference/` | The Reference pages. |
| `src/components/` | The page parts, such as navigation, search and callouts. |
| `src/styles/` | The theme. Its colors come from the NomNomzBot dashboard. |
| `scripts/` | The script that builds the search index. |

## License

[AGPL-3.0-or-later](LICENSE). Copyright © NoMercy Labs.
