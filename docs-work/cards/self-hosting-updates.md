Route: /reference/self-hosting/updates
Type: task
Reader: A streamer who already knows what a stream bot does, is new to NomNomzBot, runs it themselves with Docker from the install page, and is about to update it or choose how often it updates.
Arrives-with: Which release channel should I run, what exact commands update it, and what could I lose?
Goal: Pick a release channel, update the lite or full setup without losing data, and know what to do if the new version does not start.
Success: After the update the container is running and healthy on the chosen channel, the dashboard opens, and a test chat command still answers.
Application-case: A streamer on the full setup who wants an automatic updater on their home server must learn why the bot containers must not be handed to one.
Prerequisites: A bot installed with the lite or full Docker setup; a current backup of the data; for the full setup, PowerShell to run the switchover script.
Project-root: C:\Projects\NoMercyLabs\nomnomzbot-docs\.claude\worktrees\finish-b
Built-root: dist
Rendered: dist/reference/self-hosting/updates/index.html
Voice: docs-work/voice.md
Must know:
- channels | Which release channel to choose and how the selected image tag determines which updates the installation receives | ../../../../nomnomzbot/.github/workflows/release.yml:12-16
- lite-update | Lite updates by pulling the new image and running the same up -d command, with one container and a short pause | ../../../../nomnomzbot/docker-compose.lite.yml:20-21
- lite-default | Lite follows the stable channel when API_IMAGE is empty | ../../../../nomnomzbot/docker-compose.lite.yml:29-31
- key-change | Changing ENCRYPTION_KEY invalidates every stored sign-in, so the bot must sign in again | ../../../../nomnomzbot/.env.example:36-39
- no-auto-updater | An automatic updater such as Watchtower must not update the full setup, because it stops the live container before the new one is ready | ../../../../nomnomzbot/DEPLOY.md:161-164
- switchover-safe | If the new color never becomes ready, the switchover script stops it and leaves the old one serving | ../../../../nomnomzbot/scripts/switchover.ps1:34-37
- backup | Back up the complete persistent data and configuration before changing images; restore matching data and keys together. | ../../../../nomnomzbot/docker-compose.lite.yml
Moves elsewhere:
- none
Checks:
- build: ["cmd", "/c", "yarn", "build"]
