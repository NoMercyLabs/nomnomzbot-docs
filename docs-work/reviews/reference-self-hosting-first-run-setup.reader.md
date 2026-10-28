# Reader review: /reference/self-hosting/first-run-setup
Verdict: PASS
Reviewed: C:\Projects\NoMercyLabs\nomnomzbot-docs\src\content\reference\en\self-hosting\first-run-setup.mdx
Reviewed-SHA: 7aaee6064fb775d4

Inputs read: the current page as stored (no includes or snippet directives on it), the pilot `commands/create-a-command.mdx`, the Assumes page `self-hosting/install-with-docker.mdx`, `docs-work/page-conventions.md`, `docs-work/ledger.md`. No product source read.

Re-review after the page changed. The earlier blocking finding (L112-114, the unexplained "check that the container runs") is fixed: L114-122 now give a command, the row to look for (`Up` and `healthy`), and the restart step with a link to the install page. A reader who does not write code can follow it. No blocking finding remains.

## Notes (do not change the verdict)

- [L33, L138, L146] "admin of the bot" is never explained, and no link points to the page that owns the channel role. The reader cannot tell whether they are the admin. Link the term on first use (ledger: channel role is owned by /reference/settings/permissions).
- [L46-51 vs install-with-docker L87] Reader's reading: on the full setup, the Assumes page has the reader fill `TWITCH_CLIENT_ID` in `.env`. This page still asks the reader to paste a Client ID in step 1 and does not say whether a Client ID already set in `.env` counts. One sentence on the full setup would close it.
- [L53-55] "Without it, you sign in with a code. With it, you can also sign in with one tap." (3 sentences, 24 words) "A code" is not defined, and the reader cannot tell where it is typed. Name the step or link the sign-in page.
- [L128-130] "A Client ID that the bot already knows does not count." The reader cannot tell which Client ID this means or how they would see it. The fix that follows is clear.
- [L26-28] Button states: Back on the first step and the label of Next on a done optional step are not stated. A reader can infer both.
- [L120-122] The check is now a command, and the page gives both forms (lite and full). The page does not say that `docker compose ps` must be run in the same folder as the compose file for the full setup; "in the project folder" at L114 covers it.
- Density, checked by sentence count: no paragraph is over 3 sentences. The longest is L6-8 (3 sentences, 39 words). Sentences with two ideas, to split if the writer revises: L7, L49 (three actions in one sentence), L58, L72 and L74.
- Voice compared with the pilot `commands/create-a-command.mdx`: same person. PASS on voice.
- Terms: "Client ID", "Client Secret", "Redirect URL" and "Event feed" each appear in a step or sentence that explains them. No term is used before it is introduced.
- Quoted card text with "…" (L72, L103) is UI text the reader sees in full, not an elided snippet.
- Naming: "NomNomzBot" only. Spelling is American (checked: "Authorize", "Choose", "Connected").
- Hosting marker: "the shared NomNomzBot app" (L41, L57) is a shared Twitch app, not a paid service. Whether it needs the hosting marker is for the fact-checker and the writer to decide.
