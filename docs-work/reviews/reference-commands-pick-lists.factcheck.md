# Fact-check: /reference/commands/pick-lists (round 2)
Verdict: PASS
Reviewed: src/content/reference/en/commands/pick-lists.mdx
Reviewed-SHA: a6445721fa9338dd

Product repo master at b6204c36c. Paths are relative to the product root.

## Changed sentences checked first

- Lines 15-16 (roles are defaults; the Broadcaster may raise each): ActionDefinitionSeeder.cs:506-508 (read/write default Moderator floor VIP, delete Moderator floor Moderator); ActionAuthorizationService.cs:196 clamps an override between floor and Broadcaster. True.
- Lines 51 and 54 ("The field stops at 100 / 500 characters."): PickListDialog.vue:103 and :112 `maxlength`. True.
- Line 109 button **Edit snacks**: PickListRow.vue title/aria-label `t('dashboard.picklists.edit', { name })`; picklists/i18n/en.json:13 "Edit {name}". True.
- Line 124 button **Delete snacks?**: PickListRow.vue title/aria-label `delete.title`; en.json:15 "Delete {name}?". True.
- Lines 134-135 split sentence: LegacyTemplateHelpers.cs:253; PickFromListAction.cs:87-90. True.

## Product defects (from round 1, unchanged in code)

1. NoImmediateRepeatPicker.cs:46-51: `previous` defaults to 0, so the first entry is never drawn on the first draw for a list after a start.
2. PickListService.cs:399-419: the delete blast radius counts only pipeline steps, not command replies with `{list.pick.<name>}`.
3. pickListForm.ts:45-64: the dialog has no name-character check; only the server refuses.
4. GET picklists/{id}/pick (PickListsController.cs:89-90) has no dashboard caller.
5. pickListForm.ts:51-55 nameTooLong / descriptionTooLong (en.json:33-34) are unreachable behind the maxlength attributes.

## Claims

