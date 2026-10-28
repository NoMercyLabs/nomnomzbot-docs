# Reader review: C:\Projects\NoMercyLabs\nomnomzbot-docs\src\content\reference\en\settings\resource-limits.mdx
Verdict: PASS
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
