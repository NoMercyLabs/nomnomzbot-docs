# Fact check: src/content/reference/en/moderation/bans-and-blocked-terms.mdx
Verdict: PASS
Reviewed: src/content/reference/en/moderation/bans-and-blocked-terms.mdx
Reviewed-SHA: f86bf831a7aad311

Product repository: NomNomzBot master, read only. BN = dashboard/src/views/dashboard/settings/banned; BT = dashboard/src/views/dashboard/settings/blocked-terms; LOC = dashboard/src/i18n/locales/en.json; ADS = server/src/NomNomzBot.Infrastructure/Content/Identity/ActionDefinitionSeeder.cs; AAS = server/src/NomNomzBot.Infrastructure/Identity/ActionAuthorizationService.cs; MC = server/src/NomNomzBot.Api/Controllers/V1/ModerationController.cs; NAV = dashboard/src/layouts/dashboard/settingsNavigation.ts.

| Claim | Page line | Supported by | Status |
| --- | --- | --- | --- |
| Page names **Banned people**, **Blocked terms** | 6-7 | LOC:902-903; BN/BannedView.vue:59; BT/BlockedTermsView.vue:67 | true |
| Both pages are in the **Access** group | 8 | NAV:77 (key settings.access), 85-86; LOC:941 "Access" | true |
| Title line reads **Moderation** / page name | 9 | BN/i18n/en.json:5 and BT/i18n/en.json:5 crumb "Moderation"; components/layout/PageHeader.vue:53-57 (after:content '/') | true (see Notes) |
| Bans list is everyone banned, as Twitch holds it | 13 | BN/i18n/en.json:6; MC:575-580 (read via Twitch moderation API) | true |
| Blocked terms are what Twitch holds back; Twitch keeps both lists and enforces them | 14-17 | BT/i18n/en.json:6; MC:883-885 | true |
| Moderator opens both pages | 25 | BN/route.ts:21 moderation:read; BT/route.ts:21 moderation:filter:read; ADS:241, 255 (both Mod); MC:575, 884 | true |
| Moderator may unban | 25 | BN/BannedView.vue:80 can('moderation:unban'); MC:588-592 DELETE bans/{userId}; ADS:247 (Mod) | true |
| Lead moderator may block and unblock | 26 | BT/BlockedTermsView.vue:42,73,98 moderation:blocklist:write; MC:901-927; ADS:287 (LeadModerator) | true |
| Editor and Broadcaster may do all of it | 27-28 | ADS:51-54 (Mod 10, LeadModerator 20, Editor 30, Broadcaster 40); AAS:81 `if (callerLevel >= required) return Result.Success(true);` - higher level includes lower rights, opened and confirmed | true |
| Role labels Moderator, Lead moderator, Editor, Broadcaster | 25-28 | LOC:482-485 | true |
| Without the right: no **Unban**; no add panel and no **Unblock** | 30-31 | BN/BannedView.vue:80; BT/BlockedTermsView.vue:73 (v-if canEdit on panel), 98 | true |
| Panel **Banned people** | 36 | BN/i18n/en.json:7 | true |
| Row: name and "Banned by ... when"; with reason: reason, dot, then that text | 38-39 | BN/BannedView.vue:39-48, 77-78; BN/i18n/en.json:10 | true |
| Empty text "Nobody is banned in your channel." | 41 | BN/i18n/en.json:8 | true |
| **Unban** lifts the ban; row leaves the list | 46-47 | BN/BannedView.vue:50-54; dashboard/src/api/bans.ts:52-62 | true |
| No confirmation; banning again undoes it | 49-50 | BN/BannedView.vue:12-13, 86 (direct click) | true |
| Unban error "{name} could not be unbanned." | 51 | BN/i18n/en.json:12; BN/BannedView.vue:52 | true |
| Panels **Block a word or phrase**, **Blocked now** | 56 | BT/i18n/en.json:7, 11 | true |
| **Block** active only with text; Enter submits; field empties; term appears | 57-60 | BT/BlockedTermsView.vue:45-55, 77 (form submit), 84; api/blockedTerms.ts:64 | true |
| Trim; spaces only keeps **Block** off | 62-63 | BT/BlockedTermsView.vue:43, 46, 84 | true |
| Block error "The term could not be blocked:" + reason | 64 | BT/i18n/en.json:15; BT/BlockedTermsView.vue:52-53 | true |
| Empty "Nothing is blocked yet." | 66 | BT/i18n/en.json:12 | true |
| **Unblock** removes the term | 71-72 | BT/BlockedTermsView.vue:57-62, 106; api/blockedTerms.ts:86; MC:927 | true |
| No confirmation; blocking again undoes it | 74-75 | BT/BlockedTermsView.vue:12-14 | true |
| Unblock error text | 76 | BT/i18n/en.json:16 | true |
| Load error texts | 83 | BN/i18n/en.json:9; BT/i18n/en.json:14 | true |
| **Try again** reloads the list | 84 | components/layout/PanelCard.vue:192-193; LOC:81; BN/BannedView.vue:70; BT/BlockedTermsView.vue:94 | true |
| Links /reference/settings/permissions, /reference/moderation/linked-channels, /reference/moderation/automod-and-chat-filters are map rows | 21, 90-91 | docs-work/map.md:112, 91, 85 | true |

Conventions: no people's names, no action keys, no numbered levels, no license name, no hosting or price mention, no NoMercyBot, no British spelling, no angle-bracket placeholder (grep run). Bot speech: none described.

## Notes (not blocking)

- The roles table gives the default levels. A broadcaster can change an action's level on Permissions (AAS:299 EffectiveRequiredLevel with override). A sentence "These are the defaults" would be more exact.
- The crumb "Moderation /" hides on a narrow pane (PageHeader.vue:55 `hidden ... @xl:inline`).
- Line 38 "Banned by a moderator" is an example; the real line shows the moderator's name (BN/BannedView.vue:41).
- The writer's claims file cites moderation:read for the Blocked terms route; the route uses moderation:filter:read (BT/route.ts:21). Both default to Moderator, so the page claim stands.
