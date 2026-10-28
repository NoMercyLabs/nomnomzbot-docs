# Claims: /reference/getting-started/dashboard-tour

Paths are in the product repo (C:\Projects\NoMercyLabs\nomnomzbot). "en.json" = dashboard/src/i18n/locales/en.json; "home en.json" = dashboard/src/views/dashboard/home/i18n/en.json. Lines for labels and layout are from slice s13 and s05, with the source lines re-read this run where marked (R).

| Claim | Evidence |
| --- | --- |
| Sidebar groups, page order and members | dashboard/src/layouts/dashboard/navigation.ts:73-294 (R: group keys 75,87,98,148,177,243,284); group labels en.json:921-928 (R) |
| Home, People, Settings groups have one page, so no heading; group with 2+ pages folds | useNavigation.ts:28-29,126-127; DashboardSidebar.vue:43-64 |
| Group of open page stays open; fold choice remembered (nnz.nav.folds) | useNavigation.ts:43-47,134-149 |
| Channel switcher on top, account menu at bottom | DashboardSidebar.vue:36-75 |
| Library, Gallery, Games open Coming soon page; text | scaffold/route.ts:27-50 (R); en.json:911-913 (R); navigation.ts:228-239,257-262 |
| A page you may not read has no entry; all show until access is known | useNavigation.ts:64-81 (R) |
| Viewer chat hides for someone with chat:read | navigation.ts:107-113 (`unless`); useNavigation.ts:74-75 (R) |
| Home and Chat default Mod, lowerable to VIP | server/src/NomNomzBot.Infrastructure/Content/Identity/ActionDefinitionSeeder.cs:275,406 (R, MFloor + comment 272-274) |
| Viewer chat: any signed-in viewer | ActionDefinitionSeeder.cs:655-661 (R) |
| People: Mod | ActionDefinitionSeeder.cs:403 (R) |
| Settings: broadcaster only (setup:write) | navigation.ts:286-291; ActionDefinitionSeeder.cs:437 (R) |
| Settings sidebar groups, back link, back leads to first readable page | settingsNavigation.ts:39-100; en.json:937-942 (R); navigation.ts:308-323; useNavigation.ts:94-110 |
| Readability and Your data open to all signed in | settings/route.ts:63-74; your-data/route.ts:22 |
| Breakpoints 840 / 600 | composables/useLayout.ts:20,24; DashboardLayout.vue:69-70,105 |
| Rail tooltip, tinted open tile | NavRail.vue:25-55 |
| Header bar below 840 holds switcher and account menu | DashboardLayout.vue:75-86 |
| Bottom bar: Home, Chat, Stream, Commands flagged; >5 shows 4 + More; drawer keeps groups | navigation.ts:82,105,119,184 (R); bottomBarSplit.ts:22-35; BottomBar.vue:72-122 |
| Home header Live on / Offline, stream line, main button | home/HomeView.vue:58-126,155-179 (R 150-179); home en.json "live","offline","openChat","editStream","lastStream" |
| Panels gated by keys; panel list | HomeView.vue:128-200 (R: panelKeys) |
| Review queue labels and hint | ReviewQueuePanel.vue:84-119; home en.json queue.* |
| Needs attention Open/Dismiss | NeedsAttentionPanel.vue:53-78 |
| Connections panel rows, Connect, Bot and services | ConnectionsPanel.vue:139-216 |
| Quick actions rows, Snooze 5 min, shoutouts | QuickActionsPanel.vue:189-363; ShoutoutSuggestions.vue:107-124 |
| Happening now / Last stream, events | HappeningPanel.vue:168-183; activityKinds.ts:116-280 |
| Replay text; Mod may replay | HappeningPanel.vue:48-79,201-215; DashboardController.cs:455-458; ActionDefinitionSeeder.cs:434 (R) |
| All events link | HappeningPanel.vue:85-91,176-183 |
| Header tools show with moderation:chat:settings:read (Mod) | FrameActions.vue:25-28 (R); ActionDefinitionSeeder.cs:267 (R) |
| Shield labels, confirm under 768 px | ShieldToggle.vue:33-75; useLayout.ts:22; en.json:992-1000 |
| Shield write default LeadModerator | ActionDefinitionSeeder.cs:269-270 (R) |
| Inbox name, count, empty text, Open/Dismiss | ErrorInbox.vue:65-121; en.json:1003-1009,1080 |
| Server items return after dismiss when problem recurs | api/actionRequired.ts comment above useDismissActionRequired (comment only) |
| Not saved items in memory only | stores/saveErrors.ts:26-27 |
| Channel switcher groups, search, Visit a channel, More on Twitch | ChannelSwitch.vue:54-82,127-196; ViewerChannelGroups.vue:39-120; en.json:946-971 |
| Same page opens; item page goes to Home | ChannelSwitch.vue:97-108; router/channelRoutes.ts:85-102 |
| Recent channels up to 5 | ViewerChannelGroups.vue:78-92; composables/useRecentChannels.ts:18 |
| Account menu items, role word | ProfileMenu.vue:56-174 (R 80-100); en.json:24-25,974-983 |
| View as only for owner | ProfileMenu.vue:86-87 (R) |
| View-as banner, Exit, persists (nnz.viewAs) | ViewAsBanner.vue:24-37; api/viewAs.ts:20,47-73 |
| Keyboard shortcuts dialog text; ? ignored in fields; per-page keys | ShortcutsDialog.vue:34-57; en.json:40-41; composables/useShortcut.ts:29-47 |
| No access screen text | ChannelNoAccess.vue:28-34; en.json:952-953 |
| Shield button hidden until state read; no placeholder | ShieldToggle.vue:53 |

