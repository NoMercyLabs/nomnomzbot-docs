Route: /reference/settings/channel-management
Reader: A streamer or moderator who knows stream bots, has signed in to the selected channel, and is new to this feature in NomNomzBot.
Type: task
Arrives-with: How do joining, resetting and deleting change this channel?
Goal: How do joining, resetting and deleting change this channel.
Success: The reader can choose the intended operation and predict which data and connections it affects before confirming.
Application-case: A broadcaster wants the bot to leave chat temporarily and is considering resetting or deleting the channel instead.
Prerequisites: Access to the selected channel and the action being configured; required platform accounts and connections must be established before the relevant steps.
Project-root: C:\Projects\NoMercyLabs\nomnomzbot-docs\.claude\worktrees\finish
Built-root: dist
Rendered: dist/reference/settings/channel-management/index.html
Voice: docs-work/voice.md
Must know:
- setup | Where channel-management actions are and who can perform them. | ../../../../nomnomzbot/dashboard/src/views/dashboard/settings/channel-management/ChannelManagementView.vue
- behavior | The scope, preview and confirmation of leave, reset and delete actions, including recovery where supported. | ../../../../nomnomzbot/server/src/NomNomzBot.Api/Controllers/V1/ChannelsController.cs
Moves elsewhere:
- none
Checks:
- build: ["cmd", "/c", "yarn", "build"]
