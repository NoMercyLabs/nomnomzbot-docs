# Reader review: src/content/reference/en/commands/variables-and-templates.mdx
Verdict: PASS
Reviewed: C:/Projects/NoMercyLabs/nomnomzbot-docs/src/content/reference/en/commands/variables-and-templates.mdx
Reviewed-SHA: 627cd1165fcfb65e

## What I read
- The whole page, as a streamer who does not code.
- Assumed page, read in full: templates/overview.mdx.
- Linked pages, checked for the link targets only: user, target, pronouns, stream, args, event, date, if, random, text (the find table, lines 99-110).
- Rendered output: the page has no include or snippet directive. Built site not checked.
- The earlier verdict (Reviewed-SHA 82b05db950ad6005) had two blocking findings. Both are fixed in the current text (see the checks below).

## Tests
1. Find a helper: the find table (lines 99-110) takes a streamer from a goal to a helper page in one row. The pronoun helpers are in the row "A line that reads right for he, she and they" (line 103). Pass.
2. Use a helper: `{text.upper:hello}` (line 62) gives `HELLO`. `{if:value|then|else}` (line 66) now says when the first text shows: when the value is set, and not when it is empty, `false`, `no` or `0`. `{set:name=value}` (line 68) now names the read-back form, `{var.name}`, and gives an example on line 73 (`{set:mood=happy}I feel {var.mood}.` shows `I feel happy.`). I can follow all three.
3. Right page: the intro (lines 6-8) and the find table (lines 92-110) say where to go. Pass.
4. Backticks and braces: every helper is in backticks. The `\|` in lines 66-67 sits in code spans. `<b>bold</b>` (line 39) is now in backticks. Pass.

Pass on all four tests. No blocking finding.

## Findings (non-blocking)
1. [line 95] "the type is the first word of the helper name" is stated with no exception. overview.mdx lines 21-23 say pronoun and grammar helpers such as `{subject}` and `{verb:plays|play}` are on the user page. A reader who looks for `{subject}` under "subject" finds no page. Fix: add the exception, or link the overview section "Find a helper by its type".
2. [line 50] "When a pipeline reply is read aloud" uses "pipeline" before the link at line 88. Fix: link at first use.
3. [line 57] "A helper can hold another helper, up to 8 levels deep." No example. Fix: one nested example.
4. [line 66] The `{if}` row does not link Condition helpers. The link comes after the table, at line 71. Fix: link the form at the row.
5. [lines 94-97] One paragraph of 4 sentences. Fix: split it at "Start with the overview."

## Where I got lost
- I could not tell where a pronoun helper is listed by type (finding 1). The find table gave me a path.
