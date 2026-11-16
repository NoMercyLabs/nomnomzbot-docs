Route: /reference/integrations/webhooks-and-event-feeds
Reader: A streamer or moderator who knows stream bots, has signed in to the selected channel, and is new to this feature in NomNomzBot.
Type: task
Arrives-with: Which connection sends events out, and which brings outside events into the bot?
Goal: Which connection sends events out, and which brings outside events into the bot.
Success: The reader can choose the right direction and recognize whether the configured connection received or delivered an event.
Application-case: A streamer wants an outside service to trigger an action and also wants a separate service to receive channel events.
Prerequisites: Access to the selected channel and the action being configured; required platform accounts and connections must be established before the relevant steps.
Project-root: C:\Projects\NoMercyLabs\nomnomzbot-docs\.claude\worktrees\finish
Built-root: dist
Rendered: dist/reference/integrations/webhooks-and-event-feeds/index.html
Voice: docs-work/voice.md
Must know:
- setup | Where outbound webhooks, inbound webhooks and custom feeds are configured and what each direction does. | ../../../../nomnomzbot/dashboard/src/views/dashboard/settings/webhooks/WebhooksView.vue
- behavior | Which credentials and event choices the user must supply, how to inspect results and how to disable a connection. | ../../../../nomnomzbot/dashboard/src/views/dashboard/settings/custom-event-feeds/CustomEventFeedsView.vue
Moves elsewhere:
- none
Checks:
- build: ["cmd", "/c", "yarn", "build"]
