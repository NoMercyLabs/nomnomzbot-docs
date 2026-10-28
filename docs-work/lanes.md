# Writer lanes

Source of truth for the pages is `docs-work/map.md` (71 pages). This file sets the order in which writers work. At most 3 writers run at once, one per queue. A writer takes one page at a time, in the order below, and writes only that page's `.mdx` file.

## The pilot

The pilot reference page is `/reference/commands/create-a-command` (file `src/content/reference/en/commands/create-a-command.mdx`).
It is the first page written by the whole team, because it is rich enough to set the voice: a list of flows (make, edit, switch on, copy, delete), a table of triggers, replies with templates, and an optional-detail block.
It assumes no other page, so it can be written before anything else.

Rules for the pilot:

1. Queue A writes the pilot alone first. Queues B and C start on their first page at the same time, because their first four pages do not copy the pilot's shapes; they copy the Atlas rules and `page-conventions.md`.
2. When the pilot is drafted and reviewed, the owner or the lead reads it once. A correction to the pilot is a correction to every page.
3. Every later page is matched against the pilot (opening sentence, outcome sentences, table shape, how a caveat attaches, how the page closes). The reader reviewer gets the pilot next to the page under review.

## Order inside a queue

A page comes after the pages it assumes (the Assumes column of the map) inside its own queue.
Where a page assumes a page in another queue, the writer does not stop: the writer works from `docs-work/ledger.md`, which fixes which page explains which concept, and links to the assumed page by its row.
Such a page goes to review only after the assumed page is `drafted` in the map, because the reader reviewer checks that the page does not re-teach what the assumed page owns.
The cross-queue review waits are listed under each queue.

## Queue A: commands, events, overlays, audio, music (23 pages)

First page: `/reference/commands/create-a-command` (the pilot).

1. /reference/commands/create-a-command
2. /reference/commands/variables-and-templates
3. /reference/commands/built-in-commands
4. /reference/commands/cooldowns-and-permissions
5. /reference/commands/pipelines
6. /reference/commands/pick-lists
7. /reference/commands/quotes
8. /reference/automation/timers-and-chat-triggers
9. /reference/automation/event-responses
10. /reference/getting-started/first-command
11. /reference/automation/rewards
12. /reference/overlays/set-up-overlays
13. /reference/overlays/obs-browser-source
14. /reference/overlays/widgets-and-alerts
15. /reference/integrations/obs
16. /reference/audio/text-to-speech
17. /reference/audio/voice-triggers
18. /reference/audio/sounds
19. /reference/audio/media-share
20. /reference/integrations/spotify
21. /reference/integrations/youtube
22. /reference/music/music-player
23. /reference/music/song-requests

Cross-queue review waits in queue A:

- `/reference/getting-started/first-command` waits for `/reference/getting-started/dashboard-tour` (queue B, position 4).
- `/reference/automation/rewards`, `/reference/integrations/spotify` and `/reference/integrations/youtube` wait for `/reference/getting-started/connect-platforms` (queue B, position 3).
- `/reference/overlays/set-up-overlays` waits for `/reference/getting-started/dashboard-tour`.

## Queue B: start here, settings, self-hosting, community (23 pages)

First page: `/reference/overview`.

1. /reference/overview
2. /reference/getting-started/sign-in
3. /reference/getting-started/connect-platforms
4. /reference/getting-started/dashboard-tour
5. /reference/getting-started/bot-account
6. /reference/settings/white-label-bot
7. /reference/self-hosting/install-with-docker
8. /reference/self-hosting/first-run-setup
9. /reference/self-hosting/updates
10. /reference/settings/bot-basics-and-personality
11. /reference/settings/features
12. /reference/settings/permissions
13. /reference/settings/readability
14. /reference/settings/resource-limits
15. /reference/settings/billing
16. /reference/settings/channel-management
17. /reference/settings/your-data-and-privacy
18. /reference/settings/event-journal
19. /reference/community/people
20. /reference/community/viewer-pages
21. /reference/community/chat-page
22. /reference/community/stream-page
23. /reference/community/analytics

Cross-queue review waits in queue B: none. Queue B holds the pages that queues A and C wait for, so its first five pages go first.

## Queue C: moderation, economy, integrations, code (25 pages)

First page: `/reference/moderation/overview`.

1. /reference/moderation/overview
2. /reference/moderation/automod-and-chat-filters
3. /reference/moderation/bans-and-blocked-terms
4. /reference/moderation/spam-defense
5. /reference/moderation/trust-and-escalation
6. /reference/moderation/reports
7. /reference/moderation/shoutouts
8. /reference/moderation/linked-channels
9. /reference/economy/currency-and-balances
10. /reference/economy/store
11. /reference/economy/leaderboards-and-games
12. /reference/economy/giveaways
13. /reference/economy/polls-and-predictions
14. /reference/integrations/discord
15. /reference/integrations/stream-deck-and-api-devices
16. /reference/integrations/vtube-studio
17. /reference/integrations/webhooks-and-event-feeds
18. /reference/integrations/supporter-sources
19. /reference/code/scripts
20. /reference/code/how-a-script-runs
21. /reference/code/sdk-script-basics
22. /reference/code/sdk-chat-music-voice
23. /reference/code/sdk-data-and-storage
24. /reference/code/sdk-widgets-actions-templates
25. /reference/code/worked-example

Cross-queue review waits in queue C:

- Pages 1, 9, 15 and 16 wait for `/reference/getting-started/dashboard-tour`.
- `/reference/integrations/discord` waits for `/reference/getting-started/connect-platforms`.
- `/reference/integrations/webhooks-and-event-feeds` and `/reference/code/scripts` wait for `/reference/commands/pipelines` (queue A, position 5).
- `/reference/code/sdk-chat-music-voice` links to `/reference/audio/text-to-speech` and `/reference/music/music-player` (queue A); a link needs only the row, not a drafted page.
- `/reference/moderation/shoutouts` links to `/reference/commands/built-in-commands` (queue A).

## Counts

| Queue | Pages | First page |
| --- | --- | --- |
| A | 23 | /reference/commands/create-a-command (pilot) |
| B | 23 | /reference/overview |
| C | 25 | /reference/moderation/overview |
