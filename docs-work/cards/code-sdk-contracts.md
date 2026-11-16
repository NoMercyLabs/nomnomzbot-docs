Route: /reference/code/sdk-contracts
Reader: A developer who knows JavaScript or HTTP integration basics and is new to the NomNomzBot surface described here.
Type: lookup
Arrives-with: Where can I get the exact types, action parameters and event payloads?
Goal: Where can I get the exact types, action parameters and event payloads.
Success: The developer can obtain the contract for the correct bot and distinguish it from illustrative examples.
Application-case: A developer prepares a client for a self-hosted bot whose contract may differ from a copied example.
Prerequisites: Access to the intended bot and its documented SDK or API surface; authorization for the chosen script, widget or external action.
Project-root: C:\Projects\NoMercyLabs\nomnomzbot-docs\.claude\worktrees\finish
Built-root: dist
Rendered: dist/reference/code/sdk-contracts/index.html
Voice: docs-work/voice.md
Must know:
- setup | The contract endpoints and formats for script, widget, action, event and metric surfaces. | ../../../../nomnomzbot/server/src/NomNomzBot.Api/Controllers/V1/SdkController.cs
- behavior | How to interpret optional fields, discriminated event shapes and versions when using the returned definitions. | ../../../../nomnomzbot/server/src/NomNomzBot.Infrastructure/DevPlatform/SdkTypeEmitter.cs
Moves elsewhere:
- none
Checks:
- build: ["cmd", "/c", "yarn", "build"]
