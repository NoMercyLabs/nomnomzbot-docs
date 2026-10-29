# Reader review: src/content/reference/en/templates/date.mdx
Verdict: PASS
Reviewed: C:/Projects/NoMercyLabs/nomnomzbot-docs/src/content/reference/en/templates/date.mdx
Reviewed-SHA: 013d0cde29d39637

Tests:
1. Find a helper: "count down to a moment" (L9) matches `{date:<source>|until}` (L29). "Channel time" matches `{time}` (L30). Found.
2. Use a helper: `{date}` gives `2026-10-26` (L15). `{date:now|+1d}` gives `2026-10-27 15:30` (L16-17). Typed forms are shown.
3. Intro (L6-9) names `{date}`, `{date*}`, `{time}` and `{time.*}`. All have rows. No link to the overview; the footer links to it (L33).
4. Backticks correct. Table cells intact.

Findings:
- [L20] `Write [o] for the ordinal day`: the page uses square brackets for optional parts (L18 `[:<unit>]`, L26 `[:<unit>]`). A reader cannot tell whether `[o]` is typed with brackets. Fix: state the exact token, for example "type o".
- [L20] "a .NET pattern" is jargon. Fix: say "a date pattern such as yyyy-MM-dd".
- [L20] The list of letters (d, D, t, T, f, F, g, G, s) gives no meaning for each letter. Fix: a short table or a link.
- [L18] The example `{date:2026-03-29T00:00|diff:2026-03-30T00:00:hours}` gives `23 hours`. The reader expects 24. The cause (a daylight-saving change) is not stated. Fix: say so, or use another date.
- [L18] "as a total (411 days) or a breakdown" does not say which input gives which. Fix: show both forms.
- [L15] "Today date" should read "Today's date".
- [L16] The Example column shows the input with the `\|` pipe escape. This renders correctly in the table; not a finding.
