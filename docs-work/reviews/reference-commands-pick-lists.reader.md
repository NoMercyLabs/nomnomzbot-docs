# Reader review: src/content/reference/en/commands/pick-lists.mdx
Verdict: PASS
Reviewed: src/content/reference/en/commands/pick-lists.mdx
Reviewed-SHA: f474cce871227217

Round 3, a re-review. The page changed by one line since the last PASS (Reviewed-SHA a6445721fa9338dd): line 38 now sets the helper `{list.pick.snacks}` in code format. I read the whole page again as a new reader. Run rule: FAIL only for a blocking finding (a wrong fact, or a step a non-coder cannot follow). None found, so the verdict is PASS.

## Blocking findings

None.

## Checked against the assumed pages

- Voice: compared with create-a-command.mdx, read in this run. The same person wrote both. The actor is the subject, results are stated (for example "The dialog closes and the list shows on the page."), buttons are bold, and the troubleshooting block has the same shape.
- Helper form: variables-and-templates.mdx was not read in this run. Not checked. Round 2 said it matched at its line 224.
- No include or directive is expanded in this page. The page has two directives, ::Callout (lines 117-120) and ::Troubleshooting (lines 139-148), and both read as rendered.

## Notes (do not decide the verdict)

- [line 37] "the helper that draws from the list" is the first use of "helper". The page does not define it. The link to Variables and templates comes only at line 63. The row example at line 38 shows the form. Under the run rule this stays a note. Under the generic brief rule 5 (a term left undefined at its first use) it would decide the verdict.
- [line 37] "Each row shows the name, the entry count, the helper that draws from the list and the description." (18 words) is four parallel facts in one sentence. page-conventions.md:46 asks for a table.
- [lines 132-135] This paragraph has four sentences and 32 words (6, 10, 7 and 9). It is over the three-sentence limit (page-conventions.md:45). Split it, or set the last two sentences apart.
- [line 85] "Pick Lists" (capital L) differs from "Pick lists" (line 6 and elsewhere). The field label at line 90 is "Pick-list". Use one spelling for each label, taken from the dashboard (page-conventions.md:56-57).
- [lines 117-120] The rename callout names only replies. It does not say whether a rename changes a **Pick from list** step. Add one line, or say that the step follows the list.
- [line 124] "Delete snacks?" is both the button label and the dialog title. A reader may take the button as a question. Use "Delete" for the button, if the dashboard label allows it.
- [line 15-16] "The Broadcaster may raise each of these to a higher role." The reader cannot tell what "raise" sets. Name the setting, for example the lowest role that may make and delete lists, and link the Permissions page at the point of use.
- [lines 74-75] The exception to "does not pick the same entry twice" is a second sentence. Put it in the same sentence, or name the restart as its own case.
- [lines 85-86] The first sentence has two ideas: where the step sits (the group) and what it does (its description). Split it if the page is shortened.
- [line 96] "If the list does not exist or has no entries, the step fails." The page does not say whether later pipeline steps still run. Carried from round 2. Under the run rule it stays a note.
- [lines 85-96] The page does not say how to add the **Pick from list** step to a pipeline. Carried from round 2. Not checked: whether pipelines.mdx covers adding steps.
- [line 63] The code span "`{list.pick.`" is an open fragment. The full form at line 68 completes it.

## Density

Paragraphs over three sentences:
- Lines 132-135: four sentences, 32 words.

Sentences with two ideas:
- Lines 85-86, first sentence: the group and the description of the step (see Notes).

Runs of parallel facts that should be a table:
- Line 37: "Each row shows the name, the entry count, the helper that draws from the list and the description." (18 words)

Paragraphs at or under three sentences were checked and are not flagged, including lines 6-8 (3 sentences, 50 words) and lines 37-39 (3 sentences).

## Where I got lost

1. Whether renaming a list changes the **Pick from list** steps in a pipeline. The callout at lines 117-120 names only replies.
2. How to add the **Pick from list** step to a pipeline (lines 85-96).
3. Whether the **Delete snacks?** button on the row asks a question or starts a delete (line 124).
4. Whether a pipeline keeps running after a pick step fails (line 96).

Otherwise I could follow every task on the page: make a list, use it in a reply, use it in a pipeline, find it, edit it, delete it, and fix the common failure in the troubleshooting block.
