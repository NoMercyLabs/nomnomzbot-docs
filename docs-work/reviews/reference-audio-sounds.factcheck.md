# Fact check: src/content/reference/en/audio/sounds.mdx
Verdict: PASS
Reviewed: src/content/reference/en/audio/sounds.mdx
Reviewed-SHA: ff0b35829c5551d5

## Round 2

- Finding 1 fixed: page lines 67-76 say each Edit field shows the clip's current value, and the column is now "A new clip starts with" (80 from blankAddForm, 0 / Everyone / empty from ISvc UploadSoundClipRequest defaults). Matches Form editFormFrom.
- Finding 2 fixed: **Synced** row added (page line 115). Label: no pipelineField.synced key, so stepWords.ts:84-89 fieldLabel falls back to lib/text.ts humanize("synced") = "Synced". Text matches Schema:2060 help.
- **All** (page line 120): same fallback, humanize("all") = "All"; SSA Fields "all".
- Row detail table (lines 54-59): SoundClipRow.vue:38-48 and page en.json trigger "chat word {word}", volume "volume {volume}", seconds "{seconds} s". Supported.
- Command **Pipeline** field: dashboard/src/views/dashboard/commands/i18n/en.json:58 "Pipeline". Supported. Reward settings: cross-page, not checked here.
- Delete dialog lists each kind with a count and names: scripts/components/blastLines.ts:29-50. Supported.
- Troubleshooting checklist (switch, level, cooldown, whole message, overlay open): Svc:340/344 IsEnabled; CMH FireSoundTriggerAsync; CMH:205-215. Supported.
- The round 1 findings below are kept as history and are resolved.

## Round 1 findings (resolved)

1. Page line 65, Edit table, **Volume (0 to 100)** default "80". The Edit dialog fills the field with the clip's saved volume (dashboard/src/views/dashboard/sounds/soundClipForm.ts editFormFrom: `defaultVolume: Number(clip.defaultVolume)`), not 80. Same applies to the other Edit rows: each shows the clip's current value (cooldownSeconds, minPermissionLevel, triggerWord from the clip). Correct: the Default column for the Edit table should say "The clip's current value", or name 80 / 0 / Everyone / empty as the values a new clip starts with.
2. Page lines 101-106, **Play sound** field table lists four fields. The step has a fifth field, `synced` (PlaySoundAction.cs Fields; schema en.json:2060 help "Start this sound at the visual cue, outside the shared audio queue."). A table that presents the step's fields and leaves one out is partial. Add the row, with its label from schema en.json (no field label for `synced` was found in the labels block near 3403-3531; check it, or describe it by its help text).

## Product defects

- None new. Writer note stands: the API has preview and stop endpoints for sound clips with no control on the Sounds page (not checked this run).

## Claims

Product paths relative to C:\Projects\NoMercyLabs\nomnomzbot. Page en.json = dashboard/src/views/dashboard/sounds/i18n/en.json. Form = dashboard/src/views/dashboard/sounds/soundClipForm.ts. Svc = server/src/NomNomzBot.Infrastructure/Sound/SoundClipService.cs. ISvc = server/src/NomNomzBot.Application/Sound/Services/ISoundClipService.cs. CMH = server ChatMessageHandler.cs. PSA = PlaySoundAction.cs. SSA = StopSoundAction.cs. Schema = dashboard/src/i18n/schema/en.json.

