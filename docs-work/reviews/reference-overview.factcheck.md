# Fact-check: /reference/overview
Verdict: PASS
Reviewed: C:\Projects\NoMercyLabs\nomnomzbot-docs\src\content\reference\en\overview.mdx
Reviewed-SHA: b20e4f0f67996da9

This review read the whole current text (97 lines), after the start-path rewording and the new table links.

## What was checked in the current text

| Claim (page line) | Evidence | Verdict |
| --- | --- | --- |
| The dashboard is a website (12) | product dashboard/index.html exists (Vue web app) | true |
| Bot answers in the channel's one bot voice (14) | product server/src/NomNomzBot.Infrastructure/Tts/PipelineActions/ViewerWordsTemplate.cs:20; Chat/PipelineActions/SendMessageAction.cs:91 | true |
| Speaks aloud only through text to speech (15) | the Voice and sound group holds the only speech page, audio/text-to-speech (src/lib/nav-structure.ts Voice and sound group) | true |
| Code and SDK (Draft) is the last part (22) | src/lib/nav-structure.ts:155, last group | true |
| Plain rule sentence (31) | verbatim match with docs-work/page-conventions.md:131; consistent with product LICENSE:5,35 (noncommercial) | true |
| Start path: sign-in first, five cards, two optional cards (37-77) | card hrefs equal the Start here pages in src/lib/nav-structure.ts:31-39, in order; optional cards are rows of docs-work/map.md | true |
| "The sidebar lists the parts in this order" and the 12 part names (81-97) | src/lib/nav-structure.ts:31,42,54,62,70,77,86,99,109,122,132,147,155: same names, same order | true |
| Contents of each part (85-97) | each linked slug is listed in that part's group in nav-structure.ts | true |

## Link targets (52 distinct)

Each link and card href was matched to a row of docs-work/map.md whose first cell is exactly that route. 52 of 52 are rows of the map. 0 missing.
Most target page files are not written yet. nav-structure.ts:28 says a slug without a file is skipped, so this is expected and is not a finding on this page.

## Linked term against the target's map Job

52 of 52 terms match the Job of their target row. Examples: "cooldowns and permissions" -> "Set who may run a command and how long it waits"; "linked channels" -> "shares bans and blocks with linked channels"; "Stream Deck" -> "Make an API key for a tool such as Stream Deck"; "your data" -> "Download your data ... erase your data".
Note, not a failure: "games" links to /reference/economy/leaderboards-and-games. Its Job is leaderboards, and it says the Games page opens a Coming soon page. The term is owned by that page, so the link is right. The reader may expect a working games page. Reviewer's reading: acceptable.

## Conventions

- No source citation, no action key, no numbered permission level on the page.
- No license name and no "open source". The plain rule is present on the overview page, as page-conventions.md:129 requires.
- No hosting, plan or price mention, so no hosting marker is needed.
- No NoMercyBot name. No British spelling found (checked colour, behaviour).
- Bot speech is described as the one bot voice.

## Findings

None.
