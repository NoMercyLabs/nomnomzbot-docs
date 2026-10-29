# Reader review: C:/Projects/NoMercyLabs/nomnomzbot-docs/src/content/reference/en/templates/text.mdx
Verdict: PASS
Reviewed: C:/Projects/NoMercyLabs/nomnomzbot-docs/src/content/reference/en/templates/text.mdx
Reviewed-SHA: c0d9053db6fdd3f6

Read as stored, whole page, lines 1-133. No include, snippet or template directive. Also read: overview.mdx and variables-and-templates.mdx.

Checks:
- Find a helper: the sections Letter case and styles (line 14), Words, letters and length (line 55) and Replace, encode and grammar (line 98) are clear. Ok.
- Use a helper, typed rows: `{text.upper:hello}` gives `HELLO` (line 50); `{text.cut:hello world|max=8|end=...}` gives `hello...` (line 63); `{text.lines.join:a\nb\|\s/\s}` gives `a / b` (line 73). Ok.
- Intro, lines 8-10: the colon and the pipe are explained, with examples. Ok.
- Count: 36 + 38 + 29 = 103 rows, the same as the overview (line 66). Ok.
- Way back: line 132 links to the overview and the variables page. Ok.
- Backticks and braces: all helpers are in backticks. Escaped pipes in table cells render as pipes. Ok.
- The earlier blocking finding (the line helpers showed results only) is fixed: lines 71-73 now show typed forms.

Findings:
- [line 9] The page says "Put the text after a colon" and "Separate more than one input with a pipe". It does not say the order of the inputs, and the order differs. Text comes first in `{text.count:banana|a}` (line 62) and `{text.cut.words:hello big world|2}` (line 64). The number comes first in `{text.first:3|hello}` (line 65), `{text.repeat:3|ha}` (line 77) and `{text.words.first:2|hello big world}` (line 90). Cost: a reader who copies the pattern from one row gets the wrong result on another. Fix: a one-line order rule for each family, or the order named in each group heading.
- [line 73] `\s` means a space in `{text.lines.join:a\nb\|\s/\s}`. This page does not explain `\s`. The list page does (list.mdx line 21). Fix: one clause here.
- [line 88] `{text.word.random}` gives `b` with no typed form. The intro lets a reader infer `{text.word.random:a b c}`, but the example does not show it. Fix: show the typed form.
- [line 121] `{text.quote}` gives `"hi"` with no typed form. Fix: show `{text.quote:hi}`.
- [line 107] `{text.escape.chat:/ban x}` gives `⁄ban x`, with a fraction slash that looks like a normal slash. Cost: a reader thinks the output is wrong. Fix: say the character is a look-alike that chat does not run as a command.
- [line 102] `{text.article}`: "(English only)". The page does not say what the helper gives in another channel language. Fix: one clause.
- [line 12] "Each row is its own example, so the rows on this page do not all come from one moment." This sentence is about the page, not the text. Fix: cut it.
