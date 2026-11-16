# Independent source verification: /reference/community/analytics
Verdict: PASS
Reviewed: src/content/reference/en/community/analytics.mdx
Reviewed-SHA: 345b0ae4c5bdcb08b1202f453a1aa49a299c913db09bb1d000b0b559325257dc

## Independent overhaul review, 2026-11-05

ChannelAnalyticsService.cs:441-525; AnalyticsView/API; RecapPreview/recapExport: local-zone grid, offline activity, ranges and still PNG. Repaired F4 correctly describes the grid as recorded feed activity, including stored notice/held/moderation rows because the query has no Kind filter.

Reviewed independently of the article author, in actual navigation order. Current product source 54da8b631 and relevant changes since b12f4f696 were read without starting the bot, executing platform actions or changing channel data. This verdict is source verification, not proof of live platform delivery. See [review-moderation-economy-community.md](../overhaul/review-moderation-economy-community.md) for the review scope and findings.

## Prior review history

The earlier text below is retained as history; it does not independently approve a later article hash.

Author source audit: 2026-11-04. Independent review of the revised article is pending; the historical PASS below does not approve this text.
Product source: C:/Projects/NoMercyLabs/nomnomzbot at b12f4f696, inspected without starting the bot or changing data.

Adds how to interpret totals and ranges, removes the false claim that chat only occurs live, retains PNG export details.

| Revised claim or retained core behavior | Current source opened |
| --- | --- |
| Ranges remembered, four tabs and recaps independent of range | dashboard/src/views/dashboard/analytics/AnalyticsView.vue:35-82; dashboard/src/api/analytics.ts:27-31 |
| No-data behavior and chat-lines/live-hour figure | dashboard/src/views/dashboard/analytics/AnalyticsOverview.vue:75-110 |
| Chat grid includes all stored messages, grouped in channel zone | server/src/NomNomzBot.Infrastructure/Services/Analytics/ChannelAnalyticsService.cs:441-525 |
| Recap real widget preview and size handling | dashboard/src/views/dashboard/analytics/RecapPreview.vue:30-110; recapExport.ts:19-38; AnalyticsRecaps.vue |
| UI labels, period tables and error states | dashboard/src/views/dashboard/analytics/i18n/en.json; AnalyticsChat.vue:38-90 |
| Default role | server/src/NomNomzBot.Infrastructure/Content/Identity/ActionDefinitionSeeder.cs:442 |

The practical scenarios are recommended uses of these verified controls, not promises of a new feature. Unchanged reference details were compared with the current view, labels and relevant implementation. Runtime platform calls were not performed.

## Historical evidence

The prior review is retained for its detailed claim inventory. Its verdict and file hashes refer to the earlier article; where the new evidence differs, the new evidence takes precedence.

# Fact-check: /reference/community/analytics
Historical verdict: PASS
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
