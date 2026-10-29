# Fact check: src/content/reference/en/templates/activity.mdx
Verdict: PASS
Reviewed: C:/Projects/NoMercyLabs/nomnomzbot-docs/src/content/reference/en/templates/activity.mdx
Reviewed-SHA: ca5fb5e0b41ebbb2

Product commit read: origin/master 564109db6. Detail: scratchpad fc7-handoff.md.

- All 19 rows: description equals the English string or a true Description correction.
- `{activity.commands.stream}` counts only succeeded commands and is not reset when a stream starts: ActivityStreamHelpers.cs:61-65; IChannelRegistry.cs:319-320; CommandExecutedBroadcastHandler.cs:34-41; ChannelOnlineHandler.cs:139-159.
