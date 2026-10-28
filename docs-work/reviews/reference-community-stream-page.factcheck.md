# Fact check: /reference/community/stream-page
Verdict: PASS
Reviewed: C:\Projects\NoMercyLabs\nomnomzbot-docs\src\content\reference\en\community\stream-page.mdx
Reviewed-SHA: 63de7a652873498f

Paths are in the product repo C:\Projects\NoMercyLabs\nomnomzbot. D = dashboard/src/views/dashboard/stream. E = D/i18n/en.json (key path given).

| Claim | Supported by | Status |
| --- | --- | --- |
| Header Live / Offline, "Live for {time} · {category}" | E stream.live, offline, liveMeta | PASS |
| Tabs Overview, Schedule, Raid rules, Ads | E views.*; D/StreamView.vue:42 | PASS |
| A tab shows to anyone who may read it; moderator sees Ads tab but not Run an ad | D/StreamView.vue:45-53; D/CommercialPanel.vue:39; ActionDefinitionSeeder.cs:358-359 | PASS (fixed) |
| Who-may-do-it table | ActionDefinitionSeeder.cs:337-361,401; StreamController.cs:224; D/StreamInfoPanel.vue:47,149; D/RaidNowPanel.vue:86; D/RaidRulesPanel.vue:37,124 | PASS |
| What viewers see description, Title, "{count} / 140", Recent titles, Set on your channel now | E info.title, description, titleLabel, titleCount, recentTitles, currentTitle; D/StreamInfoPanel.vue:41-42,90,161 (max 140, 5 recent) | PASS |
| Category, Search for a category, Recent categories | E info.category, categorySearch, recentCategories | PASS |
| Tags: max 10, box disabled at 10, limit text, duplicate not added | D/TagInput.vue:21,32-34,79; E info.tagLimit | PASS |
| Removed {tag}, Undo | E info.tagRemoved, tagUndo | PASS |
| Language shown only, hint | E info.language, languageHint | PASS |
| Content labels list (6 + Paid promotion), hints, Mature-rated game | dashboard/src/api/stream.ts:42-51; D/StreamInfoPanel.vue:227,235-242; E info.label.* | PASS |
| Save changes / Discard | E info.save, discard | PASS |
| Where it goes texts, Connected / Not connected / Connect, X Live Not available yet + why | E platforms.* | PASS |
| Checklist lines and texts; tags 0 = neutral; rewards off = neutral; Could not check {what} | E checklist.*; D/GoLiveChecklist.vue:46,72-79,104 | PASS |
| Schedule texts, segment hint, dialog fields, Repeat every week, Save segment | E schedule.* | PASS |
| Length 30-1440, default 120 | D/SegmentDialog.vue:33,44,53,130-131 | PASS |
| Weekly, Canceled, Untitled stream, No segments yet, Edit/Cancel/Restore/Delete, delete texts, Delete segment | E schedule.weekly, isCanceled, untitled, none, edit, cancel, restore, delete, deleteTitle, deleteDescription, deleteSeries, deleteAction | PASS |
| Vacation mode, hint, starts/ends, Save vacation, invalid text | E schedule.isVacationEnabled, vacationHint, vacationStartTime, vacationEndTime, saveVacation, vacationInvalid | PASS |
| Raid a channel flow: Raid, confirm text, Start raid, started, Cancel raid, canceled, no raid, not found | E raidNow.* (the page quotes the first sentence of confirmDescription) | PASS |
| Raid rules: label quoted as the panel text; page no longer claims ranking runs | E raids.description; RaidSuggestionService registered only (DependencyInjection.cs:470) | PASS (fixed) |
| Group labels, Points, Reason, Words separated by commas, Tags, Title, Minimum/Maximum viewers, Within days, Add / Remove / Save rules | E raids.* | PASS |
| New channel: no rules, every point 0 | server/src/NomNomzBot.Application/Raids/RaidScoringDefaults.cs:22-37 | PASS |
| Limits and red texts (±1000, category, keyword words, empty word, matches nothing, band below 0, min above max, step ≥ 1 day) | RaidScoringRulesValidator.cs:24,85,92,111-114,144; E raids.problems.* | PASS |
| Hostile raid: banned, or operator block on every channel | RaidAssessmentService.cs:53-60,122-125; NetworkBlock.cs:17-24 | PASS (fixed) |
| Run an ad: lengths 30-180, default 30, Run ad, The ad started. or Twitch message | D/CommercialPanel.vue:23,30,56-57; E ads.* | PASS |
| Page conventions: no source citation, action key, numbered level or license name | Page read in full | PASS |

Style notes (not blocking):
- The raid input's visible label is "Channel to raid" (E raidNow.channelLabel); the page names the placeholder "Channel name". Both are on screen.
- The 1440-minute top is the input's max attribute (D/SegmentDialog.vue:131); the dialog's own check tests only the 30-minute floor (line 53).
