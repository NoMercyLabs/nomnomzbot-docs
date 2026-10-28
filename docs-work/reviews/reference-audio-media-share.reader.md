# Reader review: src/content/reference/en/audio/media-share.mdx
Verdict: PASS
Reviewed: src/content/reference/en/audio/media-share.mdx
Reviewed-SHA: 9c827efc69e9365a

Round 4. Whole page read as rendered. No elided snippets. The `::Troubleshooting` block renders as a symptom and a fix.

The round-3 blocking finding is closed. Lines 154-156 now say what the Media playback step can do in plain words, and link to the Pipelines page for setup. The three over-long paragraphs are split (lines 6-10, 46-50, 118-125).

Blocking findings: none.

Notes (do not decide the verdict):

- [line 58] Example URL ends in `...`. The reader can see it is a placeholder, so this is a style point.
- [line 7] "Viewers share a Twitch clip or a YouTube video, and the bot puts it in a queue." Two clauses joined by a comma. Two sentences per page-conventions.
- [line 17] Four rights in one sentence. A short table of right and default would scan faster.
- [line 17] and [line 152] say the same default again. Keep one.
- [line 101] Four row fields in one sentence. Table candidate.
- [line 139] Four card parts in one sentence. Table candidate.
- [line 42] Default "20" has no unit. Write "20 items".
- [line 64] "pipeline" is first named at line 59 with no link. Link it at first use.
- [line 65] "URL field" is not in bold. Labels are bold per page-conventions.
- [line 87] "A refused item costs the viewer nothing." The page also uses "rejected" for a moderator's Reject (line 110). Name the two terms once so they do not look alike.
- [line 155] "play an approved item at once" does not name the control the reader clicks. The Pipelines page covers the step.
- [line 164] The fix says "Choose **Set up in OBS**". The page does not show where that button sits. The OBS page covers it.
- Voice: sentence-level voice matches the pilot page, `src/content/reference/en/commands/create-a-command.mdx`. No voice difference found.

Density:

- Paragraphs over three sentences: none. The longest now is lines 6-8 (three sentences).
- Sentences with two ideas:
  - Line 7 (comma-joined clauses, see above).
  - Line 134: the item moves to History as rejected, and a viewer who paid gets the refund.
  - Line 130: the item moves to History as skipped, and a viewer who paid gets the refund.
  - Line 111: the item moves to History, and a viewer who paid gets the refund.
- Parallel facts that should be a table: line 17 (four rights), line 101 (four row fields), line 139 (four card parts).

Where I got lost:

- Line 155: I could not tell which step field sets "play a finished item again" without opening the Pipelines page. The link covers it, so this is a note.
- Line 30: "The values stay in the panel" does not tell me whether Save worked. I could not see a confirmation.
- Line 147: "Place in the item" does not say what kind of control it is. Slider, field or button?
- Line 65: I could not match "URL field" to a label in the Submit media step.

Not checked: the obs-browser-source, rewards and built-in commands pages were not opened. Judging them was not needed beyond their listed ownership. Link targets were not checked against docs-work/map.md.
