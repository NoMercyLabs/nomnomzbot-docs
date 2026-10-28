# Fact-check: /reference/community/viewer-pages
Verdict: PASS
Reviewed: C:\Projects\NoMercyLabs\nomnomzbot-docs\src\content\reference\en\community\viewer-pages.mdx
Reviewed-SHA: f2b9f01d7de98248

Third pass, on the page as it is now (151 lines). The intro changed: it names both chat pages and is split into paragraphs. I read the whole page against the code again.
Paths are relative to C:\Projects\NoMercyLabs\nomnomzbot\dashboard\src unless named.

## Claims checked

| Page line | Claim | Evidence (code that runs) | Result |
| --- | --- | --- | --- |
| 6-7 | Viewer pages show the viewer's own data in one channel | MeView.vue and AccountView.vue read only the viewer's own summary, queue, standing, pronouns, accounts and voice | true |
| 9-10 | The two chat pages show other people's messages: **Chat** and the chat of a **More on Twitch** channel | views/dashboard/chat/route.ts:41-49 (`viewer-chat`, `viewerChat: true`); route.ts:51-62 (`viewer-external-chat`); realtime/useExternalChat.ts:34-75 (lines from the hub for that channel); locales/en.json:968 | true |
| 12-13 | Anyone signed in may open them | router/viewer.ts:22-25 (`requiresAuth`); `chat:viewer:read` Default = Floor = Everyone (server/src/NomNomzBot.Infrastructure/Content/Identity/ActionDefinitionSeeder.cs:552-554, 661) | true |
| 17-18 | **My channels**, **Live now**, **Last seen** with a date | views/viewer/channels/i18n/en.json:4-6; MyChannelsView.vue (Badge and lastSeen) | true |
| 20-21 | **Open** opens My channel | MyChannelsView.vue RouterLink `viewer-me` | true |
| 22-24 | **Find a channel**, type and pick, **Visit a channel** opens the viewer pages | layouts/ViewerLayout.vue:38; locales/en.json:967; layouts/dashboard/ViewerChannelGroups.vue:40-44, 67-73 (pushes `viewer-me` or `viewer-chat`) | true |
| 26-28 | **More on Twitch** is not served, opens only its chat, live lines, can send, no history, no moderation | ViewerChannelGroups.vue:45-48 (`onBot === false`), 56-63; useExternalChat.ts:34-77 (lines start empty, only hub pushes, no fetch of past lines; `send` calls `sendTwitchChat`); ExternalChatView.vue:35-46 (send box), no ban, timeout or delete control in the file | true |
| 30-31 | First live channel filled, others outline | MyChannelsView.vue `primaryId` = first `isLive`; variant default or outline | true |
| 33-34 | **Channels you manage** opens the management dashboard | channels en.json:8; RouterLink `/app/u/<login>` | true |
| next | Empty text | channels en.json:12 | true |
| table | Seven pages, labels, phone labels | views/viewer/nav/viewerNavigation.ts:31-74; locales/en.json:809, 835, 869-878 | true, 7 of 7 names, 7 of 7 phone labels |
| table | Row under header, bottom bar on phone | views/viewer/nav/ViewerNav.vue:26, 41 | true |
| table | Four Coming soon pages: Now playing, Leaderboards, Points and store, Games | views/viewer/nav/route.ts:24-29 (exactly 4 routes) | true, 4 of 4 |
| table | Says planned and not built yet | locales/en.json:911-913; ComingSoonView.vue:31-38 (no `about` key for `viewer.*`) | true |
| My channel | Title "Your stats in", **Open chat** | views/viewer/me/i18n/en.json:4, 6; MeView.vue:97-106 | true |
| My channel | Seven tiles, labels, conditions | MeView.vue:119-143, 63-79; me en.json:9-20 | true |
| My channel | Own songs, place from next song, total in footer, closed text, panel hidden when off | me en.json:26-32; MeView.vue:47-49, 146-182 | true |
| Me | Title "You in", standing names | views/viewer/account/i18n/en.json:4, 8-13; AccountView.vue:38-59 | true |
| Me | Four panels | AccountView.vue:69-87 | true |
| Pronouns | Texts, saves on pick, **Not set** | account en.json:17-21; PronounsPanel.vue:35-43, 58-82 | true |
| Linked accounts | **Main sign-in**, dialog, consequence, link again | account en.json:26-35; LinkedAccountsPanel.vue:77-107 | true |
| Your voice | Texts, search, use, badge, reset, closed text | account en.json:44-54; ChannelVoicePanel.vue:69-109 | true |
| My data | **Open my data** opens Your data page | account en.json:57-59; AccountView.vue:81-84 | true |
| Troubleshooting | "This channel is not set up here." and **Try again** | me en.json:5, 7; MeView.vue:110-112; AccountView.vue:62-66 | true |

## Conventions

No source citation, no action key, no numbered level, no license name, and no hosting text, so no marker is needed. The Coming soon pages are described only by the label and "not built yet". Pass.

## Notes (not failing)

1. A served channel picked in **Find a channel** opens **My channel** or **Chat**, by where the finder sits (ViewerChannelGroups.vue:67-73). "Opens that channel's viewer pages" is true.
2. The standing badge reads "Your standing here: Viewer", not only "Viewer". The "Shown as" column is acceptable.
3. A linked-account row without an id also has no **Unlink** button (LinkedAccountsPanel.vue:87). This is an edge case only.