| Claim | Supported by file:line | Status |
| --- | --- | --- |
| Page **Pick lists** in the **Build** sidebar group | dashboard/src/layouts/dashboard/navigation.ts:198-202; dashboard/src/i18n/locales/en.json:820, :923 | true |
| Named list of entries; reply or pipeline draws one random entry | PickListService.cs:286-299; LegacyTemplateHelpers.cs:225-255; PickFromListAction.cs:76-101 | true |
| Many commands share one list; a change reaches all | lookup by name at draw time, PickListService.cs:286-291 | true |
| By default Moderator, Lead moderator, Editor, Broadcaster open, make, change, delete | ActionDefinitionSeeder.cs:506-508; AuthorizationEnums.cs:18 | true |
| Broadcaster may raise each to a higher role | ActionAuthorizationService.cs:196 | true |
| Broadcaster may let a VIP see, make, change | ActionDefinitionSeeder.cs:506-507 (MFloor Vip) | true |
| Set on Permissions page under **Pick lists** | settings/permissions/i18n/en.json:77, :315-317 | true |
| VIP can never delete | ActionDefinitionSeeder.cs:508; ActionAuthorizationService.cs:196 | true |
| **New pick list** only with write | PickListsView.vue template, v-if can('picklists:write') | true |
| Edit/delete buttons per permission | PickListRow.vue:37-58 | true |
| Dialog title and description text | picklists/i18n/en.json:21,23; PickListDialog.vue:83-88 | true |
| Fields Name, Description, Entries, one per line | en.json:24,26,27,28; PickListDialog.vue:96-120 | true |
| Name is what a reply uses | en.json:25; LegacyTemplateHelpers.cs:250 | true |
| **Add pick list**; dialog closes; list shows | en.json:29; PickListDialog.vue:89, :76; api/pickLists.ts:115 | true |
| Row text "3 entries · {list.pick.snacks}" | PickListRow.vue:32-40; en.json:6 | true |
| Name order | PickListService.cs:82 | true |
| "No pick lists yet." | en.json:7; PickListsView.vue empty-text binding | true |
| Trims line ends, drops empty lines | pickListForm.ts:38-43; PickListService.cs:357-358 | true |
| Name empty -> "Type a name." | pickListForm.ts:48-49; en.json:32 | true |
| Name field stops at 100 | PickListDialog.vue:103 | true |
| Name characters -> bot refuses with quoted text | PickListService.cs:342-346, 379-380 | true |
| Duplicate name -> "A pick list named 'snacks' already exists." | PickListService.cs:163-167, 235-239 | true |
| Description field stops at 500 | PickListDialog.vue:112 | true |
| > 500 entries message | pickListForm.ts:57-58; en.json:35 | true |
| Entry > 500 characters message | pickListForm.ts:60-61; en.json:36; Textarea has no maxlength PickListDialog.vue:120 | true |
| Refusal keeps dialog open with reason; nothing saved | PickListDialog.vue:57-77 | true |
| Helper `{list.pick.<name>}` in a reply; example output | LegacyTemplateHelpers.cs:100-101, 244-263 | true |
| Reply in the channel's one bot voice | rule bot-speaks-in-one-voice | true |
| No same entry twice in a row for 2+ entries | NoImmediateRepeatPicker.cs:43-53; PickListService.cs:299 | true |
| After restart one repeat can happen | NoImmediateRepeatPicker.cs:29 (static in-memory) | true |
| Missing or empty list shows nothing; rest goes out | PickListService.cs:293-297; LegacyTemplateHelpers.cs:253 | true |
| Each occurrence draws again | LegacyTemplateHelpers.cs:244-254 | true |
| Step **Pick from list**, group **Pick Lists**, description | schema en.json:3401, :1670, :2035; PickFromListAction.cs:42-46 | true |
| Step draws once, keeps entry | PickFromListAction.cs:92-101 | true |
| Field **Pick-list**, help, required, no default | PickFromListAction.cs:51-56; schema en.json:3480, :2037 | true |
| Field **Variable**, default `pick` as `{pick}` | PickFromListAction.cs:57-63, 72-75; stepWords.ts:84-89; lib/text.ts:14-21 | true |
| Later steps see the same entry; helpers filled at draw | PickFromListAction.cs:92-100 | true |
| Missing or empty list -> step fails | PickFromListAction.cs:81-90; PickListService.cs:293-297 | true |
| Search by name or description; placeholder; no-match text | PickListService.cs:69-76; en.json:8,10; PickListsView.vue | true |
| 50 at a time; **Show more pick lists** | PickListsView.vue:42, loadMore; en.json:12; api/pickLists.ts:53-59 | true |
| **Edit snacks** button; dialog title "Edit snacks" | PickListRow.vue edit button; en.json:13, :22; PickListDialog.vue:84-85 | true |
| **Save pick list**; row updates | en.json:30; PickListDialog.vue:89, :76; api/pickLists.ts:115 | true |
| Saved entries replace old | PickListService.cs:244 | true |
| Rename breaks replies with old name | PickListService.cs:286-291; en.json:25 | true |
| **Delete snacks?** button; dialog title and description | PickListRow.vue delete button; en.json:15-16; PickListsView.vue ConfirmDialog | true |
| Count line "2 pipeline steps: Raid flow, Hype"; none text | blastLines.ts:41-51; locales/en.json:160, :163; en.json:17; PickListService.cs:399-419 | true |
| **Delete pick list**; dialog closes; list leaves | en.json:18; PickListsView.vue confirmDelete; api/pickLists.ts:148 | true |
| Count covers pipeline steps only | PickListService.cs:399-419 | true |
| After delete helper empty; step fails | LegacyTemplateHelpers.cs:253; PickFromListAction.cs:87-90 | true |
| Troubleshooting 1-3 | LegacyTemplateHelpers.cs:250; PickListService.cs:289, :293-297 | true |
