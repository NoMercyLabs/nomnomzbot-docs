Route: /reference/templates/lookup
Reader: A streamer or moderator who knows how to edit a command reply and use template braces, and needs to look up outside information with the required arguments.
Type: lookup
Arrives-with: Which helper and arguments do I use to look up outside information with the required arguments?
Goal: Choose a supported helper form and understand the value it produces in this reply.
Success: The reader can select a documented form, supply its arguments and predict its result or fallback in the stated context.
Application-case: A weather command needs a location and a currency command needs an amount and two currencies; identify the supported forms.
Prerequisites: A reply field that supports templates, and the ability to edit it; the template basics taught in /reference/commands/variables-and-templates.
Project-root: C:\Projects\NoMercyLabs\nomnomzbot-docs\.claude\worktrees\finish
Built-root: dist
Rendered: dist/reference/templates/lookup/index.html
Voice: docs-work/voice.md
Must know:
- syntax | The supported helper forms and required arguments needed to look up outside information with the required arguments. | ../../../../nomnomzbot/server/src/NomNomzBot.Infrastructure/Platform/Templating/Helpers/Lookups/LookupTemplateHelpers.cs
- result | The result, fallback and units of each documented helper, so the author can predict the reply. | ../../../../nomnomzbot/server/src/NomNomzBot.Infrastructure/Platform/Templating/Helpers/Lookups/LookupTemplateHelpers.cs
- context | The contexts in which the documented helpers are available, so a working example can be placed in the correct reply field. | ../../../../nomnomzbot/server/src/NomNomzBot.Application/Abstractions/Templating/TemplateHelperRegistry.cs
- availability | Weather and city time are disabled in SaaS mode; chat translation needs trigger text and is not a timer helper; no lookup accepts viewer-written templates. | ../../../../nomnomzbot/server/src/NomNomzBot.Infrastructure/Platform/Templating/Helpers/Lookups/LookupSources.cs
- lookup-fallbacks | Distinguish invalid expressions in braces, unavailable-service messages and valid empty Twitch results. | ../../../../nomnomzbot/server/src/NomNomzBot.Infrastructure/Platform/Templating/Helpers/Lookups/LookupTwitchHelpers.cs
- translation | Explain source language selection, external text transmission and the 500-byte limit. | ../../../../nomnomzbot/server/src/NomNomzBot.Infrastructure/Platform/Templating/Helpers/Lookups/MyMemoryTranslationClient.cs
Moves elsewhere:
- none
Checks:
- build: ["cmd", "/c", "yarn", "build"]
