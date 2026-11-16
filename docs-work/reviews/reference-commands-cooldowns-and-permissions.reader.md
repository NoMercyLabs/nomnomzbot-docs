# Current independent reader review

Verdict: PASS
Reviewed: src/content/reference/en/commands/cooldowns-and-permissions.mdx
Reviewed-SHA: 414929d9f14474b8cddc2b718e7d3517125da2286ce78fc46faa14b904370f50
Reviewed-SHA256: 414929d9f14474b8cddc2b718e7d3517125da2286ce78fc46faa14b904370f50
Reviewed-Date: 2026-11-05
Reviewer: independent targeted reviewer

The full article was read again, including the final whole-seconds, restart and identity repairs. Permission versus pacing remains the opening concept; its existing headings and approachable voice are preserved. Tables support exact role/setting lookup, while prose explains the consequences and exceptions. The 10-second shared/60-second personal example correctly explains why another viewer can restart the shared wait before the first viewer's personal wait ends.

The role section now distinguishes the bot ladder from each platform's incoming data. Artist, ordinary-versus-lead moderator badge, stored team/permit access and YouTube Studio Editor details answer practical access questions without inventing equivalent native roles. The later moderator-testing section separates access from bypass so a streamer can understand why testing from a native moderator account differs from testing a bot-assigned role.

The denial section says a speech request is attempted rather than guaranteeing audible output. It connects Read it aloud independence, bot voice, the 30-second attempt wait, bits and approval to their consequences. The final identity wording states the implementation limitation conditionally. Preset reset is clearly broader than these three controls, and restart wording is confined to active command waits.

Related Permissions, Create a command and Built-in commands were read for consistency. Their common ladder, cross-links, basic setup and separate music safeguards remain compatible with this detailed article. No substantive reader finding remains at this hash. The lead owns final rendered/build checks; this review does not certify a live UI or native-channel test.

Detailed report: docs-work/overhaul/cooldowns-permissions-targeted.md.

## Historical evidence

The earlier review headers and their evidence below are archived. Their hashes and verdicts do not approve later article bytes.

### Previous independent reader review

Verdict: PASS
Reviewed: src/content/reference/en/commands/cooldowns-and-permissions.mdx
Reviewed-SHA: 845032f86ace33443e7256ad6d7682deb788b1930a685b3cd6a5c1ea7132ae2b
Reviewed-SHA256: 845032f86ace33443e7256ad6d7682deb788b1930a685b3cd6a5c1ea7132ae2b
Reviewed-Date: 2026-11-05
Reviewer: independent section reviewer

Permission and pacing are taught as distinct decisions, with a concrete 10-second shared/60-second personal interaction. Moderator testing, restart behavior and direct bindings explain real exceptions without diluting the beginner concept.

The full page was read with the preceding/following navigation context and related links. This review applies the owner's explanatory, progressive-disclosure guidance; it does not impose Atlas sentence caps, pilot mimicry or fixed article headings. No substantive reader finding remains at this hash. Build/render/link checks are recorded separately by the lead reviewer.

Report: docs-work/overhaul/review-learning-commands-helpers.md.

## Historical evidence

The material below is retained as historical evidence; its older verdict is not the current review.

# Reader review: src/content/reference/en/commands/cooldowns-and-permissions.mdx
Verdict: PASS
Reviewed: src/content/reference/en/commands/cooldowns-and-permissions.mdx
Reviewed-SHA: 44d1bc6dbc3f6eb9

Round 4. Assumed pages read first: /reference/commands/create-a-command (editor, footer, Save changes, Trigger and cooldowns, Read it aloud, Reset to preset, Who can use it default Everyone). The page is read as it stands in the file; the file has no include or snippet directive. No product source was read, so no fact on this page is confirmed against code.

## Round 3 items, checked again

