Route: /reference/community/analytics
Reader: A streamer or moderator who knows stream bots, has signed in to the selected channel, and is new to this feature in NomNomzBot.
Type: task
Arrives-with: How do I read the channel's results for the right period and save a recap?
Goal: How do I read the channel's results for the right period and save a recap.
Success: The reader can identify the selected period and save the intended stream recap.
Application-case: A streamer compares a completed stream with a date-range summary and wants to avoid treating them as the same measurement.
Prerequisites: Access to the selected channel and the action being configured; required platform accounts and connections must be established before the relevant steps.
Project-root: .
Built-root: dist
Rendered: dist/reference/community/analytics/index.html
Voice: docs-work/voice.md
Must know:
- setup | Where to choose the reporting period and how the displayed metrics relate to that period. | ../../../../nomnomzbot/dashboard/src/views/dashboard/analytics/AnalyticsOverview.vue
- behavior | How to select a completed stream and export its recap, including what appears when data is absent. | ../../../../nomnomzbot/server/src/NomNomzBot.Api/Controllers/V1/AnalyticsController.cs
Moves elsewhere:
- none
Checks:
- build: ["cmd", "/c", "yarn", "build"]
