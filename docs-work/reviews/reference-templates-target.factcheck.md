# Fact check: src/content/reference/en/templates/target.mdx
Verdict: PASS
Reviewed: C:/Projects/NoMercyLabs/nomnomzbot-docs/src/content/reference/en/templates/target.mdx
Reviewed-SHA: 4de43d279599b959

Product: NomNomzBot origin/master 779081d10d05dc6b4150732abd77bfae4dbef1d9 (fetched this run; every file opened with `git show origin/master:<path>`).
Method: generated helper page. 18 of 46 rows sampled: every third row from row 1 (rows 1, 4, 7, ... 46), which covers the first row, the last row and both prefix-family rows, plus the changed `{target.tense}` row (row 6) and the regenerated `{target.displayname}` row (row 12). Nothing was built or run.

Short names used below:
- REG = server/src/NomNomzBot.Application/Abstractions/Templating/TemplateHelperRegistry.cs
- LTH = server/src/NomNomzBot.Infrastructure/Platform/Templating/Helpers/Legacy/LegacyTemplateHelpers.cs
- PPL = server/src/NomNomzBot.Infrastructure/Platform/Templating/Helpers/People/
- SX = server/i18n/strings/values/strings.xml; SXP = server/i18n/strings/values/strings_template_people.xml

## Sampled helpers

| Row | Key | Key exists | Description matches | Example plausible, and why |
| --- | --- | --- | --- | --- |
| 1 | `{target.genderedTerm}` | REG:747 | Yes, SX:5443 | Yes. `person` is the name-form value (LTH:1073) and the no-pronoun fallback (LTH:1448) |
| 4 | `{target.presentTense}` | REG:746 | Yes, SX:5454 | Yes. `are` for they (LTH:1048-1049) or the fallback (LTH:1446) |
| 6 | `{target.tense}` | REG:748 | Description correction (helper-groups.md line 312, replaces SX:5459). True: LTH:614-616 take the live state from a seeded `target.isLive`, else from your channel (`channelCtx.IsLive`); LTH:619-625 give `target.presenttense` (is or are) while live and `target.pasttense` (was or were) when offline. `target.isLive` is seeded only by the shoutout: ShoutoutAction.cs:433 (grep of server/src for `target.isLive`: LTH:613-614 and ShoutoutAction.cs:433 only) | Yes. `are` while live for they, or the fallback (LTH:624) |
| 7 | `{target.verb:<sing\|plur>}` | REG:758 (prefix `target.verb:`) | Yes, SX:5460 (backticks added around the helper) | Yes. `{target.verb:has\|have}` gives `have` when `target.presenttense` is not "is" (LTH:214-233), which matches the they sample of row 5 |
| 10 | `{target.bio}` | PPL/PeopleTwitchHelpers.cs:40-49 | Yes, SXP:57 | Yes. The Twitch description (PeopleTwitchHelpers.cs:45); target sample at :48 |
| 12 | `{target.displayname}` | REG:697 | Description correction (helper-groups.md, replaces SX:5450). True: a stored user gives its stored display name (LTH:954-955); an unknown login is looked up at Twitch (LTH:939-946, :994-997) and gives the Twitch display name (LTH:1007-1010); the typed word only when no account has that name or the lookup fails (LTH:999-1004) | Yes. A display name |
| 13 | `{target.id}` | REG:699 | Yes, SX:5444 | Yes. The Twitch user id (LTH:952, :1008) |
| 16 | `{target.mention}` | PPL/PeopleIdentityHelpers.cs:19-27 | Yes, SXP:45 | Yes. `@` plus the display name (:23); target sample `@ViewerTwo` at :26 |
| 19 | `{target.accountAge}` | PPL/PeopleTwitchHelpers.cs:77-87 (target side only) | Yes, SXP:59 | Yes. Humanized with 2 units, years to days (PPL/PeopleText.cs:64-76) |
| 22 | `{target.isFollower}` | PPL/PeopleFollowHelpers.cs:22-31 (target side) | Yes, SXP:48 | Yes. `true` or `false` (:29; PeopleText.cs:21) |
| 25 | `{target.isLive}` | PPL/PeopleChannelHelpers.cs:20-26 (target side only) | Yes, SXP:60 | Yes. `false` when the target has no stream (:25) |
| 28 | `{target.data.<key>}` | REG:724 (prefix `target.data.`) | Yes, SX:5439 (backticks added) | Yes. `{target.data.deaths}` gives the stored value of key `deaths` (LTH:1240-1260); `5` is a plausible stored value |
| 31 | `{target.activity.level}` | PPL/PeopleProfileHelpers.cs:120-126 (both sides) | Yes, SXP:50 | Yes. ViewerActivitySteps.Level gives new, casual, regular or veteran (PeopleProfileHelpers.cs:146-154) |
| 34 | `{target.commands}` | REG:718 | Yes, SX:5438 | Yes. Total commands used as a number (LTH:1290, :1295) |
| 37 | `{target.lastmessage}` | REG:701 | Yes, SX:5446 | Yes. The last chat line (LTH:667-681) |
| 40 | `{target.randommessage}` | REG:708 | Yes, SX:5455 | Yes. An older message, cut to fit a quote (LTH:1616-1660) |
| 43 | `{target.stats.bits}` | PPL/PeopleProfileHelpers.cs:127-139 | Yes, SXP:51 | Yes. A count with a group separator (:134; PeopleText.cs:24); target sample `0` at :138 |
| 46 | `{target.watchtime}` | REG:714 | Yes, SX:5461 | Yes. `12h 0m` is the WatchTimeFormatter form, which always writes the minutes once there are hours (server/src/NomNomzBot.Infrastructure/Analytics/WatchTimeFormatter.cs:17-22; LTH:1279-1282). This is the listed sample correction |

