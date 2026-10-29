# Fact check: src/content/reference/en/templates/user.mdx
Verdict: PASS
Reviewed: C:/Projects/NoMercyLabs/nomnomzbot-docs/src/content/reference/en/templates/user.mdx
Reviewed-SHA: 17a9fc26de0834c0

Product: NomNomzBot origin/master 779081d10d05dc6b4150732abd77bfae4dbef1d9 (fetched this run; every file opened with `git show origin/master:<path>`).
Method: generated helper page. 23 of 75 rows sampled: every fifth row from row 1 (rows 1, 6, ... 71), the last row (75), every prefix-family row (14, 15, 42, 51), the changed `{user.tense}` row (13) and `{engagement.years}` row (55), and the other engagement rows (52-54). Nothing was built or run.

Short names used below:
- REG = server/src/NomNomzBot.Application/Abstractions/Templating/TemplateHelperRegistry.cs
- LTH = server/src/NomNomzBot.Infrastructure/Platform/Templating/Helpers/Legacy/LegacyTemplateHelpers.cs
- PPL = server/src/NomNomzBot.Infrastructure/Platform/Templating/Helpers/People/
- ETS = server/src/NomNomzBot.Infrastructure/Engagement/EventHandlers/EngagementTriggerSources.cs
- SX = server/i18n/strings/values/strings.xml; SXP = server/i18n/strings/values/strings_template_people.xml

## Sampled helpers

| Row | Key | Key exists | Description matches | Example plausible, and why |
| --- | --- | --- | --- | --- |
| 1 | `{genderedTerm}` | REG:736 | Yes, SX:5411 | Yes. `person` is the name-form value (LTH:1073) and the fallback (LTH:1448) |
| 6 | `{tense}` | REG:207 | Description correction (helper-groups.md, replaces SX:5462). True: LTH:614-616 take one live state, from a seeded `target.isLive` (only ShoutoutAction.cs:433 seeds it), else from your channel; LTH:619-625 give the side's present form (is or are) while live and past form (was or were) when offline. The bare side mirrors the target when the command names someone, else the user: LTH:532 (`hasTargetContext` = a non-empty `target`), LTH:1463-1473; the needed forms are added at LTH:1502-1515 | Yes. `is` for he, she or a name while live (LTH:1048-1049, :1071) |
| 11 | `{user.pronouns}` | REG:675 | Yes, SX:5482 | Yes. The recorded pronoun display (LTH:742-746), such as `they/them` |
| 13 | `{user.tense}` | REG:742 | Description correction (helper-groups.md, replaces SX:5485). True: the `user.` side uses `user.presenttense` / `user.pasttense` (LTH:619-625, GrammarSides at LTH:1437), so it agrees with the person who used the command; the live state is the same one value as for `{tense}`, so in a shoutout it follows the shouted-out person (LTH:614-616, ShoutoutAction.cs:433) | Yes. `are` for they while live, or the fallback (LTH:624) |
| 14 | `{user.verb:<sing\|plur>}` | REG:752 (prefix `user.verb:`) | Yes, SX:5486 (backticks added) | Yes. `{user.verb:has\|have}` gives `has` when `user.presenttense` is "is" (LTH:209-233) |
| 15 | `{verb:<sing\|plur>}` | REG:749 | Description correction (helper-groups.md line 313, replaces SX:5487). True: singular when the bare `presenttense` is "is" (LTH:204-207, :228-233), which is "is" for every subject but they (LTH:1048) and for a name (LTH:1071); bare side mirrors target, else user (LTH:1463-1473) | Yes. `{subject} {verb:plays\|play}` gives `he plays` |
| 16 | `{link}` | REG:730 | Description correction (replaces SX:5413). True: LTH:645-665 | Yes. `twitch.tv/<login>` without https (LTH:651, :658); listed sample correction |
| 21 | `{user.color}` | PPL/PeopleTwitchHelpers.cs:20-25 | Yes, SXP:38 | Yes. The Twitch chat color (:25) |
| 26 | `{user.mention}` | PPL/PeopleIdentityHelpers.cs:19-23 | Yes, SXP:13 | Yes. `@` plus the display name (:23) |
| 31 | `{viewer.name}` | REG:491-496 | Yes, SX:5365 | Yes. The display name in engagement triggers (ETS:47, :89, :139; server/src/NomNomzBot.Infrastructure/Rewards/EventHandlers/WatchStreakHandler.cs:73) |
| 36 | `{user.followAge.days}` | PPL/PeopleFollowHelpers.cs:43-52 | Yes, SXP:28 | Yes. A raw day count since the follow (:51-52) |
| 41 | `{user.subTier.name}` | PPL/PeopleProfileHelpers.cs:51-57 | Yes, SXP:19 | Yes. TierName of the sub tier (:56) |
| 42 | `{user.data.<key>}` | PPL/PeopleStoredHelpers.cs:21-30 (prefix `data.`) | Yes, SXP:43 | Yes. The stored value, else the default after a colon (:27-30); `{user.data.color}` gives `blue` |
| 46 | `{user.points.nextRank.name}` | PPL/PeoplePointsHelpers.cs:69-75 | Yes, SXP:37 | Yes. The display name of the viewer one place above (:74) |
| 51 | `{viewer.data.<key>}` | REG:690 (prefix `viewer.data.`) | Yes, SX:5491 (backticks added) | Yes. The stored value of the key for the viewer (LTH:1187-1196, :1240-1260) |
| 52 | `{engagement.daysSinceLastSeen}` | REG:497-502 | Yes, SX:5366 | Yes. A whole day count (ETS:90) |
| 53 | `{engagement.months}` | REG:509-514 | Yes, SX:5368 | Yes. The modiversary month count (ETS:140) |
| 54 | `{engagement.streak}` | REG:503-508 | Yes, SX:5367 | Yes. The watch-streak count of the Twitch notice (WatchStreakHandler.cs:74; ChatTranslators.cs:416-419) |
| 55 | `{engagement.years}` | REG:517-522 | Description correction (helper-groups.md line 321, replaces SX:5369). True: ETS:141 sets it from the same month count as `{engagement.months}` (ETS:140); ETS:158-163 divide by 12 and give a whole number only when within 0.05 of a whole year, else one decimal. 84 gives 7; 90 gives 7.5; 85 gives 7.0833, which is 0.083 from 7, so "0.0" gives 7.1. One month is 0.083 of a year, so only an exact full year is whole | Yes. `1` is 12 months |
| 56 | `{user.activity.level}` | PPL/PeopleProfileHelpers.cs:120-126 | Yes, SXP:25 | Yes. new, casual, regular or veteran (:146-154) |
| 61 | `{user.stats.lastSeen}` | PPL/PeopleProfileHelpers.cs:91-100 | Yes, SXP:23 | Yes. A `yyyy-MM-dd` date (PPL/PeopleText.cs:30-33) |
| 66 | `{user.stats.watchTime.long}` | PPL/PeopleProfileHelpers.cs:68-77 | Yes, SXP:21 | Yes. Watch time in words (PeopleText.WatchTime, :75) |
| 71 | `{viewer.firstseen}` | REG:681 | Yes, SX:5493 | Yes. A `yyyy-MM-dd` date (LTH:1283-1286) |
| 75 | `{viewer.watchtime}` | REG:680 | Yes, SX:5497 | Yes. `12h 0m`: WatchTimeFormatter always writes the minutes once there are hours (server/src/NomNomzBot.Infrastructure/Analytics/WatchTimeFormatter.cs:17-22; LTH:1279-1282). Listed sample correction |

