# Fact-check: /reference/code/how-a-script-runs
Verdict: PASS
Reviewed: src/content/reference/en/code/how-a-script-runs.mdx
Reviewed-SHA: b27340a414ca5f26

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
