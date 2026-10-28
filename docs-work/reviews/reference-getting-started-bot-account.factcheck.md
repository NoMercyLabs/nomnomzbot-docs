# Fact check: src/content/reference/en/getting-started/bot-account.mdx
Verdict: PASS
Reviewed: src/content/reference/en/getting-started/bot-account.mdx
Reviewed-SHA: 97b48435f38a35b2

Round 2, against product master b6204c36c. Paths are relative to the product repo.

What was checked in this round: lines 53-55 now say BotName and explain it. The notice keys are `attention_bot_not_moderator_title` and `attention_bot_not_moderator_message` (dashboard/src/i18n/locales/en.json:1142-1143). The server sends them with `botName` = the bot account's username (server/src/NomNomzBot.Infrastructure/Notifications/Sources/BotNotModeratorSource.cs:64-66). The page quotes both strings word for word, with BotName in place of `{botName}`, and line 55 says what BotName stands for. This is true.

Notes (not failures):
- The marker length check counts UTF-16 code units (server/src/NomNomzBot.Infrastructure/Identity/ChannelService.cs:567). A common emoji is 2 units and fits. A long emoji sequence over 4 units is refused. "One to four characters, such as `*` or an emoji" holds for the examples given.
- The shared-bot self-heal runs only when the shared bot is the configured hosted bot and a backoff allows it (BotModeratorGrantService.cs:57-64). The page says "tries", which covers this.

Product defects: none found.

| Claim | Supported by | Status |
| --- | --- | --- |
| Order 1: the channel's own active bot account | server/src/NomNomzBot.Infrastructure/Identity/ChannelTwitchBotResolver.cs:31-41 | Supported |
| Order 2: the shared bot, only when connected | ChannelTwitchBotResolver.cs:43-53 (`ConnectionId != null`) | Supported |
| Order 3: neither exists, the streamer's own account | server/src/NomNomzBot.Application/Identity/Services/IChannelTwitchBotResolver.cs:17-18 | Supported |
| A bot account is never required; self-host uses the streamer's own account until a bot registers | server/src/NomNomzBot.Api/Controllers/V1/ChannelBotController.cs:40-41, 149-153 | Supported |
| Own bot is connected on the White-label bot page; label "White-label bot" | dashboard/src/i18n/locales/en.json:884 | Supported |
| Badges **Connected** / **Shared bot** | dashboard/src/views/dashboard/settings/white-label-bot/i18n/en.json:9-10 | Supported |
| Every line uses the channel's one bot voice; spoken only through TTS | project rule bot-speaks-in-one-voice; ChatPlatformRouter.cs:240-251 single send path | Supported (rule wording) |
| Sidebar **Settings** > **Bot basics** | dashboard/src/i18n/locales/en.json:882 | Supported |
| Label **Bot line marker** | dashboard/src/views/dashboard/settings/i18n/en.json:89 | Supported |
| One to four characters, no spaces, empty for none | server/src/NomNomzBot.Infrastructure/Identity/ChannelService.cs:563-570; settings i18n en.json:90 | Supported (see note) |
| **Save**, "Basics saved." | dashboard/src/views/dashboard/settings/i18n/en.json:80, 82 | Supported |
| Marker only when the bot types from your own account; skipped with a separate bot account | server/src/NomNomzBot.Infrastructure/Chat/ChatPlatformRouter.cs:533-536, 547-568 | Supported |
| A line sent as yourself never gets the marker | ChatPlatformRouter.cs:247-251 | Supported |
| Your own account needs no moderator role | server/src/NomNomzBot.Application/Identity/Services/IBotModeratorStatusReader.cs:17-18 | Supported |
| Notice title "BotName is not a moderator in your channel" | dashboard/src/i18n/locales/en.json:1142; BotNotModeratorSource.cs:64-66 | Supported |
| Notice message "Type /mod BotName in your Twitch chat. Twitch limits what a bot without the moderator role can do." | dashboard/src/i18n/locales/en.json:1143 | Supported |
| BotName is the name of your bot account | BotNotModeratorSource.cs:66 (`botName` = bot.Username) | Supported |
| Notice shows only while NotModerator; clears when moderator again | BotNotModeratorSource.cs:44-53 | Supported |
| Shared bot gets the role back with your own Twitch sign-in | server/src/NomNomzBot.Infrastructure/Identity/BotModeratorGrantService.cs:27-28, 47-81 | Supported |
| Missing manage-moderators permission is asked for in the notices | BotModeratorGrantService.cs:28-29, 86-92 | Supported |
