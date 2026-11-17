Route: /reference/templates/math
Reader: A streamer or moderator who knows how to edit a command reply and use template braces, and needs to calculate a value or display it as a meter.
Type: lookup
Arrives-with: Which helper and arguments do I use to calculate a value or display it as a meter?
Goal: Choose a supported helper form and understand the value it produces in this reply.
Success: The reader can select a documented form, supply its arguments and predict its result or fallback in the stated context.
Application-case: A reply needs a calculation and a progress meter; explain their arguments and what happens for invalid input.
Prerequisites: A reply field that supports templates, and the ability to edit it; the template basics taught in /reference/commands/variables-and-templates.
Project-root: .
Built-root: dist
Rendered: dist/reference/templates/math/index.html
Voice: docs-work/voice.md
Must know:
- syntax | The supported helper forms and required arguments needed to calculate a value or display it as a meter. | ../../../../nomnomzbot/server/src/NomNomzBot.Infrastructure/Platform/Templating/Helpers/Numbers/MathTemplateHelpers.cs
- result | The result, fallback and units of each documented helper, so the author can predict the reply. | ../../../../nomnomzbot/server/src/NomNomzBot.Infrastructure/Platform/Templating/Helpers/Numbers/MathTemplateHelpers.cs
- context | The contexts in which the documented helpers are available, so a working example can be placed in the correct reply field. | ../../../../nomnomzbot/server/src/NomNomzBot.Application/Abstractions/Templating/TemplateHelperRegistry.cs
- numeric-input | Numbers use a decimal dot without grouping or scientific notation; invalid calculations stay in braces. | ../../../../nomnomzbot/server/src/NomNomzBot.Infrastructure/Platform/Templating/Helpers/ParsedArgument.cs
- expressions | Explain grouping, function arguments, precedence and expression-length limits. | ../../../../nomnomzbot/server/src/NomNomzBot.Infrastructure/Platform/Templating/Helpers/Numbers/MathExpression.cs
- meter-arguments | Document percentages, width and mark arguments, clamping, and the different star maximum. | ../../../../nomnomzbot/server/src/NomNomzBot.Infrastructure/Platform/Templating/Helpers/Numbers/MeterBarHelpers.cs
Moves elsewhere:
- none
Checks:
- build: ["cmd", "/c", "yarn", "build"]
