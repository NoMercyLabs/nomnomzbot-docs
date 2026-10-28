# Reader review: C:\Projects\NoMercyLabs\nomnomzbot-docs\src\content\reference\en\integrations\supporter-sources.mdx
Verdict: PASS
Reviewed: C:\Projects\NoMercyLabs\nomnomzbot-docs\src\content\reference\en\integrations\supporter-sources.mdx
Reviewed-SHA: 588dcd436a9f72f9

Reviewed as a streamer who has read only the assumed page: integrations/webhooks-and-event-feeds (the ledger's "inbound webhook" owner). Event responses is linked, not assumed. Pilot page open: commands/create-a-command. Judged against the map row (Owns: supporter source) and docs-work/page-conventions.md.

This run judged the current text. The earlier FAIL (Reviewed-SHA 14032fd762cb6a84) judged an older text. Its blocking point, the Patreon and Shopify conflict, is answered by the current text: the webhook section (heading at line 66) names only Buy Me a Coffee, Fourthwall and Ko-fi, and Patreon, Shopify and Treatstream have their own section (heading at line 78, lines 78-91).

## Blocking

None. Every step can be followed, and each step I checked has a stated result or a result the reader can see.

## Findings (not blocking; the verdict stays PASS)

- [line 52] "Use these steps for every service in the table that says "Paste a secret"." The table rows for Buy Me a Coffee, Fourthwall and Ko-fi also say "Paste a secret", then "paste the address". A reader cannot tell whether those three take these four steps, the address section, or both. Cost: a short pause, then the reader does both.
- [lines 28, 31-34, 37] "websocket" (Pally) and "socket" (StreamElements, Streamlabs, Tipeee, Treatstream) are used in the table before line 37 defines them. The page treats them as one thing but names them two ways. Cost: a reader may think these are two kinds of connection. Use one word and define it before the table.
- [line 56] Step 2 says "Paste the secret or token from the service." The page does not say where each service shows it. Cost: a reader may stall here. A short pointer, or a link to the service's own help, would close the gap.
- [line 64] "Afterward the box says" names no box. The reader does not know it is the secret field in the Manage dialog. Name it.
- [line 14] "For anyone else the page shows the list without the buttons." "The buttons" is not named, and "anyone else" overlaps the moderator sentence above it. The reader cannot tell whether a moderator sees the buttons. Name the buttons (**Set up**, **Manage**, **Remove**) and say what a moderator sees.
- [line 102] Step 3 "Choose Save." gives no result. Line 104 "**Save** stays off" uses "off", the same word as the Receive events switch, so the reader may think the switch is off. Say "Save is disabled", and state what the dashboard shows after a save.
- [lines 148-151] The symptom and fix form one paragraph of 4 sentences and 53 words. The limit is 3 sentences. Cut "Save a new secret if you are not sure." or merge it into the sentence before it.
- [lines 140-141] "for one kind or for every supporter event" uses "kind" for event types. The kinds table at line 128 uses "Kind" for tip, membership, merch and charity. The same word means two things. Use "event type" here.
- [line 128] The table column "Example" holds definitions, not examples. Rename it "Meaning".
- Voice (pilot comparison): role names are lowercase plain text here ("a moderator", "the broadcaster"). The pilot writes role names in bold capitals and links the roles to the permissions page. This page does not link the roles. Style only.

## Checked and clean

- No NoMercyBot spelling. No British spelling found.
- No license name. Hosting and price text: none, so the hosting marker is not needed.
- No code. The code rules do not apply.
- Headings are plain, with no colon.
- Tables hold parallel facts (services, states, kinds).
- The bot voice line (line 141) states the one bot voice, as the rule requires.
- Voice matches the pilot page: second person, the actor first, steps followed by a stated result.
- The link to webhooks-and-event-feeds explains webhook addresses in general and does not re-teach them. The link to event-responses is used once, for setup.

## Where I got lost

- Line 64: which box holds the message. I resolved it by context (the Manage dialog), not from the page.
- Line 104: whether Save is disabled or the switch is off. I resolved it by context.
- Line 56: where the secret lives in each service. The page does not say.
