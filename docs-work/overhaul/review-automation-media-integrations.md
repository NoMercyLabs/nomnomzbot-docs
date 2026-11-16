# Independent review: Automation, overlays, music, audio and integrations

Reviewed: 2026-11-05.
Status: **21/21 fact checks PASS; 21/21 reader reviews PASS**, at the exact article hashes below.
Product source: 54da8b6318de63b5205a0ff8db35e0b9045dd959 plus the preserved uncommitted music UI changes.
This reviewer changed review artifacts only; article repairs were made by the lead.

## Method and boundaries

All 21 whole articles were read in actual sidebar order: automation, overlays, music, voice/sound, integrations, then Read aloud for a page in Code and SDK (Draft). The author inventory was used to locate relevant implementation, not as source proof. Consequential defaults, permission gates, platform differences, persistence, side effects and setting interactions were traced in the current implementation. Existing historical review bodies remain archived beneath new full-hash reviews.

Reader review follows the owner's current editorial guidance: connected teaching, practical first results, expected outcomes, flexible structure and preserved advanced lookup. Atlas sentence caps, fixed headings and old pilot imitation were not imposed. The main user guide remains practical for streamers/moderators; the read-aloud endpoint article explicitly targets developers and retains its route in the separate technical navigation.

The shared usage guard was checked before work and throughout this review. Returned states were allowed and not stale, with usage from 1% to 2% against the day-one 12.29% cutoff. No guard refresh, modification or bypass was performed. No product build/test, bot/API startup, live channel action, installation, commit or push was performed. Source/connection state was never counted as observed visible/audible output.

## Findings repaired and re-reviewed

| Finding | Evidence | Final result |
| --- | --- | --- |
| Song-request guide still said the default personal !sr cooldown was 5 seconds. | Infrastructure/Commands/Builtins/SongRequestBuiltin.cs:45-47 | Now 12 seconds, consistent with the built-in reference. |
| Timer Read it aloud promised speech for every delivery target. | Infrastructure/Commands/Jobs/TimerService.cs:310-320 checks successful chat delivery. | Table now explains that overlay-only and Nowhere do not invoke speech. |
| Heart-rate feed example used double braces. | Infrastructure/CustomEvents/EventHandlers/CustomDataVariables.cs:20-28 and Platform/Templating/Parsing/TemplateParser.cs:137-169 | Now uses one brace pair and states the expected result72. |
| TTS omitted Read usernames, Skip bot messages and Moderators approve first. | dashboard tts RulesPanel.vue:106-119, SpeakingPanel.vue:270-277; Infrastructure/Tts/TtsConfigService.cs:147-150 | All three controls/defaults are included. Stored preferences are not falsely presented as active runtime behavior. |
| Approval could make the new speech walkthrough silently wait, with no dashboard review UI. | Infrastructure/Tts/TtsDispatchService.cs:431-440,607-620,806-864; Api/Controllers/V1/TtsQueueController.cs:31-105; no dashboard consumer beyond generated schema | First setup keeps approval off. The article explains the current missing review screen, held requests and why turning approval off does not play existing held work. |

Infrastructure, Application and Api in abbreviated evidence mean server/src/NomNomzBot followed by that layer. Dashboard paths are under dashboard/src. Source references and fuller per-page evidence follow below and in docs-work/reviews.

The approval repair was checked through both real paths: reward typed speech passes AlreadyPaid:true to RequestSpeakAsync, while a pipeline Play TTS step also uses that service. Payment bypasses bits/role/cooldown; it does not bypass the actual approval branch. A stale comment about older direct reward behavior was not treated as authority.

## Exact final hashes

