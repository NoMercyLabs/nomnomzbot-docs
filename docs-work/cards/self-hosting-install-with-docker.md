Route: /reference/self-hosting/install-with-docker
Type: task
Reader: A streamer who already knows what a stream bot does, is new to NomNomzBot, is comfortable running a terminal command, and wants to run the bot on their own computer or server for their own channel.
Arrives-with: Which setup do I pick, which command starts it, and where does my data live so I do not lose it?
Goal: Start the bot with Docker, reach the setup page in the browser, and know where the data is kept and how to back it up.
Success: The container is running and healthy, and the browser opens the setup page at the bot's address on port 5080.
Application-case: A streamer who wants the bot on a small always-on home server, reached from their laptop, must change the port and the public address and keep the data folder visible for copying.
Prerequisites: Docker with Compose v2, running; the NomNomzBot project files in one folder; a Twitch account for the channel.
Project-root: .
Built-root: dist
Rendered: dist/reference/self-hosting/install-with-docker/index.html
Voice: docs-work/voice.md
Must know:
- lite-command | The lite setup starts with docker compose -f docker-compose.lite.yml up -d and listens on port 5080 unless API_HTTP_PORT says otherwise | ../../../../nomnomzbot/docker-compose.lite.yml:12-21
- lite-port | The container's port 5000 is published on API_HTTP_PORT, which defaults to 5080 | ../../../../nomnomzbot/docker-compose.lite.yml:36-37
- default-image | With API_IMAGE empty, lite pulls the published stable image instead of building | ../../../../nomnomzbot/docker-compose.lite.yml:29-31
- secrets-optional | Lite needs no settings file: empty secret keys are generated and stored in the data folder | ../../../../nomnomzbot/docker-compose.lite.yml:23-24
- example-key | The ENCRYPTION_KEY in .env.example is the bundled development key, and the bot refuses to start outside development with it | ../../../../nomnomzbot/server/src/NomNomzBot.Api/Configuration/StartupSecretGuard.cs:57-60
- one-container | Lite runs one bot container and keeps its persistent state under /app/data, which must be retained when updating | ../../../../nomnomzbot/docker-compose.lite.yml:16-21
- lite-volume | The lite data sits in a Docker volume with the fixed name nomnomzbot_lite_data | ../../../../nomnomzbot/docker-compose.lite.yml:69-77
- storage-choice | To use a visible host folder instead of the default volume, replace the mount and create the folder before the first start. | ../../../../nomnomzbot/docs/install-docker-lite.md:65-76
- full-stack | The full setup runs the bot in a blue color with a green color on a profile, plus Postgres, Redis and a Caddy proxy | ../../../../nomnomzbot/docker-compose.yml:148-182
- backup-lite | Stop the bot and copy the whole lite volume or data folder, including its keys and database side files. | ../../../../nomnomzbot/docs/install-docker-lite.md
- backup-full | Back up both full-setup persistent volumes and retain the environment and Compose configuration. | ../../../../nomnomzbot/docker-compose.yml
Moves elsewhere:
- none
Checks:
- build: ["cmd", "/c", "yarn", "build"]
