# Reader review: src/content/reference/en/commands/built-in-commands.mdx
Verdict: PASS
Reviewed: src/content/reference/en/commands/built-in-commands.mdx
Reviewed-SHA: ce4b7064a2563d81

Round 3. Assumed pages read: create-a-command, variables-and-templates. Page read as stored; it has no include or snippet directive, so nothing was expanded.

Round 2 finding is resolved. Round 2 said `{stats.points}` was named as the full list and was not there. Now line 129 says the Variables line lists values "only this command's reply can use", and line 130 says the helpers every reply can use are on Variables and templates. `grep stats` on src/content/reference/en/commands/variables-and-templates.mdx returns no match, which matches the new wording.

Blocking findings: none. Each step (lines 100-107, 146-151, 170-177) names its result. The table count is 42 rows (lines 43-84), matching line 37.

## Notes (do not decide the verdict)

- [86-87] "check the caller again when they run" does not say what is checked. "the right to moderate the song queue" names a right but not where the broadcaster sets it. A reader cannot act on this line. Not checked against source. Suggest: name the setting and link its page. No guide page carries this right (grep of src/content/reference/en for "moderate the song" returns line 87 only).
- [11] One sentence carries two ideas: who may change commands, and how to make commands. Split it.
- [86] One sentence carries two ideas: the re-check, and a moderator passing it. Split it.
- [23] The row text "Always on · ..." leaves the reader to guess what the dots stand for. The dashboard label is "Always on · {settings}" (dashboard/src/views/dashboard/commands/i18n/en.json:188), so the dots stand for the settings summary shown on line 16. Say so once.
- [41] The headers "Chat cooldown" and "Per-person cooldown" appear before line 118-119 defines them. Line 17 defines only "cooldown".
- [177] "except for the always-on ones" omits the data-rights commands (!mydata, !gdpr, !forgetme). Line 24 says data-rights commands always answer, and create-a-command.mdx line 247 lists them as exceptions. Name both groups.
- [72-75] The "Who can use it" column says "Only you". Elsewhere the guide says "Broadcaster" (create-a-command.mdx line 17). Use one term.
- "footer" (lines 103, 111, 147) and "caller" (lines 44, 47, 86) are not defined on this page. create-a-command.mdx also uses "footer" without a definition.
- [112] "A command that has saved changes opens unlocked next time." Not checked against source here; the fact-check file covers it.

## Density

- Paragraphs over three sentences: none. Checked blocks: lines 6-8, 86-88, 94-96, 124-126, 128-130, 134-136, 162-164. Each has three sentences or fewer.
- Sentences with two ideas: line 11 (15 words), line 86 (22 words). Both are listed above.
- Parallel facts in prose: none. The table at lines 41-84 and the field table at lines 114-120 carry the parallel facts.
- Voice against create-a-command.mdx: same sentence voice. Subjects are the actor or the thing, results are stated, and the page talks about the subject, not about itself. Lines 86-87 use passive phrasing ("passes only when"); this is the only place the voice differs.

## Where I got lost

1. Line 86: I could not tell what the bot checks when `!pause` or `!volume 50` runs, or what "check the caller again" means.
2. Line 87: I could not tell where the broadcaster gives "the right to moderate the song queue". No guide page names it.
3. Line 177: I could not tell whether `!mydata` as a channel command answers in chat, because "always-on ones" might not include the data-rights rows.

Process: this file overwrote the round 2 verdict. The page was not edited. Nothing was committed. Not checked: whether another review of this page was running when this one started.
