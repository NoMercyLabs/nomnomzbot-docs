# Reader review: src/content/reference/en/overlays/set-up-overlays.mdx
Verdict: PASS
Reviewed: src/content/reference/en/overlays/set-up-overlays.mdx
Reviewed-SHA: 9c33e4a834db0e1e

Round 2. Whole page re-read. Round 1 blocking findings are closed:

- Vue is now defined on line 33 and is the stated default on line 25.
- "Nothing attached" now has one meaning in the row table (line 66) and the dot table has no label clash (lines 71-73).
- "Health shows two lines" now maps each line to its labels (lines 93-106).

Blocking findings: none.

Notes (do not decide the verdict):

- [line 45] "except the overlays the bot needs, which are on the OBS page" does not say which overlays are hidden or why. A reader looking for a missing overlay has no way to know. This is the note I would fix first.
- [lines 15-18] The paragraph has four sentences, over the three-sentence limit. Quote, with counts: "The Broadcaster may also let a VIP open the page." (10 words) / "This is set on the Permissions settings page, in the Widgets area of the Actions tab." (17) / "A VIP then sees the overlays only." (7) / "For a VIP, New overlay shows "You can view this, but your role cannot change it."" (15). Split after line 16.
- [line 126] The reset button label is described, not named ("named 'Reset' with the setting name and 'to default'"). Give the exact label pattern as the dashboard shows it.
- [lines 119 and 123] The panel says "Open sources reload on save." The body says every source "gets the new settings at once." Both can be true. Pick one word for the reader.
- [line 153] "what else uses the overlay" does not say what counts as a use.
- [lines 164 and 170] The audio table gives no defaults for the three levels, and the sentence "on every streaming PC" is a second idea in one sentence.

Density:

- Paragraphs over three sentences: lines 15-18 (four sentences, see note above). No other paragraph is over three sentences.
- Sentences with two ideas: line 164 ("the same for every overlay and on every streaming PC").
- Parallel facts that should be a table: none. The tab, row, dot, health and part lists are tables.

Where I got lost:

- I could not tell which overlays are hidden from the list at line 45, or what "on the OBS page" means for them.
- I could not give the exact reset button label at line 126.
