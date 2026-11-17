Route: /reference/integrations/discord
Reader: A streamer or moderator who knows stream bots, has signed in to the selected channel, and is new to this feature in NomNomzBot.
Type: task
Arrives-with: How do I link a Discord server and enable the features I want?
Goal: How do I link a Discord server and enable the features I want.
Success: The intended Discord server is linked and the configured notification or role behavior is visible.
Application-case: A streamer wants live notifications in one channel and a live role without changing members' other roles.
Prerequisites: Broadcaster links an authorized Discord server; operator-provided Discord app and bot token; destination channel permissions. Lead Moderator can configure rules and roles. Live role requires broadcaster Twitch-to-Discord identity link and an assignable role.
Project-root: .
Built-root: dist
Rendered: dist/reference/integrations/discord/index.html
Voice: docs-work/voice.md
Must know:
- setup | The Discord account, server permissions and bot setup required before linking a server. | ../../../../nomnomzbot/dashboard/src/views/dashboard/discord/DiscordView.vue
- behavior | Configure a no-ping notification, understand Preview saves and Post button sends immediately, verify real output, and stop notifications or roles with the relevant control. | ../../../../nomnomzbot/server/src/NomNomzBot.Api/Controllers/V1/DiscordController.cs
Moves elsewhere:
- none
Checks:
- build: ["cmd", "/c", "yarn", "build"]
