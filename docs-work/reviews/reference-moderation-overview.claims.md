# Claims: /reference/moderation/overview

Product repo: NomNomzBot master (read only). Paths are relative to the product repo. D = dashboard/src. S = server/src.
Repair pass after factcheck FAIL (4 findings). All 4 are fixed; rows 5-8, 10-13 are the rewritten claims.
Second repair after factcheck FAIL (SHA c2d4dabff33fd9c7, 1 finding): row 9 rewritten per source and platform; rows 5-7, 10-16 re-checked, unchanged.

| # | Claim | Page section | Proof | Verdict |
| --- | --- | --- | --- | --- |
| 1 | Review queue panel is on the Home page | Intro, Review queue | D/views/dashboard/home/HomeView.vue:41,184; D/i18n/locales/en.json frame.nav.home "Home" | true |
| 2 | Moderation history is in the profile dialog, Moderation tab; a name opens the dialog | Intro, Moderation history | D/components/layout/profile/ProfileView.vue:370-377; D/components/layout/UserName.vue:13,43-46; en.json profile.tabs.moderation | true |
| 3 | Settings group "Access" holds the listed pages | Intro, Where the other tools live | D/layouts/dashboard/settingsNavigation.ts:77-89; en.json frame.nav.settingsPages | true |
| 4 | Panel title, count "{count} waiting", hint text | Review queue | ReviewQueuePanel.vue:84,85,97; D/views/dashboard/home/i18n/en.json queue.title/waiting/hint | true |
| 5 | Seeing the queue needs moderation:queue:read, floor Moderator | Who can use | S/NomNomzBot.Api/Controllers/V1/ModerationController.cs:1680; S/NomNomzBot.Infrastructure/Content/Identity/ActionDefinitionSeeder.cs:242 | true |
| 6 | Allow/Deny need moderation:queue:resolve, floor Moderator; without it the list shows with no buttons | Who can use | ModerationController.cs:1703; ActionDefinitionSeeder.cs:243; ReviewQueuePanel.vue:101-103 | true |
| 7 | Without queue read, the panel shows the error text | Who can use, Panel states | ModerationController.cs:1680 (request refused); ReviewQueuePanel.vue:88-91 (error-text); home en.json queue.error | true |
| 8 | Queue sources: AutoMod hold, chat filter hold (deleted) or flag (left in chat), newcomer gate (deleted first), suspicious user (left alone), heat threshold flag (no message, when no auto timeout ran) | Review queue | S/NomNomzBot.Domain/Moderation/Enums/ModerationQueueSource.cs:15-31; S/NomNomzBot.Infrastructure/Moderation/EventHandlers/ChatFilterExecutionHandler.cs:45-46,158-175,287; S/NomNomzBot.Infrastructure/Moderation/AccountAgeGateExecutor.cs:30-31 (enum doc),77-93,167; EventHandlers/SuspiciousUserHandlers.cs:50-72; EventHandlers/HeatThresholdAutoTimeoutHandler.cs:95-113,224-232; EventHandlers/ModerationQueueEventHandlers.cs:29 (AutoMod) | true |
| 9 | Platform per source: chat filters Twitch-only; AutoMod and suspicious user come from Twitch EventSub events; newcomer gate queues Kick/YouTube when the origin delete succeeded; heat limit flags any platform | Review queue | ChatFilterExecutionHandler.cs:265-275; ModerationQueueEventHandlers.cs:29; SuspiciousUserHandlers.cs:40-72 (channel.suspicious_user.message); AccountAgeGateExecutor.cs:68-93,100-117; ChatPlatformRouter.cs:490; HeatThresholdAutoTimeoutHandler.cs:95-99,125-135,220-232 (SubjectProvider, flag has no platform check) | true |
| 10 | Allow on an AutoMod item releases it to chat; other items only record the decision | Allow an item | S/NomNomzBot.Infrastructure/Moderation/ModerationQueueService.cs:308-352 (relaysToAutoMod, status set locally) | true |
| 11 | Deny on an AutoMod item tells Twitch to drop it; other items only record | Deny an item | ModerationQueueService.cs:308-352 | true |
| 12 | Deny shows Denied and Undo; sent after 6 seconds; Undo cancels; leaving sends at once | Deny an item | ReviewQueuePanel.vue:52-78,108-114; D/composables/useInlineFlow.ts:39 (DEFAULT_UNDO_MS = 6000); en.json common.flow.undo | true |
| 13 | Shield mode badge needs shield mode on and moderation:shieldmode:read | Panel states | ReviewQueuePanel.vue:95; home en.json queue.shieldOn | true |
| 14 | Empty texts live/offline | Panel states | ReviewQueuePanel.vue:88-90; home en.json queue.emptyLive/emptyOffline | true |
| 15 | Row shows sender and message; "Unknown sender" | Review queue | ReviewQueuePanel.vue:44-46,102; home en.json queue.unknownSender | true |
| 16 | History: same roles (moderation:history:read, Mod); no-access text; newest first | Who can use, Moderation history | ActionDefinitionSeeder.cs:251; ProfileHistory.vue:12-13,35,50-53; en.json profile.history.noAccess | true |
| 17 | People page shows the same profile | Moderation history | D/views/dashboard/people/PeopleView.vue:322,534 | true |
| 18 | Entry lines, kinds table, Show older, empty text | Moderation history | ProfileHistory.vue:55-105; en.json profile.history.kinds/by/automatic/timedOutFor/more/empty | true |
| 19 | Moderate one chat line on Chat, one person from the profile dialog | Where the other tools live | D/views/dashboard/chat/components/ChatLine.vue:42; ProfileView.vue:150-154 | true |

## Notes for the reviewer

- Reader notes applied: intro split, profile dialog defined at first use, Deny starts with "Open Home", passive "is sent" made active, the last two-idea sentence split.
- Viewer reports keeps "-": the map row's Links to has no reports page.
- Protection status and lockdown have no dashboard screen; left out as the map row says.
