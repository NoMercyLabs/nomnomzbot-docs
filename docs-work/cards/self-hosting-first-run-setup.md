Route: /reference/self-hosting/first-run-setup
Type: task
Reader: A streamer who already knows what a stream bot does, is new to NomNomzBot, has just started a self-hosted bot with Docker and opened its address in a browser for the first time, and sees a setup wizard they did not expect.
Arrives-with: What does this setup page want from me, and what can I leave for later?
Goal: Finish the setup with the one required Twitch step done, the optional steps skipped or filled in, and the setup closed.
Success: Choosing Finish setup leaves the wizard for the dashboard path and asks an unauthenticated reader to sign in; the reader then signs in as broadcaster.
Application-case: A streamer who runs the bot for a small friends-only channel does not want to register a Twitch application at all and wants the shortest route through the wizard.
Prerequisites: A running self-hosted bot reachable in the browser; for their own Twitch app, a Twitch account with a verified email address and two-factor authentication.
Project-root: .
Built-root: dist
Rendered: dist/reference/self-hosting/first-run-setup/index.html
Voice: docs-work/voice.md
Must know:
- required | The Twitch app step is the only required step; Next stays off until it is done | ../../../../nomnomzbot/server/src/NomNomzBot.Api/Models/SetupWizardDtos.cs:83-87
- secret-optional | A Client Secret is optional; without it the bot signs in by code | ../../../../nomnomzbot/server/src/NomNomzBot.Api/Controllers/V1/SystemController.cs:318-320
- browser-address | Browser role buttons require the selected bot's own secure address; localhost on the bot computer also provides a secure context. | ../../../../nomnomzbot/dashboard/src/views/site/login/LoginView.vue:55-58
- bot-optional | The bot account step is optional; if skipped, the broadcaster account acts as the bot | ../../../../nomnomzbot/server/src/NomNomzBot.Api/Models/SetupWizardDtos.cs:139-143
- open-window | Until setup is finished, anyone who can open the address can save the keys; afterwards only an admin can | ../../../../nomnomzbot/server/src/NomNomzBot.Api/Controllers/V1/SystemController.cs:463-479
- explicit-finish | Setup counts as complete only after Finish setup is chosen, never from the saved keys alone | ../../../../nomnomzbot/server/src/NomNomzBot.Api/Controllers/V1/SystemController.cs:482-491
- labels | The steps are Twitch app, Bot account, Spotify, Discord, YouTube and Finish setup, with Skip, Next and Back buttons | ../../../../nomnomzbot/dashboard/src/views/site/setup/i18n/en.json:16-34
- twitch-registration | Registering a Twitch application requires a verified email address and two-factor authentication. | https://dev.twitch.tv/docs/authentication/register-app
Moves elsewhere:
- none
Checks:
- build: ["cmd", "/c", "yarn", "build"]
