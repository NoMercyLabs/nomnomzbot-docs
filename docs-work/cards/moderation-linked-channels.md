Route: /reference/moderation/linked-channels
Reader: A streamer or moderator who knows stream bots, has signed in to the selected channel, and is new to this feature in NomNomzBot.
Type: task
Arrives-with: How do I choose which moderation decisions this channel shares?
Goal: How do I choose which moderation decisions this channel shares.
Success: The reader can distinguish linked-channel sharing choices and predict whether an incoming decision is applied.
Application-case: A streamer wants to receive shared information without automatically applying every shared action.
Prerequisites: Access to the selected channel and permission for the described action; any platform connection or output required by that action must be established before the steps.
Project-root: .
Built-root: dist
Rendered: dist/reference/moderation/linked-channels/index.html
Voice: docs-work/voice.md
Must know:
- setup | Where incoming-ban consent is configured and who controls the channel settings versus trusted servers. | ../../../../nomnomzbot/dashboard/src/views/dashboard/settings/federation/FederationView.vue
- behavior | What the supported incoming shared-ban, network-block and mass-ban permissions apply, including immediate effects and how to stop future participation. | ../../../../nomnomzbot/server/src/NomNomzBot.Api/Controllers/V1/ChannelFederationController.cs
- reach | General and per-server acceptance are additive; network blocks can reach later chat; switching off does not lift existing bans. | ../../../../nomnomzbot/server/src/NomNomzBot.Infrastructure/Federation/FederationOptInService.cs
- massban | Live holds release on approval or going offline, alternate inclusion paths remain, and allow/disallow cover all eligible held batches. | ../../../../nomnomzbot/server/src/NomNomzBot.Infrastructure/Moderation/MassBan/MassBanConsentService.cs
Moves elsewhere:
- none
Checks:
- build: ["cmd", "/c", "yarn", "build"]
