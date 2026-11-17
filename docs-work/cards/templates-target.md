Route: /reference/templates/target
Reader: A streamer or moderator who knows how to edit a command reply and use template braces, and needs to describe the person named by a command.
Type: lookup
Arrives-with: Which helper and arguments do I use to describe the person named by a command?
Goal: Choose a supported helper form and understand the value it produces in this reply.
Success: The reader can select a documented form, supply its arguments and predict its result or fallback in the stated context.
Application-case: A viewer invokes a command naming someone else, then invokes it without a name; explain who each target helper refers to.
Prerequisites: A reply field that supports templates, and the ability to edit it; the template basics taught in /reference/commands/variables-and-templates.
Project-root: .
Built-root: dist
Rendered: dist/reference/templates/target/index.html
Voice: docs-work/voice.md
Must know:
- syntax | The supported helper forms and required arguments needed to describe the person named by a command. | ../../../../nomnomzbot/server/src/NomNomzBot.Infrastructure/Platform/Templating/Helpers/People/TargetTemplateHelpers.cs
- result | The result, fallback and units of each documented helper, so the author can predict the reply. | ../../../../nomnomzbot/server/src/NomNomzBot.Infrastructure/Platform/Templating/Helpers/People/TargetTemplateHelpers.cs
- context | The contexts in which the documented helpers are available, so a working example can be placed in the correct reply field. | ../../../../nomnomzbot/server/src/NomNomzBot.Application/Abstractions/Templating/TemplateHelperRegistry.cs
- target-selection | A command uses its first argument and does not substitute the caller when no target is supplied. | ../../../../nomnomzbot/server/src/NomNomzBot.Infrastructure/Chat/EventHandlers/ChatMessageHandler.cs
- missing-target | Distinguish empty names, false known state, neutral grammar, zero recorded totals and unresolved person-dependent helpers. | ../../../../nomnomzbot/server/src/NomNomzBot.Infrastructure/Platform/Templating/Helpers/Legacy/LegacyTemplateHelpers.cs
- history | Distinguish recorded channel totals, Twitch watch-streak notifications and message extraction filters and length limits. | ../../../../nomnomzbot/server/src/NomNomzBot.Infrastructure/Platform/Templating/Helpers/Legacy/LegacyTemplateHelpers.cs
Moves elsewhere:
- none
Checks:
- build: ["cmd", "/c", "yarn", "build"]
