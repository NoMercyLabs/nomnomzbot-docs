Route: /reference/getting-started/dashboard-tour
Type: concept
Reader: A streamer or moderator who already knows what a stream bot dashboard is for, is new to this one, has just signed in, and cannot find a page a friend told them about or does not know what the header tools do.
Arrives-with: Where is everything, why does my sidebar differ from my friend's, and what do the Shield and Action required buttons do?
Goal: Find any page in the sidebar by its group, know why a page is missing, and use the header tools and channel switcher without surprise.
Success: The reader opens Home, names the sidebar group a page lives in, and can find the page available to their role and use the channel switcher.
Application-case: A moderator who helps two channels switches channels from a small laptop window, finds only an icon rail, and wonders why Shield asks a question before it changes.
Prerequisites: Signed in to a dashboard; a role that may open at least one page of the selected channel.
Project-root: C:\Projects\NoMercyLabs\nomnomzbot-docs\.claude\worktrees\finish
Built-root: dist
Rendered: dist/reference/getting-started/dashboard-tour/index.html
Voice: docs-work/voice.md
Must know:
- role-gate | A sidebar page shows only when the person holds the action key of that page; an entry with no key shows to everyone | ../../../../nomnomzbot/dashboard/src/layouts/dashboard/navigation.ts:49-62
- home-default | Home needs the dashboard read action, which a Moderator holds by default | ../../../../nomnomzbot/server/src/NomNomzBot.Infrastructure/Content/Identity/ActionDefinitionSeeder.cs:406
- shield | Shield mode switches at once on a window 768 px or wider and asks first below that | ../../../../nomnomzbot/dashboard/src/layouts/dashboard/ShieldToggle.vue:33-42
- shield-role | A Moderator can read the Shield state, but changing it takes a Lead moderator by default | ../../../../nomnomzbot/server/src/NomNomzBot.Infrastructure/Content/Identity/ActionDefinitionSeeder.cs:269-270
- view-as | Only the channel owner sees View as moderator and View as viewer in the account menu | ../../../../nomnomzbot/dashboard/src/layouts/dashboard/ProfileMenu.vue:154-161
Moves elsewhere:
- none
Checks:
- build: ["cmd", "/c", "yarn", "build"]
