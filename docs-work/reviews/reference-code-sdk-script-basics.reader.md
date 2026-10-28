# Reader review: src/content/reference/en/code/sdk-script-basics.mdx
Verdict: PASS
Reviewed: C:\Projects\NoMercyLabs\nomnomzbot-docs\src\content\reference\en\code\sdk-script-basics.mdx
Reviewed-SHA: 43a67d7b8cbf4393

Blocking findings: none. Every step in "Turn on Custom Code" can be followed. The error section and the "One rule for a bad value" section tell the reader what they see.

Reviewed against: the Assumes page `src/content/reference/en/code/how-a-script-runs.mdx` (read whole), the ledger, the pilot `commands/create-a-command.mdx`, and the page text as it stands now.

## Findings (non-blocking, for the fact check and the author)

- [lines 15-23] The "Turn on Custom Code" steps repeat the same three steps from how-a-script-runs.mdx lines 14-23, with the same wording. The ledger assigns the run to how-a-script-runs. Re-taught text is a finding. Cost: the reader reads the same steps on two pages. Fix: link to how-a-script-runs and keep one line.
- [lines 20] Step 1, "Open the **Features** settings page," does not say where the page is. The ledger names /reference/settings/features as the owner of the feature switch, and this page does not link it on first mention. Cost: a reader who does not know the Features page has no path to it.
- [lines 25-28, 52-57 of the table] The `bot` member table repeats the names in how-a-script-runs.mdx lines 52-64. The ledger gives the bot facade to this page, so the table belongs here, but the Assumes page already lists the same names. The map and ledger disagree on who owns the bot facade. Fix in the map, not the page.
- [line 27] "raw bridge to the bot" is jargon. A reader who does not script cannot picture it.
- [line 44] "the test run panel" is a term this page never defines. how-a-script-runs.mdx line 64 calls the same thing "the run's log". Two names for one thing leave the reader unsure they are looking at the same place.
- [lines 6-9, the intro] The first paragraph is four sentences (count: 4). Its first sentence states a fact rather than what the reader can do, which page-conventions.md asks for. The intro also says the page covers grants but leaves out the error section, which is most of the page after the table.
- [line 130 and line 135] "A key that does not exist" (line 130) and "a key that is not on the list" (line 135) are two different ideas in two sentences. The reader cannot tell whether a typo, a dynamic key, or a removed grant is meant.
- [line 135] "stops the whole run with the result Denied" names a result that no table, message or step on this page shows. how-a-script-runs.mdx line 123 names the error "Capability denied: ...". The reader cannot match the word to what they see.
- [line 135 against how-a-script-runs.mdx line 46] This page says a call to a key not on the list stops the run when the call happens. how-a-script-runs.mdx says a call that is not allowed stops the whole run before it starts. These two pages describe the timing differently. The fact check must settle which is true. I did not judge it as a blocking fact, because the rule for this run counts only a fact that is wrong on the page and the pilot page.
- [line 132 against how-a-script-runs.mdx line 18] With Custom Code off, this page says a script "does not run". how-a-script-runs.mdx says a bot call "is then denied". The outcome is compatible, but the words differ and the reader does not learn which word to look for.
- [line 57] "`NaN`" is not explained. [line 63] "ISO 8601" is not explained. A reader who does not code cannot tell what either returns.
- [line 229] "the first argument of the run" uses "argument". how-a-script-runs.mdx line 59 says "the words chat typed after the command word". One term should carry one meaning across the two pages.
- [lines 226-227] The `bot.stopPipeline()` and `bot.args` rows say "Takes no value" and "A list, not a call" in both columns. These rows add nothing. Cut or merge them into a note.
- [line 201-216] The "One rule for a bad value" section is clear. Each row names the result the reader sees. No change needed.

## Density count

- Paragraphs over three sentences: lines 6-9 (4 sentences, 74 words). No other paragraph exceeds three sentences.
- Sentences with two ideas that leave the outcome unclear: line 130 (see the key finding above).
- Parallel facts that should be a table: none found. The grant keys and the error codes are already tables.

## Voice against the pilot

The sentence-level voice matches the pilot: the actor leads, results are stated in checkable words, and constraints arrive as their symptom ("stops the whole run"). The page is a catalog, so it is terser than the pilot and uses "the bot" and "a script" more often. That is the catalog tier, not a voice fault. The page does not read as a different author.

## Rule checks

- No NoMercyBot spelling. No hosting, price or license text, so no marker is needed. American spelling throughout. No emoji. No code written for the reader beyond the one example, which uses semicolons, blank lines between statements, and no type annotations.
- The example (lines 232-237) matches the text above it, except the "argument" versus "word" term above.
- The title and the callout carry "Draft", as the map says.
