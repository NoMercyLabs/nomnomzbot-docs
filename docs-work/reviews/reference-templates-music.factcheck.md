# Fact check: src/content/reference/en/templates/music.mdx
Verdict: PASS
Reviewed: C:/Projects/NoMercyLabs/nomnomzbot-docs/src/content/reference/en/templates/music.mdx
Reviewed-SHA: cc69fce89be90a96

Product: origin/master 779081d10d05dc6b4150732abd77bfae4dbef1d9 (fetched this run; every file read with `git show origin/master:<path>`).

Short paths: `Mus/` = server/src/NomNomzBot.Infrastructure/Platform/Templating/Helpers/Music/; `Reg` = server/src/NomNomzBot.Application/Abstractions/Templating/TemplateHelperRegistry.cs; `mxml` = server/i18n/strings/values/strings_template_music.xml; `sxml` = server/i18n/strings/values/strings.xml; `Fav` = server/src/NomNomzBot.Infrastructure/Music/PipelineActions/SongRequestFavoriteAction.cs.

## Method

- A throwaway script (deleted after the run) read all 54 table rows and compared each description cell with the first line of the product's English string, and each example with the helpers.json sample.
- Result: 51 of 54 rows equal the product text and sample exactly. The 3 others are the docs corrections in docs-work/helper-groups.md: `music.now.bar` (description), `music.queue.target.count` (description) and `music.favorite.outcome` (sample). Each is checked below.
- Then 18 rows were read against their render code: every 4th row (rows 1, 5, 9, ..., 53), the last row, and the 3 changed rows.

## Changed places

- `{music.queue.target.count}` (line 55). The page says it counts the songs of the mentioned viewer, and the mentioned viewer is the first word after the command, as in `!queue @someviewer`.
  - The row counts the queue entries whose requester matches `call.Data.Target` (Mus/MusicQueuePlaceHelpers.cs:102-111, :117-120), by display name, case-insensitive (Mus/MusicText.cs:71-73).
  - `Target` is the `target` seed without its `@` (Mus/MusicData.cs:104-105).
  - The command path seeds `target` from the first word of the text after the command, one leading `@` stripped (server/src/NomNomzBot.Infrastructure/Chat/EventHandlers/ChatMessageHandler.cs:1890-1898; server/src/NomNomzBot.Application/Commands/Builtin/MentionParser.cs:30-31).
  - With no first word the row prints as written (the `Length > 0` check at :107). The example `1` is a plain count (StreamText.Plain). True.
  - The link /reference/templates/target exists in the docs tree (src/content/reference/en/templates/target.mdx).
- `{music.now.bar}` (line 20). The page says: a bar with the clock; a width from 1 to 50 after a colon gives the bare bar of that many cells; the default width is 11.
  - Mus/MusicProgressHelpers.cs:38, :42-56: no argument gives `bar progress / duration`; one argument gives the bare bar.
  - Mus/MusicText.cs:22-23 (`DefaultBarWidth = 11`, `MaxBarWidth = 50`), :67-69 (TryWidth from 1 to 50), :55-61 (the knob sits at round(fraction x (width - 1))).
  - Example `{music.now.bar:5}` gives `▬▬🔘▬▬`: at 1:23 of 3:30 the fraction is 0.395, and round(0.395 x 4) = 2, so 2 bars, the knob, 2 bars. True. The test row server/tests/NomNomzBot.Infrastructure.Tests/Platform/Templating/Helpers/Music/MusicHelpersTableTests.cs:36 expects exactly this output, and :35 expects the bare token to give `▬▬▬▬🔘▬▬▬▬▬▬ 1:23 / 3:30`.
  - The product sample for the bare token, `▬▬▬▬🔘▬▬▬▬▬▬ 1:23 / 3:30`, has 11 cells, which matches the default.
- `{music.favorite.outcome}` (line 65). Example `queued`.
  - The values set are `none` (Fav:128, :166), `queued` (Fav:146) and `unavailable` (Fav:159). `queued` is a real output. True.
  - The description "queued, none, or unavailable" (sxml:5318) names exactly these three.

## Sampled rows

