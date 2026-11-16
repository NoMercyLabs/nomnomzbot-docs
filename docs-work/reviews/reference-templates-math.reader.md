# Current independent reader review

Verdict: PASS
Reviewed: src/content/reference/en/templates/math.mdx
Reviewed-SHA: 63a448d60811037d3e4ac619d8750732a1d3fab7ab9535707db19851f02bf51e
Reviewed-SHA256: 63a448d60811037d3e4ac619d8750732a1d3fab7ab9535707db19851f02bf51e
Reviewed-Date: 2026-11-05
Reviewer: independent section reviewer

Exact arithmetic and meter syntax is easy to look up; examples include expected values and the division-by-zero behavior is retained.

The full page was read with the preceding/following navigation context and related links. This review applies the owner's explanatory, progressive-disclosure guidance; it does not impose Atlas sentence caps, pilot mimicry or fixed article headings. No substantive reader finding remains at this hash. Build/render/link checks are recorded separately by the lead reviewer.

Report: docs-work/overhaul/review-learning-commands-helpers.md.

## Historical evidence

The material below is retained as historical evidence; its older verdict is not the current review.

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
