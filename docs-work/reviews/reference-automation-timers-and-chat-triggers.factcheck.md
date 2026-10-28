# Fact check: src/content/reference/en/automation/timers-and-chat-triggers.mdx
Verdict: PASS
Reviewed: src/content/reference/en/automation/timers-and-chat-triggers.mdx
Reviewed-SHA: e7a4e7ee46b53b22

## Round 4: line 71

Line 71 now reads "Once you switch the copy on, it posts at the next check after chat has had that many lines since the bot began watching your channel." The count is the channel's in-memory line count (ChatMessageHandler.cs:146-148). It starts at 0 each time the bot loads the channel's context (ChannelRegistry.cs:89-95; drop points ChannelRegistry.cs:228-230, 725-737). A never-posted timer compares against it from 0 (TimerService.cs:173-187). True. The page is 228 lines. In round 4, I read lines 66-75 and searched the whole page for braces. I did not open the other lines again in this round. They rest on the product lines I opened in rounds 2 and 3, against the same product commit b6204c36c. The only word in braces is `{channel}`, on line 44, in a code span. Product defects: none found.

## Round 3 finding (now fixed)

Line 71 said "since the bot started". That was not exact. A timer that has never posted has no snapshot, so its start count is 0 (TimerService.cs:175-177). It compares against `channelCtx.MessageCount` (TimerService.cs:178). That count belongs to the channel's in-memory context. It goes up by one for each chat line (ChatMessageHandler.cs:146-148). The context is made new when the bot loads the channel (server/src/NomNomzBot.Infrastructure/Platform/ChannelRegistry.cs:89-95). It is dropped when the channel is unregistered (ChannelRegistry.cs:228-230), or when the channel is offline and idle too long (ChannelRegistry.cs:725-737). A context made new again starts at 0. So the count runs from when the bot last began watching the channel, not from the start of the bot. The words "since its last post" on line 65 do not fit a timer that has never posted either, so line 71 needs its own reference point.

Corrected wording for line 71:

> Once you switch the copy on, it posts at the next check after chat has had that many lines since the bot began watching your channel.

The round 3 bullet on lines 70-71 below is replaced by this finding. The claim row "Duplicate copy keeps Chat lines needed; posts ... since the bot started" is Unsupported in part.

Round 3, against product master b6204c36c. Paths are relative to the product repo.

## Round 3: changed sentences (lines 67-74)

- Lines 67-68: "A timer that has never posted is due at once. A new timer starts with Chat lines needed at 0, so it posts at the next check, within about 30 seconds." The due time is TimerService.cs:162-165, and `LastFiredAt` is set only after a post (TimerService.cs:206). The dialog sends no `minChatActivity` (NewTimerDialog.vue:91-96), so the server default 0 applies (TimerDtos.cs:71-72). With 0, the chat-lines check is skipped (TimerService.cs:173). Checks are 30 s apart (TimerService.cs:50). True.
- Lines 70-71: "A copy made with Duplicate keeps the Chat lines needed of the timer it copies. Once you switch the copy on, it posts at the next check after chat has had that many lines since the bot started." The copy sends `minChatActivity: saved.minChatActivity` (TimerEditor.vue:150). A timer with no snapshot starts its count at 0 (TimerService.cs:175-177). `MessageCount` is the channel's in-memory line count since the bot started (ChatMessageHandler.cs:148; IChannelRegistry.cs:317). True.
- Line 72: "After the first post, it waits Minutes between posts between posts." TimerService.cs:162-165, 206. True.
- Line 74: "When Chat lines needed is 0, a timer posts on time alone." TimerService.cs:173 (the check runs only when the value is above 0). True.

The rest of the page has the same text I checked in round 2, and I read it again against the code. The page has no bare word in braces outside a code span (only `{channel}`, line 44, in backticks).

## Round 2 checks (still valid)

