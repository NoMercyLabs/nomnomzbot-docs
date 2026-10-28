# Reader review: C:\Projects\NoMercyLabs\nomnomzbot-docs\src\content\reference\en\moderation\linked-channels.mdx
Verdict: PASS
Reviewed: C:\Projects\NoMercyLabs\nomnomzbot-docs\src\content\reference\en\moderation\linked-channels.mdx
Reviewed-SHA: a34125137427bb7f

Route: /reference/moderation/linked-channels. Map row: Owns "linked channel". Assumes /reference/moderation/bans-and-blocked-terms (read in full). Pilot read: /reference/commands/create-a-command. The page has no includes or snippets. The `::Troubleshooting` and `<details>` blocks are read as their rendered text.

Verdict basis: no finding below is a step a non-coder cannot follow, and no fact is visibly wrong from the page and the pilot. Under this run's rule the verdict stays PASS. Findings 1 and 2 are the ones the owner or the fact check should decide on first.

## Findings

1. [L86-87] "It waits for an approval in your channel before it bans." The reader is never told where to approve, what the approval looks like, or what happens if they do nothing. The sentence implies an action with no place to take it. Cost: a streamer with a waiting mass ban cannot tell what to do.

2. [L47-50] Four table rows say the switch does nothing: "Share is saved, but no server code reads it." Rows 2 to 4 (**Shared ban list**, **Shared trust list**, **Shared savings**) describe no effect at all. Step 3 at L41 tells the reader to turn these switches on. Cost: a streamer reads this as a broken switch. "Server code" is developer wording. Page conventions say a feature the product does not have is left out, not mentioned. Decide: describe the effect for a streamer, or remove the row.

3. [L92-95] The details block is one paragraph of 4 sentences and 51 words, and it sets the limit at 3. Its three sentences ("A mass ban also reaches...", "It also reaches...", "A channel the moderator excludes...") are parallel ways a mass ban arrives. Parallel facts belong in a table or a short list. L93 "names it as a channel under attack" does not say how a moderator names a channel. L94 uses the past tense ("added") in a present-tense page.

4. [L52-54] "the inbox of things that need your action" and "the moderation history" are named and not explained. Neither is in the Assumes page, the Links to list, or the ledger (grep of docs-work/ledger.md finds neither term). The reader cannot find either place. Route fix, per review.md: the map needs an owner page for these terms, not a sentence added here.

5. [L14, L31-32, L70] "admin" and "network block" are unexplained. L14 names "an admin network block" in the card table before L68 introduces the section. L31-32 says "An admin of your NomNomzBot server sets it" and does not say whether the streamer can be that admin or who that is. L70 says "every channel of the network that says yes" and does not say which switch "says yes". The sentence also carries two ideas (what a block does, and the consent condition).

6. [L25, L37, L84] "Accept" and "Share" are used in the roles table (L25) before L37 explains them. "Accept" names two different controls: the sharing switch (L37) and the moderator mass-ban switch (L84). A reader cannot tell which "Accept" the Troubleshooting line at L113 means without a second read.

7. [L60-61] "These choices are made outside this page." The page does not say where. "the id of that server" uses a word a non-coder will not know, and no example shows what an id looks like.

8. [L43] "To stop, turn both switches off." The step does not say what the reader sees. Step 1 at L39 has no outcome either. Both are easy to follow, so this is minor.

9. [L19-21] The roles table names Lead moderator and Editor. The page does not link /reference/settings/permissions, where the ledger says the role ladder is owned. The bans page links it. The map's Links to column does not list it either, so this is a route note as well as a link note.

10. [L42] "The choice is saved at once and holds for every trusted server." This sentence carries two ideas, saved and applied to every server. Minor.

## Voice

Compared with the pilot page, the sentence voice matches: the actor leads, results are stated ("The row goes away", "The count leaves the footer"), and the sections use the same headings and tables. One difference: "no server code reads it" (L47-50) is developer phrasing and does not appear in the pilot. Same person wrote both, apart from that line.

## Checked and clean

- No "NoMercyBot" spelling. No "open source", "AGPL", "PolyForm" or license label.
- No hosting-for-others or price text, so no hosting marker is needed.
- No British spellings found in a scan of the page.
- No non-ASCII characters in the page file.
- No bot speech is described, so the one-voice rule does not apply.
- No example script or code on the page.
- Paragraphs at L6-8, L36-37, L52-54, L86-87 are three sentences or fewer. The only paragraph over the limit is the details block (finding 3).
