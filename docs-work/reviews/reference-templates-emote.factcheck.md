# Current independent fact check

Verdict: PASS
Reviewed: src/content/reference/en/templates/emote.mdx
Reviewed-SHA: 168f2d55b8016a058877f2b69bf3c27bdd7313cdedf075cf04c7732907c8f4a2
Reviewed-SHA256: 168f2d55b8016a058877f2b69bf3c27bdd7313cdedf075cf04c7732907c8f4a2
Reviewed-Date: 2026-11-05
Reviewer: independent section reviewer
Product: 54da8b6318de63b5205a0ff8db35e0b9045dd959 (initial source tracing b12f4f69638553c03ed64c1518c90d7bcccd6907)

The full article was read in navigation order; consequential behavior and reference details were checked against current source. All reported documentation findings affecting this page were repaired and re-reviewed. This is a source review, not a live-channel test.

- All helper keys, family counts and Use in cells were compared with the refreshed registry export: docs-work/helpers.json (908 entries, zero missing descriptions); node scripts/gen-template-helpers.mjs --check placed 908/908 and found 359 typed examples.
- Registry context rules and event filtering: server/src/NomNomzBot.Application/Abstractions/Templating/TemplateHelperRegistry.cs:32-128,153-178; aggregate provider registration/find: server/src/NomNomzBot.Infrastructure/Platform/Templating/TemplateHelperRegistryAggregate.cs:36-93.
- Export source: scripts/export-template-helpers/Program.cs:52-96,182-214; generated table/surface mapping: scripts/gen-template-helpers.mjs:455-481. Source review boundaries and implementation checks are in docs-work/overhaul/review-learning-commands-helpers.md.
- This page retains 30 registered helper rows with their descriptions, illustrative samples and contexts.
- Family provider: server/src/NomNomzBot.Infrastructure/Platform/Templating/Helpers/Emotes/EmoteTemplateHelpers.cs:23.

Report: docs-work/overhaul/review-learning-commands-helpers.md.

## Historical evidence

The material below is retained as historical evidence. Its older hashes, verdicts and values do not constitute the current review.

# Fact check: src/content/reference/en/templates/emote.mdx
Verdict: PASS
Reviewed: C:/Projects/NoMercyLabs/nomnomzbot-docs/src/content/reference/en/templates/emote.mdx
Reviewed-SHA: 5f5554e4b0144332

Product: C:/Projects/NoMercyLabs/nomnomzbot master, HEAD 18e2bf1f0 (contains b6adc85d2). Docs HEAD f3676b7.
fc6 diff check, page read whole. The earlier verdict (stamp ab966768ae698e3b, HEAD de792033a, fc3: scratchpad fc3-result.md line 6, fc3-handoff.md line 10) traced the sampled rows and the intro (channel, 7TV, BTTV, FFZ; count and pick); that evidence is carried forward. Since then the generator changed only the title and added the key line.

## Checked fresh at this stamp

| Claim (page line) | Supported by | Status |
| --- | --- | --- |
| :2 title "Emote helpers", a plain name | docs-work/helper-groups.md Types row 280 Page title | true |
| :6 key line `{emote}`, `{emote.*}` | Types row 280 Key patterns (script compare, scratchpad fc6-scan.mjs) | true |
| :8-9 intro: channel, 7TV, BTTV and FFZ emotes; count and pick | fc3 evidence | true |
| :23 `{emote.image:catJAM}` gives `https://cdn.7tv.app/emote/<emote id>/2x.webp` | helper-groups.md Inputs (SevenTvEmoteProvider.cs:94-112); it overrides the test row, which shows a stub URL | true |
| rows | 30 rows: all keys in docs-work/helpers.json; all descriptions equal the English strings; all examples equal the sample, the Inputs line or a product test row (fc6-scan.mjs, fc6-inputs.mjs) | true |
| count | 30 rows = Types Count 30; frontmatter 30; overview link 30 | true |

Section rule: no sentence describes resolution as chat-only.

## Product defects
None new.
