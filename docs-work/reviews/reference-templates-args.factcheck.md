# Fact check: src/content/reference/en/templates/args.mdx
Verdict: PASS
Reviewed: C:/Projects/NoMercyLabs/nomnomzbot-docs/src/content/reference/en/templates/args.mdx
Reviewed-SHA: a08b5e62e9d651ab

Product: NomNomzBot origin/master 779081d10d05dc6b4150732abd77bfae4dbef1d9 (read with `git show origin/master:<path>`).
Paths below are short: `Args/` is server/src/NomNomzBot.Infrastructure/Platform/Templating/Helpers/Arguments/, `People/` is the sibling People/ folder, `strings_template_args.xml` is in server/i18n/strings/values/.

## Intro (page lines 6-19)

| Claim | Supported by | Status |
| --- | --- | --- |
| Line 8-9: the helpers read the words after the command; a word, a number or a duration | Args/CommandWords.cs:16-28 (the `args` seed split on spaces); Args/ArgumentParseHelpers.cs:20-48 (number, duration rows) | true |
| Line 10: a word can be read as a person, `{args.1.user.points}` | Args/ArgumentUserHelpers.cs:22-26, :63-72 (n-th word, leading @ dropped, looked up as the target); :152-157 builds `args.<n>.user.<suffix>` | true |
| Line 12: usually the words are exactly as typed | ChatMessageHandler.cs:1890-1911 seeds `args`, `args.count`, `args.N` from the raw text; ChatMessageHandler.cs:1871-1872 skips interpretation when the text has no `{` | true |
| Line 13: Viewer Templates is on by default and can be switched off in Features | Platform/FeatureService.cs:92-100 (`use_viewer_templates`, DefaultOn `true`), :183 (`row?.IsEnabled ?? DefaultOnFor(featureKey)`), :186-233 (toggle) | true |
| Line 14: while on, a viewer who may use helpers (subscribers and higher by default) can put helpers after the command | Rewards/ViewerInputTemplateService.cs:56-72 (feature check, then permission check); Content/Identity/ActionDefinitionSeeder.cs:626-637 (`ViewerTemplateCapabilities.RewardInput` at the Subscriber rung) | true |
| Line 15: filled in once, when the message arrives | ChatMessageHandler.cs:1860-1886 (`BuildInterpretedVariablesAsync`, called at :514, :636, :1027, :1608); Chat/EventHandlers/ViewerArgsInterpreter.cs:17-21 | true |
| Line 16: `{args}`, `{args.first}`, `{args.last}` give the filled-in text | ViewerArgsInterpreter.cs:34-41 overwrites the `args` seed; Args/CommandWords.cs:50-57 reads that seed; Args/ArgumentWholeHelpers.cs:25-26 | true |
| Line 17: `{args.1}`, `{args.2}` and `{args.count}` keep the words as typed | ChatMessageHandler.cs:1900, :1908-1909 seed them from the raw text; the interpreter rewrites only `args` (ViewerArgsInterpreter.cs:34); Rendering/ProviderDispatch.cs:21 and :36-37 (a seed wins over a provider) | true |
| Line 19: rows do not all come from one moment | the samples differ by row, e.g. People/PeopleIdentityHelpers.cs:18 (`viewerone`) and :26 (`@ViewerTwo`) | true |
| The intro names no helper that is missing from the table | `{args.1.user.points}`, `{args.first}`, `{args.last}`, `{args.1}`, `{args.count}` are rows on page lines 45, 87, 89, 73, 85 | true |

## Sampled helpers (21 of 64)

