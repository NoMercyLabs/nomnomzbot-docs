# Current independent fact check

Verdict: PASS
Reviewed: src/content/reference/en/templates/event.mdx
Reviewed-SHA: 6c11ab1c4d4c36b490ceb0eac4849b9e649b2872a337745e56d00fcc00060d4a
Reviewed-SHA256: 6c11ab1c4d4c36b490ceb0eac4849b9e649b2872a337745e56d00fcc00060d4a
Reviewed-Date: 2026-11-05
Reviewer: independent section reviewer
Product: 54da8b6318de63b5205a0ff8db35e0b9045dd959 (initial source tracing b12f4f69638553c03ed64c1518c90d7bcccd6907)

The full article was read in navigation order; consequential behavior and reference details were checked against current source. All reported documentation findings affecting this page were repaired and re-reviewed. This is a source review, not a live-channel test.

- All helper keys, family counts and Use in cells were compared with the refreshed registry export: docs-work/helpers.json (908 entries, zero missing descriptions); node scripts/gen-template-helpers.mjs --check placed 908/908 and found 359 typed examples.
- Registry context rules and event filtering: server/src/NomNomzBot.Application/Abstractions/Templating/TemplateHelperRegistry.cs:32-128,153-178; aggregate provider registration/find: server/src/NomNomzBot.Infrastructure/Platform/Templating/TemplateHelperRegistryAggregate.cs:36-93.
- Export source: scripts/export-template-helpers/Program.cs:52-96,182-214; generated table/surface mapping: scripts/gen-template-helpers.mjs:455-481. Source review boundaries and implementation checks are in docs-work/overhaul/review-learning-commands-helpers.md.
- This page retains 33 registered helper rows with their descriptions, illustrative samples and contexts.

Report: docs-work/overhaul/review-learning-commands-helpers.md.

## Historical evidence

The material below is retained as historical evidence. Its older hashes, verdicts and values do not constitute the current review.

# Fact check: src/content/reference/en/templates/event.mdx
Verdict: PASS
Reviewed: C:/Projects/NoMercyLabs/nomnomzbot-docs/src/content/reference/en/templates/event.mdx
Reviewed-SHA: 9a75e5f6bbe3eb3d

Product commit read: origin/master 564109db6. Detail: scratchpad fc7-handoff.md.

Round 1 finding, now fixed: the `{followed_at}` example `2026-10-06T18:30:00Z` cannot be produced. FollowEventHandlers.cs:44 writes `FollowedAt.ToString("O")` (FollowEvent.cs:36, a DateTimeOffset). The page now shows `2026-10-06T18:30:00.0000000+00:00` (event.mdx:24).

- All 33 rows: description equals the English string or a true Description correction.
- The intro explains stream.online and stream.offline: ChannelOnlineEvent.cs:19, ChannelOfflineEvent.cs:19.
- The Discord seed alias sentence is true: DiscordGoLiveNotificationHandler.cs:61-66.
