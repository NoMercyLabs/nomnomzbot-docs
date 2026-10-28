# Claims: /reference/integrations/obs

Product repo paths are relative to the nomnomzbot repo. "obs/" = dashboard/src/views/dashboard/obs/.

| # | Claim | Source |
| --- | --- | --- |
| 1 | Sidebar label **OBS**; route needs the scene read key | dashboard/src/i18n/locales/en.json:815; obs/route.ts:17-19 |
| 2 | Three tabs **Live**, **Studio and tools**, **Overlays in OBS** and their panels | obs/i18n/en.json "tabs"; obs/ObsView.vue:64-74, 196-262 |
| 3 | Open page / scenes: Moderator; control: Editor, broadcaster may lower to Moderator; broadcast: Broadcaster; config read/write: Broadcaster | server/src/NomNomzBot.Infrastructure/Content/Identity/ActionDefinitionSeeder.cs:373-380; obs/ObsView.vue:56-60 |
| 4 | Read-only note text; controls disabled (grayed) | obs/i18n/en.json "needsControl"; obs/ObsView.vue:182-189; dashboard/src/components/layout/ReadOnlyScope.vue:12-14 |
| 5 | Dialog title, labels **Link OBS**/**Edit connection**, **Link to OBS**, **Host**, **Port**, **OBS password**, **Save connection**, description naming Tools, WebSocket Server Settings | obs/i18n/en.json "connection", "connectionForm"; obs/components/ObsConnectionBar.vue (button); obs/components/ObsConnectionForm.vue |
| 6 | Save closes dialog | obs/components/ObsConnectionForm.vue submit onSuccess open=false |
| 7 | Retry 2 s doubling to 60 s | server/src/NomNomzBot.Infrastructure/Obs/Transport/ObsDirectConnectionKeeper.cs:27-30, 128-130 |
| 8 | Defaults: off, 127.0.0.1, 4455, mask 0xFFF; empty host saved as 127.0.0.1; port 1-65535 | server/src/NomNomzBot.Domain/Obs/Entities/ObsConnectionDefaults.cs:20-37; server/src/NomNomzBot.Infrastructure/Obs/ObsConnectionService.cs:66-70; server/src/NomNomzBot.Application/Obs/Dtos/ObsConnectionDtos.cs (Range 1,65535) |
| 9 | Password sealed, write-only; kept text; Remove password clears | ObsConnectionService.cs:75-86; ObsConnectionForm.vue passwordToSend; obs/i18n/en.json passwordKept/passwordClear |
| 10 | 15 event groups, 4 high volume off by default (0xFFF covers bits 0-10) | server/src/NomNomzBot.Domain/Obs/Entities/ObsEventKinds.cs:20-36; ObsConnectionDefaults.cs:29; obs/i18n/en.json maskHelp |
| 11 | Health words and dots for OBS link | obs/obsHealth.ts connectionHealth; obs/i18n/en.json "connection" |
| 12 | Red shows last error, otherwise host:port | obs/components/ObsConnectionBar.vue linkMeta |
| 13 | Last error / Last connected in dialog | ObsConnectionForm.vue template; DirectObsTransport.cs:322-323, 360 |
| 14 | Bridge optional text in direct mode; OBS control row on Overlays in OBS tab | obs/obsHealth.ts bridgeHealth; obs/components/RequiredOverlaysPanel.vue:47-141; obs/i18n/en.json bridge.optional, required.bridge.name |
| 15 | Header dot is worst of link, bridge, overlays; "Everything is loaded" | obs/ObsView.vue overall/overallText; obs/obsHealth.ts worstDot/overallWords; en.json overall.ok |
| 16 | Outputs rows, buttons, states; Stop stream confirm text | obs/components/OutputsPanel.vue; obs/i18n/en.json "outputs" |
| 17 | Stream/Recording buttons broadcaster only, note text; replay/virtual cam not gated by broadcast key | OutputsPanel.vue ReadOnlyScope canBroadcast; en.json needsBroadcast |
| 18 | Status line with bitrate, dropped frames, CPU, FPS, memory, Live tab when enabled | obs/ObsView.vue:174-181; en.json "stats" |
| 19 | Scenes list, On air mark, click switches | obs/components/ScenesPanel.vue; en.json scenes.current |
| 20 | Sources: show/hide, lock, filters on/off; Audio: mute, slider | obs/components/SourcesPanel.vue:56-136; SourceFilters.vue:26-57; AudioPanel.vue:83-164 |
| 21 | Studio panel: mode, preview scene, transition, duration, Transition button; Hotkeys; Screenshot | obs/components/StudioPanel.vue:69-162; ObsHotkeysPanel.vue:118-204; ObsScreenshotPanel.vue:71-109; en.json studio/hotkeys/screenshot |
| 22 | 19 OBS pipeline actions (count: 7 + 7 + 5) | server/src/NomNomzBot.Infrastructure/Obs/PipelineActions/ObsAudioMediaActions.cs, ObsOutputAndRawActions.cs, ObsSceneActions.cs (ActionType lines) |
| 23 | Stream Deck keys run obs_* actions | server/src/NomNomzBot.Infrastructure/AutomationApi/StreamDeckActions.cs:20-31 |
| 24 | Notice "OBS is not connected", counts, clears, Open OBS | dashboard/src/i18n/locales/en.json:1139-1141; server/src/NomNomzBot.Infrastructure/Notifications/Sources/OwnerActionFailureSource.cs:181-184 |
| 25 | While link on, bot refreshes an open (loaded) overlay browser source with no live connection to the bot, only when the source is switched on in a scene and the overlay is enabled | server/src/NomNomzBot.Infrastructure/Obs/Recovery/ObsBrowserSourceRecoveryService.cs:22-28, 71-90; server/src/NomNomzBot.Application/Obs/Services/IObsBrowserSourceRecoveryService.cs:16-19 |
| 28 | Orange "did not answer" = state or scenes read failed with link on | dashboard/src/views/dashboard/obs/ObsView.vue:144-146 |
| 29 | Event group switches sit under "OBS events to listen to", below the password | dashboard/src/views/dashboard/obs/components/ObsConnectionForm.vue (fieldset after password block) |
| 26 | Scenes empty-state text when off | en.json scenes.offline; ScenesPanel.vue |
| 27 | Direct transport connects from the bot to Host:Port | server/src/NomNomzBot.Infrastructure/Obs/Transport/DirectObsTransport.cs:295-323 |
