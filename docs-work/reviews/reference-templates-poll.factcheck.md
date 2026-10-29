# Fact check: src/content/reference/en/templates/poll.mdx
Verdict: PASS
Reviewed: C:/Projects/NoMercyLabs/nomnomzbot-docs/src/content/reference/en/templates/poll.mdx
Reviewed-SHA: 272c83a3960eb00d

Product checked at origin/master 779081d10d05dc6b4150732abd77bfae4dbef1d9 (read with `git show origin/master:<path>`, nothing built or run).

## Description check, all 51 rows

A scan script compared every row's "What it gives" cell with the first line of the English string named by its descriptionKey (dots to underscores) in the origin/master XML files. All 51 match (cell normalized only for backticks and the `\|` escape). Strings live in strings.xml:5323-5340 and strings_template_liveevents1.xml:11-43.

## Sampled rows (17 of 51)

Paths below are under server/src/NomNomzBot.Infrastructure/ unless they start with Application/. LiveEvents = Platform/Templating/Helpers/LiveEvents.

| Page line | Key | Key in product | Description match | Example plausible |
| --- | --- | --- | --- | --- |
| 17 | `poll.choices` | Application/Abstractions/Templating/TemplateHelperRegistry.cs:287; Community/EventHandlers/PollEventHandler.cs:44 | yes (strings.xml:5331) | yes: titles joined with ", " (PollEventHandler.cs:44) gives `Pizza, Pasta` |
| 18 | `poll.duration` | TemplateHelperRegistry.cs:281; PollEventHandler.cs:43 | yes (strings.xml:5330) | yes: Platform/Eventing/TwitchAlertHandlerBase.cs:107-116 writes 300 s as `5 minutes` |
| 20 | `poll.id` | TemplateHelperRegistry.cs:275; PollEventHandler.cs:41 | yes (strings.xml:5329) | yes: the raw poll id, a GUID (PollEventHandler.cs:50 uses the same id) |
| 23 | `poll.last.question` | LiveEvents/PollLastHelpers.cs:22 | yes (strings_template_liveevents1.xml:27) | yes: the last poll's title |
| 26 | `poll.leading.percent` | LiveEvents/PollLeadingHelpers.cs:29-34 | yes (liveevents1.xml:23) | yes: LiveEvents/PollText.cs:36-41 rounds to a whole number and adds `%`; 12 of 20 votes gives `60%` |
| 29 | `poll.option.percent` | LiveEvents/PollOptionHelpers.cs:40-45 | yes (liveevents1.xml:20) | yes: PollText.cs:68-75 reads option 2 by its number; 8 of 20 gives `40%` |
| 32 | `poll.options.numbered` | PollOptionHelpers.cs:18-22 | yes (liveevents1.xml:16) | yes: PollText.cs:46-47 writes `1. chips 2. cookies` |
| 34 | `poll.results` | TemplateHelperRegistry.cs:268; PollEventHandler.cs:88-95 | yes (strings.xml:5328) | yes: `Title: votes (pct%)` joined with ` \| `; 28 and 22 of 50 give 56% and 44% (integer share, PollEventHandler.cs:103) |
| 37 | `poll.timeLeft` | LiveEvents/PollStateHelpers.cs:21-25 | yes (liveevents1.xml:13) | yes: Platform/Templating/Helpers/Stream/StreamText.cs:68-75 writes 90 s as `1m 30s` |
| 41 | `poll.winner.percentage` | TemplateHelperRegistry.cs:262; PollEventHandler.cs:86-87 | yes (strings.xml:5327) | yes: the value is ` (56%)` with a space in front, so `{poll.winner}{poll.winner.percentage}` gives `Pizza (56%)` |
| 49 | `prediction.isActive` | LiveEvents/PredictionStateHelpers.cs:20-25 | yes (liveevents1.xml:29) | yes: `true` while the status is ACTIVE (LiveEvents/PredictionText.cs:28) |
| 52 | `prediction.leading.percent` | LiveEvents/PredictionTotalsHelpers.cs:30-37 | yes (liveevents1.xml:39) | yes: 3,000 of 4,000 points gives `75%` (PredictionText.cs:50-51) |
| 55 | `prediction.outcome.odds` | LiveEvents/PredictionOutcomeHelpers.cs:47-52 | yes (liveevents1.xml:36) | yes: PredictionText.cs:63-72 writes `1:` plus total over outcome; 4,000 / 1,000 gives `1:4` |
| 58 | `prediction.outcomes` | TemplateHelperRegistry.cs:311; Community/EventHandlers/PredictionEventHandler.cs:45 | yes (strings.xml:5335) | yes: titles joined with ", " |
| 62 | `prediction.status` | TemplateHelperRegistry.cs:323; PredictionEventHandler.cs:125 | yes (strings.xml:5337) | yes: the end event's status, `resolved` |
| 66 | `prediction.topPredictor` | PredictionTotalsHelpers.cs:50-54 | yes (liveevents1.xml:42) | yes: PredictionText.cs:75-82 writes `name (grouped points)`, `ViewerOne (1,000)` |
| 69 | `prediction.window` | TemplateHelperRegistry.cs:305; PredictionEventHandler.cs:44 | yes (strings.xml:5334) | yes: the window in seconds, plain `120` |
| 72 | `prediction.winner.users` | TemplateHelperRegistry.cs:341; PredictionEventHandler.cs:128 | yes (strings.xml:5340) | yes: the winning outcome's user count, `41` |

Also read for the description claims: `prediction.timeLeft` is empty once the prediction is locked (PredictionText.cs:85-92), and `poll.winner.percentage` is empty when no one voted (PollEventHandler.cs:86-87). Both match the page text.

## Intro check

- "Helpers on this page: `{poll.*}`, `{prediction.*}`." True: the table holds only poll.* and prediction.* keys.
- "These helpers read the current or last poll and prediction." True: the Active and State rows read the running poll (PollStateHelpers.cs:19-30), the Last rows read the last finished one (PollLastHelpers.cs:17-22, PredictionLastHelpers.cs:17-21), and the event rows carry the poll and prediction events (PollEventHandler.cs:38-45 and :75-96).
- "Use them to announce a result in chat, on an overlay or read aloud." A use suggestion; it names no helper that is not on the page.
- The intro names no helper that is missing from the table.

## Row count

51 table rows (26 under Polls, 25 under Predictions). docs-work/helper-groups.md:20 gives Count 51 for /reference/templates/poll. The front matter says 51. Match.

## Product defects (not a page fault)

- Application/Abstractions/Templating/TemplateHelperSamples.cs:45 gives `poll.winner.percentage` the sample `56`, but PollEventHandler.cs:86-87 renders ` (56%)`.
- TemplateHelperSamples.cs:46 gives `poll.results` the sample `Pizza 28, Pasta 22`, but PollEventHandler.cs:88-95 renders `Pizza: 28 (56%) | Pasta: 22 (44%)`.
- The docs already correct both through docs-work/helper-groups.md (Sample corrections and Inputs). One small citation drift: the Inputs line cites PollEventHandler.cs:85-86; at origin/master the key is on :86 and the value on :87.
