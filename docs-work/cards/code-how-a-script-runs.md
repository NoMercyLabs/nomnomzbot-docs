Route: /reference/code/how-a-script-runs
Reader: A developer who knows JavaScript or HTTP integration basics and is new to the NomNomzBot surface described here.
Type: concept
Arrives-with: What context does a script receive, and what can end its run?
Goal: What context does a script receive, and what can end its run.
Success: The author can predict the invocation context, permission check and completion or failure outcome.
Application-case: A script is invoked by a scheduled action rather than a chat message and cannot assume a current chatter.
Prerequisites: Access to the intended bot and its documented SDK or API surface; authorization for the chosen script, widget or external action.
Project-root: .
Built-root: dist
Rendered: dist/reference/code/how-a-script-runs/index.html
Voice: docs-work/voice.md
Must know:
- setup | How a trigger selects a script and supplies context, including values that depend on the trigger. | ../../../../nomnomzbot/server/src/NomNomzBot.Infrastructure/CustomCode/ScriptRunner.cs
- behavior | The runtime limits, granted capabilities and error outcomes that the author must handle. | ../../../../nomnomzbot/server/src/NomNomzBot.Infrastructure/CustomCode/ScriptRunner.cs
Moves elsewhere:
- none
Checks:
- build: ["cmd", "/c", "yarn", "build"]
