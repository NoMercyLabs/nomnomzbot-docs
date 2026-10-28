# Claims: /reference/settings/resource-limits

Paths are in C:\Projects\NoMercyLabs\nomnomzbot. RL = dashboard/src/views/dashboard/settings/resource-limits.

| Claim | Source |
| --- | --- |
| Page label **Resource limits** in settings nav | dashboard/src/i18n/locales/en.json:905; RL/route.ts:17-21 (navMode settings) |
| Page only reads; limits change with the plan | RL/ResourceLimitsView.vue:12-13 (no write calls in view); BillingController.cs:95-104 GET only |
| Only the broadcaster may open | RL/route.ts:21 action billing:read; server/src/NomNomzBot.Infrastructure/Content/Identity/ActionDefinitionSeeder.cs:477 M("billing:read", Broadcaster); BillingController.cs:66,77,96 |
| Three cards Plan, Limits, Usage this period, in that order | RL/ResourceLimitsView.vue:116-219; RL/i18n/en.json:46,7,59 |
| Card descriptions quoted | RL/i18n/en.json:8,47,60 |
| Usage description shows period from/to | RL/ResourceLimitsView.vue:74-86,201; en.json:61 |
| Plan lines Plan / Custom bot name / Priority support, Included / Not included, Your plan fallback | RL/ResourceLimitsView.vue:43-45,101-105,125-138; en.json:49-54 |
| Change plan opens Billing | RL/ResourceLimitsView.vue:144-148; en.json:55 |
| Hosting marker (page shows restricted text) | RL/ResourceLimitsView.vue:141-143; en.json:56; page-conventions.md marker |
| Four groups, hidden when empty | RL/ResourceLimitsView.vue:164-193; RL/limitRows.ts:98-112 |
| Group descriptions quoted | RL/i18n/en.json:24-39 |
| Resource names per group | RL/limitRows.ts:49,107-110; server/src/NomNomzBot.Application/Contracts/Billing/LimitedResourceRegistry.cs:42-82; en.json:14-23 |
| Meter shows "used of limit", bar | RL/components/LimitMeter.vue:32-38,58-68; en.json:42 |
| Storage as file size, script time as time span | RL/limitUnits.ts:19-36 |
| Levels: under 80 muted, 80+ darker, full red, unlimited no bar + "no limit" | RL/limitRows.ts:56,63-73; RL/components/LimitMeter.vue:40-47,54,59; en.json:43 |
| Per message row has no bar, cap in characters or No cap | RL/components/LimitSection.vue:43-51,66; RL/components/LimitValue.vue; en.json:12-13 |
| Abuse protection same for every channel, shows safety limit line | LimitedResourceRegistry.cs:40-41; RL/components/LimitSection.vue:53-57,75; ResourceQuotaService.cs:58-61; en.json:11 |
| A bar shows only for a resource with a limit (no-limit row has no bar) | RL/components/LimitMeter.vue:59 (v-if level !== 'unlimited'); RL/limitRows.ts:64-65 |
| Abuse protection limits do not change with the plan | ResourceQuotaService.cs:58-61 (NearFree uses descriptor.SafetyBaseline, never tiers.GetLimitAsync); ResourceQuotaService.cs:146-164 |
| Command/timer refusal text names the plan, but a plan does not raise those limits | Errors.cs:72 (fixed text); CommandService.cs:121-131, TimerManagementService.cs:155-164 (keys custom_commands, timers = NearFree, LimitedResourceRegistry.cs:42-43) |
| Custom commands 1,500; Timers 200 | LimitedResourceRegistry.cs:42-43 |
| Storage and allowance from plan; self-host unlimited | LimitedResourceRegistry.cs:53-54; ResourceQuotaService.cs:22-26,178-180 |
| Usage card lists metered metrics, e.g. Text-to-speech characters; skips ones shown under Limits | RL/ResourceLimitsView.vue:48-52; en.json:65-67 |
| Empty usage text | en.json:62 |
| Next save over the limit is refused | ResourceQuotaService.cs:63; CommandService.cs:121-132; TimerManagementService.cs:155-164; SoundClipService.cs:133-149; ChannelAssetService.cs:139-154 |
| Command refusal text | Errors.cs:70-74; CommandService.cs:131 ("custom commands") |
| Timer refusal text | Errors.cs:70-74; TimerManagementService.cs:164 ("timers") |
| Sound clip / asset refusal text | SoundClipService.cs:145; ChannelAssetService.cs:151 |
| Existing items keep working (check is on create only) | CommandService.cs:121-124, TimerManagementService.cs:155-158 (resultingCount = existing + 1 at create) |
| Delete frees storage at once | ResourceQuotaService.cs:85-96; en.json:26 |
| Error texts and Try again | en.json:10,48,63; RL/ResourceLimitsView.vue:122,160,204; dashboard/src/components/layout/PanelCard.vue:192-193; dashboard/src/i18n/locales/en.json:81 |
