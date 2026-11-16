# Independent SDK contract review — 2026-11-09

Status: **TARGETED REPAIR REVIEW PASSED; nested C# payload-field parity remains an explicit snapshot boundary**. Initial source-discovery findings and their former false-green results are preserved below. This review is independent of the SDK author. It is not exhaustive runtime verification of every SDK method or nested payload field. No worker-owned SDK file was edited by the reviewer.

## Scope and evidence level

Read the complete `scripts/gen-sdk-contracts.mjs` and `scripts/sdk-contracts.test.mjs`, the new reference's explanatory prose and section organization, and representative generated interfaces/tables. All generated blocks were compared by executing the actual generator `--check`; they were not each semantically rederived from C# runtime behavior in this 15-minute review.

Current-product source inspection covered `DevPlatform/ActionParamsTypeWriter.cs`, `TypeScriptDefinitionWriter.cs`, `StreamMetricTypeScript.cs`, `SdkRuntimeSurface.cs`, `SdkTypeEmitter.cs`, `Api/Controllers/V1/SdkController.cs`, `Api/Hubs/Broadcasters/WidgetEventPayloadRegistry.cs`, selected `OverlaySdkController` runtime calls, `ChannelMetric`, `HypeTrainMetric` and selected `ScriptHostBridge` serialization. Paths beginning DevPlatform expand under `server/src/NomNomzBot.Infrastructure`; other project prefixes expand under `server/src/NomNomzBot.*`.

The page separates lookup from the explanatory guides, distinguishes script/widget runtimes, documents nullable metric declaration limitations, explains discovery credentials and does not claim that an emitted sample is an actual provider event. The six linked reference routes exist; selected linked headings were checked directly. A direct MDX + GFM compilation passed. No broken local link was found in this focused check; the parent rendered checker remains the authority for all fragments/assets.

## Findings

### R1 — New action source shapes can be omitted silently (P2)

`verifyActions()` first skips any file lacking the exact substring `ActionType =>`. An otherwise valid new `ICommandAction` with `public string ActionType { get; } = "hidden";` is omitted before unsupported-shape handling. If the committed declaration is stale and omits it too, source/declaration counts still agree and `--check` passes. The guarantee should fail when an action candidate has an unsupported shape instead of excluding the candidate itself.

Reproduced using a temporary copy of the actual test fixture: generate a passing page, add `HiddenAction.cs` with the property initializer and no fields, then run `--check`. Exit status **0** falsely reports the original one action. No product source changed.

### R2 — New registry constructor shapes can be omitted silently (P2)

`verifyWidgetEvents()` recognizes only `new(...)`. An additional explicit `new WidgetEventPayloadEntry("hidden", typeof(HiddenPayload))` is not counted, and stale declarations/page still pass. Count or structurally validate every entry in the registry's Events collection before comparing names/types; a parser with no match must not silently define the source inventory.

The real-entry typed-constructor mutation in the same fixture returned exit **0**. Existing tests catch a recognized entry's changed type, but not an unrecognized additional entry.

### R3 — Nested payload fields are declaration snapshot coverage, not fresh C# equality

The event check compares registry event names and registered payload **type names**. The emitted payload fields come from the committed `dashboard/src/api/nnz-widget.d.ts`; no DTO field comparison or reflection refresh runs here. Adding `int NewValue` to the C# `FollowAlertDto` with the same registered type name and unchanged d.ts still returns exit **0**. This is a real proof boundary, not evidence that the current reference necessarily has a stale field.

Per the parent's direction, an explicit boundary is acceptable: describe these fields as a committed generated-declaration snapshot, retain the installed-bot discovery endpoints and do not claim complete source/runtime field parity. The review did not discover a concrete current field mismatch in the inspected chat/metric DTOs. The future SDK exporter/source-reflection check can close the boundary without involving live providers.

### R4 — Metric discovery is narrower than the real emitter (P2)

The generator scans `Dashboard/Stats/*Metric.cs`, but production `StreamMetricTypeScript.Metrics()` discovers all nonabstract `IStreamMetric` classes from the assembly, independent of filename. Adding a valid `ExtraStreamValue.cs : StreamMetric<long>` with key `extra` leaves the narrow glob unchanged; stale declarations and page pass. Discover or reject all actual metric candidates before comparing supported source shapes. The fourth fixture probe returned exit **0**.

## Executed checks and reproduction

```powershell
node scripts/gen-sdk-contracts.mjs --check
node --test scripts/sdk-contracts.test.mjs
node C:\Users\patri\AppData\Local\Temp\nnz-sdk-review-probes.mjs
```

