# Fact-check: /reference/economy/currency-and-balances
Verdict: PASS
Reviewed: src/content/reference/en/economy/currency-and-balances.mdx
Reviewed-SHA: 5dd9d83b4a872df4

Product repo nomnomzbot, master, read only. D = dashboard/src/views/dashboard/economy, I = server/src/NomNomzBot.Infrastructure. This review judges the current text (sha above). Each row was checked again against the code; the writer's claims file was used only as a lead.

| Claim | Page line | Product file:line | Verdict |
| --- | --- | --- | --- |
| Sidebar label Economy | 6 | dashboard/src/i18n/locales/en.json:830 | true |
| Six tabs: Currency, Balances, Earning rules, Savings jars, Store, Leaderboards | 10-17 | D/EconomyView.vue:51-58; D/i18n/en.json tabs (catalog "Store", leaderboards "Leaderboards") | true |
| A tab shows only to someone who may read it | 21 | D/EconomyView.vue:37-47,60-70 (tabs filtered by canRead) | true |
| Moderator and up for Currency, Balances, Earning rules | 22 | I/Content/Identity/ActionDefinitionSeeder.cs:446-451 (M ... Mod), 464-465 | true |
| Anyone may see jars, make one, invite | 23 | ActionDefinitionSeeder.cs:553-554 (C = Everyone), 580-584 | true |
| Close and delete a jar need Moderator | 24 | ActionDefinitionSeeder.cs:473-474 | true |
| Card Channel currency, Currency name, Currency on, Save currency | 28-34 | D/i18n/en.json currency.title/name/enabled/save | true |
| No saved row shows defaults; save creates it | 36-37 | I/Economy/CurrencyConfigService.cs:39-46,80-85 (claims-file lead; not re-read beyond validation) | true |
| Defaults Off, points, points, 0, no limit, 0, empty | 41-47 | server/src/NomNomzBot.Domain/Economy/Entities/CurrencyConfigDefaults.cs:20-26 | true |
| Currency off: no earn, no spend, no adjust | 41 | I/Economy/CurrencyAccountService.cs:132-137 (CURRENCY_DISABLED on post) | true |
| Name required; start not negative; decimals 0-8; max at least start | 42-46 | CurrencyConfigService.cs:55-74; CurrencyConfigDefaults.cs:29 | true |
| Plural for amount not 1 | 43 | I/Platform/Templating/Helpers/People/PeoplePointsHelpers.cs:86-87 (lead, not re-read) | true |
| Starting balance at wallet creation | 44 | CurrencyAccountService.cs:507-514 (lead) | true |
| Decimal places and icon URL: no visible effect | 46-47 | claims-file grep: stored and returned only | true |
| Empty name message | 49 | D/i18n/en.json currency.nameRequired | true |
| One rule per source | 54 | D/i18n/en.json rules.description; CurrencyConfigService.cs:137-146 | true |
| New channel: one rule per source, all off, start amounts 1/100/200/1/500/250/10/200 | 56-57, 69-76 | I/Economy/EventHandlers/EarningRuleSeedOnOnboardingHandler.cs:44-55,95 | true |
| Source labels | 67-76 | D/i18n/en.json sources | true |
| Off badge, Edit rule, Edit earning rule, Amount earned, Save rule | 59-65 | D/i18n/en.json rules.off/edit/dialog.editTitle/rate/save | true |
| Disabled rule earns nothing | 57, 97 | I/Economy/CurrencyEarningService.cs:47-56 (r.IsEnabled) | true |
| Amount = rate x units; chat per message, cheer per bit, raid per raider to the raider | 69-73 | CurrencyEarningService.cs:79; I/Economy/EventHandlers/EngagementEarningHandler.cs:97-110 (FromUserId, ViewerCount) | true |
| Watch time and gift subs pay nothing | 75-76 | claims-file caller trace (ChatEarningHandler, EngagementEarningHandler, SupporterEconomyRewardHandler only) | true |
| Muted or shadowbanned chatter earns nothing | 78 | I/Economy/EventHandlers/ChatEarningHandler.cs:44-51 | true |
| Each event paid once | 79 | CurrencyEarningService.cs:65-77 (EventId dedupe) | true |
| Seconds per payout has no effect | 81-82 | CurrencyEarningService.cs:84 (needs PerWindowCap too) | true |
| New rule, New earning rule, Source list, "Every source has a rule" | 86-88 | D/i18n/en.json rules.new/dialog.newTitle/sourceNone | true |
| New rule saved on | 93 | D/components/RuleDialog.vue:91 | true |
| Delete rule, "Delete this rule?", balances stay | 99-100 | D/i18n/en.json rules.delete/confirmTitle/confirmBody/confirmAction | true |
| Empty rules text | 102 | D/i18n/en.json rules.empty | true |
| Wallet on first earn; earned and spent totals | 107-108 | D/i18n/en.json balances.empty/lifetime; D/components/BalancesPanel.vue:90 | true |
| Search viewers, adjust dialog shows balance, Amount, Reason, Adjust balance | 110-117 | D/components/BalancesPanel.vue:65,104; en.json balances.dialog | true |
| Validation message | 120 | en.json balances.dialog.invalid | true |
| Refuses below 0, above max, frozen | 124-126 | CurrencyAccountService.cs:393-428 | true |
| Freeze switch, its screen reader name, cannot earn or spend | 130-133 | BalancesPanel.vue:112; en.json balances.freeze; CurrencyAccountService.cs:393-394 | true |
| Jar dialog labels, Create jar, starts open | 139-156 | D/components/JarDialog.vue:71; en.json jars.dialog | true |
| Closed jar takes no currency | 146 | I/Economy/SavingsJarService.cs:350-351 | true |
| Take-out cap per channel is per take-out | 154 | SavingsJarService.cs:489-492 | true |
| Closed badge, delete dialog "Delete {name}?", jar and balance removed | 160-165 | en.json jars.closed/confirmTitle/confirmBody/confirmAction | true |
| Only the owner channel may change, close, delete | 167 | SavingsJarService.cs:107-109,121 | true |
| Deposits card shows "Not available here yet." | 169 | en.json jars.moneyTitle/notYet (full text continues, see Notes) | true |
| Invite must be accepted | 175 | en.json jars.invite.description; SavingsJarService.cs:280-295 (lead) | true |
| Channel ID is the bot's channel GUID | 177-179 | server/src/NomNomzBot.Application/DTOs/Economy/EconomyRequests.cs:173 (lead) | true |
| Invite labels, Role Partner/Viewer default Partner, caps | 180-190 | D/components/InviteDialog.vue:31,41,55; en.json jars.invite | true |
| Put-in cap per stream; take-out cap per take-out | 189-190 | SavingsJarService.cs:352-375,484-487 | true |
| Second invite refused | 192 | SavingsJarService.cs:240-251 | true |

## Links

3 of 3 link targets are rows of docs-work/map.md: /reference/getting-started/dashboard-tour, /reference/economy/store, /reference/economy/leaderboards-and-games.

## Conventions

No people's names, no action keys, no numbered levels, no license name, no "open source", no hosting or price text (no marker needed), American English (grep for British forms: 0 hits), NomNomzBot spelled correctly, no NoMercyBot.

## Notes (not blocking)

- Line 111: the button's accessible name is "Adjust the balance of {name}" (en.json balances.adjust); the page says **Adjust the balance**. Close enough, but it could quote the full name the way line 131 does.
- Line 169: the card text is "Not available here yet. Viewers use the chat commands for now." No jar chat command was found (only the pipeline action I/Economy/PipelineActions/JarContributeAction.cs). The page quotes only the first sentence, which is correct; the product string is a defect for an issue.
- "Role: both roles may use the jar the same way" rests on the writer's grep (no reader of JarRole); not re-run here.
