# Claims: /reference/economy/store

Product repo: C:\Projects\NoMercyLabs\nomnomzbot (master, read only). Paths are relative to it.
EN = dashboard/src/views/dashboard/economy/i18n/en.json, key prefix dashboard.economy.catalog.

| Claim | Page line | Proof | Verdict |
| --- | --- | --- | --- |
Repair 6 (2026-10-28): purchase path stated plainly.

| Claim | Page line | Proof | Verdict |
| --- | --- | --- | --- |
| No way to buy from the dashboard or chat; viewer Store page Coming soon | 67-69 | dashboard/src/api/economy.ts has no purchase call; PurchaseAsync's only caller is CatalogController.cs:161 (grep PurchaseAsync server/src); dashboard/src/views/viewer/nav/route.ts:27 | true |
| A program can buy, for the signed-in viewer only | 71-72 | CatalogController.cs:138-161 ([Authorize], buyer bound to caller at 150-159) | true |
| Purchase sends no chat line of its own | 90 | CatalogService.cs:276-464 (no chat send) | true |
| Pipelines link allowed | 61 | docs-work/map.md:93 Links to /reference/commands/pipelines | true |

Repair 5 (2026-10-28): current line numbers for the changed claims. Earlier repair tables below keep their older line numbers.

| Claim | Page line | Proof | Verdict |
| --- | --- | --- | --- |
| Effect kind required before save; nothing acts on it | 28-29, 39 | CatalogDialog.vue problem() (sinkRequired); CatalogService.cs:97-98, 140, 453; no reader of SinkType beyond DTO and the unhandled event | true |
| Field links a command, bot action or pipeline; command or action runs on each purchase; a pipeline does not run | 42, 61-63 | CatalogDialog.vue TargetPicker :kinds ['command','pipeline','action']; CatalogService.cs:444-458 publishes CatalogItemPurchasedEvent with PipelineId, no IEventHandler<CatalogItemPurchasedEvent> in server/src; CatalogService.cs:475-477 returns unless Command or Action | true |
| Linked pipeline: purchase still recorded and charged | 63 | CatalogService.cs:389-433 run before the event and target step | true |
| Purchase only via web interface, signed-in viewer for themselves | 67 | CatalogController.cs:138-161 | true |
| Viewer Store page Coming soon | 69 | dashboard/src/views/viewer/nav/route.ts:27; dashboard/src/i18n/locales/en.json:912-913 | true |
| Checks run in order | 76-84 | CatalogService.cs:282-417 | true |
| One bot voice for what the command or action says | 91 | CatalogService.cs:483-492 (same invoker as chat commands) | true |
| Effect kind grayed out on edit | 101 | CatalogDialog.vue :disabled="item !== null" | true |
| Delete dialog and past purchases keep name | 113-117 | EN confirmTitle, confirmBody, confirmAction; CatalogService.cs:427 ItemNameSnapshot | true |

Repair 1 (2026-10-28): page line numbers below are approximate after the repair edits; the new rows carry current lines.

| Claim | Page line | Proof | Verdict |
| --- | --- | --- | --- |
| Moderator, Lead moderator, Editor, Broadcaster may add, edit, switch, delete | 13-14 | server/src/NomNomzBot.Infrastructure/Content/Identity/ActionDefinitionSeeder.cs:459-461 (Mod floor); store tab read is community, line 575 | true |
| Effect kind takes any short label, is required, only saved | 23-24 | CatalogService.cs:97-98 (required, no other check), 140 (saved); no reader of SinkType beyond DTO and event | true |
| Role list written as the select shows it (raw names Vip, LeadModerator) | 48-57 | dashboard/src/views/dashboard/economy/components/CatalogDialog.vue:242-243 renders `{{ level }}` from rungNames; dashboard/src/api/permissions.ts:32-39 | true |
| Picker offers pipeline; a purchase runs only a command or action, not a pipeline | 59-61 | CatalogDialog.vue TargetPicker kinds; CatalogService.cs:475-477; no IEventHandler<CatalogItemPurchasedEvent> in server/src | true |

