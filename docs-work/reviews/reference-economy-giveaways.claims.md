# Claims: /reference/economy/giveaways

Product repository: nomnomzbot, master, read only.
Paths are relative to the product repository. Line numbers are lines in each file itself.
Abbreviations: VIEW = dashboard/src/views/dashboard/giveaways/GiveawaysView.vue (428 lines); DLG = dashboard/src/views/dashboard/giveaways/GiveawayDialog.vue; FORM = dashboard/src/views/dashboard/giveaways/giveawayForm.ts; STATUS = dashboard/src/views/dashboard/giveaways/giveawayStatus.ts; POOLDLG = dashboard/src/views/dashboard/giveaways/CodePoolDialog.vue; EN = dashboard/src/views/dashboard/giveaways/i18n/en.json; API = dashboard/src/api/giveaways.ts; NAV = dashboard/src/layouts/dashboard/navigation.ts; LOC = dashboard/src/i18n/locales/en.json; PEN = dashboard/src/views/dashboard/pipelines/i18n/en.json; SCH = dashboard/src/i18n/schema/en.json; SVC = server/src/NomNomzBot.Infrastructure/Giveaways/GiveawayService.cs; FUL = server/src/NomNomzBot.Infrastructure/Giveaways/GiveawayFulfillment.cs; LST = server/src/NomNomzBot.Infrastructure/Giveaways/EventHandlers/GiveawayKeywordListener.cs; POOLSVC = server/src/NomNomzBot.Infrastructure/Giveaways/GiveawayCodePoolService.cs; ACT = server/src/NomNomzBot.Infrastructure/Giveaways/PipelineActions/GiveawayActions.cs; SEED = server/src/NomNomzBot.Infrastructure/Content/Identity/ActionDefinitionSeeder.cs.

