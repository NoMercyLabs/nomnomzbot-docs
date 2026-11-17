Route: /reference/integrations/vtube-studio
Reader: A streamer or moderator who knows stream bots, has signed in to the selected channel, and is new to this feature in NomNomzBot.
Type: task
Arrives-with: How do I connect VTube Studio and trigger a model action?
Goal: How do I connect VTube Studio and trigger a model action.
Success: The connection is authorized and an intended model action is visible in VTube Studio.
Application-case: A streamer changes models and needs to select a valid hotkey for the new model.
Prerequisites: Access to the selected channel and the action being configured; required platform accounts and connections must be established before the relevant steps.
Project-root: .
Built-root: dist
Rendered: dist/reference/integrations/vtube-studio/index.html
Voice: docs-work/voice.md
Must know:
- setup | The VTube Studio API and authorization requirements and the connection steps. | ../../../../nomnomzbot/dashboard/src/views/dashboard/vts/VtsView.vue
- behavior | How to select an available model control or hotkey, test it and recognize a disconnected session. | ../../../../nomnomzbot/server/src/NomNomzBot.Api/Controllers/V1/VtsController.cs
Moves elsewhere:
- none
Checks:
- build: ["cmd", "/c", "yarn", "build"]
