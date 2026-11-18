Route: /reference/economy/leaderboards-and-games
Reader: A streamer or moderator who knows stream bots, has signed in to the selected channel, and is new to this feature in NomNomzBot.
Type: task
Arrives-with: How do I rank balances or recent currency changes and show the result in chat?
Goal: Configure a currency ranking and understand what the chat command publishes.
Success: The reader saves the intended balance, earned, spent or jar ranking and can check the chat output.
Application-case: A streamer wants to rank currency gained this week rather than the balances viewers saved earlier.
Prerequisites: Leaderboard configuration access, Moderator by default; channel currency with viewer balances and connected chat for the command check. Saved rankings may be published immediately.
Project-root: .
Built-root: dist
Rendered: dist/reference/economy/leaderboards-and-games/index.html
Voice: docs-work/voice.md
Must know:
- setup | Save a Whole channel Balance board under Economy, with configuration permission and chat access established first. | ../../../../nomnomzbot/dashboard/src/views/dashboard/economy/components/LeaderboardDialog.vue
- ranking | Balance ignores the period; Earned and Spent count credits and debits, while jar boards count contributions and periods start at UTC boundaries. | ../../../../nomnomzbot/server/src/NomNomzBot.Infrastructure/Economy/EconomyLeaderboardService.cs
- publication | The command shows at most five entries, prefers a visible board and otherwise falls back to a saved one; removing a board leaves balances unchanged. | ../../../../nomnomzbot/server/src/NomNomzBot.Infrastructure/Commands/Builtins/LeaderboardBuiltin.cs
Moves elsewhere:
- none
Checks:
- build: ["cmd", "/c", "yarn", "build"]
