# Independent source verification: /reference/moderation/overview
Verdict: PASS
Reviewed: src/content/reference/en/moderation/overview.mdx
Reviewed-SHA: 88b5bba221425934ccebaa95b2a2902c7afbd5fa7b16b4a14e85febeae91044d

## Independent overhaul review, 2026-11-05

ModerationQueueService.cs:302-370; ReviewQueuePanel.vue:49-90; ActionDefinitionSeeder.cs:241-251: Twitch-held release versus local decisions, six-second deny/Undo and commit-on-leave, default access.

Reviewed independently of the article author, in actual navigation order. Current product source 54da8b631 and relevant changes since b12f4f696 were read without starting the bot, executing platform actions or changing channel data. This verdict is source verification, not proof of live platform delivery. See [review-moderation-economy-community.md](../overhaul/review-moderation-economy-community.md) for the review scope and findings.

## Prior review history

The earlier text below is retained as history; it does not independently approve a later article hash.

Author source audit: 2026-11-04. Independent review of the revised article is pending; the historical PASS below does not approve this text.
Product source: C:/Projects/NoMercyLabs/nomnomzbot at b12f4f696, inspected without starting the bot or changing data.

Explains the stream-time workflow, gives an Allow example, distinguishes decisions from sanctions and adds the missing Reports link.

| Revised claim or retained core behavior | Current source opened |
| --- | --- |
| Queue locations, permissions and controls | dashboard/src/views/dashboard/home/components/ReviewQueuePanel.vue:40-157; server/src/NomNomzBot.Infrastructure/Content/Identity/ActionDefinitionSeeder.cs:241-251 |
| Allow/deny releases only Twitch AutoMod holds; other reviews are local decisions | server/src/NomNomzBot.Infrastructure/Moderation/ModerationQueueService.cs:302-370 |
| Deny undo delay and commit on leaving | dashboard/src/views/dashboard/home/components/ReviewQueuePanel.vue:60-92; dashboard/src/composables/useInlineFlow.ts (DEFAULT_UNDO_MS) |
| Profile notes/history and manual actions | dashboard/src/components/layout/profile/ProfileView.vue:140-240,370-402 |

The practical scenarios are recommended uses of these verified controls, not promises of a new feature. Unchanged reference details were compared with the current view, labels and relevant implementation. Runtime platform calls were not performed.

## Historical evidence

The prior review is retained for its detailed claim inventory. Its verdict and file hashes refer to the earlier article; where the new evidence differs, the new evidence takes precedence.

# Fact check: src/content/reference/en/moderation/overview.mdx
Historical verdict: PASS
Reviewed: src/content/reference/en/moderation/overview.mdx
Reviewed-SHA: 9590c21e0bd2e4b0

This review judged the current text (sha 9590c21e...). The older FAIL findings were re-checked against this text, not carried forward.
Product repo: NomNomzBot master, read only. D = dashboard/src, S = server/src.

