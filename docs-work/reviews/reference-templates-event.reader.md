# Reader review: src/content/reference/en/templates/event.mdx
Verdict: PASS
Reviewed: C:/Projects/NoMercyLabs/nomnomzbot-docs/src/content/reference/en/templates/event.mdx
Reviewed-SHA: 9a75e5f6bbe3eb3d

## What I read
The whole page, plus the overview (templates/overview.mdx) and Variables and templates (commands/variables-and-templates.mdx) it links to.

## Tests
1. Find a helper: "who gifted" is `{gifter}` (L26). "How many months" is `{months}` (L31) and `{streak}` (L38). Each in one row.
2. Use a helper: `{months}` gives `12`; `{tier}` gives `Tier 1`; `{supporter.name}` gives `Example_Supporter`. I can write each as shown and know the output.
3. Intro (L8-11) says the values come from an event and explains the Discord seed alias marker. Footer links to the overview (L51).
4. The first line (L6) names 25 helper names, and each has a row. Pass.

## Findings
- [L6] The "Helpers on this page" line lists 25 names in one line. A reader can find a name, but the list is hard to scan. Fix: keep the names in the table only, and shorten this line to the families.
- [L9] "event response" is used with no link on this page. The variables page links it. Fix: link `/reference/automation/event-responses`.
- [L10] "fire" is a technical word for "run" here. Fix: "happen" or "start".
- [L24] `{followed_at}` gives `2026-10-06T18:30:00.0000000+00:00`. The page does not say this is a date and time code. Fix: add a plain example, such as "6 October 2026, 18:30 UTC".
- [L32, L49] "OBS" and "VTube Studio" are not explained at first use, and "payload" (L32, L49) is a developer word. Fix: one plain sentence each, saying what the program is and that the field name comes from it.
- [L32, L49] The placeholder `<field>` is not explained. Fix: "type the field name in place of field".

## Where I got lost
- L32: I could not tell what "payload" means, or where to find a field name.
