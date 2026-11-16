Route: /reference/automation/timers-and-chat-triggers
Reader: A streamer or moderator who knows stream bots, has signed in to the selected channel, and is new to this feature in NomNomzBot.
Type: task
Arrives-with: How do I post recurring messages or answer a chat phrase?
Goal: How do I post recurring messages or answer a chat phrase.
Success: The reader can predict the first and subsequent timer posts, and distinguish them from phrase-triggered replies.
Application-case: A streamer saves a reminder before going live and wants to know when it first posts and whether it stops after the stream.
Prerequisites: Access to the selected channel and permission for the described action; any platform connection or output required by that action must be established before the steps.
Project-root: C:\Projects\NoMercyLabs\nomnomzbot-docs\.claude\worktrees\finish
Built-root: dist
Rendered: dist/reference/automation/timers-and-chat-triggers/index.html
Voice: docs-work/voice.md
Must know:
- setup | How to create a timer, when posting starts, what controls subsequent posts and how to stop it. | ../../../../nomnomzbot/dashboard/src/views/dashboard/timers/TimersView.vue
- behavior | How to create a chat trigger, choose its matching behavior and control repeated responses. | ../../../../nomnomzbot/server/src/NomNomzBot.Infrastructure/Chat/EventHandlers/ChatMessageHandler.cs
- immediate | Before creating a timer, know it is enabled, immediately due with zero required chat lines, and can run offline while the bot is connected. | ../../../../nomnomzbot/server/src/NomNomzBot.Infrastructure/Commands/Jobs/TimerService.cs
- delivery | Distinguish successful message delivery from scheduled target attempts, including retry and Post once behavior. | ../../../../nomnomzbot/server/src/NomNomzBot.Infrastructure/Commands/Jobs/TimerService.cs
- matching | Commands, soundboard matches and active chat-poll votes precede chat triggers; only one eligible trigger is used and a cooling match does not fall through. | ../../../../nomnomzbot/server/src/NomNomzBot.Infrastructure/Chat/EventHandlers/ChatMessageHandler.cs
- editing | Enabled saves immediately; other edits need Save changes, and Duplicate copies saved timer settings into a disabled copy. | ../../../../nomnomzbot/dashboard/src/views/dashboard/timers/components/TimerEditor.vue
Moves elsewhere:
- none
Checks:
- build: ["cmd", "/c", "yarn", "build"]
