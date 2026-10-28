# Claims: /reference/moderation/trust-and-escalation

Product repo: C:\Projects\NoMercyLabs\nomnomzbot (master, read only). Paths are relative to it. D = dashboard/src, S = server/src, TP = D/views/dashboard/settings/trust-policy, ES = D/views/dashboard/settings/escalation, INF = S/NomNomzBot.Infrastructure/Moderation, CALC = S/NomNomzBot.Domain/Trust/TrustScoreCalculator.cs, CALLER = INF/ModerationProjectionService.cs:409-431 (the only caller of CALC.Calculate).

Repair after fact-check FAIL (SHA 80cfe3bc7a32a262): the trust section (lines 49-115) is rewritten to state only the inputs CALLER passes; unused fields are listed without an effect; the growth direction is corrected.

Repair after reader FAIL (SHA 5e54ff8e4b6cfdcf): the offense window rule is settled from INF/ModerationEscalationService.cs:134-164 (the window runs from WindowStartedAt, the first offense of the run; an offense after it resets the count to 1 and restarts the window). Lines 176, 185-187 and 248-250 now state that one rule. The Heat panel is named (line 124) and the fixed 80 is stated (line 137). Line numbers below are for the repaired text.

| Claim | Page line | Proof | Verdict |
| --- | --- | --- | --- |
| Both pages sit in the settings group labeled Access | 7, 28 | D/layouts/dashboard/settingsNavigation.ts:76-81 (`settings.access`); D/i18n/locales/en.json:941 "Access" | true |
| Page labels Trust policy, Escalation | 8-9 | D/i18n/locales/en.json:896-897 | true |
| Roles in the table are defaults, changeable on Permissions | 13-14 | S/NomNomzBot.Infrastructure/Content/Identity/ActionDefinitionSeeder.cs:45-48 | true |
| Trust policy opens from Moderator, changes by Broadcaster | 18 | TP/route.ts (trust:policy:read); TrustPolicyView.vue canManage trust:policy:manage; ActionDefinitionSeeder.cs:413-414 | true |
| Escalation opens from Moderator, changes from Lead moderator | 19 | ES/route.ts; EscalationView.vue canManage; ActionDefinitionSeeder.cs:261-262 | true |
| Read-only sees values; Save and Reset only for managers | 21-22 | TrustPolicyView.vue / EscalationView.vue `v-if="canManage"` | true |
| Each field shows "Default {value}" | 29 | TP/i18n/en.json:6; ES/i18n/en.json:6 | true |
| Save active when changed; all fields at once; refusal under field; Reset then Save | 30-37 | TrustPolicyView.vue, EscalationView.vue, ES/escalationDraft.ts | true |
| Trust and heat per viewer, 0-100, recomputed after each moderation action | 41-43 | INF/ModerationProjectionService.cs:432 (Clamp trust 0..100), :440 (Clamp heat 0..100), :54-61 | true |
| Profile shows Trust score under Bot standing | 44 | D/components/layout/profile/ProfileView.vue:121,443-447; D/i18n/locales/en.json:453-455 | true |
| Six panels | 47 | TP/i18n/en.json:14,18,22,26,30,34 group titles | true |
| Score uses only tenure, affiliate/partner, verified YouTube, timeout count, ban count | 51-52 | CALLER:421-430 sets only AccountAgeMonths, TwitchBroadcasterType, IsYouTubeChannelVerified, TimeoutCount, BanCount; other TrustContext fields keep defaults (S/NomNomzBot.Domain/Trust/TrustContext.cs) | true |
| Account age = how long the bot has known the viewer, in months | 60 | CALLER:409-420 (User.CreatedAt, days / 30.44) | true |
| Growth sets the climb to 100; higher number climbs faster | 61-62 | CALC:40 `100 * (1 - e^(-AccountAgeDecay * months))`: larger k reaches 100 sooner | true |
| Signal times Account age weight | 63 | CALC:46-50 | true |
| Not following multiplier applies to every viewer today | 64-65 | CALC:53-54; IsFollowing never set by CALLER, default false | true |
| Affiliate/partner/verified YouTube points added, capped at 100 | 66-67 | CALC:67, 90-98 | true |
| Timeout and ban penalty once each, floor 0 | 68-69 | CALC:84-87; CALLER:428-429 | true |
| Default maximum for a plain clean viewer 18.75 | 71 | 100 * 0.25 * 0.75 = 18.75 (CALC:40,48,54; TrustPolicyDefaults.cs:24,35); other three signals 0 since inputs are 0 | true |
| Used field labels, panels and defaults 0.25/0.499/0.75/5/10/10/10/30 | 75-84 | TP/i18n/en.json:14-104; S/NomNomzBot.Domain/Trust/TrustPolicyDefaults.cs:24,30,35-40,44-45 | true |
| Unused fields: request count, content age, content popularity signals and growths | 93-98 | CALC:38-43 inputs SuccessfulRequestCount, ContentAgeMonths, ContentViewCount never set by CALLER (0 gives 0); defaults TrustPolicyDefaults.cs:23-32 | true |
| Reputation boost unused, default On | 99 | CALC:57-63 needs IsModerator/IsVip/IsSubscriber/SuccessfulRequestCount, none set by CALLER; TrustPolicyDefaults.cs | true |
| YouTube quality multiplier unused, 0.75 | 100 | CALC:70 IsYouTubeContent never set | true |
| Skip penalty unused, 5 | 101 | CALC:83 SkippedByModCount never set; TrustPolicyDefaults.cs:43 | true |
| Tier ceilings unused, 25/50/75 | 102-104 | CALC GetTier has no caller in S; TrustPolicyDefaults.cs:48-50 | true |
| Weights 0-1 summing to 1; "Total {sum} of 1"; growth >0 and <=10; boost 0-100; multiplier 0-1; penalty 0-100; tiers 0-100 ascending | 108-115 | S/NomNomzBot.Infrastructure/Trust/TrustPolicyValidator.cs:115,125-175; TrustPolicyDefaults.cs:61; TP/i18n/en.json:9,15 | true |
| Heat adds per event, halves per half-life, max 100 | 119-122 | INF/ModerationProjectionService.cs:434-440 | true |
| Heat fields sit in the panel titled Heat | 124 | TP/i18n/en.json:33-35 (`heat.title` "Heat") | true |
| Heat labels and defaults 24/40/15/10/5/5 | 126-133 | TP/i18n/en.json:120-140; TrustPolicyDefaults.cs:53-58 | true |
| Heat 80 or more puts viewer in review queue; moderator decides | 135-136 | INF/ModerationProjectionService.cs:48,445-457; S/NomNomzBot.Application/Moderation/Dtos/ModerationDtos.cs:185-190; INF/EventHandlers/HeatThresholdAutoTimeoutHandler.cs:85-98 | true |
| No field on the Trust policy page changes the 80 | 137 | S/NomNomzBot.Application/Moderation/Dtos/ModerationDtos.cs:182-185 (HeatTimeoutThreshold = 80 lives in the AutoMod config DTO); TP/i18n/en.json holds no threshold field; dashboard/src grep for HeatTimeoutThreshold finds only api/schema.d.ts and a spec | true |
| Half-life >0, <=8760; heat amount 0-1000 | 139-140 | TrustPolicyValidator.cs:179,188; TrustPolicyDefaults.cs:63-64 | true |
| Denied AutoMod message, filter hit, confirmed report meanings | 141-143 | TP/i18n/en.json heat field help | true |
| Each offense moves one step; warn/timeout/ban | 147-150 | INF/ModerationEscalationService.cs:63,105-106 | true |
| Chat filter Step up the escalation ladder counts, Twitch only | 156 | INF/EventHandlers/ChatFilterExecutionHandler.cs:313-340 | true |
| Count AutoMod holds: AutoMod/spam defense timeout or ban replaced by step | 157-158 | INF/EventHandlers/AutoModerationHandler.cs:535-550; INF/SpamEnforcementExecutor.cs:120-133; INF/ViolationEscalationService.cs:49-53 | true |
| Manual moderator action does not count | 160 | ResolveAndRecordAsync callers ChatFilterExecutionHandler.cs:336, ViolationEscalationService.cs:72; TryEscalateAsync callers AutoModerationHandler.cs:541, SpamEnforcementExecutor.cs:124 | true |
| Warn = Twitch warning with reason; timeout; ban | 164-166 | ViolationEscalationService.cs:113-126; INF/ModerationService.cs:1270-1294 | true |
| In the name of the channel owner | 168 | ViolationEscalationService.cs:55-59 | true |
| Policy labels; defaults Off, Off, 168, 600 s | 174-177 | ES/i18n/en.json fields; S/NomNomzBot.Domain/Moderation/Entities/EscalationPolicyDefaults.cs:21-33 | true |
| Ships off; Count AutoMod holds needs ladder on | 179-181 | EscalationPolicyDefaults.cs:21-22; ViolationEscalationService.cs:51 | true |
| Offense window 1-8760 h | 183 | S/NomNomzBot.Application/Moderation/Dtos/EscalationDtos.cs:68-75 | true |
| Window runs from the first offense of the run; inside it each offense adds 1; the first offense after it sets the count to 1 and starts a new window | 176, 185-187 | INF/ModerationEscalationService.cs:55,62 (window from policy.OffenseWindowHours); :134-148 (WindowStartedAt >= now - window: OffenseCount + 1, WindowStartedAt kept); :150-163 (WindowStartedAt < cutoff: OffenseCount = 1, WindowStartedAt = now); :69-77 (first row: count 1, WindowStartedAt = now) | true |
| m:ss, or whole number = minutes | 191-194 | D/components/layout/DurationInput.vue:12-14,42; D/components/layout/formatCountdown.ts:32-43 | true |
| Min 0:01, max 20160:00 (14 days) | 196-197 | EscalationDtos.cs:68-75 (1 s, 1_209_600 s) | true |
| Out of range or non-length marks box invalid | 198 | DurationInput.vue:45-46,55 | true |
| "Default 600" hint in seconds | 200 | ES/components/PolicyPanel.vue:85-89 | true |
| Ladder columns; ascending numbers | 204-207 | ES/i18n/en.json ladder; stepsMustAscend | true |
| Default ladder 1 warn, 60/600/3600/86400 s, 6 ban | 207-216 | EscalationPolicyDefaults.cs:50-57 | true |
| Past last step, last step applies | 217 | ModerationEscalationService.cs:105-106 | true |
| Timeout step filled with Default timeout; Add step one after last as Warn; Remove; 1-50; buttons inactive at limits | 221-233 | ES/escalationDraft.ts withAction/nextStep; LadderPanel.vue canAdd/canRemove; EscalationDtos.cs:73-74 | true |
| Saved ladder applies from next offense, count kept | 235-236 | ModerationEscalationService.cs:37-47,63 | true |
| Troubleshooting: the window ran from the first offense and ended; next offense sets count to 1; a higher window counts longer, then Save | 248-251 | INF/ModerationEscalationService.cs:134-163 (same rule as line 185-187); :224 (Save stores request.OffenseWindowHours); :55 (next offense reads the stored window) | true |

## Links

- /reference/settings/permissions, /reference/moderation/automod-and-chat-filters, /reference/moderation/reports, /reference/moderation/overview: map rows. Anchor #type-a-length-of-time is the heading at line 189. Anchor #policy is the heading at line 170.

## Product defects found (for the owner, not on the page)

- CALLER passes no follow state, roles, request count, content data or skip count to CALC, so the Not following multiplier hits every viewer and the Reputation boost, three signals, the YouTube quality multiplier and the skip penalty change nothing.
- CALC GetTier has no caller; the tier ceilings change nothing.
- The Reputation boost help text (TP/i18n/en.json) says it boosts affiliates, partners and verified YouTube channels; the code gates only the halfway lift.
- Heat threshold (80) and auto timeout on heat have no dashboard field (ModerationDtos.cs:185-190).
