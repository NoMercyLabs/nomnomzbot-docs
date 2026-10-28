# Fact-check: /reference/settings/billing
Verdict: PASS
Reviewed: C:\Projects\NoMercyLabs\nomnomzbot-docs\src\content\reference\en\settings\billing.mdx
Reviewed-SHA: 316ebb3de9667ead

Paths are in C:\Projects\NoMercyLabs\nomnomzbot. B = dashboard/src/views/dashboard/settings/billing.

## Claims checked

| Claim | Source | Verdict |
| --- | --- | --- |
| Only the Broadcaster may open and change; mods/editors do not see it | server/src/NomNomzBot.Infrastructure/Content/Identity/ActionDefinitionSeeder.cs:476-478 (billing:read, billing:manage = Broadcaster); B/route.ts:21 (action billing:read) | true |
| Hosting marker text | B/i18n/en.json:6; B/components/PlanPanel.vue:198-199 | true; marker is on the page in the Callout |
| No license label on the page | page text read in full | true |
| State labels Active, Trial, Payment overdue, Canceled, Not finished | B/i18n/en.json:7-13 | true |
| Dates Renews on, Ends on, Trial ends on, Pay before | B/i18n/en.json:18-21; PlanPanel.vue:100-104 | true |
| Custom bot name / Priority support, Included / Not included | B/i18n/en.json:22-25 | true |
| Invite-grant text; no payment buttons | B/i18n/en.json:26; PlanPanel.vue:107-109 (manageable excludes isInviteOnlyGrant) | true |
| Free or per month; Current plan | TiersPanel.vue:75-82; en.json:48-50 | true |
| Limit row labels, No limit, Not included | B/i18n/en.json:59-65; TiersPanel.vue:88-99 | true |
| Choose plan opens payment page; Switch to this plan changes in place | TiersPanel.vue:113-128, button label line ~191 | true |
| Switch at the end of the period, default on, only with paid plan | TiersPanel.vue:52 (ref(true)), template v-if hasPaidPlan; en.json:53-54 | true |
| Keep my plan shows when set to end; Cancel plan hidden then | PlanPanel.vue:201-229 | true |
| Cancel dialog title and three consequence lines | B/i18n/en.json:33,39-41 | true |
| Cancel right away, optional reason, pending-cancel text | B/i18n/en.json:27,35-37 | true |
| Check code does not use the code; result lines | InvitePanel.vue:12; en.json:74-81 | true |
| Use code result lines | en.json:82-84 | true |
| Founders badge: state, since, from code | InvitePanel.vue:52-76,194-198; en.json:88-93 | true |
| Invoices newest first; number, amount, status, dates; Open invoice; paging; empty text | InvoicesPanel.vue:12,99-131; en.json:98-108 | true |

## Writer's defect notes

- The page states what the code does today. It does not repeat the writer's defect notes as facts.
- Invoice status is shown raw (InvoicesPanel.vue:101 `{{ invoice.status }}`). The page says only "status", which is true.
- Founders badge "inactive" state (en.json:92) exists; the page says "whether the channel has the badge", which covers it.

## Notes (style, not a fail)

- "These buttons sit at the bottom of Your plan, for a paid plan only." The code gate is `manageable` = billing:manage and a subscription that is not an invite grant (PlanPanel.vue:107-109). It does not check price. A free subscription row, if the API returns one, would also show Manage payment. Not checked: whether the API returns a subscription for a free channel. Consider "for a plan you pay for" only if that is proven.
