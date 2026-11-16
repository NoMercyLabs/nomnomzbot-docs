Route: /reference/templates/channel
Reader: A streamer or moderator who knows how to edit a command reply and use template braces, and needs to refer to the channel rather than the person invoking a command.
Type: lookup
Arrives-with: Which helper and arguments do I use to refer to the channel rather than the person invoking a command?
Goal: Choose a supported helper form and understand the value it produces in this reply.
Success: The reader can select a documented form, supply its arguments and predict its result or fallback in the stated context.
Application-case: A moderator uses a command that must link to the broadcaster's channel, not the moderator's own channel.
Prerequisites: A reply field that supports templates, and the ability to edit it; the template basics taught in /reference/commands/variables-and-templates.
Project-root: C:\Projects\NoMercyLabs\nomnomzbot-docs\.claude\worktrees\finish-c
Built-root: dist
Rendered: dist/reference/templates/channel/index.html
Voice: docs-work/voice.md
Must know:
- syntax | The supported helper forms and required arguments needed to refer to the channel rather than the person invoking a command. | ../../../../nomnomzbot/server/src/NomNomzBot.Infrastructure/Platform/Templating/Helpers/Stream/ChannelCountHelpers.cs
- result | The result, fallback and units of each documented helper, so the author can predict the reply. | ../../../../nomnomzbot/server/src/NomNomzBot.Infrastructure/Platform/Templating/Helpers/Stream/ChannelCountHelpers.cs
- context | The contexts in which the documented helpers are available, so a working example can be placed in the correct reply field. | ../../../../nomnomzbot/server/src/NomNomzBot.Application/Abstractions/Templating/TemplateHelperRegistry.cs
- identity | Use the channel login, display name and Twitch ID without substituting the invoking viewer. | ../../../../nomnomzbot/server/src/NomNomzBot.Infrastructure/Platform/Templating/Helpers/Legacy/LegacyTemplateHelpers.cs
- raids | Supply a channel login for raid counts and distinguish counts from the latest raid. | ../../../../nomnomzbot/server/src/NomNomzBot.Infrastructure/Platform/Templating/Helpers/Stream/ChannelRaidHelpers.cs
- discord | Use notification-only channel links and pictures in Discord templates. | ../../../../nomnomzbot/server/src/NomNomzBot.Infrastructure/Discord/DiscordChannelLinks.cs
Moves elsewhere:
- none
Checks:
- build: ["cmd", "/c", "yarn", "build"]
