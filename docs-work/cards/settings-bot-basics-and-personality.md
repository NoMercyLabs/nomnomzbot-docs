Route: /reference/settings/bot-basics-and-personality
Reader: A streamer or moderator who knows stream bots, has signed in to the selected channel, and is new to this feature in NomNomzBot.
Type: task
Arrives-with: Where do I set the bot's prefix, language and tone for this channel?
Goal: Where do I set the bot's prefix, language and tone for this channel.
Success: The saved settings affect the intended channel and the reader knows which future replies they influence.
Application-case: A streamer wants a different command prefix while retaining the current language and greeting behavior.
Prerequisites: Access to the selected channel and the action being configured; required platform accounts and connections must be established before the relevant steps.
Project-root: .
Built-root: dist
Rendered: dist/reference/settings/bot-basics-and-personality/index.html
Voice: docs-work/voice.md
Must know:
- setup | Where basic channel settings are changed, their defaults and save behavior, including offline command behavior. | ../../../../nomnomzbot/dashboard/src/views/dashboard/settings/BasicsView.vue
- behavior | How tone, greetings and engagement choices affect future bot replies and which choices can remain unchanged. | ../../../../nomnomzbot/dashboard/src/views/dashboard/settings/PersonalityView.vue
Moves elsewhere:
- none
Checks:
- build: ["cmd", "/c", "yarn", "build"]
