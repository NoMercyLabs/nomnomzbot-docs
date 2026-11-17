Route: /reference/moderation/bans-and-blocked-terms
Reader: A streamer or moderator who knows stream bots, has signed in to the selected channel, and is new to this feature in NomNomzBot.
Type: task
Arrives-with: Where do I remove a ban or change the phrases Twitch blocks?
Goal: Where do I remove a ban or change the phrases Twitch blocks.
Success: The reader can find the affected entry and recognize the result of unbanning or changing a blocked term.
Application-case: A moderator needs to unblock a phrase without lifting a viewer's unrelated ban.
Prerequisites: Access to the selected channel and permission for the described action; any platform connection or output required by that action must be established before the steps.
Project-root: .
Built-root: dist
Rendered: dist/reference/moderation/bans-and-blocked-terms/index.html
Voice: docs-work/voice.md
Must know:
- setup | Where bans and blocked terms are listed and which role can change them. | ../../../../nomnomzbot/dashboard/src/views/dashboard/settings/banned/BannedView.vue
- behavior | How unbanning and adding or removing a blocked term affect the channel, including confirmation and visible results. | ../../../../nomnomzbot/dashboard/src/views/dashboard/settings/blocked-terms/BlockedTermsView.vue
- connection | Reading permanent bans needs the broadcaster connection; unban and blocked-term actions use the acting user Twitch identity and permissions. | ../../../../nomnomzbot/server/src/NomNomzBot.Infrastructure/Moderation/ModerationService.cs
- effects | Unban and Unblock have no confirmation and affect Twitch immediately; other channel moderation can still apply. | ../../../../nomnomzbot/dashboard/src/views/dashboard/settings/banned/BannedView.vue
Moves elsewhere:
- none
Checks:
- build: ["cmd", "/c", "yarn", "build"]
