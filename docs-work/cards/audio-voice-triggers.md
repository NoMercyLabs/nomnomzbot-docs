Route: /reference/audio/voice-triggers
Reader: A streamer or moderator who knows stream bots, has signed in to the selected channel, and is new to this feature in NomNomzBot.
Type: task
Arrives-with: How do I count a phrase spoken into my microphone?
Goal: How do I count a phrase spoken into my microphone.
Success: A recognized phrase increases the intended count and the reader knows how to stop listening.
Application-case: A streamer tests a phrase locally and needs to know which listener must stay open during the stream.
Prerequisites: Access to the selected channel and permission for the described action; any platform connection or output required by that action must be established before the steps.
Project-root: .
Built-root: dist
Rendered: dist/reference/audio/voice-triggers/index.html
Voice: docs-work/voice.md
Must know:
- setup | How to create an enabled phrase counter, connect the Chrome microphone listener and confirm the first count. | ../../../../nomnomzbot/dashboard/src/views/dashboard/voice-triggers/VoiceTriggersView.vue
- behavior | What must remain running, how repeated recognitions are handled and how to stop listening. | ../../../../nomnomzbot/server/src/NomNomzBot.Api/Controllers/V1/VoiceTriggersController.cs
- capture | Opening the listener starts speech recognition; received phrases are stored while live; counting also works offline and closing the listener stops capture. | ../../../../nomnomzbot/server/src/NomNomzBot.Infrastructure/Commands/VoiceTriggerService.cs
- access | Moderator access by default, configurable reader access down to VIP, and the private listener link grants phrase submission. | ../../../../nomnomzbot/server/src/NomNomzBot.Api/Controllers/V1/VoiceTriggersController.cs
- changes | New triggers start enabled, edits preserve counts, enabling saves immediately, and deletion permanently removes the count. | ../../../../nomnomzbot/server/src/NomNomzBot.Infrastructure/Commands/VoiceTriggerService.cs
Moves elsewhere:
- none
Checks:
- build: ["cmd", "/c", "yarn", "build"]
