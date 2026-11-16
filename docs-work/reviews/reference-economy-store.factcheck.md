# Independent source verification: /reference/economy/store
Verdict: PASS
Reviewed: src/content/reference/en/economy/store.mdx
Reviewed-SHA: cb36b576254bedb9009ec82b61d7e7c47a083a095e5a095cb734c5d244215c1c

## Independent overhaul review, 2026-11-05

CatalogService.cs:280-465,467-538; CatalogController.cs:140-163; CatalogPanel/CatalogDialog; viewer route.ts: validation, stock/debit, all binding types, authenticated buyer, no auto-refund, incomplete viewer purchase UI.

Reviewed independently of the article author, in actual navigation order. Current product source 54da8b631 and relevant changes since b12f4f696 were read without starting the bot, executing platform actions or changing channel data. This verdict is source verification, not proof of live platform delivery. See [review-moderation-economy-community.md](../overhaul/review-moderation-economy-community.md) for the review scope and findings.

## Prior review history

The earlier text below is retained as history; it does not independently approve a later article hash.

Author source audit: 2026-11-04. Independent review of the revised article is pending; the historical PASS below does not approve this text.
Product source: C:/Projects/NoMercyLabs/nomnomzbot at b12f4f696, inspected without starting the bot or changing data.

Explains the earn-to-action purpose while putting the incomplete purchase surface up front; corrects the stale claim that bound pipelines do not run.

| Revised claim or retained core behavior | Current source opened |
| --- | --- |
| Management UI, required Effect kind and exact fields | dashboard/src/views/dashboard/economy/components/CatalogPanel.vue; components/CatalogDialog.vue; i18n/en.json:140-200 |
| Current purchase checks and payment/stock behavior | server/src/NomNomzBot.Infrastructure/Economy/CatalogService.cs:280-465 |
| All binding kinds now execute after purchase | server/src/NomNomzBot.Infrastructure/Economy/CatalogService.cs:467-538 |
| Buyer and role bound to authenticated caller | server/src/NomNomzBot.Api/Controllers/V1/CatalogController.cs:140-163 |
| Viewer store not implemented and no buy/refund controls | dashboard/src/views/viewer/nav/route.ts:27; dashboard/src/views/dashboard/economy/components/CatalogPanel.vue; CatalogDialog.vue |
| Default roles | server/src/NomNomzBot.Infrastructure/Content/Identity/ActionDefinitionSeeder.cs:459-463,575-576 |

The scenario is a recommended use of verified bindings, not a runtime purchase test. No platform calls were performed.

## Historical evidence

The prior review is retained for its claim inventory. Its verdict and file hashes refer to the earlier article; the current binding implementation supersedes its old pipeline finding.

# Fact check: src/content/reference/en/economy/store.mdx
Historical verdict: PASS
Reviewed: C:\Projects\NoMercyLabs\nomnomzbot-docs\src\content\reference\en\economy\store.mdx
Reviewed-SHA: 4fcdb4824580d04b

Judged fresh against the current text (sha above). Product repo: C:\Projects\NoMercyLabs\nomnomzbot, master, read only.
EN = dashboard/src/views/dashboard/economy/i18n/en.json, prefix dashboard.economy.catalog. CS = server/src/NomNomzBot.Infrastructure/Economy/CatalogService.cs. DLG = dashboard/src/views/dashboard/economy/components/CatalogDialog.vue. PNL = .../CatalogPanel.vue. SEED = server/src/NomNomzBot.Infrastructure/Content/Identity/ActionDefinitionSeeder.cs.

