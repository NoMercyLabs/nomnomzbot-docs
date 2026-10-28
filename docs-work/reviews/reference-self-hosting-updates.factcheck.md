# Fact check: /reference/self-hosting/updates
Verdict: PASS
Reviewed: C:\Projects\NoMercyLabs\nomnomzbot-docs\src\content\reference\en\self-hosting\updates.mdx
Reviewed-SHA: 3c69744dc445df70

Product repo read at local master (read only). Line numbers are product-repo lines unless marked "page".

## Re-review of the corrected page

The whole current text was re-read. The only change from the earlier version (e75af8190e6d7d14) is the ENCRYPTION_KEY callout, page lines 54-56. It now reads: "If it changes, the bot cannot read the sign-ins it stored. You must connect Twitch and every other connected service again." The code below supports this. Every other line is the same as before, and the table below still holds for it.

## Earlier finding (now fixed)

1. The ENCRYPTION_KEY callout used to say "If it changes, the bot must sign in to Twitch again." That was too narrow, and its only source in the claims file was a CLAUDE.md note (a doc, not code).
   - The code: `Encryption:Key` is the key-encryption key that wraps every data key. `server/src/NomNomzBot.Infrastructure/Platform/Security/OsSecureStoreKeyVault.cs:28,65-68` derive the KEK from it; `:166` fails with "The DEK was wrapped under Encryption:Key, which is no longer configured."; `AesGcmFieldCipher.cs:118-124` and `Identity/IntegrationTokenVault.cs:493` return `DECRYPT_FAILED`.
   - So a changed key makes every stored secret unreadable: the streamer's own Twitch sign-in and every connected service (Spotify, Discord, YouTube), not only the bot account. A self-hosted bot also uses the streamer's own account until a bot account is registered (page-conventions.md), so "the bot" alone misleads.
   - Corrected text: "Keep `ENCRYPTION_KEY` the same across an update. If it changes, the bot cannot read the sign-ins it stored. You must connect Twitch and every other connected service again."
   - Note, not a finding: an admin key rotation exists (`server/src/NomNomzBot.Api/Controllers/V1/AdminController.cs:367`). It is out of scope for this page.

## Claims

| Claim | Supported by | Status |
| --- | --- | --- |
| A release channel is the image tag you run | .github/workflows/release.yml:18; docker-compose.yml:63-65 | supported |
| Each channel copies an already-tested build from the one before it | release.yml:12,57-61,112-113 (nightly copies `latest`, green master) | supported (style: `latest` is not itself a channel; "the newest tested build" in the nightly row covers it) |
| Image names ghcr.io/nomercylabs/nomnomzbot:stable/beta/nightly | release.yml:18,129; docker-compose.yml:63 | supported |
| stable: when a stable release is made; takes beta | release.yml:16,26-32,60 | supported |
| beta: every Monday; takes nightly | release.yml:25,55,59 | supported |
| nightly: every night; takes the newest tested build | release.yml:14,24,58 | supported |
| A channel with no new build skips its release | release.yml:91-102,105,117 | supported |
| Set the channel with API_IMAGE in .env | docker-compose.yml:63-65; docker-compose.lite.yml:31; DEPLOY.md:111-113 | supported |
| Lite uses stable when API_IMAGE is empty | docker-compose.lite.yml:31 `${API_IMAGE:-ghcr.io/nomercylabs/nomnomzbot:stable}` | supported |
| Per-release tag `stable-2026.10.26-12` = channel, date, run number; pin to stay | release.yml:110,112,136; dashboard/src/api/updates.ts:15 | supported |
| An update keeps your data in place | release.yml:136 is note text only; the proof is the volumes: docker-compose.lite.yml:16-18,69-77 (all state under /app/data on a named volume); docker-compose.yml:137-138,188-189,240-242. `pull` + `up -d` and switchover recreate containers, not volumes (switchover.ps1:158-165,188 uses build/pull/up/stop only) | supported |
| Lite data: `nomnomzbot_lite_data` volume | docker-compose.lite.yml:71,74-77 | supported |
| Full data: postgres_data, api_data, .env | docker-compose.yml:138,189,241-242; DEPLOY.md:117 | supported |
| Lite backup steps on Install with Docker | link target is a guide page (not checked by this role; links gate owns it) | not checked here |
| Keep ENCRYPTION_KEY the same | OsSecureStoreKeyVault.cs:65-68,166 | supported |
| If it changes, the bot cannot read its stored sign-ins; connect Twitch and every other service again | OsSecureStoreKeyVault.cs:65-68,166; AesGcmFieldCipher.cs:118-124; IntegrationTokenVault.cs:493 | supported |
| Lite update command | release.yml:135; docker-compose.lite.yml:20-21 | supported |
| Lite: bot pauses briefly while it restarts | docker-compose.lite.yml:20 ("ONE container only ... no blue/green"), :35 single container_name; `up -d` replaces that one container | supported |
| Full: set API_IMAGE, run .\scripts\switchover.ps1 | release.yml:133-134; scripts/switchover.ps1 exists | supported |
| Script downloads the image, starts new next to old, stops old when ready, no pause | switchover.ps1:163,165,167-182,184-188 | supported |
| New version never ready: script stops it, old keeps running | switchover.ps1:177-180 | supported |
| Empty or local API_IMAGE: script builds instead | docker-compose.yml:65 (default `nomnomzbot-api:local`); switchover.ps1:156-160 (`-notmatch "/"` means build) | supported |
| Do not use Watchtower; it stops old before new is ready | docker-compose.yml:50-51; DEPLOY.md:155-159 (doc statements about a third-party tool; consistent with the compose comment) | supported (doc-level) |
| System page in admin has an Updates card | dashboard/src/views/dashboard/admin/AdminSystemView.vue:40,251 (per claims file; not re-read); admin i18n en.json:939 "Updates" | supported |
| Card text "Checks GitHub every few hours for a newer stable release." | admin i18n en.json:940; updates.ts staleTime/refetchInterval CHECK_EVERY_MS (value not read) | label supported |
| New version + release name + What changed | UpdateCard.vue:43-55; en.json:941-942 | supported |
| What changed opens its release page | UpdateCard.vue:48-55; updates.ts:77 (`html_url`) | supported |
| "This bot runs the newest stable release." | UpdateCard.vue:59-61; en.json:944 | supported |
| "No stable release to compare with yet, or this build has no version to compare." | UpdateCard.vue:62-64; en.json:945 | supported |
| "GitHub did not answer the update check." / try again later | UpdateCard.vue:40-41 (error text, retry); en.json:946 | supported |
| Card compares with stable only | updates.ts:18,64 | supported |
| Release page lists changes and lite + full update steps | release.yml:128-140 | supported |

## Page conventions

- No source citation, action key, permission number, license name or "open source" on the page: none found.
- No hosting-for-others text, so no hosting marker is needed.
- Code blocks are commands the self-hoster types: allowed for self-hosting pages.
- No elided snippets.
- No URLs to fetch (image refs are registry tags, not links).
