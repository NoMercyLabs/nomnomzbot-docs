# Fact-check: /reference/self-hosting/first-run-setup
Verdict: PASS
Reviewed: src/content/reference/en/self-hosting/first-run-setup.mdx
Reviewed-SHA: 7aaee6064fb775d4

Paths are relative to the product repo C:\Projects\NoMercyLabs\nomnomzbot (master).
S = dashboard/src/views/site/setup. D = server/src/NomNomzBot.Api/Models/SetupWizardDtos.cs. C = server/src/NomNomzBot.Api/Controllers/V1/SystemController.cs.

## Claims checked

| Page line | Claim | Evidence | Verdict |
| --- | --- | --- | --- |
| 14-15 | Step row, current marked; narrow screen shows "Step 1 of 6" and current name | S/components/StepsFrame.vue:211-241 (sm:hidden compact row, aria-current); S/i18n/en.json:8; 5 server steps D:82-235 + Finish StepsFrame.vue:189-196 = 6 | true |
| 17-24 | Short labels and card titles | S/i18n/en.json:17-23, 33; D:85, 140, 161, 186, 211 | true |
| 19-24 | Needed column | D:88 Required true; D:142,163,188,213 Required false; Finish has no Skip (SetupView.vue:117) | true |
| 26-28 | Back, Next off until done, Skip on optional not-done | SetupView.vue:40-45, 114-127; en.json:12-14 | true |
| 32-34 | Anyone can change keys until Finish; then admin only | C:313-314, 354-355, 274-275, 473-474 (Forbid when setup_complete and not admin); C:36 AllowAnonymous; C:489-492 | true |
| 40-42 | Own app or shared app; own app encouraged | D:86, 98, 102 | true |
| 46-51 | Developer Console link, redirect URL with copy button, Chat Bot category, Client ID, Save, Next turns on | D:98-100; InstructionLine.vue (splitLinks, copy for /api/ addresses); SetupAddress.vue:26-33; CredentialsStep.vue Save; api/setup.ts:93 invalidates wizard; SystemCredentialsProvider.cs:90-93 saved client id = decision | true |
| 53-55 | Secret optional; code sign-in without it, one-tap with it | D:101, 123-126; C:317-321 | true |
| 57-60 | Shared app button needs no fields; only save or shared click completes | CredentialsStep.vue useShared button; C:348-366; SystemCredentialsProvider.cs:84-97 (config/env client id never counts); D:89-93 | true |
| 64-66 | Optional; without it the broadcaster account types as the bot | D:141-143 | true |
| 70-74 | Sign in as bot first; Authorize opens new tab; waiting text; Connected: name | D:149; BotAccountStep.vue window.open _blank, waiting/connected; en.json:28-30 | true |
| 76-77 | Link with copy button while waiting, for another browser or profile | BotAccountStep.vue (authorizeUrl && !connected, SetupAddress use="both"); en.json:11 | true |
| 81-95 | Spotify, Discord, YouTube: Client ID and Secret, links, redirect names, Save | D:161-233 (both fields required, instruction URLs, "Redirect URI", "OAuth2 Redirect", "Authorized redirect URI"); C:369, 417, 441 | true |
| 87-89 | Song requests; notifications and server sync; YouTube music provider | D:162, 187 ("guild sync" = server), 212 | true |
| 101-103 | Finish card lists steps with Done / Not set; Event feed text | SetupView.vue:96-105; en.json:15, 24, 39-40; EventFeedHealth.vue (signInFirst when not signed in) | true |
| 105-106 | Finish setup opens the dashboard, then sign in | SetupView.vue:47-50 (router.replace('/app')); en.json:34 | true |
| 112-114 | Unreachable text and Try again | SetupView.vue:69-72; en.json:6-7 | true |
| 114-122 | Unreachable fix: `docker compose -f docker-compose.lite.yml ps`, full setup `docker compose ps`, row shows `Up` and `healthy` | docker-compose.lite.yml exists, service `api` with healthcheck at :28, :60; docker-compose.yml api service anchor healthcheck :127, merged into api-blue :162-164; api-green is profiled :166-176, so a plain start shows one bot row (blue) | true |
| 124-126 | Known Client ID does not count | SystemCredentialsProvider.cs:89-93; D:89-92 | true |
| 128-130 | Save failure text; admin only after finish | CredentialsStep.vue error line; en.json:27; C:313-314 | true |
| 136-138 | Finish failure text; admin only after finish | SetupView.vue:106-108; en.json:36; C:473-474 | true |

## Conventions

- No source citation, no action key, no numbered permission level, no license name, no NoMercyBot name: checked, none found.
- American English: no British spelling found.
- Labels are bold and match en.json or the server DTO text exactly.

## Notes (no effect on the verdict)

- Line 6, "opens the setup page before anything else": the client routes to onboarding on `OnboardingComplete` (C:70-78, 124), which turns true once the Twitch choice is made, not at Finish. The sentence is true for a new bot. A later visit before Finish may not be forced back to the page. Not checked in the router; no change needed for this page.
- The finish list shows the long card titles (SetupView.vue:98), not the short step labels. The page does not claim otherwise.
