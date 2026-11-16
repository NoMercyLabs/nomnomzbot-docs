# Independent reader review: /reference/moderation/bans-and-blocked-terms
Verdict: PASS
Reviewed: src/content/reference/en/moderation/bans-and-blocked-terms.mdx
Reviewed-SHA: c1b696032f878c16ae0687aa13ce7505dead4524609f75b9204689abb1f1e10b

## Independent overhaul review, 2026-11-05

The opening helps readers choose person-level or term-level action and locates the actual ban entry point; concise reference flows suit the task.

Reviewed independently of the article author, in actual navigation order. Current product source 54da8b631 and relevant changes since b12f4f696 were read without starting the bot, executing platform actions or changing channel data. The reader judgment follows the user's natural teaching style; old pilot mimicry, sentence caps and unrelated Atlas style gates were not applied. See [review-moderation-economy-community.md](../overhaul/review-moderation-economy-community.md) for the review scope and findings.

## Prior review history

The earlier text below is retained as history; it does not independently approve a later article hash.

Reader: a streamer who has read only `/reference/moderation/overview` (the Assumes page on map row line 86). I read that page first. I read the pilot page `/reference/commands/create-a-command` for voice.

Verdict basis: I could follow every step. Each step names the label and says what the reader sees after it. No finding blocks a reader, so the verdict is PASS. The findings below are for the writer.

## Blocking findings

None.

## Findings (non-blocking)

- [line 9] "At the top of each page, the title line reads **Moderation** / and then the page name." → I could not picture the title. The stray slash makes it unclear whether there is one line or two, and whether the words are joined. Say what the title shows, for example: "The page title starts with **Moderation**, then the page name."
- [lines 6-9] One paragraph with 4 sentences and about 50 words. The density limit is 3 sentences. Lines 6-7 repeat the table at lines 13-14, so the first two sentences add nothing the table does not hold. Cut them or the table.
- [lines 38-39] The row line says "Banned by a moderator 2 hours ago". The overview (line 106) says the line shows a moderator's name. A reader who has read both pages gets two rules for one line. Use the same form, or say which one the dashboard shows.
- [line 39] The reason form is described but never shown. I could not tell what a reason looks like on the line. Add one short example line, in the same form as line 38.
- [line 47 and line 35-36] "Choose **Unban**" and "Choose **Block**" do not say where the button sits (in the person's row, or in the panel). "Type the word or phrase in the field" names no field. The panel is named one line earlier, so most readers succeed. One short clause per step would remove the doubt.

## Density

- Paragraph at lines 6-9: 4 sentences, about 50 words. Over the limit (see finding 2).
- Paragraph at lines 16-17: 2 sentences. Within the limit.
- Paragraph at lines 62-64: 3 sentences. Within the limit.
- Paragraph at lines 49-51: 3 sentences. Within the limit.
- Parallel facts are in tables: lines 11-14 (pages) and 23-28 (roles). Correct use.
- Line 31 names three panels and buttons in one sentence. It is one idea (what a limited role sees), so it stays.

## Re-teaching check (against the Assumes page)

- The ledger gives moderation, review queue and history to `/reference/moderation/overview`. This page does not explain them again. Pass.
- The Access group is named again at lines 8. The overview already says it (line 127). It is a location, not an explanation. Pass, with note: the reader does not need it twice.
- Roles: the page links Permissions on first use (line 21). Pass.
- Overview line 132 says Blocked terms and Banned people hold "the words Twitch blocks" and "the people who are banned". This page says the same. Consistent.

## Voice

The voice matches the pilot page. "You" is the subject. Labels are bold. Steps read "Open X" or "Choose X." and each one states the outcome. The same person would write both pages.

## Checks run

- Angle-bracket placeholders outside backticks: none. A grep of `<` in the page returned no lines. The extra check passes for this text.
- NoMercyBot spelling: none.
- British spelling (colour, behaviour, cancelled, organise, licence, centre and similar): none found.
- Hosting marker, plain rule, license label: not needed. The page does not mention hosting, price, or a license.
- Emoji and people's names: none.
- Page SHA-256 before and after review: `f86bf831a7aad311df93fdc0f2327458eb5fe26ccb1b1d7c286794c7f00e192b` both times. The page did not change during the review.
- Not checked: whether the code matches any claim. The fact-check reviewer owns that.
- The earlier verdict file for this slug was for an older text (Reviewed-SHA bc8bf93a8fb65df2). It is replaced by this review.
