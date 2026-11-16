# Current targeted factcheck review

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

# Current independent fact check

Verdict: PASS
Reviewed: src/content/reference/en/templates/if.mdx
Reviewed-SHA: 7452eeb207aca9c07c835663527b6e1ac7c5f4fb67860d2a69ce81b1303c6753
Reviewed-SHA256: 7452eeb207aca9c07c835663527b6e1ac7c5f4fb67860d2a69ce81b1303c6753
Reviewed-Date: 2026-11-05
Reviewer: independent section reviewer
Product: 54da8b6318de63b5205a0ff8db35e0b9045dd959 (initial source tracing b12f4f69638553c03ed64c1518c90d7bcccd6907)

The full article was read in navigation order; consequential behavior and reference details were checked against current source. All reported documentation findings affecting this page were repaired and re-reviewed. This is a source review, not a live-channel test.

- All helper keys, family counts and Use in cells were compared with the refreshed registry export: docs-work/helpers.json (908 entries, zero missing descriptions); node scripts/gen-template-helpers.mjs --check placed 908/908 and found 359 typed examples.
- Registry context rules and event filtering: server/src/NomNomzBot.Application/Abstractions/Templating/TemplateHelperRegistry.cs:32-128,153-178; aggregate provider registration/find: server/src/NomNomzBot.Infrastructure/Platform/Templating/TemplateHelperRegistryAggregate.cs:36-93.
- Export source: scripts/export-template-helpers/Program.cs:52-96,182-214; generated table/surface mapping: scripts/gen-template-helpers.mjs:455-481. Source review boundaries and implementation checks are in docs-work/overhaul/review-learning-commands-helpers.md.
- This page retains 26 registered helper rows with their descriptions, illustrative samples and contexts.
- Family provider: server/src/NomNomzBot.Infrastructure/Platform/Templating/Helpers/Logic/IfTemplateHelpers.cs:22.
- Family provider: server/src/NomNomzBot.Infrastructure/Platform/Templating/Helpers/Logic/DefaultTemplateHelpers.cs:20.
- Family provider: server/src/NomNomzBot.Infrastructure/Platform/Templating/Helpers/Logic/SwitchTemplateHelpers.cs:22.
- Lazy choice/truthiness: server/src/NomNomzBot.Infrastructure/Platform/Templating/Helpers/Logic/IfTemplateHelpers.cs:28-117; LogicArguments.cs:28-95; DefaultTemplateHelpers.cs:20-41.

Report: docs-work/overhaul/review-learning-commands-helpers.md.

## Historical evidence

The material below is retained as historical evidence. Its older hashes, verdicts and values do not constitute the current review.

# Fact check: src/content/reference/en/templates/if.mdx
Verdict: PASS
Reviewed: C:/Projects/NoMercyLabs/nomnomzbot-docs/src/content/reference/en/templates/if.mdx
Reviewed-SHA: 2f287d921af98aad

Product: C:/Projects/NoMercyLabs/nomnomzbot master, HEAD 18e2bf1f0 (contains b6adc85d2). Docs HEAD f3676b7.
fc6 diff check, page read whole. fc4 checked this page PASS at stamp 4b64e352650e68ed (scratchpad fc4-handoff.md, "if": IfTemplateHelpers.cs:29-190, ValuePredicate.cs:24-38, LogicArguments.cs:30-34, SwitchTemplateHelpers.cs, LiteralTemplateHelpers.cs:32, CharsTemplateHelpers.cs:21-28). Its verdict was not written then. Since fc4 the generator changed only the title and added the key line.

## Checked fresh at this stamp

| Claim (page line) | Supported by | Status |
| --- | --- | --- |
| :2 title "Condition helpers", no key | docs-work/helper-groups.md Types row 210 Page title | true |
| :6 key line `{if}`, `{if.*}`, `{switch*}`, `{coalesce*}`, `{default*}`, `{literal*}`, `{chars.*}` | Types row 210 Key patterns (script compare, scratchpad fc6-scan.mjs) | true |
| :8-9 intro: choose a text by a condition, or a fallback when a value is empty | IfTemplateHelpers.cs:17 (`{if:value\|then\|else}`), DefaultTemplateHelpers.cs:17 (`{default:value\|fallback}`), read this run | true |
| :23-33 the eleven `if.<path>` rows show the Inputs lines | helper-groups.md Inputs (ValuePredicate.cs:29-38, IfTemplateHelpers.cs:35) | true |
| :15, :16, :18 `chars.newline`, `chars.nothing`, `chars.space` show `-` | the sample is a newline, an empty text and a space, which the generator shows as `-`; the description cell names the character | true (same as fc4) |
| rows | 26 rows: all keys in helpers.json, all descriptions equal the English strings, all other examples equal the sample, an Inputs line or a product test row (fc6-scan.mjs, fc6-inputs.mjs) | true |
| count | 26 rows = Types Count 26; frontmatter 26 | true |

Section rule: no sentence describes resolution as chat-only.

## Product defects
None new.
