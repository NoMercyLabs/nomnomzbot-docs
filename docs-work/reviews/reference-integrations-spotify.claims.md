# Claims: /reference/integrations/spotify

Product repo paths are relative to the product root. Page en.json: `dashboard/src/views/dashboard/settings/integrations/i18n/en.json`. Shell en.json: `dashboard/src/i18n/locales/en.json`.

| # | Claim | Evidence |
| --- | --- | --- |
| 1 | Page **Integrations** under **Settings** | shell en.json:839 frame.nav.settings, :887 settingsPages.integrations; IntegrationsView.vue:238; route.ts:11-16 (navMode settings) |
| 2 | List titled **Connected services** with a row per service, Spotify included | page en.json:5; IntegrationsView.vue:241-260 |
| 3 | Moderator and up may see the page | route.ts:15 action integration:read; ActionDefinitionSeeder.cs:401 (Mod floor) |
| 4 | Editor and Broadcaster may add the app, connect, disconnect | ActionDefinitionSeeder.cs:402 (Editor floor); IntegrationsView.vue:267,286; IntegrationOAuthController.cs:78,153 |
| 5 | Settings sidebar entry shows to the Broadcaster | navigation.ts:286-290 (setup:write); ActionDefinitionSeeder.cs:437 (Broadcaster) |
| 5a | Moderator, Lead moderator, Editor open the page by direct link `/app/u/<channelName>/settings/integrations` | dashboard/src/router/dashboard.ts:146-151 (channel routes); route.ts:11 path settings/integrations, :15 integration:read |
| 5b | Create the app at `https://developer.spotify.com/dashboard`, add the redirect address, copy Client ID and Client secret | server/i18n/strings/values/strings.xml:136-138 |
| 6 | Spotify always uses the channel's own app; no shared app fallback | ChannelCredentialsResolver.cs:44-62, 123-124 (FallsBackToSharedApp false for spotify); ChannelSpotifyCredentialsService.cs:127-129 |
| 7 | Redirect address is `<origin>/api/v1/integrations/spotify/callback` | IntegrationOAuthService.cs:151, 537-538; IntegrationOAuthController.cs:117 |
| 8 | No app: row says **No Spotify app yet**, dialog **Your own Spotify app** opens by itself only when no app is saved AND Spotify is not connected | SpotifyCredentialsPanel.vue:65-72, 111-118; page en.json:568,575 |
| 9 | Button **Add your Spotify app** | SpotifyCredentialsPanel.vue:86-93; page en.json:579 |
| 10 | Fields **Client ID**, **Client secret**, button **Save** | SpotifyCredentialsPanel.vue:95-109,172; page en.json:581-584 |
| 11 | Save closes dialog, toast "Your Spotify app is saved.", row shows **Your own Spotify app** / **Client ID ending in** last 4 | SpotifyCredentialsPanel.vue:34,65-78,121-131; page en.json:571-572,587 |
| 12 | Both fields required | ChannelSpotifyCredentialsService.cs:63-70 |
| 13 | Secret stored sealed, never shown again; placeholder text for a stored secret; **Edit** label | ChannelSpotifyCredentialsService.cs:88-92, 46-47; SpotifyCredentialsPanel.vue:86-88,105-107; page en.json:569,577,583 |
| 14 | **Connect** opens Spotify sign-in in a new window; a blocked window sends the dashboard tab itself; the reader ends back on the dashboard | IntegrationsView.vue:162-176; dashboard/src/composables/useConnectWindow.ts:39-43; dashboard/src/lib/oauthPopup.ts:31-40; IntegrationOAuthController.cs:136-145 (oauth-relay) |
| 15 | Connected row shows **Connected** and **as** account | IntegrationsView.vue:94-113,262-264; page en.json:527,532 |
| 16 | **Details** lines **Permission sets**, **Can do**, **Last sync** | IntegrationsView.vue:268-283; page en.json:533-536 |
| 17 | Connect asks for 2 of the 3 Spotify permission sets: Control playback, Read your library, with their meaning; the third (spotify.streaming) is requested by no dashboard code (grep "spotify.streaming" in dashboard/src: 0 hits), so the page leaves it out | OAuthProviderRegistry.cs:70-90; page en.json:538-539 |
| 18 | Connect asks for playback + library | dashboard/src/api/integrations.ts:38 |
| 19 | Can do shows premium only once observed | IntegrationOAuthService.cs:440-442; page en.json:554 |
| 20 | **Sign in again** state; **Reconnect** label on connected row | IntegrationsView.vue:89-104,152-156; page en.json:529,557 |
| 21 | Disconnect dialog **Disconnect Spotify?** lists what stops working with counts | IntegrationsView.vue:198-213,322-331; page en.json:562-564; IntegrationBlastRadiusService.cs:76 |
| 22 | After disconnect toast "Spotify is disconnected.", row **Not connected** | IntegrationsView.vue:215-228; page en.json:528,561 |
| 23 | Disconnect leaves the app saved | IntegrationOAuthController.cs:151 (vault entry only); ChannelSpotifyCredentialsService.cs:104-123 is a separate call |
| 24 | **Remove my app**, toast "Your Spotify app is removed.", row back to No app | SpotifyCredentialsPanel.vue:118-127,150-155; page en.json:585,588; ChannelSpotifyCredentialsService.cs:104-123 |
| 25 | Unreadable login text | IntegrationsView.vue:100-101; page en.json:530 |