All `target.*` provider rows come from one provider for the target side: PPL/TargetTemplateHelpers.cs:17-24 (`ViewerSide.Target`, namespace `target`), keys built by PPL/PeopleRow.cs:84-88.

## Intro check

| Page line | Claim | Supported by | Status |
| --- | --- | --- | --- |
| 6 | Helpers on the page: `{target}`, `{target.*}` | Every row key starts with `target` (lines 24-94) | Supported |
| 8 | The target is the person a command names, as `@someone` in `!hug @someone` | server/src/NomNomzBot.Infrastructure/Chat/EventHandlers/ChatMessageHandler.cs:1890-1898 (first word after the command, mention parsed) | Supported |
| 9 | Name, pronouns, account, stats and live status, such as `{target.name}` and `{target.subject}` | Rows on the page: name (45), subject (28), account (52-56), stats (79-94), live status (63) | Supported |
| 15 | The `target.` pronoun helpers read the saved pronouns of the named person | LTH:935-937 (stored user with its Pronoun), :967-972 (ApplyPronounGrammarVars on `target.`) | Supported |
| 18 | Each row is its own example | Samples are per-row registry samples | Supported |

## Row count

46 table rows on the page (`grep -c` of helper rows). docs-work/helper-groups.md Types table, line 13: Count 46 for /reference/templates/target. The front matter says 46. Match.

## Notes

- `{target.displayname}` edge: a stored user whose DisplayName is blank falls back to the typed word (LTH:954-955 skip it, then LTH:591-592 add `target`). The page sentence "only when no Twitch account has that name or the lookup fails" does not cover that case. A stored Twitch user carries a display name in practice, so this is not marked as a wrong fact.

## Product defects (not page facts)

1. SX:5459 `template_helper_target_tense` ("The live/offline-aware tense for the @mention target") does not say that the live state is your channel's, or the shouted-out person's in a shoutout (LTH:614-616). The page carries a Description correction.
2. SX:5450 `template_helper_target_displayname` says "or the typed text when the user is unknown", but an unknown login is first looked up at Twitch (LTH:939-946, :994-1010). The page carries a Description correction.
