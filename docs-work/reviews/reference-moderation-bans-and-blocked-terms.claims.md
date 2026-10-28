# Claims: /reference/moderation/bans-and-blocked-terms

Product repository: NomNomzBot, master, read only. BN = dashboard/src/views/dashboard/settings/banned; BT = dashboard/src/views/dashboard/settings/blocked-terms; LOC = dashboard/src/i18n/locales/en.json; ADS = server/src/NomNomzBot.Infrastructure/Content/Identity/ActionDefinitionSeeder.cs; NAV = dashboard/src/layouts/dashboard/settingsNavigation.ts; PH = dashboard/src/components/layout/PageHeader.vue; PC = dashboard/src/components/layout/PanelCard.vue.

Repair after reader review: header place named, "lift" replaced by Unban, Editor row added, reason order stated, `{name}` placeholder put in backticks (no angle brackets left on the page), Retry control named **Try again**, stray period removed, Permissions link added on first role use (the dispatch brief asked for it; the route is a map row, /reference/settings/permissions).

| Claim | Page line | Proof | Verdict |
| --- | --- | --- | --- |
| Page names **Banned people** and **Blocked terms** | 6-7 | LOC:902-903; BN/BannedView.vue:59; BT/BlockedTermsView.vue:67 | true |
| Both pages sit in the **Access** settings group | 8 | NAV:77,85-86; LOC:941 | true |
| The top title line shows the crumb **Moderation**, a "/" and then the page title | 9 | PH:53-57 (crumb before title, after:content '/'); BN/i18n/en.json:5; BT/i18n/en.json:5; BN/BannedView.vue:58-61 | true |
| Bans list is everyone banned, as Twitch holds it | 13, 16-17 | BN/i18n/en.json:6 | true |
| Blocked terms are what Twitch holds back; Twitch keeps the list and enforces it | 14, 16-17 | BT/i18n/en.json:6 | true |
| Moderator opens both pages | 25 | BN/route.ts:21 (moderation:read); BT/route.ts:21; ADS:241 (moderation:read = Mod) | true |
| Moderator may unban | 25 | BN/BannedView.vue:80 (moderation:unban); ADS:247 (Mod) | true |
| Lead moderator may block and unblock | 26 | BT/BlockedTermsView.vue:42,73,98 (moderation:blocklist:write); ADS:287 (LeadModerator) | true |
| Editor and Broadcaster may do all of it (levels above Lead moderator) | 27-28 | ADS:51-54 (Mod 10, LeadModerator 20, Editor 30, Broadcaster 40) | true |
| Role labels Moderator, Lead moderator, Editor | 25-27 | LOC:482-484 | true |
| No Unban button without the right; no add panel or Unblock without the right | 30-31 | BN/BannedView.vue:80; BT/BlockedTermsView.vue:73,98 | true |
| Panel title **Banned people** | 36 | BN/i18n/en.json:7; BN/BannedView.vue:66 | true |
| Row shows name and "Banned by {name} {when}"; with a reason: reason, dot, then that text | 38-39 | BN/BannedView.vue:39-48,77-78; BN/i18n/en.json:10 | true |
| Empty text | 41 | BN/i18n/en.json:8 | true |
| Unban action; row leaves (list refetched) | 46-47 | BN/BannedView.vue:50-54,86; dashboard/src/api/bans.ts:64 | true |
| No confirm; banning again undoes it | 49-50 | BN/BannedView.vue:12-13,86; BN/i18n/en.json:6 | true |
| Unban error text "{name} could not be unbanned." | 51 | BN/i18n/en.json:12; BN/BannedView.vue:52 | true |
| Panels **Block a word or phrase** and **Blocked now** | 56 | BT/i18n/en.json:7,11 | true |
| Block active only with text; Enter submits; field empties on success; term appears | 57-60 | BT/BlockedTermsView.vue:45-55,77,84; dashboard/src/api/blockedTerms.ts:56,77 | true |
| Text trimmed; spaces-only keeps Block off | 62-63 | BT/BlockedTermsView.vue:43,46,84 | true |
| Block error text with reason | 64 | BT/i18n/en.json:15; BT/BlockedTermsView.vue:52-53 | true |
| Empty list text | 66 | BT/i18n/en.json:12 | true |
| Unblock removes term from list | 71-72 | BT/BlockedTermsView.vue:57-62,106; dashboard/src/api/blockedTerms.ts:100 | true |
| No confirm; blocking again undoes it | 74-75 | BT/BlockedTermsView.vue:12-14,104 | true |
| Unblock error text | 76 | BT/i18n/en.json:16 | true |
| Load error texts | 83 | BN/i18n/en.json:9; BT/i18n/en.json:14 | true |
| Retry control is labeled **Try again** and reloads the list | 84 | PC:192-193; LOC:81; BN/BannedView.vue:70; BT/BlockedTermsView.vue:94 | true |
