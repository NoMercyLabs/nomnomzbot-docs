# Reader review: src/content/reference/en/commands/pipelines.mdx
Verdict: PASS
Reviewed: src/content/reference/en/commands/pipelines.mdx
Reviewed-SHA: c671cc6007cf515b

Round 3. Read the page as rendered: it has no include or snippet directives. Assumed pages: create-a-command (read in full, used as the voice pilot); variables-and-templates, built-in-commands and cooldowns-and-permissions (not read; judged only against the dispatch summary of what they teach). Settled and not raised: `{user}` (line 93) and `{name}` (line 344) in code formatting. Closed from round 2: lines 110 and 113 now agree (the editor cannot add a check, and the switch stays off on a step you add), and the check is defined on line 108.

## Blocking findings

None. A reader can follow every step on the page. Each step states its visible result, and each control the page names can be found.

## Findings (do not decide the verdict)

- [lines 187-190] This paragraph has four sentences, over the three-sentence limit (13, 15, 10 and 6 words, 44 in all). Line 190 "A number can only be lower." does not say lower than what. -> A reader cannot tell the top of the range a typed round count can take.
- [lines 357-361] This paragraph has five sentences (13, 5, 12, 10 and 7 words, 47 in all). -> The run-outcome facts would scan better as a short table.
- [lines 314-315] "Send message can also post as the broadcaster, from the streamer's own account." Bot-authored speech is written in the channel's one bot voice, so this line needs a fact check that it is a streamer-account option and not a second bot voice. I did not check the product code. -> If a reader takes it as a second bot voice, the one-voice rule is broken on the page.
- [line 156] "Runs only the first plain step inside it, and skips every other step and block." This is a strong claim about a block, and it is not checked against the product code. The reader can follow it, so it is not blocking. -> Fact check owns it.
- [lines 110-114] The section now says the switch cannot be turned on for a step you add. Line 114 still quotes "Add a condition first." That message names an action the page says is not possible. -> A reader sees a message they cannot act on. Either drop the quote or name what the message means.
- [line 13] "check" is first used in the Block row and defined on line 108. -> A short gloss in the row would close the gap.
- [line 81] "choose the add button in one of the block's paths" names no label or icon. The outcome is stated on line 82. -> A reader must guess which control to press.
- [line 20] "on the **Permissions** settings page" gives no area or tab. The pilot names the area for the same kind of setting (create-a-command line 21). -> A reader must search that page.
- [lines 215-216] "sub-pipeline" is used with no meaning. -> A reader cannot tell what **Return value** and **Run pipeline** act on until another page explains it.
- [lines 291-292] "the triggering redemption" is used with no meaning. The conventions say to write "channel-point reward", not "redeem". -> The terms differ from the guide's own words.
- [line 334] "Most steps only make a record of what they would do, and count as **Done**." joins two clauses with a comma and "and" (15 words). -> The conventions count it as two sentences.
- [line 366] "The bot keeps a run that worked for 3 days, and a run that went wrong for 30 days." joins two clauses (19 words). -> Two retention periods in one sentence; a short table of three facts would scan better.
- [line 316] The hosting marker sits after the step table, beside the music-step line. The page never mentions hosting, a plan or a price, so the conventions do not call for it. -> It reads as an off-topic sentence in the middle of the step catalog.
- [lines 198-312] The 113-row step catalog sits in the main flow, between **Blocks** and **Try a pipeline with a test run**. The conventions put rarely used detail in a collapsible block. -> A reader who wants the test run scrolls past about 115 lines of table first.

## Density

- Paragraphs over three sentences: lines 187-190 (four sentences, 44 words) and lines 357-361 (five sentences, 47 words). Both are quoted above. No other paragraph is over three.
- Three-sentence paragraphs, for the record: lines 69-71, 81-83, 93-95, 97-99, 108-110, 112-114, 145-147, 194-196, 334-336.
- Sentences with two ideas: lines 97, 156 (table cell), 334, 366.
- Parallel facts that could be a table: lines 366-367 (3 days, 30 days, 500 runs) and lines 357-361 (outcome facts). Both optional.

## Where I got lost

1. Line 190: lower than what, for a typed round count.
2. Line 114: what to do with "Add a condition first." when the page says a step you add has no check.
3. Line 81: which button is the add button in a block path.
4. Line 215: what a sub-pipeline is.
5. Line 20: where on the Permissions page the VIP setting is.

## Notes (do not decide the verdict)

- Line 179: "Choose how the repeat stops in **Repeat**." works, but the table's first column header is also **Repeat**. A reader may read the header as a choice.
- Line 359: "Other outcomes show the bot's own word, such as "completed" or "stopped"." names no full list. A reader may want the list, or may not need it.
- Lines 379-383: "Delete …?" and "… is deleted." use an ellipsis for the pipeline name. The reader can infer the name, but a short phrase would remove the doubt.
- Voice: same person as the pilot. The pilot opens with "You make and change"; this page opens with a definition ("A pipeline is a list of steps"). The tier accounts for that. Sentence-level voice matches: active verbs, results stated as what the page shows, short steps with a visible outcome.

## Not checked

- Link targets (for example `/reference/music/music-player`, `/reference/commands/pick-lists`, `/reference/code/how-a-script-runs`). Per the dispatch, these are not findings.
- Labels against `dashboard/src/**/en.json`, and the facts behind the counts (113 steps, 24 areas, 6 blocks, 1000 rounds, 500 runs, 3 and 30 days). These belong to the fact-check review.
- The product behavior behind line 156 (Run on its own) and line 314 (Send message as the broadcaster). These belong to the fact-check review.
