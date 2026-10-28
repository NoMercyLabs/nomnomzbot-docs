# Reader review: C:\Projects\NoMercyLabs\nomnomzbot-docs\src\content\reference\en\settings\billing.mdx
Verdict: PASS
Reviewed: C:\Projects\NoMercyLabs\nomnomzbot-docs\src\content\reference\en\settings\billing.mdx
Reviewed-SHA: 316ebb3de9667ead

Read for this review: the page (as stored; it has no include or snippet directives, only the Callout directive, which is read as its wrapped text), the Assumes page `settings/resource-limits.mdx` (owns "resource limit"), the pilot `commands/create-a-command.mdx`, `docs-work/page-conventions.md` and `docs-work/ledger.md`. The product source was not read.

Result: I could follow every step. No step blocks a reader. The page text does not contradict itself. The notes below are density and clarity points, so the verdict stays PASS.

Same person as the pilot: Yes. Subjects come first, labels are in bold, steps say what the reader sees, and the "Who can use this page" section has the same shape. The pilot gives concrete values (`!hello`, a sample reply). This page gives none, so a reader cannot check a plan row or an invoice line against an example. This is a note, not a finding.

Conventions checked:
- Hosting marker: present in the Callout at lines 10-12, same wording as page-conventions.md line 135.
- Plain rule: not repeated; the page links to the overview at line 14, as the ledger allows.
- No license name, no "open source", no action key, no permission number, no emoji, no British spelling ("canceled" at line 40), no "will" about later features, no elided "..." snippet.
- Links at lines 8, 14, 112-113 point to `/reference/settings/resource-limits` and `/reference/overview`; both are on the map.

Notes (verdict unaffected):

- [43-44] Four parallel dates in one sentence: "Renews on, Ends on, Trial ends on or Pay before." Sentence is 20 words. A short list or table would scan better.
- [103-106] Paragraph has 4 sentences and 47 words. The limit is 3 sentences. Quote: "Invoices lists each invoice with its number, amount and status. Each line shows when it was issued, due, paid or refunded. Open invoice opens the invoice page in a new tab, when the invoice has one. Use Previous page and Next page to move through older invoices." Split the navigation sentence into its own paragraph, or move the four date states into a table.
- [63-64] One sentence holds two conditions: "A cell reads No limit when the plan has no cap, and Not included when the plan does not have it." A table cell rule would scan faster.
- [71-73] The On state of **Switch at the end of the period** has no stated outcome. Only Off is stated ("the new plan starts now"). A reader must guess that On means the change waits for the period end. Suggest: "On: the new plan starts at the end of the period." Also, "the panel also shows" does not say where the switch sits relative to step 2.
- [85] "Leave **Cancel right away** off" gives no default. page-conventions.md line 61 asks for a stated default. Suggest "Default: off."
- [28] "Founders badge" appears in the panel table before it is explained at [99]. "Period" (lines 71, 85) and "Pay before" (line 43) are never defined. A reader can guess, but the page does not confirm it.
- [46-47] and [77]: the invite-code plan "has no payment buttons", and the buttons are "for a paid plan only". The page does not say whether an invite-code plan can end or be canceled. A reader cannot tell. This is a gap in what the page states, not a wrong step.
- [79-80] and [88]: **Cancel plan** names the button at the bottom of **Your plan** and also the confirm button in the dialog. The steps still work, but the same label appears in two places.
- [66] "choose **Choose plan**" repeats the word. Wording only.
