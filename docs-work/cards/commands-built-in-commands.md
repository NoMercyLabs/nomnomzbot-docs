Route: /reference/commands/built-in-commands
Reader: A streamer or moderator who knows stream bots, has signed in to the selected channel, and is new to this feature in NomNomzBot.
Type: lookup
Arrives-with: Which built-in command handles my task, and how do I customize its reply?
Goal: Which built-in command handles my task, and how do I customize its reply.
Success: The reader can find the command, determine who can use it and restore a customized reply when needed.
Application-case: A moderator wants to change the reply of a built-in command without creating a conflicting channel command.
Prerequisites: Access to the selected channel and permission for the described action; any platform connection or output required by that action must be established before the steps.
Project-root: C:\Projects\NoMercyLabs\nomnomzbot-docs\.claude\worktrees\finish-b
Built-root: dist
Rendered: dist/reference/commands/built-in-commands/index.html
Voice: docs-work/voice.md
Must know:
- setup | Where the built-in command list and reply editor are, and how to save or reset a reply. | ../../../../nomnomzbot/dashboard/src/views/dashboard/commands/components/BuiltinEditor.vue
- behavior | The supported command forms, permissions and user-visible outcomes needed to select the right command. | ../../../../nomnomzbot/dashboard/src/views/dashboard/commands/components/BuiltinList.vue
- dispatch | Which built-ins retain precedence over same-named channel commands and what reset restores. | ../../../../nomnomzbot/server/src/NomNomzBot.Infrastructure/Commands/BuiltinCommandService.cs
Moves elsewhere:
- none
Checks:
- build: ["cmd", "/c", "yarn", "build"]
