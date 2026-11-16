Route: /reference/integrations/youtube
Reader: A streamer or moderator who knows stream bots, has signed in to the selected channel, and is new to this feature in NomNomzBot.
Type: concept
Arrives-with: Which YouTube connection do I need for streaming or music?
Goal: Which YouTube connection do I need for streaming or music.
Success: The reader can distinguish the channel platform connection from music playback and find the correct setup.
Application-case: A streamer already uses YouTube music playback and wants to connect their YouTube stream chat too.
Prerequisites: Integration write access (Editor by default), intended Google/YouTube channel, and operator-configured YouTube app for channel authorization. Music-only playback follows the Music player guide instead.
Project-root: C:\Projects\NoMercyLabs\nomnomzbot-docs\.claude\worktrees\finish
Built-root: dist
Rendered: dist/reference/integrations/youtube/index.html
Voice: docs-work/voice.md
Must know:
- setup | Where to connect YouTube as a streaming platform and the account and permissions needed. | ../../../../nomnomzbot/server/src/NomNomzBot.Api/Controllers/V1/IntegrationsController.cs
- behavior | How that connection differs from the music player connection and how each reports its state. | ../../../../nomnomzbot/server/src/NomNomzBot.Application/Music/Services/IYouTubePlayerReportService.cs
Moves elsewhere:
- music | OBS player setup and playback state belong on the Music player page. | ../../../../nomnomzbot/server/src/NomNomzBot.Infrastructure/Music/YouTubeMusicProvider.cs | /reference/music/music-player
Checks:
- build: ["cmd", "/c", "yarn", "build"]
