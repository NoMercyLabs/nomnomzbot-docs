# Workflow pilot author evidence

Date: 2026-11-09. Scope: three rewritten MDX files under `new/` and their factual-correction-only counterparts under `comparison-original/`. This is author grounding and a change record, not a reader review, fact-review verdict or acceptance result.

## Files

- `automation/timers-and-chat-triggers.mdx`
- `commands/built-in-commands.mdx`
- `self-hosting/first-run-setup.mdx`

Both variant directories contain these three routes. No original snapshot, live content file, card or contract was edited by this writer. The revised pages retain every original heading, including linked fragment destinations. All 43 unique built-in rows remain in both catalog variants.

## Contract and source corrections applied to both variants

### Timers and chat triggers

- Management roles are defaults and can be raised; signed-in selected channel and running/connected bot are prerequisites. VIP read access is independent per tab and does not open the editor. Evidence: `dashboard/src/views/dashboard/timers/TimersView.vue`, `components/ChatTriggersPanel.vue`, and `server/src/NomNomzBot.Infrastructure/Content/Identity/ActionDefinitionSeeder.cs:188-195`.
- A new timer is enabled with zero required chat lines. The first eligible scheduler check is due immediately, not after the configured first interval. Copies use saved settings, retain the activity threshold and start off. Evidence: `server/src/NomNomzBot.Application/Commands/Dtos/TimerDtos.cs:59-84`, `dashboard/src/views/dashboard/timers/components/TimerEditor.vue:135-172`, and `server/src/NomNomzBot.Infrastructure/Commands/Jobs/TimerService.cs:161-215`.
- Delivery success is destination-specific: chat acceptance, receiving overlay, either for Both, or intentional no output for Nowhere. Failed simple replies preserve the line and timing state. Bound command/action attempts returning failure, and missing/disabled/unexecutable or failed pipeline attempts, count a firing and wait for interval/activity. Post once therefore does not promise a successful action or visible reply. An exception before the reaction returns bypasses the state write. Evidence: `TimerService.cs:191-245,248-334,351-421` and `server/src/NomNomzBot.Application/Chat/Services/IReplyDispatcher.cs:70-87`. This correction was requested from the coordinator and fixed in the contract before incorporation.
- Overlay delivery requires its browser source. For a simple reply, timer speech needs channel TTS readiness and successful chat delivery; this overlay-only/Nowhere silence rule is not a promise about bound reactions. The editor exposes the switch for bound reactions too, and a pipeline forwards it to its own execution behavior. Evidence: `TimerService.cs:306-334,410`, `dashboard/src/views/dashboard/timers/components/TimerEditor.vue:279-283`, `server/src/NomNomzBot.Infrastructure/Platform/Pipeline/PipelineEngine.cs:1007-1020` and the shared reply-delivery controls. Both variants received the simple-reply qualification after source review.
- Matching skips a below-role candidate, but an eligible cooling match stops the search. Only incoming platform broadcaster/moderator flags bypass the channel wait; a stored role alone does not. The wait begins on eligible firing, not on proof of delivery. Evidence: `server/src/NomNomzBot.Infrastructure/Chat/EventHandlers/ChatMessageHandler.cs:1388-1430,1944-1950`.

### Built-in commands

