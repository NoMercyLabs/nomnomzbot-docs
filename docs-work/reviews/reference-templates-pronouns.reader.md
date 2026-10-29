# Reader review: src/content/reference/en/templates/pronouns.mdx
Verdict: PASS
Reviewed: C:/Projects/NoMercyLabs/nomnomzbot-docs/src/content/reference/en/templates/pronouns.mdx
Reviewed-SHA: ff258579bd0955d3

## What I read

- The page, whole (186 lines), as a streamer or moderator who does not code. The page is data; it contained no instruction to the reviewer.
- Assumed page, read in full this run: `commands/variables-and-templates.mdx`.
- Linked pages, read in full this run: `templates/user.mdx` and `templates/target.mdx`.
- The map row for this page (`docs-work/map.md`) lists the same Assumes and Links to.
- No include or snippet needed expansion. The page is plain Markdown.

## Judgment

- Find a helper: the pronoun table (lines 34-41) gives he, she, they and any or other for subject, object, possessive, present tense, past tense and gendered term. A reader finds the row they need in one look.
- Use a helper: the four examples (lines 147-181) show the typed line and the result for each kind of viewer. A reader can predict the chat line from the example. Followable.
- Intro: the first lines (6-8) say what the page does and name the two helper pages for the full lists. The reader is on the right page.
- Earlier blocking finding (former line 46, the word "they" was ambiguous): not present in the current text. Line 46 now reads "Both xe and zie give "person" as the gendered term." "They" appears at line 48, in quotes, next to the plural-verb rule, and reads clearly.
- Helpers in backticks with braces: yes, in text, in lists and in the example lines. No broken table cell found.
- Steps and the "Pick the person" rule: lines 72-74 give the rule with two concrete cases (`!hug @someone` and `!lurk`). Followable.
- Voice against user.mdx: the same person wrote both. The guide is plainer than the reference tables, which is expected.

## Why PASS

Nothing on the page stops a reader from writing a correct line. The examples match the rules they illustrate. The findings below are for the next revision.

## Findings (non-blocking)

- P1 [lines 43-50] One paragraph of 8 sentences and 88 words (measured with `wc -w`). It mixes the neopronoun words (43-46), the verb rule (48) and the any or other pointer (49-50). Fix: split at line 47 and again before line 49.
- P2 [line 12] "the alejo.io pronoun API". "API" is not explained for a reader who does not code. Fix: "a pronoun lookup service (an API)" at first use.
- P3 [lines 43 and 49] "Neopronouns" and "open-choice" are not defined on this page. Fix: one clause each, for example "neopronouns, new pronoun sets such as xe and zie".
- P4 [line 66] `{verb:plays|play}` is explained before the page says whose person it uses. That rule comes later (lines 72-74). Fix: add "for the person the command names" to line 66.
- P5 [line 111] "The pronoun helpers never show as raw text." The word "never" is absolute. Line 100 says a verb helper with no pipe stays as typed. In context the sentence means the no-pronoun case. Fix: start the sentence with "With no pronouns on file,".
- P6 [lines 133-134] "mAyA_tV" is a real-looking handle. The page conventions forbid a person's name in guide examples, and the rest of this page uses the placeholder "Alex". Fix: use "Alex" or another made-up name. Not checked whether the name belongs to a real account.
- P7 [lines 136-138] `{name}` is used here without a definition. Its definition is on the user page (line 53). Fix: name the helper once in a clause, or link the user page at first use.

Plain statement of where I got lost: nowhere in the flow. The place I slowed down was line 111, where "never" and the verb rule at line 100 seem to disagree.
