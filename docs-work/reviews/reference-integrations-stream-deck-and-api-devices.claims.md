# Claims: /reference/integrations/stream-deck-and-api-devices

Product repo: nomnomzbot (master, read only). D = dashboard/src/views/dashboard/settings/api-devices. EN = D/i18n/en.json. PS = server/src/NomNomzBot.Infrastructure/AutomationApi/AutomationPairingService.cs. TS = server/src/NomNomzBot.Infrastructure/AutomationApi/AutomationApiTokenService.cs.

Note: the page title "Stream Deck and API devices" is the map row's title; the dashboard page heading is **API and devices** (dashboard/src/i18n/locales/en.json:891), which the page names on line 7.

| Claim | Page line | Proof | Verdict |
| --- | --- | --- | --- |
| Keys let tools such as Stream Deck, Touch Portal or scripts use the channel | 6 | EN:29 | true |
| Page label **API and devices** in **Developers** group of Settings | 7-8 | dashboard/src/i18n/locales/en.json:891, :940; dashboard/src/layouts/dashboard/settingsNavigation.ts:69-71 | true |
| Editor may open the page and see keys | 12 | D/route.ts:13 (automation:tokens:read); server/src/NomNomzBot.Infrastructure/Content/Identity/ActionDefinitionSeeder.cs:367 | true |
| Only Broadcaster sees New key, Pair a device, rotate/revoke | 13 | D/ApiDevicesView.vue:262,272; D/components/TokensTable.vue:722,754; ActionDefinitionSeeder.cs:368 | true |
| New key opens **New API key** dialog; Name field, placeholder | 17-20 | D/ApiDevicesView.vue:263; EN:30,35,38,39 | true |
| Key name must be unique in the channel | 21 | TS:103-111 (ALREADY_EXISTS) | true |
| Allowed actions; Start pipelines, Read data, Listen to events on by default | 21-23 | D/components/CreateTokenDialog.vue:19,27; EN:22-24,40 | true |
| Pipelines it may start only when Start pipelines on; none = every pipeline | 24-25 | CreateTokenDialog.vue:40,48-50,85; EN:42-43 | true |
| Ends on, empty = no end | 25 | EN:44-45; CreateTokenDialog.vue:51-53 | true |
| Make key, Key for dialog, Copy key, I copied it | 26-28 | EN:37,48,50,51; D/ApiDevicesView.vue:72-75 | true |
| Bot keeps only a fingerprint; cannot see again | 30-31 | EN:49; server/src/NomNomzBot.Api/Controllers/V1/AutomationTokensController.cs:26 | true |
| End day ends at end of that day | 32 | CreateTokenDialog.vue:53 (T23:59:59) | true |
| Start pipelines = run pipeline honoring allowlist | 36 | server/src/NomNomzBot.Api/Controllers/V1/AutomationDataController.cs:136-137 | true |
| Read data = pipelines, commands, music, OBS | 37 | AutomationDataController.cs:102-125,180-301 (scope read) | true |
| Listen to events = public event stream | 38 | AutomationTokensController.cs:86 | true |
| Speak as the bot posts chat as the bot | 39 | EN:41; AutomationDataController.cs:149-150 | true |
| At least one allowed action | 42 | TS:267-268; CreateTokenDialog.vue:43 | true |
| Table columns and values | 48-54 | EN:5-19; TokensTable.vue:57-61,69-87 | true |
| Allowed column shows short words; mapping to labels | 51, 56-61 | TokensTable.vue:74 (token.scopes.join); scope keys TS:39; labels EN:22-25 (scopes.invoke/read/events/chat) | true |
| Events info button on events keys | 63-64 | TokensTable.vue:75; D/components/KeyEventsInfo.vue; EN:84 | true |
| Pair a device panel and description | 66-69 | EN:68-69; D/components/PairingPanel.vue | true |
| Device name, Make code, eight-character code | 73-74 | EN:72-73; PS:36 | true |
| Code works 5 minutes, once | 75-76 | PS:37; PS:178 (consumed); EN:74 | true |
| Device gets own key in list; default scopes invoke, events, read | 78-79 | PairingPanel.vue:35 (scopes []); PS:38,110-112; PS:183-190 | true |
| Approve code, label and done text | 83-84 | EN:77-80; PairingPanel.vue:41-52 | true |
| Approval page with Approve / Log in first | 86-88 | server/src/NomNomzBot.Api/Controllers/V1/AutomationPairingController.cs:120-142 | true |
| Device code 10 minutes, single use | 91 | PS:54; PS:290 | true |
| Paired key named after device, ends 30 days | 92 | PS:367-371; PS:49 | true |
| Device renews own key | 93 | TS:175-213 (RefreshSelfAsync, 30 days) | true |
| Rotate dialog, old secret stops right away | 95-103 | EN:54-58; TS:150-170 | true |
| Revoked key cannot be rotated | 104 | TS:162-164 | true |
| Revoke: access lost, unpaired, stays as Revoked, no buttons | 106-113 | EN:61-65; TokensTable.vue:95; TS:220-235 | true |
| Invalid or expired code message | 119-121 | PS:176-179, 280, 287 | true |
| Five attempts a minute per device address and per account, retry seconds | 127-128 | PS:41, 145-167 (client), 262-275 (account) | true |
| 30 attempts a minute for all devices together | 129 | PS:42 (RedeemsGlobalPerMinute = 30), 151-157 | true |
| Lost key: make a new secret | 136-138 | EN:49; TS:150-170 | true |
