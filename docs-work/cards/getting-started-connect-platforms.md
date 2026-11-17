Route: /reference/getting-started/connect-platforms
Type: task
Reader: A streamer who already knows what a stream bot does, is new to NomNomzBot, has just signed in as broadcaster or editor, and also streams on Kick or YouTube; or a moderator wondering why there is no Connect button.
Arrives-with: Is my channel connected, and how do I add my other platform to the same dashboard?
Goal: Connect Kick or YouTube to the channel and read the connection status correctly.
Success: Home shows the platform account name with Live or Offline once stream status loads; Stream shows the account name and Connected.
Application-case: A streamer who streams only on YouTube beside Twitch opens Home, finds YouTube listed as Not connected, connects it, and later sees Spotify marked Not connected after its saved sign-in stopped working (Home cannot show Sign in again).
Prerequisites: Signed in to the channel's dashboard; a role that may change the channel's connections (Editor or Broadcaster by default); an account on the platform to connect.
Project-root: .
Built-root: dist
Rendered: dist/reference/getting-started/connect-platforms/index.html
Voice: docs-work/voice.md
Must know:
- who-connects | The Connect button shows only to a role that holds the integration write action, which is Editor by default; reading connections is Moderator by default | ../../../../nomnomzbot/server/src/NomNomzBot.Infrastructure/Content/Identity/ActionDefinitionSeeder.cs:401-402
- connectable | Only Kick and YouTube have a connect flow from the dashboard | ../../../../nomnomzbot/dashboard/src/api/vocabulary.ts:24-27
- twitch-already | Twitch counts as connected from the sign-in, so its row has no Connect button on Home | ../../../../nomnomzbot/dashboard/src/views/dashboard/home/components/ConnectionsPanel.vue:64-67
- confirm | Connect asks for a confirmation on the panel first, and the platform opens in a new window | ../../../../nomnomzbot/dashboard/src/views/dashboard/stream/PlatformRows.vue:89-109
- line-states | A platform row shows Not connected, or the account with Live or Offline, or only the account until the stream state loads | ../../../../nomnomzbot/dashboard/src/views/dashboard/home/components/ConnectionsPanel.vue:85-98
Moves elsewhere:
- none
Checks:
- build: ["cmd", "/c", "yarn", "build"]
