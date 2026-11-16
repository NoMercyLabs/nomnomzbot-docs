# Current independent fact check

Verdict: PASS
Reviewed: src/content/reference/en/integrations/spotify.mdx
Reviewed-SHA: 6baffbcd331924968f8cf0f9703b87480108829a2e8d79be7a7d521cad3257c5
Reviewed-SHA256: 6baffbcd331924968f8cf0f9703b87480108829a2e8d79be7a7d521cad3257c5
Reviewed-Date: 2026-11-05
Reviewer: independent media-section reviewer
Product: 54da8b6318de63b5205a0ff8db35e0b9045dd959 plus preserved current music UI edits

The full article was read in sidebar order. Consequential defaults, permissions, prerequisites, state lifetime and effects were traced against current source; repaired findings were re-read before this verdict. This is source verification, not a live-channel or visible/audible output test.

- server/src/NomNomzBot.Infrastructure/Integrations/ChannelSpotifyCredentialsService.cs:39-140 requires both app fields, seals the secret and permits shared fallback. dashboard/src/api/integrations.ts:37-44 requests playback+library; server/src/NomNomzBot.Infrastructure/Integrations/OAuthProviderRegistry.cs:64-92 defines streaming separately.
- server/src/NomNomzBot.Infrastructure/Music/SpotifyMusicProvider.cs:546-586 refuses embedded tokens without streaming; Content/Widgets/Assets/music_player.vue:294-414 registers a selectable device without transferring playback.
- External requirements verified 2026-11-05: https://developer.spotify.com/documentation/web-api/concepts/quota-modes (Premium app owner, 5 users and allowlist); https://developer.spotify.com/documentation/web-api/concepts/redirect_uri (exact match/loopback exceptions).

Source paths without a repeated layer prefix in a bullet are relative to its preceding Infrastructure or dashboard scope. The section report records method, repaired findings, external sources and remaining product limitations: docs-work/overhaul/review-automation-media-integrations.md.

## Historical evidence

Older hashes, verdicts and values below are retained for history and are not the current review.

# Fact check: src/content/reference/en/integrations/spotify.mdx
Verdict: PENDING
Reviewed: src/content/reference/en/integrations/spotify.mdx
Reviewed-SHA: 6baffbcd331924968f8cf0f9703b87480108829a2e8d79be7a7d521cad3257c5

## 2026-11-05 author source verification

Author source audit complete; independent verdict pending. This hash binds the current text, not the historical PASS below. The article was read in full and revised toward the user's explainer style while preserving precise reference detail. SpotifyCredentialsPanel.vue; ChannelSpotifyCredentialsService.cs; IntegrationOAuthService.cs; OAuthProviderRegistry.cs; integrations.ts; SpotifyMusicProvider.cs. Shared-app fallback exists; browser streaming permissions remain a separate unresolved authorization path.

The section inventory and known implementation gaps are in [automation-media-integrations.md](../overhaul/automation-media-integrations.md). This is source verification, not a live-channel execution claim. Independent review must account for product changes after the original author pass at b12f4f696.

## Historical review (SHA a3deb528dc6c017e)

Historical verdict: PASS. The earlier evidence below is retained as history and is superseded where the current article or source changed.

Round 2. Product paths are relative to C:\Projects\NoMercyLabs\nomnomzbot (master, includes b6204c36c). Page en.json = dashboard/src/views/dashboard/settings/integrations/i18n/en.json. View = dashboard/src/views/dashboard/settings/integrations/IntegrationsView.vue. Panel = dashboard/src/views/dashboard/settings/integrations/components/SpotifyCredentialsPanel.vue.

## What this round checked

- Round 1 finding 1 (dialog auto-open) is fixed at lines 40-41. The Panel watch block opens the dialog only when no app is saved and Spotify is not connected.
- Round 1 finding 2 (popup blocked) is fixed at line 58. useConnectWindow.ts falls back to `window.location.assign(url)` when `openOAuthPopup` returns false (oauthPopup.ts:37-40).
- The new direct-link lines 17-19 match the code. channelRoutes.ts:26 `channelPrefix = '/app/u/'`. dashboard.ts:148-151 mounts `/app/u/:channelName` with `channelVariants(dashboardPages)`. dashboard.ts:103 adds `dashboardSettingsRoutes` to the page list. settings/route.ts:112 includes settingsIntegrationsRoute. integrations/route.ts sets path `settings/integrations` and action `integration:read`.
- The developer-site steps at lines 27-34 match server/i18n/strings/values/strings.xml:136-138.
- The "Play in the browser" row is cut. Connect asks for two sets, which dashboard/src/api/integrations.ts:38 confirms.
- The plain "Sign in again" label (line 80) shows only for NeedsReauth. View labelOf checks decryptFailed first and gives it its own text. AuthEnums.cs:118-119 RequiresReconnect covers NeedsReauth or DecryptFailed. The unreadable case is in Troubleshooting, so the two causes are not mixed up.
- Line 51 now says "stored encrypted". ChannelSpotifyCredentialsService.cs:88 runs ProtectAsync, and the Panel secret field is never filled in.
- Line 60 says "You are back on the dashboard". oauthPopup.ts:31 says the relay page closes the window. A blocked window means the same tab comes back through the callback.
- Every other sentence keeps the meaning it had in round 1, and every claim below rests on a line I opened.

