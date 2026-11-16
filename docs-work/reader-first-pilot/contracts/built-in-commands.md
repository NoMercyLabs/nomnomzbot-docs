# Contract: Built-in commands

Status: fixed for the five-page pilot, 2026-11-09. Author/evaluator material; **exclude answer keys from blind reader packets**. No prose verdict.

Baseline: `src/content/reference/en/commands/built-in-commands.mdx`, read in full, SHA256 `02086e1b0596349c1f27d56e2097e822aec7ffbeab713e123e19718432386f74`. Source root `C:/Projects/NoMercyLabs/nomnomzbot`, HEAD `f741789bf6b8d90ae2fd07f33a307a5a11623606`. Source paths below relative; `I` = `server/src/NomNomzBot.Infrastructure`, `C` = `I/Commands/Builtins`, `D` = `dashboard/src/views/dashboard/commands`. Same facts required of both variants; length reduction alone earns no credit.

## Reader, task and prerequisites

Reader: streamer/moderator/viewer looking up a shipped command, with a manager’s customization reference afterward. Main question: “Which built-in does this, who can use it, and what defaults or safeguards matter?” Success: find the correct command and effective access/cooldowns, distinguish runtime feature gates, and customize/reset a supported field without assuming every field is editable.

Prerequisites: none beyond reading for catalog lookup. Invocation needs a connected bot, enabled/available command, correct channel prefix, sufficient effective role and clear normal gates; ordinary viewer chat commands need live/offline opt-in, except reserved data-rights commands. Feature-specific commands need their feature configured (music/economy presence does not configure it). Dashboard customization needs Commands write access, Moderator by default and potentially raised; System commands is hidden from read-only access. Whispers require bot Twitch whisper availability, `!` prefix and an identifiable connected channel.

## Required coverage, grouped by original headings

- **Opening:** behavior supplied by bot, supported replies/access/cooldowns customizable under Commands → System commands; common catalog every channel; built-ins cannot be deleted; feature setup remains separate; management access link.
- **The list:** Built-in commands, Search commands, row trigger/effective role/chat/per-person values; Using the default vs Overrides the default (role/cooldown); Always on rows lack switch; data-rights fixed settings/wording.
- **Switch a command on or off:** row and Answers in chat switches save immediately; disabled built-in ignored; binding guard refuses disable while rewards/timers/other items still run it; always-on commands cannot disable.
- **Every built-in command:** all **43** rows below, alphabetical lookup, function, default **effective** access, shared/personal cooldowns; examples use channel prefix (`!` only default), 0 means no normal wait; advanced syntax/setup feature links retained. Music-specific gate supports moderator-or-queue-moderate right; pause/resume/set-volume/bansong/closequeue/openqueue/clearsongs can display Everyone base role but still reject unqualified callers; raising base role adds a requirement and never removes feature safeguard. Bare skip: viewer only own currently playing request, moderator/right-holder any song; numeric skip removes caller’s own queued item; moderators share extra 30 s bare-skip safeguard. Data-rights guide link.
- **Ask by whisper:** only uptime/song/queue; fixed `!` even with custom chat prefix; optional first argument channel, otherwise exactly one session-chatter channel; none/multiple asks which; answer whisper only; other known built-ins “works in chat only”; daily new-recipient cap may cause channel pointer without private answer.
- **Change a built-in command:** select → locked defaults/explanation → Customize unlocks → edit → Save changes clears unsaved count/marks override; saved customization reopens unlocked; Discard restores saved. Reply per outcome ≤500 chars; role can only increase from built-in floor; normal cooldown controls 0–3600 s each; Read it aloud off default, only quote consumes this flag for its reply.
- **Write a reply:** default wording follows channel personality/one bot voice; helpers in braces resolve in output, command-specific Variables plus shared helpers link; fixed data-rights wording; lurk/unlurk and stats/profile share reply groups, edits affect both.
- **Put one field back:** changed field Back to default saves immediately and shows Using the default, without separate Save.
- **Reset a command to its default:** Reset to default confirmation lists changed settings/lost edits; restores normal cooldowns/role/replies/TTS off and enabled state on; button only with differences, absent for data-rights; shared-group replies reset on sibling too, sibling’s independent enabled/role/cooldown/TTS settings stay its own.
- **Troubleshooting:** enabled, live/offline opt-in exemptions (platform moderator/broadcaster and data rights), role, both waits, authored collision precedence except five always-on names; actual handler, not collision-banner wording, decides precedence.
- **Related pages:** preserve create, variables/templates, cooldowns/permissions, bot basics/personality, quotes and table’s feature-guide links.

