# Fact check: /reference/audio/text-to-speech (round 7)
Verdict: PASS
Reviewed: src/content/reference/en/audio/text-to-speech.mdx
Reviewed-SHA: ddc3f6d41d1ab8c6

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
