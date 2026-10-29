# Fact check: src/content/reference/en/templates/channel.mdx
Verdict: PASS
Reviewed: C:/Projects/NoMercyLabs/nomnomzbot-docs/src/content/reference/en/templates/channel.mdx
Reviewed-SHA: 39f6c9d32a51efe4

Product read: NomNomzBot origin/master 779081d10d05dc6b4150732abd77bfae4dbef1d9 (git fetch run 2026-10-29; every file opened with `git show origin/master:<path>`).
The helper code and strings for this page did not change between the export commit a8f180821 and origin/master (the only templating change in that range is pronoun grammar in LegacyTemplateHelpers.cs).

This pass reviewed the repaired intro (page lines 8-11) in full, then sampled the table.

## All rows, scripted
A scratch script read all 34 rows. Each description equals the first line of its English string in server/i18n/strings/values (strings.xml or strings_template_stream.xml). No row on this page has a Description correction. Each key is a row of docs-work/helpers.json.

## Sample (17 rows: first, last, both rows with a typed input, and every second row between)

| Page line | Key | Product file:line | Description equals product text | Example plausible |
| --- | --- | --- | --- | --- |
| 17 | `channel` | TemplateHelperRegistry.cs:195; seeded LegacyTemplateHelpers.cs:436 (ChannelName); sample TemplateHelperSamples.cs:23 | yes, strings.xml:5383 | yes: a lower-case login |
| 19 | `channel.avatar` | TemplateHelperRegistry.cs:771 (DiscordOnly); DiscordChannelLinks.cs:55-64 (owner ProfileImageUrl); sample TemplateHelperSamples.cs:199 | yes, strings.xml:5389 | yes: a Twitch profile picture URL |
| 21 | `channel.display` | TemplateHelperRegistry.cs:196; LegacyTemplateHelpers.cs:437 | yes, strings.xml:5384 | yes |
| 23 | `channel.followers` | ChannelCountHelpers.cs:18-24 (StreamText.Grouped) | yes, strings_template_stream.xml:66 | yes: `1,234` with a separator |
| 25 | `channel.game` | TemplateHelperRegistry.cs:767 (DiscordOnly); DiscordGoLiveNotificationHandler.cs:64 (GameName) | yes, strings.xml:5393 | yes |
| 26 | `channel.id` | TemplateHelperRegistry.cs:197; LegacyTemplateHelpers.cs:439 and :459-467 (TwitchChannelId); sample TemplateHelperSamples.cs:25 | yes, strings.xml:5385 | yes: `123456789` |
| 29 | `channel.localTime` | ChannelSettingsHelpers.cs:42-46; StreamText.cs:112-115 (`HH:mm` in the channel zone) | yes, strings_template_stream.xml:71 | yes: `15:30` |
| 31 | `channel.mention` | ChannelSettingsHelpers.cs:21-31 ("@" + display name, else the login) | yes, strings_template_stream.xml:65 | yes: `@SampleChannel` |
| 33 | `channel.name` | TemplateHelperRegistry.cs:765 (DiscordOnly); DiscordGoLiveNotificationHandler.cs:62 (BroadcasterDisplayName), DiscordStreamEndNotificationHandler.cs:49 | yes, strings.xml:5391 | yes: a display name |
| 36 | `channel.raids.inCount` | ChannelRaidHelpers.cs:30-35 (one argument), CountAsync :71-84 (the login after the colon, one @ dropped) | yes, strings_template_stream.xml:84 | yes: `{channel.raids.inCount:otherstreamer}` gives a plain count `5` |
| 39 | `channel.raids.outCount` | ChannelRaidHelpers.cs:24-29, CountAsync :71-84 | yes, strings_template_stream.xml:83 | yes: `3` |
| 41 | `channel.tags` | ChannelProfileHelpers.cs:24 (tags joined with ", ") | yes, strings_template_stream.xml:74 | yes: `English, Coding` |
| 44 | `channel.title` | TemplateHelperRegistry.cs:766 (DiscordOnly); DiscordGoLiveNotificationHandler.cs:63 (StreamTitle) | yes, strings.xml:5392 | yes |
| 45 | `channel.url` | TemplateHelperRegistry.cs:768 (DiscordOnly); DiscordChannelLinks.cs:60-61, UrlOf :70-76 (`https://www.twitch.tv/{login}`) | yes, strings.xml:5386 | yes: `https://www.twitch.tv/example_channel` is the form UrlOf builds |
| 47 | `channel.vod.latest` | ChannelProfileHelpers.cs:38 (the video Url) | yes, strings_template_stream.xml:81 | yes: a Twitch video URL |
| 49 | `status` | TemplateHelperRegistry.cs:206; LegacyTemplateHelpers.cs:617-618 (`live` or `offline`) | yes, strings.xml:5426 | yes: `live` |
| 50 | `streamer` | TemplateHelperRegistry.cs:198; LegacyTemplateHelpers.cs:440 (DisplayName, else ChannelName) | yes, strings.xml:5433 | yes |

## Intro check (page lines 8-11)
- Line 8, "describe the channel: its name, links, followers and settings": true for the rows on the page (names lines 17, 21, 33, 50; links lines 45, 47; followers lines 23-24; settings lines 34-35, 43).
- Line 9, "Use the `{channel}`, `{channel.display}` and `{streamer}` helpers in any reply that names the channel": true. All three are registered for ViewerInfoContexts (TemplateHelperRegistry.cs:195-196, :198), which is every context plus a viewer's own text (:32-40, :74-78), and LegacyTemplateHelpers.cs:418-440 fills them from the channel registry. `{channel.id}` is no longer in this sentence.
- Line 10, "`{channel.id}` gives the platform ID, a number such as 123456789, not a name": true. LegacyTemplateHelpers.cs:439 and :459-467 write the Twitch channel id (TwitchChannelId), a numeric string; the sample is `123456789` (TemplateHelperSamples.cs:25).
- Line 11, "A row marked "Discord seed alias" works only in a Discord notification, which fills in the value itself when it sends the message. In a command or an event response it stays as typed": true. The six marked rows (lines 19, 25, 30, 33, 44, 45) are registered for DiscordOnly (TemplateHelperRegistry.cs:765-771), which the registry defines as "supplied directly by the trigger handlers ... never resolved by TemplateResolver itself" (:42-45). The Discord dispatcher adds `channel.url`, `channel.login` and `channel.avatar` for every Discord trigger (DiscordNotificationDispatcher.cs:163-171; DiscordChannelLinks.cs:39-67), and the go-live handler seeds `channel.name`, `channel.title` and `channel.game` (DiscordGoLiveNotificationHandler.cs:62-64). Outside the Discord files no code at origin/master sets these keys (`git grep` over server/src finds them only in the Discord folder, the registry and the samples), so a command or an event response keeps the token as typed.
- Line 13, "Each row is its own example": true; for example `channel.mention` gives `@SampleChannel` (line 31) while `channel.display` gives `Example_Channel` (line 21).
- The intro names no helper that is missing from the page.

## Row count
34 table rows. docs-work/helper-groups.md:15 gives Count 34 for /reference/templates/channel. The front matter says 34. Equal.

## Findings
None.

## Product defects (not verdict items)
- `channel.mention` has the sample `@SampleChannel` (ChannelSettingsHelpers.cs:23), while the other channel rows use `Example_Channel` (TemplateHelperSamples.cs:24, :26). Both are plausible outputs; the product samples name two different channels.
