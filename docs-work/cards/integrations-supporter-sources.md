Route: /reference/integrations/supporter-sources
Reader: A streamer or moderator who knows stream bots, has signed in to the selected channel, and is new to this feature in NomNomzBot.
Type: task
Arrives-with: How do I connect a supporter service and see the events it sends?
Goal: How do I connect a supporter service and see the events it sends.
Success: The configured source reports a connection and received supporter events are identifiable.
Application-case: A streamer connects more than one supporter service and needs to identify which source produced a donation.
Prerequisites: Access to the selected channel and the action being configured; required platform accounts and connections must be established before the relevant steps.
Project-root: C:\Projects\NoMercyLabs\nomnomzbot-docs\.claude\worktrees\finish
Built-root: dist
Rendered: dist/reference/integrations/supporter-sources/index.html
Voice: docs-work/voice.md
Must know:
- setup | Where a supporter source is added and which service-specific credentials or callback settings are required. | ../../../../nomnomzbot/dashboard/src/views/dashboard/supporters/SupporterSourcesView.vue
- behavior | How to recognize received events, correct a failed connection and stop a source. | ../../../../nomnomzbot/server/src/NomNomzBot.Api/Controllers/V1/SupportersController.cs
Moves elsewhere:
- none
Checks:
- build: ["cmd", "/c", "yarn", "build"]
