# Claims: /reference/commands/pipelines

Paths are in the product repo (C:\Projects\NoMercyLabs\nomnomzbot). PV = dashboard/src/views/dashboard/pipelines; EN = PV/i18n/en.json; SEN = dashboard/src/i18n/schema/en.json.

## Counts

- Blocks in **Steps to add**: 6 of 6 addable block kinds (PV/components/newSteps.ts:20-27 ADDABLE_BLOCKS; switch_case and random_case only come with their parent).
- Steps in **Steps to add**: 113 of 113 registered ICommandAction classes. The palette renders every catalog action (PV/components/StepPalette.vue:58-63, PV/components/stepGroups.ts:33-58; WorkbenchView.vue:524). The catalog is every registered ICommandAction (server/src/NomNomzBot.Api/Controllers/V1/PipelinesController.cs:138-172). Registration: every implementation in Infrastructure except CapturingCommandAction (server/src/NomNomzBot.Infrastructure/DependencyInjection.cs:267-271). Counted by scanning `ActionType => "..."` in server/src/NomNomzBot.Infrastructure: 112 literals plus show_raid_recap via constant (Widgets/PipelineActions/ShowRaidRecapAction.cs:28-30); CapturingCommandAction excluded.
- Areas: 24 of 24 category keys used by those 113 actions (SEN pipeline.category.*).
- Title rule: pipelineBlock.<type> from SEN:3355, else humanize(type) (PV/components/stepWords.ts:38-44; dashboard/src/lib/text.ts:14-22). Description: SEN pipeline.<type>.description, as in the action's Description key.
- Order: groups by heading, rows by title (PV/components/stepGroups.ts:54-57).

## Claims

