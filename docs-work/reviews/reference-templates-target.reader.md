# Reader review: src/content/reference/en/templates/target.mdx
Verdict: PASS
Reviewed: C:\Projects\NoMercyLabs\nomnomzbot-docs\src\content\reference\en\templates\target.mdx
Reviewed-SHA: 4de43d279599b959

What I read, as a streamer who does not code:
- The page, whole: intro (lines 6-10), the pronoun note (lines 12-18), seven helper tables (lines 20-73), and the closing link (line 96).
- The context pages the review brief names: templates/overview.mdx, commands/variables-and-templates.mdx, and the linked templates/pronouns.mdx (for how `target.tense` and the verb helper work).
- The earlier blocking finding on line 29 (`{target.tense}`). Judged fresh. It now says "your channel" when the bot is live or offline, and "the person shouted out" in a shoutout. A reader can tell which stream each applies to. Cleared.

Tests:
1. Find a helper. Found `{target.name}` (line 45), `{target.accountAge}` (line 52) and `{target.isFollower}` (line 55) in one look each. The three columns (Helper, What it gives, Example) read in that order.
2. Use a helper. Three rows written into a reply:
   - `Say hi to {target.displayname}.` gives `Say hi to Example_Viewer.`
   - `{target.subject} {target.verb:has|have}` gives `they have` (the Example column shows `have`).
   - `{target.points.rank}` gives `17`.
   The Example column is enough to predict each chat line.
3. The intro says the page covers the target's name, pronouns, account, stats and live status. Each of those has rows (lines 22-94). The pronoun note at lines 14-16 points to the pronoun guide. The page ends with a link back to the overview (line 96).
4. Backticks and braces: every helper is in backticks with braces. The pipes inside `{target.verb:<sing\|plur>}` (line 30) are escaped, so the table cells do not break.

Why it passes: a streamer can find the helper, write it, and know what the chat line will show. No step is missing. Every finding below is a wording or density point for the next revision.

Findings (all non-blocking):
- [line 8, lines 24-30, and about 20 more rows] The phrase "@mention target" is used in place of "target" and is never defined. The intro uses "the target." Cost: the reader must work out that both mean the same person. Fix: write "the target" in the rows, or define "@mention target" as "the target" in line 8.
- [lines 36 and 45] `{target}` and `{target.name}` have the same description ("The @mention target login name") and the same example. Cost: the reader cannot tell which one to use. Fix: say what the bare `{target}` gives, or point to `{target.name}`.
- [line 18] "Each row is its own example, so the rows on this page do not all come from one moment." This sentence is about the page, not the helpers. Cost: one more line to read. Fix: cut it, or move it under the tables as a note.
- [line 40] The `{target.displayname}` cell has three sentences. Cost: the dense cell is hard to scan. Fix: keep the first sentence in the cell and shorten the fallback.
- [line 42] `{target.known}`: "matches a user the bot knows" does not say what "knows" means. Cost: the reader cannot tell when the answer is true. Fix: name the rule in one clause. Not checked here; the fact-check lane owns the rule.
- [lines 43 and 46] Link examples differ: `twitch.tv/example_viewer` (no scheme) and `https://twitch.tv/viewertwo` (with scheme). The names also differ (`example_viewer`, `viewertwo`). Cost: small. Fix: use one form.
- [line 71] `{target.data.<key>}`: "per-viewer data field" does not say where a field is set. There is no link. Also no default value is shown, unlike the user page (line 88). Fix: add one link to the page where data fields are set.
- [line 79] "the channel's own steps" uses "steps" with no meaning given. The user page repeats it (line 107). Fix: name the steps, or say "the channel's activity levels".
- [line 80] `{target.avgperday}` description is a fragment: "The @mention target average chat messages per day since first seen." Fix: "The average chat messages per day of the target since first seen."
- [lines 85 and 86] `{target.lastmessage}` and `{target.lastmessage.full}` show the same example, so the example does not show the difference ("never cut short"). Fix: use a long message as the example for `.full`.
- [line 88] "fit to quote" is unclear. Fix: say what makes a message fit (for example, a length limit), if the fact lane confirms it.
- [line 93] `{target.stats.streak}` says "attendance streak" with no unit. The user page (line 114) says "in streams". Fix: add the unit if it is true (not checked here).
- [line 27] "to-be form" is a grammar term. The example (`are`) explains it, so the cost is small.
- Density: no paragraph in the prose is over three sentences. The single long cell at line 40 is the only dense block.

Same author? Yes. The target page and the user page use the same table layout, the same "The ... for the @mentioned viewer" wording and the same closing line.
