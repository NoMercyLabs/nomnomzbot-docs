# Fact check: src/content/reference/en/integrations/discord.mdx
Verdict: PASS
Reviewed: src/content/reference/en/integrations/discord.mdx
Reviewed-SHA: d010830fac289699

Product repo: C:\Projects\NoMercyLabs\nomnomzbot (master, read only). `D` = dashboard/src/views/dashboard/discord; `EN` = D/i18n/en.json; `S` = server/src.
This review judged the current page text (sha above). The writer's claims file was used as a lead; the rows marked "re-read" were opened in this run.

| Claim | Page line | Supported by | Status |
| --- | --- | --- | --- |
| Page title **Discord** | 6 | EN:4 (re-read) | true |
| Settings sidebar, Connections group | 7 | dashboard/src/layouts/dashboard/settingsNavigation.ts:59-63 (claims file) | true |
| Three abilities | 10-14 | EN:43,47,51 (re-read) | true |
| Moderator reads server, rules, roles, live role, posts | 20 | S/NomNomzBot.Infrastructure/Content/Identity/ActionDefinitionSeeder.cs:225,227,229,232 = Mod (re-read) | true |
| Lead moderator and Editor write rules, roles, live role | 21 | ActionDefinitionSeeder.cs:228,230,231 = LeadModerator (20), Editor is 30 (:52-53); LiveRolePanel.vue writable = discord:config:write (re-read) | true |
| Broadcaster adds bot, toggles posting, withdraws, disconnects | 22 | ActionDefinitionSeeder.cs:226 discord:connection:write = Broadcaster; ConnectionPanel.vue add/change/toggle/withdraw/disconnect all gated on can('discord:connection:write') (re-read) | true |
| **Discord server** panel and **Add the bot to your server** | 29 | EN:6,55; SetupGuide.vue | true |
| Discord's page opens, returns to Discord page | 31-33 | S/NomNomzBot.Api/Controllers/V1/DiscordOAuthController.cs:78-118,282-288 | true |
| Install shows **Linked and ready** | 34, 38 | DiscordGuildService.cs:155-162; ConnectionPanel.vue label computed (re-read) | true |
| New link starts with **Post to this server** off | 35-36 | DiscordGuildConnection.cs:54 (default false) | true |
| Status labels and meanings | 40-44 | ConnectionPanel.vue label: !botInstalled -> botMissing; approved -> ready; else consentPending (re-read); EN:8,12,13 | true |
| Not-in-server shows Add and **Check again**, re-asks Discord | 46-47 | ConnectionPanel.vue v-if !botInstalled block, refreshPresence (re-read); DiscordController.cs:161 | true |
| Posting needs approval and toggle on; else **Skipped** | 49-50 | DiscordGuildService.cs:356-357 IsActive; DiscordNotificationDispatcher.cs StatusSkipped; EN:65 | true |
| One bot voice | 52 | posts go through the channel bot gateway DiscordRestBotGateway.cs | true |
| Rows Not set up / On / Off | 56-57 | EN:73-75; DiscordView.vue:163-170 | true |
| Set up opens a panel with the event name | 59-60 | DiscordView.vue:226-237,380 | true |
| Channel picked by name fit | 61-63 | D/ruleDefaults.ts:115-135 | true |
| **Ping role**, **No ping**, **Message**, placeholder line | 64-66 | EN:160-163 (re-read) | true |
| Save, row shows On | 67-68 | RuleEditor.vue:108 enabled ?? true | true |
| Preview saves first | 70 | RuleEditor.vue:219-225 | true |
| Ten events and their placeholders | 72-83 | S/NomNomzBot.Domain/Discord/DiscordConfigDefaults.cs:64-122 catalog of exactly these ten, placeholders match row by row (re-read); EN:99-108 labels match (re-read). new_clip/schedule/milestone are retired (D/triggers.ts:15-16), so leaving them out is right | true |
| Go-live ready message | 86-90 | DiscordConfigDefaults.cs GoLiveMessage; EN:87 (re-read) | true |
| Go-live ready card values | 97-108 | DiscordConfigDefaults.cs GoLiveEmbed: {title}, #9146FF, {stream.thumbnail}, field Game/{game}, TitleUrl {channel.url}, AuthorName, AuthorIconUrl {channel.avatar}, ShowTimestamp true, Watch Stream, {channel.url} (re-read) | true |
| Card part labels | 97-111 | EN:165-186 (re-read) | true |
| Empty card not sent | 112 | RuleEditor.vue:179-186 | true |
| Edit, **Send this notification**, Remove then **Remove rule**, sent messages stay | 116-120 | EN:76-81,154 (re-read); DiscordView.vue:239-247,318-325 | true |
| Pipeline **Discord notification** step | 122 | S/NomNomzBot.Infrastructure/Discord/PipelineActions/SendDiscordNotificationAction.cs:32,58-83 | true |
| Add role flow, **New role**, Display name fills | 129-134 | EN:118-125; NotifyRoleEditor.vue:82-88 | true |
| "0 opted in" | 136, 143 | EN:121 "{count} opted in" | true |
| Button channel, Post button after Edit | 137-139 | EN:129-130; NotifyRoleEditor.vue:161-190 | true |
| Button toggles role, ephemeral reply | 141-142 | DiscordInteractionService.cs:24-31,143-147 | true |
| Self-assign default on, disabled reply text | 147 | NotifyRoleEditor.vue:60; DiscordInteractionService.cs:116 | true |
| DM default off; DMs the notification to opted-in members when a rule pings the role | 148 | NotifyRoleEditor.vue:61; DiscordNotificationDispatcher.cs FanOutDmsAsync: PingRoleId + DmEnabled -> opted-in members (re-read) | true |
| Live role and self-assign roles exclude each other | 150-151 | LiveRolePanel.vue pickableRoles filters notify roles (re-read); NotifyRoleEditor.vue:54-55 | true |
| Remove role flow, old button reply | 153-154 | EN:131-133; DiscordInteractionService.cs:114 | true |
| Live role flow, default on | 160-162 | EN:140-142; LiveRolePanel.vue liveRoleDefaultEnabled (re-read); DiscordConfigDefaults.cs:27 | true |
| Applied on live, removed on end, missed end cleared at start | 164-165 | DiscordLiveRoleOnlineHandler.cs:19-24; DiscordLiveRoleOfflineHandler.cs:19-25; DiscordLiveRoleReconciliationHostedService.cs:53 | true |
| **Applied right now**, role locked | 166 | LiveRolePanel.vue StatusBadge v-if applied, Select :disabled="!writable or applied" (re-read) | true |
| Role goes to own Discord account linked to Twitch, learned at install | 168-169 | EN:141; DiscordOAuthController.cs:229-235; DiscordLiveRoleConfigService.cs:88-90 | true |
| **Remove rule** hidden while applied | 171-172 | LiveRolePanel.vue v-if stored !== null and !applied (re-read) | true |
| Recent posts and status labels | 176-183 | EN:58-66 (re-read); PostLogPanel.vue:31-62 | true |
| Pause, withdraw, disconnect effects | 187-191 | EN:15,18,21-24 (re-read); ConnectionPanel.vue dialogs (re-read) | true |
| Re-approve via **Use another server** | 193 | ConnectionPanel.vue data-change-server = install URL (re-read); DiscordGuildService.cs:128-162 upsert sets approved | true |
| Disconnect dialog lists what uses the server; link again later | 195-196 | ConnectionPanel.vue :consequences; EN:18-19 | true |
| Install error panel, Try again, Dismiss | 202-204 | EN:27-29 (re-read); DiscordView.vue:178-198 | true |
| "The Discord app is not set up yet" | 206-207 | EN:32 (re-read) | true |
| Picker messages | 209-213 | EN:152-153 (re-read); PickerError.vue | true |
| Blocked channels message | 215-217 | EN:151 (re-read) | true |
| Live role needs Twitch link in Discord, then re-add bot | 219-221 | DiscordLiveRoleConfigService.cs:89-90,251-256 | true |
| Links /reference/settings/permissions, /reference/automation/event-responses, /reference/getting-started/connect-platforms | 24, 123, 227-229 | each is a row of docs-work/map.md (grep count 1 each, this run) | true |

## Conventions

- No people's names, no action keys, no numbered levels, no license name or "open source": none found.
- NomNomzBot spelling: no NoMercyBot on the page.
- American English: "Color" (line 104, 167 label); no British spelling found.
- Hosting marker: the page does not mention hosting for others, a price or a paid plan; no marker needed.
- Bot voice: line 52 names the channel's one bot voice.

## Notes (not blocking)

- Product text mismatch, not a page defect: EN:128 dmHelp says "Message members when they take or leave the role.", but the code (DiscordNotificationDispatcher.cs FanOutDmsAsync) DMs only when a notification pings the role. The page follows the code. The dashboard help text should be fixed in the product.
- Line 46: **Add the bot** and **Check again** show only to the Broadcaster (can('discord:connection:write')). The page's role table already says so on line 22.
