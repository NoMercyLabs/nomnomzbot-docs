Route: /reference/community/stream-page
Reader: A streamer or moderator who knows stream bots, has signed in to the selected channel, and is new to this feature in NomNomzBot.
Type: task
Arrives-with: Where do I update the stream and manage the actions around going live?
Goal: Where do I update the stream and manage the actions around going live.
Success: The reader can save stream details and recognize the state of the selected stream action.
Application-case: A multistreaming broadcaster changes a title and needs to know which platform receives it before starting an ad or raid.
Prerequisites: Access to the selected channel and the action being configured; required platform accounts and connections must be established before the relevant steps.
Project-root: .
Built-root: dist
Rendered: dist/reference/community/stream-page/index.html
Voice: docs-work/voice.md
Must know:
- setup | Where stream details, connection state and the go-live checklist are shown, and which changes are saved to which platform. | ../../../../nomnomzbot/dashboard/src/views/dashboard/stream/StreamView.vue
- behavior | How the raid, ad and scheduling controls behave, including requirements and effects before confirmation. | ../../../../nomnomzbot/server/src/NomNomzBot.Api/Controllers/V1/StreamController.cs
Moves elsewhere:
- none
Checks:
- build: ["cmd", "/c", "yarn", "build"]
