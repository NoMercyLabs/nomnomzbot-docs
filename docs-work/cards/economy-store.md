Route: /reference/economy/store
Reader: A streamer or moderator who knows stream bots, has signed in to the selected channel, and is new to this feature in NomNomzBot.
Type: task
Arrives-with: How do I add an item viewers can buy with channel currency?
Goal: How do I add an item viewers can buy with channel currency.
Success: A saved item has the intended price and purchase action, and the reader can recognize the resulting balance change.
Application-case: A streamer changes an item's price and wants to know what happens to an already submitted purchase.
Prerequisites: Catalog management permission, Moderator by default; enabled channel currency and a working integration that submits purchases as signed-in viewers; tested linked behavior.
Project-root: C:\Projects\NoMercyLabs\nomnomzbot-docs\.claude\worktrees\finish
Built-root: dist
Rendered: dist/reference/economy/store/index.html
Voice: docs-work/voice.md
Must know:
- setup | Items are managed under Economy, need a purchase integration, and start enabled on save; use cost zero and Moderator for the first check. | ../../../../nomnomzbot/dashboard/src/views/dashboard/economy/components/CatalogDialog.vue
- purchase | A purchase checks role, cooldown, limits and wallet funds, then charges before running its target; action failure does not refund automatically. | ../../../../nomnomzbot/server/src/NomNomzBot.Infrastructure/Economy/CatalogService.cs
- lifecycle | Edits affect future purchases; switching off or deleting stops new purchases but preserves history and does not undo paid actions. | ../../../../nomnomzbot/server/src/NomNomzBot.Infrastructure/Economy/CatalogService.cs
Moves elsewhere:
- none
Checks:
- build: ["cmd", "/c", "yarn", "build"]
