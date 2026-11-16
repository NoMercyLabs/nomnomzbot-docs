Route: /reference/settings/permissions
Reader: A streamer or moderator who knows stream bots, has signed in to the selected channel, and is new to this feature in NomNomzBot.
Type: task
Arrives-with: How do I give a person access to the actions they should manage?
Goal: How do I give a person access to the actions they should manage.
Success: The reader can identify the person's effective role and the actions it permits.
Application-case: A broadcaster wants a helper to manage commands without giving them broadcaster access.
Prerequisites: Access to the selected channel and the action being configured; required platform accounts and connections must be established before the relevant steps.
Project-root: C:\Projects\NoMercyLabs\nomnomzbot-docs\.claude\worktrees\finish
Built-root: dist
Rendered: dist/reference/settings/permissions/index.html
Voice: docs-work/voice.md
Must know:
- setup | Where roles and action permissions are managed, the role ordering and who can grant access. | ../../../../nomnomzbot/dashboard/src/views/dashboard/settings/permissions/PermissionsView.vue
- behavior | How action thresholds and individual role assignments combine, their enforced bounds and how to remove access. | ../../../../nomnomzbot/server/src/NomNomzBot.Api/Controllers/V1/PermissionsController.cs
Moves elsewhere:
- none
Checks:
- build: ["cmd", "/c", "yarn", "build"]
