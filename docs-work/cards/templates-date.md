Route: /reference/templates/date
Reader: A streamer or moderator who knows how to edit a command reply and use template braces, and needs to format a time or count down in the intended time zone.
Type: lookup
Arrives-with: Which helper and arguments do I use to format a time or count down in the intended time zone?
Goal: Choose a supported helper form and understand the value it produces in this reply.
Success: The reader can select a documented form, supply its arguments and predict its result or fallback in the stated context.
Application-case: A stream announcement should use the channel's time zone while a separate command displays a date in another zone.
Prerequisites: A reply field that supports templates, and the ability to edit it; the template basics taught in /reference/commands/variables-and-templates.
Project-root: C:\Projects\NoMercyLabs\nomnomzbot-docs\.claude\worktrees\finish
Built-root: dist
Rendered: dist/reference/templates/date/index.html
Voice: docs-work/voice.md
Must know:
- syntax | The supported helper forms and required arguments needed to format a time or count down in the intended time zone. | ../../../../nomnomzbot/server/src/NomNomzBot.Infrastructure/Platform/Templating/Dates/DateCalculator.cs
- result | The result, fallback and units of each documented helper, so the author can predict the reply. | ../../../../nomnomzbot/server/src/NomNomzBot.Infrastructure/Platform/Templating/Dates/DateCalculator.cs
- context | The contexts in which the documented helpers are available, so a working example can be placed in the correct reply field. | ../../../../nomnomzbot/server/src/NomNomzBot.Application/Abstractions/Templating/TemplateHelperRegistry.cs
- sources | Distinguish a local date from a timestamp with an offset, and select a time zone. | ../../../../nomnomzbot/server/src/NomNomzBot.Infrastructure/Platform/Templating/Dates/DateSourceReader.cs
- order | Put the output last and distinguish calendar changes from elapsed hours. | ../../../../nomnomzbot/server/src/NomNomzBot.Infrastructure/Platform/Templating/Dates/DateCalculator.cs
- duration | Choose a format or an unsigned duration and recognize invalid expressions. | ../../../../nomnomzbot/server/src/NomNomzBot.Infrastructure/Platform/Templating/Dates/DateOutputFormatter.cs
Moves elsewhere:
- none
Checks:
- build: ["cmd", "/c", "yarn", "build"]
