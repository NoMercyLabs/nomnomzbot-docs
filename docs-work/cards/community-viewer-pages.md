Route: /reference/community/viewer-pages
Reader: A viewer signed in with their own account who wants to inspect their channel information or personal preferences.
Type: concept
Arrives-with: Where can I view my own channel information and change my account preferences?
Goal: Where can I view my own channel information and change my account preferences.
Success: The viewer can find their own profile and understand which preferences affect their account or one channel.
Application-case: A viewer visits two channels and wants to know which pronoun or privacy choices apply in both.
Prerequisites: A signed-in viewer account and the intended channel selected.
Project-root: .
Built-root: dist
Rendered: dist/reference/community/viewer-pages/index.html
Voice: docs-work/voice.md
Must know:
- setup | How a viewer reaches their own pages and which signed-in identity those pages describe. | ../../../../nomnomzbot/server/src/NomNomzBot.Api/Controllers/V1/ViewerSelfController.cs
- behavior | Where to change personal preferences and how their account or channel scope affects the result. | ../../../../nomnomzbot/server/src/NomNomzBot.Api/Controllers/V1/PronounsController.cs
Moves elsewhere:
- none
Checks:
- build: ["cmd", "/c", "yarn", "build"]
