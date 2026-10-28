# Claims: /reference/code/sdk-chat-music-voice

Product repo: C:\Projects\NoMercyLabs\nomnomzbot (master, read only). Paths are relative to `server/src/`.
Abbreviations: SRS = NomNomzBot.Infrastructure/DevPlatform/SdkRuntimeSurface.cs; JSE = NomNomzBot.Infrastructure/CustomCode/Jint/JintScriptExecutor.cs; SHB = NomNomzBot.Infrastructure/CustomCode/ScriptHostBridge.cs; SCB = NomNomzBot.Infrastructure/CustomCode/ScriptCapabilityBroker.cs; STSP = NomNomzBot.Infrastructure/CustomCode/ScriptTtsSegmentParser.cs.

| Claim | Page section | Proof | Verdict |
| --- | --- | --- | --- |
| Calls live under nnz.api.chat, music, tts | intro | SRS:931-940 | true |
| Custom Code on, grants added on save | Before you start | Linked to sdk-script-basics (already checked there); SCB:46-77 FeatureGate on each key | true |
| Bad values follow the one rule on Script basics; speakSequence is the only exception on this page | Before you start | Rule claims in reference-code-sdk-script-basics.claims.md (One rule rows); every other call here uses need() for required args (JSE:188-189 chat, JSE:199-200 music, JSE:218 tts.speak, JSE:232 setVoice) and skips optional ones (JSE:220, 231, 232, 234-235); only speakSequence skips need() (JSE:227-228) | true |
| Empty text in chat.send: invalid_argument, script goes on | Send a line | SHB:482-488 ValidateMessage `IsNullOrWhiteSpace` -> Fail(InvalidArgument) | true |
| A name that matches no viewer: failed call with not_found, script goes on | Speak a line, Read voice, Set voice | SHB:658 (asUser), SHB:1002 (getVoice), SHB:1085 (setVoice) Fail(NotFound) | true |
| speakSequence exception: list required but checked by the bot; left-out or null list does not stop the run; left-out, null or empty list, over 20 parts, part without text, field of wrong type (rate as text) are invalid_argument; call gives null, script goes on | Several voices | JSE:228 (`segments === undefined ? null`, no need()); STSP:31-33 blank -> null; STSP:49-50 not array or empty; STSP:51-55 over MaxSegments 20; STSP:76-83 part without string text; STSP:85-108 voice not string, rate/pitch/breakAfterMs not numbers; SHB:686-695 Fail(InvalidArgument) | true |
| setVoice: userIdOrLogin is required; left out stops the run with "tts.setVoice needs a user id or login" | Set voice | JSE:232 need('tts.setVoice', 'a user id or login', ...) | true |
| durationMs 0 for a line that waits for approval | Speak a line | NomNomzBot.Infrastructure/Tts/TtsDispatchService.cs:622-630 (Queued outcome, duration 0) | true |
| durationMs 0 for a test run | Speak a line | CustomCode/CaptureScriptHostBridge.cs:103-104 "durationMs 0 because nothing was synthesized" | true |
| Otherwise durationMs is the measured length (no browser-voice case; audio is always made on the server) | Speak a line | Tts/TtsDispatchService.cs:635 "the audio always comes from the server, never the browser"; :840-846 synth.DurationMs; Domain/Tts/Entities/TtsConfig.cs:38 client_edge read as self_host | true |
| asUser login/id only for that viewer's own words | Speak a line | Rule bot-speaks-in-one-voice; SHB:650-662 (asUser picks TtsSpeaker.Viewer) | true |
| chat.send / chat.reply return nothing; grants chat.send / chat.reply | Chat table | SRS:751-760; JSE:188-189; SCB:46-47 | true |
| Empty text refused invalid_argument | Send a line | SHB:482-488 | true |
| Not reaching chat sets upstream_failed | Send a line | SHB:503-506 | true |
| Reply threads; mention fallback; no message = normal line | Reply | SHB:508-538; SRS:755-758 | true |
| Chat values keys list | Chat values | NomNomzBot.Infrastructure/DevPlatform/ChatCommandVariableKeys.cs Keys; NomNomzBot.Infrastructure/Chat/EventHandlers/ChatMessageHandler.cs:1816-1856 | true |
| Chat trigger also seeds them | Chat values | NomNomzBot.Infrastructure/CustomCode/CodeScriptTriggerResolver.cs:136-138 | true |
| args.N one-based | Chat values | ChatMessageHandler.cs:1858-1861 | true |
| Music calls, results, grants (playNow = actions.invoke:play_track_once) | Music table | SRS:763-773; JSE:198-201, 357; SCB:48-49 | true |
| nowPlaying fields and null | nowPlaying | SRS:76-93; SHB:233-260 | true |
| queue by title/artist/link; true/false | Request a song | SRS:767-769; SHB:419-443 | true |
| queue asked as trigger user with Everyone role; higher-role service refuses | Request a song | SHB:430-438 (requesterRoleLevel: 0, comment) | true |
| playNow skips queue; true/false; runs play_track_once action | Play now | SRS:771-773; JSE:200 | true |
| TTS calls, results, grants | TTS table | SRS:806-828; JSE:218-241, 365; SCB:58-77 | true |
| Same checks as other TTS lines | TTS | SHB:665-666 comment + DispatchSpeak via ttsDispatch.RequestSpeakAsync SHB:722-727 | true |
| speak parameters; only text required | Speak a line | SRS:808-811; JSE:218-226; SHB:625-645 | true |
| Bot's own voice unless asUser; 'viewer' = trigger viewer; login/id = that viewer's voice; unknown = null with not_found | Speak a line | SHB:650-662 | true |
| Rate/pitch per line, not persisted | Speak a line | SHB:638-641 comment; JSE:214-217 | true |
| Result fields voiceId, characterCount, durationMs | Speak a line | SRS:95-105; SHB:722-735 | true |
| speakSequence 1-20 parts, one clip, own voice each | Several voices | SRS:814-816; STSP:24, 49-55 | true |
| Segment fields and breakAfterMs 0-10000, ignored after last | Several voices | SRS:107-122; STSP:27, 110-114 | true |
| Invalid list/part gives null + invalid_argument | Several voices | STSP:30-123; SHB:686-695 | true |
| getVoice default trigger user; null on channel default or no match | Read voice | SRS:818-820; SHB:991-1015 | true |
| setVoice; no voiceId clears; false on no viewer / unknown voice | Set voice | SRS:822-824; SHB:1076-1117; JSE:233 | true |
| listVoices max 100; provider e.g. Edge; full locale exact, language prefix | List voices | SRS:826-828; SHB:93, 1021-1072 | true |
| Empty list on failure; fields voiceId, displayName, locale, gender | List voices | SHB:1047-1048, 1062-1070; SRS:204-214 | true |
| nnz.time.sleep pauses at most 5 s (clamped), so a longer line still plays when chat posts | Speak, then post | JSE:39 MaxSleepMs = 5000; JSE:488-492 Math.Clamp(ms, 0, MaxSleepMs); SRS:620-632 | true |
| durationMs 0 or speak null posts at once | Speak, then post | example `if (spoken)` guard; sleep(0) clamps to 0 (JSE:492); durationMs 0 for a test run or a waiting line (CaptureScriptHostBridge.cs:103-104; TtsDispatchService.cs:622-630) | true |
| Bot posts in the channel's one bot voice | Chat, example | SHB:490-500 sends via chatProvider as the bot; rule bot-speaks-in-one-voice | true |
