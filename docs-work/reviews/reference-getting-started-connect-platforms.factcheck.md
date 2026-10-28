# Fact check: src/content/reference/en/getting-started/connect-platforms.mdx
Verdict: PASS
Reviewed: C:\Projects\NoMercyLabs\nomnomzbot-docs\src\content\reference\en\getting-started\connect-platforms.mdx
Reviewed-SHA: 48b18bae7dfb3c4a

Product repo read at local master. `D` = dashboard/src.

| Claim | Supported by | Status |
| --- | --- | --- |
| Platforms are Twitch, Kick, YouTube | D/api/vocabulary.ts:18; ConnectionsPanel.vue:140 | true |
| Twitch connects through **Continue as broadcaster**; no separate step | D/views/site/login/i18n/en.json:22; vocabulary.ts:22-27 (no Twitch scope set); ConnectionsPanel.vue:150 (no button without scope set) | true |
| Dashboard shows Twitch connected | ConnectionsPanel.vue:64-67; PlatformRows.vue:71-75 | true |
| Read connections: Moderator and above | ActionDefinitionSeeder.cs:401 `M("integration:read", Mod)`; HomeView.vue:132,192; StreamView.vue:123; ladder D/api/permissions.ts:31-40 | true |
| Connect button: Editor and Broadcaster | ActionDefinitionSeeder.cs:402 `M("integration:write", Editor)`; ConnectionsPanel.vue:150; PlatformRows.vue:90; permissions.ts:38-39 (Editor, Broadcaster are the top two rungs) | true |
| Moderator sees "Not connected", no button | ConnectionsPanel.vue:86-87,150; PlatformRows.vue:87-90 | true |
| Home and Stream start the same connection | ConnectionsPanel.vue:104-109; PlatformRows.vue:54-58 (same useConnectIntegration + useConnectWindow) | true |
| Panel title **Connections**, button **Connect**, ask "Connect {platform} to this channel?" | home i18n/en.json "connections".title, connect, connectAsk; ConnectionsPanel.vue:132,153-168 | true |
| Confirm with **Connect** | ConnectionsPanel.vue:162 `:yes` = connect | true |
| New window; window closes; row then shows account | useConnectWindow.ts:30-43; oauthPopup.ts:31,63-64; ConnectionsPanel.vue:79-98 | true |
| Stream: **Where it goes** on **Overview**; ask "Open {platform} to connect?" | stream i18n/en.json platforms.title, connectAsk, views.overview; StreamView.vue:45,123; PlatformRows.vue:63,98-103 | true |
| Blocked window sends whole tab | useConnectWindow.ts:39-42 | true |
| Failure text "The connect did not work: {reason}. Try again." | D/i18n/locales/en.json:45; useConnectWindow.ts:34-35 | true |
| Platform lines and dots (green live, gray otherwise, account only before stats) | ConnectionsPanel.vue:33-38,73-77,85-98; home en.json platformLive/platformOffline/notConnected | true |
| **Bot and services**: status only, no button | ConnectionsPanel.vue:174-216 (no Button); home en.json services | true |
| Bot account: "Connected" / "Not in chat", names account | ConnectionsPanel.vue:180-193; home en.json bot, botOffline | true |
| Services: Connected / Sign in again / Not connected | ConnectionsPanel.vue:111-127,208-211; home en.json reauth | true |
| Services connect on **Integrations** settings page; **Reconnect** | D/i18n/locales/en.json:887; integrations i18n/en.json:39; IntegrationsView.vue:306-314 | true |
| Home error "Connections could not load." with retry | ConnectionsPanel.vue:135-136; home en.json error | true |
| Stream description and error text | PlatformRows.vue:64,67; stream en.json description, error | true |
| Stream rows: Twitch always Connected with account; Kick/YouTube Connected/Not connected + Connect for permitted | PlatformRows.vue:71-110 | true |
| X Live "Not available yet", "X Live support is not built yet." | PlatformRows.vue:114-126; stream en.json xlive, unavailable, unavailableWhy | true |

## Conventions check

- No source citation, action key, numbered level, license name or "open source" on the page.
- No NoMercyBot name. American English. No future-tense claims; X Live uses the dashboard's own sentence.
- Bot voice: the page makes no bot-reply claim.

## Notes (style, not failing)

- The Stream "Connected" badge for Kick/YouTube does not check needsReauth (PlatformRows.vue:83). The page's "Connected" meaning is still literally true.
- The Stream connect start failure shows "Could not start the connection." (stream en.json connectFailed). The page does not mention it; optional addition.
