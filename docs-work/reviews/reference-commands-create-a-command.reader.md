# Current targeted reader review

Verdict: PARTIAL
Reviewed: src/content/reference/en/commands/create-a-command.mdx
Reviewed-SHA: 7f5c817af09246e2bf2b5ecd5a7c995d6a08180b2de197d8b2f92a1194705c6c
Reviewed-SHA256: 7f5c817af09246e2bf2b5ecd5a7c995d6a08180b2de197d8b2f92a1194705c6c
Reviewed-Date: 2026-11-06
Reviewer: final-learning editing author; self-review, not independent
Product: 2dfefbb0c393f439954d79b32ac11511678d7f44

The full article was read for editorial clarity. Source verification is limited to the claims below and the focused checks in docs-work/ecosystem-validation/final-learning.md. This is not an exhaustive factual PASS, independent approval, rendered-site review or live application test.

Speech delivery: server/src/NomNomzBot.Infrastructure/Chat/EventHandlers/ChatMessageHandler.cs:664-705 gates speech on SentToChat; server/src/NomNomzBot.Application/Chat/Services/ReplyTemplateRenderer.cs:38-65 returns no chat text for overlay-only/Nowhere. The clarification sits with the delivery controls and links to TTS setup.

## Preserved historical reviews

The earlier hashes, verdicts and claims below are retained as historical evidence; they do not approve this revision.

# Current independent reader review

Verdict: PASS
Reviewed: src/content/reference/en/commands/create-a-command.mdx
Reviewed-SHA: 7ffdf9aa691ef6bdf46f8cb8f5ac9350f8867c40c65b7da48031a10476346f62
Reviewed-SHA256: 7ffdf9aa691ef6bdf46f8cb8f5ac9350f8867c40c65b7da48031a10476346f62
Reviewed-Date: 2026-11-05
Reviewer: independent section reviewer

The article teaches trigger to response through a useful schedule command, then exposes reply kinds, matching, aliases and maintenance. Reference fields retain limits/defaults without forcing readers to absorb them before their first command.

The full page was read with the preceding/following navigation context and related links. This review applies the owner's explanatory, progressive-disclosure guidance; it does not impose Atlas sentence caps, pilot mimicry or fixed article headings. No substantive reader finding remains at this hash. Build/render/link checks are recorded separately by the lead reviewer.

Report: docs-work/overhaul/review-learning-commands-helpers.md.

## Historical evidence

The material below is retained as historical evidence; its older verdict is not the current review.

# Reader review: src/content/reference/en/commands/create-a-command.mdx
Verdict: PASS
Reviewed: src/content/reference/en/commands/create-a-command.mdx
Reviewed-SHA: b65485b206ca039e

Round 9. Assumes nothing (pilot). Read as rendered; the page has no includes. Blocking findings: none.

## Findings (blocking)

None. Every step names the control, and each step states a visible result. Every fact I could check on the page is consistent with the rest of the page.

## Notes (do not decide the verdict)

- [153-156] Four-sentence paragraph (4 sentences, 36 words): "Regex needs a pattern." / "If the custom prefix or the pattern is empty, Create command shows ..." / "It makes nothing." / "In the editor, Save changes stays off." -> Breaks the three-sentence cap in docs-work/page-conventions.md (Sentences and paragraphs). Costs scanning speed only. Split into two short paragraphs.
- [209-210] "its aliases" is used before "An alias is another name for a command." -> The reader meets the term one sentence before its meaning. Swap the order or define it in place.
- [250-252] Label "Move copies to system" with the outcome "Then every copy is removed for good." -> A reader cannot tell whether the channel command survives in the system list. The outcome is stated, so the step is followable. Consider naming the outcome in the label.
- [43, 76] "code script" appears in two table rows and is never explained. -> The reader learns only "a script from the Scripts page". A short clause or link would close it.
- [237] "catalog items" appears in the table with no explanation. -> A reader who has no economy page cannot tell what it covers.
- [229] Example text "Still used by 2 timers: …." contains an ellipsis. -> The reader sees a placeholder, not a sample. The sentence before it explains the list, so the meaning is clear. A visible name would make the example concrete.
- [83] "A reply is plain text with helpers (variables): names in braces that the bot fills in before it sends the line." (21 words, two ideas: the reply is plain text; helpers are braces) -> Split into two sentences.
- [257] "The bot can import ... only through its API." -> A non-coder reader reaches a dead end with no next step. Page-conventions forbids developer routes on a streamer page. The fact itself is for the fact-check file, not this review.
- Voice: sentence-level voice is consistent across the page: active, present tense, second person, the bot is the actor, results are stated ("The dialog closes and the new command opens in the editor, switched on."). No second writer is detected.

## Density

Paragraphs (text between two blank lines) over three sentences:

- Lines 153-156, 4 sentences, 36 words: "Regex needs a pattern. If the custom prefix or the pattern is empty, **Create command** shows "Fill in the custom prefix or the regex pattern you picked." It makes nothing. In the editor, **Save changes** stays off." (Noted above; not a verdict finding.)

Every other paragraph has three sentences or fewer. Lines 91-93, 116-118, 124-126, 227-229 and 281 sit at exactly three.

Sentences with two ideas: line 83 (above). Line 78 ("A reply goes to Twitch chat by default, in the channel's one bot voice.") is one idea with a default clause and reads cleanly.

Parallel facts that should be a table: none found in prose. The Kind table (lines 231-237), the Match table (146-151), the What-it-does table (38-42) and the cooldowns table (171-177) already hold them.

## Where I got lost

I did not lose the thread. Each flow reads in order and ends with a visible result. Three places made me pause:

- Lines 250-252: "Move copies to system" then "Remove copies" then "removed for good". I checked whether the channel command or the system command survives. The page says the system command answers, so I accepted it.
- Lines 209-210: "aliases" before its meaning.
- Lines 43 and 76: "code script" with no meaning beyond the Scripts page.

Checked this run: the page file (sha256 first 16 hex b65485b206ca039e, computed with Get-FileHash), docs-work/page-conventions.md, and the reader role at the plugin path given in the brief. Not checked: the link targets (the brief says a link target I cannot read is not a finding), and every product fact on the page (that is the fact-check file's job).
