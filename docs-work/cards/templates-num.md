Route: /reference/templates/num
Reader: A streamer or moderator who knows how to edit a command reply and use template braces, and needs to format a numeric value without changing its meaning.
Type: lookup
Arrives-with: Which helper and arguments do I use to format a numeric value without changing its meaning?
Goal: Choose a supported helper form and understand the value it produces in this reply.
Success: The reader can select a documented form, supply its arguments and predict its result or fallback in the stated context.
Application-case: A reply should format a duration and a currency amount; choose the appropriate helpers and units.
Prerequisites: A reply field that supports templates, and the ability to edit it; the template basics taught in /reference/commands/variables-and-templates.
Project-root: .
Built-root: dist
Rendered: dist/reference/templates/num/index.html
Voice: docs-work/voice.md
Must know:
- syntax | The supported helper forms and required arguments needed to format a numeric value without changing its meaning. | ../../../../nomnomzbot/server/src/NomNomzBot.Infrastructure/Platform/Templating/Helpers/Numbers/NumTemplateHelpers.cs
- result | The result, fallback and units of each documented helper, so the author can predict the reply. | ../../../../nomnomzbot/server/src/NomNomzBot.Infrastructure/Platform/Templating/Helpers/Numbers/NumTemplateHelpers.cs
- context | The contexts in which the documented helpers are available, so a working example can be placed in the correct reply field. | ../../../../nomnomzbot/server/src/NomNomzBot.Application/Abstractions/Templating/TemplateHelperRegistry.cs
- inputs | Explain decimal input, whole-number restrictions, invalid expressions and optional decimal-place arguments. | ../../../../nomnomzbot/server/src/NomNomzBot.Infrastructure/Platform/Templating/Helpers/Numbers/NumberArguments.cs
- units | Duration inputs are seconds; currency needs an explicit code and does not convert an amount; unit conversions require compatible codes. | ../../../../nomnomzbot/server/src/NomNomzBot.Infrastructure/Platform/Templating/Helpers/Numbers/NumberConvertHelpers.cs
- presentation | Keep language-dependent formatting distinct from numeric input and document bounds, rounding and special feet-and-inches output. | ../../../../nomnomzbot/server/src/NomNomzBot.Infrastructure/Platform/Templating/Helpers/Numbers/NumberUnits.cs
Moves elsewhere:
- none
Checks:
- build: ["cmd", "/c", "yarn", "build"]
