Route: /reference/automation/rewards
Reader: A streamer or moderator who knows stream bots, has signed in to the selected channel, and is new to this feature in NomNomzBot.
Type: task
Arrives-with: How do I connect a channel-point reward to a bot action and handle redemptions?
Goal: How do I connect a channel-point reward to a bot action and handle redemptions.
Success: The reader can save a reward and distinguish pending, completed and canceled redemptions.
Application-case: A moderator needs to handle a queued redemption without accidentally running its action twice.
Prerequisites: Access to the selected channel and permission for the described action; any platform connection or output required by that action must be established before the steps.
Project-root: C:\Projects\NoMercyLabs\nomnomzbot-docs\.claude\worktrees\finish
Built-root: dist
Rendered: dist/reference/automation/rewards/index.html
Voice: docs-work/voice.md
Must know:
- setup | The Twitch and dashboard access requirements, existing reward fields and when saved changes take effect. | ../../../../nomnomzbot/dashboard/src/views/dashboard/channel-points/ChannelPointsView.vue
- behavior | How actions run and how to complete or cancel a pending redemption, including the effect on points. | ../../../../nomnomzbot/server/src/NomNomzBot.Api/Controllers/V1/RewardsController.cs
- reaction | The reward reaction runs on redemption; speech and countdowns are separate, and an empty saved simple reply silences the event-response fallback. | ../../../../nomnomzbot/server/src/NomNomzBot.Infrastructure/Rewards/EventHandlers/RewardRedeemedHandler.cs
- bulk | Queue actions affect selected or displayed requests and can partly succeed; completing does not rerun the reaction and rejecting does not undo it. | ../../../../nomnomzbot/dashboard/src/views/dashboard/channel-points/components/RedemptionsPanel.vue
Moves elsewhere:
- none
Checks:
- build: ["cmd", "/c", "yarn", "build"]