Repair 2 (2026-10-28):

| Claim | Page line | Proof | Verdict |
| --- | --- | --- | --- |
| Field lets you link a command, pipeline or action; a purchase runs only a command or action | 40, 59-61, 83 | CatalogDialog.vue TargetPicker :kinds; CatalogService.cs:475-477; no IEventHandler<CatalogItemPurchasedEvent> in server/src | true |
| No chat command buys; only the web API purchase endpoint for the signed-in caller | 65-67 | ICatalogService.PurchaseAsync called only from CatalogController.cs:161 (grep PurchaseAsync server/src); caller bound at CatalogController.cs:150-159; no purchase hook in dashboard/src/api/economy.ts | true |
| Purchase sends no chat line itself | 68 | CatalogService.cs:276-464 PurchaseAsync: ledger, save, event, RunDirectTargetAsync; no chat send | true |
| Linked command or action speaks in the one bot voice | 84 | CatalogService.cs:483-492 invoker.InvokeAsync (same invoker as chat commands) | true |

Repair 3 (2026-10-28): one outcome for a linked pipeline everywhere.

| Claim | Page line | Proof | Verdict |
| --- | --- | --- | --- |
| Field: the command or bot action a purchase runs | 40 | CatalogService.cs:475-477 (Command or Action only) | true |
| List also offers pipelines; a purchase never runs one | 59-61 | CatalogDialog.vue TargetPicker :kinds includes 'pipeline'; CatalogService.cs:475-477; no IEventHandler<CatalogItemPurchasedEvent> in server/src | true |
| No part of the bot acts on Effect kind | 24 | SinkType only stored (CatalogService.cs:140) and copied to the unhandled event (453) | true |
| Viewer Store page shows Coming soon, not built yet | 66 | dashboard/src/views/viewer/nav/route.ts:27 comingSoon; dashboard/src/i18n/locales/en.json:912-913 | true |
| Purchase sends no chat line of its own | 68-69 | CatalogService.cs:276-464 (no chat send) | true |
| Removed: the sentence about a program calling the web interface (reader: not actionable) | - | - | - |

Repair 4 (2026-10-28):

| Claim | Page line | Proof | Verdict |
| --- | --- | --- | --- |
| A purchase is made only through the web interface, by a signed-in viewer buying for themselves | 65 | PurchaseAsync's only caller is CatalogController.cs:161; [Authorize] and purchase action is community (ActionDefinitionSeeder.cs:576); buyer bound to the caller, CatalogController.cs:150-159 | true |
| Checks run when a purchase is made through the web interface | 73 | CatalogService.cs:276-370 | true |

Original rows:

