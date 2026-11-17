Route: /reference/settings/readability
Reader: A streamer or moderator who knows stream bots, has signed in to the selected channel, and is new to this feature in NomNomzBot.
Type: task
Arrives-with: How do I make the dashboard easier to read on this device?
Goal: How do I make the dashboard easier to read on this device.
Success: The current dashboard shows the selected text, spacing or contrast setting.
Application-case: A moderator changes text size on a laptop and wants to know whether it also changes the streamer's dashboard.
Prerequisites: Access to the selected channel and the action being configured; required platform accounts and connections must be established before the relevant steps.
Project-root: .
Built-root: dist
Rendered: dist/reference/settings/readability/index.html
Voice: docs-work/voice.md
Must know:
- setup | Where to change readability preferences and which device or account they affect. | ../../../../nomnomzbot/dashboard/src/views/dashboard/settings/ReadabilityView.vue
- behavior | How text, spacing, motion and control-size options appear and how to restore defaults. | ../../../../nomnomzbot/dashboard/src/views/dashboard/settings/ReadabilityView.vue
Moves elsewhere:
- none
Checks:
- build: ["cmd", "/c", "yarn", "build"]
