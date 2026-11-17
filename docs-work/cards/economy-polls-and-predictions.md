Route: /reference/economy/polls-and-predictions
Reader: A streamer or moderator who knows stream bots, has signed in to the selected channel, and is new to this feature in NomNomzBot.
Type: task
Arrives-with: How do I run and finish a poll or prediction from the dashboard?
Goal: How do I run and finish a poll or prediction from the dashboard.
Success: The poll or prediction reaches the intended ended or resolved state with its result visible.
Application-case: A streamer wants to stop a prediction and return points instead of selecting a winning outcome.
Prerequisites: Selected channel; permission to read and manage the activity (Moderator by default); broadcaster Twitch connection authorized for polls and predictions, and availability on that Twitch channel.
Project-root: .
Built-root: dist
Rendered: dist/reference/economy/polls-and-predictions/index.html
Voice: docs-work/voice.md
Must know:
- setup | Which poll and prediction types are available, their platform and permission requirements, and the fields needed to start them. | ../../../../nomnomzbot/dashboard/src/views/dashboard/polls/PollsView.vue
- behavior | Immediate start, end, lock and payout behavior; cancellation refunds instead of selecting a winner. | ../../../../nomnomzbot/dashboard/src/views/dashboard/home/components/PredictionDialog.vue
- history | Read recorded results and distinguish missing results from canceled or ended-early activity. | ../../../../nomnomzbot/server/src/NomNomzBot.Infrastructure/Community/PollPredictionHistoryService.cs
Moves elsewhere:
- none
Checks:
- build: ["cmd", "/c", "yarn", "build"]