### Complete required catalog

Cooldown column is shared/personal seconds. E = Everyone; M = moderator or music-queue-moderate right where the music gate applies; L = Lead moderator; B = broadcaster only. This compact contract table preserves the baseline’s functions and defaults; it does not replace the article’s accessible labels.

| Name | Required function/detail | Effective access | Waits |
| --- | --- | --- | --- |
| accountage | caller’s Twitch account age | E | 0/12 |
| allow | `allow massban` releases held mass ban | L | 3/0 |
| banger | add playing song to banger playlist | E | 30/0 |
| bansong | block playing song from future requests | M | 30/0 |
| clearsongs | remove one viewer’s queued songs | M | 60/0 |
| closequeue | stop new requests, music keeps playing | M | 60/0 |
| coinflip | channel-currency bet game | E | 0/0 |
| commands | enabled, caller-eligible authored and built-in trigger list; exclude authored Regex, honor each trigger prefix | E | 120/0 |
| dice | channel-currency bet game | E | 0/0 |
| disallow | `disallow massban` cancels held mass ban | L | 3/0 |
| discord | channel Discord invite | E | 60/0 |
| followage | caller’s channel follow duration | E | 0/12 |
| forgetme | caller-data removal, second confirmation; fixed data-rights | E | 0/0 |
| gdpr | status/forget/export; fixed data-rights | E | 0/0 |
| help | command usage, e.g. `help sr` | E | 60/0 |
| leaderboard | channel leaders | E | 90/0 |
| lurk | mark caller as lurking | E | 0/12 |
| media | clip/video to media share | E | 0/0 |
| mydata | request own-data copy; fixed data-rights | E | 0/0 |
| openqueue | reopen song requests | M | 60/0 |
| pause | pause music | M | 30/0 |
| permit | timed role/right grant, always on | Moderators | 0/0 |
| play | approve submitted media link or replied-to Twitch message link | Moderators | 0/0 |
| playlist | banger-playlist link | E | 60/0 |
| profile | same stats answer | E | 0/12 |
| queue | song queue or caller’s requests | E | 0/12 |
| quote | random/numbered quote; add/edit/delete feature | E (mutations have own gates) | 45/0 |
| resume | resume music | M | 30/0 |
| skip | current own song for viewer, any for M; number removes own queued request; extra shared 30 s M window for bare skip | E; M any song | 0/12 |
| slots | channel-currency bet game | E | 0/0 |
| song | currently playing song | E | 30/0 |
| sr | request queued song | E | 0/12 |
| stats | viewer’s channel stats | E | 0/12 |
| unlurk | clear caller’s lurk mark | E | 0/12 |
| unpermit | revoke given role/right, always on | Moderators | 0/0 |
| unwhitelist | remove whitelist standing | B | 0/0 |
| update | reread caller Twitch name/avatar; moderator may name another viewer | E | 0/12 |
| uptime | stream live duration | E | 30/0 |
| voice | viewer’s own TTS voice choice | E | 0/12 |
| volume | read volume for E, set numeric volume for M | E read/M set | 30/0 |
| whisper | bot private message to viewer | Moderators | 0/12 |
| whitelist | grant Subscriber/VIP/Moderator standing for commands | B | 0/0 |
| wrongsong | retract own song request | E | 0/12 |

## Primary evidence

