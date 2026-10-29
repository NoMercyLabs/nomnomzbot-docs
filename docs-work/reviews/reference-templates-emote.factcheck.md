# Fact check: src/content/reference/en/templates/emote.mdx
Verdict: PASS
Reviewed: C:/Projects/NoMercyLabs/nomnomzbot-docs/src/content/reference/en/templates/emote.mdx
Reviewed-SHA: 5f5554e4b0144332

Product: C:/Projects/NoMercyLabs/nomnomzbot master, HEAD 18e2bf1f0 (contains b6adc85d2). Docs HEAD f3676b7.
fc6 diff check, page read whole. The earlier verdict (stamp ab966768ae698e3b, HEAD de792033a, fc3: scratchpad fc3-result.md line 6, fc3-handoff.md line 10) traced the sampled rows and the intro (channel, 7TV, BTTV, FFZ; count and pick); that evidence is carried forward. Since then the generator changed only the title and added the key line.

## Checked fresh at this stamp

| Claim (page line) | Supported by | Status |
| --- | --- | --- |
| :2 title "Emote helpers", a plain name | docs-work/helper-groups.md Types row 280 Page title | true |
| :6 key line `{emote}`, `{emote.*}` | Types row 280 Key patterns (script compare, scratchpad fc6-scan.mjs) | true |
| :8-9 intro: channel, 7TV, BTTV and FFZ emotes; count and pick | fc3 evidence | true |
| :23 `{emote.image:catJAM}` gives `https://cdn.7tv.app/emote/<emote id>/2x.webp` | helper-groups.md Inputs (SevenTvEmoteProvider.cs:94-112); it overrides the test row, which shows a stub URL | true |
| rows | 30 rows: all keys in docs-work/helpers.json; all descriptions equal the English strings; all examples equal the sample, the Inputs line or a product test row (fc6-scan.mjs, fc6-inputs.mjs) | true |
| count | 30 rows = Types Count 30; frontmatter 30; overview link 30 | true |

Section rule: no sentence describes resolution as chat-only.

## Product defects
None new.
