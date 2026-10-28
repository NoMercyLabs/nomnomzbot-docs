# Reader review: /reference/settings/white-label-bot
Verdict: PASS
Reviewed: C:\Projects\NoMercyLabs\nomnomzbot-docs\src\content\reference\en\settings\white-label-bot.mdx
Reviewed-SHA: 671a0a2dc3a3d70f

Re-read in full as a reader with no code skills, after the writer's fixes. Read after the Assumes page `/reference/getting-started/bot-account` (it owns the bot account concept and which account the bot types from). The pilot `/reference/commands/create-a-command` was read for voice. The product source was not read. The Troubleshooting directives were read as their wrapped content. No paragraph is over three sentences. Same writer as the pilot.

What changed since the last review (13a4afecb3c32ffa):
- Step 4 now states the success message and the badge change (lines 41-43). Fixed.
- The Cancel button now says where it appears (lines 48-49). Fixed.
- Still open, unchanged: the browser sign-in block (lines 51-58) has no end state and names no account.

Notes (none blocks the main path):

- [line 37] "Choose **Open** followed by the Twitch site name." The exact button text is not given. A reader has to guess the label. Cost: a small pause; the button is visible on screen.
- [lines 51-58] The browser sign-in block has no end state and names no account. It says the Twitch page opens, then stops. The reader cannot tell whether the sign-in worked or whether the card changes to **Connected**. It does not say to sign in as the bot account; the intro (line 32) says it, but this block does not repeat it. A reader signed in to Twitch as themselves in that browser could connect their own account. Judged as a note, not a blocker: the main path (lines 35-43) states an outcome at every step. Fix: one sentence after the browser step with the result, and a bot account reminder.
- [line 15] "let other roles open the page on the **Permissions** settings page." The roles are not named and the Permissions page is not linked. Fix: link `/reference/settings/permissions`.
- [line 46] "The bot still speaks in the channel's one bot voice, now from your own bot account." The concept is owned by the Assumes page. The clause names it without a link. It matches the owner; no second voice is described. Note only.
- [line 8] "Which account the bot types from, and why you do not need a bot account, is on Bot account." One sentence, two ideas. Note only.
- [line 49] "The button shows next to the code, and under a sign-in that failed." Which sign-in is unclear on first read. Note only.
- [line 72] "A dialog asks "Disconnect" followed by the bot's name." The dialog text is not given exactly; the reader can read it on screen. Note only.

Where the reader got lost: the button label in step 2 (line 37), and the end of the browser sign-in block (lines 51-58). Neither stops a reader from finishing the main flow.

Density: no paragraph over three sentences. Parallel facts are in tables.

Checked and clear: steps 1 to 4 each state an outcome; Cancel is stated; "Use another bot account" refers back to the connect steps; the disconnect steps state the result (line 74); the troubleshooting symptoms are quoted with a fix each.

Not checked: whether another review of this page was running at dispatch (the dispatcher's job). Not checked: labels against `en.json` (fact-checker's job).
