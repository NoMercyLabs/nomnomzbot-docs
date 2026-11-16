# Final contract comparison — November 9, 2026

The developer entry point links directly to the Automation API, SDK types/payloads, webhook/inbound/feed and Dashboard SignalR references. All four added routes occur once in Developer reference navigation. The Dashboard contract is a section of `code/webhooks-and-events`, not a missing separate site or article. Automated route checks cover these links; interactive discovery is not certified.

## Reproducible C# comparison

Run `node scripts/check-sdk-reflection.mjs` in this documentation checkout, with a sibling product checkout or `NOMNOMZBOT_SOURCE`, the .NET 10 SDK and product test dependencies. The command builds current source; it does not use `--no-build`, start the bot or contact providers. It forces `NNZ_WRITE_SDK_TYPES=0` and requires fresh, nonempty TRX results with every test executed and passed, including every required test class. Temporary result files are removed afterward. The wrapper's three regression cases reject empty, missing, skipped or failed results and a passing filter that silently lost a required class.

The executed run passed **35 product tests: 11 API + 24 Infrastructure**, with no skipped tests. Log: [sdk-reflection-20261109.log](sdk-reflection-20261109.log).

| Product test class | Evidence supplied |
| --- | --- |
| `DashboardWidgetSdkTypesTests` | Re-emits the complete widget declaration using the real `EventCatalog`, `WidgetEventPayloadRegistry` and registered action descriptors, comparing it byte-for-byte after newline normalization with `dashboard/src/api/nnz-widget.d.ts`. Nested reflected fields are included. |
| `WidgetEventPayloadRegistryDriftTests` | Checks registered names/types against test samples and broadcaster send sites. |
| `SdkTypeEmitterTests` | Exercises nesting/collections, nullability, enums and PII/NotExposed/context visibility behavior in declarations and schemas. |
| `SdkWidgetEventTypesTests` | Tests typed event maps, variant literals, unknown/custom payload branches and handler declarations. |
| `SdkHostJsonDriftTests` | Calls the real script host bridge with representative mocked dependencies, recursively checking returned JSON against its declared result interfaces. |
| `ReflectionSampleGeneratorStabilityTests` | Exercises deterministic reflection-generated samples. |

This is a substantial improvement over the Node-only check: editing a reachable C# DTO field now changes fresh emitted output and makes the committed declaration comparison fail. No regex reimplementation of C# reflection was introduced.

The existing `node scripts/gen-sdk-contracts.mjs --check` separately passed against **123 actions, 198 action fields, 60 widget event names/root types, 16 metrics and 33 script interfaces**. It ties the documentation blocks to the compared declaration snapshot and source metadata. Both commands are needed; `yarn build` deliberately remains runnable without a product checkout.

## Boundaries and regeneration

Fresh declaration parity is not exhaustive runtime wire parity. JSON samples cover selected host results, not every possible value, custom converter, provider response, dynamic custom-event field or combination of nullable branches. Registry/type checks do not serialize every live widget broadcaster result. The standalone publishing build cannot certify current C# output. Trigger- and widget-specific declarations should be fetched from the installed bot, as documented on the SDK page.

The precise regeneration procedure is in [README — Validation](../../README.md#validation): review the product change; run only `DashboardWidgetSdkTypesTests` with `NNZ_WRITE_SDK_TYPES=1`; clear that variable in `finally`; inspect the product declaration diff; rerun the reflection comparison without writing; regenerate the documentation's marked blocks and inspect that diff. A failing comparison is evidence to investigate, not permission to accept a changed contract automatically.

The prior focused independent SDK review remains valid for its recorded snapshot and repaired generator findings. The current reflection wrapper and revised limitation prose are author-reviewed and executed, not a new independent-review PASS. Earlier payload-reflection limitations are superseded only to the extent stated above. Broader Admin/OBS protocols and live provider effects were not added to this targeted pass.