- Lines 48-50 (text to speech): the denial line is "in the same bot voice". This matches "The bot talks in one voice" in docs-work/page-conventions.md. The second voice is gone. Settled.
- Line 12 (table) and line 80 (cooldown after permission): line 12 says a cooldown applies "for everyone except the broadcaster and moderators". Line 80 says a viewer with too low a role gets the permission line. The "nobody waits" wording is gone. Lines 75 and 84-86 say the same thing. Consistent.

## Findings (blocking)

None. No wrong fact is visible from the page. No step lacks its outcome.

## Density

Paragraphs over three sentences (text between two blank lines): none.

Paragraphs at the limit, for the record:
- Lines 48-50: 3 sentences, 45 words. "When text to speech is on for your channel, the bot also reads the line aloud in the same bot voice." (21 words) "This does not follow the command's Read it aloud switch." (10 words) "For each viewer below moderator, it is read at most once every 30 seconds." (14 words)
- Lines 17-19: 3 sentences.
- Lines 56-58: 3 sentences.
- Lines 84-86: 3 sentences.

Sentences with two ideas:
- Line 52: "Text to speech skips the line when your channel sets a minimum bits amount for text to speech, because the line carries 0 bits." Two ideas: the skip rule, and the reason. See Notes.

Parallel facts that should be a table: none. The parallel facts are already tables (lines 9-13, 23-32, 73-76, 133 table in create-a-command is the pilot's equivalent).

## Where I got lost

- Lines 75 and 84-86: "moderators" is used for the exemption. The role list (lines 21-32) has "Moderators", "Lead moderators" and "Editors" as separate rows. I could not tell whether a Lead moderator or an Editor is exempt from the cooldown. A streamer deciding a cooldown needs this. The fact check must confirm it against code. The reader cannot.
- Line 46 and line 90: "By default the bot answers". The page does not say where that reply is changed. I could not tell whether the wording is fixed.
- Lines 48-50: I could not tell how to stop the spoken denial line, other than turning off text to speech. The page says the **Read it aloud** switch does not apply. The phrase "When text to speech is on" implies the way out, but does not state it.

## Notes (do not decide the verdict)

- Line 52: "because the line carries 0 bits" is a reason a reader cannot act on. Say what it changes for the streamer, or cut the reason.
- Line 61 (step 2, "Open **Trigger and cooldowns**"): no visible result is named. Step 3 names the two boxes, so the reader can tell. Add "The group opens and shows two boxes." if you want the step to stand alone.
- Line 6-7: "You set who may run a channel command, and how often, in the command's editor." Two ideas in one sentence. Optional split.
- Line 6 and line 12: "channel command" and "Chat cooldown (seconds)". Page conventions say "chat command". Pick one term for the command and use the editor label exactly as the dashboard shows it.
- Line 63: "Each box steps in whole seconds." "Steps" can mean a spinner control. "Accepts whole seconds only." is plainer.
- Line 68: the heading text "30 s chat · 10 s per person" is a quoted label. It was not checked against the dashboard i18n file, because the reader reviews the page only.
- Line 98: "A command made from a preset" names the preset case without saying where the preset comes from. create-a-command explains presets; this link is enough.
- Voice against create-a-command: sentence-level voice matches. Actors are the bot and the viewer. Results are stated plainly. Constraints arrive as their symptom ("The command does not run."). Same writer, by sentence voice.
- Headings: every `##` and `###` is plain words. Action headings start with a verb ("Set a cooldown", "Reset to the preset"). No heading ends with a colon. No heading is "Other", "Misc" or "More".
- Links: /reference/commands/create-a-command, /reference/settings/permissions and /reference/commands/cooldowns-and-permissions are the targets named on the map (docs-work/map.md line 68). Membership was checked against the map, not against the built route.
- Plain rule and hosting marker: not needed on this page. No hosting, price or license is mentioned.
- Not checked: dashboard label text (dashboard en.json), the 0 to 86400 second range, the 30 second text to speech rate limit, and the role order. These are facts; the fact-check file covers them, not this review.
