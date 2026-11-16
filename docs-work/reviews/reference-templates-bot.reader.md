# Current targeted reader review

Verdict: PARTIAL
Reviewed: src/content/reference/en/templates/bot.mdx
Reviewed-SHA: a3963e5fdc87ba638fd06d3dd5685550cc08f628400981d3d6a624675cfb5725
Reviewed-SHA256: a3963e5fdc87ba638fd06d3dd5685550cc08f628400981d3d6a624675cfb5725
Reviewed-Date: 2026-11-06
Reviewer: final-learning editing author; self-review, not independent
Product: 2dfefbb0c393f439954d79b32ac11511678d7f44

Full article read for editorial clarity; source verification is focused on the command-list rows, not an exhaustive factual PASS or live test. BotCommandHelpers.cs:36-49 supplies user.role; BotCommands.cs:29-69 builds the lists and filters by minimum role only (both under server/src/NomNomzBot.Infrastructure/Platform/Templating/Helpers/Bot/). The revised row avoids promising executable access. Built-in sample !so becomes !song; the literal keys are in server/src/NomNomzBot.Application/Commands/Builtin/Personality/BuiltinResponseSlots.Music.cs:20-22,53-55 and BuiltinResponseSlots.Core.cs:21-23. docs-work/helper-groups.md retains the description/sample corrections on regeneration. See docs-work/ecosystem-validation/final-learning.md for coverage and validation.

## Preserved historical reviews

Earlier hashes, claims and verdicts below are historical and do not approve this revision.

# Current independent reader review

Verdict: PASS
Reviewed: src/content/reference/en/templates/bot.mdx
Reviewed-SHA: ce71cc5dac51a5f5b71c7086f448db83125be423e9109112154f054282aca37f
Reviewed-SHA256: ce71cc5dac51a5f5b71c7086f448db83125be423e9109112154f054282aca37f
Reviewed-Date: 2026-11-05
Reviewer: independent section reviewer

The compact reference fits lookup use: name, commands, restart/uptime and dashboard values remain findable. Illustrative values are explicitly identified as examples rather than actual deployment settings.

The full page was read with the preceding/following navigation context and related links. This review applies the owner's explanatory, progressive-disclosure guidance; it does not impose Atlas sentence caps, pilot mimicry or fixed article headings. No substantive reader finding remains at this hash. Build/render/link checks are recorded separately by the lead reviewer.

Report: docs-work/overhaul/review-learning-commands-helpers.md.

## Historical evidence

The material below is retained as historical evidence; its older verdict is not the current review.

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
