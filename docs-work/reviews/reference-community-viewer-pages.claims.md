# Claims: /reference/community/viewer-pages

Paths are in the product repo C:\Projects\NoMercyLabs\nomnomzbot (read only). `V` = dashboard/src/views/viewer.

| Claim | Source |
| --- | --- |
| Viewer pages need sign-in only (anyone signed in) | dashboard/src/router/viewer.ts:22-25 (requiresAuth) |
| Own data only, no other people | V/channels/MyChannelsView.vue:12-14; server/src/NomNomzBot.Api/Controllers/V1/ViewerSelfController.cs:22-26 |
| Landing page **My channels**, Live now / Last seen {date} | V/channels/route.ts:22-25; V/channels/i18n/en.json:4-6; MyChannelsView.vue:95-98 |
| List = channels with viewer activity | ViewerSelfController.cs:37-38 |
| **Open** opens My channel | MyChannelsView.vue:101-108 (viewer-me); V/me/route.ts:16-18 |
| First live channel filled, others outline | MyChannelsView.vue:35-37, 101-103 |
| **Find a channel** in header | dashboard/src/layouts/ViewerLayout.vue:37; dashboard/src/i18n/locales/en.json:948; V/channels/i18n/en.json:13 |
| **Channels you manage** opens management dashboard | MyChannelsView.vue:115-121 (/app/u/<login>); V/channels/i18n/en.json:8 |
| Empty text | V/channels/i18n/en.json:12; MyChannelsView.vue:77-80 |
| Seven pages, labels and phone labels | V/nav/viewerNavigation.ts:30-74; locales/en.json frame.nav.viewer.* (myChannel, chat, nowPlaying, leaderboards, pointsStore, games, me, ranks, store) and frame.nav.home, frame.nav.music |
| Row under header, bottom bar on phone with short labels | V/nav/ViewerNav.vue:15-16, 29-30, 139, 154 |
| Four pages are Coming soon | V/nav/route.ts:87-103 |
| Coming soon text "planned and not built yet" | dashboard/src/views/dashboard/scaffold/ComingSoonView.vue:31-39,49; locales/en.json frame.comingSoon.title/description |
| Find a channel groups: Visit a channel opens viewer pages; More on Twitch opens only its chat | dashboard/src/layouts/dashboard/ViewerChannelGroups.vue:40-73; locales/en.json:967-968; dashboard/src/views/dashboard/chat/route.ts:51-62; dashboard/src/router/viewer.ts:33 |
| Twitch-only chat: live lines, send, no history, no moderation | dashboard/src/views/dashboard/chat/ExternalChatView.vue:12-15 (comment; claim) |
| Two chat pages show other people's messages: Chat and the More on Twitch chat | dashboard/src/views/dashboard/chat/route.ts:40-62; ExternalChatView.vue:12-15 |
| Chat page is the viewer chat (shows other people's messages) | dashboard/src/views/dashboard/chat/route.ts:40-48 |
| My channel title, Open chat | V/me/i18n/en.json:4,6; V/me/MeView.vue:97-106 |
| Stat tiles and values | V/me/MeView.vue:119-143, 66-78; V/me/i18n/en.json:9-20 |
| Song requests / Points tiles conditional | MeView.vue:129, 134 |
| Queue: own songs, place from next song, total | V/me/i18n/en.json:26-32; MeView.vue:155-181; ViewerSelfController.cs:93-94 |
| Closed text when not accepting requests | MeView.vue:46-48, 146-153; V/me/i18n/en.json:29 |
| Queue panel hidden when song requests off | MeView.vue:156 |
| Me title and standing badge | V/account/i18n/en.json:4,8-13; V/account/AccountView.vue:37-49, 56-59 |
| Four panels | AccountView.vue:69-86 |
| Pronouns text, fields, Not set, saves on pick | V/account/i18n/en.json:17-22; V/account/PronounsPanel.vue:38-43, 58-91 |
| Linked accounts, Main sign-in, no Unlink on it, dialog, consequence | V/account/i18n/en.json:26-35; V/account/LinkedAccountsPanel.vue:77-109 |
| Your voice texts, search, use, reset, closed | V/account/i18n/en.json:44-54; V/account/ChannelVoicePanel.vue:59-109 |
| My data opens Your data page | V/account/i18n/en.json:57-59; AccountView.vue:76-84 |
| Not set up here + Try again | V/me/i18n/en.json:5,7; MeView.vue:110-112; AccountView.vue:62-66 |
