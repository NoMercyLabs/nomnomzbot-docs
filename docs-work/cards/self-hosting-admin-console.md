Route: /reference/self-hosting/admin-console
Reader: A person who runs NomNomzBot on an own server for themselves, friends or a community, and knows stream bots.
Type: lookup
Arrives-with: How do I check my installation is healthy and manage its channels and defaults?
Goal: Use the admin console to watch health, manage channels and people, and set platform-wide defaults.
Success: The reader reads the health views and changes a channel or a default from the right section.
Application-case: Twitch events stop for one channel, and the operator checks EventSub health and the channel console.
Prerequisites: A self-hosted installation and a platform admin account.
Project-root: C:\Projects\NoMercyLabs\nomnomzbot-docs\.claude\worktrees\finish
Built-root: dist
Rendered: dist/reference/self-hosting/admin-console/index.html
Voice: docs-work/voice.md
Must know:
- sections | The console groups Activity, People, Billing, Safety and Configuration views. | ../../../../nomnomzbot/dashboard/src/views/dashboard/admin/route.ts
- diagnostics | Channel diagnostics answer per section, with errors for an unknown section, a missing run and a refused caller. | ../../../../nomnomzbot/server/src/NomNomzBot.Api/Controllers/V1/AdminChannelDiagnosticsController.cs
- act-as | A platform admin can act as a channel and leave through the Exit banner. | ../../../../nomnomzbot/dashboard/src/layouts/dashboard/ActAsExit.vue
Moves elsewhere:
- updates | Updating the installation. | ../../../../nomnomzbot/server/src/NomNomzBot.Api/Controllers/V1/SystemController.cs | /reference/self-hosting/updates
Checks:
- build: ["cmd", "/c", "yarn", "build"]