| Article | Fact check | Reader | SHA256 |
| --- | --- | --- | --- |
| automation/timers-and-chat-triggers | PASS | PASS | `f38720e61cd0518f982347f591a74fb8d44b972a7e9f478e211c56be2985fe60` |
| automation/event-responses | PASS | PASS | `c778bb8aab5fda2cf4b919f380df5027eefad26cb4e68d82cd876b83fecccf49` |
| automation/rewards | PASS | PASS | `b2d2d5b856ef693cd270a414c7552d2a653357875b03810937ccb8013a2a0c96` |
| overlays/set-up-overlays | PASS | PASS | `eb86df7a7627717335c40d44d52a2401443628d1d4853e708bb767d0a5accd0b` |
| overlays/obs-browser-source | PASS | PASS | `192c7182405fb04e658230e17f0980425dfee0a952a8ded9d19babca1c6bdf26` |
| overlays/widgets-and-alerts | PASS | PASS | `f4deeb3c9ecae6d0b960fa30d3c22d27a7c4e0f35217613bcfbb9d5d72fea148` |
| music/music-player | PASS | PASS | `98c6051a2a074d6d9c5741a3d65ae54423dcc778c3dd5c33a3b928dedab293c9` |
| music/song-requests | PASS | PASS | `a3c1b774e6dbb5a14dc4c0909f119d2f7c54910b1aa1857005f1741ef2956515` |
| audio/text-to-speech | PASS | PASS | `4d7ec8c974212b595d577378c1409f4f06135aa8793ffd6c5a598ee73e82044f` |
| audio/voice-triggers | PASS | PASS | `a69b74e672cae24beb5defc1dfec25073de7efd1f7578b0dc8e456cd50d2727c` |
| audio/sounds | PASS | PASS | `a75b99017b71c287c2901498898dd7784e11c71d132e74c37c06989fc10637b3` |
| audio/media-share | PASS | PASS | `d9be380b8d3d13afa046f60ac45cf80833fd76f2fa7ad1cac9d4ab50cd2ce8b6` |
| integrations/spotify | PASS | PASS | `6baffbcd331924968f8cf0f9703b87480108829a2e8d79be7a7d521cad3257c5` |
| integrations/discord | PASS | PASS | `f0222a8a59006fb05acb6fa784c06c6f28c12bf200390f2cd82e9a4d65b2c296` |
| integrations/youtube | PASS | PASS | `6aa02bb915ad453cf95daf6c6dca8d3c673fd23fe2f953e6504587c004cd31a5` |
| integrations/obs | PASS | PASS | `a35ec15b33a6e2aa8fb39ed7101d1e2de6837f7b41eeae4cc001eead483ee638` |
| integrations/stream-deck-and-api-devices | PASS | PASS | `579e4a30863c0af2d1e1c06d7b2e5075ea823899b2d32be0821ce508dc04d58b` |
| integrations/vtube-studio | PASS | PASS | `c9fb1f3097c16c7915c89ac096ee5d4ba7b57d65498c0d482be1fd9d05ac84c5` |
| integrations/webhooks-and-event-feeds | PASS | PASS | `5f95383cf13a01e20e9fbd4b2e9fefa7598a472acc0db06cea3742a1c0da2c31` |
| integrations/supporter-sources | PASS | PASS | `ba43d7246851fa8e8858d01c497170158f9d44750da9953948b0b49f823bd817` |
| audio/read-aloud-api | PASS | PASS | `a925a99fbc7849d079bf696152559b673d6fb4bf15c69c2d0b0144d72bb19776` |

## Per-page assessment and current evidence

### automation/timers-and-chat-triggers

Timer versus chat-trigger purpose is explained before controls. The rotating reminder and greeting examples show useful outcomes; first-fire, activity, offline behavior and cooldown exceptions remain precise. The reviewed repair explains that overlay-only or Nowhere delivery does not invoke Read it aloud.

- server/src/NomNomzBot.Infrastructure/Commands/Jobs/TimerService.cs:50-63,108-135,162-215,265-329: 30-second tick, connected channels, interval/activity checks, persisted fire/rotation, delivery retry and successful-chat-only speech.
- dashboard/src/views/dashboard/timers/components/timerDraft.ts:37-46: 30-minute/0-line defaults and 1..1440-minute/10000-line bounds; NewTimerDialog.vue:66-120 validates required reaction input.
- server/src/NomNomzBot.Infrastructure/Chat/EventHandlers/ChatMessageHandler.cs:194-253,1388-1495: ordinary-line precedence, one matching chat trigger, role gate, shared cooldown and operator exception; server/src/NomNomzBot.Infrastructure/Commands/ChatTriggerService.cs:101-116 stores clamped cooldown and permission.

