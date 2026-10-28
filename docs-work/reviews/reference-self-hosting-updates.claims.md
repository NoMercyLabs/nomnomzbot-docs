# Claims: /reference/self-hosting/updates

Product repo: C:\Projects\NoMercyLabs\nomnomzbot (local master, read only).

| Claim | Source |
| --- | --- |
| A channel is chosen by image tag ghcr.io/nomercylabs/nomnomzbot:stable/beta/nightly | .github/workflows/release.yml:18; docker-compose.yml:63 |
| nightly runs every night and copies `latest` (green master) | .github/workflows/release.yml:14,24,58 |
| beta runs every Monday and copies nightly | .github/workflows/release.yml:15,25,55,59 |
| stable is made by a manual run and copies beta | .github/workflows/release.yml:16,26-32,60 |
| A release never builds; it copies an already-tested tag | .github/workflows/release.yml:12,112-113 |
| A channel with no new commit skips its release | .github/workflows/release.yml:91-102,105 |
| Channel is set with API_IMAGE in .env | DEPLOY.md:111-113; docker-compose.yml:65; docker-compose.lite.yml:31 |
| Lite defaults to :stable when API_IMAGE is empty | docker-compose.lite.yml:31 |
| Each release has its own tag channel-YYYY.MM.DD-run; pin it to stay on that release | .github/workflows/release.yml:110,112,136 |
| Update keeps data in place | .github/workflows/release.yml:136 |
| Lite backup is the nomnomzbot_lite_data volume | docker-compose.lite.yml:71,74-77 |
| Full data lives in postgres_data (database), api_data (bot files) and .env | DEPLOY.md:117; docker-compose.yml:138,189,241-242 |
| No full-setup backup instruction: no grounded procedure (compose has no top-level name; DEPLOY.md gives none) | docker-compose.yml (no `name:` line); DEPLOY.md:117 |
| Lite backup steps are linked, not repeated | install-with-docker.mdx "Back up the lite data"; docs/install-docker-lite.md:96 |
| Keep ENCRYPTION_KEY; a changed key makes stored sign-ins unreadable, so Twitch and every connected service must be connected again | server/src/NomNomzBot.Infrastructure/Platform/Security/OsSecureStoreKeyVault.cs:65-68 (KEK derived from Encryption:Key), :166 (UNWRAP_FAILED when the key that wrapped the DEK is gone) |
| Lite update command pull && up -d | .github/workflows/release.yml:135 |
| Lite update pauses the bot briefly | install-with-docker page "Limits of lite"; no blue/green in docker-compose.lite.yml (single service) |
| Full update: set API_IMAGE, run scripts/switchover.ps1; new version starts next to old, no downtime | .github/workflows/release.yml:133-134; DEPLOY.md:127-145; scripts/switchover.ps1 exists |
| Script pulls for a registry ref, builds for a bare local tag / unset | DEPLOY.md:134-139,149 |
| If new color never gets ready, script stops it and old keeps serving | DEPLOY.md:144-146 |
| Do not use Watchtower; it stops before ready | DEPLOY.md:155-159 |
| Admin System page has Updates card | dashboard/src/views/dashboard/admin/AdminSystemView.vue:40,251; dashboard/src/i18n/locales/en.json:861 ("System") |
| Card labels and texts | dashboard/src/views/dashboard/admin/i18n/en.json:939-946; UpdateCard.vue:37-63 |
| Card compares with stable only | dashboard/src/api/updates.ts:18,64 |
| What changed opens the release page | UpdateCard.vue:48-55; updates.ts:77 |
| Release notes carry changes and lite/full update steps | .github/workflows/release.yml:128-140; en.json:943 |
