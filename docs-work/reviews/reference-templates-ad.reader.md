# Current independent reader review

Verdict: PASS
Reviewed: src/content/reference/en/templates/ad.mdx
Reviewed-SHA: 387955ec09b791c1863c13331ece68ba2e719b9cb1e174567c0ff628ed980a4a
Reviewed-SHA256: 387955ec09b791c1863c13331ece68ba2e719b9cb1e174567c0ff628ed980a4a
Reviewed-Date: 2026-11-05
Reviewer: independent section reviewer

The table keeps next-ad lookups separate from event-scoped break values and provides units and countdown forms. The availability note explains why an event-only row needs its event.

The full page was read with the preceding/following navigation context and related links. This review applies the owner's explanatory, progressive-disclosure guidance; it does not impose Atlas sentence caps, pilot mimicry or fixed article headings. No substantive reader finding remains at this hash. Build/render/link checks are recorded separately by the lead reviewer.

Report: docs-work/overhaul/review-learning-commands-helpers.md.

## Historical evidence

The material below is retained as historical evidence; its older verdict is not the current review.

# Reader review: src/content/reference/en/templates/ad.mdx
Verdict: PASS
Reviewed: C:/Projects/NoMercyLabs/nomnomzbot-docs/src/content/reference/en/templates/ad.mdx
Reviewed-SHA: b5e1a9d3b032bf25

Read as a streamer who does not code, using the page as it stands, plus the overview and the variables page it links to.

What I tested:
- Find a helper: `{ad.next.in}` (line 22) and `{ad.isScheduled}` (line 17) are each found in one look. The table has three columns on every row. The count of 15 rows matches the front matter.
- Use a helper: `{ad.next.in}` gives `12m` (line 22). `{ad.next.in.long}` gives `12 minutes` (line 23). `{ad.when}` gives `in ~3 minutes` (line 29). Each example is clear from its row alone.
- Cross-check of the examples on the page: `{ad.next.seconds}` gives 720 (line 24) and `{ad.next.in}` gives 12m (line 22). Both agree. `{ad.last.at}` gives 14:42 (line 19) and `{ad.last.ago}` gives 48m (line 18). The page does not give the current time, so a reader cannot check these two against each other.
- The intro names only `{ad.*}`, and every row is an `{ad.*}` helper.
- The page links back to the overview and to the variables page (line 31).
- Every helper in the text is in backticks with braces. No table cell is broken.

Findings (none blocks a reader):
- [line 26] `{ad.seconds}`: the "What it gives" cell says "(e.g. "90")" and the Example column says `300`. One row shows two different numbers. Use one value, or name the example as the "What it gives" value only.
- [line 15] `{ad.automatic}`: "requester-triggered" is used with no meaning. Say in plain words what a requester-triggered ad break is, and who starts it.
- [line 27] `{ad.snoozes.left}`: "ad snoozes" is used with no meaning. Say what a snooze does to the next ad break, in one sentence.
- [line 25] `{ad.prerollFree}`: "pre-roll free time" is used with no meaning.
- [line 16] `{ad.duration}`: "(e.g. "3 minutes")" uses "e.g." in a cell. Write "for example" or drop it; the example column already shows the value.
- [line 11] "Each row is its own example" is a sentence about the page. Keep it short or move it to the page notes.

Same voice: the sentences match the overview and the variables page (the actor first, the result stated as a checkable value).
