# Claims: /reference/audio/sounds

Product repo paths are relative to the product root. Page en.json: `dashboard/src/views/dashboard/sounds/i18n/en.json`. Schema en.json: `dashboard/src/i18n/schema/en.json`.

| # | Claim | Evidence |
| --- | --- | --- |
| 1 | **Sounds** in the sidebar | dashboard/src/layouts/dashboard/navigation.ts:168-173; locales/en.json:821 |
| 2 | Clips play through the overlay | SoundClipService.cs ResolveForPlaybackAsync 335-370; PlaySoundAction.cs:105; ChatMessageHandler.cs:1447 |
| 3 | Moderator and above open and change; VIP may be allowed read | ActionDefinitionSeeder.cs:549-550 (MFloor sounds:read Mod/Vip, sounds:write Mod); route.ts meta sounds:read |
| 4 | New/switch/Edit/Delete only with write | SoundsView.vue Button v-if can('sounds:write'); SoundClipRow.vue v-if can; GatedSwitch.vue:45 |
| 5 | New sound clip dialog, fields, Add sound clip | SoundClipAddDialog.vue; page en.json dialog.* |
| 6 | Short name used by commands/pipelines, cannot change | page en.json dialog.nameHelp; UpdateSoundClipRequest has no Name (ISoundClipService.cs) |
| 7 | New clip switched on | Domain/Sound/Entities/SoundClip.cs:56 (IsEnabled = true) |
| 8 | mp3/ogg/wav, 10 MB, 3 minutes, sniffed by content | Infrastructure/Sound/Audio/SoundClipAudioRules.cs (MaxSizeBytes, MaxDurationMs, Sniff) |
| 9 | Short name, display name required; duplicate name refused | soundClipForm.ts addProblem; SoundClipService.cs:152-161 |
| 10 | Volume 0-100 whole, default 80 | soundClipForm.ts maxVolume=100, blankAddForm defaultVolume 80, volumeProblem |
| 11 | Error shows in dialog | SoundClipAddDialog.vue submit catch sets error |
| 12 | 100 clip limit; storage limit | SoundClipService.cs:31,121-150; planLimits.ts:20 sound_clip_storage_bytes |
| 13 | Empty text | page en.json empty |
| 14 | Row detail: short name, chat word, volume, seconds | SoundClipRow.vue detail computed |
| 15 | 50 per page, Show more sound clips | SoundsView.vue pageSize=50, loadMore; page en.json more |
| 16 | Edit dialog fields; file and short name stay | SoundClipEditDialog.vue:95-145; page en.json editDescription |
| 16a | Edit fields show the clip's current values | soundClipForm.ts editFormFrom (defaultVolume, cooldownSeconds, minPermissionLevel, triggerWord from clip) |
| 16b | Row detail table examples (chat word {word}, volume {volume}, {seconds} s) | page en.json trigger/volume/seconds; SoundClipRow.vue detail |
| 25a | Synced field, label humanized "Synced"; All label humanized "All" | PlaySoundAction.cs:55-58; StopSoundAction.cs:39-41; stepWords.ts:84-89 fieldLabel falls back to humanize (lib/text.ts:14-22); schema en.json:2060 synced help |
| 25b | Command picks the pipeline in **Pipeline** | create-a-command page (reviewed) / NewCommandDialog.vue:202-218 |
| 31a | Delete dialog lists categories with count and names | blastLines.ts:36-45; locales/en.json:159-163 blast.line |
| 34 | Troubleshooting checks: switch, level, cooldown, whole message, overlay | rows 20-24, 29; SoundClipService.cs StopAsync presence note (overlay-only output) |
| 17 | A new clip starts with cooldown 0, Everyone, trigger none | ISoundClipService.cs UploadSoundClipRequest defaults; add dialog sends none of them |
| 18 | Cooldown max 86400 | SoundClipService.cs:32,205,249 |
| 19 | Who may play it lists rungs | permissions.ts:31-40 rungNames |
| 20 | Cooldown and level apply only to chat word | ChatMessageHandler.cs:1410-1426; PlaySoundAction.cs has no check |
| 21 | Whole-message match, no prefix, case-insensitive | ChatMessageHandler.cs:205-215; SoundClipService.cs NormalizeTriggerWordAsync lowercases |
| 22 | Space / 50 chars / duplicate rules | soundClipForm.ts editProblem; page en.json problem.*; SoundClipService.cs:417-452 |
| 23 | Below level: silent; cooldown: nothing; broadcaster and mods exempt | ChatMessageHandler.cs:1414-1421,1885-1886 |
| 24 | Matched word does not fire chat trigger | ChatMessageHandler.cs:205-215 (return) |
| 25 | Play sound / Stop sound steps and field labels | PlaySoundAction.cs:32-64; StopSoundAction.cs:26-42; schema en.json:2052-2068,2370-2378,3403,3429,3446,3473,3531, Volume label |
| 26 | Volume override 0-100, blank uses clip volume | PlaySoundAction.cs:82; SoundClipService.cs:362-364 |
| 27 | Wait max 60 s | PlaySoundAction.cs:27,107-110 |
| 28 | Disabled/missing clip fails | SoundClipService.cs:337-352; PlaySoundAction.cs:102-103 |
| 29 | Switch off stops chat and pipeline play | ResolveForPlaybackAsync filters IsEnabled |
| 30 | Master volume multiplies, default 100, under Audio levels on Overlays | IChannelAudioMixService.cs:66-67; AudioMixDefaults.cs:22; OverlaysView.vue:157-159; overlays en.json audioMix |
| 31 | Delete counts uses, nothing text, Delete sound clip, file removed | SoundsView.vue askDelete/confirmDelete; page en.json delete.*; SoundClipService.cs:268-286 |
| 32 | Pipeline step referencing deleted clip fails | no FK (ISoundClipService.cs blast radius summary); ResolveForPlaybackAsync NOT_FOUND |
| 33 | Commands and rewards play via pipeline | rewards page (map) table "Runs that pipeline"; create-a-command "Runs a pipeline" |
