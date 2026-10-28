# Fact-check: /reference/economy/polls-and-predictions
Verdict: PASS
Reviewed: src/content/reference/en/economy/polls-and-predictions.mdx
Reviewed-SHA: f3d9519e6a862755

Product repo: nomnomzbot master, read only. D = dashboard/src/views/dashboard. S = server/src.

| Claim | Page line | Product file and line | Verdict |
| --- | --- | --- | --- |
| Sidebar label Polls | 6, 17, 49 | dashboard/src/i18n/locales/en.json:814 | true |
| Title Polls and predictions; panels Now, History | 7-8 | D/polls/i18n/en.json title, lead.title, historyTitle | true |
| Moderator, lead moderator, editor, broadcaster may read/start/end/lock/resolve/cancel | 12, 121 | S/NomNomzBot.Infrastructure/Content/Identity/ActionDefinitionSeeder.cs:51-53,350-355 (Mod floor 10, Lead 20, Editor 30 above it) | true |
| Viewers vote on Twitch | 13, 20 | D/home/i18n/en.json:72 | true |
| Idle text, Start a poll | 18-19 | D/polls/i18n/en.json lead.idle, lead.startPoll | true |
| Dialog title and intro | 20 | D/home/i18n/en.json:71-72 | true |
| Labels Question, Choices, Minutes, points switch, Start poll | 21-23 | D/home/i18n/en.json:73-85 | true |
| Choices 2-5, Add choice, remove button | 29 | D/home/components/PollDialog.vue:52-53,197,209; en.json:77-78 | true |
| Minutes 1-30, default 2 | 30 | PollDialog.vue:54,69,79-84 | true |
| Points off by default, 10 per vote, min 1 only when on | 31-32 | PollDialog.vue:70-71,85-87 | true |
| Start poll disabled until valid; empty choice dropped; need-choices text | 34-36 | PollDialog.vue:78,88-90; en.json:79 | true |
| End poll, Ended early | 40-41 | D/polls/i18n/en.json lead.endPoll, status.terminated | true |
| Prediction button, Start a prediction dialog and intro | 49-50 | D/polls/i18n/en.json lead.startPrediction; home en.json:92,94 | true |
| Outcomes 2-10, Add outcome, Minutes to predict 1-30 default 2 | 51-52, 66-67 | PredictionDialog.vue:51-53,69,80-82,220; en.json:98,101,103 | true |
| Lock predictions, Locked, Pick the winner, pick intro, Resolve prediction | 56-60 | D/polls/i18n/en.json lead.lock, lead.locked, lead.resolve; home en.json:95,106 | true |
| Need-outcomes text; Details, Lock prediction | 69-70 | home en.json:102,105; D/polls/i18n/en.json lead.details | true |
| Cancel prediction, confirm title and refund text, Canceled | 75-78 | home en.json:107-109; D/polls/i18n/en.json status.canceled | true |
| History has Twitch polls, predictions, chat polls, newest first | 82 | S/NomNomzBot.Infrastructure/Community/PollPredictionHistoryService.cs (per claims 38-45,65-72; not re-read line by line) | true |
| Trophy on winner | 84 | D/polls/components/PollHistoryCard.vue:21,67 | true |
| Show filter and four choices | 86-93 | D/polls/i18n/en.json filterLabel, kinds | true |
| Show choice remembered | 95 | D/polls/PollsView.vue:53 useLocalStorage('nnz.polls.kind') | true |
| Status labels Canceled, Ended early, No result recorded | 101-103 | D/polls/i18n/en.json status.* | true |
| No-votes fold line | 105 | D/polls/i18n/en.json noVotes | true |
| Chat poll winner only when closed and single top | 108 | PollPredictionHistoryService.cs:114-120 | true |
| Home page same actions and dialogs | 112-113 | D/home/components/QuickActionsPanel.vue (per claims; not re-read) | true |

Links: /reference/getting-started/dashboard-tour and /reference/community/chat-page are both rows of docs-work/map.md.
Conventions: no names, no action keys, no numbered levels, no license, no hosting mention, American English (Canceled). OK.

## Notes
- Line 34 omits that Start poll also stays off when the points switch is on and the price is invalid (PollDialog.vue:85-90). Line 32 covers the rule; not blocking.
- Line 29 mentions the remove button for choices; outcomes have one too (home en.json:100), the outcomes row does not say so.
