# Reader review: C:\Projects\NoMercyLabs\nomnomzbot-docs\src\content\reference\en\self-hosting\updates.mdx
Verdict: PASS
Reviewed: C:\Projects\NoMercyLabs\nomnomzbot-docs\src\content\reference\en\self-hosting\updates.mdx
Reviewed-SHA: 3c69744dc445df70

Re-review of the current text. The ENCRYPTION_KEY callout (lines 52-58) now says what happens: the bot cannot read the stored sign-ins, and the reader must connect Twitch and each other connected service again. A reader can follow that. No blocking step is left.

Blocking

- None.

Notes (not blocking)

- [lines 54-56] "Keep `ENCRYPTION_KEY` the same across an update." The page does not name where this value is set (which file, which setup). "every other connected service" does not name which services.
- [line 49] "For the lite setup, you can back up the volume before you update." The full setup gets no equivalent line. A reader may ask whether they should back up the full setup, and the page does not say.
- [lines 68-69] "The bot pauses for a short time while it restarts." No length is given. No result is named after the lite command, so a reader cannot tell the update worked.
- [line 62] "Run this command in the project folder" does not say how to open a terminal there. The full update uses PowerShell (line 74). Not checked: whether the Install page covers it.
- [line 87] "When `API_IMAGE` is empty or names a local image, the script builds the image instead of downloading it." The reader does not know what it builds from or what that needs.
- [line 99] "The **System** page in the admin area" does not say who may open it.
- [lines 20-21] "Pick **stable** when you want the fewest surprises." is vague. "A channel that has no new build skips its release." does not say what the reader sees or does.
- [line 109] "The card compares with the **stable** channel only." A reader on beta or nightly is not told what the card then shows.
- [line 11] "image tag" is used before it is explained. Not checked: whether the Install page defines "image".
- [line 91] "such as Watchtower" names a tool without a line on what it does. Minor.

Density (measured)

- No paragraph is over three sentences. The longest are lines 6-7 and lines 42-43 (2 sentences each). Lines 80-82 hold 3 sentences, 33 words.
- The release channel table (lines 14-18) and the card table (lines 102-107) are correct table use.

Voice

- The page reads as the same writer as the pilot page. Both use short second-person sentences, imperative steps, and bold labels. No structural difference needs naming.

Page conventions (checked by text only)

- Frontmatter has `title` then `description`, and the description is under 160 characters.
- Headings are plain words, with no code span, no colon and no "Other". "## Related pages" is the last section.
- The plain rule and the hosting marker are not needed: the page does not explain what the reader may do with the software, and does not mention hosting for others, a price or a paid plan.
- No product name, no "NoMercyBot", no license name, no "open source", no action key, no permission number.
- American English: no non-American spelling found.
- The `Install with Docker` link is absolute (`/reference/self-hosting/install-with-docker`), and the target is on the map.

Ledger

- "release channel" is owned by this page (ledger, Self-hosting). The page defines it at lines 11-12 and does not re-explain "lite" or "full" (owned by Install with Docker).

Not checked

- The anchor `#back-up-the-lite-data` on the Install with Docker page (line 50).
- Whether the Install with Docker page covers a terminal in the project folder.
- The `en.json` labels (**System**, **Updates**, **What changed**), which the fact-check role owns.
- The location of the System page and who may open it.
- The `switchover.ps1` script and the `API_IMAGE` setting (fact-check role).
