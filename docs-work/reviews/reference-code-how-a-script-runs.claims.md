# Claims: /reference/code/how-a-script-runs

Paths are in the product repo (C:\Projects\NoMercyLabs\nomnomzbot, master, read only).
CC = server/src/NomNomzBot.Infrastructure/CustomCode. JE = CC/Jint/JintScriptExecutor.cs. SR = CC/ScriptRunner.cs. RC = CC/PipelineActions/RunCodeAction.cs. BR = CC/ScriptCapabilityBroker.cs. SC = server/src/NomNomzBot.Application/Contracts/CustomCode/ScriptContracts.cs. SEN = dashboard/src/i18n/schema/en.json.
Executor in use: Jint (server/src/NomNomzBot.Infrastructure/DependencyInjection.cs:848); the Wasmtime executor is not registered.

| Claim | Page line | Proof | Verdict |
| --- | --- | --- | --- |
| A pipeline step **Run script** runs a script | 6, 27 | RC:29 ActionType run_code; SEN:3409 "run_code": "Run script" | true |
| Draft label | 2, 11 | docs-work/scope.md Lane E "The section title carries Draft"; overview.mdx:24 | true |
| Custom Code is off for a new channel | 16 | server/src/NomNomzBot.Infrastructure/Platform/FeatureService.cs:51-56 DefaultOn false; IsFeatureEnabledAsync :169-183 true only with an enabled row | true |
| Off: cannot make or change scripts | 17 | server/src/NomNomzBot.Api/Controllers/V1/CodeScriptsController.cs:31-32, :267-277 FeatureGateAsync (14 call sites) | true |
| Off: a script that makes a bot call is denied | 18 | BR:35, :118-128 every catalog entry gates on custom_code; SR:95-115 grant failure gives Denied | true |
| Features page, Custom Code in Automation area, takes effect right away | 20-23 | dashboard/src/i18n/locales/en.json:886 "Features"; FeatureService.cs:52 label "Custom Code"; dashboard/src/views/dashboard/settings/features/featureAreas.ts:27; features/i18n/en.json areas.automation "Automation", description "Each switch takes effect right away." | true |
| Step is in the Code area | 28 | RC:31 pipeline.category.code; SEN:1658 "code": "Code" | true |
| Choose the saved script | 29 | RC:34-42 field code_script_id, kind Script, required; SEN:2138 "The saved code script to run." | true |
| Only way a pipeline runs a script | 32 | RC:22 comment; grep of IScriptRunner users: RC, CommandInvoker, ChatMessageHandler (no other pipeline action) | true |
| A command can run a script directly (Runs a code script) | 33 | server/src/NomNomzBot.Infrastructure/Chat/EventHandlers/ChatMessageHandler.cs:1008-1041; label from create-a-command page table | true |
| Run order 1-7 | 39-48 | SR:44-49 not found (DeletedAt null), :51-52 disabled, :56-65 quota, :67-77 version CurrentVersionId valid + compiled, :93-115 grant, :122-127 execute, :135-138 LastRanAt/LastRuntimeError | true |
| Declared calls read from the version, granted only those; one disallowed stops whole run | 45-46 | SR:93-99 DeclaredCapabilitiesJson; JE:377-396 DeclaredCapabilities at compile; BR:104-131 | true |
| Fresh closed sandbox | 47 | CC/Jint/JintEngineFactory.cs:10-12, :16-39 fresh engine per run, CLR interop off | true |
| Names bot and nnz; no access except bot calls | 54-55 | JE:69-273 bootstrap defines bot, nnz, console; JE:463-479 __call is the only host bridge; JintEngineFactory.cs:37-38 | true |
| bot.args = words after command | 59 | JE:81; RC:56 ArgsAfterCommand; CC/ScriptInvocationFactory.cs:25-26 | true |
| bot.getVar gives null when unset | 60 | JE:82, :426-429 | true |
| bot.setVar value is text | 61 | JE:83 need() returns String(v); :432-435 | true |
| bot.send adds to output, does not post | 62 | JE:84, :452-461 appends to output; RC:77 ActionResult.Success(run.Output), no chat send | true |
| bot.stopPipeline stops the pipeline | 63, 86 | JE:85, :462; RC:73-74 ctx.ShouldStop | true |
| console.log writes a log line | 64 | JE:55-68, :436-451 | true |
| Script works on its own copy of variables | 66 | CC/ScriptInvocationFactory.cs:46; JE:405 | true |
| nnz.api.chat.send reaches the bot | 67 | JE:188; BR:46 chat.send | true |
| Variables written come back to the pipeline | 84 | RC:71-72 | true |
| bot.send text becomes the step output | 85 | RC:77; SR:156 | true |
| Run that does not end cleanly fails the step | 88 | RC:67-68, :76-78 | true |
| Failed step stops pipeline unless continue on error | 89 | server/src/NomNomzBot.Infrastructure/Platform/Pipeline/PipelineEngine.cs:802-811 | true |
| Same limits for every run | 93 | SR:89 ScriptResourceBudget.Baseline | true |
| 8 s whole run incl. bot calls | 97, 108, 125 | SC:46-48 WallClockMs 8000; JE:417-420 linked token; JE:476 bridge uses same token | true |
| 64 bot calls | 98, 124 | SC:49; JE:472-473, :504-508 | true |
| 200,000 statements | 99 | SC:50; JintEngineFactory.cs:21 | true |
| 64 MB memory | 100 | SC:51; JintEngineFactory.cs:23 | true |
| 8,192 characters output, rest cut off | 101 | SC:52 8*1024; JE:597-603 Append truncates by string length | true |
| Nested call depth 64 | 102 | JintEngineFactory.cs:27 | true |
| 10,000 items in one list | 103 | JintEngineFactory.cs:29 | true |
| 1 s per regular expression | 104 | JintEngineFactory.cs:30 | true |
| 5 s per nnz.time.sleep | 105 | JE:39, :138, :487-498 | true |
| 200 log lines, rest counted | 106 | JE:52, :441-442, :544-545 | true |
| No eval / new Function; strict mode | 109-110 | JintEngineFactory.cs:32-35 | true |
| run_code requires a valid code_script_id. | 116 | RC:49-50 | true |
| Script not found. | 117 | SR:44-49 | true |
| Script is disabled. | 118 | SR:51-52 | true |
| Sandbox execution quota exhausted for this period. | 119 | SR:64-65 | true |
| Script has no valid published version. | 120 | SR:73-77 | true |
| Capability is not enabled: ... | 121 | BR:118-128 | true |
| Unknown capability: ... | 122 | BR:108-112 | true |
| Capability denied: ... | 123 | JE:470-471, :509-513 | true |
| Host-call budget exceeded. | 124 | JE:504-508 | true |
| Execution exceeded its time budget. | 125 | JE:514-520 | true |
| Execution exceeded a resource limit. (statements, memory, depth) | 126 | JE:521-530 | true |
| A thrown error shows its own message | 128 | JE:531-536 | true |
| Bot keeps the last error | 129 | SR:103, :136-137 LastRuntimeError | true |
| Bot voice: chat posts are the channel's one bot voice | 67 | docs-work/page-conventions.md "Words the guide uses"; rule bot-speaks-in-one-voice | true |

Links: /reference/code/scripts (Assumes), /reference/code/sdk-script-basics and /reference/commands/pipelines (Links to), all map rows.
Gates: `sh docs-work/gates.sh style` PASS, `sh docs-work/gates.sh links` PASS.
Not on the page (checked, left out): the Wasmtime executor (not registered); MaxEgressBytes 256 KB (SC:53, not enforced by the Jint executor).
