# NomNomzBot Documentation

This is the source of the documentation website for [NomNomzBot](https://github.com/NoMercyLabs/nomnomzbot).
The production site is **https://docs.nomnomz.bot**.
The public development preview is **https://docs-dev.nomnomz.bot**.
Both use this documentation project, its collections, and its navigation.

## What it does

The site explains what NomNomzBot can do and how to use it.
NomNomzBot is a chat bot for live streamers.
NomNomzBot is free to use, change and share. You may not earn money with it.

The site has these entry points:

| Part | Address | What it holds |
| --- | --- | --- |
| Home | `/` | What the bot is and what it can do. |
| User guide | `/reference/overview` | Setup and everyday workflows for streamers and moderators, grouped by area. |
| Developer reference | `/reference/code/overview` | Script setup and SDK types, widget actions and events, automation HTTP/WebSocket APIs, webhook/dashboard contracts, and the public read-aloud API. |

The user guide follows the dashboard: getting started, commands, timers and rewards, widgets and overlays, music, voice and sound, moderation, currency and games, integrations, community and stream, settings and self-hosting. Technical material has its own **Developer reference** sidebar group, beginning at `/reference/code/overview`.
The `-dev` hostname means development preview, not developer documentation.
These audiences share the same content architecture; there has been no move from a separate developer site.
Current scope and review status are tracked in `docs-work/map.md`.
Writers follow `docs-work/page-conventions.md`.

## Requirements

- Node.js 22.12.0 or later. CI uses the Node.js 22 release line from `.nvmrc`.
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

## Validation

`yarn build` checks MDX syntax, navigation and required metadata in the reference collection, TypeScript, tests, and the search index before compiling the site.
After compilation, it validates local links, fragments, assets, and search routes across every generated HTML page, including the home page and redirects.
External URLs and behavior that needs a running bot or provider account still require separate verification.

For a focused check, run `yarn type-check`, `yarn test`, or `yarn check:reference`.
The `check:reference` command validates the Reference pages; add `--rendered` after a build to check generated output.

Template helper pages are generated from `docs-work/helpers.json`, `docs-work/helper-groups.md`, `docs-work/helper-inputs.json`, and optional prose in `docs-work/helper-sections/`.
Edit those inputs when correcting generated helpers, then run `node scripts/gen-template-helpers.mjs --check` before regenerating with `node scripts/gen-template-helpers.mjs`.
The check validates the inputs; review the regenerated diff to confirm that it preserves the intended prose and examples.

The lookup blocks in `src/content/reference/en/code/sdk-contracts.mdx` come from the product's committed SDK declarations and current source definitions.
With `nomnomzbot` checked out beside this repository, run `node scripts/gen-sdk-contracts.mjs --check` to compare action fields, widget events, stream metrics, script method names and generated blocks.
Set `NOMNOMZBOT_SOURCE` to the product checkout when it is elsewhere.
After reviewing a product change, regenerate with `node scripts/gen-sdk-contracts.mjs` and inspect the diff; keep explanations outside the generated markers.
This source comparison is separate from `yarn build`, because the publishing checkout does not contain the product repository.
The normal test suite exercises the generator against temporary fixtures, including mismatched types, missing runtime methods and stale output.

For fresh C# reflection and nested declaration parity, also run `node scripts/check-sdk-reflection.mjs` with the .NET 10 SDK and product test dependencies available.
It builds the current product source and runs its declaration-snapshot, widget-registry, reflection and host-JSON contract tests; it requires nonempty passing TRX results and disables snapshot writing.
This closes the committed widget snapshot's nested-field comparison, but sampled host JSON is not exhaustive proof of every runtime value, provider response or custom converter branch.
The Node generator alone does not provide this C# check, and neither check runs automatically in the standalone publishing checkout.

If the reflection comparison reports declaration drift, review the product change first. From the **product repository root**, regenerate with:

```powershell
$env:NNZ_WRITE_SDK_TYPES = '1'
try {
    dotnet test server/tests/NomNomzBot.Api.Tests/NomNomzBot.Api.Tests.csproj --filter FullyQualifiedName~DashboardWidgetSdkTypesTests
} finally {
    Remove-Item Env:NNZ_WRITE_SDK_TYPES -ErrorAction SilentlyContinue
}
```

Review the product's `dashboard/src/api/nnz-widget.d.ts` diff, rerun the reflection comparison without snapshot writing, then run `node scripts/gen-sdk-contracts.mjs` in this docs repository and review its generated blocks.
Do not regenerate merely to silence a failing test: a mismatch may reveal an unintended contract change.

## Publishing

A push to `main` runs the workflow in `.github/workflows/pages.yml`.
The workflow builds the site and publishes it to GitHub Pages at https://docs.nomnomz.bot.

The public preview at https://docs-dev.nomnomz.bot serves the live Astro development server configured on port 5085 in `astro.config.mjs`.
It previews the working checkout; production serves the output of a published build.
Changes visible in preview are therefore not evidence that production has been updated.
Both environments use the `reference` collection defined in `src/content.config.ts` and the navigation in `src/lib/nav-structure.ts`.

Validate the repository with `yarn build`, then check the relevant routes in each environment when verifying a deployment.
A passing local build does not establish that either public environment serves that revision.
The remaining review scope is recorded in [the documentation map](docs-work/map.md).

## Project structure

| Folder | What it holds |
| --- | --- |
| `src/pages/` | The routes of the site. |
| `src/content/reference/` | The user guide and developer references, one folder per area. |
| `docs-work/` | The documentation map, the writer queues, the concept ledger and the page conventions. |
| `src/components/` | The page parts, such as navigation, search and callouts. |
| `src/styles/` | The theme. Its colors come from the NomNomzBot dashboard. |
| `scripts/` | Search generation, documentation validation, helper generation, and regression tests. |

## License

You may use, change and share this site for free. You may not earn money with it. The legal text is in [LICENSE](LICENSE). Copyright © NoMercy Labs.
