# Reader review: C:\Projects\NoMercyLabs\nomnomzbot-docs\src\content\reference\en\code\scripts.mdx
Verdict: PASS
Reviewed: C:\Projects\NoMercyLabs\nomnomzbot-docs\src\content\reference\en\code\scripts.mdx
Reviewed-SHA: 69cba5dd02898fc2

Reader: a streamer who does not write code. Read before this page: /reference/commands/pipelines (Assumes). Page read in full, as stored. No include or snippet directive is on the page, so nothing was expanded.

Blocking findings: none. Every step names its control, and every step states its outcome, except the minor gaps below. The "Change the code" step (line 85) needs coding skill. The page does not claim that no coding skill is needed, so the brief rule does not make it blocking. It still needs the fix in finding 1.

Checks that passed:
- Namespace: no `NoMercyBot` spelling (grep, case-insensitive, no match).
- American English: no British spelling found (grep).
- Licence and hosting: the page names no licence, no paid plan and no hosting for others, so the marker is not needed. No emoji and no non-ASCII text.
- Draft label: present in the title (line 2) and in line 8, as the map requires.
- Density: no paragraph is over three sentences. Example: lines 6 to 8 are three sentences.
- Voice: close to the pilot page. "You make..." and "Choose **Create command**. The dialog closes and ..." (pilot lines 6 and 35 to 36) match "You write..." and "Choose **Create script**. The dialog closes and ..." (lines 6 and 31 to 32). I read it as one writer.

## Notes (style and clarity, not blocking)

1. Lines 84 to 85, "Change the code." Step 2 gives no outcome and no pointer. Line 6 says "You write small scripts", so a streamer will expect to know how. Add one sentence that names the coding skill needed, and link `/reference/code/worked-example` at this step. The worked example is only in Related pages (line 148).
2. Line 8 and line 84, "SDK". The term is used before anyone explains it: "the types of the SDK". Give one clause on what the SDK is, or link the SDK page on first use.
3. Line 24, "The broadcaster may raise this, or give it to one named person". A reader cannot tell what "raise" means here. The pilot page says it plainly (pilot line 20 to 21: "The Broadcaster may also let a VIP open the page."). Use the same form.
4. Line 15, "Open **Features** in the settings." The page does not say where the settings are. The pilot names the sidebar. Not checked: whether Features sits in the sidebar. Also add a link on first use, to `/reference/settings/features`. The ledger gives that page the feature switch.
5. Line 24, "Permissions settings page" has no link. The pilot links the roles to `/reference/settings/permissions`.
6. Line 35, "picks a number from 1 to a die size". A streamer may not know what "a die size" means. Name it, for example "a number from 1 to 6, as a die roll".
7. Line 79, "Each run stops after 8 s, 64 calls or 64 MB." The reader cannot tell what a "call" counts. Name it in one clause, or point to `/reference/code/how-a-script-runs` (the ledger gives it the script limits). Line 77 links that page, but not from this sentence.
8. Line 90, "That version runs from now on, and **Version** on the card shows its number." Two ideas in one sentence. Split it.
9. Lines 97 and 98. The sentence "A test run is a dry run. Nothing it does reaches chat." repeats line 97, "runs the script without real effects." It is one idea said twice. Keep one. The quotation marks also suggest dashboard text. Not checked: whether that text is on the dashboard.
10. Line 106, five parallel facts in one sentence: **Started**, **Chat**, **Effect**, **Console** and **Error**. Line 114 has five more: the error, the file, line and column, the **Steps**, the stop point and the **Log**. Both are table candidates. The words **Steps** and **Log** are never explained.
11. Line 109, "the button shows ... and comes back after a short wait." The reader cannot tell which thing comes back, or how long "short" is. Two ideas: the message and the return. Name the wait, or say when the button returns.
12. Line 116, "Each test run of this visit is listed under **This session**." The same thing has two names in one sentence. Use one name.
13. Lines 126 to 133, Copy. The page does not say whether the copy is switched on. Line 133 names the copy and its code only. The pilot states its copy's switch ("The copy starts switched off."). A reader cannot tell if the copy runs. This is a step with no stated state.
14. Lines 126 and 134 to 136, Duplicate and Delete. The page does not say where these buttons sit: on the row, on the card, or in the editor. Lines 83 and 122 say where Edit code and the switch sit.
15. Line 21 to 24, "Who can use this page" sits after the enable step. Pilot line 15 puts it second, before the main flow. Move it, or say why the reader needs the Features step first.
16. Line 3, the description lists create, edit, test, switch on and delete. It leaves out Duplicate, which the page covers at lines 126 to 133. Add it, or drop it from the body.
17. Line 14, "Custom Code" and line 16 "Automation" are labels in bold. Not checked: that the labels match `dashboard/src/views/dashboard/<area>/i18n/en.json`. That is the fact-check's job, not this review's.

## Where I got lost (the reader's own words)

- Line 24: "raise this". I could not tell what the broadcaster does.
- Line 79: "64 calls". I could not tell what counts as a call.
- Line 109: "comes back after a short wait". I could not tell what returns or when.
- Line 114: "the Steps" and "the Log". I could not tell what either one holds.
- Lines 133 to 134: after Duplicate I could not tell whether the copy runs.
- Line 84 to 85: after "Edit code" I could not tell what code to write.

These are not blocking. Each is a sentence I had to guess at, so each should be fixed in the next pass of this page.
