# Claims: /reference/overlays/set-up-overlays

Product paths are relative to the product root. Page en.json: `dashboard/src/views/dashboard/overlays/i18n/en.json` (EN). Shell en.json: `dashboard/src/i18n/locales/en.json`. Views: `dashboard/src/views/dashboard/overlays/` (V). Service: `server/src/NomNomzBot.Infrastructure/Widgets/WidgetService.cs` (S). Seeder: `server/src/NomNomzBot.Infrastructure/Content/Identity/ActionDefinitionSeeder.cs`.

| # | Claim | Evidence |
| --- | --- | --- |
| 1 | Sidebar entry **Overlays** | dashboard/src/layouts/dashboard/navigation.ts:216-221; shell en.json:824 |
| 2 | Page reads gated by widget:read, default Moderator, floor VIP | V/route.ts:20; Seeder:395 |
| 3 | Changes gated by widget:write, Moderator | Seeder:396; V/OverlaysView.vue:156 (PageCreateButton disabled reason); V/components/OverlayDetail.vue `can('widget:write')` |
| 4 | Roles Moderator / Lead moderator / Editor / Broadcaster / VIP labels | dashboard/src/views/dashboard/settings/permissions/i18n/en.json:5-13 |
| 5 | Widgets area of the Actions tab | permissions en.json:31 ("Actions"), :97 ("Widgets") |
| 6 | Read-only text "You can view this, but your role cannot change it." | shell en.json:34; OverlaysView.vue (`$t('common.readOnly')`) |
| 7 | **New overlay** button and dialog title | EN:10, :22; V/components/NewOverlayDialog.vue:76 |
| 8 | **Name**, placeholder `My alerts` | EN:25-26 |
| 9 | **Code language** choices Vue / Plain HTML, CSS and JavaScript; default Vue (2 of 2) | NewOverlayDialog.vue:26, :45; EN:28-33 |
| 10 | Language cannot change after create | EN:29 |
| 11 | **Create overlay** | EN:24 |
| 12 | Empty name: "Give the overlay a name.", nothing made | NewOverlayDialog.vue:50-54; EN:27 |
| 13 | After create the dialog closes and the overlay opens beside the list | NewOverlayDialog.vue:68-69; OverlaysView.vue `open(id)` router push ?id |
| 14 | New overlay is switched on | S:123 `IsEnabled = true` |
| 15 | New overlay has no code (no version until first compile) | S:114-116 comment + no version created in CreateAsync S:117-134 |
| 16 | Tabs All / On / Off / Has a problem with hints (4 of 4), counts per tab | OverlaysView.vue FILTERS + tabs computed; EN:63-74 |
| 17 | Search filters by name | OverlaysView.vue `visible` (name includes); EN:6 |
| 18 | Row dot gray/red/orange/green rules | V/components/overlayHealth.ts (off '', error bad, attached ok, else warn) |
| 19 | Row text Off / A browser source is open / Nothing attached; **Fails** on error | V/components/OverlayRow.vue detail + StatusBadge; EN:81-84 |
| 20 | **Built in** = first-party; **Edited** = customized | OverlayDetail.vue builtIn (`source === 'first_party'`), `widget.isCustomized`; EN:139-140 |
| 21 | Panels Settings / Health / Reacts to | OverlayDetail.vue template; EN:149, :163, :173 |
| 22 | **Copy browser source address** copies; label **Address copied**; address never shown | OverlayDetail.vue copyAddress + header comment; EN:144-145 |
| 23 | Health lines and notes (5 states) | OverlayDetail.vue runTitle/runNote/attachLine; EN:148-161 |
| 24 | "No run on record." when never ran | OverlayDetail.vue runNote; EN:154 |
| 25 | Test sends sample to this overlay only; result texts | OverlayDetail.vue sendTest/testSummary + comment; EN:166-170 |
| 26 | Unsaved text, **Save settings**, "Saved.", failure text, no-settings text | V/components/OverlaySettings.vue; EN:174-182 |
| 27 | Saved settings pushed to open browser sources | S UpdateAsync: WidgetSettingsChangedEvent publish when Settings set |
| 28 | Reset-to-default button per changed value | OverlaySettings.vue:85, :199-201; OverlaySettingField.vue:196-202; EN:181 |
| 29 | **Edit code** opens code editor; save shows "Saved and compiled. The overlay now runs this version." | OverlayDetail.vue editor.open / CodeEditor; V/components/useOverlayEditor.ts:75-81; EN:59, :146 |
| 30 | **Overlay on** switch, On/Off text | OverlayDetail.vue Switch; EN:141-143; S UpdateAsync IsEnabled |
| 31 | Switched off does not run until switched on | EN:156 |
| 32 | **Duplicate** opens the copy | OverlayDetail.vue copyOverlay emits duplicated -> OverlaysView open(id); EN:12 |
| 33 | **Delete** lists blast radius or "Nothing else uses this overlay."; **Delete overlay**; leaves list | OverlayDetail.vue askDelete/confirmDelete; OverlaysView @deleted=back; S DeleteAsync; EN:14-19 |
| 34 | Delete description: stops working in every browser source; cannot be undone | EN:17 |
| 36 | List hides the overlays the bot requires; they are on the OBS page | OverlaysView.vue:65-72 (`withoutRequired`, comment); dashboard/src/api/widgets.ts:132-139 |
| 37 | **Edited** = built-in overlay whose code the channel changed (fix 1, replaces row 20 second half) | OverlayDetail.vue:273; server/src/NomNomzBot.Application/Widgets/Dtos/WidgetDtos.cs:24 |
| 38 | Row text vs dot split; red dot adds **Fails** (fix 1, replaces rows 18-19) | overlayHealth.ts:18-28; OverlayRow.vue detail + StatusBadge `v-if lastRuntimeError` |
| 39 | Health two lines: run line (Works with "No fault. Last ran {ago}." or "No run on record.", Failed with fault) and attach line (3 states with notes) (fix 1, replaces rows 23-24) | OverlayDetail.vue:158-210, :336-345; EN:150, :152-160 |
| 40 | Default code language Vue; Vue is a JavaScript framework (general fact) | NewOverlayDialog.vue:38, :45 |
| 41 | Reset button label "Reset {name} to default" | OverlaySettingField.vue:200-201; EN:181 |
| 42 | Code editor save control **Save & Compile**; saving compiles the version the overlay runs | shell en.json codeEditor.saveAndCompile (line 1199); useOverlayEditor.ts:75-81; EN:59 |
| 43 | Open browser sources get new settings at once (no reload) | WidgetService.cs:513-524; WidgetBuildLifecycleHandler.cs:27-38 (SendSettingsChangedAsync) |
| 35 | **Audio levels** opens **Music vs Bot audio levels**, 3 of 3 settings | OverlaysView.vue header + SidePanel; EN:35-52 |
