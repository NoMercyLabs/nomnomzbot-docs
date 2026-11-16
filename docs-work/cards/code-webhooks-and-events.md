Route: /reference/code/webhooks-and-events
Reader: A developer who knows JavaScript or HTTP integration basics and is new to the NomNomzBot surface described here.
Type: lookup
Arrives-with: How do I send data into the bot or verify events sent out of it?
Goal: How do I send data into the bot or verify events sent out of it.
Success: The developer can choose the right event direction and construct or verify a request using the documented contract.
Application-case: A receiver gets the same outbound event more than once while a separate producer submits a custom event into the bot.
Prerequisites: Access to the intended bot and its documented SDK or API surface; authorization for the chosen script, widget or external action.
Project-root: C:\Projects\NoMercyLabs\nomnomzbot-docs\.claude\worktrees\finish
Built-root: dist
Rendered: dist/reference/code/webhooks-and-events/index.html
Voice: docs-work/voice.md
Must know:
- setup | The inbound webhook and custom-feed request forms, authentication and accepted event data. | ../../../../nomnomzbot/server/src/NomNomzBot.Api/Controllers/V1/InboundWebhookController.cs
- behavior | The outbound signature, delivery behavior and hub event contracts needed to consume events correctly. | ../../../../nomnomzbot/server/src/NomNomzBot.Api/Controllers/V1/WebhooksController.cs
Moves elsewhere:
- none
Checks:
- build: ["cmd", "/c", "yarn", "build"]
