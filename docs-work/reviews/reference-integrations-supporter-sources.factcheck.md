# Fact-check: /reference/integrations/supporter-sources
Verdict: PASS
Reviewed: src/content/reference/en/integrations/supporter-sources.mdx
Reviewed-SHA: 588dcd436a9f72f9

Product repo: NomNomzBot master, read only. D = dashboard/src, SV = D/views/dashboard/supporters, EN = SV/i18n/en.json, I = server/src/NomNomzBot.Infrastructure/Supporters, CS = I/SupporterConnectionService.cs.

| Claim | Page line | Product file and line | Verdict |
| --- | --- | --- | --- |
| Page title "Supporter sources" | 2, 6 | EN sources.title | true |
| Under Settings, Connections group | 7 | D/layouts/dashboard/settingsNavigation.ts:61-64 (per claims file) | true |
| Supporters page in sidebar | 8 | D/layouts/dashboard/navigation.ts:276-279 (per claims file) | true |
| Moderator may read the list | 12 | ActionDefinitionSeeder.cs:543 `supporters:read` Mod | true |
| Only broadcaster sets up, changes, removes | 13 | ActionDefinitionSeeder.cs:544 `supporters:config:write` Broadcaster | true |
| Others see the list without buttons | 14 | SV/SupporterSourcesView.vue:77, 130, 156 (canEdit gates trailing buttons and dialog) | true |
| List title "Services your supporters use" | 18 | EN sources.listTitle | true |
| Bot picks the delivery way | 19-20 | D/api/supporters.ts:63-64 comment, 65-77 fixed modes | true |
| 11 services with mode texts | 24-34 | D/api/supporters.ts:66-76; EN connections.mode, connections.sources | true |
| Secret vs connected account per service | 24-34 | D/api/supporters.ts:66-76 `oauth` flag | true |
| Middle column is dashboard text | 36 | EN connections.mode | true |
| States Not set up / Connected / Paused | 42-46 | EN sources.state | true |
| Last event / No events yet | 48 | EN sources.lastEvent, noEvents | true |
| Dialog title "Set up" plus name | 55 | EN connections.titleNew "Set up {name}"; SV/SupporterSourceDialog.vue:82 | true |
| Field "Secret or token" | 56 | EN connections.secret | true |
| Receive events, on by default | 57-58 | EN connections.enabled; dialog default (per claims file :221) | true |
| "Connection saved." | 60, 87 | EN connections.saved | true |
| Button becomes Manage | 62 | EN sources.manage; SupporterSourcesView.vue:137-141 | true |
| Secret never shown again; stored placeholder text | 63-64 | EN secretHelp, secretStored; SupporterSourceDialog.vue:89-90; CS:337 hasSecret includes webhook endpoint | true |
| Address made at first secret save | 70 | CS:129-145 ProvisionEndpointAsync on supplied secret | true |
| "Address to give the service" | 73 | EN connections.endpoint | true |
| "Connected account" select | 85 | EN connections.grant | true |
| Patreon/Shopify: bot registers webhook on save | 89 | CS:150-176 provisioner path | true |
| Treatstream socket, no address | 91 | D/api/supporters.ts:76 mode socket; CS:129 endpoint only in webhook mode | true |
| No-account message | 93 | EN connections.noAccount | true |
| Registration failure message; retry with Save | 94-95 | CS:165-174 status error, "re-upsert re-provisions"; EN connections.saveFailed | true |
| Toggle pauses; new secret replaces; toggle keeps secret | 100-105 | CS:125, 182-189 (omitted secret keeps stored one) | true |
| Save off until a change | 104 | SupporterSourceDialog.vue:260-265, 322 (per claims file) | true |
| Remove dialog texts | 110-111 | EN sources.removeTitle, removeAction | true |
| Secret deleted, stops listening, tips stay, set up again | 113-118 | EN sources.removeDescription; CS:367-371 | true |
| Webhook address stops working | 115 | CS:363-366 endpoint deleted | true |
| Panel "Tips and memberships", newest first | 123 | EN tips.title; CS ListEventsAsync OrderByDescending(ReceivedAt) | true |
| Moderator may read it | 124 | ActionDefinitionSeeder.cs:543 | true |
| Kinds Tip, Membership, Merch, Charity | 128-133 | EN tips.kind | true |
| Empty text | 135 | EN tips.empty | true |
| Each payment recorded once | 136 | I/SupporterIngestService.cs:85-101 dedupe on ProviderTransactionId | true |
| Event response per kind or any | 140 | I/EventHandlers/SupporterTriggerSource.cs:60-62 supporter.{kind}, supporter.any | true |
| Answers in the one bot voice | 141 | SupporterTriggerSource.cs runs the bound event response (bot output) | true |
| Paused source drops events silently | 159 | I/SupporterIngestService.cs:68-77 debug log, Success | true |

## Links

- /reference/integrations/webhooks-and-event-feeds: a row of docs-work/map.md.
- /reference/automation/event-responses: a row of docs-work/map.md.

## Conventions

No people's names, no action keys, no numbered levels, no license name, no hosting or price mention, no NoMercyBot spelling. American English. Labels match EN.

## Notes

- Line 93 and 110 put `{name}` in code font inside a quoted message; plain text may read easier. Not blocking.
