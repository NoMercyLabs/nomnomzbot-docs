# Reader review: src/content/reference/en/audio/text-to-speech.mdx
Verdict: PASS
Reviewed: src/content/reference/en/audio/text-to-speech.mdx
Reviewed-SHA: ddc3f6d41d1ab8c6

Round 7, read as a new reader. Read the whole page as rendered (no directives expanded). Lines 35-36 now say a **Read aloud (TTS)** step sets the text it reads, and seven named settings on this page still apply to it (checked, lines 35-36). Line 189 now says each speak place goes through the same settings as a speak step, and points to "Which voice speaks" (checked, lines 186, 189). The voice question no longer appears: no broadcaster voice, no second voice for bot speech. Assumed pages checked: commands/pipelines.mdx (line 298 names the step **Read aloud (TTS)**), commands/built-in-commands.mdx (line 78 `!voice`), automation/rewards.mdx.

## Findings (decide the verdict)

None. No wrong fact, no step a reader cannot follow, and no undefined term at first use was found on this read. The seven settings named on line 36 are each defined on this page (Read messages aloud line 75; Who may be heard line 78; Minimum bits line 96; Cooldown line 80; Maximum characters line 79; Censor profanity line 95; pronunciation rules lines 119-139), so no name is left undefined.

## Notes (do not decide the verdict)

- [line 36] Seven parallel settings in one sentence, as prose. page-conventions.md "Sentences and paragraphs" says four parallel facts are a table, never a paragraph. Style under the dispatch rule, but it is a convention miss: a short list would scan better.
- [lines 186 and 189] The page calls the same thing "a Read aloud (TTS) step" (line 35) and "a speak step" (lines 186, 189). Pipelines.mdx line 298 uses the label **Read aloud (TTS)**. Use one name, or say once that they are the same step.
- [line 34] "spoken in the channel voice by default" implies a setting that can change it, but the page names none for a command reply or event response. Style.
- [lines 38-42] Five sentences, 67 words, in one paragraph (see Density). Style only.
- [lines 18-21] Four sentences, 35 words, in one paragraph. Style only.

## Density

Rule: a paragraph is the text between two blank lines. Counts are for the page as rendered.

- Lines 38-42 (5 sentences, 67 words): "A viewer's own words, such as a reward's typed text, are read in the viewer's own voice. A viewer picks it in chat with !voice, as Built-in commands shows. A viewer with no voice of their own gets a random voice the first time their words are read. The bot picks an English voice, or one that speaks many languages, from the channel's provider. The viewer keeps that voice." Over the three-sentence limit.
- Lines 18-21 (4 sentences, 35 words): "The speech plays through the speaker overlay. Add it to OBS from Required overlays on the OBS page. OBS browser source shows how. The Speaker overlay row on the Overview tab opens that place." Over the limit.
- Lines 34-36 (3 sentences, 1 of them a seven-item list of 31 words, see Notes): within the sentence limit.
- Parallel facts: the tabs, the speaking settings, the message rules and the pronunciation steps are held in tables or numbered lists. Line 36 is the one prose run (see Notes).

## Where I got lost

- Whether **Read aloud (TTS)** and "speak step" are one thing (see Notes). The page reads as though they are, and that is the likely meaning.
