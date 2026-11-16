Route: /reference/code/worked-example
Reader: A developer who knows JavaScript or HTTP integration basics and is new to the NomNomzBot surface described here.
Type: task
Arrives-with: How do I make a chat-triggered script that keeps a count?
Goal: How do I make a chat-triggered script that keeps a count.
Success: The documented command invokes the script and its reply reflects the saved count.
Application-case: The author runs the command twice and then edits the script without intending to erase the counter.
Prerequisites: Access to the intended bot and its documented SDK or API surface; authorization for the chosen script, widget or external action.
Project-root: C:\Projects\NoMercyLabs\nomnomzbot-docs\.claude\worktrees\finish
Built-root: dist
Rendered: dist/reference/code/worked-example/index.html
Voice: docs-work/voice.md
Must know:
- setup | The complete script form, required grants and storage scope for the counter. | ../../../../nomnomzbot/server/src/NomNomzBot.Infrastructure/CustomCode/ScriptRunner.cs
- behavior | How to save, test and attach the script to a command and recognize each invocation's result. | ../../../../nomnomzbot/server/src/NomNomzBot.Infrastructure/CustomCode/ScriptRunner.cs
Moves elsewhere:
- none
Checks:
- build: ["cmd", "/c", "yarn", "build"]
