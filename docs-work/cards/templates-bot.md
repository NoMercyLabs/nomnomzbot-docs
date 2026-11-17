Route: /reference/templates/bot
Reader: A streamer or moderator who knows how to edit a command reply and use template braces, and needs to include bot information or a command list in a reply.
Type: lookup
Arrives-with: Which helper and arguments do I use to include bot information or a command list in a reply?
Goal: Choose a supported helper form and understand the value it produces in this reply.
Success: The reader can select a documented form, supply its arguments and predict its result or fallback in the stated context.
Application-case: A help command should list usable commands without confusing the bot account name with the channel name.
Prerequisites: A reply field that supports templates, and the ability to edit it; the template basics taught in /reference/commands/variables-and-templates.
Project-root: .
Built-root: dist
Rendered: dist/reference/templates/bot/index.html
Voice: docs-work/voice.md
Must know:
- syntax | The supported helper forms and required arguments needed to include bot information or a command list in a reply. | ../../../../nomnomzbot/server/src/NomNomzBot.Infrastructure/Platform/Templating/Helpers/Bot/BotTemplateHelpers.cs
- result | The result, fallback and units of each documented helper, so the author can predict the reply. | ../../../../nomnomzbot/server/src/NomNomzBot.Infrastructure/Platform/Templating/Helpers/Bot/BotTemplateHelpers.cs
- context | The contexts in which the documented helpers are available, so a working example can be placed in the correct reply field. | ../../../../nomnomzbot/server/src/NomNomzBot.Application/Abstractions/Templating/TemplateHelperRegistry.cs
- identity | Distinguish the shared bot name from the channel name and speaking-account moderator status. | ../../../../nomnomzbot/server/src/NomNomzBot.Infrastructure/Platform/Templating/Helpers/Bot/BotIdentityHelpers.cs
- commands | Choose an enabled command list and understand role filtering and omitted regex triggers. | ../../../../nomnomzbot/server/src/NomNomzBot.Infrastructure/Platform/Templating/Helpers/Bot/BotCommands.cs
- uptime | Distinguish bot application uptime from channel loading and stream duration. | ../../../../nomnomzbot/server/src/NomNomzBot.Infrastructure/Platform/Templating/Helpers/Bot/BotUptimeHelpers.cs
Moves elsewhere:
- none
Checks:
- build: ["cmd", "/c", "yarn", "build"]
