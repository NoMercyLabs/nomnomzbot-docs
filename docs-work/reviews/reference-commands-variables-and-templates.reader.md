# Reader review: src/content/reference/en/commands/variables-and-templates.mdx
Verdict: PASS
Reviewed: src/content/reference/en/commands/variables-and-templates.mdx
Reviewed-SHA: 8a34a8eb3936eb04

Round 7. Read as rendered: the only directives are ::Troubleshooting and the HTML details blocks, and they render as the page shows them. Assumed page: create-a-command (read at its path in the same repo). Round 3 findings and all round 5 and round 6 notes are settled and not raised again. The page is untracked in git, so the change since round 6 was found by line shift: a sentence was added at line 42 (round 6 had lines 39-41 as the HTML paragraph, and everything after line 41 moved down one line).

## Blocking findings

None. I found no wrong fact inside the page that I could check from the page alone, and no step a non-coder cannot follow. The worked examples still agree with each other (Tuesday 6 October 2026, 22:15 channel time, 20:15 UTC, stream uptime 2h 15m, `until` 79 days, `diff` 411 days, `since` 1 year, 16 days, 22 hours, 15 minutes).

## Notes (do not decide the verdict)

- [lines 39-42] This paragraph has four sentences. The project's page conventions allow three at most (docs-work/page-conventions.md, Sentences and paragraphs). Split it with a blank line after line 41, or cut the new line 42 into its own paragraph. Sentence 39 and sentence 42 each carry two ideas (line 39: what HTML is, and that a plain reply does not need it; line 42: what is not encoded, and which tags the overlay keeps).
- [line 42] "the overlay keeps only its safe tags" does not say what a stray `<` in a looked-up value does (for example in a viewer's last chat message). A reader cannot tell whether it shows as text or drops the tag. One sentence with a concrete outcome would close it.
- [line 275] `{math:...}` is an elided call. The row says "Sums and number formats, for example `{math:...}`", and nowhere on the page is a complete math call shown. The reader can look it up in the **Reply** field, which the page points to (line 268), but one complete example, in the same form as `{if:value|then|else}` on line 272, would remove the guess.
- [lines 6-8] These three sentences restate "a reply is a template with helpers in braces", which the assumed page (create-a-command, line 83) already taught. The ledger gives the template concept to this page (docs-work/ledger.md, "template variable"), so a short restatement is defensible. A link and one clause would cut it to one line.
- [line 235] "A roll draws one random number per reply and keeps it under a name." carries two ideas: the draw and the name. Two sentences would read easier.

## Density

Every paragraph (text between two blank lines) has three sentences or fewer, except one.

- Lines 39-42, 4 sentences, 84 words in total. Sentence 1 is 20 words ("HTML is markup such as `<b>bold</b>` that styles text on the chat overlay; a plain reply does not need it."). Sentence 2 is 22 words ("When a reply holds HTML, the values that come with the command (the name and the words after the command) are HTML-encoded."). Sentence 3 is 18 words ("So a `<` in those values shows as the character `<`, not as the start of a tag."). Sentence 4 is 24 words ("Values the bot looks up, such as a last chat message, are not encoded; the overlay keeps only its safe tags, such as `<b>`.").

The three-sentence paragraphs (all within the limit) are lines 6-8, 24-26, 54-56, 73-75, 141-143, 162-164 and 292-296 (troubleshooting). Line 73-75 holds 3 sentences and about 44 words.

No run of parallel facts sits outside a table. The date steps (lines 166-190) and the name, pronoun and time helpers are all in tables.

## Voice

Against create-a-command, the sentence-level voice matches. The actor is the subject ("The bot types ...", "Chat sees ..."). Results are stated as text the reader can check ("shows `{usr}`", "gives `HELLO`"). Constraints arrive as symptoms ("stays in the line as text", "shows `0`"). The bot speaks in one voice (line 15). The page names no second voice. Speech through text to speech (lines 50, 91) is the same bot, not a second voice.

## Where I got lost

- Line 42: I could not tell what a stray `<` in a looked-up value does in the overlay. The sentence names the safe tags but not the result for other characters.
- Line 275: I could not write a `{math:...}` call from this page.

## Not checked

- The product source. The brief says the reader reads the page only, so no helper or date result was checked against code. The fact-check file for this page carries that work.
- Whether the `{tense}`, counter and "target" notes from round 6 were fixed. They are settled and I did not re-check them.
- Whether another reader run on this page is still running. I cannot see running processes from here, so the caller must confirm this before reading the verdict.
- Grimoira was not queried. The reader reads the page only.
