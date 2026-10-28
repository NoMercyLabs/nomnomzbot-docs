# Concept ledger

One line per concept. The owning page explains the concept in full, once.
Every other page that needs the concept names it in a clause and links to the owning page. A second explanation is a defect.
The owners match the Owns column of `docs-work/map.md`. A page that owns nothing is a page that only uses concepts.

Format: concept: owning page; pages that may refer to it.

## Start here

- what NomNomzBot is: /reference/overview; any page may refer to it
- plain rule about use (free to use, change and share, no money from it): /reference/overview; /reference/self-hosting/install-with-docker, /reference/settings/billing, /reference/settings/white-label-bot
- sign-in (broadcaster, moderator, viewer, code sign-in, closed sign-in page): /reference/getting-started/sign-in; /reference/community/viewer-pages, /reference/self-hosting/first-run-setup
- platform connection (Twitch first, then the other platforms, connection health): /reference/getting-started/connect-platforms; /reference/community/stream-page, /reference/integrations/youtube, /reference/integrations/spotify
- bot account (self-host uses the streamer's own account until a separate bot account is registered; a bot account is never required): /reference/getting-started/bot-account; /reference/settings/white-label-bot, /reference/self-hosting/first-run-setup
- bot voice (the bot types in chat in the channel's one voice; it speaks aloud only through text to speech): /reference/getting-started/bot-account; /reference/commands/built-in-commands, /reference/audio/text-to-speech, /reference/code/sdk-chat-music-voice
- dashboard layout (sidebar groups, Home page, header tools, Coming soon entries): /reference/getting-started/dashboard-tour; every page may refer to it

## Commands and automation

- command: /reference/commands/create-a-command; /reference/getting-started/first-command, /reference/commands/built-in-commands, /reference/commands/quotes
- command trigger: /reference/commands/create-a-command; /reference/automation/timers-and-chat-triggers
- template variable (the variables and helpers a reply can use): /reference/commands/variables-and-templates; /reference/automation/event-responses, /reference/code/sdk-widgets-actions-templates
- built-in command: /reference/commands/built-in-commands; /reference/settings/bot-basics-and-personality, /reference/moderation/shoutouts
- command cooldown: /reference/commands/cooldowns-and-permissions; /reference/commands/create-a-command
- command access (who may run a command): /reference/commands/cooldowns-and-permissions; /reference/settings/permissions
- pipeline: /reference/commands/pipelines; /reference/automation/event-responses, /reference/automation/rewards, /reference/audio/voice-triggers, /reference/integrations/stream-deck-and-api-devices, /reference/code/how-a-script-runs
- pipeline step (action): /reference/commands/pipelines; /reference/code/sdk-widgets-actions-templates
- pick list: /reference/commands/pick-lists; /reference/commands/create-a-command, /reference/commands/variables-and-templates
- quote: /reference/commands/quotes; /reference/commands/built-in-commands
- timer: /reference/automation/timers-and-chat-triggers; /reference/commands/pipelines
- chat trigger: /reference/automation/timers-and-chat-triggers; /reference/commands/create-a-command
- event response: /reference/automation/event-responses; /reference/overlays/widgets-and-alerts, /reference/integrations/supporter-sources
- channel-point reward: /reference/automation/rewards; /reference/audio/text-to-speech, /reference/audio/media-share, /reference/code/sdk-data-and-storage

## Overlays, music and sound

- overlay: /reference/overlays/set-up-overlays; /reference/overlays/obs-browser-source, /reference/integrations/obs
- overlay link (the address OBS loads): /reference/overlays/obs-browser-source; /reference/audio/text-to-speech, /reference/audio/sounds, /reference/audio/media-share
- widget: /reference/overlays/widgets-and-alerts; /reference/code/sdk-widgets-actions-templates
- alert: /reference/overlays/widgets-and-alerts; /reference/automation/event-responses
- music player: /reference/music/music-player; /reference/integrations/spotify, /reference/integrations/youtube
- song request: /reference/music/song-requests; /reference/settings/permissions
- text to speech (voices, who is heard, pronunciation rules, own voice key, history): /reference/audio/text-to-speech; /reference/automation/rewards, /reference/code/sdk-chat-music-voice
- voice trigger: /reference/audio/voice-triggers; /reference/commands/pipelines
- sound clip: /reference/audio/sounds; /reference/commands/pipelines
- media share: /reference/audio/media-share; /reference/automation/rewards

## Moderation

- moderation (review queue, protection status, lockdown, history): /reference/moderation/overview; /reference/community/chat-page, /reference/community/people
- chat filter (AutoMod filters, Twitch AutoMod levels, own filters): /reference/moderation/automod-and-chat-filters; /reference/moderation/trust-and-escalation
- ban: /reference/moderation/bans-and-blocked-terms; /reference/moderation/linked-channels, /reference/community/chat-page
- blocked term: /reference/moderation/bans-and-blocked-terms; /reference/moderation/automod-and-chat-filters
- spam defense: /reference/moderation/spam-defense; /reference/moderation/trust-and-escalation
- trust policy: /reference/moderation/trust-and-escalation; /reference/moderation/spam-defense
- escalation ladder: /reference/moderation/trust-and-escalation; /reference/moderation/automod-and-chat-filters
- viewer report: /reference/moderation/reports; /reference/community/viewer-pages
- shoutout: /reference/moderation/shoutouts; /reference/commands/built-in-commands
- linked channel (shared bans and blocks): /reference/moderation/linked-channels; /reference/moderation/bans-and-blocked-terms

## Currency and games

- channel currency (currency, earning rules, balances, savings jars): /reference/economy/currency-and-balances; /reference/economy/store, /reference/economy/giveaways, /reference/code/sdk-data-and-storage
- store item: /reference/economy/store; /reference/commands/pipelines
- leaderboard: /reference/economy/leaderboards-and-games; /reference/community/viewer-pages
- giveaway: /reference/economy/giveaways; /reference/economy/store
- poll: /reference/economy/polls-and-predictions; /reference/community/chat-page
- prediction: /reference/economy/polls-and-predictions; /reference/community/chat-page

## Integrations

- integration connection (Spotify first; the same connect flow for other services): /reference/integrations/spotify; /reference/music/music-player, /reference/integrations/youtube
- discord link: /reference/integrations/discord; /reference/automation/event-responses
- obs connection (the remote-control link, not the browser source): /reference/integrations/obs; /reference/overlays/obs-browser-source
- api key: /reference/integrations/stream-deck-and-api-devices; /reference/integrations/webhooks-and-event-feeds
- paired device: /reference/integrations/stream-deck-and-api-devices
- vtube studio link: /reference/integrations/vtube-studio; /reference/commands/pipelines
- outbound webhook: /reference/integrations/webhooks-and-event-feeds; /reference/automation/event-responses
- inbound webhook: /reference/integrations/webhooks-and-event-feeds; /reference/integrations/supporter-sources
- custom event feed: /reference/integrations/webhooks-and-event-feeds; /reference/automation/event-responses, /reference/overlays/widgets-and-alerts
- supporter source: /reference/integrations/supporter-sources; /reference/automation/event-responses

## Community and stream

- viewer page (the pages a viewer sees: channel page, account page): /reference/community/viewer-pages; /reference/settings/your-data-and-privacy, /reference/economy/leaderboards-and-games
- chat page: /reference/community/chat-page; /reference/moderation/overview
- raid (raid now, raid rules, raid assessment): /reference/community/stream-page; /reference/moderation/overview
- stream recap: /reference/community/analytics; /reference/community/stream-page

## Settings

- bot tone (personality, greetings, streak milestones): /reference/settings/bot-basics-and-personality; /reference/commands/built-in-commands
- feature switch: /reference/settings/features; /reference/settings/resource-limits
- permission level (the ladder of who may do what): /reference/settings/permissions; /reference/commands/cooldowns-and-permissions, /reference/moderation/trust-and-escalation, /reference/music/song-requests
- channel role (who is broadcaster, editor, moderator in the dashboard): /reference/settings/permissions; /reference/getting-started/dashboard-tour, /reference/getting-started/sign-in
- your data (download, consents, opt-out, erase): /reference/settings/your-data-and-privacy; /reference/community/viewer-pages, /reference/settings/channel-management
- resource limit: /reference/settings/resource-limits; /reference/settings/billing, /reference/settings/features
- event journal: /reference/settings/event-journal; /reference/settings/your-data-and-privacy

## Self-hosting

- self-hosting (what it is, lite or full, where the data lives): /reference/self-hosting/install-with-docker; /reference/overview, /reference/self-hosting/updates
- first-run setup: /reference/self-hosting/first-run-setup; /reference/getting-started/bot-account
- release channel (stable, beta, nightly): /reference/self-hosting/updates

## Code and SDK (Draft)

- code script: /reference/code/scripts; /reference/commands/pipelines, /reference/code/worked-example
- script run (the run_code pipeline action, limits): /reference/code/how-a-script-runs; /reference/commands/pipelines
- script grant (grants, errors, the bot facade and nnz helpers): /reference/code/sdk-script-basics; /reference/code/sdk-chat-music-voice, /reference/code/sdk-data-and-storage, /reference/code/worked-example
