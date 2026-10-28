# Claims: /reference/audio/text-to-speech

Paths are in the product repo. T = dashboard/src/views/dashboard/tts. E = T/i18n/en.json. D = server/src/NomNomzBot.Infrastructure/Tts/TtsDispatchService.cs. C = server/src/NomNomzBot.Infrastructure/Tts/TtsConfigService.cs. EN = server/src/NomNomzBot.Domain/Tts/Entities/TtsConfig.cs. O = server/src/NomNomzBot.Domain/Tts/Entities/TtsConfigOptions.cs.

| # | Claim | Source |
| --- | --- | --- |
| 1 | Sidebar label "Text to speech" | dashboard/src/layouts/dashboard/navigation.ts:157-159; dashboard/src/i18n/locales/en.json:836 |
| 2 | Header badge "Text to speech is on/off" from isEnabled | T/TtsView.vue:197-201; E:5-6 |
| 3 | Five tabs Overview, Voices, Rules, Pronunciation, Keys (5 of 5) | T/TtsView.vue:59-65; E tabs |
| 4 | Overview = Spoken history + Settings; Rules = Speaking, Message rules, Rewards that speak; Pronunciation = lexicon; Keys = keys panel | T/TtsView.vue:131-157, 205-271 |
| 5 | Speaker overlay row opens OBS page Required overlays | T/TtsView.vue:247-254; E settings.overlay; dashboard/src/views/dashboard/obs/i18n/en.json:40 |
| 6 | Mod/Lead mod/Editor/Broadcaster may open and change; broadcaster may let VIP read | server/src/NomNomzBot.Infrastructure/Content/Identity/ActionDefinitionSeeder.cs:293-295 (same MFloor(Mod, Vip)/M(Mod) pattern as commands:read/write :179-180) |
| 7 | VIP sees but cannot change: controls disabled without tts:config:write | T/SpeakingPanel.vue (disabled="!writable"); T/RulesPanel.vue (disabled=!can write) |
| 8 | Keys tab shows only with write | T/TtsView.vue:56,73-78,264 |
| 9 | Bot lines use the channel voice by default; viewer's own words (reward typed text) in the viewer's own voice; a Read aloud (TTS) pipeline step sets its text and goes through the same dispatch, so Read messages aloud, Who may be heard, Minimum bits, Cooldown (viewer lines), Maximum characters, Censor profanity and pronunciation rules apply; command reply, step and script all call RequestSpeakAsync (ChatMessageHandler.cs:972, ScriptHostBridge.cs:726) (step name pipelines.mdx:298; PlayTtsAction.cs:104-115, :170-198; D:106-113 enabled check etc.) | D:966-1008 (override first :976-977, Viewer branch :979); server/src/NomNomzBot.Infrastructure/Tts/PipelineActions/PlayTtsAction.cs:119-137,197,325-331 |
| 10 | Viewer with no voice gets random English/multilingual voice of the channel provider, saved | D:990-999, D:1010-1016 |
| 11 | !voice lets a viewer pick; toggle gates it | server/src/NomNomzBot.Infrastructure/Tts/Builtins/VoiceBuiltin.cs:30-46 |
| 12 | Off: bot reads nothing (dispatch rejects when disabled) | D:106-113; E speaking.enabled |
| 13 | New channel default on | EN:33 |
| 14 | Voices: search, language chips All/English/Dutch/German/French/Spanish/Other (7 of 7) | T/VoicesTab.vue:58-115,235-269; E voices.family |
| 15 | Click row sets channel voice (with write) | T/VoicesTab.vue:203-206; E voices.hint |
| 16 | Load more voices | T/VoicesTab.vue:333; E voices.more |
| 17 | Follows platform voice until picked; panel text | C:136-140; EN:53; E voices.current.platform; Application/Tts/Dtos/TtsConfigDtos.cs:20-22 |
| 18 | Follow the platform voice switch puts it back | C:137-138; T/RulesPanel.vue follow row |
| 19 | Speaking rows 6 + switches; defaults shown under row | T/SpeakingPanel.vue:152-246 |
| 20 | Default isEnabled on, mode self_host, provider edge, minPermission everyone, max 500, cooldown 0 | EN:33,41,45,67,71,74; O:23 |
| 21 | Provider names Microsoft Edge, Azure, ElevenLabs | dashboard/src/i18n/locales/en.json:57-59 |
| 22 | Free bot voice offers edge; own key offers azure/elevenlabs | T/SpeakingPanel.vue KEYLESS_PROVIDERS filter (providers computed); O:33 |
| 23 | Standings Everyone..Broadcaster (5 of 5) | O:38-45; E speaking.standing |
| 24 | Max characters 1 to 500 | O:20; C:101-106 |
| 25 | Cooldown 0 to 3600, viewer lines only | O:23,26; C:107-112; D:884-896 |
| 26 | Bot line cut at last word; viewer line refused | D:167-177, D:278-290 |
| 27 | Out-of-range refusal shown under row with reason text | T/SpeakingPanel.vue:215-237 (FieldError via linesFor); E config.error.cooldownOutOfRange |
| 28 | Message rules defaults: follow on (DefaultVoiceId null), self-service on, censor on, min bits 0 | EN:53,56,62,85; C:893; C:156 |
| 29 | Min bits 0 to 1,000,000 | C:86,113-118; E config.error.minBitsOutOfRange |
| 30 | Rewards skip standing, bits, cooldown (AlreadyPaid) | server/src/NomNomzBot.Infrastructure/Rewards/EventHandlers/RewardRedeemedHandler.cs:378-397; D:117-145, D:892 |
| 31 | Censor removing all text = nothing read | D:183-196 |
| 32 | Reset to defaults in both panels, note text (grayed-out claim removed) | T/TtsResetFooter.vue; T/SpeakingPanel.vue:249-251; T/RulesPanel.vue:383-385; E speaking.reset |
| 33 | Reset resets every panel setting except Follow the platform voice; keeps voice, keys, region, lexicon, viewer voices | C:185-200 (DefaultVoiceId not in the reset list) |
| 33a | Maximum characters "up to 500" (a tier may lower it) | O:20; server/src/NomNomzBot.Infrastructure/Tts/TtsCharacterCap.cs ResolveAsync Math.Min |
| 34 | Rewards that speak lists rewards with cost, toggle speaksViaTts | T/TtsRewardsPanel.vue:395-441; E rewards |
| 35 | Speaking reward reads viewer input in viewer's own voice | RewardRedeemedHandler.cs:174-185, :390 |
| 36 | Empty rewards text | E rewards.empty |
| 37 | Add rule dialog, Phrase max 100, Say instead max 200, Match word/exact (2 of 2) | T/LexiconRuleDialog.vue:864, 937-964; E lexicon |
| 38 | Add rule disabled until both fields filled; closes on success | T/LexiconRuleDialog.vue:878, 913-915 |
| 39 | Duplicate refused with text (409) | T/LexiconRuleDialog.vue:865,892-897; E lexicon.duplicate |
| 40 | Row play button reads phrase in channel voice; edit opens Edit dialog with Save rule | T/LexiconPanel.vue:738-740,814-823; T/LexiconRuleDialog.vue:929-931 |
| 41 | Delete confirm dialog, Delete rule | T/LexiconPanel.vue:824-848; E lexicon.confirm* |
| 42 | Keys: Azure speech key, ElevenLabs key, Azure region, Save key, toast, box clears, badge Key stored | T/KeysPanel.vue:567-584, 606-677; E keys |
| 43 | Key never echoed; placeholder "A key is stored. Type to replace it." | Application/Tts/Dtos/TtsConfigDtos.cs:18-19,76; T/KeysPanel.vue:633-635 |
| 44 | Remove key deletes; Azure also clears region | C:277-311 |
| 45 | Channel name spelling, Preview, Save spelling, toast, empty = as written | T/KeysPanel.vue:590-595, 679-706; E keys.spelling* |
| 46 | Spoken history newest first, 50 per page, Show older messages | server/src/NomNomzBot.Api/Controllers/V1/TtsHistoryController.cs:31-39; dashboard/src/api/tts.ts:52; T/HistoryPanel.vue:1032-1044 |
| 47 | Row shows text, requester, voice, relative time; texts for no text and empty | T/HistoryPanel.vue:1005-1028; E history |
| 48 | Command reply "Read it aloud" speaks | dashboard/src/views/dashboard/commands/i18n/en.json:43; server/src/NomNomzBot.Infrastructure/Chat/EventHandlers/ChatMessageHandler.cs:667-670 |
| 49 | Pipeline speak step and script calls dispatch through the same service | server/src/NomNomzBot.Infrastructure/Tts/PipelineActions/PlayTtsAction.cs:180-197; server/src/NomNomzBot.Infrastructure/CustomCode/ScriptHostBridge.cs:652-679 |
