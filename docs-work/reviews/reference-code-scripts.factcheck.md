# Fact check: src/content/reference/en/code/scripts.mdx
Verdict: PASS
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
