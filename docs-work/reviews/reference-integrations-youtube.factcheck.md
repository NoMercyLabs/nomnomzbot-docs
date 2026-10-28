# Fact check: src/content/reference/en/integrations/youtube.mdx
Verdict: PASS
Reviewed: src/content/reference/en/integrations/youtube.mdx
Reviewed-SHA: fe8ebcf75a0a81cd

Round 2. Product repo master (includes b6204c36c). Paths relative to C:\Projects\NoMercyLabs\nomnomzbot.

## What changed since round 1 (each checked)

- Line 41, Connected row: "The row shows "as" and the account name." IntegrationsView.vue:110-112 accountOf; integrations en.json "account": "as {account}". Supported.
- Line 58: "A song request ended or failed | The bot starts the next song request." YouTubePlayerReportService.cs:84-94 feeds Ended/Error to the engine; the director starts the next request. The play-once exception (:88) is not a song request; the resume exception (:89-91) is a resume of an interrupted video. Round 1 finding is fixed.
- Cut: "a report from a second overlay is refused" and the account-changing-actions sentences. Cutting loses no true claim; line 60 "Only one overlay plays ... at a time" stays supported (YouTubePlayerReportService.cs:48-60).
- Line 67: "It counts the pipelines that use music actions, because they stop working." IntegrationBlastRadiusService.cs:29-40 MusicActionTypes, :77 ["youtube"] = MusicActionTypes; en.json confirm.description "These parts of your channel stop working until you connect it again." Supported. Link target src/content/reference/en/commands/pipelines.mdx exists in the docs repo.
- All other lines (1-40, 42-57, 59-61, 63-66, 68-76) read the same in meaning as round 1.

## Cut claims from the writer return (checked)

- "Signed in only" for YouTube: correctly left out. IntegrationOAuthService.cs:445-450 sets LoginOnly only for Kick.
- Pause/resume/seek/skip to the overlay: only a class comment (YouTubeMusicProvider.cs:36-40); correctly left out.
- "Sign in again" for a missing Manage your channel set: NeedsReauth comes from IntegrationStatus.RequiresReconnect (IntegrationOAuthService.cs:443-444), not from scopes; correctly left out.

## Product defects

- dashboard/src/views/dashboard/stream/i18n/en.json:55 "Your stream info goes to every platform you connect." The writer reports StreamController.cs:239-252 updates only the channel's own platform. I did not open that file (not checked). The page does not repeat the text.
- IntegrationStatusService.cs catalogue `["youtube"] = ("YouTube", "Video", "YouTube live stream management and stats")`: no stats feature traced by the writer; not checked further by me. The page does not quote it.

## Claims

| Claim | Supported by | Status |
| --- | --- | --- |
| YouTube is a stream platform beside Twitch | dashboard/src/api/vocabulary.ts:18 | supported |
| Moderator, Lead moderator see the row and status | IntegrationOAuthController.cs:56 integration:read; ActionDefinitionSeeder M("integration:read", Mod); settings/integrations/route.ts:21 | supported |
| Editor, Broadcaster connect, reconnect, disconnect | IntegrationOAuthController.cs:78 integration:write; seeder M("integration:write", Editor); IntegrationsView.vue:286; PlatformRows.vue:90 | supported |
| Connect opens Google's sign-in in a new window | useConnectWindow.ts:21-40 openOAuthPopup; OAuthProviderRegistry.cs:216-239 | supported |
| Asks one permission set, Manage your channel | integrations.ts:40 youtube: 'youtube.manage'; en.json scopeSetNames.youtube_manage | supported |
| On accept the window closes; row shows Connected with account name | OAuthRelayController.cs:163 window.close(); IntegrationsView.vue:94-112 | supported |
| Stream page panel "Where it goes" lists Twitch, Kick, YouTube, X Live | stream en.json:54,63; PlatformRows.vue:71-120 | supported |
| YouTube row shows Connected with account, or Not connected | PlatformRows.vue:77-88; stream en.json:57-58 | supported |
| Connect beside Not connected for those who may change; asks "Open YouTube to connect?" | PlatformRows.vue:88-107; stream en.json:59-60 | supported |
| Settings > Integrations, list "Connected services" with YouTube row | integrations en.json:5; IntegrationStatusService.cs catalogue ["youtube"] | supported |
| Connected: the row shows "as" and the account name | IntegrationsView.vue:110-112; en.json account | supported |
| Not connected | IntegrationsView.vue:97-98; en.json notConnected | supported |
| Sign in again = saved login no longer works | IntegrationsView.vue:103-104; IntegrationOAuthService.cs:443-444 | supported |
| Sign in again (the saved login is unreadable) | IntegrationsView.vue:100-101; en.json decryptFailed | supported |
| Details shows Permission sets: Manage your channel | IntegrationsView.vue:124-130; en.json scopeSets, youtube_manage | supported |
| Reconnect signs in again | en.json reconnect; IntegrationsView.vue:308 | supported |
| Music player can play YouTube videos | vocabulary.ts:35 | supported |
| Overlay plays the video and reports what plays and play/pause/ended/failed | IYouTubePlayerReportService.cs:16-31; YouTubeMusicProvider.cs:35-41 | supported |
| Play or pause report updates now playing | YouTubePlayerReportService.cs:108-118, :167-182 | supported |
| A song request ended or failed: bot starts the next song request | YouTubePlayerReportService.cs:84-94 | supported |
| Only one overlay plays the channel's YouTube music at a time | YouTubePlayerReportService.cs:48-60 NOT_PLAYER_OWNER | supported |
| Song requests from YouTube do not need the connection | YouTubeMusicProvider.cs:28-30 | supported |
| Disconnect dialog "Disconnect YouTube?" | IntegrationsView.vue:324; en.json confirm.title | supported |
| Dialog counts the pipelines that use music actions, which stop working | IntegrationBlastRadiusService.cs:29-40, :77; en.json confirm.description | supported |
| Toast "YouTube is disconnected.", row Not connected | IntegrationsView.vue:215-222; en.json disconnected | supported |
