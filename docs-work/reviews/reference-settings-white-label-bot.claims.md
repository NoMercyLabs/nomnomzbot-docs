# Claims: /reference/settings/white-label-bot

Paths are relative to the product repo C:\Projects\NoMercyLabs\nomnomzbot. W = dashboard/src/views/dashboard/settings/white-label-bot.

| Claim | Source |
| --- | --- |
| Sidebar: Settings, group Bot, entry White-label bot | dashboard/src/layouts/dashboard/settingsNavigation.ts:48-55; dashboard/src/i18n/locales/en.json:885,938 |
| Page header is "White-label bot" | W/WhiteLabelBotView.vue:93 |
| Broadcaster may open the page | W/route.ts:21 (channelbot:read); server/src/NomNomzBot.Infrastructure/Content/Identity/ActionDefinitionSeeder.cs:237 |
| Open right is grantable to other roles | ActionDefinitionSeeder.cs:152 (grant defaults true), :237 |
| Only broadcaster connects/changes (needs channelbot:connect, not grantable, plus integration:write) | W/WhiteLabelBotView.vue:52,127-149; ActionDefinitionSeeder.cs:236,402 |
| Only broadcaster disconnects (not grantable) | W/WhiteLabelBotView.vue:151; ActionDefinitionSeeder.cs:238 |
| Others see status and no buttons | W/WhiteLabelBotView.vue:105-158 (rows gated by canLogIn / channelbot:disconnect) |
| Card title "Your channel's own bot" | W/WhiteLabelBotView.vue:99; W/i18n/en.json:5 |
| Badge Connected / Shared bot | W/WhiteLabelBotView.vue:123-125; en.json:9-10 |
| Connected shows name, @handle, picture | W/WhiteLabelBotView.vue:107-117; en.json:8 |
| Shared shows "Your channel uses the shared bot {login}" or "Shared bot" | W/WhiteLabelBotView.vue:55-58,119-120; en.json:16-17 |
| Load error "The bot account could not be loaded." with retry | W/WhiteLabelBotView.vue:60-67,101-103; en.json:7 |
| Sign in as the bot account, not yourself; private window hint | en.json:45,47; W/components/BotLoginPanel.vue:117,125 (file lines 291,299 in concatenation = local 117,125) |
| "Connect your own bot" button starts the sign-in | W/WhiteLabelBotView.vue:146-148; en.json:21-23 |
| "Starting the sign-in..." then code | BotLoginPanel.vue:113-123; en.json:44 |
| "Open {site}" opens Twitch in new tab | BotLoginPanel.vue:128-135; en.json:48 |
| "Waiting for you to approve the code..." | BotLoginPanel.vue:140-142; en.json:49 |
| Approval gives toast "Your bot account is connected." | BotLoginPanel.vue:72-76; W/WhiteLabelBotView.vue:75-78; en.json:11 |
| Viewers see your bot's name and picture | en.json:6 |
| Cancel stops the sign-in; shows next to the code and under a failed sign-in, not while "Starting the sign-in..." shows | BotLoginPanel.vue:113-115 (starting text, no button),136-138,164-166; W/WhiteLabelBotView.vue:129 |
| Connected and disconnected texts are pop-up messages (toasts), not card text | W/WhiteLabelBotView.vue:17,77,84 (toast.success) |
| Browser sign-in fallback text and button, opens new tab | BotLoginPanel.vue:93-105,143-155; en.json:30-33 |
| Use another account / Change account replaces current | W/WhiteLabelBotView.vue:132-140; en.json:25-29 |
| Go back to the shared bot / Disconnect / confirm dialog title "Disconnect {name}?" | W/WhiteLabelBotView.vue:150-172; en.json:34-38 |
| Disconnect toast | W/WhiteLabelBotView.vue:80-85; en.json:12 |
| Consequences: shared bot answers again; account stays; can reconnect | W/WhiteLabelBotView.vue:165-168; en.json:40-41 |
| Expired / denied / other error texts and Try again | BotLoginPanel.vue:30-52,158-168; en.json:52-54,51 |

Note on BotLoginPanel.vue line numbers: local line = the numbering inside that file (license header lines 1-10).
