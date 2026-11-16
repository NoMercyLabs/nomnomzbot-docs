# Current independent fact check

Verdict: PASS
Reviewed: src/content/reference/en/music/song-requests.mdx
Reviewed-SHA: a3c1b774e6dbb5a14dc4c0909f119d2f7c54910b1aa1857005f1741ef2956515
Reviewed-SHA256: a3c1b774e6dbb5a14dc4c0909f119d2f7c54910b1aa1857005f1741ef2956515
Reviewed-Date: 2026-11-05
Reviewer: independent media-section reviewer
Product: 54da8b6318de63b5205a0ff8db35e0b9045dd959 plus preserved current music UI edits

The full article was read in sidebar order. Consequential defaults, permissions, prerequisites, state lifetime and effects were traced against current source; repaired findings were re-read before this verdict. This is source verification, not a live-channel or visible/audible output test.

- server/src/NomNomzBot.Infrastructure/Commands/Builtins/SongRequestBuiltin.cs:45-47 sets 0 shared/12-second personal command pacing; the reviewed article now says 12 seconds.
- server/src/NomNomzBot.Application/Music/Dtos/MusicConfigDefaults.cs:20-32 defines 50 queued, 5 per person, 360-second tracks, Spotify allowed and YouTube off; server/src/NomNomzBot.Infrastructure/Music/MusicService.cs:1170-1330 implements operator/per-role cap interactions, playability, duplicates, fair insertion and persistence.
- server/src/NomNomzBot.Infrastructure/Music/FairQueue.cs:82-99 orders equal-rank requests FIFO and accounts for currently playing requests; SongRequestQueueRestoreHostedService.cs:45-80 restores only within 4 hours; RefusedSongRequestStore.cs:34-65 holds only the latest qualifying refusal for 15 minutes in memory.
- server/src/NomNomzBot.Infrastructure/Music/PipelineActions/SongWrongAction.cs:104-176 distinguishes stable code/current queue position and restricts retraction to the caller's requests.

Source paths without a repeated layer prefix in a bullet are relative to its preceding Infrastructure or dashboard scope. The section report records method, repaired findings, external sources and remaining product limitations: docs-work/overhaul/review-automation-media-integrations.md.

## Historical evidence

Older hashes, verdicts and values below are retained for history and are not the current review.

# Fact check: src/content/reference/en/music/song-requests.mdx
Verdict: PENDING
Reviewed: src/content/reference/en/music/song-requests.mdx
Reviewed-SHA: 552c8e558b44b70a9be39e9827cdacc18f1a9e1370e095113b0e5d2a271ac0c8

## 2026-11-05 author source verification

Author source audit complete; independent verdict pending. This hash binds the current text, not the historical PASS below. The article was read in full and revised toward the user's explainer style while preserving precise reference detail. MusicService.cs; FairQueue.cs; SongWrongAction.cs; SongCode.cs; SongRequestQueueRestoreHostedService.cs; RefusedSongRequestStore.cs. Both codes and numeric queue positions work; restoration freshness is four hours and refused permits last fifteen minutes.

The section inventory and known implementation gaps are in [automation-media-integrations.md](../overhaul/automation-media-integrations.md). This is source verification, not a live-channel execution claim. Independent review must account for product changes after the original author pass at b12f4f696.

## Historical review (SHA 781d3f9e09d53afd)

Historical verdict: PASS. The earlier evidence below is retained as history and is superseded where the current article or source changed.

Round 2. Product repo master at 9a7e5513d (includes b6204c36c). Paths are product-repo relative. MS = server/src/NomNomzBot.Infrastructure/Music/MusicService.cs, RR = server/src/NomNomzBot.Infrastructure/Music/SongRequestRefusalReplies.cs, B = server/src/NomNomzBot.Infrastructure/Commands/Builtins, EN = dashboard/src/views/dashboard/music/i18n/en.json, ADS = server/src/NomNomzBot.Infrastructure/Content/Identity/ActionDefinitionSeeder.cs, RRL = dashboard/src/views/dashboard/music/components/requestRules.ts.

## Round 1 finding

Fixed. Page lines 133-135 now match MS:1168, 1219-1223 and 1750-1773: queue size, length, explicit and per-stream limits skip operators; the per-person cap holds them only when a By role box holds a number, then as the highest value among reached rungs, a blank rung counting as Songs per person.

## Writer's ungrounded claims, checked (round 1, still true)

- "Who may request" (MinTrustLevel) is read by no request path: grep of server/src shows only MusicConfigDefaults.cs:30, MusicConfigDtos.cs:24,78, MusicConfigService.cs:88-89,171,199. Kept off the page.
- No public request page in the dashboard: the only caller is dashboard/src/api/viewer.ts:52 (GET by-channel lookup); no POST to `public/sr` in dashboard/src. API submit at PublicSongRequestController.cs:60-101 with `requesterRoleLevel: 0`.

## Product defects

- MinTrustLevel ("Who may request") is stored and listed in the reset dialog (EN rules.reset.fields.minTrustLevel) but read by no request path.
- The `!bansong` strike warning text says "You have gotten 5 banned songs now." (B/BanSongBuiltin.cs:166) while it fires from 6 bans (SongBanStrikes.cs WarningFrom = 6). The code comment calls it a kept legacy quirk; the page does not quote the text.

## Claim table

