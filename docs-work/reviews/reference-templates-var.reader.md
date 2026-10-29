# Reader review: src/content/reference/en/templates/var.mdx
Verdict: PASS
Reviewed: C:/Projects/NoMercyLabs/nomnomzbot-docs/src/content/reference/en/templates/var.mdx
Reviewed-SHA: 4ee6488db1949449

Tests:
1. Find a helper: "keep a value" is `{set}` (L19) and `{var.<name>}` (L21). "Keep a long reply short" is `{include.cmd}` (L17). Found.
2. Use a helper: `{set:x=5}{var.x}` gives `5` (L21). `{include.cmd:hug}` gives `ViewerOne sends a hug` (L17). Both are typed exactly.
3. Intro (L6-9) names six helper families; every family has a row. The page does not link to the overview, only to the other pages in the table.
4. Backticks correct. The table has no broken cells.

Findings:
- [L19] `{set}`: "Read it with `{name}` or `{var.name}`." A reader does not know whether `{name}` is a literal helper or a placeholder for the name they chose. Fix: write `{x}` after `{set:x=5}`, or mark the placeholder.
- [L15] `{custom.<name>.<field>}`: "an ingested custom data source" uses a term the reader does not know, and no link says where a source is set up. Fix: one sentence and a link.
- [L20] `{transform.<name>:<text>}`: "upper/lower/title/reverse/etc." ends with "etc." and does not list the names. "The wrapped text" is not explained. The reader also sees `{text.upper}` on the text page and cannot tell which to use. Fix: list the names and say the two forms are the same.
- [L19] The `{set}` row has "-" in the Example column. Fix: show `{set:x=5}` with the note that it prints nothing.
