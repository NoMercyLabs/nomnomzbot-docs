# Fact-check: /reference/settings/resource-limits
Verdict: PASS
Reviewed: src/content/reference/en/settings/resource-limits.mdx
Reviewed-SHA: f392ac11ef64492b

This fact-check covers the current version of the page (hash f392ac11ef64492b). I read the whole page again and checked each claim against the code in this run.
Paths are in C:\Projects\NoMercyLabs\nomnomzbot. RL = dashboard/src/views/dashboard/settings/resource-limits.

## Claims

| Page claim | Proof | Result |
| --- | --- | --- |
| Page **Resource limits** is in the settings sidebar | RL/route.ts meta navMode 'settings' | true |
| The page only shows limits; nothing can be changed on it | RL/ResourceLimitsView.vue:13 (the view only reads; limits change with the plan) | true |
| Only the broadcaster may open the page | RL/route.ts action billing:read; server/.../ActionDefinitionSeeder.cs:477 M("billing:read", Broadcaster) | true |
| Three cards, top to bottom: Plan, Limits, Usage this period | RL/ResourceLimitsView.vue:116-205 | true |
| Card descriptions quoted | RL/i18n/en.json plan.description, limits.description | true |
| The usage description shows the period start and end | RL/ResourceLimitsView.vue:74-86,201 | true |
| Plan lines, the **Your plan** fallback, **Included** / **Not included** | RL/ResourceLimitsView.vue:43-45,124-138; en.json plan.* | true |
| **Change plan** opens Billing | RL/ResourceLimitsView.vue:144-148 (RouterLink dashboard-settings-billing) | true |
| Hosting marker sentence | Same text word for word as docs-work/page-conventions.md:135; the view shows the restricted text at ResourceLimitsView.vue:141-143 | true |
| Four groups; a group with no resource does not show | RL/limitRows.ts:98-112; ResourceLimitsView.vue:179 (v-if length > 0) | true |
| Group titles and descriptions quoted | RL/i18n/en.json limits.storage/allowance/perMessage/nearFree | true |
| Resource names in each group | RL/limitRows.ts:49,107-110; LimitSection.vue:35-41 (en.json names override); LimitedResourceRegistry.cs:42-82 | true |
| Only commands and timers show under Abuse protection | ResourceQuotaService.cs:144-153 (it skips response_variations_per_trigger because that limit is not channel-wide) | true |
| Meter reads "used of limit"; a row with no limit shows "no limit" and no bar | LimitMeter.vue:35-36,59; en.json meter.of/unlimited | true |
| Storage shows as a file size; script time as a length of time | RL/limitUnits.ts:19-36 | true |
| Bar levels: under 80% muted, 80% or more darker, full red bar and red figures | RL/limitRows.ts:56,63-73; LimitMeter.vue:42,54 | true |
| A Per message row has no bar; it shows characters per message or **No cap** | LimitSection.vue:43-51,66 (LimitValue) | true |
| Abuse protection limits do not change with the plan | ResourceQuotaService.cs:57-59 (NearFree uses SafetyBaseline, never the tier) | true |
| "Safety limit for every channel:" line | LimitSection.vue:53-57,75; en.json limits.baseline | true |
| Custom commands 1,500; Timers 200 | LimitedResourceRegistry.cs:42-43 | true |
| Storage and the allowance come from the plan; a self-hosted bot has no limit | ResourceQuotaService.cs:20-26 (COST_DRIVING delegates to tiers, which resolve self-host to unlimited) | true |
| The usage card lists metered use, for example **Text-to-speech characters**, and skips resources already shown under Limits | ResourceLimitsView.vue:48-52; en.json metrics.tts_characters | true |
| Empty usage text | en.json usage.empty | true |
| The next save over the limit is refused | CommandService.cs:115-131; TimerManagementService.cs:155-164; SoundClipService.cs:145; ChannelAssetService.cs:151 | true |
| Command and timer refusal texts | Errors.cs:72 with "custom commands" (CommandService.cs:131) and "timers" (TimerManagementService.cs:164) | true |
| Sound clip and channel asset refusal texts | SoundClipService.cs:145; ChannelAssetService.cs:151 | true |
| Existing commands and timers keep working (the check runs only at create, existing + 1) | CommandService.cs:115-124; TimerManagementService.cs:154-158 | true |
| A deleted file frees its storage at once | ResourceQuotaService.cs:86-96 (live SUM of live rows) | true |
| Error texts and **Try again** | RL/i18n/en.json limits/plan/usage.error; ResourceLimitsView.vue:123,161,205 (retry); dashboard/src/i18n/locales/en.json:81 | true |

## The writer's three code defects (all three confirmed)

1. The TTS limit has two meanings. The registry calls tts_max_characters "TTS characters per month" (LimitedResourceRegistry.cs:55-60). The code uses it as a cap for each message (TtsCharacterCap.cs:36-38). The page follows the per-message behavior that runs.
2. Safety limits show upgrade text. Errors.QuotaExceeded always says "Upgrade your tier" (Errors.cs:72), but no plan raises these limits. The page quotes the text and says the plan does not raise them.
3. An unused label. The en.json key names.event_responses exists, but the registry no longer has that key (LimitedResourceRegistry.cs:44-46). The page does not mention it.

The page documents what the code does today. It has no "this does not work" note.

## Style notes (no effect on the verdict)

- A channel override can set a limit that is not the safety value (ResourceQuotaService.cs:57-58). This is an operator action, not a plan, so the page stays true.
- The **Change plan** button shows only when the Billing route exists (ResourceLimitsView.vue:144).
