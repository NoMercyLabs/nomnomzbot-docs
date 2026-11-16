# Continued integration transport review — 2026-11-09

Snapshot record. Later source comparisons, inventory reconciliation, factual corrections and deployment observations are recorded in [final acceptance](completion-acceptance.md). Earlier hashes and counts apply only to their dated snapshots.

Status: **assigned documentation corrections applied; parent registration/build and independent review pending**. This is current-source author verification, not a live integration test or a blanket independent PASS. Product baseline inspected: `ec5c29488` in `C:/Projects/NoMercyLabs/nomnomzbot`; application source remained unchanged by this worker. Existing docs working-tree changes were preserved.

## Applied corrections

- Added `src/content/reference/en/code/webhooks-and-events.mdx`: outbound payload/stringification, exact HMAC key encoding, rotation, retry/replay and restart limits; inbound adapters/statuses/deduplication/routing; management routes; custom-feed sender, poll/socket differences and lifecycle; Dashboard SignalR methods, permissions/classes, push names and payloads, reconnect limits and separate hub purposes. Exact nested DTO/type sources are linked instead of silently claiming the compact payload table is a complete generated schema.
- Corrected `src/content/reference/en/integrations/webhooks-and-event-feeds.mdx` without changing its hierarchy: host switch versus endpoint/feed switch, unavailable outbound test, failure-attempt counting and dead-letter recovery, deduplication qualification, real feed-test effects, socket secret placement and poll defaults. Added contextual developer link and permission link.
- Extended `src/content/reference/en/code/automation-api.mdx`: real dashboard command-id and builtin-key discovery, credential separation, direct invocation's chat-gate bypass, token attribution and the absence of a durable accepted-work queue. Added transport-reference link. Existing routes and unrelated prose retained.

Parent owns navigation and overview. Suggested registration: `/reference/code/webhooks-and-events` beside the Automation API in Developer reference. No product implementation, shared navigation, existing review verdicts or other worker pages were modified.

## Claim/source record

All source paths in this table are product-relative. Source was read directly, including executable branches rather than relying on their comments. Some old comments contradict the code.

