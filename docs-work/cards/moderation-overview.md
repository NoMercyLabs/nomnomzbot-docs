Route: /reference/moderation/overview
Reader: A streamer or moderator who knows stream bots, has signed in to the selected channel, and is new to this feature in NomNomzBot.
Type: concept
Arrives-with: Which moderation screen should I open for the problem in chat?
Goal: Which moderation screen should I open for the problem in chat.
Success: The reader can find the review queue, a chatter's history and the settings for the relevant protection.
Application-case: A moderator sees a held message and wants context before deciding whether to allow it.
Prerequisites: Familiarity with the dashboard and the selected channel.
Project-root: .
Built-root: dist
Rendered: dist/reference/moderation/overview/index.html
Voice: docs-work/voice.md
Must know:
- setup | Where pending moderation items and a chatter's history are visible, and the access needed to act. | ../../../../nomnomzbot/dashboard/src/views/dashboard/home/components/ReviewQueuePanel.vue
- behavior | How the moderation pages divide message review, filtering and policy choices without repeating their setup procedures. | ../../../../nomnomzbot/dashboard/src/components/layout/profile/ProfileHistory.vue
- decisions | Allow releases a Twitch-held AutoMod message; other reviews resolve locally. Deny waits 6 seconds for Undo but navigation submits immediately. | ../../../../nomnomzbot/dashboard/src/views/dashboard/home/components/ReviewQueuePanel.vue
- source | Review sources differ in prior deletion and platform coverage; resolving a review does not itself apply a timeout or ban. | ../../../../nomnomzbot/server/src/NomNomzBot.Infrastructure/Moderation/ModerationQueueService.cs
Moves elsewhere:
- none
Checks:
- build: ["cmd", "/c", "yarn", "build"]
