# Fact check: src/content/reference/en/templates/math.mdx
Verdict: PASS
Reviewed: C:/Projects/NoMercyLabs/nomnomzbot-docs/src/content/reference/en/templates/math.mdx
Reviewed-SHA: 3b4c5d796428073f

Product repo: C:/Projects/NoMercyLabs/nomnomzbot master, HEAD 18e2bf1f0 (b6adc85d2 is an ancestor). Every row was re-read at HEAD.
Code: server/src/NomNomzBot.Infrastructure/Platform/Templating/Helpers/Numbers/. Strings: server/i18n/strings/values/strings_template_numbers.xml (STN). Typed examples: server/tests/NomNomzBot.Infrastructure.Tests/.../NumberHelpersTableTests.cs (NHT), via docs-work/helper-inputs.json.

## Key line
Page line 6: "Helpers on this page: `{math}`, `{math.*}`, `{meter}`, `{meter.*}`." Groups file Types row 260: `math`, `math.*`, `meter`, `meter.*`. Match.

## Sampled helpers (15 of 20: first, last, every row with an input form)

| Key (page line) | Product row | Description match | Example plausible |
| --- | --- | --- | --- |
| math (14) | MathExpressionHelpers.cs:16 | yes, STN:11 | yes: operators and functions sqrt, abs, floor, ceil, pow, log in MathExpression.cs:182-188; 2+3*4 = 14 is NHT:42 (registry sample is 2.5; the page uses the test row) |
| math.abs (15) | MathFunctionHelpers.cs:18 | yes, STN:13 | yes: Math.Abs; NHT:49 |
| math.avg (17) | MathAggregateHelpers.cs:18 | yes, STN:25 | yes: Average of 1,2,6 = 3; NHT:61 |
| math.ceil (18) | MathFunctionHelpers.cs:20 | yes, STN:15 | yes: Math.Ceiling; NHT:51 |
| math.div (19) | MathOperatorHelpers.cs:20 | yes, STN:21 | yes: NumberMath.Divide returns null when b is 0 (NumberMath.cs:26), so "no answer when the second is 0" is true; NHT:57 |
| math.div.int (20) | MathOperatorHelpers.cs:22 | yes, STN:22 | yes: NHT:58 |
| math.floor (21) | MathFunctionHelpers.cs:19 | yes, STN:14 | yes: NHT:50 |
| math.log (22) | MathFunctionHelpers.cs:22 (1 to 2 args) | yes, STN:17 | yes: base optional (MathExpression.cs:187-188); NHT:53 |
| math.median (23) | MathAggregateHelpers.cs:19 | yes, STN:26 | yes: NHT:62 |
| math.mod (24) | MathOperatorHelpers.cs:26 | yes, STN:23 | yes: NumberMath.Modulo (NumberMath.cs:28); NHT:59 |
| math.pow (26) | MathFunctionHelpers.cs:21 | yes, STN:16 | yes: NHT:52 |
| math.sum (29) | MathAggregateHelpers.cs:17 | yes, STN:24 | yes: NHT:60 |
| meter (30) | MeterBarHelpers.cs:19 | yes, STN:65 | yes: bar plus " {percent}%" (MeterBarHelpers.cs:42-45); width and full/empty marks optional (:38, :42-43); NHT:116 |
| meter.hearts (31) | MeterBarHelpers.cs:21 | yes, STN:67 | yes: 5 hearts, red and black (:25-28, :55-58); NHT:120 |
| meter.stars (33) | MeterBarHelpers.cs:22 | yes, STN:68 | yes: value/max as max stars (:61-73); NHT:121 |

Not sampled: math.add, math.mul, math.sqrt, math.sub, meter.plain (rows exist at MathOperatorHelpers.cs:17-19, MathFunctionHelpers.cs:17, MeterBarHelpers.cs:20; descriptions STN:18-20, :12, :66 checked by eye, all match).

## Intro (page line 8)
"do math with numbers, and draw a number as a meter" - true of math.* and meter.* rows.

## Prose
Page line 10 is a generic note. Page line 35 links only. No sentence describes where templates resolve.

## Row count
20 table rows; groups file Count 20; frontmatter 20. Match.

## Product defects
None found.
