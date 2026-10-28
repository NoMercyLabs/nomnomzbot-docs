# Fact check: src/content/reference/en/automation/event-responses.mdx
Verdict: PASS
Reviewed: src/content/reference/en/automation/event-responses.mdx
Reviewed-SHA: ddc8c868b4c8addb

Round 3. I checked the round 2 fix first, then the whole page (213 lines), against product master b6204c36c. Every row rests on a line I opened in rounds 1 to 3 of this review; the product files have not changed since round 1 (master is still b6204c36c). No row is (lead). No bare word in braces is on the page: every helper (line 118) is in backticks. Paths: Editor = `dashboard/src/views/dashboard/event-responses/components/EventResponseEditor.vue`, Service = `server/src/NomNomzBot.Infrastructure/Commands/EventResponseService.cs`, Executor = `server/src/NomNomzBot.Infrastructure/Platform/Eventing/EventResponseExecutor.cs`, Seeder = `server/src/NomNomzBot.Infrastructure/Content/Commands/PlatformEventResponseDefaultsSeeder.cs`, Tone = `server/src/NomNomzBot.Application/Commands/Services/EventResponseToneCatalog.cs`, Presets = `server/src/NomNomzBot.Application/Commands/Services/EventResponsePresetCatalog.cs`.

## Round 2 finding checked first

- Badge table row 3 (line 108): an event with no default lines, saved without a line (for example by the switch), shows **Your own text** over an empty **Your line** box. Service:210-213,242 sets `FollowsPlatformDefault = false` with no message; Service:439-443 gives no tone lines for an event outside the 18 catalogue keys; Editor:96-99 then gives `fromDefault = false`, so the badge is **Your own text** (Editor:215-217), and Editor:220-230 shows the box. Supported.
- Badge table row 2 (line 107) now names only a following event: Editor:97-99 `followsPlatformDefault && !picked` keeps **Platform default**. Supported.
- Switch table (lines 167-170): with no default lines, On says nothing until a line is saved. Executor:271-279 picks from an empty tone list (null), Executor:310-311 sends nothing for empty text. With default lines, On posts from the tone lines (Service:439-443; Executor:271-279). Off says nothing (Executor:178-179). Supported.

## Product defects

- For an event with no default lines, the switch turns the row to **Your own text** with an empty box, and nothing tells the user it will say nothing (Editor:96-99, Service:242). To be filed by the main session.
- From round 1, still true: 22 of 50 event names have no en.json entry (event-responses/i18n/en.json:8-35); the list order is the internal key (Service:64); for a saved row with no text and with default lines, the editor badge says **Platform default** while the list row says **Your own text** (Editor:96-99 against EventResponseList.vue:48-50).

## Claim table

| Claim | Supported by file:line | Status |
| --- | --- | --- |
| Sidebar entry **Event responses** (6) | navigation.ts:205-208; Shell en.json:822 | Supported |
| Posts a line, or runs a command, pipeline or action (8) | Editor:209; Executor:190-218 | Supported |
| An action is a built-in task from **Actions** in the picker (9) | TargetPicker.vue:87; Shell en.json:137 | Supported |
| Roles that may open and change; VIP floor (13-16) | ActionDefinitionSeeder.cs:186-187; AuthorizationLadder.cs:24-35 | Supported |
| A VIP sees the list only (17) | EventResponsesView.vue:59 | Supported |
| **Events** list; 50 rows; no add or delete (21-23) | event-responses en.json:38; Seeder:134-147; Presets:47-180; Service:301-309 | Supported |
| Row texts (27-31) | EventResponseList.vue:48-50,84; event-responses en.json:43-45; Executor:178-179 | Supported |
| Search and no-match text (33-34) | EventResponseList.vue:38-44,59; event-responses en.json:39,42 | Supported |
| Every event, names and group counts (36-49) | event-responses en.json:8-35; Presets:47-180; eventResponseDraft.ts:91-115 | Supported |
| The order on screen differs (51) | Service:64 | Supported |
| 18 start on, by group (53-65) | Seeder:34-98,143 | Supported |
| Gift sub received reads aloud at the start (67) | Seeder:83-88,144 | Supported |
| Random pick, no repeat twice (71-73) | Tone:61-70; Executor:266-268 | Supported |
| Tone is the Reply voice on Bot personality; one bot voice (75-78) | Executor:290-295; settings en.json:5-6; Shell en.json:883 | Supported |
| Default lines for the 18 only (80-81) | Tone:37-38 and its 18 keys; Tone:44-46 | Supported |
| Edit steps, unsaved count, Save turns off, row Your own text (85-94) | Editor:83-92,249-251; Service:242 | Supported |
| Discard; red refusal; edits stay (95-97) | Editor:139-147,169-177,240,69-80 | Supported |
| What the bot posts (102) | Editor:214 | Supported |
| Badge table, four rows (104-109) | Editor:96-106,213-230; Service:210-213,242,439-443 | Supported |
| 32 of 50 open with the empty box (111) | Tone 18 keys of 50; Editor:96-99 | Supported |
| Edit this line; replaces text (113-115) | DefaultLineList.vue:34-35; Editor:179-184,100-106; event-responses en.json:59-60 | Supported |
| 500 characters; info icon "You can use:" with raid helpers (117-118) | Editor:225-228,108-117; TemplateField.vue:194; Presets:66 | Supported |
| Unknown helper note; command-only helper refused (121-122) | TemplateField.vue:102-104,270-276; Service:141-148 | Supported |
| Saving the first Informative line keeps the default lines (127-129) | Tone:81-100; Service:244-245; Executor:271-279 | Supported |
| Read it aloud: Simple reply only, info icon text, after chat, starts off except gift sub received (135-138) | ReplyModeField.vue:133-141; Editor:233-237; LabeledSwitch.vue:32; Executor:345-348; Seeder:144 | Supported |
| Pipeline steps, info icon text, picker groups, Create a new pipeline, named after event, Nothing (142-153) | ReplyModeField.vue:146-151; FieldInfo.vue; TargetPicker.vue:74-87; Editor:210; Shell en.json:92,135-139 | Supported |
| Pipeline or command speaks through its own steps (154) | Executor:201-218 | Supported |
| Enabled switch at top, info icon text, saves at once (159-161) | Editor:197-203,155-157; LabeledSwitch.vue:32; event-responses en.json:50-51 | Supported |
| Switch takes the event off the default; On/Off by default lines (163-170) | Service:210-213,242,439-443; Executor:178-179,271-279,310-311 | Supported |
| Reset button, dialog, losses, result (174-186) | Editor:119-132,245,259-266; Service:301-309,413-427 | Supported |
| Alerts on widgets page (190-191) | Executor:219-226 overlay kind is separate | Supported |
| Troubleshooting 1-4 (200-203) | Executor:178-179,310-311,495-503 | Supported |
