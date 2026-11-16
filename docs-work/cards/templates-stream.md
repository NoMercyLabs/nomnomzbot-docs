Route: /reference/templates/stream
Reader: A streamer or moderator who knows how to edit a command reply and use template braces, and needs to choose current-stream information or a historical result.
Type: lookup
Arrives-with: Which helper and arguments do I use to choose current-stream information or a historical result?
Goal: Choose a supported helper form and understand the value it produces in this reply.
Success: The reader can select a documented form, supply its arguments and predict its result or fallback in the stated context.
Application-case: A command asks about the current game while a recap needs a previous stream's totals; distinguish the time scope.
Prerequisites: A reply field that supports templates, and the ability to edit it; the template basics taught in /reference/commands/variables-and-templates.
Project-root: C:\Projects\NoMercyLabs\nomnomzbot-docs\.claude\worktrees\finish
Built-root: dist
Rendered: dist/reference/templates/stream/index.html
Voice: docs-work/voice.md
Must know:
- syntax | The supported helper forms and required arguments needed to choose current-stream information or a historical result. | ../../../../nomnomzbot/server/src/NomNomzBot.Infrastructure/Platform/Templating/Helpers/Stream/StreamGameHelpers.cs
- result | The result, fallback and units of each documented helper, so the author can predict the reply. | ../../../../nomnomzbot/server/src/NomNomzBot.Infrastructure/Platform/Templating/Helpers/Stream/StreamGameHelpers.cs
- context | The contexts in which the documented helpers are available, so a working example can be placed in the correct reply field. | ../../../../nomnomzbot/server/src/NomNomzBot.Application/Abstractions/Templating/TemplateHelperRegistry.cs
- time-scope | Distinguish live values, latest-recorded-stream statistics, last-ended summaries and monthly history windows. | ../../../../nomnomzbot/server/src/NomNomzBot.Infrastructure/Platform/Templating/Helpers/Stream/StreamHelperData.cs
- missing-values | Basic uptime, current viewers and startedAt have different offline results from the extended helpers. | ../../../../nomnomzbot/server/src/NomNomzBot.Infrastructure/Platform/Templating/Helpers/Legacy/LegacyTemplateHelpers.cs
- metric-meaning | Verify units, list bounds and actual request/event counts against metric producers. | ../../../../nomnomzbot/server/src/NomNomzBot.Infrastructure/Dashboard/Stats/StreamFactReader.cs
Moves elsewhere:
- none
Checks:
- build: ["cmd", "/c", "yarn", "build"]
