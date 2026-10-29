# Fact check: src/content/reference/en/templates/fun.mdx
Verdict: PASS
Reviewed: C:/Projects/NoMercyLabs/nomnomzbot-docs/src/content/reference/en/templates/fun.mdx
Reviewed-SHA: 7b149edbbea12e8c

Product read: NomNomzBot origin/master 779081d10d05dc6b4150732abd77bfae4dbef1d9 (git fetch run 2026-10-29; every file opened with `git show origin/master:<path>`).
The helper code and strings for this page did not change between the export commit a8f180821 and origin/master.

This pass reviewed the repaired `{fun.8ball}` row (page line 15) in full, then sampled the table.

## All rows, scripted
A scratch script read all 26 rows. Each description equals the first line of its English string in server/i18n/strings/values/strings_template_fun.xml, or equals its line in docs-work/helper-groups.md "## Description corrections" (`fun.8ball`, `fun.dice`, `fun.love`, `fun.ship`). Each key is a row of docs-work/helpers.json.

## Sample (16 rows: first, last, and every second row between, with the repaired row)

| Page line | Key | Product file:line | Description equals product text | Example plausible |
| --- | --- | --- | --- | --- |
| 15 | `fun.8ball` | FunEightBallHelpers.cs:19-31 | correction helper-groups.md, true (see the repaired-row check) | yes: `It is certain` is the registry sample (:20); the real answer is any line of the channel's own list |
| 16 | `fun.card` | FunGameHelpers.cs:22, Card :60-68 (rank of `A23456789TJQK`, suit of `♠♥♦♣`) | yes, strings_template_fun.xml:19 | yes: `Q♥` |
| 17 | `fun.coin` | FunCoinHelpers.cs:17 | yes, strings_template_fun.xml:12 | yes: `heads` |
| 19 | `fun.countdown` | FunCountdownHelpers.cs:24, Countdown :32-43 (1 to 20, each number with `…`) | yes, strings_template_fun.xml:32 | yes: `3… 2… 1…`; FunHelpersTableTests.cs:31 |
| 20 | `fun.dice` | FunDiceHelpers.cs:19, Total :27-30; FunDiceSpec.TryParse | correction helper-groups.md, true | yes: `{fun.dice:20}` gives `5`, one roll of a 20-sided die; FunHelpersTableTests.cs:38 |
| 22 | `fun.dice.emoji` | FunDiceHelpers.cs:21, Faces :44-62 (1 to 20 faces joined with a space) | yes, strings_template_fun.xml:16 | yes: three faces; FunHelpersTableTests.cs:42 |
| 24 | `fun.lenny` | FunTextArtHelpers.cs:26 (a fixed text) | yes, strings_template_fun.xml:36 | yes |
| 26 | `fun.meter` | FunCountdownHelpers.cs:25, Meter :45-46 (the `meter` bar renderer) | yes, strings_template_fun.xml:27 | yes: `██████░░░░ 60%`; FunHelpersTableTests.cs:33 |
| 28 | `fun.random.animal` | FunRandomHelpers.cs:22; FunCatalog.cs:40-42 (`🦊`, `fox`) | yes, strings_template_fun.xml:29 | yes: `🦊 fox` |
| 30 | `fun.random.emoji` | FunRandomHelpers.cs:18; FunCatalog.cs:26 (`🎉` in the set) | yes, strings_template_fun.xml:28 | yes |
| 32 | `fun.rate` | FunRatingHelpers.cs:25, Rate :43-50 (1 to 10, then `/10`) | yes, strings_template_fun.xml:24 | yes: `8/10`; FunHelpersTableTests.cs:54 |
| 34 | `fun.rps` | FunGameHelpers.cs:20, Hand :34-35; FunCatalog.cs:89-91 (`🪨`, `rock`) | yes, strings_template_fun.xml:17 | yes: `🪨 rock` |
| 36 | `fun.ship` | FunRatingHelpers.cs:27 (Ship) | correction helper-groups.md, true | yes: `Alexander + Bo = Alexo`; FunHelpersBehaviorTests.cs:270 |
| 38 | `fun.slots` | FunGameHelpers.cs:23, Slots :71-84 (three symbols from FunCatalog.cs:96) | yes, strings_template_fun.xml:20 | yes: `🍒 🍋 🍒` uses two catalog symbols |
| 39 | `fun.slots.win` | FunGameHelpers.cs:24, SlotsWin :87-90 | yes, strings_template_fun.xml:21 | yes: `false` |
| 40 | `fun.unflip` | FunTextArtHelpers.cs:24 (a fixed text) | yes, strings_template_fun.xml:34 | yes |

## Repaired row: `{fun.8ball}` (page line 15)
- "One answer from your own pick list named 8ball": true. FunEightBallHelpers.cs:22 sets the list name `8ball`, and Answer (:24-31) picks one item of that channel list. The class summary says the answers are channel data that the streamer edits on the Pick Lists page (:14-18). FunHelpersBehaviorTests.cs:170-188 proves that each channel gets answers from its own list only.
- "Make that list on the Pick lists page": the link target exists in the docs (src/content/reference/en/commands/pick-lists.mdx). The product names that page in FunEightBallHelpers.cs:16.
- "With no list of that name, or an empty list, the helper stays as typed": true. Answer returns null when there is no channel or an empty list (:26-30), and FunHelpersBehaviorTests.cs:190-199 asserts that `{fun.8ball}` renders as `{fun.8ball}` for a channel with no list and for a render with no channel.
- The preset `!8ball` command keeps its answers in its own responses and creates no pick list (FunCommandPresets.cs:25-40), so the page is right not to promise a list out of the box.

## Intro check (page lines 8-11)
- Line 8, "These helpers play small games, such as dice, a coin flip and the 8-ball": true (rows at lines 15, 17, 20).
- Line 9, "Most give a different result each time, so the example shows one possible result": true. Most rows draw from `call.Random` (for example FunGameHelpers.cs:35, :65, :80; FunDiceHelpers.cs:29). A few are fixed (`fun.lenny`, `fun.shrug`, `fun.unflip`, FunTextArtHelpers.cs:24-26) or stable for the day (`fun.love`, `fun.rate`, `fun.percent`, FunRatingHelpers.cs:33-56), which "most" allows.
- Line 11, "Each row is its own example": true.
- The intro names no helper that is missing from the page.

## Row count
26 table rows. docs-work/helper-groups.md:34 gives Count 26 for /reference/templates/fun. The front matter says 26. Equal.

## Findings
None.

## Product defects (not verdict items)
None found in the sampled rows.
