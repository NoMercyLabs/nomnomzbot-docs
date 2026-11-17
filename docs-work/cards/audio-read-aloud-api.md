Route: /reference/audio/read-aloud-api
Reader: A developer who knows HTTP requests and browser audio playback and is new to the bot's read-aloud endpoint.
Type: lookup
Arrives-with: How does my web page request and play a read-aloud clip?
Goal: How does my web page request and play a read-aloud clip.
Success: The developer can construct a valid request, handle the response and distinguish a refused request from an empty clip.
Application-case: A public web page on a different origin needs to request speech and handle a temporary rate limit.
Prerequisites: A reachable bot endpoint and a web-page origin permitted by its read-aloud configuration.
Project-root: .
Built-root: dist
Rendered: dist/reference/audio/read-aloud-api/index.html
Voice: docs-work/voice.md
Must know:
- setup | The request method, fields, limits, response shape and error outcomes of the public read-aloud endpoint. | ../../../../nomnomzbot/dashboard/src/composables/useReadAloud.ts
- behavior | The origin requirements and voice selection that a caller must account for before requesting playback. | ../../../../nomnomzbot/server/src/NomNomzBot.Api/Controllers/ReadAloudController.cs
Moves elsewhere:
- none
Checks:
- build: ["cmd", "/c", "yarn", "build"]
