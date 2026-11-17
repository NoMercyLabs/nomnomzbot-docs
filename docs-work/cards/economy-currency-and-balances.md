Route: /reference/economy/currency-and-balances
Reader: A streamer or moderator who knows stream bots, has signed in to the selected channel, and is new to this feature in NomNomzBot.
Type: task
Arrives-with: How do I enable channel currency and manage a viewer's balance?
Goal: How do I enable channel currency and manage a viewer's balance.
Success: The reader can save earning rules, inspect a balance and distinguish a manual adjustment from earned currency.
Application-case: A moderator wants to correct one balance without changing the earning rules for everyone.
Prerequisites: Selected-channel currency permissions, Moderator by default; connected channel chat before testing message earnings.
Project-root: .
Built-root: dist
Rendered: dist/reference/economy/currency-and-balances/index.html
Voice: docs-work/voice.md
Must know:
- setup | Where to save currency and enable one chat rule, required access, and that enabling an existing rule starts future payouts immediately. | ../../../../nomnomzbot/dashboard/src/views/dashboard/economy/EconomyView.vue
- earnings | Existing balances survive rule edits and disabling; new rules start enabled, and raid earnings multiply the rate by raider count. | ../../../../nomnomzbot/server/src/NomNomzBot.Infrastructure/Economy/EventHandlers/EngagementEarningHandler.cs
- balances | Adjustments add or subtract, require an enabled currency and unfrozen wallet, and cannot overdraw or credit beyond the maximum. | ../../../../nomnomzbot/server/src/NomNomzBot.Infrastructure/Economy/CurrencyAccountService.cs
- jars | Creating an open jar moves no points; a contribution debits the triggering viewer, closing preserves the pot, and deleting does not refund it. | ../../../../nomnomzbot/server/src/NomNomzBot.Infrastructure/Economy/SavingsJarService.cs
Moves elsewhere:
- none
Checks:
- build: ["cmd", "/c", "yarn", "build"]
