# Current targeted editorial review — 2026-11-06

Verdict: TARGETED AUTHOR SELF-REVIEW; no independent or exhaustive PASS.
Reviewed: src/content/reference/en/code/worked-example.mdx
Reviewed-SHA256: 55f87fc8432a2c55922ed79210cd65e3d89df3d55e3de85ee5bcd4511a69ddc4
Reviewer: editing agent (author self-review)

Full editorial read; removed blanket Draft. Direct source: Infrastructure/CustomCode/ScriptStorageService.cs:31-166 and Jint/JintScriptExecutor.cs bootstrap for storage/chat wrappers. Counter remains explicitly non-atomic. Live chat and full command creation flow were not executed.

Coverage details and final static-check results: [final-developer.md](../ecosystem-validation/final-developer.md). Full reading is distinct from focused source verification. No live application/provider test or whole-project build in this batch.

## Historical records below — verdicts and hashes preserved

# Independent reader review: /reference/code/worked-example
Verdict: PASS
Reviewed: src/content/reference/en/code/worked-example.mdx
Reviewed-SHA: 594291d55fc9c7da
Reviewed-SHA256: 594291d55fc9c7da17652ddd917a23ce0a471db0755a8571ab4c1d8671839261
Reviewed-Date: 2026-11-05
Reviewer: independent reviewer, separate from article author
Product-Revision: 54da8b6318de63b5205a0ff8db35e0b9045dd959

The complete current article was read independently of its author, in the established settings, self-hosting and Code and SDK navigation order. The user's natural explainer/progressive-disclosure requirements take precedence over historical pilot mimicry, sentence caps and repeated page templates.

## Learning and lookup result

A single useful result is carried from code through dry run, explicit enable, command binding and two sequential expected replies. Failed writes do not falsely announce success, and concurrent increments are honestly bounded as a learning example.

No outstanding substantive reader finding.

Related routes were checked as contextual continuations rather than prerequisites for ordinary bot use. Draft labels remain appropriate for code material. This is a text/structure review, not a claim of rendered browser QA.

## Historical review (superseded)

# Reader review: C:\Projects\NoMercyLabs\nomnomzbot-docs\src\content\reference\en\code\worked-example.mdx
Historical verdict: PASS
Reviewed: C:\Projects\NoMercyLabs\nomnomzbot-docs\src\content\reference\en\code\worked-example.mdx
Reviewed-SHA: 4784df9f0857d816

Reader: a streamer who has not written a script. Pages read: the Assumes list in docs-work/map.md (sdk-chat-music-voice, sdk-data-and-storage). Also checked: sdk-script-basics "One rule for a bad value" (lines 186-208) and scripts.mdx (lines 10-16, 28-106) for the labels and the pointer on the page.

Result: the steps can be followed. The reader can create the script, run the test and see "Worked". The reader can see the reply line only by finding Timeline, which the page does not direct them to. No blocking finding.

## Contradictions with Script basics

- No sentence contradicts "One rule for a bad value". Empty text gives invalid_argument (basics line 193). A required value left out gives a whole-run stop with the message format "chat.reply needs a message" (basics line 191, page line 126). A bot call that fails gives its empty result and nnz.lastError (basics line 171, page line 117). Checked.
- To confirm: row 1 of the failure table (line 123) says "the value is too long" gives storage.set false, with no code. The one rule does not name length as a case. Not checked against the data page. The fact check should settle which code applies.

## Findings for the next revision (not blocking)

- [line 59-60] "grants" and "storage.get, storage.set and chat.reply" appear before any definition, and "grants" has no link to Script basics. The first mention must be linked (page-conventions, Links). The grant keys are action keys, which page-conventions keeps off the page.
- [line 116-119] Paragraph of 4 sentences, 52 words: "These calls follow ...", "A failed call gives back its empty result, and nnz.lastError says why.", "The script goes on after a failed call.", "A required value that is left out or null is not a failed call: it stops the whole run." Limit is 3 sentences. Also "These calls" has no clear antecedent after the run trace. Line 117 carries two ideas joined by "and".
- [line 69-72] Paragraph of 4 sentences, 35 words. Split it or cut the last one.
- [line 74-80] "Timeline lists what the run did" names a place the page never opens. scripts.mdx line 106 says Timeline lists Started, Chat, Effect, Console and Error. The page lists three of them. Say where Timeline is, and say the Chat row shows the reply line "Hugs given in this channel: 1".
- [line 55] "Replace the example code" assumes a new script starts with example code. scripts.mdx (grep for "example code") does not say so. Say what the editor shows.
- [line 57] Step 5 says the bot saves the next version. It does not say what the reader sees on success, or what a compile error looks like. A typo in a paste is the likely error here.
- [line 97-112] The eight-step trace is internals: the message id, "script time left", the saved run time, the version check. It adds no step the reader does. Move it to reference or cut it. "Script time left" is never defined.
- [line 42, 79] "threaded reply" and "storage.set" appear without explanation. The reader sees these words on screen. Use "under that message" and "the stored value" in prose.
- [line 121-126] "store" and "storage" name one thing. Pick "storage" throughout.
- [line 110-112] "By default it says" names a setting, but the page does not say where to change it. Either name the place or cut "By default".
- Map gap: the Assumes column (map.md line 129) omits /reference/code/scripts. This page depends on it for New script, Create script, Edit code, Save & Compile, Run test and Timeline (scripts.mdx lines 28-106). Add it to Assumes, not an explanation on this page.
- Not stated on this page: who may create a script. Not checked: whether it needs the broadcaster role.
- Not checked: the labels (New script, Save & Compile, Run test, Timeline, Worked) against dashboard i18n files. The fact check owns this.

## Voice and rules

- Voice matches create-a-command: "Open ... and choose ...", short result sentences, "You" as the subject. Checked.
- The Draft label is present in the frontmatter (line 2) and in the callout (line 10-12), as the sdk-docs-claim-check rule requires.
- No NoMercyBot spelling, no license name, no hosting or price text, no emoji, no British spelling found on the page.
- The bot speaks in one voice on this page (line 106). No second voice is described.
