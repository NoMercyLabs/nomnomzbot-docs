Route: /reference/settings/resource-limits
Reader: A streamer or moderator who knows stream bots, has signed in to the selected channel, and is new to this feature in NomNomzBot.
Type: lookup
Arrives-with: How do I tell which resource limit prevents an action?
Goal: How do I tell which resource limit prevents an action.
Success: The reader can match current usage to the relevant limit and choose a supported remedy.
Application-case: A moderator cannot create another command and needs to distinguish a usage limit from missing permission.
Prerequisites: Access to the selected channel and the action being configured; required platform accounts and connections must be established before the relevant steps.
Project-root: .
Built-root: dist
Rendered: dist/reference/settings/resource-limits/index.html
Voice: docs-work/voice.md
Must know:
- setup | Where the channel's limits and usage are displayed and which actions consume each resource. | ../../../../nomnomzbot/dashboard/src/views/dashboard/settings/resource-limits/ResourceLimitsView.vue
- behavior | What the reader sees at a limit and which changes can bring the channel below it. | ../../../../nomnomzbot/server/src/NomNomzBot.Api/Controllers/V1/BillingController.cs
Moves elsewhere:
- none
Checks:
- build: ["cmd", "/c", "yarn", "build"]