| Claim | Page line | Supported by | Status |
| --- | --- | --- | --- |
| Review queue panel on Home | 7, 33 | D/views/dashboard/home/components/ReviewQueuePanel.vue:84; home i18n en.json queue.title "Review queue"; en.json frame.nav.home "Home" | true |
| Moderation history in the profile dialog, Moderation tab | 8, 99-102 | D/components/layout/profile/ProfileHistory.vue; en.json profile.history.title "Moderation history" | true |
| Group name Access holds AutoMod filters, Chat filters, Blocked terms, Banned people, Spam defense, Trust policy, Escalation, Viewer reports | 11, 17, 131-139 | D/layouts/dashboard/settingsNavigation.ts:77-89 (key settings.access); en.json settings group "access": "Access" (l.941); settingsPages labels l.896-904 | true |
| Moderator, Lead moderator, Editor, Broadcaster may see the queue | 23 | S/NomNomzBot.Api/Controllers/V1/ModerationController.cs:1680 RequireAction("moderation:queue:read"); S/NomNomzBot.Infrastructure/Content/Identity/ActionDefinitionSeeder.cs:242 floor Mod (10); S/NomNomzBot.Domain/Identity/Enums/AuthorizationLadder.cs:31-34 (10/20/30/40) | true |
| Same roles may allow and deny (the second right) | 24 | ModerationController.cs:1703 RequireAction("moderation:queue:resolve"); ActionDefinitionSeeder.cs:243 Mod | true |
| Same roles may read history | 25 | ActionDefinitionSeeder.cs:251 moderation:history:read Mod | true |
| See-but-not-decide shows no Allow/Deny | 27 | ReviewQueuePanel.vue:103 v-if can('moderation:queue:resolve') | true |
| No read right shows "The review queue could not load." | 28, 93 | ModerationController.cs:1680 refuses; ReviewQueuePanel.vue:91 error-text; home en.json queue.error | true |
| History no-access text | 29 | en.json profile.history.noAccess | true |
| Count "3 waiting" | 34 | ReviewQueuePanel.vue:97; queue.waiting "{count} waiting" | true |
| Sources: AutoMod, filter hold, filter flag, newcomer gate, suspicious user (left alone), heat limit (no auto timeout, no message) | 38-45 | S/NomNomzBot.Infrastructure/Moderation/EventHandlers/SuspiciousUserHandlers.cs:41-72 (never deleted); AccountAgeGateExecutor.cs:83-93 (queues only after delete); HeatThresholdAutoTimeoutHandler.cs:95-99,112-113,224-232 (flag when auto timeout off or immune); ChatFilterExecutionHandler.cs (hold/flag) | true |
| AutoMod, chat filters, suspicious users: Twitch only | 49 | ChatFilterExecutionHandler.cs:265-275 (non-Twitch returns); SuspiciousUserHandlers.cs:41 (Twitch EventSub channel.suspicious_user.message); AutoMod is Twitch EventSub | true |
| Newcomer gate queues Kick and YouTube only when the delete succeeded | 50 | AccountAgeGateExecutor.cs:70-93,100-117 (non-Twitch via origin; queue only if deleted) | true |
| Heat limit queues any platform | 51 | HeatThresholdAutoTimeoutHandler.cs:224-232 (EnqueueFlagAsync, no platform check) | true |
| Row shows sender and message; "Unknown sender" | 53-54 | ReviewQueuePanel.vue:44-46,102; queue.unknownSender | true |
| Panel hint text | 56 | ReviewQueuePanel.vue:85; queue.hint | true |
| Allow: AutoMod sends to chat; others only record | 62-67 | S/NomNomzBot.Infrastructure/Moderation/ModerationQueueService.cs:311,323-353 (relay only for AutoMod; status set locally) | true |
| Deny shows Denied and Undo | 73-74 | ReviewQueuePanel.vue:108-118 (InlineFlow result queue.denied); en.json common undo "Undo" | true |
| 6 second wait, then sent | 76, 81 | ReviewQueuePanel.vue:60-64; D/composables/useInlineFlow.ts:39 DEFAULT_UNDO_MS = 6000 | true |
| Undo cancels; item stays | 81-82 | ReviewQueuePanel.vue:67-70 cancelDeny | true |
| Leaving the page sends at once | 84 | ReviewQueuePanel.vue:73-78 onBeforeUnmount sendDeny | true |
| Deny on AutoMod tells Twitch to drop; others record | 78-79 | ModerationQueueService.cs:323-353 | true |
| Empty texts live/offline | 90-91 | ReviewQueuePanel.vue:88-90; queue.emptyLive/emptyOffline | true |
| Shield mode on badge needs shield on and the role right | 92 | ReviewQueuePanel.vue:95 can('moderation:shieldmode:read'); queue.shieldOn | true |
| History entry kinds, lines, Automatic, Timed out for, Show older, empty text | 106-127 | en.json profile.history l.770-791 (kinds, by, automatic, timedOutFor, more, empty) | true |
| Labels Allow, Deny, Denied, Undo | 62-81 | home en.json queue.allow/deny/denied; en.json undo | true |
| Link /reference/getting-started/dashboard-tour is a map row | 19 | docs-work/map.md (1 row) | true |
| Links to four moderation pages are map rows | 135-149 | docs-work/map.md:85-88 | true |

## Conventions

- No people's names, no action keys, no numbered levels on the page.
- No license name, no "open source", no NoMercyBot, no hosting or price mention (grep over the page: 0 hits).
- No angle-bracket placeholder in page text (grep "<[a-zA-Z]": 0 hits).
- American English: no British spelling found.

## Notes (not blocking)

- Line 137 "Spam defense ... and what it found": the map row for spam defense says the dashboard has no screen for detections. Consider "The spam policy." only. Not checked further; wording note.
- Lines 99/104 (profile dialog from a name, People page) rely on the claims file proof (UserName.vue, PeopleView.vue); not re-opened in this run.
