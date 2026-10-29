# Fact check: src/content/reference/en/templates/hypetrain.mdx
Verdict: PASS
Reviewed: C:/Projects/NoMercyLabs/nomnomzbot-docs/src/content/reference/en/templates/hypetrain.mdx
Reviewed-SHA: a42bcd59d8ba1816

Product: C:/Projects/NoMercyLabs/nomnomzbot master, HEAD 18e2bf1f0 (contains b6adc85d2). Docs HEAD f3676b7.
fc6 diff check, page read whole. fc4 checked this page PASS at stamp 71b1540c233675c1 (scratchpad fc4-handoff.md, "hypetrain": HypeTrainStateHelpers.cs:18-53, HypeTrainWhoHelpers.cs:19-30; hype_train.* event keys TemplateHelperRegistry.cs:347-369, EventResponsePresetCatalog.cs:100; samples consistent, 1,800/3,000 = 60%, 1,200 left). Its verdict was not written then. Since fc4 the generator changed only the title and added the key line.

## Checked fresh at this stamp

| Claim (page line) | Supported by | Status |
| --- | --- | --- |
| :2 title "Hype train helpers", no key | docs-work/helper-groups.md Types row 100 Page title | true |
| :6 key line `{hypetrain*}`, `{hype_train*}` | Types row 100 Key patterns (script compare, scratchpad fc6-scan.mjs) | true |
| :8-9 intro: level, progress and the people who took part; show progress in chat, on an overlay or read aloud | fc4 evidence above; not chat-only (Stoney's section rule) | true |
| rows | 17 rows: all keys in helpers.json, all descriptions equal the English strings, all examples equal the sample or a product test row (fc6-scan.mjs, fc6-inputs.mjs) | true |
| count | 17 rows = Types Count 17; frontmatter 17 | true |

## Product defects
None new.
