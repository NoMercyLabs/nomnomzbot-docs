# Independent source verification: /reference/economy/giveaways
Verdict: PASS
Reviewed: src/content/reference/en/economy/giveaways.mdx
Reviewed-SHA: 2e02dc0b7bae63f0a521451bef8cd298051bc34932a72137b55088743f21777b

## Independent overhaul review, 2026-11-05

GiveawayService.cs:302-434,480-545,833-929; GiveawayFulfillment.cs:80-180; GiveawayKeywordListener.cs:50-136; giveawayForm.ts; GiveawayCodePoolService.cs: repeated paid entries, immediate fulfillment, actual account age, observed watch spans, announcement/pot split/current cost, silent keyword entry and code controls.

Reviewed independently of the article author, in actual navigation order. Current product source 54da8b631 and relevant changes since b12f4f696 were read without starting the bot, executing platform actions or changing channel data. This verdict is source verification, not proof of live platform delivery. See [review-moderation-economy-community.md](../overhaul/review-moderation-economy-community.md) for the review scope and findings.

## Prior review history

The earlier text below is retained as history; it does not independently approve a later article hash.

Author source audit: 2026-11-04. Independent review of the revised article is pending; the historical PASS below does not approve this text.
Product source: C:/Projects/NoMercyLabs/nomnomzbot at b12f4f696, inspected without starting the bot or changing data.

Adds a first giveaway path; corrects stale multiple-entry and no-announcement claims; adds missing account-age/watch-time details and a verified entry-cost example.

| Revised claim or retained core behavior | Current source opened |
| --- | --- |
| UI form labels, defaults and validation | dashboard/src/views/dashboard/giveaways/giveawayForm.ts:62-177; GiveawayDialog.vue; i18n/en.json:30-115 |
| Multiple entries, each paid and weighted | server/src/NomNomzBot.Infrastructure/Giveaways/GiveawayService.cs:302-434 |
| Actual account date and observed watch minutes | server/src/NomNomzBot.Infrastructure/Giveaways/GiveawayService.cs:833-929 |
| Numeric standing requirement matches the actual number input and community ladder | dashboard/src/views/dashboard/giveaways/GiveawayDialog.vue:205-219; server/src/NomNomzBot.Domain/Identity/Enums/AuthorizationLadder.cs:54-64; GiveawayService.cs:867-872 |
| Announcement now sends winner message | server/src/NomNomzBot.Infrastructure/Giveaways/GiveawayFulfillment.cs:80-142 |
| Pot now sums entries and divides by actual winners | server/src/NomNomzBot.Infrastructure/Giveaways/GiveawayFulfillment.cs:145-180 |
| Pot uses the current saved EntryCost; editing closed giveaway applies that field | server/src/NomNomzBot.Infrastructure/Giveaways/GiveawayFulfillment.cs:165-176; GiveawayService.cs:1082-1085 |
| Claim window does not defer delivery; forfeit only changes status, redraw fulfills again | server/src/NomNomzBot.Infrastructure/Giveaways/GiveawayService.cs:513-545,618-640; GiveawayClaimSweepWorker.cs:87-104 |
| Age consent is required in EnterAsync; no viewer form supplies it | server/src/NomNomzBot.Infrastructure/Giveaways/GiveawayService.cs:335-351; dashboard/src/views/viewer/account/AccountView.vue; search of dashboard/src/views for age-consent form references |
| Code protection, masked listing and active-pool deletion guard | server/src/NomNomzBot.Infrastructure/Giveaways/GiveawayCodePoolService.cs:60-188 |
| Keyword and claims, draw lifecycle, entry eligibility | server/src/NomNomzBot.Infrastructure/Giveaways/EventHandlers/GiveawayKeywordListener.cs:50-136; GiveawayService.cs:450-565,685-810 |

The practical scenarios are recommended uses of these verified controls, not promises of a new feature. Unchanged reference details were compared with the current view, labels and relevant implementation. Runtime platform calls were not performed.

## Historical evidence

The prior review is retained for its detailed claim inventory. Its verdict and file hashes refer to the earlier article; where the new evidence differs, the new evidence takes precedence.

