# Reader review: economy/currency-and-balances
Verdict: PASS
Reviewed: C:\Projects\NoMercyLabs\nomnomzbot-docs\src\content\reference\en\economy\currency-and-balances.mdx
Reviewed-SHA: 5dd9d83b4a872df4

Reader profile: a streamer who has read only `getting-started/dashboard-tour` (the map's Assumes column). The tour places Economy in the Loyalty group, names the roles moderator, lead moderator, broadcaster and VIP, and sends the role order to Permissions. It does not name Editor.

Verdict basis: no blocking finding. Every step can be followed by a reader who does not code, and each step names the result the reader sees. The verdict follows the run rule: FAIL only for a blocking finding. The notes below are not blocking.

Facts were not checked in this review. The fact-check reviewer owns that.

## Where I got lost

- Invite a channel (lines 174-175 and 192). The page says the other channel "has to accept before it can use the jar." It does not say where the other channel accepts, or where I can see that the invite is pending. Line 170 says accepting an invite is "not available here." I could send the invite, but I could not tell what happens next.
- Who fills a jar (line 137 and line 170). Line 137 says a jar is "a shared pot that viewers fill." Line 170 says deposits are "not available here yet." The page never says where a viewer puts currency in, or whether a jar can take currency today.
- Who may close a jar (line 24 and line 167). Line 24 says "a Moderator or higher." Line 167 says "Only the channel that made a jar may change, close or delete it." I could not tell whether a moderator of that channel may close the jar.

## Density (measured)

Paragraphs over three sentences:

- Lines 21-24, 4 sentences, 56 words. Quoted: "A tab shows only to someone who may read it. A Moderator, Lead moderator, Editor or Broadcaster may see and change the Currency, Balances and Earning rules tabs. Anyone who may open the page may see the Savings jars tab, make a jar and invite a channel. Closing and deleting a jar needs a Moderator or higher." Cost: the tab rule, the role rule and the jar rule sit in one block. Sentence three belongs under the savings jar section.
- Lines 130-133, 4 sentences, 39 words. Quoted: "Turn on the switch at the end of a viewer's row. A screen reader names it 'Freeze the wallet of' followed by the viewer's name. A frozen wallet cannot earn or spend. Turn the switch off to unfreeze it." Cost: the screen-reader name sits between the instruction and its result.

All other paragraphs have three sentences or fewer.

Two-idea sentences: line 37 ("the card shows the defaults below, and Save currency sets the currency up") and line 170 (three actions named in one sentence).

## Findings (not blocking)

1. Lines 126 and 128-133. "Frozen wallet" is used in the table before the Freeze section teaches it. Cost: a term arrives before its meaning.
2. Lines 122-126. The table says "The bot refuses it" for three cases, and the page never says what I see when the refusal happens. Cost: after step 5 of Change a viewer's balance, I cannot tell whether the change was refused. Name the screen result for a refusal, if the dashboard shows one. The fact-check reviewer confirms it.
3. Lines 21-22 and 24. "Editor" and "Lead moderator" are used without a definition. "Moderator or higher" relies on a role order the page does not give. The dashboard tour says the role order is on Permissions. This page does not link Permissions, and the pilot page does at its line 18. Route: the map's Assumes column lists only the dashboard tour, and the role owner (Permissions) is not in it. Fix in the map, or link Permissions on first use.
4. Line 188. "Both roles may use the jar the same way." I cannot tell what choosing a role changes. Cost: an option with no visible effect reads as a mistake.
5. Lines 67-76. The table header says "The amount," but the cell text says "Amount earned," which is the dialog label on line 63. "Start amount" is not in the dialog and is not explained. Line 75 shows a start amount of 10 for a source that pays nothing. Cost: I cannot tell what "Start amount" is.
6. Line 73. "The streamer who raids you earns." I cannot tell whose balance changes: the raiding streamer's or the channel's.
7. Lines 81-82. "The dialog also has Seconds per payout." The page does not name the dialog (line 62 names it as Edit earning rule). It does not say what the setting changes beyond "not what a viewer earns."
8. Lines 46-47. "Viewers see no change from it." This sentence is unclear. I cannot tell whether to set the value. It is also off the pilot page's plain voice.
9. Lines 154 and 190. "Take-out cap per channel" and "Take-out cap" are two labels for caps that look alike. I cannot tell whether they are the same setting.
10. Lines 74 and 78. "Supporter event" and "shadowbanned" are not explained and not linked. Their owner pages are not in the map's Assumes column. Route as in finding 3.
11. Line 16. "on [Store]" repeats the word in the same line. Minor.

## Voice

The page reads as the same author as the pilot page. Sentences name the actor first, state the result, and use plain words. The pilot's shape differs by design: this is a reference-tier page with tables, and it has no troubleshooting section. Finding 8 is the one sentence that breaks the voice.

## Hosting marker and plain rule

Not applicable. The page does not mention hosting for others, a paid plan, or license names.
