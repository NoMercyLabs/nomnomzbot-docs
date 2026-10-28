# Claims: /reference/commands/built-in-commands

Product repo paths are relative to the product root. Page en.json = `dashboard/src/views/dashboard/commands/i18n/en.json`. Infra = `server/src/NomNomzBot.Infrastructure`. Svc = `Infra/Commands/BuiltinCommandService.cs`. Editor = `dashboard/src/views/dashboard/commands/components/BuiltinEditor.vue`. List = `.../components/BuiltinList.vue`.

| # | Claim | Evidence |
| --- | --- | --- |
| 1 | Built-ins are defined by code, same set for every channel | Application/Commands/Builtin/IBuiltinCommand.cs:18-23; Infra/Commands/BuiltinCommandCatalog.cs:16-35 |
| 2 | No delete of a built-in | Api/Controllers/V1/BuiltinsController.cs:39-228 (no delete of the command; DELETE routes clear settings/reply only) |
| 3 | Found on Commands page, System commands tab; tab only for someone who may change commands | page en.json:8-10 (tabs.builtin "System commands"); create-a-command claims #7 (CommandsView.vue:65-67) |
| 4 | List title **Built-in commands**, search **Search commands**, no-match text | List:96-104; page en.json:148, list.search, list.noMatch |
| 5 | Row text "{role} · {cooldown}s chat · {userCooldown}s each"; example Everyone · 30s chat · 0s each (uptime) | List:47-52,73-82; page en.json:187; UptimeBuiltin.cs:41-42 |
| 6 | **Using the default** / **Overrides the default (...)** hint on row, based on role or cooldown overrides | List:68-71,84-87; page en.json:176,189 |
| 7 | **Always on · ...** row and no switch | List:79-81,119; page en.json:188 |
| 8 | Data-rights row text | List:74-75; page en.json:166 |
| 9 | Switch on row and **Answers in chat** in editor, both save at once | List:119-125; Editor:313-318; page en.json:151 |
| 10 | Off command ignored like no command | Infra/Chat/EventHandlers/ChatMessageHandler.cs:1251-1257 |
| 11 | Switching off refused while something still runs it | Svc:115-124 (EnsureUnboundAsync on disable) |
| 12 | Always-on cannot be toggled | Svc:101-113 |
| 13 | 42 built-in commands (count of 42 IBuiltinCommand registrations) | Infra/DependencyInjection.cs:1293-1354 (42 AddScoped<IBuiltinCommand...> lines) |
| 14 | Per-command keys, cooldowns, per-user cooldowns, role floors (table rows) | AccountAgeBuiltin.cs:60-62; BangerBuiltin.cs:39-41; BanSongBuiltin.cs:33-39; ClearSongsBuiltin.cs:31-35; CommandsBuiltin.cs:53-55; DiscordInviteBuiltin.cs:36-38; FollowAgeBuiltin.cs:43-45; GameBuiltins.cs:68-72,218 (coinflip; dice, slots at 222-240); HelpBuiltin.cs:45-47; LeaderboardBuiltin.cs:33-35; LurkBuiltins.cs:55-56,139,153; MusicBuiltins.cs:33-40,314-317,481-487,601-604; PlaybackControlBuiltins.cs:27-32,56-60; PlaylistBuiltin.cs:35-37; QueueRequestsBuiltins.cs:31-34,91,109; SongRequestBuiltin.cs:45-48; UpdateUserInfoBuiltin.cs:58-60; UptimeBuiltin.cs:40-42; WhisperBuiltin.cs:50-55; WrongSongBuiltin.cs:29-34; Identity/Builtins/GdprBuiltins.cs:206-209,220-223,238-241; PermitBuiltins.cs:256-259,498-501; WhitelistBuiltins.cs:47-49,152-154,248 (40); MediaShare/Builtins/MediaBuiltin.cs:47-49; Moderation/Builtins/AllowBuiltin.cs:36-40, DisallowBuiltin.cs:35-39; Quotes/Builtins/QuoteBuiltin.cs:71-75; Tts/Builtins/VoiceBuiltin.cs:78-82; ViewerData/Builtins/StatsBuiltins.cs:63-64,239,255. Slot keys: Application/Commands/Builtin/Personality/BuiltinResponseSlots.*.cs (uptime, followage, quote... sr, song, queue, skip, pause, resume, closequeue, openqueue, clearsongs, leaderboard, allow, disallow, forgetme) |
| 15 | Level values to role labels: 0 Everyone, 10 Moderators, 20 Lead moderators, 40 Only you | Domain/Identity/Enums/AuthorizationLadder.cs:24-36; page en.json:103-111 (editor picker labels) |
| 16 | Always on: permit, unpermit, forgetme, mydata, gdpr | PermitBuiltins.cs:257,499; IBuiltinCommand.cs:46 (reserved => always on); GdprBuiltins.cs:209,223,241 |
| 17 | Data-rights: forgetme, mydata, gdpr | GdprBuiltins.cs:209,223,241 (IsReserved) |
| 18 | What each command does (table column) | class summaries: AccountAgeBuiltin.cs:26-33; BanSongBuiltin.cs:20-25; BangerBuiltin.cs:24-27; ClearSongsBuiltin.cs:19-24; CommandsBuiltin.cs:22-28; DiscordInviteBuiltin.cs:19-29; FollowAgeBuiltin.cs:20-25; GameBuiltins.cs:23-30,211-232; HelpBuiltin.cs:20-27; LeaderboardBuiltin.cs:20-27; LurkBuiltins.cs:24-31,128-143; MusicBuiltins.cs:20-26,304-308,471-474,597; PlaybackControlBuiltins.cs:20,49; PlaylistBuiltin.cs:20-25; QueueRequestsBuiltins.cs:19-23,84,102; SongRequestBuiltin.cs:22-27; UpdateUserInfoBuiltin.cs:26-32 and :77 (moderator check for another user); UptimeBuiltin.cs:19-22; WhisperBuiltin.cs:22-29; WrongSongBuiltin.cs:19-24; GdprBuiltins.cs:22-29,203,217,231-235; PermitBuiltins.cs:223,471; WhitelistBuiltins.cs:24-29,143; MediaBuiltin.cs:24-29; AllowBuiltin.cs:20-24; DisallowBuiltin.cs:20-23; QuoteBuiltin.cs:25-44; VoiceBuiltin.cs:30-46; StatsBuiltins.cs:26-33,242 |
| 19 | Music commands check moderator or the queue-moderate right at run time (pause, resume, volume with a number, bansong, closequeue, openqueue, clearsongs; refused ones answer permission denied: BanSongBuiltin.cs:51-52, ClearSongsBuiltin.cs:47-48, QueueRequestsBuiltins.cs:54-55, PlaybackControlBuiltins.cs:90-91, MusicBuiltins.cs:495-496). Bare !skip: moderator or right holder skips any song; a viewer skips only a song they requested (MusicBuiltins.cs:21-23,65-72,91-97) | Infra/Commands/Builtins/MusicModerationGate.cs:28-57; comments at MusicBuiltins.cs:35-40,483-487; PlaybackControlBuiltins.cs:29-32,58-60; BanSongBuiltin.cs:35-39; ClearSongsBuiltin.cs:33-35; QueueRequestsBuiltins.cs:32-34 |
| 20 | Whisper: only uptime, song, queue; reply as whisper; others get "works in chat only." | MusicBuiltins.cs:315,602; UptimeBuiltin.cs:45; Infra/Chat/EventHandlers/WhisperCommandHandler.cs:24-29,53-57 |
| 21 | Editor title is !name, description **Built-in** | Editor:303-306; page en.json:31 |
| 22 | Opens locked with customizeHelp text; **Customize** unlocks | Editor:113,117-118,321-327,513-522; page en.json:152,165 |
| 23 | Unsaved count, **Save changes**, **Discard** | Editor:137-139,253-299,523-541; page en.json:192-194 |
| 24 | After save, field shows Overrides the default (default) | Editor:156-173; page en.json:176 |
| 25 | Opens customized when saved overrides exist | Editor:104-113,148-152 |
| 26 | Reply box 500 chars; label per slot | Editor:329-337,175-177; BuiltinsController.cs:159-162 |
| 27 | Role list starts at default; cannot lower | Editor:119-120,376; Svc:227-231 |
| 28 | Cooldowns 0-3600 s | Svc:28-29,208-215; Editor:197-203 (min 0) |
| 29 | Read it aloud default Off; only !quote speaks | Editor:461-473; page en.json:172-175 (default/off); Quotes/Builtins/QuoteBuiltin.cs:140-141; ChatMessageHandler.cs:379,607 (flag passed only into builtin context; no other builtin reads SpeakWithTts, grep of Infra) |
| 30 | Reply box shows default wording until changed; default follows personality tone | Editor:100 (effectiveTemplate); Application/Commands/Dtos/BuiltinReplyDtos.cs:28-45,54-65; Infra/Commands/Builtins/BuiltinResponseComposer.cs:19-24 |
| 31 | Reply is a line in chat in the channel's one bot voice | BuiltinResponseComposer.cs:22-23 |
| 32 | **Variables:** line lists command-only slot values ({stats.points}, {stats.watchtime} for !stats); not on the variables page | Editor:338-349; page en.json:168; StatsBuiltins.cs:30; Application/Commands/Builtin/Personality/ToneTemplateCatalog.Community.cs:150-167 |
| 33 | Locked reply text | Editor:351-356; page en.json:167; BuiltinReplyDtos.cs:44 |
| 34 | lurk/unlurk and stats/profile share replies | Application/Commands/Builtin/Personality/BuiltinResponseSlots.cs:34-35 |
| 35 | **Back to default** saves at once; hint Using the default | Editor:205-218,248-251,383-395; page en.json:189-190 |
| 36 | Reset dialog title/body/action, listed items | Editor:221-234,491-499; page en.json:153-163 |
| 37 | Reset puts all back and switches on; shared group replies reset on sibling | Svc:263-300; BuiltinsController.cs:101-104 |
| 38 | Reset button only when something differs; not on data-rights | Editor:501-511 |
| 39 | Channel command with same name answers instead, except always-on | create-a-command page section "Commands that repeat a system command"; IBuiltinCommand.cs:41-46 |
| 40 | Data-rights forgetme second confirm | GdprBuiltins.cs:203 (two-step); DependencyInjection.cs comment on 60s window (ErasureConfirmationTracker) |
| 41 | Offline: viewer commands do nothing unless "Keep commands and rewards on while offline" is on; broadcaster, moderators and data-rights commands exempt | Infra/Chat/EventHandlers/ChatMessageHandler.cs:278-281; Infra/Chat/OfflineCommandGate.cs (KeepActiveWhileOffline false, IsLive false, not broadcaster/moderator); dashboard/src/views/dashboard/settings/i18n/en.json:106-108 (basics section) |
