Route: /reference/templates/random
Reader: A streamer or moderator who knows how to edit a command reply and use template braces, and needs to choose from values or generate a number.
Type: lookup
Arrives-with: Which helper and arguments do I use to choose from values or generate a number?
Goal: Choose a supported helper form and understand the value it produces in this reply.
Success: The reader can select a documented form, supply its arguments and predict its result or fallback in the stated context.
Application-case: A command should choose one supplied phrase while another generates a number within bounds; identify the two forms.
Prerequisites: A reply field that supports templates, and the ability to edit it; the template basics taught in /reference/commands/variables-and-templates.
Project-root: .
Built-root: dist
Rendered: dist/reference/templates/random/index.html
Voice: docs-work/voice.md
Must know:
- syntax | The supported helper forms and required arguments needed to choose from values or generate a number. | ../../../../nomnomzbot/server/src/NomNomzBot.Infrastructure/Platform/Templating/Helpers/Logic/RandomTemplateHelpers.cs
- result | The result, fallback and units of each documented helper, so the author can predict the reply. | ../../../../nomnomzbot/server/src/NomNomzBot.Infrastructure/Platform/Templating/Helpers/Logic/RandomTemplateHelpers.cs
- context | The contexts in which the documented helpers are available, so a working example can be placed in the correct reply field. | ../../../../nomnomzbot/server/src/NomNomzBot.Application/Abstractions/Templating/TemplateHelperRegistry.cs
- repetition | Distinguish independent draws, immediate-repeat avoidance, reused dotted expressions and named rolls; duplicated input text may still repeat. | ../../../../nomnomzbot/server/src/NomNomzBot.Infrastructure/Platform/Templating/Helpers/Logic/PickTemplateHelpers.cs
- chatter-pool | Chatter selection uses the tracked set reset at stream-online, not current connected viewers; empty chatter and quote results differ. | ../../../../nomnomzbot/server/src/NomNomzBot.Infrastructure/Platform/Templating/Helpers/Chatter/ChatterTemplateHelpers.cs
Moves elsewhere:
- none
Checks:
- build: ["cmd", "/c", "yarn", "build"]
