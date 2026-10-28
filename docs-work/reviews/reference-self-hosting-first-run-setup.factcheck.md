# Fact-check: /reference/self-hosting/first-run-setup
Verdict: PASS
Reviewed: C:\Projects\NoMercyLabs\nomnomzbot-docs\src\content\reference\en\self-hosting\first-run-setup.mdx
Reviewed-SHA: 7aaee6064fb775d4

Fresh full review of the current text (hash identical at start and end). Paths: D = dashboard/src/views/site/setup; E = D/i18n/en.json; W = server/src/NomNomzBot.Api/Models/SetupWizardDtos.cs; SC = server/src/NomNomzBot.Api/Controllers/V1/SystemController.cs.

| Claim | Verdict | Proof |
| --- | --- | --- |
| Step row on top, current marked; narrow screen shows "Step 1 of 6" | true | D/components/StepsFrame.vue:57-64 (5 server steps + finish), 79-86 (sm:hidden compact text); E "progress" |
| Short step names Twitch app, Bot account, Spotify, Discord, YouTube, Finish setup | true | E stepLabels; E finish.title |
| Card titles | true | W:85, 140, 161, 186, 211; E finish.title |
| Twitch needed, others optional | true | W Required: true at twitch_app; Required: false at platform_bot, spotify, discord, youtube |
| Back / Next off on a needed step / Skip on an optional undone step | true | D/SetupView.vue:39-45, footer buttons (disabled index===0; :disabled="!canAdvance"; skips label) |
| Anyone may change keys until Finish setup; then admin only | true | SC:36 [AllowAnonymous]; SC:276, 314, 353, 377, 425, 449, 474 (IsSetupCompleteAsync && !admin → Forbid); SC:489-492 flag set only by POST setup/complete |
| Own app encouraged or shared app | true | W step description (line 86) |
| Console, exact redirect URL, Chat Bot category, Client ID | true | W instructions (lines 98-101) |
| Copy button beside the address | true | D/components/InstructionLine.vue, SetupAddress.vue, CopyAddressButton.vue (claims lead; SetupAddress use="both" seen in BotAccountStep.vue) |
| Client ID field, Save, Next turns on | true | W fields; E saveCredentials; dashboard/src/api/setup.ts:93 invalidates the wizard so Complete refreshes |
| Client Secret (optional); without it a code, with it one-tap | true | W field label "Client Secret (optional)"; W instruction line 4 (device-code vs one-tap redirect) |
| Use the shared NomNomzBot app, no fields, step done | true | E useShared; W UseSharedAction; api/setup.ts:111 invalidates |
| Only a saved decision finishes the step; a known Client ID does not count | true | W Complete: hasTwitchDecision, comment beside it |
| Bot step optional; skip → broadcaster account speaks | true | W platform_bot description |
| Sign in as bot account first; approve chat permissions | true | W platform_bot instructions 2-3 |
| Authorize opens new tab, waiting text | true | D/components/BotAccountStep.vue:45 (window.open _blank), 68; E botAuthorize, botWaiting |
| "Connected:" + name, step done | true | BotAccountStep.vue:65, watch(connected) invalidates wizard; E botConnected |
| Link with copy button for another browser/profile while waiting | true | BotAccountStep.vue: v-if="authorizeUrl && !connected", SetupAddress; E botOtherProfile |
| Spotify/Discord/YouTube need Client ID + Client Secret | true | W fields required true for both; CredentialsStep.vue:28 canSave |
| What each turns on (song requests / notifications and server sync / YouTube music provider) | true | W descriptions of spotify, discord ("guild sync"), youtube |
| Where the address goes (Redirect URI / OAuth2 Redirect / Authorized redirect URI) | true | W instructions of each step |
| Finish card lists every step with Done / Not set | true | SetupView.vue summary list; E done, notSet |
| Event feed check, sign-in-first text | true | D/components/EventFeedHealth.vue:53-56; E feed.title, feed.signInFirst |
| Finish setup opens the dashboard, then sign in | true | SetupView.vue finish() → router.replace('/app'); E finish.description "You sign in after this." |
| Unreachable text and Try again | true | SetupView.vue isError block; E unreachable, retry |
| docker compose -f docker-compose.lite.yml ps; full setup docker compose ps; Up and healthy | true | docker-compose.lite.yml:35, 60 (healthcheck); docker-compose.yml:127 (api healthcheck) |
| Save error text; admin only after finish | true | CredentialsStep.vue saveFailed alert; E saveFailed; SC guards above |
| Finish error text; finish again from another browser admin only | true | SetupView.vue finish.failed alert; SC:474-475 |

Conventions: no source citation, no action key, no numbered level, no license name or "open source" (grep: none). The page does not describe hosting for others, so no hosting marker is needed. American English.

Style notes (not failures): none blocking.