| Claim | Page line | Proof | Verdict |
| --- | --- | --- | --- |
| Sidebar entry Giveaways | 6, 16 | NAV:264-267; LOC:832 | true |
| Moderator and up may read and write giveaways | 11 | SEED:513-514; VIEW:226,261 | true |
| Only the broadcaster sees Code pools | 12 | SEED:515; VIEW:362 | true |
| Empty text "No giveaways yet." | 17 | EN:7; VIEW:245 | true |
| New giveaway button and dialog title | 18-19 | EN:17,28; VIEW:225-235; DLG:103-107 | true |
| Create giveaway; new giveaway is Draft | 21-22 | EN:34,133; DLG:109-111 | true |
| Row summary entries, winners, keyword | 24 | VIEW:201-210; EN:11-14 | true |
| Entry modes and default keyword mode | 30 | FORM:16,68; EN:38-41 | true |
| Keyword shows only in keyword mode; default !enter | 31 | DLG:138; FORM:69-71 | true |
| Entry cost whole number 0 or more or empty | 32 | FORM:164; EN:44,93 | true |
| Entries per viewer default 1, whole 1 or more | 33 | FORM:73,163 | true |
| Keyword entry = whole message equals keyword, case ignored | 35-36 | LST:76-83 | true |
| Entry and refusal are silent in chat | 37 | LST:102-117 (only logs) | true |
| Active viewers: viewers do nothing; chatters of last 30 minutes on every connected platform | 39-41 | SVC:49; SVC:686-697 (ChatMessages of all providers since now minus window) | true |
| Two ways to enter: keyword and the Enter giveaway step, both call EnterAsync | 43-44 | LST:101-108 (keyword calls EnterAsync); ACT:123-136 (enter_giveaway calls EnterAsync) | true |
| Entry cost debited from currency on entry; broke viewer does not enter | 46-47 | SVC:371-389 (inside EnterAsync) | true |
| Active viewers: no entry cost | 48 | SVC:686-745 (BuildCandidatePoolAsync active branch: no ledger debit) | true |
| One entry per viewer; Entries per viewer above 1 changes nothing | 50 | SVC:350-359 (an existing row returns ALREADY_ENTERED; MaxEntriesPerUser is never read in SVC) | true |
| An entry holds tickets; the draw counts tickets | 51 | SVC:405 (TicketCount on entry); SVC PickWeighted (cumulative tickets) | true |
| Subscribers only, standing level, watch minutes apply on keyword, step and active viewers | 57, 60, 61 | SVC:320-328 (CheckEligibilityAsync in EnterAsync); SVC:733-741 (CheckEligibilityAsync per active viewer); SVC:837-883 (the rules) | true |
| Leave out moderators: excluded from draw for every way in | 58 | SVC:760-772 (BuildCandidatePoolAsync, used by both modes) | true |
| 18+ applies on keyword and step only | 59 | SVC:333-347 (age consent only in EnterAsync; the active branch at SVC:733-741 does not call it) | true |
| Broadcaster never drawn, for every way in | 63 | SVC:757 (ownerUserId excluded in BuildCandidatePoolAsync) | true |
| Muted or shadowbanned: blocked for keyword entry and chat claim only | 64 | LST:50-56 (early return before both the keyword and claim branches); not in EnterAsync or BuildCandidatePoolAsync | true |
| Ticket labels and default 1 | 71-76 | EN:61-64; API:123-131; SVC WeightingConfig defaults = 1 | true |
| Tier 1 count also for VIP, artist, moderator without a sub tier; VIP count for VIP, artist, moderator; highest wins, never below 1 | 73, 76, 78 | SVC ComputeTickets (switch default branch is SubT1; Vip branch; Math.Max) | true |
| Number of winners default 1, distinct winners | 85 | FORM:82; SVC:481-494 (picked removed from remaining) | true |
| Claim window answered by any chat message | 89 | LST:84-86,120-136 | true |
| Unclaimed winner becomes Forfeited | 90 | server/src/NomNomzBot.Infrastructure/Giveaways/GiveawayClaimSweepWorker.cs:23-24,93-98; EN:148 | true |
| Empty claim window: Claimed at once | 91 | SVC:504-508; EN:147 | true |
| Close entries at closes on its own | 87 | server/src/NomNomzBot.Infrastructure/Giveaways/GiveawayAutoCloseWorker.cs:26,96-97 | true |
| Both checks run once a minute | 93 | GiveawayAutoCloseWorker.cs:34; GiveawayClaimSweepWorker.cs:30 | true |
| Close time must be in future | 94 | SVC:1019-1026 | true |
| Prize modes and labels; default announce | 98-105 | FORM:17,85; EN:76-87 | true |
| Announce mode only records the winner; nothing posts in chat | 100, 106 | FUL:92 (no case for announce; comment "recording the winner IS the fulfillment"); SVC:485-486 (chat announcement not sent in the draw); no handler of GiveawayDrawnEvent in server/src (grep) | true |
| To announce a winner, use the command or pipeline prize: it runs per winner with the winner as invoker | 107 | FUL:155-240 (RunDirectTargetAsync / pipeline ExecuteAsync per winner); DLG:339-344 (TargetPicker kinds command, pipeline, action) | true |
| Currency credited to balance | 101 | FUL:96-151 | true |
| Pipeline mode runs command, pipeline or action with winner as invoker | 102 | DLG:339-344; FUL:155-240 | true |
| Code pool: oldest available code, whispered | 103, 169 | FUL:259-266, 297-307 | true |
| Pot = paid entry costs split evenly, remainder to first winner | 109-110 | FUL:104-120 | true |
| Paid code-pool giveaway needs 18+ | 112-113 | SVC:1007-1017 | true |
| Open / Close / Draw buttons by status | 117-124 | STATUS:27-38; EN:140-142; SVC:234,282,464 | true |
| Status names Open, Closed, Drawn | 118-122 | EN:133-137; SVC:254,288,524 | true |
| Fewer winners when fewer candidates; none means no draw | 125-126 | SVC:474-481 | true |
| One active giveaway per channel | 128-129 | SVC:240-252 | true |
| Focus giveaway order open, closed, drawn | 131-132 | STATUS:42-48 | true |
| Entries panel lists viewer and tickets | 133 | VIEW:335-360; EN:104,107 | true |
| Redraw excludes all prior winners and reruns prize; Redrawn mark | 137-139 | SVC:578-611; VIEW:316-328; EN:15-16 | true |
| Edit only for draft or closed; Save giveaway; list refreshes | 143-148 | VIEW:93-95,274-284; EN:18,29,35; API:363 (list re-read after save) | true |
| Delete: trash button, title "Delete {title}?", description, one line per count, list refreshes | 149-153 | VIEW:108-123,285-294,410-418; EN:20-24; SVC:1203-1211; API:373 | true |
| Pool page shows counts only | 158 | EN:121; VIEW:377-382 | true |
| New pool dialog fields and Create pool | 160-167 | POOLDLG:72-98; EN:114,120-126 | true |
| Empty lines and repeats skipped | 165 | FORM:148-153 | true |
| Count text "{available} of {total} available" | 167 | EN:113 | true |
| Pool runs out: later winners get no code | 170 | FUL:267-277; SVC:542-549 | true |
| Failed whisper keeps code assigned to that winner | 171 | FUL:281-338 | true |
| Pool delete flow and active-pool block | 173-175 | VIEW:383-391,419-427; EN:115-118; POOLSVC:168-178 | true |
| Pipelines sidebar entry | 179, 187 | NAV:211-212; LOC:823 | true |
| Group Giveaways | 179 | ACT:33 (pipeline.category.giveaways); SCH:1664 | true |
| Step names Open giveaway, Draw giveaway, Enter giveaway | 181-185 | ACT:31,72,123 (types); dashboard/src/views/dashboard/pipelines/components/stepWords.ts:38-44 (no pipelineBlock key for these types in SCH, so the title is humanize(type)); dashboard/src/lib/text.ts:14-22 | true |
| What each step does | 181-185 | SCH:1714-1725, 2016-2021 (descriptions) | true |
| Open needs a giveaway; draw and enter fall back to the active giveaway | 181-185, 198 | ACT:41 (Required on open); SCH:1716-1724 help texts; ACT draw/enter ResolveActiveAsync and "No active giveaway" failures | true |
| Enter enters the viewer who started the pipeline | 185 | ACT enter: ctx.TriggeredByUserId; SCH:1721 | true |
| Add a step at the end, Steps to add, Find a step | 189-192 | dashboard/src/views/dashboard/pipelines/WorkbenchView.vue:593-603; PEN:221-226 | true |
| Save and "Pipeline saved." | 195-196 | PEN:150-151 | true |

## Left off the page, with reason

- Least account age (days): SVC:887-897 measures from the bot's own user row date (`u.CreatedAt`), not the Twitch account date. Defect; effect not described.
- Claim window help text "Empty uses the default": the code has no default; empty means no window (SVC:504-508). The page states what the code does.
- Code pool help text "You can add codes later": the server can add codes (POOLSVC AddCodesAsync), but the dashboard has no control for it. Not described.
- Winner badge for status drawn and redrawn: EN winnerStatus has no key for them; the badge shows the raw word. Not described.
- Reveal of a code after a failed whisper: server endpoint only (server/src/NomNomzBot.Api/Controllers/V1/GiveawayCodePoolsController.cs:135), no dashboard control. Not described.
- How a viewer confirms 18 or older: owned by the age consent service on the currency page's Covers; not linked here because the map row does not list that section.

## Map note

- The page names the Pipelines screen in words without a link: /reference/commands/pipelines is not in this row's Assumes or Links to.
