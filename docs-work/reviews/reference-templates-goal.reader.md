# Reader review: C:/Projects/NoMercyLabs/nomnomzbot-docs/src/content/reference/en/templates/goal.mdx
Verdict: PASS
Reviewed: C:/Projects/NoMercyLabs/nomnomzbot-docs/src/content/reference/en/templates/goal.mdx
Reviewed-SHA: 819b303e3cc41d05

Read as stored, whole page, lines 1-31. No include, snippet or template directive. Also read: overview.mdx and variables-and-templates.mdx.

Checks:
- Find a helper: `{goal.subs.percent}` (line 26) and `{goal.followers.bar}` (line 15) are found in one look. Ok.
- Use a helper: each row has a typed helper in the first column and a result in the last column, for example `{goal.subs.percent}` gives `80%`. Ok.
- Intro, line 6: `{goal.*}` names rows that exist, lines 15-28. Count is 14, the same as the overview (line 53). Ok. The earlier blocking finding (a bare `{goal}` in the intro with no row) is fixed on this text; line 6 now names `{goal.*}`.
- Way back: line 30 links to the overview and to the variables page. Ok.
- Backticks and braces: every helper in a table cell or the intro is in backticks with braces. Table rows are intact. Ok.
- Voice: short sentences, actor first, same as the overview. Line 11 is the only sentence about the page, not the subject.
- Bot voice: no sentence describes a bot reply. Nothing to check.

Findings:
- [lines 22-25] `{goal.newSubs.current}` (line 22) and `{goal.subs.current}` (line 25) are not explained against each other. The page does not say what the new-subscription goal counts, or how it differs from the subscription goal. Cost: a streamer cannot tell which number to show. Fix: one sentence after line 9 that names both goals and what each counts.
- [lines 6-9] The page does not say where a goal is set up, or what a helper gives when no goal is running. Cost: an empty result in chat looks broken. Fix: one sentence in the intro that says where the goal is set, and one sentence on the empty result.
- [line 17] `{goal.followers.description}` gives "The description the streamer gave the follower goal". The page does not say where the streamer enters that description. Fix: name the place in the same sentence.
- [line 11] "Each row is its own example, so the rows on this page do not all come from one moment." This sentence is about the page, not the goal. Cost: a reader takes it as a note about data quality. Fix: cut it.
