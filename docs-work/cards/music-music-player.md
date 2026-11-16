Route: /reference/music/music-player
Reader: A streamer or moderator who knows stream bots, has signed in to the selected channel, and is new to this feature in NomNomzBot.
Type: task
Arrives-with: How do I connect a player and control what is playing?
Goal: How do I connect a player and control what is playing.
Success: The player reports a connection and the selected track is reflected in playback state.
Application-case: A streamer has a player connected but needs to distinguish the current track from queued requests.
Prerequisites: Access to the selected channel and permission for the described action; any platform connection or output required by that action must be established before the steps.
Project-root: C:\Projects\NoMercyLabs\nomnomzbot-docs\.claude\worktrees\finish
Built-root: dist
Rendered: dist/reference/music/music-player/index.html
Voice: docs-work/voice.md
Must know:
- setup | Where to select and connect a supported player, and the player-specific requirements before playback. | ../../../../nomnomzbot/dashboard/src/views/dashboard/music/MusicView.vue
- behavior | How playback controls, the queue and history relate, and how to recognize a disconnected or idle player. | ../../../../nomnomzbot/server/src/NomNomzBot.Api/Controllers/V1/MusicController.cs
- immediate | Requests can start on idle playback, loading the Music Player can release a waiting request, and player buttons execute real account or playback actions when pressed. | ../../../../nomnomzbot/dashboard/src/views/dashboard/music/components/PlayerButtons.vue
- history | History counts new requests when playback starts, separately from the request admission caps. | ../../../../nomnomzbot/server/src/NomNomzBot.Infrastructure/Music/SongRequestPlayedHistoryWriter.cs
Moves elsewhere:
- none
Checks:
- build: ["cmd", "/c", "yarn", "build"]
