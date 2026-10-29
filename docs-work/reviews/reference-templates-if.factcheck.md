# Fact check: src/content/reference/en/templates/if.mdx
Verdict: PASS
Reviewed: C:/Projects/NoMercyLabs/nomnomzbot-docs/src/content/reference/en/templates/if.mdx
Reviewed-SHA: 2f287d921af98aad

Product: C:/Projects/NoMercyLabs/nomnomzbot master, HEAD 18e2bf1f0 (contains b6adc85d2). Docs HEAD f3676b7.
fc6 diff check, page read whole. fc4 checked this page PASS at stamp 4b64e352650e68ed (scratchpad fc4-handoff.md, "if": IfTemplateHelpers.cs:29-190, ValuePredicate.cs:24-38, LogicArguments.cs:30-34, SwitchTemplateHelpers.cs, LiteralTemplateHelpers.cs:32, CharsTemplateHelpers.cs:21-28). Its verdict was not written then. Since fc4 the generator changed only the title and added the key line.

## Checked fresh at this stamp

| Claim (page line) | Supported by | Status |
| --- | --- | --- |
| :2 title "Condition helpers", no key | docs-work/helper-groups.md Types row 210 Page title | true |
| :6 key line `{if}`, `{if.*}`, `{switch*}`, `{coalesce*}`, `{default*}`, `{literal*}`, `{chars.*}` | Types row 210 Key patterns (script compare, scratchpad fc6-scan.mjs) | true |
| :8-9 intro: choose a text by a condition, or a fallback when a value is empty | IfTemplateHelpers.cs:17 (`{if:value\|then\|else}`), DefaultTemplateHelpers.cs:17 (`{default:value\|fallback}`), read this run | true |
| :23-33 the eleven `if.<path>` rows show the Inputs lines | helper-groups.md Inputs (ValuePredicate.cs:29-38, IfTemplateHelpers.cs:35) | true |
| :15, :16, :18 `chars.newline`, `chars.nothing`, `chars.space` show `-` | the sample is a newline, an empty text and a space, which the generator shows as `-`; the description cell names the character | true (same as fc4) |
| rows | 26 rows: all keys in helpers.json, all descriptions equal the English strings, all other examples equal the sample, an Inputs line or a product test row (fc6-scan.mjs, fc6-inputs.mjs) | true |
| count | 26 rows = Types Count 26; frontmatter 26 | true |

Section rule: no sentence describes resolution as chat-only.

## Product defects
None new.