The engagement rows are seeded only by their trigger: `{engagement.daysSinceLastSeen}` by the returning-chatter trigger (ETS:86-91), `{engagement.months}` and `{engagement.years}` by the modiversary trigger (ETS:136-142), `{engagement.streak}` by the watch-streak handler (WatchStreakHandler.cs:68-81). The registry marks all four event-scoped (REG:497-522).

## Intro check

| Page line | Claim | Supported by | Status |
| --- | --- | --- | --- |
| 6 | Helper families on the page | Every row key is in the listed families (lines 32-126); helper-groups.md:12 | Supported |
| 8-9 | About the person who used the command, including pronouns | `user.*` rows from the user side: PPL/UserTemplateHelpers.cs; LTH:1437 | Supported |
| 10-12 | The bare helpers are about the named person (first word after the command), else the user | Name LTH:633-643; link LTH:660-664; grammar LTH:1463-1473; verb LTH:204-207; target is the first word: server/src/NomNomzBot.Infrastructure/Chat/EventHandlers/ChatMessageHandler.cs:1890-1898; LTH:532 | Supported |
| 13 | The `user.` form always gives the person who used the command | LTH:619-625 and :1043-1051 per side | Supported |
| 16 | `{user}` is the display name | ChatMessageHandler.cs:1840 (`["user"] = @event.UserDisplayName`) | Supported |
| 17 | In a chat reply, the display name only when it matches the login apart from letter case, else the login | server/src/NomNomzBot.Application/Chat/Services/ChatMentionName.cs:26-30 (For), :53-60 (ForChat marks a chat render), :70-80 (rewrites `user`); used by SendReplyAction.cs:61 and SendMessageAction.cs:130 | Supported |
| 18 | `{user.name}` is the login in lower case | ChatMessageHandler.cs:1842 (`["user.name"] = @event.UserLogin`) | Supported |
| 23 | Pronouns come from the alejo.io pronoun API | server/src/NomNomzBot.Infrastructure/Identity/Providers/AlejoPronounClient.cs:27 (`https://api.pronouns.alejo.io/v1/pronouns`) | Supported |
| 26 | Each row is its own example | Per-row registry samples | Supported |

## Row count

75 table rows on the page (`grep -c` of helper rows). docs-work/helper-groups.md Types table, line 12: Count 75 for /reference/templates/user. The front matter says 75. Match.

## Product defects (not page facts)

1. SX:5369 `template_helper_engagement_years` says "rounded for reading aloud"; the code gives a whole number only at a full year and one decimal otherwise (ETS:158-163). The page carries a Description correction.
2. ETS:162-163 format without a culture (`ToString()`, `ToString("0.0")`), so a server with a Dutch culture writes `7,5`. Every other number helper takes the channel culture (PPL/PeopleRow.cs:32).
3. SX:5462 and SX:5485 (`{tense}`, `{user.tense}`) do not say whose live state counts (your channel, or the shouted-out person in a shoutout; LTH:614-616). The page carries Description corrections.
4. WatchStreakReceivedEvent names the value `StreakMonths` (WatchStreakHandler.cs:74), while ChatTranslators.cs:416 says it is the count of consecutive broadcasts watched. The page says "watch-streak count", which is true either way.
