# Targeted final review — 2026-11-06

Verdict: PENDING
Reviewed: src/content/reference/en/economy/leaderboards-and-games.mdx
Reviewed-SHA: acd67cebb41fd23aa74d41a0340c36f7152ad56b60958bdf0ad4104bf05c4342
Reviewed-SHA256: acd67cebb41fd23aa74d41a0340c36f7152ad56b60958bdf0ad4104bf05c4342
Reviewer: final-features correction author; self-review, not independent PASS
Product-Revision: 2dfefbb0c393f439954d79b32ac11511678d7f44 plus working tree

The full article was read editorially. The correction was independently traced from the staged lead to current source, then applied by this reviewer. This is targeted author verification, not a new exhaustive source audit, independent final-text approval or runtime test. See [final-features.md](../ecosystem-validation/final-features.md) for exact source anchors, coverage and remaining limits.

## Historical reviews

The original records below are preserved verbatim and apply only to their recorded hashes.

# Independent source verification: /reference/economy/leaderboards-and-games
Verdict: PASS
Reviewed: src/content/reference/en/economy/leaderboards-and-games.mdx
Reviewed-SHA: 727590461211cf954641607d7dc3612d8ddc1bec4334b12ddd67be79a30e43d9

## Independent overhaul review, 2026-11-05

EconomyLeaderboardService.cs:287-465; LeaderboardBuiltin.cs:30-110; viewer route.ts:24-28: wallet/ledger windows, UTC boundaries, opt-outs, actual jar-contribution ranking, private-board fallback/top five and placeholders.

Reviewed independently of the article author, in actual navigation order. Current product source 54da8b631 and relevant changes since b12f4f696 were read without starting the bot, executing platform actions or changing channel data. This verdict is source verification, not proof of live platform delivery. See [review-moderation-economy-community.md](../overhaul/review-moderation-economy-community.md) for the review scope and findings.

## Prior review history

The earlier text below is retained as history; it does not independently approve a later article hash.

Author source audit: 2026-11-04. Independent review of the revised article is pending; the historical PASS below does not approve this text.
Product source: C:/Projects/NoMercyLabs/nomnomzbot at b12f4f696, inspected without starting the bot or changing data.

Explains balance versus activity rankings, corrects the stale empty-jar claim and surfaces the private-board chat fallback.

| Revised claim or retained core behavior | Current source opened |
| --- | --- |
| UI defaults, choices and private badge | dashboard/src/views/dashboard/economy/components/LeaderboardDialog.vue; components/LeaderboardsPanel.vue; i18n/en.json:173-230 |
| Whole-channel ranking and period handling | server/src/NomNomzBot.Infrastructure/Economy/EconomyLeaderboardService.cs:287-360,445-465 |
| Jar contributor ranking is implemented and ignores selected metric | server/src/NomNomzBot.Infrastructure/Economy/EconomyLeaderboardService.cs:371-445 |
| Command chooses first public then first private and returns top five | server/src/NomNomzBot.Infrastructure/Commands/Builtins/LeaderboardBuiltin.cs:30-110 |
| Coming-soon viewer screens | dashboard/src/views/viewer/nav/route.ts:24-28; dashboard/src/router/dashboard.ts |

The practical scenarios are recommended uses of these verified controls, not promises of a new feature. Unchanged reference details were compared with the current view, labels and relevant implementation. Runtime platform calls were not performed.

## Historical evidence

The prior review is retained for its detailed claim inventory. Its verdict and file hashes refer to the earlier article; where the new evidence differs, the new evidence takes precedence.

# Fact-check: /reference/economy/leaderboards-and-games
Historical verdict: PASS
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
