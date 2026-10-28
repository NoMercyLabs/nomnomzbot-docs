# Claims: /reference/getting-started/connect-platforms

Product repo: C:\Projects\NoMercyLabs\nomnomzbot (paths relative to it). `D` = dashboard/src.

| Claim | Source |
| --- | --- |
| Platforms listed are Twitch, Kick, YouTube | D/api/vocabulary.ts:18; D/views/dashboard/home/components/ConnectionsPanel.vue:140 |
| Twitch connects through the broadcaster sign-in; no separate connect step | ConnectionsPanel.vue:13-14,64-67; vocabulary.ts:22-27 (Twitch has no scope set, so no Connect button) |
| Dashboard shows Twitch as connected | ConnectionsPanel.vue:66; D/views/dashboard/stream/PlatformRows.vue:71-75 |
| Connections visible with integration:read, default Moderator | D/views/dashboard/home/HomeView.vue:132,191-193; D/views/dashboard/stream/StreamView.vue:123; server/src/NomNomzBot.Infrastructure/Content/Identity/ActionDefinitionSeeder.cs:401 |
| Connect button needs integration:write, default Editor | ConnectionsPanel.vue:150; PlatformRows.vue:90; ActionDefinitionSeeder.cs:402 |
| Moderator sees "Not connected" with no button | PlatformRows.vue:87-90; ConnectionsPanel.vue:86-87,150 |
| Kick and YouTube get Connect (have a scope set) | vocabulary.ts:24-27; ConnectionsPanel.vue:100-102,150; PlatformRows.vue:30-32 |
| Home: "Connections" title, "Connect", "Connect {platform} to this channel?" confirm | ConnectionsPanel.vue:132,153-168; D/views/dashboard/home/i18n/en.json:123,133-135 |
| Stream: "Where it goes", "Open {platform} to connect?", Overview tab | PlatformRows.vue:63,89-109; D/views/dashboard/stream/i18n/en.json:54-60,87; StreamView.vue:121-123 |
| Both start the same connection | ConnectionsPanel.vue:104-109; PlatformRows.vue:54-58 (both useConnectIntegration + useConnectWindow) |
| Opens a new window; blocked popup sends whole tab | D/composables/useConnectWindow.ts:21-23,39-43; D/lib/oauthPopup.ts:39-40 |
| After the window settles, the lists reload (row shows account name) | useConnectWindow.ts:30-32; ConnectionsPanel.vue:79-98; PlatformRows.vue:79 |
| Failure toast "The connect did not work: {reason}. Try again." | useConnectWindow.ts:34-35; D/i18n/locales/en.json:45 |
| Platform line: Not connected / {account} · Live / {account} · Offline / account only before stats | ConnectionsPanel.vue:85-98; home en.json:126,131-132 |
| Dot green when live, gray otherwise | ConnectionsPanel.vue:33-38,73-77 (bg-success / bg-muted-foreground) |
| "Bot and services" group, status only, no button | ConnectionsPanel.vue:174-216; home en.json:124 |
| Bot account row: "Connected" or "Not in chat", names account | ConnectionsPanel.vue:179-195; home en.json:125,128-129 |
| Service badges Connected / Sign in again / Not connected | ConnectionsPanel.vue:111-127,197-214; home en.json:125-127 |
| Services are connections that are not stream platforms | ConnectionsPanel.vue:54-58 |
| Services connect on Integrations settings page; Reconnect button | D/i18n/locales/en.json:887; D/views/dashboard/settings/integrations/i18n/en.json:39; IntegrationsView.vue:306-315 (per slice s11; Reconnect for needsReauth not re-opened line by line) |
| Home error "Connections could not load." | ConnectionsPanel.vue:135-136; home en.json:130 |
| Stream panel description and error | PlatformRows.vue:64,67; stream en.json:55-56 |
| X Live row "Not available yet", "X Live support is not built yet." | PlatformRows.vue:114-126; stream en.json:63-65 |
