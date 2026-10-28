# Claims: /reference/overlays/widgets-and-alerts

Product repo paths are relative to the product root. Overlays en.json: `dashboard/src/views/dashboard/overlays/i18n/en.json`. Home en.json: `dashboard/src/views/dashboard/home/i18n/en.json`. Shell en.json: `dashboard/src/i18n/locales/en.json`.

| # | Claim | Evidence |
| --- | --- | --- |
| 1 | A widget is the code of one overlay; the Overlays page lists widgets as overlays | dashboard/src/api/widgets.ts:62 (Overlays list reads /widgets); OverlayDetail.vue:79 (props.widget) |
| 2 | An alert is what a widget shows for an event such as follow or cheer | overlayKind.ts alerts rule (follow, subscription, resub, gift, cheer) |
| 3 | A widget is added by creating an overlay | dashboard/src/api/widgets.ts:259 (POST /widgets from New overlay) |
| 4 | Gallery sidebar entry shows a Coming soon page | navigation.ts:234-238; router/dashboard.ts:131; scaffold/route.ts:47; shell en.json frame.comingSoon.title |
| 5 | Kind from Reacts to events; first matching rule wins; shown as a badge | overlayKind.ts:37-38, 103-108; OverlayDetail.vue:266-269 |
| 6 | 12 kinds with labels and events (12 of 12 rules) | overlayKind.ts RULES (12 entries); overlays en.json kinds |
| 7 | No match shows no badge | overlayKind.ts PLAIN icon null; OverlayDetail.vue:267 v-if kind.icon |
| 8 | Event responses can show an alert on overlays | EventResponseOutcome.cs:19 (OverlaysShown) |
| 9 | Test sends a sample to this one widget only | WidgetTestEventController.cs:69-110 (Fire, one widgetId, WidgetTestSamples.For) |
| 10 | Test needs Moderator or higher | WidgetTestEventController.cs:70 widget:write; ActionDefinitionSeeder.cs:396 M("widget:write", Mod) |
| 11 | Edit code editor fire bar sends the same samples to the preview | WidgetTestEventController.cs:56-57 summary; useOverlayEditor.ts:62,96; OverlayDetail.vue:423 |
| 12 | Samples-failed message text | overlays en.json editor.samplesFailed; useOverlayEditor.ts:121 |
| 13 | Replay on Home in Happening now / Last stream panel | HappeningPanel.vue:170,201-211; home en.json activity.live/offline/replay |
| 14 | Replay result message counts chat, voice, overlays, widgets | home en.json activity.replayResult; HappeningPanel.vue:50-56 |
| 15 | Replay resends chat line, voice and overlay alerts; grants nothing | home en.json activity.replayTip; DashboardController.cs:449-453; ActivityReplayService.cs:27-35 |
| 16 | Gift bomb replays whole chain in original order, gifter then recipients | DashboardController.cs:450-451 |
| 17 | Three failure messages and meanings; "Nothing to replay" = no stored event and no captured alert | home en.json replayNotFound/replayNothing/replayFailed; HappeningPanel.vue:68-77; ActivityReplayService.cs:96-101 |
| 19 | Add a widget: Duplicate an overlay with code; the copy gets the source's latest code, recompiled; Edit code on the copy then opens; save shows the compiled line | WidgetService.cs:136-220 CloneToEditAsync (copies latest version SourceCode, recompiles; fails WIDGET_NO_SOURCE without one); WidgetService.cs:975-979 (Edit code needs a version); dashboard/src/api/widgets.ts:278-289; overlays en.json editor.compiled |
| 22 | Kind badge sits on the row under the name | OverlayDetail.vue:263-269 |
| 20 | Feather row: Reacts to shows feather show/steal/event (plainEvent replaces dots with spaces) | overlayKind.ts:73, plainEvent (end of file) |
| 21 | Replay count table: overlays = overlay-type event responses; widgets = captured alert payloads re-pushed | server/src/NomNomzBot.Application/Dashboard/Dtos/ActivityReplayResult.cs:21-22; home en.json activity.replayResult |
| 18 | Replay button shown to Moderator or higher | HappeningPanel.vue:201 access.can('dashboard:replay'); ActionDefinitionSeeder.cs:434 |
