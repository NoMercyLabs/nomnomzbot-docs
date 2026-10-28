# Fact-check: /reference/settings/resource-limits
Verdict: PASS
Reviewed: src/content/reference/en/settings/resource-limits.mdx
Reviewed-SHA: f392ac11ef64492b

Paths are in C:\Projects\NoMercyLabs\nomnomzbot. RL = dashboard/src/views/dashboard/settings/resource-limits.

## Claims checked (all true)

- Broadcaster only: RL/route.ts meta action billing:read; ActionDefinitionSeeder.cs:477 M("billing:read", Broadcaster).
- Card titles, descriptions, plan lines, Your plan, Included / Not included, Change plan, error texts, empty usage text, group titles and descriptions, resource names, "Safety limit for every channel:": RL/i18n/en.json (all strings match the page word for word).
- Plan lines and Change plan to Billing: RL/ResourceLimitsView.vue:124-149.
- Hosting marker: page sentence matches page-conventions.md:135 exactly; the view also shows the restricted text (ResourceLimitsView.vue:141-143).
- Four groups, empty hidden, TTS in Per message: RL/limitRows.ts:49,98-112.
- Meter levels (80% near, full, unlimited when limit < 0): RL/limitRows.ts:56,63-73.
- Per message row has no bar, characters or No cap: RL/components/LimitSection.vue:43-51,66.
- Safety values 1,500 and 200, never tier-scaled: LimitedResourceRegistry.cs:42-43; ResourceQuotaService.cs:58-61.
- response_variations_per_trigger (NearFree) is not listed: the report skips it, ResourceQuotaService.cs:144-153 (continue on NOT_SUPPORTED). The page is right to list only commands and timers.
- Self-host unlimited for cost-driving: ResourceQuotaService.cs:20-26.
- Refusal texts: Errors.cs:72 with CommandService.cs:131 ("custom commands"); timer same path; SoundClipService.cs:145; ChannelAssetService.cs:151.
- Check on create only (existing + 1): CommandService.cs:115-124.
- Delete frees storage at once (live SUM): ResourceQuotaService.cs:86-96.
- Usage card skips per-message and repeated keys: ResourceLimitsView.vue:48-52.

## Writer's three code defects (all confirmed)

1. TTS limit has two meanings: registry names tts_max_characters "TTS characters per month" (LimitedResourceRegistry.cs:55-60), but the code uses it as a per-message cap (TtsCharacterCap.cs:36-38, the stricter of the streamer setting and the tier limit). The dashboard label override hides the registry name (LimitSection.vue:35-41, en.json "Text-to-speech message length"). The page documents the per-message behavior that runs.
2. Upgrade text on safety limits: Errors.QuotaExceeded always says "Your plan allows ... Upgrade your tier" (Errors.cs:72), also for NearFree keys that no plan raises. The page quotes the text and states the plan does not raise these limits.
3. Unused event_responses label: en.json names.event_responses exists, but the registry drops the key (LimitedResourceRegistry.cs:44-46; ResourceQuotaService.cs:83-84). The page does not mention it.

The page has no "this does not work" note. Correct.

## Style notes (no effect on verdict)

- A per-channel override can set a limit different from the safety baseline (ResourceQuotaService.cs:57-59, overrides). The page "same for every channel" follows the UI text; an override is an operator action, not a plan, so the page stays true.
- The Change plan button shows only when the Billing route exists (ResourceLimitsView.vue:144). Not a defect for this deployment.
