# Current independent reader review

Verdict: PASS
Reviewed: src/content/reference/en/templates/args.mdx
Reviewed-SHA: ac81ee79731bac2f0d81899cccae2ba440b7a5272955a5447a8106ad2eb92216
Reviewed-SHA256: ac81ee79731bac2f0d81899cccae2ba440b7a5272955a5447a8106ad2eb92216
Reviewed-Date: 2026-11-05
Reviewer: independent section reviewer

The greeting example explains positional input and fallback with visible outcomes. Viewer-template expansion versus original numbered words is retained, and the added currency clarification prevents confusion with Twitch Channel Points.

The full page was read with the preceding/following navigation context and related links. This review applies the owner's explanatory, progressive-disclosure guidance; it does not impose Atlas sentence caps, pilot mimicry or fixed article headings. No substantive reader finding remains at this hash. Build/render/link checks are recorded separately by the lead reviewer.

Report: docs-work/overhaul/review-learning-commands-helpers.md.

## Historical evidence

The material below is retained as historical evidence; its older verdict is not the current review.

# Reader review: src/content/reference/en/templates/args.mdx
Verdict: PASS
Reviewed: C:/Projects/NoMercyLabs/nomnomzbot-docs/src/content/reference/en/templates/args.mdx
Reviewed-SHA: a08b5e62e9d651ab

## What I read
- The whole page, as a streamer who does not code.
- Assumed pages, read in full: templates/overview.mdx and commands/variables-and-templates.mdx.
- Rendered output: the page has no include or snippet directive. Built site not checked.
- The earlier verdict (Reviewed-SHA 03b13aa665b56ea6) judged an older text. This review is fresh on the current text.

## Tests
1. Find a helper: "first word" is `{args.first}` (line 87) and `{args.<n>}` (line 73). "Word count" is `{args.count}` (line 85). Each is one table row.
2. Use a helper: `{args.1.user.points}` (line 45) gives `800`. `{args.2.upper}` (line 80) gives `HELLO`. `{args.5:nobody}` (line 82) gives `nobody`. I can type each as shown and know the result. `{args.3.number:1}` (line 79) gives `1`, which fits the sample (word 3, `big`, is not a number).
3. Right page: the first line (line 6) names `{args}` and `{args.*}`. Both have rows. The intro (lines 8-10) says what the page holds. The footer (line 95) links the overview and the variables page.
4. Backticks and braces: every helper in the tables is in backticks with braces. Two text cells drop the braces (finding 6).

Pass on all four tests. No blocking finding.

## Findings (non-blocking)
1. [lines 12-17] One paragraph of 7 sentences, about 100 words. It mixes what the words are with when viewer helpers fill in. Cost: the rule for viewer helpers is hard to scan. Fix: split it into two paragraphs, one for the words and one for the fill-in rule.
2. [line 14] "subscribers and higher, by default". "Higher" is not explained, and the page does not link Permissions. The features page uses the same word. Cost: a reader cannot tell whether a moderator counts. Fix: name the roles in order once, or link Permissions.
3. [line 25] `{args.<n>.user.data.<key>}`: "A value stored for the viewer". The page does not say where a value is stored or what the keys are. The same gap is on target.mdx line 71. Fix: link the page where data is set.
4. [line 27] `{args.<n>.user.activity.level}`: "new, casual, regular or veteran". No rule says how a viewer gets each level. Fix: one sentence or a link.
5. [lines 55-58] "first seen", "last seen" and "attendance streak" are not explained. Fix: one plain sentence each, or a link to the page that defines them.
6. [lines 72 and 74] The text cells say "for example args.2-3" and "for example args.2+". They have no braces, and the placeholders `<a>` and `<b>` are not named. Fix: write `{args.2-3}` and `{args.2+}`, and name the placeholders once.
7. [line 19] "Each row is its own example, so the rows on this page do not all come from one moment." This sentence is about the page, not the helpers. Low. Fix: drop it, or keep it as the note for the sample values only.

## Where I got lost
- I could not tell where a viewer's stored value comes from (finding 3).
- I could not tell whether a viewer counts as "higher" (finding 2).
