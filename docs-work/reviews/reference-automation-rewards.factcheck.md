# Fact check: src/content/reference/en/automation/rewards.mdx
Verdict: PASS
Reviewed: src/content/reference/en/automation/rewards.mdx
Reviewed-SHA: defc805640c70e5e

Round 4. Changed text checked: page lines 43-44. "No saved pipeline and no reply text" matches `runs()`, which shows a name only for a `pipelineId` found in the channel's saved pipelines, else the reply, else the label (RewardsPanel.vue:46-60, 97). "A picked command or action is not a saved pipeline" matches RewardEditDialog.vue:215-218: only a pipeline pick is saved as `pipelineId`; a command or action is saved as `target`. Line 89 (Pipeline field: a saved pipeline, a command or an action) matches `:kinds="['command', 'pipeline', 'action']"` (RewardEditDialog.vue:488), and the quoted text is dashboard/src/i18n/locales/en.json:92 (ReplyModeField.vue:151). The rest of the page was skimmed and matches round 3.

Round 3. Changed text checked: page lines 34-50 (the line-under-the-name table and the three-case "Only lands in the queue" table) and line 87 (the Chat reply hint now quoted without "Empty clears it."; the quoted words are the start of en.json:62, so the quote stays true). The rest of the page was skimmed and matches round 2. Rows: "Only lands in the queue" shows when `runs()` finds no pipeline name and no reply (RewardsPanel.vue:51-60, 97); command or action picked runs it (RewardEditDialog.vue:215-218; RH:188-203); never saved, so Response is null, falls to the generic redemption response (RH:243-261); Simple reply saved empty stores "" (RewardEditDialog.vue:204-207; RS:326-327) and the empty send_message step fails (SendMessageAction.cs:81-83), so nothing is sent. A Pipeline with nothing picked also saves "" (RewardEditDialog.vue:218) and sends nothing; the table does not list it, and the troubleshooting step on the page says it.

Round 2. The four round 1 findings are fixed (see "Round 1 findings, now resolved"). The whole page was re-read against the source; the new sentences are rows in the claim table. Paths are in the product repo (master, includes b6204c36c). CP = dashboard/src/views/dashboard/channel-points. RS = server/src/NomNomzBot.Infrastructure/Rewards/RewardService.cs. RH = server/src/NomNomzBot.Infrastructure/Rewards/EventHandlers/RewardRedeemedHandler.cs.

## Round 1 findings, now resolved

Round 2 checks: 1 is fixed at page lines 37-45 (the table now lists what the reward has; the command or action case, the never-set case and the empty-reply case are stated). An empty message sends nothing: SendMessageAction fails on an empty template (server/src/NomNomzBot.Infrastructure/Chat/PipelineActions/SendMessageAction.cs:81-83). 2 is fixed at page line 160 ("Reject 1"). 3 is fixed at page lines 95-96. 4 is fixed at page line 120; a reward from another app has its switch off (RewardsPanel.vue:139), so "on Twitch" covers only rewards the switch can change.

Round 1 text, kept for the record:

1. "Line under the name" table, row "Only lands in the queue", is wrong in two cases.
   - A reward bound to a **command** or an **action** shows "Only lands in the queue". `runs()` checks only `pipelineId` and `response` (CP/components/RewardsPanel.vue:51-60, 97). Pipeline mode saves `response: ''` and sends a command or action as `target`, not `pipelineId` (CP/components/RewardEditDialog.vue:215-218). The bot does run that command or action (RH:188-203). So the page's "no pipeline of its own ... the bot runs the channel's redemption line" is false for these rewards.
   - A reward saved in **Simple reply** with an empty reply shows "Only lands in the queue", but the bot does not run the event-responses line. The dialog sends `response: ''` (RewardEditDialog.vue:204-207). The server stores it, because it only skips null (RS:326-327). The handler then builds a send_message pipeline from the empty text (RH:243-246, 488-499), so the fallback to the generic response at RH:250-261 does not run. The generic line runs only when the stored reply is null (a reward never saved with Simple reply).
   Fix: describe the line as the code shows it, and state what runs from the code. Do not promise the event-responses line for a reward saved with an empty reply, and do not say a command-bound or action-bound reward runs nothing of its own.
2. Reject confirm button: the page says "Its **Reject** button". The button text is "Reject {count}", for example "Reject 1" (CP/components/RedemptionsPanel.vue:363; CP/i18n/en.json:96).
3. Limits header: the page says it "shows the limits that are set". It also adds "Paused" when the reward is paused (RewardEditDialog.vue:189-191; en.json:42). Name it, or say "the limits that are set, and Paused".
4. List switch: "it switches the reward on Twitch too". This is true only for a reward that is on Twitch and made by this bot. A reward that is **Not on Twitch** changes only in the bot: the Twitch call needs `IsManageable` and a `TwitchRewardId` (RS:285-295). Say so, or limit the sentence.

