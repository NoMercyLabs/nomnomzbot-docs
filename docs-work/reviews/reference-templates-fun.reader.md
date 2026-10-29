# Reader review: src/content/reference/en/templates/fun.mdx
Verdict: PASS
Reviewed: C:/Projects/NoMercyLabs/nomnomzbot-docs/src/content/reference/en/templates/fun.mdx
Reviewed-SHA: 7b149edbbea12e8c

Read as a streamer who does not code, using the page as it stands (src/content/reference/en/templates/fun.mdx), plus the overview and the variables page it links to.

What I tested:
- Find a helper: `{fun.coin}` (line 17) and `{fun.dice}` (line 20) are each found in one look. The table has two columns of text and one example column on every row. The count of 26 rows matches the front matter.
- Use a helper: `{fun.countdown:3}` gives `3… 2… 1…` (line 19). `{fun.rate:pizza}` gives `8/10` (line 32). `{fun.flip:table}` gives the flipped table text (line 23). Each example is clear from its row alone.
- The 8ball row (line 15) says where to make the list, with a link to the pick lists page, and what happens with no list. A reader can follow it.
- The intro names only `{fun.*}`, and every row is a `{fun.*}` helper.
- The page links back to the overview and to the variables page (line 42).
- Every helper in the text is in backticks with braces. No table cell is broken. The `\|` escapes in line 25 are correct for a table cell.

Findings (none blocks a reader):
- [line 25] `{fun.love:{user.display}\|{target.display}}`: the example uses `{user.display}` and `{target.display}`, but the page never says what they are. Add a link to the user and target helper pages at first use.
- [line 20] The "What it gives" cell of `{fun.dice}` has three sentences and about 45 words. The third sentence holds two ideas (the default die, and the `2d6` notation). Move the notation into a short note under the table. "2d6" is not explained where it first appears.
- [line 35] `{fun.rps.vs}` says "against your choice". The page does not say whether the choice is typed by the streamer as input or by the viewer in chat. The example `{fun.rps.vs:rock}` shows the input, so a reader can follow it, but the sentence should name the input.
- [line 39] `{fun.slots.win}` says "in this message". Say "in this reply" if that is what it means, so it does not read as chat text.
- [line 25] "the same all day whichever name comes first" is clear, but it is a second idea in the same cell. Optional split.
- [line 11] "Each row is its own example" is a sentence about the page. Keep it short or move it to the page notes.

Same voice: the sentences match the overview and the variables page (the actor first, the result stated as a checkable value).
