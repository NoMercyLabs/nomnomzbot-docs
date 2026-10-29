# Fact check: src/content/reference/en/templates/num.mdx
Verdict: PASS
Reviewed: C:/Projects/NoMercyLabs/nomnomzbot-docs/src/content/reference/en/templates/num.mdx
Reviewed-SHA: 4f7dac32db1b241a

Product checked at origin/master 779081d10d05dc6b4150732abd77bfae4dbef1d9 (read with `git show origin/master:<path>`, nothing built or run).

## Description check, all 36 rows

A scan script compared every row's "What it gives" cell with the first line of the English string `template_helper_num_*` in the origin/master XML. All 36 match. The strings are in server/i18n/strings/values/strings_template_numbers.xml:28-63. Every row's description key is `"template.helper." + Key` (Numbers/NumberHelperRow.cs:69-70).

## Sampled rows (16 of 36)

Paths are under server/src/NomNomzBot.Infrastructure/Platform/Templating/Helpers/Numbers/. Every key below is registered by NumTemplateHelpers.cs:15-31. Numbers are parsed with the invariant culture, a leading sign and a decimal point (NumberArguments.cs:23-29).

| Page line | Key | Key in product | Description match | Example plausible |
| --- | --- | --- | --- | --- |
| 14 | `num.abs` | NumberSignHelpers.cs:18 | yes (strings_template_numbers.xml:51) | yes: `Math.Abs(-5)` gives `5` |
| 16 | `num.between` | NumberBoundsHelpers.cs:20 and :28-29 | yes (:54) | yes: 5 lies in 1..10, ends included, gives `true` (NumberText.cs:29) |
| 18 | `num.bytes` | NumberFormatHelpers.cs:23 and :69-72 | yes (:46) | yes: `ByteSize.FromBytes(1536).ToString("0.##")` gives `1.5 KB` |
| 21 | `num.convert` | NumberConvertHelpers.cs:16 and :21-32 | yes (:62) | yes: 10 km at 1000 m over 1 mi at 1609.344 m (NumberUnits.cs:34 and :38) is 6.2137, rounded to 2 places gives `6.21` |
| 23 | `num.currency.compact` | NumberCurrencyHelpers.cs:23 and :38-45 | yes (:45) | yes: the USD symbol `$` (NumberCurrencies.cs:22-41) plus `Compact(1500)` = `1.5k` (NumberText.cs:36-49) |
| 25 | `num.diff` | NumberPercentHelpers.cs:26-32 | yes (:36) | yes: `Math.Abs(2800 - 2500)` gives `300` |
| 28 | `num.duration` | NumberDurationHelpers.cs:20 and :47-54 | yes (:47) | yes: 8100 s is 2 h 15 min, written `2h 15m` |
| 30 | `num.duration.long` | NumberDurationHelpers.cs:21 and :56-57 | yes (:48) | yes: Humanize with precision 2 gives `2 hours, 15 minutes` in English |
| 32 | `num.fromRoman` | NumberWordHelpers.cs:25 and :50-58 | yes (:43) | yes: `XIV` round-trips to `14` |
| 35 | `num.isEven` | NumberParityHelpers.cs:20-27 | yes (:53) | yes: 7 % 2 is 1, so `false` |
| 38 | `num.ordinal` | NumberWordHelpers.cs:21 | yes (:39) | yes: `Ordinalize` gives `3rd` in English; the culture is passed, so a Dutch channel gets the Dutch form |
| 40 | `num.parity` | NumberParityHelpers.cs:19 and :30-38 | yes (:52) | yes: 7 gives `odd` (`oneven` in a Dutch channel, :37) |
| 42 | `num.percent` | NumberPercentHelpers.cs:17 and :36-47 | yes (:33) | yes: 1234 / 1500 x 100 = 82.27, rounded to 0 places, gives `82%` |
| 44 | `num.ratio` | NumberPercentHelpers.cs:25 and :50-71 | yes (:35) | yes: the greatest common divisor of 3 and 12 is 3, so `1:4` |
| 46 | `num.round` | NumberRoundingHelpers.cs:17 and :22-33 | yes (:31) | yes: 2.456 to 2 places, halves away from zero (NumberText.cs:32-33), gives `2.46`; places default to 0 (:28) |
| 49 | `num.words` | NumberWordHelpers.cs:23 | yes (:41) | yes: `ToWords` gives `forty-two` in English |

## Intro check

- "Helpers on this page: `{num.*}`." True: all 36 keys start with `num.`.
- "These helpers format a number: round it, add separators, or write it as a currency or a duration." True: `num.round`/`num.truncate` round (NumberRoundingHelpers.cs:17-18), `num.format` adds group marks (NumberFormatHelpers.cs:35-47), `num.currency` writes money (NumberCurrencyHelpers.cs:27-35), `num.duration*` write durations (NumberDurationHelpers.cs:20-22).
- The intro names no helper that is missing from the table.

## Row count

36 table rows. docs-work/helper-groups.md:36 gives Count 36 for /reference/templates/num. The front matter says 36. Match.

## Product defects (not a page fault)

None found in the sampled rows.
