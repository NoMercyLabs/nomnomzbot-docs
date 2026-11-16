# Current independent reader review

Verdict: PASS
Reviewed: src/content/reference/en/audio/voice-triggers.mdx
Reviewed-SHA: a69b74e672cae24beb5defc1dfec25073de7efd1f7578b0dc8e456cd50d2727c
Reviewed-SHA256: a69b74e672cae24beb5defc1dfec25073de7efd1f7578b0dc8e456cd50d2727c
Reviewed-Date: 2026-11-05
Reviewer: independent media-section reviewer
Product: 54da8b6318de63b5205a0ff8db35e0b9045dd959 plus preserved current music UI edits

The listener/count/sticker steps are separated so readers can verify recognition before presentation. The substring example and cooldown explain unexpected counts; transcript storage and the secret listener link are explicit. The missing supplied-alert settings path is documented without inventing a workaround UI.

The full page was read with adjacent navigation and related links. The owner's natural explanatory style governs: no Atlas sentence caps, pilot imitation or rigid article template was imposed. No substantive reader finding remains at this hash. Combined build, rendered-output and link/frontmatter checks belong to the lead's separate validation.

Report: docs-work/overhaul/review-automation-media-integrations.md.

## Historical evidence

Older hashes and verdicts below are retained for history and are not the current review.

# Reader review: src/content/reference/en/audio/voice-triggers.mdx
Verdict: PASS
Reviewed: src/content/reference/en/audio/voice-triggers.mdx
Reviewed-SHA: c319979c7d30b4bf

Round 2. Assumed page: `text-to-speech` (`src/content/reference/en/audio/text-to-speech.mdx`). This page links to it at L11 and does not re-teach it. Also read: `src/content/reference/en/overlays/widgets-and-alerts.mdx` (for the **Alerts** kind, L31-44) and `set-up-overlays.mdx` (for the **Settings** panel and **Save settings**). Read as a file; no includes or snippet directives.

Round 1 blocking finding (the sticker step named an event the reader could not find) is cleared. L98-104 now give the three steps: open the **Alerts** overlay on the **Overlays** page, add **Voice trigger** to **Alert types** in **Settings**, choose **Save settings**. Round 1 notes on the tab and window wording (L25/L29), the overlay key (L41) and "checked against your words" (L58) are also fixed.

## Blocking findings

None.

## Notes (do not decide the verdict)

- [L102] "add **Voice trigger** to **Alert types**" does not say how to add: a list to tick, or a field to type into. The reader can find the control, so this is style only. Say "tick" or "choose" if that is what the control does.
- [L104] "The editor shows "Saved.", and open sources reload." The Settings panel on `set-up-overlays.mdx` is called the panel ("The panel shows "Saved."", L121-ish). Use the same word.
- [L98] The **Alerts** overlay is named the same as the widgets page's **Alerts** kind. The reader is not told that the overlay is one of the built-in overlays. Set-up says built-in overlays carry a **Built in** badge; one short clause would help. Not checked in the product.
- [L57-58] "the bot only looks for a trigger word in each phrase, and does not store the phrase." Two clauses joined by "and". Two sentences by the conventions. Style only.
- [L21] "allow a VIP only when you trust them with it." Clear. No action.

## Density

Paragraphs over three sentences: none. The largest block between blank lines is L40-41 (3 sentences) and L86-88 (3 sentences).

Sentences with two ideas or two clauses:
- L57-58 (see the note above).
- L30 "The listener opens in its own small window of the same browser, with the title **Voice Listener**." (place and title; acceptable.)

Parallel facts: the listener message table (L46-51), the field table (L77-82), the editor facts table (L124-128) and the header table are tables.

## Voice against the pilot

Compared with `src/content/reference/en/commands/create-a-command.mdx`, sentence voice is close: active verbs, "you", short sentences, results named (L32, L70, L104). The sticker steps now name the control and the result, which matches the pilot's step style.

## Where I got lost

1. Alert types (L102): I would look for a list to tick or a field to type in. The page does not say which.
2. Settings (L104): I expected the word "panel" here, as on the set-up page. Small, but it made me pause.

Nothing else. The tab/window, overlay key and "checked against your words" points are now clear.
