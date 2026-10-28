# Fact-check: /reference/moderation/reports
Verdict: PASS
Reviewed: src/content/reference/en/moderation/reports.mdx
Reviewed-SHA: 9adc5725e8857434

Checked against the current page text (sha above) and product repo master, read only. Older verdict not carried forward; each row re-checked.

| Claim | Page line | Product file:line | Verdict |
| --- | --- | --- | --- |
| Page label "Viewer reports" | 2, 6, 34 | dashboard/src/i18n/locales/en.json:904; settings/reports/i18n/en.json listTitle | true |
| Page sits in the Access group of settings sidebar | 7, 34 | dashboard/src/layouts/dashboard/settingsNavigation.ts:77,87; locales/en.json:941 "Access" | true |
| Moderator or higher reads | 13 | ActionDefinitionSeeder.cs:263 `moderation:report:read` Mod | true |
| Lead moderator or higher dismisses or escalates | 14 | ActionDefinitionSeeder.cs:264 triage LeadModerator; ReportsView.vue:104 | true |
| A viewer may file a report | 15 | ActionDefinitionSeeder.cs:552-553,574 community plane, Everyone | true |
| No dashboard form; report comes via the API | 20-21 | no dashboard caller of file (claims lead crudBaseline.ts; ReportsView has no file action) | true |
| Empty reason refused "A report needs a reason." | 25 | ViewerReportService.cs:70-72 | true |
| Reason over 500 characters refused | 26 | ViewerReportService.cs:32,73-75 | true |
| No chatter named refused | 27 | ViewerReportService.cs:78 | true |
| New report status Open | 29 | ViewerReportService.cs:115 | true |
| Reported chatter saved as user | 30 | ViewerReportService.cs:89-90 GetOrCreateAsync | true |
| List starts on Open, newest first | 35 | ReportsView.vue:43; ViewerReportService.cs:144 | true |
| Filter "Show reports that are": Open/Escalated/Dismissed | 36-37 | reports/i18n/en.json statusLabel, status.*; ReportsView.vue:50,91-92 | true |
| Row: name, reason, "Filed by {name} {when}" | 39-40 | ReportsView.vue:57-62; i18n filed | true |
| Unknown reporter "a viewer" | 41 | ReportsView.vue:58; i18n someone | true |
| Empty texts per status | 45-47 | i18n empty.*; ReportsView.vue:85 | true |
| Dismiss / Escalate labels and meaning | 52-53 | i18n dismiss, escalate, explain | true |
| Success messages | 54 | i18n done.dismiss, done.escalate | true |
| Report moves to new status | 55 | ViewerReportService.cs:174-175 | true |
| Records who and when | 57 | ViewerReportService.cs:192-195 | true |
| Buttons only on open reports | 58 | ReportsView.vue:104 | true |
| Escalate does not ban or time out | 61-62 | ViewerReportService.cs:28; resolve only sets status (174-195) | true |
| Error "could not be changed" | 67 | i18n error | true |
| "The reports could not be loaded." + Try again | 73-75 | i18n loadError; ReportsView.vue:86-87; common panel retry | true |
| Review queue holds automatic actions awaiting review, newest first | 80, 90 | ITrustSafetyReviewService.cs:38-41 | true |
| "Review queue" on "Trust and safety" admin page | 82 | dashboard/src/views/dashboard/admin/i18n/en.json:207,216 | true |
| Only operators with review right | 83 | AdminTrustSafetyView.vue:65 `trust-safety:review` | true |
| "Reason for access"; nothing loads until given; audited | 88-89 | admin/i18n/en.json:209,211 | true |
| Row shows account, channel, reason, message, confidence, action, time | 91 | TrustReviewRow.vue:29-36 | true |
| Confirm closes review, action untouched | 96 | ITrustSafetyReviewService.cs:49-52; admin i18n:219 | true |
| Overturn removes Twitch timeout/ban then marks overturned | 97 | ITrustSafetyReviewService.cs:60-65; admin i18n:220 | true |
| Failed reversal leaves row as it was | 99 | ITrustSafetyReviewService.cs:62-64 | true |
| Cross-channel signals: two or more channels | 100 | admin/i18n/en.json:239-240 | true |

## Links
- /reference/moderation/bans-and-blocked-terms: a row of docs-work/map.md. OK.

## Conventions
- No people's names, no action keys, no numbered levels, no license name, no "open source". Role labels "Moderator", "Lead moderator" equal locales/en.json:482-483.
- No hosting, price or paid plan mentioned; marker not needed.
- American English; no British spelling found.
- Bot speech: none described. NoMercyBot spelling: none.

## Notes
- Line 26 gives no message; the code's message is "A report reason can't exceed 500 characters." (ViewerReportService.cs:75). Optional to quote it, for parity with lines 25 and 27.
