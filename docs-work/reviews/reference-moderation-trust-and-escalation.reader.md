# Reader review: src/content/reference/en/moderation/trust-and-escalation.mdx
Verdict: PASS
Reviewed: src/content/reference/en/moderation/trust-and-escalation.mdx
Reviewed-SHA: eb4561e6473f2a95

Reader: a streamer who does not write code.
Assumes: /reference/moderation/overview (src/content/reference/en/moderation/overview.mdx). I read that page and judged against it. Pilot read: src/content/reference/en/commands/create-a-command.mdx.
Page SHA-256 (full): eb4561e6473f2a9567af35b57124e35f0bee46c2faf47070a2406be8e605efc1. Checked before and after the review: unchanged.
This judges the current text fresh. The earlier FAIL on the offense window is no longer in the text (see the window check below).

## Blocking

None. Every step names its result. The offense-window rule agrees everywhere it appears.

## Offense-window check (all sentences about the window)

- Line 176, Policy table: the window is "how long a run of offenses lasts, counted from the first offense of the run", default 168 (one week).
- Line 183: the window is 1 to 8760 hours.
- Lines 185-187: the window starts at the first offense. Each offense inside it adds 1. The first offense after it ends sets the count to 1 and starts a new window.
- Lines 249-251, troubleshooting: the window started at the first offense and has ended. The next offense sets the count to 1. A higher **Offense window (hours)** counts for longer.

All of these agree. Line 250 repeats the reset rule in one sentence. It is a repeat, not a conflict.

## Notes (style; the verdict does not depend on these)

Density (page-conventions: three sentences to a paragraph at most; four parallel facts are a table):
- Lines 6-9: 4 sentences, 47 words.
- Lines 41-44: 4 sentences, 47 words.
- Lines 51-54 (callout): 4 sentences, 58 words. Line 52 puts five facts in one sentence. A list scans better.
- Lines 108-115 (Allowed values): 8 sentences, 78 words, one paragraph of parallel limits. A table of field and allowed range fits here.
- Lines 119-122 (Heat intro): 4 sentences, 26 words.
- Lines 139-143 (heat limits and definitions): 5 sentences, 51 words. Split the definitions, or use a table.
- Lines 147-150 (Escalation intro): 4 sentences, 36 words.

Clarity:
- Line 8: "heat" is named in the intro and defined only at line 119. A short definition at first use helps.
- Line 60: the start of the count is not stated. The reader does not know whether it is the day the bot first saw the viewer or another date.
- Line 61: "this signal" is never named.
- Line 65: "Not following multiplier" is the label, and the sentence says "Today this happens for every viewer." A reader cannot tell whether the multiplier applies to viewers who follow. The label and the sentence need one meaning.
- Line 66: step 4 has two groups of boosts in one sentence. A split helps, but it is minor.
- Lines 102-104 and 115: the tier names **Untrusted**, **Low trust** and **Standard** are never explained. The page does not say what a tier is or what it does. The map row says the page is for new and low-trust chatters, but the page never explains the tiers.
- Line 110: "Total 1 of 1" does not show what a wrong total looks like. The reader cannot tell whether **Save** is blocked when the weights do not add to 1.
- Line 135: the heat limit of 80 is called "the channel's heat limit" on the overview page (src/content/reference/en/moderation/overview.mdx, line 45). This page says at line 137 that no field here changes the 80. It does not say where the 80 is set, or that it is fixed. A streamer cannot tell where to look. The fact check should settle it.
- Line 137 and lines 46 and 53-54: these sentences are about the page, not the subject. Lines 46 and 53-54 say what the page holds. Line 137 says what the page does not do.
- Line 164: "Warn sends the viewer a Twitch warning with the reason." The page does not say where the reason comes from.
- Line 168: "the channel owner" names the same person as **Broadcaster** in the roles table (line 18). One name for one role is better. Page-conventions say "the streamer".
- Line 177: "a timeout step ... has no length of its own" does not say when the default takes effect. The step at line 223 fills the box with the default, so the reader cannot tell when a step has no length of its own.
- Line 177 shows "10:00" before lines 189-200 explain the minutes and seconds format. The "(10 minutes)" beside it helps, so this is minor.
- Line 157: **spam defense** is named with no link. The first use on the page should link /reference/moderation/spam-defense (ledger: spam defense is owned by that page).
- AutoMod is named at lines 132, 141, 157, 175 and 181 with no link to /reference/moderation/automod-and-chat-filters. The first use should link it. Lines 142 and 258 link the page.

Map (not a page defect):
- The map row for this page (docs-work/map.md, row with "Links to") lists automod-and-chat-filters and reports. The page also links /reference/settings/permissions (lines 14 and 260). Add it to Links to.

Voice against the pilot (create-a-command.mdx): the same person wrote both. Both open in second person and use bold labels, numbered steps with a stated result, and the same troubleshooting shape. This page has three dense definitional paragraphs (lines 108-115, 119-122, 139-143) that read like a spec sheet. The pilot uses a table or steps for the same kind of content. Tier shape is not a voice difference.

Earlier review items:
- Six panels (line 47 in the old text): settled. The Heat panel is named at line 124.
- The 80 threshold (old line 133): partly settled. Line 137 says no field here changes it. Its source is still open (see the note at line 135).
- "this signal" (line 61), "heat" first use (line 8) and "Total 1 of 1" (line 110): still open, listed above.

## Checks run in this review

- Read the whole page (261 lines), the pilot page, the moderation overview page, page-conventions.md, ledger.md, and the map header (line 57) and this page's row.
- Namespace and name check (NoMercyBot, NoMercy, open source, AGPL, GPL, PolyForm, MIT): no matches.
- British spelling check and non-ASCII check (emoji): no matches.
- License label, hosting, paid plan, price and subscription wording: none found on the page. No hosting marker is needed.
- No code blocks, so the script blank-line check does not apply.
- Directive blocks (::Callout, ::Troubleshooting) have a blank line before and after.
- Anchors: #policy (line 250) matches "### Policy" (line 170). #type-a-length-of-time (line 225) matches "### Type a length of time" (line 189).
- Dense block counts: `wc -lw` for lines 6-9, 41-44, 51-54, 108-115, 119-122, 139-143 and 147-150, with sentences counted by reading.
