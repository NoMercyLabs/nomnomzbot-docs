# Claims: /reference/integrations/webhooks-and-event-feeds

Product repo: C:\Projects\NoMercyLabs\nomnomzbot (master, read only). Paths below are relative to it.
W = dashboard/src/views/dashboard/settings/webhooks; F = dashboard/src/views/dashboard/settings/custom-event-feeds; S = server/src.

| Claim | Page section | Proof | Verdict |
| --- | --- | --- | --- |
| Both pages sit in the Developers group, labels Webhooks and Custom event feeds | intro | dashboard/src/layouts/dashboard/settingsNavigation.ts:69-73; dashboard/src/i18n/locales/en.json:892-893, 940 | true |
| Page descriptions (post events out; outside data such as heart-rate sensor) | intro | W/i18n/en.json outbound.description; F/i18n/en.json description | true |
| Moderator reads webhooks/hosts; Editor writes them | Who can use | S/NomNomzBot.Infrastructure/Content/Identity/ActionDefinitionSeeder.cs:389-394 (Mod=10, Editor=30 at :51-53); W/route.ts meta.action webhooks:outbound:read | true |
| Moderator reads and writes feeds | Who can use | ActionDefinitionSeeder.cs:520-521; F/route.ts customdata:read | true |
| Test, rotate, reenable, retry, delete need write | Who can use | S/NomNomzBot.Api/Controllers/V1/WebhooksController.cs:195-285 RequireAction webhooks:outbound:write | true |
| Approved hosts card, Host, Add host, switch, Remove with confirm and uses | Approve a host | W/WebhooksView.vue EgressAllowlistCard; W/i18n/en.json allowlist.*; EgressAllowlistController.cs:60-108 | true |
| A switched-off host stays and is refused | Approve a host | W/i18n/en.json allowlist.description, allowlist.off; OutboundWebhookEndpointService.cs:150-163 (IsEnabled filter) | true |
| Outbound needs an enabled approved host | Send events out | S/NomNomzBot.Infrastructure/Webhooks/OutboundWebhookEndpointService.cs:150-163 | true |
| Dialog fields Name, Host (no https://), Path, Events to send grouped, Create webhook | Send events out | W/components/OutboundWebhookDialog.vue groups computed; W/i18n/en.json outbound.*; category labels webhook_event_category_* | true |
| Secret shown once, Copy secret, I saved it | Send events out | W/i18n/en.json outbound.secret.*; OutboundWebhookEndpointService.cs:35-37 (revealed exactly once) | true |
| URL is https:// + host + path; path that leaves host refused | Send events out | OutboundWebhookTargetUrl.cs:18,34,38; OutboundWebhookEndpointService.cs:165-168 | true |
| Empty body sends the variables as a JSON object | field table | WebhookBodyTemplateRenderer.cs:36-37 | true |
| Body is JSON default on; checked as JSON; content type json vs text/plain | field table | OutboundWebhookDialog.vue bodyIsJson ref(true); WebhookBodyTemplateRenderer.cs:42-55; OutboundWebhookDispatcher.cs:314-316 | true |
| Custom headers one per line, kept hidden on edit | field table | W/i18n/en.json headersHelp, headersKept; OutboundWebhookDialog.vue headersToSend; OutboundWebhookDispatcher.cs:320-326 | true |
| Headers webhook-id, webhook-timestamp, webhook-signature | Check a delivery | OutboundWebhookDispatcher.cs:317-319 | true |
| Signature v1,base64(HMAC-SHA256(id.timestamp.body)) | Check a delivery | OutboundWebhookSigner.cs Sign (prefix `{id}.{ts}.`, "v1," + Base64) | true |
| After rotation, signs with new and previous secret, space-separated | Check a delivery | OutboundWebhookEndpointService.cs:285-288; OutboundWebhookDispatcher.cs:412-415; OutboundWebhookSigner.cs string.Join(' ') | true |
| 2xx = delivered; else retry | failures | OutboundWebhookDispatcher.cs:267, 277, 341-375 | true |
| Backoff 30 s base, doubles, cap 1 h (jitter 50-100%, "about") | failures | OutboundWebhookBackoffPolicy.cs BaseDelay, Ceiling, ComputeDelay | true |
| 20 consecutive failures switches off; reason shown; Turn back on | failures | OutboundWebhookDispatcher.cs:47, 350-356; OutboundWebhookRow.vue:72-108; OutboundWebhookEndpointService.cs ReenableAsync | true |
| Row actions: switch, test, deliveries, edit, rotate, delete | Manage outbound | W/WebhooksView.vue OutboundWebhookRow emits; W/i18n/en.json outbound.test/deliveries/edit/rotate/delete | true |
| Test shows answer code and ms | Manage outbound | W/WebhooksView.vue testResult; en.json testDelivered/testFailed | true |
| Delivery statuses Waiting/Delivered/Failed/Gave up; line fields; Send again | Deliveries | W/i18n/en.json deliveries.*; OutboundWebhookDispatcher.cs:239-242, 356 (DeadLetter) | true |
| Replay of a delivery on a disabled endpoint refused | Deliveries | OutboundWebhookDispatcher.cs:119-121 | true |
| Pipeline send-webhook step | Send events out | S/NomNomzBot.Infrastructure/Webhooks/PipelineActions/SendWebhookAction.cs ActionType send_webhook | true |
| Inbound dialog: Name, Provider (fixed after save), Secret, Pipeline to start, Event to raise, Create webhook | Receive calls | W/components/InboundWebhookDialog.vue:195 `:disabled="saved"`, missing computed; W/i18n/en.json inbound.* | true |
| Copy link on the row; link is App:BaseUrl/api/v1/webhooks/in/{token} | Receive calls | InboundWebhookRow.vue:65-68; InboundWebhookEndpointService.cs:267 | true |
| Provider list shown as raw words Generic, Kofi, Github, Fourthwall, Shopify, Patreon, Buymeacoffee | provider table | InboundWebhookDialog.vue adapters const and SelectItem `{{ kind }}`:200; Adapters/*.cs | true |
| Pipeline wins over event; event goes to event responses; both empty = record only | Receive calls | Webhooks/EventHandlers/InboundWebhookAutomationBridge.cs HandleAsync | true |
| Only JSON or form post; 256 KB cap | Receive calls | InboundWebhookController.cs:41-67 | true |
| Duplicate call not run again | Receive calls | InboundWebhookDispatcher.cs dedup GetByEventIdAsync; AutomationBridge WasDuplicate return | true |
| Disabled inbound refuses calls | Manage inbound | InboundWebhookDispatcher.cs:59-60 (503) | true |
| Generic step 5: Event kind path and Event id path are JSONPaths into the call body (examples `$.event`, `$.id`, the same paths the push feed uses) | Receive calls step 5 | GenericInboundWebhookAdapter.cs Parse SelectToken(EventKindJsonPath / ProviderEventIdJsonPath) ~:72-74; CustomDataSourceService.cs:601-602 | true |
| Create closes the dialog; missing fields named after "Still needed to create" | Receive calls step 7 | WebhooksView.vue submitInbound inboundEditorOpen=false; InboundWebhookDialog.vue:317-318; en.json inbound.missing | true |
| Outbound optional fields are in the same dialog | Send events out step 6 | OutboundWebhookDialog.vue refs bodyTemplate, bodyIsJson, headerText | true |
| Make feed closes dialog; feed listed | Bring in data step 9 | CustomEventFeedsView.vue:81-86 | true |
| Fetch now needs a saved feed with an address | Bring in data | TestFeedDialog.vue:94 v-if feed?.endpointUrl | true |
| Lead rows re-verified this run: signer format, URL build, provider list, pipeline-over-event routing, send_webhook step | several | OutboundWebhookSigner.cs; OutboundWebhookTargetUrl.cs:34-38; InboundWebhookDialog.vue adapters; InboundWebhookAutomationBridge.cs HandleAsync; SendWebhookAction.cs ActionType | true |
| Path syntax `$.a.b` is JSONPath | Find the path | CustomDataIngestService.cs ExtractFields (JSONPath); CustomDataFieldMapValidator.cs; en.json fields.help example | true |
| Fetch now lists "Paths found in the answer" (feed with address) | Find the path | TestFeedDialog.vue:94, 108; en.json test.paths | true |
| Test with Sample data ingests the sample; "Sent." shown; row shows Last data and failed fields | Find the path | CustomDataSourceService.cs:461 (_ingest.IngestAsync); CustomDataIngestService.cs sets LastReceivedAt and LastFieldErrorsJson; TestFeedDialog.vue:56 sent; en.json test.sent, lastReceived, fieldErrors | true |
| A feed that is off takes in nothing, test included | Find the path | CustomDataIngestService.cs source query `s.IsEnabled`; en.json enabledHelp | true |
| Developer section: give link and secret to the source; arrival shows Last data | Post from code | EventFeedRow.vue:67-69; CustomDataSourceService.cs:585-603; CustomDataIngestService.cs LastReceivedAt | true |
| Generic: kind path and id path required; Advanced fields | Generic details | InboundWebhookDialog.vue missing computed; en.json inbound.advanced etc. | true |
| No signature header = secret-in-body mode | Generic details | GenericInboundWebhookAdapter.cs:44-46 | true |
| Signing string default {id}.{timestamp}.{body}; timestamp header required | Generic details | GenericInboundWebhookAdapter.cs:117-129 | true |
| HMAC-SHA256 lowercase hex; 10 min window | Generic details | InboundSignatureVerifier.cs:32-33, 46-47; GenericInboundWebhookAdapter.cs:32 | true |
| New link: old stops at once | Manage inbound | W/i18n/en.json inbound.rotateDescription; WebhooksController.cs:95 rotate-token | true |
| Feed: starts pipelines, fills variables, feeds overlays | Bring in data | F/i18n/en.json description; CustomDataIngestService.cs domain event comment | true |
| Feed dialog steps and labels; new feed starts off | Bring in data | F/components/EventFeedDialog.vue enabled ref(false); F/i18n/en.json | true |
| Kind table (poll timer, socket open, push link; address; bearer secret; push needs secret) | kind table | F/i18n/en.json kind.*, secretHelp.*; CustomDataPollService.cs:277-288; CustomDataSourceService.cs:180-183 | true |
| Address host must be approved or not saved (poll and socket) | Bring in data | CustomDataSourceService.cs ValidateEgressAllowedAsync (any present URL) | true |
| Interval default 30 in dialog, floor 10 s | Bring in data | EventFeedDialog.vue defaultInterval 30; CustomDataSourceService.cs:32, 736-737 | true |
| Presets HypeRate and Pulsoid, socket | Bring in data | Presets/HypeRatePreset.cs:19-25; Presets/PulsoidPreset.cs:19-25; EventFeedDialog.vue presetOptions filter by kind | true |
| Max 50 feeds, unique event name | Bring in data | CustomDataSourceService.cs:31, 145-160 | true |
| Trigger custom.{name}; variable custom.{name}.{field} | Use data | CustomDataTriggerHandler.cs:52; CustomDataVariables.cs:27 | true |
| Failed fields shown; others still come through | Use data | EventFeedRow.vue:39, 63; CustomDataIngestService.cs ExtractFields | true |
| Push: Copy link after save; x-timestamp, x-signature sha256= over timestamp.body; event and id fields | Post to a feed | CustomDataSourceService.cs:585-603 (GenericConfig); EventFeedRow.vue:67-69; InboundSignatureVerifier.cs:33 | true |
| Same id not taken in again; 10 min window | Post to a feed | InboundWebhookDispatcher.cs DedupKey (HMAC-bound uses provider id); GenericInboundWebhookAdapter.cs:32 | true |
| Test: Sample data, Send test event, Fetch now only with an address | Test feed | F/components/TestFeedDialog.vue:92-100; F/i18n/en.json test.* | true |
| Delete names event responses and widgets | Test feed | F/i18n/en.json delete.category.* | true |

## Finding for the owner (not on the page)

The outbound rotate confirm text `dashboard.settings.webhooks.outbound.rotateDescription` says "The old secret stops working at once."
The server keeps the old secret as a secondary and signs every later delivery with both (OutboundWebhookEndpointService.cs:285-288, OutboundWebhookDispatcher.cs:412-415), and nothing clears the secondary.
The page states the server behavior and does not quote the dashboard warning.
