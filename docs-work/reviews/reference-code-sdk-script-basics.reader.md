# Reader review: C:\Projects\NoMercyLabs\nomnomzbot-docs\src\content\reference\en\code\sdk-script-basics.mdx
Verdict: PASS
Reviewed: C:\Projects\NoMercyLabs\nomnomzbot-docs\src\content\reference\en\code\sdk-script-basics.mdx
Reviewed-SHA: 72bde38d9a518811

Read: the whole page, as stored. It has no include or snippet directive. The only directive is the Draft callout at lines 10-12.
Judged against: map row for this page (Assumes: how-a-script-runs; Owns: script grant), the ledger, and the pilot page for voice. I did not read the how-a-script-runs text. I judged only against its ownership line in the map.

## Result

No blocking finding. Every step in "Turn on Custom Code" can be followed, and each step states its result. The page uses the pilot page's voice. The one question on the list, whether one person wrote both pages, gets a yes.

## Findings, not blocking

1. Lines 7, 16-17, 119. The word "grant" appears three times before the section that explains it (line 117). A reader who starts at line 16 cannot tell what a grant is. Add one gloss sentence at line 7 or line 17.

2. Line 19. "Open the **Features** settings page." names no route. A streamer new to the dashboard must search for it. Name the sidebar route, and link the feature switch page (ledger: /reference/settings/features) and the dashboard tour (ledger: /reference/getting-started/dashboard-tour). Neither link is on this page.

3. Lines 29-36 and 184-187. The bot table gives types only. It does not say what `bot.args`, `bot.send`, `bot.getVar`, `bot.setVar` or `bot.stopPipeline` do. Line 187 reads `bot.args[0]` and line 184 says "tries to store a value". The reader cannot tell which value. The page also does not say whether `bot.send` needs a grant. Line 7 frames the page as the list of parts that need none. Add a "What it does" column, and name the value at line 184.

4. Lines 40 and 129. A call with no grant is "denied". The failure table at lines 175-180 has no code for a denied call. The reader cannot tell whether `nnz.lastError` is set, or which code it holds. Name the code.

5. Lines 123 and 131-132. Line 123 says a `bot.call` key adds its grant "with a key in quotes". The page gives a save error only for `actions.invoke` (line 132). The reader cannot tell what happens to `bot.call` with a key held in a variable.

6. Line 43. "the test run panel" is named, but the page does not say how to open it. A reader who wants the `console.log` output cannot find it.

7. Line 54. "It knows length, weight, time and temperature." gives no unit names. Only `km` and `mi` appear, in the example at line 53.

8. Lines 81 and 107. `nnz.math.randomInt(min, max)` and `nnz.random.int(min, max)` have the same description. The page gives no reason for two names. Source not checked, by design of this review.

9. Line 165 and lines 196-200. The sentence names two pages for the calls. The grant rows at lines 158 (`widget.emit`), 162 (`actions.invoke`) and 163 (`template.render`) belong to /reference/code/sdk-widgets-actions-templates. That page is on the map (map line 128), and the Related pages list omits it. The map row for this page (map line 125, Links to) also omits it. This needs a map edit as well as a link.

10. Lines 178-179. "The work behind the call reported too many requests" does not name what was limited. "The call went over a limit of the run" does not name the limit. Name the limit, or link the run limits on how-a-script-runs, which line 8 already names.

11. Line 194. "the channel's one bot voice" is used without a link. The ledger gives the bot voice to /reference/getting-started/bot-account, and this page is not on that concept's referring list. Link it on first use.

12. Line 17. "every grant is refused, and a script that makes a bot call does not run" carries two outcomes in one sentence. Line 132 carries the rule and the quoted error in one sentence. Both are minor.

13. Lines 7 and 26. "This page lists the parts..." is a sentence about the page. "a raw bridge to the bot" is jargon with no gloss. Both are minor.

## Density

Measured. No paragraph is over three sentences. The longest blocks are lines 6-8, 53-55, 99-101 and 127-129, each with three sentences. The grant table (lines 136-163) is a catalog and is allowed to be long.

## Other checks

- The namespace is not misspelled. No NoMercyBot or NomNomzBot name appears on the page.
- No hosting claim, so no hosting marker is needed. No license label appears.
- No British spelling and no emoji were found in my read.
- The Draft label appears in the title (line 2) and in the callout (lines 10-12), as the map says.
- The bot speaks in one voice (line 194).
- The page is not a second explanation of a ledger concept it does not own. It refers to "bot voice" (line 194), "feature switch" (line 19) and "dashboard layout" (line 19). Notes 2 and 11 cover them.
