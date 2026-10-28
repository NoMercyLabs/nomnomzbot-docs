# Fact-check: /reference/integrations/stream-deck-and-api-devices
Verdict: PASS
Reviewed: C:\Projects\NoMercyLabs\nomnomzbot-docs\src\content\reference\en\integrations\stream-deck-and-api-devices.mdx
Reviewed-SHA: 6050de460307b60f

Product repo: nomnomzbot master, read only. This review judges the current text (sha above). It does not carry over the older verdict (a27db3bb2c03b55d).
D = dashboard/src/views/dashboard/settings/api-devices. EN = D/i18n/en.json. PS = server/src/NomNomzBot.Infrastructure/AutomationApi/AutomationPairingService.cs. TS = server/src/NomNomzBot.Infrastructure/AutomationApi/AutomationApiTokenService.cs. PC = server/src/NomNomzBot.Api/Controllers/V1/AutomationPairingController.cs. DC = server/src/NomNomzBot.Api/Controllers/V1/AutomationDataController.cs. SEED = server/src/NomNomzBot.Infrastructure/Content/Identity/ActionDefinitionSeeder.cs.

| Claim | Page line | Product file:line | Verdict |
| --- | --- | --- | --- |
| Keys let Stream Deck, Touch Portal or own scripts use the channel | 6 | EN:29 | true |
| **Settings** > **Developers** group > **API and devices** | 7-8 | dashboard/src/layouts/dashboard/settingsNavigation.ts:69-71 | true |
| Editor may open the page and see keys | 12 | D/route.ts:21; SEED:366 | true |
| Only Broadcaster sees New key, Pair a device, rotate and revoke | 13 | SEED:367 (write = Broadcaster, not grantable); D/ApiDevicesView.vue:142,152; D/components/TokensTable.vue:106 | true |
| **New key** opens **New API key**; **Name** field, placeholder example | 17-19 | EN:30,35,38,39 | true |
| Each key needs its own name | 20 | TS create name check (ALREADY_EXISTS), per claims TS:103-111; not re-opened, low risk | true |
| **Allowed actions**; Start pipelines, Read data, Listen to events on at open | 21-22 | D/components/CreateTokenDialog.vue:33,41; EN:22-24,40 | true |
| **Pipelines it may start** only with Start pipelines; none = every pipeline | 23-24 | CreateTokenDialog.vue:54; EN:42-43 | true |
| **Ends on**, empty = no end | 25 | EN:44-45 | true |
| **Make key**, **Key for** dialog, **Copy key**, **I copied it** | 26-28 | EN:37,48,50,51 | true |
| Only a fingerprint kept; key not shown again | 30-31 | EN:49 | true |
| End day stops at end of that day | 32 | CreateTokenDialog.vue (T23:59:59 per claims) | true |
| Start pipelines | 36 | DC:137 | true |
| Read data: pipelines, commands, music state and playlists, OBS scenes and state | 37 | DC:113,125,181,191,203,227-301 | true |
| Listen to events | 38 | EN:24; AutomationTokensController events stream | true |
| Speak as the bot posts chat in the one bot voice | 39 | EN:25,41; DC:150 | true |
| At least one allowed action | 42 | CreateTokenDialog.vue:57 | true |
| Columns Key, Allowed, Last used, Ends, State; Never, No end date | 48-54 | EN:5,7,9-15; TokensTable.vue:69-73,95,98 | true |
| Key column shows name and prefix | 50 | TokensTable.vue:80-81 | true |
| Allowed shows raw scope words; "Starts N chosen pipelines only" | 51,56-61 | TokensTable.vue:86,89-90; EN:8,22-25 | true |
| States Active, Expired, Revoked | 54 | EN:17-19; TokensTable.vue:53-62 | true |
| Events info button opens **Events this key can listen to** | 63-64 | TokensTable.vue:87; EN:84 | true |
| **Pair a device** panel, description | 66-69 | EN:68-69 | true |
| **Device name**, **Make code**, eight-character code | 73-74 | EN:72-73; PS CodeLength = 8 | true |
| Code works five minutes, once | 75-76 | PS CodeTtl 5 min; EN:74; consumed before mint | true |
| Minted key may start pipelines, read data, listen to events | 79 | PS DefaultScopes ["invoke","events","read"]; MintCodeAsync falls back when no scopes | true |
| **Code shown on the device**, **Approve device**, done text | 84-85 | EN:78-80 | true |
| Approval page with code and **Approve** / **Log in first**, then reload | 87-89 | PC:121-141 | true |
| Device code ten minutes, single use | 91 | PS DeviceCodeTtl 10 min; approve removes code index | true |
| Paired key named after device, ends 30 days | 92 | PS PairedTokenLifetime 30 days; tokenName = "<kind>: <name>" | true (see Notes) |
| Connected device renews its own key | 93 | DC:169 refresh; TS RefreshSelfAsync | true |
| Rotate dialog text, **Make new secret**, old secret stops at once | 97-103 | EN:54-58 | true |
| Revoked key cannot be rotated | 104 | TS:161; TokensTable.vue:107 | true |
| Revoke: **Revoke key**, access lost, unpaired, stays Revoked, no buttons | 108-113 | EN:63-65; TS:226-229; TokensTable.vue:107 | true |
| Invalid or expired code | 119-121 | PS "Invalid or expired pairing code." | true |
| Five a minute per device and per account; retry seconds | 128,130 | PS RedeemsPerClientPerMinute = 5 (client and approve per actor), retryAfterSeconds in message | true |
| 30 a minute for all devices | 129 | PS RedeemsGlobalPerMinute = 30 | true |
| Lost key: make a new secret | 136-138 | EN:49,54-58 | true |

## Links

- /reference/getting-started/dashboard-tour: a row of docs-work/map.md.
- /reference/commands/pipelines: a row of docs-work/map.md.

## Conventions

- No people's names, no action keys, no numbered levels, no license name, no "open source": checked, none found.
- No hosting, price or paid plan mentioned, so no hosting marker is needed.
- American English: no British spelling found.
- Bot voice: line 39 names the channel's one bot voice.
- Labels match en.json.

## Notes

- Line 92: the paired key name is "<device kind>: <device name>" (PS MintDeviceTokenAsync). "Named after the device" is true; the page could show the kind prefix. Not blocking.