- Catalog lookup needs no dashboard permission. Invocation and customization have distinct prerequisites, including underlying feature setup, connection, normal gates and Commands write access (Moderator default, potentially raised). Read-only users do not receive the System commands tab. Evidence: `dashboard/src/views/dashboard/commands/CommandsView.vue:54-68`, action seeder, and `server/src/NomNomzBot.Infrastructure/Chat/OfflineCommandGate.cs:18-39`.
- `!commands` lists enabled authored/built-in triggers that pass its role and availability checks; authored Regex commands are omitted and each trigger retains its prefix. Evidence: `server/src/NomNomzBot.Infrastructure/Commands/Builtins/CommandsBuiltin.cs:116-187`.
- `!quote` mutation permissions remain separate from the Everyone read path. Broadcaster-only whitelist access is explicit for readers who are viewers or moderators. Evidence: `server/src/NomNomzBot.Infrastructure/Quotes/Builtins/QuoteBuiltin.cs` and `server/src/NomNomzBot.Infrastructure/Identity/Builtins/WhitelistBuiltins.cs:47-49,152-154,248`.
- `!skip N` counts only the caller's own pending requests in queue order and leaves current playback alone. `!skip 4` means their fourth pending request. The separate shared 30-second music-moderator bare-skip window remains distinct from normal cooldown exemptions. Evidence: `server/src/NomNomzBot.Infrastructure/Commands/Builtins/MusicBuiltins.cs:35-116,227-288`.
- Normal cooldown and offline exemptions depend on incoming platform moderator/broadcaster status, not merely stored standing; data-rights commands bypass the offline gate. Feature checks still apply. Evidence: `ChatMessageHandler.cs:291-376,1944-1950` and `OfflineCommandGate.cs`.
- Whispers need Twitch whisper availability and an identifiable connected channel. Only uptime/song/queue are safe; other known built-ins are chat-only. Evidence: `server/src/NomNomzBot.Infrastructure/Chat/EventHandlers/WhisperCommandHandler.cs:40-60,108-178`.
- Resetting shared wording affects the sibling reply group while preserving the sibling's own enabled/role/cooldown/TTS settings. Evidence: `server/src/NomNomzBot.Infrastructure/Commands/BuiltinCommandService.cs:262-301`.

### First-run setup

- Minimal setup needs a running reachable installation and an explicit Twitch application decision. Existing login, separate bot account, optional service apps, TTS and a healthy event feed are not prerequisites. Evidence: `server/src/NomNomzBot.Api/Models/SetupWizardDtos.cs:81-239`, `SystemController.cs:217-234,348-366`, `dashboard/src/views/site/setup/SetupView.vue:31-50`, and `components/EventFeedHealth.vue:40-60`.
- The credential-write window closes only after explicit completion; afterward bot administrator access is required, rather than channel moderator status. Evidence: `server/src/NomNomzBot.Api/Controllers/V1/SystemController.cs:276-330,469-491`.
- Spotify credentials prepare Spotify account/music setup, not all song requests. Credentials alone do not link the user or choose a playback device. Google credentials are for the YouTube account connection, while YouTube song requests use separate public/keyless search/playback. Evidence: `SetupWizardDtos.cs:159-232` and `server/src/NomNomzBot.Infrastructure/Music/YouTubeMusicProvider.cs:139-164,348-374`.
- Twitch's verified-email and 2FA requirements for registering an own app were checked at [Register Your App](https://dev.twitch.tv/docs/authentication/register-app/) on 2026-11-09. They do not require the shared-app reader to register an application.

All product-source paths above are relative to `C:/Projects/NoMercyLabs/nomnomzbot`. Current implementation was read instead of relying on the stale internal setup-wizard reference, which describes a different onboarding flow.

## Author checks and remaining evidence boundary

A local structural check confirmed frontmatter on all six files, all 12/10/7 original headings respectively, and 43 unique catalog command rows in both built-in variants. The three immutable original snapshot SHA256 values still match the fixed contracts:

- Timers: `f38720e61cd0518f982347f591a74fb8d44b972a7e9f478e211c56be2985fe60`
- Built-ins: `02086e1b0596349c1f27d56e2097e822aec7ffbeab713e123e19718432386f74`
- Setup: `6dcb47919d325ef7652b3746b55877b9f2ab0f7c69b3516b31150c1e8df74cd8`

The exact common check remains the coordinator's isolated `python -B docs-work/reader-first-pilot/tools/pilot_site.py build`, as named by every card. It must build all five pilot routes together. No build result is claimed in this author note.

No live timer, chat command, whisper, OBS/TTS, Docker, OAuth or event-feed workflow was exercised. Source inspection establishes the documented conditions and code paths; it does not prove connected-service delivery or reader/listening usability. Independent fact/reader review and the owner's listening comparison remain separate work.
