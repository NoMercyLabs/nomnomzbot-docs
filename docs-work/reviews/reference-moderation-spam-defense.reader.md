# Reader review: C:\Projects\NoMercyLabs\nomnomzbot-docs\src\content\reference\en\moderation\spam-defense.mdx
Verdict: PASS
Reviewed: C:\Projects\NoMercyLabs\nomnomzbot-docs\src\content\reference\en\moderation\spam-defense.mdx
Reviewed-SHA: 6f82127ac970ec7c

Run rule: FAIL only for a blocking finding. A blocking finding is a step a non-coder cannot follow, or a wrong fact visible from the page and the pilot page. None found.

- The three steps (lines 24-29) each state the outcome. Line 27 shows "Unsaved changes" and an active **Save**. Line 29 shows "Spam defense saved."
- The page as stored today is the judged text (sha256 6f82127a...). The older verdict in this folder judged sha 41db533c. Its findings that refer to text no longer on the page are not carried over.
- Paragraphs were counted by hand, as the text between two blank lines. None is over three sentences.
- Two-idea sentences: lines 56, 129, 136 and 202.

Assumes read: `/reference/moderation/overview` (overview.mdx lines 7, 15, 33 name the **Review queue** on **Home**). Pilot read: `commands/create-a-command.mdx`.

## Notes (style and clarity, not blocking)

Terms and outcomes

- [114] The page says "the moderation queue." The overview names it **Review queue** on **Home** (overview.mdx:15, 33). The reader cannot tell it is the same place. Cost: the reader does not know where a held message goes. Use the dashboard label and say where it is.
- [127-129] "looks more suspicious to the bot" and "rates that message as medium risk at most" do not state the outcome. The page never says what a risk level does. The setting label says "Restrict," but the effect is a rating cap. Cost: the reader cannot tell if the message is removed, held or only marked.
- [109-110] The direction of the age limits is not stated. Does "Newest account age that can chat freely: 30 days" gate accounts younger than 30 days or older ones? Cost: the reader cannot choose a value with confidence.
- [56] "real viewers" is not defined. Cost: the reader cannot tell who is acted on.
- [96] "earns protection" is used before the page says what protection does (101-103). Cost: a short gap, but the reader reads three lines without knowing the result.
- [99] and [202] "this bot server" and "your own bot server" are not defined. Cost: the reader cannot tell whether this means the streamer's own server or the hosted bot.
- [135-136] "no standing," "exonerated" and "a community joke" are jargon. Line 136 carries two ideas. Line 146 says "Undo automatically when a group is exonerated," but the page never says what is undone. Cost: the reader cannot predict the effect of a setting.
- [143-145] "How long a group is watched," "Longest a group can stay open" and "Head start before acting" have no meaning on the page. Line 8 says the dashboard shows an explanation. Say that once for this group, or add one line each.
- [88], [92] and [93] use three names: "established," "trust levels" and the label "Trust ladder thresholds." The label does not appear in the table above it. One name per concept.
- [121-123] "How similar counts as the same spam" has the value 0.6 with no unit or meaning. Cost: the reader cannot tell what 0.6 does.

Order and clarity

- [51-57] The seven days start in two places: "when the channel joins the bot" (53), and "when you first saved it on" (55). The second overrides the first. Say which applies when, in one line.
- [202-203] Line 203 says the reports number "changes the result only when held-back patterns arrive from the shared spam list." Lines 189 and 216 say that list is not read yet. The reader cannot tell whether the number does anything today. Say plainly that it has no effect today.
- [160] "Join rate that counts as unusual" sits in the **Sudden activity** table with no badge. The badge appears only in the summary at lines 207-216. A reader of the table believes it works.
- [170-173] "a lockdown that is started by hand, outside the dashboard" does not say who starts it or how. "A second lockdown request" (173) does not say where it comes from. Cost: the reader cannot tell if this applies to them.
- [164-183] The Raid lockdown section is about 18 lines for three settings the dashboard cannot start. For a streamer this is padding. Move it into a collapsible block. The conventions give that form for optional detail.
- [73-75] repeats the watch-only rule already given at lines 47-57. Keep one.
- [205-216] repeats the "Not yet active" badges already named in each section (166-168, 187-189, 216). Keep one statement of each.
- [187] and [197] "is meant to hold" and "is meant to send only" describe intent for features that are not built. The conventions say not to describe what a not-yet-active feature will do. State the badge and the fact.
- [6] and [24-26] the opening and step 1 both give the sidebar path. Keep one. "Policy" on line 6 has no meaning yet. The page says what is set but not what spam defense does until line 47.
- [47] the heading "Start in watch-only mode" differs from the label **Watch only, do not act**. Use the label in the heading, or the reader may take it for a second setting.
- [43] the hosting marker sits between "Where the values come from" and "Start in watch-only mode". It reads as an aside. It is the exact marker text, so this is placement only.

Map and ledger points for the main session (not page defects)

- `docs-work/map.md` line 87 says the page leaves out campaigns and lockdown ("The dashboard has no screen for ... campaigns ... or lockdown"). The page documents the campaign and lockdown settings at lines 132-183. Decide which is right. Either the map row or the page changes.
- `docs-work/ledger.md` line 56 names `/reference/moderation/trust-and-escalation` as the owner of "trust policy." This page explains "established" (88-90) and the watch-hour protection (95-103) in full. Check the overlap after the trust page is written.
- `docs-work/ledger.md` line 51 names the overview as owner of "lockdown." `docs-work/map.md` line 84 says the overview leaves lockdown out.

## Voice against the pilot page

The same writer seems to have written both pages. Both use second person, active voice, bold labels, short numbered steps and tables for parallel facts. The pilot keeps every paragraph to three sentences or fewer, and this page does not hold that line in its settings sections. The pilot uses concrete examples such as `!hello`. This page uses passive or intent forms: "is exonerated," "is meant to," "is judged." Tier and shape differences are not counted.

## Where I got lost

- Where a held message goes (114).
- What "medium risk" and "looks more suspicious" change (127-129).
- Whether the shared-list number does anything today (202-203).
- Whether an account-age value of N gates younger or older accounts (109-110).

## Not checked

- Label text, for example "Days around," "Trust ladder thresholds" and the group names. This is the fact-check reviewer's job, against `dashboard/src/views/dashboard/admin/i18n/en.json`.
- Whether the bot does what the page says. I judged the text only. I did not read the product repository.
- `/reference/moderation/trust-and-escalation` and `/reference/settings/permissions`. They are linked, not in Assumes, and I did not read them.
