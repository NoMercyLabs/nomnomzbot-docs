# Reader review: src/content/reference/en/music/music-player.mdx
Verdict: PASS
Reviewed: src/content/reference/en/music/music-player.mdx
Reviewed-SHA: d71c81b704133b1e

Round 2. Read the whole page as rendered (no includes or snippets in the file). Assumed pages read: `integrations/spotify.mdx`, `integrations/youtube.mdx`. Pilot read: `commands/create-a-command.mdx`. Link targets not written yet are not judged. Product source not read (reader rule).

## Round 1 findings, now fixed

- [line 17-23] The badge table now names **Spotify needs a new sign-in** and points to **Sign in again** on the Spotify row (`integrations/spotify.mdx` line 80). Labels match. Fixed.
- [line 42-46] "The page shows nothing while the music plays well", then the two cases (status dot, Spotify message). The contradiction is gone. Fixed.
- [line 32, round 1] "Spotify Connect device" is now "a Spotify playback device ... named NomNomzBot followed by the widget name" (line 39). Fixed.
- [line 62-66] The page now says where the widget settings are changed, and what each audio switch does. Fixed.

## Blocking findings

None. No wrong fact and no step a non-coder cannot follow was found.

## Notes (do not decide the verdict)

- [lines 37-40] Four sentences in one paragraph (50 words). Split it or cut one sentence. This is the only paragraph over three sentences.
- [line 46] "A short Spotify message" is the list's second case, but the table at line 50 holds "Click to enable audio playback", which is not a Spotify message. Say "A short message" instead.
- [line 56] **Control audio via OBS** is named in step 3 and explained only at line 66. A reader sees the name before the meaning. Move the definition up or add "(see below)".
- [line 105] "the same buttons as the Stream Deck music plugin" is never defined. The claim needs a source in the fact-check file.
- [line 113] "Leave it empty for a button with only an icon." Icon is not introduced. A reader will likely understand it from the dialog.
- [line 111] "the fields it needs" waves at the fields. Buttons that take input (Set Volume, Seek, Set Repeat Mode, Switch Playback Device, Add to Playlist, Remove from Playlist) do not say what to enter.
- [line 149-150] "Choose a button to run it" names only the failure result. The success result is not stated.
- [line 123-124] **Play/Pause** and **Now Playing** both say "Toggles playback". The difference is not stated.
- [line 156] "the strip" is not introduced. "Player buttons" (line 104) is the term to use.
- [line 78] Four parallel facts in one sentence (cover, song name, artist, requester). `page-conventions.md` line 46 says a table.
- [line 161] Four parallel facts in one sentence (song, artist, requester, when). Same convention.
- [lines 37-38] Step 3 holds two actions ("Size the source ... and keep ... on"). Fine for a step; could be split.

## Density

Paragraphs measured (text between blank lines). Over three sentences: one.

| Lines | Sentences | Words | Note |
| --- | --- | --- | --- |
| 6-8 | 3 | 38 | OK |
| 37-40 | 4 | 50 | Over three. See Notes. |
| 42-43 | 2 | 15 | OK |
| 98-100 | 3 | 28 | OK |
| 104-106 | 3 | 29 | OK |
| 159-162 | 3 | 34 | Line 161 holds four parallel facts |
| 164-166 | 3 | 33 | OK |

Sentences with four parallel facts that should be a table: line 78 (18 words) and line 161 (14 words).

## Voice against the pilot

Sentence-level voice matches `commands/create-a-command.mdx`. The actor leads, results are stated in checkable terms ("The dialog closes and ..."), and constraints arrive as symptoms ("With it off, the stream does not hear the music."). Same person, most likely. One difference: the pilot defines its jargon in one short sentence ("A regex is a text pattern.", "An alias is another name for a command."). This page does not define **Player buttons**' Stream Deck link or the strip (see Notes).

## Where I got lost

- Step 3 names **Control audio via OBS** before it explains the switch. I got it on line 66, after the step.
- The Stream Deck plugin, the strip and the "fields it needs" each leave me without a clear next thought. None stops me from completing a step.

Not checked by this reader: dashboard label files and product code. The fact-check reviewer owns the badge-label match, the Stream Deck claim and the Spotify device name.
