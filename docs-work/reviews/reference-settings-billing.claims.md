# Claims: /reference/settings/billing

Paths are in C:\Projects\NoMercyLabs\nomnomzbot. B = dashboard/src/views/dashboard/settings/billing.

| Claim | Source |
| --- | --- |
| Page label **Billing** | dashboard/src/i18n/locales/en.json:906; layouts/dashboard/settingsNavigation.ts:95 |
| In the **Account** group, beside Resource limits | settingsNavigation.ts:92-95; en.json:942 |
| Limits and usage are on Resource limits | B/BillingView.vue:12-13 |
| Restriction text shown at bottom of Your plan | B/components/PlanPanel.vue:198-199; B/i18n/en.json:6 |
| Only the broadcaster may read and manage billing; mods/editors never see it | server/src/NomNomzBot.Infrastructure/Content/Identity/ActionDefinitionSeeder.cs:476-478; B/route.ts:21 |
| Four panels: Your plan, Plans, Invite code, Invoices | B/BillingView.vue:32-35; B/i18n/en.json:15,44,71,96 |
| Panel descriptions | B/i18n/en.json:16,45,72,97 |
| State labels Active, Trial, Payment overdue, Canceled, Not finished | B/i18n/en.json:7-13; PlanPanel.vue:56-71 |
| Dates Renews on, Ends on, Trial ends on, Pay before | PlanPanel.vue:90-105; en.json:18-21 |
| Custom bot name / Priority support, Included / Not included | PlanPanel.vue:179-186; en.json:22-25 |
| Invite-grant text, no payment buttons | PlanPanel.vue:107-109,188-190; en.json:26 |
| Price Free or per month; Current plan marker | TiersPanel.vue:76-83,175-181; en.json:48-50 |
| Limit rows and labels | planLimits.ts:19-24; en.json:62-65 |
| Row shows only when a plan sets it | planLimits.ts:54-58 |
| No limit (-1) / Not included (no row) | planLimits.ts:36-46; TiersPanel.vue:92-99 |
| Choose plan without paid plan opens payment page; Switch to this plan changes in place | TiersPanel.vue:113-128,191 |
| Switch at the end of the period, default on, off = now | TiersPanel.vue:52,151-157; en.json:53-54 |
| Manage payment, Cancel plan, Keep my plan buttons and when shown | PlanPanel.vue:107-110,201-229; en.json:28-32 |
| Cancel dialog title and consequences | PlanPanel.vue:235-246; en.json:33,39-41 |
| Cancel right away off = until period end; reason optional | PlanPanel.vue:138-147,249-261; en.json:35-37 |
| Pending-cancel text | PlanPanel.vue:191-193; en.json:27 |
| Check code does not use the code up; result lines | InvitePanel.vue:12-13,78-104,125-135; en.json:74-81 |
| Use code result lines | InvitePanel.vue:106-123,137-147; en.json:82-84 |
| Founders badge state, since, from code | InvitePanel.vue:52-76,194-198; en.json:88-93 |
| Invoice line: number, amount, status, issued/due/paid/refunded | InvoicesPanel.vue:55-73,99-103 |
| Open invoice opens new tab when present | InvoicesPanel.vue:105-109 |
| Previous page / Next page paging; empty text | InvoicesPanel.vue:112-131; en.json:98,107-108 |
