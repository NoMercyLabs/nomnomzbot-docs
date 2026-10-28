# Reader review: C:\Projects\NoMercyLabs\nomnomzbot-docs\src\content\reference\en\community\people.mdx
Verdict: PASS
Reviewed: C:\Projects\NoMercyLabs\nomnomzbot-docs\src\content\reference\en\community\people.mdx
Reviewed-SHA: 3e482b5e7946bd9c

Read with: pilot `commands/create-a-command.mdx`; Assumes pages `getting-started/dashboard-tour.mdx`, `community/viewer-pages.mdx`, `moderation/overview.mdx`; `docs-work/page-conventions.md`; `docs-work/ledger.md`.
No includes, snippets or code blocks on the page. Nothing was elided. No blocking finding: every step has a stated outcome, and no sentence is contradicted by the page text.

Notes (not blocking):

- [line 22-23] "Choose **Last seen** or **A to Z** to change the order." The page does not say where these choices sit, and does not say which order is the default. The reader cannot tell the starting state. Cost: small; the step can still be followed.
- [line 120] "Choose the **Ban** button with the name in the dialog." The label is unclear. It is not stated whether the button text is "Ban" alone or "Ban" plus the name. Cost: a reader may stop to check which button is meant.
- [lines 105-106 and 112-113] The table gives **Warn**, **Timeout** and **Ban** as "A moderator and up". The paragraph below says that on a moderator's profile these show only to the broadcaster. The table has no note for that case. A moderator reading only the table would expect to ban another moderator. Reviewer's reading: this is a scope exception the table omits. Suggested fix: add "(not on a moderator's profile)" to those cells. The verdict stays PASS because the paragraph states the exception and nothing on the page is untrue.
- [lines 111-114] Density. This paragraph has 4 sentences and 53 words. Quoted: "A message at the bottom of the screen confirms each result, such as "is now a moderator." Warn, Timeout and Ban never show on your own profile. On a moderator's profile they show only to the broadcaster. Make VIP is grayed out with VIP status unknown when Twitch could not tell the bot." Suggested split: put the **Make VIP** sentence under the table, or give it its own paragraph.
- [line 92] Density. "Ban history lists each ban with its reason, who banned, the date, and the date it was lifted." 1 sentence, 18 words, four parallel facts in one sentence. The page conventions ask for a table or list for four parallel facts.
- [line 76] "choose the close button" names no label and no place. The reader cannot tell which control is meant.
- [lines 88-89] "Shows once the bot has a stored profile for them." The term "stored profile" is not defined. The reader cannot check when the **Points** and **Data** tabs appear.
- [lines 55-56] "A match that your channel has never seen shows **Not in this channel**." The page does not say what the reader can do with such a match. The outcome is not stated.
- [line 55] "The search looks at every person the bot knows, also from other channels." Two ideas in one sentence: the search scope, and the other channels. The second idea is the one a streamer will care about and it is hidden in a clause.
- [line 7] "The list holds real people the bot has seen in your chat, and real Twitch data." Two ideas in one sentence.
- [lines 34 and 36-37] The **New** tab is explained twice: in the table row, then in the paragraph below. The paragraph repeats the row.
- [line 79-80] "The same profile opens ... in a dialog." The profile dialog is defined on the Assumes page `moderation/overview.mdx` line 10. This page describes it again and does not link it. The ledger names the profile dialog as a concept owned by the moderation overview.
- [line 87] "**Moderation** | Notes, history, **Actions taken** counts, and **Ban history**." The term "moderation history" is first used here without a link. The ledger says a concept is linked at its first appearance on the page. The link to `/reference/moderation/overview` appears only under Related pages.
- [line 103] The label is **Shout out** and the prose says "shoutout". Two spellings for one action on one page. The term is also not linked to `/reference/moderation/shoutouts`, the page the ledger names as owner.
- [lines 116-121] The ban flow is a how-to, not a concept explanation, so the ledger's owner for "ban" (`/reference/moderation/bans-and-blocked-terms`) is not in conflict. The people page is not in that concept's may-refer list. Writer to confirm.

Voice: the sentence-level voice matches the pilot. The actor is the subject ("You browse", "Pick a person"). Results are stated in checkable terms. The page reads as the same writer as the pilot.

Where I got lost: nowhere that stops a step. The most confusing point is the moderator exception in the **Act on a person** table (see the second note).