- `I/DependencyInjection.cs:1307-1369` registers 43 built-ins (including factory registration); `server/src/NomNomzBot.Application/Commands/Builtin/IBuiltinCommand.cs:18-61` supplies default personal wait/always-on/whisper rules; `I/Commands/BuiltinCommandCatalog.cs:16-35` supplies catalog.
- Catalog identity/default anchors: `C/AccountAgeBuiltin.cs:64-67`; `C/BangerBuiltin.cs:39-41`; `C/BanSongBuiltin.cs:33-52`; `C/ClearSongsBuiltin.cs:31-48`; `C/CommandsBuiltin.cs:53-55,116-187`; `C/DiscordInviteBuiltin.cs:36-38`; `C/FollowAgeBuiltin.cs:50-53`; `C/GameBuiltins.cs:68-72,211-240`; `C/HelpBuiltin.cs:45-47`; `C/LeaderboardBuiltin.cs:33-35`; `C/LurkBuiltins.cs:55-57,140-154`; `C/MusicBuiltins.cs:35-116,336-340,504-540,624-627`; `C/PlaybackControlBuiltins.cs:27-60,85-98`; `C/PlaylistBuiltin.cs:35-37`; `C/QueueRequestsBuiltins.cs:31-55,91-109`; `C/SongRequestBuiltin.cs:45-48`; `C/UpdateUserInfoBuiltin.cs:58-80`; `C/UptimeBuiltin.cs:40-45`; `C/WhisperBuiltin.cs:54-60`; `C/WrongSongBuiltin.cs:29-34`.
- Remaining catalog: `I/Identity/Builtins/GdprBuiltins.cs:203-241`; `I/Identity/Builtins/PermitBuiltins.cs:256-259,498-501`; `I/Identity/Builtins/WhitelistBuiltins.cs:47-49,152-154,248`; `I/MediaShare/Builtins/MediaBuiltin.cs:24-49`; `I/MediaShare/Builtins/PlayBuiltin.cs:24-46`; `I/Moderation/Builtins/AllowBuiltin.cs:20-40`; `I/Moderation/Builtins/DisallowBuiltin.cs:20-39`; `I/Quotes/Builtins/QuoteBuiltin.cs:25-44,71-75`; `I/Tts/Builtins/VoiceBuiltin.cs:30-46,78-83`; `I/ViewerData/Builtins/StatsBuiltins.cs:26-33,63-65,240-256`.
- `C/MusicModerationGate.cs:21-57` and `C/MusicBuiltins.cs:35-116`: effective music permission and extra skip window. `I/Chat/EventHandlers/WhisperCommandHandler.cs:40-60,108-178`: prefix, whitelist, channel selection/cap/response destination.
- `I/Commands/BuiltinCommandService.cs:29,101-124,202-253,262-301`; `D/components/BuiltinEditor.vue:90-147,180-290,313-511`; `D/components/BuiltinList.vue:47-125`; `D/i18n/en.json:148-190`: defaults/customization, safeguards, bounds/reset/UI.
- `server/src/NomNomzBot.Application/Commands/Builtin/Personality/BuiltinResponseSlots.cs:25-39`: shared reply groups. `I/Chat/EventHandlers/ChatMessageHandler.cs:291-376`; `I/Chat/OfflineCommandGate.cs:18-28`: actual collision/availability/offline gates.

## Exact evaluation questions and expected answers — evaluator only

1. **Primary task:** “Which command pauses music, who can actually pause it, and what are its default normal cooldowns?” **Expected:** `!pause` (actual channel prefix), platform/effective moderator or broadcaster-granted music-queue-moderate right, shared 30 s/personal 0; Everyone base floor in editor does not permit ordinary viewers to pause. [PlaybackControlBuiltins:27-39; MusicModerationGate:33-56.]
2. **Prerequisites:** “Does seeing `!pause` in this catalog mean Spotify/music is already connected? Who can customize it in the dashboard?” **Expected:** no; underlying music feature must be configured/available. Commands → System commands, write permission, Moderator default/may be raised. Read-only VIP cannot use tab. [CommandsView:54-68; seeder:179-180; feature provider execution.]
3. **Success:** “How do you return one changed cooldown to default, and what does Reset to default do differently?” **Expected:** Back to default on that field saves immediately; whole reset confirms, restores all command overrides/replies/TTS and switches on; shared sibling replies reset too, its unrelated settings preserved. [BuiltinEditor:205-251,491-511; BuiltinCommandService:262-301.]
4. **Application case:** “Two moderators type bare `!skip` five seconds apart. Does normal moderator cooldown bypass let both skip, and could an ordinary viewer use `!skip 4`?” **Expected:** first successful moderated bare skip starts channel-wide 30 s special window; second is refused during that window despite ordinary bypass. Viewer’s numeric branch can remove only their own queued item 4, subject to outer access/normal gates. [MusicBuiltins:35-116 and numeric branch; ChatMessageHandler:321-376.]

## Evidence limits

Catalog source is verified; no commands were invoked against connected services. Row descriptions are not guarantees of configured integration/delivery. The `commands` row must retain current enabled/role/Regex filtering rather than the baseline’s overbroad “all switched-on channel commands” interpretation. The table’s effective access and editor’s base floor must stay distinguishable.
