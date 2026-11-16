# Current targeted source review — 2026-11-06

Verdict: TARGETED AUTHOR SELF-REVIEW; no independent or exhaustive PASS.
Reviewed: src/content/reference/en/code/scripts.mdx
Reviewed-SHA256: b1b4db506522b1e81649f6f04097962d4d3c13e8d9f8629f689227504f499fcd
Reviewer: editing agent (author self-review)

Full editorial read; retained prerequisites, authoring/test/live distinction and expected outcomes. Removed the blanket Draft sentence/title. Focused source checks: ScriptRunner.cs:43-205 lifecycle; grant/storage/widget contracts checked on their owning SDK pages. UI labels and all authoring branches were not exhaustively reverified.

Coverage details and final static-check results: [final-developer.md](../ecosystem-validation/final-developer.md). Full reading is distinct from focused source verification. No live application/provider test or whole-project build in this batch.

## Historical records below — verdicts and hashes preserved

# Independent source review: /reference/code/scripts
Verdict: PASS
Reviewed: src/content/reference/en/code/scripts.mdx
Reviewed-SHA: 2b31c799150f9bdc
Reviewed-SHA256: 2b31c799150f9bdc703b1d9547e29f1597e2270ab88ec49f14b73f86b101b956
Reviewed-Date: 2026-11-05
Reviewer: independent reviewer, separate from article author
Product-Revision: 54da8b6318de63b5205a0ff8db35e0b9045dd959

The complete current article was read in navigation order and checked against current product source. Historical PASS entries below are leads, not approval of this revision. Atlas voice/template gates do not govern this review.

## Current evidence and result

No substantive finding. Off-by-default, save/compile publication, valid-version restore and protected live version, test capture/live reads checked.

Source files opened in this review: CustomCode/CodeScriptService.cs:188-212,265-310,352-449; ScriptTestRunService.cs:53-155; CaptureScriptHostBridge.cs:37-92; dashboard/scripts/components/useScriptEditor.ts:51-159; ScriptDetail.vue:173-193,218-345.

Unqualified paths beginning Identity, CustomCode, Billing, EventStore, Engagement, Rewards, Widgets or Platform are under server/src/NomNomzBot.Infrastructure; Api and Domain identify their corresponding server projects. Dashboard shorthand is under dashboard/src/views/dashboard.

Verification is read-only source review. No bot/API startup, live account authorization, channel writes, C# host/Jint execution, Docker install or restore was performed. Documentation build/render QA belongs to the combined parent pass. The SDK reference and worked-example checks additionally ran the existing read-only nnz-code-doc-check.mjs with production JavaScript bootstrap and substituted host I/O.

## Historical review (superseded)

# Fact check: src/content/reference/en/code/scripts.mdx
Historical verdict: PENDING

2026-11-04 overhaul: the article changed, so the previous PASS and hash below are historical evidence, not approval of the current revision.
Fresh writer source checks and article inventory are recorded under C1/C2 in `docs-work/overhaul/settings-hosting-code.md`.
Independent review of the changed text is pending.
Reviewed: C:\Projects\NoMercyLabs\nomnomzbot-docs\src\content\reference\en\code\scripts.mdx
Reviewed-SHA: 69cba5dd02898fc2

Product repository: nomnomzbot master, read only. D = dashboard/src/views/dashboard/scripts, S = server/src. Every label was checked against D/i18n/en.json (line numbers below).

