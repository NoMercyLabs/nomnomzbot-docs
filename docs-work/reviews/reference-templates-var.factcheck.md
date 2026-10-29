# Fact check: src/content/reference/en/templates/var.mdx
Verdict: PASS
Reviewed: C:/Projects/NoMercyLabs/nomnomzbot-docs/src/content/reference/en/templates/var.mdx
Reviewed-SHA: 4ee6488db1949449

Product read: NomNomzBot origin/master 779081d10d05dc6b4150732abd77bfae4dbef1d9 (git fetch run 2026-10-29; every file opened with `git show origin/master:<path>`).
Since the data export a8f180821, no file behind these 7 helpers changed. In the template code only LegacyTemplateHelpers.cs changed, and only in the pronoun grammar (`git diff --stat a8f180821 origin/master` over Abstractions/Templating, Platform/Templating and server/i18n/strings/values).

## Sample (all 7 rows; the page has fewer than 15)

| Page line | Key | Product file:line (row, render) | Description equals product text | Example plausible |
| --- | --- | --- | --- | --- |
| 15 | `custom.<name>.<field>` | static row (provider static-registry); render LegacyTemplateHelpers.cs:283-300 ExpandCustomDataAsync (latest ingested field value of the named source, empty when missing), started at :103 | yes, strings.xml:5395 | yes: `{custom.heartrate.bpm}` gives a stored `128` |
| 16 | `include.builtin` | IncludeTemplateHelpers.cs:38, render :62; BuiltinInclude.cs:39 (depth limit) | yes, strings_template_logic2.xml:26 | yes; ComposingHelpersTableTests.cs:81 (`{include.builtin:uptime}` gives `The stream has been live for 2h 5m.`), :84-85 (a ban or mod-only built-in stays raw) |
| 17 | `include.cmd` | IncludeTemplateHelpers.cs:36, render :60; CommandInclude.cs:28, :47 (MaxDepth 5) | yes, strings_template_logic2.xml:25 | yes; ComposingHelpersTableTests.cs:66 |
| 18 | `include.list` | IncludeTemplateHelpers.cs:43, render :64 (ListEntryAsync) | yes, strings_template_logic2.xml:27 | yes; ComposingHelpersTableTests.cs:93 (`{include.list:snacks\|2}` gives `cookies`), :94 (position 1 gives `chips`, so counting starts at 1) |
| 19 | `set` | VariableTemplateHelpers.cs:33 (sample empty) | yes, strings_template_logic2.xml:23 | yes: `-` stands for no output; ComposingHelpersTableTests.cs:57 (`{set:x=5}` gives an empty text) |
| 20 | `transform.<name>:<text>` | static row; render LegacyTemplateHelpers.cs:178-191 and :362-364 (TextTransformCatalog.Apply) | yes, strings.xml:5469 | yes: `{transform.upper:hi}` gives `HI` |
| 21 | `var.<name>` | VariableTemplateHelpers.cs:27, :35-38, render :55-62 (reads SetVariables) | yes, strings_template_logic2.xml:24 | yes; ComposingHelpersTableTests.cs:50 (`{set:x=5}{var.x}` gives `5`) |

## Intro check
- Line 6 lists `{var.*}`, `{set}`, `{custom.*}`, `{include.*}`, `{transform.*}`: each has a row (lines 15-21).
- Line 8, "keep a value for the rest of a reply" (`{set}`, `{var.<name>}`: VariableTemplateHelpers.cs:55-62; ComposingHelpersTableTests.cs:50), "read custom data" (`{custom.*}`: LegacyTemplateHelpers.cs:283-300), "put another command's reply inside this one" (`{include.cmd}`, `{include.builtin}`: ComposingHelpersTableTests.cs:66, :81): true.
- Line 9, "Use them to keep a long reply short": a usage line; true for `{set}` and `{include.*}`.
- Line 11, "Each row is its own example": true.
- No helper is named in the intro that is not on the page.

## Row count
7 table rows. helper-groups.md:29 gives Count 7 for /reference/templates/var. The front matter says 7. Equal.

## Findings
None.

## Product defects (not verdict items)
None found in these 7 rows.