### automation/event-responses

The new-follower walkthrough teaches a small first response and the role of event-specific values. The article separates the underlying event, its reply/actions and visible alert source, and explicitly warns that Test uses saved configuration and can run real pipeline effects. The full event/default reference remains optional lookup.

- server/src/NomNomzBot.Application/Commands/Services/EventResponsePresetCatalog.cs:35-209 defines the catalog and matching event variables; server/src/NomNomzBot.Infrastructure/Content/Commands/PlatformEventResponseDefaultsSeeder.cs:35-100 defines 18 enabled defaults and the single default spoken gift-received event.
- server/src/NomNomzBot.Infrastructure/Commands/EventResponseTestService.cs:78-170 sends sample data through the actual executor and real downstream dependencies; server/src/NomNomzBot.Infrastructure/Platform/Eventing/EventResponseExecutor.cs:335-400,500-590 confirms successful-chat-only speech, mixed narration/viewer segments and real target/pipeline execution.
- server/src/NomNomzBot.Infrastructure/Commands/EventResponseService.cs:80-130 resolves effective defaults and personality; current editor labels and save/test affordances were checked with the authored workflow.

### automation/rewards

The article explains Twitch Channel Points separately from bot currency, starts with an editable reward, and teaches redemption through a visible chat result. It retains independent speech/countdown behavior, another-app restrictions, queue actions, copy-off state and empty-reply subtleties instead of simplifying them away.

- server/src/NomNomzBot.Infrastructure/Rewards/EventHandlers/RewardRedeemedHandler.cs:145-270,397-416 distinguishes countdown, reward speech, direct binding and pipeline/simple-reply fallback; the behaviors are not all mutually exclusive.
- server/src/NomNomzBot.Infrastructure/Rewards/RewardService.cs:284-342 updates Twitch before local persistence; server/src/NomNomzBot.Infrastructure/Content/Identity/ActionDefinitionSeeder.cs:488-492 defines reward-management and redemption roles, while server/src/NomNomzBot.Api/Controllers/V1/RewardsController.cs:186-333 applies the actual management gates.
- dashboard/src/views/dashboard/channel-points/ChannelPointsView.vue:33-60 and reward list/editor controls expose existing rewards/duplication rather than a New reward control.

### overlays/set-up-overlays

The guide teaches the configuration-to-OBS relationship and starts with supplied sources requiring no code. It explains where required versus custom sources live before offering optional custom creation and SDK links. Health and settings/code maintenance remain complete, and connectivity is distinguished from verified output in the linked walkthrough.

- server/src/NomNomzBot.Infrastructure/Content/Widgets/FirstPartyWidgetCatalogue.cs:60-107 separates system surfaces and source dimensions/audio requirements; dashboard/src/views/dashboard/overlays/OverlaysView.vue:64-70 excludes them from the custom list.
- dashboard/src/views/dashboard/obs/components/RequiredOverlaysPanel.vue:103-145 exposes setup actions, and dashboard/src/views/dashboard/overlays/components/ObsSetupAction.vue:155-195 renders connection/size/audio facts and a copy control, not a required-widget settings editor.
- server/src/NomNomzBot.Api/Controllers/OverlayHostController.cs:69-110 refuses invalid/unknown/disabled/unbuilt widgets and serves current manifests.

### overlays/obs-browser-source

A nontechnical reader gets a concrete copy/add/configure/trigger/check path. Required-source discovery is included, secrets are explained at the point of use, and the preview/audio-mixer check prevents an open-connection badge from being mistaken for successful visible or audible output.

- dashboard/src/views/dashboard/overlays/components/ObsSetupAction.vue:155-195 supplies Connect/Configure, copied addresses and OBS facts; dashboard/src/views/dashboard/obs/components/RequiredOverlaysPanel.vue:103-145 uses it for required sources.
- server/src/NomNomzBot.Infrastructure/Content/Widgets/FirstPartyWidgetCatalogue.cs:87-107 defines full-canvas, sound-only and caption-with-audio setup; server/src/NomNomzBot.Api/Controllers/OverlayHostController.cs:50-110 validates token/widget availability.
- External browser-source semantics were checked against https://obsproject.com/kb/browser-source on 2026-11-05. The review does not claim that an OBS source was opened or that any output was seen/heard.