- "A timer that has never posted is due at once. So a new timer posts at the next check, within about 30 seconds." The due time is `(LastFiredAt ?? DateTime.MinValue).AddMinutes(IntervalMinutes)` (server/src/NomNomzBot.Infrastructure/Commands/Jobs/TimerService.cs:162-165). `LastFiredAt` is set only after a post (TimerService.cs:206). The check runs every 30 s (TimerService.cs:50). With **Chat lines needed** at 0 the chat-line check is skipped (TimerService.cs:173). True.
- The copy made with Duplicate has no last-post time: it is created with `isEnabled: false` (dashboard/src/views/dashboard/timers/components/TimerEditor.vue:145-155), and the create request has no `LastFiredAt` field (TimerDtos.cs:60-80). The old sentence on this was replaced in round 3 (see above).
- "A timer set to Pipeline has no messages, so it runs its command, pipeline or action each time." The dialog sends `messages: []` for Pipeline (NewTimerDialog.vue:56-58). A switch to Pipeline clears them (timerDraft.ts:107-109). The tick runs a command or action target or the pipeline (TimerService.cs:189-197). True.
- Troubleshooting step 3: "After a post, the next one can come up to 30 seconds later than the number you set." The next due time is the last post plus the interval (TimerService.cs:162-165), and checks are 30 s apart (TimerService.cs:50, 97). True.
- The cooldown paragraph split: the text is unchanged. ChatTriggerService.cs:28, 111, 179-182 still support it.

The page has no bare word in braces outside a code span. Only `{channel}` (line 44, in backticks) is left.

Notes (not failures):
- A bare number that votes in an open chat poll also never fires a trigger (ChatMessageHandler.cs:192-201). The page's list is not stated as complete.
- The Chat triggers tab has its own permissions (`chattriggers:read` / `chattriggers:write`, TimersView.vue:65-68). They have the same defaults as the timer permissions (ActionDefinitionSeeder.cs:188-189, 194-195).

Product defects: none found.

## Claims

