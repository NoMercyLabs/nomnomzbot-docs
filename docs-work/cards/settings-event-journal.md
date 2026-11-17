Route: /reference/settings/event-journal
Reader: A streamer or moderator who knows stream bots, has signed in to the selected channel, and is new to this feature in NomNomzBot.
Type: task
Arrives-with: How do I inspect a channel event and use the journal's backup controls?
Goal: How do I inspect a channel event and use the journal's backup controls.
Success: The reader can locate an event and distinguish reading history from a backup or rebuild operation.
Application-case: A moderator wants to investigate a missing action without starting a rebuild of channel data.
Prerequisites: Access to the selected channel and the action being configured; required platform accounts and connections must be established before the relevant steps.
Project-root: .
Built-root: dist
Rendered: dist/reference/settings/event-journal/index.html
Voice: docs-work/voice.md
Must know:
- setup | Where to filter and inspect journal events and what the shown event details mean for the channel. | ../../../../nomnomzbot/dashboard/src/views/dashboard/settings/event-journal/EventJournalView.vue
- behavior | The permissions, scope and consequences of export, backup and rebuild controls before using them. | ../../../../nomnomzbot/server/src/NomNomzBot.Api/Controllers/V1/EventStoreController.cs
Moves elsewhere:
- none
Checks:
- build: ["cmd", "/c", "yarn", "build"]
