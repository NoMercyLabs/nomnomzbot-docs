Route: /reference/audio/media-share
Reader: A streamer or moderator who knows stream bots, has signed in to the selected channel, and is new to this feature in NomNomzBot.
Type: task
Arrives-with: How do I enable media sharing and control the queue?
Goal: How do I enable media sharing and control the queue.
Success: An accepted media item appears in the queue and plays through the configured overlay when permitted.
Application-case: A streamer wants submissions reviewed before appearing on stream and needs to remove an unwanted queued item.
Prerequisites: Access to the selected channel and permission for the described action; any platform connection or output required by that action must be established before the steps.
Project-root: C:\Projects\NoMercyLabs\nomnomzbot-docs\.claude\worktrees\finish
Built-root: dist
Rendered: dist/reference/audio/media-share/index.html
Voice: docs-work/voice.md
Must know:
- setup | The requirements for accepting and displaying media and the controls that govern submissions. | ../../../../nomnomzbot/dashboard/src/views/dashboard/media-share/MediaShareView.vue
- behavior | How the review queue, playback and removal controls affect what appears on stream. | ../../../../nomnomzbot/server/src/NomNomzBot.Api/Controllers/V1/MediaShareController.cs
- activation | Saving enables ordinary clip-link and command submissions; approved submissions can start on an idle connected source; moderator media and all admitted play commands bypass review. | ../../../../nomnomzbot/server/src/NomNomzBot.Infrastructure/MediaShare/Builtins/MediaBuiltin.cs
- access | Separate read, configuration, queue and action-running permissions default to Moderator; an ordinary viewer command test requires live availability. | ../../../../nomnomzbot/dashboard/src/views/dashboard/media-share/MediaShareView.vue
- cost | Cost is charged at admission including passive clip links, before approval; reject, skip and removal attempt refunds, while replay does not charge again. | ../../../../nomnomzbot/server/src/NomNomzBot.Infrastructure/MediaShare/MediaShareService.cs
- playback | Approve, replay and Play now can start real output; Play now skips current media, Stop marks it played without advancing, and removing history takes away replay controls. | ../../../../nomnomzbot/server/src/NomNomzBot.Infrastructure/MediaShare/Playback/MediaSharePlaybackService.cs
Moves elsewhere:
- none
Checks:
- build: ["cmd", "/c", "yarn", "build"]
