Route: /reference/templates/platform
Reader: A streamer or moderator who knows how to edit a command reply and use template braces, and needs to choose information for a particular streaming platform.
Type: lookup
Arrives-with: Which helper and arguments do I use to choose information for a particular streaming platform?
Goal: Choose a supported helper form and understand the value it produces in this reply.
Success: The reader can select a documented form, supply its arguments and predict its result or fallback in the stated context.
Application-case: A multistreaming channel needs one platform's link and viewer count rather than a combined channel value.
Prerequisites: A reply field that supports templates, and the ability to edit it; the template basics taught in /reference/commands/variables-and-templates.
Project-root: C:\Projects\NoMercyLabs\nomnomzbot-docs\.claude\worktrees\finish
Built-root: dist
Rendered: dist/reference/templates/platform/index.html
Voice: docs-work/voice.md
Must know:
- syntax | The supported helper forms and required arguments needed to choose information for a particular streaming platform. | ../../../../nomnomzbot/server/src/NomNomzBot.Infrastructure/Platform/Templating/Helpers/Platforms/PlatformTemplateHelpers.cs
- result | The result, fallback and units of each documented helper, so the author can predict the reply. | ../../../../nomnomzbot/server/src/NomNomzBot.Infrastructure/Platform/Templating/Helpers/Platforms/PlatformTemplateHelpers.cs
- context | The contexts in which the documented helpers are available, so a working example can be placed in the correct reply field. | ../../../../nomnomzbot/server/src/NomNomzBot.Application/Abstractions/Templating/TemplateHelperRegistry.cs
- missing-counts | Explain that live status does not guarantee a viewer count, combined totals omit missing counts, and unconnected values differ from zero. | ../../../../nomnomzbot/server/src/NomNomzBot.Infrastructure/Platform/Templating/Helpers/Platforms/PlatformViewerHelpers.cs
- trigger-platform | Separate connection lookups from the viewer or event platform supplied by the trigger. | ../../../../nomnomzbot/server/src/NomNomzBot.Infrastructure/Platform/Templating/Helpers/Platforms/PlatformSeedHelpers.cs
Moves elsewhere:
- none
Checks:
- build: ["cmd", "/c", "yarn", "build"]
