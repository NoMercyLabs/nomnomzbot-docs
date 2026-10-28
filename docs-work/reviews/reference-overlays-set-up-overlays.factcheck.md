# Fact check: src/content/reference/en/overlays/set-up-overlays.mdx
Verdict: PASS
Reviewed: src/content/reference/en/overlays/set-up-overlays.mdx
Reviewed-SHA: 9c33e4a834db0e1e

Round 2. Product paths are relative to C:\Projects\NoMercyLabs\nomnomzbot (master, includes b6204c36c). V = dashboard/src/views/dashboard/overlays. EN = V/i18n/en.json.

## Round 1 findings, rechecked

1. Line 45 now says the list leaves out the overlays the bot needs, which are on the OBS page: OverlaysView.vue:65-72; dashboard/src/api/widgets.ts:132-139. Fixed.
2. Line 79 **Edited** = built-in overlay whose code the channel changed: OverlayDetail.vue:273; server/src/NomNomzBot.Application/Widgets/Dtos/WidgetDtos.cs:24. Fixed.
3. Line 99 Works row now quotes "No fault. Last ran" (EN:152) and "No run on record." (EN:154), as runNote shows them (OverlayDetail.vue:169-177). Fixed.

## New claims checked

- Default code language Vue: NewOverlayDialog.vue:38, :45.
- Row text and dot split (lines 58-73): OverlayRow.vue detail computed (Off when switched off, else attached / not attached); overlayHealth.ts:18-28 (off gray, error red, attached green, else orange); styles/frame.css:241-257; Fails badge `v-if lastRuntimeError` in OverlayRow.vue. An overlay that is off and failed shows a gray dot with **Fails**; the page does not say otherwise.
- Health line tables (lines 97-106): OverlayDetail.vue:158-210, :336-345; EN:150, :152-160.
- Reset button named "Reset {name} to default", shown when the value differs from its default: OverlaySettings.vue:85-87, :199-201; OverlaySettingField.vue:194-202; EN:181.
- **Save & Compile**: dashboard/src/i18n/locales/en.json:1199, inside `codeEditor.labels` (starts :1187), which useEditorLabels.ts:44 sends to the editor page; save compiles: useOverlayEditor.ts:130-142; EN:59.
- New settings reach open sources at once: WidgetService.cs:513-524; WidgetBuildLifecycleHandler.cs:27-38 (SendSettingsChangedAsync, not a reload).

## Product defects

- EN:174 "Unsaved changes. Open sources reload on save." The code pushes the settings without a reload (WidgetService.cs:513-524; WidgetBuildLifecycleHandler.cs:27-38). The page quotes the screen text correctly.
- EN:70 "Every overlay of your channel." (All tab hint) The tab hides the bot's required overlays (OverlaysView.vue:68-72).
- EN:151 `worksNote` is unused.

## Claim table

| Claim | Supported by | Status |
| --- | --- | --- |
| Sidebar page **Overlays** | EN:4; route.ts:17-20 | supported |
| Overlay shows as OBS browser source | EN:90, EN:114 | supported |
| Moderator and above may open and change | ActionDefinitionSeeder.cs:395-396; OverlaysView.vue:163; OverlayDetail.vue:283, :300, :387 | supported |
| Broadcaster may lower page access to VIP | ActionDefinitionSeeder.cs:33, :44-50, :395 | supported |
| Set in Permissions, Actions tab, Widgets area | permissions en.json:31, :97 | supported |
| VIP sees only; New overlay shows read-only text | ActionDefinitionSeeder.cs:396; OverlaysView.vue:161-165; shell en.json:5 | supported |
| New overlay button opens New overlay dialog | EN:10, :22; OverlaysView.vue:161-165, :222; NewOverlayDialog.vue:76 | supported |
| Name, example `My alerts` | EN:25-26; NewOverlayDialog.vue:84-91 | supported |
| Code language choices; default Vue | NewOverlayDialog.vue:26, :38, :45, :94-102; EN:28-33 | supported |
| Language cannot change after create | EN:29; NewOverlayDialog.vue:103 | supported |
| Create overlay; dialog closes; overlay opens beside list, switched on | EN:24; NewOverlayDialog.vue:68-69; OverlaysView.vue:140-144, :222; WidgetService.cs:123 | supported |
| Empty name text, nothing made | NewOverlayDialog.vue:50-54; EN:27 | supported |
| New overlay has no code yet | WidgetService.cs:114-134 | supported |
| List leaves out the bot's required overlays | OverlaysView.vue:65-72; widgets.ts:132-139 | supported |
| Tabs, counts, meanings | OverlaysView.vue:43-48, :74-84; EN:63-74 | supported |
| Search filters by name; choose a row to open it | OverlaysView.vue:86-92, :135-137, :179, :196; EN:6 | supported |
| Row texts Off / A browser source is open / Nothing attached | OverlayRow.vue detail computed; EN:82-84 | supported |
| Dots gray / red + Fails / orange / green | overlayHealth.ts:18-28; frame.css:241-257; OverlayRow.vue StatusBadge; EN:81 | supported |
| Built in badge | OverlayDetail.vue:80, :270-272; EN:139 | supported |
| Edited badge = built-in overlay whose code the channel changed | OverlayDetail.vue:273; WidgetDtos.cs:24; EN:140 | supported |
| Parts Settings / Health / Reacts to with Test | OverlayDetail.vue:331-384; EN:149, :163-166, :173 | supported |
| Copy browser source address; Address copied; address never shown | OverlayDetail.vue:14, :98-104, :315-320; EN:144-145 | supported |
| Health two lines and their texts | OverlayDetail.vue:158-210, :336-345; EN:150-160 | supported |
| Test sends sample to this overlay only; result texts | OverlayDetail.vue:214-243; EN:168-169 | supported |
| Unsaved text; Save settings; "Saved." | OverlaySettings.vue:145-170, :220-229; EN:174, :176, :182 | supported |
| New settings reach open sources at once | WidgetService.cs:513-524; WidgetBuildLifecycleHandler.cs:27-38 | supported |
| Failed save text | OverlaySettings.vue:147-148, :171-173; EN:177 | supported |
| Reset button when value differs from default | OverlaySettings.vue:85-87, :199-201; OverlaySettingField.vue:194-202; EN:181 | supported |
| No-settings text | OverlaySettings.vue:140-142, :186; EN:178 | supported |
| Edit code; Save & Compile; compiled text | OverlayDetail.vue:300-309; shell en.json:1187, :1199; useEditorLabels.ts:44; useOverlayEditor.ts:130-142; EN:59, :146 | supported |
| Overlay on switch; On / Off; off does not run | OverlayDetail.vue:282-296, :188-193; EN:141-143, :156 | supported |
| Duplicate opens the copy at once | OverlayDetail.vue:110-119, :387-400; OverlaysView.vue:201; EN:12 | supported |
| Delete flow and texts; leaves list | OverlayDetail.vue:126-156, :388-397; OverlaysView.vue:200; EN:14-19 | supported |
| Stops working everywhere; cannot be undone | EN:17 | supported |
| Audio levels opens Music vs Bot audio levels; scope | OverlaysView.vue:157-160, :216-219; EN:36-38 | supported |
| Master volume / Voice volume / Music duck percent | EN:42-51 | supported |
