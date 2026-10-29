# Reader review: src/content/reference/en/audio/read-aloud-api.mdx
Verdict: PASS
Reviewed: C:\Projects\NoMercyLabs\nomnomzbot-docs\src\content\reference\en\audio\read-aloud-api.mdx
Reviewed-SHA: 71edec4abbe00716

What I read, as a developer who is new to this bot:
- The page, whole: intro (lines 6-15), send a request (lines 17-61), split the text (lines 63-71), voices (lines 73-84), answers and limits (lines 86-110), use it from another site (lines 112-126), set the allowed sites (lines 128-161), and related links (lines 163-166).
- The map row (docs-work/map.md line 82) names the page's "Assumes" as /reference/audio/text-to-speech. I read that page whole (src/content/reference/en/audio/text-to-speech.mdx). Its "Which voice speaks" and channel-voice rules match this page's voice section.
- I did not read the install page (listed under "Links to" only). The page points to it for the install steps and does not teach them again.
- The earlier blocking finding on step 1 of "Set the allowed sites" is judged fresh. Step 1 now starts with "Copy `.env.example` to `.env`, if you do not have one yet." A developer can follow it. Cleared.

Tests:
1. Find the thing I need. Found the request (line 24-30), the fields (lines 32-35), the answers table (lines 88-94) and the allowed-sites list (lines 119-122) by heading and table. The headings name the tasks.
2. Make a request. I can send `POST` with the JSON body on line 29 and the JavaScript on lines 44-50 works as written from an allowed site. The page says what I get back (audio, `audio/mpeg`, line 38) and how to play it (lines 40-41).
3. Set one allowed site. Steps 1 to 5 (lines 133-144) name the file, the key, the indent and the list to edit. The two code blocks (lines 149-150 and 156-157) show the form to paste. The page says the default is `http://localhost:5080` (line 135).
4. Backticks and tables: the code spans are closed, and the answers table and field table have three cells per row.

Why it passes: a developer can send a request, read the audio, and add an allowed site with the steps given. The findings below are wording and density points, or places where the page could say more.

Findings (all non-blocking):
- [lines 55-61, one paragraph] Seven sentences in one block. Cost: the "POST or GET" choice is hard to take in at once. Fix: split into two paragraphs, one for POST and one for GET.
- [line 55] "Use `POST` from a script." Line 117 then says "a plain script ... is refused by default". "Script" means a browser script on an allowed site in line 55, and a non-browser script in line 117. Cost: a developer who runs a Node.js script will read line 55 and get a 403. Fix: "Use `POST` from a script on a page of an allowed site." Also say that a server-side or `curl` call needs an `Origin` header to pass.
- [line 60 and line 61] The page says not to point an audio element at the `GET` address, but never says when `GET` is the right form. Cost: a developer does not know why the `GET` form exists. Fix: state the use case in one sentence, or say that `GET` is for caches only, if the fact lane confirms it.
- [lines 99-103, one paragraph] Five sentences in one block. Cost: the 400 difference (route 400 with `no-store`, framework 400 without it) is easy to miss. Fix: split it. Put the framework 400 case in its own short paragraph.
- [line 100-101] "One 400 is different ... gets the 400 of the web framework instead." The reader is not told what that answer looks like. Cost: a developer who sees a 400 body cannot tell which kind it is. Fix: name it in one clause, or say that only the header differs.
- [line 117] "...so that audio element, a plain script and a `curl` call are refused by default." A developer who wants to test with `curl` gets a 403 and is not told how to pass. Fix: add one example line, `curl -H "Origin: https://docs.nomnomz.bot" ...`, or say that an `Origin` header is needed.
- [line 84] "The same page always sounds the same, because the choice does not change between requests." The voice depends on the language, not on the page. Fix: "The same language always gets the same voice."
- [line 80] English row: "A channel follows it until the channel picks its own voice." Line 75 says the route does not use any channel's voice. Cost: a developer may think a channel's pick changes the route. Fix: remove the channel clause from this row, or say the route ignores it.
- [line 80] "The platform default voice" is not named or described on this page, and the link goes to the channel voice rules. Cost: a developer cannot tell which voice they get. Fix: name the voice, or link to where the platform default is listed.
- [line 81] "so the first country code wins." Cost: the rule is hard to check without a list of voices. Fix: give one example with two voices, such as `nl-BE` and `nl-NL`.
- [line 81] "Without one, the voices go in alphabetical order of their name" — the order is not explained. Cost: a developer cannot predict the result. Fix: say "by voice name, A to Z", if that is what the product does (not checked here).
- [line 106] "finds both places busy" — "places" means the two slots. The word "clips" is used one line earlier. Fix: "finds both slots busy".
- [line 139] The step says "The first site ends in `__0`". The page does not say that `ReadAloud:Origins` in the setting list becomes `ReadAloud__Origins__0` in the file. Cost: a developer may write the key with a colon. Fix: one clause that names the mapping.
- [line 144] "Start the bot again." No command, no link at this step. The install page link is at line 161, after the examples. Cost: the developer must work out how to restart. Fix: add the link at this step, or name the restart command used for the install.
- [lines 137-142] "x-api-service", "api-blue" and "api-green" are not explained. Cost: small; the rule about where to add the lines is clear. Fix: none required; a short note on blue and green would help a first reader.
- [lines 69-71] Describes how the dashboard reads a page (headings, list items, skipped elements). A developer building a site does not need this to make a request. Cost: small. Fix: move it under the dashboard page, or cut it here.
- Density: lines 65-67 (three sentences), 69-71 (three sentences), 108-110 (three sentences) and 115-117 (three sentences) are in range. The blocks at lines 55-61 and 99-103 are over.

Same author? Yes, in the sense that matters. The sentence length, the "the bot" wording and the "Which voice speaks" section match text-to-speech.mdx. The page is written for a developer, and the text-to-speech page for a streamer, but the voice is the same.
