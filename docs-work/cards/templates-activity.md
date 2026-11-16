Route: /reference/templates/activity
Reader: A streamer or moderator who knows how to edit a command reply and use template braces, and needs to choose between current chat activity and a stream total.
Type: lookup
Arrives-with: Which helper and arguments do I use to choose between current chat activity and a stream total?
Goal: Choose a supported helper form and understand the value it produces in this reply.
Success: The reader can select a documented form, supply its arguments and predict its result or fallback in the stated context.
Application-case: A command should identify a currently active chatter rather than the person who has sent the most messages over a longer period.
Prerequisites: A reply field that supports templates, and the ability to edit it; the template basics taught in /reference/commands/variables-and-templates.
Project-root: C:\Projects\NoMercyLabs\nomnomzbot-docs\.claude\worktrees\finish-c
Built-root: dist
Rendered: dist/reference/templates/activity/index.html
Voice: docs-work/voice.md
Must know:
- syntax | The supported helper forms and required arguments needed to choose between current chat activity and a stream total. | ../../../../nomnomzbot/server/src/NomNomzBot.Infrastructure/Platform/Templating/Helpers/Broadcast/ChatActivityTemplateHelpers.cs
- result | The result, fallback and units of each documented helper, so the author can predict the reply. | ../../../../nomnomzbot/server/src/NomNomzBot.Infrastructure/Platform/Templating/Helpers/Broadcast/ChatActivityTemplateHelpers.cs
- context | The contexts in which the documented helpers are available, so a working example can be placed in the correct reply field. | ../../../../nomnomzbot/server/src/NomNomzBot.Application/Abstractions/Templating/TemplateHelperRegistry.cs
- windows | Choose a recent window from 1 to 60 minutes. | ../../../../nomnomzbot/server/src/NomNomzBot.Infrastructure/Platform/Templating/Helpers/Broadcast/ActivityRingHelpers.cs
- totals | Distinguish latest-stream totals, top lists, the chatter window reset on stream-online and bot channel-session command counts. | ../../../../nomnomzbot/server/src/NomNomzBot.Infrastructure/Platform/Templating/Helpers/Broadcast/ActivityStreamHelpers.cs
- day | Use channel-local daily activity and the longer comparison period. | ../../../../nomnomzbot/server/src/NomNomzBot.Infrastructure/Platform/Templating/Helpers/Broadcast/ActivityDayHelpers.cs
- chatter-reset | The tracked chatter set clears on stream-online; both unique chatters and the lurker estimate use that set. | ../../../../nomnomzbot/server/src/NomNomzBot.Infrastructure/Stream/EventHandlers/ChannelOnlineHandler.cs
Moves elsewhere:
- none
Checks:
- build: ["cmd", "/c", "yarn", "build"]
