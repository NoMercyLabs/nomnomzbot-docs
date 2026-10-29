# Reader review: C:/Projects/NoMercyLabs/nomnomzbot-docs/src/content/reference/en/templates/stream.mdx
Verdict: PASS
Reviewed: C:/Projects/NoMercyLabs/nomnomzbot-docs/src/content/reference/en/templates/stream.mdx
Reviewed-SHA: 6adca5e0e4e79716

Read as stored, whole page, lines 1-92. No include, snippet or template directive. Also read: overview.mdx and variables-and-templates.mdx.

Checks:
- Find a helper: `{stream.uptime}` (line 31) and `{stream.last.title}` (line 55) are found in one look. The three sections (Live now, The last stream, Counts and top lists) are clear. Ok.
- Use a helper: `{stream.topChatters:3}` (line 88) and `{stream.title.short:8}` (line 30) show the colon form. Ok.
- Intro, lines 8-9: the three use cases (uptime, game, recap) each have helpers on the page. Ok.
- "Discord seed alias": line 10 explains the marker. It works only in a Discord notification, and it stays as typed in a command or an event response. Rows 28 and 37 carry the marker. A prior review found this term unexplained. On the current text, line 10 explains it, so that finding is closed.
- Count: 23 + 10 + 29 = 62 rows, the same as the overview (line 46). Ok.
- Way back: line 91 links to the overview and the variables page. Ok.
- Backticks and braces: all helpers are in backticks. Table cells are intact. Ok.

Findings:
- [lines 8-10] One paragraph of four sentences (66 words). Line 10 carries two ideas: what the marker means, and how the value is filled in. Fix: a blank line after line 9, and split line 10 into two sentences.
- [line 70] `{stream.games.history}`: "as many as you ask for". The Example column does not show the input. Line 88 (`{stream.topChatters:3}`) does show it. Cost: a reader does not see how to ask for a number. Fix: show the typed form with a number, checked by the fact-check lane.
- [line 39] `{stream.viewers.compact}`: the description says "short: 1.2k", but the Example shows `42`, so the short form is not shown. Fix: show a value that changes, such as 1,200 giving 1.2k.
- [lines 77-78] `{stream.raids.lastRaider}` is named "last", but its description says "the biggest raid this stream". A reader cannot tell whether they get the last raid or the biggest. Fix: align the name or the description.
- [lines 18-40] Live-only helpers (uptime, viewers, start time) do not say what they give when the stream is offline. A reader who builds an uptime command cannot tell whether the output is blank, old or an error. Fix: one sentence in the Live now intro.
- [line 24] `{stream.startedAt}` shows a raw timestamp with seven decimal places. A streamer would not use it. Fix: say that `{stream.startedAt.local}` (line 25) is the one to use for chat.
- [line 12] "Each row is its own example, so the rows on this page do not all come from one moment." This sentence is about the page, not the stream. Fix: cut it.
