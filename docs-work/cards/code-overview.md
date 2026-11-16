Route: /reference/code/overview
Reader: A developer who knows JavaScript or HTTP integration basics and is new to the NomNomzBot surface described here.
Type: concept
Arrives-with: Where should my customization run, and which reference do I need?
Goal: Where should my customization run, and which reference do I need.
Success: The developer can choose a script, widget or external integration and identify its credentials and next page.
Application-case: A developer wants a browser overlay and a separate desktop control, and needs to choose a different authentication path for each.
Prerequisites: Access to the intended bot and its documented SDK or API surface; authorization for the chosen script, widget or external action.
Project-root: C:\Projects\NoMercyLabs\nomnomzbot-docs\.claude\worktrees\finish
Built-root: dist
Rendered: dist/reference/code/overview/index.html
Voice: docs-work/voice.md
Must know:
- setup | The boundaries between scripts, widgets and external callers and the entry point for each. | ../../../../nomnomzbot/server/src/NomNomzBot.Api/Controllers/V1/SdkController.cs
- behavior | The credential and permission model for each path and where its exact contract is documented. | ../../../../nomnomzbot/server/src/NomNomzBot.Api/AutomationStream/AutomationStreamEndpoint.cs
Moves elsewhere:
- none
Checks:
- build: ["cmd", "/c", "yarn", "build"]
