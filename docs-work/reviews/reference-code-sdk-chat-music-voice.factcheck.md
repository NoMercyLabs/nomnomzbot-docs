# Fact check: src/content/reference/en/code/sdk-chat-music-voice.mdx
Verdict: PASS
Reviewed: src/content/reference/en/code/sdk-chat-music-voice.mdx
Reviewed-SHA: e3a379fc6ffbb4b3

Paths are under server/src/NomNomzBot.Infrastructure/ unless named otherwise. JSE = CustomCode/Jint/JintScriptExecutor.cs, SHB = CustomCode/ScriptHostBridge.cs, CAP = CustomCode/CaptureScriptHostBridge.cs.

| Claim | Page line | Supported by | Status |
| --- | --- | --- | --- |
| Calls live at nnz.api.chat / music / tts | 6 | JSE:187-201, 215-238 | true |
| Grant added on save for named calls; grant names per call | 18, 29-30, 66-68, 105-109 | JSE:347-372 (ApiMethodCapabilities) | true |
| Left-out/null required value stops the run (need throws) | 20 | JSE:73, 76-79 | true |
| speakSequence is the only exception: null sent to host, not thrown | 21, 158-160 | JSE:228-230 (`JSON.stringify(segments === undefined ? null : segments)`) | true |
| chat.send: empty text is invalid_argument, script goes on | 35 | SHB:483-489 ValidateMessage | true |
| chat.send not delivered sets upstream_failed | 36 | SHB:492-505 FailNotSent | true |
| chat.reply threads; on refusal posts with a mention; no message falls back to normal line | 40-42 | SHB:507-535 | true |
| Chat variable keys list | 48-60 | DevPlatform/ChatCommandVariableKeys.cs:26-36; sample shapes NomNomzBot.Application/Abstractions/Templating/TemplateHelperSamples.cs:131-151 | true |
| nowPlaying gives null when nothing plays; fields track, artist, album, durationMs, progressMs, isPlaying, requestedBy, provider | 74-85 | SHB:241-259; JSE:201 | true |
| queue takes title/artist/link, true on queued, false on refusal | 89-90 | SHB:418-440; JSE:199 | true |
| queue asks as the trigger viewer with role Everyone; higher-role service refuses | 92-93 | SHB:428-434 (`requesterRoleLevel: 0`) | true |
| playNow runs play_track_once action, grant actions.invoke:play_track_once, true/false | 97-99 | JSE:200, 357 | true |
| speak: only text required; extra args optional | 116-117 | JSE:217-224 | true |
| voiceId override per line | 121 | SHB:638-639 | true |
| rate/pitch per line only, not saved to channel settings | 122-123, 132-133 | SHB:640-644 (comment and request fields only) | true |
| asUser: absent/bot = bot voice; 'viewer' = trigger viewer; login/id = that viewer's saved voice | 124-128 | SHB:646-662 | true |
| Unknown asUser name: not_found, null, script goes on | 130 | SHB:655-659 | true |
| Refused line gives null | 135 | SHB:712-718 DispatchSpeak | true |
| Result fields voiceId, characterCount, durationMs | 138-142 | SHB:720-731 | true |
| durationMs 0 on a test run | 142 | CAP:104, 113, 132, 151 | true |
| durationMs 0 for a line that waits for approval | 142 | Tts/TtsDispatchService.cs:622-630 (Queued outcome, 0) vs 840-846 (Dispatched, synth.DurationMs) | true |
| speakSequence 1-20 parts, one clip, own voice per part | 146-147 | CustomCode/ScriptTtsSegmentParser.cs:24, 46-51; SHB:681-703 | true |
| Segment fields text (required), voice, rate, pitch, breakAfterMs 0-10000 | 151-155 | ScriptTtsSegmentParser.cs:27, 76-121 | true |
| Last part ignores breakAfterMs | 155 | Tts/TtsSegmentSsml.cs:47 (`!isLast`) | true |
| Same result as speak, or null | 157 | SHB:703 DispatchSpeak | true |
| invalid_argument for null/empty list, >20 parts, part without text, wrong-typed field | 161-166 | ScriptTtsSegmentParser.cs:31-33, 46-51, 76-108; SHB:672-676 | true |
| getVoice gives voiceId, displayName; default trigger viewer; null on default voice; unknown name not_found | 172-175 | SHB:991-1019; JSE:231 | true |
| setVoice requires user, error text "tts.setVoice needs a user id or login" | 181 | JSE:232 with need() JSE:77 | true |
| setVoice: no voiceId clears; unknown name not_found gives false; unknown voice false | 180-183 | SHB:1076-1114; JSE:232 (`=== 'ok'`) | true |
| listVoices at most 100, both optional, provider filter, full locale exact, bare language prefix, empty on failure | 187-193 | SHB:93, 1021-1072; JSE:233-238 | true |
| Voice fields voiceId, displayName, locale, gender | 195 | SHB:1064-1070 | true |
| nnz.time.sleep waits at most 5 seconds | 200 | JSE:39 (MaxSleepMs 5000), 138 | true |
| Example: speak then sleep(durationMs) then send; null skips sleep | 203-215 | JSE:138, 217-224 | true |
| Bot speech in the channel's one bot voice | 25, 126, 217 | SHB:647-648 (TtsSpeaker.Bot default) | true |

## Links
/reference/code/sdk-script-basics, /reference/audio/text-to-speech, /reference/music/music-player: each is a row of docs-work/map.md.

## Conventions
No people's names, no action keys, no numbered levels, no license name, no hosting or price mention, American English, no NoMercyBot spelling. Example statements end with semicolons, blank lines between steps, no object literal with 3+ entries, call nesting at most two deep.

## Notes (not blocking)
- Line 155: the ElevenLabs provider renders no silence for breakAfterMs (Tts/ElevenLabsTtsProvider.cs:115). "Silence after this part" holds for the SSML providers only. A short qualifier would be more exact.
- Line 174: a viewer on the default voice also sets the not_found error code (SHB:1007-1012); the null result is stated correctly.