### overlays/widgets-and-alerts

The article distinguishes event, chat response and stream presentation, then guides the reader to supplied Alerts before optional customization. It accurately explains the current missing settings path and real replay effects while retaining widget-kind, preview and replay lookup details.

- server/src/NomNomzBot.Infrastructure/Content/Widgets/FirstPartyWidgetCatalogue.cs:72-126 defines supplied alerts/subscriptions and one-at-a-time display configuration; dashboard/src/views/dashboard/overlays/OverlaysView.vue:64-70 and obs/components/RequiredOverlaysPanel.vue:103-145 establish the inaccessible required-widget settings boundary.
- server/src/NomNomzBot.Infrastructure/Dashboard/Replay/ActivityReplayService.cs:63-160 reconstructs event chains and counts presentations/captured alerts without publishing a second source event; server/src/NomNomzBot.Infrastructure/Platform/Eventing/EventResponseExecutor.cs:500-590 can invoke attached real actions.
- Preview/test separation and listed widget kinds were checked against the current overlay editor/reference evidence; no live test or browser presentation is asserted.

### music/music-player

The first-song path explains Spotify active-device audio versus YouTube browser-source audio before controls. The player-setting availability gap is explicit, and the full shortcut-button/history reference remains usable. It asks for Now playing plus the OBS mixer, avoiding a false claim that connection proves audible output.

- server/src/NomNomzBot.Infrastructure/Content/Widgets/Assets/music_player.vue:294-414 registers a Spotify Connect device without transferring playback automatically; server/src/NomNomzBot.Infrastructure/Music/SpotifyMusicProvider.cs:546-586 requires the separate streaming grant for an embedded token.
- dashboard/src/api/music.ts:683-717 uses 50 history rows and 10 top requesters; dashboard/src/views/dashboard/music/components/ThanksPanel.vue:25-81 renders ranks/counts/bars. The current dirty UI files were read and preserved.
- server/src/NomNomzBot.Application/Music/Dtos/MusicConfigDefaults.cs:20-32 establishes Playback/requests defaults; server/src/NomNomzBot.Infrastructure/Content/Widgets/FirstPartyWidgetCatalogue.cs:87-107 defines the audio-only OBS source setup.

### music/song-requests

The guide teaches participation and fairness, then keeps stable request codes, queue numbers, roles, source controls and restart/permit rules available. The 12-second repair removes a contradiction with the built-in catalog. Concrete limits are explained as sharing stream time, rather than a detached settings list.

- server/src/NomNomzBot.Infrastructure/Commands/Builtins/SongRequestBuiltin.cs:45-47 sets 0 shared/12-second personal command pacing; the reviewed article now says 12 seconds.
- server/src/NomNomzBot.Application/Music/Dtos/MusicConfigDefaults.cs:20-32 defines 50 queued, 5 per person, 360-second tracks, Spotify allowed and YouTube off; server/src/NomNomzBot.Infrastructure/Music/MusicService.cs:1170-1330 implements operator/per-role cap interactions, playability, duplicates, fair insertion and persistence.
- server/src/NomNomzBot.Infrastructure/Music/FairQueue.cs:82-99 orders equal-rank requests FIFO and accounts for currently playing requests; SongRequestQueueRestoreHostedService.cs:45-80 restores only within 4 hours; RefusedSongRequestStore.cs:34-65 holds only the latest qualifying refusal for 15 minutes in memory.
- server/src/NomNomzBot.Infrastructure/Music/PipelineActions/SongWrongAction.cs:104-176 distinguishes stable code/current queue position and restricts retraction to the caller's requests.

### audio/text-to-speech

The guide begins with an end-to-end spoken command and distinguishes channel narration from viewer speech. The re-reviewed additions include all three omitted visible controls, identify stored-but-unused preferences, explain the approval queue/dashboard gap and recommend approval off for the initial test. Paid rewards bypass role/bits/cooldown, while approval still applies; no absent approval UI is invented.

