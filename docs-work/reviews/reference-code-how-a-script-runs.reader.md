# Reader review: C:\Projects\NoMercyLabs\nomnomzbot-docs\src\content\reference\en\code\how-a-script-runs.mdx
Verdict: PASS
Reviewed: C:\Projects\NoMercyLabs\nomnomzbot-docs\src\content\reference\en\code\how-a-script-runs.mdx
Reviewed-SHA: b27340a414ca5f26

Reader: a streamer or moderator who does not write code. Read before this page: only `/reference/code/scripts` (Assumes, map row). I was not given that page's text, so I did not judge against it.

## Blocking findings

None. Every step on the page can be followed. The page does not claim that a reader needs no coding skill. No wrong fact shows between this page and the pilot page `/reference/commands/create-a-command` (the **Runs a code script** row and the **Script** field match).

## Findings (not blocking)

- [line 18] **bot call** is used first here and never defined. The page only implies it at line 68. The reader cannot tell what is denied. Cost: the first section is unclear.
- [lines 47, 54] **sandbox** is used with no definition. Cost: the reader cannot picture the limits.
- [line 29] "Choose the saved script the step runs" names no field label. [line 30] "Save the pipeline" states no outcome. Cost: the reader cannot confirm that step 2 worked. The page-conventions rule is that each step says what the reader sees.
- [line 42] "script time left for this period" does not say the size of the allowance or the length of a period. [line 119] repeats "for this period". Cost: the reader cannot tell this quota from the 8-second run limit at line 97, and cannot tell when it resets.
- [line 89] "unless the step is set to go on after an error" names no setting and no place. Cost: the reader cannot find the control.
- [lines 70-77] The lead-in says the script **greets that viewer**. The code sends `'Hugs for ' + target + '!'`. No line says what chat sees. The example writes `hug.target`, and nothing reads it. Cost: the reader cannot tell whether the example worked.
- [lines 121-123] The messages contain `...` as a placeholder, and the page does not say what fills it. Cost: the reader cannot match a real message to its row.
- [lines 67, 62] Two send calls sit close together. `bot.send` "does not post in chat". `nnz.api.chat.send` posts. Line 67 also carries two ideas in one sentence and names the bot voice without a link. The ledger lists this page as not allowed to refer to the bot voice (`docs-work/ledger.md`, bot voice line). Cost: the reader may pick the wrong call.
- [lines 59-64, 121-124] One concept has four names: "bot call", "capability", "host-call" and "grant". Cost: the reader must map the error text back to the page's words.
- [lines 99-110] Jargon with no gloss: "statements", "nested function calls", "regular expression", "strict mode", "eval", "new Function". Cost: the reader cannot act on these. Page-conventions say reference detail belongs elsewhere.
- [lines 66-68, 60, 61] The page explains the bot's functions (`bot.*`). The ledger gives "the bot facade" to `/reference/code/sdk-script-basics`. The error table also overlaps the ledger's "grants, errors" line. Cost: a second explanation of a concept another page owns. The map owner should decide whether this is the intended split.
- [line 116] `run_code` and `code_script_id` are an action key and a field name. Page-conventions say an action key never appears on a page. Cost: a developer term on a streamer page. The project rule wins.
- [lines 128-129] "Scripts explains where you read it" points away and names no place. Cost: the reader does not learn where the last error shows.
- No one is named as allowed to turn on Custom Code or run a script. Page-conventions ask for "who can use it" when not everyone can. Cost: a moderator cannot tell whether to ask the streamer.
- [line 97] Limits are listed for scripts. The page does not say whether timers, rewards and event responses can also run a script. Cost: the reader does not know the reach of the step. Not checked against code.

## Density

- Paragraphs: checked each paragraph. The longest is lines 66-68, at three sentences. No paragraph is over three sentences.
- Two-idea sentences: lines 67, 89 and 129.
- Parallel facts: the limits (lines 95-106) and the errors (lines 114-127) are tables. Correct.
- Blank lines in the example (lines 72-78): blank lines sit between each statement. Correct.

## Voice

The page matches the pilot's sentence voice: the bot is the subject, results are stated, and the reader is addressed as "you". Tables and bold labels follow the pilot's pattern. The Limits and Errors sections are denser than the pilot. That is a tier difference, not a voice difference.

## Rule checks

- The page names the bot voice correctly (line 67), with no second voice.
- No `NoMercyBot` spelling. No license name. No "open source".
- The Draft label is present (title and callout), as the map row says.
- No British spelling found on a full read.
- No hosting, price or paid plan is named, so the hosting marker is not needed.
- No UI was built and no code was written.

## Notes

- Language: the example is JavaScript (line 72), and the page does not name the language or say the reader needs it. The page does not claim that no coding is needed, so this is a note only.
- Rendering: I read the stored source. The `::Callout` directive is assumed to render as a callout. Rendered output was not checked.
- Not checked: the Scripts page (the Assumes page) was not given to me. I cannot say whether it defines "published version", "checks" or the script switch.
- Not checked: whether the links at lines 8, 27, 33, 68, 129 and 133 resolve. That is the link gate's job.
