# Current independent fact check

Verdict: PASS
Reviewed: src/content/reference/en/templates/stream.mdx
Reviewed-SHA: 40e6342de3a534cce16b40f897d7f9e582a05e4bb88356c932e28ba5883985bd
Reviewed-SHA256: 40e6342de3a534cce16b40f897d7f9e582a05e4bb88356c932e28ba5883985bd
Reviewed-Date: 2026-11-05
Reviewer: independent section reviewer
Product: 54da8b6318de63b5205a0ff8db35e0b9045dd959 (initial source tracing b12f4f69638553c03ed64c1518c90d7bcccd6907)

The full article was read in navigation order; consequential behavior and reference details were checked against current source. All reported documentation findings affecting this page were repaired and re-reviewed. This is a source review, not a live-channel test.

- All helper keys, family counts and Use in cells were compared with the refreshed registry export: docs-work/helpers.json (908 entries, zero missing descriptions); node scripts/gen-template-helpers.mjs --check placed 908/908 and found 359 typed examples.
- Registry context rules and event filtering: server/src/NomNomzBot.Application/Abstractions/Templating/TemplateHelperRegistry.cs:32-128,153-178; aggregate provider registration/find: server/src/NomNomzBot.Infrastructure/Platform/Templating/TemplateHelperRegistryAggregate.cs:36-93.
- Export source: scripts/export-template-helpers/Program.cs:52-96,182-214; generated table/surface mapping: scripts/gen-template-helpers.mjs:455-481. Source review boundaries and implementation checks are in docs-work/overhaul/review-learning-commands-helpers.md.
- This page retains 62 registered helper rows with their descriptions, illustrative samples and contexts.

Report: docs-work/overhaul/review-learning-commands-helpers.md.

## Historical evidence

The material below is retained as historical evidence. Its older hashes, verdicts and values do not constitute the current review.

# Fact check: src/content/reference/en/templates/stream.mdx
Verdict: PASS
Reviewed: C:/Projects/NoMercyLabs/nomnomzbot-docs/src/content/reference/en/templates/stream.mdx
Reviewed-SHA: 6adca5e0e4e79716

Product commit read: origin/master 564109db6. Detail: scratchpad fc7-handoff.md.

Round 1 finding, now fixed: the `{stream.startedAt}` example `2026-10-06T18:00:00Z` cannot be produced. The code writes the round-trip format: LegacyTemplateHelpers.cs:427-430 (`WentLiveAt?.ToString("O")`, a DateTimeOffset, IChannelRegistry.cs:171). The page now shows `2026-10-06T18:00:00.0000000+00:00` (stream.mdx:24). The intro also says that a "Discord seed alias" row works only in a Discord notification, which covers stream.url and stream.thumbnail.

- All 62 rows: description equals the English string or a true Description correction.