| Claim | Page line | Supported by | Status |
| --- | --- | --- | --- |
| Title carries the Draft label | 2, 8 | map.md row 123 (Draft) | true |
| Custom Code is off for a new channel | 12 | S/NomNomzBot.Infrastructure/Platform/FeatureService.cs:51-55 (DefaultOn false) | true |
| Off-state reason text, quoted | 13 | S/NomNomzBot.Api/Controllers/V1/CodeScriptsController.cs:270-275 | true |
| Features page, Automation group, Custom Code label | 15-16 | FeatureService.cs:52; settings/features/i18n/en.json:11 | true |
| Moderator and up may switch features | 19 | S/NomNomzBot.Infrastructure/Content/Identity/ActionDefinitionSeeder.cs:441 (feature:write, Mod) | true |
| Moderator and up may author scripts; broadcaster may raise it or grant to a named user | 23-24 | ActionDefinitionSeeder.cs:215-220 (code:script:author, Mod, grantable, override) | true |
| New script, Name, Create script labels | 28-31 | D/i18n/en.json:176,180,179 | true |
| Starts with a die example that sends nothing | 34-35 | D/components/starterSource.ts (nnz.random.int(1, sides), no chat.send) | true |
| Empty name does nothing | 39 | D/components/NewScriptDialog.vue:45 (return on empty trim) | true |
| Name over 100 refused | 40 | S/NomNomzBot.Infrastructure/CustomCode/CodeScriptService.cs:168-172 | true |
| Duplicate name refused, quoted text | 41 | CodeScriptService.cs:174-182 | true |
| Refusal keeps dialog open with reason | 43-44 | NewScriptDialog.vue:59-61 (emit close only on success) | true |
| Never run, Failed badge | 48-49 | D/i18n/en.json:28,30 | true |
| Search scripts label | 50 | D/i18n/en.json:7 | true |
| Tabs All/On/Off/Failed and their texts | 52-57 | D/i18n/en.json:11-20 | true |
| Empty list text | 59 | D/i18n/en.json:24 | true |
| Card parts: run status, description text, Runs from, reads, powers, Version, Language | 66-74 | D/i18n/en.json:40-68,96,43-44 | true |
| Runs from empty text | 76 | D/i18n/en.json:47 | true |
| Footer limits text | 79 | D/i18n/en.json:120 | true |
| Edit code label | 83 | D/i18n/en.json:119 | true |
| Save & Compile; success = next version that runs | 86-90 | CodeScriptService.cs version build path (claims file :392-431, not re-read) ; claims lead | true (label per claims file, en.json:1199) |
| Failed build saves nothing, last version keeps running | 92-93 | claims file CodeScriptService.cs:409-419,469-500 | true (lead, not re-read) |
| Test card, dry-run note | 97-98 | D/i18n/en.json:131-132 | true |
| Trigger, event label, No event | 100 | D/i18n/en.json:133-135 | true |
| Run test; Worked/Failed with ms | 102-103 | D/i18n/en.json:127,129-130 | true |
| Timeline kinds | 106 | D/i18n/en.json:136-142 | true |
| Rate limit text | 109 | D/i18n/en.json:128 | true |
| Failed run dialog parts | 113-114 | D/i18n/en.json:161-166 | true |
| This session, Runs | 116-117 | D/i18n/en.json:146-147 | true |
| New script is switched on when made | 124 | CodeScriptService.cs:191 (IsEnabled = true) | true |
| Duplicate; copy named "<name> copy", holds current code | 128-132 | D/components/ScriptDetail.vue:143-157; D/i18n/en.json:122-123 | true |
| Delete, Delete script, nothing-else text, cannot be undone | 136-142 | D/i18n/en.json:121,169-173 | true |
| Link targets commands/pipelines, code/how-a-script-runs, code/worked-example are map rows | 7,77,146-148 | map.md (one row each) | true |

Conventions: no people's names, no action keys, no numbered levels, no license name, no hosting or price mention, no NoMercyBot, no British spelling found (grep). No script example on the page, so the code-style rules do not apply.

## Notes

- Product defect (not a page finding): D/i18n/en.json:178 and starterSource.ts line 1 say a new script "stays off until you switch it on", and ScriptDetail.vue:142 says a copy "starts switched off", but CodeScriptService.cs:191 creates every script with IsEnabled = true. The page states what the code does. The session should file this as an issue.
