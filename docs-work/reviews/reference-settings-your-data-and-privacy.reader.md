# Targeted final review — 2026-11-06

Verdict: PENDING
Reviewed: src/content/reference/en/settings/your-data-and-privacy.mdx
Reviewed-SHA: 25c9a9d842afa77bfbcb6ff1e9e746e0fda467b102f1dc73200c0e304a209097
Reviewed-SHA256: 25c9a9d842afa77bfbcb6ff1e9e746e0fda467b102f1dc73200c0e304a209097
Reviewer: final-features correction author; self-review, not independent PASS
Product-Revision: 2dfefbb0c393f439954d79b32ac11511678d7f44 plus working tree

The full article was read editorially. The correction was independently traced from the staged lead to current source, then applied by this reviewer. This is targeted author verification, not a new exhaustive source audit, independent final-text approval or runtime test. See [final-features.md](../ecosystem-validation/final-features.md) for exact source anchors, coverage and remaining limits.

## Historical reviews

The original records below are preserved verbatim and apply only to their recorded hashes.

# Independent reader review: /reference/settings/your-data-and-privacy
Verdict: PASS
Reviewed: src/content/reference/en/settings/your-data-and-privacy.mdx
Reviewed-SHA: 6e5ded23cc40724f
Reviewed-SHA256: 6e5ded23cc40724facacc5d3b11e634d93016b2930d7b70c2b2801745b7b86d2
Reviewed-Date: 2026-11-05
Reviewer: independent reviewer, separate from article author
Product-Revision: 54da8b6318de63b5205a0ff8db35e0b9045dd959

The complete current article was read independently of its author, in the established settings, self-hosting and Code and SDK navigation order. The user's natural explainer/progressive-disclosure requirements take precedence over historical pilot mimicry, sentence caps and repeated page templates.

## Learning and lookup result

Opt-out and irreversible erasure are distinguished before the four panels. A reader can follow each procedure and understand personal scope, the 10,000-chat export cap, private file handling and channel-scoped opt-out.

No outstanding substantive reader finding.

Related routes were checked as contextual continuations rather than prerequisites for ordinary bot use. Draft labels remain appropriate for code material. This is a text/structure review, not a claim of rendered browser QA.

## Historical review (superseded)

# Reader review: C:\Projects\NoMercyLabs\nomnomzbot-docs\src\content\reference\en\settings\your-data-and-privacy.mdx
Historical verdict: PASS
Reviewed: C:\Projects\NoMercyLabs\nomnomzbot-docs\src\content\reference\en\settings\your-data-and-privacy.mdx
Reviewed-SHA: 373e2676c5fa9294

Re-review of the current page. The two earlier blocking findings are verified fixed:

- Label conflict: L25 now names the panel row **Erase all my data** with the **Erase my data** button, and L80 and L85 use the same button name. The labels agree.
- Opt-out scope: L67-73 now states that a channel-scoped opt-out turns off only the switches of consents given in that channel, and that other consents keep their switches. The reader can tell the result of the step in both cases.

No blocking finding remains. The notes below are style and density suggestions, so the verdict is PASS.

Notes (not blocking):

- [L30] The file name is given as `nomnomzbot-my-data-` "with the date". The date format is not shown, so the reader cannot predict the exact name. Give one full example name.
- [L41] The "Legal basis:" line is said to "name the basis", but the page never says what the values look like. Give one example line.
- [L39] "Lists each consent you gave, with a switch." carries two ideas. Split it.
- [L93-96] The table names "service accounts", "connections", "records", "viewer data rows", "sign-in tokens", "sessions" and "encryption keys" with no short explanation. A reader who does not write code will not know these terms.
- [L99] "The bot ends every sign-in you have and destroys the keys that lock your stored data." carries two ideas in one sentence, and "keys" is not explained.
- [L69] "When you have a channel open" is still not explained on this page. The reader does not know what "open" means here. Name the channel the dashboard has selected, or link the page that explains it.
- [L113] The scope table gives "Whole deployment", but the page does not say which request gets that scope. The erase step does not state its scope, so the reader cannot predict the row under **Your requests**.
- [L123-124] The retry control is called "a retry" and not by its label. Name the button as the panel shows it.
- [L70] "Consents not tied to a channel" is not defined. The consent table does not say which consents carry a channel. One sentence would close this.

Density check:

- Every block between two blank lines was counted. No block has more than three sentences. The longest blocks are L39-41 and L67-73 (three sentences each).
- Tables hold the enumerations (panels, consents, status, scope, list items).

Voice against the pilot page (`src\content\reference\en\commands\create-a-command.mdx`): the same. Steps start with "Choose", labels are bold, the bot is "the bot", results are quoted, and troubleshooting uses the same directive.

Assumes: `/reference/community/viewer-pages` now exists at `src\content\reference\en\community\viewer-pages.mdx`, so the **Related pages** link (L131) resolves. The viewer-pages content was not read for this review; the link was judged on the ledger line.

Checked for the hosting marker, plain rule, namespace and license words: the page names no hosting, price or license, and it does not use the name NoMercyBot. No rule in the reader role is triggered on those points.
