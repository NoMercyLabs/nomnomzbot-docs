# Claims: /reference/overlays/obs-browser-source

Product repo paths are relative to C:\Projects\NoMercyLabs\nomnomzbot.

| # | Claim | Source |
| --- | --- | --- |
| 1 | Link shape `/overlay?widgetId=...&token=...` | server/src/NomNomzBot.Api/Controllers/OverlayHostController.cs:36, 50-55 |
| 2 | The page is served without sign-in; the token is the credential | OverlayHostController.cs:33, 37; OverlayTicketController.cs:29, 34 |
| 3 | The dashboard never prints the link; copies it on press | dashboard/src/views/dashboard/overlays/components/ObsSetupAction.vue:13-15, 125-133; OverlayDetail.vue:99-101 |
| 4 | Link origin = the address used to reach the dashboard, unless the operator set OverlayBaseUrl | server/src/NomNomzBot.Api/Controllers/V1/WidgetsController.cs:65-79, 100-106 |
| 5 | Row button Connect / Configure by attached state | ObsSetupAction.vue:146-153; OverlayRow.vue:75-81; overlays/i18n/en.json setup.connect, setup.configure |
| 6 | Button disabled when the overlay has no link | OverlayRow.vue:80 |
| 7 | Dialog title "Set up {name} in OBS", description, Loaded/Not loaded in OBS | ObsSetupAction.vue:156-163; en.json setup.title/loaded/notLoaded |
| 8 | Copy address, Copied for 2 s | ObsSetupAction.vue:36, 125-133, 182-188; en.json setup.copy/copied |
| 9 | Steps in OBS: three lines (copy, add Browser source and paste, set size and boxes) | ObsSetupAction.vue:170-177; en.json setup.steps |
| 10 | Setup lines: Width and height, Control audio via OBS, Shutdown source when not visible, with their values (3 of 3) | ObsSetupAction.vue:87-121; en.json setup.size/audio/shutdown |
| 11 | "full screen" = 1920 x 1080; "it draws nothing" = 1 x 1 | ObsSetupAction.vue:37-38, 75-84 |
| 12 | Setup lines exist only for catalogue (built-in) overlays; custom ones carry none | server/src/NomNomzBot.Application/Widgets/Dtos/WidgetDtos.cs:51-56; ObsSetupAction.vue:88-89 |
| 13 | Copy browser source address / Address copied / no address text | OverlayDetail.vue:99-101, 315-321; en.json detail.copy/copied/noAddress |
| 14 | Health shows A browser source is open / Nothing attached | en.json detail.health attached/detachedNote (via set-up-overlays page); IOverlayPresenceRegistry.cs IsWidgetAttached |
| 15 | Test row texts | en.json testSentDetached and sibling; owned by set-up-overlays |
| 16 | Error page texts (missing token, invalid token, widget not live) | OverlayHostController.cs:57-85 |
| 17 | "Not connected to the bot": shown when on, not attached, and the bot does not control OBS; hint text | ObsSetupAction.vue:60-63, 137-145; en.json setup.stranded/strandedHint |
| 19 | Edit code then Save & Compile | dashboard/src/i18n/locales/en.json:1199 |
| 20 | Custom overlay: no setup lines, no stored size; built-in values: 1920 x 1080, audio box ticked only for sound overlays, shutdown always off | WidgetDtos.cs:51-56; ObsSetupAction.vue:88-89; server/src/NomNomzBot.Infrastructure/Content/Widgets/FirstPartyWidgetCatalogue.cs:94, 101, 107 |
| 18 | Paste shortcut per OS | OBS / OS behavior, not product code |
