# Reader review: src/content/reference/en/templates/num.mdx
Verdict: PASS
Reviewed: C:/Projects/NoMercyLabs/nomnomzbot-docs/src/content/reference/en/templates/num.mdx
Reviewed-SHA: 4f7dac32db1b241a

Tests:
1. Find a helper: "round it, add separators, currency, duration" (L8) matches rows L46, L31, L22, L28. Found.
2. Use a helper: `{num.format:1234}` gives `1,234` (L31). `{num.currency:5|USD}` gives `$5.00` (L22). Both typed.
3. Intro (L6-8) names `{num.*}`. Every row is `num.`. Footer links to the overview.
4. Backticks correct. Table is intact.

Findings:
- [L21] `{num.convert:10|km|mi}`: the unit codes (km, mi, and the others) are not listed. The reader cannot know which codes exist. Fix: list the codes.
- [L31] `{num.format}`: "with optional decimals." No syntax shown. Finding only.
- [L42] `{num.percent}`: "with optional decimals." No syntax shown. Finding only.
- [L46] `{num.round}`: "halves away from zero" is jargon. Fix: give one example with a half, such as 2.5 gives 3.
- [L38] "3e in a Dutch channel" is a detail that is not needed for the reader. Not blocking.
