Route: /reference/overlays/widgets-and-alerts
Reader: A streamer or moderator who knows stream bots, has signed in to the selected channel, and is new to this feature in NomNomzBot.
Type: task
Arrives-with: How do I add and test a widget or alert in an overlay?
Goal: How do I add and test a widget or alert in an overlay.
Success: The saved widget renders in its overlay and the reader can distinguish a test from a real event.
Application-case: A streamer wants to preview an alert before putting it on stream and later replay a past alert.
Prerequisites: Access to the selected channel and permission for the described action; any platform connection or output required by that action must be established before the steps.
Project-root: .
Built-root: dist
Rendered: dist/reference/overlays/widgets-and-alerts/index.html
Voice: docs-work/voice.md
Must know:
- setup | Where to connect supplied alerts and configure or duplicate an existing custom overlay; the kind badge summarizes events rather than selecting a type. | ../../../../nomnomzbot/server/src/NomNomzBot.Api/Controllers/V1/WidgetsController.cs
- behavior | Live tests reach the selected overlay, editor samples target the preview and may synthesize speech, and event replay can rerun real response actions. | ../../../../nomnomzbot/server/src/NomNomzBot.Api/Controllers/V1/WidgetTestEventController.cs
- replay | Replay uses saved events and captured alerts, does not recreate the platform event, and reports output counts or a refusal. | ../../../../nomnomzbot/server/src/NomNomzBot.Infrastructure/Dashboard/Replay/ActivityReplayService.cs
- preview | Preview speech synthesis is real and can play in the editor; consequences precede sample use. | ../../../../nomnomzbot/server/src/NomNomzBot.Api/Controllers/V1/WidgetPreviewActionController.cs
Moves elsewhere:
- none
Checks:
- build: ["cmd", "/c", "yarn", "build"]
