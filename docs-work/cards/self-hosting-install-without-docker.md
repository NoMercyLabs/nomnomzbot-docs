Route: /reference/self-hosting/install-without-docker
Type: task
Reader: A streamer who already knows what a stream bot does, is new to NomNomzBot, is comfortable unpacking an archive and starting a program, and wants to run the bot on their own computer for their own channel without installing Docker.
Arrives-with: Which file do I download for my computer, how do I start it, where do I open it, and where does my data live so I do not lose it?
Goal: Download the release archive for the computer's system, start the bot, open the setup page in the browser, and know where the data is kept and how to move or back it up.
Success: The bot is running and the browser opens the dashboard setup at http://localhost:5080 on the same computer.
Application-case: A streamer who wants the bot's data on a second drive must set the data folder before the first start, and must know that the bot keeps using the same port on later starts.
Prerequisites: A Windows, Linux or macOS computer on a 64-bit processor that the bot may keep running on; a Twitch account for the channel. Nothing else is installed.
Project-root: .
Built-root: dist
Rendered: dist/reference/self-hosting/install-without-docker/index.html
Voice: docs-work/voice.md
Must know:
- archives | Every stable release carries one self-contained archive per system: win-x64 and the two Linux and two macOS builds (linux-x64, linux-arm64, osx-x64, osx-arm64); nothing else needs installing | ../../../../nomnomzbot/.github/workflows/release.yml:176-181
- archive-name | The archive is named nomnomz-VERSION-RID: a .zip with nomnomz.exe on Windows, a .tar.gz with nomnomz everywhere else | ../../../../nomnomzbot/.github/workflows/release.yml:198-208
- stable-only | Archives are attached to stable releases only, not to beta or nightly | ../../../../nomnomzbot/.github/workflows/release.yml:170-173
- start-open | Unpack, run nomnomz (nomnomz.exe on Windows), then open http://localhost:5080 for the setup in the dashboard | ../../../../nomnomzbot/DEPLOY.md:50-52
- first-start | The first start creates the data folder and walks the streamer through setup in the dashboard | ../../../../nomnomzbot/DEPLOY.md:87-88
- data-folder | The bot keeps its database, keys and logs in one per-user folder: %LOCALAPPDATA%\NomNomzBot on Windows, ~/.local/share/NomNomzBot on Linux, ~/Library/Application Support/NomNomzBot on macOS | ../../../../nomnomzbot/server/src/NomNomzBot.Infrastructure/Platform/SelfHostDataPaths.cs:15-24
- data-override | NOMNOMZ_DATA_DIR moves the data folder | ../../../../nomnomzbot/server/src/NomNomzBot.Infrastructure/Platform/SelfHostDataPaths.cs:66-79
- port-lock | The default port is 5080; the bot locks the port it first binds and reuses it on later starts, and a stored listen-port file in the data folder holds it | ../../../../nomnomzbot/server/src/NomNomzBot.Api/Configuration/ListenPortBootstrap.cs:15-30
- windows-tray | On Windows the bot has no console window and shows a system-tray icon with a menu to open the dashboard or stop the bot | ../../../../nomnomzbot/server/src/NomNomzBot.Api/Configuration/SystemTrayHostedService.cs:18-25
Moves elsewhere:
- update-binary | Update by downloading the newer release and replacing the binary; the data folder stays in place. | ../../../../nomnomzbot/DEPLOY.md:88-89 | /reference/self-hosting/updates#update-without-docker
Checks:
- build: ["cmd", "/c", "yarn", "build"]
