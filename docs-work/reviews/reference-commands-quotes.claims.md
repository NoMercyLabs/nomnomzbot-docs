# Claims: /reference/commands/quotes

| # | Claim | Source (product repo) |
| --- | --- | --- |
| 1 | Page is **Quotes** in the sidebar | dashboard/src/i18n/locales/en.json:833; dashboard/src/layouts/dashboard/navigation.ts:271 |
| 2 | Open page / search / random need quotes:read, default VIP | dashboard/src/views/dashboard/quotes/route.ts:19; QuotesView.vue:110; server/src/NomNomzBot.Infrastructure/Content/Identity/ActionDefinitionSeeder.cs:498 |
| 3 | Add and edit default VIP | ActionDefinitionSeeder.cs:499; QuotesController.cs:97,124 |
| 4 | Delete default Moderator | ActionDefinitionSeeder.cs:500; QuotesController.cs:141 |
| 5 | Edit and delete buttons each shown only with their permission | dashboard/src/views/dashboard/quotes/QuoteRow.vue:56,67 |
| 6 | Fields Quote, Said by, Game, Said at; labels and help | quotes/i18n/en.json dialog.*; QuoteDialog.vue |
| 7 | Up to 500 characters | quoteForm.ts:15; server/src/NomNomzBot.Infrastructure/Quotes/QuoteService.cs:67,306 |
| 8 | Said by and Game optional (blank sent as null) | quoteForm.ts blankAsNull, draftFromForm |
| 9 | Add: empty Said at uses time of saving | quoteForm.ts:63-65; QuoteService.cs:110 |
| 9b | Edit: empty Said at keeps the old date | quoteForm.ts:33; QuoteService.cs:322 |
| 10 | Bot gives the number; number never changes | QuoteService.cs:88-105,320 |
| 11 | Number never reused after delete | QuoteService.cs:355-356 (soft delete, sequence); i18n delete.line |
| 12 | New quote flow: New quote, Add quote, dialog closes | QuotesView.vue:122-130; QuoteDialog.vue:65,80 |
| 13 | Empty text shows "Type the quote." | quoteForm.ts formProblem; i18n dialog.problem.textRequired |
| 14 | Edit: Edit quote dialog filled; Save quote | QuoteDialog.vue:44-47,74-80 |
| 15 | Delete confirm title "Delete quote {number}?", action Delete quote, "removes the quote for good" | QuotesView.vue:186-194; i18n delete.* |
| 16 | Search matches line or Said by, any case | QuoteService.cs:194-205 |
| 17 | No match text "No quote matches your search." | QuotesView.vue:166; i18n noMatch |
| 18 | Newest number first, 50 per page, Show more quotes adds 50 | QuoteService.cs:211; QuotesView.vue:37,104-106,169-179 |
| 19 | Row shows number, line, then name, game, date | QuoteRow.vue:36-44,74-77 |
| 20 | Random quote shows one quote above search | QuotesView.vue:86-100,139-141 |
| 21 | Narrow screen: icon only | QuotesView.vue:120-121 |
| 22 | No quotes: "No quotes yet." | QuotesView.vue:166; i18n empty |
| 23 | Chat !quote can add, edit, delete | server/src/NomNomzBot.Infrastructure/Quotes/Builtins/QuoteBuiltin.cs:92-94 |
| 23b | Chat read is Everyone by default (QuoteBuiltin.cs:75; raisable by minimum-role override, IBuiltinCommandService.cs:103); chat add/edit need quotes:write (VIP), delete needs quotes:delete (Moderator) | QuoteBuiltin.cs:90-98 (read path has no check), 203, 277, 337; ActionDefinitionSeeder.cs:498-500; built-in-commands page row |
| 23c | Denied chat add/edit/delete gets a bot line saying no permission | QuoteBuiltin.cs:204-211, 278-285, 338-345 (DeniedAsync with NoAdd/NoEdit/NoDeletePermission) |
| 24 | List updates live on quotes config change | QuoteService.cs ChannelConfigChangedEvent Domain "quotes"; dashboard/src/realtime/configDomains.ts:105 |

Counts: fields 4 of 4 (QuoteForm, quoteForm.ts). Role rows 3 of 3 actions (quotes:read, write, delete).
