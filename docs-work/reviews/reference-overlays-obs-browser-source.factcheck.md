# Fact check: src/content/reference/en/overlays/obs-browser-source.mdx
Verdict: PASS
Reviewed: src/content/reference/en/overlays/obs-browser-source.mdx
Reviewed-SHA: 1747cdf5d034c9e2

## Round 3

- New own-overlay table (page lines 64-72) checked against server/src/NomNomzBot.Infrastructure/Content/Widgets/FirstPartyWidgetCatalogue.cs:94-107: FullCanvas = (1920, 1080, audio off, shutdown off); SoundOnly = (1, 1, audio on, shutdown off); FullCanvasWithSound = (1920, 1080, audio on, shutdown off). Every built-in setup keeps shutdown off and ticks audio only when the overlay plays sound, so "1920 x 1080", "tick audio when it plays sound" and "Shutdown: leave it off" match how the built-in overlays are set up. A sound-only overlay is 1 x 1 in the catalogue, but the page advises full screen for one's own overlay, which is guidance and not a product claim.
- "The bot keeps no size for it": WidgetDtos.cs ObsBrowserSource doc (a widget with no catalogue entry carries none); OSA:91-92. Supported.
- Rest of the page skimmed: unchanged from round 2.

## Round 2

- Round 1 finding (link origin) fixed: page line 24 now names the operator's separate overlay address. It matches V1/WidgetsController.cs ResolveOverlayOrigin (OverlayBaseUrl wins when set, else the access origin).
- Step split (steps 6 to 8) matches en.json setup.steps.set and the two box labels setup.audio.label / setup.shutdown.label.
- Custom overlay text (lines 64-66) matches WidgetDtos.cs ObsBrowserSource doc (catalogue only) and OSA:91-92, 162. The size advice is guidance for the reader, not a product claim.
- Shutdown row (line 62) restates en.json:108 "Leave it off, or the overlay misses events while hidden".
- New label "Save & Compile" exists: dashboard/src/i18n/locales/en.json:1199 (saveAndCompile).
- "Not connected to the bot" fix text: the strandedHint (en.json:94) offers refresh, and the OBS connection repairs it (OSA:61-63). Supported.

## Product defects

- ObsSetupAction.vue:63 shows "Not connected to the bot" when `expected && !connected && !repairs`. The hint en.json setup.strandedHint (overlays/i18n/en.json:94) says the overlay "is open in OBS but cannot reach the bot"; the condition does not check that OBS has it open, so the hint is also shown for a source never added.

## Claims

Product paths relative to C:\Projects\NoMercyLabs\nomnomzbot. en.json = dashboard/src/views/dashboard/overlays/i18n/en.json. OSA = dashboard/src/views/dashboard/overlays/components/ObsSetupAction.vue. OD = .../components/OverlayDetail.vue. OR = .../components/OverlayRow.vue. OHC = server/src/NomNomzBot.Api/Controllers/OverlayHostController.cs.

| Claim | Supported by | Status |
| --- | --- | --- |
| Link shape /overlay?widgetId=...&token=... | OHC route "overlay", query widgetId and token (Get params) | Supported |
| Anyone with the link can open the overlay | OHC [AllowAnonymous]; token check in Get | Supported |
| Dashboard never prints the link; copies only on press | OSA:123-131, 180-187; OD:98-103, 315-323 | Supported |
| Link origin = dashboard address unless operator set a separate overlay address | V1/WidgetsController.cs WithOverlayOrigin / ResolveOverlayOrigin | Supported |
| Overlays in the sidebar | en.json list.title "Overlays" | Supported |
| Row button Connect / Configure by OBS-open state | OSA:144-151; OR:75-81; en.json:87-88 | Supported |
| Dialog title "Set up {name} in OBS" | OSA:155; en.json:89 | Supported |
| Setup lines shown only if present | OSA:162 (v-if facts.length) | Supported |
| Copy address; Copied for two seconds | OSA:36, 67-73, 186; en.json setup.copy/copied | Supported |
| OBS step: Browser source type, paste address | en.json setup.steps.add | Supported |
| Steps: width and height, then the two boxes | en.json setup.steps.set; setup.audio.label, setup.shutdown.label | Supported |
| Loaded in OBS / Not loaded in OBS; row then reads Configure | OSA:150, 160; en.json:91-92 | Supported |
| Width and height; full screen = 1920 x 1080; it draws nothing = 1 x 1 | OSA:37-38, 75-84, 97-101; en.json size.* | Supported |
| Control audio via OBS: Tick it / Leave it off | OSA:102-110; en.json audio.* | Supported |
| Shutdown: Tick it / Leave it off; ticked misses events while hidden | OSA:111-119; en.json:106-108 | Supported |
| Setup lines only for built-in overlays | WidgetDtos.cs ObsBrowserSource doc; OSA:91-92 | Supported |
| Copy browser source address / Address copied | OD:315-319; en.json detail.copy/copied | Supported |
| No link: button disabled, "This overlay has no address yet." | OD:315, 321-323; en.json detail.noAddress | Supported |
| Health: A browser source is open / Nothing attached | OD:198, 207; en.json detail.health.attached/detached | Supported |
| Test row texts | OD:220-228; en.json events.testSent/testSentDetached | Supported |
| Test beside an event under Reacts to | en.json events.title/test | Supported |
| Error "This overlay URL is missing its token." | OHC Get, empty token branch | Supported |
| Error "This overlay token is not valid." | OHC Get, manifest failure branch | Supported |
| Error "That widget is not live on this channel (unknown, disabled, or not built)." | OHC Get, entry null branch | Supported |
| Edit code / Save & Compile | en.json detail.editCode; dashboard/src/i18n/locales/en.json:1199 | Supported |
| "Not connected to the bot": on, no source open, bot does not control OBS | OSA:62-63, 135-143; useObsRepairsWidgets.ts:22-34; en.json:93 | Supported |
| Bot refreshes an open source when the OBS connection is on | OSA:61; en.json:94 | Supported |
| Paste with Ctrl+V / Command+V; OBS Browser source UI | OBS and OS behavior, not product code | Outside product (accepted) |
