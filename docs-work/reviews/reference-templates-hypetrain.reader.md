# Current independent reader review

Verdict: PASS
Reviewed: src/content/reference/en/templates/hypetrain.mdx
Reviewed-SHA: 6670554cc702896c6e8bca3fee4af083cbf03055c258ba715c5aeff6f5f0093b
Reviewed-SHA256: 6670554cc702896c6e8bca3fee4af083cbf03055c258ba715c5aeff6f5f0093b
Reviewed-Date: 2026-11-05
Reviewer: independent section reviewer

The reference preserves event-only hype_train rows separately from live hypetrain state; the shared availability note makes the event prerequisite clear.

The full page was read with the preceding/following navigation context and related links. This review applies the owner's explanatory, progressive-disclosure guidance; it does not impose Atlas sentence caps, pilot mimicry or fixed article headings. No substantive reader finding remains at this hash. Build/render/link checks are recorded separately by the lead reviewer.

Report: docs-work/overhaul/review-learning-commands-helpers.md.

## Historical evidence

The material below is retained as historical evidence; its older verdict is not the current review.

# Reader review: C:\Projects\NoMercyLabs\nomnomzbot-docs\src\content\reference\en\templates\hypetrain.mdx
Verdict: PASS
Reviewed: C:\Projects\NoMercyLabs\nomnomzbot-docs\src\content\reference\en\templates\hypetrain.mdx
Reviewed-SHA: a42bcd59d8ba1816

Read as stored. No include or snippet directive. Read also: overview, variables-and-templates. Checks:
- Find a helper: `{hypetrain.percent}` (line 25) and `{hypetrain.topContributor}` (line 30) are found in one look. Pass.
- Use a helper: `{hypetrain.bar}` (line 19) and `{hypetrain.isActive}` (line 21) can be typed as shown. Pass.
- Intro: both spellings (`{hypetrain*}`, `{hype_train*}`) have rows. Pass.
- Count: 17 rows (4 with `hype_train`, 13 with `hypetrain`), as the overview says. Pass.

## Blocking findings
None.

## Other findings (not blocking)
- [lines 15 and 20] `{hype_train.goal}` ("the points needed for the next level") and `{hypetrain.goal}` ("the points needed to finish the current level") have near-identical names and different meanings. Similar split on `{hype_train.total}` (line 18) and `{hypetrain.total}` (line 31). A streamer does not know which set to use. Add one sentence that says why the page has two spellings.
- [lines 21-23] "for if and switch" uses the words "if" and "switch" with no link and no explanation on this page. Link to the condition helpers page.
- [line 11] "Each row is its own example, so the rows on this page do not all come from one moment." Sentence about the page. Padding.
