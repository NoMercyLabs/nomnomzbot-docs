# Reader review: C:\Projects\NoMercyLabs\nomnomzbot-docs\src\content\reference\en\integrations\webhooks-and-event-feeds.mdx
Verdict: PASS
Reviewed: C:\Projects\NoMercyLabs\nomnomzbot-docs\src\content\reference\en\integrations\webhooks-and-event-feeds.mdx
Reviewed-SHA: 41e4ff973723c89b

Reader profile: a streamer who writes no code. Read only the pages in Assumes (/reference/commands/pipelines) and the owned concepts the map gives it (outbound webhook, inbound webhook, custom event feed). Voice compared with /reference/commands/create-a-command. Page read as rendered text; no code was checked.

No blocking finding. Every numbered step names its control, its label and its default where one exists, and most steps state the result. The page matches the pilot voice: second person, "Choose" and "Type", "The **X** dialog opens." The longest paragraphs (lines 70-72 and 80-82) are three sentences, so none exceeds the three-sentence limit.

Where I got lost, stated plainly: at lines 68-72 I could not tell what to do, and at line 127 I could not tell where to find a provider's field path. Both are findings below.

## Findings (non-blocking)

- [lines 68-72] The heading "Check that a delivery is real" promises a check, but the section gives only a formula: `webhook-id`, `webhook-timestamp`, `webhook-signature`, HMAC-SHA256, base64. No step follows. The sentence at line 71 (22 words) carries the signing rule, and line 72 adds the encoding as a second idea. → A non-coder cannot act on it and cannot tell whether to skip it. The pilot-style fix is the marker used at line 250 ("This is a task for a developer. Skip it unless..."), or a real step with its result.
- [line 127] "Event kind path" and "Event id path" take `$.event` and `$.id`. The `$` path syntax is first explained at lines 205-206, after this use. Lines 203-223 explain paths only for custom feeds, not for inbound webhook bodies. → A reader who does not know where a provider keeps its event kind cannot complete step 5 from the page. The example helps only when the provider uses the same field names. Fix: a pointer at first use, and one sentence on where to find the field in the provider's example data.
- [line 80] "2xx code" is used without a gloss. The same applies to "HMAC-SHA256" and "base64" (lines 71-72), "bearer token" (line 227) and "socket" (lines 228 and 237). → A non-coder stops at each term. One plain gloss at first use is enough.
- [lines 80-82] Sentence 3 of the delivery paragraph carries three ideas: "The wait starts at about 30 seconds, doubles each time, and never goes over 1 hour." The paragraph is 3 sentences, 36 words. → The sentence breaks the one-idea rule. Fix: three short sentences: the start, the doubling, the cap.
- [line 84] "After 20 failed deliveries in a row" does not say whether retries count. Lines 80-81 say a failed post is retried, and line 107 says **Failed** means "The bot tries again later." → The reader cannot tell whether the switch-off happens after 20 posts or 20 attempts. This needs the code answer before the page can say it. The wording alone cannot settle it.
- [line 133] The caveat "Until every needed field is filled in, the dialog names the missing fields after 'Still needed to create'." comes after the outcome of step 7 and does not say whether **Create webhook** is blocked, or when the text appears. → The reader does not know whether pressing the button with a gap is safe or what they will see.
- [line 220] Step 3 under a **Source posts to us** feed joins three actions in one sentence: "Then choose **Test** on the feed's row, paste the example into **Sample data**, and choose **Send test event**." The sentence is 18 words. → A reader can miss one of the three actions. Fix: split into sub-steps, each with its result.
- [lines 136-144] The provider table has a **Use for** column that repeats the name in four rows (**Github** / "Github.", **Fourthwall** / "Fourthwall.", **Shopify** / "Shopify.", **Patreon** / "Patreon."). → Half the column carries no meaning. Keep the table with a useful second column, or write a plain list. I did not check the brand spellings against the dashboard label files; the reader does not read code.
- [line 101] "the attempt" in the Deliveries line is not defined. → The reader cannot tell whether attempt 1 is the first post or the first retry.
- [line 130] "event responses" appears here as a gloss of **Event to raise**, and the link to /reference/automation/event-responses comes only at line 147. [line 243] "Each field is a variable" and [line 276] "widgets" have no link. The pilot links its Permissions reference at its first mention (create-a-command.mdx line 18); this page's line 21 does not. → Low cost, but the page does not follow the link-at-first-mention rule. The ledger's may-refer list for event responses, widgets and template variables does not name this page, so the ledger and the map disagree. The map or the ledger needs one answer; the page should not carry both.
- [lines 146-148] Three cases (pipeline chosen, event chosen, both empty) are written as prose. → Optional: a three-row table reads faster. The page convention sets the threshold at four facts, so this is a note only.
- [line 234] "default 30 seconds" is written in lowercase prose. The page convention writes a default as "Default: 30 seconds." → Style only.

## Checks run

- Hash of the page as read: 41e4ff973723c89b2f99c0114100b06fd2c926f1fbc43fdcc4dc9d68a28aa154 (sha256sum). The page was hashed again before this file was written and was unchanged.
- No British spelling, no NoMercyBot, no license name, no "open source", no hosting-for-others text needing the marker, no non-ASCII character (LC_ALL=C grep, no matches).
- Link targets exist: commands/pipelines.mdx, automation/event-responses.mdx, integrations/stream-deck-and-api-devices.mdx, settings/permissions.mdx.
- Ledger and map read: this page owns outbound webhook, inbound webhook and custom event feed; no re-teaching of a concept owned by another page was found beyond the one-clause gloss at line 130.
- Voice compared with the pilot: same person, same sentence habits. The delivery and feed sections use longer sentences than the pilot.
