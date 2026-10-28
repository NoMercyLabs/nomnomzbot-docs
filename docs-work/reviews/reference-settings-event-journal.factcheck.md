# Fact-check: /reference/settings/event-journal
Verdict: PASS
Reviewed: C:\Projects\NoMercyLabs\nomnomzbot-docs\src\content\reference\en\settings\event-journal.mdx
Reviewed-SHA: 094f8147fe3aece0

Re-review of the edited page (all 148 lines re-read). Changed lines checked this run:

- Lines 60-62, **Clear filters** shows for the four filters, resets them, leaves **Show bot activity**: JournalListPanel.vue:140-141,179-184,198-202. True.
- Line 85, import from the **Backup and rebuild** tab, **Journal file** card: V/EventJournalView.vue:34-37,49-50; VJ tabs.tools, file.title, file.import. True.
- Line 93, run **Rebuild pages** after a load: VJ readModels.description ("Run these after an import"); VJ readModels.rebuild. True.
- Lines 131-132, only reads the old file, never changes it: DefaultLegacyDatabaseLocator.cs:15-19; C:182-184. True.
- Lines 137-140, error shows in red, file not found, operator places the file, run again: LegacyHistoryPanel.vue:40-41,82 (role="alert", text-destructive); DefaultLegacyDatabaseLocator.cs:36-41 (message names the expected path and the override). True.

Paths are relative to C:\Projects\NoMercyLabs\nomnomzbot. V = dashboard/src/views/dashboard/settings/event-journal. VJ = V/i18n/en.json. C = server/src/NomNomzBot.Api/Controllers/V1/EventStoreController.cs.

## Claims

| Page claim | Proof | Result |
| --- | --- | --- |
| Page label **Event journal**, settings sidebar, **Access** group | dashboard/src/i18n/locales/en.json:895, :941; dashboard/src/layouts/dashboard/settingsNavigation.ts:76-88 | true |
| **Settings** label | dashboard/src/i18n/locales/en.json:839 | true |
| Two tabs **What happened**, **Backup and rebuild** | VJ "tabs" (events, tools); V/EventJournalView.vue:28,34-37,48-50 | true |
| Tools tab: file, read-models, old-history cards | V/EventJournalView.vue:23-26,49-50 | true |
| Journal is the record of everything; profiles, analytics, event log built from it | VJ file.description, readModels.description; C rebuild summary (channel event log, analytics, viewer profiles) | true |
| Journal only grows | C:26 ("append-only"); import/replay/legacy only append, rebuild resets read models only | true |
| Only the broadcaster opens the page and uses every button | V/route.ts:21 (eventstore:export); server/src/NomNomzBot.Infrastructure/Content/Identity/ActionDefinitionSeeder.cs:305-317 (every eventstore action Broadcaster); C [RequireAction] on export, import, replay, import-legacy, rebuild | true |
| Save, load, old history cannot be given lower | ActionDefinitionSeeder.cs:152-153 (default == floor, never lowered), :313-317 (grant: false) | true |
| Newest first | VJ list.description | true |
| Line shows who, what, when | V/components/JournalListPanel.vue:240-261 | true |
| **Previous**, **Next**, "Page 1 of" | JournalListPanel.vue:266-291; VJ list.page/previous/next | true |
| **Bot** / **API key** badge when no person; old rows none | JournalListPanel.vue:247-255; VJ list.actor | true |
| Same event, source, person in a row fold into "N times" | V/components/journalRuns.ts:17-38; JournalListPanel.vue:257; VJ list.repeat | true |
| Filters **Event**, **Source**, **From date**, **To date**, **Show bot activity** | VJ list.kind/source/from/to/housekeeping; JournalListPanel.vue:204-227 | true |
| Defaults **All events**, **Everywhere**, empty, empty, Off | JournalListPanel.vue:61-65 ('' and false), :69-90 ('' reads as all); VJ allKinds/allSources | true |
| Example events **New follower**, **Incoming raid** | VJ events.FollowEvent, events.RaidEvent | true |
| Source choices (6 labels) | V/components/journalWords.ts:63-70; VJ sources | true |
| Filter change returns to page 1 | JournalListPanel.vue:108-110 | true |
| **Clear filters** shown when filtered, resets four | JournalListPanel.vue:140-141,179-184,198-202 (housekeeping not reset) | true |
| Filters remembered on this device | JournalListPanel.vue:61-65 (useLocalStorage) | true |
| Bot activity = not on the Event list | journalWords.ts:76-78 | true |
| Footer counts hidden entries on the page | JournalListPanel.vue:135,270-272; VJ list.hidden | true |
| Empty text | VJ list.empty; JournalListPanel.vue:194 | true |
| **Journal file** card, **Export journal**, waiting display, few minutes, download starts by itself, saved count | VJ file.title/export/exporting/exported; V/components/JournalFilePanel.vue:46-67,127 | true (see note 1) |
| File = whole journal, one event per line | C:108-128 (JSONL, whole journal) | true |
| **Import journal**, result counts (lines, new, already there, upgraded) | VJ file.import/imported; JournalFilePanel.vue:69-84,100 | true |
| Only missing events added; same file twice safe | C:131-133; EventJournalPortabilityService.cs:115-118 (idempotent on EventId) | true |
| One failing line adds nothing | server/src/NomNomzBot.Infrastructure/EventStore/EventJournalPortabilityService.cs:104-108 (parse failure returns before append), :176-203 (bad line fails parse), :115-118 (one transaction) | true |
| **Pages built from the journal** card, two buttons and help texts | VJ readModels.title/replay/replayHelp/rebuild/rebuildHelp | true |
| Replay handles only new imported events; repeat is a no-op; applied count | C:156-161 summary, RunOnceAsync("import-replay"); VJ readModels.replayed | true |
| Replay fires triggers and replies through the live path | C:157-159 | true |
| Replies in the one bot voice | page-conventions.md rule; replay uses the same live-handler path (C:157-159) | true |
| Rebuild dialog title, action, effect, per-page result | VJ readModels.confirmTitle/confirmAction/confirmDescription/confirmEffect/rebuilt | true |
| **History from the old bot**, **Import old history**, result counts, before/after, per-type lines, rerun adds nothing | VJ legacy.title/import/imported/skippedType/description; C:181-200 | true |
| Old database read on the bot's machine, never changed | server/src/NomNomzBot.Infrastructure/EventStore/LegacyImport/DefaultLegacyDatabaseLocator.cs:15-42; C:182-184 ("READ-ONLY") | true |
| Rebuild after old-history import | C rebuild summary ("Run after a legacy import") | true |
| Troubleshooting: error when the database is not found; the operator places the file | DefaultLegacyDatabaseLocator.cs:36-41 (LEGACY_DB_NOT_FOUND); V/components/LegacyHistoryPanel.vue:40-41 (error shown) | true |

## Conventions

- No source citation, no action key, no numbered level, no license name: checked, none found.
- No hosting mention, so no hosting marker is needed.
- Extra check: the page says "the old bot" and does not quote the card description that names a former product (VJ legacy.description). Correct per the namespace rule.
- Every filter label and card title matches VJ exactly.

## Notes (style, not a failure)

1. "The card shows a clock" — the card shows an elapsed-time counter (JournalFilePanel.vue:127, DateTime variant durationClock) with the "Preparing the file" text. Suggested text: "The card shows a running timer while the bot prepares the file."
2. The empty text also shows when a page holds only hidden bot activity (JournalListPanel.vue:127-128). Optional to add.
