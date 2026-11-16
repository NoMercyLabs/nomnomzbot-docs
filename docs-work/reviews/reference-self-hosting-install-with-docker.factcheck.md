# Independent source review: /reference/self-hosting/install-with-docker
Verdict: PASS
Reviewed: src/content/reference/en/self-hosting/install-with-docker.mdx
Reviewed-SHA: 3b0e369e6693914b
Reviewed-SHA256: 3b0e369e6693914bbea5011185c50c1fcbe310ed939f857dd0125af077127ae5
Reviewed-Date: 2026-11-05
Reviewer: independent reviewer, separate from article author
Product-Revision: 54da8b6318de63b5205a0ff8db35e0b9045dd959

The complete current article was read in navigation order and checked against current product source. Historical PASS entries below are leads, not approval of this revision. Atlas voice/template gates do not govern this review.

## Current evidence and result

No substantive finding. Mount names, two full volumes, fixed lite name, health endpoint, single writer, generated key preservation and cold-backup sequence checked.

Source files opened in this review: docker-compose.lite.yml:29-77; docker-compose.yml:65-83,143-205,246-248; Platform/Security/DataFolderKekStore.cs:25-70; official Docker volume backup/restore documentation reviewed 2026-11-05.

Unqualified paths beginning Identity, CustomCode, Billing, EventStore, Engagement, Rewards, Widgets or Platform are under server/src/NomNomzBot.Infrastructure; Api and Domain identify their corresponding server projects. Dashboard shorthand is under dashboard/src/views/dashboard.

Verification is read-only source review. No bot/API startup, live account authorization, channel writes, C# host/Jint execution, Docker install or restore was performed. Documentation build/render QA belongs to the combined parent pass. The SDK reference and worked-example checks additionally ran the existing read-only nnz-code-doc-check.mjs with production JavaScript bootstrap and substituted host I/O.

## Historical review (superseded)

# Fact-check: reference-self-hosting-install-with-docker
Historical verdict: PENDING

2026-11-04 overhaul: the article changed, so the previous PASS and hash below are historical evidence, not approval of the current revision.
Fresh writer source checks and article inventory are recorded under H1/H2 in `docs-work/overhaul/settings-hosting-code.md`.
Independent review of the changed text is pending.
Reviewed: C:\Projects\NoMercyLabs\nomnomzbot-docs\src\content\reference\en\self-hosting\install-with-docker.mdx
Reviewed-SHA: 1d0518d661ea9ef4

Second review of the changed page. I read the whole page again. Product paths are relative to C:\Projects\NoMercyLabs\nomnomzbot.

## Earlier finding F1: fixed

The "Put settings in a file first" text (page lines 91-99) now says to clear `ENCRYPTION_KEY` and to set `API_IMAGE` to the stable image.
- `ENCRYPTION_KEY`: the dev value is at `.env.example:39`. `StartupSecretGuard.cs:59-62` refuses it in Production (`docker-compose.lite.yml:39`). An empty value leads to the data-folder key (`DataFolderKekStore.cs:39-56`).
- `API_IMAGE`: the local value is at `.env.example:145`. The stable image is at `docker-compose.lite.yml:31`.
- "The other values can stay": the dev `JWT_SECRET` (`.env.example:34`) is replaced by a generated secret outside saas (`Program.cs:244-247`). `DEPLOYMENT_MODE` in `.env.example` does not reach lite, because lite sets `Deployment__Mode=self_host_lite` directly (`docker-compose.lite.yml:42`).

## New section "Get the project files" (lines 35-68)

| Claim | Evidence |
| --- | --- |
| The project is at `https://github.com/NoMercyLabs/nomnomzbot` | `git remote get-url origin` = `https://github.com/NoMercyLabs/nomnomzbot.git`; a plain GET returned 200 |
| The folder holds `docker-compose.lite.yml`, `docker-compose.yml`, `.env.example` | all three are at the repo root (listed this run) |
| The clone command and `cd nomnomzbot` | the clone URL matches origin; the folder name comes from the repo name |
| **Code**, **Download ZIP**, **Open in Terminal**, the Terminal app | GitHub, Windows and macOS interface labels; not product strings, not checked further |
| The Twitch console at `https://dev.twitch.tv/console/apps` shows the Client ID and Secret | external Twitch page; not fetched (sign-in page) |

## Other claims, checked again

These are unchanged from the first review. The evidence still holds.
- Lite/full table and containers: `docker-compose.lite.yml:12-42`; `docker-compose.yml:143-201`. Adminer and api-green are profiled off (`:166-175,220-224`).
- Port and `API_HTTP_PORT`: `docker-compose.lite.yml:37`; `docker-compose.yml:149`.
- The bot makes its own keys and keeps them in the data folder: `Program.cs:238-248`, `SelfHostSecretStore.cs:37-63`, `SelfHostDataPaths.cs:44,68`.
- Full setup values and their openssl comments: `.env.example:20-44`.
- Data folder, volumes, bind-mount lines, `-wal`/`-shm`: `Dockerfile:115-117`; `docker-compose.lite.yml:16-18,71-77`; `docker-compose.yml:138,189,241-242`.
- Backup and key file: `DataFolderKekStore.cs:19-21`.
- Hosting marker sentence: present at line 219.

## Not checked

- The UID `1654` in the chown command is the `app` user of `mcr.microsoft.com/dotnet/aspnet:10.0` (`Dockerfile:82,117`). The repo does not state the number.
- The network-drive warning (line 213) and "sets up its database on the first start" (line 144) have no direct source line traced.

## Style notes

- The copy step and the folder step in the full setup still have no Windows Platform variant.
- The Platform block at line 124 sits between list items 1 and 2, so it breaks the numbered list.
