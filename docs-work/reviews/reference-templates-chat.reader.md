# Reader review: src/content/reference/en/templates/chat.mdx
Verdict: PASS
Reviewed: C:/Projects/NoMercyLabs/nomnomzbot-docs/src/content/reference/en/templates/chat.mdx
Reviewed-SHA: 72b295abcdf05dc7

Read as a streamer who does not code, using the page as it stands (src/content/reference/en/templates/chat.mdx), plus the overview and the variables page it links to.

What I tested:
- Find a helper: `{chat.limit}` (line 23) and `{chat.mention.user}` (line 28) are each found in one look. The table has three columns on every row. The count of 29 rows matches the front matter.
- Use a helper: `{chat.mention:ViewerTwo}` gives `@ViewerTwo` (line 25). `{tts.numbers:I have 3 cats}` gives `I have three cats` (line 46), and the example shows the change. `{link.x:Live now}` gives the X link (line 42).
- The Discord seed alias row `{raw.message}` (line 43): the mark and its effect are explained in lines 11-14. The term "seed alias" itself is never defined. See the finding below.
- The intro names only helpers that have rows: `{chat.*}`, `{tts.*}`, `{link.*}` and `{raw.*}` (line 6).
- The page links back to the overview and to the variables page (line 50).
- Every helper in the text is in backticks with braces. No table cell is broken. The escaped pipes in lines 20, 40 and 41 are correct for a table cell.

Findings (none blocks a reader):
- [lines 11-14] One block of six sentences and 64 words, with no blank line between its parts. Split it into two paragraphs: the Discord mark, and the rule for commands. "Pipeline" is used at line 11 with no meaning and no link. Costs the reader a stop on the first read.
- [line 11] "Discord pipeline seed alias" uses "seed alias" with no meaning. The page says what the mark does, but not what it is. One short phrase would close this.
- [line 20] `{chat.fit}`: the example `short text` is shorter than the limit, so nothing is cut. The example does not show the ellipsis or the end text the sentence describes. Use a longer input so the reader sees the cut.
- [line 21] `{chat.fit.words}` has the same gap: `short text` is not cut, so the example does not show the cut at the last whole word.
- [line 20] "after a pipe" is used with no meaning. Say "after a vertical bar" or show the character once.
- [line 32] "command prefix" and "command word" are used with no meaning and no link. `{channel.prefix}` on the channel page explains the prefix only as a value.
- [line 35] `{chat.settings.followersOnly}`: the phrase "(on when any follower may chat)" does not say what the helper gives in that case. Add the output for that case.
- [line 38] "shared chat session" is used with no meaning (also line 22).
- [line 44] "TTS" is never spelled out, and "Audio widget" is not explained. The first use is line 44. Say "text to speech (TTS)" and link the audio page.
- [line 45] "pronunciation list" is used with no link to where the list is set.
- [line 47] "emotes" is used with no meaning.
- [line 40] `{link.mastodon}`: "server host name" is used with no example of a host. The example `mastodon.social` shows it, so a reader can follow.
- [line 16] "Each row is its own example" is a sentence about the page. Keep it short or move it to the page notes.

Same voice: the sentences match the overview and the variables page (the actor first, the result stated as a checkable value).
