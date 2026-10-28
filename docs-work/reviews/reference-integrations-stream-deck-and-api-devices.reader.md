# Reader review: src/content/reference/en/integrations/stream-deck-and-api-devices.mdx
Verdict: PASS
Reviewed: C:\Projects\NoMercyLabs\nomnomzbot-docs\src\content\reference\en\integrations\stream-deck-and-api-devices.mdx
Reviewed-SHA: 6050de460307b60f

Reader: a streamer who does not write code. Pages read first (map row, Assumes column): /reference/getting-started/dashboard-tour only. Links to, not read first: /reference/commands/pipelines. Ledger says the dashboard-tour page owns the sidebar and dashboard layout. This page does not explain either again. The page owns "api key" and "paired device" and does not re-teach them.

Scope of this review: the source file as it stands now (sha256 6050de46...). The page uses the site's own `::Troubleshooting` markers. Those are the site's component syntax, the same as the pilot page. Rendered output was not checked.

## Blocking

None. Every step can be followed to a stated result.

## Notes (not blocking)

Approval page path has no steps.
- [lines 87-89] "A device can also open an approval page in your browser." The reader is not told how the page opens or what to click first. The main approval path (lines 83-85) is complete, so no required step is missing. Cost: a reader who wants this path has no start point.

Rotate has no copy step.
- [lines 99-100] Step 2 says the Key for dialog "shows the new key once." It does not say to copy it or paste it into the tool. The Make a key steps (line 28) do say so. Cost: a reader can close the dialog and lose the new key, which line 137 says cannot be shown again.

Button names are not the dashboard labels.
- [line 97] "Choose the rotate button on the key's row." [line 108] "Choose the trash button on the key's row." Neither name is the label the dashboard shows, and no icon is described. Cost: the reader must guess which icon is meant.

Revoke step 1 gives no result.
- [line 108] The reader is not told that a dialog opens. Step 2 (line 109) assumes it. Cost: the reader cannot tell whether step 1 worked.

Allowed column words need a source check.
- [lines 51, 56-61] The table does map the short words to the labels (invoke = Start pipelines, and so on), so the mapping is present. The words themselves look like internal names. Page conventions (line 59, line 152) forbid action keys on a page. The reader cannot check whether "invoke" is the dashboard's own displayed word. Cost: if it is not, the column shows a key name. Fact review must confirm it against the dashboard's en.json.

Which code does "Make a new code" mean?
- [lines 119-121] The troubleshooting fix says "Make a new code and type it in again." The page does not say which panel half this is. Cost: the reader must work out whether to use Make code or Approve device.

Density and voice: comma-joined clauses.
- [line 91] "A code the device shows works for ten minutes, and it works once." Two clauses joined by a comma. Page conventions (line 43) say these are two sentences.
- [line 128] "A device may try five codes a minute, and so may your account." Same pattern.
- [line 25] "Pick a day in **Ends on**, or leave it empty for a key that does not end." Two choices in one sentence.

Paragraph over three sentences.
- [lines 127-130] Troubleshooting block "Pairing says there are too many attempts." 4 sentences, one paragraph (about 40 words). Page conventions (line 45) cap a paragraph at three sentences. Split after line 128, or drop one sentence.

Key expiry and renewal.
- [lines 92-93] The reader is told the paired key "ends 30 days after pairing," then that a connected device "renews its own key." The reader cannot tell whether the Ends column changes. Say what the key list shows.

Key with no allowed action.
- [line 42] "A key needs at least one allowed action." The page does not say what the dialog does when none is checked. Name the result.

Name reuse.
- [line 20] "Each key in the channel needs its own name." The page does not say what happens when a name is reused. Name the result.

"Connected" is unclear.
- [line 38] "Receive the channel's public events while it is connected." The reader cannot tell whether "it" is the tool or the channel. Name the thing.

"Public events" is undefined.
- [line 38] The page does not say which events count as public. The reader cannot check this.

Roles: no link to the permissions page.
- [lines 12-13] The page names **Editor** and **Broadcaster**. The pilot page (`commands/create-a-command`, line 18) links the roles to the permissions page at first use. This page does not, and its Related pages list (lines 142-146) omits it.

Bot voice: refer, and link the owner.
- [line 39] "in the channel's one bot voice." The ledger gives bot voice to /reference/getting-started/bot-account. This page is not on the ledger's may-refer list for it. A short clause is fine. Link the owner at first use.

Sign-in: refer, and link the owner.
- [line 89] "log in to the dashboard." The ledger gives sign-in to /reference/getting-started/sign-in. This page is not on its may-refer list. Link it at first use.

Plain words.
- [line 30] "fingerprint" is a word a non-coder may not know. The next sentence gives the result, so the reader can follow. A plainer phrase would be safer.
- [line 37] "OBS scenes and state" uses OBS with no link. The ledger gives OBS to /reference/integrations/obs.
- [line 69] "two halves, one for each direction." "Direction" is not defined. The headings make the meaning clear.

Optional: a table for the device code facts.
- [lines 75, 91-93] The code lifetimes, the use limits, the key name and the end date sit in prose. A small table would let the reader scan them.

## Checked and fine

- Density: no other paragraph is over three sentences. The densest blocks are lines 6-8 (3 sentences), lines 30-32 (3), lines 87-89 (3), lines 91-93 (3), lines 119-121 (3) and lines 136-138 (3).
- Headings: plain words, sentence case, no colon, no action key, no code span.
- No NoMercyBot spelling. No license name. No "open source". No hosting or price claim, so the hosting marker is not needed here. American spelling: no British spelling found.
- Parallel facts are tables: the Allowed actions table (lines 34-39), the word table (lines 56-61) and the key list table (lines 48-54).
- Voice: matches the pilot page. Short sentences, imperative steps, the result on the line after each action, bold labels, and a Troubleshooting block for silent failures. The same person could have written both.
- Labels: the **Log in first** label is bold (line 89).
- Every step with an action has a stated result, except the two noted above (line 108, lines 99-100 for the copy).

## Prior verdict

The file held a FAIL verdict stamped with a different digest (a27db3bb2c03b55d). That verdict judged an older text. This review judges the current text fresh. Two of its points do not hold on the current text. The Allowed column does map the words to labels (lines 56-61). The **Log in first** label is bold (line 89). Its assumption that the pipelines page is read first is also not in the map row, where pipelines is a Links to page.

## Verdict basis

No step is blocked. Each step a non-coder needs has a stated result, and the required approval path (lines 83-85) is complete. The findings above are for the writer and the fact-checker. The Allowed column words (lines 51, 56-61) need a fact check against the dashboard's own text, because the reader cannot check them.
