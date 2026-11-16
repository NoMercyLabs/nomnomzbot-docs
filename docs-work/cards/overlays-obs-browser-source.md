Route: /reference/overlays/obs-browser-source
Reader: A streamer or moderator who knows stream bots, has signed in to the selected channel, and is new to this feature in NomNomzBot.
Type: task
Arrives-with: Which overlay link do I put into OBS, and how do I tell it is connected?
Goal: Which overlay link do I put into OBS, and how do I tell it is connected.
Success: The browser source displays the intended overlay and the reader can recognize its connection state.
Application-case: A streamer replaces a browser-source link and wants to keep the correct overlay dimensions and reconnect behavior.
Prerequisites: Access to the selected channel and permission for the described action; any platform connection or output required by that action must be established before the steps.
Project-root: C:\Projects\NoMercyLabs\nomnomzbot-docs\.claude\worktrees\finish
Built-root: dist
Rendered: dist/reference/overlays/obs-browser-source/index.html
Voice: docs-work/voice.md
Must know:
- setup | How to obtain and use the overlay link in an OBS browser source, including required dimensions and access properties. | ../../../../nomnomzbot/server/src/NomNomzBot.Api/Controllers/OverlayHostController.cs
- behavior | How to recognize a working source and recover from a stale link or disconnected source. | ../../../../nomnomzbot/server/src/NomNomzBot.Api/Controllers/OverlayTicketController.cs
- live-output | Loading a source connects it to live events immediately; a connection badge alone does not verify visible or audible output. | ../../../../nomnomzbot/dashboard/src/views/dashboard/overlays/components/ObsSetupAction.vue
- origin | Copy the private per-overlay link and use a bot address reachable from the streaming computer; built-in setup values come from the dialog. | ../../../../nomnomzbot/server/src/NomNomzBot.Api/Controllers/V1/WidgetsController.cs
Moves elsewhere:
- none
Checks:
- build: ["cmd", "/c", "yarn", "build"]
