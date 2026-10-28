# Fact check: src/content/reference/en/commands/quotes.mdx
Verdict: PASS
Reviewed: src/content/reference/en/commands/quotes.mdx
Reviewed-SHA: f484ceec9e4285e7

Round 3. Product repo at b6204c36c. Paths: Q = dashboard/src/views/dashboard/quotes; S = server/src/NomNomzBot.Infrastructure/Quotes/QuoteService.cs; B = server/src/NomNomzBot.Infrastructure/Quotes/Builtins/QuoteBuiltin.cs.

Changed sentence: line 84 now reads "By default, everyone in chat may read a quote with `!quote`." That is true. B:75 sets `DefaultMinPermissionLevel => 0`, and the channel override is in IBuiltinCommandService.cs:103,118 and CommandsBuiltin.cs:159. The round 2 finding is fixed.

I read the whole page again (95 lines). The other 5 role statements (lines 14-16, 85, 86) all say "out of the box" or "by default" and match ActionDefinitionSeeder.cs:498-500 and B:47-48, 203, 277, 337. Every other row was checked against the lines below.

## Findings

None.

Braces: there is no bare word in braces on the page.

## Product defects

- Q/i18n/en.json `dialog.saidAtHelp` "Leave empty to use the time you save." shows in the edit dialog too. There, an empty field keeps the old date (S:322). This is still open from round 1.

| Claim | Supported by | Status |
| --- | --- | --- |
| Quotes page in the sidebar | dashboard/src/layouts/dashboard/navigation.ts:270-273; dashboard/src/i18n/locales/en.json:833 | true |
| Chat reads quotes with !quote | B:90-98 | true |
| Open, search, random: VIP and up | ActionDefinitionSeeder.cs:498; Q/route.ts meta quotes:read; Q/QuotesView.vue:112 | true |
| Add and edit: VIP and up | ActionDefinitionSeeder.cs:499; Q/QuotesView.vue:126 | true |
| Delete: Moderator and up | ActionDefinitionSeeder.cs:500 | true |
| Edit and delete buttons each show only with their permission | Q/QuoteRow.vue:45-47,57,68 | true |
| Field labels Quote, Said by, Game, Said at | Q/i18n/en.json dialog.text, saidBy, game, saidAt | true |
| Up to 500 characters | Q/quoteForm.ts:16,43; S:67-70, S:306 | true |
| Said by with or without the @, optional | Q/i18n/en.json saidByHelp; Q/quoteForm.ts:49-61; S:321 | true |
| Game optional | Q/quoteForm.ts:62; S:323 | true |
| Said at: add empty = save time; edit empty = keeps old date | Q/quoteForm.ts:33,63-65; S:110; S:322 | true |
| Bot gives the number | S:85-104 | true |
| Number never changes | S:318-323 (no Number write) | true |
| Number never given to another quote | S:356-357 soft delete; S:85-90 sequence | true |
| New quote button, New quote dialog, Add quote | Q/i18n/en.json new, dialog.newTitle, dialog.create; Q/QuotesView.vue:126-134 | true |
| Dialog closes on save, quote shows with its number | Q/QuoteDialog.vue:59-70; Q/QuoteRow.vue:34-35 | true |
| Empty Quote shows "Type the quote." | Q/quoteForm.ts:40-41; Q/i18n/en.json problem.textRequired | true |
| Edit button at row end; Edit quote dialog filled; Save quote | Q/QuoteRow.vue:55-66; Q/quoteForm.ts:28-35; Q/i18n/en.json dialog.editTitle, dialog.save | true |
| Delete dialog asks "Delete quote" with number; action Delete quote | Q/QuotesView.vue:179-187; Q/i18n/en.json delete.title, delete.action | true |
| Removed for good; number not reused; gaps possible | Q/i18n/en.json delete.description, delete.line; S:356-357 | true |
| Search the quotes box above the list | Q/QuotesView.vue:142-148 | true |
| Matches line or Said by, any case | S:193-205 | true |
| No match text | Q/QuotesView.vue:153; Q/i18n/en.json noMatch | true |
| Newest first, 50 at a time, Show more quotes adds 50 | S:211; Q/QuotesView.vue:38,104-106,166-175 | true |
| Row shows number, line, then name, game, date | Q/QuoteRow.vue:37-43,51-53 | true |
| Random quote at top shows one above search | Q/QuotesView.vue:87-102,112-125,139-141 | true |
| Narrow screen: dice icon only | Q/QuotesView.vue:117-124 | true |
| No quotes: "No quotes yet." | Q/QuotesView.vue:153; Q/i18n/en.json empty | true |
| Everyone in chat may read with !quote | B:75 (default); IBuiltinCommandService.cs:103,118 override | true (page says "By default") |
| Chat add and edit need VIP and up by default | B:47,203,277; ActionDefinitionSeeder.cs:499 | true |
| Chat delete needs Moderator and up by default | B:48,337; ActionDefinitionSeeder.cs:500 | true |
| Denied add, edit or delete gets a bot line | B:204-211,278-285,338-345 | true |
| Chat changes show on the page live | B:244,303,357 via IQuoteService; S:137-140,329-332,361-364; dashboard/src/realtime/configDomains.ts:105 | true |
