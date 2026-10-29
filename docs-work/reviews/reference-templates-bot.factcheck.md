# Fact check: src/content/reference/en/templates/bot.mdx
Verdict: PASS
Reviewed: C:/Projects/NoMercyLabs/nomnomzbot-docs/src/content/reference/en/templates/bot.mdx
Reviewed-SHA: 7e78a98a2f1a6dae

Product: C:/Projects/NoMercyLabs/nomnomzbot master, HEAD 18e2bf1f0 (contains b6adc85d2). Docs HEAD f3676b7.
fc6 diff check, page read whole. The earlier verdict (stamp 74d1889b8b1a763f, HEAD de792033a, fc2: scratchpad fc2-result.md line 6) traced the sampled rows to BotChannelHelpers.cs, BotCommandHelpers.cs, BotIdentityHelpers.cs, BotUptimeHelpers.cs and Legacy/LegacyTemplateHelpers.cs; that evidence is carried forward. Since then the generator changed only the title and added the key line.

## Checked fresh at this stamp

| Claim (page line) | Supported by | Status |
| --- | --- | --- |
| :2 title "Bot helpers", a plain name | docs-work/helper-groups.md Types row 150 Page title | true |
| :6 key line `{bot.*}`, `{botname}` | Types row 150 Key patterns, same order (script compare, scratchpad fc6-scan.mjs) | true |
| :8-9 intro: name, version, uptime and commands; help or about command | the rows on the page (fc2 evidence) | true |
| rows | 22 rows: all keys in docs-work/helpers.json; all descriptions equal the English strings or the `bot.license` Description correction (American spelling); all examples equal the sample or a product test row (fc6-scan.mjs, fc6-inputs.mjs) | true |
| count | 22 rows = Types Count 22; frontmatter 22; overview link 22 | true |

Section rule: no sentence describes resolution as chat-only.

## Product defects
None new.
