Route: /reference/templates/schedule
Reader: A streamer or moderator who knows how to edit a command reply and use template braces, and needs to show the next scheduled stream in the right time zone.
Type: lookup
Arrives-with: Which helper and arguments do I use to show the next scheduled stream in the right time zone?
Goal: Choose a supported helper form and understand the value it produces in this reply.
Success: The reader can select a documented form, supply its arguments and predict its result or fallback in the stated context.
Application-case: A viewer asks when the next scheduled stream begins during a scheduled vacation; explain which schedule information applies.
Prerequisites: A reply field that supports templates, and the ability to edit it; the template basics taught in /reference/commands/variables-and-templates.
Project-root: C:\Projects\NoMercyLabs\nomnomzbot-docs\.claude\worktrees\finish
Built-root: dist
Rendered: dist/reference/templates/schedule/index.html
Voice: docs-work/voice.md
Must know:
- syntax | The supported helper forms and required arguments needed to show the next scheduled stream in the right time zone. | ../../../../nomnomzbot/server/src/NomNomzBot.Infrastructure/Platform/Templating/Helpers/Broadcast/ScheduleTemplateHelpers.cs
- result | The result, fallback and units of each documented helper, so the author can predict the reply. | ../../../../nomnomzbot/server/src/NomNomzBot.Infrastructure/Platform/Templating/Helpers/Broadcast/ScheduleTemplateHelpers.cs
- context | The contexts in which the documented helpers are available, so a working example can be placed in the correct reply field. | ../../../../nomnomzbot/server/src/NomNomzBot.Application/Abstractions/Templating/TemplateHelperRegistry.cs
- selection | Next selects an uncanceled segment that has not ended and may already be underway; vacation is separate. | ../../../../nomnomzbot/server/src/NomNomzBot.Infrastructure/Platform/Templating/Helpers/Broadcast/ScheduleData.cs
- zones-missing | Explain channel versus explicit viewer time zones and distinguish empty lists, missing next slots and unavailable schedule reads. | ../../../../nomnomzbot/server/src/NomNomzBot.Infrastructure/Platform/Templating/Helpers/Broadcast/ScheduleRows.cs
Moves elsewhere:
- none
Checks:
- build: ["cmd", "/c", "yarn", "build"]
