# Reader review: C:\Projects\NoMercyLabs\nomnomzbot-docs\src\content\reference\en\integrations\discord.mdx
Verdict: PASS
Reviewed: C:\Projects\NoMercyLabs\nomnomzbot-docs\src\content\reference\en\integrations\discord.mdx
Reviewed-SHA: d010830fac289699

Reader: arrived from /reference/getting-started/connect-platforms (the only Assumes page, read in full). Map owns: discord link. Reference page for voice: /reference/commands/create-a-command.

No blocking finding. Every step I tried has a stated outcome or an obvious next screen, except the notes below. The page names no concept it does not explain, except where listed. No paragraph is over three sentences (checked each block between blank lines). No include or snippet directive is in the source.

## Findings (not blocking, fix before delivery)

- [L62-63] Step 2 says "Check **Discord channel**", then "The bot picks a channel". The reader cannot tell if the label is a checkbox or a picker, or what is shown after the check. Costs the reader a second guess on the first notification.
- [L94] "The Embed box adds a card" is named with no step that says where it is or how to open it. The reader cannot find it from the page. Costs the reader the whole embed section.
- [L52] "the channel's one bot voice" is used before it is explained and is not linked. The ledger owns bot voice on /reference/getting-started/bot-account. Link it on first use.
- [L66, L72-83] "placeholders" and `{curly}` names are used with no link to /reference/commands/variables-and-templates, which owns template variables. The table has no meaning column, so the reader cannot tell `{channel.display}` from `{channel.name}`.
- [L122] "pipeline" and "Discord notification step" are used with no link to /reference/commands/pipelines.
- [L162-166] Live role step 3 says "Choose **Save**." The outcome is not stated on the step; the reader learns the result only in the paragraph after.
- [L168] "the one linked to your Twitch" is used with no link to the platform connection concept (connect-platforms).
- [L189] "Every Discord message from this channel pauses." Here "channel" could mean a Discord channel or the streamer's channel. Write "this server" if that is the meaning.
- [L193] "choose **Use another server** and pick the same server" reads as a contradiction to a reader. State what the button does.
- [L150-151] Two sentences say the same rule in reverse. Keep one.
- [L215-217] "The editor says" is unclear: this page's roles include **Editor**, and the page never names a dialog called the editor. Name the dialog.
- [L209-213] "The pickers say" and "the bot server" are not defined on this page.
- [L206-208] An admin entering a client ID and client secret is operator work, placed on a streamer page with no link to the self-hosting page.

## Notes (style, cross-page, for the fact-checker)

- Hosting marker: [L209-213] names "the person who runs the bot server", which is hosting for others. The marker from page-conventions is absent. Add it, or cut the sentence if the page does not mean hosting.
- Connections meaning: [L7] says Discord sits in **Settings**, then **Connections**. connect-platforms says the Home **Connections** panel and says services are connected on the **Integrations** settings page. The reader will ask which one applies. The fact-checker should confirm where Discord is set.
- Who may connect: connect-platforms says an **Editor** sees **Connect** by default. This page says only the **Broadcaster** may add the bot (L22). Not a contradiction on its face, but a reader moving between the two pages could be unsure. The fact-checker should confirm the rule; the page should say that adding the bot is broadcaster-only, in those words.
- Voice: the page reads as the same writer as the pilot page (short imperatives, "Choose **Save**.", bold labels, the same troubleshooting block). No re-teaching of connect-platforms content was found.
- Spelling: no British spelling and no banned product wording was found (grep for NoMercyBot, open source, PolyForm, AGPL and common British forms returned nothing).
- Density: no paragraph over three sentences; the longest run is the Notifications intro, two sentences.
- Headings: all action headings start with a verb; no code span in a heading.
