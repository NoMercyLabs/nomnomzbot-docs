Route: /reference/getting-started/first-command
Type: task
Reader: A streamer or moderator who already knows what a chat command is, is new to NomNomzBot, is signed in and has connected the channel, and wants to see the bot answer once before doing anything else.
Arrives-with: What is the shortest way to get one working reply in my chat, and why does the bot stay silent when I test?
Goal: Create one command in the dashboard and see the bot answer it in the channel's chat.
Success: Typing the trigger in the channel's chat as the broadcaster or a moderator makes the bot post the saved reply.
Application-case: A moderator of a friend's channel creates a command named schedule with their friend's stream times, and tests it while the friend is offline.
Prerequisites: Signed in; the channel connected; a role that may change commands (Moderator or above by default); the dashboard switched to the right channel.
Project-root: .
Built-root: dist
Rendered: dist/reference/getting-started/first-command/index.html
Voice: docs-work/voice.md
Must know:
- who | Reading the command list needs a Moderator, with VIP possible by the broadcaster's choice; creating and editing commands needs a Moderator | ../../../../nomnomzbot/server/src/NomNomzBot.Infrastructure/Content/Identity/ActionDefinitionSeeder.cs:179-180
- on-at-once | A command is created switched on | ../../../../nomnomzbot/server/src/NomNomzBot.Application/Commands/Dtos/CommandDtos.cs:147-148
- name-clean | The dialog drops a leading ! and lowercases the name, so !Hello is saved as hello | ../../../../nomnomzbot/dashboard/src/views/dashboard/commands/components/NewCommandDialog.vue:92-94
- default-prefix | A new command uses the channel prefix, and the prefix is ! when the channel has set none | ../../../../nomnomzbot/server/src/NomNomzBot.Infrastructure/Commands/CommandService.cs:636-644
- offline-gate | While the channel is offline and not set to keep commands on, viewers get no answer; the broadcaster and moderators still do | ../../../../nomnomzbot/server/src/NomNomzBot.Infrastructure/Chat/OfflineCommandGate.cs:12-14
- offline-switch | The switch is named Keep commands and rewards on while offline and is on the Bot basics settings page | ../../../../nomnomzbot/dashboard/src/views/dashboard/settings/i18n/en.json:106-109
Moves elsewhere:
- none
Checks:
- build: ["cmd", "/c", "yarn", "build"]