| Claim | Supported by | Status |
| --- | --- | --- |
| Sidebar **Triggers and timers** | dashboard/src/layouts/dashboard/navigation.ts:187-191; dashboard/src/i18n/locales/en.json:818 | Supported |
| Tabs **Timers**, **Chat triggers** | dashboard/src/views/dashboard/timers/i18n/en.json:8-10; TimersView.vue:73-76 | Supported |
| Moderator and up may open and change | server/src/NomNomzBot.Infrastructure/Content/Identity/ActionDefinitionSeeder.cs:188-189, 194-195 | Supported |
| Broadcaster may let a VIP open each tab | ActionDefinitionSeeder.cs:188, 194; TimersView.vue:79-85 | Supported |
| VIP sees the list only, editor does not open | TimersView.vue:128; ChatTriggersPanel.vue:105 | Supported |
| New buttons show "You can view this, but your role cannot change it." | TimersView.vue:105-109; dashboard/src/i18n/locales/en.json:34 | Supported |
| New timer dialog fields and **Create timer** | NewTimerDialog.vue:110-158; timers en.json:77, 83, 106, 112; shell en.json:87-89 | Supported |
| Example name `Follow reminder` | timers en.json:108 | Supported |
| Default 30 minutes | timerDraft.ts:29; TimerDtos.cs:69 | Supported |
| Messages one per line, blank lines dropped | timerDraft.ts:62-67 | Supported |
| Pipeline picks a command, pipeline or action | NewTimerDialog.vue:132-135 | Supported |
| New timer switched on, dialog closes | NewTimerDialog.vue:91-104; TimerDtos.cs:74 | Supported |
| "No timers yet." and **Make the first timer** | TimerList.vue:79-81; timers en.json:63-64 | Supported |
| Four dialog errors | NewTimerDialog.vue:59-83; timers en.json:84, 109-111; timerDraft.ts:34-37 | Supported |
| Checks about every 30 seconds | TimerService.cs:50, 97 | Supported |
| Posts when the interval has passed and Chat lines needed is met | TimerService.cs:162-187, 215 | Supported |
| Never-posted timer is due at once, posts within about 30 s | TimerService.cs:50, 162-165, 206 | Supported |
| Duplicate copy keeps Chat lines needed; posts at the next check after that many lines since the bot started | TimerEditor.vue:145-155; TimerService.cs:173-187; ChatMessageHandler.cs:148; ChannelRegistry.cs:89-95, 228-230, 725-737 | Supported (round 4 wording: since the bot began watching your channel) |
| When Chat lines needed is 0, a timer posts on time alone | TimerService.cs:173 | Supported |
| After that, waits Minutes between posts | TimerService.cs:162-165, 206 | Supported |
| Chat lines needed starts at 0 | timerDraft.ts:32; TimerDtos.cs:71-72 | Supported |
| Only in a connected channel | TimerService.cs:111-112, 167-169 | Supported |
| Messages in turn, wraps to the first | TimerService.cs:207-208, 261 | Supported |
| Pipeline timer has no messages and runs its target each time | NewTimerDialog.vue:56-58; timerDraft.ts:107-109; TimerService.cs:189-197 | Supported |
| Line goes to chat in the one bot voice | TimerService.cs:265, 290-302 | Supported |
| Failed line retried at the next check | TimerService.cs:199-200, 304-312 | Supported |
| List shows name and how often | TimerList.vue:53-61, 93-94 | Supported |
| Editor fields (7) and labels | TimerEditor.vue:189-278; timers en.json:76-92 | Supported |
| Enabled saves at once; **Off** badge | TimerEditor.vue:191-192; timers en.json:69 | Supported |
| Limits 1-1440 and 0-10000 | timerDraft.ts:34-38; TimerDtos.cs:68-72 | Supported |
| Post once switches itself off | TimerService.cs:210-211 | Supported |
| Read it aloud plays as speech | TimerService.cs:317-326 | Supported |
| Unsaved count, **Save changes**, **Discard** | timers en.json:93-95; TimerEditor.vue:290-292 | Supported |
| Duplicate: "name copy", off, opens | TimerEditor.vue:145-151; timers en.json:100; TimersView.vue:140 | Supported |
| Delete timer flow and pick text | TimerEditor.vue:296-298; timers en.json:72, 102-104; TimersView.vue:57-60 | Supported |
| New chat trigger dialog, fields, errors, **Create trigger** | NewChatTriggerDialog.vue:45-51, 73-95; timers en.json:39, 43, 54-58 | Supported |
| "No chat triggers yet." and **Make the first trigger** | ChatTriggersPanel.vue:82-84; timers en.json:16-17 | Supported |
| New trigger defaults: contains, case off, 30 s, Everyone, on | CreateChatTriggerRequest :46, :50, :69, :77 (CaseSensitive bool default false) | Supported |
| Four match choices and labels | chatTriggerDraft.ts:16; timers en.json:22-26 | Supported |
| Match behavior | ChatMessageHandler.cs:1558-1584 | Supported |
| Case off: Hello equals hello, also for patterns | ChatMessageHandler.cs:1560-1562; server/src/NomNomzBot.Infrastructure/Platform/ChannelRegistry.cs:385-390 | Supported |
| Invalid regex refused on save | ChatTriggerService.cs:256-262 | Supported |
| Prefix or command line never fires a trigger | ChatMessageHandler.cs:175-185, 229-231 | Supported |
| Soundboard word never fires a trigger | ChatMessageHandler.cs:203-215 | Supported |
| One line fires one trigger at most; role then cooldown | ChatMessageHandler.cs:1369-1401 | Supported |
| Role choices Everyone up to Broadcaster | timers en.json:28-37; ChatTriggerEditor.vue:166-173 | Supported |
| Cooldown channel-wide; broadcaster and moderators exempt | ChatMessageHandler.cs:1366, 1374-1382, 1885-1886 | Supported |
| Cooldown kept between 0 and 86400 | ChatTriggerService.cs:28, 111, 179-182 | Supported |
| List shows words and match choice | ChatTriggersPanel.vue:91-94 | Supported |
| Trigger editor fields (7) | ChatTriggerEditor.vue:92-173 | Supported |
| Trigger Enabled saves at once | ChatTriggerEditor.vue:73-75 | Supported |
| Reply goes to chat in the one bot voice | ChatMessageHandler.cs:1630, 1645-1656 | Supported |
| Delete trigger: "Delete words?", **Delete trigger**, removed for good, pick text | ChatTriggerEditor.vue:191-193; ChatTriggerService.cs:216; timers en.json:18, 50-51 | Supported |
| `{channel}` is a timer template helper | docs page variables-and-templates.mdx owns it | Supported by linked page |
| Troubleshooting: next post up to 30 s late | TimerService.cs:50, 97, 162-165 | Supported |
