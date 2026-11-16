Route: /reference/community/events
Reader: A streamer or moderator who knows stream bots, has signed in to the selected channel, and is new to this feature in NomNomzBot.
Type: lookup
Arrives-with: Where do I find a raid or gifted sub from earlier in the stream, and can I show it again?
Goal: Find an earlier stream event and replay it for chat, the voice and the overlays.
Success: The reader finds the event in the right stream section and replays it.
Application-case: A raid arrived while the streamer was away from the keyboard, and the streamer wants the alert to play again.
Prerequisites: Access to the selected channel; events exist only for streams the bot has seen.
Project-root: C:\Projects\NoMercyLabs\nomnomzbot-docs\.claude\worktrees\finish
Built-root: dist
Rendered: dist/reference/community/events/index.html
Voice: docs-work/voice.md
Must know:
- sections | The page lists the events of the current stream and of the stream before it, each with its own empty and error text. | ../../../../nomnomzbot/dashboard/src/views/dashboard/events/EventsView.vue
- split | Events are split into stream sections by stream start time. | ../../../../nomnomzbot/dashboard/src/views/dashboard/events/splitByStream.ts
- replay | Each listed event can be replayed for chat, the voice and the overlays. | ../../../../nomnomzbot/dashboard/src/views/dashboard/events/EventsView.vue
Moves elsewhere:
- event-responses | What a replayed event makes the bot say and show. | ../../../../nomnomzbot/server/src/NomNomzBot.Application/Commands/Services/IEventResponseService.cs | /reference/automation/event-responses
Checks:
- build: ["cmd", "/c", "yarn", "build"]
