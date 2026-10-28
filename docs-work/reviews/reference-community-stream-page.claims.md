# Claims: /reference/community/stream-page

Paths are in the product repo C:\Projects\NoMercyLabs\nomnomzbot. D = dashboard/src/views/dashboard/stream.

| Claim | Source |
| --- | --- |
| Sidebar entry **Stream**, needs stream:read | dashboard/src/layouts/dashboard/navigation.ts:115-118; dashboard/src/i18n/locales/en.json:202 |
| Header Live/Offline, "Live for {time} · {category}" | D/StreamView.vue:113-117,77-80; D/i18n/en.json:5-7 |
| Duration format "1h 20m" | D/formatDuration.ts:12-19 |
| Tabs Overview, Schedule, Raid rules, Ads and their panels | D/StreamView.vue:42-49,118-125; D/i18n/en.json:86-91 |
| A tab shows only when the person may see one panel on it | D/StreamView.vue:51-53 |
| Open page: Moderator default, broadcaster may lower to VIP | server/src/NomNomzBot.Infrastructure/Content/Identity/ActionDefinitionSeeder.cs:339 (MFloor Mod, Vip), 152-165 |
| Edit stream info: moderator and up; VIP read-only (form inert) | ActionDefinitionSeeder.cs:342; D/StreamInfoPanel.vue:39,136; StreamController.cs:224 |
| Connect platform: editor and up | ActionDefinitionSeeder.cs:402; D/PlatformRows.vue:85 |
| Schedule read/write: moderator | ActionDefinitionSeeder.cs:360-361; D/SchedulePanel.vue canEdit |
| Raid now + raid rules write: editor; rules read: moderator | ActionDefinitionSeeder.cs:356-357; D/RaidNowPanel.vue PanelCard v-if; D/RaidRulesPanel.vue canEdit + inert |
| Run an ad: editor | ActionDefinitionSeeder.cs:359; D/CommercialPanel.vue v-if live-ops:ads:write |
| Role ladder Mod < Lead moderator < Editor | ActionDefinitionSeeder.cs:50-53 |
| Title max 140, counter "{count} / 140" | D/StreamInfoPanel.vue TITLE_MAX; D/i18n/en.json:19 |
| Recent titles: current + up to 5 earlier | D/StreamInfoPanel.vue RECENT_TITLES=5, recentTitles computed, currentTitle label |
| Category search, list, chosen name shown, recent categories | D/CategoryPicker.vue; en.json:22-26 |
| Tags: Enter adds, max 10, duplicate ignored (case-insensitive), box disabled at 10, limit text | D/TagInput.vue MAX_TAGS, add(), :disabled; en.json:28-32 |
| Remove tag shows "Removed {tag}." + Undo | D/TagInput.vue remove/undo; en.json:29-31 |
| Language shown only, hint text | D/StreamInfoPanel.vue language block; en.json:33-34 |
| Content labels list, Paid promotion hint, Mature-rated game read-only | D/StreamInfoPanel.vue EDITABLE_CONTENT_LABELS rows, categoryLabelOn; en.json:35-47 |
| Save changes / Discard; edits kept on failure (draft cleared only onSuccess) | D/StreamInfoPanel.vue submit(), Discard button; file header comment |
| Where it goes: description, Twitch always Connected, Kick/YouTube connect with confirm, opens window | D/PlatformRows.vue; en.json:53-62; dashboard/src/api/vocabulary platformScopeSets (not checked for exact provider list beyond i18n) |
| X Live Not available yet | D/PlatformRows.vue xlive row; en.json:63-65 |
| Checklist rows, tones, texts | D/GoLiveChecklist.vue checks computed; en.json:67-85 |
| Off reward neutral dot | D/GoLiveChecklist.vue rewards tone 'off' comment |
| Schedule description, segment hint | en.json:95,107 |
| Add segment dialog fields, length 30-1440, default 120 | D/SegmentDialog.vue DEFAULT_MINUTES, valid, min/max |
| Repeat weekly only when adding | D/SegmentDialog.vue LabeledSwitch v-if !editing |
| Weekly / Canceled badges, Untitled stream, No segments yet | D/SchedulePanel.vue row template; en.json:114-117 |
| Cancel/Restore toggle, Delete confirm texts, series line | D/SchedulePanel.vue toggleCanceled, ConfirmDialog; en.json:118-125 |
| Vacation: switch, hint, start/end, Save vacation only when dirty, invalid text | D/SchedulePanel.vue vacationDirty, vacationValid; en.json:97-103 |
| Raid now flow, confirm, toasts, cancel, not found | D/RaidNowPanel.vue find/confirmRaid/stop; en.json:127-142 |
| Raid rules description, new channel neutral (all 0, empty lists) | en.json:146; server/src/NomNomzBot.Application/Raids/RaidScoringDefaults.cs:20-37 |
| Each group's rule content (category, keyword tags/title, band min/max, recency steps, owed base+extra, level, followed); page states storage only, no ranking runs (RaidSuggestionService unused, DependencyInjection.cs:470) | RaidScoring.cs field meanings; D/RaidRulesPanel.vue fields |
| Tab shows on read right; Ads tab visible to moderator, Run an ad editor only | D/StreamView.vue:45-53; D/CommercialPanel.vue:39; ActionDefinitionSeeder.cs:358-359 |
| Add/Remove rows, Save rules sends whole set | D/RaidRulesPanel.vue add*/removeAt/submit |
| Refused set keeps old rules; problems in red beside field | D/RaidRulesPanel.vue header comment + refuse(); D/RaidProblemLines.vue; RaidScoringRulesValidator.cs |
| Limits: MaxWeight 1000, category name, keyword words, empty word, matches nothing, band <0, min>max, step >=1 day | RaidScoringRulesValidator.cs:103-190+; en.json:178-186 |
| Incoming raid assessment: hostile if banned or blocked by the operator on every channel (NetworkBlock.cs:17-24) | server/src/NomNomzBot.Infrastructure/Moderation/RaidAssessmentService.cs DecideVerdict |
| Hostile raids handled in chat mod tools | dashboard/src/views/dashboard/chat/components/ModToolsPanel.vue:38,84,267-286 |
| Ad lengths 30-180, default 30, Run ad, started text or Twitch message | D/CommercialPanel.vue LENGTHS, lengthSeconds, status line; en.json:189-195 |
