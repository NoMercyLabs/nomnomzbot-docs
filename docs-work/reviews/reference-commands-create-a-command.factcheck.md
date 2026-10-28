# Fact check: src/content/reference/en/commands/create-a-command.mdx
Verdict: PASS
Reviewed: src/content/reference/en/commands/create-a-command.mdx
Reviewed-SHA: b65485b206ca039e

Round 9. Product repo HEAD 7b7e72d2d. The page text was judged in full again. The changed alias sentence (line 209-210) now matches the code: `duplicate()` in CommandEditor.vue:262-279 sends no `aliases`, no `replyDelivery`, no `presetKey`, and `isEnabled: false`. The page makes no claim on alias uniqueness. No unsupported claim was found.

Paths: page en.json = dashboard/src/views/dashboard/commands/i18n/en.json; shell en.json = dashboard/src/i18n/locales/en.json; server paths are under server/src/.

## Product defects

1. Page en.json `list.duplicates` says "... repeat a system command. The system command answers instead." The code does the opposite. ChatMessageHandler.cs:285-293 sets `command = isAlwaysOn ? null : resolvedCommand`, so a same-named channel command answers, except for always-on (`permit`, `unpermit`, PermitBuiltins.cs:256-257, 498-499) and reserved built-ins (`IsAlwaysOn => IsReserved`, IBuiltinCommand.cs:46; GdprBuiltins.cs:206-241). The count line is shown at CommandList.vue:180-181. The page (lines 245-248) states the code behavior, so the page is right and the dashboard string is wrong.
2. Code comment CommandEditor.vue:254-255 says "an alias belongs to one command, so the copy would be refused for the same one". CommandService.cs stores aliases without a check (:190 on create, :353-354 on update); the only refusal is the name check at :101-107. Comment and code disagree; the code is the truth.

## Claims

