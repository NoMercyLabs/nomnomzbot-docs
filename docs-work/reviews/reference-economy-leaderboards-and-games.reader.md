# Reader review: C:\Projects\NoMercyLabs\nomnomzbot-docs\src\content\reference\en\economy\leaderboards-and-games.mdx
Verdict: PASS
Reviewed: C:\Projects\NoMercyLabs\nomnomzbot-docs\src\content\reference\en\economy\leaderboards-and-games.mdx
Reviewed-SHA: 245bef96db057ce9

Scope: I read the whole page. The Assumes page is /reference/economy/currency-and-balances. I did not read that page. I judged ownership from docs-work/ledger.md. Voice was checked against commands/create-a-command.mdx.

Blocking findings: none. Every step can be followed, and each add, change and delete flow names what the reader then sees (except as noted below).

Findings (none stops a step):

- [lines 47-50] One paragraph holds four sentences (31 words): Daily, Weekly, Monthly, All time. These are parallel facts. A table fits, as page-conventions asks.
- [lines 63-66] One paragraph holds four sentences (45 words) on how chat shows a leaderboard. Split it, or move the pick rule into a short list.
- [line 36] "the set" is not a label. The field is **Over** (line 28). The example "Whole channel · All time · top 10" also leaves out "what it ranks", which the sentence before it says the row shows. The reader cannot match the sentence to the example.
- [lines 56-57] "A One jar leaderboard is saved, but it ranks no viewers." Two clauses joined by a comma. Page-conventions says to split these.
- [line 52] "A viewer who opted out of leaderboards is not ranked." The term "opted out" is used before any page that owns it. The ledger (line 97) gives opt-out to /reference/settings/your-data-and-privacy, which is not in Assumes. The reader is not told how a viewer opts out. This is a map gap: add the owner to Assumes, or name where opt-out is set.
- [lines 65-66] "the first leaderboard" twice. The page does not say what order "first" means (list order or creation order). The reader cannot predict which leaderboard answers in chat.
- [line 68] The table header "What the bot answers by default" implies a setting. No page names where to change it. Name the place, or drop "by default".
- [lines 32-34] "Without a jar, the dialog shows 'Pick a jar.'" It is unclear whether this means no jar is selected or the channel has no savings jars. A reader with no jars cannot tell what to do. "savings jar" also appears here without a link. The ledger gives it to currency-and-balances, which is in Assumes, so link it on first use.
- [line 20] Add step 3, "Choose the fields (see the table below)." It states no outcome. The other add steps do.
- [lines 47-48] "the last Sunday" does not say whether a Sunday that is today counts. A reader cannot check the rule against a calendar date.
- [lines 75-80] The change step 1 ends at "Choose **Save leaderboard**." It does not say what the reader sees next, unlike the add flow. The delete step 2 does not say what the list shows after confirm.
- [lines 87-92] The table lists **Games** twice: once in the dashboard sidebar and once on the viewer pages. The reader cannot tell whether these are two pages. The row **Leaderboards** on the viewer pages shows Coming soon directly under a page that describes a working Leaderboards tab. The page never says that the dashboard tab works and only the viewer-page leaderboard is Coming soon.
- [line 3, description] The description promises "game pages". The body also lists Leaderboards and Points and store on the viewer pages. The description and the body disagree on scope.
- [lines 36-37 and 63-71] The page sets "Places shown" (default 10) but chat shows the top 5 with no link between the two. A reader cannot tell whether Places shown applies in chat. This is a fact question for the fact check, but the reader sees the gap too.

Voice: the page matches the pilot. It uses "You ..." openers, bold labels, short sentences and tables for parallel facts. It sounds like one writer. No ledger concept is taught again: channel currency and viewer pages are linked, and Coming soon is named, not explained.

Style checks in this page: no namespace spelling other than NomNomzBot (none found), no license label, no hosting or price wording, one bot voice stated (line 64), no British spelling found.

Not checked: the currency-and-balances page itself, the claims file (for facts), and the dashboard i18n labels. Those belong to the fact check.
