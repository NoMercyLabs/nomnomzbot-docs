# Reader review: C:\Projects\NoMercyLabs\nomnomzbot-docs\src\content\reference\en\moderation\overview.mdx
Verdict: PASS
Reviewed: C:\Projects\NoMercyLabs\nomnomzbot-docs\src\content\reference\en\moderation\overview.mdx
Reviewed-SHA: 9590c21e0bd2e4b0

Reader: a streamer who does not write code. Read before this page: /reference/getting-started/dashboard-tour (read in full for the terms this page uses: Home, Access, Shield mode, roles). Pilot compared: /reference/commands/create-a-command.

This review judges the current text of the page (file sha256 9590c21e0bd2e4b0...). It replaces the review of the older text.

## Blocking findings

None.

- Angle-bracket placeholder check: 0 matches for `<` in the page (grep, run this review).

## Findings (verdict stays PASS under this run's rule)

Highest priority first.

- [line 105 of dashboard-tour, against lines 61-67 of this page] Cross-page conflict. Dashboard-tour says "Allow lets a message into chat." This page says that Allow sends a message to chat only for an AutoMod hold, and that "A removed message does not come back to chat." A streamer who reads dashboard-tour first will expect Allow to restore a removed message. Not fixed here: the wording is on dashboard-tour, which is not this page.
- [lines 43-45] The newcomer gate, the suspicious user and the heat limit rows name a rule with no place to set it. The reader cannot tell what "the channel's limit" (line 43) or "the channel's heat limit" (line 45) is, or where to change it. Neither dashboard-tour nor the ledger explains these terms, so no page owns them. Fix: name the settings page and link it, or give these concepts an owner in the ledger.
- [lines 41-42] "A chat filter set to hold" and "set to flag" are not explained. The reader does not know what hold and flag do to the message, or where the filter is set. The link to the filter page first appears at line 135. Fix: explain hold and flag in one clause, and link the filter page at line 42.
- [line 40] "Twitch AutoMod" is first named without a link. The filter page is linked only at line 135. Fix: link AutoMod at first use. Same for "The People page" (line 104), which the ledger gives to /reference/community/people.
- [lines 23-29] The page says the same roles may see and decide on the queue (lines 23-24). Line 27 then describes "a role that may see the queue, but may not decide on it", and no role is named. A reader cannot tell which role that is, or whether they are in it. Fix: name the role, or state that every role that sees the queue may decide on it.
- [lines 23 and 96-97] Role names appear without a link on first use. The ledger gives channel roles to /reference/settings/permissions, and the pilot page links that page at its first mention. Fix: link Permissions at line 23.
- [lines 141-142] "You can moderate one person from the profile dialog." The page describes only the Moderation history tab of that dialog. The reader cannot tell which actions the dialog holds. Fix: name the actions, or say that the dialog shows history only.
- [line 76] "After 6 seconds the bot sends the denial, and the item leaves the queue." Two results joined by a comma. The reader can follow it. Style: the page conventions say two clauses joined by a comma are two sentences. Also true of line 50 (", but only when") and line 92 (", and your role may see shield mode").
- [lines 60-62] Steps 1 and 2 of the Allow flow do not state what the reader sees. The reader knows the step worked only at step 3. Minor. Fix: add the visible result, for example "The Home page opens."
- [line 135, the Viewer reports row] The guide page column shows "-". The ledger gives viewer reports to /reference/moderation/reports, but the map row for this page does not list that page under Links to (docs-work/map.md line 84). The page follows the map. Fix (map): add /reference/moderation/reports to Links to, then link it here.
- [docs-work/map.md line 84 against docs-work/ledger.md line 51] The ledger gives this page "protection status, lockdown". The map row says the page leaves both out, because the dashboard has no screen for them. Not a page defect. Fix (ledger): correct line 51 to match the map.

## Density

No paragraph is over three sentences. The longest paragraph is lines 6-8: 3 sentences, 28 words. Lines 27-29 and lines 65-67 are also 3 sentences each. Every parallel set of facts is in a table: the entry table (lines 112-124), the panel states (lines 88-93), the queue sources (lines 38-45) and the settings pages (lines 133-139).

## Voice

This reads as the same writer as the pilot page. Both use second person and present tense. Both put the bold label in the step, and both use a "Who can use" section, a table of labels, and short numbered steps. The openers differ only in wording ("You find moderation..." against "You make and change..."). This is a reference page, so the list of tools in the table is its shape. Nothing here is a second voice.

## Checks run

- Whole page read (149 lines).
- Read dashboard-tour, the only page in Assumes, for the terms this page uses. It explains Home, Access, Shield mode and the roles (lines 45-48, 68, 152-165). It does not explain profile dialog, heat limit, newcomer gate, suspicious user, hold or flag.
- Grep for `<`: no match.
- Grep for NoMercyBot, open source, AGPL, GPL, PolyForm, MIT: no match. The page has no hosting, price or license wording, so the hosting marker is not required.
- Grep for British spellings (colour, behaviour, favourite, cancelled, licence, organise, centre, labelled, catalogue, programme): no match.
- Non-ASCII: none seen on read.
- Bot speech: the page describes no bot reply or announcement. No second bot voice to check.
- Frontmatter: title and description present; description is one sentence, about 120 characters.
- Facts are not checked by this reader. The fact-check review covers them.
