Route: /reference/settings/billing
Reader: A streamer or moderator who knows stream bots, has signed in to the selected channel, and is new to this feature in NomNomzBot.
Type: concept
Arrives-with: What does the Billing screen describe for my account?
Goal: What does the Billing screen describe for my account.
Success: The reader can interpret the account screen without mistaking it for permission to sell the software or host it for payment.
Application-case: A person runs a bot for friends and sees plan or invite information in Billing.
Prerequisites: Access to the selected channel and the action being configured; required platform accounts and connections must be established before the relevant steps.
Project-root: C:\Projects\NoMercyLabs\nomnomzbot-docs\.claude\worktrees\finish
Built-root: dist
Rendered: dist/reference/settings/billing/index.html
Voice: docs-work/voice.md
Must know:
- setup | Where account plan and invite information appears and what accepting an invite changes. | ../../../../nomnomzbot/dashboard/src/views/dashboard/settings/billing/BillingView.vue
- behavior | The distinction between account-screen information and the software's noncommercial use and hosting rule. | ../../../../nomnomzbot/LICENSE
Moves elsewhere:
- none
Checks:
- build: ["cmd", "/c", "yarn", "build"]
