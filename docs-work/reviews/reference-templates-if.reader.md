# Current targeted reader review

Verdict: PARTIAL
Reviewed: src/content/reference/en/templates/if.mdx
Reviewed-SHA: 902935a90f672e3eadff82b5e7f191e31a7edc311f1cc0426503cd8740e8d3e3
Reviewed-SHA256: 902935a90f672e3eadff82b5e7f191e31a7edc311f1cc0426503cd8740e8d3e3
Reviewed-Date: 2026-11-06
Reviewer: final-learning editing author; self-review, not independent
Product: 2dfefbb0c393f439954d79b32ac11511678d7f44

The full article was read for editorial clarity. Source verification is limited to the claims below and the focused checks in docs-work/ecosystem-validation/final-learning.md. This is not an exhaustive factual PASS, independent approval, rendered-site review or live application test.

Viewer regex exclusion: server/src/NomNomzBot.Infrastructure/Platform/Templating/Helpers/Logic/IfTemplateHelpers.cs:35-43,170-180 excludes regex in both registry metadata and runtime; LogicHelperProvider.cs:47-64 chooses Standard; ValuePredicate.cs:42-48 identifies matches. The table and docs-work/helpers.json now exclude Viewer; docs-work/helper-groups.md preserves the explanatory correction on regeneration.

## Preserved historical reviews

The earlier hashes, verdicts and claims below are retained as historical evidence; they do not approve this revision.

# Current independent reader review

Verdict: PASS
Reviewed: src/content/reference/en/templates/if.mdx
Reviewed-SHA: 7452eeb207aca9c07c835663527b6e1ac7c5f4fb67860d2a69ce81b1303c6753
Reviewed-SHA256: 7452eeb207aca9c07c835663527b6e1ac7c5f4fb67860d2a69ce81b1303c6753
Reviewed-Date: 2026-11-05
Reviewer: independent section reviewer

A meaningful live/offline reply shows how nesting supplies the condition. It distinguishes wording choices from permissions and action branches, then retains truthiness, lazy evaluation, comparisons and fallback syntax.

The full page was read with the preceding/following navigation context and related links. This review applies the owner's explanatory, progressive-disclosure guidance; it does not impose Atlas sentence caps, pilot mimicry or fixed article headings. No substantive reader finding remains at this hash. Build/render/link checks are recorded separately by the lead reviewer.

Report: docs-work/overhaul/review-learning-commands-helpers.md.

## Historical evidence

The material below is retained as historical evidence; its older verdict is not the current review.

# Reader review: src/content/reference/en/templates/if.mdx
Verdict: PASS
Reviewed: C:/Projects/NoMercyLabs/nomnomzbot-docs/src/content/reference/en/templates/if.mdx
Reviewed-SHA: 2f287d921af98aad

Tests:
1. Find a helper: "choose a text by a condition" (L8) matches `{if:value|then|else}` (L22). "Fallback when empty" matches `{default}` (L21). Found.
2. Use a helper: `{if.stream.live:on|off}` gives `on` (L23). `{switch:they/them|she/her=queen|he/him=king|royal}` gives `royal` (L39). Both typed.
3. Intro (L6) names `{if}`, `{if.*}`, `{switch*}`, `{coalesce*}`, `{default*}`, `{literal*}` and `{chars.*}`. Every name has rows. Footer links to the overview.
4. Backticks correct. The table is intact.

Findings:
- [L19] `{chars.zws}`: the Example column holds an invisible character. The reader sees nothing. Fix: show a label.
- [L22] "(not empty, false, 0 or no)": "no" is unclear. Fix: say "or the word no".
- [L32] `{if.<path>.matches}`: "regular expression" is a term the reader does not know. The example `^h` works, but the reader cannot write another pattern. Fix: one sentence and a link.
- [L23] `<path>` is a placeholder whose meaning (for example `stream.live`) is only shown in the same cell. Fine. No change required.
- [L38] `{literal:a\|b}` gives `a\|b`. In the rendered table the backslash is not shown. No change required.
