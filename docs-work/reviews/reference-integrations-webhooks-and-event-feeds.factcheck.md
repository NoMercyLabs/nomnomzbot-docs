# Fact-check: /reference/integrations/webhooks-and-event-feeds
Verdict: PASS
Reviewed: src/content/reference/en/integrations/webhooks-and-event-feeds.mdx
Reviewed-SHA: 41e4ff973723c89b

This verdict judges the current page text (sha256 41e4ff973723c89b...). It does not carry an older verdict forward.
Product repo: C:\Projects\NoMercyLabs\nomnomzbot (master, read only). S = server/src, W = dashboard/src/views/dashboard/settings/webhooks, F = dashboard/src/views/dashboard/settings/custom-event-feeds.

## Claims

| Claim | Page line | Product file and line | Verdict |
| --- | --- | --- | --- |
| Moderator reads webhooks; Editor writes them | 18-19 | S/NomNomzBot.Infrastructure/Content/Identity/ActionDefinitionSeeder.cs:391-392 | true |
| Moderator reads and writes feeds | 18 | ActionDefinitionSeeder.cs:520-521 | true |
| Lead moderator sits between Moderator and Editor | 18 | ActionDefinitionSeeder.cs:52 (LeadModerator = 20) | true |
| Approved hosts labels: Host, Add host, Allow posts to, Remove, switched-off host refused | 25-36 | W/i18n/en.json allowlist.* ("Add host", "Allow posts to {host}", "Remove", "...stays here but is refused") | true |
| Remove names the webhooks that use the host; after removal posts refused | 35-36 | W/i18n/en.json allowlist remove texts ("Webhooks that post to this host are refused from now on", "No webhook uses this host.") | true |
| Outbound dialog labels: New webhook, New outbound webhook, Name, Host (no https://), Path, Events to send, Create webhook | 42-51 | W/i18n/en.json outbound.* | true |
| Event groups Stream, Chat, Moderation | 49 | W/i18n/en.json category labels | true |
| Secret shown once: Your signing secret, Copy secret, I saved it | 52-54 | W/i18n/en.json outbound.secret.*; claims row OutboundWebhookEndpointService.cs:35-37 | true |
| https:// + host + path; path leaving host refused | 56-57 | OutboundWebhookTargetUrl.cs:34-38 (claims lead, accepted) | true |
| Message body empty = event values as JSON; Body is JSON default on; Custom headers Name: value, hidden on edit | 59-66 | W/i18n/en.json bodyHelp, bodyIsJsonHelp, headersHelp, headersKept; WebhookBodyTemplateRenderer.cs:36-55 (claims lead) | true |
| Headers webhook-id/timestamp/signature; v1, base64 HMAC-SHA256 of id.timestamp.body | 70-72 | OutboundWebhookDispatcher.cs:317-319; OutboundWebhookSigner.cs (claims lead) | true |
| After rotate, signs with new and previous secret, space-separated | 74-76 | OutboundWebhookDispatcher.cs:245 UnwrapSecretsAsync returns a list; OutboundWebhookEndpointService.cs:285-288 | true |
| 2xx delivered, else retried; 30 s base, doubles, cap 1 h | 80-82 | S/NomNomzBot.Infrastructure/Webhooks/OutboundWebhookBackoffPolicy.cs:21-22, 33-34 | true |
| 20 failures in a row switches off; Switched off, reason; Turn back on | 84-86 | OutboundWebhookDispatcher.cs:47 (AutoDisableThreshold = 20), 350-356; W/i18n/en.json "Switched off", "Turn back on" | true |
| Row: Last delivery / Nothing delivered yet; test shows code and ms | 90-95 | W/i18n/en.json "Last delivery {when}", "Nothing delivered yet", "Answer {code} in {ms} ms" | true |
| Delete asks with counts of uses | 99 | W/i18n/en.json delete texts ("{what}: {count}", "Pipeline steps that use it" ...) | true |
| Delivery line: status, code, attempt, ms; statuses Waiting/Delivered/Failed/Gave up; Send again | 101-110 | W/i18n/en.json "Answer {code}, attempt {attempt}, {ms} ms, {when}", status labels, "Send again" | true |
| Gave up only when the webhook is switched off | 108 | OutboundWebhookDispatcher.cs:237-242 and 356 are the only DeadLetter writes (grep) | true |
| Send again on an off webhook refused | 110-111 | OutboundWebhookDispatcher.cs:119-121 (claims lead) | true |
| Pipeline send-webhook step | 113 | SendWebhookAction.cs ActionType send_webhook (claims lead) | true |
| Inbound labels: New inbound webhook, Name, Provider, Secret, Event kind path, Event id path, Pipeline to start, Event to raise, Create webhook, Copy link, Still needed to create | 120-134 | W/i18n/en.json inbound.* ("Still needed to create: {fields}.") | true |
| Provider fixed after save; provider list shown as raw names | 124, 136-144 | InboundWebhookDialog.vue :disabled="saved", adapters const (claims lead) | true |
| Pipeline wins; else event; both empty = record only | 146-148 | InboundWebhookAutomationBridge.cs HandleAsync (claims lead) | true |
| JSON or form post only, 256 KB | 150 | S/NomNomzBot.Api/Controllers/V1/InboundWebhookController.cs:41, 47 | true |
| Duplicate call not run again | 151 | InboundWebhookDispatcher.cs dedup (claims lead) | true |
| Generic Advanced field labels | 156-164 | W/i18n/en.json "Advanced", "Signature header", "Signature prefix", "Signing string", "Timestamp header", "Secret field in the body" | true |
| HMAC-SHA256 lowercase hex; 10 minute window | 166-167, 265 | GenericInboundWebhookAdapter.cs:32 (ReplayTolerance 10 min); InboundSignatureVerifier.cs (claims lead) | true |
| Inbound row: Nothing received yet; Make a new link, old link stops at once; Secret empty keeps it | 173-182 | W/i18n/en.json "Nothing received yet", rotate texts, secretKept | true |
| Feed labels: New feed, How data arrives, Start from a service, Name, Event name, Address, Secret, Check every (seconds), Fields, Add field, Field name, Path in the data, On, Make feed | 190-200 | F/i18n/en.json | true |
| Feed makes events for pipelines, variables, overlays | 188 | F/i18n/en.json description | true |
| Test, Fetch now, Paths found in the answer, Sample data, Send test event, "Sent." | 210-221, 270-272 | F/i18n/en.json test.* ("Sent. custom.{name} fired with your sample.") | true |
| Failed fields text | 222, 245 | F/i18n/en.json "These fields failed on the last data: {fields}" | true |
| Kind table rows and secret use | 225-229 | F/i18n/en.json kind.*, secretHelp.* | true |
| Address host must be approved | 231-232 | CustomDataSourceService.cs ValidateEgressAllowedAsync (claims lead) | true |
| Interval default 30, floor 10 s | 234-235 | CustomDataSourceService.cs:32 (MinPollIntervalSeconds = 10); EventFeedDialog.vue defaultInterval 30 (claims lead) | true |
| Max 50 feeds, unique event name | 238 | CustomDataSourceService.cs:31, 145-147 | true |
| Trigger custom.{name}; variable custom.{name}.{field} | 242-243 | CustomDataSeedProvider.cs:47; F/i18n/en.json eventName help | true |
| Edit: Save feed; Delete names event responses and widgets | 274-276 | F/i18n/en.json "Save feed", "event responses", "widgets" | true |

## Links

All three link targets are rows of docs-work/map.md: /reference/commands/pipelines, /reference/automation/event-responses, /reference/integrations/stream-deck-and-api-devices.

## Conventions

No people's names, no action keys, no numbered levels, no license name, no "open source". American English (grep for British forms: none). No hosting, price or paid plan is mentioned, so no hosting marker is needed. No NoMercyBot spelling. No example script.

## Notes (not blocking)

- Row action names "Send a test", "Make a new signing secret", "Edit", "Delete" are short forms of icon aria-labels ("Send a test to {name}", "Make a new signing secret for {name}"). Acceptable as names of icon buttons.
- The dashboard rotate warning says "The old secret stops working at once", which contradicts the server's dual signing (page line 74-76 follows the server). This is a product text defect for the owner, as the claims file notes.
- The feed interval help says the bot may raise the number to stay inside the plan's limit; the page does not mention it. That is fine, and it avoids a plan mention.
