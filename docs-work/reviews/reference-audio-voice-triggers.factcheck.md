# Fact check: src/content/reference/en/audio/voice-triggers.mdx
Verdict: PASS
Reviewed: src/content/reference/en/audio/voice-triggers.mdx
Reviewed-SHA: 1001f86c0b45231a

Round 2. Product repo paths are relative to C:\Projects\NoMercyLabs\nomnomzbot. S = server/src/NomNomzBot.Infrastructure/Commands/VoiceTriggerService.cs. L = server/src/NomNomzBot.Api/Controllers/VoiceListenerPageController.cs. D = dashboard/src/views/dashboard/voice-triggers. A = server/src/NomNomzBot.Infrastructure/Content/Widgets/Assets/alerts.vue.

Both round 1 findings are fixed:
- VIP access: the page now names **Popout listener**, **Copy listener link** and the overlay key.
- Popout window: the popout now opens in the same browser as the dashboard.

The new Alerts steps match the code. Every claim below rests on a line I opened.

## Product defects

All still open (round 1):
1. A VIP with read access gets the overlay key through the listener link (VoiceTriggersController.cs:49-56).
2. The writer's defects 1 to 6.

## Claims

| Claim | Supported by | Status |
| --- | --- | --- |
| Voice triggers page, Build group | D/i18n/en.json title/crumb; navigation.ts:193-196 | supported |
| Count +1; optional sticker; runs no action | S:263-292; only consumer VoiceTriggerWidgetEventHandler.cs:37-79 | supported |
| Microphone, not chat; does not speak | L:96,207-214 | supported |
| Moderator and higher open and change | ActionDefinitionSeeder.cs:190-191; PermissionLevel.cs:26-29 | supported |
| VIP may be allowed; sees list, counts, Popout listener, Copy listener link | ActionDefinitionSeeder.cs:190; D/route.ts:19; D/VoiceTriggersView.vue:90,112-117; VoiceTriggersController.cs:49-50 | supported |
| New voice trigger and editor hidden for VIP | D/VoiceTriggersView.vue:48,91,125,147 | supported |
| Listener link holds the overlay key | VoiceTriggersController.cs:54-56; L:101,158 | supported |
| Chrome speech recognition, US English | L:117-121,212 | supported |
| Popout in page header opens own small window of same browser; title Voice Listener | VoiceListenerHeader.vue:46-48,70; D/VoiceTriggersView.vue:82-90; L:90 | supported |
| Listening; heard words in box | L:93,109,219-222 | supported |
| Not in OBS; closing stops counting | L:91,96 | supported |
| Copy listener link copies same link; paste into Chrome | D/VoiceTriggersView.vue:112-117; L:117-121 | supported |
| Last 20, newest first; result texts table | L:130,142-143,148-154,163-176 | supported |
| Auto restart; Stopped on blocked mic | L:185,190-192,226-234 | supported |
| Transcript kept only while live | S:220-242 | supported |
| Dialog fields, defaults 0 and 5, labels, create closes, new is on | NewVoiceTriggerDialog.vue:33-36,43-44,51,73; VoiceTriggerDtos.cs:37; en.json dialog/editor | supported |
| Empty state and Make the first voice trigger | D/VoiceTriggersView.vue:119-127 | supported |
| Limits 200 and 0-3600; starting count at create only | VoiceTriggerDtos.cs:34-35,44-46,50-62 | supported |
| Sticker = uploaded images | dashboard/src/api/voiceTriggers.ts:80-88 | supported |
| Substring, any case; one per phrase; off counts nothing; cooldown | S:244-261 | supported |
| Sticker through the Alerts overlay | A:15-19,183-187 (listens to voice_trigger); VoiceTriggerWidgetEventHandler.cs:64-78 | supported |
| A new Alerts overlay does not show voice triggers | FirstPartyWidgetCatalogue.cs:73-85 (default events exclude voice_trigger), :119; A:137-145 (cfg.events gate) | supported |
| In Settings add Voice trigger to Alert types | WidgetSettingsSchemaProvider.cs:49-61,104; dashboard/src/i18n/schema/en.json:2724-2725 ("Alert types"), :3153 ("Voice trigger") | supported |
| Save settings; "Saved."; open sources reload | overlays en.json settings.save/saved/unsaved (lines 174,176,182); A:172-174 (onSettings live) | supported |
| Sticker on-screen time (ms) sets sticker hold | schema en.json:2736-2737; A:163 (holdMs uses stickerDurationMs when image) | supported |
| Alert shows "hello (3)" and the image | A:113-117 | supported |
| Edit flow, unsaved count, Save changes, Discard | VoiceTriggerEditor.vue:47-50,69,85,156-166 | supported |
| Three facts, live updates; Heard N times | VoiceTriggerEditor.vue:55-58; configDomains.ts; D/VoiceTriggersView.vue:136 | supported |
| Enabled saves at once; Off badge | VoiceTriggerEditor.vue:12,81,100-103; D/VoiceTriggersView.vue:141-142 | supported |
| Delete dialog; count lost; image stays | VoiceTriggerEditor.vue:171; en.json confirm*; VoiceTriggersController.cs:58 | supported |
| Header status texts; past count only | VoiceListenerHeader.vue:28-43 | supported |
