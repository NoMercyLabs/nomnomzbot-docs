# Reader review: /reference/settings/bot-basics-and-personality
Verdict: PASS
Reviewed: C:\Projects\NoMercyLabs\nomnomzbot-docs\src\content\reference\en\settings\bot-basics-and-personality.mdx
Reviewed-SHA: 862e67535087c975

Scope: the page as stored (no directives needed expansion; the page uses one `::Troubleshooting` block pair only). Judged against the Assumes page `/reference/getting-started/dashboard-tour` (read in full this run) and the conventions in `docs-work/page-conventions.md`. The pilot `/reference/commands/create-a-command` was read for voice. No product source was read.

Blocking findings: none.

Notes (do not change the verdict):

- [lines 15-21, 24] Reachability conflict with the Assumes page. This page says a **Moderator** may open **Bot basics**, **Bot personality** and **Engagement triggers**. `/reference/getting-started/dashboard-tour` line 49 says **Settings** defaults to "The broadcaster only", and lines 60-61 say **Settings** replaces the sidebar with the settings pages. A moderator reading this page cannot tell whether the sub-page default overrides the **Settings** default. Reader's reading: the default for the sub-pages is the one that counts, but the text does not say so. The fact-checker or the owner must resolve this. Cost: a moderator may not find the steps on this page.
- [line 7] "the settings part of the sidebar" does not name the entry. Name it **Settings**, as the dashboard shows it. Cost: small; the reader has to infer the entry.
- [lines 48-50] "the bot leaves your channel's events at once" and "the bot joins them at once" do not say what stops or starts. The word "them" has no clear antecedent. Cost: the reader cannot tell whether the switch worked.
- [line 46, table cell] Three sentences and 27 words in one table cell. "Mods" is informal; the rest of the page says "a moderator". The On result is not stated; only the Off result is. Cost: the reader must infer the On result from the Off text.
- [line 46] "your rewards" is used before it is named or linked. The concept belongs to `/reference/automation/rewards` in `docs-work/ledger.md`. Cost: a reader who has not used channel points may not know what turns off.
- [line 48] "built-in commands" appears here without a link. `page-conventions.md` says to link a concept at its first appearance. Cost: small.
- [line 42] "lines the bot posts through your own account" depends on the bot account concept. This page neither explains it nor links it. Not judged against `/reference/getting-started/bot-account`, which is not in Assumes.
- [line 55] "Below the first step, a viewer reads as new." The first step is not named. Reader's reading: it means "Casual from" (10 messages). Cost: the reader must guess the threshold. Suggested wording for the writer: "A viewer with fewer messages than **Casual from** reads as new."
- [lines 52-65] The viewer activity fields have no save step. The page does not say which **Save** saves them. Line 65 implies the card's **Save**. Cost: the reader may not know to press it.
- [lines 52-55] The page does not say what the activity level changes or where it shows. "The bot calls them casual, regular or veteran" has no stated outcome. Cost: the reader can set the numbers but cannot tell what they do.
- [line 65] "A wrong step shows its message under the field" does not name the message. Cost: small.
- [line 70] "It is still the channel's one bot voice: only the wording of the built-in replies changes." This carries two ideas in one sentence (one voice; only the wording changes). Not judged against the bot-account page.
- [line 93] Step 3 ("Choose **Save changes**.") has no stated outcome. Compare line 34 on the basics steps: "The page shows 'Basics saved.'" The pilot states an outcome on each step. Reader's reading: the reader can press the button but cannot confirm the save from this page. This is the clearest voice difference from the pilot.
- [line 98, table cell] "has not chatted for a while" waves at a threshold. Name the time, or say where it is set. Cost: the reader cannot tell when **Back after a break** fires.
- [line 113] "A new row opens with a count 5 higher than the last one." The first milestone has no row above it. The starting count is not stated. Cost: the reader cannot tell what the first new milestone shows.
- [line 24] Two ideas in one sentence (the values stay visible; the fields and save buttons go away). Cost: small.
- [lines 17-21] "A **Moderator** and every role above it" names no role above a moderator. The pilot names each role. Cost: the reader must go to Permissions to learn the list.
- [line 118 vs create-a-command line 136] Two prefix limits appear in two pages: this page's command prefix is 1 to 5 characters (line 41); the pilot's custom command prefix is up to 8 characters. These are different fields. A reader may ask which limit applies. Cost: small; a short clause on each page would settle it.

Density (measured):

- Paragraphs over three sentences: none. The longest is lines 23-25: three sentences, 42 words.
- Sentences with two ideas: lines 24, 65, 70.
- Table cells over one sentence: line 46 (three sentences, 27 words).
- Parallel facts that should be a table: none found. The tables for the basics fields, the viewer levels, the tones and the greetings are tables already.

Voice against the pilot:

- The sentences read as the same writer: the actor leads, steps name the control, Troubleshooting uses the same block, and the page ends with Related pages. Differences are the step outcomes (line 93) and the role list (lines 17-21), noted above.

Checked and clear:

- Each step in the basics, tone and greetings flows has an action, a place, and the default in the table. The steps can be followed without writing code.
- No term is used before it is introduced, except "rewards" (noted above).
- No second explanation of dashboard-tour content was found. The page points to the tour for the sidebar.
- No "NoMercyBot", no license name, no "open source", no emoji, no non-American spelling was found in the text read.

Not checked:

- The page's Assumes list is only `/reference/getting-started/dashboard-tour`. The map also names `/reference/commands/built-in-commands`, `/reference/settings/permissions` and `/reference/commands/pipelines` only as links, so they were not judged.
- Whether another review of this page is running was not checked. A verdict file for this page's fact check exists (`docs-work/reviews/reference-settings-bot-basics-and-personality.factcheck.md`); its content was not read.
