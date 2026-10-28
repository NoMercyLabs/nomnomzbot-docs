# Fact check: src/content/reference/en/overlays/widgets-and-alerts.mdx
Verdict: PASS
Reviewed: src/content/reference/en/overlays/widgets-and-alerts.mdx
Reviewed-SHA: 0a0e351d3cf32089

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
