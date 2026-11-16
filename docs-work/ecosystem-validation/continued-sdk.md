# SDK contract continuation — 2026-11-09

Snapshot record. Later source comparisons, inventory reconciliation, factual corrections and deployment observations are recorded in [final acceptance](completion-acceptance.md). Earlier hashes and counts apply only to their dated snapshots.

Status: **targeted SDK corrections and offline parity checks complete; independent generator review accepted; parent integration/build pending.** This is the editing agent's source review, not a claim of live integration testing. The separate [independent review](review-sdk-contracts-20261109.md) records its own scope, probes and final hashes. Existing work, routes and prior review records were preserved. The user replaced manual budget polling during this batch: the hook now checks calls, and a failed usage read does not block work.

## Changes made in this batch

- Added `src/content/reference/en/code/sdk-contracts.mdx`: a lookup reference for script signatures/results, widget methods/results, all action inputs, all widget event types, nested payload objects and stream metric types. It keeps exact reference separate from the teaching articles. Expandable type definitions retain the technical depth without putting thousands of lines into the user guides. The installed-bot discovery section documents authentication, `sdk:read`, `context`, trigger/script/widget selectors, schema fallback, catalog samples and error cases.
- Corrected `sdk-widgets-actions-templates.mdx`: added the nine currently implemented actions missing from the compact table, `play_tts.scene_token`, the two shared-chat source fields on `ChatMessage`, and contextual links to exact types. This batch did not remove its Draft label; that was already part of the preceding working-tree changes.
- Corrected `sdk-data-and-storage.mdx`: `gifters` is uncapped, while the other documented ranked/name lists retain five entries. Added the records/windows, ban/unban filtering, gift-source reconciliation and live hype-train limitations after the basic example. Existing storage explanations and structure remain intact.
- Added `scripts/gen-sdk-contracts.mjs` and `scripts/sdk-contracts.test.mjs`. The generator reads the product's committed widget declaration file and current script declaration emitter; checks current action metadata, event registry roots and metric producers; executes the actual script/widget JavaScript with mocked host/browser boundaries to check member parity; and writes only marked lookup blocks. It refuses unsupported descriptor shapes and stale output. Its fixture tests are self-contained and do not require a sibling product checkout in CI.

Parent owns navigation, overview/README links and the full site build. No product implementation, credentials, live channels, provider state, commits, pushes or deployment were changed by this agent. Product source advanced during the task; the last inspected HEAD was `5b36bbeb44e94b118118e5da3e43209a99a903c7`, and the current-source checker was rerun after observing it. Other agents' product working-tree edits were left untouched.

## Fresh comparison results

| Surface | Result and evidence level |
| --- | --- |
| Action inputs | **123/123 action types; 198/198 field names, types, required flags and enum/repeatable shapes** agree between the committed declaration and current C# field descriptors. The compact article's names/required flags also match all 123 actions. This compares metadata, not every executor's validation or external side effects. |
| Widget events | **60/60 names and root payload types/unions** agree with `WidgetEventPayloadRegistry`. Nested fields are reproduced from the committed generated declaration, including the referenced object interfaces. This is not a fresh C# reflection/serialization execution test for every nested field. |
| Script declarations | **33 interfaces plus the `nnz` global** are extracted from the current `SdkRuntimeSurface` emitter. The production bootstrap executes in Node with mocked host primitives; every declared `nnz` namespace/member agrees with the resulting object. Return-value serialization and Jint resource limits are not established by this Node run. |
| Widget methods | The actual `OverlaySdkController` JavaScript executes in Node with a pending fake ticket fetch and mocked browser boundaries. All declared `NomNomz` object/namespace members agree. No network call, connection, audio playback, provider action or real DOM is used. |
| Stream metrics | **16/16 keys and emitted result types** agree with the current metric producer classes. All 16 producer implementations were read, along with stream selection, fact reading, ranking, chat-window and ban filtering. Nullable reference and live hype-train mismatches are documented below. |

The old 114-action count is historical. The newly covered actions are `scene_release`, `scene_reserve`, `song_clear_requester`, `song_queue_close`, `song_queue_open`, `tts_clear_voice`, `tts_set_voice`, `unwhitelist` and `whitelist`.

## Source anchors

All paths below are relative to `C:/Projects/NoMercyLabs/nomnomzbot`.

