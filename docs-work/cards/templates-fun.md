Route: /reference/templates/fun
Reader: A streamer or moderator who knows how to edit a command reply and use template braces, and needs to choose a game helper and supply its accepted arguments.
Type: lookup
Arrives-with: Which helper and arguments do I use to choose a game helper and supply its accepted arguments?
Goal: Choose a supported helper form and understand the value it produces in this reply.
Success: The reader can select a documented form, supply its arguments and predict its result or fallback in the stated context.
Application-case: A command needs a dice result while another should rate a word supplied by the viewer; select the appropriate helpers.
Prerequisites: A reply field that supports templates, and the ability to edit it; the template basics taught in /reference/commands/variables-and-templates.
Project-root: .
Built-root: dist
Rendered: dist/reference/templates/fun/index.html
Voice: docs-work/voice.md
Must know:
- syntax | The supported helper forms and required arguments needed to choose a game helper and supply its accepted arguments. | ../../../../nomnomzbot/server/src/NomNomzBot.Infrastructure/Platform/Templating/Helpers/Fun/FunTemplateHelpers.cs
- result | The result, fallback and units of each documented helper, so the author can predict the reply. | ../../../../nomnomzbot/server/src/NomNomzBot.Infrastructure/Platform/Templating/Helpers/Fun/FunTemplateHelpers.cs
- context | The contexts in which the documented helpers are available, so a working example can be placed in the correct reply field. | ../../../../nomnomzbot/server/src/NomNomzBot.Application/Abstractions/Templating/TemplateHelperRegistry.cs
- dice | Use dice notation and the allowed count and side ranges. | ../../../../nomnomzbot/server/src/NomNomzBot.Infrastructure/Platform/Templating/Helpers/Fun/FunDiceSpec.cs
- rating | Distinguish random results from ratings that are stable for a local day. | ../../../../nomnomzbot/server/src/NomNomzBot.Infrastructure/Platform/Templating/Helpers/Fun/FunRatingHelpers.cs
- pick-list | Create the required 8ball list and recognize missing or empty lists. | ../../../../nomnomzbot/server/src/NomNomzBot.Infrastructure/Platform/Templating/Helpers/Fun/FunEightBallHelpers.cs
- slots | Read the win result after the spin in the same reply. | ../../../../nomnomzbot/server/src/NomNomzBot.Infrastructure/Platform/Templating/Helpers/Fun/FunGameHelpers.cs
Moves elsewhere:
- none
Checks:
- build: ["cmd", "/c", "yarn", "build"]
