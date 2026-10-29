# Fact check: src/content/reference/en/templates/list.mdx
Verdict: PASS
Reviewed: C:/Projects/NoMercyLabs/nomnomzbot-docs/src/content/reference/en/templates/list.mdx
Reviewed-SHA: baa5fdd92203846e

Product: origin/master 779081d10d05dc6b4150732abd77bfae4dbef1d9. I ran `git fetch` this pass and read every product file with `git show origin/master:<path>`.

Short paths:
- `Ctr/` = server/src/NomNomzBot.Infrastructure/Platform/Templating/Helpers/Counters/
- `Leg` = server/src/NomNomzBot.Infrastructure/Platform/Templating/Helpers/Legacy/LegacyTemplateHelpers.cs
- `Reg` = server/src/NomNomzBot.Application/Abstractions/Templating/TemplateHelperRegistry.cs
- `Tests` = server/tests/NomNomzBot.Infrastructure.Tests/Platform/Templating/Helpers/Counters/ListHelpersTableTests.cs
- `Fix` = the ListHelperFixture.cs next to Tests
- `cxml` = server/i18n/strings/values/strings_template_counters.xml
- `sxml` = server/i18n/strings/values/strings.xml

## The repaired row: `{list.join}` (page line 24)

Page text: "All entries of a pick list, joined with a comma. To use your own separator, type the list name first, then a pipe and the separator; use a backslash and s for a space". Example: `{list.join:snacks|\s/\s}` gives `chips / cookies / fruit`.

- Argument order. `list.join` is an OfItems row with 0 to 1 extra arguments (Ctr/ListJoinHelpers.cs:17). OfItems takes the list name from `Args[0]` and hands the rest to the render (Ctr/ListHelperRow.cs:49-57). Join uses `extra[0]` as the separator, else `ListText.DefaultSeparator` (Ctr/ListJoinHelpers.cs:32-33). So the list name comes first, then a pipe, then the separator. True.
- Default. `DefaultSeparator` is `", "` (Ctr/ListText.cs:20). "Joined with a comma" is true.
- Backslash s. ListText.Join replaces `\s` with a space, and turns an empty separator into one space (Ctr/ListText.cs:37-41). The comment there says the resolver trims arguments, which is why the space needs `\s`. True.
- Output. The fixture list `snacks` holds chips, cookies, fruit in that order (Fix:40). The separator `\s/\s` becomes ` / `. The result is `chips / cookies / fruit`. The table test has this exact row (Tests:31). True.
- Too many arguments. Two or more extra arguments fail `Args.Count <= 1 + extraMax` and print the token as typed (Ctr/ListHelperRow.cs:49-54). The page does not claim more.
- The description is a Description correction in docs-work/helper-groups.md line 329. It differs from cxml:16 only by spelling out the argument order. It does not contradict the code.

## All 18 rows (every row checked)

The description column was compared by a script with the first line of each English string at origin/master: 16 rows equal the string, 2 rows equal their Description correction.

