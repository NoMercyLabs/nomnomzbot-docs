Route: /reference/audio/text-to-speech
Reader: A streamer or moderator who knows stream bots, has signed in to the selected channel, and is new to this feature in NomNomzBot.
Type: task
Arrives-with: How do I enable speech for the intended people and hear it on stream?
Goal: How do I enable speech for the intended people and hear it on stream.
Success: The configured audio output plays a permitted speech request and the reader can identify why another request is skipped.
Application-case: A streamer wants moderators to test speech while limiting ordinary viewers and correcting a name pronunciation.
Prerequisites: Signed in with speech configuration permission (Moderator by default); permission to edit and run the command; OBS audio and TTS caption; speech enabled, an eligible role, no bits requirement for the command test and automatic playback.
Project-root: .
Built-root: dist
Rendered: dist/reference/audio/text-to-speech/index.html
Voice: docs-work/voice.md
Must know:
- setup | Where to enable speech and load TTS caption; a saved command can speak on the next use, while dashboard samples play locally. | ../../../../nomnomzbot/dashboard/src/views/dashboard/tts/PlaySampleButton.vue
- access | Configuration defaults to Moderator and can be restricted; reward speech additionally requires reward editing, Editor by default. | ../../../../nomnomzbot/server/src/NomNomzBot.Infrastructure/Content/Identity/ActionDefinitionSeeder.cs
- behavior | Role, bits, cooldown, length, approval and profanity checks affect speech; built-in reward speech bypasses role, bits and cooldown. | ../../../../nomnomzbot/server/src/NomNomzBot.Infrastructure/Tts/TtsDispatchService.cs
- voice | Channel narration and viewer speech have distinct assignments; choosing a voice saves both voice and provider. | ../../../../nomnomzbot/dashboard/src/api/tts.ts
- settings | Settings save immediately; reset restores speech defaults while keeping keys, voice assignments and pronunciation; BYOK needs the selected provider key. | ../../../../nomnomzbot/server/src/NomNomzBot.Infrastructure/Tts/TtsConfigService.cs
- pronunciation | Word matching ignores case, exact matching preserves it, and saved rules affect future speech. | ../../../../nomnomzbot/server/src/NomNomzBot.Infrastructure/Tts/TtsLexiconService.cs
- history | History records generated speech before output delivery and does not prove audible OBS playback. | ../../../../nomnomzbot/server/src/NomNomzBot.Infrastructure/Tts/TtsDispatchService.cs
Moves elsewhere:
- speech-actions | Speech timing, reservations and pipeline voice assignment. | ../../../../nomnomzbot/server/src/NomNomzBot.Infrastructure/Tts/PipelineActions/PlayTtsAction.cs | /reference/code/sdk-widgets-actions-templates#coordinate-speech-with-other-steps
Checks:
- build: ["cmd", "/c", "yarn", "build"]
