# Reader review: src/content/reference/en/code/sdk-chat-music-voice.mdx
Verdict: PASS
Reviewed: C:\Projects\NoMercyLabs\nomnomzbot-docs\src\content\reference\en\code\sdk-chat-music-voice.mdx
Reviewed-SHA: e3a379fc6ffbb4b3

Reader: a streamer or script writer new to the SDK.
Read before this page: `sdk-script-basics.mdx`, in full, including "One rule for a bad value" (lines 184-195).
Judged: the current text, full sha256 e3a379fc6ffbb4b39dc6186976600c2db7dfb677723ccce18207503fe282f5ea.
The older review in this folder (Reviewed-SHA d7a276523ace36cf) judged an older text. Its line numbers do not match this text, and it is replaced.

## Blocking

None.

## One rule check

Each outcome sentence on this page was checked against the four rule rows of "One rule for a bad value".

- Empty text to `chat.send` (line 35): `invalid_argument`, the script goes on. Matches row 3.
- A name that matches no viewer, in `speak` (line 130), `getVoice` (line 175) and `setVoice` (line 182): `not_found`, the script goes on. Matches row 4.
- `setVoice` with `userIdOrLogin` left out (line 181): the run stops. Matches row 1.
- Left-out optional values, `speak` `voiceId` and `asUser` (lines 121, 124), `setVoice` `voiceId` (line 180), `getVoice` `userIdOrLogin` (line 173), `listVoices` `provider` and `locale` (line 188): skipped, normal behavior. Matches row 2.
- `speakSequence` (lines 158-168): a left-out or `null` list, and a part without text, do not stop the run. This differs from row 1. The page names it as the exception (lines 21 and 158), and the rule allows a named exception ("The page of a call names it when the call is an exception", `sdk-script-basics.mdx` lines 186-187). Not a contradiction. The verdict does not turn on it. See note 1.
- `setVoice` with an unknown voice (line 183): gives `false`, the script goes on. The rule's row 3 names `invalid_argument`, and this page names no code. The script outcome agrees. See note 4.
- "unknown value" (line 20): the rule has no row for an unknown value. See note 4.

## Notes (not blocking)

1. The `speakSequence` exception is wide. The parameter table (line 151) marks `text` as "Required.", and line 159 says "The list is required". A reader who has just read the one rule will expect a stop. Suggested text for line 151: "Required. A missing one does not stop the run, see below."

2. Density. These paragraphs are over three sentences. Each count is a sentence count, with an approximate word count.
   - Lines 126-130 (5 sentences, about 77 words): "The line speaks in the channel's one bot voice, unless you set `asUser`." / "Set `asUser` to `'viewer'` when the line holds the words of the viewer who started the script." / "A login or an id reads the line in that viewer's saved voice." / "Use it only for that viewer's own words." / "A name that matches no viewer is a failed call ...". Suggested split: a blank line after line 127.
   - Lines 179-183 (5 sentences, about 74 words), the `setVoice` paragraph. Suggested split: a blank line after line 180.
   - Lines 199-203 (5 sentences, about 61 words), the "Speak, then post" paragraph. Suggested split: a blank line after line 200.
   - Lines 172-175 (4 sentences, about 50 words), the `getVoice` paragraph.
   - Lines 158-161 read as three sentences and a lead-in line ending in a colon.

3. Line 92: "with the rights of everyone" does not say what the rights are, so the reader cannot tell what happens to the request. Line 93: "A music service that the channel limits to a higher role refuses it" names the wrong subject. The limit is a channel setting for song requests, not a music service. Name the setting, and say what the viewer sees when the request is refused. This is where the reader was least sure of the outcome.

4. Line 20 says "unknown". Line 183 says a voice that is not known gives `false`, with no code. The rule names `invalid_argument` for a value the bot cannot use. Either name the code on line 183, or drop "unknown" from line 20 and say which row applies.

5. Line 142, the table cell "0 for a test run, or for a line that waits for approval." The reader does not know what a "line that waits for approval" is, and this page does not say. This is where the reader was lost. Either explain it in a short clause, or link to the text-to-speech page at that point.

6. Re-teaching. Line 18 ("the bot adds the grant when you save code that names the call") and the grant sentence on line 92 restate the grant mechanism that `sdk-script-basics` owns (ledger: "script grant"). One short clause is acceptable. A link to Script basics at the same point is enough.

7. The one bot voice appears three times on this page: line 25, line 126 and line 217. The ledger gives this concept to other pages too. Keep line 25, and cut or shorten the other two.

8. Line 68 (table) and line 99 show the grant key `actions.invoke:play_track_once`. `docs-work/page-conventions.md` says an action key never appears on a page. This is a grant key that carries an action type, and `sdk-script-basics.mdx` line 145 shows the same string. The owner should decide which convention governs it. I did not treat it as blocking.

9. The example at lines 205-215 has no pointer to where a script is written. The Scripts page (`/reference/code/scripts`) is on the map (line 123). Add a link under "Before you start". The example uses `const`, `if` and semicolons without teaching them. That is acceptable here, because the page does not claim that the reader needs no coding skill. The blank lines between steps are correct (lines 206-214).

10. Terms used before the page explains them: "chat trigger" (line 46), "pipeline action" (line 99) and "overlay" (line 116). A reader new to the SDK may know them from other pages. Link each one the first time it appears.

## Checks run on this text

- Banned and forbidden words, searched case-insensitively: "NoMercyBot", "open source", "AGPL", "GPL", "MIT", "PolyForm", "licence", "license", "will", "soon", "planned". None found.
- British spellings: "colour", "behaviour", "favourite", "cancelled". None found.
- Hosting or paid-plan words: none on the page, so the hosting marker is not needed.
- Draft label: present in the title (line 2) and in the callout (lines 10-12).
- Links: `/reference/code/sdk-script-basics`, `/reference/audio/text-to-speech` and `/reference/music/music-player` are each on the map (lines 125, 80 and 78).
- Bot voice: the page says the bot speaks in one voice (lines 25, 126, 217). A viewer's own voice is used only when `asUser` is set to a viewer, for that viewer's own words (line 127-129). No second bot voice is described.
- Headings: each starts with a verb or names a thing in plain words.

## Voice

The page reads as one voice with the pilot page, `commands/create-a-command.mdx`. Both use short sentences, tables for parallel facts, and the bot as the actor. The pilot uses "you" in its steps. This catalog page uses "you" only in a few sentences, which fits its tier.

## Where I got lost

- Line 92, "the rights of everyone" (note 3).
- Line 142, "a line that waits for approval" (note 5).
