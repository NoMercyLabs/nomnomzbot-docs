# Fact check: src/content/reference/en/music/music-player.mdx
Verdict: PASS
Reviewed: src/content/reference/en/music/music-player.mdx
Reviewed-SHA: d71c81b704133b1e

Round 2. Paths are in the product repo (master, includes b6204c36c). EN = dashboard/src/views/dashboard/music/i18n/en.json. MV = dashboard/src/views/dashboard/music/MusicView.vue. MP = server/src/NomNomzBot.Infrastructure/Content/Widgets/Assets/music_player.vue. INT = dashboard/src/views/dashboard/settings/integrations/i18n/en.json.

## What changed in round 2, checked

- Spotify badge table (page lines 17-23): labels EN:5-9; Integrations row label "Sign in again" INT:11, button "Reconnect" INT:39. Supported.
- Widget device (lines 37-40): MP:374-376 names the Spotify device `NomNomzBot — <widget name>` (fallback "NomNomzBot Overlay" only when the widget has no name). The hidden YouTube player is in MP:501 and in the 1px, opacity 0 style (MP:524 block). Supported.
- What the page shows (lines 42-52): status dot MP:502-504 (when showIndicator is set); the three Spotify messages MP:511, 514, 517, quoted word for word, shown only while enableAudio is on. "Click" fits the button `@click="enableAudio"` at MP:506-512. Supported.
- Settings location and the two audio switches (lines 64-66): enableAudio off stops YouTube (MP:171, 205) and disconnects Spotify (MP:456-457); the Control audio via OBS meaning is from FirstPartyWidgetCatalogue.cs:313-314. Supported.
- Lines 76 to the end: same text as round 1. Meaning unchanged.

## Product defects (confirmed in round 1, still open, not on the page)

1. NowPlayingCard emits previous, seek, shuffle, repeat and volume, but MV handles only pause, resume and skip. Those controls do nothing.
2. The Playback switch help EN:90 "Turn this off to stop all playback." disagrees with MusicService.cs:658-662, which only refuses new requests (SR_DISABLED).
3. PlayerButtons.vue:47 shows the strip to `music:queue:read`, but a press needs `pipelines:write` (ChannelActionRunController.cs:40). A reader below Moderator gets the "did not run" toast.

| Claim | Supported by | Status |
| --- | --- | --- |
| Music page, title Music | EN:4; route.ts:17-19 | supported |
| Four panels: Now playing, Request queue, History, Thanks for the music | EN:11,93,213,220 | supported |
| Badges Spotify connected / needs a new sign-in / not connected | EN:5-9 | supported |
| Integrations Spotify row shows Sign in again; Reconnect | INT:11,39 | supported |
| Moderator and up open the page; VIP when the broadcaster allows | route.ts:19; ActionDefinitionSeeder.cs:324,50-51 | supported |
| Play/pause/skip, add/edit buttons, Playback: Moderator and up | ActionDefinitionSeeder.cs:184,320,325; PlayerButtons.vue:50 | supported |
| Widget holds a hidden YouTube player | MP:501 plus the .youtube-audio style | supported |
| Spotify device "NomNomzBot" plus widget name | MP:374-376 | supported |
| Shows nothing except the status dot and the Spotify messages | MP:500-519 | supported |
| Three Spotify messages and their actions | MP:506-518 | supported |
| Own browser source and own level; 1x1; keep Control audio via OBS on | FirstPartyWidgetCatalogue.cs:309-316 | supported |
| Play audio on this page off: no music at all | MP:171,205,444-457 | supported |
| Settings labels (5 of 5) | dashboard/src/i18n/schema/en.json:3100-3116; WidgetSettingsSchemaProvider.cs:193-200 | supported |
| Defaults 100, Off, On, Off, #9146ff | FirstPartyWidgetCatalogue.cs:317-324 | supported |
| "Waiting for the Music Player in OBS" row and setup button | EN:100; MV:409,441 | supported |
| "Nothing is playing right now." | EN:12 | supported |
| Buttons Play, Pause, Next song | EN:75-77 | supported |
| State badges (4 of 4) | EN:69-74; NowPlayingCard.vue:101-103,160,165 | supported |
| Playback switch in the header, on by default, off refuses new requests | MV:301-307; MusicConfigDefaults.cs:20; MusicService.cs:658-662 | supported |
| Same buttons as the Stream Deck music plugin | EN:22 | supported |
| At most 12 buttons, label at most 24, empty label shows only the icon | playerButtons.ts:30-34; IPlayerButtonService.cs:46-47 | supported |
| Dialog titles and the Add, Save and Remove button labels | EN:20-25 | supported |
| "A channel can pin at most 12 buttons." | EN:17 | supported |
| 23 button names and help texts | EN:30-52 | supported |
| Press runs the action; a failure says it did not run | PlayerButtons.vue:113-120; EN:15 | supported |
| Drag to move saves the order; right-click opens the editor | PlayerButtons.vue:136,153,176 | supported |
| History: 12 latest, newest first, Unknown song, requester and time | music.ts:683; MusicController.cs:398; MusicHistoryReader.cs:46; HistoryPanel.vue:44,63; EN:216 | supported |
| Thanks: top 8, all time, bar and count, Open people goes to People | music.ts:684; MusicController.cs:416; MusicHistoryReader.cs:98; ThanksPanel.vue:12,64-66,77; EN:221-225 | supported |
