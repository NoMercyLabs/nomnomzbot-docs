Route: /reference/templates/pronouns
Reader: A streamer or moderator who knows how to edit a command reply and use template braces, and needs to choose pronoun and grammar helpers for a reply.
Type: lookup
Arrives-with: Which helper and arguments do I use to choose pronoun and grammar helpers for a reply?
Goal: Choose a supported helper form and understand the value it produces in this reply.
Success: The reader can select a documented form, supply its arguments and predict its result or fallback in the stated context.
Application-case: A command names someone whose pronouns are not available; explain the fallback and how the sentence remains readable.
Prerequisites: A reply field that supports templates, and the ability to edit it; the template basics taught in /reference/commands/variables-and-templates.
Project-root: C:\Projects\NoMercyLabs\nomnomzbot-docs\.claude\worktrees\finish
Built-root: dist
Rendered: dist/reference/templates/pronouns/index.html
Voice: docs-work/voice.md
Must know:
- selection | How to choose helpers for the invoking person or the named person and the grammatical forms needed by the surrounding sentence. | ../../../../nomnomzbot/server/src/NomNomzBot.Infrastructure/Platform/Templating/Helpers/Legacy/LegacyTemplateHelpers.cs
- fallback | What a reply shows when no pronoun preference is available, so the author can write a usable fallback. | ../../../../nomnomzbot/server/src/NomNomzBot.Infrastructure/Platform/Templating/Helpers/Legacy/LegacyTemplateHelpers.cs
- preference | Where a person can set their pronouns and how the bot uses a saved preference. | ../../../../nomnomzbot/server/src/NomNomzBot.Infrastructure/Identity/Providers/AlejoPronounClient.cs
- primary-choice | Grammar uses the primary pronoun; the alternate contributes to a badge. Open-choice pronouns use the name when available, otherwise the universal fallback. | ../../../../nomnomzbot/server/src/NomNomzBot.Infrastructure/Platform/Templating/Helpers/Legacy/LegacyTemplateHelpers.cs
- contexts | Explain supported person and viewer-text contexts without promising grammar forms in every surface. | ../../../../nomnomzbot/server/src/NomNomzBot.Application/Abstractions/Templating/TemplateHelperRegistry.cs
Moves elsewhere:
- none
Checks:
- build: ["cmd", "/c", "yarn", "build"]
