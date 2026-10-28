# Claims: /reference/automation/rewards

Paths are in the product repo. CP = dashboard/src/views/dashboard/channel-points. RS = server/src/NomNomzBot.Infrastructure/Rewards/RewardService.cs. RH = server/src/NomNomzBot.Infrastructure/Rewards/EventHandlers/RewardRedeemedHandler.cs.

| # | Claim | Source |
| --- | --- | --- |
| 1 | Page label "Channel points" in the "Loyalty" sidebar group | dashboard/src/layouts/dashboard/navigation.ts:242-249; dashboard/src/i18n/locales/en.json frame.nav.channelPoints, frame.group.loyalty |
| 2 | Two panels, Pending rewards and Rewards | CP/ChannelPointsView.vue:33-40; CP/i18n/en.json:8,76 |
| 3 | Rewards need a Twitch connection (Helix calls) | server/src/NomNomzBot.Application/Contracts/Twitch/ITwitchChannelPointsApi.cs:27-63 |
| 4 | Affiliate or Partner only; unavailable text; only Rewards panel; switches off | RS:512-518; CP/ChannelPointsView.vue:30-40,45-52; CP/i18n/en.json:6; CP/components/RewardsPanel.vue:125 |
| 5 | Read: Moderator default, Broadcaster may lower to VIP | server/src/NomNomzBot.Infrastructure/Content/Identity/ActionDefinitionSeeder.cs:159-165,487; CP/route.ts:8 |
| 6 | Change rewards and complete/reject: Editor and above | ActionDefinitionSeeder.cs:488; server/src/NomNomzBot.Api/Controllers/V1/RewardsController.cs:121,195,227,256,333 |
| 7 | Without manage: no switch, no Edit, no queue buttons | CP/components/RewardsPanel.vue:28,122-140; CP/components/RedemptionsPanel.vue:43,250,269,290,322 |
| 8 | Count "{count} rewards", empty text | CP/components/RewardsPanel.vue:73-75; CP/i18n/en.json:9-10 |
| 9 | Row shows name, cost, switch, Edit | CP/components/RewardsPanel.vue:79-140 |
| 10 | Line under name: pipeline name, else reply, else "Only lands in the queue" | CP/components/RewardsPanel.vue:36-46,83; en.json:12 |
| 10b | "Only lands in the queue" also for a command or action target, which the bot runs | RewardsPanel.vue:36-46 (checks pipelineId and response only); RewardEditDialog.vue:215-218; RH:188-203 |
| 11 | Reply never set (null) runs the generic redemption event response; an empty saved reply ("") sends nothing (send_message fails on an empty message) | RH:243-261, 488-499; server SendMessageAction.cs:81-83; RewardEditDialog.vue:204-207; RS:326-327 |
| 23b | Limits header also shows Paused | RewardEditDialog.vue:189-191; en.json:42 |
| 34b | Reject confirm button "Reject {count}" | RedemptionsPanel.vue:363; en.json:96 |
| 12 | Badges Not on Twitch / Paused | CP/components/RewardsPanel.vue:105-116; en.json:13-14; server/src/NomNomzBot.Application/Rewards/Dtos/RewardDtos.cs:64 |
| 13 | Edit dialog title and description | CP/components/RewardEditDialog.vue:338-339; en.json:31-32 |
| 14 | Save closes dialog; empty name error; refusal keeps dialog open | RewardEditDialog.vue:238-256; en.json:34 |
| 15 | Twitch first, then local copy | RS:282-300 |
| 16 | Field labels, hints, 45/200/500 limits | RewardEditDialog.vue:115-117,401-482; en.json:45-71 |
| 17 | Empty color keeps color | RewardEditDialog.vue:228-229 |
| 18 | Enabled and Paused switches at dialog top | RewardEditDialog.vue:368-391; en.json:43-44 |
| 19 | Reaction: Simple reply / Pipeline; kinds command, pipeline, action; none text | RewardEditDialog.vue:485-506; dashboard/src/components/layout/ReplyModeField.vue:67-71,125-151; en.json common.replyMode |
| 20 | One or the other, other cleared on save | RewardEditDialog.vue:198-219 |
| 21 | Send the reply to choices | dashboard/src/components/layout/ReplyDeliveryField.vue:42-46; en.json common.replyDelivery.target |
| 22 | Reply uses templates | RewardEditDialog.vue:492-503 (TemplateField) |
| 23 | Limits folded each open; summary; "No limits" | RewardEditDialog.vue:118-119,158,183-196,510-521; en.json:36-42 |
| 24 | Limit fields and hints; empty keeps current | RewardEditDialog.vue:168-175,525-539; en.json:50-53,64-67 |
| 25 | Timer starts countdown on redeem | RH:148-170 |
| 26 | Other app reward: text, fields and switch off | RewardEditDialog.vue:393-399; RewardsPanel.vue:125; en.json:35; RS:253-259 |
| 27 | List switch sets isEnabled (same as dialog Enabled), saves at once; goes to Twitch only for a reward on Twitch made by this bot; Paused is a separate flag | RewardsPanel.vue:60-62; RS:241-245,285-295 |
| 28 | Off reward runs nothing | RH:104-116 |
| 29 | Duplicate: " copy" tail, saved settings, starts off, dialog closes | RewardEditDialog.vue:296-332; en.json:26-29 |
| 30 | Duplicate name refused, dialog shows reason | RewardEditDialog.vue:298 comment and 325-328 (error kept, dialog stays open) |
| 31 | Delete dialog texts, consequences, removed on Twitch | RewardEditDialog.vue:262-294,545-553; en.json:19-25; RS:403-418 |
| 32 | Queue: count "{count} waiting", filter All requests + per reward counts, remembered | RedemptionsPanel.vue:47,57-60,71-91,183-187; en.json:77,82 |
| 33 | Row shows reward, age, viewer, cost, message; empty text | RedemptionsPanel.vue:240-247,268-288; en.json:79 |
| 34 | Complete marks done; Reject asks and refunds | RedemptionsPanel.vue:150-167,290-318,345-353; en.json:87-96; RewardsController.cs:121-139,195-210 |
| 35 | Bulk buttons act on ticked or on all visible; Select all | RedemptionsPanel.vue:111-115,250-260,322-343; en.json:85,89,92 |
