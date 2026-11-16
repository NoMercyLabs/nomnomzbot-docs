Route: /reference/community/people
Reader: A streamer or moderator who knows stream bots, has signed in to the selected channel, and is new to this feature in NomNomzBot.
Type: task
Arrives-with: How do I find a chatter and inspect their activity in this channel?
Goal: How do I find a chatter and inspect their activity in this channel.
Success: The reader can open the intended person's profile and distinguish channel-specific information from account details.
Application-case: A moderator sees two similar display names and wants to inspect the right account before taking an action.
Prerequisites: Access to the selected channel and the action being configured; required platform accounts and connections must be established before the relevant steps.
Project-root: C:\Projects\NoMercyLabs\nomnomzbot-docs\.claude\worktrees\finish
Built-root: dist
Rendered: dist/reference/community/people/index.html
Voice: docs-work/voice.md
Must know:
- setup | Where to search the channel's people and how a profile identifies the selected account. | ../../../../nomnomzbot/dashboard/src/views/dashboard/people/PeopleView.vue
- behavior | Which profile information and actions are available, their scope and the access required before acting. | ../../../../nomnomzbot/server/src/NomNomzBot.Api/Controllers/V1/CommunityController.cs
Moves elsewhere:
- none
Checks:
- build: ["cmd", "/c", "yarn", "build"]
