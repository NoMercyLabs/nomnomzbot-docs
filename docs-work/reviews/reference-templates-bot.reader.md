# Reader review: src/content/reference/en/templates/bot.mdx
Verdict: PASS
Reviewed: C:/Projects/NoMercyLabs/nomnomzbot-docs/src/content/reference/en/templates/bot.mdx
Reviewed-SHA: 7e78a98a2f1a6dae

Tests (reader as a streamer who does not code):
1. Find a helper: "bot name" is at L27 `{bot.name}`; "how many commands" is at L16 `{bot.commands.count}`. Both found in one look.
2. Use a helper: `{bot.name}` gives `SampleBot`; `{bot.version}` gives `1.42.0`; `{bot.uptime}` gives `3d 4h`. Each row shows the typed helper and what it gives.
3. Intro (L6-9) names `{bot.*}` and `{botname}`; both have rows. Intro says when to use them. Links to the overview at L38.
4. Backticks and braces are correct in all rows. No broken table cells.

Findings:
- [L27 and L36] `{bot.name}` ("The name of the bot in chat") and `{botname}` ("The bot display name") both give the bot name. A reader cannot tell which to type. Fix: say which one to use, or say they are the same.
- [L21] `{bot.dashboard}`: "Empty when no public address is set up." The reader does not know what a public address is or where to set it. Fix: name the setting or link to it.
- [L11] "Each row is its own example" is accurate but reads as a warning. Not blocking.
