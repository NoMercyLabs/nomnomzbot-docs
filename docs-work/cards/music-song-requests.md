Route: /reference/music/song-requests
Reader: A streamer or moderator who knows stream bots, has signed in to the selected channel, and is new to this feature in NomNomzBot.
Type: task
Arrives-with: How do I let viewers request songs and set the rules?
Goal: How do I let viewers request songs and set the rules.
Success: A permitted request appears in the queue, and the reader can explain a refused request using the configured rules.
Application-case: A viewer submits a song already queued by someone else and the moderator needs to decide which request rule applies.
Prerequisites: Access to the selected channel and permission for the described action; any platform connection or output required by that action must be established before the steps.
Project-root: C:\Projects\NoMercyLabs\nomnomzbot-docs\.claude\worktrees\finish
Built-root: dist
Rendered: dist/reference/music/song-requests/index.html
Voice: docs-work/voice.md
Must know:
- setup | How requests enter through chat, including service-specific access, enabled requests and player requirements. | ../../../../nomnomzbot/server/src/NomNomzBot.Infrastructure/Commands/Builtins/SongRequestBuiltin.cs
- behavior | Which request rules control eligibility and duplicates, and how to remove or block a requested track. | ../../../../nomnomzbot/dashboard/src/views/dashboard/music/components/RulesPanel.vue
- limits | Distinguish waiting caps from admitted requests per stream, role exemptions and source access; rule changes do not clear the queue. | ../../../../nomnomzbot/server/src/NomNomzBot.Infrastructure/Music/MusicService.cs
- removal | Removing or clearing a pending request may skip a song already handed to the player; queue number refers to current order. | ../../../../nomnomzbot/server/src/NomNomzBot.Infrastructure/Music/PipelineActions/SongWrongAction.cs
- save | Most rules wait for Save, but open/close and source roles save immediately; reset replaces listed rules and discards edits. | ../../../../nomnomzbot/dashboard/src/views/dashboard/music/components/RulesPanel.vue
Moves elsewhere:
- none
Checks:
- build: ["cmd", "/c", "yarn", "build"]