| Claim | Source |
| --- | --- |
| Sidebar label Pipelines | dashboard/src/i18n/locales/en.json:823; dashboard/src/layouts/dashboard/navigation.ts:210-215 |
| Starts from command, chat trigger, timer, event response | PV/components/stepWords.ts:142-155; EN workbench.starts |
| Read: Moderator floor, VIP grantable; write: Moderator | server/src/NomNomzBot.Infrastructure/Content/Identity/ActionDefinitionSeeder.cs:183-184 (same shape as commands on the pilot page) |
| "Your role cannot change pipelines." | EN noWrite; PV/components/StepInspector.vue ReadOnlyScope |
| List sorted by name, search by name and description | PV/PipelinesView.vue rows computed |
| Row detail: description or "Ran N times, last ..." | PV/PipelinesView.vue detailOf; EN list.runs, list.ranLast |
| Ready-made, Off marks | PV/PipelinesView.vue (hasPlatformDefault, isEnabled); EN list.readyMade, list.off |
| Empty list text, Make the first pipeline | EN list.empty, list.makeFirst; PipelinesView.vue |
| New pipeline dialog texts, Make pipeline, opens editor | EN newDialog; PV/components/NewPipelineDialog.vue submit (emit created -> open) |
| Refusal keeps dialog open with reason | NewPipelineDialog.vue catch sets error |
| Empty editor "This pipeline has no steps yet." | EN workbench.empty; WorkbenchView.vue |
| Runs a pipeline from command | pilot page /reference/commands/create-a-command |
| Three parts, narrow window drawers | WorkbenchView.vue SidePanel palette/inspector, useScreenFrom |
| Start line, "Nothing starts...", end line | EN workbench.starts, workbench.end; WorkbenchView.vue starts |
| Add at end opens palette with focus; step opens in details | WorkbenchView.vue openPalette, added() |
| Add to lane, "Adds to {lane} of step {number}", X adds at end | EN palette.target, palette.release; StepPalette.vue target button |
| Settings / In plain words tabs and content | PV/components/StepInspector.vue tabs; EN inspector.* |
| "Not set up yet:" on card | EN notSetUp; PV/components/StepCard.vue missingFields |
| Templated help, Use earlier text, Later steps can use it | EN inspector.templated, inspector.earlier.button, inspector.declares; StepInspector.vue |
| Picker fields, Edit script | EN picker.*; PV/components/StepPicker.vue |
| Keep going / Stop here switches, defaults false | StepInspector.vue keepGoing/stopOnMatch; newSteps.ts:41-42 |
| Stop-on-match disabled without condition, text | StepInspector.vue:105-121; EN inspector.stopOnMatchNeedsCondition |
| Only run if / Always runs. | StepInspector.vue condition; EN inspector.condition, inspector.always |
| No editor field sets a check; new steps have none | PV: `condition` only read (StepCard.vue:61-63, StepInspector.vue:140-144); newSteps.ts:40 `condition: null`; grep of dashboard/src finds no other writer |
| Duplicate, Remove with "Step removed." + Undo, Undo/Redo | WorkbenchView.vue duplicate/remove/toast; EN inspector.duplicate/remove, removed, undo, redo |
| Save -> "Pipeline saved.", Save disabled when not dirty; failure shows reason | WorkbenchView.vue save(); EN saved, saveFailed |
| Leave without saving dialog | WorkbenchView.vue onBeforeRouteLeave; EN leave.* |
| Keys A, /, Ctrl+Z (+Shift redo), Ctrl+Y, Ctrl+S in fields; Cmd works | WorkbenchView.vue useShortcut calls; StepPalette.vue shortcut '/'; dashboard/src/composables/useShortcut.ts:41 |
| Blocks under "Checks and groups" | EN palette.blocks; StepPalette.vue |
| If: Yes/No; check true -> Yes; no check -> Yes | PV/components/stepTree.ts:44; server/src/NomNomzBot.Infrastructure/Platform/Pipeline/PipelineEngine.cs:1447-1466, :1687 (empty conditions = true) |
| Try lanes It works / It fails; loop Each time; detached On its own | EN lane.*; stepTree.ts lanesOf |
| Empty lane text | EN lane.empty |
| Switch case settings and defaults (match '', eq, false); 7 compare choices (eq, ne, gt, lt, gte, lte, contains) | newSteps.ts:58-71; stepFields.ts:62 CASE_OPERATORS, :223-237; PipelineEngine.cs:1856-1881 MatchesCase; EN blockField.*, operator.* |
| Random: two paths, weight 1 | newSteps.ts:74-84; EN blockField.weight |
| Repeat modes, Times default 1, list help, limits | newSteps.ts:89-91; stepFields.ts:195-215; EN blockField.mode/count/list_var/max_iterations/max_loop_runtime_seconds |
| While runs while check holds; no check -> runs until a limit | PipelineEngine.cs:1952, :1687 |
| A round or seconds limit stops the whole run; empty rounds = 1000, number only lower | PipelineEngine.cs:1958-1972 (AbortedBudget), :1191-1193 (run outcome), :49 MaxLoopIterations = 1000, :1913 Math.Clamp |
| Runs panel: failed shows Failed; other outcomes show the stored word | RunsPanel.vue:37-42 TONES (success, failed, timeout, denied), :70-75 statusText falls back to run.status; EN runs.status; PipelineEngine.cs:2392-2400 ToStatus (completed, stopped, failed, partially_failed, timed_out, cancelled, suspended) |
| Step table rows (113) | See scratch generator output; each row type, category, description key in the action file listed below |
| Require tier fails below the chosen tier | server/src/NomNomzBot.Infrastructure/Billing/PipelineActions/RequireTierAction.cs:58-79 |
| Bot voice by default; Send message can post as the broadcaster from the streamer's account | server/src/NomNomzBot.Infrastructure/Chat/PipelineActions/SendMessageAction.cs:44-47 (sender bot/broadcaster), :62-63, :85-92; SEN pipeline.send_message.sender.help (Bot default) |
| Run on its own: first plain step only, not awaited, failure never fails the run | PipelineEngine.cs:2262-2285 ExecuteDetachedStep |
| Stop-here stays off on an added step (no check can be set) | StepInspector.vue:103-121 hasCondition; newSteps.ts:40 |
| Test run runs the current draft | WorkbenchView.vue testRun (graph: draft.steps); PipelineTestRunService.cs request.Graph branch |
| Marks Done/Failed/Did not run; summary text | EN run.done/failed/skipped/summary; PV/components/stepRun.ts |
| Clear test run toggle; disabled with 0 steps; marks clear on change | WorkbenchView.vue toggleRun, :disabled, watch(draft.steps) |
| Captured steps report success; 4 passthrough steps; conditions real | server/src/NomNomzBot.Infrastructure/Platform/Pipeline/PipelineTestRunService.cs:30-58, 118-125 |
| Input popover only after a run, help text, map field, twice text | WorkbenchView.vue summary slot; PV/components/TestRunInput.vue; EN run.inputHelp, map.add, map.twice |
| Run again increments count | WorkbenchView.vue testRun runCount |
| Runs panel description, run row content, Test run badge | PV/components/RunsPanel.vue; EN runs.*; PipelineEngine.cs:2381-2386 (test_run kind stored) |
| What each step did: number, name, duration, Done/Failed | PV/components/RunSteps.vue |
| Show older runs, empty text | RunsPanel.vue footer; EN runs.older, runs.empty |
| Retention 3 days / 30 days, 500 newest per channel | PipelineEngine.cs:58-60, 2423-2453 |
| Enabled switch saves at once, toast texts | PV/components/PipelinePowerSwitch.vue; EN power.* |
| Delete dialog, consequence lines, toast, back to list | PV/components/PipelineDeleteButton.vue; EN delete.*; WorkbenchView.vue leaveDeleted |

