# Reader review: C:\Projects\NoMercyLabs\nomnomzbot-docs\src\content\reference\en\code\sdk-data-and-storage.mdx
Verdict: PASS
Reviewed: C:\Projects\NoMercyLabs\nomnomzbot-docs\src\content\reference\en\code\sdk-data-and-storage.mdx
Reviewed-SHA: 4679154be4a9ec4f

Reader: a streamer or script writer new to the SDK. Assumes page read: /reference/code/sdk-script-basics (read this run: Custom Code steps, grant table, error-code table, `nnz.lastError`). Owns: none (map row, Owns column is "-").

Blocking findings: none. Every call on the page can be followed. The page does not claim that a reader needs no code, so the coding it assumes is not a blocker.

## Non-blocking findings

### Density (paragraphs over three sentences)

- Lines 66-70, paragraph on `economy.balance`: 5 sentences, 50 words (counted by hand). Cut or move sentence 5 (the link) to the end of the Points section heading text.
- Lines 168-171, paragraph on rewards you may change: 4 sentences, 39 words.
- Lines 193-196, paragraph on `storage.set`: 4 sentences, 61 words. Line 194 holds two ideas joined by a semicolon.
- Lines 221-224, paragraph on `http.fetch`: 4 sentences, 53 words.

### Parallel facts in one sentence (a table fits)

- Line 50: four `paint` fields (`backgroundImage`, `color`, `textShadow`, `isImageOnly`) in one sentence. The paint fields belong in a table like the one above them.
- Line 106: five fields of the stream answer (`id`, `startedAt`, `endedAt`, `title`, `game`) in one sentence.

### Examples the reader cannot place or check

- Lines 207-217: the storage example (a hug counter) sits under "### List the keys" with no lead-in. It uses `storage.get` and `storage.set`, not `list`. A reader cannot tell what it shows.
- Lines 136-144: the stream example reads `stats.chat.uniqueChatters`. Line 108 says a metric with nothing to show is absent. The page does not say whether `chat` can be absent, so the reader cannot tell if this example fails on a quiet stream.
- Lines 173-178: the reward example stores `changed` and never uses it. It also does not say what the reader sees. Line 168 says only a reward the bot created can change, and the example uses "Hydrate" without saying so.
- Lines 241-245: the schedule example names a pipeline `voice-reset`. The page does not say the reader must have such a pipeline, or what it does when it runs.

### Clarity

- Line 40 and line 44: `id` means three things (the bot's viewer id, the Twitch id, or the login). The table says the returned `id` is "the viewer's id in the bot". The reader cannot tell which id `user.get` returns to them.
- Line 194: "A key that has no value yet counts toward the 200 keys" reads as a stored-value check. It means a new key. Say that in plain words.
- Line 196: the page says to store an object as text. It does not say how to read it back. `nnz.json.parse` is not named here.
- Line 7: one sentence joins the grant idea and the error-reason idea.

### Voice and ledger

- The page uses second person once (line 166: "A field you leave out"). The pilot page uses "you" throughout. Page conventions ask for second person. The sentence-level voice otherwise matches the pilot.
- Line 98: "the channel's one bot voice" is named without a link. The ledger gives the bot voice to `/reference/getting-started/bot-account`, and this page is not a listed referrer. Link the clause.
- Line 64, "## Points": this heading holds one member (`economy.balance`, line 66) with no member heading. The catalog tier asks each member to have its own heading.

### Links (not a reader fault, a link-gate risk)

- Line 70 links `/reference/economy/currency-and-balances`. At review time the file `src/content/reference/en/economy/` does not exist. The nav lists the route (`src/lib/nav-structure.ts:102`).
- Line 171 links `/reference/automation/rewards`. At review time `src/content/reference/en/automation/` holds only `timers-and-chat-triggers.mdx`. The nav lists the route (`src/lib/nav-structure.ts:59`).
- The links gate fails until both pages exist. Not checked: whether the built site resolves them.

## Checks run this review

- Digest: `sha256sum` over the page file gives `4679154be4a9ec4f...`. It was the same before and after the read.
- Spelling: no British spelling found (grep for colour, behaviour, favour, licence, cancelled, catalogue, and similar).
- Names and marker: no `NoMercyBot`, no license name, no "open source", no hosting, price or money words. The page needs no hosting marker.
- Non-ASCII characters: none (grep `[^ -~]` gives 0 lines).
- Draft label: the title and the callout carry Draft, which matches the map row.
- Code blocks: the five blocks have blank lines where the steps change. No code is written by this review.
- Concept re-teaching: the page names the grant and error-code ideas and links to `sdk-script-basics`. It does not explain them again.

## Where a reader got lost

- The storage example under "List the keys" (lines 207-217).
- The `id` argument of `user.get` (lines 40 and 44).
- Whether the stream example can fail on a quiet stream (lines 136-144).
