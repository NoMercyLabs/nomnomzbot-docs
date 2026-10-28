# Claims: /reference/code/scripts

Product repository: nomnomzbot, master, read only. D = dashboard/src/views/dashboard/scripts, S = server/src.

| Claim | Page line | Proof | Verdict |
| --- | --- | --- | --- |
| Sidebar entry **Scripts** | 6 | dashboard/src/layouts/dashboard/navigation.ts:222-226; dashboard/src/i18n/locales/en.json:825 | true |
| A script is run by a pipeline step (run_code), and by triggers that name it | 7 | S/NomNomzBot.Api/Controllers/V1/CodeScriptsController.cs:31-32; S/NomNomzBot.Infrastructure/CustomCode/CodeScriptTriggerResolver.cs:71-126 | true |
| Custom Code is off for a new channel | 12 | S/NomNomzBot.Infrastructure/Platform/FeatureService.cs:51-55 (DefaultOn false); :169-182 (no row = off) | true |
| Off: the page shows the bot's reason, quoted | 13 | CodeScriptsController.cs:270-275; D/ScriptsView.vue:14,109-114 | true |
| Features page, Automation group, label Custom Code | 15-16 | dashboard/src/views/dashboard/settings/features/route.ts; featureAreas.ts:27; features/i18n/en.json (areas.automation); FeatureService.cs:52 | true |
| Switch takes effect right away | 17 | settings/features/i18n/en.json "description" | true |
| Moderator and up may switch features | 19 | S/NomNomzBot.Infrastructure/Content/Identity/ActionDefinitionSeeder.cs:441 (feature:write, Mod); Controllers/V1/FeaturesController.cs:51-52 | true |
| Moderator and up may open Scripts and change scripts | 23 | ActionDefinitionSeeder.cs:220 (code:script:author, Mod); CodeScriptsController.cs:38; D/route.ts:19 | true |
| Broadcaster may raise it or grant it to one named person | 24 | ActionDefinitionSeeder.cs:152 (grant default true), :215-220 | true |
| New script dialog, Name, Create script | 28-32 | D/i18n/en.json:175-181; D/components/NewScriptDialog.vue:43-58,65-80; D/ScriptsView.vue:163-167 | true |
| Starts with a small example that rolls a die and sends nothing | 34-35 | D/components/starterSource.ts (STARTER_SOURCE); NewScriptDialog.vue:54 | true |
| Empty name does nothing | 39 | NewScriptDialog.vue:44-46 | true |
| Name over 100 refused; duplicate name refused with quoted text | 40-41 | S/NomNomzBot.Infrastructure/CustomCode/CodeScriptService.cs:168-181 | true |
| Refusal keeps dialog open with the reason, nothing made | 43-44 | NewScriptDialog.vue:59-61 | true |
| Row: name, last run or Never run, Failed badge | 48-49 | D/components/ScriptRow.vue (detail computed, StatusBadge on lastRuntimeError); D/i18n/en.json:27-30 | true |
| Search by name and description | 50 | D/ScriptsView.vue:76-87; D/i18n/en.json:7 | true |
| Tabs and hints | 52-57 | D/ScriptsView.vue:42-47; D/i18n/en.json:10-21 | true |
| Empty list text | 59 | D/ScriptsView.vue:99-108; D/i18n/en.json:24 | true |
| Card parts: run status, description, Runs from, reads, powers, Version, Language | 63-74 | D/components/ScriptDetail.vue:80-101,241-287; D/i18n/en.json:33-115 | true |
| Runs from excludes own versions; empty text | 70,76 | ScriptDetail.vue:107-122,260-268; D/i18n/en.json:47 | true |
| Footer limits text | 79 | ScriptDetail.vue:307; D/i18n/en.json:120 | true |
| Edit code opens editor with files and SDK types | 83-84 | ScriptDetail.vue:234-236,333-342; D/components/useScriptEditor.ts:34-50 | true |
| Save & Compile builds; success = next version, published, runs now | 86-90 | dashboard/src/i18n/locales/en.json:1199; useScriptEditor.ts:52-64; CodeScriptService.cs:392-431 | true |
| Failed build saves nothing, reason shown, last version keeps running | 92-93 | CodeScriptService.cs:409-419, 469-500 ("a project that fails to compile yields NO version"); useScriptEditor.ts:56 (CompileFeedback returned) | true |
| Test card, dry-run note | 97-98 | D/components/ScriptTestCard.vue (PanelCard title/description); D/i18n/en.json:131-132; S/.../CustomCode/ScriptTestRunService.cs (CaptureScriptHostBridge, CaptureSink) | true |
| Trigger, event select shown only when code reads trigger values, No event | 100-101 | ScriptTestCard.vue (ownEvents, v-if ownEvents.length > 0); D/i18n/en.json:133-135 | true |
| Run test; Worked/Failed with ms | 102-103 | ScriptTestCard.vue (StatusBadge); D/i18n/en.json:127-130 | true |
| Test runs the current published version | 105 | ScriptTestRunService.cs:195-219 (no project sent: CurrentVersionId); useScriptTester.ts sends no project | true |
| Timeline kinds; chat lines shown | 106-107 | D/i18n/en.json:136-143; ScriptTestCard.vue (unlistedChat); ScriptTestRunService.cs chatOutput | true |
| Rate limit text and wait | 109 | CodeScriptsController.cs:188 (WriteExpensive); D/components/useScriptTester.ts:33-64; D/i18n/en.json:128 | true |
| Failed run dialog parts | 113-114 | D/ScriptsView.vue:153-161; D/components/FailedRunDialog.vue; D/i18n/en.json:160-168 | true |
| This session list, Runs button on narrow screen, cleared on reload | 116-118 | D/ScriptsView.vue:147-156,178-185 (xl:hidden),242-244; D/components/ScriptRunsPanel.vue header comment + runs held in page ref | true |
| Switch on row and card | 122 | ScriptRow.vue toggle; ScriptDetail.vue:224-233 | true |
| New script is switched on when made | 124 | CodeScriptService.cs:191 (IsEnabled = true) | true |
| Duplicate: copy named "<name> copy", current code, opens | 128-132 | ScriptDetail.vue:143-162,316-327; D/i18n/en.json:122-123; ScriptsView.vue:231 | true |
| Delete: dialog lists users, Delete script, card closes | 136-139 | ScriptDetail.vue:164-191,304-315; D/i18n/en.json:169-173; ScriptsView.vue:230 | true |
| Nothing-else text; cannot be undone | 141-142 | ScriptDetail.vue:170-172; D/i18n/en.json:171,173 | true |

## Defect found (for the session to file)

- NewScriptDialog (D/i18n/en.json:178 "It stays off until you switch it on.") and starterSource.ts say a new script starts off, but CodeScriptService.cs:191 creates it with IsEnabled = true. The page states the code's behavior (switched on).
