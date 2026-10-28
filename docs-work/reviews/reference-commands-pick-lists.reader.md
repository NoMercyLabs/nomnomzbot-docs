# Reader review: src/content/reference/en/commands/pick-lists.mdx
Verdict: PASS
Reviewed: src/content/reference/en/commands/pick-lists.mdx
Reviewed-SHA: a6445721fa9338dd

Round 2. Re-read the whole page as a new reader, with create-a-command.mdx and variables-and-templates.mdx as the assumed pages. Run rule: FAIL only for a blocking finding. None found, so the verdict is PASS. Round 1 items that the page did not change are repeated under Notes.

## Blocking findings

None.

## What changed since round 1

- Roles (lines 15-17) are now defaults the Broadcaster can raise. The earlier "Only these roles may delete a list" line is gone, and delete now sits with the four default roles.
- Field limits (lines 51, 54) now say "The field stops at 100 characters" and "The field stops at 500 characters". The two dialog messages are gone.
- Row buttons now carry their real labels: "Edit snacks" (line 109) and "Delete snacks?" (line 124). The "edit button" and "delete button" gap is closed.
- The delete consequence is split (lines 132-135).

## Checked against the assumed pages

- The helper `{list.pick.food}` still matches variables-and-templates.mdx:224.
- "Many commands can share one pick list" (line 10) still matches create-a-command.mdx:111.
- The voice matches create-a-command.mdx: the actor is the subject, results are stated, and buttons are named in bold.

## Notes (do not decide the verdict)

- [lines 15-16] "The Broadcaster may raise each of these to a higher role." -> the reader cannot tell what "raise" changes. The sentence should say what the Broadcaster sets (the lowest role that may make and delete lists) and where, with a link to the Permissions page. The link at line 17 does not name the setting.
- [line 124] The row button and the dialog share the text "Delete snacks?". A reader may read it as a question the button asks. Use "Delete" as the button label and keep "Delete snacks?" as the dialog title.
- [lines 132-135] This paragraph has four sentences and 32 words (6, 10, 7 and 9). It is over the three-sentence limit (page-conventions.md:45). Split it, or put the last two sentences in their own paragraph.
- [line 37] "Each row shows the name, the entry count, the helper that draws from the list and the description." (18 words) -> four parallel facts in one sentence. page-conventions.md:46 asks for a table.
- [lines 74-75] The exception to "does not pick the same entry twice" comes in a second sentence. Put it in the same sentence, or name the restart as its own case.
- [line 96] "If the list does not exist or has no entries, the step fails." -> the page does not say whether later pipeline steps still run or what anyone sees. Round 1 flagged this; it is unchanged. Under generic brief rule 5 it would decide the verdict; the run rule sets it to notes.
- [lines 85-96] The section says "A pipeline has the step Pick from list" but does not say how to add it to a pipeline. Round 1 flagged this; it is unchanged. Not checked: whether pipelines.mdx covers adding steps.
- [line 85] "Pick Lists" (capital L) versus "Pick lists" elsewhere. Use one spelling.
- [line 63] The code span "`{list.pick.`" is an open fragment. The example at line 68 gives the full form, so the reader can follow it.

## Density

Paragraphs over three sentences:
- Lines 132-135, four sentences, 32 words (see Notes).

Sentences with two ideas:
- "A pick list is a named list of entries, for example a list of snacks." is one idea and is not flagged.
- "After the bot restarts, one repeat can happen." (8 words, line 75), as noted above.

Runs of parallel facts that should be a table:
- "Each row shows the name, the entry count, the helper that draws from the list and the description." (18 words, line 37)

## Where I got lost

1. What "raise each of these to a higher role" changes, and where (lines 15-17).
2. Whether the pipeline keeps running after a pick step fails (line 96).
3. How to add the **Pick from list** step to a pipeline (lines 85-96).
4. Whether "Delete snacks?" on the row is a button or a question (line 124).

Otherwise I could follow every task on the page: make a list, use it in a reply, find it, edit it, delete it, and fix the common failure in the troubleshooting block.