| Claim or correction | Current implementation inspected |
| --- | --- |
| Outbound request content type, fixed saved body/id on retry, re-signing timestamp/keys, 2xx success, failure counter, auto-disable and replay | `server/src/NomNomzBot.Infrastructure/Webhooks/OutboundWebhookDispatcher.cs:92-443`, including `ReplayDeliveryAsync`, `EnqueueOneAsync`, `AttemptCoreAsync`, `SendAsync`, `ApplyOutcomeAsync`, `UnwrapSecretsAsync` |
| Entire `whsec_` string used as UTF-8 key; current and previous secret survive rotation with no timed expiry here | Dispatcher `UnwrapSecretsAsync`; `OutboundWebhookSigner.cs:26-48`; `OutboundWebhookEndpointService.cs:272-316,563-590` |
| Flat string-map default body and JSON string-leaf substitution | `WebhookBodyTemplateRenderer.cs:32-96`; `OutboundWebhookFanoutHandler.cs:46-184` |
| Retry persistence and incomplete Pending-row recovery | `WebhookRetryProcessor.cs:31-56` selects only due `Failed` rows; `BackgroundServices/WebhookDeliveryWorker.cs:49-106` scans every 30 seconds, batch 50. Delivery rows and endpoint counters are saved by the dispatcher. No crash/restart experiment performed. |
| Exact jitter/backoff | `OutboundWebhookBackoffPolicy.cs:28-49` |
| Approved-host switch does not stop current outbound sends; deletion disables dependents | `Egress/HttpEgressAllowlistService.cs:97-120,158-198`; dispatcher `SendAsync` does not query allowlist status; `DependencyInjection.cs:820-825` registers only the scheme handler and validated connection handler. This corrects a contradictory controller comment. |
| HTTPS, public-address gate, no redirects | `Sandbox/EgressHttpClient.cs:28-92`; `OutboundWebhookTargetUrl.cs:26-54` |
| Outbound test is unavailable | `OutboundWebhookEndpointService.cs:393-405` returns `SERVICE_UNAVAILABLE`, despite user article and service/controller comments implying a real test. Corrected both pages. |
| Inbound methods/content types/262,144-byte limit/bare acknowledgement | `Api/Controllers/V1/InboundWebhookController.cs:32-102` |
| Inbound URL/secret/target semantics | `InboundWebhookEndpointService.cs:91-164,262-278`; `Api/Controllers/V1/WebhooksController.cs` read in full; `Application/DTOs/Webhooks/WebhookDtos.cs` endpoint/config DTOs |
| Inbound status distinctions and journal-based deduplication | `InboundWebhookDispatcher.cs:48-165,218-274` |
| Generic exact raw-body/signing-string/hex/timestamp fields | `Adapters/GenericInboundWebhookAdapter.cs:34-152`; `InboundSignatureVerifier.cs:25-67` |
| Six provider-specific verification and kind/id formats | Full `Adapters/GithubInboundWebhookAdapter.cs`, `KofiInboundWebhookAdapter.cs`, `FourthwallInboundWebhookAdapter.cs`, `ShopifyInboundWebhookAdapter.cs`, `PatreonInboundWebhookAdapter.cs`, `BuymeacoffeeInboundWebhookAdapter.cs` |
| Flattening and pipeline/event-response precedence | `Adapters/WebhookAdapterHelpers.cs:72-149`; `EventHandlers/InboundWebhookAutomationBridge.cs:67-186`; `InboundWebhookVariables.cs:25-49` |
| Rate policy is implemented despite stale controller comment | `Api/RateLimiting/AnonymousRateLimitPolicy.cs:20-39`; controller has `EnableRateLimiting(Anonymous)` |
| Webhook permissions/default floors, configurable custom-feed rights | `Content/Identity/ActionDefinitionSeeder.cs:389-392,520-521`; actual RequireAction attributes on management controllers |
| Poll null interval uses 60; failures/backoff/20-attempt disable and 64 KiB response bound | `CustomEvents/CustomDataPollService.cs:36-42,97-218,278-371`; hosted scan `CustomDataPollHostedService.cs`; backoff `CustomDataPollBackoffPolicy.cs` |
| Socket appends escaped secret, requires wss, reconnects 5–60 seconds; no per-message allowlist check | `CustomDataSocketHostedService.cs:139-300`; `Sockets/ICustomDataSocketFrameSource.cs:54-125`; `CustomDataSourceService.cs:683-720` validates host at save. Old socket comment says no allowlist, but save-time validation does exist. |
| Feed push signing/payload/link; raw character truncation and cached latest values | `CustomDataSourceService.cs:548-615`; `EventHandlers/CustomDataPushBridge.cs:51-105`; `FlatPayloadUnflattener.cs`; `CustomDataIngestService.cs:29-178`; `CustomDataVariables.cs`; `CustomDataTriggerHandler.cs` |
| Actual tests and maps | `CustomDataSourceService.cs:442-522`; `CustomDataFieldMapValidator.cs`; `Api/Controllers/V1/CustomDataSourcesController.cs`; `Application/CustomEvents/Services/ICustomDataSourceService.cs` DTOs; HypeRate/Pulsoid preset classes |
| Dashboard methods, channel authorization, class filtering and reply shapes | Full `Api/Hubs/DashboardHub.cs` plus `DashboardEventClasses.cs`, `DashboardNotifier.cs`, `ViewerChatEvents.cs`, `Clients/IDashboardClient.cs`, response records in `Hubs/Dtos/HubResponseDtos.cs` |
| Hub credentials, limits and reconnect buffer | `Api/Authentication/DashboardJwtBearer.cs:23-89`; `Api/Extensions/ApiSignalRExtensions.cs:29-66`; `dashboard/src/realtime/hubConnection.ts` confirms client token factory and current automatic-reconnect behavior |
| Remaining hub paths/admin gate | `ApiSignalRExtensions.cs:58-61`; `Hubs/AdminHub.cs:28-54`. This is not a complete Admin/OBS bridge protocol review. |
| Actual server selective join is Subscribe; client mismatch | `DashboardHub.cs:106-121`; `dashboard/src/realtime/dashboardHub.ts:87` calls nonexistent `JoinChannelClasses`. No application fix in this docs-only task. |
| Command ids, builtin keys, pagination and credentials | `Api/Controllers/V1/CommandsController.cs:91-115`; `BuiltinsController.cs:43-58`; `Application/Commands/Dtos/CommandDtos.cs`; `Application/Commands/Services/IBuiltinCommandService.cs:105-123`; `Api/Models/PaginatedResponse.cs`; `Controllers/BaseController.cs:437-454` |
| Automation target selection, attribution, Task.Run acceptance; normal chat gates bypassed | `AutomationApi/AutomationCommandService.cs:101-225,263-285,775-841`; `Application/AutomationApi/Dtos/AutomationTargetDto.cs`; `Commands/CommandInvoker.cs:125-252`. Custom command names are not resolved to custom ids; builtins are selected by key. |

