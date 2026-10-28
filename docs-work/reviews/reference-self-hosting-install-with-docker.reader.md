# Reader review: C:\Projects\NoMercyLabs\nomnomzbot-docs\src\content\reference\en\self-hosting\install-with-docker.mdx
Verdict: PASS
Reviewed: C:\Projects\NoMercyLabs\nomnomzbot-docs\src\content\reference\en\self-hosting\install-with-docker.mdx
Reviewed-SHA: 1d0518d661ea9ef4

Reader view: Windows. Platform blocks show only the Windows content. The `linux macos` blocks (lines 124-130, 173-180) show nothing to this reader.
Assumes read: /reference/overview. The page does not re-teach what NomNomzBot is or the plain rule; it links the overview at line 223.
Pilot read: commands/create-a-command, for voice.

## Blocking

None. The two earlier blockers are fixed: the download source is now named (lines 35-68), and the Twitch application and its console URL are now named (lines 29-31).

## Notes (do not change the verdict)

- [lines 44-49] Windows 10 reader: "Open in Terminal" appears in the File Explorer menu only with Windows Terminal installed. Without it, the step has no visible item. Cost: a non-coder may stop. Add the fallback "Shift and right-click, then Open PowerShell window here".
- [lines 37, 63-68] The page links the product repository. page-conventions.md forbids a repository link on a page. The exception exists only in the writer's message, not in a rule file I read. Cost: none for the reader; the convention owner should record the exception.
- [lines 168-171] Paragraph of 4 sentences, 35 words, unchanged from the previous review. Sentence 3 holds two edits: remove the `#` before `./data:/app/data`, and remove the `lite_data` line. Split it into steps. "Make the folder" still does not say the folder is named `data` or where it sits. This block has no Windows content.
- [lines 15, 13, 16, 21, 22, 165] Terms with no plain gloss at first use: container, Postgres, Redis, Caddy proxy, SQLite, volume. Cost: a non-coder pauses. One short gloss at first use is enough.
- [lines 91-101] The optional "Put settings in a file first" block says "change two lines ... before you start the bot", while the main lite path says "Lite needs no settings file". Cost: a reader may think the block is required. Say the block is optional for lite.
- [lines 115-116] "The build needs a lot of memory for Docker" gives no figure. Cost: the reader cannot tell whether the PC is enough.
- [lines 182-184] "Never copy the database file alone" does not name the file. "-wal" and "-shm" are not explained.
- [lines 186-207] The backup has no success check after step 2, and no restore steps. Cost: the reader cannot tell the backup worked, and cannot restore it.
- [lines 132-133] TWITCH_BOT_USERNAME now says "the account the bot types in chat as", which is clear. The page does not link the bot account page, which page-conventions.md asks for. Style only.
- [lines 122-123, Windows view] Full-path step 1 shows only its sentence on Windows. The sentence states the action, the source and the new name. Followable in File Explorer.

## Density

- Paragraphs over three sentences: one, lines 168-171 (above).
- Sentences with two ideas: line 15 ("a database server, or updates with no pause").
- Parallel facts that should be a table: none. The table at lines 18-24 and the table at lines 94-97 carry them.
- All other paragraphs are one to three sentences.

## Checks against page-conventions.md

- Frontmatter: title is sentence case. Description is one sentence, about 113 characters. Two fields only.
- No source citation, no action key, no numbered permission level, no license name, no "open source", no emoji.
- The hosting marker is exact at lines 219-220. The plain rule is not restated; the page links the overview.
- American English: no British spellings found.
- Headings: no heading ends with a colon. Action headings start with a verb.
- No content addresses the reviewer or sets a verdict.

## Voice

Same person wrote this page and the pilot at the sentence level. Both put the actor first, state each result, and use short plain sentences. The pilot bolds dashboard labels; this page names no dashboard label. The difference follows from the page type.

## Not checked

- Whether another review of this page is still running. I have no process list in this run.
- Whether first-run-setup or bot-account covers the bot account and the .env values in depth. Neither is in Assumes, so I did not read them.
- Whether the compose file names and the volume name match the product. The reader does not read product source.
