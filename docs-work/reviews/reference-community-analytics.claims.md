# Claims: /reference/community/analytics

Paths are relative to C:\Projects\NoMercyLabs\nomnomzbot. AEN = dashboard/src/views/dashboard/analytics/i18n/en.json.

| Claim | Source |
| --- | --- |
| Sidebar entry **Analytics** in group **Live** | dashboard/src/layouts/dashboard/navigation.ts:98,122-125; dashboard/src/i18n/locales/en.json:813,922 |
| Four tabs Overview, Streams, Chat, Recaps | dashboard/src/views/dashboard/analytics/AnalyticsView.vue:35; AEN views |
| Moderator floor for page and sidebar | route.ts:19; navigation.ts:59-60,125; server/src/NomNomzBot.Infrastructure/Content/Identity/ActionDefinitionSeeder.cs:51,442; server/src/NomNomzBot.Api/Controllers/V1/AnalyticsController.cs:25-26,45 |
| Range choices 30/90/365 days, default 30 days, remembered in browser | dashboard/src/api/analytics.ts:27-31; AnalyticsView.vue:40; AEN range |
| Tab in the address | AnalyticsView.vue:12-13,36 (usePageView) |
| Recaps tab ignores range | AnalyticsView.vue:69 |
| Overview KPI tiles and labels, "No data" | AnalyticsOverview.vue:180-199,70-74; AEN kpi |
| Follows, Chatters, Highlights panels | AnalyticsOverview.vue:59-63,125-174,202-254; AEN growth/chatters/highlights |
| Streams table columns, "Not known", hidden columns on narrow screens, brought line | AnalyticsStreams.vue:48-82,101-123; AEN streams |
| Chat tab panels, legend Fewer/More, time zone line (UTC fallback) | AnalyticsChat.vue:40-41,60-61,106-137; ChatHeatGrid.vue:12,69-71; AEN chat |
| Recap kept on stream offline | server/src/NomNomzBot.Infrastructure/Stream/EventHandlers/ChannelOfflineHandler.cs:62-64,160 |
| Recap kept when raid recap shows | server/src/NomNomzBot.Infrastructure/Widgets/PipelineActions/ShowRaidRecapAction.cs:25-31,84 |
| One recap per stream, replaced | server/src/NomNomzBot.Application/Dashboard/Services/IStreamRecapService.cs:17-23 |
| Open dialog draws real raid recap widget, size in description | RecapPreview.vue:12-20; AnalyticsRecaps.vue:489-497; AEN recaps.size |
| Save as PNG, file name recap-<date>.png | AnalyticsRecaps.vue:403-417,500 |
| Recap columns, dash for missing peak/title, sortable | AnalyticsRecaps.vue:298-328,382-391,447-458; AEN recaps.columns |
| 12 per page, Previous/Next | dashboard/src/api/streamRecaps.ts:30; AnalyticsRecaps.vue:482-486 |
| Fallback 1920 x 1080 with assumed text | recapExport.ts:19,25-38; AEN recaps.sizeAssumed |
| Empty, failed, error texts; Try again | AEN recaps.empty, recaps.failed, error; PanelCard.vue:192-193; dashboard/src/i18n/locales/en.json:81 |