| Row | Key | Product row | Description = English text | Example plausible | Why |
| --- | --- | --- | --- | --- | --- |
| 1 | music.now | Mus/MusicNowHelpers.cs:19-23 | yes (mxml:11) | yes `Song A by Artist A` | MusicText.Track gives `<title> by <artist>` (Mus/MusicText.cs:27-33). |
| 4 | music.now.bar | Mus/MusicProgressHelpers.cs:38 | yes, a true Description correction (helper-groups.md line 324) | yes | See the changed places. |
| 5 | music.now.cover | Mus/MusicNowHelpers.cs:27-31 | yes (mxml:15) | yes | The track's image URL, null when empty. |
| 9 | music.now.percent | Mus/MusicProgressHelpers.cs:30-37 | yes (mxml:22) | yes `40%` | Rounded percent with `%` (Mus/MusicText.cs:44-49); 83 s of 210 s gives 40%. |
| 13 | music.now.requester.mention | Mus/MusicNowHelpers.cs:38-42 | yes (mxml:18) | yes `@ViewerTwo` | `@` plus RequestedBy. |
| 17 | playlist_id | Reg:775 (Pipeline only, Reg:50-53) | yes (sxml:5313) | yes `37i9dQZF1DX` | PlaylistAddAction.cs:128-131, :175 seeds the playlist id the action was given. |
| 21 | music.queue.isEmpty | Mus/MusicQueueHelpers.cs:77-81 | yes (mxml:37) | yes `false` | PeopleText.Flag(queue.Count == 0). |
| 25 | music.queue.mine.code | Mus/MusicQueuePlaceHelpers.cs:87-94 | yes (mxml:45) | yes `K7QM` | The viewer's first queued song's code; !wrongsong takes a code (Infrastructure/Commands/Builtins/WrongSongBuiltin.cs:20; Music/PipelineActions/SongWrongAction.cs:33). |
| 29 | music.queue.next | Mus/MusicQueueHelpers.cs:30-34 | yes (mxml:32) | yes `Song B by Artist B` | queue[0] through MusicText.Track. |
| 33 | music.queue.requesters | Mus/MusicQueueHelpers.cs:65-76 | yes (mxml:36) | yes `4` | Distinct non-empty requester names. |
| 34 | music.queue.target.count | Mus/MusicQueuePlaceHelpers.cs:102-111 | yes, a true Description correction (helper-groups.md line 321) | yes `1` | See the changed places. |
| 37 | music.favorite.artist | Reg:785-789 (Pipeline only, Reg:55-60) | yes (sxml:5316) | yes `The Weeknd` | Fav:242 seeds the favorite's artist. |
| 39 | music.favorite.outcome | Reg:795-799 | yes (sxml:5318) | yes `queued` | See the changed places. |
| 41 | music.history.count.stream | Mus/MusicHistoryHelpers.cs:40-45 | yes (mxml:50) | yes `21` | Count of requests since the stream went live; offline prints as written (:90-102). |
| 45 | music.history.topRequester.stream | Mus/MusicHistoryHelpers.cs:46-50 | yes (mxml:51) | yes `ViewerTwo (4)` | `<name> (<count>)` of the most frequent requester this stream (:108-124). |
| 49 | music.repeat | Mus/MusicPlayerHelpers.cs:35, :57-63 | yes (mxml:28) | yes `off` | Track gives `track`, Context gives `context`, else `off`. |
| 53 | music.shuffle | Mus/MusicPlayerHelpers.cs:34 | yes (mxml:27) | yes `off` | `on` or `off`. |
| 54 | music.volume | Mus/MusicPlayerHelpers.cs:33 | yes (mxml:26) | yes `60%` | `<volume>%`. |

Two more rows were traced while reading the queue code: `music.queue.item` (Mus/MusicQueueHelpers.cs:43-51, place from 1 to the queue length, title with artist) and `music.queue.list` (:52-64, titles only, `1. Song B, 2. Song C, 3. Song D` matches that shape). Both are true.

## Intro check

- Line 6, `{music.*}`, `{track*}`, `{playlist*}`: the 54 keys are 52 `music.*` keys plus `playlist_id` and `track_name`. True.
- Line 8, "These helpers read the song that plays now, the queue and song requests": the sections are Now playing, The queue, History and favorites, and Player and request settings. All four read the player, the queue or the request history and settings. True.
- `playlist_id` and `track_name` sit under "Now playing". PlaylistAddAction adds the playing track when no track is given (PlaylistAddAction.cs:147-171), so the heading is true for the default use.
- Line 9, "Use them in a song or queue command": the now-playing and queue rows have the standard contexts (helpers.json). True as a use hint; see the notes for the action-only rows.
- Line 11, the rows are separate examples: true.
- The intro names no helper that is not on the page.

## Row count

- The table rows on the page: 18 + 18 + 12 + 6 = 54 (script count, "rows 54").
- docs-work/helper-groups.md "## Types" line 30 gives Count 54 for /reference/templates/music.
- The front matter (line 3) says 54. All equal.

## Notes (not wrong facts)

- `playlist_id`, `track_name` and the four `music.favorite.*` rows are Pipeline-only seeds (Reg:50-60, :775-799). They have a value only in the steps after a playlist_add or song_request_favorite action. The page does not say so. A short line in the intro or the rows would help a reader; the page states nothing false about it.

## Product defects

- The product sample of `music.favorite.outcome` is `added` (server/src/NomNomzBot.Application/Abstractions/Templating/TemplateHelperSamples.cs:208). The action never sets `added`; it sets queued, unavailable or none (Fav:128, :146, :159, :166). The docs override it through helper-groups.md "## Sample corrections" line 301; the product sample should be `queued`.
- `track_name` is described as "The name of the track that was added" (sxml:5314), but when the action is given a `track_uri`, the seed is the URI, not a name (PlaylistAddAction.cs:147-149, :177: `trackName ?? trackUri`).
- `TopOf` calls `.First()` on the grouped requests after it drops empty names (Mus/MusicHistoryHelpers.cs:115-122). When this stream has requests but every one has an empty artist (or requester) name, `.First()` throws on an empty sequence. Whether the resolver catches that throw was not checked.
- The English text of `music.queue.target.count` (mxml:47) does not say who "the mentioned viewer" is; the docs add that through a Description correction.
