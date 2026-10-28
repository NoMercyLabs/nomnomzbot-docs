# Claims: /reference/music/music-player

Paths are in the product repo. MV = dashboard/src/views/dashboard/music/MusicView.vue, EN = dashboard/src/views/dashboard/music/i18n/en.json.

| # | Claim | Source |
| --- | --- | --- |
| 1 | Sidebar label **Music**, page title **Music** | dashboard/src/i18n/locales/en.json:207; EN:4 |
| 2 | Four panels Now playing, Request queue, History, Thanks for the music (4 of 4) | MV:457-487; EN:11,93,213,220 |
| 3 | History and Thanks panels show only to someone who may read the music config | MV:455,471-484 |
| 4 | Header badge: Spotify connected / needs a new sign-in / not connected | MV:375-384,496; EN:5-9 |
| 5 | Page opens for music:config:read: Moderator and up, VIP grantable (floor Vip) | dashboard/src/views/dashboard/music/route.ts:774; server/src/NomNomzBot.Infrastructure/Content/Identity/ActionDefinitionSeeder.cs:324,50-51 |
| 6 | Play/Pause/Next need music:queue:moderate (Moderator and up) | NowPlayingCard.vue:1049-1081; ActionDefinitionSeeder.cs:325; MusicController.cs:495-531 |
| 7 | Add button and Playback switch need music:config:write (Moderator and up) | MV:315,518-539; ActionDefinitionSeeder.cs:320 |
| 8 | Music Player widget: Spotify and YouTube music plays there, own level, renders nothing, size 1x1, keep Control audio via OBS on | server/src/NomNomzBot.Infrastructure/Content/Widgets/FirstPartyWidgetCatalogue.cs:309-316; Assets/music_player.vue:7-11 |
| 9 | Widget hosts a hidden YouTube player (1x1, opacity 0) and creates a Spotify Web Playback device named "NomNomzBot — <widget name>" | Assets/music_player.vue:7-9,341,374-376,526 |
| 9a | Page shows nothing except the status dot and three Spotify problem messages (3 of 3, verbatim) | Assets/music_player.vue:498-520 |
| 9b | "Click to enable audio playback" is a button that enables audio on click | Assets/music_player.vue:505-511,436 |
| 9c | Badge "Spotify needs a new sign-in" is the needsReauth state; Integrations row label for the same state is "Sign in again" | MV:381-383; EN:7; dashboard/src/views/dashboard/settings/integrations/i18n/en.json:11 |
| 9d | Play audio on this page off: page plays no YouTube and disconnects Spotify | Assets/music_player.vue:171,205,444-456 |
| 10 | Widget settings 5 of 5, labels and defaults | WidgetSettingsSchemaProvider.cs:193-200; FirstPartyWidgetCatalogue.cs:317-324; dashboard/src/i18n/schema/en.json:3100-3116 |
| 11 | Volume applies to both players, muted silences both | Assets/music_player.vue:13-14 |
| 12 | enableAudio gates playing | Assets/music_player.vue:171,205,444-456 |
| 13 | Accent color colors the dot and status messages | Assets/music_player.vue:501,508,513,516 |
| 14 | Waiting row text and its setup button | MV:633-639,670-673; MusicPlayerConnect.vue:794-827; EN:100 |
| 15 | Now playing shows cover, name, artist, requester; empty text | NowPlayingCard.vue:954-986; MV:512; EN:12,67 |
| 16 | Play, Pause, Next song buttons and actions | NowPlayingCard.vue:1049-1081; MV:545-547; EN:75-77 |
| 17 | State badges 4 of 4 | NowPlayingCard.vue:928-934,988-994; EN:69-74 |
| 18 | Playback switch default on; off refuses new song requests | MV:327-331,530-539; server/src/NomNomzBot.Application/Music/Dtos/MusicConfigDefaults.cs:20; server/src/NomNomzBot.Infrastructure/Music/MusicService.cs:655-662 |
| 19 | Player buttons are the Stream Deck music plugin buttons | EN:22; PlayerButtonPicker.vue |
| 20 | At most 12 buttons, label at most 24 characters (client and server) | dashboard/src/api/playerButtons.ts:33-34; server/src/NomNomzBot.Application/Music/Services/IPlayerButtonService.cs:46-47; server/src/NomNomzBot.Infrastructure/Music/PlayerButtonService.cs:102-109 |
| 21 | Add flow: dialog title, pick, label prefilled with action name, Add button | PlayerButtonPicker.vue (pick, template); EN:20,23 |
| 22 | Empty label gives icon-only button | PlayerButtons.vue (size icon when label empty) |
| 23 | Full: Add disabled with "at most 12" title | MV:523-524; EN:17 |
| 24 | 23 of 23 button types, names and help | EN:30-52; dashboard/src/lib/streamDeckActions.ts:25 |
| 25 | Press runs the action; failure toast "did not run" | PlayerButtons.vue press(); EN:15; server/src/NomNomzBot.Api/Controllers/V1/ChannelActionRunController.cs:40-42 |
| 26 | Drag to move saves the order at once | PlayerButtons.vue dropped() |
| 27 | Right-click opens Edit player button; Save button / Remove button | PlayerButtons.vue edit(); PlayerButtonPicker.vue send/remove; EN:21,24,25 |
| 28 | History: 12 latest, newest first, row fields, Unknown song | dashboard/src/api/music.ts:683,703; HistoryPanel.vue; EN:216; MusicController.cs:393-405 |
| 29 | Thanks: 8 top requesters, all time, bar and count, Open people goes to People | dashboard/src/api/music.ts:684; ThanksPanel.vue; EN:221,225; MusicController.cs:410-425 |
