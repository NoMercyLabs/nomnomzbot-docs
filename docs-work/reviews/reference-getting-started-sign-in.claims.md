# Claims: /reference/getting-started/sign-in

Paths: L = nomnomzbot/dashboard/src/views/site/login; E = L/i18n/en.json (line numbers from `cat -n` of that file, file line = shown line).

| Claim | Source |
| --- | --- |
| Card title Welcome, subtitle "Continue with a connected platform." | L/LoginView.vue:151-152; E:12-13 |
| Bot row with "The bot this page belongs to" / "The official NomNomzBot" / "Used on this browser" | L/LoginView.vue:38-45,159; E:15-16,30 |
| Twitch shows three role buttons (broadcaster, moderator, viewer), only when not code-only | L/LoginView.vue:118-122,221-231; E:21-25 |
| Button goes to the platform (full-page redirect to sign-in URL) | L/LoginView.vue:124-131 |
| After sign-in the dashboard opens (default return path /app) | dashboard/src/router/guard.ts:44-48; L/components/DeviceCodePanel.vue:540-544 |
| Role scopes: broadcaster read chat, send chat, moderated channels | server/src/NomNomzBot.Infrastructure/Identity/TwitchLoginScopes.cs:56-61 |
| Role scopes: moderator list | TwitchLoginScopes.cs:36-52 |
| Role scopes: viewer read chat, write chat, emotes | TwitchLoginScopes.cs:26-31 |
| Unknown role defaults to broadcaster; only broadcaster opens a channel, others identity-only | server/src/NomNomzBot.Api/Controllers/V1/AuthController.cs:382-387 |
| Signing in again never drops held scopes (union) | server/src/NomNomzBot.Infrastructure/Identity/AuthService.cs:171-226; AuthController.cs:364-366 |
| Role descriptions (owns channel / moderates / identity) | server/src/NomNomzBot.Application/Identity/Dtos/TwitchLoginRole.cs:14-27 |
| Other providers show "Continue with {provider}" | L/LoginView.vue:233-241; E:19 |
| Provider table: Twitch & YouTube device code + auth code; Kick, Twitter / X auth code PKCE only | server/src/NomNomzBot.Infrastructure/Identity/LoginProviderRegistry.cs:35-64 |
| Twitch always on; others need flag and app credentials | LoginProviderRegistry.cs:39,84-100+ |
| Footer "{providers} is off on this bot." | L/LoginView.vue:89-98,253-255; E:31 |
| "Sign in with a code instead", one link for all code providers; chooser when more than one | L/LoginView.vue:99-110,174-189,243-250; E:20,26-27 |
| Code panel texts: starting, instruction, Open {site}, waiting, auto-continue | L/components/DeviceCodePanel.vue:551-574; E:37-41 |
| Outcomes expired/denied/error/failed, Get a new code, Back | DeviceCodePanel.vue:523-538,576-586; E:42-47 |
| Code-only lines: other bot / insecure address; role buttons hidden then | L/LoginView.vue:46-49,112-122,213-219; E:28-29 |
| Device sign-in takes no role | DeviceCodePanel.vue:514 |
| Change opens Choose a bot; Bot address, Check, Use this bot, results, Forget | L/LoginView.vue:161-163; L/components/BotChooser.vue:369-405,409-483; E:49-67 |
| Unreachable / mixed content: nothing added | BotChooser.vue:400 |
| Closed page: Sign-in is coming soon, body, Coming soon, note, Back to the home page | L/LoginGate.vue:293-317; E:5-10 |
| Closed unless build sets sign-in open (self-hosted build sets it; comment) | dashboard/src/lib/flags.ts:14-18 (comment claim, not proof) |
| Hosting marker carried because page names the hosted NomNomzBot | page-conventions.md |
| Troubleshooting: unreachable, no providers, rate-limited countdown, Try again disabled until 0 | L/LoginView.vue:51-83,197-211; E:32-35 |
| Signed-in user is not shown the login page (guestOnly) | L/route.ts:10; guard.ts:107 (not stated on page) |

## Round 2 additions

| Claim | Source |
| --- | --- |
| Signed-out visit to a dashboard page goes to the sign-in page | nomnomzbot/dashboard/src/router/guard.ts:86-99 |
| Re-sign-in asks for earlier permissions only while still signed in on this browser | server/src/NomNomzBot.Api/Controllers/V1/AuthController.cs:365-366,387,410-416; server/src/NomNomzBot.Infrastructure/Identity/AuthService.cs:177-185 |
| A Twitch code signs in as broadcaster (device login asks the broadcaster scope set) | AuthController.cs:802-815 ("streamer login"); AuthService.cs:150,708 |
| Open button opens a new tab; label "Open {site}" | L/components/DeviceCodePanel.vue:563-570; E:40 |
| Single code provider shows the code at once | L/LoginView.vue:104-110,168-173 |
| Secure address = https or this computer (isSecureContext) | L/LoginView.vue:47-49 |
| Address format (host name or IP, port) and placeholder 192.168.1.20:5080 | E:56-58 |
| Full mixedContent text | E:63 |
| Public site build closed; self-host builds open | dashboard/.env.site:2; Dockerfile:32; server/src/NomNomzBot.Api/NomNomzBot.Api.csproj:104-106 |
| Round 3: "..." in Check messages and code-only line is the host | L/components/BotChooser.vue:474-476; L/LoginView.vue:216; E:28,60-63 |
| Round 4: cross button is icon-only (no visible text), aria-label "Forget {host}" | L/components/BotChooser.vue:432-440 (Cross icon, aria-label only); E:54 |
| Round 4: broadcaster scope lets the bot type in chat; moderator/viewer send as you | server/src/NomNomzBot.Infrastructure/Identity/TwitchLoginScopes.cs:23-24,33-35,58-59 |
| Round 4: "opens a channel" = bot works in your channel; others identity-only | AuthController.cs:385-386; TwitchLoginRole.cs:25 |
| Round 4: app details = platform OAuth app client credentials | LoginProviderRegistry.cs:99-104 |
| Round 4: public website sign-in closed | dashboard/.env.site:2; L/LoginGate.vue:293-317 |
| Round 3: cross button accessible name "Forget {host}" | BotChooser.vue:432-440; E:54 |
| Round 3: a code has no role; always broadcaster scope set | L/components/DeviceCodePanel.vue:514; AuthService.cs:150,708 |
| Round 3: re-sign-in asks base set plus held scopes | AuthService.cs:177-226 |
| Round 3: other platforms need flag and the bot's app registration (client credentials) | server/src/NomNomzBot.Infrastructure/Identity/LoginProviderRegistry.cs:81-104 |
