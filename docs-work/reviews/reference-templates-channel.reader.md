# Reader review: src/content/reference/en/templates/channel.mdx
Verdict: PASS
Reviewed: C:/Projects/NoMercyLabs/nomnomzbot-docs/src/content/reference/en/templates/channel.mdx
Reviewed-SHA: 39f6c9d32a51efe4

Read as a streamer who does not code, using the page as it stands (src/content/reference/en/templates/channel.mdx), plus the overview and the variables page it links to.

What I tested:
- Find a helper: `{channel.subs}` (line 40) and `{channel.localTime}` (line 29) are each found in one look. The table is in alphabetical order and has three columns on every row. The count of 34 rows matches the front matter.
- Use a helper: `{channel.mention}` gives `@SampleChannel` (line 31). `{channel.prefix}` gives `!` (line 35). `{channel.localTime}` gives `15:30` (line 29). Each is clear from its row alone.
- The Discord seed alias rows (lines 19, 25, 30, 33, 44 and 45): the mark is explained at line 11. A reader can tell that these rows do nothing in a normal command.
- The intro names only helpers that have rows (`{channel}` line 17, `{channel.*}`, `{streamer}` line 50, `{status}` line 49).
- The page links back to the overview (line 52) and to the variables page for places and special characters.
- Every helper in the text is in backticks with braces. No table cell is broken.

Findings (none blocks a reader):
- [lines 8-11] One block of five sentences and 72 words, with no blank line between its parts. Split it: one paragraph on what the helpers describe, one on the Discord seed alias mark. Costs the reader a scan on the first read.
- [line 36, and line 39] `{channel.raids.inCount:otherstreamer}`: the row never says what to type after the colon. Add: "Type the login name of the other channel after the colon." Costs a reader a guess on the first use.
- [line 10] "platform ID" is used without a meaning. Add a short phrase, such as "the number Twitch uses for the channel."
- [line 20] `{channel.ccls}` uses "content labels" without saying what they are. Name a plain example, or link the stream page if it explains them.
- [line 27] `{channel.isBranded}` uses "branded content" without a meaning.
- [line 42] `{channel.team}` uses "channel team" without saying it is a Twitch team.
- [line 34] `{channel.personality}` says which personality the bot uses, but not what it changes in the replies. A link to the bot page would help.
- [line 31] The mention example uses `SampleChannel`, while the other rows use `example_channel` or `Example_Channel`. Use one placeholder name across the page.
- [line 13] "Each row is its own example, so the rows on this page do not all come from one moment." This sentence talks about the page. Keep it short or move it to the page notes.

Same voice: the sentences match the overview and the variables page (the actor first, the result stated as a checkable value, no code words in the main sentences).
