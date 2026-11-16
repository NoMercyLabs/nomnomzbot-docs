Route: /reference/integrations/spotify
Reader: A streamer or moderator who knows stream bots, has signed in to the selected channel, and is new to this feature in NomNomzBot.
Type: task
Arrives-with: How do I connect the right Spotify account for playback?
Goal: How do I connect the right Spotify account for playback.
Success: The dashboard shows the connected account and the player can use it under the stated requirements.
Application-case: A streamer authorizes the wrong Spotify account and needs to connect a different one.
Prerequisites: Integration write access (Editor by default), shared or own Spotify app, intended listening account, and Premium with an active Spotify device for playback controls.
Project-root: C:\Projects\NoMercyLabs\nomnomzbot-docs\.claude\worktrees\finish
Built-root: dist
Rendered: dist/reference/integrations/spotify/index.html
Voice: docs-work/voice.md
Must know:
- setup | Where Spotify is connected and which account, application configuration and playback requirements apply. | ../../../../nomnomzbot/dashboard/src/views/dashboard/settings/integrations/IntegrationsView.vue
- behavior | How to authorize the intended account, verify its current song, reconnect and change app credentials. | ../../../../nomnomzbot/server/src/NomNomzBot.Infrastructure/Integrations/IntegrationOAuthService.cs
Moves elsewhere:
- playback | Playback devices and browser audio belong with the player workflow. | ../../../../nomnomzbot/server/src/NomNomzBot.Infrastructure/Music/SpotifyMusicProvider.cs | /reference/music/music-player
Checks:
- build: ["cmd", "/c", "yarn", "build"]
