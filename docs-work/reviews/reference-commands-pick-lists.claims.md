# Claims: /reference/commands/pick-lists

Product repo paths are relative to the product root. Page en.json: `dashboard/src/views/dashboard/picklists/i18n/en.json`. Shell en.json: `dashboard/src/i18n/locales/en.json`. Schema en.json: `dashboard/src/i18n/schema/en.json`. Service: `server/src/NomNomzBot.Infrastructure/PickLists/PickListService.cs`.

| # | Claim | Evidence |
| --- | --- | --- |
| 1 | Sidebar entry **Pick lists** in the **Build** group | dashboard/src/layouts/dashboard/navigation.ts:198-203 (group key 'build'); shell en.json:820 nav.pickLists, :922 group.build |
| 2 | Page title **Pick lists** | page en.json:4; PickListsView.vue:109 |
| 3 | By default read, write and delete are Moderator; read and write have a VIP floor, delete a Moderator floor; the broadcaster may raise each (override clamped between floor and Broadcaster) | server/src/NomNomzBot.Infrastructure/Content/Identity/ActionDefinitionSeeder.cs:506-508; server/src/NomNomzBot.Infrastructure/Identity/ActionAuthorizationService.cs:190-196; PickListsController.cs:47,72,89,111,138,171 |
| 4 | Permissions settings area label **Pick lists** | dashboard/src/views/dashboard/settings/permissions/i18n/en.json:77, 315-317 |
| 5 | **New pick list** shows only with write; edit/delete buttons per permission | PickListsView.vue:111; PickListRow.vue:307-331 |
| 6 | Dialog title "New pick list", description text | page en.json:21,23; PickListDialog.vue:225-230 |
| 7 | Fields **Name**, **Description**, **Entries**, one entry per line | page en.json:24,26,27,28; PickListDialog.vue:236-262 |
| 8 | Name is the helper name | page en.json:25 nameHelp |
| 9 | **Add pick list** creates; dialog closes on success | page en.json:29; PickListDialog.vue:211-218,231 |
| 10 | Row shows name, entry count, `{list.pick.<name>}`, description joined by " · " | PickListRow.vue:298-305; page en.json:6 |
| 11 | Lists in name order | PickListService.cs:82 |
| 12 | Empty text "No pick lists yet." | page en.json:7; PickListsView.vue:135 |
| 13 | Lines trimmed, empty lines dropped | pickListForm.ts:79-84 (itemsOf); server PickListService.cs:357-358 |
| 14 | Name and Description fields stop at 100 and 500 characters (maxlength); entry count and entry length messages (500 / 500) show from the dialog; "Type a name." for an empty name | PickListDialog.vue:241-255 (maxlength), :262 (Textarea, no maxlength); pickListForm.ts:56-59,86-105; page en.json:32,35,36; server PickListService.cs:38-41 |
| 15 | Name character rule and message | PickListService.cs:342-346,379-380 (not checked by the dialog: pickListForm.ts:86-105) |
| 16 | Duplicate name refused with "A pick list named '...' already exists." (create and rename) | PickListService.cs:163-167, 223-239 |
| 17 | Refusal keeps dialog open with reason; nothing saved | PickListDialog.vue:197-216 |
| 18 | `{list.pick.name}` in a reply draws one entry | server/src/NomNomzBot.Infrastructure/Platform/Templating/Helpers/Legacy/LegacyTemplateHelpers.cs:100-101, 225-263; PickListService.cs:276-299 |
| 19 | No immediate repeat for 2+ entries; memory lost on restart | server/src/NomNomzBot.Application/Common/Picking/NoImmediateRepeatPicker.cs:27-54; PickListService.cs:299 |
| 20 | Missing or empty list renders nothing | LegacyTemplateHelpers.cs:253 (empty on failure); PickListService.cs:293-297 |
| 21 | Each occurrence re-rolls | LegacyTemplateHelpers.cs:225-263 (each match runs PickRandomAsync) |
| 22 | Pipeline step **Pick from list**, group **Pick Lists**, description | schema en.json:3401, 1670, 2035; PickFromListAction.cs:42-46 |
| 23 | Fields **Pick-list** (required, help text) and **Variable** (default `pick`) | PickFromListAction.cs:49-64; schema en.json:3480 pipelineField.list, 2036-2041; dashboard/src/views/dashboard/pipelines/components/stepWords.ts:84-90 + dashboard/src/lib/text.ts:14-21 (humanize "variable" = "Variable") |
| 24 | Step rolls once, resolves helpers in the entry, stores it | PickFromListAction.cs:92-101 |
| 25 | Step fails on missing or empty list | PickFromListAction.cs:82-90 |
| 26 | Search by name or description; placeholder; no-match text | PickListService.cs:69-76; page en.json:8,10; PickListsView.vue:124-135 |
| 27 | 50 per page, **Show more pick lists** | PickListsView.vue:42,103-105,147-156; page en.json:12 |
| 28 | Edit dialog title "Edit {name}", **Save pick list**, entries replaced | page en.json:22,30; PickListService.cs:242-244 |
| 29 | Rename breaks replies with old name | page en.json:25; PickListService.cs:128 (lookup by exact name) |
| 30 | Delete dialog title, description, line format, "No pipeline step uses this list.", **Delete pick list** | page en.json:15-18; PickListsView.vue:73-101,160-168; shell en.json:159-166; blastLines.ts:41-51 |
| 31 | Count covers pipeline steps only (field `list`) | PickListService.cs:386-420 |
| 32 | After delete the helper shows nothing and the step fails | LegacyTemplateHelpers.cs:253; PickFromListAction.cs:87-90 |
| 33 | Reply goes out in the channel's one bot voice | rule bot-speaks-in-one-voice; page-conventions.md Words |
