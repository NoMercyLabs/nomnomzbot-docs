# Reader review: src/content/reference/en/templates/emote.mdx
Verdict: PASS
Reviewed: C:/Projects/NoMercyLabs/nomnomzbot-docs/src/content/reference/en/templates/emote.mdx
Reviewed-SHA: 5f5554e4b0144332

Tests:
1. Find a helper: "show emotes" (L8) matches `{emote}` (L15) and `{emote.image}` (L23). "Count and pick" matches the count and random rows. Found.
2. Use a helper: `{emote:catJAM}` gives `catJAM` (L15). `{emote.repeat:catJAM|3}` gives `catJAM catJAM catJAM` (L40). Both typed.
3. Intro (L6-9) names `{emote}` and `{emote.*}`. Every row is `emote.`. Footer links to the overview.
4. Backticks correct. Table is intact.

Findings:
- [L15] `{emote}`: "else the fallback text (or nothing)." The reader does not know how to give a fallback. Finding only. Fix: show `{emote:catJAM|fallback}`.
- [L23] `{emote.image}`: the result is `https://cdn.7tv.app/emote/<emote id>/2x.webp`. The result holds a placeholder, so the reader does not see a real link. The What column shows a real link. Fix: show a real result.
- [L17] "the channel 7TV set": the word "set" is not explained. Fix: one sentence.