- `dashboard/src/api/nnz-widget.d.ts`: current committed action parameter, event payload, nested object, widget method and metric declaration snapshot.
- `server/src/NomNomzBot.Infrastructure/DevPlatform/SdkRuntimeSurface.cs:42,224,533,594,731`: authored script payload interfaces, global, primitive facade, helpers and API namespaces. `CustomCode/Jint/JintScriptExecutor.cs:56` contains the executed bootstrap; the C# host and Jint engine were not run.
- `server/src/NomNomzBot.Api/Controllers/OverlaySdkController.cs:38-618`: executed widget SDK string, including asynchronous methods, event registration and namespace members. Its real transport was replaced by inert boundaries for member comparison.
- `server/src/NomNomzBot.Infrastructure/DevPlatform/ActionParamsTypeWriter.cs:31-87`, `Application/Abstractions/Pipeline/PipelineActionFieldDescriptor.cs:197-207` and `Infrastructure/DependencyInjection.cs:268-273`: metadata-to-TypeScript mapping, descriptor defaults and automatic action registration. `Application` and `Infrastructure` here expand under `server/src/NomNomzBot.*`.
- The generator reads every current Infrastructure class with an `ActionType` expression, excluding the explicitly unregistered capturing decorator. It also rejects unsupported initialized/getter action declarations rather than dropping files without `ActionType =>`. It resolves the shared playlist-provider field, stage-preset discovery, Discord notification trigger list, media command list and reply-target enum from their defining source. An unrecognized expression fails the comparison.
- `server/src/NomNomzBot.Api/Hubs/Broadcasters/WidgetEventPayloadRegistry.cs:48-115` and `Infrastructure/DevPlatform/TypeScriptDefinitionWriter.cs:177-218`: event names, payload types, game variants, custom event shape and the separate widget event map. Event-name constants are checked in their defining source files too.
- `server/src/NomNomzBot.Infrastructure/DevPlatform/StreamMetricTypeScript.cs:29-75` and every `Infrastructure/Dashboard/Stats/*Metric.cs`: the 16 producer keys and result types. `StreamStatsService.cs:31-127` selects channel/window/metrics; `StreamFactReader.cs:44-125` applies original occurrence times and excludes outgoing raids/banned identities; `StreamRanking` caps only its `Top` path.
- `Infrastructure/Dashboard/Stats/GiftersMetric.cs:29-59` takes the larger per-gifter batch/recipient count and uses uncapped `StreamRanking.All`. `SubsMetric.cs:26-44` instead sums gift batches into `subs.gift`; those values can differ with missing source records.
- `Infrastructure/Dashboard/Stats/StreamBanFilter.cs:40-158`: newest ban/unban plus saved-list fallback, conversion to known user IDs and query filtering. Timeouts are not ban inputs.
- `server/src/NomNomzBot.Api/Controllers/V1/SdkController.cs:35-199`, `Infrastructure/CustomCode/CodeScriptTriggerResolver.cs:37-154`, `Infrastructure/DevPlatform/SdkTypeEmitter.cs:82-175` and `Application/DevPlatform/Dtos/EventCatalogItemDto.cs:28-34`: routes/auth, optional selectors, own-channel scope, generic fallback, visibility and event catalog samples. The emitter falls back to a reflected example; a sample is not necessarily a captured live provider payload.

## Verified limitations retained in the articles

**Nullable metric declarations:** `StreamMetricTypeScript` tests `Nullable.GetUnderlyingType` when deciding metric optionality. This preserves nullable value types such as peak viewers but loses nullable reference annotations on `StreamMetric<StreamStatsHypeTrainDto?>` and channel results. `Application/Dashboard/Dtos/StreamStatsDto.cs:27-80` omits null JSON fields, and `HypeTrainMetric.cs:27-30` returns null when no matching rows exist. The new reference explicitly separates these emitted types from wire omission and tells consumers to check the fields.

**Live hype-train metric source:** `Community/EventHandlers/HypeTrainEventHandler.cs:73-92` writes `hype_train.id`, `hype_train.level` and `hype_train.total` as text variables. `Platform/Eventing/TwitchAlertHandlerBase.cs:108-119,264-308` serializes that variable dictionary into a channel-event row without adding `occurredAt`. `StreamFactReader.cs:44-52,120-121` skips rows without that timestamp, and `HypeTrainMetric.cs:35-36` expects numeric `level`. `Analytics/TwitchChannelEventLogProjection.cs:47-67` has no `HypeTrainEndedEvent` mapping to enrich that row. Therefore the inspected live path cannot be used as proof that an absent metric means no train occurred. The documentation now states the limitation; this is a source trace, not an observed live test or an application fix.

