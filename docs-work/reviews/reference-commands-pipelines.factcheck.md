# Fact check: src/content/reference/en/commands/pipelines.mdx
Verdict: PASS
Reviewed: src/content/reference/en/commands/pipelines.mdx
Reviewed-SHA: c671cc6007cf515b

Round 3. The round 2 findings are fixed. Line 156 now says Run on its own runs only the first plain step, does not wait, and never fails the run (PipelineEngine.cs:2262-2285). Lines 314-315 now say the bot voice is the default and Send message can post as the broadcaster (SendMessageAction.cs:44-47, 85-92). Lines 111-113 now say Stop here works only on a step with a check, and stays off and cannot be turned on for a step you add. StepInspector.vue:103-121 sets `disabled: !hasCondition` with the stopOnMatchNeedsCondition help, and newSteps.ts:40 sets the condition to null. The engine stops only when StopOnMatch is set, a check exists and the step succeeded (PipelineEngine.cs:817, 1669). No claim is unsupported. Every row of the claim table rests on lines I opened in rounds 1 to 3; the round 2 findings below are kept as history.

Round 2 (history). Product repo at b6204c36c. Paths are relative to the product repo.

The round 1 findings are fixed. I checked the changed sentences against the code. How it compares now has 7 choices (stepFields.ts:62). A limit stops the whole run (PipelineEngine.cs:1958-1972, 1191-1193). An empty round limit is 1000 (PipelineEngine.cs:49, 1913). The editor has no field for a check (newSteps.ts:40, StepInspector.vue:140-144). The Runs status lines are now true: RunsPanel.vue:37-42 and :70-75 show the words Done, Failed, Took too long and Not allowed (pipelines/i18n/en.json:200-205). Any other stored status shows as the raw word, and the engine stores completed, stopped and others (PipelineEngine.cs:2392-2400).

Step coverage is unchanged from round 1: 113 of 113 steps opened by the script, at the ExecuteAsync line of each class.

## Findings

1. Line 155, **Run on its own**, "Runs its steps apart from the rest.": only partly true. `ExecuteDetachedStep` (PipelineEngine.cs:2262-2285) runs only the first child that is a plain step. It skips every other step in the path and every block. That step runs alongside the rest without the run waiting for it, and its failure never fails the run. Say that it runs one step, the first one, alongside the rest.
2. Line 313, "A message or reply that a step sends goes out in the channel's one bot voice.": only partly true. **Send message** has a `sender` field with the choices bot and broadcaster (Chat/PipelineActions/SendMessageAction.cs:44-47, 62-63). When the choice is broadcaster, the message is posted as the streamer's own account (SendMessageAction.cs:85-89). The bot voice is the default (SendMessageAction.cs:91-92). Say that messages go out as the bot unless a **Send message** step is set to send as the broadcaster.

## Product defects

- No editor control sets a step's check. Because of this, **If, otherwise** always takes **Yes**, **While a check holds** runs until a limit, and **Stop here when this step matches** cannot be switched on (newSteps.ts:40, StepInspector.vue:140-144, PipelineEngine.cs:1952).
- The Runs panel status words do not match the engine. TONES and i18n know success, failed, timeout and denied (RunsPanel.vue:37-42, i18n/en.json:200-205). The engine stores completed, stopped, failed, partially_failed, timed_out, cancelled and suspended (PipelineEngine.cs:2392-2400). Every status except failed shows the raw word in the grey tone.
- `ToStatus` has no AbortedBudget arm (PipelineEngine.cs:2392-2401). A run stopped by a repeat limit maps to "unknown".
- The operator words `starts_with` and `ends_with` are in pipelines/i18n/en.json:74-75, but no editor choice uses them and the engine does not support them.

## Claims

| Claim | Supported by | Status |
| --- | --- | --- |
| 113 steps in 24 areas, names and areas as listed | script over server/src ActionType lines; schema en.json pipeline.category (24 keys); stepWords.ts:38-44 | supported |
| Each step's "What it does" | schema en.json `pipeline.<type>.description`, 113 of 113 compared; ExecuteAsync line per class | supported |
| 6 blocks: if, switch, random_branch, loop, try, detached_step | newSteps.ts:20-27; PipelineEngine.cs:1446-1488 | supported |
| If: Yes when check holds, No otherwise, Yes with no check | PipelineEngine.cs:1447-1450; EvaluateConditionTreeAsync `Count == 0 => true` | supported |
| Editor has no field for a check; new step has none | newSteps.ts:40; StepInspector.vue:140-144 | supported |
| Stop here needs a check | pipelines/i18n/en.json label text; no condition writer in the dashboard | supported |
| New switch: one case, is, empty match, not default | newSteps.ts:61-75 | supported |
| How it compares: 7 choices | stepFields.ts:62; PipelineEngine.cs:1870-1881 | supported |
| Numbers as numbers, text ignores capitals | PipelineEngine.cs:1864-1868 | supported |
| Fallback case | PipelineEngine.cs:1820-1834 | supported |
| Random: two paths, weight 1, weight 2 twice as often | newSteps.ts:77-86; PipelineEngine.cs:2077-2095 | supported |
| Repeat modes, default count 1 | newSteps.ts:89-90; stepFields.ts:63 | supported |
| foreach splits by commas, variable or text | PipelineEngine.cs:1915-1925, 1886-1900 | supported |
| While: as long as check holds; with none, until a limit stops the run | PipelineEngine.cs:1952-1972 | supported |
| A limit stops the whole run; empty rounds = 1000; only lower | PipelineEngine.cs:49, 1913, 1958-1972, 1191-1193 | supported |
| Catch a failure: body, other path when a step fails | PipelineEngine.cs:2122-2210 (FailedBreak runs the else arm) | supported |
| Run on its own: first plain step only, not awaited, failure never fails the run | PipelineEngine.cs:2262-2285 | supported |
| Bot voice by default; Send message can post as the broadcaster | SendMessageAction.cs:44-47, 85-92 | supported |
| Stop here works only with a check; on a new step it stays off and cannot be turned on | StepInspector.vue:103-121; newSteps.ts:40; PipelineEngine.cs:817, 1669 | supported |
| Duplicate, Remove with "Step removed." + Undo, Undo/Redo buttons | WorkbenchView.vue:189-212, 467-476 | supported |
| Enabled saves at once | PipelinePowerSwitch.vue:30-45 (mutate on change) | supported |
| Four steps run for real in a test run; a step's check runs for real | PipelineTestRunService.cs:49-57; PipelineEngine.cs:1447-1450 shares the engine path | supported |
| Runs: Failed shows **Failed**, other outcomes the raw word; error in red; Test run mark | RunsPanel.vue:37-42, 70-75, 115-120; PipelineEngine.cs:2392-2400 | supported |
| Retention 3 / 30 days, 500 newest per channel | PipelineEngine.cs:58-60, 2421-2455 | supported |
| Who may view and change | ActionDefinitionSeeder.cs:183-185 | supported |
| List sorted by name | PipelinesView.vue:59 | supported |
| Test run off with no steps | WorkbenchView.vue:495 | supported |
| Keys A, /, Ctrl+Z (Shift redo), Ctrl+Y, Ctrl+S in fields, Cmd = Ctrl | WorkbenchView.vue:351-395; StepPalette.vue:78; useShortcut.ts:41 | supported |
| All quoted strings and bold labels; example lines | pipelines/i18n/en.json (exact match by script); :16-17, 33-34, 61, 174, 228, 248 | supported |
