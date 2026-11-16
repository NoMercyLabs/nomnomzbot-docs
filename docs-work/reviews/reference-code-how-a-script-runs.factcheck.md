# Current targeted source review — 2026-11-06

Verdict: TARGETED AUTHOR SELF-REVIEW; no independent or exhaustive PASS.
Reviewed: src/content/reference/en/code/how-a-script-runs.mdx
Reviewed-SHA256: 92c914b80f738352d1fca5c73dce2fa8967b9f483c92f30e09b30f5d34d6219c
Reviewer: editing agent (author self-review)

Full editorial read; removed blanket Draft callout/title. Focused source check: Infrastructure/CustomCode/ScriptRunner.cs:43-205 confirms script enabled, quota, valid version, saved grants, execution and history ordering. Engine/resource limits are not an exhaustive new validation.

Coverage details and final static-check results: [final-developer.md](../ecosystem-validation/final-developer.md). Full reading is distinct from focused source verification. No live application/provider test or whole-project build in this batch.

## Historical records below — verdicts and hashes preserved

# Independent source review: /reference/code/how-a-script-runs
Verdict: PASS
Reviewed: src/content/reference/en/code/how-a-script-runs.mdx
Reviewed-SHA: 752d7406bd44d929
Reviewed-SHA256: 752d7406bd44d9293ded88d4cba81bc144daf2a74703422947d715d1cc9299e6
Reviewed-Date: 2026-11-05
Reviewer: independent reviewer, separate from article author
Product-Revision: 54da8b6318de63b5205a0ff8db35e0b9045dd959

The complete current article was read in navigation order and checked against current product source. Historical PASS entries below are leads, not approval of this revision. Atlas voice/template gates do not govern this review.

## Current evidence and result

No substantive finding. Grant and quota order, fresh run state, returned variables/output/stop and live failure paths checked.

Source files opened in this review: CustomCode/ScriptRunner.cs:45-180; Application/Contracts/CustomCode/ScriptContracts.cs:26-57; CustomCode/Jint/JintScriptExecutor.cs:425-618; ScriptRunClock.cs:28-68; JintEngineFactory.cs:31-59.

Unqualified paths beginning Identity, CustomCode, Billing, EventStore, Engagement, Rewards, Widgets or Platform are under server/src/NomNomzBot.Infrastructure; Api and Domain identify their corresponding server projects. Dashboard shorthand is under dashboard/src/views/dashboard.

Verification is read-only source review. No bot/API startup, live account authorization, channel writes, C# host/Jint execution, Docker install or restore was performed. Documentation build/render QA belongs to the combined parent pass. The SDK reference and worked-example checks additionally ran the existing read-only nnz-code-doc-check.mjs with production JavaScript bootstrap and substituted host I/O.

## Historical review (superseded)

# Fact-check: /reference/code/how-a-script-runs
Historical verdict: PENDING

2026-11-04 overhaul: the article changed, so the previous PASS and hash below are historical evidence, not approval of the current revision.
Fresh writer source checks and article inventory are recorded under C2/C3 in `docs-work/overhaul/settings-hosting-code.md`.
Independent review of the changed text is pending.
Reviewed: src/content/reference/en/code/how-a-script-runs.mdx
Reviewed-SHA: d3912427df1d0ec6

Product repo: C:\Projects\NoMercyLabs\nomnomzbot (master, read only).
CC = server/src/NomNomzBot.Infrastructure/CustomCode. SR = CC/ScriptRunner.cs. JE = CC/Jint/JintScriptExecutor.cs. JF = CC/Jint/JintEngineFactory.cs. RC = CC/PipelineActions/RunCodeAction.cs. BR = CC/ScriptCapabilityBroker.cs. SC = server/src/NomNomzBot.Application/Contracts/CustomCode/ScriptContracts.cs.

| Claim | Page line | Proof | Verdict |
| --- | --- | --- | --- |
| Draft label in title and callout | 2, 10-12 | map.md row 124 "(Draft)" | true |
| Step label "Run script" | 6, 27 | dashboard/src/i18n/schema/en.json:3409 | true |
| Custom Code off for a new channel; label "Custom Code" | 16, 21 | server/.../Platform/FeatureService.cs:52 (label) and DefaultOn false (claims file :51-56) | true |
| Off: cannot make or change scripts | 17 | CodeScriptsController FeatureGateAsync (claims lead; consistent with BR gate) | true |
| Off: a bot call is denied | 18, 121 | BR:35 FeatureGate "custom_code" on every entry (:40-49) and ActionGate (:92); BR:118-128 "Capability is not enabled: {key}." | true |
| Features page, Automation area | 20-21 | dashboard/src/views/dashboard/settings/features/i18n/en.json:5 "Features", :11 "Automation"; featureAreas.ts:27 custom_code -> automation | true |
| Command "What it does" = "Runs a code script" | 33 | dashboard/src/views/dashboard/commands/i18n/en.json:119, :123 | true |
| Run order: not found (deleted), disabled, quota, published valid version, grant, execute, save time and error | 39-48 | SR:44-49, :51-52, :56-65, :67-77, :93-115, :117-127, :135-138 | true |
| One disallowed call stops the whole run | 46 | SR:93-115 grant failure returns Denied before executor | true |
| Fresh, closed sandbox; strict; no eval / new Function | 47, 109-110 | JF:20-22 fresh engine, CLR off; JF:44-45 | true |
| bot.args / getVar null / setVar text / send to output / stopPipeline | 59-63 | JE:81-85, :427-462; RC:71-77 | true |
| Copy of variables; written vars, output and stop come back | 66, 84-86 | RC:57, :71-77 | true |
| nnz.api.chat.send reaches bot (chat.send) | 67, 77 | JE:188; BR:46 | true |
| Failed run fails the step; continue on error | 88-89 | RC:67-68, :77-78; Platform/Pipeline/PipelineEngine.cs:806 | true |
| Limits 8 s, 64 calls, 200,000 statements, 64 MB, 8,192 chars cut | 97-101 | SC Baseline (WallClockMs 8000, MaxHostCalls 64, 200_000, 64L*1024*1024, 8*1024); JF:31-33; JE:597-603 Append truncates | true |
| Depth 64, 10,000 items, regex 1 s | 102-104 | JF:37, :39, :40 | true |
| sleep 5 s, 200 log lines | 105-106 | JE:39, :52, :441 | true |
| Error texts rows 116-126 | 116-126 | RC:50; SR:48, :52, :65, :75; BR:110, :126; JE:507, :512, :519, :529 (statements/memory/recursion :522-525) | true |
| Thrown error shows own message | 128 | JE:531-534 ex.Message | true |
| Last error kept | 129 | SR:135-137 LastRuntimeError | true |
| One bot voice | 67 | rule bot-speaks-in-one-voice; no second voice on page | true |

Links: /reference/code/scripts, /reference/code/sdk-script-basics, /reference/commands/pipelines are all map rows (map.md:123, :125, :69).
Conventions: no names, no action keys in prose labels, no numbered levels, no license or hosting text, American English, no NoMercyBot. Example (72-78): statements end in semicolons, blank lines between steps, nesting at most 2, no object literals.

## Notes (non-blocking)
- Error table omits "Capability not permitted in scripts: ..." (BR:114-116) and "Sandbox execution quota could not be verified, so the script was not run." (SR:60-62). The table does not claim to be complete; consider adding both.
- `run_code` and `code_script_id` appear inside a quoted error message (line 116); this is the literal message, acceptable.