- server/src/NomNomzBot.Domain/Tts/Entities/TtsConfig.cs:33-84 defines enabled/Edge/500-character/censor/role defaults; server/src/NomNomzBot.Infrastructure/Tts/TtsDispatchService.cs:292-440 enforces enabled, bits, role, cooldown, length and approval.
- server/src/NomNomzBot.Infrastructure/Tts/TtsDispatchService.cs:1265-1287,1351-1390 distinguishes persistent usage-ledger cooldown, bot/paid bypass and per-viewer voice assignment; server/src/NomNomzBot.Infrastructure/Rewards/EventHandlers/RewardRedeemedHandler.cs:397-416 passes AlreadyPaid while still using the same RequestSpeakAsync/approval path.
- dashboard/src/views/dashboard/tts/RulesPanel.vue:106-119 and SpeakingPanel.vue:270-277 expose Read usernames, Moderators approve first and Skip bot messages. server/src/NomNomzBot.Infrastructure/Tts/TtsConfigService.cs:147-150 stores the first/last preferences, but no runtime reads were found; the repaired guide states that limitation.
- server/src/NomNomzBot.Infrastructure/Tts/TtsDispatchService.cs:431-440,607-620,640-710,806-864 holds accepted requests and implements explicit approval; server/src/NomNomzBot.Api/Controllers/V1/TtsQueueController.cs:31-105 exposes review APIs. No dashboard queue consumer was found beyond generated schema. server/src/NomNomzBot.Infrastructure/Tts/PipelineActions/PlayTtsAction.cs:222-249 also uses RequestSpeakAsync.
- server/src/NomNomzBot.Infrastructure/Content/Widgets/Assets/tts_caption.vue:8-62 and server/src/NomNomzBot.Infrastructure/Platform/Eventing/EventResponseExecutor.cs:350-400 separate speech playback/captions and channel narration/viewer words.

### audio/voice-triggers

The listener/count/sticker steps are separated so readers can verify recognition before presentation. The substring example and cooldown explain unexpected counts; transcript storage and the secret listener link are explicit. The missing supplied-alert settings path is documented without inventing a workaround UI.

- server/src/NomNomzBot.Infrastructure/Commands/VoiceTriggerService.cs:78-120,215-319 validates/stores phrases, preserves transcript only for a current live stream, applies case-insensitive substring/first-match/cooldown and increments once.
- server/src/NomNomzBot.Api/Controllers/VoiceListenerPageController.cs:119-130,205-238 uses browser speech recognition, 20 displayed phrases, en-US and restart; the listener is not an OBS source.
- dashboard/src/views/dashboard/overlays/OverlaysView.vue:64-70 and obs/components/RequiredOverlaysPanel.vue:103-145 confirm the supplied Alerts settings cannot be edited through those controls.

### audio/sounds

The article starts with Bot Audio and a realistic bare chat-word test, then explains saved clip reuse and independent chat versus pipeline gating. File/count limits, disabling, deletion consequences, handles/synced playback and overall volume remain available for lookup.

- server/src/NomNomzBot.Infrastructure/Sound/Audio/SoundClipAudioRules.cs:24-80 validates actual audio bytes, 10 MiB and 3 minutes; SoundClipService.cs:31-32,121-123,203-205,331-365 enforces count/cooldown and enabled playback.
- server/src/NomNomzBot.Infrastructure/Chat/EventHandlers/ChatMessageHandler.cs:223-236,1435-1495 enforces chat-word role/cooldown and precedence; server/src/NomNomzBot.Infrastructure/Sound/PipelineActions/PlaySoundAction.cs:35-116 resolves the same enabled clip but uses independent pipeline options and at most 60 seconds waiting.
- server/src/NomNomzBot.Infrastructure/Content/Widgets/FirstPartyWidgetCatalogue.cs:60-107 distinguishes the sound-only system source from TTS caption.

### audio/media-share

