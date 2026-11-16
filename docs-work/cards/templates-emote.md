Route: /reference/templates/emote
Reader: A streamer or moderator who knows how to edit a command reply and use template braces, and needs to select or count emotes from the supported sources.
Type: lookup
Arrives-with: Which helper and arguments do I use to select or count emotes from the supported sources?
Goal: Choose a supported helper form and understand the value it produces in this reply.
Success: The reader can select a documented form, supply its arguments and predict its result or fallback in the stated context.
Application-case: A command should choose an emote from one provider and behave predictably when that collection is empty.
Prerequisites: A reply field that supports templates, and the ability to edit it; the template basics taught in /reference/commands/variables-and-templates.
Project-root: C:\Projects\NoMercyLabs\nomnomzbot-docs\.claude\worktrees\finish-b
Built-root: dist
Rendered: dist/reference/templates/emote/index.html
Voice: docs-work/voice.md
Must know:
- syntax | The supported helper forms and required arguments needed to select or count emotes from the supported sources. | ../../../../nomnomzbot/server/src/NomNomzBot.Infrastructure/Platform/Templating/Helpers/Emotes/EmoteTemplateHelpers.cs
- result | The result, fallback and units of each documented helper, so the author can predict the reply. | ../../../../nomnomzbot/server/src/NomNomzBot.Infrastructure/Platform/Templating/Helpers/Emotes/EmoteTemplateHelpers.cs
- context | The contexts in which the documented helpers are available, so a working example can be placed in the correct reply field. | ../../../../nomnomzbot/server/src/NomNomzBot.Application/Abstractions/Templating/TemplateHelperRegistry.cs
- lookup | Look up a code, supply a fallback, and respect repeat and wall bounds. | ../../../../nomnomzbot/server/src/NomNomzBot.Infrastructure/Platform/Templating/Helpers/Emotes/EmoteLookupHelpers.cs
- sets | Choose the correct emote set and predict an empty list or random result. | ../../../../nomnomzbot/server/src/NomNomzBot.Infrastructure/Platform/Templating/Helpers/Emotes/EmoteSetHelpers.cs
- usage | Distinguish recent channel or viewer usage from the channel owner favorite. | ../../../../nomnomzbot/server/src/NomNomzBot.Infrastructure/Platform/Templating/Helpers/Emotes/EmoteUsageHelpers.cs
- viewer-context | Use viewer-repeat and trigger-dependent forms in their permitted contexts. | ../../../../nomnomzbot/server/src/NomNomzBot.Infrastructure/Platform/Templating/Helpers/Emotes/EmoteRow.cs
Moves elsewhere:
- none
Checks:
- build: ["cmd", "/c", "yarn", "build"]
