Route: /reference/automation/event-responses
Reader: A streamer or moderator who knows stream bots, has signed in to the selected channel, and is new to this feature in NomNomzBot.
Type: task
Arrives-with: How do I change what the bot says or does when a stream event arrives?
Goal: How do I change what the bot says or does when a stream event arrives.
Success: The reader can save an event response and determine which reply or action will run for the selected event.
Application-case: A streamer wants a different raid response and later wants to restore the provided response.
Prerequisites: Access to the selected channel and permission for the described action; any platform connection or output required by that action must be established before the steps.
Project-root: C:\Projects\NoMercyLabs\nomnomzbot-docs\.claude\worktrees\finish
Built-root: dist
Rendered: dist/reference/automation/event-responses/index.html
Voice: docs-work/voice.md
Must know:
- setup | Where event responses are selected and edited, which events supply which reply values, and when a saved change takes effect. | ../../../../nomnomzbot/dashboard/src/views/dashboard/event-responses/EventResponsesView.vue
- behavior | How response actions, enabling and resetting behave, including a way to recognize the configured result. | ../../../../nomnomzbot/server/src/NomNomzBot.Api/Controllers/V1/EventResponsesController.cs
- live-test | Test immediately uses the saved configuration and real presentation and automation; its consequences must precede the first test step. | ../../../../nomnomzbot/server/src/NomNomzBot.Infrastructure/Commands/EventResponseTestService.cs
- defaults | Distinguish following platform defaults, own settings, tone lines and the reset effects on enabled state, speech, delivery and bindings. | ../../../../nomnomzbot/server/src/NomNomzBot.Infrastructure/Commands/EventResponseService.cs
- speech | Simple-reply speech follows successful chat delivery; reply tone does not determine all speech voices. | ../../../../nomnomzbot/server/src/NomNomzBot.Infrastructure/Platform/Eventing/EventResponseExecutor.cs
Moves elsewhere:
- none
Checks:
- build: ["cmd", "/c", "yarn", "build"]
