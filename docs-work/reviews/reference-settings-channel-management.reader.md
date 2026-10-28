# Reader review: C:\Projects\NoMercyLabs\nomnomzbot-docs\src\content\reference\en\settings\channel-management.mdx
Verdict: PASS
Reviewed: C:\Projects\NoMercyLabs\nomnomzbot-docs\src\content\reference\en\settings\channel-management.mdx
Reviewed-SHA: ae9d862ad9112f63

Read as: the page, the pilot page `commands/create-a-command.mdx`, the Assumes page `getting-started/dashboard-tour.mdx`, `docs-work/page-conventions.md`, `docs-work/ledger.md`. No product source was read. All points below are the reviewer's reading.

## Verdict basis

- No blocking finding. No line on the page contradicts another line.
- Every step can be followed on the page while the reader is on it.
- The one gap that may block a later return is item 1. The verdict stays PASS under the run rule, and the writer must settle it.

## Scan results

- Paragraphs: none has more than three sentences. Longest sentence: 17 words (lines 6 and 118).
- Elided snippets: none. The only directive, `::Troubleshooting` (lines 122-128), is read as its content.
- Assumes: nothing from dashboard-tour is taught again, except item 17.
- Voice: the same writer as the pilot. Actor is the subject, steps are "Choose ...", results are stated. No difference that the tier does not explain.
- Conventions checked: no license name, no action key, no numbered permission level, no source citation, no emoji, no name of a person, no `NoMercyBot`, no non-American spelling. The hosting marker is not needed: the page has no hosting, price or paid plan.
- Settled finding not raised: the Moderator, Lead moderator and Editor sidebar question.

## Where I got lost (in order of cost)

1. [lines 111-120] Bring a deleted channel back. The page does not say how a reader reaches a deleted channel later. Lines 111 and 118 assume the card is on screen. I could not tell where **Bring the channel back** is after the reader leaves the page. Fix: name the way in, once the writer confirms it.
2. [lines 38-40] Leave steps. "Read the two results it lists." is followed by two sentences. I could not tell whether those sentences are text in the dialog or what happens after the bot leaves. Fix: say "The dialog lists two results:" and name them, or state the results after the step.
3. [line 40] "The bot stops listening to your channel events, so event responses do not run." Two ideas in one sentence. The term **event responses** has no link and no earlier introduction. A reader who does not know the term cannot tell what stops. Fix: two sentences, and a link to `/reference/automation/event-responses` on first use.
4. [lines 82-84, 92-107] Delete step 3 tells the reader to read "the lines about what stops outside the bot". The six lines are only in a collapsed block. A reader who does not open it sees no consequence before **Delete channel**. Page conventions say important first. Fix: move the six lines into the main flow as a short table. Line 104 repeats line 84 ("Each line starts with a count.").
5. [lines 36 and 41; 53 and 58; 79 and 86] The dialog buttons have the same names as the card buttons: **Make the bot leave**, **Reset settings**, **Delete channel**. Steps 3, 4 and 5 do not say "in the dialog". A reader can press the wrong button. Fix: "In the dialog, choose **Reset settings**."
6. [lines 54 and 80] "The dialog **Reset the settings of** your channel name opens." and "The dialog **Delete** your channel name opens." The placeholder "your channel name" can read as literal text. Fix: say in one clause what the dialog title shows.
7. [line 57] "The confirm button stays off until the name matches exactly." It is not stated whether letter case matters. Fix: state it.
8. [line 85] Delete step 4, "Type the channel name", states no result. The reset flow (line 57) says the button stays off until the name matches. The delete flow does not. A reader cannot tell if **Delete channel** is active. Fix: add the same result as line 57.
9. [line 68] Reset clears "saved keys and sign-ins". The page does not say what that does to the bot or to connected platforms. A reader cannot tell whether a new sign-in is needed. Fix: one sentence stating the result, if the fact-checker confirms it.
10. [lines 61-69] The "What it holds" column restates the kind in 6 of 7 rows, for example "chat settings | The chat settings of the channel." Only "other settings" adds information. Fix: drop the column, or state what each kind holds.
11. [line 90] "Some links can only be counted when they run." Which links? Fix: name them, or say that the counts can be low.
12. [line 87] "with the date until which you can bring it back." The phrase is hard to scan. Fix: "with the date you can bring it back until."
13. [lines 87 and 111] The card shows "The channel is deleted" (line 87) and is described as "shows the deleted channel" (line 111). A reader cannot tell what the card shows. Fix: use one name.
14. [line 120] "Only the owner of a channel sees it in this list." The word "owner" appears nowhere else on the page. Line 18 uses **Broadcaster**. Fix: use the same role word.
15. [line 8] "A deleted channel can be brought back for a while." Line 77 says 30 days. Fix: "for 30 days" in the opening.
16. [line 7] "Here you let the bot join or leave, reset the settings, and delete the channel." It repeats the table above it. Low priority.
17. [line 18] "The **Broadcaster** may open the page and use every button on it." The rule that only the broadcaster opens Settings is already on dashboard-tour (line 49). The part "every button on it" is new. Keep as it is.
18. Links on first use (page conventions, ledger). These concepts are owned by other pages and are not linked: event responses (line 40), commands, timers and widgets (line 82), overlay sources and OBS (lines 84 and 98), channel point rewards (line 97), Twitch event subscriptions (line 99), Discord notifications (line 100), outbound webhooks (line 101).

## Map note (not a page defect)

The map row for channel-management lists only `/reference/settings/your-data-and-privacy` under Links to. The page also links `/reference/settings/permissions` (lines 19 and 133) and `/reference/getting-started/dashboard-tour` (lines 20 and 134). Both targets are on the map, so the links gate passes. The map row should list them.
