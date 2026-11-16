Route: /reference/commands/quotes
Reader: A streamer or moderator who knows stream bots, has signed in to the selected channel, and is new to this feature in NomNomzBot.
Type: task
Arrives-with: How do I save and retrieve a quote for this channel?
Goal: How do I save and retrieve a quote for this channel.
Success: The saved quote can be found and read back through the documented command or dashboard action.
Application-case: A moderator needs to correct a saved quote while retaining the information needed to find it again.
Prerequisites: Access to the selected channel and permission for the described action; any platform connection or output required by that action must be established before the steps.
Project-root: C:\Projects\NoMercyLabs\nomnomzbot-docs\.claude\worktrees\finish-b
Built-root: dist
Rendered: dist/reference/commands/quotes/index.html
Voice: docs-work/voice.md
Must know:
- setup | Where to add or edit a quote and which fields identify it. | ../../../../nomnomzbot/dashboard/src/views/dashboard/quotes/QuotesView.vue
- behavior | How to retrieve a quote and what editing or removing it changes for readers using its number. | ../../../../nomnomzbot/server/src/NomNomzBot.Api/Controllers/V1/QuotesController.cs
- chat-forms | Chat read, add, edit and delete forms, including reply capture and the permissions that distinguish them. | ../../../../nomnomzbot/server/src/NomNomzBot.Infrastructure/Quotes/Builtins/QuoteBuiltin.cs
Moves elsewhere:
- none
Checks:
- build: ["cmd", "/c", "yarn", "build"]
