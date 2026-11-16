Route: /reference/commands/cooldowns-and-permissions
Reader: A streamer or moderator who knows stream bots, has signed in to the selected channel, and is new to this feature in NomNomzBot.
Type: task
Arrives-with: How do I control who can use a command and how often?
Goal: How do I control who can use a command and how often.
Success: The reader can predict whether a viewer is allowed to invoke the command and when the next invocation is allowed.
Application-case: A command has both shared and per-person waits; another viewer invokes it between two attempts by the first viewer.
Prerequisites: Access to the selected channel and permission for the described action; any platform connection or output required by that action must be established before the steps.
Project-root: C:\Projects\NoMercyLabs\nomnomzbot-docs\.claude\worktrees\finish-b
Built-root: dist
Rendered: dist/reference/commands/cooldowns-and-permissions/index.html
Voice: docs-work/voice.md
Must know:
- setup | Where to set command access and how the shared and per-person cooldowns combine, including units and zero values. | ../../../../nomnomzbot/dashboard/src/views/dashboard/commands/components/commandDraft.ts
- behavior | Which roles bypass waits, how rejected attempts affect the waits, and how to test the chosen restrictions. | ../../../../nomnomzbot/dashboard/src/views/dashboard/commands/components/CommandEditor.vue
- execution | Access is checked before both waits, rejected attempts do not restart them, and platform moderators bypass the waits. | ../../../../nomnomzbot/server/src/NomNomzBot.Infrastructure/Chat/EventHandlers/ChatMessageHandler.cs:418-487
Moves elsewhere:
- platform-roles | How platform roles and bot team membership contribute to command access. | ../../../../nomnomzbot/server/src/NomNomzBot.Domain/Identity/ChatRole.cs | /reference/settings/permissions
Checks:
- build: ["cmd", "/c", "yarn", "build"]
