# Claims: /reference/integrations/supporter-sources

Product repo: NomNomzBot, master, read only. D = dashboard/src, S = server/src, I = S/NomNomzBot.Infrastructure/Supporters. SV = D/views/dashboard/supporters. EN = SV/i18n/en.json. CS = I/SupporterConnectionService.cs.

| Claim | Page line | Proof | Verdict |
| --- | --- | --- | --- |
| Page title "Supporter sources" | 6 | EN sources.title; SV/SupporterSourcesView.vue:106 | true |
| Page is under Settings, Connections group | 7 | D/layouts/dashboard/settingsNavigation.ts:61-64; D/i18n/locales/en.json:889, 939; D/views/dashboard/settings/route.ts:94-101 | true |
| Supporters page is in the sidebar | 8 | D/layouts/dashboard/navigation.ts:276-279; D/i18n/locales/en.json:834 | true |
| A moderator may open and read the list | 12 | settings/route.ts:99 (supporters:read); S/NomNomzBot.Infrastructure/Content/Identity/ActionDefinitionSeeder.cs:543 (Mod) | true |
| Only the broadcaster may set up, change, remove | 13 | ActionDefinitionSeeder.cs:544 (Broadcaster); S/NomNomzBot.Api/Controllers/V1/SupportersController.cs:64, 82 | true |
| Others see the list without buttons | 14 | SupporterSourcesView.vue:77, 130, 156 | true |
| List "Services your supporters use" lists every supported service | 18 | SupporterSourcesView.vue:79-84, 110; EN sources.listTitle | true |
| The bot picks the delivery way; no choice offered | 19-20 | D/api/supporters.ts:65; SupporterSourceDialog.vue:295; CS:96-99 | true |
| Table: 11 services and their mode text | 24-34 | D/api/supporters.ts:67-77; EN connections.sources, connections.mode | true |
| Table: secret services paste a secret (oauth false) | 24-28, 31-33 | D/api/supporters.ts:67-71, 74-76; SupporterSourceDialog.vue:363-376 | true |
| Table: Buy Me a Coffee, Fourthwall, Ko-fi get an address to paste | 24, 26, 27 | I/SupporterWebhookAdapters.cs:27-31; CS:129-145, 199-246, 327-336; SupporterSourceDialog.vue:331-337 | true |
| Table: Patreon, Shopify, Treatstream pick a connected account (oauth true) | 29, 30, 34 | D/api/supporters.ts:72, 73, 77; SupporterSourceDialog.vue:338-362 | true |
| Middle column is dashboard text | 36 | EN connections.mode; SupporterSourcesView.vue:100 | true |
| Socket and websocket are kept open by the bot; nothing to set up | 37-38 | I/SupporterSocketHostedService.cs; I/Sockets/*SocketProfile.cs; dialog has no mode field (SupporterSourceDialog.vue:315-377) | true |
| States Not set up / Connected / Paused | 42-46 | SupporterSourcesView.vue:86-93; EN sources.state | true |
| Last event / No events yet | 48 | SupporterSourcesView.vue:95-102; EN sources.lastEvent, noEvents | true |
| Set up opens a dialog titled "Set up" plus name | 54-55 | SupporterSourcesView.vue:135-141; SupporterSourceDialog.vue:245-252; EN connections.titleNew | true |
| Secret or token field | 56 | SupporterSourceDialog.vue:363-376; EN connections.secret | true |
| Receive events on by default | 57-58 | SupporterSourceDialog.vue:221, 267-273, 329; EN connections.enabled | true |
| Save shows "Connection saved." | 59-60, 86-87 | SupporterSourceDialog.vue:305-309; EN connections.saved | true |
| Row button becomes Manage after save | 62 | SupporterSourcesView.vue:137-141; EN sources.manage | true |
| Secret never shown again; stored placeholder | 63-64 | EN connections.secretHelp, secretStored; SupporterSourceDialog.vue:254-258; CS:342 | true |
| Address made at first secret save; streamer pastes it | 68-70 | CS:129-145, 199-246; EN connections.endpointHelp | true |
| Manage shows Address to give the service | 72-74 | SupporterSourceDialog.vue:331-337; EN connections.endpoint | true |
| Account comes from Integrations | 80, 83 | SupporterSourceDialog.vue:186, 216, 239-243; EN connections.noAccount; D/i18n/locales/en.json:887 | true |
| No secret field for account services | 81 | SupporterSourceDialog.vue:338, 363 (v-if oauth / v-else) | true |
| Connected account select | 85 | EN connections.grant; SupporterSourceDialog.vue:339 | true |
| Patreon and Shopify: bot registers its own webhook on save | 89 | CS:150-176, 251-320; I/PatreonWebhookProvisioner.cs; I/ShopifyWebhookProvisioner.cs | true |
| Patreon/Shopify Manage shows an address (endpoint exists) | 90 | CS:293-308, 327-336; SupporterSourceDialog.vue:331 | true |
| Treatstream listens with the account, no address | 91 | D/api/supporters.ts:77 (socket); I/SupporterSocketHostedService.cs:181, 231; I/Sockets/TreatstreamSocketProfile.cs:37; CS:129 (no endpoint outside webhook mode) | true |
| No-account message | 93 | EN connections.noAccount; SupporterSourceDialog.vue:359-361 | true |
| Registration failure shows "The connection could not be saved."; retry by saving | 94-95 | CS:165-174 (status error, failure returned, "re-upsert re-provisions"); SupporterSourceDialog.vue:323; EN connections.saveFailed | true |
| Pause by turning Receive events off; replace secret | 99-102 | SupporterSourceDialog.vue:302, 329; EN connections.secretStored; CS:125 | true |
| Save off until a change | 104 | SupporterSourceDialog.vue:260-265, 322 | true |
| Toggling keeps the stored secret | 105 | CS:133, 182-189 | true |
| Remove asks "Remove {name}?" then Remove connection | 109-111 | SupporterSourcesView.vue:143-164; EN sources.remove, removeTitle, removeAction | true |
| Secret deleted, bot stops listening, tips stay, can set up again | 113-118 | EN sources.removeDescription; SupportersController.cs:81-97 | true |
| Webhook address made for it stops working | 115 | CS:365-369 | true |
| Tips and memberships panel, newest first | 122-123 | SupportersView.vue:305; EN tips.title; CS:400 | true |
| A moderator may read it | 124 | SupportersView.vue:304; ActionDefinitionSeeder.cs:543 | true |
| Row: name, kind, amount, tier, time | 126 | SupportersView.vue:100-115, 314-318 | true |
| Kinds Tip, Membership, Merch, Charity | 128-133 | EN tips.kind; D/i18n/locales/en.json:275 | true |
| Empty text | 135 | EN tips.empty; SupportersView.vue:307 | true |
| Each payment recorded once | 136 | I/SupporterIngestService.cs:85-101 | true |
| Event starts a response, per kind or any | 140 | I/EventHandlers/SupporterTriggerSource.cs HandleAsync (supporter.{kind}, supporter.any); I/SupporterIngestService.cs:120-137 | true |
| Bot answers in the one bot voice | 141 | SupporterTriggerSource.cs (IEventResponseExecutor) | true |
| Troubleshooting: address pasted and secret matches | 148-151 | CS:199-246 (endpoint verifies with the saved secret) | true |
| Paused source drops events without a message | 157-159 | I/SupporterIngestService.cs:68-77 (debug log, success result) | true |
