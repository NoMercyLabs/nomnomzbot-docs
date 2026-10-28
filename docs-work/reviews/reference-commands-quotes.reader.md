# Reader review: src/content/reference/en/commands/quotes.mdx
Verdict: PASS
Reviewed: src/content/reference/en/commands/quotes.mdx
Reviewed-SHA: f484ceec9e4285e7

Round 3. Re-read the whole page as a new reader. Assumed pages read first: /reference/commands/create-a-command (editor, New command dialog, Save changes, roles and the Permissions link), /reference/commands/built-in-commands (the `!quote` row, line 49: random or by number, adds, edits and deletes quotes, Everyone; "Read it aloud" default Off, only `!quote` speaks its reply, line 120), /reference/commands/variables-and-templates. Nothing in those pages is taught again here. No product source was read, so no fact on this page is confirmed against code.

## Changes since round 2, checked

- Line 84 now starts "By default, everyone in chat may read a quote with `!quote`." This matches built-in-commands line 49 (**Everyone**). The sentence is consistent with the table on lines 14-16 and with lines 85-86. Settled.
- The round 2 items on Said at (line 28) and the chat roles (lines 84-86) are unchanged and still consistent.

## Findings (blocking)

None. Every step names its result (for example line 40). No wrong fact is visible against the assumed pages. Each role in lines 84-86 matches the table on lines 14-16.

## Density

Paragraphs over three sentences (text between two blank lines): none.

Paragraphs at the limit, for the record:
- Lines 70-72: 3 sentences, 40 words. "The list shows the newest number first, 50 quotes at a time." (12 words) "Choose **Show more quotes** at the bottom to see the next 50." (12 words) "Each row shows the number, the line, and then the name, the game and the date." (16 words)
- Lines 84-86: 3 sentences. "By default, everyone in chat may read a quote with `!quote`." "Adding and editing a quote in chat need the same role as on this page, **VIP** and up by default." "Deleting a quote in chat needs **Moderator** and up by default."
- Lines 88-90: 3 sentences.

Sentences with two ideas:
- Line 62: "Its number is not given to another quote, so the numbers in the list can have a gap." The rule and its effect. Acceptable as cause and effect.

Parallel facts that should be a table: line 72 lists five fields in one sentence. Line 28 holds two parallel flows (add, edit) in one table cell as three sentences. See Notes.

## Where I got lost

- Lines 14-16 use "VIP and up" and "Moderator and up" before the sentence that explains the role ladder (line 18). The link to Permissions fixes it, but the words come first.
- Lines 84-86 say "by default" three times. The page does not say where the chat roles are changed. A streamer who wants a different role has no path from this page.

## Notes (do not decide the verdict)

- Line 28: the **Said at** cell holds three sentences, two of them describing two different flows. Two rows, or a short sentence per flow below the table, would scan better. Keep the content.
- Line 72: the five parallel fields could be a small table with one column per field, or a list in that order.
- Line 78: "On a narrow screen the button shows its dice icon only." The label the icon stands for on a wide screen is not named. Name it.
- Line 14-18: move the sentence on line 18 above the table, so the ladder words are explained before they appear.
- Lines 84-86: say where the chat roles are set (the Permissions page, if so), or say they are fixed. This is the round 2 note, still open.
- Line 88: the denial line's wording is not quoted. The reader does not know what the bot says. Quote it, as the other pages do.
- Links: /reference/commands/built-in-commands, /reference/commands/create-a-command and /reference/settings/permissions are on the map. Membership was checked against the map, not against the built route.
- Voice against create-a-command: sentence-level voice matches. The actor is the reader ("You keep", "Choose"). Results are stated in terms the reader can check. Constraints arrive as facts. Same writer, by sentence voice.
- Headings: every `##` is plain words. Action headings start with a verb. No heading ends with a colon. No heading is "Other", "Misc" or "More".
- Plain rule and hosting marker: not needed on this page. No hosting, price or license is mentioned.
- Not checked: dashboard label text (`dashboard/src/views/dashboard/quotes/i18n/en.json`), the 500 character limit, the 50 quote page size, the default roles, and the chat rules on lines 84-88. These are facts; the fact-check file covers them, not this review.
