# Fact-check: /reference/community/analytics
Verdict: PASS
Reviewed: C:\Projects\NoMercyLabs\nomnomzbot-docs\src\content\reference\en\community\analytics.mdx
Reviewed-SHA: f6f057b1e042ff46

Paths are relative to C:\Projects\NoMercyLabs\nomnomzbot. AEN = dashboard/src/views/dashboard/analytics/i18n/en.json. A = dashboard/src/views/dashboard/analytics.

| Claim | Verdict | Evidence |
| --- | --- | --- |
| Four tabs Overview/Streams/Chat/Recaps | true | A/AnalyticsView.vue:35; AEN views |
| Moderator floor; sidebar shows only to holders | true | ActionDefinitionSeeder.cs:442 `M("analytics:read", Mod)`; route.ts:19; navigation.ts:125 (action hides entry); AnalyticsController.cs:45 |
| Ranges 30/90/365, labels, default 30, remembered | true | dashboard/src/api/analytics.ts:27-31; AnalyticsView.vue:40 `useLocalStorage(... 'r30')`; AEN range |
| Tab in address | true | AnalyticsView.vue:12-13,36 usePageView |
| Recaps ignores range | true | AnalyticsView.vue:69 (no :range prop) |
| KPI labels, "No data", sub-lines | true | AEN kpi |
| Follows/Chatters/Highlights panels | true | AEN growth, chatters, highlights |
| Streams columns, "Not known", average/busiest line | true | AEN streams |
| Narrow screen hides columns | true | AnalyticsStreams.vue:103-107,115-116 (also shows category under start time; page omits it, not wrong) |
| Chat panels, Fewer/More, zone line, UTC fallback, follows stream days | true | AEN chat; AnalyticsChat.vue:60-61 |
| Recap kept on offline | true | ChannelOfflineHandler.cs:62-64,160 |
| Recap kept on raid recap | true | ShowRaidRecapAction.cs:26-39 (uses IStreamRecapService) |
| One per stream, replaced | true | IStreamRecapService.cs:17-23 |
| Open dialog, size under title | true | AnalyticsRecaps.vue:221,238,241 |
| Save as PNG, file recap-<date>.png | true | AnalyticsRecaps.vue:160,244 |
| Columns, dash for peak, all sortable | true | AEN recaps.columns; AnalyticsRecaps.vue:38,69,126-128 |
| 12 per page, Previous/Next | true | dashboard/src/api/streamRecaps.ts:30; AnalyticsRecaps.vue:227-229 |
| 1920 x 1080 fallback + assumed text | true | A/recapExport.ts:19,25-38; AEN recaps.sizeAssumed |
| Troubleshooting texts | true | AEN recaps.empty (first sentence), recaps.failed, error |
| Permissions link target exists; roles named there | true | nomnomzbot-docs/src/content/reference/en/settings/permissions.mdx:35-36 |

## Extra check (empty-recap text)
Confirmed. AEN recaps.empty reads "No recap was kept yet. One is kept each time a raid starts." It names only raids. The code also keeps a recap on offline (ChannelOfflineHandler.cs:62,160). The page quotes only the first sentence and states both moments, which matches the code. The en.json second sentence is a product text gap (should also name offline); report it to the product lane.

## Channel data
All figures are read from the channel's recorded data through the analytics API; no value is copied from another bot. No hosting/saas mention, so no restriction marker needed.

## Style notes (no effect on verdict)
- Narrow-screen line could also name the category shown under the start time.
