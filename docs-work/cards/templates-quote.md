Route: /reference/templates/quote
Reader: A streamer or moderator who knows how to edit a command reply and use template braces, and needs to select a saved quote and its associated details.
Type: lookup
Arrives-with: Which helper and arguments do I use to select a saved quote and its associated details?
Goal: Choose a supported helper form and understand the value it produces in this reply.
Success: The reader can select a documented form, supply its arguments and predict its result or fallback in the stated context.
Application-case: A command asks for a quote by number and should include the matching author; explain how to keep the two values consistent.
Prerequisites: A reply field that supports templates, and the ability to edit it; the template basics taught in /reference/commands/variables-and-templates.
Project-root: C:\Projects\NoMercyLabs\nomnomzbot-docs\.claude\worktrees\finish
Built-root: dist
Rendered: dist/reference/templates/quote/index.html
Voice: docs-work/voice.md
Must know:
- syntax | The supported helper forms and required arguments needed to select a saved quote and its associated details. | ../../../../nomnomzbot/server/src/NomNomzBot.Infrastructure/Platform/Templating/Helpers/Quotes/QuoteTemplateHelpers.cs
- result | The result, fallback and units of each documented helper, so the author can predict the reply. | ../../../../nomnomzbot/server/src/NomNomzBot.Infrastructure/Platform/Templating/Helpers/Quotes/QuoteTemplateHelpers.cs
- context | The contexts in which the documented helpers are available, so a working example can be placed in the correct reply field. | ../../../../nomnomzbot/server/src/NomNomzBot.Application/Abstractions/Templating/TemplateHelperRegistry.cs
- same-entry | Use the same positive quote number for text and details; count and latest do not set the number for another helper. | ../../../../nomnomzbot/server/src/NomNomzBot.Infrastructure/Platform/Templating/Helpers/Quotes/QuoteTemplateHelpers.cs
- absent-details | Distinguish an absent quote from optional empty credit fields, zero count, and the quote-date time zone. | ../../../../nomnomzbot/server/src/NomNomzBot.Infrastructure/Platform/Templating/Helpers/Quotes/QuoteText.cs
Moves elsewhere:
- none
Checks:
- build: ["cmd", "/c", "yarn", "build"]
