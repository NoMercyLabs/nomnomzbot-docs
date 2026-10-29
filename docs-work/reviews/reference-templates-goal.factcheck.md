# Fact check: src/content/reference/en/templates/goal.mdx
Verdict: PASS
Reviewed: C:/Projects/NoMercyLabs/nomnomzbot-docs/src/content/reference/en/templates/goal.mdx
Reviewed-SHA: 819b303e3cc41d05

Product: origin/master 779081d10d05dc6b4150732abd77bfae4dbef1d9 (fetched this run; every file read with `git show origin/master:<path>`).
Paths below are short: `LiveEvents/` = server/src/NomNomzBot.Infrastructure/Platform/Templating/Helpers/LiveEvents/; `xml` = server/i18n/strings/values/strings_template_liveevents2.xml.

## Method

All 14 rows were checked (the page has 14).
A script (scratchpad fcD-cmp.py) compared each description cell with the first line of the English string, and each example with the helpers.json sample.
Result: 14 of 14 descriptions equal the product text; 14 of 14 examples equal the sample.
Each render function was then read for the example.

## Rows

| Key | Product row | Description = English text | Example plausible | Why |
| --- | --- | --- | --- | --- |
| goal.followers.bar | LiveEvents/GoalHelpers.cs:21-25; LiveGoalRows.cs:90-95 | yes (xml:28) | yes | LiveText.Bar (LiveText.cs:40-50): 10 cells (Numbers/MeterBars.cs:19), 82% fills 8, then a space and the percent. |
| goal.followers.current | LiveGoalRows.cs:62-67 | yes (xml:24) | yes | LiveText.Count, grouped (LiveText.cs:29-30). |
| goal.followers.description | LiveEvents/GoalHelpers.cs:26-31 | yes (xml:29) | yes | The goal description; nothing when it is blank. |
| goal.followers.percent | LiveGoalRows.cs:74-79 | yes (xml:26) | yes | 1234 / 1500 = 82.3%, rounded to `82%` (Music/MusicText.cs:47-49). |
| goal.followers.remaining | LiveGoalRows.cs:80-89 | yes (xml:27) | yes | target minus current, never below 0 (LiveText.cs:33): 1500 - 1234 = 266. |
| goal.followers.target | LiveGoalRows.cs:68-73 | yes (xml:25) | yes | Grouped target. |
| goal.list | LiveEvents/GoalHelpers.cs:61-80 | yes (xml:37) | yes | `{Label} {percent}` per goal, joined by `, `; labels `followers`, `subs` (LiveGoalRows.cs:19-21). |
| goal.newSubs.current | LiveEvents/GoalHelpers.cs:46-51 | yes (xml:35) | yes | Grouped current amount of a new_subscription goal (LiveGoalRows.cs:23-27). |
| goal.newSubs.percent | LiveEvents/GoalHelpers.cs:52-57 | yes (xml:36) | yes | 6 of a target of 20 gives `30%`. |
| goal.subs.bar | LiveEvents/GoalHelpers.cs:39 | yes (xml:34) | yes | 80% fills 8 of 10 cells. |
| goal.subs.current | LiveEvents/GoalHelpers.cs:39 | yes (xml:30) | yes | Grouped count. |
| goal.subs.percent | LiveEvents/GoalHelpers.cs:39 | yes (xml:32) | yes | 80 / 100. |
| goal.subs.remaining | LiveEvents/GoalHelpers.cs:39 | yes (xml:33) | yes | 100 - 80 = 20. |
| goal.subs.target | LiveEvents/GoalHelpers.cs:39 | yes (xml:31) | yes | Grouped target. |

The `.current`, `.target`, `.percent`, `.remaining` and `.bar` rows of followers and subs come from LiveGoalRows.Progress (LiveGoalRows.cs:60-96). Key total: 6 followers + 5 subs + 2 newSubs + 1 list = 14.
The samples of one kind agree with each other: followers 1,234 of 1,500 is 82% with 266 left; subs 80 of 100 is 80% with 20 left.

## Intro check

- Page line 6, `{goal.*}`: every row key starts with `goal.`. True.
- Line 8, "These helpers read the channel goals, such as follower goals and sub goals": the rows read the Twitch creator goals by kind (LiveGoalRows.cs:17-33). True.
- Line 9, "Use them to show progress in chat, on an overlay or read aloud": the rows give progress (percent, bar, remaining). The overlay SDK renders templates through the one resolver (server/src/NomNomzBot.Api/Controllers/V1/OverlayController.cs:153-170). The speech pipeline action renders through the resolver too (server/src/NomNomzBot.Infrastructure/Tts/PipelineActions/PlayTtsAction.cs:32-35). True.
- Line 11, the rows are separate examples: true.
- The intro names no helper that is not on the page.

## Row count

14 table rows. docs-work/helper-groups.md "## Types" line 22 gives Count 14 for /reference/templates/goal. The front matter (line 3) says 14. Equal.

## Product defects

- None found on this page.

## Notes

- Earlier evidence (scratchpad fc6-result.md) passed this page on older text at product 18e2bf1f0; every claim above was re-read at 779081d10.
