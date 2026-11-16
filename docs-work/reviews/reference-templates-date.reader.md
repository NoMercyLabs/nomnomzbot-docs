# Current independent reader review

Verdict: PASS
Reviewed: src/content/reference/en/templates/date.mdx
Reviewed-SHA: 422e711397dc595173ed9ec2220bd63243277a6a37edaf5ce15b17ed7ffa7ccf
Reviewed-SHA256: 422e711397dc595173ed9ec2220bd63243277a6a37edaf5ce15b17ed7ffa7ccf
Reviewed-Date: 2026-11-05
Reviewer: independent section reviewer

The worked time-zone and fixed-date examples show expected results and explain that presentation does not alter channel settings. Detailed operations, formats, units and daylight-saving-sensitive examples remain in the reference.

The full page was read with the preceding/following navigation context and related links. This review applies the owner's explanatory, progressive-disclosure guidance; it does not impose Atlas sentence caps, pilot mimicry or fixed article headings. No substantive reader finding remains at this hash. Build/render/link checks are recorded separately by the lead reviewer.

Report: docs-work/overhaul/review-learning-commands-helpers.md.

## Historical evidence

The material below is retained as historical evidence; its older verdict is not the current review.

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
