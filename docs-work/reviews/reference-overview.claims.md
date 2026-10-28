# Claims: /reference/overview

Product repo: C:\Projects\NoMercyLabs\nomnomzbot (read only). Docs repo paths are relative to nomnomzbot-docs.

| Claim | Evidence |
| --- | --- |
| The dashboard is a website; the bot is set up there (sign-in page owns the details) | dashboard/src/layouts/dashboard/navigation.ts:72-73 (`dashboardNav`); docs-work/map.md sign-in row |
| Start here cards are the first steps; Self-hosting and Code and SDK cards are optional | docs-work/map.md:59 (Links to); src/lib/nav-structure.ts:29-166 |
| Table term links point to their owner pages | each route is a row of docs-work/map.md; term is that page's topic (route names match) |
| Code and SDK (Draft) is the last part, for readers who write a little code | src/lib/nav-structure.ts:155; docs-work/scope.md "Lane E" |
| Sidebar label **Commands** | navigation.ts:181; dashboard/src/i18n/locales/en.json:817 |
| Sidebar label **Triggers and timers** | navigation.ts:188; en.json:818 |
| Sidebar label **Event responses** | navigation.ts:206; en.json:822 |
| Sidebar label **Overlays** | navigation.ts:218; en.json:824 |
| Sidebar label **Music** | navigation.ts:152; en.json:835 |
| Sidebar label **Text to speech** | navigation.ts:158; en.json:836 |
| Sidebar label **Channel points** | navigation.ts:247; en.json:829 |
| Sidebar label **Economy** | navigation.ts:253; en.json:830 |
| Sidebar label **Giveaways** | navigation.ts:265; en.json:832 |
| Sidebar label **Settings** | navigation.ts:288; en.json:839 |
| The bot answers in the channel's one bot voice; speaks aloud only through TTS | docs-work/page-conventions.md "Words the guide uses" (product rule, memory bot-speaks-in-one-voice); TTS page exists: navigation.ts:158 |
| Audience: streamers and moderators who do not write code; Code and SDK part for users who write a little code | docs-work/scope.md "Audience" and "Lane E" |
| Plain rule sentence | docs-work/page-conventions.md "The plain rule and the hosting marker" (verbatim); product LICENSE + CLAUDE.md license summary |
| Guide parts, names and order | src/lib/nav-structure.ts:29-166 (group names copied exactly) |
| Contents of each guide part | page slugs under each group in src/lib/nav-structure.ts:29-166 |
| The Draft label means the part is not finished and describes only what exists today | docs-work/scope.md:30 and :34; src/lib/nav-structure.ts:155 |
| Bot voice link and text to speech link owners | docs-work/ledger.md:16 and :44 |
| The bot can run on your own machine (Docker install) | product docs/install-docker-lite.md:1, :39, :46 |
| The bot uses an account in chat (self-host uses the streamer's own account until a bot account is registered) | docs-work/ledger.md:15 |
| Commands part includes cooldowns and permissions | src/lib/nav-structure.ts Commands group (fact-check note) |
| Card icons app, server, api are allowed | src/lib/mdx/remark-icon-cards.ts:79 |
| Link targets exist on the map | docs-work/map.md:59 (Links to column) |

## Claims I could not ground
- Which platforms the bot connects to (Twitch, Kick, YouTube): not in the Covers path; left out.
