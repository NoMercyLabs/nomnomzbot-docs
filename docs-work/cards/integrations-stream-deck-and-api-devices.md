Route: /reference/integrations/stream-deck-and-api-devices
Reader: A streamer or moderator who knows stream bots, has signed in to the selected channel, and is new to this feature in NomNomzBot.
Type: task
Arrives-with: How do I authorize a device to perform only the actions I choose?
Goal: How do I authorize a device to perform only the actions I choose.
Success: The device is paired or has a scoped key and can perform the permitted action.
Application-case: A streamer replaces a Stream Deck tool and wants to remove the old tool's access without affecting the replacement.
Prerequisites: Access to the selected channel and the action being configured; required platform accounts and connections must be established before the relevant steps.
Project-root: .
Built-root: dist
Rendered: dist/reference/integrations/stream-deck-and-api-devices/index.html
Voice: docs-work/voice.md
Must know:
- setup | Where to create an API key or approve a pairing code, including the channel and permission choices. | ../../../../nomnomzbot/dashboard/src/views/dashboard/settings/api-devices/ApiDevicesView.vue
- behavior | How to store the revealed key, recognize a paired device and revoke or rotate its access. | ../../../../nomnomzbot/server/src/NomNomzBot.Api/Controllers/V1/AutomationTokensController.cs
Moves elsewhere:
- none
Checks:
- build: ["cmd", "/c", "yarn", "build"]
