Route: /reference/code/sdk-chat-music-voice
Reader: A developer who knows JavaScript or HTTP integration basics and is new to the NomNomzBot surface described here.
Type: lookup
Arrives-with: Which SDK call sends chat, controls music or requests speech?
Goal: Which SDK call sends chat, controls music or requests speech.
Success: The author can construct the intended call with its required grant and interpret its result.
Application-case: A script needs to send chat and then request speech, and must handle one action failing independently.
Prerequisites: Access to the intended bot and its documented SDK or API surface; authorization for the chosen script, widget or external action.
Project-root: .
Built-root: dist
Rendered: dist/reference/code/sdk-chat-music-voice/index.html
Voice: docs-work/voice.md
Must know:
- setup | The supported chat, music and speech method signatures, arguments and grants. | ../../../../nomnomzbot/server/src/NomNomzBot.Infrastructure/DevPlatform/SdkRuntimeSurface.cs
- behavior | The return and error behavior needed to await each action and handle partial success. | ../../../../nomnomzbot/server/src/NomNomzBot.Infrastructure/CustomCode/ScriptHostBridge.cs
Moves elsewhere:
- none
Checks:
- build: ["cmd", "/c", "yarn", "build"]
