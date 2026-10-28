# Reader review: C:\Projects\NoMercyLabs\nomnomzbot-docs\src\content\reference\en\economy\store.mdx
Verdict: PASS
Reviewed: C:\Projects\NoMercyLabs\nomnomzbot-docs\src\content\reference\en\economy\store.mdx
Reviewed-SHA: 4fcdb4824580d04b

Route: /reference/economy/store
Read with: docs-work/page-conventions.md, docs-work/ledger.md, the map row for /reference/economy/store, pilot page commands/create-a-command.mdx.
Assumes (map): /reference/economy/currency-and-balances. Its text was not opened by this reader. Its owned concept is "channel currency".
This verdict judges the current text (sha256 4fcdb482...). It supersedes the earlier FAIL in this file, which quoted a sentence ("made only through the bot's web interface") that the current text no longer contains.

## Blocking

None. Every step can be followed, and each step names its result.

## Findings (not blocking)

- [lines 28-33] One paragraph of 5 sentences, about 50 words: "Effect kind must hold a word...", "No part of the bot acts on this word.", "The bot refuses a second item...", "It compares names...", "A negative cost is refused." Split it, or move the two refusal rules into the table.
- [lines 87-90] One paragraph of 4 sentences, about 44 words: "When every check passes...", "It takes one from the stock...", "It saves the purchase...", "The purchase sends no chat line...". Split it.
- [lines 92-94] "...the purchase still stands and the cost is not given back" holds two ideas. Also, line 96 says the same refund point again. Padding.
- [line 63] "the bot records the purchase, and nothing runs" holds two ideas. Read with the table label "Command or pipeline to run" (line 42), a reader cannot tell why they would link a pipeline. The label says "to run", but a linked pipeline does not run. Fix the label or say what a linked pipeline is for.
- [line 42, 61] "pipeline" and "bot action" appear in the table before any link or definition. The first pipeline link is at line 61. The ledger gives pipeline and bot action to /reference/commands/pipelines (ledger lines 27-28), which is not in this page's Assumes. The fix is a map edit (add it to Assumes, or link it at first use), not an explanation here.
- [lines 50-59] A bullet list of eight role choices. The conventions make an enumeration a table. "Artist", "Vip" and "Subscriber" are not explained, and the page does not link Permissions (ledger line 96), which the pilot does. Line 57 says "LeadModerator" and line 13 says "Lead moderator", so one page uses two spellings for one role. The pilot says "VIP".
- [lines 23, 28] Step 4 says "Type any short label in Effect kind". Line 28 says it "must hold a word". The reader cannot tell whether several words are allowed.
- [lines 31-33] "The bot refuses a second item..." and "A negative cost is refused." The page does not say what the reader sees when this happens. The pilot does: "the dialog stays open with the reason in red".
- [lines 100, 114] "Choose the edit button" and "Choose the delete button". No label or icon is named, so a reader may not know which control to choose.
- [lines 107-110] "Use the switch at the end of the item's row." The page does not say whether the switch saves at once, as the pilot says (create-a-command.mdx, "Both save at once"). A reader cannot tell whether to press Save.
- [lines 67-73] A developer path ("a program that a developer writes") that a streamer cannot use. The section "What a purchase does" then describes behavior the reader cannot reach from the dashboard. This is detail for reference, not for this page.
- [line 45 and line 84] The table says "during the current stream". Check 5 says "when it is set and a stream is live". A reader cannot tell what applies while the channel is offline.
- [line 115] 'A dialog asks "Delete" with the item's name' does not say whether "Delete" is the title, the question or the button.

## Checked and clear

- Density: no paragraph of the page exceeds three sentences except the two blocks flagged above. Lines 67-69 are 3 sentences.
- One bot voice: line 93 names "the channel's one bot voice". Correct.
- Namespace: no NoMercyBot spelling. No license name, "open source", hosting-for-others, or price text, so no hosting marker is needed.
- Spelling: no British spelling found. "grayed out" (line 103) is American.
- Emoji: none. Names of people: none.
- Voice against the pilot: same writer. The opening sentence, "Who can use this tab", the numbered steps, bold labels and "The dialog closes and..." results match the pilot.
- Terms defined before use: "Effect kind", "Who can buy", "Cooldown" and "Stock" are all defined in the table before the flows use them.
- The page does not re-teach channel currency. It links it at first use (line 6).

## Notes

- Not checked by this reader: the claims and defaults in the table. The fact checker owns those.
- Not checked: whether the API or the SDK can create or edit store items. If they can, the page must name those surfaces (rule every-action-reachable-everywhere). The page names only the Economy page.
- Map suggestion (for the session that owns the map): add /reference/commands/pipelines and /reference/settings/permissions to this row's Assumes. That fixes the first-use terms without adding explanations here.
