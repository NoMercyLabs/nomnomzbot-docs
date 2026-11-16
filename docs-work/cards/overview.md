Route: /reference/overview
Reader: A streamer or moderator who knows what a stream bot does and is deciding how to begin with NomNomzBot.
Type: concept
Arrives-with: How does NomNomzBot fit into my stream, and where do I start?
Goal: How does NomNomzBot fit into my stream, and where do I start.
Success: The reader can choose the sign-in or self-hosting path and find the guide section for their first task.
Application-case: A moderator is invited to help an existing channel and wants to know whether they need to install their own bot.
Prerequisites: none
Project-root: C:\Projects\NoMercyLabs\nomnomzbot-docs\.claude\worktrees\finish
Built-root: dist
Rendered: dist/reference/overview/index.html
Voice: docs-work/voice.md
Must know:
- setup | The distinction between the bot, its dashboard and the channel it serves. | ../../../../nomnomzbot/dashboard/src/layouts/dashboard/navigation.ts
- moderator-signin | A moderator or viewer sign-in opens a session bound to no channel; it never creates or onboards one. | ../../../../nomnomzbot/server/src/NomNomzBot.Infrastructure/Identity/AuthService.cs:340-389
- moderator-roster | The broadcaster's sign-in fires the onboarding seed, which copies the channel's Twitch moderator list into ChannelModerators. | ../../../../nomnomzbot/server/src/NomNomzBot.Infrastructure/Identity/AuthService.cs:643-665
- moderator-channel | A moderator who owns no channel reaches a channel only through its ChannelModerators row; the moderated list is empty for them. | ../../../../nomnomzbot/server/src/NomNomzBot.Infrastructure/Identity/ChannelService.cs:278-284
- behavior | The available starting paths and the plain rule about using and sharing the software. | ../../../../nomnomzbot/LICENSE
Moves elsewhere:
- none
Checks:
- build: ["cmd", "/c", "yarn", "build"]
