# Reader review: C:\Projects\NoMercyLabs\nomnomzbot-docs\src\content\reference\en\moderation\shoutouts.mdx
Verdict: PASS
Reviewed: C:\Projects\NoMercyLabs\nomnomzbot-docs\src\content\reference\en\moderation\shoutouts.mdx
Reviewed-SHA: 2762e15d292daab9

Reader state: I judged the current page text, sha256 2762e15d292daab9 (full 2762e15d292daab9eb070ca77765105f55cb7c56bc81489827f8fea095c16333), checked before and after my review. The older verdict on disk judged sha 505c4d4066c71c1c; I carried none of its findings forward. Its blocking finding (the placeholder described as the channel name) does not apply: the current text at line 43 says `{target.displayname}` is the shouted-out streamer, which matches line 100-101. My map row (docs-work/map.md line 90) gives Assumes: create-a-command, pipelines, chat-page, people, bot-basics-and-personality. I did not open those pages; I judged against docs-work/ledger.md and the pilot page commands/create-a-command.mdx. I did not read the product repository.

## Blocking

None. Every step can be followed, and each step states what the reader sees.

## Non-blocking findings

- [25-38] The steps "Make a shoutout command" re-teach the pipeline steps (lines 25-33) and the command steps (lines 34-38). The ledger gives pipeline creation to /reference/commands/pipelines and command creation to /reference/commands/create-a-command, and both are on Assumes. The page should name the steps as done on those pages, link them, and keep only the Shoutout step's fields (User ID, wait times). This is a re-teach under the ledger rule. It does not change the verdict under this run's rule.
- [30-31] Step 3 says "In **User ID**, type `{args.1}`", then says the value is the name of the streamer. The field name says ID and the value is a name. A reader cannot tell which value the field expects.
- [40-43] One paragraph of 4 sentences, 64 words ("To test it, ..." through "... is the streamer who is shouted out."). The page conventions allow three sentences per paragraph. Split before "With the default personality".
- [57-58] "When speech is on for the shoutout" and "A pipeline's shoutout step turns speech on. It is on by default for a raid." The page never says where speech is set for an automatic or a suggested shoutout. "It" in the second sentence can mean the speech or the raid. "Speech" is not linked to /reference/audio/text-to-speech, which owns it in the ledger.
- [51] "Someone who may only see the page" does not name a role. The reader cannot tell whether this is a viewer, a VIP, or another role.
- [61] "per-streamer wait" is used before it is taught at line 178. [64] "the queue" is used before it is taught at line 180. Both links point forward, so a first-time reader must guess.
- [64-65] One sentence gives two causes ("a rate limit, or the connection to Twitch drops"). The outcome is clear, but the sentence carries two ideas.
- [76] and [118-124] "this NomNomzBot server" and "another channel on this server" describe other streamers using the same server. Page conventions require the hosting marker on any page that mentions hosting the bot for other people. Whether this sentence counts is for the writer and the owner to decide. The page has no price, plan, or subscription wording.
- [88-89] "For an automatic shoutout, they replace the 2-minute channel wait." "They" can mean the 8 minutes or the table rules. Name the subject.
- [123-124] "That channel's per-streamer line for you wins over it." The reader cannot tell what this line is or where another channel sets it. The page does not say that it is set on another streamer's profile.
- [177] "By default, the bot waits 2 minutes between shoutouts in the channel." The page does not say where this value is changed, if it can be. Line 193 gives the pipeline step's defaults only. A reader who wants a different channel wait has no place to look.
- [189] "The bot also reads that announcement aloud." This is unconditional, while lines 57-58 say speech is read only when speech is on. The reader cannot tell which applies to a chat request inside the per-streamer wait.
- [193] "Default: 60 minutes per streamer and 2 minutes for the channel." Two parallel defaults on one line. A small table would hold them.
- [23] The first body heading is `###` ("Make a shoutout command") with no `##` section above it. Page conventions use `##` for sections.
- [195-199] The `::Troubleshooting` directive has no blank line after it, and the closing `::` has no blank line before it. The pilot has both. This is a format note.
- [18] "pipeline" is used before the Pipelines link at line 21. The page is on Assumes, so the term is known, but the link comes after first use.

## Notes (style, does not change the verdict)

- The voice matches the pilot at sentence level. The actor is the subject, results are stated as what the reader sees, and labels are in bold.
- Lines 6-8 open with three one-sentence statements. The pilot does the same.
- Rendered output: the page has no includes, snippets or code blocks. Nothing is elided, and no `...` stands in for content the reader needs.
- The page names four surfaces for a shoutout: the Home quick action, the profile button, the pipeline step, and the chat command. It does not say whether the SDK or the automation API can send one. The reader does not read code, so the fact check should settle this.

## Checks run

- Namespace: NomNomzBot only. No NoMercyBot spelling found.
- British spelling: none found in the text.
- Bot voice: line 57 names the channel's one bot voice, as page conventions require.
- License label, "open source", action keys, numbered permission levels, emoji, people's names: none found.
- Headings: all `##` headings are verb phrases or plain nouns, as conventions require. Frontmatter title and description are present and in sentence case.
- Paragraph count: 3 sentences or fewer everywhere except lines 40-43 (4 sentences, 64 words).
- Future tense or filler words ("will", "soon", "planned", "previously"): none found.
- Links: targets are on the map or are anchors on this page.

## Where I got lost

- [30-31]: whether the value in **User ID** is a name or an ID.
- [57-58] and [189]: where speech is switched on, and whether the chat-request announcement is always read aloud.
- [61] and [64]: what "per-streamer wait" and "queue" mean the first time I read them.
- [88-89]: what "they" refers to.
- [123-124]: what another channel's per-streamer line is, and where it is set.
