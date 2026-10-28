# Fact-check: /reference/integrations/obs (round 2)
Verdict: PASS
Reviewed: src/content/reference/en/integrations/obs.mdx
Reviewed-SHA: 12c8cc2e868be8b3

## Round 2: changed sentences checked
- Line 9 overlay link "only shows a page in OBS": true, same meaning as round 1.
- Lines 84-86 the top line shows two things; the bridge is a hidden page inside OBS as a browser source: ObsConnectionBar.vue (connection and bridge dots); en.json bridge.*, required.bridge.detail. True.
- Line 94 orange "did not answer when the page asked for its state or scenes": obs/ObsView.vue:144-146 (refused = state.isError || scenes.isError; unreachable = enabled && refused). True.
- Lines 160-161 refresh only an open source, switched on in its scene, showing an enabled overlay with no connection to the bot: ObsBrowserSourceRecoveryService.cs:66-75 (IsLoaded, IsEnabledInScene, widget address), :85 (widget IsEnabled), :93 (not IsWidgetAttached), :102 (RefreshBrowserAsync). True. Runs via ObsBrowserSourceRecoveryScheduler.cs:63-81 and needs OBS to answer GetBrowserSourcesAsync (:55-64).
- Rest of the page skimmed against the round 1 rows below; no other fact changed.

Product repo paths are relative to C:\Projects\NoMercyLabs\nomnomzbot. "obs/" = dashboard/src/views/dashboard/obs/.

## Notes (not failures)
- The connection line at the top (page line 82) only renders for a user with the config read right (Broadcaster): obs/ObsView.vue:198-199 `v-if="canSeeConnection"`, :58 `obs:config:read`. The page's permission table row "See and change the link to OBS | Broadcaster" covers this.
- The stop-stream dialog also says "Viewers see the stream end right away." (obs/i18n/en.json outputs.stopStream.viewers); the page omits it, which is not untrue.
- The status bar also shows stream and recording states (en.json stats); the page lists a subset, which is not untrue.

## Writer "not checked" items
- Notice location: page says only "the dashboard shows the notice"; supported by OwnerActionFailureSource.cs:181-187 (Kind obs_not_connected, DeepLinkRoute "obs").
- Bridge mode on another computer: cut from the page; correct to leave out.

## Product defects
- No control in the dashboard picks the connection mode (direct or bridge); ObsConnectionForm.vue sends the stored mode, and ObsConnectionService.cs:66 copies request.Mode. Yet the OBS control row says "Needed when OBS runs on another computer." (obs/i18n/en.json required.bridge.detail). Writer A15 found this; confirmed the form has no mode field (ObsConnectionForm.vue:96-165). Not filed.

