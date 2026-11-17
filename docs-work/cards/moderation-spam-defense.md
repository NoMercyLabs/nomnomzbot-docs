Route: /reference/moderation/spam-defense
Reader: A streamer or moderator who knows stream bots, has signed in to the selected channel, and is new to this feature in NomNomzBot.
Type: task
Arrives-with: Which spam-defense settings can I change for my channel?
Goal: Which spam-defense settings can I change for my channel.
Success: The reader can save a valid policy and explain which protection a chosen setting controls.
Application-case: A streamer wants to change one threshold but save watch-only mode for the channel before changing a threshold.
Prerequisites: Access to the selected channel and permission for the described action; any platform connection or output required by that action must be established before the steps.
Project-root: .
Built-root: dist
Rendered: dist/reference/moderation/spam-defense/index.html
Voice: docs-work/voice.md
Must know:
- setup | Where to find the channel's spam-defense policy and the access needed to edit it. | ../../../../nomnomzbot/dashboard/src/views/dashboard/settings/spam-defense/SpamDefenseView.vue
- behavior | The effective defaults, allowed values and save or reset behavior needed to change the intended protection. | ../../../../nomnomzbot/server/src/NomNomzBot.Api/Controllers/V1/SpamDefenseController.cs
- activation | Explicit saved watch-only mode, inherited-default exception, observation period, platform accounts and immediate enforcement consequences come before activation. | ../../../../nomnomzbot/server/src/NomNomzBot.Infrastructure/Moderation/SpamDefenseService.cs
- protections | Explain the participation and watch-hour safeguards, suspicious-user override and the actual newcomer review effect. | ../../../../nomnomzbot/server/src/NomNomzBot.Domain/Moderation/SpamDefense/TrustTierLadder.cs
- campaign | Explain how campaign thresholds interact and the scope of automatic reversal without promising every detection appears on Home. | ../../../../nomnomzbot/server/src/NomNomzBot.Infrastructure/Moderation/SpamCampaignReversalExecutor.cs
Moves elsewhere:
- none
Checks:
- build: ["cmd", "/c", "yarn", "build"]
