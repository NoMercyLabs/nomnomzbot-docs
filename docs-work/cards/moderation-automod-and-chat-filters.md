Route: /reference/moderation/automod-and-chat-filters
Reader: A streamer or moderator who knows stream bots, has signed in to the selected channel, and is new to this feature in NomNomzBot.
Type: task
Arrives-with: How do I configure the filters and test a rule before it affects chat?
Goal: How do I configure the filters and test a rule before it affects chat.
Success: The reader can distinguish Twitch AutoMod from bot filters and predict the chosen rule's response.
Application-case: A moderator wants to test a phrase rule before applying it to ordinary viewer messages.
Prerequisites: Access to the selected channel and permission for the described action; any platform connection or output required by that action must be established before the steps.
Project-root: C:\Projects\NoMercyLabs\nomnomzbot-docs\.claude\worktrees\finish
Built-root: dist
Rendered: dist/reference/moderation/automod-and-chat-filters/index.html
Voice: docs-work/voice.md
Must know:
- setup | Where Twitch AutoMod and bot filters are configured, their access requirements and when changes take effect. | ../../../../nomnomzbot/dashboard/src/views/dashboard/settings/automod/AutomodView.vue
- behavior | How to create and test a custom filter, select its action and interpret exemptions. | ../../../../nomnomzbot/dashboard/src/views/dashboard/settings/chat-filters/ChatFiltersView.vue
- activation | Saving or enabling filters immediately applies deletion, timeout or review rules, including offline; platform moderators and broadcaster are exempt. | ../../../../nomnomzbot/server/src/NomNomzBot.Infrastructure/Moderation/EventHandlers/ChatFilterExecutionHandler.cs
- test | Try it uses the unsaved text rule without chat effects and does not test role exemptions or enforcement permission. | ../../../../nomnomzbot/server/src/NomNomzBot.Infrastructure/Moderation/ChatFilterService.cs
- matching | Domain/subdomain, substring, case and regex behavior; first matching enabled custom filter wins and its count reflects applied actions. | ../../../../nomnomzbot/server/src/NomNomzBot.Infrastructure/Moderation/EventHandlers/ChatFilterExecutionHandler.cs
- platforms | Twitch AutoMod holds messages; bot hold deletes before review, flag queues only Twitch, and non-Twitch escalation uses timeout. | ../../../../nomnomzbot/server/src/NomNomzBot.Infrastructure/Moderation/EventHandlers/ChatFilterExecutionHandler.cs
Moves elsewhere:
- none
Checks:
- build: ["cmd", "/c", "yarn", "build"]
