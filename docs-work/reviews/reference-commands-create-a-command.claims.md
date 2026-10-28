# Claims: /reference/commands/create-a-command

Product repo paths are relative to the product root. Dashboard labels: `dashboard/src/views/dashboard/commands/i18n/en.json` (page en.json) and `dashboard/src/i18n/locales/en.json` (shell en.json).

| # | Claim | Evidence |
| --- | --- | --- |
| 1 | Page label **Commands** in the sidebar | dashboard/src/layouts/dashboard/navigation.ts:180-184; shell en.json frame.nav.commands; page en.json:4 |
| 2 | Tabs **Channel commands** and **System commands** | page en.json:9-10; CommandsView.vue:61-64 |
| 3 | Channel and system commands never share one list | CommandsView.vue:57-58; CommandList.vue:2-4 |
| 4 | Moderators and above may open and change commands | ActionDefinitionSeeder.cs:179-180 (commands:read default Mod, commands:write Mod); route.ts:20; CommandsController.cs:84-193 RequireAction |
| 5 | Broadcaster may let VIPs open the page (read) | ActionDefinitionSeeder.cs:155-165,179 (MFloor floor Vip) |
| 6 | A reader sees the list only; New command disabled with "You can view this, but your role cannot change it." | CommandsView.vue:55-56,153-157,183; shell en.json common.readOnly |
| 7 | System commands tab hidden without write | CommandsView.vue:65-67 |
| 8 | New command button opens dialog **New command** | CommandsView.vue:153-157,223; page en.json:6,114 |
| 9 | Name field, placeholder hello; chat types it with the prefix | NewCommandDialog.vue:170-179; page en.json:115-117 |
| 10 | **What it does** with four choices | NewCommandDialog.vue:180-201; page en.json:119-123 |
| 11 | Field shown per choice | NewCommandDialog.vue:202-218 |
| 12 | **Create command** closes dialog and opens the command | NewCommandDialog.vue:148-156; CommandsView.vue:223 (@created=select) |
| 13 | New command is switched on | CommandDtos.cs:148 (IsEnabled = true); NewCommandDialog.vue:116-122 sends no isEnabled |
| 14 | Empty list: "No commands yet." and **Make the first command** | CommandList.vue (file lines 166-174); page en.json:18-19 |
| 15 | Name trimmed, leading ! dropped, lowercased | NewCommandDialog.vue:81-83 |
| 16 | Empty name: "Give the command a name." | NewCommandDialog.vue:127-131; page en.json:118 |
| 17 | Space inside name refused | Infrastructure/Commands/CommandService.cs:597-605 |
| 18 | Name only the prefix refused; prefix added automatically | CommandService.cs:607-621 |
| 19 | Duplicate name refused, compared without case | CommandService.cs:101-107 (NameNormalized) |
| 20 | Name max 100 characters | CommandDtos.cs:91-92 |
| 21 | Refusal stays in dialog | NewCommandDialog.vue:147-153 |
| 22 | Editor **Reaction** with Text, Random reply, Code script, Pipeline | CommandEditor.vue:146-153,322-328; ReplyModeField.vue:65-72,125; shell en.json common.replyMode.label/full; page en.json:46-47,60 |
| 23 | Pipeline has its own reply step | shell en.json common.replyMode.none |
| 24 | Code script chosen under **Script** | page en.json:61; CodeScriptPicker.vue |
| 25 | Every reply is a line the bot types in chat, one bot voice | page en.json:42 ("What the bot says in chat"); product rule bot-speaks-in-one-voice |
| 26 | Reply is a template with helpers in braces, e.g. {stream.game} | Application/Abstractions/Templating/TemplateHelperRegistry.cs:200; TemplateHelperValidator.cs:96; CommandService.cs:94-99 (helper check on create) |
| 27 | Reply box max 500 characters | CommandEditor.vue:338; NewCommandDialog.vue:206 |
| 28 | Unknown helper: "Not a known helper here: ..." | TemplateField.vue:102-104; shell en.json template.field.unknown |
| 29 | Random replies: **Edit replies** opens **Random replies** dialog with help text | CommandEditor.vue:342-351,481; RandomReplyDialog.vue:39-46; page en.json:48,50,52 |
| 30 | **Add a reply**, remove cross, at least one box | RandomReplyList.vue (file lines 30-75; remove disabled when length 1); page en.json:55-56 |
| 31 | **Use these replies**, then count shown | RandomReplyDialog.vue:30-33,44; CommandEditor.vue:176-178,345-347; page en.json:49,51 |
| 32 | Then **Save changes** | CommandEditor.vue:184-195,431; page en.json:78 |
| 33 | Start from another command's list, copied not shared | RandomReplyDialog.vue:1-4 comment, 27-29 copy; CommandEditor.vue:161-174; page en.json:53-54 |
| 34 | Trigger = Prefix + Match, in **Trigger and cooldowns** | TriggerFields.vue:40-83; CommandEditor.vue:365-386; page en.json:69,129,137 |
| 35 | Prefix choices and help | page en.json:129-136; commandDraft.ts:24 |
| 36 | Channel prefix is ! when channel set none | CommandService.cs:641-648 |
| 37 | Default prefix mode Channel default | CommandDtos.cs:111; NewCommandDialog.vue:53 |
| 38 | Custom prefix max 8 characters | CommandDtos.cs:114-115 |
| 39 | None = no prefix | ChatMessageHandler.cs:722-726 |
| 40 | Match choices; case never matters | page en.json:137-145; ChatMessageHandler.cs:733-765 (OrdinalIgnoreCase), 806-825 |
| 41 | Starts with: followed by space or nothing; rest goes to command | ChatMessageHandler.cs:749-762 |
| 42 | Exact: prefix+name and nothing else | ChatMessageHandler.cs:735-737 |
| 43 | Contains: whole word anywhere; not inside longer word | ChatMessageHandler.cs:740-742,803-825 |
| 44 | Regex tests the whole message with the pattern | ChatMessageHandler.cs:745-747; page en.json:138 |
| 45 | Default match Starts with | CommandDtos.cs:119; NewCommandDialog.vue:55 |
| 46 | Empty custom prefix / pattern: dialog message; Save off in editor | NewCommandDialog.vue:133-137; page en.json:125; commandDraft.ts:216-221; CommandEditor.vue:128,433 |
| 47 | Pick in list opens editor with name at top | CommandList.vue (SummaryRow @click pick); CommandsView.vue:192-198; CommandEditor.vue:296 |
| 48 | Unsaved count text | CommandEditor.vue:123-127; page en.json:77 |
| 49 | Discard restores saved | CommandEditor.vue:197-201; page en.json:79 |
| 50 | Refused save keeps draft, shows reason | CommandEditor.vue:12-13,192-194,424 |
| 51 | Who can use it default Everyone | CommandDtos.cs:107; page en.json:68,104 |
| 52 | Reaction default Text | NewCommandDialog.vue:48 (template) |
| 53 | Send the reply to choices, default Twitch chat | ReplyDeliveryField.vue:41-46,92; replyMode.ts:57-59,108-112; shell en.json common.replyDelivery |
| 54 | Read it aloud help text, default off | page en.json:43-44; CommandDtos.cs:150 (bool default false) |
| 55 | Cooldowns default 0 seconds; the editor shows "No cooldown" | CommandDtos.cs:135-140 (int default 0); CommandEditor.vue:106-122; page en.json:70 |
| 56 | Delivery and Read it aloud only for text/random | CommandEditor.vue:354-362; commandDraft.ts:146-149 |
| 57 | List row switch and editor **Enabled** save at once | CommandList.vue (Switch in #trailing, toggle()); CommandEditor.vue:12,298-303; page en.json:39 |
| 58 | Off command help text; list badge **Off** | page en.json:22,40; CommandList.vue (StatusBadge Off) |
| 59 | **Duplicate** makes name-copy, opens it | CommandEditor.vue:256-287,444-453; CommandsView.vue:196 |
| 60 | Copy has the saved settings except Send the reply to, its aliases and the switch; an alias is another name for a command (no uniqueness claim: CommandService.cs:101-107 checks only the name, :190 and :353-354 store aliases unchecked); starts off; no Reset to preset button | CommandEditor.vue:254-255 comment, 262-279 (isEnabled: false; no aliases, no presetKey); CommandEditor.vue:454-460 (v-if row.presetKey); CommandDtos.cs:35, 42, 145; CommandService.cs:101-107, 190, 353-354 |
| 61 | Copy does not keep Send the reply to; reply goes to Twitch chat | CommandEditor.vue:262-279 (no replyDelivery field) |
| 62 | Copy name taken: refused, reason shown | CommandService.cs:101-107; CommandEditor.vue:280-284 |
| 63 | Delete flow, dialog text, **Delete command** | CommandEditor.vue:232-252,289-292,427-441; page en.json:80,82-84 |
| 64 | Editor closes, command removed | CommandsView.vue:122-125 |
| 65 | Used elsewhere: dialog does not open, "Still used by ..." | CommandEditor.vue:230-246; page en.json:85; shell en.json common.blast.categories (rewards, timers, event responses) |
| 66 | Repeats a system command: badge, count line (system-answers clause REPLACED by row 80) | CommandList.vue:70-84 (script), badge in template; page en.json:23-24 |
| 67 | Move copies to system / Remove copies removes for good | CommandList.vue:86-100; page en.json:25-28 |
| 68 | Reset to preset only for preset commands; texts | CommandEditor.vue:203-228,454-479; page en.json:86-90 |
| 69 | No dashboard import page for StreamElements | no StreamElements reference under dashboard/src (grep); ImportController.cs:32,44-46 |
| 70 | API import brings commands, quotes and timers | ImportController.cs:44; Application/Import/Dtos/ImportSummary.cs:21-26 |

## Revision 2 (after review)

| # | Claim | Evidence |
| --- | --- | --- |
| 71 | Roles that may open and change: **Moderator**, **Lead moderator**, **Editor**, **Broadcaster** | ActionDefinitionSeeder.cs:179-180 (floor Mod); role ladder labels dashboard/src/views/dashboard/settings/permissions/i18n/en.json:5-12 |
| 72 | VIP access set on **Permissions** settings page, **Actions** tab, **Commands** area | shell en.json frame.nav.settingsPages.permissions; settings/permissions/route.ts:17; permissions i18n en.json:28-32 (tabs.actions), :54 (areas commands) |
| 73 | Step 4 field per choice: **Reply**, **Reply 1**/**Reply 2**, **Pipeline**, **Script** | page en.json:42 (editor.reply), :57 (replyNumber "Reply {number}"), :58 (pipeline), :61 (script); NewCommandDialog.vue:180-218 |
| 74 | Remove box control is an X icon button | RandomReplyList.vue:54-64 (`<X />`, aria-label removeReply) |
| 75 | Helper is a name in braces the bot fills in | CommandService.cs:93-98; shell en.json template.field |
| 76 | Unknown helper message: "Not a known helper here:" then the unknown names | shell en.json:185 `Not a known helper here: {names}` |
| 77 | Channel prefix is **Command prefix** on **Bot basics** | shell en.json settingsPages.botBasics; settings i18n en.json basics.prefix.title; settings/route.ts:61 |
| 78 | Letter case ignored for Regex too | ChannelRegistry.cs:511-515 (RegexOptions.IgnoreCase) |
| 79 | Chat overlay: browser source showing reply as a bot line | shell en.json:99 replyDelivery.hint |
| 80 | Channel command answers over a same-named system command, except always-on (!permit, !unpermit) and reserved (data-rights) | ChatMessageHandler.cs:271-276, 283-296, 180-182 |
| 81 | **Move copies to system** sits on the count line; confirm **Remove copies** deletes each copy; system commands untouched | CommandList.vue:102-110, 175-192; page en.json:24-28 |
| 82 | **Discard** in the footer | CommandEditor.vue:427-431 (EditorFooter discard-label) |
| 83 | Chat cooldown / Per-person cooldown labels and meaning | page en.json:72-75 |
| 84 | Alias = other name that runs the same command | CommandDtos.cs:35 `List<string> Aliases`; resetFields.aliases page en.json |
| 85 | Preset = ready-made command the bot added | CommandDtos.cs:41-42 ("preset this command was seeded from") |
| 86 | Still used by line: `{count} {what}: {names}` joined by " · ", up to 5 names | CommandEditor.vue:236-243; blastLines.ts; shell en.json:160; CommandService.cs:441 (BlastSampleSize = 5), :472-480 |
| 87 | Kinds: rewards, timers, event responses, chat triggers, giveaways, catalog items, else "other places" | CommandService.cs:485-495; shell en.json:164-179 |
| 88 | Sidebar pages: Channel points, Triggers and timers, Event responses, Giveaways, Economy (catalog) | layouts/dashboard/navigation.ts:187-188,205-206,246-247,252-255,264-265; shell en.json frame.nav |
| 89 | Troubleshooting: viewer role must be at least **Who can use it** | CommandDtos.cs MinPermissionLevel; page en.json editor.role |

## Revision 3 (after reader round 2)

Rows 25, 60, 84 and 87 ("other places") are no longer on the page: row 25 is replaced by row 90; the alias and "other places" sentences were cut.

| # | Claim | Evidence |
| --- | --- | --- |
| 90 | A reply goes to Twitch chat by default; **Send the reply to** can send it elsewhere | row 53 (ReplyDeliveryField.vue:41-46,92; shell en.json common.replyDelivery, "none": "Nowhere" at :104) |
| 91 | Prefix and Match fields are in the New command dialog (below the reaction fields) | NewCommandDialog.vue:219-224 (TriggerFields last in FormDialog) |
| 92 | Empty custom prefix or pattern: **Create command** shows the message and makes nothing (button is not disabled) | NewCommandDialog.vue:75, 133-137 (return before create.mutateAsync) |
| 93 | After **Save changes**: unsaved count leaves footer, **Save changes** off | CommandEditor.vue:184-195 (baseline reset), :123-127 (empty text at 0), :433 (can-save dirtyCount > 0) |
| 94 | **X** is off when one reply box is left; **Edit replies** shows only with Reaction **Random reply** (CommandEditor.vue:342-349 `v-if="random"`) | RandomReplyList.vue `:disabled="replies.length === 1"` |
| 95 | Script comes from the **Scripts** page in the sidebar | CodeScriptPicker.vue:51,67 (RouterLink dashboard-scripts); scripts/route.ts:18; navigation.ts:223-224; shell en.json:825 "Scripts" |
| 96 | Data-rights commands that always answer as the system command are `!mydata`, `!gdpr` and `!forgetme` | Infrastructure/Identity/Builtins/GdprBuiltins.cs:204-209 (ForgetMeBuiltin, IsReserved => true), :220,238 (BuiltinKey); Application/Commands/Builtin/Personality/BuiltinResponseSlots.Community.cs:27 (Key "forgetme") |
| 97 | After **Remove copies** each system command answers in chat | page en.json list.moveBody "The system command answers in chat instead." |
| 98 | A chat or per-person cooldown holds viewers; the broadcaster and moderators are exempt | ChatMessageHandler.cs:326-336, 417-420, 1885-1886; CooldownManager.cs:35-36 |
| 100 | Chat cooldown = all of chat waits between uses; per-person cooldown = one viewer waits | ChatMessageHandler.cs:415-431 (global then per-user check), 453-457 (GlobalCooldown seconds); CommandEditor.vue:275-276 (cooldownSeconds, userCooldownSeconds) |
| 101 | After Move copies to system, chat gets the system command's answer for the name | CommandList.vue:102-110, 175-192; ChatMessageHandler.cs:285-292 |
| 99 | Typed-result example "Example Game" is a placeholder rendering of {stream.game} | row 26; placeholder value chosen by the writer |