Infrastructure paths above expand to `server/src/NomNomzBot.Infrastructure/` and unprefixed API/Application paths to their corresponding `server/src/NomNomzBot.*` directory.

## Executed offline checks

Executed Node against the actual three edited MDX files, with `@mdx-js/mdx`, `remark-gfm` and `gray-matter`:

- **3/3 MDX compile** and frontmatter title/description checks.
- **5/5 JSON fences parse** across the user article, Automation contract and new reference.
- **2/2 JavaScript examples execute** by extracting their actual fenced code and importing it as a module; no pasted duplicate implementation was tested.
- **8/8 signature/feed assertions pass**: valid Unicode body, altered body refusal, wrong-key refusal, stale-timestamp refusal, either rotation signature accepted, exact feed body, timestamp and lowercase-hex digest.
- Scoped `git diff --check` passes; Git only reports its existing LF-to-CRLF normalization warning.

Rerunnable check script: `C:/Users/patri/AppData/Local/Temp/nnz-transport-example-check.mjs`.
It extracts and executes the actual fenced examples, compiles all three articles, checks all JSON examples and compares the documented handler names with the current `IDashboardClient` interface (20/20 names).
Run:

```powershell
node C:\Users\patri\AppData\Local\Temp\nnz-transport-example-check.mjs C:\Projects\NoMercyLabs\nomnomzbot-docs
```

Latest executed output:

```json
{"mdxCompiled":3,"jsonExamplesParsed":5,"javascriptExamplesExecuted":2,"signatureAndFeedAssertions":8,"dashboardPushNamesCovered":20}
```

The 20-name comparison proves roster coverage, not semantic verification of every nested payload type.

Final follow-up reads included `EventFeedDialog.vue:56-102,112-142` and the request/save paths: the dashboard's preset selector only writes `presetKey`, and `CustomDataSourceService` stores it without applying `ICustomDataSourcePreset.Template`. Both articles now state that the address and field paths must be supplied. `OutboundWebhookDialog.vue:107-122` plus the service update/validation branches also prove that clearing an existing JSON template sends an empty string which is refused as invalid JSON; the developer contract gives the supported new-endpoint route back to the default body. These are source-proven application gaps, not hypothetical warnings.

The user's replacement AGENTS policy arrived during this batch: manual guard polling ceased immediately. Hook enforcement is now the sole work-stop signal, with only "Daily Codex budget reached" blocking work; failed reads do not block. No enforcement files or ledgers were changed.

These are sample execution/syntax checks, not C# dispatcher execution or external provider compatibility proof. Parent runs the complete Astro/TypeScript/navigation/rendered-link pipeline after registering the page. No bot started, real receiver/provider contacted, real channel data touched, commit/push or publication performed.

## Remaining boundaries and product findings

The documented unsupported paths remain unsupported: outbound test, Dashboard `TriggerAction`, client selective-join naming mismatch, runtime approved-host switch enforcement for existing outbound/socket activity, no durable Automation job queue, and no universal exactly-once guarantee. The correct available controls/alternatives are documented; application changes are outside scope. External provider requirements and live payload delivery were not independently checked against provider websites or running accounts in this batch. The adapter table is explicitly the current bot consumption contract.

Dashboard payloads are now discoverable and the server method/permission/lifecycle contract is documented, but this is not a complete generated typed schema for every nested chat DTO, dynamic `ChannelEvent.data`, Admin or OBS relay protocol. Those exact declaration links are intentional boundaries, not missing details silently declared complete. Independent reader/source review and browser checks remain for the parent.

Current page SHA256 values at worker handoff (later parent edits supersede these):

| Path under `src/content/reference/en/` | SHA256 |
| --- | --- |
| `integrations/webhooks-and-event-feeds.mdx` | `02d9ba71c5869a4bbe0f14efec36e1b0e321c0b2da627529d4230fec73110c4a` |
| `code/automation-api.mdx` | `243a429224a4eb35ffc55fc333b172fdeef6eebd3a247047c37fad1a3d9fafe0` |
| `code/webhooks-and-events.mdx` | `8194f6b706846210d0a0a51e75eb11ced3dc4d0148791a060709683747fe7492` |

