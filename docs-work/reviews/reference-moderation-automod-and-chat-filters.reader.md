# Reader review: src/content/reference/en/moderation/automod-and-chat-filters.mdx
Verdict: PASS
Reviewed: src/content/reference/en/moderation/automod-and-chat-filters.mdx
Reviewed-SHA: a8bfacac5d9731b2

Reader: a streamer who has read only the overview page. Reference page, judged against page-conventions.md and the Atlas reader rules. Pilot page `commands/create-a-command` open next to it for voice.

## Findings (decide the verdict)

None. Every numbered step can be followed, and each one states what the reader sees (AutoMod steps 1 to 3, Twitch levels steps 1 to 2, chat filter steps 1 to 6, Try it, Change, Switch, Remove).

## Notes (do not decide the verdict)

- [lines 101-103] **Match upper and lower case apart** appears only in the defaults table. No step, no row of the "fields it shows" table (lines 88-92) and no sentence names it. The reader cannot tell where this option is set, what it does, or whether a filter can be made case-sensitive. This is the strongest note. Either name where it sits and what it does, or remove the row if the editor does not show it. Confirm which with the fact check.
- [line 6-8] "the settings" and "the **Moderation** group of the settings" never say where settings is in the sidebar. The pilot page says "in the sidebar". Link the dashboard layout page once, at first use. The map Assumes list does not include it.
- [line 28] "The page says: ..." is a sentence about the page, not about the subject. Consider starting the section with what the reader sees, and quoting the message in the step.
- [line 49] One sentence carries two outcomes: the message text, and that **Save** stays off. Split at ", and".
- [lines 54-55] "Twitch keeps these levels" does not say what Twitch does with them. Say it in one plain clause, or cut it.
- [line 57] Step 1 says "pick a level for each category". The eight categories appear only in a sentence at line 69, not as rows, so the reader cannot see where each category's level is set. Show them as rows, or name the panel rows.
- [line 69] The eight categories are a list of parallel facts in one sentence. page-conventions asks for a table when there are four or more. Use a one-column table, like the level table at lines 61-67.
- [lines 90-92, 117] "Blocked terms" is the first use of a term the ledger owns on the bans page. Line 41 calls the AutoMod list "Banned phrases". Two names for two lists is a reader risk. Link the first use or use one name for this page's list.
- [lines 91 and 120-121] "Pattern (regex)" is defined as "a regular expression". A streamer who is not a coder has no example to follow. The pilot page gives the same kind of gloss, so this is a note, not a block. One example pattern line would close it.
- [lines 131-132] "Hold for review" and "Flag for review" read almost the same. The page does not say how they differ, so the reader cannot choose between them. One sentence after the table would close it.
- [lines 144-148] "VIPs", "Artists" and "Editors" are used in the choices without a link. The ledger gives the role ladder to the permissions page, which is not in Assumes and is not linked. Link the first use, or edit the map row.
- [line 148] "Editors and above" sits after "Lead moderators and above". The page does not say which role is higher. Only the permissions page can settle it. The writer should check the order.
- [line 173] "Each row shows what the filter checks..." sits under **Change a chat filter**, but it describes the list. Move it under the list section, or give it its own heading.
- [line 184] "A dialog asks "Remove" and the filter's name, with a question mark." The reader does not learn the dialog's exact words. Quote the words the dialog shows, as the pilot does for its delete dialog.
- [line 197] "for a red message" names a colour the page never mentions earlier. Line 49 says the message shows the reason in plain words. Name the message text, not its colour.
- [line 12] "AutoMod" appears first as "AutoMod filters" with no sentence saying it is a Twitch word for the built-in filter. One clause at first use would help.
- [lines 217-221, Related pages] The Related pages list links the overview, trust and bans pages but not permissions. The first use of the role names should link there (see line 144 note).

## Density

- Paragraphs over three sentences: none. Every blank-line paragraph has three sentences or fewer.
- Sentences with two ideas: line 49 (two outcomes in one sentence). Line 196 is also two conditions, quoted: "**Save** is active only after you change something, and only when every number is in its range." That is one sentence, 17 words, with two conditions joined by "and only when". Split at "and only when".
- Parallel facts that should be a table: the eight categories at line 69.
- Tables present and right: pages (10-13), who may do what (17-21), labels and defaults (96-104), refusals (113-118), choices (127-132), never-filter roles (141-149), field tables (38-42, 88-92).

## Voice

The page reads as one writer with the pilot page. Actor first, results stated as the reader can check them ("The page shows "AutoMod saved.""), constraints as their symptom ("Save stays off"). The one difference is the locator: the pilot says "in the sidebar", this page says "in the settings" (see the note at lines 6-8).

## Checked by reading this run

- No NoMercyBot spelling, no "open source", no AGPL, GPL, MIT or PolyForm on the page (grep, this run).
- No British spelling found in the page by grep for common forms (colour, behaviour, cancelled, licence and similar). The page uses "color"-free text; "Cancel" and "Remove" are plain.
- No emoji, no people's names, no bot speech (the page describes no bot reply or speech, so the one-voice rule is not triggered).
- The hosting marker is not needed: the page does not mention hosting, a service, a paid plan or a price.
- No code or TypeScript on the page; the troubleshooting blocks use the site's `::Troubleshooting` form, symptom bold, fix below, closing `::`.
- Page hash checked before and after the read: unchanged (a8bfacac5d9731b2...).

## Where I got lost

- At the defaults row **Match upper and lower case apart** (line 103). I could not tell whether it is a control in the editor, or where it sits.
- At **Hold for review** and **Flag for review** (lines 131-132). I could not tell which one to pick, or what the difference is.
