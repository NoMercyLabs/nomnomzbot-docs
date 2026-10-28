# Reader review: /reference/getting-started/sign-in
Verdict: PASS
Reviewed: C:\Projects\NoMercyLabs\nomnomzbot-docs\src\content\reference\en\getting-started\sign-in.mdx
Reviewed-SHA: aea6ad938fcc83dc

Scope: read as a non-coder who has never used NomNomzBot. Judged against the brief's Assumes list (/reference/overview owns what the bot is and the plain rule) and the pilot page /reference/commands/create-a-command for voice. No product source read. No directive needed expansion: the page uses ::Troubleshooting, <details> and tables only, and each was read as the content it wraps.

Blocking findings: none. A reader can follow the Twitch button flow, the code flow, the bot-change flow and the closed-page flow from the text alone.

Density check: no paragraph is over three sentences. Numbered list items were counted per item (no blank lines between items, as on the pilot page). Sentence-level findings are below.

Reader's reading (not blocking, verdict stays PASS):

- [L111-112] "Choose the **Open** button under the code. Its label ends with the same site address." The bold label is "Open", but the sentence says the label holds an address. A reader will look for a button called "Open" and may find a longer label. Say the label starts with "Open" and show the form, or drop the bold word. Also a label-exactness question for the fact-checker.
- [L107-108] Step 2 ("Choose a button such as **Get a Twitch code**.") states no outcome. Step 3 assumes the code shows. Add: "The code appears on the page."
- [L92-94] "app details" is used in L93 and explained only in L94. Swap the order, or put the explanation first.
- [L103] "A Twitch code always signs you in as the broadcaster, so a moderator or a viewer uses a role button." carries two ideas. Split it into two sentences.
- [L163-165] Sentence 3 ("It removes the bot from the list, and a screen reader names it **Forget** and the bot's address.") carries two ideas. The screen-reader name is detail a reader cannot see. Drop it, or move it to a collapsible block.
- [L169-171] Sentence 3 lists three UI items ("a **Coming soon** button, the note ..., and **Back to the home page**"). Three is under the table threshold. Optional: a short list.
- [L32-34] "The card shows the address of the bot on the card" repeats "on the card". Say "The card shows the bot's address, with the text ..."
- [L190-191] "Its owner sets one up in the bot settings." The page uses "the person who runs the bot" everywhere else (L13, L82, L94). Use the same term. "The bot settings" is not named or linked, so a reader cannot find it. Link it or say which page.
- [L156-161] The "..." placeholder first appears in the table at L156 and is explained after the table at L161. The table cell at L136 explains it inline. Move the L161 sentence above the table, or add the same explanation inside the table.
- [L182-184] "When you run the bot yourself, start it, then choose **Try again**." A self-hoster is not told how to start it. Link /reference/self-hosting/install-with-docker or /reference/self-hosting/first-run-setup at that point.
- [L90] "Twitter / X" appears in the platform table. docs-work/page-conventions.md line 123 names "Twitch, Kick, YouTube" only. Not a reader finding. The fact-checker decides whether X is supported today.

Same person? Yes. The sentence voice matches the pilot: the actor leads, steps name the bold label, and results are stated as what the reader sees. The page repeats "the page says" often, which the tier explains (a sign-in flow shows messages).

Where I got lost: nowhere in the flows. The only pause was the "..." placeholder at L156 (see above).

Not checked in this run: product source (role forbids it); the /reference/overview page text (judged against the brief's description of it); whether another review of this page was still running (no check was made); the site build and the links and style gates (role forbids the build; the gates belong to the writer's Done step).