| Claim | Page line | Supported by | Status |
| --- | --- | --- | --- |
| Tab label **Store** on **Economy** page | 6-7, 18 | EN tabs.catalog "Store" | true |
| Store tab visible to anyone who may open Economy (catalog read is community) | 12 | SEED:575 C("economy:catalog:read") | true |
| Moderator and up may add, edit, delete, switch | 13 | SEED:459-461 Mod floor; rungs Moderator 10 < LeadModerator < Editor < Broadcaster (dashboard/src/api/permissions.ts:31-40) | true |
| Edit, delete, switch gated to them | 14 | PNL:106 can('economy:catalog:update'), :117 can('economy:catalog:delete'), :127 GatedSwitch | true |
| List title and description | 19 | EN title "Store items", description "Things viewers buy with the currency." | true |
| New item / New store item / Save item labels | 20-25 | EN new, dialog.newTitle, dialog.save | true |
| New item saved switched on | 26 | DLG:150 isEnabled: true | true |
| Cost shown as "50 to buy" | 26 | EN cost "{cost} to buy" | true |
| Effect kind required before save (new item) | 28, 39 | DLG:107-114 problem(); CS:97-98; EN sinkRequired "Enter the effect kind." | true |
| No part of the bot acts on Effect kind | 29 | CS:140 stored, CS:453 copied to CatalogItemPurchasedEvent; grep IEventHandler<CatalogItemPurchasedEvent> in server/src: no match | true |
| Duplicate name refused, case and edge spaces ignored | 31-32 | CS:102-115 Trim().ToLowerInvariant() | true |
| Negative cost refused | 33 | CS:99-100 | true |
| All 12 field labels | 37-48 | EN dialog.name, about, sink, cost, permission, pipeline, cooldown, stock, perStream, order, icon, perUser | true |
| Name required message | 37 | EN dialog.nameRequired; DLG:108-109 | true |
| Effect kind cannot change later / grayed out on edit | 39, 103 | DLG:217 :disabled="item !== null" | true |
| Defaults (Everyone, sort 0, etc.) | 37-48 | DLG:57, 64, 94, 101; CS:145-147 Everyone when blank | true |
| Stock / per stream empty is no limit | 44-45 | CS:329-330, 345-369 | true |
| Sort order is the list place | 46 | CS:62 OrderBy(SortOrder) | true |
| Cooldown per viewer on/off | 48 | CS:314-327 (CooldownPerUser filter) | true |
| Role list, raw names, lowest first | 50-59 | DLG:242 v-for rungNames; permissions.ts:31-45 | true |
| Picker holds command, pipeline, action | 61 | DLG:252-253 clearable, kinds | true |
| Command/action runs, pipeline does not; purchase still recorded | 42, 62-63 | CS:475-477 returns unless Command or Action; no event handler (grep above); CS:419-433 saves before | true |
| No dashboard or chat buy; Store viewer page Coming soon | 67-69 | PurchaseAsync only caller CatalogController.cs:161; dashboard/src/views/viewer/nav/route.ts:27 comingSoon; no purchase call in dashboard/src/api | true |
| A program buys for the signed-in viewer only | 71-72 | CatalogController.cs:138-161 (buyer = caller, role resolved server-side) | true |
| Check order 1-6 | 80-85 | CS:282-283, 300-312, 314-327, 329-330, 332-369, 389-417 | true |
| Failed check charges nothing | 78 | all returns before debit; stock reservation undone CS:404-416 | true |
| Debit, stock minus one, name snapshot | 87-89 | CS:373-401, 419-433 ItemNameSnapshot | true |
| No chat line of its own | 90 | CS:276-464 no chat send | true |
| Buyer as invoker; one bot voice | 92-93 | CS:483-492 invoker.InvokeAsync with buyer | true |
| Target failure does not refund | 94 | CS:493-512 logged only | true |
| No dashboard refund button | 96 | no refund call for catalog in dashboard/src (grep refund: only billing, rewards, channel-points files) | true |
| Switched-off item listed, not buyable | 110 | CS:282-283 | true |
| Delete dialog texts and action | 115-116 | EN confirmTitle "Delete {name}?", confirmBody, confirmAction "Delete item" | true |
| Past purchases keep name | 119 | CS:427 ItemNameSnapshot | true |

## Links

- /reference/economy/currency-and-balances: map.md row 92. OK.
- /reference/commands/pipelines: listed in this page's Links column, map.md row 93. OK.

## Conventions

No people's names, no action keys, no numbered levels, no license name, no hosting or price mention, American English ("grayed"), NomNomzBot only. One bot voice stated (line 93).

## Notes (not blocking)

- Line 68 calls the viewer page **Store**. Its long nav label is "Points and store" (dashboard/src/i18n/locales/en.json:874); "Store" is its short label (en.json:878, viewerNavigation.ts:59). Consider naming both.
