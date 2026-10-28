# Claims: /reference/economy/polls-and-predictions

Product repo: C:\Projects\NoMercyLabs\nomnomzbot (master). D = dashboard/src/views/dashboard. S = server/src.

| Claim | Page line | Proof | Verdict |
| --- | --- | --- | --- |
| Sidebar label is Polls | 6 | dashboard/src/i18n/locales/en.json "nav.polls": "Polls"; dashboard/src/layouts/dashboard/navigation.ts:128-131 | true |
| Page title "Polls and predictions"; panels Now and History | 7-8 | D/polls/i18n/en.json title, lead.title, historyTitle; D/polls/PollsView.vue:101-114 | true |
| Moderator and up may read, start/end polls, run predictions | 12 | S/NomNomzBot.Infrastructure/Content/Identity/ActionDefinitionSeeder.cs:51,350-355 (Mod floor); route meta D/polls/route.ts:493 | true |
| Viewers vote on Twitch | 13 | D/home/i18n/en.json pollDialogIntro, predictionDialogIntro | true |
| Idle text; Start a poll button | 17-19 | D/polls/i18n/en.json lead.idle, lead.startPoll; D/polls/components/PollsLeadPanel.vue:321-331 | true |
| Dialog title and intro | 20 | D/home/components/PollDialog.vue:165-168; D/home/i18n/en.json pollStart, pollDialogIntro | true |
| Start poll creates on Twitch; Now panel countdown and bars | 24-25 | S/NomNomzBot.Api/Controllers/V1/LiveOpsController.cs:98-132; PollsLeadPanel.vue:282-294 | true |
| Choices 2-5, minutes 1-30 default 2, points off, 10 per vote, min 1 | 27-33 | PollDialog.vue:52-54,67-71,79-87,197,209; LiveOpsController.cs:119-122 | true |
| Start poll disabled until valid; empty choices dropped; need-choices text | 35-37 | PollDialog.vue:74-89,207,283; en.json pollNeedChoices | true |
| End poll ends with TERMINATED, shown "Ended early" | 41-42 | PollsLeadPanel.vue:296-304; dashboard/src/api/liveOps.ts:406; D/polls/i18n/en.json status.terminated | true |
| Prediction button opens Start a prediction dialog; intro | 49-50 | PollsLeadPanel.vue:332-338; PredictionDialog.vue:174-180; home en.json predictionStart, predictionDialogIntro | true |
| Countdown, bars by points with viewers and share | 54-55 | PollsLeadPanel.vue:236-259; D/polls/pollHistory.ts:441-460 | true |
| Lock predictions sets LOCKED; Locked label shown | 56-57 | PollsLeadPanel.vue:267-271,285,305-312; liveOps.ts:344 | true |
| Pick the winner opens dialog with pick intro | 58-59 | PollsLeadPanel.vue:313-315; PredictionDialog.vue:178-180; home en.json predictionPickIntro | true |
| Resolve prediction with winning outcome, RESOLVED | 60-61 | PredictionDialog.vue:138-143,292-297; liveOps.ts:362; LiveOpsController.cs:231-252 | true |
| Outcomes 2-10, minutes 1-30 default 2 | 63-67 | PredictionDialog.vue:51-53,67-83,208,220 | true |
| Need-outcomes text; Details opens dialog with Lock prediction | 69-70 | PredictionDialog.vue:218,298-299; PollsLeadPanel.vue:316-318 | true |
| Cancel prediction confirm title and refund text; CANCELED | 74-78 | PredictionDialog.vue:288-290,306-314,145-149; liveOps.ts:381; home en.json predictionCancelTitle, predictionRefund | true |
| History holds Twitch polls, predictions and chat polls, newest first | 82 | S/NomNomzBot.Infrastructure/Community/PollPredictionHistoryService.cs:38-45,65-72 | true |
| Card shows question, type, date, bars, trophy on winner | 83-84 | D/polls/components/PollHistoryCard.vue:37-39,54-91 | true |
| Show filter choices | 86-93 | D/polls/i18n/en.json filterLabel, kinds; pollHistory.ts:358-371 | true |
| Show choice remembered | 95 | PollsView.vue:53-58 (useLocalStorage nnz.polls.kind) | true |
| Status shown only for canceled, terminated, unfinished | 97-103 | pollHistory.ts:374,400-402; D/polls/i18n/en.json status.*; PollPredictionHistoryService.cs:36,147-158 (unfinished when only began) | true |
| Zero-vote polls fold into one toggle line | 105-106 | pollHistory.ts:392-397; PollsView.vue:135-153; en.json noVotes | true |
| Chat poll winner only when closed and single top | 108 | PollPredictionHistoryService.cs:113-120 | true |
| Home page has Start a poll / Start a prediction with same dialogs | 112-113 | D/home/components/QuickActionsPanel.vue:45,344,353,361 | true |
| Start actions hidden without write right; read-only sees running and history | 121-123 | PollsView.vue:72-78,112; PollsLeadPanel.vue:214-218,296,324-336 | true |
