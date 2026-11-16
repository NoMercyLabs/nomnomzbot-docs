Route: /reference/templates/if
Reader: A streamer or moderator who knows how to edit a command reply and use template braces, and needs to choose a reply branch or supply a fallback.
Type: lookup
Arrives-with: Which helper and arguments do I use to choose a reply branch or supply a fallback?
Goal: Choose a supported helper form and understand the value it produces in this reply.
Success: The reader can select a documented form, supply its arguments and predict its result or fallback in the stated context.
Application-case: A reply needs fallback text for an empty value and a different branch for a numeric comparison; explain the two choices.
Prerequisites: A reply field that supports templates, and the ability to edit it; the template basics taught in /reference/commands/variables-and-templates.
Project-root: C:\Projects\NoMercyLabs\nomnomzbot-docs\.claude\worktrees\finish-b
Built-root: dist
Rendered: dist/reference/templates/if/index.html
Voice: docs-work/voice.md
Must know:
- syntax | The supported helper forms and required arguments needed to choose a reply branch or supply a fallback. | ../../../../nomnomzbot/server/src/NomNomzBot.Infrastructure/Platform/Templating/Helpers/Logic/IfTemplateHelpers.cs
- result | The result, fallback and units of each documented helper, so the author can predict the reply. | ../../../../nomnomzbot/server/src/NomNomzBot.Infrastructure/Platform/Templating/Helpers/Logic/IfTemplateHelpers.cs
- context | The contexts in which the documented helpers are available, so a working example can be placed in the correct reply field. | ../../../../nomnomzbot/server/src/NomNomzBot.Application/Abstractions/Templating/TemplateHelperRegistry.cs
- truth | Distinguish a false value from blank text and handle omitted else branches. | ../../../../nomnomzbot/server/src/NomNomzBot.Infrastructure/Platform/Templating/Helpers/Logic/LogicArguments.cs
- comparisons | Choose exact or case-insensitive text tests and valid numeric inputs. | ../../../../nomnomzbot/server/src/NomNomzBot.Infrastructure/Platform/Templating/Helpers/Logic/ValuePredicate.cs
- fallback | Use a blank-value fallback without mistaking unresolved braces for empty text. | ../../../../nomnomzbot/server/src/NomNomzBot.Infrastructure/Platform/Templating/Helpers/Logic/DefaultTemplateHelpers.cs
- switch | Keep switch cases in the intended order and supply an optional final fallback. | ../../../../nomnomzbot/server/src/NomNomzBot.Infrastructure/Platform/Templating/Helpers/Logic/SwitchTemplateHelpers.cs
Moves elsewhere:
- none
Checks:
- build: ["cmd", "/c", "yarn", "build"]
