# Reader review: /reference/community/chat-page
Verdict: PASS
Reviewed: C:\Projects\NoMercyLabs\nomnomzbot-docs\src\content\reference\en\community\chat-page.mdx
Reviewed-SHA: 8b8ee1dfd0eee3fd

Scope: current page text read in this run (285 lines, SHA above). Assumes read: /reference/getting-started/dashboard-tour (owns sidebar groups, Home, header tools, Coming soon entries). Pilot read: /reference/commands/create-a-command. Also read: docs-work/page-conventions.md, docs-work/ledger.md. The product source was not read.

Result: No blocking finding. The page carries a reader through every flow. The emote picker rows (L61, L63) now state what a right-click does on an emoji with skin tones. The notes below are clarity fixes; the verdict stays PASS.

Checked and clean:
- Paragraph density: no paragraph between blank lines has more than 3 sentences. Longest is lines 249-251 (3 sentences, 52 words).
- Forbidden words: no "will", "soon", "planned", "previously", "open source", license names, "NoMercyBot", action keys or numbered permission levels.
- Hosting marker: not needed, the page does not mention hosting, pricing or paid plans.
- Re-teaching: no concept from the Assumes page is explained again.
- Voice: matches the pilot (actor first, "Click", "Choose", "The X shows").

Notes (verdict unaffected):

- [L61] Star row: "An emoji with skin tones opens the tone menu instead; star it with the star in that menu." The page never describes a star in the tone menu, so a reader cannot tell what to click. Name the control as the dashboard shows it, or drop the sentence. The cell is three sentences (about 32 words).
- [L63] Tone row: "The right-click forgets the tone you chose before." The consequence is clear. It reads as a side effect the reader meets only after the fact, so it fits the page as is.
- [L22] Pointer: "The chat of a Twitch channel that does not use the bot opens from the viewer pages." Dashboard-tour (L207) says that chat "opens on a viewer chat page of the dashboard." The two pages name different places. Align the wording with dashboard-tour, or name the one place.
- [L199] Followers-only: "Turning it on keeps the number in the box; 0 lets every follower chat." A reader with 0 in the box cannot tell whether turning it on works. Say what the box holds when it is 0 and what the switch does then.
- [L20] "Someone who may open Chat but may not read the chat settings" gets the viewer version. The page does not name the setting that decides this, and it does not link to Permissions here. Cost: a moderator cannot tell whether this applies to them.
- [L46] and [L264] "someone who may send chat" and "your role may not send chat." The page does not say which role or setting controls sending. Suggest one link to Permissions with the setting named.
- [L113] "channel currency" and [L209] "participating channels" are concepts owned by other pages. The ledger says to name them and link on first use: channel currency to /reference/economy/currency-and-balances, participating channels to /reference/moderation/linked-channels. Neither is linked.
- [L106] "Click a line, not on a name or a button." The page does not say what a click on a name does. A reader who clicks a name will not know if it failed.
- [L116] "choose **Clear focus on** and the name" splits one label around the word "and." The reader cannot tell the exact text to click. Write the label as the dashboard shows it.
- [L237] "Enter the code on Twitch." The page does not say where on Twitch, or whether the panel gives a link. The outcome is stated, but the step's first action is not.
- [L55] Six parallel facts sit in one sentence: Favorites, Recent, You, This channel, other channels and emote sources, then the emoji groups. Conventions say four or more parallel facts are a list or table. Suggest a short list.
- [L251] One sentence (22 words) holds two ideas: the search field and the panel buttons folding into More chat tools. Split it.
- [L138] "The search covers the whole stored history" sits next to L133 "Search further back for older matches." A reader cannot tell whether the first results include every match. One clause would settle it.
- [L168] "Font and readability" has a Change link to the text size and font. The page does not link to /reference/settings/readability, which dashboard-tour links from the account menu.
- [L250] "The window" does not name the pop-out window it means. Name it.
- [L209] The Mass ban row holds three sentences (about 37 words) in one table cell. It is within the limit, but it is the densest cell on the page. Consider moving "It is off when the count is 0" into the Troubleshooting section, or a short sentence under the table.

Where I got lost: the star in the tone menu at L61, who may read chat settings at L20, the Followers-only 0 case at L199, and where to enter the Twitch code at L237.
