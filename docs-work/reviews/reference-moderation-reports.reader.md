# Independent reader review: /reference/moderation/reports
Verdict: PASS
Reviewed: src/content/reference/en/moderation/reports.mdx
Reviewed-SHA: a789da3356cdd993819b90e228dfd16e23f721ded4e1e8f59307a8d868b69a02

## Independent overhaul review, 2026-11-05

The task and status-only consequence precede controls; the missing submission form is candid and investigation links give a practical next step.

Reviewed independently of the article author, in actual navigation order. Current product source 54da8b631 and relevant changes since b12f4f696 were read without starting the bot, executing platform actions or changing channel data. The reader judgment follows the user's natural teaching style; old pilot mimicry, sentence caps and unrelated Atlas style gates were not applied. See [review-moderation-economy-community.md](../overhaul/review-moderation-economy-community.md) for the review scope and findings.

## Prior review history

The earlier text below is retained as history; it does not independently approve a later article hash.

Reader: a streamer or moderator who has read only /reference/moderation/overview (map Assumes column).
Voice compared with the pilot page commands/create-a-command.mdx.
Facts are not checked here. The fact-check file owns them.
Grimoira: not queried. The reader judges text only.

## Blocking

None. Every step in "Read the reports", "Dismiss or escalate a report" and the collapsed "Work the review queue" can be followed, and each step states its result.

## Findings (not blocking, verdict stays PASS)

1. [line 80] "spam defense" is used first here, with no meaning and no link. Its owner is /reference/moderation/spam-defense, which is not in this page's Assumes. The reader cannot say what an automatic action of spam defense is. Fix belongs in the map: add spam-defense to Assumes, or link it at first use. Not changed here.

2. [lines 13-14, Who can use this page] "Moderator", "Lead moderator" and "or higher" are used with no link to the role ladder. Owner is /reference/settings/permissions (ledger: permission level, channel role). It is not in Assumes. The pilot page links Permissions at the same point. The reader cannot tell what "or higher" includes.

3. [line 15, and lines 20-21] The table says "A viewer in the channel: File a report." The next section says the dashboard has no form and that a report "comes in through the bot's API." The page never says who calls that API or how a viewer reaches it. The reader cannot tell whether a viewer can file a report, or what they would do.

4. [line 40] The example "Filed by a viewer 5 minutes ago" shows the fallback text, used when the reporter is unknown. No example shows a known reporter's row. The reader cannot predict the usual row.

5. [lines 80-83] One paragraph of four sentences, 57 words. Sentence 3 carries two ideas: what the queue is, and where it is. The page's own rule is three sentences at most per paragraph.

6. [lines 88-89, step 1 of the review queue] "Type why you open the page in Reason for access. Nothing loads until you do." The step does not say whether the reason is saved by a button, a key or as you type. It does not say what appears after. "Until you do" is unclear. The reader may not know they succeeded. "Audit log" in the same step has no meaning here.

7. [line 91, step 2] One sentence lists seven fields: account, channel, reason, message, confidence, action and time. The page's rule is that parallel facts go in a list or a table. "Confidence" is not explained.

8. [lines 97 and 99] After a failed Overturn, the row "stays as it was." The page does not say whether the bot shows an error. The reader cannot tell whether the failure was reported.

9. [line 30] "The chatter in the report is saved as a user of the bot, even if they never chatted before." Two ideas in one sentence. Minor.

10. [lines 61-63 and line 73, the Escalate button] The Escalate button on this page and "escalation ladder" on /reference/moderation/trust-and-escalation share a word. The page separates them only by the callout's "does not ban or time out anyone." The reader may still conflate them. A link to trust-and-escalation would help. The map's Links to column does not list it.

## Notes (style)

- Shape: the page has no "Related pages" list at its end. Page conventions, Page shape item 8, asks for one. The map's Links to column lists only bans-and-blocked-terms.
- Voice: the page reads as the same writer as the pilot page. It opens with "You ..." in the present tense, gives numbered steps with the result after each one, bolds labels and uses the Troubleshooting block form. The differences are shape only: a table for "Who can use" (parallel facts, allowed) and no Related pages list.
- Ledger: no concept owned by another page is explained again on this page. "Viewer report" is owned here, as the ledger says.
- Spelling: American English found. No license name, no hosting or price claim, no NoMercyBot spelling, no emoji.
- Dashboard-tour: the "Access group of the settings sidebar" sentence (line 7) relies on the layout concept, which every page may refer to. Acceptable.