## Round 4 changes

| Claim | Evidence |
| --- | --- |
| Readability open to all, reached from the account menu (Your data claim cut: its only entry is the Settings sidebar, which needs setup:write) | settings/route.ts:49-56; ProfileMenu.vue:58,132-137; navigation.ts:286-291; your-data/route.ts:22 |
| More on Twitch row cell separator restored | table fix only |

## Round 3 changes

| Claim | Evidence |
| --- | --- |
| Each inbox item has Dismiss; most have Open | ErrorInbox.vue:99,111 (factcheck round 3) |
| Not saved stays until dismissed or reload | ErrorInbox.vue:99; stores/saveErrors.ts:36 |
| Recent channels shows without typing; other two groups after typing | ViewerChannelGroups.vue:78; useChannelSearch.ts:25-27 |
| Home is the first sidebar entry (landing claim cut) | navigation.ts:73-84 |
| Switcher and account menu move to top bar below 840 px | DashboardLayout.vue:75-86 |
| Shield button label shows current state | ShieldToggle.vue:52-66 (R) |
| 768 px rule for the dialog | useLayout.ts:22,43-45; ShieldToggle.vue:29,34 |
| Shield default changed on Permissions | ActionDefinitionSeeder.cs:269-270 (seeded role defaults, overridable per channel) |
| Connections platform words Live / Offline / Not connected | home en.json connections.platformLive, platformOffline, notConnected |
| Snooze pushes back the ad break | QuickActionsPanel.vue:218-228; home en.json quick.snooze, snoozesLeft |
| View-as bar on dashboard and viewer pages | DashboardLayout.vue:73; ViewerLayout.vue:28 (R) |
| Viewer preview Exit returns to saved page | api/viewAs.ts:59-75 (R, viewAsReturn) |
| More on Twitch opens a dashboard viewer chat page | ViewerChannelGroups.vue:57-64 (R, viewer-external-chat) |
| "Gives nothing a second time" | cut |

## Round 2 additions

| Claim | Evidence |
| --- | --- |
| Coming soon pages: label "Coming soon", not built (no quote of the about lines, by page-conventions "described by that sentence only") | ComingSoonView.vue:34-49 (R); en.json frame.comingSoon.title |
| Settings group members (examples) | settingsNavigation.ts:39-100 (s13 table rows Bot, Connections, Developers, Access, Account) |
| Readability open to all | views/dashboard/settings/route.ts:49-56 (R, open: true, view readability) |
| Your data open to all | views/dashboard/settings/your-data/route.ts:18-22 (R) |
| Rail and bottom bar both get the top header bar below 840 | DashboardLayout.vue:75-86 |
| Shield mode applies the protections set up on Twitch | en.json:997 "Twitch applies your Shield mode settings to the live channel at once." |
| Account menu role word by channel kind | ProfileMenu.vue:80-83 (R: moderated -> Moderator, else Broadcaster) |
| Not saved: screen went back; try again; Open returns to page | en.json:1007 (R); ErrorInbox.vue:80-103 |
| Visit a channel opens viewer pages; More on Twitch opens that channel's chat | ViewerChannelGroups.vue:39-73 (R: viewer-me / viewer-chat; viewer-external-chat) |
| Item page switches to Home | router/channelRoutes.ts:85-102 (R) |
| ? ignored in text fields | composables/useShortcut.ts:35-47 (R) |
| View-as survives reload | api/viewAs.ts:20-24 (R, stored preview role) |
| Fullscreen only when supported | ProfileMenu.vue:54-56 (R) |
| Pages flash before access known | useNavigation.ts:71-72 (R) |
| Quick actions rows and buttons | QuickActionsPanel.vue:189-363; home en.json quick.* (adTitle, snooze, musicTitle, openQueue, timersTitle, openTimers, pollTitle, pollStart, predictionStart) |
| Bot account Connected / Not in chat; service Connected / Sign in again / Not connected | ConnectionsPanel.vue:174-216; home en.json connections.* |
