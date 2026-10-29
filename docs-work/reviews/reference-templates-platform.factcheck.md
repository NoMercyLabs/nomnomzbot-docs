# Fact check: src/content/reference/en/templates/platform.mdx
Verdict: PASS
Reviewed: C:/Projects/NoMercyLabs/nomnomzbot-docs/src/content/reference/en/templates/platform.mdx
Reviewed-SHA: ae27446ac9f71f9d

Product checked at origin/master 779081d10d05dc6b4150732abd77bfae4dbef1d9 (read with `git show origin/master:<path>`, nothing built or run).

## Description check, all 25 rows

A scan script compared every row's "What it gives" cell with the first line of its English string in the origin/master XML. All 25 match. The strings are in server/i18n/strings/values/strings_template_platform.xml:11-35.

## Sampled rows (15 of 25)

Paths are under server/src/NomNomzBot.Infrastructure/Platform/Templating/Helpers/Platforms/. Counts are written with `N0` in the channel culture (Helpers/People/PeopleText.cs:24, called from PlatformText.cs:44-45). The platform keys are `twitch`, `kick` and `youtube` (server/src/NomNomzBot.Domain/Identity/Enums/AuthEnums.cs:24-26).

| Page line | Key | Key in product | Description match | Example plausible |
| --- | --- | --- | --- | --- |
| 15 | `platform.chatters.stream` | PlatformTotalsHelpers.cs:29 and :36-55 | yes (strings_template_platform.xml:31) | yes: the platform's UniqueChatters for the stream window, `6` |
| 17 | `platform.count` | PlatformConnectedHelpers.cs:27-35 | yes (:34) | yes: the number of linked platforms, `3` |
| 19 | `platform.followers.twitch` | PlatformTotalsHelpers.cs:19-27 | yes (:29) | yes: a grouped count, `1,234` |
| 20 | `platform.isLive` | PlatformLiveHelpers.cs:40-48 | yes (:23) | yes: `true` when that platform's status is live |
| 21 | `platform.link.kick` | PlatformLinkHelpers.cs:20 and :44-53 | yes (:25) | yes: PlatformNames.cs:47 and :53-54 build `https://kick.com/<slug>` |
| 23 | `platform.link.youtube` | PlatformLinkHelpers.cs:21 and :44-53 | yes (:26) | yes: PlatformNames.cs:48-49 and :53-54 build `https://youtube.com/channel/<id>` |
| 25 | `platform.links` | PlatformLinkHelpers.cs:32-41 | yes (:28) | yes: the addresses without https (PlatformNames.cs:43-51) joined with ` · ` (PlatformText.cs:24) |
| 26 | `platform.live.count` | PlatformLiveHelpers.cs:31-39 | yes (:22) | yes: the number of live platforms, `3` |
| 28 | `platform.messages.stream` | PlatformTotalsHelpers.cs:28 and :36-55 | yes (:30) | yes: the platform's TotalMessages for the stream window, `120` |
| 30 | `platform.top` | PlatformConnectedHelpers.cs:36-46 | yes (:32) | yes: the live platform with the most viewers, by name, `Twitch` (PlatformText.cs:41-42) |
| 32 | `platform.user.icon` | PlatformSeedHelpers.cs:23-27 | yes (:13) | yes: PlatformNames.cs:23-25 give purple, green and red dots; `🟣` is Twitch |
| 34 | `platform.viewers.breakdown` | PlatformViewerHelpers.cs:36-47 | yes (:19) | yes: `Name count` per live platform joined with ` · ` |
| 36 | `platform.viewers.share` | PlatformViewerHelpers.cs:48-65 | yes (:20) | yes: 10 of 60 viewers is 16.7, rounded away from zero, gives `17%` |
| 37 | `platform.viewers.total` | PlatformViewerHelpers.cs:20-32 | yes (:15) | yes: the sum over live platforms, 42 + 10 + 8 = `60` |
| 39 | `platform.viewers.youtube` | PlatformViewerHelpers.cs:35 and :68-78 | yes (:18) | yes: the live viewer count, `8`; empty when the platform is not live or not linked |

The URL examples (page lines 21-25) are the reader's own channel links with a placeholder slug, in the shape PlatformNames.cs:43-54 builds. They were not fetched: the value is plainly the reader's own.

## Intro check

- "Helpers on this page: `{platform.*}`." True: all 25 keys start with `platform.`.
- "These helpers read the platforms the channel streams to, such as Twitch, Kick and YouTube." True: the rows read the channel's linked platforms and their status (PlatformConnectedHelpers.cs, PlatformLiveHelpers.cs, PlatformViewerHelpers.cs), and the known platforms are Twitch, Kick and YouTube (PlatformNames.cs:21-26).
- "Use them to show viewers and links for every platform." True: viewer rows (PlatformViewerHelpers.cs:20-78) and link rows (PlatformLinkHelpers.cs:17-53) cover each platform.
- The intro names no helper that is missing from the table.

## Row count

25 table rows. docs-work/helper-groups.md:38 gives Count 25 for /reference/templates/platform. The front matter says 25. Match.

## Product defects (not a page fault)

None found in the sampled rows.
