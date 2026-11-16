Route: /reference/settings/features
Reader: A streamer or moderator who knows stream bots, has signed in to the selected channel, and is new to this feature in NomNomzBot.
Type: task
Arrives-with: How do I enable or disable one feature for this channel?
Goal: How do I enable or disable one feature for this channel.
Success: The feature's saved state matches the reader's choice and they can predict its effect on use.
Application-case: A streamer wants to disable a feature temporarily without deleting its existing configuration.
Prerequisites: Access to the selected channel and the action being configured; required platform accounts and connections must be established before the relevant steps.
Project-root: C:\Projects\NoMercyLabs\nomnomzbot-docs\.claude\worktrees\finish
Built-root: dist
Rendered: dist/reference/settings/features/index.html
Voice: docs-work/voice.md
Must know:
- setup | Where channel feature switches are found and who can change them. | ../../../../nomnomzbot/dashboard/src/views/dashboard/settings/features/FeaturesView.vue
- behavior | What switching each documented feature off stops, which configuration remains and how to enable it again. | ../../../../nomnomzbot/server/src/NomNomzBot.Api/Controllers/V1/FeaturesController.cs
Moves elsewhere:
- none
Checks:
- build: ["cmd", "/c", "yarn", "build"]
