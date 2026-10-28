# Reader review: C:\Projects\NoMercyLabs\nomnomzbot-docs\src\content\reference\en\community\stream-page.mdx
Verdict: PASS
Reviewed: C:\Projects\NoMercyLabs\nomnomzbot-docs\src\content\reference\en\community\stream-page.mdx
Reviewed-SHA: 63de7a652873498f

This review replaces the one stamped 57db41e6d164bcaf. The writer changed the page after that review. This run read the whole current page (205 lines) at SHA 63de7a652873498f.

Scope: page text as stored. The page has no directives, includes, or code blocks, so nothing needed expanding. Read before it: `/reference/getting-started/connect-platforms` (the only Assumes entry in map.md), the pilot `commands/create-a-command.mdx`, `docs-work/page-conventions.md`, `docs-work/ledger.md`. The settled finding (Moderator, Lead moderator, Editor and the sidebar) is skipped.

No blocking finding. Every step can be followed, and no fact on the page contradicts another page the reader was given. The tab-visibility rule (L32-33) matches the permission table (L29-30). The raid rules now name **Points** and **Reason** (L154-156), so the earlier gap on what a rule holds is closed.

Voice: reads as the same writer as the pilot. No voice finding.

## Notes (not blocking)

- [L20] "The Broadcaster may also open it to a VIP" names the permission but not where it is set. The pilot says it is set on the Permissions settings page. "VIP" is not introduced.
- [L73-75] The **Where it goes** panel explains how to connect a platform. The ledger gives platform connection to connect-platforms, which already has those steps. Cost: two places to keep in step. Fix: name the panel and link.
- [L60-62] One paragraph, 3 sentences, about 54 words. Sentence 1 is a run of seven labels in one 24-word sentence. Parallel facts should be a table. Only **Paid promotion** gets a description. **Mature-rated game** has no table row.
- [L89, L92] The cell "Off or paused:" sits under **Problem or neutral**. L92 then says an off reward is neutral. The reader has to join two lines to know the dot.
- [L88] **Channel-point rewards** is used with no link. The ledger gives it to `/reference/automation/rewards`, and this page is not in that refer list.
- [L127-132] Vacation step 3, "Choose **Save vacation**.", has no stated result. L132 says the button shows only when the vacation differs from Twitch. The page does not say what the reader sees after a save.
- [L146] "**Cancel raid** stops the raid until the countdown ends." "Until" reads as a timed pause. The intended meaning is probably "before".
- [L143-144] "A message says "The raid to" the channel "is counting down."" The channel name sits between two quotes with no placeholder marker.
- [L152-174] The raid rules have no numbered steps for adding a rule. The buttons and limits are named, and Points and Reason are now named. The reader still has no flow from start to save.
- [L185] "### Raids into your channel" sits under **Set the raid rules**, but it describes incoming raids, not rule settings.
- [L188] "from someone the bot's operator blocked on every channel" uses "the bot's operator", a term the page does not introduce. It has no link to linked-channels, which the ledger gives shared bans to. Cost: the reader cannot tell who the operator is.
- [L189] "the chat moderation tools" still names no place. The link to Moderation overview is the only pointer.

## Density count (measured)

- Paragraphs over 3 sentences: none found. The longest is L60-62 (3 sentences, about 54 words).
- Parallel facts that should be a table: L60 (seven labels in one sentence, see above).

## Checked and clean

- Every link target is on map.md: permissions, connect-platforms, moderation/overview, community/analytics.
- Plain rule and hosting marker: not needed. The page does not mention hosting, plans or prices.
- No NoMercyBot name, no license name, no "open source" wording.
- Spelling is American ("canceled").
- Default values carry their unit: "Default: 120 minutes.", "Default: 30 seconds."
- Consistent with connect-platforms on connect rights, Connected and Not connected, the Kick/YouTube question text, and X Live "Not available yet".
