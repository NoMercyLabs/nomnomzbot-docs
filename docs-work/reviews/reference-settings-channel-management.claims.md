# Claims: /reference/settings/channel-management

Paths are in C:\Projects\NoMercyLabs\nomnomzbot. V = dashboard/src/views/dashboard/settings/channel-management. E = V/i18n/en.json. C = server/src/NomNomzBot.Api/Controllers/V1/ChannelsController.cs.

| Claim | Source |
| --- | --- |
| Page label "Channel management", in the settings sidebar | dashboard/src/i18n/locales/en.json:908; V/route.ts:20 (navMode settings); V/ChannelManagementView.vue:198 |
| Three cards with their titles and descriptions | V/ChannelManagementView.vue:201-276; E:7-8, 23-24, 65-66 |
| Only the Broadcaster may open the page and use the buttons | V/route.ts:21 (setup:write); server/src/NomNomzBot.Infrastructure/Content/Identity/ActionDefinitionSeeder.cs:437 (Broadcaster, grant false); C:570-653 all setup:write; buttons gated V/components/BotPresenceRow.vue:51,59, V/ChannelManagementView.vue:230,266, V/components/DeletedChannelNotice.vue:45 |
| Presence states, text and buttons | V/components/BotPresenceRow.vue:39-61; E:9-14 |
| Join changes state | V/ChannelManagementView.vue:214; C:570-571 |
| Leave dialog title, two results, action label | V/ChannelManagementView.vue:280-291; E:17-20, 14 |
| Join again any time; settings stay | E:18 |
| Reset keeps commands, viewers, history; cannot be undone | E:67, 70 |
| Reset flow: preview list, type name, confirm off until match, action label | V/ChannelManagementView.vue:155-167, 292-302; dashboard/src/components/layout/ConfirmDialog.vue:62, 101; E:68-71 |
| Reset kinds | E:47-53; server/src/NomNomzBot.Application/Common/Consequences/BlastRadiusDto.cs:109-115 |
| Reset empty text | E:72; V/ChannelManagementView.vue:152 |
| Reset clears the stored settings | C:651-664 (ChannelResetScope.RemoveAsync) |
| Delete is soft; bot stops serving at once | server/src/NomNomzBot.Application/Identity/Services/IChannelService.cs:135-139 |
| 30 days restore window | server/src/NomNomzBot.Domain/Identity/ChannelDeletionPolicy.cs:26; E:28 |
| Delete flow and labels | V/ChannelManagementView.vue:123-139, 303-313; E:26-29 |
| Delete lines: a count and a kind | V/ChannelManagementView.vue:100-107; E:30, 34-46 |
| Outside lines start with a count ("{count} {what}") | V/ChannelManagementView.vue:114-118; E:30, 56-61 |
| An outside line shows only when its count is above zero | server/src/NomNomzBot.Infrastructure/Identity/ChannelDeletePreviewService.cs:215-227 (per the fact-check; I did not reread it) |
| Nothing / minimum texts | E:31-32; V/ChannelManagementView.vue:108-112 |
| After delete the card shows "The channel is deleted" with date | V/ChannelManagementView.vue:248-253; V/components/DeletedChannelNotice.vue:38-43; E:75-76 |
| Bring the channel back | V/components/DeletedChannelNotice.vue:45-52; E:77; C:607-616 |
| List of other deleted channels the caller owns, inside window | V/ChannelManagementView.vue:176-187, 254-261; C:72-74; server/src/NomNomzBot.Infrastructure/Identity/ChannelService.cs:205-215 |
| Restore after window fails | IChannelService.cs:142-145; ChannelService.cs:872-874; error shown V/ChannelManagementView.vue:79, 277 |
