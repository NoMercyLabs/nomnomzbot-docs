Route: /reference/code/automation-api
Reader: A developer who knows JavaScript or HTTP integration basics and is new to the NomNomzBot surface described here.
Type: lookup
Arrives-with: How do I authenticate an external tool and use REST or the event stream?
Goal: How do I authenticate an external tool and use REST or the event stream.
Success: The developer can make a scoped request, interpret a response and connect to the stream with the correct credentials.
Application-case: A tool pairs successfully but tries an action outside its granted scope; explain the refusal and how pairing differs from a dashboard session.
Prerequisites: Access to the intended bot and its documented SDK or API surface; authorization for the chosen script, widget or external action.
Project-root: .
Built-root: dist
Rendered: dist/reference/code/automation-api/index.html
Voice: docs-work/voice.md
Must know:
- setup | The token and pairing flow, scopes, channel binding and authentication required by each transport. | ../../../../nomnomzbot/server/src/NomNomzBot.Api/Controllers/V1/AutomationDataController.cs
- behavior | The supported REST operations, WebSocket messages, event payloads and error or reconnection behavior callers must handle. | ../../../../nomnomzbot/server/src/NomNomzBot.Api/Controllers/V1/AutomationPairingController.cs
Moves elsewhere:
- none
Checks:
- build: ["cmd", "/c", "yarn", "build"]
