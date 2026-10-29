# Fact check: src/content/reference/en/templates/event.mdx
Verdict: PASS
Reviewed: C:/Projects/NoMercyLabs/nomnomzbot-docs/src/content/reference/en/templates/event.mdx
Reviewed-SHA: 9a75e5f6bbe3eb3d

Product commit read: origin/master 564109db6. Detail: scratchpad fc7-handoff.md.

Round 1 finding, now fixed: the `{followed_at}` example `2026-10-06T18:30:00Z` cannot be produced. FollowEventHandlers.cs:44 writes `FollowedAt.ToString("O")` (FollowEvent.cs:36, a DateTimeOffset). The page now shows `2026-10-06T18:30:00.0000000+00:00` (event.mdx:24).

- All 33 rows: description equals the English string or a true Description correction.
- The intro explains stream.online and stream.offline: ChannelOnlineEvent.cs:19, ChannelOfflineEvent.cs:19.
- The Discord seed alias sentence is true: DiscordGoLiveNotificationHandler.cs:61-66.
