# Scope (G0)

Settled by the owner on 2026-10-28. Not asked again.

## Audience

Streamers and their moderators who do not write code.

## Included

Everything a streamer or moderator uses in the dashboard:

1. Getting started: sign in, connect Twitch, the bot account.
2. Commands.
3. Timers.
4. Event responses.
5. Rewards.
6. Widgets and overlays.
7. Music and song requests.
8. Text to speech.
9. Moderation.
10. Currency and games.
11. Integrations: Spotify, Discord, YouTube, OBS, Stream Deck.
12. Community and viewer pages.
13. Settings and data and privacy.
14. Self-hosting basics.

## Lane E (added 2026-10-28 by the owner): code scripts and the SDK, as a draft

The owner's words (translated from Dutch): "Yes, I think it is useful if we at least publish a draft now for the code and the SDK, so that users (two community members, named in the original) can already do something with it. It does not have to be fully finished, as long as what is available now is documented. It may just be a rough draft."

Audience: users who write a little code.
Pages: the code scripts page in the dashboard (create, edit, test run, versions, errors), how a script is triggered (the run_code pipeline action), the SDK reference generated from the real typed surface, and one short worked example.
Rule: document only what exists today. The section title carries "Draft".
Source: `dashboard/src/views/dashboard/scripts`, `server/src/NomNomzBot.Infrastructure/DevPlatform` (including `SdkRuntimeSurface.cs`, `TypeScriptDefinitionWriter.cs`), `dashboard/src/api/nnz-widget.d.ts`, `server/src/NomNomzBot.Infrastructure/CustomCode`.
The library page: the sidebar lists a library entry and a gallery entry, but no route named `dashboard-library` or `dashboard-gallery` exists in `dashboard/src/views`, so there is no library page to document today. Not a page.



Audience: a Twitch viewer or streamer who has never met the topic.
Source: the fact-check ledgers in `.scratch/identity-research/` of the product repository (read only, git-ignored) and the outside pages they opened. These are not product files. The first three ledgers leaned on US sources. The four world ledgers (`ledger-world-*.md`) re-check them against Dutch, Flemish, German, Swedish, Canadian, Australian, UK, Latin American, African, Asian and Pacific community sources and UN pages. The world ledgers win where they differ.
Regional rule: a page leads with what the world sources agree on. Where usage differs by region, the page says so and names the region. Advice that only a US guide gives is labeled as US-guide advice.
Differences from the product pages:
- These pages are about people, not about a feature. No dashboard label or product code is cited.
- These pages cite outside sources on the page, in a short "Sources" list. This is the one exception to the rule that a page carries no source citations.
- Each claim still gets a line in the fact-check file: the ledger row, or the outside page for a claim that is not in a ledger.




- A page opens with a scene a Twitch viewer or streamer knows, then teaches the idea from the ground up.
- Every rule is positive: "use the word a person uses", never a list of bans.
- Two readers at once: the person who has never met the topic, and the person the page is about. The page is fair to both. No judgment of either.
- One topic per page: one identity, one orientation, one flag.
- Sources: community groups from many regions first, UN and WHO next, US guides last and labeled.

## Excluded

- The API reference.
- Contributor documentation.
- The platform-operator pages.
- These come in a later lane.

## Product repository

Read-only. Source of truth is the code at `master` of the product repository (commit `9190f7c75` or later). `FEATURES.md` is being fact-checked and is not a source.

## Derived decisions (the owner may correct)

- The platform-operator pages (`dashboard/src/views/dashboard/admin`) are not in the user guide. A streamer or moderator does not open them.
- Server behavior that sits in the Infrastructure layer is read per claim by the page writer and the fact-checker. A claim that rests on such a file cites the file and line. The coverage denominator for the scanners is the dashboard views a user opens, the dashboard navigation, the API controllers and the Application feature folders.
- The site is the existing documentation system. Pages go in `src/content/reference/en/`, the sidebar order is `src/lib/nav-structure.ts`.

## Rules every page follows

- The plain rule about use: free to use, change and share; no money from it. No license label.
- Wherever hosting for others is mentioned: no money from hosting. Running it for yourself, your friends and your community is free.
- Plain words. One topic per page. Important first. Optional detail in a collapsible block.
- American English.
- Labels come from the real dashboard words.
