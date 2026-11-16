# Current independent fact check

Verdict: PASS
Reviewed: src/content/reference/en/audio/text-to-speech.mdx
Reviewed-SHA: 4d7ec8c974212b595d577378c1409f4f06135aa8793ffd6c5a598ee73e82044f
Reviewed-SHA256: 4d7ec8c974212b595d577378c1409f4f06135aa8793ffd6c5a598ee73e82044f
Reviewed-Date: 2026-11-05
Reviewer: independent media-section reviewer
Product: 54da8b6318de63b5205a0ff8db35e0b9045dd959 plus preserved current music UI edits

The full article was read in sidebar order. Consequential defaults, permissions, prerequisites, state lifetime and effects were traced against current source; repaired findings were re-read before this verdict. This is source verification, not a live-channel or visible/audible output test.

- server/src/NomNomzBot.Domain/Tts/Entities/TtsConfig.cs:33-84 defines enabled/Edge/500-character/censor/role defaults; server/src/NomNomzBot.Infrastructure/Tts/TtsDispatchService.cs:292-440 enforces enabled, bits, role, cooldown, length and approval.
- server/src/NomNomzBot.Infrastructure/Tts/TtsDispatchService.cs:1265-1287,1351-1390 distinguishes persistent usage-ledger cooldown, bot/paid bypass and per-viewer voice assignment; server/src/NomNomzBot.Infrastructure/Rewards/EventHandlers/RewardRedeemedHandler.cs:397-416 passes AlreadyPaid while still using the same RequestSpeakAsync/approval path.
- dashboard/src/views/dashboard/tts/RulesPanel.vue:106-119 and SpeakingPanel.vue:270-277 expose Read usernames, Moderators approve first and Skip bot messages. server/src/NomNomzBot.Infrastructure/Tts/TtsConfigService.cs:147-150 stores the first/last preferences, but no runtime reads were found; the repaired guide states that limitation.
- server/src/NomNomzBot.Infrastructure/Tts/TtsDispatchService.cs:431-440,607-620,640-710,806-864 holds accepted requests and implements explicit approval; server/src/NomNomzBot.Api/Controllers/V1/TtsQueueController.cs:31-105 exposes review APIs. No dashboard queue consumer was found beyond generated schema. server/src/NomNomzBot.Infrastructure/Tts/PipelineActions/PlayTtsAction.cs:222-249 also uses RequestSpeakAsync.
- server/src/NomNomzBot.Infrastructure/Content/Widgets/Assets/tts_caption.vue:8-62 and server/src/NomNomzBot.Infrastructure/Platform/Eventing/EventResponseExecutor.cs:350-400 separate speech playback/captions and channel narration/viewer words.

Source paths without a repeated layer prefix in a bullet are relative to its preceding Infrastructure or dashboard scope. The section report records method, repaired findings, external sources and remaining product limitations: docs-work/overhaul/review-automation-media-integrations.md.

## Historical evidence

Older hashes, verdicts and values below are retained for history and are not the current review.

# Fact check: /reference/audio/text-to-speech (round 7)
Verdict: PENDING
Reviewed: src/content/reference/en/audio/text-to-speech.mdx
Reviewed-SHA: 885aa99be0654098eaaf8f63b617edaccdef69848fe6e30dd41ea34452277403

## 2026-11-05 author source verification

Author source audit complete; independent verdict pending. This hash binds the current text, not the historical PASS below. The article was read in full and revised toward the user's explainer style while preserving precise reference detail. TtsDispatchService.cs; TtsConfig.cs; TtsConfigService.cs; tts_caption.vue. TTS caption is the required speech source; trigger, viewer words, bot narration, paid gates and reset behavior were traced.

The section inventory and known implementation gaps are in [automation-media-integrations.md](../overhaul/automation-media-integrations.md). This is source verification, not a live-channel execution claim. Independent review must account for product changes after the original author pass at b12f4f696.

## Historical review (SHA 1f212ff90dde53a4)

Historical verdict: PASS. The earlier evidence below is retained as history and is superseded where the current article or source changed.

## Round 7 notes

- Lines 35-36 now name seven checks and make no voice claim. The round 6 finding (the step's voice replaces the channel voice) no longer applies.
- Line 189 says each other source goes through the same settings. All three call the same dispatch: the command reply (server/src/NomNomzBot.Infrastructure/Chat/EventHandlers/ChatMessageHandler.cs:972), the code script (server/src/NomNomzBot.Infrastructure/CustomCode/ScriptHostBridge.cs:726) and the pipeline step (PlayTtsAction.cs:201). True.
- The labels are the real ones. They were found in the TTS en.json by the round 5 scripted search: Read messages aloud, Who may be heard, Minimum bits, Cooldown, Maximum characters, Censor profanity.
- The rest of the page: I reread lines 1-60 and 182-211, and they match round 5. The middle part was not reread line by line. Round 5's rows stand for it.

## Product defects

- The step's **voice** field can give a bot-written line another voice (PlayTtsAction.cs:119-129; D:976-977). This conflicts with the one-bot-voice rule. The page does not describe it.
- Not checked as a defect, but noted: a command reply and a script line are sent with standing "everyone" and 0 bits (ChatMessageHandler.cs:972-980; ScriptHostBridge.cs:715-716). So a channel with **Who may be heard** above Everyone, or with **Minimum bits** set, refuses these bot lines. The page sentence "goes through the same settings" stays true.

## Claim table (changed lines)

D = server/src/NomNomzBot.Infrastructure/Tts/TtsDispatchService.cs; PlayTtsAction.cs = server/src/NomNomzBot.Infrastructure/Tts/PipelineActions/PlayTtsAction.cs.

| Claim | Supported by | Status |
| --- | --- | --- |
| The step sets the text it reads | PlayTtsAction.cs:104-116 | true |
| Read messages aloud applies to the step | PlayTtsAction.cs:201-204; D:106-113 | true |
| Who may be heard applies | PlayTtsAction.cs:184-187; D:130-141 | true |
| Minimum bits applies | PlayTtsAction.cs:180-183; D:117-128 | true |
| Cooldown applies to a viewer's lines | D:884-896 | true |
| Maximum characters applies | D:167-176, D:315-326 | true |
| Censor profanity applies | D:183-195, D:339 | true |
| Pronunciation rules apply | D:637-677 | true |
| Command reply, speak step and script go through the same settings | ChatMessageHandler.cs:972; ScriptHostBridge.cs:726; PlayTtsAction.cs:201 (all RequestSpeakAsync) | true |
| Rest of the page | round 5 rows (unchanged lines) | true |
