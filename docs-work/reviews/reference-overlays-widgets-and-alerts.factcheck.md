# Current independent fact check

Verdict: PASS
Reviewed: src/content/reference/en/overlays/widgets-and-alerts.mdx
Reviewed-SHA: f4deeb3c9ecae6d0b960fa30d3c22d27a7c4e0f35217613bcfbb9d5d72fea148
Reviewed-SHA256: f4deeb3c9ecae6d0b960fa30d3c22d27a7c4e0f35217613bcfbb9d5d72fea148
Reviewed-Date: 2026-11-05
Reviewer: independent media-section reviewer
Product: 54da8b6318de63b5205a0ff8db35e0b9045dd959 plus preserved current music UI edits

The full article was read in sidebar order. Consequential defaults, permissions, prerequisites, state lifetime and effects were traced against current source; repaired findings were re-read before this verdict. This is source verification, not a live-channel or visible/audible output test.

- server/src/NomNomzBot.Infrastructure/Content/Widgets/FirstPartyWidgetCatalogue.cs:72-126 defines supplied alerts/subscriptions and one-at-a-time display configuration; dashboard/src/views/dashboard/overlays/OverlaysView.vue:64-70 and obs/components/RequiredOverlaysPanel.vue:103-145 establish the inaccessible required-widget settings boundary.
- server/src/NomNomzBot.Infrastructure/Dashboard/Replay/ActivityReplayService.cs:63-160 reconstructs event chains and counts presentations/captured alerts without publishing a second source event; server/src/NomNomzBot.Infrastructure/Platform/Eventing/EventResponseExecutor.cs:500-590 can invoke attached real actions.
- Preview/test separation and listed widget kinds were checked against the current overlay editor/reference evidence; no live test or browser presentation is asserted.

Source paths without a repeated layer prefix in a bullet are relative to its preceding Infrastructure or dashboard scope. The section report records method, repaired findings, external sources and remaining product limitations: docs-work/overhaul/review-automation-media-integrations.md.

## Historical evidence

Older hashes, verdicts and values below are retained for history and are not the current review.

# Fact check: src/content/reference/en/overlays/widgets-and-alerts.mdx
Verdict: PENDING
Reviewed: src/content/reference/en/overlays/widgets-and-alerts.mdx
Reviewed-SHA: f4deeb3c9ecae6d0b960fa30d3c22d27a7c4e0f35217613bcfbb9d5d72fea148

## 2026-11-05 author source verification

Author source audit complete; independent verdict pending. This hash binds the current text, not the historical PASS below. The article was read in full and revised toward the user's explainer style while preserving precise reference detail. alerts.vue; ActivityReplayService.cs; EventResponseExecutor.cs; ObsSetupAction.vue. Replay can run real attached pipeline actions; supplied Alerts settings accessibility was checked.

The section inventory and known implementation gaps are in [automation-media-integrations.md](../overhaul/automation-media-integrations.md). This is source verification, not a live-channel execution claim. Independent review must account for product changes after the original author pass at b12f4f696.

## Historical review (SHA 0a0e351d3cf32089)

Historical verdict: PASS. The earlier evidence below is retained as history and is superseded where the current article or source changed.

Round 4. Product repo paths are relative to C:\Projects\NoMercyLabs\nomnomzbot.

The round 3 finding is resolved. The page no longer has you open **Edit code** on a new overlay, which has no version. Add a widget now starts from **Duplicate**, and every claim in it is backed by an opened line.

## Product defects

1. Still open, but no longer on the page: on a new overlay, **Edit code** shows an error instead of opening the editor. GET project returns NOT_FOUND when the widget has no version (server/src/NomNomzBot.Infrastructure/Widgets/WidgetService.cs:975-979), and the editor shows that as a failure (useOverlayEditor.ts:109-110). File this as an issue.

## Claims

| Claim | Supported by | Status |
| --- | --- | --- |
| A widget is the code that runs inside one overlay | OverlayDetail.vue:79 | supported |
| An alert is what a widget shows for an event such as follow or cheer | overlayKind.ts:55-59 | supported |
| Start from an overlay that already has code, such as one marked Built in | overlays en.json:139 "Built in"; OverlayDetail.vue:80 (source first_party); WidgetService.cs:382 (install compiles a version); WidgetService.cs:208-217 (clone needs a source version, else WIDGET_NO_SOURCE) | supported |
| Open that overlay and choose Duplicate | overlays en.json:11-12; OverlayDetail.vue:400-408 | supported |
| Link target Copy an overlay | set-up-overlays.mdx:145 | supported |
| The copy opens with the same code | api/widgets.ts:278-296 (POST widgets/clone, installedWidgetId); WidgetService.cs:207-217 (copies latest source), 244-253 (compiles the copy); OverlayDetail.vue:115 emits duplicated id; OverlaysView.vue:201 @duplicated="open" | supported |
| Edit code on the copy; after save "Saved and compiled. The overlay now runs this version." | overlays en.json:146,59; OverlayDetail.vue:308; useOverlayEditor.ts:134 | supported |
| What the code can use is on Widgets, actions and templates | link target | supported |
| Add the address in OBS (link) | link target | supported |
| Gallery shows Coming soon | navigation.ts:235-236; router/dashboard.ts:131; shell en.json:827,911-912 | supported |
| Events under Reacts to; kind from those events | overlays en.json:163-164; overlayKind.ts:37,104-109 | supported |
| Badge on the row under its name | OverlayDetail.vue:263-269 | supported |
| First kind in table order wins | overlayKind.ts:38,105 | supported |
| 12 kinds, labels, events per row (incl. Feather `feather show/steal/event`) | overlayKind.ts:39-100,113-115; overlays en.json:120-132 | supported |
| No match shows no badge | overlayKind.ts:102; OverlayDetail.vue:266-267 | supported |
| Event response can show an alert and send a chat line in the one bot voice | EventResponseOutcome.cs:19 | supported |
| Test beside an event; Moderator or higher | OverlayDetail.vue:367-378; WidgetTestEventController.cs RequireAction("widget:write"); ActionDefinitionSeeder.cs:396 | supported |
| Fire bar: same samples as Test, preview only; samples-failed message | WidgetTestEventController.cs Samples summary; useOverlayEditor.ts:96,116-121; overlays en.json:60 | supported |
| Replay on Home, Happening now / Last stream, button at end of row | home en.json:138-139,144; HappeningPanel.vue:199-214 | supported |
| Count table (chat, voice, overlays, widgets) | ActivityReplayResult.cs:19-22; home en.json:146-147 | supported |
| Grants nothing; gift bomb order | DashboardController.cs:449-453 | supported |
| Three messages and meanings | ActivityReplayService.cs:96-115; HappeningPanel.vue:68-77; home en.json:148-150 | supported |
| Moderator or higher sees Replay | HappeningPanel.vue:201; ActionDefinitionSeeder.cs:434 | supported |
