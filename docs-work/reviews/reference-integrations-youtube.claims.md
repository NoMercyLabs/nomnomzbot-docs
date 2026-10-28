# Claims: /reference/integrations/youtube

Product repo paths are relative to the product root. Page en.json: `dashboard/src/views/dashboard/settings/integrations/i18n/en.json`. Stream en.json: `dashboard/src/views/dashboard/stream/i18n/en.json`.

| # | Claim | Evidence |
| --- | --- | --- |
| 1 | YouTube is a stream platform beside Twitch | dashboard/src/api/vocabulary.ts:18 streamPlatforms; vocabulary.ts:24-27 platformScopeSets |
| 2 | Moderator and up may see the rows | settings/integrations/route.ts action integration:read; ActionDefinitionSeeder.cs:401 (as on the Spotify claims, row 3) |
| 3 | Editor and Broadcaster may connect, reconnect, disconnect | IntegrationsView.vue `can('integration:write')` around the buttons; PlatformRows.vue `v-if="can('integration:write')"`; ActionDefinitionSeeder.cs:402 |
| 4 | Connect asks one permission set, Manage your channel | dashboard/src/api/integrations.ts:40 and vocabulary.ts:26 `youtube.manage`; page en.json:30 label |
| 5 | Connect opens Google's sign-in in a new window | OAuthProviderRegistry.cs YouTube() AuthorizeEndpoint accounts.google.com; IntegrationsView.vue open() -> useConnectWindow |
| 6 | After accept the row shows Connected and account name | IntegrationStatusService.cs:82-91; IntegrationsView.vue labelOf/accountOf; page en.json "connected", "account" |
| 7 | Stream page panel Where it goes lists Twitch, Kick, YouTube, X Live | PlatformRows.vue:19-21 CONNECTABLE, :71, :76, :115; stream en.json platforms.title, xlive |
| 8 | YouTube row shows Connected with account, or Not connected | PlatformRows.vue:77-88 |
| 9 | Connect beside Not connected, asks "Open YouTube to connect?" | PlatformRows.vue:89-107; stream en.json connectAsk, connect |
| 10 | Integrations under Settings; list Connected services has a YouTube row | IntegrationStatusService.cs:55 catalogue name "YouTube"; page en.json:5 title |
| 11 | Four status labels | IntegrationsView.vue labelOf (notConnected, decryptFailed, needsReauth, connected); page en.json:9-12. "Signed in only" (loginOnly) left out: not traced to a YouTube case |
| 12 | Details shows Permission sets: Manage your channel; Reconnect when connected | IntegrationsView.vue scopesOf, connectLabel; page en.json scopeSets, reconnect |
| 13 | Music player can play YouTube videos | vocabulary.ts:35 musicProviders includes youtube |
| 14 | The video plays in a music player overlay that reports its state | IYouTubePlayerReportService.cs:16-31; OverlayHub.cs:226-250 (music player source) |
| 15 | Play/pause report updates now playing | YouTubePlayerReportService.cs PublishAsync PlaybackStateChangedEvent (TrackName, IsPlaying) |
| 16 | A song request that ended or failed starts the next song request (scoped: play-once videos and a pending resume do not advance) | YouTubePlayerReportService.cs:84-94 (exceptions :88-91) |
| 17 | Only one overlay plays the YouTube music at a time | OverlayHub.cs:226-250 youtube.stop handoff to the displaced player; YouTubePlayerReportService.cs:48-60 NOT_PLAYER_OWNER |
| 18 | Song requests do not need the YouTube connection | YouTubeMusicProvider.cs:28-30 search and resolve without per-user OAuth |
| 19 | Disconnect dialog Disconnect YouTube? counts pipelines that use music actions; toast; Not connected | IntegrationsView.vue askToLeave/confirmLeave; page en.json confirm.title, disconnected; IntegrationBlastRadiusService.cs:77 `["youtube"] = MusicActionTypes`; IntegrationsController.cs:253-277 revoke |

Round 2 sweep: 4 of 4 behavior rows in the music section checked for overstatement (now playing, song request hand-over, one overlay, no connection for requests); 1 rescoped (row 16). Cut: the account-changing actions sentence (place where they are set not traced) and the "second overlay refused" sentence (no visible result).
