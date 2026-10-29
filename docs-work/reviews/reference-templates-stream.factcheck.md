# Fact check: src/content/reference/en/templates/stream.mdx
Verdict: PASS
Reviewed: C:/Projects/NoMercyLabs/nomnomzbot-docs/src/content/reference/en/templates/stream.mdx
Reviewed-SHA: 6adca5e0e4e79716

Product commit read: origin/master 564109db6. Detail: scratchpad fc7-handoff.md.

Round 1 finding, now fixed: the `{stream.startedAt}` example `2026-10-06T18:00:00Z` cannot be produced. The code writes the round-trip format: LegacyTemplateHelpers.cs:427-430 (`WentLiveAt?.ToString("O")`, a DateTimeOffset, IChannelRegistry.cs:171). The page now shows `2026-10-06T18:00:00.0000000+00:00` (stream.mdx:24). The intro also says that a "Discord seed alias" row works only in a Discord notification, which covers stream.url and stream.thumbnail.

- All 62 rows: description equals the English string or a true Description correction.
