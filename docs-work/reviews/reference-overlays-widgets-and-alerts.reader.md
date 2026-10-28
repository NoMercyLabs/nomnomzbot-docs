# Reader review: src/content/reference/en/overlays/widgets-and-alerts.mdx
Verdict: PASS
Reviewed: src/content/reference/en/overlays/widgets-and-alerts.mdx
Reviewed-SHA: 0a0e351d3cf32089

Round 4. Assumed page: `set-up-overlays` (read: `src/content/reference/en/overlays/set-up-overlays.mdx`, L1-60 and its "Copy an overlay" section at L145). Read as a file; the page has no includes or snippet directives.

Round 3 PASS is superseded by this round. Add a widget now starts from **Duplicate** on an overlay that already has code, then **Edit code** on the copy.

Anchors checked: `#copy-an-overlay` (set-up-overlays L145, "## Copy an overlay"), `#change-the-code` and `#test-an-event` (set-up-overlays, unchanged).

## Blocking findings

None.

Step 1 matches the set-up page: "Choose **Duplicate** at the bottom of an open overlay. The copy opens at once" (set-up-overlays L147-148). Step 2 names a result, the compile message (L17). Step 3 links to the OBS page.

## Notes (do not decide the verdict)

- [L15, step 1] "The copy opens with the same code." The set-up page's "Copy an overlay" section (L145-149) says only that the copy opens at once. It does not say the code is copied. I did not check that in the product (reader scope), so this claim is not checked. It is the only thing step 1's outcome rests on.
- [L16, step 2] "change its code" does not say what to change. The copy already runs, so a reader can keep it as is. One sentence saying so would help a reader who stops at the copy.
- [L18, step 3] "Add the overlay's address in OBS" does not say where to copy the address from. `set-up-overlays.mdx` names the button **Copy browser source address** in the open overlay. A short pointer would close the gap.
- [L49-54, "Where an alert comes from"] Four sentences in one paragraph (about 44 words). The limit is three. Split it.
- [L6] "This page shows how to add a widget, test an alert, preview a change and replay an alert." Sentence about the page, not the subject. Remove it.
- [L21] "The **Gallery** entry in the sidebar shows a **Coming soon** page." Gives no purpose.
- [L39] "Feather" is not defined on this page. The three names are shown as code, not as places the reader sees them.
- [L63] "The code editor that **Edit code** opens has a fire bar." The control is not in bold and its place in the editor is not given. The section gives no step to take.
- [L27] The kind badge is not listed among the badges of an open overlay in `set-up-overlays.mdx` (its L78-79 list **Built in** and **Edited** only).

## Density

Paragraphs over three sentences: one, L49-54 (4 sentences, about 44 words). Quoted above.

Sentences with two ideas or two clauses:
- L14 "Open that overlay and choose **Duplicate**, as Copy an overlay explains." (action and link; acceptable.)
- L19 "Add the overlay's address in OBS, as OBS browser source explains." (action and link; acceptable.)
- L64 "The fire bar sends the same sample events as **Test**, but only to the preview in the editor." (two clauses joined by "but".)
- L87 "Its replay shows the gifter first, then each recipient, in the original order." (order and who.)

Parallel facts: the count table (L78-83) and the message table (L89-93) are tables.

## Voice against the pilot

Compared with `src/content/reference/en/commands/create-a-command.mdx`, sentence voice is close: active verbs, "you", short sentences, results named. Steps 1 and 2 name a visible result. "Preview a change" still names no visible result.

## Where I got lost

1. Step 1 of Add a widget: I was told the copy has the same code. The set-up page does not say so, and I cannot confirm it from the page.
2. Step 2: I do not know what to change in the code, or whether I must change anything.
3. Step 3: I did not know where the address is copied from.
4. "Preview a change": I could not find the fire bar.
5. "Feather": I know the three names now, but not what a feather is.
