Route: /reference/integrations/integrations-page
Reader: A streamer who knows stream bots, has signed in to the selected channel, and is new to this feature in NomNomzBot.
Type: lookup
Arrives-with: Which outside services does my channel use, and how do I fix or remove one?
Goal: Read the Integrations page and connect, reconnect, add permissions to or disconnect a service.
Success: The service row shows the intended state after the action.
Application-case: Spotify stopped working and the streamer reconnects it from its row.
Prerequisites: Access to the selected channel's settings; an account at the outside service.
Project-root: .
Built-root: dist
Rendered: dist/reference/integrations/integrations-page/index.html
Voice: docs-work/voice.md
Must know:
- rows | Each service row shows its state, the account and the granted permission sets; the page has loading, empty and error states. | ../../../../nomnomzbot/dashboard/src/views/dashboard/settings/integrations/IntegrationsView.vue
- actions | Connect, reconnect, add a permission set and disconnect are actions on the row. | ../../../../nomnomzbot/dashboard/src/views/dashboard/settings/integrations/IntegrationsView.vue
Moves elsewhere:
- per-service-setup | Each service keeps its own setup guide. | ../../../../nomnomzbot/server/src/NomNomzBot.Api/Controllers/V1/IntegrationsController.cs | /reference/integrations/spotify
Checks:
- build: ["cmd", "/c", "yarn", "build"]
