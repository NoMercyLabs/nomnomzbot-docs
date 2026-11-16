Route: /reference/moderation/trust-and-escalation
Reader: A streamer or moderator who knows stream bots, has signed in to the selected channel, and is new to this feature in NomNomzBot.
Type: task
Arrives-with: How do trust settings and repeated violations affect moderation actions?
Goal: How do trust settings and repeated violations affect moderation actions.
Success: The reader can distinguish trust-based treatment from an escalation step and predict the next action.
Application-case: A moderator wants repeated violations to escalate while understanding how a new chatter is treated on the first message.
Prerequisites: Access to the selected channel and permission for the described action; any platform connection or output required by that action must be established before the steps.
Project-root: C:\Projects\NoMercyLabs\nomnomzbot-docs\.claude\worktrees\finish
Built-root: dist
Rendered: dist/reference/moderation/trust-and-escalation/index.html
Voice: docs-work/voice.md
Must know:
- setup | Where to set trust policy and the escalation ladder, including prerequisites and when the rules apply. | ../../../../nomnomzbot/dashboard/src/views/dashboard/settings/trust-policy/TrustPolicyView.vue
- behavior | How an escalation advances or resets, and how to save the intended sequence of actions. | ../../../../nomnomzbot/dashboard/src/views/dashboard/settings/escalation/EscalationView.vue
- activation | Saving an enabled ladder changes the next qualifying offense without resetting counts, and disabling the ladder can leave filter fallback timeouts active. | ../../../../nomnomzbot/server/src/NomNomzBot.Infrastructure/Moderation/EventHandlers/ChatFilterExecutionHandler.cs
- counting | Distinguish custom-filter offenses, opted-in automatic account actions, manual actions and held messages; apply the first-offense window and highest applicable step. | ../../../../nomnomzbot/server/src/NomNomzBot.Infrastructure/Moderation/ModerationEscalationService.cs
- trust | Keep numerical trust and heat separate from spam-defense participation tiers, and teach supported penalty/boost/heat adjustments and draft reset. | ../../../../nomnomzbot/server/src/NomNomzBot.Infrastructure/Moderation/ModerationProjectionService.cs
Moves elsewhere:
- none
Checks:
- build: ["cmd", "/c", "yarn", "build"]
