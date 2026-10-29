# Reader review: src/content/reference/en/templates/random.mdx
Verdict: PASS
Reviewed: C:/Projects/NoMercyLabs/nomnomzbot-docs/src/content/reference/en/templates/random.mdx
Reviewed-SHA: 5020385fb29947dc

Tests:
1. Find a helper: "random answer" (L10) matches `{pick}` (L17). "Giveaway pick" matches `{random.chatter}` (L23). Found.
2. Use a helper: `{chance:50|yes|no}` gives `yes` (L16). `{random.chatter.notMe}` gives `ViewerTwo` (L25). Both typed.
3. Intro (L6-10) names all families. Every family has rows. The footer links to the overview.
4. Backticks correct. Table is intact.

Findings:
- [L17] `{pick:solo}` gives `solo`: one item, so the example shows nothing about choosing. Fix: use three items.
- [L18] `{pick.inline:solo}`: the row says "a list written with semicolons", but the example has no semicolon. Fix: `{pick.inline:a;b;c}` with a result.
- [L27] `{random.decimal:2|2|2}` gives `2.00`: minimum and maximum are both 2. Fix: use a real range.
- [L29] `{random.number:1}` gives `1`: the range is 1 to 1. Fix: use `{random.number:6}`.
- [L29-31] Two forms of the same helper (`{random.number:6}` and `{random.number.100}`) are not linked. Fix: say they are two ways to write one helper.
- [L33] `{random.pick.<a.b.c>}`: "a dot-separated list" with dots inside angle brackets. The reader cannot tell where the name ends and the items start. Fix: show `{random.pick.red.green.blue}` in the What column.
- [L36-37] Row L36 `{roll.<name>}` uses `{roll.pct.60.98}`, which is defined only on the next row (L37). The reader meets the example before the rule for drawing the roll. Fix: swap the two rows, or say "draw it first with the row below".
