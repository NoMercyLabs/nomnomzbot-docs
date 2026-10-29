# Reader review: src/content/reference/en/templates/if.mdx
Verdict: PASS
Reviewed: C:/Projects/NoMercyLabs/nomnomzbot-docs/src/content/reference/en/templates/if.mdx
Reviewed-SHA: 2f287d921af98aad

Tests:
1. Find a helper: "choose a text by a condition" (L8) matches `{if:value|then|else}` (L22). "Fallback when empty" matches `{default}` (L21). Found.
2. Use a helper: `{if.stream.live:on|off}` gives `on` (L23). `{switch:they/them|she/her=queen|he/him=king|royal}` gives `royal` (L39). Both typed.
3. Intro (L6) names `{if}`, `{if.*}`, `{switch*}`, `{coalesce*}`, `{default*}`, `{literal*}` and `{chars.*}`. Every name has rows. Footer links to the overview.
4. Backticks correct. The table is intact.

Findings:
- [L19] `{chars.zws}`: the Example column holds an invisible character. The reader sees nothing. Fix: show a label.
- [L22] "(not empty, false, 0 or no)": "no" is unclear. Fix: say "or the word no".
- [L32] `{if.<path>.matches}`: "regular expression" is a term the reader does not know. The example `^h` works, but the reader cannot write another pattern. Fix: one sentence and a link.
- [L23] `<path>` is a placeholder whose meaning (for example `stream.live`) is only shown in the same cell. Fine. No change required.
- [L38] `{literal:a\|b}` gives `a\|b`. In the rendered table the backslash is not shown. No change required.
