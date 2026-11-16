Route: /reference/settings/white-label-bot
Reader: A streamer or moderator who knows stream bots, has signed in to the selected channel, and is new to this feature in NomNomzBot.
Type: task
Arrives-with: How do I make the bot chat through my own bot account?
Goal: How do I make the bot chat through my own bot account.
Success: The channel's next bot message uses the intended account and the reader can restore the prior choice.
Application-case: A streamer accidentally authorizes their broadcaster account while trying to connect a separate bot account.
Prerequisites: Access to the selected channel and the action being configured; required platform accounts and connections must be established before the relevant steps.
Project-root: C:\Projects\NoMercyLabs\nomnomzbot-docs\.claude\worktrees\finish
Built-root: dist
Rendered: dist/reference/settings/white-label-bot/index.html
Voice: docs-work/voice.md
Must know:
- setup | Which account must authorize the connection, the broadcaster access needed and what changes when it is connected. | ../../../../nomnomzbot/dashboard/src/views/dashboard/settings/white-label-bot/WhiteLabelBotView.vue
- behavior | How to complete authorization, grant required platform permissions, verify the speaking account and disconnect it. | ../../../../nomnomzbot/dashboard/src/views/dashboard/settings/white-label-bot/WhiteLabelBotView.vue
Moves elsewhere:
- none
Checks:
- build: ["cmd", "/c", "yarn", "build"]
