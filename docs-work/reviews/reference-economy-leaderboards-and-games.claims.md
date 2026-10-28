# Claims: /reference/economy/leaderboards-and-games

Product repo: NomNomzBot, master, read only. Paths are relative to the product repo root.

| Claim | Page line | Proof (file:line) | Verdict |
| --- | --- | --- | --- |
| Leaderboards live on the Leaderboards tab of Economy | 6 | dashboard/src/views/dashboard/economy/EconomyView.vue:57,134; economy/i18n/en.json tabs.leaderboards "Leaderboards", title "Economy" | true |
| A leaderboard ranks viewers by the currency | 7 | server/src/NomNomzBot.Infrastructure/Economy/EconomyLeaderboardService.cs:286-318 | true |
| Moderator and up may read, write, delete | 11 | ActionDefinitionSeeder.cs:51 (Mod = 10), 467-469; EconomyLeaderboardsController.cs:45,58,95 | true |
| Tab hidden without read | 12 | EconomyView.vue:43-44,62-64,70 (tabs filtered by canRead) | true |
| Empty text "No leaderboards yet." | 17 | LeaderboardsPanel.vue:80; en.json leaderboards.empty | true |
| New leaderboard button opens New leaderboard dialog | 18-19 | EconomyView.vue:113-121; LeaderboardDialog.vue template title; en.json new, dialog.newTitle | true |
| Save leaderboard closes dialog | 21-22 | LeaderboardDialog.vue submit (open.value = false); en.json dialog.save | true |
| Choices and defaults table | 24-30 | LeaderboardDialog.vue:31-33 (lists), 42-46 (defaults balance/channel/alltime/10/true), Input min 1 max 100; en.json metrics/periods/scopes/dialog labels | true |
| Jar field when One jar; "Pick a jar." | 32-34 | LeaderboardDialog.vue Field v-if scope==='jar'; submit jarRequired check; en.json dialog.jarRequired | true |
| Row detail "scope · period · top N" | 36 | LeaderboardsPanel.vue detail binding; en.json leaderboards.detail | true |
| Private badge when not public | 37 | LeaderboardsPanel.vue StatusBadge v-if !row.isPublic; en.json private | true |
| Balance is point in time, period ignored | 43 | EconomyLeaderboardService.cs:301 (windowStart null for balance) | true |
| Earned/Spent over the period | 44-45 | EconomyLeaderboardService.cs:302-303, 320-361 | true |
| Daily/Weekly/Monthly start points, UTC; All time = lifetime | 47-50 | EconomyLeaderboardService.cs:367-377 | true |
| Opted-out viewers are not ranked | 52 | EconomyLeaderboardService.cs:294-297, 307, 339 | true |
| Only Whole channel ranks; One jar ranks nobody | 56-57 | EconomyLeaderboardService.cs:291-292 (returns empty for non-channel scope) | true |
| !leaderboard answers top 5 in the bot voice | 63-64 | Infrastructure/Commands/Builtins/LeaderboardBuiltin.cs:37 (TopN = 5), 96-110 (composer); BuiltinResponseSlots.Core.cs:186 key "leaderboard" | true |
| Picks first public, else first | 65-66 | LeaderboardBuiltin.cs:49-52 | true |
| Default answers for none / empty | 70-71 | LeaderboardBuiltin.cs:63, 87 | true |
| Edit dialog opens with saved values | 75-77 | LeaderboardsPanel.vue edit button; LeaderboardDialog.vue watch(open) fills from config; en.json edit, dialog.editTitle | true |
| Delete confirm text | 78-80 | LeaderboardsPanel.vue ConfirmDialog; en.json confirmTitle, confirmBody, confirmAction, delete | true |
| Dashboard Games shows Coming soon | 84-90 | layouts/dashboard/navigation.ts:258-261 (dashboard-games, label games); no route imports GamesView (only its spec); scaffold/route.ts scaffoldRoutes -> ComingSoonView; i18n/locales/en.json:831, 912 | true |
| Viewer Leaderboards, Points and store, Games show Coming soon | 91-93 | views/viewer/nav/route.ts:26-28; i18n/locales/en.json:873-875 | true |

Map row check: the row says Games and the viewer leaderboards, store and games pages open Coming soon. The code agrees (GamesView.vue exists but no router file imports it).
