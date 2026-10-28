# Claims: /reference/getting-started/bot-account

Paths are relative to C:\Projects\NoMercyLabs\nomnomzbot.

| Claim | Source |
| --- | --- |
| Order 1: the channel's own active bot account is picked first | server/src/NomNomzBot.Infrastructure/Identity/ChannelTwitchBotResolver.cs:31-41 |
| Order 2: else the shared bot, only when it is connected (ConnectionId not null) | server/src/NomNomzBot.Infrastructure/Identity/ChannelTwitchBotResolver.cs:43-53 |
| Order 3: neither exists, the streamer's own account speaks | server/src/NomNomzBot.Application/Identity/Services/IChannelTwitchBotResolver.cs:18-20 |
| Self-host uses the streamer's own account until a bot registers; no bot account required | server/src/NomNomzBot.Api/Controllers/V1/ChannelBotController.cs:40-42, 149-153 |
| Own bot account is connected on the White-label bot page | dashboard/src/views/dashboard/settings/white-label-bot/route.ts:17; dashboard/src/i18n/locales/en.json:885 ("White-label bot") |
| Badges **Connected** / **Shared bot** | dashboard/src/views/dashboard/settings/white-label-bot/i18n/en.json:9-10 |
| Bot types in one voice; speaks aloud only via TTS | ledger rule (docs-work/ledger.md:16); chat send path ChatPlatformRouter.cs:240-270 sends every bot line through one platform send. Wording is the ledger's. |
| Sidebar **Bot basics** | dashboard/src/i18n/locales/en.json:882 |
| **Bot line marker** label and help text | dashboard/src/views/dashboard/settings/i18n/en.json:89-90 |
| 1 to 4 characters, no whitespace, empty clears | server/src/NomNomzBot.Infrastructure/Identity/ChannelService.cs:562-571 |
| **Save**, "Basics saved." | dashboard/src/views/dashboard/settings/i18n/en.json:80-82 |
| Marker applied only when no dedicated bot account | server/src/NomNomzBot.Infrastructure/Chat/ChatPlatformRouter.cs:523-540, 547-553; comment 50-59 |
| Lines sent as the broadcaster never get the marker | server/src/NomNomzBot.Infrastructure/Chat/ChatPlatformRouter.cs:247-251 |
| Own account needs no moderator role | server/src/NomNomzBot.Application/Identity/Services/IBotModeratorStatusReader.cs:17-18 (NoDedicatedBot) |
| Notice title and message text | dashboard/src/i18n/locales/en.json:1142-1143 |
| Notice shows only when the bot is NotModerator | server/src/NomNomzBot.Infrastructure/Notifications/Sources/BotNotModeratorSource.cs:43-52 |
| Notice clears when the role is back (status tracked from role events and reconcile) | server/src/NomNomzBot.Application/Identity/Services/IBotModeratorStatusService.cs:17-38; BotNotModeratorSource.cs:43-52 |
| Shared bot re-grant with the broadcaster's token | server/src/NomNomzBot.Infrastructure/Identity/BotModeratorGrantService.cs:47-75 |
| Missing manage-moderators scope is recorded as a scope gap shown in the inbox | server/src/NomNomzBot.Infrastructure/Identity/BotModeratorGrantService.cs:86-92, 26-30 |
