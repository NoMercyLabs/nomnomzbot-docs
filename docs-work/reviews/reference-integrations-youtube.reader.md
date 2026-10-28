# Reader review: src/content/reference/en/integrations/youtube.mdx
Verdict: PASS
Reviewed: src/content/reference/en/integrations/youtube.mdx
Reviewed-SHA: fe8ebcf75a0a81cd

Round 2. The page changed after round 1 (Reviewed-SHA e8b72ff83be299da, now superseded). I read the whole page again as rendered. Assumed page: `src/content/reference/en/getting-started/connect-platforms.mdx`. Pilot: `src/content/reference/en/commands/create-a-command.mdx`. Full sha256 of the current page: `fe8ebcf75a0a81cd5995da41c096cd702683d1ac6d38de8c41a0224b4cb01d45`.

Verdict basis (run rule: FAIL only for a wrong fact or a step a non-coder cannot follow): no blocking finding. Every step has a visible result. The page agrees with connect-platforms on the Connect flow (youtube.mdx:31-32, connect-platforms.mdx:37, 44), on who sees Connect (youtube.mdx:14-15, connect-platforms.mdx:23-24), on the four-platform panel (youtube.mdx:28, connect-platforms.mdx:94) and on the Connected and Not connected states (youtube.mdx:29, connect-platforms.mdx:92-93).

Round 1 items now fixed: the "refused" report sentence is gone (line 60-61 no longer has it). "Pipelines" is linked at first use (line 67). "Real counts" is gone and the dialog now says why the pipelines stop (line 67). Line 46-47 Details and Reconnect are unchanged; Disconnect is named in step 1 (line 65).

## Findings (not blocking under this run's rule)

- [line 41] "The row shows **as** and the account name." -> the reader still cannot tell what text is "as". Show the exact text the row prints.
- [line 52-53] The overlay is named as "a music player overlay in your streaming software" with no gloss. create-a-command.mdx:79 glosses "chat overlay" as "a browser source (a web page layer in your streaming app)". Use the same gloss here.
- [line 53] "That overlay tells the bot what it plays, and whether the video plays, is paused, has ended or failed." -> two ideas in one sentence (19 words). Split it.
- [line 6] "YouTube connects to the channel as a second stream platform, beside Twitch." -> "second" reads as a fixed order of two. Kick and X Live also exist (youtube.mdx:28). Write "another stream platform, beside Twitch".
- [line 7] "This page shows where the YouTube connection appears and what the bot does with it." -> a sentence about the page, not the subject.
- [line 59-61] The round 1 "actions that change your YouTube account" line (rating, playlists, subscribing) is gone. The page no longer says that those account actions need the YouTube connection. Not a reader finding: the reader does not hit it here. But it is a capability statement that was cut, so the page owner should confirm it is covered elsewhere (the music player page, or nowhere). Check, do not re-add without a source.

## Notes (do not decide the verdict)

- Voice against the pilot: sentence-level voice is close. The pilot uses "you" as the actor in procedures. This page uses "you" in the Disconnect steps and "A person who may change connections" (line 31) elsewhere. Align on "you" for what the reader does.
- Line 28 "It lists Twitch, Kick, YouTube and X Live." is four parallel names in one sentence. A list is enough.
- The overlay set-up is on the music player page (line 51 link). That page is planned. Not a finding.

## Density

- Paragraph lines 6-8: 3 sentences (at budget). Sentence at line 7 is about the page (see above).
- Paragraph lines 21-23: 3 sentences. Line 23 "When you accept, the window closes and the row shows **Connected** with the YouTube account name." is 16 words with two outcomes. Acceptable.
- Paragraph lines 27-29: 3 sentences. Line 28 holds four parallel names (see Notes).
- Paragraph lines 51-53: 3 sentences. Line 53 is 19 words with two ideas (see Findings).
- Paragraph lines 55-58 is a table, not prose.
- Paragraph lines 60-61: 2 sentences. Clear.
- No paragraph is over three sentences.

## Where I got lost

1. Line 41: I cannot tell what the row shows for "as".
2. Line 52: I do not know how the overlay gets into my streaming software from this page. I follow the link to the music player page. Not counted as a finding.
3. Line 65-67: clear. I know the dialog counts the pipelines and why.
