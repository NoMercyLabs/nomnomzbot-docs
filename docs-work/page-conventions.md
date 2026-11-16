# Page conventions

These conventions support the user guide's framework, terminology, and source accuracy.
The owner's 2026-11-04 overhaul prompt sets the editorial direction: explain purpose, relationships, and workflows in natural connected prose, then provide precise reference details.
The owner explicitly cautioned that Atlas conflicts with the desired writing and that the guide must move away from Claude's mechanical style.

Atlas is an evidence and validation aid only for this overhaul.
Its voice rules, sentence caps, fixed page shapes, strict concept-ownership restrictions, and requirement to imitate the old pilot page do not govern the writing.
The sections below retain historical working details where useful; this editorial direction takes precedence over conflicting older rules.

## Before you write

1. Use the current navigation and section audit to establish the page's audience, prerequisites and related topics. The older `docs-work/map.md` is historical planning evidence, not an authoring gate.
2. Consult `docs-work/ledger.md` for terminology and source leads. Link to the main explanation of a concept, while retaining enough context and prerequisites for the current task.
3. Read the slice reports that cover your sources, the sections User surface, Flows and Traps. They hold the real labels and the file:line evidence.
4. Open the source files in Covers and check each claim. The product repository is read only.
5. Work within your assigned section. Update its article and evidence files together; coordinate shared navigation and maps through the lead.

## File and frontmatter

- The file path is `src/content/reference/en/<area>/<page>.mdx`. The route is `/reference/<area>/<page>`. The start page is `src/content/reference/en/overview.mdx`.
- Keep article routes stable. Register any new article in `src/lib/nav-structure.ts` and the current validation record.
- Frontmatter has two fields, written in this order. Both are plain text.

```yaml
---
title: Create a command
description: Make, edit, switch on, copy and delete a chat command.
---
```

- `title` is short, in sentence case, and names the task or the thing. It is the sidebar text.
- `description` is one sentence, under 160 characters, and says what the reader can do after the page.
- Do not add `order`, `draft`, `category` or `tags`. The sidebar order is owned by `src/lib/nav-structure.ts`.
- The first line under the frontmatter is not a heading that repeats the title. The page starts with one or two sentences that say what the reader can do here, then the first section.

## Headings

- `##` for sections, `###` for steps and flows. Never a `#`; the title comes from the frontmatter.
- Use clear headings. Technical-reference headings may include identifiers when that helps developers find an exact contract.
- A heading that names an action starts with a verb: "Make a command", "Turn a command off".
- A step heading is numbered in the text of the list, not in the heading, when the steps are short. Use numbered headings ("1. Open the page") only for a walkthrough.
- No heading ends with a colon. No heading is "Other", "Misc" or "More".

## Sentences and paragraphs

- Express ideas clearly and connect related thoughts naturally. Use a sentence length suited to the explanation.
- One sentence per line in the source.
- Keep each paragraph focused, without a fixed sentence cap.
- Use tables for comparisons and exact reference values. Use prose when the reader needs an explanation.
- Put prerequisites and consequential warnings before the step that depends on them. Keep the expected outcome close to the instructions.
- Active voice, present tense, second person ("you"). Plain words.
- American English: color, canceled, favorite, behavior.
- Use anonymous, realistic bot examples. Preserve attributed creators and cited sources in historical or educational material.
- No filler opener that restates the heading. No "previously", "used to", "will", "soon", "planned" about what a feature does later. A page states what is true now.
- A feature that the dashboard shows as "Coming soon" is described by that sentence only: the label as the dashboard shows it, and that the page is not built yet. Do not describe what it will do.

## Labels

- Write a label exactly as the dashboard shows it, in bold: **Save**, **New command**, **Command prefix**.
- Take the words from `dashboard/src/views/dashboard/<area>/i18n/en.json` and `dashboard/src/i18n/locales/en.json`. Never from memory and never from the Dutch file.
- A menu path is a numbered list of steps, or the site's own sequence rendering. Do not type arrow characters between labels.
- In user workflows, explain permissions through the roles readers recognize. Developer references must preserve exact action keys, scopes, numeric values and checks when they are part of the contract.
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

## Structure that fits the subject

Choose the article's structure around what the reader needs to learn or accomplish.
A tutorial can lead to one useful result; a conceptual guide can explain relationships before introducing controls; a reference can lead with a concise table.
Do not make every page follow the same sequence of definition, permissions, fields, CRUD operations, and related links.

Introduce the purpose and context before detailed options.
Keep prerequisites and permissions near the actions that need them, and explain what the reader can expect after each meaningful step.
Use realistic examples with source-verified syntax and outcomes, including a common mistake where it helps.

Keep advanced details available without making them prerequisites for everyday use.
Use contextual links and optional detail where appropriate; do not hide an essential limitation in a collapsed section.

## Links

- A link to another guide page is an absolute route: `[Create a command](/reference/commands/create-a-command)`.
- Internal targets must resolve in the current built site. Cross-collection links are allowed when they help readers move between related concepts and tasks.
- Link a concept the first time it appears on the page, as the ledger says. Do not link the same page twice in one section.
- Streamer workflows should not require reading source code. Developer references may link to implementation, declarations and contributor documentation where useful.

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

- Keep the evidence in the fact-check file: `docs-work/reviews/<slug>.factcheck.md`, where the slug is the page route in lowercase with every run of other characters turned into one dash and no leading dash (for example `reference-commands-create-a-command`). The reader review is `<slug>.reader.md`; both carry a line `Verdict: PASS` when they pass. Each claim in the page gets a line with the file and line number that proves it.
- A claim that rests on a comment or a test is a claim, not proof. Check the code that runs.
- Anything you did not check is not on the page.
- Quote a default from the literal in the code. Quote a label from the `en.json` file. Quote a limit from the code that enforces it.

## Not allowed

- Do not invent features. Explain unfinished controls and consequential limitations when readers would otherwise assume they work.
- No fake data or invented viewer names. Use "a viewer", "the streamer", or a placeholder that reads as the reader's own value.
- No secrets, tokens or keys, and no real addresses. A placeholder host reads as the reader's own (for example `hooks.example.com` where the dashboard itself shows that placeholder).
- No developer instructions on a streamer page: no commands to build the bot, no file paths, no API routes, no action keys. The self-hosting pages show the Docker commands the install needs, and nothing else of that kind.
- The ledger identifies the main home of a concept. Give enough context for a reader who arrives directly, then link to the fuller explanation without repeating it wholesale.

## Done

A page is done when:

1. The review record identifies the source-backed corrections, exact reviewed scope, and unresolved claims. Author self-review is distinguished from an independent review; historical hashes do not approve later text.
2. The reader review checks purpose, prerequisites, first use, expected outcomes, advanced lookup and related topics as appropriate to that page. It does not enforce a pilot page's shape.
3. The current `yarn build` passes, including TypeScript, tests, navigation, MDX, search and rendered links. The final report states the actual checks performed and any runtime or browser checks not performed.
4. The current section and final-pass records agree on coverage, changes and remaining work. The historical map and style gates do not override the owner's editorial requirements.
