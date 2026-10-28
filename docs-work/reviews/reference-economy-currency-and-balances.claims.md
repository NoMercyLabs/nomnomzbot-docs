# Claims: /reference/economy/currency-and-balances

Product repo: nomnomzbot (master). D = dashboard/src/views/dashboard/economy, I = server/src/NomNomzBot.Infrastructure.
Revision 2: answers the reader findings (seeded rules make New rule empty; Channel ID and jar roles explained).

| Claim | Page line | Proof | Verdict |
| --- | --- | --- | --- |
| Sidebar label **Economy** | 6 | dashboard/src/i18n/locales/en.json:830; D/i18n/en.json `title` | true |
| Six tabs and their labels | 10-17 | D/EconomyView.vue:51-58; D/i18n/en.json `tabs` | true |
| A tab shows only to someone who may read it | 21 | D/EconomyView.vue:60-70 | true |
| Moderator and up for Currency, Balances, Earning rules | 22 | I/Content/Identity/ActionDefinitionSeeder.cs:446-451,464-465 (M = default and floor, Mod = 10); D/EconomyView.vue:37-40 | true |
| Anyone may see jars, make one, invite; close/delete needs Moderator | 23-24 | ActionDefinitionSeeder.cs:553-554 (C = Everyone), 580-584 (jars read/create/invite), 473-474 (update/delete Mod) | true |
| Card title **Channel currency**, fields, **Save currency** | 28-34 | D/components/CurrencyPanel.vue form; en.json `currency` | true |
| Name field starts as points | 30 | CurrencyConfigService.cs:39-46 (defaults row returned); CurrencyPanel.vue fill(); server/src/NomNomzBot.Domain/Economy/Entities/CurrencyConfigDefaults.cs:20 | true |
| No saved row reads defaults; save creates it | 36-37 | I/Economy/CurrencyConfigService.cs:39-46,80-85 | true |
| Defaults Off, points, points, 0, no limit, 0, empty | 41-47 | CurrencyConfigDefaults.cs:20-26 | true |
| Off: no earning or spending, no adjust | 41 | I/Economy/CurrencyAccountService.cs:133-137 (every ledger post, incl. AdminAdjust :310-329), 225-226 | true |
| Name required; starting not negative; decimals 0-8; max at least starting | 42-46 | CurrencyConfigService.cs:55-74; CurrencyConfigDefaults.cs:29 | true |
| Plural used for amount not 1 | 43 | I/Platform/Templating/Helpers/People/PeoplePointsHelpers.cs:86-87 | true |
| Starting balance applied at wallet creation | 44 | CurrencyAccountService.cs:507-514 | true |
| Max balance enforced | 45 | CurrencyAccountService.cs:396-403,426-428 | true |
| Decimal places and icon URL: no visible effect | 46-47 | grep `.DecimalPlaces` / `.IconUrl` for CurrencyConfig in Infrastructure: only CurrencyConfigService.cs:88,92,205,209 (store and return) | true |
| Empty name message | 49 | CurrencyPanel.vue submit(); en.json `currency.nameRequired` | true |
| One rule per source | 54 | CurrencyConfigService.cs:137-146 | true |
| New channel has one rule per source, all off, start amounts | 56-57, 69-76 | I/Economy/EventHandlers/EarningRuleSeedOnOnboardingHandler.cs:44-55,95 | true |
| Off badge, Edit rule dialog, Save rule, switch | 59-65 | D/components/EarningRules.vue:125-153; RuleDialog.vue edit title, save | true |
| Chat per message | 69 | I/Economy/EventHandlers/ChatEarningHandler.cs:77 ff; CurrencyEarningService.cs:73 (rate x units) | true |
| Follow, Subscription once; Cheer per bit; Raid per raider, to the raider | 70-73 | I/Economy/EventHandlers/EngagementEarningHandler.cs:72 (sub units 1), 91 (Bits), 97-110 (FromUserId, ViewerCount) | true |
| Supporter once | 74 | I/Supporters/EventHandlers/SupporterEconomyRewardHandler.cs:51-59 (Units 1) | true |
| Watch time and gift subs pay nothing | 75-76 | callers of ApplyEarningAsync / ApplyWatchTimeBatchAsync: ChatEarningHandler, EngagementEarningHandler, SupporterEconomyRewardHandler only; none passes WatchTime or GiftSubscription | true |
| Muted or shadowbanned chatter earns nothing | 78 | ChatEarningHandler.cs:44-51 | true |
| Each event paid once | 79 | CurrencyEarningService.cs:63-75 | true |
| Seconds per payout no effect | 81-82 | CurrencyEarningService.cs:84 (read only with PerWindowCap); RuleDialog.vue submit keeps perWindowCap from row, dialog cannot set it | true |
| New rule list only unused sources; "Every source has a rule" | 86-88 | RuleDialog.vue:42-44, Select placeholder; en.json `rules.dialog.sourceNone` | true |
| New rule saved switched on | 90-93 | RuleDialog.vue submit `isEnabled: props.rule?.isEnabled ?? true` | true |
| Switch off shows Off; delete confirm; balances stay | 97-100 | EarningRules.vue:75-77,125,157-164; en.json `rules.confirm*`; CurrencyConfigService.cs:184 | true |
| Empty rules text | 102 | en.json `rules.empty` | true |
| Wallet on first earn; lifetime earned/spent | 106-108 | en.json `balances.empty`, `balances.lifetime`; BalancesPanel.vue row | true |
| Search, adjust dialog, amount and reason | 110-117 | BalancesPanel.vue:55,88-98; AdjustDialog.vue submit, FormDialog | true |
| Validation message | 119-120 | AdjustDialog.vue:36-45; en.json `balances.dialog.invalid` | true |
| Refuses below 0, above max, frozen | 122-126 | CurrencyAccountService.cs:393-394,402-403,420-428 | true |
| Freeze switch, its accessible name, effect | 130-133 | BalancesPanel.vue:48-50,99-104; en.json `balances.freeze`; CurrencyAccountService.cs:341,393-394 | true |
| New jar dialog, fields, starts open | 139-156 | D/components/JarDialog.vue submit (`isOpen: true`); en.json `jars.dialog` | true |
| Closed jar takes no currency | 146 | I/Economy/SavingsJarService.cs:350-351 | true |
| Take-out cap per channel is per withdrawal | 154 | SavingsJarService.cs:489 | true |
| Close/open switch, Closed badge, delete dialog | 160-165 | SavingsJars.vue toggle, StatusBadge, ConfirmDialog; en.json `jars.confirmTitle`, `jars.confirmBody` | true |
| Only owner channel may change, close, delete | 167 | SavingsJarService.cs:107-109,121,151 | true |
| Deposits card text; nothing to put in, take out, accept on page | 169-170 | SavingsJars.vue quiet PanelCard; en.json `jars.moneyTitle`, `jars.notYet`; no contribute/withdraw/accept call in D/components | true |
| Invite: must accept | 175 | SavingsJarService.cs:280-295; en.json `jars.invite.description` | true |
| Channel ID is the bot's channel id (a GUID), not the Twitch name | 177-179 | server/src/NomNomzBot.Application/DTOs/Economy/EconomyRequests.cs:173 (`Guid InvitedBroadcasterId`); InviteDialog.vue submit; en.json `jars.invite.targetHelp` | true |
| Invite steps | 180-184 | D/components/InviteDialog.vue submit, closes on success | true |
| Role Partner/Viewer, default Partner, no behavior difference | 188 | InviteDialog.vue:31,41; SavingsJarService.cs:234-257 (role stored); grep JarRole.Partner / JarRole.Viewer in Infrastructure: no reader | true |
| Put-in cap per stream | 189 | SavingsJarService.cs:352-375 | true |
| Take-out cap per withdrawal | 190 | SavingsJarService.cs:484-487 | true |
| Second invite refused | 192 | SavingsJarService.cs:240-251 | true |

## Not on the page (reported)

- IAgeConsentService: no surface on the Economy page; not described.
- Defects: WatchTime and GiftSubscription earning rules have no caller; Seconds per payout has no effect without a per-window cap the dashboard cannot set; currency Decimal places and icon URL are stored but never read; jar Role is stored but never read; the dashboard shows no channel ID to copy for the invite; the jars card claims "Viewers use the chat commands" but no jar chat command was found (only the pipeline action I/Economy/PipelineActions/JarContributeAction.cs).
