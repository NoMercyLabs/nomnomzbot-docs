# Fact check: src/content/reference/en/templates/schedule.mdx
Verdict: PASS
Reviewed: C:/Projects/NoMercyLabs/nomnomzbot-docs/src/content/reference/en/templates/schedule.mdx
Reviewed-SHA: 186014e66bac43b1

Product: origin/master 779081d10d05dc6b4150732abd77bfae4dbef1d9 (fetched this run; every file read with `git show origin/master:<path>`).
Paths below are short: `Broadcast/` = server/src/NomNomzBot.Infrastructure/Platform/Templating/Helpers/Broadcast/; `xml` = server/i18n/strings/values/strings_template_broadcast.xml.

## Method

All 17 rows were checked (the page has 17, the sample size is 15, so every row was taken).
A script (scratchpad fcD-cmp.py) compared each description cell with the first line of the English string, and each example cell with the helpers.json sample.
Result: 17 of 17 descriptions equal the product text; 15 of 17 examples equal the sample; the other 2 are typed-input examples, checked by hand below.
Each render function was then read for the example.

## Rows

| Key | Product row | Description = English text | Example plausible | Why |
| --- | --- | --- | --- | --- |
| schedule.ical | Broadcast/ScheduleLinkHelpers.cs:22-27 | yes (xml:39) | yes | Builds `https://api.twitch.tv/helix/schedule/icalendar?broadcaster_id={TwitchChannelId}`. |
| schedule.link | Broadcast/ScheduleLinkHelpers.cs:17-21 | yes (xml:38) | yes | Builds `https://twitch.tv/{ChannelName}/schedule`. |
| schedule.list | Broadcast/ScheduleListHelpers.cs:19-31 | yes (xml:33) | yes | `:3` is read by TryCount, max 10 (:23, :64); each segment is ShortDayAndTime plus the title (:27), joined by ` · ` (:65, :70). Three entries for `:3`. |
| schedule.next.at | Broadcast/ScheduleNextHelpers.cs:21-25 | yes (xml:23) | yes | DayAndTime gives day name plus clock (BroadcastText.cs:61-65). |
| schedule.next.date | Broadcast/ScheduleNextHelpers.cs:26-30 | yes (xml:24) | yes | DayAndDate gives day name, day, month name (BroadcastText.cs:68-73). 30 October 2026 is a Friday. |
| schedule.next.duration | Broadcast/ScheduleNextHelpers.cs:50-54 | yes (xml:30) | yes | Brief of end minus start; a whole hour prints `3h` (BroadcastText.cs:29-42). |
| schedule.next.full | Broadcast/ScheduleNextHelpers.cs:37-43 | yes (xml:27) | yes | `next stream` + Relative + `, ` + DayAndTime. |
| schedule.next.game | Broadcast/ScheduleNextHelpers.cs:45-49 | yes (xml:29) | yes | The segment category name. |
| schedule.next.in | Broadcast/ScheduleNextHelpers.cs:31, :71-74 | yes (xml:25) | yes | Humanizer words, precision 1 (BroadcastText.cs:45-46). |
| schedule.next.isRecurring | Broadcast/ScheduleNextHelpers.cs:55-59 | yes (xml:31) | yes | PeopleText.Flag prints `true` or `false` (People/PeopleText.cs:21). |
| schedule.next.relative | Broadcast/ScheduleNextHelpers.cs:32-36, :76-79 | yes (xml:26) | yes | `in` + words (BroadcastText.cs:49-50). |
| schedule.next.title | Broadcast/ScheduleNextHelpers.cs:44 | yes (xml:28) | yes | The segment title. |
| schedule.next.viewerTime | Broadcast/ScheduleNextHelpers.cs:60-68 | yes (xml:32) | yes | One argument, a known time zone id (:81-82); ShortDayAndTime in that zone. Friday 20:00 in Amsterdam (UTC+1 after 25 Oct) is 15:00 in New York (UTC-4 until 1 Nov). |
| schedule.today | Broadcast/ScheduleListHelpers.cs:50-61 | yes (xml:35) | yes | Clock plus title of each segment on the local day (:58). |
| schedule.vacation | Broadcast/ScheduleVacationHelpers.cs:17-25 | yes (xml:36) | yes | ShortDate ` - ` ShortDate (BroadcastText.cs:83-88); empty when none (:24). |
| schedule.vacation.until | Broadcast/ScheduleVacationHelpers.cs:26-33 | yes (xml:37) | yes | DayAndDate of the break end; empty when none (:32). |
| schedule.week | Broadcast/ScheduleListHelpers.cs:32-49 | yes (xml:34) | yes | Distinct short day names up to Sunday of this week (:37-47), joined by `, `. |

The provider holds exactly these four groups (Broadcast/ScheduleTemplateHelpers.cs:19-24): 10 + 3 + 2 + 2 = 17 keys.

## Intro check

- Page line 6, `{schedule.*}`: every row key starts with `schedule.`. True.
- Line 8, "These helpers read the channel's stream schedule": 15 rows read the Twitch schedule (Broadcast/ScheduleData.cs:32-44, :64-77); the 2 link rows give links to that schedule (ScheduleLinkHelpers.cs:14). True for the page as a whole.
- Line 9, "Use them to tell viewers when the next stream starts": the next.* rows give that (ScheduleNextHelpers.cs:18). True.
- Line 11, the rows are separate examples: true; for example `schedule.today` (`20:00 Bot night`) and `schedule.next.in` (`4 days`) cannot hold at the same moment.
- The intro names no helper that is not on the page.

## Row count

17 table rows. docs-work/helper-groups.md "## Types" line 24 gives Count 17 for /reference/templates/schedule. The front matter (line 3) says 17. Equal.

## Product defects

- The `schedule.today` English text ends with the example `21:00 Quick one` (xml:35), while the registry sample is `20:00 Bot night` (Broadcast/ScheduleListHelpers.cs:52). Not wrong, only inconsistent.
- `schedule.today` and `schedule.week` list only segments that have not ended (Broadcast/ScheduleData.cs:72). A stream earlier this week or earlier today is left out. The texts "The days this week (Monday to Sunday)" (xml:34) and "The scheduled streams of today" (xml:35) do not say this.

## Notes

- Earlier evidence (scratchpad fc5-result.md, fc6-result.md) was on older page text at product 18e2bf1f0; every claim above was re-read at 779081d10.
