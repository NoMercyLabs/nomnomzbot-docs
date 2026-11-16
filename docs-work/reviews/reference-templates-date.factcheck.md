# Current independent fact check

Verdict: PASS
Reviewed: src/content/reference/en/templates/date.mdx
Reviewed-SHA: 422e711397dc595173ed9ec2220bd63243277a6a37edaf5ce15b17ed7ffa7ccf
Reviewed-SHA256: 422e711397dc595173ed9ec2220bd63243277a6a37edaf5ce15b17ed7ffa7ccf
Reviewed-Date: 2026-11-05
Reviewer: independent section reviewer
Product: 54da8b6318de63b5205a0ff8db35e0b9045dd959 (initial source tracing b12f4f69638553c03ed64c1518c90d7bcccd6907)

The full article was read in navigation order; consequential behavior and reference details were checked against current source. All reported documentation findings affecting this page were repaired and re-reviewed. This is a source review, not a live-channel test.

- All helper keys, family counts and Use in cells were compared with the refreshed registry export: docs-work/helpers.json (908 entries, zero missing descriptions); node scripts/gen-template-helpers.mjs --check placed 908/908 and found 359 typed examples.
- Registry context rules and event filtering: server/src/NomNomzBot.Application/Abstractions/Templating/TemplateHelperRegistry.cs:32-128,153-178; aggregate provider registration/find: server/src/NomNomzBot.Infrastructure/Platform/Templating/TemplateHelperRegistryAggregate.cs:36-93.
- Export source: scripts/export-template-helpers/Program.cs:52-96,182-214; generated table/surface mapping: scripts/gen-template-helpers.mjs:455-481. Source review boundaries and implementation checks are in docs-work/overhaul/review-learning-commands-helpers.md.
- This page retains 17 registered helper rows with their descriptions, illustrative samples and contexts.
- Source/date/zone/expression operations are implemented under server/src/NomNomzBot.Infrastructure/Platform/Templating/Dates; legacy dispatch: Helpers/Legacy/LegacyTemplateHelpers.cs:165-192. The authored fixed-date and zone examples use those real operations.

Report: docs-work/overhaul/review-learning-commands-helpers.md.

## Historical evidence

The material below is retained as historical evidence. Its older hashes, verdicts and values do not constitute the current review.

# Fact check: src/content/reference/en/templates/date.mdx
Verdict: PASS
Reviewed: C:/Projects/NoMercyLabs/nomnomzbot-docs/src/content/reference/en/templates/date.mdx
Reviewed-SHA: 013d0cde29d39637

Product: C:/Projects/NoMercyLabs/nomnomzbot master, HEAD 18e2bf1f0 (contains b6adc85d2). Docs HEAD f3676b7.
fc6 diff check, page read whole. fc4 checked this page PASS at stamp 57e635c793f991f9 (scratchpad fc4-handoff.md, "date": {date} yyyy-MM-dd, {time} HH:mm:ss, {time.utc} HH:mm:ss UTC at LegacyTemplateHelpers.cs:389-397; DateOutputFormatter.cs:25; DateExpressionParser.cs:48-226; tz, prev, next and until samples). The earlier FAIL (stamp cf4e4a9b10eae67d, fc3: the `{date}` example) is fixed by the Inputs line `{date}` gives `2026-10-26`. Since fc4 the generator changed only the title and added the key line.

## Checked fresh at this stamp

| Claim (page line) | Supported by | Status |
| --- | --- | --- |
| :2 title "Date and time helpers", no key | docs-work/helper-groups.md Types row 200 Page title | true |
| :6 key line `{date}`, `{date*}`, `{time}`, `{time.*}` | Types row 200 Key patterns (script compare, scratchpad fc6-scan.mjs) | true |
| :8-9 intro: time and date in any format and time zone; count down or show the channel time | fc4 evidence above (format and tz operators) | true |
| :15 `{date}` gives `2026-10-26` | Inputs line (LegacyTemplateHelpers.cs:397, yyyy-MM-dd) | true |
| :16-17 `{date:2026-12-25\|format:dd/MM/yyyy HH:mm}` gives `25/12/2026 00:00`; `{date:now\|+1d}` gives `2026-10-27 15:30` | Inputs lines (DateExpressionParser.cs:60, :99; DateOutputFormatter.cs:25 default format) | true |
| rows | 17 rows: all keys in helpers.json, all descriptions equal the English strings, all examples equal the sample, a Sample correction (`time`, `time.utc`), an Inputs line or a product test row (fc6-scan.mjs, fc6-inputs.mjs) | true |
| count | 17 rows = Types Count 17; frontmatter 17 | true |

Section rule: no sentence describes resolution as chat-only.

## Product defects
None new.
