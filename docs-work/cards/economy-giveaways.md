Route: /reference/economy/giveaways
Reader: A streamer or moderator who knows stream bots, has signed in to the selected channel, and is new to this feature in NomNomzBot.
Type: task
Arrives-with: How do I open a giveaway, choose a winner and deliver the prize?
Goal: How do I open a giveaway, choose a winner and deliver the prize.
Success: The giveaway has a recorded winner and the reader knows how any code prize is delivered.
Application-case: A moderator needs to draw another winner after the first selected person cannot receive the prize.
Prerequisites: Giveaway management access, Moderator by default; connected Twitch chat for the first announcement workflow; broadcaster access and whisper-capable Twitch connection for code pools; enabled currency for paid entries or currency prizes.
Project-root: .
Built-root: dist
Rendered: dist/reference/economy/giveaways/index.html
Voice: docs-work/voice.md
Must know:
- setup | A new giveaway is a draft; opening accepts entries immediately, including offline; the first workflow is free, keyword-based and announces one eligible viewer. | ../../../../nomnomzbot/server/src/NomNomzBot.Infrastructure/Giveaways/GiveawayService.cs
- entries | Exact keyword entries appear in the entries panel without chat replies; repeated paid entries charge again, while active-viewer draws use recent chat rather than entry fees. | ../../../../nomnomzbot/server/src/NomNomzBot.Infrastructure/Giveaways/EventHandlers/GiveawayKeywordListener.cs
- prizes | Draw and redraw fulfill immediately; claim windows, replacement and deletion do not reclaim earlier prizes or refund entry costs. | ../../../../nomnomzbot/server/src/NomNomzBot.Infrastructure/Giveaways/GiveawayFulfillment.cs
- codes | The broadcaster prepares code supply and private Twitch delivery; a failed whisper leaves its code assigned, so check delivery before replacing the winner or deleting the pool. | ../../../../nomnomzbot/server/src/NomNomzBot.Infrastructure/Giveaways/GiveawayCodePoolService.cs
Moves elsewhere:
- none
Checks:
- build: ["cmd", "/c", "yarn", "build"]
