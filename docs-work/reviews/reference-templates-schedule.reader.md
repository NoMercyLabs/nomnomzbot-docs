# Current independent reader review

Verdict: PASS
Reviewed: src/content/reference/en/templates/schedule.mdx
Reviewed-SHA: 8532537b6343ac60f1aa453c908ae9b125e710d50dd49788aee1a18ee6ce7d42
Reviewed-SHA256: 8532537b6343ac60f1aa453c908ae9b125e710d50dd49788aee1a18ee6ce7d42
Reviewed-Date: 2026-11-05
Reviewer: independent section reviewer

The reference preserves next-stream, time-zone, recurrence, calendar, today/week and vacation lookups with formats and empty-state behavior.

The full page was read with the preceding/following navigation context and related links. This review applies the owner's explanatory, progressive-disclosure guidance; it does not impose Atlas sentence caps, pilot mimicry or fixed article headings. No substantive reader finding remains at this hash. Build/render/link checks are recorded separately by the lead reviewer.

Report: docs-work/overhaul/review-learning-commands-helpers.md.

## Historical evidence

The material below is retained as historical evidence; its older verdict is not the current review.

# Reader review: C:/Projects/NoMercyLabs/nomnomzbot-docs/src/content/reference/en/templates/schedule.mdx
Verdict: PASS
Reviewed: C:/Projects/NoMercyLabs/nomnomzbot-docs/src/content/reference/en/templates/schedule.mdx
Reviewed-SHA: 186014e66bac43b1

Read as stored, whole page, lines 1-33. No include, snippet or template directive. Also read: overview.mdx and variables-and-templates.mdx.

Checks:
- Find a helper: `{schedule.next.at}` (line 18) and `{schedule.today}` (line 28) are found in one look. Ok.
- Use a helper: `{schedule.list:3}` (line 17) and `{schedule.next.viewerTime:America/New_York}` (line 27) show the colon form. Ok.
- Intro, lines 6-9: `{schedule.*}` names rows that exist. Count is 17, the same as the overview (line 55). The earlier bare `{schedule}` name in the intro is fixed. Ok.
- Way back: line 33 links to the overview and the variables page. Ok.
- Dates in the examples: "Friday 30 October" (line 19) is a Friday in 2026, and "Fri 6 Nov - Sun 15 Nov" (line 29) runs from a Friday to a Sunday. Ok.
- Voice: short sentences, the same as the overview. Ok.

Findings:
- [line 17] The description says "for example schedule.list:3: Fri 20:00 Bot night · Sun 14:00 Chill". That text lists two streams for a count of three. The Example column shows three. Cost: a reader sees two results for a count of three. Fix: make the description show three streams.
- [lines 17 and 27] `schedule.list:3` and `schedule.next.viewerTime:America/New_York` are in plain text with no braces and no backticks. The rest of the page puts helpers in backticks with braces. Fix: wrap both in backticks with braces.
- [line 27] `{schedule.next.viewerTime:America/New_York}`: the page does not say what to type for another time zone, or where the names come from. Cost: a streamer outside New York cannot make this row work from this page. Fix: one sentence on the format of a zone name, with a link to its list.
- [lines 18-26] The `{schedule.next.*}` rows do not say what they give when no stream is scheduled. Cost: a reader cannot tell if an empty line is correct. Fix: one sentence on the empty result.
- [line 29] `{schedule.vacation}` is described as "the schedule break". The page does not say that the two words mean the same thing. Fix: one clause.
- [line 28] The description example ("21:00 Quick one") and the Example column ("20:00 Bot night") show different results for the same helper. Minor. Fix: use one example in both places.
- [line 11] "Each row is its own example, so the rows on this page do not all come from one moment." This sentence is about the page, not the schedule. Fix: cut it.
