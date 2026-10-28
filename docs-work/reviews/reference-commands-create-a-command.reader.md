# Reader review: src/content/reference/en/commands/create-a-command.mdx
Verdict: PASS
Reviewed: src/content/reference/en/commands/create-a-command.mdx
Reviewed-SHA: b65485b206ca039e

Round 9. Assumes nothing (pilot). Read as rendered; the page has no includes. Blocking findings: none.

## Findings (blocking)

None. Every step names the control, and each step states a visible result. Every fact I could check on the page is consistent with the rest of the page.

## Notes (do not decide the verdict)

- [153-156] Four-sentence paragraph (4 sentences, 36 words): "Regex needs a pattern." / "If the custom prefix or the pattern is empty, Create command shows ..." / "It makes nothing." / "In the editor, Save changes stays off." -> Breaks the three-sentence cap in docs-work/page-conventions.md (Sentences and paragraphs). Costs scanning speed only. Split into two short paragraphs.
- [209-210] "its aliases" is used before "An alias is another name for a command." -> The reader meets the term one sentence before its meaning. Swap the order or define it in place.
- [250-252] Label "Move copies to system" with the outcome "Then every copy is removed for good." -> A reader cannot tell whether the channel command survives in the system list. The outcome is stated, so the step is followable. Consider naming the outcome in the label.
- [43, 76] "code script" appears in two table rows and is never explained. -> The reader learns only "a script from the Scripts page". A short clause or link would close it.
- [237] "catalog items" appears in the table with no explanation. -> A reader who has no economy page cannot tell what it covers.
- [229] Example text "Still used by 2 timers: …." contains an ellipsis. -> The reader sees a placeholder, not a sample. The sentence before it explains the list, so the meaning is clear. A visible name would make the example concrete.
- [83] "A reply is plain text with helpers (variables): names in braces that the bot fills in before it sends the line." (21 words, two ideas: the reply is plain text; helpers are braces) -> Split into two sentences.
- [257] "The bot can import ... only through its API." -> A non-coder reader reaches a dead end with no next step. Page-conventions forbids developer routes on a streamer page. The fact itself is for the fact-check file, not this review.
- Voice: sentence-level voice is consistent across the page: active, present tense, second person, the bot is the actor, results are stated ("The dialog closes and the new command opens in the editor, switched on."). No second writer is detected.

## Density

Paragraphs (text between two blank lines) over three sentences:

- Lines 153-156, 4 sentences, 36 words: "Regex needs a pattern. If the custom prefix or the pattern is empty, **Create command** shows "Fill in the custom prefix or the regex pattern you picked." It makes nothing. In the editor, **Save changes** stays off." (Noted above; not a verdict finding.)

Every other paragraph has three sentences or fewer. Lines 91-93, 116-118, 124-126, 227-229 and 281 sit at exactly three.

Sentences with two ideas: line 83 (above). Line 78 ("A reply goes to Twitch chat by default, in the channel's one bot voice.") is one idea with a default clause and reads cleanly.

Parallel facts that should be a table: none found in prose. The Kind table (lines 231-237), the Match table (146-151), the What-it-does table (38-42) and the cooldowns table (171-177) already hold them.

## Where I got lost

I did not lose the thread. Each flow reads in order and ends with a visible result. Three places made me pause:

- Lines 250-252: "Move copies to system" then "Remove copies" then "removed for good". I checked whether the channel command or the system command survives. The page says the system command answers, so I accepted it.
- Lines 209-210: "aliases" before its meaning.
- Lines 43 and 76: "code script" with no meaning beyond the Scripts page.

Checked this run: the page file (sha256 first 16 hex b65485b206ca039e, computed with Get-FileHash), docs-work/page-conventions.md, and the reader role at the plugin path given in the brief. Not checked: the link targets (the brief says a link target I cannot read is not a finding), and every product fact on the page (that is the fact-check file's job).
