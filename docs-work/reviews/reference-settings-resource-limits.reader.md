# Independent reader review: /reference/settings/resource-limits
Verdict: PASS
Reviewed: src/content/reference/en/settings/resource-limits.mdx
Reviewed-SHA: 0cfcb6fa90f1f38f
Reviewed-SHA256: 0cfcb6fa90f1f38fcce89b29ade75ec54cb620025a83063c5377f84cdd93f19b
Reviewed-Date: 2026-11-05
Reviewer: independent reviewer, separate from article author
Product-Revision: 54da8b6318de63b5205a0ff8db35e0b9045dd959

The complete current article was read independently of its author, in the established settings, self-hosting and Code and SDK navigation order. The user's natural explainer/progressive-disclosure requirements take precedence over historical pilot mimicry, sentence caps and repeated page templates.

## Learning and lookup result

Storage, monthly use and per-line caps are explained through consequences before their meters. The repaired operator-override paragraph preserves defaults while explaining why displayed limits may differ. Deletion versus replenishment and plan-independent safety baselines are clear.

No outstanding substantive reader finding.

Related routes were checked as contextual continuations rather than prerequisites for ordinary bot use. Draft labels remain appropriate for code material. This is a text/structure review, not a claim of rendered browser QA.

## Historical review (superseded)

# Reader review: C:\Projects\NoMercyLabs\nomnomzbot-docs\src\content\reference\en\settings\resource-limits.mdx
Historical verdict: PASS
Reviewed: C:\Projects\NoMercyLabs\nomnomzbot-docs\src\content\reference\en\settings\resource-limits.mdx
Reviewed-SHA: f392ac11ef64492b

Re-review of the current page. The two blocking findings from the earlier review are fixed.
- Lines 54-55 now say a bar shows only for a resource with a limit. This matches the **No limit** row at line 64.
- Line 71 says the abuse-protection limits do not change with the plan. Lines 102-104 explain that the command and timer reasons name the plan but do not raise the limit. The contradiction is gone.

Pages read: the pilot `reference/en/commands/create-a-command.mdx`, the Assumes page `reference/en/getting-started/dashboard-tour.mdx`, `docs-work/page-conventions.md`, `docs-work/ledger.md`. No product source was read.

## Blocking findings

None.

## Density (measured, not blocking)

- Lines 54-57 are one paragraph of 4 sentences, 49 words. This is over the three-sentence limit. Split it after line 55, or move the "Storage shows as" sentence into the table note.

## Notes (not blocking)

- [lines 6-8] The opening has three sentences. Page conventions ask for one or two.
- [lines 10, 14] "the settings sidebar" gives no path. Name Settings, then the Account group (dashboard-tour lines 58-69).
- [line 14] "Only the broadcaster may open the page." The dashboard tour (lines 52-53) says the broadcaster can change access per page. The fact-checker should confirm the absolute wording.
- [lines 32-34] **Custom bot name** and **Priority support** show Included or Not included, but the page does not say what either gives. Reader cannot tell what "Not included" costs.
- [lines 47, 49, 84] "Sound clip", "channel asset" and "text-to-speech" are not explained. The ledger gives sound clips to /reference/audio/sounds and text-to-speech to /reference/audio/text-to-speech. Link them at first mention.
- [line 85] "Its description shows the first and last day" does not say which part of the card holds the description.
- [lines 99-100] The "…" marks stand for numbers in the quoted messages. Say so in one clause.
- [line 108] "A deleted file frees its storage at once." repeats line 47. Keep one.
- [line 110] "Some features have their own switch" does not name them. Name them or cut the sentence.

## Voice

Matches the pilot page at sentence level: the actor is the subject, results are checkable, constraints show as what the reader sees. American spelling. The hosting marker at line 38 matches page-conventions.md. No source citation, action key, permission level number, license name or NoMercyBot name.

## Where I got lost

Nothing blocking. The bar rule and the plan-cap rule are now clear.
