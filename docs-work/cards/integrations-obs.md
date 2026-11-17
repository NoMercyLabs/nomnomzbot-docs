Route: /reference/integrations/obs
Reader: A streamer or moderator who knows stream bots, has signed in to the selected channel, and is new to this feature in NomNomzBot.
Type: task
Arrives-with: How do I connect OBS and use the dashboard controls?
Goal: How do I connect OBS and use the dashboard controls.
Success: The dashboard reports an OBS connection and the selected control changes the intended OBS state.
Application-case: A streamer wants to change a scene without accidentally starting the stream or recording.
Prerequisites: Broadcaster configures the connection; reachable OBS WebSocket server with matching host, port and password. Prepare off air for the first scene change; editor-level control by default, with separate broadcast-button permission.
Project-root: .
Built-root: dist
Rendered: dist/reference/integrations/obs/index.html
Voice: docs-work/voice.md
Must know:
- setup | The OBS WebSocket requirements, connection fields and authentication needed before connecting. | ../../../../nomnomzbot/dashboard/src/views/dashboard/obs/ObsView.vue
- behavior | How scene, streaming and recording controls act on OBS and how to recognize a lost connection. | ../../../../nomnomzbot/server/src/NomNomzBot.Api/Controllers/V1/ObsController.cs
Moves elsewhere:
- browser-sources | Browser-source setup and recovery belong on the overlay guide. | ../../../../nomnomzbot/dashboard/src/views/dashboard/obs/components/RequiredOverlaysPanel.vue | /reference/overlays/obs-browser-source
Checks:
- build: ["cmd", "/c", "yarn", "build"]
