# Current independent fact check

Verdict: PASS
Reviewed: src/content/reference/en/integrations/webhooks-and-event-feeds.mdx
Reviewed-SHA: 5f95383cf13a01e20e9fbd4b2e9fefa7598a472acc0db06cea3742a1c0da2c31
Reviewed-SHA256: 5f95383cf13a01e20e9fbd4b2e9fefa7598a472acc0db06cea3742a1c0da2c31
Reviewed-Date: 2026-11-05
Reviewer: independent media-section reviewer
Product: 54da8b6318de63b5205a0ff8db35e0b9045dd959 plus preserved current music UI edits

The full article was read in sidebar order. Consequential defaults, permissions, prerequisites, state lifetime and effects were traced against current source; repaired findings were re-read before this verdict. This is source verification, not a live-channel or visible/audible output test.

- server/src/NomNomzBot.Infrastructure/Webhooks/OutboundWebhookSigner.cs:24-44 signs id.timestamp.body with HMAC-SHA256/base64; OutboundWebhookBackoffPolicy.cs:21-36 gives15..30-second initial retry and30..60-minute cap; OutboundWebhookDispatcher.cs:314-377 sets JSON/plain content type and disables after20 failures.
- server/src/NomNomzBot.Infrastructure/Webhooks/InboundWebhookEndpointService.cs:90-125,170-183 validates bindings and rotates the token; CustomEvents/CustomDataSourceService.cs:31-32,674-737 validates approved egress and50-feed/10-second limits.
- server/src/NomNomzBot.Infrastructure/CustomEvents/EventHandlers/CustomDataVariables.cs:20-28 seeds custom.source.field; Platform/Templating/Helpers/Legacy/LegacyTemplateHelpers.cs:283-330 and Parsing/TemplateParser.cs:137-169 require single-brace helper syntax. The repaired worked example now uses {custom.heartrate.bpm} and the expected72.

Source paths without a repeated layer prefix in a bullet are relative to its preceding Infrastructure or dashboard scope. The section report records method, repaired findings, external sources and remaining product limitations: docs-work/overhaul/review-automation-media-integrations.md.

## Historical evidence

Older hashes, verdicts and values below are retained for history and are not the current review.

# Fact-check: /reference/integrations/webhooks-and-event-feeds
Verdict: PENDING
Reviewed: src/content/reference/en/integrations/webhooks-and-event-feeds.mdx
Reviewed-SHA: 5ff1eedf428b3ff25ea248a3a53deb487c34168baff855f2643bed8beae59cca

## 2026-11-05 author source verification

Author source audit complete; independent verdict pending. This hash binds the current text, not the historical PASS below. The article was read in full and revised toward the user's explainer style while preserving precise reference detail. OutboundWebhookSigner.cs; OutboundWebhookDispatcher.cs; OutboundWebhookBackoffPolicy.cs; CustomDataSourceService.cs. Signing, retries, plain text, JSON selection and data-source controls were traced.

The section inventory and known implementation gaps are in [automation-media-integrations.md](../overhaul/automation-media-integrations.md). This is source verification, not a live-channel execution claim. Independent review must account for product changes after the original author pass at b12f4f696.

## Historical review (SHA 41e4ff973723c89b)

Historical verdict: PASS. The earlier evidence below is retained as history and is superseded where the current article or source changed.

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
