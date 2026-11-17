Route: /reference/commands/create-a-command
Reader: A streamer or moderator who knows stream bots, has signed in to the selected channel, and is new to this feature in NomNomzBot.
Type: task
Arrives-with: How do I create and change a command for this channel?
Goal: How do I create and change a command for this channel.
Success: The saved command appears in the command list and produces the chosen reply when invoked under the stated conditions.
Application-case: A moderator needs a command with more than one trigger and later wants to switch it off without deleting it.
Prerequisites: Access to the selected channel and permission for the described action; any platform connection or output required by that action must be established before the steps.
Project-root: .
Built-root: dist
Rendered: dist/reference/commands/create-a-command/index.html
Voice: docs-work/voice.md
Must know:
- setup | Where to create a command, the required name and reply inputs, and when it becomes active. | ../../../../nomnomzbot/dashboard/src/views/dashboard/commands/CommandsView.vue
- behavior | How to save edits, switch the command off, copy it or delete it, including consequences that affect existing uses. | ../../../../nomnomzbot/server/src/NomNomzBot.Api/Controllers/V1/CommandsController.cs
- triggers | How the prefix and match mode determine the messages that run a command, including a pattern with two alternatives. | ../../../../nomnomzbot/server/src/NomNomzBot.Infrastructure/Chat/EventHandlers/ChatMessageHandler.cs:734-803
Moves elsewhere:
- built-in-copies | Resolve a channel command that repeats a built-in name. | ../../../../nomnomzbot/server/src/NomNomzBot.Infrastructure/Chat/EventHandlers/ChatMessageHandler.cs:294-318 | /reference/commands/built-in-commands
Checks:
- build: ["cmd", "/c", "yarn", "build"]
