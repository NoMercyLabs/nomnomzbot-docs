Route: /reference/templates/ad
Reader: A streamer or moderator who knows how to edit a command reply and use template braces, and needs to describe the next ad break or the most recent one.
Type: lookup
Arrives-with: Which helper and arguments do I use to describe the next ad break or the most recent one?
Goal: Choose a supported helper form and understand the value it produces in this reply.
Success: The reader can select a documented form, supply its arguments and predict its result or fallback in the stated context.
Application-case: A reminder should show the next break, while an after-ad reply should describe the break that just ended.
Prerequisites: A reply field that supports templates, and the ability to edit it; the template basics taught in /reference/commands/variables-and-templates.
Project-root: .
Built-root: dist
Rendered: dist/reference/templates/ad/index.html
Voice: docs-work/voice.md
Must know:
- syntax | The supported helper forms and required arguments needed to describe the next ad break or the most recent one. | ../../../../nomnomzbot/server/src/NomNomzBot.Infrastructure/Platform/Templating/Helpers/Broadcast/AdTemplateHelpers.cs
- result | The result, fallback and units of each documented helper, so the author can predict the reply. | ../../../../nomnomzbot/server/src/NomNomzBot.Infrastructure/Platform/Templating/Helpers/Broadcast/AdTemplateHelpers.cs
- context | The contexts in which the documented helpers are available, so a working example can be placed in the correct reply field. | ../../../../nomnomzbot/server/src/NomNomzBot.Application/Abstractions/Templating/TemplateHelperRegistry.cs
- schedule | Use no-argument schedule helpers and recognize missing data. | ../../../../nomnomzbot/server/src/NomNomzBot.Infrastructure/Platform/Templating/Helpers/Broadcast/AdNextHelpers.cs
- event | Use event-supplied duration and warning details with the matching event. | ../../../../nomnomzbot/server/src/NomNomzBot.Application/Commands/Services/EventResponsePresetCatalog.cs
Moves elsewhere:
- none
Checks:
- build: ["cmd", "/c", "yarn", "build"]
