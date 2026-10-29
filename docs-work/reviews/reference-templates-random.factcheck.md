# Fact check: src/content/reference/en/templates/random.mdx
Verdict: PASS
Reviewed: C:/Projects/NoMercyLabs/nomnomzbot-docs/src/content/reference/en/templates/random.mdx
Reviewed-SHA: 5020385fb29947dc

Product checked at origin/master 779081d10d05dc6b4150732abd77bfae4dbef1d9 (read with `git show origin/master:<path>`, nothing built or run).

## Description check, all 23 rows

A scan script compared every row's "What it gives" cell with the first line of its English string in the origin/master XML. All 23 match (cell normalized only for backticks and the `\|` escape). Strings: strings_template_logic.xml:32-43, strings_template_logic2.xml:12-15, strings.xml:5419-5425.

## Sampled rows (16 of 23: every prefix-family row, the first and last row, and every second row between)

Paths are under server/src/NomNomzBot.Infrastructure/Platform/Templating/ unless they start with Application/. Legacy = Helpers/Legacy/LegacyTemplateHelpers.cs. Registry = Application/Abstractions/Templating/TemplateHelperRegistry.cs.

| Page line | Key | Key in product | Description match | Example plausible |
| --- | --- | --- | --- | --- |
| 16 | `chance` | Helpers/Logic/ChanceTemplateHelpers.cs:29 | yes (strings_template_logic.xml:32) | yes: a draw under 50 renders the then branch `yes` (:44-45) |
| 17 | `pick` | Helpers/Logic/PickTemplateHelpers.cs:33 and :55-65 | yes (logic.xml:33) | yes: one item gives that item; Application/Common/Picking/NoImmediateRepeatPicker.cs:43-44 returns index 0 for a pool of one, so `solo` |
| 19 | `pick.n` | PickTemplateHelpers.cs:35 and :146-161 | yes (logic.xml:35) | yes: 2 different items of a, b, c in random order joined with ", ", so `b, c` can occur |
| 21 | `pick.weighted` | PickTemplateHelpers.cs:34 and :111-143 | yes (logic.xml:34) | yes: `common` holds 9 of 10 weight |
| 23 | `random.chatter` | Helpers/Chatter/ChatterTemplateHelpers.cs:34 and :45-61 | yes (strings_template_logic2.xml:12) | yes: a session chatter's display name (:64-69) |
| 25 | `random.chatter.notMe` | ChatterTemplateHelpers.cs:35 and :75-92 | yes (logic2.xml:13) | yes: the draw leaves out the triggering viewer by user.id, else by display name |
| 27 | `random.decimal` | Helpers/Logic/RandomTemplateHelpers.cs:38 and :83-102 | yes (logic.xml:39) | yes: min 2, max 2 gives 2, written with `F2` as `2.00` |
| 29 | `random.number` | RandomTemplateHelpers.cs:37 and :74-80 | yes (logic.xml:38) | yes: one argument becomes 1..max; 1..1 gives `1` (RandomNumberSpec.cs:22-47) |
| 30 | `random.number.<min>.<max>[.<step>]` | Registry:613-618; Legacy:829-851 | yes (strings.xml:5420) | yes: a draw is min + k x step (RandomNumberSpec.cs:43-47); 50 + 38 x 10 gives `430` |
| 31 | `random.number.<n>` | Registry:607-612; Legacy:845-847 | yes (strings.xml:5419) | yes: one part becomes 1..N; 1..1 gives `1` |
| 33 | `random.pick.<a.b.c>` | Registry:632-637; Legacy:501-512 | yes (strings.xml:5424) | yes: the parts after `random.pick.` are the options; `green` is one of red, green, blue |
| 34 | `random.quote` | Helpers/Quotes/QuoteTemplateHelpers.cs:41 and :69-72 | yes (logic2.xml:15) | yes: Helpers/Quotes/QuoteText.cs:21-33 writes `#number "text" (author, yyyy-MM-dd)` |
| 35 | `random.user` | Registry:606; Legacy:490-500 | yes (strings.xml:5425) | yes: a name from SessionChatters (Legacy:492) |
| 36 | `roll.<name>` | Registry:625; Legacy:883-889 | yes (strings.xml:5422) | yes: the read gives the value drawn for the same name in this render, so `73 and 73` |
| 37 | `roll.<name>.<min>.<max>[.<step>]` | Registry:619-624; Legacy:869-881 | yes (strings.xml:5421) | yes: 4 or 5 parts draw once per name; 73 lies in 60..98 |
| 38 | `roll.<name>.complement` | Registry:626-631; Legacy:890-894 | yes (strings.xml:5423) | yes: 100 minus the drawn 73 gives `27` |

Also checked for the description claims: `pick` and `pick.inline` go through NoImmediateRepeatPicker (PickTemplateHelpers.cs:55-65 and :72-91), so the same item never comes twice in a row; `pick.inline` splits at `;` (:93-108), so a pipe may stay inside an item.

## Intro check

- "Helpers on this page: `{random.*}`, `{pick}`, `{pick.*}`, `{chance*}`, `{roll.*}`." True: the table holds only those families.
- "These helpers pick a random value, number, item or roll." True: values (`random.bool`, `random.color`), numbers (`random.number*`), items (`pick*`, `random.pick.*`) and rolls (`roll.*`) are all drawn with a random source (RandomTemplateHelpers.cs:45-67, PickTemplateHelpers.cs:40-53, Legacy:859-896).
- "They give a different value each time, so the example shows one possible result." True of every draw; the `roll.<name>` read repeats the roll of the same message on purpose, which its own row says.
- "Use them for a random answer or a giveaway pick." A use suggestion; it names no helper that is not on the page.

## Row count

23 table rows. docs-work/helper-groups.md:33 gives Count 23 for /reference/templates/random. The front matter says 23. Match.

## Product defects (not a page fault)

- `random.user`: the text "A random chatter currently in the channel" (server/i18n/strings/values/strings.xml:5425) does not match the code. Legacy:492 draws from the session chatters (people who chatted), and Legacy:499 falls back to the triggering viewer's own name, or `someone`, when no one chatted.
