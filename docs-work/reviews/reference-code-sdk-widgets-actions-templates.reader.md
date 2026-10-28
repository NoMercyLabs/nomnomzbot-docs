# Reader review: C:\Projects\NoMercyLabs\nomnomzbot-docs\src\content\reference\en\code\sdk-widgets-actions-templates.mdx
Verdict: PASS
Reviewed: C:\Projects\NoMercyLabs\nomnomzbot-docs\src\content\reference\en\code\sdk-widgets-actions-templates.mdx
Reviewed-SHA: 5ddb1953fd3aceac

Reader: a streamer or script writer who has read only `/reference/code/sdk-script-basics` (map Assumes). Pilot read next to it: `/reference/commands/create-a-command`. No blocking finding. Every item below is a note; the run rule keeps the verdict at PASS.

## Notes

- [line 30, 32] `on` passes `(data, eventType, meta)`. `onAny` passes `(eventType, data, meta)`. The order differs, and the page does not say so. A script writer who copies one handler into the other gets the wrong values. Say the difference in one sentence under the table.
- [line 30] `meta` is named before line 54 explains it. Move the one-line meaning of `meta` into the row or the sentence above the table.
- [line 24] "the widget page" is not defined. A reader does not learn where widget code lives. Line 20 links to Widgets and alerts but does not say the code goes there. Say it once, in the first section.
- [line 151] The example reads `#line` and sets `textContent`. The page never says the widget markup needs an element with that id. It also does not say where the example code runs. Name the element in one sentence. Coding skill is not claimed as zero, so this is not blocking.
- [line 74] "Catch that error." is not taught. The page does not claim the reader needs no coding skill, so this is a note. One clause naming the try/catch idea, or a link to Script basics, would close it.
- [line 79] `streamStats` takes `metrics`, and no metric names appear on this page. The map gives stream stats to `/reference/code/sdk-data-and-storage`, which the page does not link. Add that link at this sentence.
- [line 341] "it is open in no browser source" uses "browser source" with no definition and no link. The ledger gives "browser source" to `/reference/overlays/obs-browser-source`, which is not in this page's Assumes. The fix is a map edit (add the owner to Assumes or to Links to), not a new explanation here. Also reword "open in no browser source": a reader cannot tell what "open" means for a source.
- [line 345] `emit('Alerts', 'hug', ...)` uses an event name `hug` that the page never defines. The page does not say that any name works, or where the widget listens for it. The emit table at line 337 implies it. Say it in one sentence above the example. `bot.args[0] || 'chat'` is not explained here; it belongs to Script basics, so a link is enough.
- [line 136] "One of five game frames. Their fields: ..." lists about 20 fields in one cell with no way to tell which frame has which. A reader cannot tell what `entry` or `crew` mean for which frame. Split by frame, or name the frames in the cell.
- [line 141] The row `custom.` with a source name is unclear. The trailing dot reads as a typo. Write the full name pattern in code and say in words what it matches.
- [line 168] "fails with an error only when the widget is not connected to the bot" and the refusal `AUTH_REQUIRED`, "The widget connection is not signed in" (line 180), sound alike. A reader cannot tell whether a not-signed-in widget throws or returns a result. One sentence naming which case gives which answer would settle it.
- [line 163] "within the owner's own permissions" is unclear. Name the role, for example "the broadcaster" (the channel owner), as the rest of the guide does.
- [line 192] "It gives back `success`, `output`, `error` and `variables`." is four parallel facts in prose. Page conventions say a table. The result table at lines 170-175 already holds them: point to it instead.
- [line 191] One sentence carries two ideas: the grant and the quoting rule. Split it.
- [line 194] "When the action fails, the script goes on, and `nnz.lastError` says why." carries two ideas. Split it. Short enough to keep as is if the writer prefers.
- [lines 212-326] The action table lists parameter names only. A reader can find `music_set_repeat` and see `mode`, but cannot tell which values `mode` takes (line 241), what `execution` means (line 262), what `payload_json` holds (line 320), or what unit `step` uses (line 249). Each parameter needs a short meaning, or a link to the page that owns the action, or the allowed values. This is the main usability gap. It is not blocking because the page is a catalog, and the reader is a script writer, not a streamer following steps.
- [lines 358-368] "promise" (line 360, line 368) is not explained. A reader new to scripts or widgets may not know that a `render` call returns text after a wait. One clause would close it.
- [line 363] "values fills the plain names of the template" is unclear. "Plain names" is not defined. The example at line 149 shows it, so a pointer to the example would be enough.
- [line 6] "a template" is used before any link. The first link to Variables and templates is at line 355. The ledger asks for the link at first use.
- Voice (pilot comparison): the pilot uses second person and active verbs ("You make and change...", "Choose **Save changes**"). This page uses passive forms: "It is loaded before the widget code runs." (line 25), "is sent" (line 332), "is refused" (line 367). The sentence level is still clear. Changing the passives is a style choice for the writer.
- Project convention deviation (not a reader finding): `docs-work/page-conventions.md` line 107 says a catalog SDK page is table-first and every member has its own heading. The members of the widget SDK (lines 28-47) and the events (lines 91-141) sit in tables with no heading each. A reader can still find an item in the table, so this does not block the reader. The writer or the lead should decide whether the convention applies to this page.

## What was checked

- No paragraph over three sentences. Longest checked: lines 330-332, three sentences.
- No British spelling in prose. "canceled" (line 137) is American. "cancelled" appears only as a field name.
- No "NoMercyBot", no license name, no "open source", no emoji on the page.
- The Draft label is in the title (line 2) and the callout (lines 10-12). This matches the map's "(Draft)" label.
- No hosting or paid plan is mentioned, so the hosting marker is not required here.
- The bot voice: line 205 says the bot posts "in the channel's one bot voice". No second voice is described.
- The example at lines 197-203 has one blank line between steps.
- The example at lines 145-152 has blank lines between its steps.
- The example at lines 344-350 has one blank line between its steps.
- Page file SHA-256 at review time: `5ddb1953fd3aceacd2ce0b38ab6cceabadccd73736b2d70efaf101a6c117835e`.
