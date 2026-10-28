# Fact check: src/content/reference/en/moderation/reports.mdx
Verdict: PASS
Reviewed: src/content/reference/en/moderation/reports.mdx
Reviewed-SHA: 9adc5725e88574344dac679a31bfb934

Product repo: nomnomzbot master, read only. Paths are relative to it. Every row was re-read against the code in this run; the claims file was used only as a lead.

| Claim | Page line | Supported by | Status |
| --- | --- | --- | --- |
| Page title "Viewer reports" | 2, 6, 34 | dashboard/src/i18n/locales/en.json:904; dashboard/src/views/dashboard/settings/reports/ReportsView.vue:76 | true |
| Page is in the Access group of the settings sidebar | 7, 34 | dashboard/src/layouts/dashboard/settingsNavigation.ts:77,87; en.json:941 ("Access") | true |
| Moderator or higher opens and reads | 13 | settings/reports/route.ts (action moderation:report:read); server/src/NomNomzBot.Infrastructure/Content/Identity/ActionDefinitionSeeder.cs:263 (Mod); ModerationController.cs GET reports RequireAction moderation:report:read | true |
| Lead moderator or higher dismisses or escalates | 14 | ActionDefinitionSeeder.cs:264 (LeadModerator); ModerationController.cs PATCH reports/{id} RequireAction moderation:report:triage; ReportsView.vue:104; label en.json:483 "Lead moderator" | true |
| A viewer in the channel files a report | 15 | ActionDefinitionSeeder.cs:553-554,574 (C = Everyone, community plane); ModerationController.cs POST reports RequireAction moderation:report:file | true |
| No dashboard form; reports come in through the API | 20-21 | only callers of moderation:report:file / FileReportAsync in source: ModerationController.cs, IViewerReportService.cs, ViewerReportService.cs, seeder; no dashboard/src caller | true |
| Empty reason refused, "A report needs a reason." | 25 | server/src/NomNomzBot.Infrastructure/Moderation/ViewerReportService.cs:70-72 | true |
| Reason over 500 characters refused | 26 | ViewerReportService.cs:32,73-75 | true |
| No chatter named refused, "A report needs a reported user." | 27 | ViewerReportService.cs:79-80 | true |
| New report status Open | 29 | ViewerReportService.cs:115 | true |
| Reported chatter saved as a user even if new | 30 | ViewerReportService.cs:89 (_users.GetOrCreateAsync) | true |
| List opens on Open reports, newest first | 35 | ReportsView.vue:43; ViewerReportService.cs:143-144 | true |
| "Show reports that are" with Open, Escalated, Dismissed filters by status | 36-37 | settings/reports/i18n/en.json statusLabel, status.*; ReportsView.vue:90-94; ViewerReportService.cs:143 | true |
| Row shows reported name, then reason and "Filed by ... (when)" | 39-40 | ReportsView.vue:52-63,101-102; i18n filed "Filed by {name} {when}" | true |
| Unknown reporter shows "a viewer" | 41 | ReportsView.vue:58; i18n someone | true |
| Empty-list texts per status | 45-47 | i18n empty.open/escalated/dismissed; ReportsView.vue:85 | true |
| Dismiss / Escalate labels and meaning | 52-53 | i18n dismiss, escalate, explain | true |
| Success toasts | 54 | i18n done.dismiss, done.escalate; ReportsView.vue:66-68 | true |
| Report moves to the list of its new status | 55 | ViewerReportService.cs:171-191 (dismiss to dismissed, escalate to escalated) | true |
| Bot records who chose and when | 57 | ViewerReportService.cs:192-195 (ResolvedByUserId, ResolvedAt) | true |
| Buttons only on open reports | 58 | ReportsView.vue:104 | true |
| Escalate does not ban or time out; it only marks | 61-62 | ViewerReportService.cs:171-196 sets status and resolver only | true |
| Link /reference/moderation/bans-and-blocked-terms | 63 | row exists in docs-work/map.md | true |
| Error toast "could not be changed"; report unchanged | 67-69 | i18n error; ReportsView.vue:69 (status changes only on server success) | true |
| Load error text and Try again | 73-75 | i18n loadError; ReportsView.vue:86-87 (@retry refetch); PanelCard retry label common.panel.retry | true |
| Review queue holds automatic actions waiting for a human decision | 80 | admin/i18n/en.json review.description; TrustSafetyReviewService.cs:117-118 | true |
| It is the Review queue on the Trust and safety admin page | 82 | dashboard/src/layouts/dashboard/adminNavigation.ts:74; admin/i18n/en.json trustSafety.title, review.title | true |
| Only operators with the trust and safety review right see it | 83 | AdminTrustSafetyView.vue (trust-safety:review); AdminTrustSafetyController.cs RequireAction | true |
| Reason for access required; nothing loads without it; every read and action audited | 88-89 | admin/i18n/en.json justification.label, justification.hint, idle; TrustSafetyReviewService.cs:111 RequireAsync(justification) | true |
| Queue newest first | 90 | TrustSafetyReviewService.cs:122 OrderByDescending(DetectedAt) | true |
| Row shows account, channel, reason, message, confidence, action, time | 91 | dashboard/src/views/dashboard/admin/components/TrustReviewRow.vue:29-37 | true |
| Confirm keeps the action and closes the review | 96 | admin/i18n/en.json review.confirmConsequence; TrustSafetyReviewService.cs ConfirmAsync | true |
| Overturn removes the Twitch timeout or ban, then marks it overturned | 97 | TrustSafetyReviewService.cs:255-269 (UnbanAsync, then OverturnedAt) | true |
| Failed removal leaves the row as it was | 99 | TrustSafetyReviewService.cs:253-266 (return before stamping) | true |
| Cross-channel signals: accounts flagged in two or more channels | 100 | admin/i18n/en.json signals.title, signals.description; TrustSafetyReviewService.cs:60 (Distinct BroadcasterId >= 2) | true |

## Conventions

- No people's names, no action keys, no numbered levels, no license name, no "open source", no NoMercyBot: checked by search, none found.
- American English: no British spellings found.
- No hosting, price or paid plan mentioned, so no hosting marker is needed.
- One link, to a row of docs-work/map.md.

## Notes (non-blocking)

- The server PATCH does not check that a report is still open (ViewerReportService.cs:183-191); only the dashboard hides the buttons. The page describes the dashboard, so it is correct.
- The Trust and safety page also has a Network blocks section, which the page does not mention. That is a scope choice, not an error.
