# Claims: /reference/audio/voice-triggers

Paths: D = dashboard/src/views/dashboard/voice-triggers; C = server/src/NomNomzBot.Api/Controllers; S = server/src/NomNomzBot.Infrastructure/Commands/VoiceTriggerService.cs; L = C/VoiceListenerPageController.cs.

| # | Claim | Source |
| --- | --- | --- |
| 1 | Page label "Voice triggers", Build group | dashboard/src/i18n/locales/en.json:819, :923; dashboard/src/layouts/dashboard/navigation.ts:194; D/i18n/en.json "crumb" |
| 2 | Count +1 on hear, optional sticker | S:264-292 |
| 3 | Moderator floor for read and write; VIP may be allowed read | server/src/NomNomzBot.Infrastructure/Content/Identity/ActionDefinitionSeeder.cs:190-191, :159-165 |
| 4 | VIP (read only) sees list, counts, Popout listener and Copy listener link (overlay key); New button and editor hidden | D/VoiceTriggersView.vue:48, :90, :91, :112-117, :147; C/V1/VoiceTriggersController.cs:50-51 (listener-link needs read only) |
| 4a | Overlay key = channel OverlayToken, the overlay credential | S:299-317; C/VoiceTriggerReportController.cs:22-28 |
| 5 | Listener is a page in a real Chrome tab, Chrome speech recognition, en-US | L:21-30, :117-121, :212 |
| 6 | Popout listener opens own small window in the same browser as the dashboard (window.open), so the dashboard must be in Chrome or the link pasted into Chrome | D/components/VoiceListenerHeader.vue (popOut, window.open popup 520x560) |
| 7 | Title "Voice Listener", "Listening", transcript box | L:90-93, :109, :223 |
| 8 | Do not add to OBS; closing stops counting | L:91, :96; L:21-25 |
| 9 | Copy listener link copies same link with overlay token | D/VoiceTriggersView.vue:113-117; C/V1/VoiceTriggersController.cs:53-61 |
| 10 | Last 20 phrases, newest first | L:130, :142-143 |
| 11 | Result texts table (4 of the 5 strings; "(not sent: the bot answered N)" left out) | L:150, :154, :165, :169, :176 |
| 12 | Auto restart; "Stopped" on blocked mic with message | L:193-197, :230-236, :185 |
| 13 | Transcript kept only while a stream is live | S:225-243 |
| 14 | Dialog fields, defaults 0 and 5, labels | D/components/NewVoiceTriggerDialog.vue (refs, reset watch); D/i18n/en.json dialog/editor |
| 15 | New trigger is on; shows in list | server/src/NomNomzBot.Application/Commands/Dtos/VoiceTriggerDtos.cs:37; dashboard/src/api/voiceTriggers.ts:128 |
| 16 | Empty state text and button | D/VoiceTriggersView.vue:119-128; en.json list.empty/makeFirst |
| 17 | Empty word error | NewVoiceTriggerDialog.vue submit; en.json dialog.wordRequired |
| 18 | Word max 200; cooldown 0-3600; starting count only at create | VoiceTriggerDtos.cs:34, :44, :57; UpdateVoiceTriggerRequest has no StartingCount (:50-62) |
| 19 | Sticker list = uploaded images | dashboard/src/api/voiceTriggers.ts:80-88 |
| 20 | Match: substring, case-insensitive; one per phrase; disabled skipped | S:245-251 |
| 21 | Cooldown suppresses count | S:255-262 |
| 22a | New Alerts overlay leaves voice_trigger out of Alert types; card shows only for types in the list; user adds "Voice trigger" under "Alert types" in Settings, "Save settings", "Saved." | server/src/NomNomzBot.Infrastructure/Content/Widgets/FirstPartyWidgetCatalogue.cs:73-85, :112-129; alerts.vue:138-140; server/src/NomNomzBot.Infrastructure/Content/Widgets/WidgetSettingsSchemaProvider.cs:62, :104; dashboard/src/i18n/schema/en.json:2725, :3153, :2737; dashboard/src/views/dashboard/overlays/i18n/en.json settings.save, settings.saved, settings.unsaved |
| 22b | Routing: the open Alerts page subscribes to every type incl. voice_trigger | alerts.vue:15-19, :183-186; server/src/NomNomzBot.Api/Hubs/OverlayHub.cs:279-300 |
| 22c | Sticker on-screen time (ms) sets hold time for an image card | alerts.vue:160; FirstPartyWidgetCatalogue.cs:122 |
| 22 | Sticker via Alerts overlay subscribed to voice_trigger; card "word (count)" + image | server/src/NomNomzBot.Infrastructure/Widgets/EventHandlers/VoiceTriggerWidgetEventHandler.cs:37-75; server/src/NomNomzBot.Infrastructure/Content/Widgets/Assets/alerts.vue:113-117 |
| 23 | Edit flow, unsaved count, Save changes, Discard | D/components/VoiceTriggerEditor.vue (save, discard, unsaved) |
| 24 | Facts table 3 of 3 | VoiceTriggerEditor.vue facts |
| 25 | List shows "Heard N times" | D/VoiceTriggersView.vue:136 |
| 26 | Enabled switch saves at once; Off badge; counts nothing | VoiceTriggerEditor.vue toggle; D/VoiceTriggersView.vue:141-142; S:246 |
| 27 | Delete dialog texts; count lost; image stays | en.json confirmTitle/confirmBody/confirmAction; C/V1/VoiceTriggersController.cs:101-103 |
| 28 | Header status 3 of 3 texts, under a minute = just now, not proof listener is open | D/components/VoiceListenerHeader.vue (label, 60_000; template comment) |
| 29 | Reachable surfaces: the Voice triggers page only (no pipeline trigger, no SDK event); the only consumer of the fired event is the widget handler | grep VoiceTriggerFired over server/src and dashboard/src: only S and the widget handler |
