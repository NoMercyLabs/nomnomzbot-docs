# Reader review: C:/Projects/NoMercyLabs/nomnomzbot-docs/src/content/reference/en/templates/overview.mdx
Verdict: PASS
Reviewed: C:/Projects/NoMercyLabs/nomnomzbot-docs/src/content/reference/en/templates/overview.mdx
Reviewed-SHA: 9971bdacb6065ec8

Read as stored, whole page, lines 1-73. No include, snippet or template directive. Also read: variables-and-templates.mdx. The Pronouns page was checked only by its title and by a count of helper rows (0 rows, so it is a how-to page). It was not read in full.

Checks:
- Entry point: lines 6-8 say what a helper is, with `{user}` as the example. A new reader knows what to look for in the first three lines. Ok.
- Find the right type page: lines 21-25 give the rule (the first word of the name). Lines 43-71 list 29 type pages, each as a link. A reader who wants a user helper finds `{user.*}` on line 22 and in the list on line 43. Ok.
- Totals: the 29 counts in lines 43-71 add up to 908, which matches the line 3 description. Ok.
- Give input: lines 29-33 show the colon form and the pipe form, each with a typed example that matches the variables page (line 62). Ok.
- Pronouns: line 23 says the pronoun helpers are on the user page. Line 39 links the Pronouns guide. The guide has no helper rows, so there is no second helper catalogue. Ok.
- Way back: lines 17 and 73 link to the variables page. Ok.
- Voice: short sentences, the actor is the subject, the same voice as the type pages. Ok.

Findings:
- [lines 21-25] One paragraph of five sentences (69 words) with no blank line between them. Cost: the rule for finding a type is buried in a block. Fix: split after line 22, so the rule stands alone.
- [lines 29-33] One paragraph of five sentences (51 words) with no blank line between them. Fix: split after line 31 (the pipe form).
- [line 32] "A few helpers name an input, as in `{text.cut:hello world|max=8}`." The phrase "name an input" is not explained. Cost: a reader does not know what a named input is. Fix: say that the name and the value are joined with an equals sign, as in `max=8`.
- [line 24] The rule "the first word of its name" does not cover `{track_name}` and `{playlist_id}`, which are on the music page (music.mdx lines 33-34). A reader who looks for "track" or "playlist" in this list finds nothing. Fix: name these two words on line 24, or say they are on the music page.