## Product defects

- Dead UI branch: the Panel shows the "shared Spotify app" strings (en.json spotify.usingShared, useOwn, clearShared, clearedShared, descriptionShared, sharedDetail) when hasSharedApp is true. For Spotify the server never returns true (ChannelSpotifyCredentialsService.cs:127-129, ChannelCredentialsResolver.cs:123-124). This is not filed (docs lane).
- Map row Job says "with the bot's credentials or your own". The code allows only the channel's own app. This is a map fix.

## Claims

| Claim | Supported by | Status |
| --- | --- | --- |
| Spotify is on Integrations under Settings | integrations/route.ts (navMode settings); View PageHeader frame.nav.settingsPages.integrations | supported |
| Lets the bot read and control playback | OAuthProviderRegistry.cs:62-91 | supported |
| Moderator, Lead moderator see page and status | route.ts integration:read; ActionDefinitionSeeder.cs:401 | supported |
| Editor, Broadcaster add app, connect, reconnect, disconnect | ActionDefinitionSeeder.cs:402; View `can('integration:write')` | supported |
| Only the Broadcaster sees Settings in the sidebar | navigation.ts:286-290 setup:write; ActionDefinitionSeeder.cs:437 | supported |
| Others open it by direct link `/app/u/<channel>/settings/integrations` | channelRoutes.ts:26; dashboard.ts:103, 148-151; settings/route.ts:112 | supported |
| Always the channel's own app | ChannelCredentialsResolver.cs:52-62, 123-124 | supported |
| Create app at developer.spotify.com/dashboard, add redirect, copy Client ID and secret | strings.xml:136-138 | supported |
| Redirect `<origin>/api/v1/integrations/spotify/callback` | IntegrationOAuthService.cs:151, 537-538; IntegrationOAuthController.cs:117 | supported |
| Connected services list with a Spotify row | en.json title; IntegrationStatusService.cs:53 | supported |
| No app: row says No Spotify app yet | Panel title; en.json spotify.noApp | supported |
| Dialog opens by itself when no app and not connected | Panel watch block | supported |
| Add your Spotify app button | Panel editLabel; en.json spotify.setUp | supported |
| Client ID, Client secret, Save | Panel fields; en.json | supported |
| Save closes dialog, toast "Your Spotify app is saved." | Panel submit | supported |
| Row says Your own Spotify app; Client ID ending in last four | Panel title, detail slice(-4); en.json ownApp, ownDetail | supported |
| Both fields required | ChannelSpotifyCredentialsService.cs:63-70 | supported |
| Secret stored encrypted, never shown again | ChannelSpotifyCredentialsService.cs:88; Panel secret field | supported |
| Edit to change the secret | Panel editLabel when an own app is saved; en.json spotify.edit | supported |
| Connect opens a new window; a blocked window sends the tab to Spotify | useConnectWindow.ts; oauthPopup.ts:31-40 | supported |
| Row shows Connected and account after "as" | View labelOf, accountOf; en.json connected, account | supported |
| Details: Permission sets, Can do, Last sync | View CollapsibleContent; en.json | supported |
| Can do = observed, such as use Spotify Premium features | IntegrationOAuthService.cs:440-442; en.json capabilityNames.premium | supported |
| Connect asks for Control playback and Read your library | api/integrations.ts:38; OAuthProviderRegistry.cs:70-84; en.json scopeSetNames | supported |
| Sign in again: saved login no longer accepted; Reconnect | View labelOf, connectLabel; AuthEnums.cs:118-119 | supported |
| Disconnect dialog "Disconnect Spotify?" with counts | View askToLeave, ConfirmDialog; en.json confirm.title | supported |
| Toast "Spotify is disconnected."; Not connected | View confirmLeave; en.json disconnected, notConnected | supported |
| App stays saved after disconnect | View disconnect separate from Panel clear; ChannelSpotifyCredentialsService.cs:104-123 | supported |
| Remove my app, toast "Your Spotify app is removed.", No Spotify app yet | Panel remove(), removable=hasOwnApp; en.json clear, cleared | supported |
| Without the app, no connect | ChannelCredentialsResolver.cs:52-62 | supported |
| Troubleshooting unreadable-login text | View labelOf decryptFailed; en.json decryptFailed | supported |