## Claims
| Claim | Supported by file:line | Status |
| --- | --- | --- |
| Sidebar label OBS | dashboard/src/i18n/locales/en.json:815 | true |
| Three tabs Live / Studio and tools / Overlays in OBS | obs/i18n/en.json tabs | true |
| Live holds outputs, scenes, audio mixer, sources | obs/ObsView.vue:226-252 | true |
| Studio and tools holds studio mode, hotkeys, screenshot | obs/ObsView.vue:254-258 | true |
| Open page / see scenes: Moderator | ActionDefinitionSeeder.cs:379; obs/ObsView.vue:57,63-64 | true |
| Control: Editor, broadcaster may lower to Moderator | ActionDefinitionSeeder.cs:376-378 (MFloor obs:control, Editor, Mod) | true |
| Stream/recording: Broadcaster | ActionDefinitionSeeder.cs:380; OutputsPanel.vue:49,114,148 | true |
| Link config read/write: Broadcaster | ActionDefinitionSeeder.cs:373-374 | true |
| needsControl text; controls grayed out | obs/i18n/en.json needsControl; ObsView.vue:215-221; ReadOnlyScope.vue (disabled fieldset comment) | true |
| Dialog description names Tools, WebSocket Server Settings | en.json connectionForm.description | true |
| Button Link OBS / Edit connection | ObsConnectionBar.vue:109-111; en.json connection.link/edit | true |
| Dialog title OBS connection; Host, Port, OBS password, Link to OBS, Save connection | ObsConnectionForm.vue:96-129; en.json connectionForm | true |
| Link to OBS switch at top of dialog | ObsConnectionForm.vue:103-106 (first field) | true |
| Save closes dialog | ObsConnectionForm.vue:84 | true |
| Connected green dot | obsHealth.ts:56 (ok); en.json connection.connected | true |
| Retry 2 s doubling to 60 s | ObsDirectConnectionKeeper.cs:28-29,128-130 | true |
| Defaults off, 127.0.0.1, 4455 | ObsConnectionDefaults.cs:23-38 | true |
| Empty host saved as 127.0.0.1 | ObsConnectionService.cs:67-69 | true |
| Port 1-65535 | ObsConnectionDtos.cs:65 | true |
| Password box empty on open | ObsConnectionForm.vue:56 | true |
| Password sealed; kept text; Remove password clears | ObsConnectionService.cs:74-86; ObsConnectionForm.vue:62-65,134-144 | true |
| 15 groups, 4 high volume off by default | en.json kinds (15 keys, 4 "(high volume)"); ObsConnectionDefaults.cs:29-35 (0xFFF low bits; high-volume bits 16-19) | true |
| maskHelp meaning | en.json connectionForm.maskHelp | true |
| Health words/dots off gray, failed red, unreachable orange, connected green | obsHealth.ts:49-56; en.json connection | true |
| Red shows last error, else host:port | ObsConnectionBar.vue:48-60 | true |
| Last error / Last connected in dialog | ObsConnectionForm.vue:160-165 | true |
| Bridge optional text in direct mode | obsHealth.ts:69-71; en.json bridge.optional | true |
| OBS control row on Overlays in OBS | en.json required.bridge.name; RequiredOverlaysPanel.vue | true |
| Header dot worst of link, bridge, overlays; Everything is loaded | obsHealth.ts:91-107; ObsView.vue:170-185; en.json overall.ok | true |
| Outputs rows, buttons, states | OutputsPanel.vue:107-236; en.json outputs | true |
| Pause/Resume and Split only while recording | OutputsPanel.vue:151-179 | true |
| Stop stream confirm title, description, recording keeps running | OutputsPanel.vue:245-253; en.json outputs.stopStream | true |
| needsBroadcast text | en.json needsBroadcast; OutputsPanel.vue:115,149 | true |
| Status line on Live while link on: bitrate, dropped, CPU, FPS, memory | ObsView.vue:207-208; en.json stats | true |
| Scenes panel, On air mark | en.json scenes.current; ObsView.vue:237 | true |
| Sources: show/hide, lock, filters on/off | en.json sourceItems.shown/locked/filterEnabled | true |
| Audio: mute, level slider | en.json audio.mute/level | true |
| Studio mode: Preview scene, Transition, Duration (seconds), Transition button | en.json studio | true |
| Hotkeys: press, Search the hotkeys | en.json hotkeys.description/search | true |
| Screenshot: Image format, Capture | en.json screenshot.format/capture | true |
| 19 OBS pipeline steps | ObsAudioMediaActions.cs (7), ObsOutputAndRawActions.cs (7), ObsSceneActions.cs (5): `grep -rn "ActionType =>"` = 19 | true |
| Stream Deck runs obs_ actions | StreamDeckActions.cs:20-31 | true |
| Notice "OBS is not connected", counts, clears, Open OBS | en.json:1139-1141; OwnerActionFailureSource.cs:181-187 | true |
| Bot refreshes unloaded overlay source while link on | IObsBrowserSourceRecoveryService.cs:16-19 | true |
| Scenes offline text | en.json scenes.offline | true |
| Bot connects to Host:Port | DirectObsTransport.cs:295-323; ObsDirectConnectionKeeper.cs | true |
