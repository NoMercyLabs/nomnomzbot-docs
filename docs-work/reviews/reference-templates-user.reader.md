# Reader review: src/content/reference/en/templates/user.mdx
Verdict: PASS
Reviewed: C:\Projects\NoMercyLabs\nomnomzbot-docs\src\content\reference\en\templates\user.mdx
Reviewed-SHA: 17a9fc26de0834c0

What I read, as a streamer who does not code:
- The page, whole: the helper list line (line 6), the intro (lines 8-14), the bare-helper rule, the `{user}` display-name note (lines 16-18), the pronoun section (lines 20-46), names and links (lines 48-67), account and follow (lines 69-82), points and saved data (lines 84-97), chat and watch stats (lines 99-126), and the closing link (line 128).
- The context pages the review brief names: templates/overview.mdx, commands/variables-and-templates.mdx, and the linked templates/pronouns.mdx.
- The rewritten rows the brief names: `{tense}` (line 37), `{user.tense}` (line 44), `{verb:<sing|plur>}` (line 46) and `{engagement.years}` (line 106). Each is judged fresh.

Tests:
1. Find a helper. Found `{user.points}` (line 89), `{user.followAge}` (line 76) and `{user.subject}` (line 43) in one look each. The header line (line 6) names only helpers that have rows: `{user}`, `{user.*}`, `{viewer.*}`, `{engagement.*}`, `{name}`, `{link}`, the pronoun words, `{tense}`, `{presentTense}`, `{genderedTerm}` and `{verb:*}`. Each has a row.
2. Use a helper. Three rows written into a reply:
   - `Hi {user}, you have {user.points} points.` gives `Hi Example_Viewer, you have 2,500 points.`
   - `{user.subject} {user.verb:has|have}` gives `they have` (the Example column shows `has`).
   - `{engagement.streak}` gives `5`.
   The Example column is enough to predict each chat line.
3. The intro says what the bare helpers do: they follow the person the command names, and the `user.` form always follows the person who used the command (lines 10-13). That rule is stated and then shown in the rows. The closing link goes back to the overview.
4. Backticks and braces: every helper is in backticks with braces. The pipes in lines 44-46 are escaped (`\|`), so the table cells do not break.

Why it passes: a streamer can find the helper, write it, and know what the chat line will show. The two-rule intro is hard to scan, but a reader who reads it once can follow it. No step is missing. Every finding below is a wording or density point for the next revision.

Findings (all non-blocking):
- [lines 8-14] One paragraph with seven sentences. The bare-helper rule (lines 10-12) is the key idea and is buried in the middle. Cost: a streamer may miss the rule. Fix: split the paragraph. Put the two rules in a short table or a two-item list, and move "Use these helpers to greet a viewer" to its own line.
- [lines 8, 13, and the rows] The terms "triggering user" (rows at lines 38-44, 58-66, 73-82, 97-126) and "the person who used the command" (intro) name the same person. "Triggering user" is never defined. Cost: the reader must map one term to the other. Fix: define "triggering user" once in the intro, or use "the person who used the command" in the rows.
- [line 6 and intro] `{viewer.*}` and `{engagement.*}` are named in the header line but the intro never says what the prefix means or that they are about the same person as `{user.*}`. Cost: the reader cannot tell whether `{viewer.messages}` and `{user.messageCount}` are two different people's counts. Fix: one sentence in the intro.
- [line 23] "alejo.io pronoun API." A streamer does not know what alejo.io is or what an API is. The link on line 24 is for the pronoun guide, not for alejo.io. Fix: "The bot reads a person's pronouns from a public pronoun service (alejo.io)." and keep the link.
- [line 26] "Each row is its own example, so the rows on this page do not all come from one moment." This is about the page, not the helpers. Same as target.mdx line 18. Fix: cut it, or move it under the tables.
- [line 32] `{genderedTerm}` description says "matching the person pronouns". Fix: "matching the person's pronouns".
- [line 46] `{verb:<sing|plur>}`: "The first form when the person takes is (he, she, any other single pronoun, or a name)". "Takes is" is not plain English. The example on the same row (`{subject} {verb:plays|play}` gives `he plays`) makes it clear. Fix: "The first form for he, she, any other single pronoun, or a name."
- [line 53] `{name}` cell has three sentences and a fallback rule. Cost: the cell is hard to scan. Fix: shorten, as on target.mdx line 40.
- [line 58] `{user.display}` ("The display name of the viewer who triggered this") overlaps `{user}` (line 54) with no difference given. Fix: say which to use, or drop one.
- [lines 61 and 63] `{user.login}` and `{user.name}` both give the login name. The reader cannot tell which to use. Fix: say which one is the login as typed, and which is the lower-case form. Fix in the description, not the rule.
- [lines 64 and 66] `{user.platform}` and `{user.provider}` both name the platform. Fix: say the difference, or drop one.
- [line 67] `{viewer.name}` says "(engagement triggers)". "Engagement triggers" is not defined anywhere on the page. Fix: name the triggers or drop the parenthesis.
- [line 73] `{user.accountAge}` gives "3 years". The target page (line 52) gives "7 years, 5 months" for the same kind of value. Fix: show the same format on both pages, if the fact lane confirms the product gives both.
- [line 88] `{user.data.<key>}` says "with an optional default after a colon", but the example (`{user.data.color}` gives `blue`) shows no default. Fix: add an example with a default, such as `{user.data.color:red}`.
- [line 97] `{viewer.data.<key>}` does the same job as `{user.data.<key>}` (line 88) but is described differently. The reader cannot tell which to use. Fix: say which one is the stored value and which is the one for the person who used the command, or drop one.
- [line 106] `{engagement.years}` example is `1`, but the row above (line 104) gives `18` months. By the rule in the same cell, 18 months gives `1.5`. The example is only right at exactly 12 months. Cost: a reader who checks the math finds a mismatch. Fix: change the example to `1.5` and keep `18` in the row above, or name the month count.
- [line 104] "How many months this moderator has moderated the channel". The intro says these helpers are about the person who used the command. "This moderator" is a second word for the same person, but it reads as a separate role. Fix: "How many months the person who used the command has moderated the channel."
- [line 107] "the channel's own steps" (same wording as target.mdx line 79). Fix as there.
- [line 108] "The triggering user most recent chat message" is a fragment (no verb). Fix: "The most recent chat message of the triggering user."
- [lines 109, 123] `{user.messageCount}` and `{viewer.messages}` give the same value with the same description. The reader cannot tell which to use. Fix: state the preferred one, or name the other as an alias.
- [lines 116-117 and 126] `{user.stats.watchTime.hours}`, `{user.stats.watchTime.long}` and `{viewer.watchtime}` all give the watch time. Same cost and fix as the line above.
- Density: the intro paragraph (lines 8-14) has seven sentences. It is the only over-long paragraph. The cells at lines 37 and 53 each have three sentences.

Same author? Yes. The user page and the target page use the same table layout and the same closing line. The phrase "The ... of the viewer" is used on both.
