# Claims: /reference/moderation/reports

Page: src/content/reference/en/moderation/reports.mdx
Product repo: NoMercyLabs/nomnomzbot, master (read only). Paths are relative to that repo.

| Claim | Page line | Proof | Verdict |
| --- | --- | --- | --- |
| Page title is **Viewer reports** | 2, 6, 34 | dashboard/src/i18n/locales/en.json:904 (`settingsPages.reports`); ReportsView.vue:76 | true |
| The page is in the **Access** group of the settings sidebar | 7, 34 | dashboard/src/layouts/dashboard/settingsNavigation.ts:77,87 | true |
| A moderator or higher may open and read | 13 | settings/reports/route.ts (`moderation:report:read`); server/src/NomNomzBot.Infrastructure/Content/Identity/ActionDefinitionSeeder.cs:263 (Mod); ModerationController.cs:1531 | true |
| A lead moderator or higher may dismiss or escalate | 14 | ActionDefinitionSeeder.cs:264 (LeadModerator); ModerationController.cs:1549; ReportsView.vue:104 | true |
| Any viewer may file a report | 15 | ActionDefinitionSeeder.cs:553-554,574 (`C` = Everyone, community plane); ModerationController.cs:1508-1510 | true |
| The dashboard has no form to file a report; it comes through the API | 20-21 | dashboard/src/__tests__/crudBaseline.ts:12-14,55 (POST reports has no dashboard caller); ModerationController.cs:1510 | true |
| Empty reason is refused with "A report needs a reason." | 25 | server/src/NomNomzBot.Infrastructure/Moderation/ViewerReportService.cs FileReportAsync (reason.Length == 0) | true |
| Reason over 500 characters is refused | 26 | ViewerReportService.cs ReasonMaxLength = 500 and its check | true |
| Missing chatter refused with "A report needs a reported user." | 27 | ViewerReportService.cs FileReportAsync (IsNullOrWhiteSpace ReportedTwitchUserId) | true |
| New report status is Open | 29 | ViewerReportService.cs (`Status = "open"`) | true |
| Reported chatter is get-or-created as a user | 30 | ViewerReportService.cs (`_users.GetOrCreateAsync`); IViewerReportService.cs summary | true |
| List shows open reports first, newest first | 35 | ReportsView.vue:43 (`ref('open')`); ViewerReportService.cs ListReportsAsync OrderByDescending(CreatedAt) | true |
| **Show reports that are** with Open, Escalated, Dismissed filters the list | 36-37 | settings/reports/i18n/en.json statusLabel, status.*; ReportsView.vue:90-94; ViewerReportService.cs ListReportsAsync (`r.Status == status`) | true |
| Row shows reported name, then reason and "Filed by {name} {when}" | 39-40 | ReportsView.vue:52-63,101-102; i18n/en.json `filed` | true |
| Unknown reporter shows "a viewer" | 41 | ReportsView.vue:58; i18n/en.json `someone` | true |
| Empty-list texts per status | 45-47 | i18n/en.json `empty.*`; ReportsView.vue:85 | true |
| **Dismiss** / **Escalate** labels and their meaning | 52-53 | i18n/en.json `dismiss`, `escalate`, `explain` | true |
| Success toasts | 54 | i18n/en.json `done.*`; ReportsView.vue:67-68 | true |
| Report moves to the new status list | 55 | ViewerReportService.cs ResolveReportAsync (dismiss to dismissed, escalate to escalated) | true |
| Bot records who resolved and when | 57 | ViewerReportService.cs ResolveReportAsync (ResolvedByUserId, ResolvedAt) | true |
| Buttons only on open reports | 58 | ReportsView.vue:104 (`report.status === 'open'`) | true |
| Escalate does not ban or time out | 61-62 | ViewerReportService.cs:28 (enforcement stays with normal ban/timeout tools); ResolveReportAsync only sets status | true |
| Error toast "could not be changed" | 67 | i18n/en.json `error`; ReportsView.vue:69 | true |
| Load error text and **Try again** | 73-75 | i18n/en.json `loadError`; ReportsView.vue:86-87; components/layout/PanelCard.vue:192-193; locales/en.json common.panel.retry "Try again" | true |
| Review queue holds automatic actions waiting for a human decision | 80 | ITrustSafetyReviewService.cs GetReviewQueueAsync summary; admin/i18n/en.json review.description | true |
| It is the **Review queue** on the **Trust and safety** admin page | 82 | dashboard/src/layouts/dashboard/adminNavigation.ts:74; admin/i18n/en.json trustSafety.title, review.title | true |
| Only operators with the trust and safety review right see it | 83 | AdminTrustSafetyView.vue:65,258 (`trust-safety:review`); AdminTrustSafetyController.cs:59,81,107,132; Domain/Identity/IamPermissionKeys.cs:93 | true |
| **Reason for access** required; nothing loads without it; audited | 88-89 | admin/i18n/en.json justification.*, idle; AdminTrustSafetyView.vue:262-266 | true |
| Queue is newest first | 90 | ITrustSafetyReviewService.cs GetReviewQueueAsync summary ("newest first") | true |
| Row contents | 91 | admin/components/TrustReviewRow.vue:28-37 | true |
| **Confirm** keeps the action and closes the review | 96 | admin/i18n/en.json review.confirmConsequence; ITrustSafetyReviewService.cs ConfirmAsync summary | true |
| **Overturn** removes the Twitch timeout or ban, then marks it overturned | 97 | ITrustSafetyReviewService.cs OverturnAsync summary | true |
| Failed reversal leaves the row as it was | 99 | ITrustSafetyReviewService.cs OverturnAsync summary | true |
| **Cross-channel signals**: accounts flagged in two or more channels | 100 | admin/i18n/en.json signals.title, signals.description; AdminTrustSafetyView.vue:293-295 | true |
