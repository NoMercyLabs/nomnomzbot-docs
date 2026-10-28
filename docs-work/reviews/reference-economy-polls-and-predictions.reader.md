# Reader review: C:\Projects\NoMercyLabs\nomnomzbot-docs\src\content\reference\en\economy\polls-and-predictions.mdx
Verdict: PASS
Reviewed: C:\Projects\NoMercyLabs\nomnomzbot-docs\src\content\reference\en\economy\polls-and-predictions.mdx
Reviewed-SHA: f3d9519e6a862755

Reader: no code knowledge. Read as a streamer who has read only the Dashboard tour (the one page in Assumes). Ledger checked: poll and prediction are owned here; channel role is owned by Permissions; home page and sidebar are owned by the tour and only linked.

Blocking findings: none. Every step names its outcome, or the table shows it.

Density: no paragraph runs over three sentences. Parallel facts (poll fields, prediction fields, Show choices, status words) are tables. No concept is re-taught from another page.

Notes (not blocking):

- [lines 82, 93, 108] "chat poll" / "the bot's own chat polls" is used with no definition. A reader cannot tell how a chat poll starts or what closes it, so they cannot tell where those History cards come from. If another page owns chat polls, link it at first use. If none does, this page must say how one is made.
- [line 70] "Details opens the same dialog" has no clear referent. Line 58 says "Pick the winner" opens a dialog, but the page never names it. Name that dialog once, then say Details opens it.
- [lines 56 and 70] "Lock predictions" (step 5) and "Lock prediction" (in Details) are two near-identical labels for one action. Use one spelling, copied from the dashboard's en.json.
- [lines 49 and 20] The Polls page button is "Prediction" while the poll button is "Start a poll". Line 112 says "Start a prediction" for the home page. Check the Polls page label against the dashboard text.
- [lines 58-60] Step 6, "Choose Pick the winner", does not say where that button sits. Step 5 names the Now panel, so say the button is there too.
- [lines 21-22] Step 4 turns on "Let viewers vote with channel points". The table (line 32) shows a "Channel points per vote" field that then counts. The step does not say that field appears. One clause would close it.
- [lines 12 and 17] Role names are plain text, not bold, and have no link. The pilot page bolds the roles and links Permissions at first use. The ledger gives channel role to Permissions, so link it there.
- [line 112-114, home page] The page says the home page has Start actions. It does not say whether End poll, Lock, Resolve or Cancel also work from home. A reader cannot tell. The fact check should settle this, and the page should name each surface.
- [line 97] "The page remembers your Show choice." A reader cannot check this. It belongs to the fact check.

Voice against the pilot page (create-a-command): same. Both use "Choose **Label**." steps, outcome sentences after each step, a table for labels with defaults, and the same Troubleshooting and Related pages blocks. The only difference is the bold on roles noted above.

Rules: no NoMercyBot spelling; no license name; no hosting or paid-plan text, so no hosting marker is needed; American spelling ("canceled"); no emoji; no code blocks.
