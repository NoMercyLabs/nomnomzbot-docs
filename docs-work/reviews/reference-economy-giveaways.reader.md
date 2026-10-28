# Reader review: C:\Projects\NoMercyLabs\nomnomzbot-docs\src\content\reference\en\economy\giveaways.mdx
Verdict: PASS
Reviewed: C:\Projects\NoMercyLabs\nomnomzbot-docs\src\content\reference\en\economy\giveaways.mdx
Reviewed-SHA: 7fda655c060a7727

Judged against: map row for /reference/economy/giveaways (Assumes: /reference/economy/currency-and-balances, /reference/economy/store), docs-work/ledger.md, docs-work/page-conventions.md, and the pilot page /reference/commands/create-a-command. The page has no includes or snippets, so the stored text is the text the reader sees. The product repository was not read. The Assumes pages were not read; re-teaching was judged against the ledger's ownership lines.

This review judges the current text only (sha256 7fda655c060a7727...). It does not use the older reader review in this file, which judged an earlier text.

Why PASS: every step names a control and states what the reader sees, or states the outcome in the following sentence. No step is one a non-coder cannot follow. The findings below are clarity and map issues. Under this run's rule they stay in Notes.

## Notes, most serious first

1. [L100, L105-L106] The prize row "An announcement in chat" is the default. The default paragraph says the draw "posts nothing in chat" for it. A reader expects a chat line from a row named "announcement". The label and the behavior point in opposite directions. Fix: rename the label to match what it does, or state the chat line the winner sees. The fact check must confirm which is true.
2. [L47-L50] "Entries per viewer" is a field (1 or more, default 1). L50 then says a value above 1 "changes nothing". A reader sees a control that does nothing and no reason it exists. Fact check: confirm the field is inert. If it is, remove the row and the sentence, and file an issue.
3. [L43-L44] "That step and the keyword are the two ways a viewer enters." This conflicts with L39-L41, where Active viewers mode needs no keyword and no step. A reader cannot tell whether Active viewers is a third way in. Fix: name all three ways in one sentence.
4. [L184-L185, L194] "active giveaway" is used for a blank field (L185) and in L198, but the rule is only implied at L124-L129. Define it once in plain words and use the same term.
5. [L124-L126] "When nobody can win, the draw does not happen." The page does not say whether the status changes or a message appears. The outcome of the step is not stated.
6. [L97-L98] Terms used without a definition: "community standing level" (L60) and "shadowbanned" (L64). "Viewers must confirm they are 18 or older" (L59, L112) does not say how a viewer confirms. Map check: find the owner page. If the owner is not in Assumes, the route is wrong and the fix is a map edit, not a definition on this page.
7. [L103, L171] "whisper" is not explained. A reader does not know it is a private chat message. L171 says the code "stays with that winner" and does not say what the streamer does next.
8. [L176-L190] The pipeline steps re-teach pipeline editing ("Add a step at the end", "Find a step", "Save"). The ledger gives pipelines to /reference/commands/pipelines, which is not in this page's Assumes. Map fix: add the owner to Assumes, or cut the editing steps to one clause with a link. L184 "Open a pipeline" does not say where pipelines are listed.
9. [L194] "fill in the giveaway it uses" names no field. The table at L181-L185 says "The giveaway you pick" but no control has that name.
10. [L109-L110, L195-L198] Silent failures are named without saying what the streamer sees: the giveaway is not saved (L113), the step fails (L198). A short note on the visible result would help.
11. [L146-L152] "a question mark" (L150) and "a line for each count that goes with it" (L151) name nothing the reader can use. Name the counts or cut the clause.
12. [L89-L91] "A winner who does not chat in time loses the win, and the badge shows **Forfeited**." This sentence carries two ideas.
13. [L11] The role names are not bold. The pilot bolds its role names. No link to /reference/settings/permissions at first use. The pilot links it.
14. [L26, L78] Headings "Entering" and "Drawing" are nouns. The conventions ask for a verb or a plain task name. Minor.
15. [L162-L171] Passive voice: "are skipped", "are removed". The conventions ask for active voice.
16. [L40-L41, L63-L64] Two ideas in one sentence at L63-L64 (broadcaster rule and the muted or shadowbanned rule). Minor.

## Density

- Prose paragraphs: none is over three sentences. The longest blocks are L35-L37, L39-L41, L46-L48 and L124-L126, each at three sentences.
- Two-idea sentences: L50 (note 2), L89-L91 (note 12), L63-L64 (note 16).
- Tables hold the parallel facts (L28-L33, L55-L61, L71-L76, L83-L87, L98-L103, L181-L185). Good.

## Re-teaching against the ledger

- "Channel currency" is named and linked at its first use (L46). That matches the ledger: currency is owned by /reference/economy/currency-and-balances.
- Pipelines are taught again in L176-L190 (note 8). The ledger owner is not in Assumes.
- "Store" is linked only in Related pages (L203). Nothing re-taught.

## Same person as the pilot

- Yes, mostly. The page uses second person, labels in bold, "Choose X" steps, a stated outcome after each step, and a Related pages list. These match the pilot.
- The differences are the unbolded role names (note 13), the passive lines (note 15), and the missing outcomes at L124-L126 and L198 (notes 5 and 10).

## Rules checked

- Namespace: no NoMercyBot spelling in the page text.
- American English: no British spelling found.
- License label: none on the page. Hosting marker: the page does not mention hosting for others, so no marker is needed.
- Bot voice: the bot speaks in chat only through the prize rows. Note 1 covers the one contradiction.
- Emoji and names of people: none.

## Where I got lost

- At the default prize, L100 and L105-L106. I could not tell whether chat sees a winner.
- At "Entries per viewer", L47-L50. I could not tell why a higher value does nothing.
- At the second way to enter, L43-L44 against L39-L41. I could not tell whether Active viewers needs the step.
- At the blank pipeline field, L184-L185. I could not tell which giveaway the step picks.
