# Reader review: C:\Projects\NoMercyLabs\nomnomzbot-docs\src\content\reference\en\getting-started\dashboard-tour.mdx
Verdict: PASS
Reviewed: C:\Projects\NoMercyLabs\nomnomzbot-docs\src\content\reference\en\getting-started\dashboard-tour.mdx
Reviewed-SHA: eaeafa72bcb0cee0

Read in this run: the whole page (277 lines, read fresh), the pilot `commands/create-a-command.mdx`, `getting-started/sign-in.mdx` (the Assumes page), the reader role file, `docs-work/page-conventions.md` and `docs-work/ledger.md`. The page has no includes or snippets. Its directives are read as the content they wrap.
The page digest was the same at the start and at the end of this run.
Not checked: label text against `en.json`, and every default and permission against the product source. Both belong to the fact-check role. The product source was not read, by role rule.
The older verdict in this file (Reviewed-SHA b98f67e3cfd8c2e3) judged an earlier text. Its blocking finding quotes "Readability and Your data" at [74], which the current text does not say. That finding is not carried forward. This run judged only the current text.

## Blocking findings

None. Every step can be followed by a reader who does not write code.

## Other findings (notes, not blocking)

- [11-14] Density. This paragraph has 4 sentences and 47 words. The fourth sentence, "On a narrow window, both are in a bar at the top," is a pointer. Split it, or move it under the smaller-screen section.
- [170-173] Density. This paragraph has 4 sentences and 25 words. Split it after "Most items also have **Open**."
- [45] "A VIP" appears in the access table before the page explains roles. "VIP" is not defined on this page. The page points to Permissions at [52], which is enough. A short pointer at [45] would help.
- [106] and [170-172] The **Needs attention** panel and the **Action required** inbox both have **Open** and **Dismiss**. The page does not say whether they are one list or two. A reader may look for the same item in both.
- [172] "Most items also have **Open**." The page does not say which items have no **Open**.
- [107] and [128] The **Connections** panel is described as each platform with its account ([107]). Then [128] says "Under **Bot and services**, the **Connections** panel shows the bot account and each service." A reader cannot tell whether these are one panel with two parts. Say so.
- [138] "the voice" does not say which voice: the bot's chat line, or text to speech. Name it. A link to the [bot account](/reference/getting-started/bot-account) page does not settle it.
- [152] "applies the protections you set up for it on Twitch" does not name the protections. A reader cannot tell what Shield mode changes.
- [194] "You may have one item open, such as one pipeline in its editor." The page does not say which kinds of item count. Name them, or drop the clause.
- [187] and [200] Step 1 calls the group "**Your channel**". The text at [200] says "Under your own channels, the list shows **Recent channels**." Use one label for the same group.
- [83] "Hover an icon to read its name." A touch screen has no hover. The page gives no other way to read the names at 600 to 839 px.
- [264-268] The Shield troubleshooting block gives a cause and a wait, and no next step. A reader whose button never shows has nothing else to try. If the button never shows, say what to check.
- [55-56] "every page can show for a moment" is unclear. A reader may ask whether a page loads, flashes, or is shown in error. One clause would name it.
- [214] Role names are bold labels in the account menu ("**Broadcaster** in your own channel, or **Moderator**"). In prose they are lower case ("a moderator", "the broadcaster"). The pilot writes them as bold capitals. Pick one style for role names.

## Density

Paragraphs over three sentences: [11-14] (4 sentences, 47 words) and [170-173] (4 sentences, 25 words). Every other paragraph has three sentences or fewer. Parallel facts that should be a table: [128-130] gives the status words for the bot account and the services in two sentences. This is minor.

## Checked, no finding

- **Sign-in** is not taught again. [6-7] links it, and the page does not restate it. The sign-in page owns the sign-in flow, and this page uses it only as the place the reader starts.
- The Settings access in [49] and the Readability line in [74] do not contradict each other. [74] names the account menu route to **Readability**, which is a settings page. [49] covers the **Settings** page in the sidebar.
- No "..." or other omission marker in the page text. No code block is elided.
- No "NoMercyBot", no license name, no "open source", no emoji, no action key, no numbered permission level.
- No hosting or price claim, so the hosting marker does not apply.
- No second bot voice in the page text.
- The three `::Troubleshooting` blocks at [246-270] each have a bold symptom and a cause. The first two also have a fix. Only the Shield block lacks one (see the note above).
- "Coming soon" at [36] uses the label as the dashboard shows it, as the conventions allow. The page does not describe what those pages will do.
- No "will", "soon" or "planned" about a feature's future.

## Voice check

Does this read as the same writer as the pilot? Mostly yes. The sentence-level voice is close. The actor is the subject ("The sidebar lists", "The dialog shows"). Results are stated plainly, and constraints arrive as their symptoms. The tier explains the difference in opening: a tour names the sidebar before the task, and that is acceptable.

## Where the reader got lost

- Whether the **Connections** panel at [107] and the **Connections** part under **Bot and services** at [128] are one panel (see the note above).
- Which list holds an item that needs attention: the **Needs attention** panel or the **Action required** inbox (see [106] and [170-172]).
- Which items count as "one item" for the channel switcher (see [194]).
- What to do when the Shield button never shows (see [264-268]).
