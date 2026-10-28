# Reader review: src/content/reference/en/automation/timers-and-chat-triggers.mdx
Verdict: PASS
Reviewed: src/content/reference/en/automation/timers-and-chat-triggers.mdx
Reviewed-SHA: e7a4e7ee46b53b22

Round 4. Fresh read of the whole page as it stands (full sha256: e7a4e7ee46b53b22e05894724b620e9c4cffa12a389353bd84c927dcbdbdd12f).
Changed since round 3: line 71 now reads "since the bot began watching your channel" in place of "since the bot started".
Assumed pages (create-a-command, variables-and-templates, built-in-commands, cooldowns-and-permissions, pipelines): not re-read in this run. I judged only against the list in the dispatch. Pilot checked: create-a-command (voice and shape).
Verdict rule for this run: FAIL only for a blocking finding (a wrong fact, or a step a non-coder cannot follow).

Blocking findings: none.

Findings (not blocking):
- [line 71] "since the bot began watching your channel." The new phrase names no moment a reader can see. -> A streamer cannot tell when the count starts. Does it start at switch-on, at bot setup, or at each restart? Fact-check: confirm the start point in code, then name it in plain words, such as "since you switched the copy on".
- [line 72] "it waits **Minutes between posts** between posts." The phrase repeats itself. -> "After the first post, the timer waits **Minutes between posts** before the next one."
- [line 79] One sentence holds two ideas: no messages, and what runs. -> Split it.
- [line 103, line 108, line 195] **Duplicate** and **Delete** are named without saying where the button is. -> Say "in the editor footer" once.
- [line 23] "The **Broadcaster** may also let a **VIP** open each tab." The page does not say where this is set. -> Name the settings page and section.
- [line 33-35] Step 4 chooses **Simple reply** but does not say to fill **Messages**. The table on line 41 holds it. The dialog then stops with "Write at least one message." (line 55), so a reader recovers. -> Add "then fill in **Messages**" to step 4.
- [line 209] Troubleshooting for "A timer never posts" lists **Post once** as a cause. **Post once** stops a timer after one post, so it fits "stops posting", not "never posts". -> Move it to its own line.
- [line 16] "is made on [Create a command]" is passive. -> "Make it with [Create a command]."
- [line 16] One sentence holds two ideas: the prefix example and where the command is made. -> Split it.
- [line 65] "Chat lines needed" is plain text here and bold at lines 68 and 74. -> Bold it at line 65 too.
- [line 172] One sentence in its own paragraph: the value range. -> Fine as it stands.

Density list (measured on this file):
- Lines 6-8: 3 sentences. OK.
- Lines 15-16: 2 sentences. OK.
- Lines 20-21: 2 sentences. OK.
- Lines 23-25: 3 sentences. OK.
- Lines 44-45: 2 sentences. OK.
- Lines 61-62: 2 sentences. OK.
- Lines 67-68: 2 sentences. OK.
- Lines 70-72: 3 sentences. OK. Sentence 2 holds two ideas (the copy's switch-on, and the count). Sentence 3 repeats "between posts".
- Lines 74-75: 2 sentences. OK.
- Lines 77-79: 3 sentences. Sentence 3 holds two ideas.
- Lines 81-82: 2 sentences. OK.
- Lines 99-101: 3 sentences. OK.
- Lines 168-170: 3 sentences. OK.
- Lines 189-191: 3 sentences. OK.
- Every other paragraph: 2 sentences or fewer, or a list, table or steps.

Parallel facts that should be a table: none found. The settings table (lines 131-136) and the field table (lines 179-187) hold them.

Where I got lost:
- When the copy's count starts (line 71).
- Where **Duplicate** and **Delete** sit (lines 103, 108, 195).
- Where a broadcaster sets a VIP's access to a tab (line 23).
- Whether the reader must fill **Messages** in step 4 (line 33).

Same person: yes. The page uses the same tables, bold labels, the same "You can view this, but your role cannot change it." sentence as the command pilot, and a Related pages list.

Not checked (reader lane reads the page only): link targets, the `{timer.message}` variable (owned by variables-and-templates), the 30-second check interval, the start point of the copy's count and the other limits in code, and the dashboard label text. Fact-check owns these.
