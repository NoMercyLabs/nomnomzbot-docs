# Claims: /reference/self-hosting/first-run-setup

Paths: D = dashboard/src/views/site/setup; W = server/src/NomNomzBot.Api/Models/SetupWizardDtos.cs; SC = server/src/NomNomzBot.Api/Controllers/V1/SystemController.cs; E = D/i18n/en.json.

| Claim | Source |
| --- | --- |
| A new bot sends every gated page to setup first | dashboard/src/router/guard.ts:57-83 |
| You sign in after the last step | E "finish.description"; D/SetupView.vue:47-50 (router.replace('/app')) |
| Step row with the current step marked; "Step N of M" on a narrow screen | D/components/StepsFrame.vue:3-5 (comment), 575-605 of the read; E progress |
| Short step labels | E stepLabels; StepsFrame.vue labelOf |
| Six entries (five server steps plus Finish) | W:81-234; StepsFrame.vue finish entry |
| Card titles | W:85,140,161,186,211; E finish.title |
| Twitch step required, others optional | W:87,142,163,188,213 |
| Back / Next / Skip behavior | D/SetupView.vue:39-45,114-127; E back,next,skip |
| Setup routes open to anyone until finished, then admin only | SC:36 ([AllowAnonymous]), 276, 314, 353, 377, 406, 425, 449, 474, 489-492 |
| Twitch app description: own app encouraged or shared app | W:86 |
| Twitch instructions (console, redirect URL exactly, Chat Bot category, Client ID) | W:98-105 |
| Address to paste has a copy button | D/components/InstructionLine.vue; SetupAddress.vue; CopyAddressButton.vue |
| Fields Client ID, Client Secret (optional) | W:112-128 |
| Save button | E saveCredentials; CredentialsStep.vue:316-322 |
| Without secret sign in with a code; with secret one-tap | W:103,126; SC:126-140 |
| Use the shared NomNomzBot app, no fields, completes step | E useShared; W:129-136; SC:348-366; W:92 |
| Only a saved decision completes the step | W:88-92; SC:226-230 (IsAppDecisionRecordedAsync) |
| Bot step optional; skip and broadcaster account acts as bot | W:140-147 |
| Sign in to Twitch as the bot account first; approve chat scopes | W:148-149 |
| Authorize button opens Twitch in new tab, waiting text | BotAccountStep.vue:171-180,199-213; E botAuthorize, botWaiting |
| Connected: name, step completes | BotAccountStep.vue:183-187,196-198; E botConnected; W:143 |
| Link with copy button for another browser or profile | BotAccountStep.vue:216-219; E botOtherProfile |
| Spotify/Discord/YouTube: Client ID + Client Secret both required | W:178-182,203-207,228-232; CredentialsStep.vue canSave |
| What each turns on | W:162,187,212 |
| Where the address goes, links to make the app | W:166-171,191-196,216-221 |
| Finish card lists Done / Not set | SetupView.vue:95-104; E done, notSet |
| Event feed check, sign-in-first text | EventFeedHealth.vue:393-395; E feed.title, feed.signInFirst |
| Finish setup button opens dashboard | SetupView.vue:47-50,117-119; SC:469-480 |
| Unreachable message and Try again | SetupView.vue:69-72; E unreachable, retry |
| Check the container with docker compose ps; row shows healthy | docker-compose.lite.yml:35 (container_name nomnomzbot-lite), 60-63 (healthcheck); docker-compose.yml (bot service) |
| Save error text | CredentialsStep.vue:333-335; E saveFailed |
| Finish error text | SetupView.vue:106-108; E finish.failed |
