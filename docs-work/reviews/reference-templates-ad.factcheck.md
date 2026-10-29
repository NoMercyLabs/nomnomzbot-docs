# Fact check: src/content/reference/en/templates/ad.mdx
Verdict: PASS
Reviewed: C:/Projects/NoMercyLabs/nomnomzbot-docs/src/content/reference/en/templates/ad.mdx
Reviewed-SHA: b5e1a9d3b032bf25

Product: origin/master 779081d10d05dc6b4150732abd77bfae4dbef1d9 (fetched this run; every file read with `git show origin/master:<path>`).

Short paths: `Broadcast/` = server/src/NomNomzBot.Infrastructure/Platform/Templating/Helpers/Broadcast/; `Reg` = server/src/NomNomzBot.Application/Abstractions/Templating/TemplateHelperRegistry.cs; `Samples` = server/src/NomNomzBot.Application/Abstractions/Templating/TemplateHelperSamples.cs; `sxml` = server/i18n/strings/values/strings.xml; `bxml` = server/i18n/strings/values/strings_template_broadcast.xml.

## Changed place: `{ad.when}` (page line 29)

- The page now shows `in ~3 minutes` as the example, and the description quotes `(e.g. "in ~3 minutes")`.
- The only writer of `ad.when` is the chat warning: server/src/NomNomzBot.Infrastructure/Stream/AdBreak/AdScheduleWarner.cs:253.
- The warning is skipped when more than 3 minutes are left: `ChatWarnThreshold = TimeSpan.FromMinutes(3)` (:39) and `|| left > ChatWarnThreshold ... return;` (:237-242).
- WhenText (:261-267) writes `in ~N minutes` (or `in ~N seconds` under one minute), with N from `Math.Round(left.TotalMinutes)`.
- So `in ~3 minutes` is a real output, and the largest one. The earlier finding (`in ~5 minutes`) is fixed on the page.
- Description: sxml:5321 gives the same text. Match.

## All 15 rows (the page has 15, so every row was checked)

| Key | Product row | Description = English text | Example plausible | Why |
| --- | --- | --- | --- | --- |
| ad.automatic | Reg:230-235 (static, event only) | yes (sxml:5322) | yes `true` | AdBreakBeganAlertHandler.cs:50 writes `true` or `false`. |
| ad.duration | Reg:211-216 (static, event only) | yes (sxml:5319) | yes `3 minutes` | HumanDuration(180) gives `3 minutes` (Platform/Eventing/TwitchAlertHandlerBase.cs:107-116); written at AdBreakBeganAlertHandler.cs:49 and AdBreakEndScheduler.cs:117-119. |
| ad.isScheduled | Broadcast/AdNextHelpers.cs:50-59 | yes (bxml:21) | yes `true` | PeopleText.Flag(NextAdAt > 0) gives `true` or `false` (People/PeopleText.cs:21). |
| ad.last.ago | Broadcast/AdPastAndSnoozeHelpers.cs:19-24 | yes (bxml:16) | yes `48m` | BroadcastText.Brief(now - last ad); under an hour it prints `<n>m` (BroadcastText.cs:29-42). |
| ad.last.at | Broadcast/AdPastAndSnoozeHelpers.cs:25-30 | yes (bxml:17) | yes `14:42` | BroadcastText.Clock to StreamText.LocalTime, format `HH:mm` in the channel zone (StreamText.cs:112-115). |
| ad.next.at | Broadcast/AdNextHelpers.cs:33-38 | yes (bxml:13) | yes `15:42` | Same clock format as above. |
| ad.next.duration | Broadcast/AdNextHelpers.cs:45-49 | yes (bxml:15) | yes `1m 30s` | StreamText.Short(90 s) gives `1m 30s` (StreamText.cs:68-75). |
| ad.next.in | Broadcast/AdNextHelpers.cs:21-26 | yes (bxml:11) | yes `12m` | Brief, rounded to the minute (BroadcastText.cs:35). |
| ad.next.in.long | Broadcast/AdNextHelpers.cs:27-32 | yes (bxml:12) | yes `12 minutes` | Humanizer with precision 2 (BroadcastText.cs:45-46); exactly 12 minutes gives `12 minutes`. |
| ad.next.seconds | Broadcast/AdNextHelpers.cs:39-44 | yes (bxml:14) | yes `720` | Whole seconds until the next ad, never below 0, invariant digits (StreamText.cs:27). |
| ad.prerollFree | Broadcast/AdPastAndSnoozeHelpers.cs:42-46 | yes (bxml:20) | yes `20m` | Brief(1200 s) gives `20m`. |
| ad.seconds | Reg:224-229 (static, event only) | yes (sxml:5320) | yes `300` (see defects) | AdScheduleWarner.cs:254 writes the schedule duration as an invariant integer. |
| ad.snoozes.left | Broadcast/AdPastAndSnoozeHelpers.cs:31-35 | yes (bxml:18) | yes `2` | PeopleText.Count, N0 (People/PeopleText.cs:24). |
| ad.snoozes.refreshIn | Broadcast/AdPastAndSnoozeHelpers.cs:36-41 | yes (bxml:19) | yes `34m` | Brief(refresh time - now). |
| ad.when | Reg:218-223 (static, event only) | yes (sxml:5321) | yes `in ~3 minutes` | See the changed place above. |

Count of keys in the product: the provider holds AdNextHelpers and AdPastAndSnoozeHelpers (Broadcast/AdTemplateHelpers.cs:18-19), 6 + 5 = 11 keys, plus 4 static rows (Reg:211-235) = 15.

## Intro check

- Line 6, `{ad.*}`: every one of the 15 row keys starts with `ad.`. True.
- Line 8, "These helpers read the ad breaks of the channel": the 11 provider rows read the channel's Twitch ad schedule (Broadcast/AdRows.cs:23-53); the 4 static rows are filled by the ad break events (AdBreakBeganAlertHandler.cs:49-50, AdBreakEndScheduler.cs:117, AdScheduleWarner.cs:253-254). True.
- Line 9, "Use them to tell chat when the next ad starts": `ad.next.in`, `ad.next.at`, `ad.next.in.long` and `ad.when` give that. True.
- Line 11, the rows are separate examples: true; each sample is its own value.
- The intro names no helper that is not on the page.

## Row count

- The table has 15 rows (page lines 15-29).
- docs-work/helper-groups.md "## Types" line 25 gives Count 15 for /reference/templates/ad.
- The front matter (line 3) says 15. All equal.

## Product defects (not page facts)

- The product sample of `ad.when` is still `5 minutes` (Samples:38). The helper never gives that: it always starts with `in ~` and is at most 3 minutes (AdScheduleWarner.cs:39, :237-242, :261-267). The docs override it through helper-groups.md "## Sample corrections" line 293; the product sample should change to `in ~3 minutes`.
- The product sample of `ad.seconds` is `300` (Samples:39), while the English text gives `"90"` as its example (sxml:5320). The code prints any integer, so the page is not wrong. Whether Twitch ever schedules a 300-second break was not checked against the live Twitch docs.
