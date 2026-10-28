# Claims: /reference/music/song-requests

Paths are in the product repo. MV = dashboard/src/views/dashboard/music/MusicView.vue, EN = dashboard/src/views/dashboard/music/i18n/en.json, C = dashboard/src/views/dashboard/music/components, MS = server/src/NomNomzBot.Infrastructure/Music/MusicService.cs, RR = server/src/NomNomzBot.Infrastructure/Music/SongRequestRefusalReplies.cs, B = server/src/NomNomzBot.Infrastructure/Commands/Builtins, ADS = server/src/NomNomzBot.Infrastructure/Content/Identity/ActionDefinitionSeeder.cs, MCD = server/src/NomNomzBot.Application/Music/Dtos/MusicConfigDefaults.cs.

| # | Claim | Source |
| --- | --- | --- |
| 1 | `!sr` is the song request builtin; Everyone; per-user cooldown 5 seconds | B/SongRequestBuiltin.cs:42-48 (key "sr" in server/src/NomNomzBot.Application/Commands/Builtin/Personality/BuiltinResponseSlots.Music.cs:55) |
| 2 | Usage reply "Usage: !sr <song name or URL>" | B/SongRequestBuiltin.cs:52-58 |
| 3 | Added reply "Added {track.name} by {track.artist} to the queue. {track.link}" | B/SongRequestBuiltin.cs:117-127 |
| 4 | A link goes to the owning service, a name to the active (preferred) service | MS:686-695, 1795-1830, 1846-1864 |
| 5 | Playlist/album/episode/show/artist link refused | RR:278-281 |
| 6 | Request queue panel, count "{count} waiting", Open/Closed badge, empty text | MV:337-356; EN dashboard.music.queue.title/waiting/open/closed/empty |
| 7 | Row: number, cover, song, artist, Requested by | MV:390-440 |
| 8 | Queue controls (drag, Play next, remove, ban, Open/Close queue) need music:queue:moderate (Moderator default) | MV:84,358-370,413-475; ADS:325 |
| 9 | Play next moves to top | IMusicService.cs:226 PromoteToTopAsync; MV:450 |
| 10 | Remove / Ban dialog texts | EN dashboard.music.queue.confirmTitle/confirmAction/banTitle/banBody/banAction |
| 11 | Remove all by requester, dialog texts | C/RequesterBulkRemove.vue:50-82; EN queue.pickRequester/removeAll/removeAllTitle/removeAllBody |
| 12 | No Spotify device line | MV:375-383; EN queue.noSpotifyDevice |
| 13 | Request rules button gated music:config:read (Moderator default, VIP floor); opens a side panel with three tabs | MV:226,270-273,488-495; ADS:324; C/RulesPanel.vue:43,143-158 |
| 14 | Rule fields editable only with music:config:write (Moderator default) | C/RulesRequestsTab.vue:28; C/RulesSourcesTab.vue:70; ADS:320 |
| 15 | Save sends only changed fields; Discard resets the draft; Save off when invalid or unchanged | C/RulesPanel.vue:69-93,114-120,179-184; C/requestRules.ts:94-104 |
| 16 | Requests are open switch saves at once; same field as Open/Close queue and !openqueue/!closequeue | C/RulesPanel.vue:81-87,135-141; server/src/NomNomzBot.Application/Music/Services/ISongRequestIntakeService.cs:4-5 |
| 17 | Closed reply "The song queue is closed." | MS:664-665; RR:166-169 |
| 18 | Ranges: queue 1-500, per person 1-50, longest 10-3600 s, per stream 0-100, 0 = off | C/requestRules.ts:5-9; EN rules.perStreamHelp |
| 19 | Defaults: queue 50, per person 5, longest 360 s, explicit on, Spotify on, YouTube off, music videos only on, search first auto, banger auto-create off, per stream null (off) | MCD:20-31; server/src/NomNomzBot.Infrastructure/Music/MusicConfigService.cs:186-203 |
| 20 | Labels of Requests tab (5 of 5 fields + By role group) | C/RulesRequestsTab.vue:30-119; EN rules.* |
| 21 | By role rungs 5 of 5: Viewers, Twitch subscribers, VIPs, Moderators, Me; blank = Same = per-person cap | server dashboard/src/api/vocabulary.ts:40; C/requestRules.ts:32,106-114; EN rules.roles.*, rules.sameAsPerPerson |
| 22 | Highest cap among reached rungs | MS:1750-1773 |
| 23 | Queue size, length, explicit and per-stream limits never apply to moderators/broadcaster; per-person cap applies to them only when any By role box holds a number, and then is the highest value among reached rungs, blank = Songs per person | MS:1172-1223 (capApplies at 1227-1229), 1744-1773 |
| 24 | Sources tab fields 6 of 6 with labels; role rows show only when the service is allowed | C/RulesSourcesTab.vue:72-142; EN rules.* |
| 25 | Spotify requests default Everyone; YouTube requests default Broadcaster (Only me) | ADS:556-569; EN rules.sourceRole.Everyone/Broadcaster |
| 26 | Role choice saves at once; hint text; needs roles:manage | C/RulesSourcesTab.vue:58-66,90,111; EN rules.sourceRoleHint |
| 27 | Source role refusal reply | server/src/NomNomzBot.Infrastructure/Music/SongRequestSourceAccess.cs:29-67; RR:290-292 |
| 28 | Banger playlist group, Choose automatically, Make a playlist on first use | C/RulesSourcesTab.vue:143-178; EN rules.banger*, MCD:31 |
| 29 | Blocked tab list with reason, empty text, Allow, allowed text, Undo | C/RulesBlockedTab.vue:40-109; EN rules.blocked*, rules.allow, rules.allowed |
| 30 | Allow needs music:queue:moderate | C/RulesBlockedTab.vue:90 |
| 31 | Blocked check on every path (chat, reward action, script) through EnqueueResolvedAsync | MS:1152-1157; callers server/src/NomNomzBot.Infrastructure/Music/PipelineActions/SongRequestAction.cs, server/src/NomNomzBot.Infrastructure/CustomCode/ScriptHostBridge.cs (RequestTrackAsync) |
| 32 | Reset to default button shows when a rule differs; dialog body | C/RulesPanel.vue:96-112,159-177; EN rules.reset.* |
| 33 | Refusal replies table 12 rows (closed, full, per user, per stream, too long, explicit, blocked, duplicate queued, playing now, source role, not music, not found) | RR:67-78,80-99,152-183,224-234,145-148,290-292,340-362; MS:1153-1235,1286 |
| 34 | `!permit` as a bare reply admits a request held by queue full, per-user or length limit; reply "Queued {track.name} for {user}." | MS:776-818,836-848; server/src/NomNomzBot.Infrastructure/Identity/Builtins/PermitBuiltins.cs:266-268,394-437 |
| 35 | Permitted song still checks blocked list and duplicates | MS:800-801, 1152-1157, 1240-1290 |
| 36 | `!wrongsong`: newest own, or by queue number when it is the caller's | B/WrongSongBuiltin.cs:20-34; server/src/NomNomzBot.Infrastructure/Music/PipelineActions/SongWrongAction.cs:200-262,380-420 |
| 37 | Retraction outcomes: removed / skip when it starts (Spotify cannot delete) / skip now | server/src/NomNomzBot.Application/Music/Services/RequestRetraction.cs:3-22; SongWrongAction.cs:170-180 |
| 38 | Music commands table 6 of 6 request commands (!sr, !wrongsong, !closequeue, !openqueue, !clearsongs, !bansong) | B/SongRequestBuiltin.cs; B/WrongSongBuiltin.cs; B/QueueRequestsBuiltins.cs:85-118; B/ClearSongsBuiltin.cs; B/BanSongBuiltin.cs |
| 39 | Music moderator = moderator badge or music:queue:moderate grant | B/MusicModerationGate.cs:20-50 |
| 40 | !closequeue keeps music and queue | B/QueueRequestsBuiltins.cs:20-23 |
| 41 | !clearsongs removes all of one requester, playing song keeps playing | B/ClearSongsBuiltin.cs:20-24 |
| 42 | !bansong blocks the playing song, reason = trailing text, skips | B/BanSongBuiltin.cs:60-100 |
| 43 | Strikes counted per person who typed !bansong (CountByBlockerAsync on BlockedByUserId = TriggeringUserId); warning on the !bansong reply at 6-10, revoke notice from 11, that person's own !sr refused from 10 with "Stop requesting songs, your permission has been revoked" (RR:173-176); unblock removes a strike | server/src/NomNomzBot.Application/Music/Services/SongBanStrikes.cs:8-17; B/BanSongBuiltin.cs:110-140; MS:668-680 |
| 44 | Playback off (IsEnabled false) refuses every request | MS:658-662; MV:98-102 |
| 45 | Dashboard has no public request page or link; the API takes requests; role level 0 (Everyone) | server/src/NomNomzBot.Api/Controllers/V1/PublicSongRequestController.cs:28-97; grep of dashboard/src for "sr-page-token" and a submit call: none; dashboard/src/api/viewer.ts:52 is only a channel lookup |
| 46 | Playlist/album link refusal text quoted | RR:278-281 |
| 47 | Too-long reply text; DurationText renders 360 s as "6 minutes" | RR:80-92, 387-395 |
| 48 | Source role choice needs roles:manage, which is Broadcaster-only and not grantable | C/RulesSourcesTab.vue:90,111; ADS:213 |
| 49 | !permit as a bare reply to the refusal (reply parent or thread user); Moderator floor | server/src/NomNomzBot.Infrastructure/Identity/Builtins/PermitBuiltins.cs:259,266-268,394-437 |
| 50 | Leads re-opened round 2: commands table (rows 38-42) in B/QueueRequestsBuiltins.cs:20-118, B/ClearSongsBuiltin.cs:20-100, B/BanSongBuiltin.cs:20-140, B/WrongSongBuiltin.cs:20-34, B/MusicModerationGate.cs:20-50; ranges C/requestRules.ts:5-9; per-stream default MusicConfigService.cs:194 `int? PerStreamLimit` with no initializer (null = off), shown as 0 by C/requestRules.ts:62; retraction RequestRetraction.cs:3-22 and SongWrongAction.cs:170-180 | as listed |
