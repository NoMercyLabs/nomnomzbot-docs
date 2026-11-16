# Current independent reader review

Verdict: PASS
Reviewed: src/content/reference/en/templates/emote.mdx
Reviewed-SHA: 168f2d55b8016a058877f2b69bf3c27bdd7313cdedf075cf04c7732907c8f4a2
Reviewed-SHA256: 168f2d55b8016a058877f2b69bf3c27bdd7313cdedf075cf04c7732907c8f4a2
Reviewed-Date: 2026-11-05
Reviewer: independent section reviewer

The reference distinguishes channel/provider sets, message-derived counts, image links and selection. Trigger-dependent rows are marked and example values are presented as illustrative.

The full page was read with the preceding/following navigation context and related links. This review applies the owner's explanatory, progressive-disclosure guidance; it does not impose Atlas sentence caps, pilot mimicry or fixed article headings. No substantive reader finding remains at this hash. Build/render/link checks are recorded separately by the lead reviewer.

Report: docs-work/overhaul/review-learning-commands-helpers.md.

## Historical evidence

The material below is retained as historical evidence; its older verdict is not the current review.

# Reader review: src/content/reference/en/templates/emote.mdx
Verdict: PASS
Reviewed: C:/Projects/NoMercyLabs/nomnomzbot-docs/src/content/reference/en/templates/emote.mdx
Reviewed-SHA: 5f5554e4b0144332

Tests:
1. Find a helper: "show emotes" (L8) matches `{emote}` (L15) and `{emote.image}` (L23). "Count and pick" matches the count and random rows. Found.
2. Use a helper: `{emote:catJAM}` gives `catJAM` (L15). `{emote.repeat:catJAM|3}` gives `catJAM catJAM catJAM` (L40). Both typed.
3. Intro (L6-9) names `{emote}` and `{emote.*}`. Every row is `emote.`. Footer links to the overview.
4. Backticks correct. Table is intact.

Findings:
- [L15] `{emote}`: "else the fallback text (or nothing)." The reader does not know how to give a fallback. Finding only. Fix: show `{emote:catJAM|fallback}`.
- [L23] `{emote.image}`: the result is `https://cdn.7tv.app/emote/<emote id>/2x.webp`. The result holds a placeholder, so the reader does not see a real link. The What column shows a real link. Fix: show a real result.
- [L17] "the channel 7TV set": the word "set" is not explained. Fix: one sentence.
