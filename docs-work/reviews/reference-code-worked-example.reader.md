# Reader review: C:\Projects\NoMercyLabs\nomnomzbot-docs\src\content\reference\en\code\worked-example.mdx
Verdict: PASS
Reviewed: C:\Projects\NoMercyLabs\nomnomzbot-docs\src\content\reference\en\code\worked-example.mdx
Reviewed-SHA: 81c21ce8f77a61f3

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
