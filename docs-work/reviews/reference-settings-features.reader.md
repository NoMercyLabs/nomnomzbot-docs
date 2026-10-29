# Reader review: src/content/reference/en/settings/features.mdx
Verdict: PASS
Reviewed: C:/Projects/NoMercyLabs/nomnomzbot-docs/src/content/reference/en/settings/features.mdx
Reviewed-SHA: eccdda86f9e9f32c

## What I read
- The whole page, as a streamer who does not code.
- Linked pages, read for the access rule: settings/permissions.mdx (lines 16-20 and the role ladder at lines 22-40) and getting-started/dashboard-tour.mdx (lines 38-56 and 58-69).
- Linked page not read for content: settings/resource-limits.mdx. The file exists. Its content is not checked here.
- Rendered output: the page has no include or snippet directive. Read as stored.
- The earlier verdict (Reviewed-SHA d6d6683c704647d8) judged an older text. This review is fresh on the current text.

## Tests
1. Who may open the page (lines 10-20): the broadcaster sees Settings (line 15). A moderator, lead moderator or editor may open the page from a direct link (line 16). The broadcaster can raise the role for each Features action on Permissions (lines 18-20). Pass for the broadcaster. A moderator is told to use a direct link but is not told where to get it. See finding 1.
2. Flip a switch (lines 24-30): where to click, what the switch does, and what a switched-on row shows. Pass.
3. Read the list (lines 37-48): the groups and the table are scannable. Pass.
4. A plan-locked feature (lines 59-67): the badge is explained. The page does not say where the plan is changed. See finding 4.
5. Troubleshooting (lines 79-84): each message has a next step. Pass.
6. Right page: the intro (lines 6-8) says what the page is and where it sits in the sidebar. Pass.

## The earlier blocking finding (line 12, access against the dashboard tour)
Fixed. The page now states the default (line 12). It says the broadcaster sees Settings and moderators use a direct link (lines 15-16). It says the broadcaster may raise each Features action, and it links Permissions (lines 18-20). The dashboard tour says Settings is for the broadcaster only (dashboard-tour.mdx line 49), and that every other page has its own default (line 51). Lines 12 and 16 let a reader reconcile the two. Not a blocker now.

## Findings
### Blocking
None.

### Non-blocking
1. [line 16] "may open **Features** from a direct link." The page does not say where the link comes from. Cost: a moderator who reads this cannot reach the page. Fix: say who gives the link, or say the broadcaster sends it.
2. [line 24] Step 1 starts at "Open **Settings** in the sidebar." A moderator does not see Settings (line 15), so this step does not work for them. Fix: mark the steps "(broadcaster)", or add "A moderator uses the direct link in the section above."
3. [line 51] "A moderator's or the broadcaster's message meets the subscriber rule too." "Meets the rule" is unclear. Cost: a reader cannot tell what changes for a moderator. Fix: "A message from a moderator or the broadcaster also counts for this rule."
4. [lines 65-67] A plan-locked feature cannot be changed here. Line 67 points to Resource limits for usage limits, but that is not the place to change the plan. Cost: a reader who wants the feature has no next step. Fix: say where the plan is changed, with a link.
5. [lines 45-47] "subscriber or higher" and "the template permission" are not explained on this page. "Higher" is the role ladder on Permissions (permissions.mdx lines 22-40). Fix: link Permissions at the first use in the table.
6. [line 46] "cleaned HTML pieces": HTML is not explained here. variables-and-templates.mdx line 39 explains it. Fix: link that line at first use.
7. [line 48] "JavaScript scripts" and "pipeline actions" are not explained. Fix: link the Custom code and Pipelines pages at first use.
8. [line 57] "A script can also use a bot ability only when the feature behind that ability is on." No ability is named, so the reader cannot check the rule. Fix: name one example.
9. [line 42] One table cell carries three ideas: "Shows 7TV emotes in chat, animated emotes and emotes that sit on top of another emote included." Fix: split it into two sentences.
10. [lines 69-73] The license callout is not a step for this page. The owner decides whether it stays here.

Density: no paragraph is over 3 sentences. Each sentence has one idea, except line 51 (finding 3) and line 42 (finding 9).

## Where I got lost
- Line 16. I could not tell where a moderator gets the direct link (finding 1).
- Line 51. I could not tell what "meets the subscriber rule" changes for a moderator (finding 3).