## Writer's open claims (checked first)

- Create a reward: confirmed. The dashboard has no create control. `useCreateReward` is used only in `duplicate()` (grep of dashboard/src: dashboard/src/api/rewards.ts:177 and CP/components/RewardEditDialog.vue:73, 305). RewardsPanel.vue has only the switch and Edit (136-153). The server has a create endpoint (server/src/NomNomzBot.Api/Controllers/V1/RewardsController.cs:227-230). The page correctly documents no create flow.
- VIP lowering on the Permissions settings page: supported in part. The per-action override UI is dashboard/src/views/dashboard/settings/permissions/components/ActionMatrixPanel.vue (exists, holds the action override). `reward:read` default Mod, floor VIP (server/src/NomNomzBot.Infrastructure/Content/Identity/ActionDefinitionSeeder.cs:487). The exact tab inside the page is not checked; the page names only the page, so the claim stands.
- Twitch scopes: not on the page, not needed.

## Product defects

- No dashboard control to create a new reward; only Duplicate makes one, although `POST /rewards` exists (RewardsController.cs:227-230).
- The reward list shows "Only lands in the queue" for a reward bound to a command or an action (RewardsPanel.vue:51-60).
- An empty Simple reply is stored as "" and runs an empty send_message pipeline instead of the channel's generic redemption response (RewardEditDialog.vue:204-207; RS:326-327; RH:243-261).
- Seeder defines `reward:redemption:fulfill` and `reward:redemption:refund` at Mod (ActionDefinitionSeeder.cs:491-492), but the fulfill and refund endpoints require `reward:manage` (RewardsController.cs:121-122, 195-196). The actions in the seeder are unused for these routes.
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
| Switches in it are off | CP/components/RewardsPanel.vue:139 | supported |
| Moderator, Lead moderator, Editor, Broadcaster may read | ActionDefinitionSeeder.cs:50-54, 487; CP/route.ts:80 | supported |
| Broadcaster may let a VIP open it, on Permissions | ActionDefinitionSeeder.cs:155-165, 487; settings/permissions/components/ActionMatrixPanel.vue | supported |
| Editor or Broadcaster change rewards, complete, reject | ActionDefinitionSeeder.cs:488; RewardsController.cs:121, 195, 256; RewardsPanel.vue:42; RedemptionsPanel.vue:54 | supported |
| Others: no switches, no Edit, no queue buttons | RewardsPanel.vue:137, 145; RedemptionsPanel.vue:251, 271, 297, 333 | supported |
| Count "4 rewards"; empty text | RewardsPanel.vue:89, 83; en.json:9-10 | supported |
| Row: name, cost, switch, Edit | RewardsPanel.vue:96, 133-153 | supported |
| Line: pipeline name → runs pipeline | RewardsPanel.vue:51-57; RH:217-231 | supported |
| Line: text → bot sends that reply | RewardsPanel.vue:59; RH:243-246 | supported |
| Line: Only lands in the queue → no pipeline and no reply text | RewardsPanel.vue:51-60, 97 | supported |
| Also shows for a command or action reward; the bot runs it | RewardsPanel.vue:51-60; RewardEditDialog.vue:215-218; RH:188-203 | supported |
| Never given a reply or pipeline → runs the Event responses redemption line | RH:243-261 (Response null → generic response) | supported |
| Saved with an empty Chat reply → sends nothing | RewardEditDialog.vue:204-207; RS:326-327; RH:243-246; SendMessageAction.cs:81-83 | supported |
| Badge Not on Twitch | RewardsPanel.vue:120-125; en.json:14 | supported |
| Badge Paused | RewardsPanel.vue:126-130; en.json:13 | supported |
| Edit dialog title has the name; description text | RewardEditDialog.vue:338-339; en.json:31-32 | supported |
| Save closes dialog | RewardEditDialog.vue:248-255 | supported |
| Empty name → "Give the reward a name." | RewardEditDialog.vue:239-242; en.json:34 | supported |
| Refusal keeps dialog open with reason | RewardEditDialog.vue:249-252 | supported |
| Twitch first, so list never shows unconfirmed value | RS:282-300, 318 | supported |
| Name hint, 45 characters | RewardEditDialog.vue:115, 404-410; en.json:46, 60 | supported |
| Cost in points hint | RewardEditDialog.vue:420-421; en.json:49, 63 | supported |
| Description hint, 200 characters | RewardEditDialog.vue:116, 436-442; en.json:47, 61 | supported |
| Color hex, `#9146FF`; empty keeps color | RewardEditDialog.vue:228-229, 456-460; en.json:68 | supported |
| Viewer must type a message hint | RewardEditDialog.vue:471-472; en.json:57, 71 | supported |
| Enabled and Paused at the top, with hints | RewardEditDialog.vue:368-391; en.json:43-44, 69-70 | supported (hints are on the isEnabled/isPaused keys, en.json:69-70) |
| Reaction group: Simple reply / Pipeline | ReplyModeField.vue:64-72, 125; dashboard/src/i18n/locales/en.json:86-90 | supported |
| Chat reply hint, 500 characters | RewardEditDialog.vue:117, 492-503; en.json:48, 62 | supported |
| Send the reply to: Twitch chat, Chat overlay, Both, Nowhere | ReplyDeliveryField.vue:44-48; dashboard/src/i18n/locales/en.json:98-105 | supported |
| Pipeline picker: pipeline, command or action | RewardEditDialog.vue:488 | supported |
| "This answers nothing until you pick a pipeline..." | ReplyModeField.vue:151; dashboard/src/i18n/locales/en.json:92 | supported |
| One of the two; the other cleared on save | RewardEditDialog.vue:198-219 | supported |
| Reply uses templates | RewardEditDialog.vue:492-497 (TemplateField) | supported |
| Limits folded each open | RewardEditDialog.vue:118-119, 158 | supported |
| Header example "5 per stream · 30s cooldown" / "No limits" | RewardEditDialog.vue:184-196; en.json:37-40 | supported (Paused named, RewardEditDialog.vue:189-191) |
| Limit per stream / per viewer / cooldown hints | RewardEditDialog.vue:525-528; en.json:50-52, 64-66 | supported |
| Timer: countdown on redeem; 0 clears it | RH:148-170; en.json:67 | supported |
| Empty box keeps the limit | RewardEditDialog.vue:168-175; en.json:64-66 | supported |
| Another app's reward: text; fields and list switch off | RewardEditDialog.vue:393-399, 414 etc.; RewardsPanel.vue:139; en.json:35; RS:255-259 | supported |
| List switch saves at once | RewardsPanel.vue:74-76, 142 | supported |
| List switch sets the same thing as Enabled | RewardsPanel.vue:74-76; RewardEditDialog.vue:376 | supported |
| On Twitch: changes Twitch too; Not on Twitch: only in the bot | RS:245, 285-295, 330-331 | supported |
| Paused is a different setting; Twitch shows it, no one can buy | RS:245-246 (IsEnabled and IsPaused separate fields); RH:104-107; en.json:70 | supported |
| Off reward runs no reply, pipeline or timer | RH:104-116 | supported |
| Duplicate: " copy" tail, dialog closes | RewardEditDialog.vue:298-306, 331; en.json:27-28 | supported |
| Copy has saved settings, starts off | RewardEditDialog.vue:305-324 | supported |
| Same name refused, dialog stays open with reason | RewardEditDialog.vue:325-328 | supported |
| Delete dialog title "Delete {title}?", description | RewardEditDialog.vue:545-548; en.json:21-22 | supported |
| Consequences line or "No viewer has redeemed this reward." | RewardEditDialog.vue:262-276; en.json:24 | supported |
| Delete reward button; closes; leaves list; removed on Twitch | RewardEditDialog.vue:282-294, 550; en.json:23; RS:403 | supported |
| Queue count "3 waiting" | RedemptionsPanel.vue:197; en.json:82 | supported |
| All requests and per-reward counts; choice remembered | RedemptionsPanel.vue:58, 80-95, 235-237; en.json:77 | supported |
| Row: reward, age, viewer, cost, message | RedemptionsPanel.vue:279-295 | supported |
| Empty: "No requests are waiting." | RedemptionsPanel.vue:242-248; en.json:79 | supported |
| Complete (check) marks done, leaves list | RedemptionsPanel.vue:62-64, 319-321; dashboard/src/api/rewards.ts:308-316 | supported |
| Reject (cross) asks; description text | RedemptionsPanel.vue:305-307, 358-366; en.json:94 | supported |
| Confirm button **Reject 1** | RedemptionsPanel.vue:305, 363; en.json:96 | supported |
| Tick boxes / Select all requests | RedemptionsPanel.vue:251-276; en.json:85 | supported |
| Complete 3 / Reject 3 act on ticked, else on every request in the open list | RedemptionsPanel.vue:121-125, 333-353; en.json:89, 92 | supported |
| Troubleshooting 1: off runs nothing | RH:104-116 | supported |
| Troubleshooting 2: Pipeline with nothing picked answers nothing | ReplyModeField.vue:151; RewardEditDialog.vue:218; RH:188-203 | supported |
| Troubleshooting 3: Chat overlay and Nowhere send nothing to Twitch chat | dashboard/src/i18n/locales/en.json:101-104; RH:488-499 | supported |
| Reply is in the channel's one bot voice | RH:243-246 (send_message target channel) | supported |
