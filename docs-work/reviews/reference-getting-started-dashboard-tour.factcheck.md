# Current independent fact check

Verdict: PASS
Reviewed: src/content/reference/en/getting-started/dashboard-tour.mdx
Reviewed-SHA: 2c5bfc3522fee070eb3c3e9713a892ac95888b0705d631990b50e2a73983f56d
Reviewed-SHA256: 2c5bfc3522fee070eb3c3e9713a892ac95888b0705d631990b50e2a73983f56d
Reviewed-Date: 2026-11-05
Reviewer: independent section reviewer
Product: 54da8b6318de63b5205a0ff8db35e0b9045dd959 (initial source tracing b12f4f69638553c03ed64c1518c90d7bcccd6907)

The full article was read in navigation order; consequential behavior and reference details were checked against current source. All reported documentation findings affecting this page were repaired and re-reviewed. This is a source review, not a live-channel test.

- Current dashboard group/route hierarchy: dashboard/src/layouts/dashboard/navigation.ts:45-295 and dashboard/src/layouts/dashboard/useNavigation.ts:25-100.
- Home activity replay is a presentation path rather than event-bus re-ingestion: server/src/NomNomzBot.Infrastructure/Dashboard/Replay/ActivityReplayService.cs:35-207.
- Shield view/change roles: server/src/NomNomzBot.Infrastructure/Content/Identity/ActionDefinitionSeeder.cs:269-270.

Report: docs-work/overhaul/review-learning-commands-helpers.md.

## Historical evidence

The material below is retained as historical evidence. Its older hashes, verdicts and values do not constitute the current review.

# Fact check: /reference/getting-started/dashboard-tour
Verdict: PASS
Reviewed: C:\Projects\NoMercyLabs\nomnomzbot-docs\src\content\reference\en\getting-started\dashboard-tour.mdx
Reviewed-SHA: eaeafa72bcb0cee0

Product repo: C:\Projects\NoMercyLabs\nomnomzbot (local master, read only).
Paths are relative to the product repo. "en.json" = dashboard/src/i18n/locales/en.json. "home en.json" = dashboard/src/views/dashboard/home/i18n/en.json.

## What changed since the last verdict (SHA b98f67e3cfd8c2e3)

| Page line | Claim | Supported by | Status |
| --- | --- | --- | --- |
| 207 | **More on Twitch** row: three cells; the chat of that channel opens on a dashboard viewer chat page | ViewerChannelGroups.vue:59 `name: 'viewer-external-chat'`; en.json:967 | true (the earlier FAIL is fixed) |
| 74 | Anyone signed in may open **Readability**, from the account menu | views/dashboard/settings/route.ts:47-55 (`userLevel: true`, `open: true`, view `readability`); layouts/dashboard/ProfileMenu.vue:62, 132-135 | true |
| 74 | Your data claim | cut by the writer (its only entry is the settings sidebar) | n/a |

## Claims re-read this run (true)

| Page line | Claim | Supported by | Status |
| --- | --- | --- | --- |
| 82-84 | 840 px full sidebar; 600 to 839 px rail; under 600 px bottom bar | dashboard/src/composables/useLayout.ts:20, 24 (`rail: 600`, `sidebar: 840`) | true |
| 159-161 | Shield dialog under 768 px | useLayout.ts:22 `tablet: 768` | true |
| 28 | Fold choice remembered by the browser | layouts/dashboard/useNavigation.ts:45 `'nnz.nav.folds'` | true |
| 205 | Recent channels on this device, up to 5 | composables/useRecentChannels.ts:23 `useLocalStorage(... 'nnz.viewerChat.recent')`; :21 limit 5 (previous run) | true |
| 233, 235 | View stays on after reload; Exit returns to the page you left | api/viewAs.ts:25 `nnz.viewAs`, :28 `nnz.viewAs.return` | true |
| 244 | `?` does nothing in a text field | composables/useShortcut.ts:37 (INPUT, TEXTAREA, SELECT, contentEditable) | true |

## Claims carried from the previous run (page text unchanged there; true)

Lines 7, 16-24, 36, 45-49, 62-69, 86-88, 93-98, 103-109, 117-121, 128-130, 137-141, 148, 152, 157-165, 153, 173, 178, 187-201, 214-231 and 258-260 were checked in the previous verdict against navigation.ts, ActionDefinitionSeeder.cs (lines 267-275, 403-437, 661), en.json (811-1009) and home en.json, and their text on the page is unchanged.

## Conventions

- No source citation, action key, numbered permission level, license name or "open source" on the page.
- No hosting, price or use-rights text, so no plain rule or hosting marker is needed.
- No NoMercyBot name. American English. Replay "the bot's chat line, the voice" matches one bot voice.
- **Coming soon** pages are described by the label and "not built yet" only.

## Notes (style, not FAIL)

- Lines 18-19 list Home and People as two "(no heading)" rows; correct per line 26.
- Line 26 rests on useNavigation.ts:28-29 and 126-127 from the claims file; not re-read this run, no contradiction found.
