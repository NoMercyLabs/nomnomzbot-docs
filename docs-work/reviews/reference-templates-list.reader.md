# Reader review: src/content/reference/en/templates/list.mdx
Verdict: PASS
Reviewed: C:/Projects/NoMercyLabs/nomnomzbot-docs/src/content/reference/en/templates/list.mdx
Reviewed-SHA: baa5fdd92203846e

Read: the whole page, as a streamer who does not write code.
Assumes: templates/overview.mdx and commands/variables-and-templates.mdx, read in full. docs-work/map.md has no row for /reference/templates/list (checked: the map table, lines 57-81).
The page has no include or snippet directive. Rendered output not checked.

Checks:
1. Find a helper: `{list.item}` (line 23) and `{list.random.index}` (line 30) are found in one look. The table has three columns on every row. The 18 rows match the count in the front matter.
2. Use a helper: `{list.first:snacks}` gives `chips` (line 18). `{list.join.and:snacks}` gives `chips, cookies and fruit` (line 25). `{list.join:snacks|\s/\s}` gives `chips / cookies / fruit` (line 24). I can type each one and know the line the viewer sees. Line 24 now tells me the input order: list name, a pipe, then the separator, with a backslash and s for a space. The earlier blocking finding is fixed.
3. Right page: the intro (line 6) names only `{list.*}` and `{count.*}`, and both have rows. The page ends with links back to the overview and to the variables page (line 34).
4. Backticks and braces: every helper in the text is in backticks with braces. The table cells are whole. The escaped pipes in the table source are the normal way to put a pipe in a cell.

Earlier findings, status:
- Separator for `{list.join}` (earlier blocking, line 24): fixed.
- Earlier non-blocking points, lines 11, 15, 16, 20, 21 and 8: still open, listed below.

Non-blocking findings (fix in the next revision; none sets FAIL):
1. [line 8, line 16] "pick list" is used on most rows and is never explained or linked on this page. The page never says where a pick list is made. A streamer who has not made a list named `snacks` cannot reproduce the examples. Fix: link [Pick lists](/reference/commands/pick-lists) at first use (line 8), with one clause: "a list you make on the Pick lists page".
2. [line 15] "A named counter" is not linked, and the page does not say where a counter is made. Fix: link the page that creates counters at first use. The link target is not checked in this run.
3. [line 20] "inline list a;b;c" has no meaning on this page; the example shows the result but not the idea. Fix: one sentence: an inline list is typed in the reply, with semicolons between the entries, and it is not a pick list.
4. [line 21 and line 24] Both rows say "use a backslash and s for a space". The escape list on the variables page (commands/variables-and-templates.mdx, line 55) names `\{`, `\}`, `\|`, `\:` and `\\`, and not `\s`. A reader who checks that page finds no `\s`. Fix: add `\s` to that list, or link it from these rows. Not checked: whether `\s` works anywhere else.
5. [line 24] The row says the default is "joined with a comma". Its only example uses a custom separator (` / `). A reader cannot see the default output on this row. Fix: add a second example for the default form, with its output, after the fact-check lane confirms the output.
6. [line 11] "Each row is its own example, so the rows on this page do not all come from one moment." This is a sentence about the page, not the subject. Fix: move it to a page note or cut it.

Density: no paragraph is over three sentences. Lines 8-9 are two sentences, line 11 is one.
Same person: the sentences match the voice of the overview and the variables page.
Where I got lost: at the pick list (finding 1). I could not tell from this page where `snacks` comes from.