One free approved-video test teaches submission, review and playback before opening the feature. The source-versus-dashboard distinction is clear. Pricing/refund behavior, silent passive Twitch submissions, queue order and player controls retain their practical consequences.

- server/src/NomNomzBot.Domain/MediaShare/Entities/MediaShareConfig.cs:25-55 defines off/approval-on/provider/duration/queue/cooldown defaults.
- server/src/NomNomzBot.Infrastructure/MediaShare/MediaShareService.cs:65-210 validates eligibility/queue/cost before persistence; :544-582 refunds using current configuration and clears the charge reference. MediaShare/Playback/MediaSharePlaybackService.cs:60-193 distinguishes end/error/skip/stop paths.
- server/src/NomNomzBot.Infrastructure/Chat/EventHandlers/ChatMessageHandler.cs:237-246,1512-1552 silently submits the first ordinary Twitch clip URL through the same service; YouTube has no such passive path.

### integrations/spotify

Account versus app is explained before personal app setup, allowing the shared-app path to stay simple. The first-device check separates account connection from audio capture. It preserves exact callback/scopes/secrets and truthfully explains why normal Reconnect cannot add the missing streaming grant.

- server/src/NomNomzBot.Infrastructure/Integrations/ChannelSpotifyCredentialsService.cs:39-140 requires both app fields, seals the secret and permits shared fallback. dashboard/src/api/integrations.ts:37-44 requests playback+library; server/src/NomNomzBot.Infrastructure/Integrations/OAuthProviderRegistry.cs:64-92 defines streaming separately.
- server/src/NomNomzBot.Infrastructure/Music/SpotifyMusicProvider.cs:546-586 refuses embedded tokens without streaming; Content/Widgets/Assets/music_player.vue:294-414 registers a selectable device without transferring playback.
- External requirements verified 2026-11-05: https://developer.spotify.com/documentation/web-api/concepts/quota-modes (Premium app owner, 5 users and allowlist); https://developer.spotify.com/documentation/web-api/concepts/redirect_uri (exact match/loopback exceptions).

### integrations/discord

The guide starts with a simple go-live notification, postponing role pings and embeds until the destination works. It distinguishes Preview saving, self-assign buttons, notification DMs and the streamer live role. Pause, consent and disconnect consequences remain explicit.

- server/src/NomNomzBot.Infrastructure/Content/Identity/ActionDefinitionSeeder.cs:225-232 defines viewer/configuration/broadcaster roles. Discord/DiscordNotificationDispatcher.cs:95-155 applies active-link consent and dedup before posting; :187-320 persists outcomes and separately fans out opted-in role DMs.
- dashboard/src/views/dashboard/discord/components/RuleEditor.vue:205-235 saves the current rule before Preview. Current notification/role panels and labels were checked against the full article.

### integrations/youtube

The opening gives a clear choice between YouTube streaming-platform access and YouTube music, preventing unnecessary account setup. The article retains connection-state lookup and explains the broader-than-necessary disconnect dialog instead of claiming music stops with account disconnection.

- dashboard/src/api/integrations.ts:37-44 requests youtube.manage; server/src/NomNomzBot.Infrastructure/Integrations/OAuthProviderRegistry.cs:216-240 defines account scopes.
- server/src/NomNomzBot.Infrastructure/Music/Playback/YouTubePlaybackEngine.cs:20-75 dispatches music through the overlay provider independently of the channel-account OAuth flow; Integrations/IntegrationBlastRadiusService.cs:80-81 lists all music actions for YouTube disconnect, broader than that dependency.
- server/src/NomNomzBot.Infrastructure/Content/Widgets/Assets/music_player.vue implements browser playback, separately from the account connection.

### integrations/obs

The article distinguishes remote control from an overlay output source, explains host/container prerequisites, and uses a recognizable scene change to verify the intended OBS instance. Role differences, output safety, state meanings, event groups and automation paths retain their lookup detail.