| Page line | Key | Product row | Description | Example plausible | Why |
| --- | --- | --- | --- | --- | --- |
| 15 | count.&lt;key&gt; | Reg:639 (prefix `count.`) | yes, sxml:5394 | yes, `12` | Leg:683-695 collects `count.*` keys; Leg:1078-1105 loads them from INamedCounterService and writes the value as an invariant integer, 0 when unset. |
| 16 | list.contains | Ctr/ListReadHelpers.cs:22 | yes, cxml:20 | yes, `true` | Case-insensitive contains gives `true` or `false` (:43-44); Tests:34. |
| 17 | list.count | Ctr/ListCountHelpers.cs:19-28 | yes, cxml:26 | yes, `7` | ListCountAsync of the channel, no arguments; Fix holds 7 lists; Tests:42. |
| 18 | list.first | Ctr/ListReadHelpers.cs:20 | yes, cxml:14 | yes, `chips` | ItemAt(items, 1); Tests:28. |
| 19 | list.indexOf | Ctr/ListReadHelpers.cs:23 | yes, cxml:21 | yes, `3` | 1-based position, 0 when absent (:47-55); Tests:37-38. |
| 20 | list.inline.item | Ctr/ListInlineHelpers.cs:22 | yes, cxml:24 | yes, `b` | Position first, then the `;` list (:30-33); Tests:40. |
| 21 | list.inline.join | Ctr/ListInlineHelpers.cs:23-27 | correction, true (helper-groups.md:330) | yes, `a + b` | Separator is `args[0]`, list is `args[1]`; `\s` is a space (Ctr/ListText.cs:37-41); Tests:41. |
| 22 | list.inline.length | Ctr/ListInlineHelpers.cs:17-21 | yes, cxml:23 | yes, `3` | Count of the `;` split, empty entries dropped (Ctr/ListText.cs:44-50); Tests:39. |
| 23 | list.item | Ctr/ListReadHelpers.cs:19 | yes, cxml:13 | yes, `cookies` | TryPosition needs a whole number of 1 or more (Ctr/ListText.cs:25-27); Tests:27. |
| 24 | list.join | Ctr/ListJoinHelpers.cs:17 | correction, true (see above) | yes, `chips / cookies / fruit` | See the repaired row. |
| 25 | list.join.and | Ctr/ListJoinHelpers.cs:18 | yes, cxml:17 | yes, `chips, cookies and fruit` | All but the last joined with `, `, then ` and ` and the last (:36-41); no extra argument allowed (extraMax 0); Tests:32. |
| 26 | list.last | Ctr/ListReadHelpers.cs:21 | yes, cxml:15 | yes, `fruit` | items[^1] (:40-41); Tests:29. |
| 27 | list.length | Ctr/ListReadHelpers.cs:18 | yes, cxml:12 | yes, `3` | items.Count; Tests:26. |
| 28 | list.pick | Ctr/ListReadHelpers.cs:30-35 | yes, cxml:11 | yes, `cookies` | OfName row with one name argument (Ctr/ListHelperRow.cs:64-78) and a random pick; the test accepts chips, cookies or fruit (Tests:73-84). |
| 29 | list.pick.&lt;name&gt; | Reg:640 (prefix `list.pick.`) | yes, cxml:11 (see defects) | yes, `cookies` | Leg:237-275 replaces `{list.pick.<name>}` with a random entry before the main pass; a missing list gives empty text (:268-270). |
| 30 | list.random.index | Ctr/ListRandomHelpers.cs:24-30 | yes, cxml:22 | yes, `2` | `random.Next(Count) + 1`, 0 for an empty list; Tests:99-110. |
| 31 | list.shuffle | Ctr/ListRandomHelpers.cs:17-23 | yes, cxml:18 | yes, `fruit, chips, cookies` | Fisher-Yates over a copy (:36-46), joined with `, `; Tests:86-97. |
| 32 | list.sorted | Ctr/ListJoinHelpers.cs:19-29 | yes, cxml:19 | yes, `chips, cookies, fruit` | Ordered without case, joined with `, `; Tests:33. |

## Intro check (page lines 6-11)

- Line 6, `{list.*}` and `{count.*}`: the table holds 17 `list.*` keys and `count.<key>`. True.
- Line 8, "read the channel's lists and named counters": 14 rows read the channel's pick lists through ListSource, and `count.<key>` reads the named counters (Leg:1078-1105). The three `list.inline.*` rows read a list typed in the helper and need no channel (Ctr/ListHelperRow.cs:80-92, Tests:126-136). Their own rows say "inline list a;b;c", so the reader is not misled. Not a wrong fact; see the note.
- Line 9, "pick a list item or show a count, such as a death count": `list.pick` and `count.deaths` do this. True.
- Line 11, each row is its own example: true.
- The intro names no helper that is missing from the page.

## Row count

- The table has 18 rows (page lines 15-32).
- docs-work/helper-groups.md "## Types" line 27 gives Count 18 for /reference/templates/list.
- The front matter (line 3) says 18. All three agree.

## Notes (not wrong facts)

- Intro line 8 could add "or a list you type in the helper" for the three `list.inline.*` rows.
- helper-groups.md "## Inputs" line 349 cites LegacyTemplateHelpers.cs:670 for `count.<key>`. At this commit the counter code is at :683-695 and :1078-1105. The page text is not affected.

## Product defects

- The string name `template_helper_list_pick` exists twice, with two texts: cxml:11 ("One random entry of a pick list") and sxml:5414 ("A random entry from a named pick-list (e.g. {list.pick.jokes})"). Both `list.pick` and `list.pick.<name>` use that name. docs-work/helpers.json meta records cxml as the winner. One of the two strings should go.
- The product sample for `list.pick` is `chips` (Ctr/ListReadHelpers.cs:33) and for `list.pick.<name>` is `Pizza` (docs-work/helpers.json). The page uses `cookies` for both, through "## Inputs". Both values are possible outputs, so this is not a wrong fact.
