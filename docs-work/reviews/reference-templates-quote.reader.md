# Reader review: src/content/reference/en/templates/quote.mdx
Verdict: PASS
Reviewed: C:/Projects/NoMercyLabs/nomnomzbot-docs/src/content/reference/en/templates/quote.mdx
Reviewed-SHA: 86dba8c109f70d6b

Tests:
1. Find a helper: "show a quote by its number" (L9) matches `{quote}` (L15); "author, date and game" match L16, L18, L19. Found quickly.
2. Use a helper: `{quote.author:12}` gives `ViewerTwo` (L16); `{quote.count}` gives `48` (L17). Each row shows a typed form.
3. Intro (L6-9) names `{quote}` and `{quote.*}`; both have rows. Links to the overview at L23.
4. Backticks correct. No broken table cells.

Findings:
- [L8] "These helpers read the quotes the channel saved." The page never says how a quote is saved, and does not link to the command that saves one. A reader with no quotes sees nothing. Fix: add one sentence and a link.
- [L15] `{quote}`: the typed form `{quote:12}` appears only inside the What column; the Example column shows the result `#12 "that was close"`. Other rows show the typed form in the Example column. Fix: move the typed form to the Example column.
- [L20] `{quote.latest}`: the Example column shows only the result. Same fix as above.
