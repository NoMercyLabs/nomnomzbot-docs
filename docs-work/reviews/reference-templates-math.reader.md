# Reader review: src/content/reference/en/templates/math.mdx
Verdict: PASS
Reviewed: C:/Projects/NoMercyLabs/nomnomzbot-docs/src/content/reference/en/templates/math.mdx
Reviewed-SHA: 3b4c5d796428073f

Tests:
1. Find a helper: "do math" (L8) matches `{math.add}` through `{math.sum}` (L16-29). "Draw a number as a meter" matches L30-33. Found.
2. Use a helper: `{math:2+3*4}` gives `14` (L14). `{math.sqrt:81}` gives `9` (L27). Both typed.
3. Intro (L6-8) names `{math}`, `{math.*}`, `{meter}`, `{meter.*}`. All have rows. Footer links to the overview.
4. Backticks correct. Table is intact.

Findings:
- [L14] `{math}`: the row lists functions (sqrt, abs, floor, ceil, pow, log) with no syntax for calling them. The separate helper rows show the syntax. Fix: show one call, such as `{math:sqrt(81)}`, if that is the syntax.
- [L19] `{math.div}`: "no answer when the second is 0." The reader does not know what appears in chat. Fix: state the output.
- [L30] `{meter}`: "width and marks are optional." No syntax shown and "marks" is not explained. Finding only.