| Key | Product row | Description equals product text | Example plausible |
| --- | --- | --- | --- |
| `args.<n>.user.accountAge` (first row) | People/PeopleTwitchHelpers.cs:77-86 | yes, strings_template_args.xml:51 | yes: sample `7 years, 5 months` at :80, rendered by PeopleText.Age |
| `args.<n>.user.data.<key>` | People/PeopleStoredHelpers.cs:22; key built at Args/ArgumentUserHelpers.cs:154 (`<key>` tail) | yes, :72 | yes: typed example from helper-groups.md Inputs (ArgumentUserHelpersTableTests.cs:63), a missing value gives the default |
| `args.<n>.user.followAge` | Args/ArgumentUserHelpers.cs:170-187 | yes, :54 | yes: sample `9 months and 24 days` at :174, LegacyAgeText.FollowAge |
| `args.<n>.user.mention` | People/PeopleIdentityHelpers.cs:19-27 | yes, :35 | yes: target sample `@ViewerTwo` at :26; "@" + display name at :23 |
| `args.<n>.user.points` | People/PeoplePointsHelpers.cs:24-36 | yes, :56 | yes: target sample `800` at :35 (Sample is TargetSample ?? Sample, ArgumentUserHelpers.cs:160) |
| `args.<n>.user.points.nextRank.gap` | People/PeoplePointsHelpers.cs:62-68 | yes, :61 | yes: `300` at :65, next.Value - own.Value at :67 |
| `args.<n>.user.points.rank.ordinal` | People/PeoplePointsHelpers.cs:55-61 | yes, :60 | yes: `4th` at :58, Ordinalize at :60 |
| `args.<n>.user.shoutoutLink` | People/PeopleIdentityHelpers.cs:40-48 | yes, :38 | yes: `https://twitch.tv/` + login at :46 |
| `args.<n>.user.stats.lastSeen` | People/PeopleProfileHelpers.cs:91-106 | yes, :66 | yes: target sample `2026-10-25` at :105, a date at :100 |
| `args.<n>.user.stats.watchTime.long` | People/PeopleProfileHelpers.cs:68-77 | yes, :64 | yes: `12 hours, 30 minutes` at :71 |
| `args.<n>.user.viewers` | People/PeopleChannelHelpers.cs:27-36 | yes, :44 | yes: sample `18` at :30, the stream viewer count at :34 |
| `args.<a>-<b>` | Args/ArgumentPickHelpers.cs:24, :41-46 | yes, :19 | yes: `{args.2-3}` on `@ViewerTwo hello big world` gives `hello big` (CommandWords.Slice, CommandWords.cs:43-48) |
| `args.<n>` | Application/Abstractions/Templating/TemplateHelperRegistry.cs:655; seed at ChatMessageHandler.cs:1908-1909 | yes, strings.xml:5379 (braces in backticks only) | yes: first word `@ViewerTwo` |
| `args.<n>+` | Args/ArgumentPickHelpers.cs:17-23, :35-38 | yes, :18 | yes: words 2 to the end |
| `args.<n>.clean` | Args/ArgumentWordHelpers.cs:21 | yes, :21 | yes: MentionParser.ParseUserMention drops the @ |
| `args.<n>.number` | Args/ArgumentParseHelpers.cs:20-26, :59-71 | yes, :25 | yes: `{args.3.number:1}`: the third word `big` is no number, so the default `1` (:70) |
| `args.<n>:<default>` | Args/ArgumentPickHelpers.cs:25-31, :49-55 | yes, :20 | yes: `{args.5:nobody}` with 4 words gives the default (:54); the token text `args.5:nobody` is no seed key |
| `args` | TemplateHelperRegistry.cs:654 | yes, strings.xml:5380 | yes: sample `hello world`, TemplateHelperSamples.cs:129 |
| `args.duration` | Args/ArgumentParseHelpers.cs:48, :80-87 | Description correction (helper-groups.md "args.duration"); true: the position is the one argument (:81), the word is read as seconds (ArgumentDuration.cs:34-69) | yes: `5m` gives 300 (ArgumentDuration.cs:29) |
| `args.first` | Args/ArgumentWholeHelpers.cs:25 | Description correction; true: `Words.At(1)` keeps the @ and reads the `args` seed (CommandWords.cs:50-57) that ViewerArgsInterpreter.cs:34-41 rewrites | yes: `@ViewerTwo` |
| `args.rest` (last row) | Args/ArgumentWholeHelpers.cs:27 | yes, :15 | yes: Slice(2, Count) gives `hello big world` |

## Row count

The page has 41 rows in "Person named in the message" (lines 25-65) and 23 rows in "Words after the command" (lines 71-93): 64.
docs-work/helper-groups.md "## Types" line 14 gives Count 64 for /reference/templates/args. The front-matter description also says 64. Match.

## Product defects

- strings_template_args.xml:13 says `{args.first}` is "as written". With Viewer Templates on, it reads the filled-in text (ArgumentWholeHelpers.cs:25, CommandWords.cs:50-57, ViewerArgsInterpreter.cs:34-41). The page carries the corrected text.
- strings_template_args.xml:31 describes `{args.duration}` as reading "the n-th word", but the key takes no position. The position is its one argument (ArgumentParseHelpers.cs:80-81). The page carries the corrected text.
- `{args.2.upper}` and the other `args.<n>.*` word rows read the filled-in text (CommandWords.cs:50-57), while `{args.2}` itself stays as typed (seed, ProviderDispatch.cs:36-37). The two can disagree for a viewer who typed helpers. The page states the rule correctly; the product split is a design point, not a page fault.