| Claim | Supported by | Status |
| --- | --- | --- |
| `!sr` requests a song; everyone; 5 s per-user cooldown | B/SongRequestBuiltin.cs:45-48 | true |
| Usage reply "Usage: !sr <song name or URL>" | B/SongRequestBuiltin.cs:55-62 | true |
| Added reply "Added ... by ... to the queue." with link | B/SongRequestBuiltin.cs:127 | true |
| Link to owning service; name to Search first service | MS:1846-1866, 1795-1815 | true |
| Playlist/album/episode/show/artist refusal text quoted | RR:278-281 | true |
| `!wrongsong` newest own, or by queue number, own only | B/WrongSongBuiltin.cs:20-34 | true |
| Retraction: removed / skip when it starts / skip now | server/src/NomNomzBot.Application/Music/Services/RequestRetraction.cs:3-38 | true |
| Music moderator = moderator or queue-moderate grant | B/MusicModerationGate.cs:20-50 | true |
| `!closequeue` / `!openqueue`: music keeps playing, queued songs stay | B/QueueRequestsBuiltins.cs:20-23, 91, 109 | true |
| `!clearsongs viewername` removes one requester's songs; playing song keeps playing | B/ClearSongsBuiltin.cs:20-24, 50 | true |
| `!bansong` blocks playing song, reason = trailing text, skips | B/BanSongBuiltin.cs:81, 105-110 | true |
| Request queue title, "{count} waiting", Open/Closed, empty text | EN queue.title/waiting/open/closed/empty | true |
| Row "Requested by" | EN queue.by | true |
| Open queue / Close queue / Play next | EN queue.openAction/closeAction/next | true |
| Remove dialog, Ban dialog texts and actions | EN queue.confirmTitle/confirmAction/banTitle/banBody/banAction | true |
| Pick a requester, Remove all, dialog title and body | EN queue.pickRequester/removeAll/removeAllTitle/removeAllBody | true |
| No Spotify device text | EN queue.noSpotifyDevice | true |
| Queue controls need queue-moderate right (Moderator default) | dashboard/src/views/dashboard/music/MusicView.vue:84; ADS:324 | true |
| Music page and Request rules need config read (Moderator default, VIP floor) | dashboard/src/views/dashboard/music/route.ts meta; MusicView.vue:226; ADS:321 | true |
| Tabs Requests, Sources, Blocked | EN rules.tabs.* | true |
| Requests are open; closed reply "The song queue is closed." | EN rules.open; RR:166-169; MS:664-665 | true |
| Requests tab labels and help texts | EN rules.queueSize/songSeconds/allowExplicit/perPerson/perPersonHelp/perStream/perStreamHelp | true |
| Ranges 1-500, 10-3600 s, 1-50, 0-100 | RRL:15-19 | true |
| Defaults 50, 360 s, explicit on, 5, Spotify on, YouTube off, music only on, auto, auto-create off | MusicConfigDefaults.cs:20-31 | true |
| Per stream default 0 (off) | MusicConfigService.cs:79-81, 194 (null = off); RRL:72 shows null as 0 | true |
| By role five boxes and labels; blank = Same | EN rules.roles.*, rules.sameAsPerPerson | true |
| Highest number among roles reached | MS:1750-1773 | true |
| Operator limits rule (lines 133-135) | MS:1168, 1174-1223 | true |
| Sources tab labels, help, Search first options | EN rules.allowSpotify/whoSpotify/allowYouTube/whoYouTube/youTubeMusicOnly(Help)/preferred/providers.* | true |
| Spotify default Everyone, YouTube default Only me | ADS:557-569; EN rules.sourceRole.Everyone/Broadcaster | true |
| Role pickers save at once; only the Broadcaster can change them | dashboard/src/views/dashboard/music/components/RulesSourcesTab.vue:100,121; ADS:213 (roles:manage Broadcaster, grant false); EN rules.sourceRoleHint | true |
| Role choices Everyone to Only me, examples | EN rules.sourceRole.* | true |
| Banger labels and defaults | EN rules.banger/bangerHelp/bangerAuto/bangerAutoCreate; MusicConfigDefaults.cs:31 | true |
| Blocked empty text, Allow, "can be requested again." | EN rules.blockedEmpty/allow/allowed | true |
| Blocked check on every path | MS:1152-1157 (single enqueue gate) | true |
| Reset to default; requests switch and banger stay | EN rules.reset.button/body/action | true |
| Refusal replies: full, per user, per stream, too long ("6 minutes"), explicit, blocked, duplicate, playing now, source role, not music, not found | RR:224-234, 152-155, 80-92, 387-395, 96-99, 180-183, 345-362, 302-305, 145-148, 67-70 | true |
| `!permit` as a bare reply admits a held request; Moderator floor | server/src/NomNomzBot.Infrastructure/Identity/Builtins/PermitBuiltins.cs:259, 266-268 | true |
| Permit reply "Queued ... for viewername." | PermitBuiltins.cs:420 | true |
| Permit lifts queue size, per person, length; not blocklist or duplicate | MS:1166-1168, 1152-1157, 1219-1223, 1240 | true |
| Strikes 6-9 warn, 10 warn + refuse, 11+ revoke notice + refuse; Allow removes one | SongBanStrikes.cs:22-34; B/BanSongBuiltin.cs:144-164; MS:668-680; RR:173-176 | true |
| Playback off refuses every request | MS:658-662 | true |
| No public request page; API requests count as Everyone | dashboard/src/api/viewer.ts:52; PublicSongRequestController.cs:29, 60-101 | true |
