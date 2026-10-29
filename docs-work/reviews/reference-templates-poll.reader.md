# Reader review: C:/Projects/NoMercyLabs/nomnomzbot-docs/src/content/reference/en/templates/poll.mdx
Verdict: PASS
Reviewed: C:/Projects/NoMercyLabs/nomnomzbot-docs/src/content/reference/en/templates/poll.mdx
Reviewed-SHA: 272c83a3960eb00d

Read as stored, whole page, lines 1-75. No include, snippet or template directive. Also read: overview.mdx and variables-and-templates.mdx.

Checks:
- Find a helper: `{poll.leading}` (line 25) and `{prediction.leading}` (line 51) are found in one look. Ok.
- Use a helper: `{poll.option:2}` gives `cookies` (line 28) and `{prediction.outcome:2}` gives `No` (line 54). Both show the colon form. Ok.
- Intro, lines 6-9: `{poll.*}` and `{prediction.*}` each have rows. Count is 51, the same as the overview (line 51). The earlier finding about bare `{poll}` and `{prediction}` names in the intro is fixed: line 6 now names the families. Ok.
- Table: the escaped pipe on line 34 renders as a pipe. Ok.
- Way back: line 74 links to the overview and the variables page. Ok.
- Voice: short sentences, the same as the overview. Ok.

Findings:
- [lines 33 and 38] `{poll.question}` (line 33) and `{poll.title}` (line 38) both give the poll question. Line 33 names the running Twitch poll. Line 38 does not say which poll. Cost: a reader cannot tell which to use. The same gap is on lines 61 and 65 for predictions. Fix: say which poll each one reads, or drop one.
- [line 40] `{poll.winner}`: "The winning choice." The page does not say whether this is the running poll or the last one. Cost: a streamer who announces a result after the poll ends cannot tell if this row is the right one. Fix: say what it reads. Line 24 (`{poll.last.winner}`) is the clear choice for the last poll.
- [lines 17 and 31] `{poll.choices}` and `{poll.options}` both give the choices. The page does not say how they differ. Fix: one clause on each.
- [lines 60 and 67] `{prediction.points.total}` (line 60, "4,000") and `{prediction.total_points}` (line 67, "5000") give the same value in different formats. The underscore name also breaks the dotted pattern. Fix: say which name to use, and make the format match.
- [line 36] "terminated" and "archived" are not explained. Fix: one clause each.
- [line 55] "The payout ratio" is not explained. Fix: one clause, for example "how much one point wins".
- [line 11] "Each row is its own example, so the rows on this page do not all come from one moment." This sentence is about the page, not the poll. Fix: cut it.
