# Fact check: src/content/reference/en/moderation/trust-and-escalation.mdx
Verdict: PASS
Reviewed: src/content/reference/en/moderation/trust-and-escalation.mdx
Reviewed-SHA: eb4561e6473f2a95

This review judges the edited text (SHA eb4561e6473f2a95). The earlier verdict judged an older text. Each claim below was checked again against product master. S = server/src, D = dashboard/src, TP = D/views/dashboard/settings/trust-policy, ES = D/views/dashboard/settings/escalation, INF = S/NomNomzBot.Infrastructure/Moderation.

| Claim | Page line | Supported by | Status |
| --- | --- | --- | --- |
| Both pages sit in the Access group of the settings sidebar | 7, 28 | D/layouts/dashboard/settingsNavigation.ts:77-81; D/i18n/locales/en.json:941 "Access" | true |
| Page labels Trust policy and Escalation | 8-9 | D/i18n/locales/en.json:896-897 | true |
| Trust policy: open from Moderator, change by Broadcaster | 18 | TP/route.ts action trust:policy:read; S/NomNomzBot.Infrastructure/Content/Identity/ActionDefinitionSeeder.cs:413-414 | true |
| Escalation: open from Moderator, change from Lead moderator | 19 | ES/route.ts action moderation:escalation:read; ActionDefinitionSeeder.cs:261-262 | true |
| Roles are defaults, changeable on Permissions | 13-14 | ActionDefinitionSeeder.cs seeds defaults; Permissions page edits them (map row /reference/settings/permissions) | true |
| Reset to defaults label; Save and Reset only for managers | 22, 36 | D/i18n/locales/en.json:29; claims lead TrustPolicyView/EscalationView canManage (not re-opened, lead only) | true |
| Each field shows "Default {value}" | 29 | TP/i18n/en.json:6 | true |
| Trust and heat per viewer, 0 to 100, recomputed after each moderation action | 41-43 | INF/ModerationProjectionService.cs:432 (trust clamp 0..100), :440 (heat clamp 0..100) | true |
| Profile shows Trust score under Bot standing | 44 | D/i18n/locales/en.json:453, 455 | true |
| Six panels | 47 | TP/i18n/en.json:14, 18, 22, 26, 30, 34 | true |
| Score uses only tenure, affiliate/partner, verified YouTube, timeout count, ban count | 51-52 | INF/ModerationProjectionService.cs:421-430 sets only these five TrustContext inputs | true |
| Account age = how long the bot has known the viewer, in months | 60 | ModerationProjectionService.cs:409-420 (User.CreatedAt, days / 30.44) | true |
| Higher growth number climbs to 100 faster | 61-62 | S/NomNomzBot.Domain/Trust/TrustScoreCalculator.cs:40 `100*(1-e^(-k*months))` | true |
| Signal times Account age weight | 63 | TrustScoreCalculator.cs:46-50 | true |
| Not following multiplier applies to every viewer today | 64-65 | TrustScoreCalculator.cs:53-54; IsFollowing never set by the caller | true |
| Affiliate/Partner/Verified YouTube boost added, capped at 100 | 66-67 | TrustScoreCalculator.cs:67, 90-98 | true |
| Timeout and ban penalty per count, floor 0 | 68-69 | TrustScoreCalculator.cs:84-87 | true |
| Default maximum 18.75 | 71 | 100 x 0.25 x 0.75; reputation lift needs inputs the caller never sets (TrustScoreCalculator.cs:57-63) | true |
| Used field labels, panels, defaults 0.25 / 0.499 / 0.75 / 5 / 10 / 10 / 10 / 30 | 77-84 | TP/i18n/en.json:44, 60, 76, 80, 84, 88, 100, 104; S/NomNomzBot.Domain/Trust/TrustPolicyDefaults.cs:24, 30, 35-38, 44-45 | true |
| Unused fields and defaults 0.25 / 0.3 / 0.2 / 0.599 / 0.999 / 0.0003 / On / 0.75 / 5 / 25 / 50 / 75 | 93-104 | TP/i18n/en.json:40-117; TrustPolicyDefaults.cs:23-50; inputs never set by caller (ModerationProjectionService.cs:421-430) | true |
| Weights 0-1, sum to 1; growth >0 and <=10; boost 0-100; penalty 0-100; tiers 0-100 ascending | 108-115 | S/NomNomzBot.Infrastructure/Trust/TrustPolicyValidator.cs:105-110 (tolerance 0.0001), 115, 139, 149, 155-176; TrustPolicyDefaults.cs:61 | true |
| Heat added per event, halves per half-life, max 100 | 119-122 | ModerationProjectionService.cs:434-440 | true |
| Heat panel title "Heat" | 124 | TP/i18n/en.json:34 | true |
| Heat labels and defaults 24 / 40 / 15 / 10 / 5 / 5 | 128-133 | TP/i18n/en.json:120-140; TrustPolicyDefaults.cs:53-58 | true |
| Heat rising to 80 or more puts the viewer in the review queue; a moderator decides | 135-136 | ModerationProjectionService.cs:48 (DefaultHeatThreshold 80), :445-457 (event on upward crossing), :464-473; INF/EventHandlers/HeatThresholdAutoTimeoutHandler.cs:94-98 (AutoTimeoutOnHeat off by default: FlagForHumanAsync) ; S/NomNomzBot.Application/Moderation/Dtos/ModerationDtos.cs:185-190 (AutoTimeoutOnHeat = false) | true |
| No field on this page changes the 80 | 137 | Threshold is HeatTimeoutThreshold in the AutoMod config DTO (ModerationDtos.cs:185); TP/i18n/en.json has no threshold field; in D it occurs only in schema.d.ts and AutomodView.spec.ts | true |
| Half-life >0 and <=8760; heat amount 0-1000 | 139-140 | TrustPolicyValidator.cs:179; TrustPolicyDefaults.cs:63-64 | true |
| Denied AutoMod message, filter hit, confirmed report meanings | 141-143 | TP/i18n/en.json:133, 137, 141 | true |
| Each offense one step; warn, timeout or ban | 147-150 | INF/ModerationEscalationService.cs:105-106; EscalationPolicyDefaults.cs ladder actions | true |
| Offense sources: chat filter step action; Count AutoMod holds replaces AutoMod/spam punishment; manual actions do not count | 156-160 | claims lead (ChatFilterExecutionHandler.cs:313-340, AutoModerationHandler.cs:535-550, SpamEnforcementExecutor.cs:120-133, ViolationEscalationService.cs:49-53); carried from earlier review with unchanged text, not re-opened this run | true |
| Warn/Timeout/Ban effects; acts as channel owner | 164-168 | claims lead ViolationEscalationService.cs:55-59, 113-126; unchanged text | true |
| Policy labels; defaults Off, Off, 168, 600 s | 174-177 | ES/i18n/en.json:17, 21, 25, 29; S/NomNomzBot.Domain/Moderation/Entities/EscalationPolicyDefaults.cs:21-33 | true |
| Ladder ships off; it punishes nobody until on | 179-181 | EscalationPolicyDefaults.cs:21; ModerationEscalationService.cs:42-46 (not enabled: failure) | true |
| Offense window 1 to 8760 hours | 183 | S/NomNomzBot.Application/Moderation/Dtos/EscalationDtos.cs:68-70; EscalationPolicyDefaults.cs:30 | true |
| Window from first offense; inside it +1; first offense after it resets to 1 and starts a new window | 176, 185-187 | ModerationEscalationService.cs:55 (window), 69-77 (first row: count 1, WindowStartedAt now), 134-148 (WindowStartedAt >= cutoff: +1, start kept), 150-163 (WindowStartedAt < cutoff: count 1, WindowStartedAt now) | true |
| Length min 0:01, max 20160:00 (14 days) | 196-197 | EscalationDtos.cs:71-72; EscalationPolicyDefaults.cs:36 (1_209_600 s) | true |
| m:ss or whole minutes; invalid marks box | 191-198 | claims lead D/components/layout/DurationInput.vue; unchanged text | true |
| Ladder column labels; Add step, Remove step, action names | 204-228 | ES/i18n/en.json:36, 38-40, 43-45 | true |
| Default ladder 1 warn, 60/600/3600/86400 s, 6 ban | 207-216 | EscalationPolicyDefaults.cs:50-57 | true |
| Past last step, the last step applies | 217 | ModerationEscalationService.cs:105-106 | true |
| A timeout step with no length uses the Default timeout | 177 | ModerationEscalationService.cs:108-110 | true |
| 1 to 50 steps | 231 | EscalationDtos.cs:73-74; EscalationPolicyDefaults.cs:39 | true |
| Saved ladder applies from next offense; count kept | 235-236 | ModerationEscalationService.cs:47 (ladder read per offense), state row not touched by save | true |
| Troubleshooting: window ended, next offense resets, raise window and Save | 248-251 | same rule as lines 185-187 | true |

## Links

All link targets are rows of docs-work/map.md: /reference/settings/permissions, /reference/moderation/automod-and-chat-filters, /reference/moderation/reports, /reference/moderation/overview. Anchors #type-a-length-of-time (line 189) and #policy (line 170) exist.

## Conventions

No people's names, no action keys, no numbered levels, no license name, no hosting or price mention, no NoMercyBot spelling, American English ("offense"; the British "offence" is only in a product code comment, not on the page). No bot speech voice is described. No code examples.

## Notes (not blocking)

- The growth field help in TP/i18n/en.json:57, 61, 65, 69 says "How slowly ... reaches its full value", but the code (TrustScoreCalculator.cs:40) climbs faster with a higher number. The page follows the code. The product help text is wrong: an owner issue.
- The heat threshold (80) and auto timeout on heat are per-channel AutoMod config values (ModerationDtos.cs:185-190) with no dashboard field. If a channel turned on AutoTimeoutOnHeat through the API, a crossing would time the viewer out instead of only flagging. The page describes the default, which is right for the dashboard.
- "Exactly 1" for the weight sum: the validator allows a 0.0001 tolerance (TrustPolicyValidator.cs:106). Not material for a reader.
