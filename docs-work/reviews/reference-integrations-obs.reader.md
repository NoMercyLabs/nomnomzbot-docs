# Reader review: src/content/reference/en/integrations/obs.mdx
Verdict: PASS
Reviewed: src/content/reference/en/integrations/obs.mdx
Reviewed-SHA: 12c8cc2e868be8b3

Round 2, read as a new reader. Read the whole page, not the product source. Assumed page: overlays/obs-browser-source.mdx. This page does not re-teach the overlay link.

## Round 1 findings, status

- Refresh trigger (old line 155 vs obs-browser-source.mdx line 120): fixed. Lines 160-161 now name one trigger and its two conditions. The shorter wording on obs-browser-source.mdx is not a finding here.
- "browser source bridge" used before its definition (old line 82): fixed. Line 86 defines it on first use.
- "did not answer the page" (old line 90): fixed. Line 95 names the state request.
- Groups not located (old lines 74-76): fixed. Line 76 places the switches under **OBS events to listen to** in the **OBS connection** dialog.
- Two-idea sentence at old line 115: fixed. Lines 119-120 split it.
- Old line 8 two-idea sentence: fixed. Lines 8-9 split it.

## Findings (decide the verdict)

None.

## Notes (do not decide the verdict)

- [lines 39-40] Step 1 tells the reader to turn the OBS WebSocket server on, but gives no visible result on the OBS side. The reader cannot see that it worked until step 2 or 3 succeeds.
- [lines 50-52] The paragraph has 3 sentences. The third sentence (button label) is a separate idea. Within the limit.

## Density

- lines 6-9: 4 sentences, split across two paragraphs with a blank line between them. Within the limit for each paragraph (lines 6-7 has 2 sentences, line 8-9 has 2 sentences).
- lines 50-52: 3 sentences, within the limit.
- lines 73-78: 2 sentences and 3 sentences in two paragraphs. Within the limit.
- lines 84-89: 3 sentences in the paragraph at lines 84-86. Within the limit.
- lines 118-121: one paragraph of 4 sentences, over the three-sentence limit. Not a blocking finding under this run's rule. Fix: split it after line 120, or move the dialog sentence into a table row.
- Parallel facts: held in tables or bullets. No prose run of four parallel facts found.

## Voice against the pilot (commands/create-a-command.mdx)

Sentence-level voice matches. The actor leads, results follow each step, and the page speaks to "you". Same person likely wrote both.

## Where I got lost

Nowhere blocking. Step 1 (OBS side) has no visible result, as noted above.
