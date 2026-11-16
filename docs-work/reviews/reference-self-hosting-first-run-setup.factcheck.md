# Targeted final review — 2026-11-06

Verdict: PENDING
Reviewed: src/content/reference/en/self-hosting/first-run-setup.mdx
Reviewed-SHA: 6dcb47919d325ef7652b3746b55877b9f2ab0f7c69b3516b31150c1e8df74cd8
Reviewed-SHA256: 6dcb47919d325ef7652b3746b55877b9f2ab0f7c69b3516b31150c1e8df74cd8
Reviewer: final-features correction author; self-review, not independent PASS
Product-Revision: 2dfefbb0c393f439954d79b32ac11511678d7f44 plus working tree

The full article was read editorially. The correction was independently traced from the staged lead to current source, then applied by this reviewer. This is targeted author verification, not a new exhaustive source audit, independent final-text approval or runtime test. See [final-features.md](../ecosystem-validation/final-features.md) for exact source anchors, coverage and remaining limits.

## Historical reviews

The original records below are preserved verbatim and apply only to their recorded hashes.

# Independent source review: /reference/self-hosting/first-run-setup
Verdict: PASS
Reviewed: src/content/reference/en/self-hosting/first-run-setup.mdx
Reviewed-SHA: f61f7298b766bf29
Reviewed-SHA256: f61f7298b766bf29d7cfc46b7c5e13fbc7e46ec2e014b744a87fe4f77a9ff13a
Reviewed-Date: 2026-11-05
Reviewer: independent reviewer, separate from article author
Product-Revision: 54da8b6318de63b5205a0ff8db35e0b9045dd959

The complete current article was read in navigation order and checked against current product source. Historical PASS entries below are leads, not approval of this revision. Atlas voice/template gates do not govern this review.

## Current evidence and result

No substantive finding. Deliberate app choice, optional device-flow secret, first-run write window and optional service follow-through checked.

Source files opened in this review: Api/Controllers/V1/SystemController.cs:188-358,465-492; dashboard/site/setup/SetupView.vue:34-55,104-148; official Twitch application registration guide steps 1,4,9-10 reviewed 2026-11-05.

Unqualified paths beginning Identity, CustomCode, Billing, EventStore, Engagement, Rewards, Widgets or Platform are under server/src/NomNomzBot.Infrastructure; Api and Domain identify their corresponding server projects. Dashboard shorthand is under dashboard/src/views/dashboard.

Verification is read-only source review. No bot/API startup, live account authorization, channel writes, C# host/Jint execution, Docker install or restore was performed. Documentation build/render QA belongs to the combined parent pass. The SDK reference and worked-example checks additionally ran the existing read-only nnz-code-doc-check.mjs with production JavaScript bootstrap and substituted host I/O.

## Historical review (superseded)

# Fact-check: /reference/self-hosting/first-run-setup
Historical verdict: PENDING

2026-11-04 overhaul: the article changed, so the previous PASS and hash below are historical evidence, not approval of the current revision.
Fresh writer source checks and article inventory are recorded under H2/H3 in `docs-work/overhaul/settings-hosting-code.md`.
Independent review of the changed text is pending.
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
