# Page conventions

One page of rules for every writer of the NomNomzBot user guide.
The Atlas skill rules (`architecture.md`, `writing.md`) apply first. These rules add what is specific to this site and this product.
Where a rule here and an Atlas rule differ, this page wins. The pilot page `/reference/commands/create-a-command` outranks this page for shape.

## Before you write

1. Read your row in `docs-work/map.md`: Job, Owns, Assumes, Links to, Covers.
2. Read `docs-work/ledger.md`. A concept owned by another page is named in a clause and linked, never explained again.
3. Read the slice reports that cover your sources, the sections User surface, Flows and Traps. They hold the real labels and the file:line evidence.
4. Open the source files in Covers and check each claim. The product repository is read only.
5. Write one page. Write only your own `.mdx` file and the fact-check file for it. Do not touch other pages, the map, or the nav.

## File and frontmatter

- The file path is `src/content/reference/en/<area>/<page>.mdx`. The route is `/reference/<area>/<page>`. The start page is `src/content/reference/en/overview.mdx`.
- The page path in the map and the file path match exactly. A page that is not in the map is not written.
- Frontmatter has two fields, written in this order. Both are plain text.

```yaml
---
title: Create a command
description: Make, edit, switch on, copy and delete a chat command.
---
```

- `title` is short, in sentence case, and names the task or the thing. It is the sidebar text.
- `description` is one sentence, under 160 characters, and says what the reader can do after the page.
- Do not add `order`, `draft`, `category` or `tags`. The sidebar order is `src/lib/nav-structure.ts`, and the map owns the order.
- The first line under the frontmatter is not a heading that repeats the title. The page starts with one or two sentences that say what the reader can do here, then the first section.

## Headings

- `##` for sections, `###` for steps and flows. Never a `#`; the title comes from the frontmatter.
- A heading is plain words. A heading with a code span next to words fails the style gate. Put the identifier in the first sentence under the heading.
- A heading that names an action starts with a verb: "Make a command", "Turn a command off".
- A step heading is numbered in the text of the list, not in the heading, when the steps are short. Use numbered headings ("1. Open the page") only for a walkthrough.
- No heading ends with a colon. No heading is "Other", "Misc" or "More".

## Sentences and paragraphs

- One idea per sentence. Two clauses joined by a comma are two sentences.
- One sentence per line in the source.
- Three sentences to a paragraph at most, then a blank line.
- Four parallel facts are a table, never a paragraph.
- Nothing between a step and its outcome. A caveat comes after the result.
- Active voice, present tense, second person ("you"). Plain words.
- American English: color, canceled, favorite, behavior.
- No emoji. No people's names, not the owner's, not a community member's, not a streamer's. Use "the streamer", "a moderator", "a viewer".
- No filler opener that restates the heading. No "previously", "used to", "will", "soon", "planned" about what a feature does later. A page states what is true now.
- A feature that the dashboard shows as "Coming soon" is described by that sentence only: the label as the dashboard shows it, and that the page is not built yet. Do not describe what it will do.

## Labels

- Write a label exactly as the dashboard shows it, in bold: **Save**, **New command**, **Command prefix**.
- Take the words from `dashboard/src/views/dashboard/<area>/i18n/en.json` and `dashboard/src/i18n/locales/en.json`. Never from memory and never from the Dutch file.
- A menu path is a numbered list of steps, or the site's own sequence rendering. Do not type arrow characters between labels.
- An action key (such as `commands:read`) never appears on a page. Say who may do it in words: the broadcaster, an editor, a moderator, or "anyone who may open the page". The permissions page owns the ladder.
- A numbered permission level never appears on a page. Users do not see numbers.
- A default is written with its value and unit, copied from the literal in the code: "Default: 1 second."

## Directives and components

Use the site's own components. They live in `src/lib/mdx`. Plain Markdown is the base.

| Need | Write | Use for |
| --- | --- | --- |
| An aside that must not read as body text | a line `::Callout`, the text, a line `::` | One short note, a warning about a silent result, the plain rule |
| A symptom with its cause and fix | a line `::Troubleshooting`, then `**Symptom in bold.**` and the fix, a line `::` | A step that can fail without a message |
| Fields and their meaning | `::properties` with `::property {{ name: '...', type: '...' }}` lines, a line `::` | A list of settings on a settings page, when a table is too narrow |
| Parallel facts | a Markdown table | Labels, defaults, choices, who may do what |
| A group of links to other pages | `::IconCards` with `::IconCard {{ href: '/reference/...', name: '...', icon: '...' }}` lines, a line `::` | The start page and area landing text only |
| A call to action | `::Button` | The start page only |

- Each directive line stands alone, with a blank line before and after it.
- A table is for enumerations: choices, labels with defaults, status words. Prose under a table adds only what the table cannot hold.
- Optional detail goes in a collapsible block written as HTML, so it does not slow the main path:

```mdx
<details>
<summary>Set a different prefix for one channel</summary>

The text of the optional detail, in the same short sentences.

</details>
```

- Leave a blank line after `<summary>` and before `</details>` so the inside renders as Markdown.
- Important first. The first screen of the page holds what most readers need. Rarely used options go in a collapsible block.
- No images. A screenshot goes stale and is not checked by the build.
- Code blocks only where the reader types or copies something: a chat message, a template, a script. Lane E pages show script code in fenced blocks, formatted the way the dashboard code is formatted, with blank lines between steps.

## Page shape

Every feature page follows this order, and leaves out a part that has nothing to say:

1. Opening sentences: what you can do and where to find it in the sidebar (the label, in bold).
2. Who can use it, in words, when it is not everyone.
3. The main flow as numbered steps. Each step says what you now see.
4. A table of the labels and choices on the page, with defaults.
5. Other flows, one short section each (edit, switch on or off, copy, delete).
6. Optional detail in collapsible blocks.
7. Troubleshooting for a result that fails without a message.
8. Related pages, as a short list of links.

A quickstart reaches a working result in the first section and says where the reader can stop. A page of tier `catalog` or `reference` for the SDK is a table-first page; every member has its own heading.

## Links

- A link to another guide page is an absolute route: `[Create a command](/reference/commands/create-a-command)`.
- The target must be a page on the map. The links gate fails on any other target.
- Link a concept the first time it appears on the page, as the ledger says. Do not link the same page twice in one section.
- A link to the product repository is not allowed on a page. A guide page for a streamer does not send the reader to source code.

## Words the guide uses

- The product is **NomNomzBot**. The code is `NomNomzBot.*`. No other spelling of the name exists.
- Say "the bot", "the channel", "the dashboard", "the streamer", "a moderator", "a viewer".
- Say "chat command", not "slash command". Say "channel-point reward", not "redeem".
- The bot talks in one voice. A reply, an announcement, an event response and a narration are lines the bot types in chat in the channel's one bot voice. The bot speaks aloud only through text to speech. Do not describe a second voice for the bot.
- A bot account is never required. A self-hosted bot uses the streamer's own account until a separate bot account is registered. Say it that way, and link the bot account page.
- Platforms: Twitch, Kick, YouTube. Name a platform only for what the code supports today, with the sentence's source in the fact-check file.

## The plain rule and the hosting marker

Two sentences exist for the rules about use. Copy them exactly. Never name a license. Never write "open source", "open-source", "AGPL", "GPL", "MIT" or "PolyForm" on a page.

The plain rule appears on the overview page, and on any page that explains what the reader may do with the software:

> NomNomzBot is free to use, change and share. You may not earn money with it.

The hosting marker appears on every page that mentions hosting the bot for other people, a hosted service, a paid plan, a subscription, or a price:

> Running it for yourself, your friends and your community is free. You may not earn money with it: no selling it, and no paid hosting or paid service built on it.

Never present a paid plan or paid hosting as a normal way to use NomNomzBot. The billing page explains the Billing screen as an account screen and states the marker.

## Citing sources

- A page carries no source citations. A hidden comment in the page is not allowed, and neither is a footnote with a file path.
- Keep the evidence in the fact-check file: `docs-work/reviews/<slug>.factcheck.md`, where the slug is the page route in lowercase with every run of other characters turned into one dash and no leading dash (for example `reference-commands-create-a-command`). The reader review is `<slug>.reader.md`; both carry a line `Verdict: PASS` when they pass. Each claim in the page gets a line with the file and line number that proves it.
- A claim that rests on a comment or a test is a claim, not proof. Check the code that runs.
- Anything you did not check is not on the page.
- Quote a default from the literal in the code. Quote a label from the `en.json` file. Quote a limit from the code that enforces it.

## Not allowed

- No claim about a feature that the code does not have. A missing feature is left out, not mentioned.
- No fake data or invented viewer names. Use "a viewer", "the streamer", or a placeholder that reads as the reader's own value.
- No secrets, tokens or keys, and no real addresses. A placeholder host reads as the reader's own (for example `hooks.example.com` where the dashboard itself shows that placeholder).
- No developer instructions on a streamer page: no commands to build the bot, no file paths, no API routes, no action keys. The self-hosting pages show the Docker commands the install needs, and nothing else of that kind.
- No second explanation of a concept the ledger gives to another page.

## Done

A page is done when:

1. Every claim has a line in its fact-check file, and the fact-check reviewer wrote `Verdict: PASS`.
2. The reader reviewer, with the pilot page open next to it, wrote `Verdict: PASS`.
3. `sh docs-work/gates.sh links` and `sh docs-work/gates.sh style` pass.
4. Its status in `docs-work/map.md` is `reviewed`.
