Route: /reference/moderation/shoutouts
Reader: A streamer or moderator who knows stream bots, has signed in to the selected channel, and is new to this feature in NomNomzBot.
Type: task
Arrives-with: How do I configure shoutouts and act on suggestions?
Goal: How do I configure shoutouts and act on suggestions.
Success: The reader can choose a shoutout action and understand when a rate limit delays or refuses it.
Application-case: A moderator wants to shout out the same streamer again soon after another shoutout.
Prerequisites: Access to the selected channel and permission for the described action; any platform connection or output required by that action must be established before the steps.
Project-root: C:\Projects\NoMercyLabs\nomnomzbot-docs\.claude\worktrees\finish
Built-root: dist
Rendered: dist/reference/moderation/shoutouts/index.html
Voice: docs-work/voice.md
Must know:
- setup | Where shoutout settings and suggestions live, and which action produces chat or a platform shoutout. | ../../../../nomnomzbot/dashboard/src/views/dashboard/settings/shoutouts/ShoutoutsView.vue
- behavior | The timing and eligibility rules that affect the requested shoutout and the observable result. | ../../../../nomnomzbot/server/src/NomNomzBot.Application/Moderation/Services/IShoutoutSuggestionService.cs
- activation | Sending is immediate and real; establish broadcaster Twitch access and any desired TTS output before the first shoutout. | ../../../../nomnomzbot/server/src/NomNomzBot.Infrastructure/Platform/Transport/Helix/SubClients/TwitchChatApi.cs
- messages | Explain message precedence, immediate default reset, and the effect of a per-streamer override. | ../../../../nomnomzbot/server/src/NomNomzBot.Infrastructure/Stream/ShoutoutSender.cs
- repeats | Manual repeats can announce and request speech without another native shoutout; a queued result needs delivery verification. | ../../../../nomnomzbot/server/src/NomNomzBot.Infrastructure/Stream/PipelineActions/ShoutoutAction.cs
Moves elsewhere:
- none
Checks:
- build: ["cmd", "/c", "yarn", "build"]
