Route: /reference/templates/var
Reader: A streamer or moderator who knows how to edit a command reply and use template braces, and needs to reuse a value or another reply within one template.
Type: lookup
Arrives-with: Which helper and arguments do I use to reuse a value or another reply within one template?
Goal: Choose a supported helper form and understand the value it produces in this reply.
Success: The reader can select a documented form, supply its arguments and predict its result or fallback in the stated context.
Application-case: A reply needs to reuse one calculated value twice; explain how to store and read it without assuming it persists to the next message.
Prerequisites: A reply field that supports templates, and the ability to edit it; the template basics taught in /reference/commands/variables-and-templates.
Project-root: C:\Projects\NoMercyLabs\nomnomzbot-docs\.claude\worktrees\finish
Built-root: dist
Rendered: dist/reference/templates/var/index.html
Voice: docs-work/voice.md
Must know:
- syntax | The supported helper forms and required arguments needed to reuse a value or another reply within one template. | ../../../../nomnomzbot/server/src/NomNomzBot.Infrastructure/Platform/Templating/Helpers/Variables/VariableTemplateHelpers.cs
- result | The result, fallback and units of each documented helper, so the author can predict the reply. | ../../../../nomnomzbot/server/src/NomNomzBot.Infrastructure/Platform/Templating/Helpers/Variables/VariableTemplateHelpers.cs
- context | The contexts in which the documented helpers are available, so a working example can be placed in the correct reply field. | ../../../../nomnomzbot/server/src/NomNomzBot.Application/Abstractions/Templating/TemplateHelperRegistry.cs
- lifetime | Assign before reading, follow the name rules, and distinguish per-render values from persistent storage and separate included renders. | ../../../../nomnomzbot/server/src/NomNomzBot.Infrastructure/Platform/Templating/Helpers/Variables/VariableTemplateHelpers.cs
- inclusion | Command includes read reply text with the same trigger seeds but do not invoke command actions or checks; nesting and unavailable results are bounded. | ../../../../nomnomzbot/server/src/NomNomzBot.Infrastructure/Platform/Templating/Helpers/Include/CommandInclude.cs
- custom-data | A mapped custom field reads the latest received value for up to 24 hours, and a missing or expired field is empty. | ../../../../nomnomzbot/server/src/NomNomzBot.Infrastructure/CustomEvents/CustomDataIngestService.cs
Moves elsewhere:
- none
Checks:
- build: ["cmd", "/c", "yarn", "build"]
