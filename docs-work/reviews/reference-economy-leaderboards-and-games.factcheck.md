# Fact-check: /reference/economy/leaderboards-and-games
Verdict: PASS
Reviewed: src/content/reference/en/economy/leaderboards-and-games.mdx
Reviewed-SHA: 245bef96db057ce9

Product repo: NomNomzBot master, read only. Paths relative to its root. This judges the current text (sha above).

| Claim | Page line | Product file:line | Verdict |
| --- | --- | --- | --- |
| Leaderboards tab on Economy page | 6, 16 | dashboard/src/views/dashboard/economy/i18n/en.json:12 "Leaderboards"; EconomyView.vue tabs | true |
| Ranks viewers by the channel currency | 7 | server/src/NomNomzBot.Infrastructure/Economy/EconomyLeaderboardService.cs:305-316 (CurrencyAccounts) | true |
| Moderator, Lead moderator, Editor, Broadcaster may read/add/change/delete | 11 | Infrastructure/Content/Identity/ActionDefinitionSeeder.cs:51-54 (Mod 10 < Lead 20 < Editor 30 < Broadcaster 40), 467-469 (config read/write/delete = Mod) | true |
| Tab hidden without read | 12 | EconomyView.vue tab filter by canRead (claims file :43-70) | true |
| "No leaderboards yet." | 17 | economy/i18n/en.json:175 | true |
| New leaderboard / dialog title / Save leaderboard | 18-22 | en.json:174, dialog.newTitle, dialog.save | true |
| Field labels Ranks by, Period, Over, Places shown, Visible to viewers | 24-30 | en.json dialog.metric/period/scope/topN/public | true |
| Choices Balance/Earned/Spent; All time/Daily/Weekly/Monthly; Whole channel/One jar | 26-28 | LeaderboardDialog.vue:31-33; en.json metrics, periods, scopes | true |
| Defaults Balance, All time, Whole channel, 10, On | 26-30 | LeaderboardDialog.vue:42-46 | true |
| Places 1 to 100 | 29 | LeaderboardDialog.vue:170-171 (min 1, max 100) | true |
| Jar field, "Pick a jar." | 32-34 | en.json dialog.jar, dialog.jarRequired; dialog v-if scope jar | true |
| Row text "Whole channel · All time · top 10" after the metric | 36 | LeaderboardsPanel.vue:96-102; en.json:178 | true |
| Private badge | 37 | LeaderboardsPanel.vue:107; en.json:177 | true |
| Balance ignores period | 43 | EconomyLeaderboardService.cs:301 | true |
| Earned / Spent over the period (ledger window) | 44-45 | EconomyLeaderboardService.cs:302-303, 330-334 | true |
| Daily/Weekly/Monthly starts, UTC; All time lifetime | 47-50 | EconomyLeaderboardService.cs PeriodStart (now.Date; minus DayOfWeek, Sunday=0; first of month UTC; default null) | true |
| Opted-out viewers not ranked | 52 | EconomyLeaderboardService.cs:294-297, 308, 332 | true |
| Only Whole channel ranks; One jar ranks nobody | 56-57 | EconomyLeaderboardService.cs:291-292 | true |
| !leaderboard, top 5, one bot voice via composer | 63-64 | Infrastructure/Commands/Builtins/LeaderboardBuiltin.cs:37 (TopN 5), composer with channel Personality | true |
| First public, else first | 65-66 | LeaderboardBuiltin.cs:49-52 | true |
| Default answers none / empty | 70-71 | LeaderboardBuiltin.cs NeutralFallback strings | true |
| Edit leaderboard, dialog with saved values | 75-77 | en.json edit, dialog.editTitle; LeaderboardDialog.vue watch(open) fills from config | true |
| Delete leaderboard, "Delete this leaderboard?", "The ranking stops. Balances stay." | 78-80 | en.json:180-183 | true |
| Dashboard Games shows Coming soon | 84-89 | layouts/dashboard/navigation.ts:258-261; no non-spec import of GamesView; router/__tests__/gamesComingSoon.spec.ts; i18n/locales/en.json:831, 911-915 | true |
| Viewer Leaderboards, Points and store, Games show Coming soon | 90-92 | views/viewer/nav/route.ts:26-28; i18n/locales/en.json:873-875 | true |

## Links
- /reference/economy/currency-and-balances: map.md row 92. OK.
- /reference/community/viewer-pages: map.md row 106. OK.

## Conventions
No people's names, no action keys, no numbered levels, no license name, no hosting or price mention (marker not needed). American English. No NoMercyBot spelling. One bot voice described (line 64). No example scripts.

## Notes (non-blocking)
- Line 48 "the last Sunday": on a Sunday the window starts at midnight today (DayOfWeek = 0). "the most recent Sunday" would read more exactly.
- Places 1 to 100 is the dialog input range; server-side bound not checked (not checked).