## Step rows (area: title (type) | description | file:line)

| Step | What it does | Source |
| --- | --- | --- |
| Billing: Require tier (require_tier) | Require a minimum billing tier before continuing. | server/src/NomNomzBot.Infrastructure/Billing/PipelineActions/RequireTierAction.cs:36 |
| Chat: Announce (announce) | Post a highlighted chat announcement. | server/src/NomNomzBot.Infrastructure/Chat/PipelineActions/AnnounceAction.cs:51 |
| Chat: Send message (send_message) | Send a message to chat. | server/src/NomNomzBot.Infrastructure/Chat/PipelineActions/SendMessageAction.cs:27 |
| Chat: Send reply (send_reply) | Reply to the triggering chat message. | server/src/NomNomzBot.Infrastructure/Chat/PipelineActions/SendReplyAction.cs:25 |
| Code: Run script (run_code) | Run a custom sandboxed script. | server/src/NomNomzBot.Infrastructure/CustomCode/PipelineActions/RunCodeAction.cs:29 |
| Counters: Adjust counter (adjust_counter) | Increase or decrease a named counter by an amount. | server/src/NomNomzBot.Infrastructure/Commands/PipelineActions/CounterActions.cs:83 |
| Counters: Set counter (set_counter) | Set a named counter to a fixed value. | server/src/NomNomzBot.Infrastructure/Commands/PipelineActions/CounterActions.cs:27 |
| Discord: Discord notification (send_discord_notification) | Post a notification to a configured Discord channel. | server/src/NomNomzBot.Infrastructure/Discord/PipelineActions/SendDiscordNotificationAction.cs:32 |
| Economy: Check balance (check_balance) | Check a viewer's currency balance against a minimum. | server/src/NomNomzBot.Infrastructure/Economy/PipelineActions/CheckBalanceAction.cs:27 |
| Economy: Contribute to jar (jar_contribute) | Contribute currency to a savings jar. | server/src/NomNomzBot.Infrastructure/Economy/PipelineActions/JarContributeAction.cs:28 |
| Economy: Deduct currency (deduct_currency) | Deduct currency from a viewer's balance. | server/src/NomNomzBot.Infrastructure/Economy/PipelineActions/DeductCurrencyAction.cs:29 |
| Economy: Grant currency (grant_currency) | Grant currency to a viewer's balance. | server/src/NomNomzBot.Infrastructure/Economy/PipelineActions/GrantCurrencyAction.cs:28 |
| Economy: Play game (play_game) | Play a configured currency game. | server/src/NomNomzBot.Infrastructure/Economy/PipelineActions/PlayGameAction.cs:29 |
| Flow: Break (break) | Break out of the enclosing loop. | server/src/NomNomzBot.Infrastructure/Platform/Pipeline/CoreActions/BreakAction.cs:22 |
| Flow: Continue (continue) | Skip to the next iteration of the enclosing loop. | server/src/NomNomzBot.Infrastructure/Platform/Pipeline/CoreActions/ContinueAction.cs:23 |
| Flow: Return value (return_value) | Return a value from a sub-pipeline. | server/src/NomNomzBot.Infrastructure/Platform/Pipeline/CoreActions/ReturnValueAction.cs:25 |
| Flow: Run pipeline (run_pipeline) | Run another saved pipeline as a sub-pipeline. | server/src/NomNomzBot.Infrastructure/Platform/Pipeline/CoreActions/RunPipelineAction.cs:56 |
| Flow: Schedule pipeline (schedule_pipeline) | Schedule a saved pipeline to run once after a delay. | server/src/NomNomzBot.Infrastructure/Commands/PipelineActions/SchedulePipelineAction.cs:39 |
| Flow: Set variable (set_variable) | Set a pipeline variable. | server/src/NomNomzBot.Infrastructure/Platform/Pipeline/CoreActions/SetVariableAction.cs:19 |
| Flow: Stop (stop) | Stop the pipeline immediately. | server/src/NomNomzBot.Infrastructure/Platform/Pipeline/CoreActions/StopAction.cs:19 |
| Flow: Wait (wait) | Pause the pipeline for a duration. | server/src/NomNomzBot.Infrastructure/Platform/Pipeline/CoreActions/WaitAction.cs:29 |
| Flow: Wait for event (wait_for_event) | Pause the pipeline until a named event happens, or a timeout is reached. | server/src/NomNomzBot.Infrastructure/Platform/Pipeline/CoreActions/WaitForEventAction.cs:52 |
| Games: Cancel live game (cancel_live_game) | Cancel the currently running live game. | server/src/NomNomzBot.Infrastructure/Games/PipelineActions/LiveGamePipelineActions.cs:73 |
| Games: Start live game (start_live_game) | Start a live interactive game for viewers. | server/src/NomNomzBot.Infrastructure/Games/PipelineActions/LiveGamePipelineActions.cs:28 |
| Giveaways: Draw giveaway (draw_giveaway) | Draw a winner from an open giveaway. | server/src/NomNomzBot.Infrastructure/Giveaways/PipelineActions/GiveawayActions.cs:72 |
| Giveaways: Enter giveaway (enter_giveaway) | Enter the triggering viewer into a giveaway. | server/src/NomNomzBot.Infrastructure/Giveaways/PipelineActions/GiveawayActions.cs:123 |
| Giveaways: Open giveaway (open_giveaway) | Open a giveaway for entries. | server/src/NomNomzBot.Infrastructure/Giveaways/PipelineActions/GiveawayActions.cs:31 |
| Identity: Permit (permit) | Grant a viewer a temporary permit. | server/src/NomNomzBot.Infrastructure/Identity/PipelineActions/PermitAction.cs:37 |
| Identity: Set pronoun (set_pronoun) | Set a viewer's pronouns. | server/src/NomNomzBot.Infrastructure/Identity/PipelineActions/SetPronounAction.cs:49 |
| Identity: Unpermit (unpermit) | Revoke a viewer's active permit. | server/src/NomNomzBot.Infrastructure/Identity/PipelineActions/UnpermitAction.cs:33 |
| Media: Media playback (media_playback) | Control the media-share player. | server/src/NomNomzBot.Infrastructure/MediaShare/PipelineActions/MediaPlaybackAction.cs:32 |
| Media: Submit media (submit_media) | Submit a media item for the media-share queue. | server/src/NomNomzBot.Infrastructure/MediaShare/PipelineActions/SubmitMediaAction.cs:33 |
| Moderation: Ban (ban) | Ban a viewer from chat. | server/src/NomNomzBot.Infrastructure/Moderation/PipelineActions/BanAction.cs:24 |
| Moderation: Delete message (delete_message) | Delete a chat message. | server/src/NomNomzBot.Infrastructure/Moderation/PipelineActions/DeleteMessageAction.cs:22 |
| Moderation: Time out (timeout) | Time out a viewer in chat. | server/src/NomNomzBot.Infrastructure/Moderation/PipelineActions/TimeoutAction.cs:24 |
| Music: Add to playlist (playlist_add) | Add the current (or a given) track to a playlist. | server/src/NomNomzBot.Infrastructure/Music/PipelineActions/PlaylistAddAction.cs:67 |
| Music: Ban song (song_ban) | Block the currently playing track from requests and skip it. | server/src/NomNomzBot.Infrastructure/Music/PipelineActions/SongBanAction.cs:40 |
| Music: Music add to playlist (music_add_to_playlist) | Add the currently playing track to a chosen playlist. | server/src/NomNomzBot.Infrastructure/Music/PipelineActions/MusicControlActions.cs:1047 |
| Music: Music cycle repeat (music_cycle_repeat) | Cycle repeat through off, track, then playlist/album. | server/src/NomNomzBot.Infrastructure/Music/PipelineActions/MusicControlActions.cs:744 |
| Music: Music follow artist (music_follow_artist) | Follow the current track's artist. | server/src/NomNomzBot.Infrastructure/Music/PipelineActions/MusicControlActions.cs:1173 |
| Music: Music next (music_next) | Skip to the next track. | server/src/NomNomzBot.Infrastructure/Music/PipelineActions/MusicControlActions.cs:192 |
| Music: Music pause (music_pause) | Pause playback. | server/src/NomNomzBot.Infrastructure/Music/PipelineActions/MusicControlActions.cs:127 |
| Music: Music play (music_play) | Resume playback. | server/src/NomNomzBot.Infrastructure/Music/PipelineActions/MusicControlActions.cs:105 |
| Music: Music play pause (music_play_pause) | Toggle playback based on the current state. | server/src/NomNomzBot.Infrastructure/Music/PipelineActions/MusicControlActions.cs:152 |
| Music: Music previous (music_previous) | Go back to the previous track. | server/src/NomNomzBot.Infrastructure/Music/PipelineActions/MusicControlActions.cs:219 |
| Music: Music remove from playlist (music_remove_from_playlist) | Remove the currently playing track from a chosen playlist. | server/src/NomNomzBot.Infrastructure/Music/PipelineActions/MusicControlActions.cs:1108 |
| Music: Music save track (music_save_track) | Add the currently playing track to your liked songs. | server/src/NomNomzBot.Infrastructure/Music/PipelineActions/MusicControlActions.cs:844 |
| Music: Music seek (music_seek) | Jump to a specific point in the current track (seconds). | server/src/NomNomzBot.Infrastructure/Music/PipelineActions/MusicControlActions.cs:585 |
| Music: Music set repeat (music_set_repeat) | Set repeat to off, track, or playlist/album. | server/src/NomNomzBot.Infrastructure/Music/PipelineActions/MusicControlActions.cs:704 |
| Music: Music set shuffle (music_set_shuffle) | Turn shuffle on or off. | server/src/NomNomzBot.Infrastructure/Music/PipelineActions/MusicControlActions.cs:628 |
| Music: Music set volume (music_set_volume) | Set playback volume to a fixed level (0-100). | server/src/NomNomzBot.Infrastructure/Music/PipelineActions/MusicControlActions.cs:330 |
| Music: Music toggle saved (music_toggle_saved) | Toggle the currently playing track's liked status. | server/src/NomNomzBot.Infrastructure/Music/PipelineActions/MusicControlActions.cs:970 |
| Music: Music toggle shuffle (music_toggle_shuffle) | Switch shuffle on/off based on the current state. | server/src/NomNomzBot.Infrastructure/Music/PipelineActions/MusicControlActions.cs:669 |
| Music: Music transfer device (music_transfer_device) | Move playback to a chosen device. | server/src/NomNomzBot.Infrastructure/Music/PipelineActions/MusicControlActions.cs:787 |
| Music: Music unfollow artist (music_unfollow_artist) | Unfollow the current track's artist. | server/src/NomNomzBot.Infrastructure/Music/PipelineActions/MusicControlActions.cs:1215 |
| Music: Music unsave track (music_unsave_track) | Remove the currently playing track from your liked songs. | server/src/NomNomzBot.Infrastructure/Music/PipelineActions/MusicControlActions.cs:915 |
| Music: Music volume down (music_volume_down) | Lower playback volume by a step (default 10). | server/src/NomNomzBot.Infrastructure/Music/PipelineActions/MusicControlActions.cs:451 |
| Music: Music volume mute (music_volume_mute) | Mute playback, remembering the volume to restore. | server/src/NomNomzBot.Infrastructure/Music/PipelineActions/MusicControlActions.cs:509 |
| Music: Music volume up (music_volume_up) | Raise playback volume by a step (default 10). | server/src/NomNomzBot.Infrastructure/Music/PipelineActions/MusicControlActions.cs:402 |
| Music: Now playing (song_current) | Show the currently playing track. | server/src/NomNomzBot.Infrastructure/Music/PipelineActions/SongCurrentAction.cs:32 |
| Music: Pause song (song_pause) | Pause music playback. | server/src/NomNomzBot.Infrastructure/Music/PipelineActions/SongPauseAction.cs:34 |
| Music: Play track once (play_track_once) | Play one track right now, then resume whatever was already playing. | server/src/NomNomzBot.Infrastructure/Music/PipelineActions/MusicControlActions.cs:257 |
| Music: Previous song (song_previous) | Jump back to the previous track. | server/src/NomNomzBot.Infrastructure/Music/PipelineActions/SongPreviousAction.cs:31 |
| Music: Request song (song_request) | Request a song to be queued. | server/src/NomNomzBot.Infrastructure/Music/PipelineActions/SongRequestAction.cs:44 |
| Music: Resume song (song_resume) | Resume music playback. | server/src/NomNomzBot.Infrastructure/Music/PipelineActions/SongResumeAction.cs:34 |
| Music: Set song volume (song_volume) | Show or change the music volume. | server/src/NomNomzBot.Infrastructure/Music/PipelineActions/SongVolumeAction.cs:36 |
| Music: Skip song (song_skip) | Skip the currently playing track. | server/src/NomNomzBot.Infrastructure/Music/PipelineActions/SongSkipAction.cs:33 |
| Music: Song queue (song_queue) | Show the current song request queue. | server/src/NomNomzBot.Infrastructure/Music/PipelineActions/SongQueueAction.cs:35 |
| Music: Song request favorite (song_request_favorite) | Queue a viewer's most-requested song. | server/src/NomNomzBot.Infrastructure/Music/PipelineActions/SongRequestFavoriteAction.cs:80 |
| Music: Wrong song (remove own) (song_wrong) | Remove the requester's most recent queued song. | server/src/NomNomzBot.Infrastructure/Music/PipelineActions/SongWrongAction.cs:74 |
| OBS: Obs call vendor (obs_call_vendor) | Call a vendor-specific OBS plugin request. | server/src/NomNomzBot.Infrastructure/Obs/PipelineActions/ObsOutputAndRawActions.cs:327 |
| OBS: Obs filter (obs_filter) | Enable or disable an OBS source filter. | server/src/NomNomzBot.Infrastructure/Obs/PipelineActions/ObsSceneActions.cs:136 |
| OBS: Obs hotkey (obs_hotkey) | Trigger an OBS hotkey by name. | server/src/NomNomzBot.Infrastructure/Obs/PipelineActions/ObsAudioMediaActions.cs:169 |
| OBS: Obs input mute (obs_input_mute) | Mute, unmute, or toggle an OBS audio input. | server/src/NomNomzBot.Infrastructure/Obs/PipelineActions/ObsAudioMediaActions.cs:24 |
| OBS: Obs input volume (obs_input_volume) | Set an OBS audio input's volume. | server/src/NomNomzBot.Infrastructure/Obs/PipelineActions/ObsAudioMediaActions.cs:72 |
| OBS: Obs media (obs_media) | Control playback of an OBS media source. | server/src/NomNomzBot.Infrastructure/Obs/PipelineActions/ObsAudioMediaActions.cs:121 |
| OBS: Obs recording (obs_recording) | Start, stop, pause, or resume OBS recording. | server/src/NomNomzBot.Infrastructure/Obs/PipelineActions/ObsOutputAndRawActions.cs:26 |
| OBS: Obs refresh browser (obs_refresh_browser) | Refresh an OBS browser source. | server/src/NomNomzBot.Infrastructure/Obs/PipelineActions/ObsAudioMediaActions.cs:200 |
| OBS: Obs replay buffer (obs_replay_buffer) | Start or stop the OBS replay buffer. | server/src/NomNomzBot.Infrastructure/Obs/PipelineActions/ObsOutputAndRawActions.cs:99 |
| OBS: Obs request (obs_request) | Send a raw OBS WebSocket request. | server/src/NomNomzBot.Infrastructure/Obs/PipelineActions/ObsOutputAndRawActions.cs:167 |
| OBS: Obs request batch (obs_request_batch) | Send a batch of raw OBS WebSocket requests. | server/src/NomNomzBot.Infrastructure/Obs/PipelineActions/ObsOutputAndRawActions.cs:235 |
| OBS: Obs save replay (obs_save_replay) | Save the current OBS replay buffer. | server/src/NomNomzBot.Infrastructure/Obs/PipelineActions/ObsAudioMediaActions.cs:274 |
| OBS: Obs screenshot (obs_screenshot) | Take a screenshot of an OBS source. | server/src/NomNomzBot.Infrastructure/Obs/PipelineActions/ObsAudioMediaActions.cs:231 |
| OBS: Obs set preview scene (obs_set_preview_scene) | Set the OBS studio-mode preview scene. | server/src/NomNomzBot.Infrastructure/Obs/PipelineActions/ObsSceneActions.cs:54 |
| OBS: Obs set source (obs_set_source) | Show or hide a source within an OBS scene. | server/src/NomNomzBot.Infrastructure/Obs/PipelineActions/ObsSceneActions.cs:85 |
| OBS: Obs streaming (obs_streaming) | Start or stop OBS streaming. | server/src/NomNomzBot.Infrastructure/Obs/PipelineActions/ObsOutputAndRawActions.cs:65 |
| OBS: Obs switch scene (obs_switch_scene) | Switch the active OBS scene. | server/src/NomNomzBot.Infrastructure/Obs/PipelineActions/ObsSceneActions.cs:23 |
| OBS: Obs transition (obs_transition) | Trigger an OBS scene transition. | server/src/NomNomzBot.Infrastructure/Obs/PipelineActions/ObsSceneActions.cs:187 |
| OBS: Obs virtual cam (obs_virtual_cam) | Start or stop the OBS virtual camera. | server/src/NomNomzBot.Infrastructure/Obs/PipelineActions/ObsOutputAndRawActions.cs:133 |
| Pick Lists: Pick from list (pick_from_list) | Pick a random entry from a saved list. | server/src/NomNomzBot.Infrastructure/PickLists/PipelineActions/PickFromListAction.cs:42 |
| Quotes: Post quote (post_quote) | Post a saved quote to chat. | server/src/NomNomzBot.Infrastructure/Quotes/PipelineActions/PostQuoteAction.cs:33 |
| Rewards: Redemption fulfill (redemption_fulfill) | Mark the triggering redemption fulfilled on Twitch. | server/src/NomNomzBot.Infrastructure/Rewards/PipelineActions/RedemptionFulfillAction.cs:33 |
| Rewards: Redemption refund (redemption_refund) | Refund the triggering redemption (points returned). | server/src/NomNomzBot.Infrastructure/Rewards/PipelineActions/RedemptionRefundAction.cs:33 |
| Sound: Play sound (play_sound) | Play a sound clip. | server/src/NomNomzBot.Infrastructure/Sound/PipelineActions/PlaySoundAction.cs:32 |
| Sound: Stop sound (stop_sound) | Stop currently playing sound clips. | server/src/NomNomzBot.Infrastructure/Sound/PipelineActions/StopSoundAction.cs:26 |
| Stream: Shoutout (shoutout) | Give another channel a shoutout. | server/src/NomNomzBot.Infrastructure/Stream/PipelineActions/ShoutoutAction.cs:89 |
| Stream: Start raid (start_raid) | Start a raid to another channel. | server/src/NomNomzBot.Infrastructure/Stream/PipelineActions/StartRaidAction.cs:81 |
| Stream: Wait until raid fires (wait_until_raid_fires) | Wait for whatever time remains until a prior Start raid step actually fires, correcting for any delay from the steps in between. | server/src/NomNomzBot.Infrastructure/Stream/PipelineActions/WaitUntilRaidFiresAction.cs:39 |
| Text-to-Speech: Read aloud (TTS) (play_tts) | Speak text through text-to-speech. | server/src/NomNomzBot.Infrastructure/Tts/PipelineActions/PlayTtsAction.cs:41 |
| Text-to-Speech: Tts synthesize (tts_synthesize) | Synthesize text-to-speech audio without playing it. | server/src/NomNomzBot.Infrastructure/Tts/PipelineActions/TtsSynthesizeAction.cs:45 |
| Viewer Data: Adjust viewer data (adjust_viewer_data) | Increase or decrease a stored numeric value on a viewer's profile. | server/src/NomNomzBot.Infrastructure/ViewerData/PipelineActions/ViewerDataActions.cs:123 |
| Viewer Data: Clear viewer data (clear_viewer_data) | Clear a stored value for every viewer in the channel. | server/src/NomNomzBot.Infrastructure/ViewerData/PipelineActions/ViewerDataActions.cs:205 |
| Viewer Data: Set viewer data (set_viewer_data) | Set a stored value on a viewer's profile. | server/src/NomNomzBot.Infrastructure/ViewerData/PipelineActions/ViewerDataActions.cs:40 |
| VTube Studio: Vts color tint (vts_color_tint) | Apply a color tint to the VTube Studio model. | server/src/NomNomzBot.Infrastructure/Vts/PipelineActions/VtsActions.cs:274 |
| VTube Studio: Vts load model (vts_load_model) | Load a VTube Studio model. | server/src/NomNomzBot.Infrastructure/Vts/PipelineActions/VtsActions.cs:107 |
| VTube Studio: Vts move model (vts_move_model) | Move, rotate, or resize the VTube Studio model. | server/src/NomNomzBot.Infrastructure/Vts/PipelineActions/VtsActions.cs:211 |
| VTube Studio: Vts request (vts_request) | Send a raw VTube Studio API request. | server/src/NomNomzBot.Infrastructure/Vts/PipelineActions/VtsActions.cs:332 |
| VTube Studio: Vts set expression (vts_set_expression) | Activate or deactivate a VTube Studio expression. | server/src/NomNomzBot.Infrastructure/Vts/PipelineActions/VtsActions.cs:169 |
| VTube Studio: Vts trigger hotkey (vts_trigger_hotkey) | Trigger a VTube Studio hotkey. | server/src/NomNomzBot.Infrastructure/Vts/PipelineActions/VtsActions.cs:138 |
| Webhooks: Send webhook (send_webhook) | Send an outbound webhook request. | server/src/NomNomzBot.Infrastructure/Webhooks/PipelineActions/SendWebhookAction.cs:35 |
| Widgets: Show raid recap (show_raid_recap) | Show the stream recap on the raid recap widget. | server/src/NomNomzBot.Infrastructure/Widgets/PipelineActions/ShowRaidRecapAction.cs:30 |
| Widgets: Stage effect (stage_effect) | Play a one-off effect on the Stage overlay: run across the screen, confetti, shake or flash. | server/src/NomNomzBot.Infrastructure/Stage/StageEffectAction.cs:43 |
| Widgets: Widget event (widget_event) | Push an event to a widget overlay. | server/src/NomNomzBot.Infrastructure/Widgets/PipelineActions/WidgetEventAction.cs:36 |

Descriptions: dashboard/src/i18n/schema/en.json pipeline.<type>.description. Titles: dashboard/src/i18n/schema/en.json:3355 pipelineBlock, else humanize(type).
