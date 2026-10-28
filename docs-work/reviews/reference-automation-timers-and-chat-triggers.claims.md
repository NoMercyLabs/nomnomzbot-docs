# Claims: /reference/automation/timers-and-chat-triggers

Product repo paths are relative to the product root. Page en.json: `dashboard/src/views/dashboard/timers/i18n/en.json`. Shell en.json: `dashboard/src/i18n/locales/en.json`. Handler: `server/src/NomNomzBot.Infrastructure/Chat/EventHandlers/ChatMessageHandler.cs`. Timer job: `server/src/NomNomzBot.Infrastructure/Commands/Jobs/TimerService.cs`. Components: `dashboard/src/views/dashboard/timers/components/`.

| # | Claim | Evidence |
| --- | --- | --- |
| 1 | Sidebar entry **Triggers and timers**, gated by timers:read | dashboard/src/layouts/dashboard/navigation.ts:186-191; shell en.json:818; page en.json:4 |
| 2 | Tabs **Timers** and **Chat triggers** | page en.json:8-10; TimersView.vue tabs computed |
| 3 | Chat triggers run only on lines that are not commands and do not start with the prefix | Handler:172-185 (`resolvedCommand is null && !defaultPrefixed`), 230-232 |
| 4 | Moderator+ change; read and write action defaults | server/src/NomNomzBot.Infrastructure/Content/Identity/ActionDefinitionSeeder.cs:188-189,194-195 |
| 5 | Broadcaster may let VIP read each tab (MFloor Vip) | ActionDefinitionSeeder.cs:188,194 |
| 6 | Reader sees list only; editor hidden without write | TimersView.vue `#detail v-if can('timers:write')`; ChatTriggersPanel.vue:105 |
| 7 | New button shows read-only text without write | TimersView.vue PageCreateButton disabled-reason common.readOnly; shell en.json common.readOnly |
| 8 | New timer dialog: Name, Reaction, Minutes between posts, Create timer | NewTimerDialog.vue template; page en.json:84,89,104,108-113; shell en.json:86-89 |
| 9 | Default 30 minutes | timerDraft.ts defaultMinutes = 30; TimerDtos.cs:69 |
| 10 | Reaction Simple reply = Messages, one per line, blank lines dropped | timerDraft.ts messagesOf; page en.json:85-86 |
| 11 | Pipeline picker takes a command, pipeline or action | NewTimerDialog.vue kinds; ReplyModeField.vue:150-160; shell en.json:132-137 |
| 12 | Dialog errors (4 of 4) | NewTimerDialog.vue submit; page en.json:89,111-112; intervalProblem with timerLimits 1/1440 |
| 13 | Create closes dialog; timer is enabled by default | NewTimerDialog.vue `open.value = false`; TimerDtos.cs:74 IsEnabled = true |
| 14 | Empty list text and Make the first timer | TimerList.vue template; page en.json:73-74 |
| 15 | Timers checked every 30 seconds | TimerService.cs TickInterval = 30 s |
| 16 | Posts when interval passed and chat lines since last post reached | TimerService.cs ProcessTimerAsync interval and MinChatActivity checks |
| 17 | Chat lines needed default 0 | timerDraft.ts defaultChatLines = 0; TimerDtos.cs:72 |
| 18 | Only channels the bot is connected to | TimerService.cs TickAsync `_registry.GetAll()` |
| 19 | Messages posted in turn, wraps round | TimerService.cs NextMessageIndex modulo Messages.Count |
| 20 | A dashboard timer in Pipeline mode has no messages and runs its target each time | timerDraft.ts:107-109 (messages cleared on switch to full); NewTimerDialog.vue:56-58 (lines empty when not simple); TimerService.cs ProcessTimerAsync target/pipeline branch |
| 20a | A timer that never posted is due at once; a new timer starts at 0 chat lines, so it posts at the next check (within about 30 s); afterwards it waits the interval | TimerService.cs:162-165 (LastFiredAt null -> MinValue), :206 (set only after a post); NewTimerDialog.vue:91-96 (no minChatActivity sent); TimerDtos.cs:71-72 (default 0) |
| 20c | A duplicate keeps the source's Chat lines needed; once on, it posts at the next check after chat has had that many lines since the bot began watching your channel | TimerEditor.vue:150 (minChatActivity copied), :151 (isEnabled false); TimerService.cs:173-187 (check runs with snapshot 0 when absent, :175-177); ChatMessageHandler.cs:148 and IChannelRegistry.cs:317 (MessageCount in memory); ChannelRegistry.cs:89-95, 228-230, 725-737 (count starts when the channel context is created) |
| 20d | With Chat lines needed at 0, a timer posts on time alone | TimerService.cs:173 (check only when MinChatActivity > 0) |
| 20b | Troubleshooting: next post can come up to 30 s after the interval | TimerService.cs TickInterval 30 s, interval check per tick |
| 21 | Message goes to chat by default; failed send retries same line | TimerService.cs FireMessageAsync ReplyDelivery.ChatOnly, returns false without advancing |
| 22 | Editor fields (7 of 7 in table) with limits 1-1440 and 0-10000 | TimerEditor.vue template; timerDraft.ts timerLimits; TimerDtos.cs:68-72; page en.json:79-96 |
| 23 | Enabled switch saves at once; Off badge | TimerEditor.vue toggle.mutate; TimerList.vue StatusBadge; page en.json:80-81,76 |
| 24 | Post once switches itself off after one post | TimerService.cs `if (timer.FireOnce) timer.IsEnabled = false` |
| 25 | Unsaved count, Save changes, Discard | TimerEditor.vue EditorFooter; page en.json:97-99 |
| 26 | Duplicate: name "{name} copy", switched off, opens | TimerEditor.vue:135-156 (isEnabled false, emits duplicated); TimersView.vue select($event); page en.json:101-102 |
| 27 | Delete flow, confirm text, editor shows pick text | TimerEditor.vue remove; TimersView.vue removeTimer select(undefined); page en.json:104-106,78 |
| 28 | New chat trigger dialog fields and errors | NewChatTriggerDialog.vue; page en.json:41,46,56-61 |
| 29 | New trigger starts: contains, case off, 30 s, Everyone, enabled | ChatTriggerDtos.cs CreateChatTriggerRequest defaults (MatchType contains, CaseSensitive false, IsEnabled true, CooldownSeconds 30, MinPermissionLevel Everyone :77) |
| 30 | Empty trigger list text and button | ChatTriggersPanel.vue template; page en.json:16-17 |
| 31 | Match choices (4 of 4) and their behavior; Contains is plain substring | chatTriggerDraft.ts matchTypes; Handler:1558-1585 TriggerMatches; page en.json:22-26 |
| 32 | Case sensitivity | Handler:1560-1562; page en.json:44-45 |
| 33 | Invalid regex refused on save | ChatTriggerService.cs Validate (regex compile) |
| 34 | Soundboard word claims the line | Handler:205-215 |
| 35 | One line fires at most one trigger; role then cooldown | Handler:1364-1400 (return after first match) |
| 36 | Role choices Everyone to Broadcaster | page en.json:28-37; ChatTriggerEditor.vue rungNames |
| 37 | Cooldown channel-wide; broadcaster and moderators exempt | Handler:1374-1383, 1885-1886 IsCooldownExempt; page en.json:48-49 |
| 38 | Cooldown kept between 0 and 86400 | ChatTriggerService.cs MaxCooldownSeconds = 86_400, Math.Clamp |
| 39 | Trigger editor fields (7 of 7) | ChatTriggerEditor.vue template; page en.json:40-50 |
| 40 | Trigger list shows words and match choice | ChatTriggersPanel.vue SummaryRow title/detail |
| 41 | Trigger toggle saves at once | ChatTriggerEditor.vue:73-75 |
| 42 | Reply goes to chat by default | Handler:1627-1660 ReplyDelivery.ChatOnly |
| 43 | Trigger delete is permanent; editor shows pick text | ChatTriggerService.cs DeleteAsync Remove; ChatTriggersPanel.vue:62-65; page en.json:51-53,19 |
| 44 | `{channel}` is a timer helper | docs page variables-and-templates.mdx:66,79 |
