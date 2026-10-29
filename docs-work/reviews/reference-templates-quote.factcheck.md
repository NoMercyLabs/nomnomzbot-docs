# Fact check: src/content/reference/en/templates/quote.mdx
Verdict: PASS
Reviewed: C:/Projects/NoMercyLabs/nomnomzbot-docs/src/content/reference/en/templates/quote.mdx
Reviewed-SHA: 86dba8c109f70d6b

Product repo: C:/Projects/NoMercyLabs/nomnomzbot master, HEAD 18e2bf1f0 (b6adc85d2 is an ancestor). Every row was re-read at HEAD.
Code: server/src/NomNomzBot.Infrastructure/Platform/Templating/Helpers/Quotes/QuoteTemplateHelpers.cs (QTH) and QuoteText.cs (QT). Strings: server/i18n/strings/values/strings_template_logic2.xml.

## Key line
Page line 6: "Helpers on this page: `{quote}`, `{quote.*}`." Groups file Types row 170: `quote`, `quote.*`. Match.

## Sampled helpers (all 7 rows)

| Key (page line) | Product row | Description match | Example plausible |
| --- | --- | --- | --- |
| quote (15) | QTH:34 | yes, strings_template_logic2.xml:16 | yes: QT:21 writes `#{Number} "{Text}"`; by number (QTH:87-94) |
| quote.author (16) | QTH:36 | yes, :18 | yes: QuotedDisplayName (QTH:101); typed example ComposingHelpersTableTests.cs:28 |
| quote.count (17) | QTH:39 | yes, :21 | yes: count with no arguments (QTH:62-64) |
| quote.date (18) | QTH:38 | yes, :20 | yes: yyyy-MM-dd in the channel time zone (QT:37-45, QTH:103 passes scope.Timezone) |
| quote.game (19) | QTH:37 | yes, :19 | yes: ContextGame (QTH:102) |
| quote.latest (20) | QTH:40 | yes, :22 | yes: QT.Line of the latest quote (QTH:65-68) |
| quote.text (21) | QTH:35 | yes, :17 | yes: quote.Text (QTH:100) |

## Intro (page lines 8-9)
"read the quotes the channel saved ... by its number, or its author, date and game" - matches the rows (QTH:73-74, :100-103). `random.quote` (QTH:41) is not on this page; it matches `random.*` and the intro does not claim it. True.

## Prose
Page line 11 is a generic note. Page line 23 links only. No sentence describes where templates resolve.

## Row count
7 table rows; groups file Count 7; frontmatter 7. Match.

## Product defects
None found.