- server/src/NomNomzBot.Domain/Obs/Entities/ObsConnectionDefaults.cs:20-38 defines direct/127.0.0.1/4455/off and event masks; server/src/NomNomzBot.Infrastructure/Obs/Transport/ObsDirectConnectionKeeper.cs:24-105 implements 2..60-second retries.
- server/src/NomNomzBot.Infrastructure/Obs/Transport/DirectObsTransport.cs:31-100 implements the authenticated WebSocket v5 control channel; Content/Identity/ActionDefinitionSeeder.cs:373-380 separates connection, scene and output roles.
- External OBS 28+ WebSocket availability and setup were verified against https://obsproject.com/kb/remote-control-guide on 2026-11-05.

### integrations/stream-deck-and-api-devices

The plugin-install/browser-pairing journey makes this practical for noncoding Stream Deck users. Manual keys are a separate path with a concrete one-pipeline example. Allowed actions, expiry, single-view secrets, renewal, rotation and revocation are explained with their consequences.

- tools/streamdeck/music/bot.nomnomzbot.streamdeck.music.sdPlugin/manifest.json:10-14 and the corresponding OBS manifest declare Stream Deck6.5+, Windows/macOS. shared/src/authWindow.ts:37-94 implements browser authorization; release assets streamdeck-music-v1.0.1 and streamdeck-obs-v1.0.0 were independently confirmed with gh release view.
- server/src/NomNomzBot.Infrastructure/AutomationApi/AutomationPairingService.cs:37-54,130-240 defines single-use 5/10-minute code flows, 30-day device keys and rate limits; AutomationApiTokenService.cs:31-34,129-206,281-291 hashes secrets, rotates/revokes and refreshes tokens.
- server/src/NomNomzBot.Infrastructure/Content/Identity/ActionDefinitionSeeder.cs:367-368 separates Editor read from Broadcaster management.

### integrations/vtube-studio

The guide teaches the avatar-interaction purpose, external API prerequisite and a recognizable hotkey test before automation. Direct versus bridge dependencies and approval differ clearly; model/expression actions and advanced request fields remain findable.

- server/src/NomNomzBot.Infrastructure/Vts/Transport/VtsPluginAuthorizer.cs:32,56-115 permits authorization only for enabled direct mode and waits60 seconds; VtsConnectionService.cs:44-90 saves the endpoint/mask.
- server/src/NomNomzBot.Infrastructure/Vts/Transport/BridgeVtsTransport.cs:25-80 sends via the OBS bridge and reports offline/timeout honestly; Content/Identity/ActionDefinitionSeeder.cs:384-386 separates control and connection roles.
- External plugin/API setup was verified through the official wiki source https://raw.githubusercontent.com/wiki/DenchiSoft/VTubeStudio/Plugins.md on 2026-11-05; no VTube Studio instance was connected.

### integrations/webhooks-and-event-feeds

The guide teaches inbound, outbound and feed relationships before configuration, gives a useful heart-rate field-map example and keeps provider signing/sender code in optional detail. Exact retry, rotation, host, field-failure and duplicate behavior remain available; the reviewed single-brace repair makes the example pasteable.

- server/src/NomNomzBot.Infrastructure/Webhooks/OutboundWebhookSigner.cs:24-44 signs id.timestamp.body with HMAC-SHA256/base64; OutboundWebhookBackoffPolicy.cs:21-36 gives15..30-second initial retry and30..60-minute cap; OutboundWebhookDispatcher.cs:314-377 sets JSON/plain content type and disables after20 failures.
- server/src/NomNomzBot.Infrastructure/Webhooks/InboundWebhookEndpointService.cs:90-125,170-183 validates bindings and rotates the token; CustomEvents/CustomDataSourceService.cs:31-32,674-737 validates approved egress and50-feed/10-second limits.
- server/src/NomNomzBot.Infrastructure/CustomEvents/EventHandlers/CustomDataVariables.cs:20-28 seeds custom.source.field; Platform/Templating/Helpers/Legacy/LegacyTemplateHelpers.cs:283-330 and Parsing/TemplateParser.cs:137-169 require single-brace helper syntax. The repaired worked example now uses {custom.heartrate.bpm} and the expected72.

### integrations/supporter-sources

Readers begin with their existing supporter service, then follow the correct secret/account/webhook path. The DonorDrive address distinction prevents a wrong credential setup. Connected is explicitly separated from event delivery, and pause/removal/dedup behavior preserves operational detail.

