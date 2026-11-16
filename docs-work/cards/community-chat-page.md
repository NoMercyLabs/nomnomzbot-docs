Route: /reference/community/chat-page
Reader: A streamer or moderator who knows stream bots, has signed in to the selected channel, and is new to this feature in NomNomzBot.
Type: task
Arrives-with: How do I use the dashboard chat and act on the right message?
Goal: How do I use the dashboard chat and act on the right message.
Success: The reader can send a message or perform the intended moderation action in the selected channel.
Application-case: A moderator replies to one chatter while viewing a mixed feed and must avoid sending the reply to the wrong platform.
Prerequisites: Access to the selected channel and the action being configured; required platform accounts and connections must be established before the relevant steps.
Project-root: C:\Projects\NoMercyLabs\nomnomzbot-docs\.claude\worktrees\finish
Built-root: dist
Rendered: dist/reference/community/chat-page/index.html
Voice: docs-work/voice.md
Must know:
- setup | How to select the channel or platform, send and reply to chat, and recognize the sender identity. | ../../../../nomnomzbot/dashboard/src/views/dashboard/chat/ChatView.vue
- behavior | How to inspect a chatter, search history and moderate a selected message with the required permission. | ../../../../nomnomzbot/server/src/NomNomzBot.Api/Controllers/V1/ChatController.cs
Moves elsewhere:
- none
Checks:
- build: ["cmd", "/c", "yarn", "build"]