# Fact-check: /reference/economy/giveaways
Historical verdict: PASS
Reviewed: src/content/reference/en/economy/giveaways.mdx
Reviewed-SHA: 7fda655c060a7727

This verdict judges the current page text (sha256 7fda655c060a7727...). The older FAIL verdict (sha fc495377ce72204e) judged an older text and was not carried forward.
Its one finding (muted or shadowbanned viewers) is fixed: page line 64 now limits it to keyword entry and the chat claim, which matches the code.
Product repository: nomnomzbot, master, read only. Abbreviations as in reference-economy-giveaways.claims.md.

## Claims

| Claim | Page line | Product file and line | Verdict |
| --- | --- | --- | --- |
| Sidebar entry Giveaways | 6, 16 | NAV:264-267; LOC:832 | true (claims file) |
| Moderator and up may see, make, run and delete | 11 | SEED:513-514 | true (claims file) |
| Only the broadcaster manages code pools | 12 | SEED:515; VIEW:362 | true (claims file) |
| "No giveaways yet." | 17 | EN dashboard.giveaways.empty (read this run) | true |
| New giveaway, Create giveaway, Draft | 18-22 | EN new, dialog.newTitle, dialog.create, status.draft (read this run) | true |
| Row summary "0 entries · 1 winner · Keyword !enter" | 24 | EN entries, winnerCount, keyword (read this run); VIEW:201-210 | true |
| Entering labels and choices | 28-33 | EN dialog.entry.* (read this run); FORM:16,68-73 | true |
| Keyword = whole message, case ignored | 35-36 | GiveawayKeywordListener.cs:76-83 (Trim, OrdinalIgnoreCase, read this run) | true |
| No chat reply on entry or refusal | 37 | GiveawayKeywordListener.cs:102-117 (log only, read this run) | true |
| Active viewers: chatters of last 30 minutes, all platforms | 39-41 | GiveawayService.cs:686-697 (ChatMessages of every provider since window, read this run); SVC:49 | true |
| Two ways in: keyword and Enter giveaway step | 43-44 | Listener:101-108 calls EnterAsync (read this run); ACT:123-136 | true |
| Entry cost taken on entry; broke viewer does not enter | 46-47 | GiveawayService.cs:371-389 (debit failure returns failure, read this run) | true |
| Active viewers pay no entry cost | 48 | GiveawayService.cs:686-756 (no ledger post, read this run) | true |
| One entry per viewer; Entries per viewer above 1 does nothing | 50 | GiveawayService.cs:349-359 (existing row returns ALREADY_ENTERED, read this run) | true |
| Entry holds tickets; draw counts tickets | 51 | GiveawayService.cs:402 TicketCount; PickWeighted cumulative tickets (read this run) | true |
| Subscribers only admits sub, VIP, artist, moderator; on all three ways | 57 | CheckEligibilityAsync sub branch; called in EnterAsync and in the active branch (read this run) | true |
| Leave out moderators: draw never picks them | 58 | GiveawayService.cs:759-772 (read this run) | true |
| 18+ applies on keyword and step only | 59 | EnterAsync:333-347 only; active branch has no age check (read this run) | true |
| Least standing level, Least watch minutes on all three ways | 60-61 | CheckEligibilityAsync MinStandingLevel, MinWatchMinutes (read this run) | true |
| Broadcaster never drawn | 63 | GiveawayService.cs:759 ownerUserId in excluded (read this run) | true |
| Muted or shadowbanned: no keyword entry, no chat claim | 64 | GiveawayKeywordListener.cs:50-56 early return before both branches (read this run) | true |
| Ticket labels, default 1 | 71-76 | EN dialog.tickets.* (read this run); ComputeTickets returns 1 baseline | true |
| Tier 1 also for VIP/artist/moderator without tier; highest count, never below 1 | 73, 76, 78 | GiveawayService.cs:918-951 (switch default SubT1, Math.Max from 1, read this run) | true |
| Number of winners default 1, distinct viewers | 85 | FORM:82; SVC:481-494 | true (claims file) |
| Claim by any chat message in the window | 89 | Listener:120-136 (read this run) | true |
| Forfeited when not claimed in time | 90 | GiveawayClaimSweepWorker.cs:93-98; EN winnerStatus.forfeited | true |
| Empty claim window: Claimed at once | 91 | SVC:504-508; EN winnerStatus.claimed | true (claims file) |
| Close entries at closes on its own; checks once a minute | 87, 93 | GiveawayAutoCloseWorker.cs:34,96-97; GiveawayClaimSweepWorker.cs:30 | true (claims file) |
| Close time must be in the future | 94 | SVC:1019-1026 | true (claims file) |
| Prize choices, labels, default announce | 98-105 | EN dialog.prize.* (read this run); FORM:17,85 | true |
| Announce only records the winner | 100, 106 | GiveawayFulfillment.cs:92 (no announce case, read this run) | true |
| Currency added to balance | 101 | FUL:96-151 | true |
| Pot = paid entry costs split evenly, remainder to first winner | 109-110 | GiveawayFulfillment.cs:104-117 (read this run) | true (see Notes) |
| Command or pipeline prize runs with winner as invoker | 102, 107 | FUL:155-240; DLG:339-344 | true (claims file) |
| Code pool: oldest free code, whisper | 103, 169 | FUL:259-266,297-307 | true (claims file) |
| Paid code-pool giveaway needs 18+ | 112-113 | SVC:1007-1017; comment at EnterAsync (read this run) | true |
| Open / Close / Draw buttons and statuses | 117-124 | EN action.*, status.* (read this run); STATUS:27-38 | true |
| Fewer winners when fewer candidates; none means no draw | 125-126 | SVC:474-481 | true (claims file) |
| One active giveaway per channel | 128-129 | SVC:240-252 | true (claims file) |
| Focus order Open, Closed, Drawn; Entries of panel with tickets | 131-133 | STATUS:42-48; EN entryList.* (read this run) | true |
| Draw a new winner, Redrawn | 137-139 | EN redraw, redrawn (read this run); SVC:578-611 | true |
| Edit only Draft or Closed; Edit giveaway, Save giveaway | 143-148 | VIEW:93-95; EN edit, dialog.editTitle, dialog.save (read this run) | true |
| Delete dialog title, description, count lines, Delete giveaway | 149-153 | EN delete.* (read this run); VIEW:410-418 | true |
| Pool shows counts only | 158 | EN pools.dialog.description (read this run) | true |
| New pool, New code pool, Name, Note (optional), Codes, Create pool | 160-166 | EN pools.* (read this run) | true |
| Empty lines and repeats skipped | 165 | EN codesHelp; FORM:148-153 | true |
| "10 of 10 available" | 167 | EN pools.counts (read this run) | true |
| Pool runs out; failed whisper keeps the code | 170-171 | FUL:267-338 | true (claims file) |
| Delete, Delete pool; unused codes removed; active pool blocked | 173-175 | EN pools.delete, deleteAction, deleteDescription (read this run); POOLSVC:168-178 | true |
| Pipeline steps, group Giveaways, fallback to active giveaway | 179-198 | ACT:31-136; SCH:1664,1714-1725 | true (claims file) |
| Add a step at the end, Steps to add, Find a step, Save, "Pipeline saved." | 189-196 | WorkbenchView.vue:593-603; PEN:150-151,221-226 | true (claims file) |

## Links

- /reference/economy/currency-and-balances: a row of map.md (Related of this row).
- /reference/economy/store: a row of map.md (Related of this row).

## Conventions

- No people's names, no action keys, no numbered levels, no license name, no "open source": checked, none.
- No hosting, price or paid plan mention: no marker needed.
- American English: checked, no British spelling.
- NomNomzBot only: no NoMercyBot spelling.
- One bot voice: the page describes no second voice.

## Notes (not blocking)

- Line 109: the pot divides by the configured **Number of winners** (GiveawayFulfillment.cs:113), not by the winners actually drawn. When fewer viewers win than the number set, part of the pot is not paid out. The writer may say "split evenly by the Number of winners". This looks like a product defect worth an issue.
- Line 86: the en.json help says "Empty uses the default", but the code has no default. The page states what the code does; the help text is a product wording defect.
