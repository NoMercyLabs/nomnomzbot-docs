Route: /reference/getting-started/bot-account
Type: concept
Reader: A streamer who already knows what a stream bot does, is new to NomNomzBot, runs it in their own Twitch channel as broadcaster, and wonders from which account the bot's chat lines will come and whether they need to make a second account first.
Arrives-with: Whose name will the bot type under in my chat, and do I have to create a bot account before I can test a reply?
Goal: Know which account the bot uses now, and choose to keep it, add a marker to its lines, or add a separate bot account later.
Success: The streamer can say which of the three accounts types in their chat and, when it is their own account, sees the chosen marker in front of the next bot line.
Application-case: A streamer who connected a separate bot account for the channel sets a Bot line marker and finds that the marker never shows in chat, then sees the bot lose the moderator role and a notice appear.
Prerequisites: Signed in as the broadcaster with Twitch connected; changing the marker needs access to the Bot basics settings page.
Project-root: C:\Projects\NoMercyLabs\nomnomzbot-docs\.claude\worktrees\finish
Built-root: dist
Rendered: dist/reference/getting-started/bot-account/index.html
Voice: docs-work/voice.md
Must know:
- order | The bot sends chat lines from the channel's own bot account when connected, else the connected shared platform bot, else the streamer's own account | ../../../../nomnomzbot/server/src/NomNomzBot.Infrastructure/Chat/HelixChatProvider.cs:411-414
- own-bot | The channel's own bot account, when connected, turns the marker off and is the account the moderator notice checks first, else the shared bot | ../../../../nomnomzbot/server/src/NomNomzBot.Application/Identity/Services/IChannelTwitchBotResolver.cs:16-19
- own-account-default | On a self-hosted bot with no dedicated account, the bot types as the streamer's own account | ../../../../nomnomzbot/server/src/NomNomzBot.Infrastructure/Chat/ChatPlatformRouter.cs:51-56
- marker-rule | The marker is one to four characters with no spaces; an empty field clears it | ../../../../nomnomzbot/server/src/NomNomzBot.Infrastructure/Identity/ChannelService.cs:558-570
- marker-only-own | The marker is added only when no dedicated bot account is connected, so a separate bot account does not use the marker | ../../../../nomnomzbot/server/src/NomNomzBot.Infrastructure/Chat/ChatPlatformRouter.cs:50-60
- marker-label | The setting is labeled Bot line marker and is shown before lines the bot posts through your own account | ../../../../nomnomzbot/dashboard/src/views/dashboard/settings/i18n/en.json:88-91
- mod-notice | When a dedicated bot account is not a moderator, a notice says BotName is not a moderator in your channel and tells you to type /mod BotName | ../../../../nomnomzbot/dashboard/src/i18n/locales/en.json:1163-1164
Moves elsewhere:
- none
Checks:
- build: ["cmd", "/c", "yarn", "build"]