**Runtime output versus editor declarations:** input types do not guarantee an action's output keys are declared for pipeline save validation. The exact reference links the parent's speech coordination example, including the `scene.token` prerequisite. Parent owns that user-facing explanation and its source verification.

**`onAny` metadata declaration:** `OverlaySdkController.cs:99-104,138-142` supplies `(eventType, data, meta)` to `onAny` for replay and live delivery. The typed branch of `SdkRuntimeSurface.AppendEventMethods` uses `NnzWidgetAnyEvent`, while `TypeScriptDefinitionWriter.RenderWidgetEventMap` emits two-item tuples without metadata. The public reference now explains this declaration/runtime difference and points readers to the event-specific `on` overload for typed metadata. The ordinary widget guide already described the real three-argument behavior correctly. No application code was changed.

## Executed checks and reruns

From `C:/Projects/NoMercyLabs/nomnomzbot-docs`:

```powershell
node scripts/gen-sdk-contracts.mjs --check
node --test scripts/sdk-contracts.test.mjs
git diff --check -- src/content/reference/en/code/sdk-contracts.mdx src/content/reference/en/code/sdk-data-and-storage.mdx src/content/reference/en/code/sdk-widgets-actions-templates.mdx scripts/gen-sdk-contracts.mjs scripts/sdk-contracts.test.mjs
```

All passed. The generator's current result is `123 actions, 198 fields, 60 widget events, 16 metrics, 33 script interfaces`. **12/12 fixture regressions** passed: real generation/recheck; changed requiredness; unsupported action declaration; changed event payload root; unsupported explicitly typed registry constructor; the explicit nested-field snapshot boundary; unrecognized descriptor; missing script runtime method; extra widget runtime method; stale generated page; changed metric producer type; and a new metric outside the original folder/naming convention. Fixtures mutate only temporary files and execute the actual generator entry point.

The initial eight tests did not catch source-discovery omissions. Independent review added scratch mutations that exposed initialized `ActionType` properties, explicit `WidgetEventPayloadEntry` constructors and metrics without a `Metric.cs` filename. Those paths are now rejected or discovered, with regressions above. A changed nested C# payload field deliberately remains outside the checker: the public page states that its nested fields follow the committed generated declaration. The independent reviewer reran all four scratch probes after repair: the three discovery changes fail, while the qualified snapshot case passes as expected.

**3/3 edited SDK MDX files** compiled with `@mdx-js/mdx` and `remark-gfm`. **12/12 JavaScript fences** across the seven existing SDK/script articles parsed with Acorn; there were no JSON fences in that seven-page set. These are offline syntax checks, not Jint/provider execution. Parent's full Astro, TypeScript, links/anchors/assets/search and all-tests build remains the integration gate.

Snapshot SHA256 values for the three article files:

| File under `src/content/reference/en/code/` | SHA256 |
| --- | --- |
| `sdk-contracts.mdx` | `81fc6c558877cf47b188f4d7a15b9afd556168a08c8fe99ed7d3b1c2e59121d5` |
| `sdk-data-and-storage.mdx` | `f467dbc81c787b4cc7477f0e4375f2c562a8d3d996db3127fe23bfc27067d34b` |
| `sdk-widgets-actions-templates.mdx` | `9c99be936777b25a564d13ef9497f429fe34e9fd91636807f416d4b59f258d7c` |

At this batch snapshot, the remaining boundaries were: the separate independent review is focused, not exhaustive fact/reader approval of every inherited SDK statement; no comprehensive fresh C# reflection/serialization test of every nested payload; no Jint execution/resource-limit test; no browser/keyboard/audio experience or live provider checks. The documented implementation/declaration mismatches remain application issues. This batch completes its reference/parity corrections, not the entire documentation ecosystem audit.

The later [C# comparison](completion-contracts.md) now verifies the complete nested declaration snapshot and representative JSON/reflection branches. It supersedes the missing fresh-reflection check above, while retaining explicit limits for live values and untested serialization branches.
