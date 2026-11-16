Route: /reference/code/sdk-data-and-storage
Reader: A developer who knows JavaScript or HTTP integration basics and is new to the NomNomzBot surface described here.
Type: lookup
Arrives-with: How do I read channel data and keep state between script runs?
Goal: How do I read channel data and keep state between script runs.
Success: The author can choose a data or storage call, understand its scope and handle its result.
Application-case: Two scripts need separate counters while one also schedules a future action without assuming a current chat message.
Prerequisites: Access to the intended bot and its documented SDK or API surface; authorization for the chosen script, widget or external action.
Project-root: C:\Projects\NoMercyLabs\nomnomzbot-docs\.claude\worktrees\finish
Built-root: dist
Rendered: dist/reference/code/sdk-data-and-storage/index.html
Voice: docs-work/voice.md
Must know:
- setup | The supported data, storage, fetch and scheduling calls with their parameters and permissions. | ../../../../nomnomzbot/server/src/NomNomzBot.Infrastructure/CustomCode/ScriptStorageService.cs
- behavior | The persistence scope, limits and missing-value or failure outcomes needed to use those calls safely. | ../../../../nomnomzbot/server/src/NomNomzBot.Infrastructure/DevPlatform/StreamMetricTypeScript.cs
Moves elsewhere:
- none
Checks:
- build: ["cmd", "/c", "yarn", "build"]