| Claim | Supported by | Status |
| --- | --- | --- |
| Sounds page title | page en.json title | Supported |
| Clips play on the overlay | CMH FireSoundTriggerAsync (overlay.PlaySoundAsync); PSA ExecuteAsync | Supported |
| Moderator and up open and change; VIP may be allowed read | ActionDefinitionSeeder.cs:549-550; sounds route.ts:19 meta sounds:read | Supported |
| New/switch/Edit/Delete shown only with write | SoundsView.vue:125; SoundClipRow.vue:54-79 (GatedSwitch, v-if can) | Supported |
| New sound clip dialog, fields, Add sound clip | page en.json dialog.newTitle/file/name/displayName/volume/create | Supported |
| Short name used by commands and pipelines, cannot change | page en.json dialog.nameHelp; ISvc UpdateSoundClipRequest has no Name | Supported |
| New clip switched on | Svc:204 IsEnabled = true | Supported |
| mp3/ogg/wav, 10 MB, 3 minutes, content sniffed | SoundClipAudioRules.cs:24, 27, 63-76 | Supported |
| Short name and display name required | Form addProblem | Supported |
| Duplicate short name refused | Svc:152-161 DUPLICATE_NAME | Supported |
| Volume whole 0-100, add default 80 | Form maxVolume, volumeProblem, blankAddForm | Supported |
| Refusal shows in dialog | SoundClipAddDialog.vue:50-64 | Supported |
| At most 100 clips | Svc:31, 121-123 | Supported |
| Empty text "No sound clips yet." | page en.json empty | Supported |
| Row: display name title; detail short name, chat word, volume, seconds | SoundClipRow.vue:38-52 | Supported |
| 50 per page, Show more sound clips | SoundsView.vue:43, 118; page en.json more | Supported |
| Edit dialog title, file and short name stay | page en.json dialog.editTitle/editDescription | Supported |
| Edit fields show current values; a new clip starts with its add volume, 0, Everyone, empty | Form editFormFrom, blankAddForm; ISvc UploadSoundClipRequest defaults | Supported (round 2) |
| Cooldown max 86400 | Svc:32, 205, 249 | Supported |
| Who may play it lists rung names, default Everyone | SoundClipEditDialog.vue:132-141; api/permissions.ts rungNames; ISvc UploadSoundClipRequest default "Everyone" | Supported |
| Cooldown and level apply only to the chat word | CMH FireSoundTriggerAsync; PSA has no level or cooldown check | Supported |
| Whole-message match, no prefix, case-insensitive | CMH:205-215 TryGetValue(text); IChannelRegistry.cs:208-209 OrdinalIgnoreCase | Supported |
| Space / 50 characters messages | Form editProblem; page en.json problem.triggerHasSpace/triggerTooLong; Svc:427-438 | Supported |
| Duplicate chat word refused | Svc:440-449 DUPLICATE_TRIGGER | Supported |
| Below level: no sound, no reply; cooldown: nothing; broadcaster and mods skip cooldown | CMH FireSoundTriggerAsync; CMH IsCooldownExempt | Supported |
| Matched word does not also fire a chat trigger | CMH:205-215 return | Supported |
| Play sound / Stop sound labels; Sound clip, Volume, Wait for finish (true/false), Handle | Schema:3403, 3429, 3446, 3473, 3527, 3531 | Supported |
| Play sound field list complete, incl. Synced | PSA Fields; Schema:2060; stepWords.ts:84-89 humanize fallback | Supported (round 2) |
| Stop sound All | SSA Fields "all"; humanize fallback | Supported (round 2) |
| Command Pipeline field | commands/i18n/en.json:58 | Supported (round 2) |
| Volume override 0-100, blank uses clip volume | PSA volumeOverride; Svc:362-364; Schema:2063 help | Supported |
| Wait at most 60 s | PSA MaxWaitMs, Math.Min | Supported |
| Handle lets Stop sound stop one playback | Schema:2057 help; SSA handle | Supported |
| Stop sound: handle, or all | SSA Fields and ExecuteAsync | Supported |
| Play sound fails when clip off or missing | Svc:337-352; PSA resolve failure | Supported |
| Switch off stops chat and pipeline play | Svc:340, 344 filter IsEnabled | Supported |
| Clip volume times master volume, default 100, Audio levels on Overlays | ApplyToClipVolume (IChannelAudioMixService.cs:66-67); AudioMixDefaults.cs:22; overlays en.json audioMix.open | Supported |
| Delete counts uses; nothing text; Delete sound clip; file removed | SoundsView.vue:91-95, 172-175; page en.json delete.*; Svc:281-285 | Supported |
| Delete dialog title Delete with display name | page en.json delete.title "Delete {name}?" | Supported |
| Pipeline step naming a deleted clip fails | Svc ResolveForPlaybackAsync NOT_FOUND (deleted clip not matched) | Supported |
| Commands and rewards play clips through a pipeline | Map pages (create-a-command, rewards); not product code opened this run | Not checked (cross-page) |
