# Claims: /reference/integrations/discord

Product repo: C:\Projects\NoMercyLabs\nomnomzbot (master, read only).
Abbreviations: `D` = dashboard/src/views/dashboard/discord; `EN` = D/i18n/en.json; `S` = server/src.

| Claim | Page line | Proof | Verdict |
| --- | --- | --- | --- |
| Page title **Discord** | 6 | EN:4; dashboard/src/i18n/locales/en.json:838 | true |
| Page is under Settings, Connections group | 7 | dashboard/src/layouts/dashboard/settingsNavigation.ts:59-63; D/route.ts:17-20 | true |
| Three abilities (posts, roles, live role) | 10-14 | EN:42-53; D/components/SetupGuide.vue (abilities list) | true |
| Moderator may read connection, rules, roles, live role, posts | 20 | S/NomNomzBot.Infrastructure/Content/Identity/ActionDefinitionSeeder.cs:225,227,229,232; D/DiscordView.vue:201,214,258,300,313 | true |
| Lead moderator and up write rules, roles, live role | 21 | ActionDefinitionSeeder.cs:228,230 (LeadModerator=20, Editor=30 at :52-53); DiscordView.vue:227,268; LiveRolePanel.vue:69 | true |
| Broadcaster only for add bot, posting toggle, withdraw, disconnect | 22 | ActionDefinitionSeeder.cs:226; ConnectionPanel.vue:118,138,148,153; S/NomNomzBot.Api/Controllers/V1/DiscordController.cs:83,102,115,144 | true |
| **Discord server** panel shows abilities and **Add the bot to your server** | 29 | DiscordView.vue:202,210; SetupGuide.vue:31-34; EN:6,55 | true |
| Install opens Discord's authorize page | 31 | S/NomNomzBot.Api/Controllers/V1/DiscordOAuthController.cs:78-118 | true |
| Callback returns to the Discord page | 33 | DiscordOAuthController.cs:282-288 (DiscordPagePath /app/settings/discord) | true |
| Install sets bot installed + approved, shows **Linked and ready** | 34, 38, 42 | S/NomNomzBot.Infrastructure/Discord/DiscordGuildService.cs:155-162; ConnectionPanel.vue:101-108; EN:13 | true |
| New link starts with **Post to this server** off; nothing posts until on | 35-36, 49 | S/NomNomzBot.Domain/Discord/Entities/DiscordGuildConnection.cs:54 (bool default false, only set at DiscordGuildService.cs:274); DiscordGuildService.cs:356-357 IsActive; DiscordNotificationDispatcher.cs (gate step 1, IsLinkActiveAsync) | true |
| Status labels and meanings | 42-44 | ConnectionPanel.vue:101-108; EN:8,12,13; DiscordGuildConnection.cs ServerConsentStatus pending/approved/revoked | true |
| **Check again** re-reads presence | 46-47 | ConnectionPanel.vue:117-135 (refreshPresence); DiscordController.cs:161 presence | true |
| Inactive link post logged as skipped | 50 | DiscordNotificationDispatcher.cs gate: StatusSkipped "Discord link is not active"; :41 | true |
| One bot voice | 52 | page-conventions rule; posts sent by the channel's bot gateway (S/NomNomzBot.Infrastructure/Discord/Gateway/DiscordRestBotGateway.cs) | true |
| Rule rows show Not set up / On / Off | 56-57 | DiscordView.vue:163-170; EN:73-75 | true |
| **Set up**/**Edit** opens a sheet titled with the event | 59-60 | DiscordView.vue:226-237,380 | true |
| Default channel picked by name fit, e.g. "live" for go-live | 61-63 | D/ruleDefaults.ts:115-135; RuleEditor.vue:109 | true |
| **Ping role** with **No ping** | 64 | RuleEditor.vue:270-284; EN:161-162 | true |
| Placeholder line under **Message** | 66 | RuleEditor.vue:288-299; EN:160 | true |
| **Save**, row shows On (new rule enabled) | 67-68 | RuleEditor.vue:108 (enabled ?? true); S/NomNomzBot.Domain/Discord/DiscordConfigDefaults.cs:24 | true |
| **Preview** saves first, then renders | 70 | RuleEditor.vue:219-225 | true |
| Event list and placeholders | 72-83 | DiscordConfigDefaults.cs:64-122; EN:99-108 | true |
| Ready message per event; go-live text | 85-90 | RuleEditor.vue:83-89,111-113; EN:87 | true |
| Embed box and go-live ready card values | 94-108 | D/ruleDefaults.ts:91-110; EN:84-86,165-179 | true |
| Other card parts, Add field | 110-111 | RuleEditor.vue:322-459; EN:166-186 | true |
| Empty card not sent | 112 | RuleEditor.vue:179-186 | true |
| Edit, turn off **Send this notification**, Remove then **Remove rule** | 116-120 | DiscordView.vue:148-161,239-247,318-325; RuleEditor.vue:243-247; EN:80-81,154-155 | true |
| Pipeline step **Discord notification** sends a configured rule | 122 | S/NomNomzBot.Infrastructure/Discord/PipelineActions/SendDiscordNotificationAction.cs:32,58-83; dashboard/src/i18n/schema/en.json:3411,2181-2188 | true |
| Add role flow, **New role**, Display name fills in | 129-134 | DiscordView.vue:266-275,344-346; NotifyRoleEditor.vue:82-88,121-144; EN:118-124 | true |
| "0 opted in" count | 136, 143 | DiscordView.vue:281; EN:121 | true |
| Button channel and Post button only after the role exists (Edit) | 137-139 | NotifyRoleEditor.vue:161-190 (v-if role !== null) | true |
| Button toggles role; ephemeral reply | 141-142 | S/NomNomzBot.Infrastructure/Discord/Interactions/DiscordInteractionService.cs:24-31,143-147 | true |
| Self-assign default on; disabled reply text | 147 | NotifyRoleEditor.vue:60; DiscordInteractionService.cs:116 | true |
| DM default off; DM sends the notification to opted-in members when a rule pings the role | 148 | NotifyRoleEditor.vue:61; S/NomNomzBot.Infrastructure/Discord/DiscordNotificationDispatcher.cs:228-260 (FanOutDmsAsync). Finding: the dashboard help EN:128 says "when they take or leave the role"; the code sends the DM on a notification, not on a take or leave. Page follows the code. | true |
| Live role and self-assign roles exclude each other | 150-151 | LiveRolePanel.vue:51-54; NotifyRoleEditor.vue:54-55 | true |
| Remove role flow and "This button isn't active anymore." | 153-154 | NotifyRoleEditor.vue:196-225; EN:131-133; DiscordInteractionService.cs:114 | true |
| Live role flow, default enabled | 160-162 | LiveRolePanel.vue:57,79-84,92-142; dashboard/src/api/discord.ts:676; DiscordConfigDefaults.cs:27 | true |
| Applied on online, removed on offline | 164 | S/NomNomzBot.Infrastructure/Discord/EventHandlers/DiscordLiveRoleOnlineHandler.cs:19-24; DiscordLiveRoleOfflineHandler.cs:19-25; DiscordLiveRoleService.cs:42-122 | true |
| Missed offline cleared at start | 165 | DiscordLiveRoleOfflineHandler.cs:23-24; S/NomNomzBot.Infrastructure/Discord/DiscordLiveRoleReconciliationHostedService.cs:53 | true |
| **Applied right now**, role locked while applied | 166 | LiveRolePanel.vue:93,97; DiscordLiveRoleConfigService.cs:168-172; EN:144-145 | true |
| Role goes to the streamer's Discord account linked to Twitch, learned at install | 168-169 | DiscordOAuthController.cs:229-235; DiscordGuildService.cs:115-120,161-162; DiscordLiveRoleConfigService.cs:88-90; EN:141 | true |
| **Remove rule** hidden while applied | 171-172 | LiveRolePanel.vue:129-137 | true |
| Recent posts list and status labels | 176-183 | PostLogPanel.vue:31-62; EN:58-66; DiscordNotificationDispatcher.cs:40-41 | true |
| Pause, withdraw, disconnect effects | 187-191 | EN:15,18,23; ConnectionPanel.vue:143-191; DiscordGuildService.cs:245-258 | true |
| Re-approve by installing the same server again | 193 | ConnectionPanel.vue:138-141 (**Use another server** = install URL); DiscordGuildService.cs:128-162 (upsert on same server sets approved) | true |
| Disconnect dialog lists what uses the server | 195-196 | ConnectionPanel.vue:50-68; EN:17-19 | true |
| Install error panel, Try again, Dismiss | 202-204 | DiscordView.vue:178-198; EN:26-39; DiscordOAuthController.cs FailureResult | true |
| "The Discord app is not set up yet" cause | 206-207 | EN:32; DiscordOAuthController.cs:152-153 | true |
| Picker messages | 209-213 | D/components/PickerError.vue (setupReasons map); EN:152-153 | true |
| Blocked channels message | 215-217 | D/components/BlockedChannels.vue; EN:151 | true |
| Live role needs Twitch link in Discord, then re-add the bot | 219-221 | DiscordLiveRoleConfigService.cs:89-90,251-256 | true |
| Links are map rows in Assumes / Links to | 24, 123, 227-229 | docs-work/map.md:98 | true |
