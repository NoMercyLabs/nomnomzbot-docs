Route: /reference/settings/your-data-and-privacy
Reader: A streamer or moderator who knows stream bots, has signed in to the selected channel, and is new to this feature in NomNomzBot.
Type: task
Arrives-with: Where do I download my data, change consent or delete it?
Goal: Where do I download my data, change consent or delete it.
Success: The reader can recognize an export and understand the scope and effect of each privacy choice before confirming.
Application-case: A viewer wants to stop optional processing without deleting their identity or unrelated channel data.
Prerequisites: Access to the selected channel and the action being configured; required platform accounts and connections must be established before the relevant steps.
Project-root: .
Built-root: dist
Rendered: dist/reference/settings/your-data-and-privacy/index.html
Voice: docs-work/voice.md
Must know:
- setup | Where personal data and consent controls are found and which signed-in person or channel they affect. | ../../../../nomnomzbot/dashboard/src/views/dashboard/settings/your-data/YourDataView.vue
- behavior | How export, opt-out and deletion differ, including what is irreversible and when changes take effect. | ../../../../nomnomzbot/server/src/NomNomzBot.Api/Controllers/V1/GdprController.cs
Moves elsewhere:
- none
Checks:
- build: ["cmd", "/c", "yarn", "build"]