| Claim | Page line | Proof | Verdict |
| --- | --- | --- | --- |
| Sidebar entry **Economy** leads to the economy page | 6, 17 | dashboard/src/layouts/dashboard/navigation.ts:252-256; dashboard/src/i18n/locales/en.json:830 | true |
| Tab is labeled **Store** | 7, 17 | EN tabs.catalog "Store"; EconomyView.vue:56 | true |
| Tab shows only to someone who may read the store | 12 | EconomyView.vue:42, 60-61, 70 (tabs filtered by economy:catalog:read) | true |
| New item, edit, delete, switch each gated by role | 13 | EconomyView.vue:104 (canCreate); CatalogPanel.vue:110, 121 (can update/delete); GatedSwitch action update, CatalogPanel.vue:131-136 | true |
| List title and description | 18 | EN title "Store items", description "Things viewers buy with the currency." | true |
| New item opens **New store item** | 19-20 | EconomyView.vue:104-111; CatalogDialog.vue editTitle/newTitle; EN dialog.newTitle | true |
| New item is saved switched on | 25 | CatalogDialog.vue send(): isEnabled: true | true |
| Cost shown as "N to buy" | 25 | EN cost "{cost} to buy"; CatalogPanel.vue cost line | true |
| Duplicate name refused, trimmed and case-insensitive | 27-28 | server/src/NomNomzBot.Infrastructure/Economy/CatalogService.cs:102-115 | true |
| Negative cost refused | 29 | CatalogService.cs:99-100 | true |
| Field labels | 33-44 | EN dialog.name, about, sink, cost, permission, pipeline, cooldown, stock, perStream, order, icon, perUser | true |
| Name required message | 33 | EN dialog.nameRequired; CatalogDialog.vue problem() | true |
| Effect kind required on new item, cannot change later | 35, 77 | CatalogDialog.vue problem() (item === null), Input :disabled="item !== null"; EN dialog.sinkHelp, sinkRequired; CatalogService.cs:97-98 | true |
| Effect kind is only saved (no code acts on it) | 35 | CatalogService.cs:140, 453 (stored, copied to event); no reader of SinkType beyond DTO/event (grep SinkType server/src) | true |
| Defaults: cost 0, permission Everyone, cooldown 0, per-user off, stock/per-stream/icon/about empty, sort 0 | 33-44 | CatalogDialog.vue watch(open) defaults; CatalogService.cs:145-147 (Everyone when blank) | true |
| Stock empty is no limit; per-stream empty is no limit | 40-41 | EN dialog.stockHelp, perStreamHelp; CatalogService.cs:345, 347-369 | true |
| Per viewer per stream counts the current stream, only when a stream is live | 41, 59 | CatalogService.cs:349-368 (streamStart null skips) | true |
| Cooldown per viewer on/off meaning | 44 | EN dialog.perUserHelp; CatalogService.cs:331-343 | true |
| Who can buy lists the rung names lowest first | 46 | dashboard/src/api/permissions.ts:32-39, 45; CatalogDialog.vue SelectItem v-for rungNames | true |
| Picker offers command, pipeline, action, clearable | 48 | CatalogDialog.vue TargetPicker clearable :kinds="['command','pipeline','action']" | true |
| Check order: available, role, cooldown, stock, per stream, balance | 55-60 | CatalogService.cs:282-283, 300-312, 314-327, 329-330, 332-369, 389-417 | true |
| Failed check charges nothing | 53 | CatalogService.cs: failures return before debit; stock reservation undone on debit failure 404-416 | true |
| Debit, stock minus one, purchase saved with name snapshot | 62-64 | CatalogService.cs:373-387 (stock), 389-401 (debit), 419-433 (ItemNameSnapshot) | true |
| Command or action target runs with buyer as invoker | 66 | CatalogService.cs:460, 467-490 | true |
| Target failure does not undo purchase | 67 | CatalogService.cs:463-466, 491-512 (logged only) | true |
| No dashboard button to buy or refund | 69 | dashboard/src/api/economy.ts has no purchase/refund call (grep "purchase\|refund" empty); only CatalogController.cs:138-206 | true |
| Viewer Store page is Coming soon | 70 | dashboard/src/views/viewer/nav/route.ts:27; viewerNavigation.ts:57-59; en.json:878 "Store" | true |
| Edit opens **Edit store item** with values | 74-75 | CatalogPanel.vue editing = row; CatalogDialog.vue watch fills from item; EN dialog.editTitle | true |
| Switch toggles isEnabled; off item cannot be bought, stays listed | 83-84 | CatalogPanel.vue toggle(); CatalogService.cs:282-283 | true |
| Delete confirm text and action | 89-90 | EN confirmTitle "Delete {name}?", confirmBody, confirmAction | true |
| Past purchases keep their name | 93 | ICatalogService.cs DeleteItemAsync doc (soft delete, name snapshot); CatalogService.cs:427 | true |

## Left out (defect)

- A **pipeline** chosen in **Command or pipeline to run** does not run. PurchaseAsync publishes CatalogItemPurchasedEvent (CatalogService.cs:444-458) with the PipelineId, but no IEventHandler<CatalogItemPurchasedEvent> exists in server/src; RunDirectTargetAsync returns for Pipeline kind (CatalogService.cs:475-477). The page says only that a command or action runs.
