Route: /reference/community/supporters
Reader: A streamer or moderator who knows stream bots, has signed in to the selected channel, and is new to this feature in NomNomzBot.
Type: lookup
Arrives-with: Who subscribed, gifted, cheered or tipped recently, and who gave the most?
Goal: Read the Supporters page and find recent and top supporters.
Success: The reader finds a recent subscriber, gifter, cheerer or tipper and reads the top supporters list.
Application-case: A streamer wants to thank everyone who gifted subs during the last stream.
Prerequisites: Access to the selected channel; tips and memberships show only after a supporter source is connected.
Project-root: C:\Projects\NoMercyLabs\nomnomzbot-docs\.claude\worktrees\finish
Built-root: dist
Rendered: dist/reference/community/supporters/index.html
Voice: docs-work/voice.md
Must know:
- panels | The page shows stats, Twitch subscriptions and gifts, cheers, top supporters, and tips and memberships. | ../../../../nomnomzbot/dashboard/src/views/dashboard/supporters/SupportersView.vue
- rows | How each supporter row is built from its source event. | ../../../../nomnomzbot/dashboard/src/views/dashboard/supporters/supporterRows.ts
Moves elsewhere:
- supporter-sources | Connect Ko-fi, Streamlabs and other tip services. | ../../../../nomnomzbot/dashboard/src/views/dashboard/supporters/SupporterSourcesView.vue | /reference/integrations/supporter-sources
Checks:
- build: ["cmd", "/c", "yarn", "build"]
