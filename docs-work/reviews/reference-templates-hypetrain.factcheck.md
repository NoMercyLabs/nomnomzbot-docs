# Current independent fact check

Verdict: PASS
Reviewed: src/content/reference/en/templates/hypetrain.mdx
Reviewed-SHA: 6670554cc702896c6e8bca3fee4af083cbf03055c258ba715c5aeff6f5f0093b
Reviewed-SHA256: 6670554cc702896c6e8bca3fee4af083cbf03055c258ba715c5aeff6f5f0093b
Reviewed-Date: 2026-11-05
Reviewer: independent section reviewer
Product: 54da8b6318de63b5205a0ff8db35e0b9045dd959 (initial source tracing b12f4f69638553c03ed64c1518c90d7bcccd6907)

The full article was read in navigation order; consequential behavior and reference details were checked against current source. All reported documentation findings affecting this page were repaired and re-reviewed. This is a source review, not a live-channel test.

- All helper keys, family counts and Use in cells were compared with the refreshed registry export: docs-work/helpers.json (908 entries, zero missing descriptions); node scripts/gen-template-helpers.mjs --check placed 908/908 and found 359 typed examples.
- Registry context rules and event filtering: server/src/NomNomzBot.Application/Abstractions/Templating/TemplateHelperRegistry.cs:32-128,153-178; aggregate provider registration/find: server/src/NomNomzBot.Infrastructure/Platform/Templating/TemplateHelperRegistryAggregate.cs:36-93.
- Export source: scripts/export-template-helpers/Program.cs:52-96,182-214; generated table/surface mapping: scripts/gen-template-helpers.mjs:455-481. Source review boundaries and implementation checks are in docs-work/overhaul/review-learning-commands-helpers.md.
- This page retains 17 registered helper rows with their descriptions, illustrative samples and contexts.

Report: docs-work/overhaul/review-learning-commands-helpers.md.

## Historical evidence

The material below is retained as historical evidence. Its older hashes, verdicts and values do not constitute the current review.

# Fact check: src/content/reference/en/templates/hypetrain.mdx
Verdict: PASS
Reviewed: C:/Projects/NoMercyLabs/nomnomzbot-docs/src/content/reference/en/templates/hypetrain.mdx
Reviewed-SHA: a42bcd59d8ba1816

Product: C:/Projects/NoMercyLabs/nomnomzbot master, HEAD 18e2bf1f0 (contains b6adc85d2). Docs HEAD f3676b7.
fc6 diff check, page read whole. fc4 checked this page PASS at stamp 71b1540c233675c1 (scratchpad fc4-handoff.md, "hypetrain": HypeTrainStateHelpers.cs:18-53, HypeTrainWhoHelpers.cs:19-30; hype_train.* event keys TemplateHelperRegistry.cs:347-369, EventResponsePresetCatalog.cs:100; samples consistent, 1,800/3,000 = 60%, 1,200 left). Its verdict was not written then. Since fc4 the generator changed only the title and added the key line.

## Checked fresh at this stamp

| Claim (page line) | Supported by | Status |
| --- | --- | --- |
| :2 title "Hype train helpers", no key | docs-work/helper-groups.md Types row 100 Page title | true |
| :6 key line `{hypetrain*}`, `{hype_train*}` | Types row 100 Key patterns (script compare, scratchpad fc6-scan.mjs) | true |
| :8-9 intro: level, progress and the people who took part; show progress in chat, on an overlay or read aloud | fc4 evidence above; not chat-only (Stoney's section rule) | true |
| rows | 17 rows: all keys in helpers.json, all descriptions equal the English strings, all examples equal the sample or a product test row (fc6-scan.mjs, fc6-inputs.mjs) | true |
| count | 17 rows = Types Count 17; frontmatter 17 | true |

## Product defects
None new.
