# Fact check: src/content/reference/en/automation/rewards.mdx
Verdict: PASS
Reviewed: src/content/reference/en/automation/rewards.mdx
Reviewed-SHA: baaba1031b832424

Round 7. Every hunk of `git diff HEAD` on the page was read again; it holds only the round 5 and round 6 changes (checked below) plus these three:

- Line 41 now says "See the text under this table.", and the text under it (lines 43-48) states the outcome. Round 6 finding 1 is fixed.
- Lines 43-48 are split by a blank line only; the wording is unchanged.
- Line 111 "For a **Not on Twitch** reward, the per-stream, per-viewer and cooldown limits do not save; only the timer does.": RS:284-302 (Twitch push only for `IsManageable` with a `TwitchRewardId`), RS:316-318 (stored only from Twitch's reply), RS:337-338 (timer stored for every reward). True.

No open finding. The round 6 and round 5 text below is kept for the record.

Round 6. The changed lines were read from `git diff HEAD` of the page.

- Lines 45-47 (one rule for nothing picked): a command or action runs (RH:188-203). A reward never saved has `Response` null, so RH:243-246 builds nothing and RH:250-258 runs the generic **Reward redeemed** response. Any dialog save sends `response` as the typed text in Simple mode or `''` in Pipeline mode (RewardEditDialog.vue:201-219). RS:326-327 stores `''`, RH:243-246 builds an empty send_message, and SendMessageAction.cs:81-83 fails it, so nothing is sent. True.
- Line 112 "For a **Not on Twitch** reward, only the timer saves.": the three limits go to Twitch only for `IsManageable` with a `TwitchRewardId` (RS:284-302) and are stored only from Twitch's reply (RS:316-318); the timer is stored for every reward (RS:337-338). True. Round 5 finding 1 is fixed.
- Line 181 troubleshooting 2 reworded ("A saved empty **Chat reply** sends nothing"): same evidence as lines 45-47. True.
- No other line changed in meaning.

## Round 6 finding

1. Line 41: the row **Only lands in the queue** still says "See the next table." The three-case table was removed in this round, so the next table is now the badge table (lines 51-54), which does not say what the bot does. Fix: point to the text under the table, for example "See below." or "See the text under this table.", or state the outcome in the cell.

The round 5 text below is kept for the record; its finding 1 is resolved.

Round 5. Product repo master includes b6204c36c. CP = dashboard/src/views/dashboard/channel-points. RS = server/src/NomNomzBot.Infrastructure/Rewards/RewardService.cs. RH = server/src/NomNomzBot.Infrastructure/Rewards/EventHandlers/RewardRedeemedHandler.cs.

## Changed lines checked first

- Line 15 "a status that Twitch itself grants": Twitch fact, no product claim. The unavailable text at line 16 is CP/i18n/en.json:6. True.
- Line 17 switches "cannot be used": CP/components/RewardsPanel.vue:139 `:disabled="!reward.isManageable || unavailable"`. True.
- Line 35 "The dashboard calls a viewer buying a reward a redeem": CP/i18n/en.json:62-71 hints use "redeem(s)". True.
- Line 46 Simple reply shown for every reward with no pipeline, command or action: CP/components/RewardEditDialog.vue:150-156 (`bound = boundTarget(target, pipelineId)`; `mode = bound !== null ? 'full' : 'simple'`). True.
- Lines 51-52 table rows: unchanged in substance from round 4 (RH:243-261; RewardEditDialog.vue:204-207; RS:326-327; SendMessageAction.cs:81-83). True.
- Line 102 "collapsed each time the dialog opens": RewardEditDialog.vue:118-119, 158. True.
- Line 113 "An empty box keeps the limit the reward has now. Type 0 to clear a limit.": see finding 1.
- Line 167 "Reject 1 ... named for the count": CP/i18n/en.json:96 "Reject {count}"; RedemptionsPanel.vue:363. True.
- Line 181 troubleshooting 2: Simple reply with empty Chat reply sends nothing (same evidence as line 52); "type a reply and choose Save" stores the text (RS:326-327) and RH:243-246 sends it. True.

## Findings

1. Lines 106-113 (Limits table and "Type 0 to clear a limit.") are true only for a reward that is on Twitch and made by this bot. The three Twitch limits (**Limit per stream**, **Limit per viewer per stream**, **Cooldown in seconds**) are never stored from the request. They are sent to Twitch only when `reward is { IsManageable: true, TwitchRewardId: not null }` (RS:285-286, 297-302) and are stored only from Twitch's confirmed reply (RS:317-318, ApplyTwitchConfirmedFields RS:1383-1393). For a **Not on Twitch** reward, a typed limit or a typed 0 is dropped without a message, and the dialog then shows the old value. **Timer in seconds** is stored locally for every reward (RS:337-338, NormalizeTimerDuration RS:1395-1397), so it is not affected.
   Fix: add one sentence after line 113, for example "For a **Not on Twitch** reward, the bot keeps only **Timer in seconds**; the other three limits are not saved." (Also filed below as a product defect.)

## Product defects

- New: limits typed for a Not on Twitch reward are silently dropped (RS:285-318); the save reports success.
- No dashboard control to create a new reward; only Duplicate makes one, although `POST /rewards` exists (RewardsController.cs:227-230).
- The reward list shows "Only lands in the queue" for a reward bound to a command or an action (RewardsPanel.vue:51-60).
- An empty Simple reply is stored as "" and runs an empty send_message pipeline instead of the channel's generic redemption response (RewardEditDialog.vue:204-207; RS:326-327; RH:243-261).
- Seeder defines `reward:redemption:fulfill` and `reward:redemption:refund` at Mod (ActionDefinitionSeeder.cs:491-492), but the endpoints require `reward:manage` (RewardsController.cs:121-122, 195-196).
- "Reject {count} requests?" has no singular form (CP/i18n/en.json:93).
- The edit dialog has no field for `speaksViaTts`, though Duplicate copies it (RewardEditDialog.vue:317) and the handler runs it (RH:173-186).
- The queue filter joins requests to rewards by title (RedemptionsPanel.vue:73-78).

## Claim table

| Claim | Supported by | Status |
| --- | --- | --- |
| Page **Channel points** in the **Loyalty** sidebar group | dashboard/src/layouts/dashboard/navigation.ts:242-249; dashboard/src/i18n/locales/en.json:829, 925 | supported |
| Two panels, Pending rewards and Rewards | CP/ChannelPointsView.vue:33-40, 53-60; CP/i18n/en.json:8, 76 | supported |
| Channel must be connected to Twitch | RS:285-295 (Helix calls); RS:518 | supported |
| Affiliate or Partner only; unavailable text | RS:518; CP/ChannelPointsView.vue:45-52; en.json:6 | supported |
| Then only the Rewards panel shows | CP/ChannelPointsView.vue:36-37, 54 | supported |
| Switches cannot be used | CP/components/RewardsPanel.vue:139 | supported |
| Moderator, Lead moderator, Editor, Broadcaster may read | ActionDefinitionSeeder.cs:50-54, 487; CP/route.ts:80 | supported |
| Broadcaster may let a VIP open it, on Permissions | ActionDefinitionSeeder.cs:155-165, 487; settings/permissions/components/ActionMatrixPanel.vue | supported |
| Editor or Broadcaster change rewards, complete, reject | ActionDefinitionSeeder.cs:488; RewardsController.cs:121, 195, 256; RewardsPanel.vue:42; RedemptionsPanel.vue:54 | supported |
| Others: no switches, no Edit, no queue buttons | RewardsPanel.vue:137, 145; RedemptionsPanel.vue:251, 271, 297, 333 | supported |
| Count "4 rewards"; empty text | RewardsPanel.vue:89, 83; en.json:9-10 | supported |
| Row: name, cost, switch, Edit | RewardsPanel.vue:96, 133-153 | supported |
| "redeem" is the dashboard word | CP/i18n/en.json:62-71 | supported |
| Line: pipeline name runs pipeline | RewardsPanel.vue:51-57; RH:217-231 | supported |
| Line: text sends that reply | RewardsPanel.vue:59; RH:243-246 | supported |
| Only lands in the queue: no saved pipeline and no reply text; command or action too | RewardsPanel.vue:51-60, 97; RewardEditDialog.vue:215-218 | supported |
| Edit dialog shows Simple reply with no pipeline, command or action | RewardEditDialog.vue:150-156 | supported |
| Pipeline with command or action runs it | RH:188-203 | supported |
| Never saved: Reward redeemed line from Event responses | RH:243-261 | supported |
| Simple reply saved empty sends nothing | RewardEditDialog.vue:204-207; RS:326-327; SendMessageAction.cs:81-83 | supported |
| Badges Not on Twitch / Paused | RewardsPanel.vue:120-130; en.json:13-14 | supported |
| Edit dialog title has the name; description text | RewardEditDialog.vue:338-339; en.json:31-32 | supported |
| Save closes dialog; empty name message; refusal keeps it open | RewardEditDialog.vue:238-255; en.json:34 | supported |
| Twitch first, so list never shows unconfirmed value | RS:282-318 | supported |
| Name hint, 45; Cost hint; Description hint, 200 | RewardEditDialog.vue:114-116, 404-442; en.json:46-49, 60-63 | supported |
| Color hex, `#9146FF`; empty keeps color | RewardEditDialog.vue:228-229, 456-460; en.json:68 | supported |
| Viewer must type a message hint | RewardEditDialog.vue:471-472; en.json:71 | supported |
| Enabled and Paused at the top, with hints | RewardEditDialog.vue:368-391; en.json:69-70 | supported |
| Reaction group: Simple reply / Pipeline | ReplyModeField.vue:64-72, 125; locales/en.json:86-90 | supported |
| Chat reply hint, 500; Send the reply to options | RewardEditDialog.vue:117, 492-503; ReplyDeliveryField.vue:44-48; locales/en.json:98-105 | supported |
| Pipeline picker: pipeline, command or action; empty-pick text | RewardEditDialog.vue:488; ReplyModeField.vue:151; locales/en.json:92 | supported |
| One of the two; the other cleared on save | RewardEditDialog.vue:198-219 | supported |
| Reply in the one bot voice; uses helpers | RH:243-246; RewardEditDialog.vue:492-497 | supported |
| Limits collapsed each open; header example / Paused / No limits | RewardEditDialog.vue:118-119, 158, 184-196; en.json:37-42 | supported |
| Limit hints (per stream, per viewer, cooldown) | RewardEditDialog.vue:525-528; en.json:64-66 | supported only for a reward on Twitch (finding 1) |
| Timer: countdown on redeem | RH:148-170; en.json:67; RS:337-338 | supported |
| Empty box keeps the limit | RewardEditDialog.vue:136-141, 168-175; RS:1371-1373 (null leaves it) | supported |
| Type 0 clears a limit | RS:1371-1373, 1395-1397 | supported only for a reward on Twitch, timer always (finding 1) |
| Another app's reward: text; fields and list switch off | RewardEditDialog.vue:393-399; RewardsPanel.vue:139; en.json:35 | supported |
| List switch saves at once, same as Enabled; Twitch vs bot only | RewardsPanel.vue:74-76, 142; RS:285-295, 330-331 | supported |
| Paused is a different setting | RS:331-333; RH:104-107; en.json:70 | supported |
| Off reward runs no reply, pipeline or timer | RH:104-116 | supported |
| Duplicate: " copy" tail, closes; settings copied; starts off; same name refused | RewardEditDialog.vue:297-331; en.json:27-28 | supported |
| Delete dialog text, consequences line, Delete reward, removed on Twitch | RewardEditDialog.vue:262-294, 545-550; en.json:21-24; RS:403 | supported |
| Queue count, filters, remembered choice | RedemptionsPanel.vue:58, 80-95, 197, 235-237; en.json:77, 82 | supported |
| Row contents; empty text | RedemptionsPanel.vue:242-248, 279-295; en.json:79 | supported |
| Complete / Reject, Reject 1, description | RedemptionsPanel.vue:62-64, 305-321, 358-366; en.json:94, 96 | supported |
| Tick boxes, Select all, Complete 3 / Reject 3 | RedemptionsPanel.vue:121-125, 251-276, 333-353; en.json:85, 89, 92 | supported |
| Troubleshooting 1-3 | RH:104-116, 188-203, 243-246, 488-499; ReplyModeField.vue:151; locales/en.json:101-104 | supported |
