Route: /reference/code/scripts
Reader: A developer who knows JavaScript or HTTP integration basics and is new to the NomNomzBot surface described here.
Type: task
Arrives-with: How do I create, test and publish a script in the dashboard?
Goal: How do I create, test and publish a script in the dashboard.
Success: The reader can save a script, inspect a test result and identify the version a trigger will run.
Application-case: An author edits an existing script and wants to test the changes before changing the live command that uses it.
Prerequisites: Access to the intended bot and its documented SDK or API surface; authorization for the chosen script, widget or external action.
Project-root: C:\Projects\NoMercyLabs\nomnomzbot-docs\.claude\worktrees\finish
Built-root: dist
Rendered: dist/reference/code/scripts/index.html
Voice: docs-work/voice.md
Must know:
- setup | Where scripts are created, the supported source form and how saving and versions relate to the runnable script. | ../../../../nomnomzbot/dashboard/src/views/dashboard/scripts/ScriptsView.vue
- behavior | How test runs, grants, logs and reported errors work and how to attach the script to a trigger. | ../../../../nomnomzbot/server/src/NomNomzBot.Api/Controllers/V1/CodeScriptsController.cs
Moves elsewhere:
- none
Checks:
- build: ["cmd", "/c", "yarn", "build"]
