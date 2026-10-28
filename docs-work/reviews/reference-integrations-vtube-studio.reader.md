# Reader review: C:\Projects\NoMercyLabs\nomnomzbot-docs\src\content\reference\en\integrations\vtube-studio.mdx
Verdict: PASS
Reviewed: C:\Projects\NoMercyLabs\nomnomzbot-docs\src\content\reference\en\integrations\vtube-studio.mdx
Reviewed-SHA: 9f1e295e02da8a43

Reader: a streamer who does not write code. Read: the page only, plus the Assumes page (dashboard-tour), which the map names. Voice compared with the pilot page `commands/create-a-command.mdx`, which was open next to it. The page has no snippet directives, includes or `...` elisions, so the stored text is the text the reader sees. The older verdict in this file judged a different text and was not used.

Blocking: none. Every step below can be followed, and each one that changes state says what the reader sees.

## Not blocking, fix in the same pass

- [line 16] "For anyone else, the **Connection** form shows but cannot be changed." Line 12 says a **Moderator** or higher may open the page. The reader cannot tell whether a moderator who is not the broadcaster sees the form, or only someone outside the listed roles. Cost: the reader is unsure what a moderator sees.
- [line 12-13] "A **Moderator** or higher" names no full role list. The pilot page lists **Moderator**, **Lead moderator**, **Editor** and **Broadcaster**, and links **Permissions** for the roles. This page does not. Cost: the reader cannot tell where **Editor** sits. The map row lists no link to the permissions page. Fix: a map edit (Links to: permissions), then one link at first use.
- [line 27] "Choose **Save**." The step gives no outcome. The reader cannot tell whether the save worked before step 5. Cost: a failed save shows up later, in a different place. Fix: one sentence after step 4 saying what **Save** does.
- [line 26] "The default fits VTube Studio on the same computer as the bot, unless the streamer changed its address in VTube Studio." Two ideas in one sentence. Cost: the reader must work out which case applies. The page also does not say where VTube Studio shows its address.
- [line 29] Button label **Waiting for approval** and status text "Waiting for your approval in VTube Studio" (line 38) differ in wording. Cost: a minor mismatch when the reader matches the screen to the table.
- [line 50] **Bridge** is named in the table and in the collapsible (line 92), but the page never says how to set one up. A reader who chooses **Bridge** has no next step here. Cost: a dead end for that choice. The map does not name a page that covers it, so this is for the map owner to decide.
- [line 50] "a browser source in OBS" first appears without a link. The ledger gives the browser source to `/reference/overlays/obs-browser-source`. Cost: a reader who does not know the term has no path to it.
- [line 54-55] The eleven event names sit in one sentence, which is a run of parallel facts. The default "The first eight events" is only findable by counting that sentence. Cost: hard to scan for which events are on by default. Fix: a short list or table with a default column.
- [line 66] The "Connected" condition for the **Hotkeys** tab appears after the steps that need it (lines 60-63). Cost: a reader who runs the steps first is not told the precondition until afterwards. Fix: move the condition to the top of the section.
- [line 80] "Loads the model with the id you give." The page does not say where the reader finds the id. Cost: a reader building this pipeline step cannot find the value to type. The same gap applies to "by its id or name" (line 81).
- [line 85] "Send a raw VTube Studio API request" and "Sends any VTube Studio request type with its data." Jargon with no example. Cost: a streamer who does not code cannot tell what to send, or whether to use it.
- [line 87] "`vts.last_error` variable" names a variable with no link to `/reference/commands/variables-and-templates`. The ledger gives template variables to that page. Cost: the reader does not know where variables are explained.

## Voice and shape

- Same person as the pilot page: yes. Second person, present tense, bold labels, "Choose **X**." steps, a table for choices and defaults, a `::Troubleshooting` block in the pilot's form, and Related pages at the end.
- Paragraph density: no paragraph exceeds three sentences. Checked the text between blank lines at lines 6-8 (3 sentences), 12-13 (2), 16-17 (2), 25-26 (2), 54-55 (2), 65-66 (2), 92-94 (3).
- Headings: no heading ends with a colon, no heading carries a code span, each action heading starts with a verb.
- Namespace: the page says "the bot" only. No "NoMercyBot". No "open source", "AGPL", "GPL", "MIT" or "PolyForm". No hosting or price talk, so the hosting marker does not apply.
- Bot voice: the page describes no second bot voice.
- American English: no British spellings found.
- Frontmatter: title and description present; the description is one sentence under 160 characters.

## Where I got lost

- Line 16: I could not tell whether a moderator who is not the broadcaster sees the **Connection** form.
- Line 27: I could not tell whether **Save** worked before **Authorize**.
- Line 80: I could not tell where to find the model id.