The first two passed: **123 actions, 198 fields, 60 widget events, 16 metrics, 33 script interfaces; 8/8 tests**. The scratch probe derives fixture setup from the actual test file and mutates only temporary fixture files, not an imitation generator. It cleans its temporary roots after running. All four original probes returned exit 0, confirming R1–R4. A separate command compiled `sdk-contracts.mdx` and resolved 6/6 linked reference routes. This is Node/sample/static verification, not C#, Jint, browser, network or provider execution.

## Review snapshot hashes

| File | SHA256 |
| --- | --- |
| `scripts/gen-sdk-contracts.mjs` | `cc196faaf2b7625532d2c5f1961ef3825c1350657949bd39835d5a290e6e2a68` |
| `scripts/sdk-contracts.test.mjs` | `6ba27f9767344bdae2fec082a906ec5649910e8b3f6ecbace563c75b1b1c074e` |
| `src/content/reference/en/code/sdk-contracts.mdx` | `bd586cef36ed9a47c83ef512591f594721fecd544dda9bf74d3ac9bb61de9a74` |

Findings and reproduction were sent to the parent and SDK author. Repair review will be appended with new hashes/results; the initial false-green evidence remains historical.

## Repair review

The SDK author repaired R1, R2 and R4 and qualified R3. I independently read the changed guards, tests and prose, then reran the real checker, the entire SDK fixture suite and all four original scratch probes against the changed files.

| Finding | Recheck result |
| --- | --- |
| R1 initialized-property action omitted | Now exits 1 with `unsupported action declaration for HiddenAction`. The action scan no longer uses the original exact-string prefilter and rejects the unsupported candidate. |
| R2 explicitly typed registry constructor omitted | Now exits 1 with `Unsupported widget event registry entry shape`. Constructor count is checked before matched-name comparison. |
| R3 added C# payload field without updated d.ts | Still exits 0, intentionally. The page now explicitly says widget payload fields follow the generated dashboard TypeScript snapshot and the documentation build does not refresh nested C# fields. A fixture pins that proof boundary. |
| R4 metric without filename suffix omitted | Now exits 1 with `Stream metric count changed`. Direct StreamMetric subclasses are discovered across Infrastructure source rather than a Stats filename glob. |

The production `--check` passed again: **123 actions, 198 fields, 60 widget event roots, 16 metrics, 33 script interfaces**. **12/12 fixture tests passed** (the original eight plus four coverage/boundary regressions). MDX compiled after the prose repair. Scoped whitespace validation passed.

These guards deliberately support the source forms they parse; they are not a C# compiler or proof for every conceivable inheritance/registration syntax. The supplied false-green cases are now refused rather than omitted. Nested DTO property types and serialization/nullability still require an up-to-date committed declaration or the installed bot's generated schema; this review does not upgrade that boundary to fresh reflection equality or live event proof. The page is useful as a type lookup with explanatory links, while ordinary guides carry grants/limits/error semantics. No new blocking finding remains within this focused repair review.

Final reviewed hashes:

| File | SHA256 |
| --- | --- |
| `scripts/gen-sdk-contracts.mjs` | `a6c059c186afd4291f2459544568092473aa96387e05f185e88b68d128d1ca5a` |
| `scripts/sdk-contracts.test.mjs` | `b928a349299f55d347e71be34604b9b7ec0ccf4c07d5f2855b3c1e5847973049` |
| `src/content/reference/en/code/sdk-contracts.mdx` | `3b3c11b95948619bd94fb4fe5053490bb95d71623776509ccba41bf3bda58816` |

## Final onAny prose delta

After the repair review, the author added two sentences before the Widget declaration block: both `on` and `onAny` receive metadata at runtime, but typed `onAny` declares only event name and payload; use event-specific `on` for a declared `meta` argument. I independently checked this narrow addition against `OverlaySdkController.cs:90-104,137-142` (seed and live dispatch), `SdkRuntimeSurface.cs:498-513` (typed handler declaration), and `TypeScriptDefinitionWriter.cs:181-209` (the two-element `NnzWidgetAnyEvent` tuples). The assertion and suggested typed alternative agree with the current implementation. No generated declaration or code changed in this delta.

The final reviewed page SHA256 is **`81fc6c558877cf47b188f4d7a15b9afd556168a08c8fe99ed7d3b1c2e59121d5`**, superseding the page hash in the preceding table. Generator/test hashes and the retained snapshot boundary above remain unchanged. The parent's frozen-file final build covers this prose addition; no content edits were made during this final hash verification.
