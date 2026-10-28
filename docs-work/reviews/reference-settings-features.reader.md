# Reader review: C:\Projects\NoMercyLabs\nomnomzbot-docs\src\content\reference\en\settings\features.mdx
Verdict: PASS
Reviewed: C:\Projects\NoMercyLabs\nomnomzbot-docs\src\content\reference\en\settings\features.mdx
Reviewed-SHA: eaec2636054228ba

Assumes read: /reference/getting-started/dashboard-tour, /reference/settings/resource-limits. Voice compared with the pilot /reference/commands/create-a-command. No product source read.

Verdict basis: no step is unfollowable from the page text, and the page does not contradict itself. The findings below are notes. The first one needs the writer and the fact-checker to settle it before the page ships.

## Notes

- [line 12 vs dashboard-tour.mdx:49] The page says a moderator, lead moderator or editor may open the page. The assumed page says the **Settings** entry is "The broadcaster only." The step on line 16 starts in the settings sidebar, so a moderator cannot tell whether step 1 works. This is a reader's reading, not a finding on the page text. Settle which is true (the fact-checker reads the controller guard) and make the two pages agree. If moderators cannot reach Settings, this page is wrong and the verdict becomes FAIL.
- [line 16] Step 1 says "Open **Features** in the settings sidebar." It does not name the entry that opens the sidebar (**Settings**). The link to the tour is on line 7, away from the step. Cost: a reader must leave the step to find the entry.
- [line 37] "subscriber or higher" appears here first. "Higher" is not explained on this page, and the page does not link to Permissions, which owns the role ladder (ledger: permission level). Cost: the reader cannot tell whether a moderator counts as "higher".
- [line 43] "A moderator's or the broadcaster's message meets the subscriber rule too." Sentence: 11 words. "The subscriber rule" is a phrase the page never defines. Cost: the reader does not know what the rule is. Suggested wording for the writer: "A moderator's or the broadcaster's message also passes the subscriber rule." Still needs the link to Permissions.
- [line 34] Table cell, one sentence, 17 words: "Shows 7TV emotes in chat, animated emotes and emotes that sit on top of another emote included." It carries three ideas, and "included" reads as a verb. Cost: the reader must reread the cell to learn that the animated and layered emotes are in the feature. Split it into two sentences or a short list.
- [line 39] "template permission" is used as a known term. The page never says where the permission is set. Cost: a reader who wants to give a viewer the permission has no place to go. Name the place, or link the page that owns it.
- [line 38] "The overlay shows them." and "HTML pieces" appear without a link to the overlay page (ledger: overlay) or a short explanation of HTML. Cost: a streamer who does not know HTML cannot tell what a "piece" is.
- [line 49] "A script can also use a bot ability only when the feature behind that ability is on." 17 words. The page names no ability and no feature here, so the reader cannot check the rule. Cost: a reader cannot tell which script actions stop when a feature is off.
- [lines 57-59] Dead end: the switch of a feature outside the plan "cannot" be changed, and the only link is to Resource limits (usage limits). The next step is not on this page. Resource limits line 36 says the Change plan button opens Billing. Cost: a reader who wants the feature has no next step. Add one sentence with a link to Billing.
- [line 24] "While one switch saves, the other switches are off." The word "off" can mean the switch position or a disabled state. Cost: a reader may think the other switches changed.
- [lines 29-30] The page names a **More features** group. The table on lines 34-40 has no row for it. Cost: a reader looking for the group finds nothing. Say that the group is empty for now, or drop the name.
- [line 72] "Choose **Try again** on the card." The page never describes a card. Cost: the reader must guess what the card is. Name the place of the button.
- Density: all paragraphs pass the three-sentence limit. The longest paragraph is lines 53-55 (3 sentences, 36 words). No run of parallel facts sits in a paragraph.
- Voice: the page sounds like the same writer as the pilot (actor first, "Who can use this page", numbered steps, the Troubleshooting pattern). A reference page has a table-first shape, and that difference is set by the tier.
- Hosting marker: present on lines 61-65, exact text. No license name, no "open source", no action key, no numbered permission level, no source citation, no emoji, no NoMercyBot name. American spelling checked.
- Omission markers: none found in the page text.
- Read as rendered: the page has no includes. The directives (Callout, Troubleshooting) are read as the content they wrap.

Where I got lost: I could not tell from the page whether a moderator can reach the features switch (note 1). I could not tell which bot abilities depend on a feature (note on line 49).