- server/src/NomNomzBot.Infrastructure/Supporters/SupporterConnectionService.cs:82-180 validates source transport, provisions provider webhooks and preserves/seals secrets; SupporterPollHostedService.cs:123-151 interprets DonorDrive secret as a public HTTPS feed URL.
- server/src/NomNomzBot.Infrastructure/Supporters/Adapters/DonordriveSupporterSource.cs:31-75 normalizes donation IDs/amounts without inventing currency; SupporterIngestService.cs:55-150 ignores paused/unconfigured sources and deduplicates provider transactions.
- dashboard/src/views/dashboard/supporters/SupporterSourcesView.vue:94-114 derives Connected from saved/enabled state, independently of actual event arrival.

### audio/read-aloud-api

The opening explicitly identifies the developer audience and distinguishes visitor-browser audio from stream TTS. Request/error/cleanup behavior, caching/origins, voice choice and operational limits remain complete. Navigation places it after Code and SDK pages, preserving its route while removing it from the ordinary audio learning path.

- server/src/NomNomzBot.Api/Controllers/ReadAloudController.cs:31-101 implements anonymous POST/GET, MP3, locale validation, GET cache headers and no-store controller refusals; Controllers/ReadAloudOriginGate.cs:28-38 enforces exact allowed Origin.
- server/src/NomNomzBot.Infrastructure/Tts/ReadAloudService.cs:30-104 implements trimmed1..500 text, two synthesis slots,30-second wait and locale/catalog/default voice selection; Tts/TtsService.cs:56-110,131-174 shares bounded200-entry memory caching.
- server/src/NomNomzBot.Api/RateLimiting/ReadAloudRateLimitPolicy.cs:25-40 implements40/minute/IP. Existing compose/public-address origin configuration was checked with the self-hosting sources; the JavaScript example is source-reviewed only.

## Learning and lookup pass

The sequence teaches output dependencies before feature controls: create a response, connect its correct OBS source, trigger it and check the preview/mixer. Supplied required overlays come before optional custom code. TTS caption, Bot Audio, Music Player and Media share are distinct paths, rather than one vague audio-overlay prerequisite. Spotify account control, embedded streaming permission and the selected playback device are also kept distinct.

Experienced users retain reference tables for timers, reactions, source roles, request caps and bypasses, playback buttons, reward limits, voice rules, file validation, reconnect behavior, signatures, retries, code expiry and revocation. Practical examples explain consequences: shared/personal command pacing, fair song ordering, current-price media refunds, passive clip charges, replay/test actions and approval-held speech. Related links connect setup to everyday operations without requiring scripting.

## Verification and remaining limits

- Whole articles read and current hashes recorded: **21/21**.
- Separate current evidence files: **42/42**, all PASS.
- Hash consistency against actual article bytes: **21/21**, no stale fact/reader headers.
- Read-aloud JavaScript example: parsed from the actual article with Acorn, **1/1 passed**. Browser playback and network delivery were not executed.
- MDX brace validation: passed.
- Official external sources were independently checked on 2026-11-05: Spotify quota modes/redirect URIs/Web Playback SDK, OBS Browser Source/Remote Control Guide, and the VTube Studio plugin wiki source. The GitHub wiki HTML timed out; its official raw wiki source was readable.
- Stream Deck release assets were independently verified using gh release view: streamdeck-music-v1.0.1 and streamdeck-obs-v1.0.0 each have an uploaded .streamDeckPlugin. Nothing was installed or paired.
- Substantive unresolved documentation findings in these21 articles: **0** at the recorded hashes.
- Existing product limitations remain accurately documented: required-source settings are inaccessible through the custom editor; normal Spotify reconnect does not request embedded streaming; TTS has no dashboard approval review UI and its Read usernames/Skip bot messages preferences are stored but not read by the dispatcher; some Test/replay wording in the application understates real effects. No product fixes are claimed.
- The lead owns combined build/rendered output, complete routes/links/frontmatter/assets/navigation validation and any later article edits. A later byte change requires updating its review hash.
