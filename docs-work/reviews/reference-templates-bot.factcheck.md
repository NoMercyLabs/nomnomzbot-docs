# Current targeted factcheck review

Verdict: PARTIAL
Reviewed: src/content/reference/en/templates/bot.mdx
Reviewed-SHA: a3963e5fdc87ba638fd06d3dd5685550cc08f628400981d3d6a624675cfb5725
Reviewed-SHA256: a3963e5fdc87ba638fd06d3dd5685550cc08f628400981d3d6a624675cfb5725
Reviewed-Date: 2026-11-06
Reviewer: final-learning editing author; self-review, not independent
Product: 2dfefbb0c393f439954d79b32ac11511678d7f44

Full article read for editorial clarity; source verification is focused on the command-list rows, not an exhaustive factual PASS or live test. BotCommandHelpers.cs:36-49 supplies user.role; BotCommands.cs:29-69 builds the lists and filters by minimum role only (both under server/src/NomNomzBot.Infrastructure/Platform/Templating/Helpers/Bot/). The revised row avoids promising executable access. Built-in sample !so becomes !song; the literal keys are in server/src/NomNomzBot.Application/Commands/Builtin/Personality/BuiltinResponseSlots.Music.cs:20-22,53-55 and BuiltinResponseSlots.Core.cs:21-23. docs-work/helper-groups.md retains the description/sample corrections on regeneration. See docs-work/ecosystem-validation/final-learning.md for coverage and validation.

## Preserved historical reviews

Earlier hashes, claims and verdicts below are historical and do not approve this revision.

# Current independent fact check

Verdict: PASS
Reviewed: src/content/reference/en/templates/bot.mdx
Reviewed-SHA: ce71cc5dac51a5f5b71c7086f448db83125be423e9109112154f054282aca37f
Reviewed-SHA256: ce71cc5dac51a5f5b71c7086f448db83125be423e9109112154f054282aca37f
Reviewed-Date: 2026-11-05
Reviewer: independent section reviewer
Product: 54da8b6318de63b5205a0ff8db35e0b9045dd959 (initial source tracing b12f4f69638553c03ed64c1518c90d7bcccd6907)

The full article was read in navigation order; consequential behavior and reference details were checked against current source. All reported documentation findings affecting this page were repaired and re-reviewed. This is a source review, not a live-channel test.

- All helper keys, family counts and Use in cells were compared with the refreshed registry export: docs-work/helpers.json (908 entries, zero missing descriptions); node scripts/gen-template-helpers.mjs --check placed 908/908 and found 359 typed examples.
- Registry context rules and event filtering: server/src/NomNomzBot.Application/Abstractions/Templating/TemplateHelperRegistry.cs:32-128,153-178; aggregate provider registration/find: server/src/NomNomzBot.Infrastructure/Platform/Templating/TemplateHelperRegistryAggregate.cs:36-93.
- Export source: scripts/export-template-helpers/Program.cs:52-96,182-214; generated table/surface mapping: scripts/gen-template-helpers.mjs:455-481. Source review boundaries and implementation checks are in docs-work/overhaul/review-learning-commands-helpers.md.
- This page retains 22 registered helper rows with their descriptions, illustrative samples and contexts.
- Family provider: server/src/NomNomzBot.Infrastructure/Platform/Templating/Helpers/Bot/BotTemplateHelpers.cs:21.

Report: docs-work/overhaul/review-learning-commands-helpers.md.

## Historical evidence

The material below is retained as historical evidence. Its older hashes, verdicts and values do not constitute the current review.

# Fact check: src/content/reference/en/templates/bot.mdx
Verdict: PASS
Reviewed: C:/Projects/NoMercyLabs/nomnomzbot-docs/src/content/reference/en/templates/bot.mdx
Reviewed-SHA: 7e78a98a2f1a6dae

Product: C:/Projects/NoMercyLabs/nomnomzbot master, HEAD 18e2bf1f0 (contains b6adc85d2). Docs HEAD f3676b7.
fc6 diff check, page read whole. The earlier verdict (stamp 74d1889b8b1a763f, HEAD de792033a, fc2: scratchpad fc2-result.md line 6) traced the sampled rows to BotChannelHelpers.cs, BotCommandHelpers.cs, BotIdentityHelpers.cs, BotUptimeHelpers.cs and Legacy/LegacyTemplateHelpers.cs; that evidence is carried forward. Since then the generator changed only the title and added the key line.

## Checked fresh at this stamp

| Claim (page line) | Supported by | Status |
| --- | --- | --- |
| :2 title "Bot helpers", a plain name | docs-work/helper-groups.md Types row 150 Page title | true |
| :6 key line `{bot.*}`, `{botname}` | Types row 150 Key patterns, same order (script compare, scratchpad fc6-scan.mjs) | true |
| :8-9 intro: name, version, uptime and commands; help or about command | the rows on the page (fc2 evidence) | true |
| rows | 22 rows: all keys in docs-work/helpers.json; all descriptions equal the English strings or the `bot.license` Description correction (American spelling); all examples equal the sample or a product test row (fc6-scan.mjs, fc6-inputs.mjs) | true |
| count | 22 rows = Types Count 22; frontmatter 22; overview link 22 | true |

Section rule: no sentence describes resolution as chat-only.

## Product defects
None new.
