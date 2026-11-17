Route: /reference/code/sdk-script-basics
Reader: A developer who knows JavaScript or HTTP integration basics and is new to the NomNomzBot surface described here.
Type: lookup
Arrives-with: Which script globals and basic helpers can I use, and when do I need a grant?
Goal: Which script globals and basic helpers can I use, and when do I need a grant.
Success: The author can choose the correct helper, identify required grants and handle a host-call error.
Application-case: A script moves from a local calculation to a host action and must account for capability checks.
Prerequisites: Access to the intended bot and its documented SDK or API surface; authorization for the chosen script, widget or external action.
Project-root: .
Built-root: dist
Rendered: dist/reference/code/sdk-script-basics/index.html
Voice: docs-work/voice.md
Must know:
- setup | The runtime globals, helper signatures and return shapes available to a script. | ../../../../nomnomzbot/server/src/NomNomzBot.Infrastructure/DevPlatform/SdkRuntimeSurface.cs
- behavior | Which calls require granted capabilities and how failed or refused calls are reported. | ../../../../nomnomzbot/server/src/NomNomzBot.Infrastructure/DevPlatform/SdkReflection.cs
Moves elsewhere:
- none
Checks:
- build: ["cmd", "/c", "yarn", "build"]
