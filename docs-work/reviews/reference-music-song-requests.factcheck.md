# Fact check: src/content/reference/en/music/song-requests.mdx
Verdict: PASS
Reviewed: src/content/reference/en/music/song-requests.mdx
Reviewed-SHA: 781d3f9e09d53afd

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
