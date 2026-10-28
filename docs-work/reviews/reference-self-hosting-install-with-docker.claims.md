# Claims: /reference/self-hosting/install-with-docker

Product repo: C:\Projects\NoMercyLabs\nomnomzbot (read only). Lines read 2026-10-28.

| Claim on the page | Source file:line |
| --- | --- |
| Lite is one container, no Postgres, no Redis, SQLite | docker-compose.lite.yml:12, 20 |
| Lite is for your own channel; full for a database server or no-pause updates; full runs Postgres and Redis | docs/install-docker-lite.md:25, 27 |
| Full runs bot, Postgres, Redis, Caddy | docker-compose.yml:143, 162, 178, 200 (adminer is profiled off, :225) |
| Full updates with no pause (blue/green behind Caddy) | docker-compose.yml:29-36, 146-149 |
| Lite: one container only; no zero-downtime update | docker-compose.lite.yml:20-21; docs/install-docker-lite.md:111-112 |
| Settings file optional in lite, needed in full | docker-compose.lite.yml:23-24, 42-60 (every value has a `:-` default); docker-compose.yml:19-21, 78, 81, 92-94 (no defaults) |
| Needs Docker with Compose v2 and a Twitch application | docs/install-docker-lite.md:39 |
| Lite command `docker compose -f docker-compose.lite.yml up -d` | docker-compose.lite.yml:14 |
| Lite default image is the published stable image | docker-compose.lite.yml:31 |
| Port 5080 default, `API_HTTP_PORT` changes it | docker-compose.lite.yml:37; docker-compose.yml:149; .env.example:149 |
| Twitch keys can be entered in the setup wizard | docker-compose.lite.yml:24; .env.example:17 |
| Empty secret keys: bot makes its own and stores them in the data folder | docker-compose.lite.yml:23-24 (comment only); docs/install-docker-lite.md:55, 84 |
| Copy `.env.example` to `.env` (lite optional block) | docs/install-docker-lite.md:54 |
| Example ENCRYPTION_KEY is the dev key; the bot does not start with it; empty is fine | .env.example:39; server/src/NomNomzBot.Api/Configuration/StartupSecretGuard.cs:59-62; docker-compose.lite.yml:39, 46 |
| Example API_IMAGE makes Docker build locally; set the stable image instead | .env.example:141-145; docker-compose.lite.yml:31 |
| Other example values can stay in lite (dev JWT_SECRET is replaced outside saas) | fact-check finding: Program.cs:244-247 |
| Twitch application is made in the developer console at dev.twitch.tv/console/apps | .env.example:15 |
| Project files are at github.com/NoMercyLabs/nomnomzbot (link allowed on this page by Arc decision 2026-10-28) | nomnomzbot CLAUDE.md, Git Conventions: origin = NoMercyLabs/nomnomzbot; image ghcr.io/nomercylabs/nomnomzbot, docker-compose.lite.yml:31 |
| The folder holds docker-compose.lite.yml, docker-compose.yml and .env.example | repo root files read this run: docker-compose.lite.yml, docker-compose.yml, .env.example |
| Code / Download ZIP, Open in Terminal, drag-to-Terminal | GitHub and OS interface, not a product file (not checked in product code) |
| TWITCH_BOT_USERNAME is the account the bot posts chat as | .env.example:22 |
| Build yourself: `API_IMAGE=nomnomzbot-api:local` + `--build`, needs a lot of memory | docker-compose.lite.yml:29-30; docs/install-docker-lite.md:57-58 |
| Full: copy env, fill TWITCH_CLIENT_ID / SECRET / BOT_USERNAME, run `docker compose up -d --build` | docker-compose.yml:19-21 |
| Full: JWT_SECRET and ENCRYPTION_KEY required, comment shows how to make one | .env.example:29, 33, 37 |
| Change POSTGRES_PASSWORD from example | .env.example:43 |
| Bot sets up its database on boot | docker-compose.yml:23 |
| Full ready-made image `API_IMAGE=ghcr.io/nomercylabs/nomnomzbot:stable`, `docker compose up -d` without --build | docker-compose.yml:62-64 |
| Never share `.env`; it holds secrets | .env.example:8 |
| Changing ENCRYPTION_KEY: bot must re-auth | .env.example:38 |
| Data in /app/data: database (lite), keys, uploads, logs | Dockerfile:115-116; docker-compose.lite.yml:16-17, 41; docker-compose.yml:134-138 |
| Lite volume named `nomnomzbot_lite_data` | docker-compose.lite.yml:71, 75-77 |
| Full: postgres volume and api_data volume | docker-compose.yml:138, 189, 239-241 |
| Swap to bind mount `./data:/app/data` | docker-compose.lite.yml:71-72 |
| Linux/macOS `cp .env.example .env` (no Windows variant in product files) | .env.example:5 |
| Linux/macOS make the bind folder: `mkdir data`, `sudo chown 1654:1654 data` (no Windows variant in product files) | docs/install-docker-lite.md:73-74 |
| Keep -wal / -shm together | docker-compose.lite.yml:16-18; docs/install-docker-lite.md:77 |
| Backup stop / docker run tar / start commands | docs/install-docker-lite.md:92, 96, 101 |
| Backup includes key file; without it saved secrets unreadable | docs/install-docker-lite.md:86, 88 |
| Do not put data on a network drive | docs/install-docker-lite.md:113 |
| Hosting marker sentence | docs-work/page-conventions.md (The plain rule and the hosting marker); docker-compose.lite.yml:25 |
