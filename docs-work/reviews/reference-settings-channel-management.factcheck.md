# Fact-check: /reference/settings/channel-management
Verdict: PASS
Reviewed: C:\Projects\NoMercyLabs\nomnomzbot-docs\src\content\reference\en\settings\channel-management.mdx
Reviewed-SHA: ae9d862ad9112f63

## Second pass (page ae9d862ad9112f63)

I read the whole current page again. Only lines 83-84 and 95-105 changed.
- Line 84 "Each line starts with a count, such as "2 overlay sources in OBS go blank"": true. V/ChannelManagementView.vue:114-118 with E:30 "{count} {what}", E:57.
- Line 95 header "Line in the dialog, after the count" and line 104: true, same proof.
- Line 105 "only when its count is above zero": true. ChannelDeletePreviewService.cs:221-222 (names.Count == 0 returns).
- Finding 1 below is fixed. Every other line has the same text as the first pass, and the claims table below still holds.

Paths are in C:\Projects\NoMercyLabs\nomnomzbot. V = dashboard/src/views/dashboard/settings/channel-management. E = V/i18n/en.json (82 lines; the writer's claims file cites E line numbers 466-536, which do not exist in this file. The texts are real, at the lines below).

## Findings of the first pass (page dce495eec0814dae; fixed)

1. Page lines 83 and 94-101: the lines about what stops outside the bot are quoted without their count.
   - Code: each outside line is rendered with the template `delete.line` = "{count} {what}" (V/ChannelManagementView.vue:114-118; E:30). The server adds a line only when its count is above 0 (server/src/NomNomzBot.Infrastructure/Identity/ChannelDeletePreviewService.cs:215-227).
   - So the dialog shows, for example, "2 overlay sources in OBS go blank", never the bare text.
   - Corrected text, line 83: `Read the lines about what stops outside the bot. Each line starts with a count, such as "2 overlay sources in OBS go blank".`
   - Corrected table: rename the header to `Line in the dialog, after the count`, or add under the table: `Each line starts with a count.`

## Claims checked (true)

| Page claim | Proof |
| --- | --- |
| Page label **Channel management**, in the settings sidebar | dashboard/src/i18n/locales/en.json:908; V/route.ts:20 (navMode settings); V/ChannelManagementView.vue:198 |
| Card titles and descriptions | E:7, 65-66, 23-24; V/ChannelManagementView.vue:204-205, 222-223, 244-245 |
| Only the Broadcaster opens the page and uses the buttons | V/route.ts:21 (setup:write); server/src/NomNomzBot.Infrastructure/Content/Identity/ActionDefinitionSeeder.cs:437 (Broadcaster, grant: false); ChannelsController.cs join/leave/delete-preview/restore/delete/reset-preview/reset all `[RequireAction("setup:write")]` (lines 569-660); buttons `can('setup:write')` BotPresenceRow.vue (v-if on both buttons), ChannelManagementView.vue:230, 266, DeletedChannelNotice.vue (restore button) |
| Two presence states, texts, buttons | E:9-14; BotPresenceRow.vue (label in/out, since/outHelp, leave when joined, join otherwise) |
| Join changes the state | ChannelManagementView.vue:214; ChannelsController.cs JoinChannel |
| Leave dialog title, two results, action **Make the bot leave** | E:17, 19-20, 14; ChannelManagementView.vue:280-291 |
| Join again any time; settings stay | E:18 |
| Reset keeps commands, viewers, history; cannot be undone | E:67, 70; reset removes only Configuration rows of the channel: server/src/NomNomzBot.Infrastructure/Identity/ChannelResetScope.cs:43-45, 82-90 |
| Reset flow: button, dialog title, list with counts, type label, button off until exact match, action | E:68-71; ChannelManagementView.vue:141-167, 292-302; dashboard/src/components/layout/ConfirmDialog.vue:62 (typed === typeToConfirm), 101 (disabled until armed) |
| Reset kinds and "every other stored setting" | E:47-53; ChannelResetScope.cs:28-56 (unmatched keys go to reset_other) |
| Reset empty text | E:72; ChannelManagementView.vue:152 |
| Delete is soft; bot stops serving at once; 30 days | server/src/NomNomzBot.Domain/Identity/ChannelDeletionPolicy.cs:17-19, 26; E:28 |
| Delete flow, title "Delete {name}?", type label, action **Delete channel** | E:26-29; ChannelManagementView.vue:123-139, 303-313 |
| Delete lines are a count and a kind | E:30, 34-46; ChannelManagementView.vue:100-107 |
| "Nothing else depends on this channel." / minimum text | E:31-32; ChannelManagementView.vue:108-112 |
| Outside line texts (apart from finding 1) and shown only when they apply | E:56-61; ChannelDeletePreviewService.cs:221-222 |
| After delete: **The channel is deleted**, "You can bring it back until" and date, gone for good after | E:75-76; ChannelManagementView.vue:248-253; DeletedChannelNotice.vue (title/help) |
| **Bring the channel back** restores | E:77; ChannelsController.cs RestoreChannel; ChannelService.cs:876-880 |
| Other deleted channels you own, in the window, each with its own button | ChannelManagementView.vue:176-187, 254-261; ChannelService.cs:205-215 (OwnerUserId == caller, DeletedAt inside window) |
| Restore after 30 days shows an error | ChannelService.cs:872-874 (ChannelRestoreWindowExpired); error shown ChannelManagementView.vue:79, 277 |

## Conventions

- No source citation, action key, numbered level, license name or "open source" on the page. No hosting mention, so no marker is needed.
- Links: /reference/settings/permissions exists (file present, map line 112). /reference/getting-started/dashboard-tour exists. /reference/settings/your-data-and-privacy is on the map (line 115, planned); its file does not exist yet, so the links gate passes only if it checks the map, not the file (not checked: gates not run, per brief).

## Style notes (not a FAIL)

- Line 54 and 80: the dialog titles end with "?" ("Reset the settings of {name}?", "Delete {name}?"). The page paraphrases; acceptable.
- Troubleshooting: an expired window is one cause of a restore error; other refusals (for example, channel not found) show an error too.
