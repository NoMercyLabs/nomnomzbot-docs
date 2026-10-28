# Reader review: src/content/reference/en/audio/voice-triggers.mdx
Verdict: PASS
Reviewed: src/content/reference/en/audio/voice-triggers.mdx
Reviewed-SHA: 1001f86c0b45231a

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
