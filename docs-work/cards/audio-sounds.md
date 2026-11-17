Route: /reference/audio/sounds
Reader: A streamer or moderator who knows stream bots, has signed in to the selected channel, and is new to this feature in NomNomzBot.
Type: task
Arrives-with: How do I add a sound and play it from a command or reward?
Goal: How do I add a sound and play it from a command or reward.
Success: The saved sound can be selected by the action and heard through the configured output.
Application-case: A moderator wants one quiet sound louder without changing the volume of every other sound.
Prerequisites: Access to the selected channel and permission for the described action; any platform connection or output required by that action must be established before the steps.
Project-root: .
Built-root: dist
Rendered: dist/reference/audio/sounds/index.html
Voice: docs-work/voice.md
Must know:
- setup | Where to add a sound, accepted inputs and the settings that control its playback. | ../../../../nomnomzbot/dashboard/src/views/dashboard/sounds/SoundsView.vue
- behavior | How to trigger or test the sound and how clip volume relates to the audio output. | ../../../../nomnomzbot/server/src/NomNomzBot.Api/Controllers/V1/SoundClipsController.cs
- access | Moderator editing by default, optional VIP read access, and Bot Audio setup before an audible test. | ../../../../nomnomzbot/server/src/NomNomzBot.Infrastructure/Content/Identity/ActionDefinitionSeeder.cs
- activation | Uploads start enabled; saving a chat word enables offline playback immediately, while role and cooldown checks apply only to that word. | ../../../../nomnomzbot/server/src/NomNomzBot.Infrastructure/Chat/EventHandlers/ChatMessageHandler.cs
- control | Duration-based waits do not acknowledge OBS playback; named playback, immediate synced playback and ordinary sounds have different stop behavior. | ../../../../nomnomzbot/server/src/NomNomzBot.Api/Controllers/OverlaySdkController.cs
- deletion | Deletion removes the clip and file but leaves referring pipeline steps; disabling affects new playback only. | ../../../../nomnomzbot/server/src/NomNomzBot.Infrastructure/Sound/SoundClipService.cs
Moves elsewhere:
- none
Checks:
- build: ["cmd", "/c", "yarn", "build"]
