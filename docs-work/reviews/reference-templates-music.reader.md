# Reader review: src/content/reference/en/templates/music.mdx
Verdict: PASS
Reviewed: C:/Projects/NoMercyLabs/nomnomzbot-docs/src/content/reference/en/templates/music.mdx
Reviewed-SHA: cc69fce89be90a96

Read as a streamer who does not code, using the page as it stands, plus the overview and the variables page it links to.

What I tested:
- Find a helper: `{music.now.title}` (line 31) and `{music.queue.length}` (line 44) are each found in one look. Each part has its own heading (now playing, the queue, history, settings). The row count of 54 matches the front matter.
- Use a helper: `{music.now}` gives `Song A by Artist A` (line 17). `{music.queue.list:3}` gives a numbered list of three songs (line 45). `{music.now.bar:5}` gives a five-cell bar (line 20). Each example is clear from its row alone.
- The target note on the queue table (line 55) sends the reader to the target helpers page, and the example `!queue @someviewer` shows the form.
- The intro names the page's helpers (`{music.*}`, `{track*}`, `{playlist*}`), and the rows exist.
- Every helper in the text is in backticks with braces. No table cell is broken.

Findings (none blocks a reader):
- [line 6] The intro lists `{track*}` and `{playlist*}` with an asterisk and no dot. The rows are `{track_name}` (line 34) and `{playlist_id}` (line 33). Name the two rows, as the other pages do with a full name, so the intro matches the table.
- [lines 43, 45 and 69] "the place is the argument" and "the number of songs is the argument" use a code word. The overview calls it "input" (overview line 30). Change "argument" to "input" on all three rows.
- [line 46] `{music.queue.mine.code}` says "to name it in !wrongsong". The page does not say what to type after the command. The built-in commands page (src/content/reference/en/commands/built-in-commands.mdx line 84) and the song requests page (src/content/reference/en/music/song-requests.mdx lines 44-45) show `!wrongsong` with the queue number. Say whether the code works in the same place. The fact-check lane must confirm this; I did not check the source.
- [line 23] "for if and switch": "switch" is used with no link. Link the condition helpers page (overview line 63 names it).
- [line 20] The "What it gives" cell has two sentences and 36 words. The first says what the bar is, and the second adds the width option and its default. "Bare bar" and "cells" are not explained. Move the width note under the table, with one example, and explain "cell" in one word.
- [line 34] `{track_name}`: "the track that was added" does not say when it has a value. Say which trigger it fills in, as the other rows say what they read.
- [line 65] `{music.favorite.outcome}`: "none" is in the list "queued, none, or unavailable" with no meaning. Say what "none" means for the viewer.
- [line 80] `{music.repeat}`: "context" is used with no meaning.
- [line 11] "Each row is its own example" is a sentence about the page. Keep it short or move it to the page notes.

Same voice: the sentences match the overview and the variables page (the actor first, the result stated as a checkable value).
