Route: /reference/getting-started/sign-in
Type: task
Reader: A streamer or moderator who already knows what a stream bot does, is new to NomNomzBot, and stands at the sign-in page of a bot they were given the address of, not yet signed in.
Arrives-with: Which button do I press, and what happens to my channel when I do?
Goal: Be signed in to the dashboard of the right bot with the right role, by button or by code.
Success: The browser returns from the platform and the dashboard opens, showing the signed-in account.
Application-case: A moderator who helps run a friend's channel opens the friend's bot address on a home-network address that starts with http:// and finds no role buttons; they must still get in.
Prerequisites: The address of a running NomNomzBot that has sign-in open and at least one platform switched on for sign-in; an account on that platform.
Project-root: C:\Projects\NoMercyLabs\nomnomzbot-docs\.claude\worktrees\finish
Built-root: dist
Rendered: dist/reference/getting-started/sign-in/index.html
Voice: docs-work/voice.md
Must know:
- closed | A hosted build without the sign-in flag shows Sign-in is coming soon; the supplied self-hosted build opens sign-in | ../../../../nomnomzbot/dashboard/src/lib/flags.ts:14-18
- closed-text | The closed card says Sign-in is coming soon and points to self-hosting, which is free | ../../../../nomnomzbot/dashboard/src/views/site/login/i18n/en.json:5-11
- roles | Twitch offers three buttons: Continue as broadcaster, Continue as moderator, Continue as viewer | ../../../../nomnomzbot/dashboard/src/views/site/login/i18n/en.json:21-25
- broadcaster-opens-channel | Only the broadcaster sign-in opens a channel for the bot; the other two roles sign in as an identity only | ../../../../nomnomzbot/server/src/NomNomzBot.Api/Controllers/V1/AuthController.cs:408-412
- providers | Twitch is always on; YouTube, Kick and Twitter / X show only when their platform flag is on and the bot has that platform's app credentials | ../../../../nomnomzbot/server/src/NomNomzBot.Infrastructure/Identity/LoginProviderRegistry.cs:22-26
- code-flows | Twitch and YouTube can sign in with a code; Kick and Twitter / X cannot | ../../../../nomnomzbot/server/src/NomNomzBot.Infrastructure/Identity/LoginProviderRegistry.cs:35-64
- code-only | On another bot's page, or on a non-secure address that is not localhost, the page offers only code sign-in | ../../../../nomnomzbot/dashboard/src/views/site/login/LoginView.vue:55-58
- twitch-code-role | A Twitch device-code approval establishes a broadcaster session; moderators who want identity-only sign-in need the role button on the bot's own secure address. | ../../../../nomnomzbot/server/src/NomNomzBot.Infrastructure/Identity/AuthService.cs:764-782
Moves elsewhere:
- none
Checks:
- build: ["cmd", "/c", "yarn", "build"]
