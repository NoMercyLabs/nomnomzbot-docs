Route: /reference/templates/music
Reader: A streamer or moderator who knows how to edit a command reply and use template braces, and needs to describe the player, queue or request settings.
Type: lookup
Arrives-with: Which helper and arguments do I use to describe the player, queue or request settings?
Goal: Choose a supported helper form and understand the value it produces in this reply.
Success: The reader can select a documented form, supply its arguments and predict its result or fallback in the stated context.
Application-case: A reply should show the currently playing song, while another asks what is next; distinguish the empty-player and empty-queue results.
Prerequisites: A reply field that supports templates, and the ability to edit it; the template basics taught in /reference/commands/variables-and-templates.
Project-root: C:\Projects\NoMercyLabs\nomnomzbot-docs\.claude\worktrees\finish
Built-root: dist
Rendered: dist/reference/templates/music/index.html
Voice: docs-work/voice.md
Must know:
- syntax | The supported helper forms and required arguments needed to describe the player, queue or request settings. | ../../../../nomnomzbot/server/src/NomNomzBot.Infrastructure/Platform/Templating/Helpers/Music/MusicTemplateHelpers.cs
- result | The result, fallback and units of each documented helper, so the author can predict the reply. | ../../../../nomnomzbot/server/src/NomNomzBot.Infrastructure/Platform/Templating/Helpers/Music/MusicTemplateHelpers.cs
- context | The contexts in which the documented helpers are available, so a working example can be placed in the correct reply field. | ../../../../nomnomzbot/server/src/NomNomzBot.Application/Abstractions/Templating/TemplateHelperRegistry.cs
- empty-values | Distinguish absent player information from empty-queue counts and unresolved song fields. | ../../../../nomnomzbot/server/src/NomNomzBot.Infrastructure/Platform/Templating/Helpers/Music/MusicQueueHelpers.cs
- history-window | Recent request history is capped at 500 records before stream filtering; all-time viewer counts use another source. | ../../../../nomnomzbot/server/src/NomNomzBot.Infrastructure/Platform/Templating/Helpers/Music/MusicData.cs
- pipeline-values | Favorite values describe the action outcome and candidate; playlist values belong to the playlist-add message. | ../../../../nomnomzbot/server/src/NomNomzBot.Infrastructure/Music/PipelineActions/SongRequestFavoriteAction.cs
Moves elsewhere:
- none
Checks:
- build: ["cmd", "/c", "yarn", "build"]
