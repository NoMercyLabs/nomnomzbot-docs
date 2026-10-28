# Claims: /reference/automation/event-responses

Product repo paths are relative to the product root. Page en.json: `dashboard/src/views/dashboard/event-responses/i18n/en.json`. Shell en.json: `dashboard/src/i18n/locales/en.json`. Service: `server/src/NomNomzBot.Infrastructure/Commands/EventResponseService.cs`. Executor: `server/src/NomNomzBot.Infrastructure/Platform/Eventing/EventResponseExecutor.cs`. Preset catalog: `server/src/NomNomzBot.Application/Commands/Services/EventResponsePresetCatalog.cs`. Tone catalog: `server/src/NomNomzBot.Application/Commands/Services/EventResponseToneCatalog.cs`. Platform seeder: `server/src/NomNomzBot.Infrastructure/Content/Commands/PlatformEventResponseDefaultsSeeder.cs`.

| # | Claim | Evidence |
| --- | --- | --- |
| 1 | Sidebar entry **Event responses** | dashboard/src/layouts/dashboard/navigation.ts:204-209; shell en.json:822 |
| 2 | A response posts a chat line or runs a command, pipeline or action | EventResponseEditor.vue:432 kinds command/pipeline/action; executor :190-228 |
| 3 | Read: Moderator default, VIP floor; write: Moderator | server/src/NomNomzBot.Infrastructure/Content/Identity/ActionDefinitionSeeder.cs:186-187; route.ts meta action; controller RequireAction :58-191 |
| 4 | A reader without write sees the list only, no editor | EventResponsesView.vue:138 `v-if="can('eventresponses:write')"` on the detail slot |
| 5 | List title **Events**, search **Search events**, no-match text | page en.json:38,39,42; EventResponseList.vue:47-58 |
| 6 | One row per event per channel, 50 of 50; no add or delete | EventResponseDefaultsSeeder.cs:76-89 seeds every EventResponsePresetCatalog.EventTypes; preset catalog lists 50 Preset(...) entries (51 matches of `Preset(` minus the private factory); controller has no POST create or DELETE (EventResponsesController.cs:58-213); service UpsertAsync comment "fixed, seeded catalogue" |
| 7 | All 50 load at once (page size 200) | dashboard/src/api/eventResponses.ts:33,63 |
| 8 | Row text **Platform default** / **Your own text** by followsPlatformDefault; **Off** badge when disabled | EventResponseList.vue:538-542,574-576; page en.json:43-45 |
| 9 | Sort by internal event key | service ListAsync `.OrderBy(e => e.EventType)` :64 |
| 10 | Event names (28 from en.json; 22 from nameOf fallback: "Reward paused", "Engagement first time chatter", "Supporter tip", "OBS ... ", "VTube Studio ...") | page en.json:7-36; useEventName.ts:30-39; eventResponseDraft.ts nameOf (OBS/VTube mapping, camel split, trailing " Event" dropped, `channel.` stripped, `._` to space, first letter capitalized) |
| 11 | Group counts 7+4+2+4+7+3+5+5+5+5+3 = 50 | preset catalog Presets list |
| 12 | 18 of 50 events start on on a new install: 9 legacy (follow, sub, resub, 4 gift kinds, cheer, raid), poll end, 4 moderation, 3 ad breaks, stream online | Platform seeder :34-102 EnabledByDefault, :134-145; channel rows follow the platform default (EventResponseDefaultsSeeder.cs:89) and executor uses platform IsEnabled (:262-268) |
| 13 | **Twitch gift sub received** is the only event whose Read it aloud starts on; all others start off | Platform seeder SpokenByDefault :84-90, :144 |
| 14 | Default lines are picked at random, never the same twice in a row | tone catalog Pick :61-70 (NoImmediateRepeatPicker); executor :266-267, :272-279 |
| 15 | Lines are in the channel tone from the personality setting (Reply voice on Bot personality) | executor PersonalityAsync :281-286; dashboard/src/views/dashboard/settings/i18n/en.json:5-31 |
| 16 | Default lines exist for the 18 events that start on | tone catalog Add(...) keys :109-654 (18 event types); comment :38 |
| 17 | **Reaction** with **Simple reply** / **Pipeline** | ReplyModeField.vue:64-72,125; shell en.json:86-89 |
| 18 | Footer unsaved count, **Save changes**, **Discard**; refusal shown in red, draft kept | EventResponseEditor.vue:306-315,358-393,463,467-479; page en.json:63-65 |
| 19 | After save the row is off the platform default (list shows Your own text) | service UpsertAsync :242 `FollowsPlatformDefault = false` |
| 20 | **What the bot posts**: three cases (default lines + Platform default badge; no default lines + Platform default badge + empty box; own line + Your own text badge); 32 of 50 events have no default lines | EventResponseEditor.vue:316-330 (showDefaults, fromDefault, linesHelp), :435-453; page en.json:54-58; tone catalog has 18 event types (50-18=32) |
| 20a | Help texts of Enabled, Your line, Read it aloud and the Pipeline none-text are info-icon tooltips | LabeledSwitch.vue:32, TemplateField.vue:194, ReplyModeField.vue:151 all render FieldInfo; FieldInfo.vue Tooltip/TooltipContent |
| 20b | An action is a built-in bot task from the picker's Actions groups | TargetPicker.vue:339-355 (action groups, row.type/row.title); lib/bindingTarget.ts:15-17 |
| 21 | **Edit this line** moves the line into the box, replaces-text with count | DefaultLineList.vue:212-220; EventResponseEditor.vue:323-330,395-400; page en.json:59-60 |
| 22 | Follow has 3 Informative lines (example count) | tone catalog :110-115 |
| 23 | **Your line** max 500 characters | EventResponseEditor.vue:446-451 |
| 24 | "You can use:" lists the event's helpers; raid has `{user}` and `{viewers}` | EventResponseEditor.vue:331-340; page en.json:53; preset catalog channel.raid |
| 25 | Unknown helper warning "Not a known helper here:" | TemplateField.vue:102-104,270-276; shell en.json:185 |
| 26 | Command-only helpers refused at save | service UpsertAsync :141-148 (TemplateHelperContext.EventResponse) |
| 27 | Saving the first Informative line exactly keeps the row on the tone lines | tone catalog OwnText :91-100; service :244-245; executor OwnMessageAsync :272-279 |
| 28 | **Read it aloud** only in Simple reply; text; off by default; spoken only after posted in chat | EventResponseEditor.vue:455-460 (inside the simple slot); ReplyModeField.vue:133-141; page en.json:61-62; executor :347-350 `speakWithTts && outcome.SentToChat`; service create default SpeakWithTts false :196 |
| 29 | Pipeline mode: none-text, picker label **Pipeline**, groups Commands/Pipelines/Actions, search, **Create a new pipeline**, **Nothing** | ReplyModeField.vue:143-160; TargetPicker.vue:290-327; shell en.json:91,132-145 |
| 30 | New pipeline named after the event | EventResponseEditor.vue:433 new-pipeline-name |
| 31 | Save stays off with Pipeline and no pick | eventResponseDraft.ts changeOf :655-662 (no change when bound null); EventResponseEditor.vue:474 |
| 32 | Pipeline/command speak through their own steps | ReplyModeField none text; executor RunTargetAsync/RunPipelineAsync :199-218 |
| 33 | **Enabled** switch saves at once, help text | EventResponseEditor.vue:368-370,421-426; page en.json:50-51 |
| 34 | The switch, either direction, takes a following event off the default (row shows Your own text); on: an event with default lines posts from them, an event without says nothing until a line is saved; off: nothing. Editor then shows Your own text over an empty box for an event without default lines | service :210-213 (AdoptPlatformDefault, Message = platform.Message), :242; OwnToneLines :439-443; executor OwnMessageAsync :272-279, :310-311; EventResponseEditor.vue:316-322 | service UpsertAsync :210-213 AdoptPlatformDefault, :242; OwnToneLines :439-443 |
| 35 | **Reset to default** shows only when not following the default | EventResponseEditor.vue:468 |
| 36 | Reset dialog title, description, consequences (own line, bound command/pipeline/action) | EventResponseEditor.vue:342-356,482-490; page en.json:66-74 |
| 37 | After reset: follows default, on/off and read aloud from the platform default; row shows Platform default | service ResetToDefaultAsync :301-309; ToDto :413-427 |
| 38 | Reset does not delete the pipeline or command | controller NotDestructive note :192-194; service :304 only clears the binding |
| 39 | Dashboard reset sends confirm=true | dashboard/src/api/eventResponses.ts:155-173 |
| 40 | A disabled pipeline does not run | executor :502-503 |
| 41 | Off event says nothing | executor :178-179 |
| 42 | Chat line needs text, else nothing | executor :310-311 |
