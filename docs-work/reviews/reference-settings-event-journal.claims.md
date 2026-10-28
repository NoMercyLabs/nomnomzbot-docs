# Claims: /reference/settings/event-journal

Paths relative to C:\Projects\NoMercyLabs\nomnomzbot. V = dashboard/src/views/dashboard/settings/event-journal. C = server/src/NomNomzBot.Api/Controllers/V1/EventStoreController.cs.

| Claim | Source |
| --- | --- |
| Page label "Event journal" in settings sidebar, Access group | dashboard/src/i18n/locales/en.json:895, :941; dashboard/src/layouts/dashboard/settingsNavigation.ts:76-89 |
| Two tabs "What happened", "Backup and rebuild" | V/i18n/en.json:6-7; V/EventJournalView.vue:18-29,38-45 |
| Tools tab holds file, read-models and legacy cards | V/EventJournalView.vue:40-44 |
| Journal is the record of everything that happened; viewer profiles, analytics and event log are built from it | V/i18n/en.json:303,312; C:203-205 |
| Journal only grows (append-only) | C:26 |
| Only the broadcaster opens the page (route action eventstore:export, Broadcaster) | V/route.ts:20-23; server/src/NomNomzBot.Infrastructure/Content/Identity/ActionDefinitionSeeder.cs:313 |
| Every button is broadcaster-level | ActionDefinitionSeeder.cs:305-317 |
| Export, import, legacy import cannot be given lower (grant: false) | ActionDefinitionSeeder.cs:311-317, :152-153 |
| Newest first, 25 per page (100 while bot activity hidden), Previous/Next, "Page {page} of {pages}" | V/components/JournalListPanel.vue:54-55,103-106,137,266-292; V/i18n/en.json:11,28-30; C:64 |
| Line shows person, what, when (relative) | JournalListPanel.vue:237-262 |
| Bot / API key badge when no person; old rows none | JournalListPanel.vue:247-255; en.json:24-27 |
| Same event, source and person in a row fold into "N times" | V/components/journalRuns.ts:17-38; JournalListPanel.vue:257; en.json:23 |
| Filters Event/Source/From date/To date/Show bot activity with defaults | JournalListPanel.vue:61-65,92-100,204-227; en.json:14-20 |
| Source choices | en.json:36-43; JournalListPanel.vue:97-100 |
| Filter change returns to page 1 | JournalListPanel.vue:108-110 |
| Clear filters shows when Event/Source/From/To is set, resets those four, leaves Show bot activity | JournalListPanel.vue:140-141,179-184,198-202 |
| Filters remembered on device | JournalListPanel.vue:61-65 (useLocalStorage) |
| Bot activity = events not on the Event list | V/components/journalWords.ts:76-78 |
| Hidden count in footer | JournalListPanel.vue:135,270-272; en.json:21 |
| Empty text | en.json:12 |
| Export: clock while preparing, auto download, saved count | V/components/JournalFilePanel.vue:46-67,119-131; en.json:304-307 |
| File = whole journal, one event per line | C:108-128 |
| Import: picks .jsonl file, result counts | JournalFilePanel.vue:69-84,95-113,132-141; en.json:308 |
| Import adds only missing; duplicates skipped | C:131-133; en.json:303 |
| One bad line adds nothing (parse all, then one append) | server/src/NomNomzBot.Infrastructure/EventStore/EventJournalPortabilityService.cs:104-121 |
| Replay / Rebuild buttons and help texts | V/components/ReadModelsPanel.vue:72-101; en.json:313-317 |
| Replay handles only new imported events; repeat is no-op; applied count | C:156-179; ReadModelsPanel.vue:102-104; en.json:315 |
| Replay fires triggers and replies through the live path | C:157-159; en.json:314 |
| Rebuild confirm dialog title, description, effect, action; per-page result | ReadModelsPanel.vue:105-125; en.json:318-322 |
| Legacy card title, button, result text, per-type lines, idempotent | V/components/LegacyHistoryPanel.vue:47-81; en.json:325-329; C:181-200 |
| Legacy file read-only; error (red, role=alert) when not found; fixed by placing the file on the bot's host | server/src/NomNomzBot.Infrastructure/EventStore/LegacyImport/DefaultLegacyDatabaseLocator.cs:20-42; C:182-183; LegacyHistoryPanel.vue:35-43,82 |
| Rebuild after legacy import | C:204-205 |