| Claim | Supported by | Status |
| --- | --- | --- |
| Page **Commands** in the sidebar | page en.json `title` "Commands"; CommandsView.vue PageHeader | Supported |
| Tabs **Channel commands** / **System commands** | page en.json tabs.custom/builtin; CommandsView.vue:61-64 | Supported |
| Moderator, Lead moderator, Editor, Broadcaster may open and change | ActionDefinitionSeeder.cs:179-180 (`MFloor("commands:read", Mod, Vip)`, `M("commands:write", Mod)`); permissions en.json:10-13 labels | Supported |
| Broadcaster may let a VIP open the page | ActionDefinitionSeeder.cs:154-163,179 (floor Vip, read only) | Supported |
| Set on Permissions page, Actions tab, Commands area | shell en.json:894 "Permissions"; permissions en.json:31 "Actions", :54 "Commands" | Supported |
| VIP sees the list only | CommandsView.vue:55-56 canWrite; :182 `<template v-if="canWrite" #detail>` | Supported |
| New command shows "You can view this, but your role cannot change it." | CommandsView.vue:153-156; shell en.json:34 | Supported |
| System commands tab only with write | CommandsView.vue:65-67 | Supported |
| New command opens dialog **New command** | CommandsView.vue:155 and the `<NewCommandDialog ... @created="select" />` line; NewCommandDialog.vue:163; page en.json dialog.title | Supported |
| Name field, e.g. `hello`; default prefix gives `!hello` | NewCommandDialog.vue:170-178; page en.json dialog.name/namePlaceholder; CommandService.cs:641-648 default "!" | Supported |
| **What it does** four choices and their fields (Reply, Reply 1/2, Pipeline, Script) | NewCommandDialog.vue:180-218; page en.json dialog.type*, editor.reply, replyNumber, pipeline, script | Supported |
| Prefix and Match at the bottom of the dialog | NewCommandDialog.vue:219-224 (TriggerFields last) | Supported |
| Create command closes dialog, opens command in editor, switched on | NewCommandDialog.vue:148-156; CommandsView.vue `@created="select"`; CommandDtos.cs CreateCommandDto `IsEnabled = true`; dialog sends no isEnabled (:116-122) | Supported |
| Script from the **Scripts** page | shell en.json:825 "Scripts"; CodeScriptPicker.vue:51,67 (RouterLink `dashboard-scripts`) | Supported |
| Empty list "No commands yet." and **Make the first command** opens the dialog | CommandList.vue:167-172 (`emit('create')`); CommandsView.vue `@create="creating = true"`; page en.json list.empty/makeFirst | Supported |
| Name trimmed, leading `!` dropped, lowercased | NewCommandDialog.vue:81-83 | Supported |
| Empty name: "Give the command a name." | NewCommandDialog.vue:127-131; page en.json dialog.nameRequired | Supported |
| Space inside refused, can never match one chat word | CommandService.cs:597-604 | Supported |
| Name only the prefix refused; prefix added on run | CommandService.cs:606-621 | Supported |
| Same name refused, compared without case | CommandService.cs:101-107 (NameNormalized) | Supported |
| Longer than 100 refused | CommandDtos.cs CreateCommandDto `[Required, MaxLength(100)] Name` | Supported |
| Refusal stays in dialog, nothing made | NewCommandDialog.vue:147-153 | Supported |
| Editor **Reaction**: Text, Random reply, Pipeline, Code script | CommandEditor.vue:146-153,322-328; shell en.json replyMode.label "Reaction", full "Pipeline"; page en.json typeText/typeRandomReply/typeCode | Supported |
| Pipeline has its own reply step | shell en.json replyMode.none | Supported |
| Code script runs the script under **Script** | CommandEditor.vue:331; page en.json editor.script | Supported |
| Reply to Twitch chat by default, one bot voice; Send the reply to can change it | shell en.json:97-104 (target.chat "Twitch chat"); DTO ReplyDelivery null = platform chat | Supported |
| Helpers in braces, e.g. `{stream.game}`; example "Example Game" is an illustrative value | CommandService.cs:93-98 helper check; Application/Abstractions/Templating/TemplateHelperRegistry.cs:200 `Literal("stream.game", ...)` | Supported |
| Reply box 500 characters | CommandEditor.vue:338; NewCommandDialog.vue:206 | Supported |
| "Not a known helper here:" with names | shell en.json:185 | Supported |
| Edit replies opens **Random replies** with help text | CommandEditor.vue:342-352,481; page en.json randomPanel, editReplies, randomHelp | Supported |
| Add a reply; X removes; off at one box | RandomReplyList.vue:14,59,63,73 | Supported |
| Use these replies; count e.g. "3 replies" | page en.json useReplies, replyCount; CommandEditor.vue:176-178,345-347 | Supported |
| Save changes: count leaves, Save off | CommandEditor.vue:123-127,184-195,433 | Supported |
| Start from another list, copied | CommandEditor.vue:161-174; page en.json chooseSet, useSet | Supported |
| Trigger = Prefix + Match, in dialog and **Trigger and cooldowns** | CommandEditor.vue:365-386; NewCommandDialog.vue:219-224; page en.json editor.limits, trigger.prefixLabel/matchLabel | Supported |
| Channel prefix is **Command prefix** on **Bot basics** | settings en.json:85; shell en.json:882 | Supported |
| Channel default / Custom / None; default Channel default; `!` when none set | page en.json trigger.prefix; CommandDtos.cs PrefixMode "Default"; CommandService.cs:641-648; ChatMessageHandler.cs:721-726 | Supported |
| Custom prefix up to 8 characters | CommandDtos.cs `[MaxLength(8)] CustomPrefix` | Supported |
| Letter case never matters | ChatMessageHandler.cs:735,757,808-822 (OrdinalIgnoreCase); ChannelRegistry.cs:513 (Regex IgnoreCase) | Supported |
| Starts with: space or nothing after; rest goes to command; default | ChatMessageHandler.cs:749-762; CommandDtos.cs MatchMode "StartsWith" | Supported |
| Exact | ChatMessageHandler.cs:734-737 | Supported |
| Contains: whole word; `cat` not on "category" | ChatMessageHandler.cs:739-742,801-825 | Supported |
| Regex tested against the whole message | ChatMessageHandler.cs:744-747 (`IsMatch(text)`); page en.json matchHelp | Supported |
| Empty custom prefix/pattern message; makes nothing; editor Save off | NewCommandDialog.vue:75-79,133-137; page en.json dialog.triggerRequired; CommandEditor.vue:128,433 | Supported |
| Pick opens editor with name at top | CommandList.vue:206; CommandsView.vue select; CommandEditor.vue:296 | Supported |
| "2 unsaved changes"; Discard; refused save keeps edits | CommandEditor.vue:123-127,184-201,424; page en.json unsaved, discard | Supported |
| Who can use it default Everyone | CommandDtos.cs MinPermissionLevel = Everyone; page en.json roles.Everyone | Supported |
| Reaction default Text | NewCommandDialog.vue:48 kind 'template' | Supported |
| Send the reply to choices, default Twitch chat; overlay is a browser source with a bot line | shell en.json:97-104 | Supported |
| Read it aloud help, default off | page en.json speakHelp; CreateCommandDto `bool SpeakWithTts` | Supported |
| Cooldowns default 0; "No cooldown"; chat vs per-person meaning | CommandDtos.cs CooldownSeconds/UserCooldownSeconds int; CommandEditor.vue:106-122; page en.json chatCooldownHelp, personCooldownHelp | Supported |
| Send the reply to / Read it aloud only for text or random | CommandEditor.vue:354-362 (`v-if="!scripted"`; the slot renders only in simple mode: components/layout/ReplyModeField.vue:134-140) | Supported |
| Reset to preset only for preset commands; texts | CommandEditor.vue:454-479; page en.json resetBody, resetSame | Supported |
| Row switch and editor **Enabled** save at once | CommandList.vue:121-122,231-234; CommandEditor.vue:298-303 | Supported |
| Off stays in list, marked **Off**, answers nobody | CommandList.vue:217,227; page en.json enabledHelp, list.off | Supported |
| Duplicate makes `name-copy`, opens it | CommandEditor.vue:256-287,444-453; CommandsView.vue `@duplicated="select"` | Supported |
| Copy keeps saved settings except Send the reply to, aliases, switch; reply to Twitch chat; starts off; no Reset to preset | CommandEditor.vue:262-279,454-455; CommandService.cs:190-192 (null ReplyDelivery stored) | Supported |
| Copy name taken: refused, reason in editor | CommandService.cs:101-107; CommandEditor.vue:280-284,424 | Supported |
| Delete dialog texts, **Delete command**, editor closes and command leaves | CommandEditor.vue:289-292,435-437; CommandsView.vue removeCommand; page en.json confirmTitle/Body/Action | Supported |
| In use: no dialog, one line per kind, count, up to five names, "Still used by 2 timers: …" | CommandEditor.vue:232-246; blastLines.ts; shell en.json:160 `{count} {what}: {names}`; CommandService.cs:441,472-480; page en.json inUse | Supported |
| Kinds and sidebar pages | CommandService.cs:485-495; shell en.json:171-176, 818,822,829,830,832 | Supported |
| Repeats badge, count line | CommandList.vue:181,215,225; page en.json list.repeats, duplicates | Supported |
| Channel command answers over system command; permit, unpermit, mydata, gdpr, forgetme exempt | ChatMessageHandler.cs:271-293; IBuiltinCommand.cs:39,46; PermitBuiltins.cs:256-257,498-499; GdprBuiltins.cs:206-241 | Supported (see Product defect 1) |
| Move copies to system → Remove copies → removed for good → system answers | CommandList.vue:102-110,189-191,242-245; page en.json moveCopies, moveAction, moveBody | Supported |
| No dashboard StreamElements import; API imports commands, quotes, timers | ImportController.cs:25-46; ImportSummary.cs:21-26; grep -rli streamelements dashboard/src hits only api/schema.d.ts, api/supporters.ts and the webhooks and supporters i18n files (tips), no import view | Supported |
| Troubleshooting 1-4 | as rows above | Supported |
| Cooldown holds viewers, not broadcaster or moderators | ChatMessageHandler.cs:1880-1886 IsCooldownExempt, :414-417; CooldownManager.cs:35-36 | Supported |
