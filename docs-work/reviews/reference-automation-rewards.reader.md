# Reader review: src/content/reference/en/automation/rewards.mdx
Verdict: PASS
Reviewed: src/content/reference/en/automation/rewards.mdx
Reviewed-SHA: baaba1031b832424

Round 7, a fresh read of the current text. The round 4 non-blocking notes are applied: line 41 now points to the text under the table, lines 43-48 are split into short paragraphs, and line 110 names the limits that do not save for a Not on Twitch reward. No blocking finding remains.

## What I read and tested

- I read the whole page as stored, lines 1-188 of `src/content/reference/en/automation/rewards.mdx`. No include changes the reader's view. The working tree has an uncommitted edit to this page, so this review judges that text. Its SHA is the stamp above.
- I walked every flow as a reader: the reward list and its rows, the queue line under each name, Edit with Reaction and limits, switch on and off, Copy, Delete, the queue buttons, and the troubleshooting block.
- I checked the redeemed-line rule at lines 47-48 against the troubleshooting step at line 178. A reader who saves once with an empty reply gets silence, and the steps lead there.
- I judged the page against `docs-work/page-conventions.md`. The label, heading, link and plain-rule rules applied.
- I did not run the product, the bot or any dashboard. This is a docs lane. Code facts are the fact-check reviewer's job.

## Findings

No blocking finding.

## Density

- Lines 15-17 (3 sentences, 56 words; the quote at line 16 holds two sentences): at the cap. No finding.
- Lines 43-44 and 46-48 (2 and 3 sentences): within the cap. Line 47 carries two ideas, what the bot sends and until when.
- Lines 98-100 (3 sentences): line 99 carries two ideas, the header content and when **Paused** shows.
- Line 125 carries two ideas joined by a semicolon.
- Line 156 carries two ideas joined by a semicolon.
- Line 85 (table cell): one cell holds two fields and a sentence. Make two rows.

## Where I got lost

- Line 47: whether my reward was ever saved. The dialog looks the same either way. Line 48 and line 178 give me a way out, so I got through, but I had to guess which state applied.

## Notes (do not decide the verdict)

- Line 35: "The dashboard calls a viewer buying a reward a 'redeem'." page-conventions.md says to say "channel-point reward", not "redeem". The quotes keep the dashboard's words, and this sentence states it once, which is an acceptable reading.
- Line 109: "Type 0 to clear a limit" does not say whether 0 also clears the **Timer**. Name it, or say the timer is cleared another way.
- The voice matches the pilot page `src/content/reference/en/commands/create-a-command.mdx`: the actor is the subject, results are checkable, and constraints arrive as symptoms.
- The hosting marker and the plain rule are absent, which is correct: the page does not talk about price, hosting or use rights.
