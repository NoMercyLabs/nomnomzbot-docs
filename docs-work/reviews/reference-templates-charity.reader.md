# Current independent reader review

Verdict: PASS
Reviewed: src/content/reference/en/templates/charity.mdx
Reviewed-SHA: 98aee96b964e010151356b1b0caeb98da47ee620bcd6c7f41721d11dd8a36826
Reviewed-SHA256: 98aee96b964e010151356b1b0caeb98da47ee620bcd6c7f41721d11dd8a36826
Reviewed-Date: 2026-11-05
Reviewer: independent section reviewer

The brief introduction gives the progress-display use case, followed by exact campaign, amount and bar values. Currency-bearing examples stay visible in the reference.

The full page was read with the preceding/following navigation context and related links. This review applies the owner's explanatory, progressive-disclosure guidance; it does not impose Atlas sentence caps, pilot mimicry or fixed article headings. No substantive reader finding remains at this hash. Build/render/link checks are recorded separately by the lead reviewer.

Report: docs-work/overhaul/review-learning-commands-helpers.md.

## Historical evidence

The material below is retained as historical evidence; its older verdict is not the current review.

# Reader review: src/content/reference/en/templates/charity.mdx
Verdict: PASS
Reviewed: C:/Projects/NoMercyLabs/nomnomzbot-docs/src/content/reference/en/templates/charity.mdx
Reviewed-SHA: 8119d4bf45afba1b

## What I read
The whole page, plus the overview (templates/overview.mdx) and Variables and templates (commands/variables-and-templates.mdx) it links to.

## Tests
1. Find a helper: "progress" is `{charity.bar}` (L15) and `{charity.percent}` (L20). "Raised" is L21 and "target" is L22. Each in one look.
2. Use a helper: `{charity.percent}` gives `42%`; `{charity.raised}` gives `€420.00`; `{charity.bar}` gives `████░░░░░░ 42%`. I can write each as shown and know the output.
3. Intro (L8-9) says what the page holds and where the helpers can be used. Footer links to the overview (L24).
4. The first line (L6) names `{charity.*}`. All 8 rows are in that family, and the count matches L3. Pass.

## Findings
- [L8, L19] "campaign" is used throughout and is not explained. A streamer who runs a Twitch charity campaign knows the term, but the page does not say that these helpers need a running campaign. Fix: one sentence in the intro.
- [L15-L22] No row says what the helper gives when no campaign is running (blank, zero, or a message). A streamer who tests with no campaign cannot tell whether the helper works. Fix: one sentence stating the empty result, for the page as a whole.
- [L17] `{charity.donations.latest}` gives `ViewerOne (€10.00)`. The page does not say what it gives when no donation has come in yet. Fix: the same empty-result sentence as above.

## Where I got lost
- L19: I could not tell what `{charity.name}` gives between campaigns.
