# Current independent fact check

Verdict: PASS
Reviewed: src/content/reference/en/templates/lookup.mdx
Reviewed-SHA: 671a5aca14300b6d10c13d1fd9f5785c0a50fbece4de790549aeb068d81c3172
Reviewed-SHA256: 671a5aca14300b6d10c13d1fd9f5785c0a50fbece4de790549aeb068d81c3172
Reviewed-Date: 2026-11-05
Reviewer: independent section reviewer
Product: 54da8b6318de63b5205a0ff8db35e0b9045dd959 (initial source tracing b12f4f69638553c03ed64c1518c90d7bcccd6907)

The full article was read in navigation order; consequential behavior and reference details were checked against current source. All reported documentation findings affecting this page were repaired and re-reviewed. This is a source review, not a live-channel test.

- All helper keys, family counts and Use in cells were compared with the refreshed registry export: docs-work/helpers.json (908 entries, zero missing descriptions); node scripts/gen-template-helpers.mjs --check placed 908/908 and found 359 typed examples.
- Registry context rules and event filtering: server/src/NomNomzBot.Application/Abstractions/Templating/TemplateHelperRegistry.cs:32-128,153-178; aggregate provider registration/find: server/src/NomNomzBot.Infrastructure/Platform/Templating/TemplateHelperRegistryAggregate.cs:36-93.
- Export source: scripts/export-template-helpers/Program.cs:52-96,182-214; generated table/surface mapping: scripts/gen-template-helpers.mjs:455-481. Source review boundaries and implementation checks are in docs-work/overhaul/review-learning-commands-helpers.md.
- This page retains 10 registered helper rows with their descriptions, illustrative samples and contexts.
- Family provider: server/src/NomNomzBot.Infrastructure/Platform/Templating/Helpers/Lookups/LookupTemplateHelpers.cs:22.

Report: docs-work/overhaul/review-learning-commands-helpers.md.

## Historical evidence

The material below is retained as historical evidence. Its older hashes, verdicts and values do not constitute the current review.

# Fact check: src/content/reference/en/templates/lookup.mdx
Verdict: PASS
Reviewed: C:/Projects/NoMercyLabs/nomnomzbot-docs/src/content/reference/en/templates/lookup.mdx
Reviewed-SHA: 6f3da75f021f1c1b

Product repo: C:/Projects/NoMercyLabs/nomnomzbot master, HEAD 18e2bf1f0 (b6adc85d2 is an ancestor). Note: docs-work/helpers.json meta.productCommit is a8f180821; every row below was re-read at HEAD.
Paths below are relative to server/src/NomNomzBot.Infrastructure/Platform/Templating/Helpers/Lookups/ unless named in full. Strings: server/i18n/strings/values/strings_template_lookup.xml.

## Key line
Page line 6: "Helpers on this page: `{lookup.*}`." Groups file Types row 290 key patterns: `lookup.*`. Match.

## Sampled helpers (all 10 rows)

| Key (page line) | Product row | Description match | Example plausible |
| --- | --- | --- | --- |
| lookup.currency (14) | LookupCurrencyHelpers.cs:25-33 | yes, strings_template_lookup.xml:18 | yes: ConvertAsync (:59-79) writes "{amount} {FROM} = {converted 0.00} {TO}"; typed example from LookupHelpersTableTests.cs:68 |
| lookup.currency.date (15) | LookupCurrencyHelpers.cs:43-51 | yes, :20 | yes: 0 args default EUR/USD (:96-97), yyyy-MM-dd (:102) |
| lookup.currency.rate (16) | LookupCurrencyHelpers.cs:34-42 | yes, :19 | yes: "0.####" (:87) gives 1.162 |
| lookup.game (17) | LookupGameHelpers.cs:22-30 | yes, :14 | yes: box art URL with {width}/{height} set to 285/380 (:51); needs a ".boxart" field (:46-48) as the description says |
| lookup.game.top (18) | LookupGameHelpers.cs:31-39 | yes, :15 | yes: game.Name (:55-58) |
| lookup.time (19) | LookupTimeHelpers.cs:23-33 | yes, :17 | yes: HH:mm (:60); fields date, offset (:36); saas off: OpenMeteoAllowed false in saas (LookupSources.cs:50, used at LookupTimeHelpers.cs:44) |
| lookup.translate (20) | LookupTranslateHelpers.cs:25-33 | yes, :21 | yes: 2 args from "en" (:50-53); test LookupHelpersTableTests.cs:74 |
| lookup.translate.chat (21) | LookupTranslateHelpers.cs:34-42 | yes, :22 | yes: reads args then message (:45, :55-63), from call.Language = channel language (LookupRow.cs:28-31, TemplateRenderScope.cs:37) |
| lookup.twitch (22) | LookupTwitchHelpers.cs:43-65 (fields) | yes, :13 | yes: game, title, display, avatar, createdAt, isLive, viewers, uptime, lastGame, url, followers listed; own channel only for followers/followage (:118, :128) |
| lookup.weather (23) | LookupWeatherHelpers.cs:23-31 | yes, :16 | yes: no field gives "{place}: {temp}, {condition}" (:61-62); fields (:37-46); saas off (:55) |

## Intro (page line 8)
"a game, the weather, a time zone, a currency rate or a translation" - every item has a row (game 17-18, weather 23, time 19, currency 14-16, translate 20-21). lookup.twitch is not named in the intro, but the intro claims nothing false. True.

## Prose
Page line 10 ("Each row is its own example...") is a generic note; no fact to check. Page line 25 links only. No sentence on this page describes where templates resolve, so the chat-only rule has nothing to flag.

## Row count
10 table rows; groups file Count for /reference/templates/lookup is 10; frontmatter says 10. Match.

## Product defects
None found.
