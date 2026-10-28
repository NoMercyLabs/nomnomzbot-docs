# Reader review: src/content/reference/en/commands/built-in-commands.mdx
Verdict: PASS
Reviewed: src/content/reference/en/commands/built-in-commands.mdx
Reviewed-SHA: 5b57cfa954394529

Round 5, re-review of the current text. Assumed pages read: create-a-command, variables-and-templates. Page read as stored. It has no include or snippet directive, so nothing was expanded. This replaces the round 4 FAIL (SHA 27b6f476e74f7d34). The round 4 blocker is resolved: line 177 now names `!permit`, `!unpermit`, `!mydata`, `!gdpr` and `!forgetme`, the same five that create-a-command.mdx line 247 lists.

## Blocking findings

None.

## Order and count check

- The 42 rows (lines 43-84) are in A to Z order. Checked by hand, including the close pairs: `!dice` / `!disallow` / `!discord`, `!voice` / `!volume`, `!unlurk` / `!unpermit` / `!unwhitelist` / `!update`, `!sr` / `!stats`.
- The count is 42 rows, which matches line 37.
- No step is missing an outcome. Steps at lines 100-107, 146-151 and 170-177 each state what the reader sees.

## Notes (do not decide the verdict)

- [86-87] "check the caller again when they run" does not say what is checked. "the right to moderate the song queue" names a right, but not where the broadcaster sets it. No guide page names it. Suggest: name the setting and link its page.
- [86] The table says "Everyone" for `!pause`, `!resume`, `!volume` and the other song commands. The note below says a non-moderator passes only with that right. The reader cannot tell whether "Everyone" is the full answer. Suggest: mark those rows, or say in the table that a song-queue right is also needed.
- [11] One sentence carries two ideas: who may change commands, and how to make commands. Split it.
- [7] "Every channel has the same set, and you cannot delete one." Two ideas in one sentence (11 words). Split it.
- [23] The row text "Always on · ..." leaves the reader to guess what the dots stand for. Say once that the dots hold the settings summary (see line 16).
- [41] The headers "Chat cooldown" and "Per-person cooldown" appear before lines 118-119 define them. Line 17 defines only "cooldown".
- [77, 83] The "Who can use it" value is "Only you". The guide elsewhere says "Broadcaster" (create-a-command.mdx line 17). Use one term.
- [29] This page says the editor switch is **Answers in chat**. create-a-command.mdx line 197 says **Enabled** for the same kind of switch. If the dashboard labels differ, say so once. The fact check should confirm the label.
- "footer" (lines 103, 106, 111, 147) and "caller" (lines 43, 55, 86) are not defined on this page. create-a-command.mdx also uses "footer" without a definition.
- [44, 49, 51, 71] "held" (line 44) and "channel currency" (lines 49, 51, 71) are not defined here or linked. A reader may not know what they mean.
- [83] "standing" is used for the role grant of `!whitelist` without a definition.
- [164] "a reset also puts the shared replies back on the other command" is hard to parse. Say that a reset of `!lurk` also resets `!unlurk`, and the same for `!stats` and `!profile`.
- [112] "A command that has saved changes opens unlocked next time." It states a state the reader has not met before step 2. Not checked against source here; the fact-check file covers it.

## Density

- Paragraphs over three sentences: none. Checked blocks: lines 6-8, 15-17, 26-30, 86-88, 94-96, 124-126, 128-130, 134-136, 140-142, 162-164. Each has three sentences or fewer.
- Lines 86-88 (3 sentences, 54 words) are the densest block. Sentence 1 is 22 words and holds two ideas: the re-check, and a moderator passing it.
- Sentences with two ideas: line 7 (11 words), line 11 (15 words), line 86 (22 words), line 142 (third sentence, 14 words: the default, and the hint text). All are listed above or are minor.
- Parallel facts in prose: lines 134-136 state two pairs of shared replies in prose. A short table would scan better, but it is not blocking.
- Voice against create-a-command.mdx: the same sentence voice. The subjects are the actor or the thing, results are stated, and the page talks about the subject. Lines 86-87 use passive phrasing ("passes only when"). That is the only place the voice differs.

## Where I got lost

1. Line 86: I could not tell what the bot checks when `!pause` or `!volume 50` runs, or what "check the caller again" means.
2. Line 87: I could not tell where the broadcaster gives "the right to moderate the song queue". No guide page names it.
3. Line 70: "With a number, it removes the caller's own queued request." I could not tell what to type. The page does not show the form of `!skip` with a number.

Process: the page was not edited. Nothing was committed. Not checked: whether another review of this page was running when this one started.
