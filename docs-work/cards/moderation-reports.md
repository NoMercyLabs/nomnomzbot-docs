Route: /reference/moderation/reports
Reader: A streamer or moderator who knows stream bots, has signed in to the selected channel, and is new to this feature in NomNomzBot.
Type: task
Arrives-with: Where do I review a viewer report and record a decision?
Goal: Where do I review a viewer report and record a decision.
Success: The report shows the reviewed state and the reader knows whether a separate moderation action is needed.
Application-case: A moderator reviews an old report whose subject has already been moderated and wants to avoid a duplicate action.
Prerequisites: Access to the selected channel and permission for the described action; any platform connection or output required by that action must be established before the steps.
Project-root: .
Built-root: dist
Rendered: dist/reference/moderation/reports/index.html
Voice: docs-work/voice.md
Must know:
- setup | Where viewer reports are listed, how to inspect their context and which role may resolve them. | ../../../../nomnomzbot/dashboard/src/views/dashboard/settings/reports/ReportsView.vue
- behavior | What each decision changes, including whether closing a report itself performs a moderation action. | ../../../../nomnomzbot/server/src/NomNomzBot.Application/Moderation/Services/IViewerReportService.cs
- decision | Dismiss and Escalate save immediately; the dashboard then removes the decision buttons, while any punishment remains a separate action. | ../../../../nomnomzbot/dashboard/src/views/dashboard/settings/reports/ReportsView.vue
Moves elsewhere:
- none
Checks:
- build: ["cmd", "/c", "yarn", "build"]
