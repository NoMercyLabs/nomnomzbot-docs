Route: /reference/templates/list
Reader: A streamer or moderator who knows how to edit a command reply and use template braces, and needs to read a saved list or use a named counter.
Type: lookup
Arrives-with: Which helper and arguments do I use to read a saved list or use a named counter?
Goal: Choose a supported helper form and understand the value it produces in this reply.
Success: The reader can select a documented form, supply its arguments and predict its result or fallback in the stated context.
Application-case: A command needs one saved list entry and a separate counter; distinguish reading a value from changing it.
Prerequisites: A reply field that supports templates, and the ability to edit it; the template basics taught in /reference/commands/variables-and-templates.
Project-root: .
Built-root: dist
Rendered: dist/reference/templates/list/index.html
Voice: docs-work/voice.md
Must know:
- syntax | The supported helper forms and required arguments needed to read a saved list or use a named counter. | ../../../../nomnomzbot/server/src/NomNomzBot.Infrastructure/Platform/Templating/Helpers/Counters/ListTemplateHelpers.cs
- result | The result, fallback and units of each documented helper, so the author can predict the reply. | ../../../../nomnomzbot/server/src/NomNomzBot.Infrastructure/Platform/Templating/Helpers/Counters/ListTemplateHelpers.cs
- context | The contexts in which the documented helpers are available, so a working example can be placed in the correct reply field. | ../../../../nomnomzbot/server/src/NomNomzBot.Application/Abstractions/Templating/TemplateHelperRegistry.cs
- read | Read positions and case-insensitive membership without modifying saved entries. | ../../../../nomnomzbot/server/src/NomNomzBot.Infrastructure/Platform/Templating/Helpers/Counters/ListReadHelpers.cs
- missing | Treat a missing saved list as empty and distinguish that from invalid syntax. | ../../../../nomnomzbot/server/src/NomNomzBot.Infrastructure/Platform/Templating/Helpers/Counters/ListSource.cs
- inline | Use semicolon-separated inline lists and the correct separator argument order. | ../../../../nomnomzbot/server/src/NomNomzBot.Infrastructure/Platform/Templating/Helpers/Counters/ListInlineHelpers.cs
- counter | Change a counter through a pipeline action before reading its updated value. | ../../../../nomnomzbot/server/src/NomNomzBot.Infrastructure/Commands/PipelineActions/CounterActions.cs
Moves elsewhere:
- none
Checks:
- build: ["cmd", "/c", "yarn", "build"]
