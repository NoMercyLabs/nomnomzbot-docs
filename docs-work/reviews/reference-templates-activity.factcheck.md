# Current independent fact check

Verdict: PASS
Reviewed: src/content/reference/en/templates/activity.mdx
Reviewed-SHA: b93f6b6b863543859c3bb03fefc3c7fd8d554fc6f11fd274e960b5ea954a83b8
Reviewed-SHA256: b93f6b6b863543859c3bb03fefc3c7fd8d554fc6f11fd274e960b5ea954a83b8
Reviewed-Date: 2026-11-05
Reviewer: independent section reviewer
Product: 54da8b6318de63b5205a0ff8db35e0b9045dd959 (initial source tracing b12f4f69638553c03ed64c1518c90d7bcccd6907)

The full article was read in navigation order; consequential behavior and reference details were checked against current source. All reported documentation findings affecting this page were repaired and re-reviewed. This is a source review, not a live-channel test.

- All helper keys, family counts and Use in cells were compared with the refreshed registry export: docs-work/helpers.json (908 entries, zero missing descriptions); node scripts/gen-template-helpers.mjs --check placed 908/908 and found 359 typed examples.
- Registry context rules and event filtering: server/src/NomNomzBot.Application/Abstractions/Templating/TemplateHelperRegistry.cs:32-128,153-178; aggregate provider registration/find: server/src/NomNomzBot.Infrastructure/Platform/Templating/TemplateHelperRegistryAggregate.cs:36-93.
- Export source: scripts/export-template-helpers/Program.cs:52-96,182-214; generated table/surface mapping: scripts/gen-template-helpers.mjs:455-481. Source review boundaries and implementation checks are in docs-work/overhaul/review-learning-commands-helpers.md.
- This page retains 19 registered helper rows with their descriptions, illustrative samples and contexts.
- Family provider: server/src/NomNomzBot.Infrastructure/Platform/Templating/Helpers/Broadcast/ChatActivityTemplateHelpers.cs:21.

Report: docs-work/overhaul/review-learning-commands-helpers.md.

## Historical evidence

The material below is retained as historical evidence. Its older hashes, verdicts and values do not constitute the current review.

# Fact check: src/content/reference/en/templates/activity.mdx
Verdict: PASS
Reviewed: C:/Projects/NoMercyLabs/nomnomzbot-docs/src/content/reference/en/templates/activity.mdx
Reviewed-SHA: ca5fb5e0b41ebbb2

Product commit read: origin/master 564109db6. Detail: scratchpad fc7-handoff.md.

- All 19 rows: description equals the English string or a true Description correction.
- `{activity.commands.stream}` counts only succeeded commands and is not reset when a stream starts: ActivityStreamHelpers.cs:61-65; IChannelRegistry.cs:319-320; CommandExecutedBroadcastHandler.cs:34-41; ChannelOnlineHandler.cs:139-159.
