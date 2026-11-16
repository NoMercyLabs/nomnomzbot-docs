# Surfaces inventory

Every screen, setting, command, message, task, error and api a person can reach, claimed by a page or excluded with a reason. Parts a to e in docs-work/surfaces-parts were merged here.

| surface | kind | who | states | page |
| --- | --- | --- | --- | --- |
| Public home page (hero, feature groups, self-host vs hosted, Sign in or Coming soon button) | screen | viewer | sign-in open or Coming soon; signed in shows Open dashboard | /reference/overview |
| Sign-in page (provider buttons, role buttons, bot chooser) | screen | viewer | providers loading, listed, none switched on, bot unreachable | /reference/getting-started/sign-in |
| Continue as broadcaster, moderator or viewer | task | broadcaster | one role button per sign-in; rate limited or free | /reference/getting-started/sign-in |
| Sign in with a code (device code panel) | task | broadcaster | getting code, waiting for approval, expired, denied, failed | /reference/getting-started/sign-in |
| Choose a bot (saved bots, add a bot by address, forget a bot) | setting | broadcaster | official bot or custom address; reachable, unreachable, mixed content | /reference/getting-started/sign-in |
| Closed sign-in page (Sign-in is coming soon) | screen | viewer | hosted sign-in closed or open | /reference/getting-started/sign-in |
| Sign-in error: too many tries | error | viewer | rate limited with seconds left | /reference/getting-started/sign-in |
| Sign-in error: bot does not answer | error | broadcaster | reachable or unreachable | /reference/getting-started/sign-in |
| Sign-in error: no sign-in switched on | error | broadcaster | none or some providers on | /reference/getting-started/sign-in |
| Invite page (redeem an invite on your channel) | screen | broadcaster | loading, valid, unusable, redeemed, no channel set up | /reference/settings/billing |
| Privacy Policy page | screen | viewer | open to signed-out visitors | /reference/settings/your-data-and-privacy |
| Terms of Service page | screen | viewer | open to signed-out visitors | /reference/settings/your-data-and-privacy |
| Page not found | screen | viewer | any unknown address | excluded: error page with no function, nothing to document |
| First-run setup wizard (steps frame, progress, Back, Next, Skip, Done) | screen | broadcaster | step set or not set, first run or finished | /reference/self-hosting/first-run-setup |
| Setup step: Twitch app credentials (Save, Use the shared NomNomzBot app) | setting | broadcaster | set or not set, save failed | /reference/self-hosting/first-run-setup |
| Setup step: Bot account (Authorize the bot account) | task | broadcaster | waiting for approval, connected, failed | /reference/self-hosting/first-run-setup |
| Setup step: Spotify, Discord and YouTube keys | setting | broadcaster | set or not set, skipped | /reference/self-hosting/first-run-setup |
| Setup step: Finish setup | task | broadcaster | ready to finish, failed | /reference/self-hosting/first-run-setup |
| Setup: copy link for another browser or profile | task | broadcaster | link copied or not | /reference/self-hosting/first-run-setup |
| Setup: event feed health (Check again, Grant the missing permissions, Repair the event connections) | task | broadcaster | ok, missing scopes, broken subscriptions, no subscriptions, unknown | /reference/self-hosting/first-run-setup |
| Dashboard shell: sidebar groups and bottom bar | screen | broadcaster | page visible or hidden by role, phone or wide layout | /reference/getting-started/dashboard-tour |
| Coming soon page (Library, Gallery, Games) | screen | broadcaster | page planned and not built | /reference/getting-started/dashboard-tour |
| Switch channel and Find a channel | task | moderator | your channel, recent, moderated, no match | /reference/getting-started/dashboard-tour |
| No access to a channel page | error | moderator | channel not managed by you | /reference/getting-started/dashboard-tour |
| Suspended channel page | error | broadcaster | suspended with or without reason | /reference/getting-started/dashboard-tour |
| Shield mode toggle in the header | setting | broadcaster | on or off | /reference/moderation/overview |
| Account menu (readability, documentation, viewer pages, fullscreen, sign out) | screen | broadcaster | broadcaster, moderator or viewer role shown | /reference/getting-started/dashboard-tour |
| View as moderator or viewer, and its banner | task | broadcaster | viewing as moderator or viewer, or exited | /reference/getting-started/dashboard-tour |
| Action required inbox | screen | broadcaster | empty or items waiting | /reference/getting-started/dashboard-tour |
| Not saved error (a change was not saved) | error | broadcaster | shown in inbox until dismissed | /reference/getting-started/dashboard-tour |
| Keyboard shortcuts dialog | screen | broadcaster | open or closed | /reference/getting-started/dashboard-tour |
| Home page | screen | broadcaster | live or offline | /reference/getting-started/dashboard-tour |
| Home: live stats (uptime, viewers, followers, category) | screen | broadcaster | live or offline with last stream | /reference/getting-started/dashboard-tour |
| Home: Open chat and Edit stream info buttons | task | broadcaster | live or offline | /reference/getting-started/dashboard-tour |
| Home: Review queue (Allow, Deny) | task | moderator | held messages waiting, empty, denied | /reference/moderation/overview |
| Home: Shield mode label in the review queue | screen | moderator | shield on or off | /reference/moderation/overview |
| Home: Suggested shoutouts (Shoutout, Not now) | task | moderator | suggestions waiting, sent, failed | /reference/moderation/shoutouts |
| Home: Next ad break and Snooze | task | broadcaster | scheduled, none, snoozes left or none left | /reference/community/stream-page |
| Home: Song queue panel and Open queue | screen | broadcaster | queue filled or empty, load error | /reference/music/song-requests |
| Home: Timers panel and Timers dialog (Pause, Resume) | task | broadcaster | timers on or paused, none | /reference/automation/timers-and-chat-triggers |
| Home: Poll or prediction panel | screen | broadcaster | none running, poll running, prediction running or locked | /reference/economy/polls-and-predictions |
| Home: Start a poll dialog (question, choices, minutes, channel points voting) | task | broadcaster | form filled or missing choices | /reference/economy/polls-and-predictions |
| Home: End poll and final result | task | broadcaster | running or final result shown | /reference/economy/polls-and-predictions |
| Home: Start a prediction dialog (question, outcomes, minutes to predict) | task | broadcaster | form filled or missing outcomes | /reference/economy/polls-and-predictions |
| Home: Lock, Resolve and Cancel a prediction | task | broadcaster | open, locked, resolved, canceled with refund | /reference/economy/polls-and-predictions |
| Home: Needs attention list (Open, Dismiss) | screen | broadcaster | empty or items waiting | /reference/getting-started/dashboard-tour |
| Needs attention item: integration needs reconnecting | message | broadcaster | expired, refresh failed, unusable, cannot decrypt | /reference/getting-started/connect-platforms |
| Needs attention item: chat messages held for review | message | moderator | one or many held messages | /reference/moderation/overview |
| Needs attention item: viewer report | message | moderator | report waiting or dismissed | /reference/moderation/reports |
| Home: Connections panel (Connect, Sign in again) | screen | broadcaster | platform connected or not, live or offline, bot in chat or not | /reference/getting-started/connect-platforms |
| Home: Connect a platform | task | broadcaster | not connected, asked to confirm, connected | /reference/getting-started/connect-platforms |
| Home: Happening now and Last stream activity feed | screen | broadcaster | live, offline, empty, load error | /reference/getting-started/dashboard-tour |
| Home: Replay an event | task | broadcaster | replayed, nothing to show, not found, failed | /reference/getting-started/dashboard-tour |
| Home: All events link | screen | broadcaster | opens the event journal | /reference/settings/event-journal |
| Stream page | screen | broadcaster | live or offline | /reference/community/stream-page |
| Stream: Before you go live checklist | screen | broadcaster | title set, tags added, bot in chat, rewards on or off, shield on or off, could not check | /reference/community/stream-page |
| Stream: Where it goes (platform rows, Connect) | screen | broadcaster | connected, not connected, not available yet for X Live | /reference/getting-started/connect-platforms |
| Stream info: title | setting | broadcaster | saved, edited, over 140 characters | /reference/community/stream-page |
| Stream info: category | setting | broadcaster | set, none found, searching, recent categories | /reference/community/stream-page |
| Stream info: tags | setting | broadcaster | under the limit of 10, at the limit, removed with undo | /reference/community/stream-page |
| Stream info: language | setting | broadcaster | read only, set by Twitch | /reference/community/stream-page |
| Stream info: content labels and paid promotion | setting | broadcaster | each label on or off, mature-game label read only | /reference/community/stream-page |
| Stream info: Save changes and Discard | task | broadcaster | unsaved changes, saved, load error | /reference/community/stream-page |
| Stream views: Overview, Schedule, Raid rules, Ads | screen | broadcaster | one view open at a time | /reference/community/stream-page |
| Schedule: segments (add, edit, cancel, restore, delete) | task | broadcaster | none yet, planned, repeating weekly, canceled | /reference/community/stream-page |
| Schedule: vacation mode | setting | broadcaster | on or off, invalid dates | /reference/community/stream-page |
| Raid a channel (Raid, Cancel raid) | task | broadcaster | counting down, canceled, channel not found, start failed | /reference/community/stream-page |
| Raid rules: preferred categories, keywords, viewer bands, recency, balance, follow weight | setting | broadcaster | rules saved or with problems, load error | /reference/community/stream-page |
| Raid rules: validation problems | error | broadcaster | points out of range, empty keyword, min above max, step needs a day | /reference/community/stream-page |
| Run an ad (length, Run ad) | task | broadcaster | started or not | /reference/community/stream-page |
| Chat page (feed, composer, Viewer panel) | screen | moderator | live or offline, empty, load error | /reference/community/chat-page |
| Viewer chat page (chat for a role without the operator chat) | screen | viewer | operator chat hidden when chat:read is held | /reference/community/chat-page |
| Chat: send a message | task | moderator | sent, too long, failed | /reference/community/chat-page |
| Chat: reply to a message and reply thread | task | moderator | replying, thread open, thread empty or failed | /reference/community/chat-page |
| Chat: emote and emoji picker (favorites, skin tones) | task | moderator | recent, starred, no match | /reference/community/chat-page |
| Chat: composer suggestions (emoji, chatters) | task | moderator | suggestions shown or none | /reference/community/chat-page |
| Chat: search chat history (Search further back) | task | moderator | results, no match, searched to the first message, error | /reference/community/chat-page |
| Chat: Display panel (badges, avatars, platform icons, commands, timestamps, name colors) | setting | moderator | each option on or off, kept on this device | /reference/community/chat-page |
| Chat: Display layout (alternating rows, narrow lines, spacing, rows, emote size) | setting | moderator | tight, normal or roomy, one or two lines, small to large | /reference/community/chat-page |
| Chat: Display mentions, deleted messages (Hide, Strike, Show) and HTML as text | setting | moderator | highlight on or off, deleted hidden, struck or shown | /reference/community/chat-page |
| Chat: Display message hints (first time, first of day, first of stream, new account, message type) | setting | moderator | each hint on or off, new account age 1, 7, 30 or 90 days | /reference/community/chat-page |
| Chat: Pop out and Copy dock link | task | moderator | popout window open or not | /reference/community/chat-page |
| Chat: Viewer panel (profile, latest messages, other channels) | screen | moderator | chatter selected or none, load error | /reference/community/chat-page |
| Chat: Timeout a chatter | task | moderator | timed out for 1 min, 10 min, 1 hour or 1 day, failed, undo | /reference/community/chat-page |
| Chat: Ban and Unban a chatter | task | moderator | banned, unbanned, failed | /reference/community/chat-page |
| Chat: Delete a message | task | moderator | deleted or failed | /reference/community/chat-page |
| Chat: Chat identity (name color, hex color, badges) | setting | moderator | color set, scope missing, no badges, no access | /reference/community/chat-page |
| Chat: Grant permission again (device code) | task | moderator | waiting for code, approved, failed | /reference/community/chat-page |
| Chat settings panel: chat modes (slow mode, followers-only, emote-only, subscriber-only, unique chat, non-moderator delay) | setting | moderator | each mode on or off, value in range or out of range | /reference/community/chat-page |
| Chat settings panel: raid accounts and Mass ban | task | moderator | hostile accounts assessed or none, confirmed, failed | /reference/community/chat-page |
| Chat settings panel: Clear chat | task | moderator | confirmed or canceled | /reference/community/chat-page |
| Chat feed lines: redemption, notice, held message, removed, timed out, banned | message | moderator | each notice type shown or hidden | /reference/community/chat-page |
| Chat of another Twitch channel (external chat) | screen | moderator | open, waiting, needs scope, failed | /reference/community/chat-page |
| Chat error: needs a Twitch permission to send or read | error | moderator | scope missing or granted | /reference/community/chat-page |
| People page (list, search, sort, tabs, profile) | screen | broadcaster | list filled or empty, load error | /reference/community/people |
| People: tabs All, Moderators, VIPs, Twitch subscribers, Regulars, New | screen | broadcaster | one tab open, each tab filled or empty | /reference/community/people |
| People: search and sort (Last seen, A to Z) | task | broadcaster | match or no match | /reference/community/people |
| People: Look up on Twitch | task | broadcaster | found, not found, Twitch error | /reference/community/people |
| People: row badges (Moderator, VIP, Banned, gifted subscription, not in channel) | screen | broadcaster | each badge present or not | /reference/community/people |
| People: profile pane | screen | broadcaster | person picked, none picked, login not found | /reference/community/people |
| Profile dialog actions (stats, notes, moderation history, standing) | task | moderator | open for one person, history filled or empty | /reference/moderation/overview |
| Analytics page | screen | broadcaster | data or no data, load error | /reference/community/analytics |
| Analytics: range (30 days, 90 days, 12 months) | setting | broadcaster | one range chosen | /reference/community/analytics |
| Analytics: Overview (streams, chat lines, follows, Twitch subs, bits, peak viewers) | screen | broadcaster | data or no data | /reference/community/analytics |
| Analytics: Follows and Chatters charts | screen | broadcaster | data or empty range | /reference/community/analytics |
| Analytics: Highlights (stream length, top category, commands, rewards, songs) | screen | broadcaster | streams in range or none | /reference/community/analytics |
| Analytics: Streams table | screen | broadcaster | streams listed or none | /reference/community/analytics |
| Analytics: Chat heat grid and busy days and hours | screen | broadcaster | chat in range or none | /reference/community/analytics |
| Analytics: Recaps list (Open, Previous, Next) | screen | broadcaster | recaps kept or none kept | /reference/community/analytics |
| Analytics: Save a recap as PNG | task | broadcaster | saved, failed, size assumed | /reference/community/analytics |
| Viewer page: My channels | screen | viewer | channels listed, empty, live now, load error | /reference/community/viewer-pages |
| Viewer page: Your stats in a channel | screen | viewer | following or not, subscribed or not, live or offline | /reference/community/viewer-pages |
| Viewer page: Your songs in the queue | screen | viewer | songs queued, empty, requests closed | /reference/community/viewer-pages |
| Viewer page: You in a channel (account) | screen | viewer | standing Viewer, Twitch subscriber, VIP, Artist or Moderator | /reference/community/viewer-pages |
| Viewer account: Pronouns | setting | viewer | set or not set | /reference/community/viewer-pages |
| Viewer account: Linked accounts (Unlink) | task | viewer | linked or none linked, main sign-in | /reference/community/viewer-pages |
| Viewer account: Your voice | setting | viewer | own voice or channel voice, voice choice closed by the streamer | /reference/community/viewer-pages |
| Viewer account: My data link | task | viewer | opens the data page | /reference/settings/your-data-and-privacy |
| Viewer pages: Now playing, Leaderboards, Points and store, Games | screen | viewer | each opens Coming soon | /reference/community/viewer-pages |
| Viewer chat in a channel | screen | viewer | channel open or not set up | /reference/community/chat-page |
| Admin console: Overview, Tenants, Channel console | screen | admin | platform operator signed in | /reference/self-hosting/admin-console |
| Admin console: EventSub health, Webhook deliveries, Scheduled jobs, Event replay, Error budget, Audit log, System | screen | admin | platform operator signed in | /reference/self-hosting/admin-console |
| Admin console: Feature flags, Providers, Platform defaults, Spam defaults, Platform bot, Content | setting | admin | platform operator signed in | /reference/self-hosting/admin-console |
| Admin console: Access (IAM), Support, Data requests, Trust and safety, Billing, Channel usage | screen | admin | platform operator signed in | /reference/self-hosting/admin-console |
| Commands page, Channel commands tab (list with search, sort Most used or A to Z, Off badge, use counts, kind labels) | screen | moderator | empty or filled, loading error, no search match | /reference/commands/create-a-command |
| Commands page, System commands tab (built-in list, shown only to a role that may change commands) | screen | moderator | tab shown or hidden, empty or filled, loading error | /reference/commands/built-in-commands |
| New command dialog (name, what it does, create) | screen | moderator | name empty or filled, type text or random or pipeline or code script | /reference/commands/create-a-command |
| Command name field | setting | moderator | filled or empty ("Give the command a name.") | /reference/commands/create-a-command |
| Command type choice (Sends a reply, Sends a random reply, Runs a pipeline, Runs a code script) | setting | moderator | one of four types | /reference/commands/create-a-command |
| Command editor (footer with unsaved count, Save changes, Discard) | screen | moderator | clean or unsaved changes | /reference/commands/create-a-command |
| Command Enabled switch | setting | moderator | on or off | /reference/commands/create-a-command |
| Command Reply box | setting | moderator | filled or empty | /reference/commands/create-a-command |
| Command Read it aloud switch | setting | moderator | on or off | /reference/commands/create-a-command |
| Command Reply type choice (Text or Random reply) | setting | moderator | text or random | /reference/commands/create-a-command |
| Random replies list and Random reply dialog (add, remove, edit replies, start from the replies of another command) | screen | moderator | no replies or some replies | /reference/commands/create-a-command |
| Command Pipeline picker | setting | moderator | pipeline chosen or not | /reference/commands/create-a-command |
| Command Script picker (code script, create or open a script) | setting | moderator | script chosen or not, channel has no scripts, scripts failed to load | /reference/commands/create-a-command |
| Command Who can use it | setting | moderator | one role of the role list | /reference/commands/cooldowns-and-permissions |
| Command Chat cooldown (seconds) | setting | moderator | zero (none) or a number | /reference/commands/cooldowns-and-permissions |
| Command Per-person cooldown (seconds) | setting | moderator | zero (none) or a number | /reference/commands/cooldowns-and-permissions |
| Command Prefix choice (Channel default, Custom, None) and Custom prefix | setting | moderator | default or custom or none | /reference/commands/create-a-command |
| Command Match choice (Starts with, Exact, Contains, Regex) and Regex pattern | setting | moderator | one match mode, pattern filled or empty | /reference/commands/create-a-command |
| Command Duplicate | task | moderator | copy created switched off | /reference/commands/create-a-command |
| Command Delete dialog | task | moderator | confirm or cancel, blocked while still used | /reference/commands/create-a-command |
| Command Reset to preset dialog | task | moderator | differs from preset or already matches | /reference/commands/cooldowns-and-permissions |
| Move copies to system dialog (removes channel commands that repeat a system command) | task | moderator | duplicates found or none | /reference/commands/create-a-command |
| StreamElements command import (API route, no dashboard page) | api | broadcaster | import runs or fails | /reference/commands/create-a-command |
| Command presets list (API route read by the New command flow) | api | moderator | presets listed or none | /reference/commands/create-a-command |
| Commands API (list, read, create, change, delete, blast radius, reset to preset) | api | moderator | allowed or refused by role | /reference/commands/create-a-command |
| System commands API (list, read, change settings, switch on or off, reply wording, read aloud) | api | moderator | default or overridden | /reference/commands/built-in-commands |
| System command row summary (Using the default, Overrides the default, Always on) | screen | moderator | default, overridden or always on | /reference/commands/built-in-commands |
| System command Answers in chat switch | setting | moderator | on or off, hidden when always on | /reference/commands/built-in-commands |
| System command Customize editor (Save changes, Discard, Back to default) | screen | moderator | default or overridden, unsaved changes | /reference/commands/built-in-commands |
| System command Who can use it | setting | moderator | default role or raised role | /reference/commands/built-in-commands |
| System command Chat cooldown (seconds) | setting | moderator | default or overridden | /reference/commands/built-in-commands |
| System command Per-person cooldown (seconds) | setting | moderator | default or overridden | /reference/commands/built-in-commands |
| System command Read it aloud switch | setting | moderator | on or off | /reference/commands/built-in-commands |
| System command reply boxes (one per reply moment, with Variables list) | setting | moderator | default wording or own wording, fixed reply | /reference/commands/built-in-commands |
| System command Back to default for one field | task | moderator | field overridden or default | /reference/commands/built-in-commands |
| System command Reset to default dialog | task | moderator | overrides present or none | /reference/commands/built-in-commands |
| Data-rights command lock ("It always answers and its settings are fixed") | message | moderator | locked or editable | /reference/commands/built-in-commands |
| !accountage | command | viewer | answers or per-person cooldown 12 s | /reference/commands/built-in-commands |
| !allow (massban) | command | moderator | held ban runs or none held, lead moderator floor | /reference/commands/built-in-commands |
| !banger | command | viewer | song added or no song playing | /reference/commands/built-in-commands |
| !bansong | command | moderator | song blocked or none playing | /reference/commands/built-in-commands |
| !clearsongs | command | moderator | requests removed or none queued | /reference/commands/built-in-commands |
| !closequeue | command | moderator | queue closed or already closed | /reference/commands/built-in-commands |
| !coinflip | command | viewer | bet won or lost, currency on or off | /reference/commands/built-in-commands |
| !commands | command | viewer | list answered or on 120 s cooldown | /reference/commands/built-in-commands |
| !dice | command | viewer | bet won or lost, currency on or off | /reference/commands/built-in-commands |
| !disallow (massban) | command | moderator | held ban stopped or none held | /reference/commands/built-in-commands |
| !discord | command | viewer | invite answered or no invite set | /reference/commands/built-in-commands |
| !followage | command | viewer | following or not following | /reference/commands/built-in-commands |
| !forgetme | command | viewer | second confirm pending or done, always on | /reference/commands/built-in-commands |
| !gdpr (status, forget, export) | command | viewer | one of three subcommands, always on | /reference/commands/built-in-commands |
| !help | command | viewer | command known or unknown | /reference/commands/built-in-commands |
| !leaderboard | command | viewer | board filled or empty | /reference/commands/built-in-commands |
| !lurk | command | viewer | lurking or not | /reference/commands/built-in-commands |
| !media | command | viewer | link sent to media share or refused | /reference/commands/built-in-commands |
| !mydata | command | viewer | copy requested, always on | /reference/commands/built-in-commands |
| !openqueue | command | moderator | queue open or already open | /reference/commands/built-in-commands |
| !pause | command | moderator | music paused or already paused | /reference/commands/built-in-commands |
| !permit | command | moderator | grant given or refused, always on | /reference/commands/built-in-commands |
| !play | command | moderator | link submitted approved or none found | /reference/commands/built-in-commands |
| !playlist | command | viewer | link answered or no playlist | /reference/commands/built-in-commands |
| !profile | command | viewer | same answer as !stats | /reference/commands/built-in-commands |
| !queue | command | viewer | queue listed or empty | /reference/commands/built-in-commands |
| !quote | command | viewer | quote read, none saved, number not found | /reference/commands/quotes |
| !resume | command | moderator | music playing or already playing | /reference/commands/built-in-commands |
| !skip | command | viewer | skipped, own song only, moderator window 30 s | /reference/commands/built-in-commands |
| !slots | command | viewer | bet won or lost, currency on or off | /reference/commands/built-in-commands |
| !song | command | viewer | song playing or nothing playing | /reference/commands/built-in-commands |
| !sr | command | viewer | request queued or refused | /reference/commands/built-in-commands |
| !stats | command | viewer | stats answered or none yet | /reference/commands/built-in-commands |
| !unlurk | command | viewer | lurking cleared or not lurking | /reference/commands/built-in-commands |
| !unpermit | command | moderator | grant taken back or none, always on | /reference/commands/built-in-commands |
| !unwhitelist | command | broadcaster | standing removed or none | /reference/commands/built-in-commands |
| !update | command | viewer | profile refreshed, moderator may name another viewer | /reference/commands/built-in-commands |
| !uptime | command | viewer | live or offline | /reference/commands/built-in-commands |
| !voice | command | viewer | voice set or unknown voice | /reference/commands/built-in-commands |
| !volume | command | viewer | volume answered, moderator sets | /reference/commands/built-in-commands |
| !whisper | command | moderator | whisper sent or refused | /reference/commands/built-in-commands |
| !whitelist | command | broadcaster | standing given or refused | /reference/commands/built-in-commands |
| !wrongsong | command | viewer | own request taken back or none | /reference/commands/built-in-commands |
| Whisper form of a built-in command (read-only commands answer by whisper) | command | viewer | whisper-safe or chat only | /reference/commands/built-in-commands |
| Channel command run in chat (text reply, random reply, pipeline or code script) | command | viewer | enabled or off, allowed or refused by role, ready or cooling down | /reference/commands/create-a-command |
| Reply "You don't have permission to use that command." | message | viewer | role too low, spoken once per 30 s per viewer | /reference/commands/cooldowns-and-permissions |
| Reply "That command is still on cooldown." | message | viewer | chat or per-person cooldown running | /reference/commands/cooldowns-and-permissions |
| Moderator and broadcaster cooldown bypass | setting | moderator | bypass applies or does not | /reference/commands/cooldowns-and-permissions |
| Channel command repeats a system command notice | message | moderator | repeats or not | /reference/commands/create-a-command |
| Pick lists page (list with search, entry counts, Show more) | screen | moderator | empty or filled, loading error, no search match | /reference/commands/pick-lists |
| New pick list and Edit pick list dialog | screen | moderator | new or editing, valid or too long | /reference/commands/pick-lists |
| Pick list Name | setting | moderator | filled or empty | /reference/commands/pick-lists |
| Pick list Description | setting | moderator | filled or empty | /reference/commands/pick-lists |
| Pick list Entries (one per line) | setting | moderator | filled, empty or over the limit | /reference/commands/pick-lists |
| Delete pick list dialog (shows what uses the list) | task | moderator | used by pipelines or not used | /reference/commands/pick-lists |
| Pick lists API (list, read, make, change, delete, blast radius, pick one entry) | api | moderator | allowed or refused by role | /reference/commands/pick-lists |
| Pick list used as a template helper in a reply | task | moderator | list found or name missing | /reference/commands/pick-lists |
| Quotes page (list with search, number labels, Show more) | screen | moderator | empty or filled, loading error, no search match | /reference/commands/quotes |
| Random quote button | task | moderator | quote shown or none saved | /reference/commands/quotes |
| New quote and Edit quote dialog | screen | moderator | new or editing, valid or too long | /reference/commands/quotes |
| Quote text | setting | moderator | filled or empty, within the limit | /reference/commands/quotes |
| Quote Said by | setting | moderator | filled or empty | /reference/commands/quotes |
| Quote Game | setting | moderator | filled or empty | /reference/commands/quotes |
| Quote Said at | setting | moderator | filled or empty (empty uses save time) | /reference/commands/quotes |
| Delete quote dialog | task | moderator | confirm or cancel, number is not reused | /reference/commands/quotes |
| !quote add, edit, update, delete, del, remove in chat | command | moderator | allowed or refused by role | /reference/commands/quotes |
| !quote add as a reply to another message | command | moderator | reply captured or role too low | /reference/commands/quotes |
| Quote bot messages (added, updated, deleted, usage help, no permission, not found, invalid text, add failed, edit failed, empty) | message | viewer | success or refusal or error | /reference/commands/quotes |
| Quotes API (list, random, read by number, add, change, delete) | api | moderator | allowed or refused by role | /reference/commands/quotes |
| Pipelines page (list with search, run counts and last run, Ready-made and Off badges) | screen | moderator | empty or filled, loading error, no search match | /reference/commands/pipelines |
| New pipeline dialog | screen | moderator | name empty or filled | /reference/commands/pipelines |
| Pipeline workbench (steps lane, "Starts when" summary, step cards, drag handle, Alt-arrow move) | screen | moderator | no steps or some steps, read-only for a viewing role | /reference/commands/pipelines |
| Pipeline editor Save, Undo, Redo and keyboard shortcuts | task | moderator | saved or unsaved, save failed | /reference/commands/pipelines |
| Unsaved draft restore prompt and Leave without saving dialog | message | moderator | draft found, draft stale or none | /reference/commands/pipelines |
| Steps to add palette (Find a step, Checks and groups, add at the end or to a lane) | screen | moderator | step found or no match | /reference/commands/pipelines |
| Step inspector (Settings tab, In plain words tab, Use earlier text, Duplicate, Remove) | screen | moderator | step picked or none, not set up yet | /reference/commands/pipelines |
| Step Only run if condition | setting | moderator | no condition or condition set | /reference/commands/pipelines |
| Step Keep going if this step fails | setting | moderator | on or off | /reference/commands/pipelines |
| Step Stop here when this step matches | setting | moderator | on or off, needs a condition | /reference/commands/pipelines |
| Step field pickers (list picker, list field, name and value map) | setting | moderator | picked, typed template, not in the list, list unreadable | /reference/commands/pipelines |
| Block: If, otherwise | setting | moderator | Yes path or No path | /reference/commands/pipelines |
| Block: Switch on a value (value, match, operator, fallback case) | setting | moderator | a case matches or fallback | /reference/commands/pipelines |
| Block: Pick one at random (weight per path) | setting | moderator | one path picked | /reference/commands/pipelines |
| Block: Repeat (set number, each item, while a check holds, round and time limits) | setting | moderator | repeat, each, or while | /reference/commands/pipelines |
| Block: Catch a failure | setting | moderator | It works or It fails path | /reference/commands/pipelines |
| Block: Run on its own | setting | moderator | step runs detached | /reference/commands/pipelines |
| Steps area: Billing (1 step) | setting | moderator | step available or tier too low | /reference/commands/pipelines |
| Steps area: Chat (4 steps) | setting | moderator | step runs or fails | /reference/commands/pipelines |
| Steps area: Code (1 step) | setting | moderator | script runs or fails | /reference/commands/pipelines |
| Steps area: Counters (2 steps) | setting | moderator | counter set or adjusted | /reference/commands/pipelines |
| Steps area: Discord (1 step) | setting | moderator | Discord connected or not | /reference/commands/pipelines |
| Steps area: Economy (5 steps) | setting | moderator | balance enough or not | /reference/commands/pipelines |
| Steps area: Flow (9 steps) | setting | moderator | step runs or loop ends | /reference/commands/pipelines |
| Steps area: Games (2 steps) | setting | moderator | game started or cancelled | /reference/commands/pipelines |
| Steps area: Giveaways (3 steps) | setting | moderator | giveaway open or closed | /reference/commands/pipelines |
| Steps area: Identity (5 steps) | setting | moderator | grant given or refused | /reference/commands/pipelines |
| Steps area: Media (2 steps) | setting | moderator | media sent or refused | /reference/commands/pipelines |
| Steps area: Moderation (3 steps) | setting | moderator | action taken or refused | /reference/commands/pipelines |
| Steps area: Music (38 steps) | setting | moderator | music connected or not | /reference/commands/pipelines |
| Steps area: OBS (19 steps) | setting | moderator | OBS connected or not | /reference/commands/pipelines |
| Steps area: Pick Lists (1 step) | setting | moderator | list found or missing | /reference/commands/pipelines |
| Steps area: Quotes (1 step) | setting | moderator | quote found or none | /reference/commands/pipelines |
| Steps area: Rewards (2 steps) | setting | moderator | reward found or missing | /reference/commands/pipelines |
| Steps area: Sound (2 steps) | setting | moderator | sound played or missing | /reference/commands/pipelines |
| Steps area: Stream (3 steps) | setting | moderator | stream live or offline | /reference/commands/pipelines |
| Steps area: Text-to-Speech (6 steps) | setting | moderator | speech on or off | /reference/commands/pipelines |
| Steps area: VTube Studio (6 steps) | setting | moderator | VTube Studio connected or not | /reference/commands/pipelines |
| Steps area: Viewer Data (3 steps) | setting | moderator | value found or none | /reference/commands/pipelines |
| Steps area: Webhooks (1 step) | setting | moderator | call succeeds or fails | /reference/commands/pipelines |
| Steps area: Widgets (3 steps) | setting | moderator | widget found or missing | /reference/commands/pipelines |
| Test run (dry run) with Input values | task | moderator | steps ran, skipped or failed | /reference/commands/pipelines |
| Run live dialog (groups of real effects, confirm) | task | moderator | confirmed or cancelled, already running, not allowed | /reference/commands/pipelines |
| Runs tab (history of runs, test and live run marks, step results, Show older runs) | screen | moderator | no runs or some runs, success or failed or timeout or denied | /reference/commands/pipelines |
| Pipeline power switch (Enabled) | setting | moderator | on or off | /reference/commands/pipelines |
| Delete pipeline dialog (shows what starts it) | task | moderator | confirm or cancel, delete failed | /reference/commands/pipelines |
| Pipeline ready-made default (platform default read and restore) | task | moderator | edited or at platform default | /reference/commands/pipelines |
| Pipelines API (list, read, actions catalog, make, change, delete, blast radius, test run, validate, runs) | api | moderator | allowed or refused by role | /reference/commands/pipelines |
| Pipeline step failure and read-only message ("Your role cannot change pipelines") | message | moderator | role may change or may not | /reference/commands/pipelines |
| Triggers and timers page, Timers tab (list, search, Off badge, interval) | screen | moderator | empty or filled, loading error, no search match | /reference/automation/timers-and-chat-triggers |
| New timer dialog | screen | moderator | name and message empty or filled | /reference/automation/timers-and-chat-triggers |
| Timer editor (footer with unsaved count) | screen | moderator | clean or unsaved changes | /reference/automation/timers-and-chat-triggers |
| Timer Enabled switch | setting | moderator | on or off | /reference/automation/timers-and-chat-triggers |
| Timer Name | setting | moderator | filled or empty | /reference/automation/timers-and-chat-triggers |
| Timer Messages (one per line, posted in turn) | setting | moderator | one or many messages | /reference/automation/timers-and-chat-triggers |
| Timer Minutes between posts | setting | moderator | default or custom, out of range | /reference/automation/timers-and-chat-triggers |
| Timer Chat lines needed | setting | moderator | default or custom, out of range | /reference/automation/timers-and-chat-triggers |
| Timer Post once | setting | moderator | on or off, turns itself off after the post | /reference/automation/timers-and-chat-triggers |
| Timer Read it aloud | setting | moderator | on or off | /reference/automation/timers-and-chat-triggers |
| Timer Also run (command, action or pipeline) | setting | moderator | target picked or none | /reference/automation/timers-and-chat-triggers |
| Timer Duplicate and Delete dialog | task | moderator | copy made, delete confirmed or cancelled | /reference/automation/timers-and-chat-triggers |
| Timer post in chat | message | viewer | posts or waits for chat activity | /reference/automation/timers-and-chat-triggers |
| Timers API (list, read, make, change, delete, toggle, platform default read and restore) | api | moderator | allowed or refused by role | /reference/automation/timers-and-chat-triggers |
| Triggers and timers page, Chat triggers tab (list) | screen | moderator | empty or filled, loading error | /reference/automation/timers-and-chat-triggers |
| New chat trigger dialog | screen | moderator | words and reply empty or filled | /reference/automation/timers-and-chat-triggers |
| Chat trigger editor | screen | moderator | clean or unsaved changes | /reference/automation/timers-and-chat-triggers |
| Chat trigger Enabled switch | setting | moderator | on or off | /reference/automation/timers-and-chat-triggers |
| Chat trigger Words to watch for | setting | moderator | filled or empty | /reference/automation/timers-and-chat-triggers |
| Chat trigger How chat must match (Contains, Is exactly, Starts with, Matches a pattern) | setting | moderator | one of four modes | /reference/automation/timers-and-chat-triggers |
| Chat trigger Match capital letters | setting | moderator | on or off | /reference/automation/timers-and-chat-triggers |
| Chat trigger Reply | setting | moderator | filled or empty | /reference/automation/timers-and-chat-triggers |
| Chat trigger Seconds between replies | setting | moderator | zero or a number | /reference/automation/timers-and-chat-triggers |
| Chat trigger Who can set it off | setting | moderator | one role of the role list | /reference/automation/timers-and-chat-triggers |
| Chat trigger Delete dialog | task | moderator | confirm or cancel | /reference/automation/timers-and-chat-triggers |
| Chat trigger reply in chat | message | viewer | fires or waits on cooldown or role too low | /reference/automation/timers-and-chat-triggers |
| Chat triggers API (list, make, change, delete) | api | moderator | allowed or refused by role | /reference/automation/timers-and-chat-triggers |
| Event responses page (events list with search, Platform default, Your own text and Off labels) | screen | moderator | empty or filled, loading error, no search match | /reference/automation/event-responses |
| Event response editor (footer with unsaved count) | screen | moderator | clean or unsaved changes, no event open | /reference/automation/event-responses |
| Event response Enabled switch | setting | moderator | on or off | /reference/automation/event-responses |
| Event response Your line (with the variables you can use) | setting | moderator | platform default lines or own text | /reference/automation/event-responses |
| Event response default lines picker (Edit this line) | setting | moderator | several default lines or none | /reference/automation/event-responses |
| Event response Read it aloud | setting | moderator | on or off, hidden for a pipeline | /reference/automation/event-responses |
| Event response target (simple reply, command, pipeline or action) | setting | moderator | reply or bound target | /reference/automation/event-responses |
| Event response Test button and result dialog (chat line, speech, overlay alerts, pipeline steps, warnings) | task | moderator | lines sent, no overlay open, response off, no pipeline | /reference/automation/event-responses |
| Event response Reset to default dialog (lists what is lost) | task | moderator | own text present or at default | /reference/automation/event-responses |
| Events group: Follows and subs (7 events) | setting | moderator | on or off, default or own text | /reference/automation/event-responses |
| Events group: Cheers and raids (4 events) | setting | moderator | on or off, default or own text | /reference/automation/event-responses |
| Events group: The stream (2 events) | setting | moderator | on or off, default or own text | /reference/automation/event-responses |
| Events group: Moderation (4 events) | setting | moderator | on or off, default or own text | /reference/automation/event-responses |
| Events group: Polls, predictions and hype trains (7 events) | setting | moderator | on or off, default or own text | /reference/automation/event-responses |
| Events group: Ad breaks (3 events) | setting | moderator | on or off, default or own text | /reference/automation/event-responses |
| Events group: Channel point rewards (5 events) | setting | moderator | on or off, default or own text | /reference/automation/event-responses |
| Events group: Viewers in chat (5 events) | setting | moderator | on or off, default or own text | /reference/automation/event-responses |
| Events group: Supporters (5 events) | setting | moderator | on or off, default or own text | /reference/automation/event-responses |
| Events group: OBS (5 events) | setting | moderator | on or off, default or own text | /reference/automation/event-responses |
| Events group: VTube Studio (3 events) | setting | moderator | on or off, default or own text | /reference/automation/event-responses |
| Event response line in chat | message | viewer | event happens and event on, or off | /reference/automation/event-responses |
| Event response alert on the stream | message | viewer | overlay open or no overlay | /reference/automation/event-responses |
| Event responses API (list, catalog, read, change, test, reset) | api | moderator | allowed or refused by role | /reference/automation/event-responses |
| Event responses overlay and alert queue (API reads for the overlay) | api | moderator | alerts queued or none | /reference/automation/event-responses |
| Channel points page, Rewards panel (list, count, badges Paused and Not on Twitch, Only lands in the queue) | screen | moderator | empty or filled, loading error, not affiliate | /reference/automation/rewards |
| Channel points not-available notice (Affiliate or Partner needed) | message | broadcaster | affiliate or not affiliate | /reference/automation/rewards |
| Reward on or off switch in the list | setting | moderator | on or off | /reference/automation/rewards |
| Reward Edit dialog (changes go to Twitch on save) | screen | moderator | editable or owned by another app | /reference/automation/rewards |
| Reward Name | setting | moderator | filled or empty | /reference/automation/rewards |
| Reward Description | setting | moderator | filled or empty | /reference/automation/rewards |
| Reward Chat reply | setting | moderator | filled or empty (empty sends nothing) | /reference/automation/rewards |
| Reward Cost in points | setting | moderator | a number | /reference/automation/rewards |
| Reward action (pipeline, command or action it runs) | setting | moderator | target picked or none | /reference/automation/rewards |
| Reward Limit per stream | setting | moderator | limit set or none | /reference/automation/rewards |
| Reward Limit per viewer per stream | setting | moderator | limit set or none | /reference/automation/rewards |
| Reward Cooldown in seconds | setting | moderator | cooldown set or none | /reference/automation/rewards |
| Reward Timer in seconds | setting | moderator | timer set or cleared | /reference/automation/rewards |
| Reward Color | setting | moderator | hex code set or default | /reference/automation/rewards |
| Reward Enabled and Paused switches | setting | moderator | on or off, paused or active | /reference/automation/rewards |
| Reward Viewer must type a message | setting | moderator | on or off | /reference/automation/rewards |
| Reward Duplicate | task | moderator | copy created | /reference/automation/rewards |
| Reward Delete dialog (removed here and on Twitch) | task | moderator | redeemed before or never redeemed | /reference/automation/rewards |
| Pending rewards panel (filter by reward, counts, select rows) | screen | moderator | requests waiting or none | /reference/automation/rewards |
| Complete a redemption (single or many) | task | moderator | completed or failed | /reference/automation/rewards |
| Reject a redemption (single or many, points refunded) | task | moderator | confirmed or cancelled | /reference/automation/rewards |
| Reward chat reply when redeemed | message | viewer | reply set, event line used, or nothing | /reference/automation/rewards |
| Rewards API (list, availability, read, make, change, delete, blast radius, sync, import, recreate) | api | moderator | allowed or refused by role | /reference/automation/rewards |
| Redemptions API (list, fulfill, refund) | api | moderator | pending or settled | /reference/automation/rewards |
| Redemption timers API (list, pause, resume, complete, cancel) | api | moderator | running, paused or ended | /reference/automation/rewards |
| Reward leaderboard API | api | moderator | filled or empty | /reference/automation/rewards |
| Template helpers API (helper catalogue read) | api | moderator | helpers listed | /reference/templates/overview |
| Template variable braces in a reply, command, timer, trigger or event line | setting | moderator | resolves, falls back, or helper unknown | /reference/commands/variables-and-templates |
| Template helpers `{user.*}` (75 registered helpers; bits total tracked in issues.md) | api | moderator | value found or fallback | /reference/templates/user |
| Template helpers `{target.*}` (46 registered helpers; bits total tracked in issues.md) | api | moderator | target named or not | /reference/templates/target |
| Template helpers `{args.*}` (64 helpers) | api | moderator | word given or missing | /reference/templates/args |
| Template helpers `{channel.*}` (34 helpers) | api | moderator | value found or fallback | /reference/templates/channel |
| Template helpers `{stream.*}` (62 registered; three truncated-list consumers tracked in docs-work/issues.md) | api | moderator | live or offline | /reference/templates/stream |
| Template helpers `{chat.*}` (29 helpers) | api | moderator | chat message present or not | /reference/templates/chat |
| Template helpers `{activity.*}` (19 helpers) | api | moderator | activity recorded or none | /reference/templates/activity |
| Template helpers for events `{supporter.*}` and event details (33 helpers) | api | moderator | event data present or not | /reference/templates/event |
| Template helpers `{poll.*}` and `{prediction.*}` (51 helpers) | api | moderator | poll running or none | /reference/templates/poll |
| Template helpers `{hypetrain.*}` (17 helpers) | api | moderator | hype train running or none | /reference/templates/hypetrain |
| Template helpers `{goal.*}` (14 helpers) | api | moderator | goal set or none | /reference/templates/goal |
| Template helpers `{charity.*}` (8 helpers) | api | moderator | campaign running or none | /reference/templates/charity |
| Template helpers `{schedule.*}` (17 helpers) | api | moderator | segment scheduled or none | /reference/templates/schedule |
| Template helpers `{ad.*}` (15 helpers) | api | moderator | ad break due or none | /reference/templates/ad |
| Template helpers `{bot.*}` (22 helpers) | api | moderator | value found or fallback | /reference/templates/bot |
| Template helpers `{list.*}` and `{count.*}` (18 helpers) | api | moderator | list or counter found or missing | /reference/templates/list |
| Template helpers `{quote.*}` (7 helpers) | api | moderator | quote found or none | /reference/templates/quote |
| Template helpers `{var.*}` (7 helpers) | api | moderator | variable set or unset | /reference/templates/var |
| Template helpers `{music.*}` (54 helpers) | api | moderator | playing or nothing playing | /reference/templates/music |
| Template helpers `{date:*}` (17 helpers) | api | moderator | date formatted | /reference/templates/date |
| Template helpers `{if.*}` (26 helpers) | api | moderator | condition true or false | /reference/templates/if |
| Template helpers `{random.*}` (23 helpers) | api | moderator | one value picked | /reference/templates/random |
| Template helpers `{fun.*}` (26 helpers) | api | moderator | value produced | /reference/templates/fun |
| Template helpers `{text.*}` (103 helpers) | api | moderator | text changed | /reference/templates/text |
| Template helpers `{num.*}` (36 helpers) | api | moderator | number formatted | /reference/templates/num |
| Template helpers `{math.*}` (20 helpers) | api | moderator | result or error | /reference/templates/math |
| Template helpers `{platform.*}` (25 registered; stream-chat totals tracked in docs-work/issues.md) | api | moderator | platform connected or not | /reference/templates/platform |
| Template helpers `{emote.*}` (30 helpers) | api | moderator | emote found or none | /reference/templates/emote |
| Template helpers `{lookup.*}` (10 helpers) | api | moderator | data found or not | /reference/templates/lookup |
| Pronoun helpers in templates (pronouns and matching verbs, from `{user.*}` and `{target.*}`) | api | moderator | pronouns saved or default they/them | /reference/templates/pronouns |
| Music page (tabs: now playing, request queue, history, thanks, request rules) | screen | broadcaster | player connected or not; queue open or closed; empty or filled | /reference/music/music-player |
| Music player connection badge (Spotify connected, Spotify needs a new sign-in, Spotify not connected) | screen | broadcaster | connected, needs new sign-in, not connected | /reference/music/music-player |
| Music Player browser source button (add the Music Player overlay to OBS, shows loaded or not) | task | broadcaster | loaded in OBS, not loaded, overlay switched off | /reference/music/music-player |
| Now playing card (title, artist, requested by, progress) | screen | broadcaster | playing, paused, nothing playing, could not load | /reference/music/music-player |
| Play and pause button | task | broadcaster | playing, paused, paused by you, blocked because the player cannot start, starting | /reference/music/music-player |
| Next song button | task | broadcaster | queue filled or empty; Premium needed or not | /reference/music/music-player |
| Previous song button | task | broadcaster | previous track exists or not | /reference/music/music-player |
| Shuffle toggle | setting | broadcaster | on or off | /reference/music/music-player |
| Repeat toggle (repeat off, repeat the playlist, repeat this song) | setting | broadcaster | off, context, track | /reference/music/music-player |
| Song position slider (seek) | task | broadcaster | position and length shown; nothing playing | /reference/music/music-player |
| Music volume slider and Music muted badge | setting | broadcaster | volume level; muted or not | /reference/music/music-player |
| Playback switch (turn off to stop all playback) | setting | broadcaster | on or off | /reference/music/music-player |
| Player buttons strip (pinned Stream Deck style buttons, at most a set number per channel) | screen | broadcaster | empty, filled, full, a button failed to run | /reference/music/music-player |
| Add button dialog (pick one of the 22 Stream Deck music actions, icon, label, device) | task | broadcaster | list of actions; label too long; no action chosen; no icon chosen | /reference/music/music-player |
| Edit player button (right-click a button) | task | broadcaster | icon, label, device set or blank | /reference/music/music-player |
| Remove player button | task | broadcaster | button pinned or removed | /reference/music/music-player |
| Move player button (drag) | task | broadcaster | order changed or kept | /reference/music/music-player |
| Press a player button (runs its music action) | task | broadcaster | ran, did not run (message names the label) | /reference/music/music-player |
| Request queue panel (waiting count, Open or Closed badge) | screen | moderator | queue open, closed, empty, could not load, waiting for the Music Player in OBS, Spotify has no active device | /reference/music/music-player |
| Open queue and Close queue button | task | moderator | requests open or closed | /reference/music/song-requests |
| Play next button on a queued song | task | moderator | song moved to the front | /reference/music/song-requests |
| Drag to move a queued song | task | moderator | order changed or kept | /reference/music/song-requests |
| Remove a queued song (confirm dialog) | task | moderator | confirm or cancel; requester named or not | /reference/music/song-requests |
| Ban a queued song (confirm dialog) | task | moderator | confirm or cancel; song blocked for good | /reference/music/song-requests |
| Remove all songs of one requester (pick a requester, confirm) | task | moderator | requesters with counts; confirm or cancel; song playing now keeps playing | /reference/music/song-requests |
| History tab (recent song requests) | screen | broadcaster | filled, empty, unknown song, could not load | /reference/music/music-player |
| Thanks for the music panel (top requesters of all time, Open people link) | screen | broadcaster | filled, empty, could not load | /reference/music/music-player |
| Request rules panel (tabs: Requests, Sources, Blocked) | screen | broadcaster | loaded, not available yet, could not load, unsaved changes | /reference/music/song-requests |
| Requests are open | setting | broadcaster | on or off | /reference/music/song-requests |
| Songs in the queue, at most | setting | broadcaster | number; default shown | /reference/music/song-requests |
| Songs per person | setting | broadcaster | number; default shown | /reference/music/song-requests |
| Songs per person per stream | setting | broadcaster | number; 0 turns the cap off | /reference/music/song-requests |
| Songs per role (viewers, subscribers, VIPs, moderators, me) | setting | broadcaster | a box per role; blank uses the per-person cap | /reference/music/song-requests |
| Longest song (minutes and seconds) | setting | broadcaster | number; default shown | /reference/music/song-requests |
| Allow explicit songs | setting | broadcaster | on or off | /reference/music/song-requests |
| Search first (preferred service: Automatic, Spotify, YouTube) | setting | broadcaster | auto, spotify, youtube | /reference/music/song-requests |
| Banger playlist (choose automatically, make a playlist on first use, or a playlist) | setting | broadcaster | automatic, auto-create, chosen playlist | /reference/music/song-requests |
| Save and Discard request rules | task | broadcaster | unsaved changes or saved | /reference/music/song-requests |
| Reset request rules to default (confirm dialog) | task | broadcaster | confirm or cancel; requests switch and banger playlist stay | /reference/music/song-requests |
| Allow Spotify songs | setting | broadcaster | on or off | /reference/music/song-requests |
| Allow YouTube songs | setting | broadcaster | on or off | /reference/music/song-requests |
| Who can request from Spotify (Everyone up to Only me) | setting | broadcaster | one of eight levels; applies at once; saved or not saved | /reference/music/song-requests |
| Who can request from YouTube (Everyone up to Only me) | setting | broadcaster | one of eight levels; applies at once; saved or not saved | /reference/music/song-requests |
| YouTube music videos only | setting | broadcaster | on or off | /reference/music/song-requests |
| Blocked songs tab (list, Allow button per song, Allowed message) | screen | moderator | filled, empty, could not load | /reference/music/song-requests |
| Allow a blocked song again | task | moderator | song can be requested again | /reference/music/song-requests |
| Song request page link (public page for viewers; the dashboard shows no link) | screen | viewer | page by channel name or by token; token unknown or disabled gives 404 | /reference/music/song-requests |
| Public song request API (resolve a token or channel name, submit a request) | api | viewer | anonymous; rate limited per IP; request counts as Everyone | /reference/music/song-requests |
| Song request page token (read and rotate) | api | broadcaster | token current or rotated | /reference/music/song-requests |
| Your songs in the queue (viewer page: place in line, total, closed notice) | screen | viewer | filled, empty, requests closed, could not load | /reference/community/viewer-pages |
| !song | command | viewer | playing or nothing playing; whisper accepted; channel name as argument | /reference/commands/built-in-commands |
| !queue | command | viewer | list, empty, caller's own requests, none for named viewer; whisper accepted | /reference/commands/built-in-commands |
| !sr | command | viewer | song name or link; requests off; queue closed; cooldown 12 s per user | /reference/commands/built-in-commands |
| !skip | command | viewer | viewer skips own song; moderator skips any; number removes own queued request | /reference/commands/built-in-commands |
| !wrongsong | command | viewer | own last request removed or none found | /reference/commands/built-in-commands |
| !banger | command | viewer | added, already there, no playlist, nothing playing, failed | /reference/commands/built-in-commands |
| !playlist | command | viewer | link answered or no playlist | /reference/commands/built-in-commands |
| !pause | command | moderator | paused or refused | /reference/commands/built-in-commands |
| !resume | command | moderator | resumed or refused | /reference/commands/built-in-commands |
| !volume | command | viewer | answers volume; with a number a moderator sets it | /reference/commands/built-in-commands |
| !bansong | command | moderator | banned, nothing playing, could not ban, strike warning | /reference/commands/built-in-commands |
| !clearsongs | command | moderator | cleared, nothing queued, usage, failed | /reference/commands/built-in-commands |
| !closequeue | command | moderator | closed, already closed, failed | /reference/commands/built-in-commands |
| !openqueue | command | moderator | opened, already open, failed | /reference/commands/built-in-commands |
| Bot reply to !song (playing, nothing) | message | viewer | playing with name, artist, status, link; nothing playing | /reference/music/music-player |
| Bot reply to !queue (list, empty, mine, none) | message | viewer | queue list with count and next; empty; own requests with place; none queued | /reference/music/song-requests |
| Bot reply to !sr, added (added, added with code) | message | viewer | track added; added with request code for !wrongsong | /reference/music/song-requests |
| Bot reply to !sr, nothing found (not found, no close match, unsupported content, unsupported link, unreadable link, not music, not playable) | message | viewer | no track matched; close track not queued; link not readable or not a song | /reference/music/song-requests |
| Bot reply to !sr, already there (duplicate, already playing) | message | viewer | track pending; track playing now | /reference/music/song-requests |
| Bot reply to !sr, usage (no song or link given) | message | viewer | usage hint | /reference/music/song-requests |
| Bot reply to !sr, requests off or queue closed (requests off, queue closed, disabled) | message | viewer | switched off; closed with !closequeue | /reference/music/song-requests |
| Bot reply to !sr, song refused by rule (track blocked, too long, explicit, not embeddable, age restricted, live broadcast, track missing, length unknown, source not allowed, source needs role) | message | viewer | one line per rule | /reference/music/song-requests |
| Bot reply to !sr, limits (queue full, per-user limit, per-stream limit, quota exhausted, rate limited) | message | viewer | limit named; quota gives reset time | /reference/music/song-requests |
| Bot reply to !sr, player problem (no active device, no overlay player, premium required, auth failed, forbidden, missing scope, not configured, provider unavailable, unreachable, revoked, no provider) | message | viewer | Spotify device missing; Music Player not open in OBS; Premium needed; login lost | /reference/music/song-requests |
| Bot reply to !sr, refund on a reward (track too long refunded) | message | viewer | points go back | /reference/music/song-requests |
| Bot reply to !skip (skipped, skipped own, removed, not yours, no request, nothing playing, usage, failed, not connected, no provider, premium required, forbidden) | message | viewer | skipped or refused with the reason | /reference/music/song-requests |
| Bot reply to !bansong (banned, nothing, could not ban, strike warning, strike revoked) | message | moderator | banned; warning at 6 to 9 strikes; revoked at 10 | /reference/music/song-requests |
| Bot reply to !closequeue, !openqueue and !clearsongs (closed, already closed, opened, already open, cleared, nothing queued, usage, failed) | message | moderator | each outcome has its own line | /reference/music/song-requests |
| Bot reply to !banger (added, already there, no playlist, nothing, failed) | message | viewer | one line per outcome | /reference/music/music-player |
| Bot reply to !volume (current, set, cannot read, usage, set failed, no provider, premium required) | message | viewer | volume read or set; refused | /reference/music/music-player |
| Bot reply to !pause and !resume (paused, resumed, and playback failures: no player, no Spotify device, no provider, premium required, failed) | message | moderator | success or the reason it failed | /reference/music/music-player |
| Bot reply to !playlist (link, no playlist, not found) | message | viewer | link given or not | /reference/music/music-player |
| Text to speech page (tabs: Overview, Voices, Rules, Pronunciation, Keys) | screen | broadcaster | text to speech on or off | /reference/audio/text-to-speech |
| Spoken history (messages the bot read aloud, Show older messages) | screen | broadcaster | filled, empty, text not kept, could not load | /reference/audio/text-to-speech |
| Read messages aloud (master switch) | setting | broadcaster | on or off; default shown | /reference/audio/text-to-speech |
| Voice source (Free bot voice or My own key) | setting | broadcaster | self_host or byok | /reference/audio/text-to-speech |
| Voice provider | setting | broadcaster | provider listed; key stored or missing | /reference/audio/text-to-speech |
| Who may be heard (Everyone, Twitch subscribers, VIPs, Moderators, Broadcaster) | setting | broadcaster | one of five levels | /reference/audio/text-to-speech |
| Maximum characters | setting | broadcaster | 1 to 500; out of range error | /reference/audio/text-to-speech |
| Cooldown (seconds between a viewer's messages) | setting | broadcaster | 0 to 3600; 0 means none | /reference/audio/text-to-speech |
| Skip bot messages | setting | broadcaster | on or off | /reference/audio/text-to-speech |
| Censor profanity | setting | broadcaster | on or off | /reference/audio/text-to-speech |
| Follow the platform voice | setting | broadcaster | on or off | /reference/audio/text-to-speech |
| Read usernames | setting | broadcaster | on or off | /reference/audio/text-to-speech |
| Moderators approve first | setting | broadcaster | on or off | /reference/audio/text-to-speech |
| Viewers pick their own voice (!voice) | setting | broadcaster | on or off; off means moderators only | /reference/audio/text-to-speech |
| Minimum bits | setting | broadcaster | 0 to 1,000,000; 0 means none | /reference/audio/text-to-speech |
| Reset text to defaults (keys, voice and pronunciation stay) | task | broadcaster | reset or cancel | /reference/audio/text-to-speech |
| Settings overview rows (Voice, Who may use it, Message limits, Words and pronunciation, Speaker overlay) | screen | broadcaster | voice picked, platform voice, no voice; bot messages skipped or read | /reference/audio/text-to-speech |
| Voices tab (search, language and family filter, sample button, Load more voices) | screen | broadcaster | voices loaded, no match, could not load, loading | /reference/audio/text-to-speech |
| Pick the channel voice (click a row) | setting | broadcaster | channel voice set; none picked; follows the platform voice | /reference/audio/text-to-speech |
| Play a voice sample | task | broadcaster | playing or stopped | /reference/audio/text-to-speech |
| Rewards that speak (channel point rewards read aloud) | screen | broadcaster | filled, empty (create a reward first) | /reference/audio/text-to-speech |
| Pronunciation rules list | screen | broadcaster | filled, empty, could not load | /reference/audio/text-to-speech |
| Add and edit pronunciation rule (phrase, say instead, match whole word or exact text) | task | broadcaster | new or edit; duplicate phrase and match; save failed | /reference/audio/text-to-speech |
| Hear a pronunciation rule | task | broadcaster | plays or fails | /reference/audio/text-to-speech |
| Delete a pronunciation rule (confirm dialog) | task | broadcaster | confirm or cancel; delete failed | /reference/audio/text-to-speech |
| Keys tab: Azure speech key and Azure region | setting | broadcaster | key stored or none; saved or save failed; removed | /reference/audio/text-to-speech |
| Keys tab: ElevenLabs key | setting | broadcaster | key stored or none; saved or save failed; removed | /reference/audio/text-to-speech |
| How to say the channel name (spelling and preview) | setting | broadcaster | blank reads the name as written; saved or failed | /reference/audio/text-to-speech |
| Speech playback controls (skip, clear, pause, resume) and speaker overlay test | api | moderator | queue playing, paused, cleared; the dashboard words file shows no button for them (not checked in a view) | /reference/audio/text-to-speech |
| !voice | command | viewer | bare shows subcommands; search words pick a voice; self-service on or off | /reference/commands/built-in-commands |
| !voice get (current voice, or voices of one language) | command | viewer | own voice, channel default, no voice; usage without a language | /reference/audio/text-to-speech |
| !voice set (name) | command | viewer | set with one match or many; no match; set failed; usage without a name | /reference/audio/text-to-speech |
| !voice clear (also reset or default) | command | viewer | reset to channel default or failed | /reference/audio/text-to-speech |
| !voice languages | command | viewer | languages listed or no voices | /reference/audio/text-to-speech |
| !voice roulette | command | viewer | random voice kept or no voices to pick from | /reference/audio/text-to-speech |
| !voice set for another viewer (moderator) | command | moderator | set for the viewer; unknown viewer; others may only set their own | /reference/audio/text-to-speech |
| Bot reply to !voice (current, current default, current none, multiple matches, cleared, clear failed, set, set many, set failed, no match, disabled, roulette, languages, voices, voices more, no voices for language, no voices, get usage, set usage, set for, own voice only, unknown viewer, usage, unknown command, no voices for roulette) | message | viewer | one line per outcome | /reference/audio/text-to-speech |
| Your voice panel (viewer account page: search, use this voice, use the channel voice) | screen | viewer | voice picked, channel voice used, no match, did not load, viewer choice closed by the streamer | /reference/community/viewer-pages |
| Read-aloud web API (POST and GET, text and locale, MP3 answer) | api | viewer | 200 audio; 400 bad locale or text; 403 origin refused; 503 voice service down; refusals never cached | /reference/audio/read-aloud-api |
| TTS voice defaults for the platform (admin) | api | admin | platform default voices | excluded: platform operator route, not part of the streamer guide |
| Sounds page (list of sound clips, New sound clip) | screen | broadcaster | filled, empty, could not load, Show more | /reference/audio/sounds |
| Play a sound clip (switch per clip) | task | broadcaster | clip enabled or off | /reference/audio/sounds |
| New sound clip dialog (audio file up to 10 MB, short name, display name, volume, cooldown, who may play, chat word) | task | broadcaster | file missing; name missing; volume out of range; cooldown negative; chat word too long or has a space | /reference/audio/sounds |
| Edit sound clip (name and file stay as uploaded) | task | broadcaster | saved or failed | /reference/audio/sounds |
| Sound volume (0 to a maximum) | setting | broadcaster | whole number in range | /reference/audio/sounds |
| Sound cooldown (seconds) | setting | broadcaster | 0 means no wait | /reference/audio/sounds |
| Who may play a sound clip | setting | broadcaster | permission level | /reference/audio/sounds |
| Chat word of a sound clip | setting | broadcaster | word with no spaces; blank means none; chat plays the clip by typing it | /reference/audio/sounds |
| Delete a sound clip (shows what uses it) | task | broadcaster | used by commands, pipelines or rewards, or by nothing | /reference/audio/sounds |
| Preview and stop a sound clip | api | broadcaster | preview plays; stop ends playback (no button in the sounds words file, not checked in a view) | /reference/audio/sounds |
| Audio levels dialog (master volume, voice volume, music duck percent) | setting | broadcaster | value in range or not saved; default shown | /reference/audio/sounds |
| Platform audio assets (admin) | api | admin | platform sound files | excluded: platform operator route, not part of the streamer guide |
| Voice triggers page (list, editor, New voice trigger) | screen | broadcaster | filled, empty, none open, could not load | /reference/audio/voice-triggers |
| New voice trigger dialog (word, start counting at) | task | broadcaster | word missing; start count carried over | /reference/audio/voice-triggers |
| Voice trigger Enabled | setting | broadcaster | on or off (off stays in list and counts nothing) | /reference/audio/voice-triggers |
| Word to listen for | setting | broadcaster | word set | /reference/audio/voice-triggers |
| Seconds between counts | setting | broadcaster | cooldown seconds | /reference/audio/voice-triggers |
| Sticker (image that pops up each time the word is heard) | setting | broadcaster | no sticker or chosen; images could not load | /reference/audio/voice-triggers |
| Voice trigger counters (heard so far, started at, last heard) | screen | broadcaster | count; Not yet | /reference/audio/voice-triggers |
| Save and Discard voice trigger changes | task | broadcaster | unsaved changes or saved | /reference/audio/voice-triggers |
| Delete a voice trigger (confirm dialog) | task | broadcaster | count is lost; sticker image stays | /reference/audio/voice-triggers |
| Copy listener link | task | broadcaster | link copied | /reference/audio/voice-triggers |
| Popout listener header (last match time) | screen | broadcaster | no match heard yet, last match ago | /reference/audio/voice-triggers |
| Voice listener page (open in a real Chrome tab, not OBS) | screen | broadcaster | Listening; Stopped and restarting; no speech support; no microphone; speech service unreachable or not allowed; language not supported; link no longer valid | /reference/audio/voice-triggers |
| Voice trigger report (listener posts a heard word with its link token) | api | broadcaster | matched with count; no trigger word; refused when link invalid | /reference/audio/voice-triggers |
| Media share page (On stream player, Queue, Settings) | screen | moderator | filled, empty, could not load | /reference/audio/media-share |
| Media share player (play, pause, skip, stop, overlay volume, place in the item) | task | moderator | playing, paused, nothing playing, nothing to play, Media share browser source not loaded in OBS | /reference/audio/media-share |
| Set up Media share in OBS button | task | broadcaster | overlay loaded or not | /reference/audio/media-share |
| Approve a shared item | task | moderator | item moves to Up next | /reference/audio/media-share |
| Reject a shared item | task | moderator | item leaves queue | /reference/audio/media-share |
| Skip, Play now, Replay shared item | task | moderator | per-section actions | /reference/audio/media-share |
| Move shared item up or down | task | moderator | position changes | /reference/audio/media-share |
| Remove shared item (confirm dialog, refunds points) | task | moderator | confirm or cancel | /reference/audio/media-share |
| Media queue sections (Waiting for approval, Up next, History, source Twitch clip or YouTube video) | screen | moderator | empty, filled, could not load | /reference/audio/media-share |
| Accept media from viewers | setting | broadcaster | on or off | /reference/audio/media-share |
| Approve each item before it plays | setting | broadcaster | on or off | /reference/audio/media-share |
| Allow Twitch clips | setting | broadcaster | on or off | /reference/audio/media-share |
| Allow YouTube videos | setting | broadcaster | on or off | /reference/audio/media-share |
| Twitch subscribers only | setting | broadcaster | on or off | /reference/audio/media-share |
| Longest item (seconds) | setting | broadcaster | number | /reference/audio/media-share |
| Cost per item (points) | setting | broadcaster | number | /reference/audio/media-share |
| Longest queue | setting | broadcaster | number | /reference/audio/media-share |
| Wait between items per viewer (seconds) | setting | broadcaster | number | /reference/audio/media-share |
| Save and Discard media share settings | task | broadcaster | unsaved or saved | /reference/audio/media-share |
| !media (link) | command | viewer | link given or usage; cooldown | /reference/commands/built-in-commands |
| !play (link or reply to a message that holds one) | command | moderator | submits approved; usage when no link | /reference/commands/built-in-commands |
| Bot reply to !media and !play (usage, play usage, account unresolved, queued, pending, disabled, source not allowed, not found, too long, not eligible, cooldown, queue full, unavailable, failed) | message | viewer | one line per outcome | /reference/audio/media-share |
| Overlays page (list with search, tabs All, On, Off, Has a problem) | screen | broadcaster | filled, empty, no match for search, could not load | /reference/overlays/set-up-overlays |
| New overlay dialog (name, code language Vue or plain HTML, CSS and JavaScript) | task | broadcaster | name missing; code language fixed after create | /reference/overlays/set-up-overlays |
| Overlay row health (Fails, A browser source is open, Nothing attached, Off) | screen | broadcaster | works, failed, attached, nothing attached, off | /reference/overlays/set-up-overlays |
| Overlay on switch | setting | broadcaster | on or off | /reference/overlays/set-up-overlays |
| Overlay detail (built in or edited, health, events it reacts to) | screen | broadcaster | works, failed, never ran, switched off; not found | /reference/overlays/set-up-overlays |
| Copy browser source address | task | broadcaster | copied; no address yet | /reference/overlays/obs-browser-source |
| Set up in OBS dialog (width and height, Control audio via OBS, Shutdown source when not visible, three steps, copy address) | task | broadcaster | loaded in OBS, not loaded, not connected to the bot | /reference/overlays/obs-browser-source |
| Overlay settings form (per overlay fields, reset one field, Save settings) | setting | broadcaster | unsaved, all saved, not saved, no settings, raw saved values | /reference/overlays/set-up-overlays |
| Overlay event Test button (fire a sample event) | task | broadcaster | sent; sent but nothing attached; overlay does not react | /reference/overlays/widgets-and-alerts |
| Edit code (opens the overlay in the code editor) | task | broadcaster | saved and compiled; saved version cannot be deleted | /reference/overlays/widgets-and-alerts |
| Duplicate overlay | task | broadcaster | copy created | /reference/overlays/set-up-overlays |
| Delete overlay (confirm dialog) | task | broadcaster | used by nothing or by others | /reference/overlays/set-up-overlays |
| Overlay kinds (chat box, now playing, TTS speaker, alerts, reward, game, feather, hype train, leaderboard, poll, raid, song queue) | screen | broadcaster | one built-in overlay per kind | /reference/overlays/widgets-and-alerts |
| Widget versions, rollback, update from gallery, clone | api | broadcaster | version list; rolled back; gallery item updated | /reference/overlays/widgets-and-alerts |
| Widget gallery (pin, install, review) | api | broadcaster | item installed or not | /reference/overlays/widgets-and-alerts |
| Gallery entry in the sidebar | screen | broadcaster | opens a Coming soon page | /reference/overlays/widgets-and-alerts |
| Library entry in the sidebar | screen | broadcaster | opens a Coming soon page | /reference/getting-started/dashboard-tour |
| Overlay browser source page (the address OBS loads, with ticket for the live link) | screen | broadcaster | page loads and connects; link rotated | /reference/overlays/obs-browser-source |
| Rotate the overlay token | api | broadcaster | old address stops working | /reference/overlays/obs-browser-source |
| Overlay runtime calls (manifest, now playing, stream stats, queue, template render, bundle) | api | broadcaster | called by the overlay code, not by a person | excluded: internal calls the overlay page makes by itself |
| Overlay ticket and sdk.js | api | broadcaster | served to the overlay page | excluded: internal to the overlay runtime |
| OBS page (tabs: Live, Studio and tools, Overlays in OBS) | screen | broadcaster | linked or not linked; OBS did not answer; everything loaded, something not loaded, something failed | /reference/integrations/obs |
| OBS connection bar and form (Link to OBS, host, port, password, events to listen to) | setting | broadcaster | switched off, error, linked but not answering, connected; password stored; last error | /reference/integrations/obs |
| Save OBS connection | task | broadcaster | saved or failed | /reference/integrations/obs |
| OBS events to listen to (General, Configuration, Scenes, Inputs, Transitions, Filters, Outputs, Scene items, Media inputs, Vendors, OBS interface, and four high volume groups) | setting | broadcaster | each group on or off | /reference/integrations/obs |
| Browser source bridge status | screen | broadcaster | off, none open, none leading, one leading | /reference/integrations/obs |
| Required overlays list (Bot Audio, Alerts, TTS caption, Raid recap, Music Player, Media share, OBS control) | screen | broadcaster | loaded or not in OBS; empty; could not load; OBS control locked without permission | /reference/integrations/obs |
| Copy address of a required overlay | task | broadcaster | copied | /reference/overlays/obs-browser-source |
| Browser sources panel (overlays loaded in OBS, switched off, failed) | screen | broadcaster | loaded, not loaded, off, failed, empty, could not load | /reference/integrations/obs |
| Scenes panel (switch the scene on air) | task | broadcaster | on air marker; offline; empty; could not load; needs OBS control | /reference/integrations/obs |
| Sources in the scene (show or hide, lock or unlock) | task | broadcaster | hidden or shown; locked or unlocked; empty | /reference/integrations/obs |
| Source filters (turn a filter on or off) | task | broadcaster | filters loading; none; could not load | /reference/integrations/obs |
| Audio mixer (mute, unmute, level in dB) | task | broadcaster | muted or not; no inputs; offline | /reference/integrations/obs |
| Outputs panel: Stream (Go live, Stop stream with confirm) | task | broadcaster | off air or live; needs broadcast control permission | /reference/integrations/obs |
| Outputs panel: Recording (Start, Stop, Pause, Resume, Split file) | task | broadcaster | not recording, recording, paused | /reference/integrations/obs |
| Outputs panel: Replay buffer (Start, Stop, Save clip) | task | broadcaster | running or stopped | /reference/integrations/obs |
| Outputs panel: Virtual camera (Start, Stop) | task | broadcaster | running or stopped | /reference/integrations/obs |
| Studio mode panel (preview scene, transition, duration, Transition button) | task | broadcaster | on or off; preview scene chosen or not | /reference/integrations/obs |
| Hotkeys panel (search, press an OBS hotkey; groups Streaming, Recording, Replay buffer and virtual camera, Studio and preview, Screenshots, More) | task | broadcaster | listed, no match, offline, none reported, could not load | /reference/integrations/obs |
| Source screenshot (pick a source, image format, Capture) | task | broadcaster | image shown; pick a source first; OBS not linked | /reference/integrations/obs |
| OBS status bar (stream, recording, bitrate, dropped frames, skipped render frames, CPU, FPS, memory, congestion) | screen | broadcaster | live, reconnecting, off, recording, paused | /reference/integrations/obs |
| OBS control permission notices (needs the Editor role or OBS control permission; needs broadcast control) | error | moderator | shown instead of controls when the permission is missing | /reference/integrations/obs |
| OBS did not answer notice | error | broadcaster | shown when the link fails | /reference/integrations/obs |
| OBS bridge page (control OBS from a browser source when OBS is on another computer) | screen | broadcaster | bridge open, leading or not | /reference/integrations/obs |
| VTube Studio page (tabs: Connection, Hotkeys, Expressions) | screen | broadcaster | off, waiting for approval, approved not connected, connected, error | /reference/integrations/vtube-studio |
| Link to VTube Studio | setting | broadcaster | on or off | /reference/integrations/vtube-studio |
| VTube Studio connection type (Direct or Bridge) and address | setting | broadcaster | direct, bridge; address set | /reference/integrations/vtube-studio |
| VTube Studio events to listen to (8 normal and 3 high volume kinds) | setting | broadcaster | each on or off | /reference/integrations/vtube-studio |
| Save VTube Studio connection | task | broadcaster | saved or failed | /reference/integrations/vtube-studio |
| Authorize VTube Studio (click Allow in VTube Studio, waits up to a minute) | task | broadcaster | waiting for approval, approved and key kept, not approved | /reference/integrations/vtube-studio |
| Rotate bridge token (confirm dialog) | task | broadcaster | confirm or cancel; old credential stops at once | /reference/integrations/vtube-studio |
| Load a model | task | broadcaster | model picked; loaded or failed | /reference/integrations/vtube-studio |
| Trigger a hotkey | task | broadcaster | hotkey picked; fired | /reference/integrations/vtube-studio |
| Activate and deactivate an expression | task | broadcaster | expression picked; active or not | /reference/integrations/vtube-studio |
| VTube Studio did not answer notice | error | broadcaster | shown when VTube Studio is unreachable | /reference/integrations/vtube-studio |
| Supporters page (stats, Twitch subscriptions and gifts, Cheers, Top supporters, Tips and memberships) | screen | broadcaster | filled, empty, could not load | /reference/community/supporters |
| Supporter stats (Twitch subscribers, gift events, bits cheered, in the recent activity) | screen | broadcaster | numbers shown | /reference/integrations/supporter-sources |
| Top supporters (most bits, most gifted subs) | screen | broadcaster | filled, empty, could not load | /reference/integrations/supporter-sources |
| Tips and memberships list (Tip, Membership, Merch, Charity) | screen | broadcaster | filled, empty, could not load | /reference/integrations/supporter-sources |
| Supporter sources page (11 services: Buy Me a Coffee, DonorDrive, Fourthwall, Ko-fi, Pally, Patreon, Shopify, StreamElements, Streamlabs, Tipeee, Treatstream) | screen | broadcaster | connected, paused, not set up; last event time or no events yet | /reference/integrations/supporter-sources |
| Set up and Manage a supporter source dialog (address to give the service, secret or token, connected account, Receive events) | setting | broadcaster | secret stored or none; account connected or not; saved or not saved; delivery by webhook, socket, websocket or schedule | /reference/integrations/supporter-sources |
| Remove a supporter source (confirm dialog) | task | broadcaster | confirm or cancel; stored secret deleted; tips stay | /reference/integrations/supporter-sources |
| Discord page (server, notifications, self-assign roles, live role, recent posts) | screen | broadcaster | no server linked, bot missing, waiting for server admin, linked and ready | /reference/integrations/discord |
| Add the bot to your server | task | broadcaster | opens Discord consent; returns with an install error or success | /reference/integrations/discord |
| Check again (bot in server) | task | broadcaster | bot found or still missing | /reference/integrations/discord |
| Use another server | task | broadcaster | server link changed | /reference/integrations/discord |
| Post to this server | setting | broadcaster | on or off (off pauses every Discord message) | /reference/integrations/discord |
| Disconnect server (confirm dialog) | task | broadcaster | shows what uses the server; confirm or cancel | /reference/integrations/discord |
| Withdraw the server's approval (confirm dialog) | task | broadcaster | posting halts until the admin approves again | /reference/integrations/discord |
| Discord install error: token exchange failed | error | broadcaster | Discord refused the bot's sign-in; check client ID and secret | /reference/integrations/discord |
| Discord install error: Discord unreachable, app not set up, access denied, authorization failed, invalid state, no access token, no server chosen, link not saved, unknown | error | broadcaster | one message each, with Try again and Dismiss | /reference/integrations/discord |
| Notification rules list (13 triggers: go live, follow, subscription, gift subscription, cheer, raid, stream end, resubscription, poll end, prediction resolved, new clip, schedule update, milestone) | screen | broadcaster | not set up, on, off | /reference/integrations/discord |
| Notification rule editor (send this notification, Discord channel, ping role, message, embed fields, button label and link, preview) | setting | broadcaster | on or off; channel picked; embed filled; picker error; bot cannot post in channel | /reference/integrations/discord |
| Remove a notification rule (confirm dialog) | task | broadcaster | confirm or cancel; sent messages stay | /reference/integrations/discord |
| Recent posts list | screen | broadcaster | posted, failed, skipped, skipped as already posted, empty, could not load | /reference/integrations/discord |
| Self-assign roles list and editor (Discord role, display name, Viewers can pick this role, Send a direct message, button channel) | setting | broadcaster | empty, filled; opt-in count; removed | /reference/integrations/discord |
| Post the role button in Discord | task | broadcaster | button posted in the chosen channel | /reference/integrations/discord |
| Role opt-in button in Discord (viewer picks a role) | task | viewer | role given or taken away | /reference/integrations/discord |
| Live role (role, Give the role while live, Applied right now, Remove rule) | setting | broadcaster | on or off; applied or not | /reference/integrations/discord |
| !discord | command | viewer | invite created; not connected; unavailable | /reference/commands/built-in-commands |
| Bot reply to !discord (invite, not connected, unavailable) | message | viewer | invite link; no Discord link; no invite could be made | /reference/integrations/discord |
| Discord interactions endpoint (Discord posts button clicks to the server) | api | viewer | called by Discord | excluded: callback from Discord to the server, not a user surface |
| Connected services page (Spotify, Kick, Patreon, Shopify, Treatstream, YouTube) | screen | broadcaster | connected, not connected, sign in again, sign in again as saved login is unreadable, signed in only | /reference/getting-started/connect-platforms |
| Connect, Reconnect and Disconnect a service | task | broadcaster | connect through its own sign-in page; disconnect shows first what stops working; Shop name for Shopify | /reference/getting-started/connect-platforms |
| Service details (account, last sync, permission sets, can do) | screen | broadcaster | account shown; permission sets listed | /reference/getting-started/connect-platforms |
| Spotify connection (permission sets: control playback, read your library, play in the browser) | task | broadcaster | connected, needs sign-in, not connected | /reference/integrations/spotify |
| Your own Spotify app (client ID and client secret, Remove my app, Use the shared app) | setting | broadcaster | own app with client ID ending shown, shared app, no app yet; secret stored; saved, cleared, back on shared | /reference/integrations/spotify |
| YouTube connection (permission sets: manage your channel, read your channel) | task | broadcaster | connected or not; manage or read | /reference/integrations/youtube |
| YouTube Music Player report | screen | broadcaster | player reports state to the bot (not checked in a view) | /reference/integrations/youtube |
| API devices page (API keys table, Pair a device) | screen | broadcaster | empty, filled, could not load | /reference/integrations/stream-deck-and-api-devices |
| New API key dialog (name, allowed actions, pipelines it may start, ends on) | task | broadcaster | scopes invoke, read, events, chat; no end date; pinned to chosen pipelines | /reference/integrations/stream-deck-and-api-devices |
| Key shown once (Copy key, I copied it) | task | broadcaster | secret visible once | /reference/integrations/stream-deck-and-api-devices |
| API key table (name, allowed, last used, ends, state) | screen | broadcaster | active, expired, revoked | /reference/integrations/stream-deck-and-api-devices |
| Make a new secret for a key (confirm dialog) | task | broadcaster | old secret stops working at once | /reference/integrations/stream-deck-and-api-devices |
| Revoke a key (confirm dialog) | task | broadcaster | key stays listed as revoked; paired device is unpaired | /reference/integrations/stream-deck-and-api-devices |
| Events this key can listen to | screen | broadcaster | listed, none, could not load | /reference/integrations/stream-deck-and-api-devices |
| Make a code for a device (device name, expiry) | task | broadcaster | code works once before the shown time | /reference/integrations/stream-deck-and-api-devices |
| Approve a device code | task | broadcaster | device approved and appears in the key list | /reference/integrations/stream-deck-and-api-devices |
| Automation REST calls (pair, info, pipelines, commands, invoke, chat, refresh, music now-playing, devices, playlists, OBS scenes, inputs, scene items, transitions, filters, state) | api | broadcaster | needs a key with the right scope | /reference/code/automation-api |
| Automation event stream (WebSocket) | api | broadcaster | needs a key with the events scope | /reference/code/automation-api |
| Device pairing (device code init, poll, approve) | api | broadcaster | pending, approved | /reference/code/automation-api |
| Outbound webhooks page | screen | broadcaster | empty, filled, could not load | /reference/integrations/webhooks-and-event-feeds |
| New and edit outbound webhook (name, host, path, events to send, message body, Body is JSON, custom headers) | setting | broadcaster | host must be on the approved list; header line invalid; headers kept hidden | /reference/integrations/webhooks-and-event-feeds |
| Outbound webhook events to send (about 70 events in 12 groups) | setting | broadcaster | each event on or off | /reference/integrations/webhooks-and-event-feeds |
| Signing secret dialog (shown once) | task | broadcaster | copy now; I saved it | /reference/integrations/webhooks-and-event-feeds |
| Make a new signing secret (confirm dialog) | task | broadcaster | deliveries signed with new and old secret | /reference/integrations/webhooks-and-event-feeds |
| Send a test to a webhook | task | broadcaster | delivered with answer code and time, or failed | /reference/integrations/webhooks-and-event-feeds |
| Turn a webhook on or off and Turn back on | setting | broadcaster | on, off, switched off by the bot after failures | /reference/integrations/webhooks-and-event-feeds |
| Deliveries of a webhook (Send again) | screen | broadcaster | waiting, delivered, failed, gave up; empty; could not load | /reference/integrations/webhooks-and-event-feeds |
| Delete outbound webhook (confirm dialog with what uses it) | task | broadcaster | used by pipeline steps, deliveries, data sources, supporter connections, or nothing | /reference/integrations/webhooks-and-event-feeds |
| Approved hosts (add host, switch, remove) | setting | broadcaster | empty, filled, host switched off and refused; add, switch or remove error | /reference/integrations/webhooks-and-event-feeds |
| Inbound webhooks page (links an outside provider posts to) | screen | broadcaster | empty, filled, could not load; calls count and last received | /reference/integrations/webhooks-and-event-feeds |
| New and edit inbound webhook (name, provider, secret, pipeline to start, event to raise, signature header, prefix, signing string, timestamp header, body field, event kind path, event id path) | setting | broadcaster | still needed fields listed; secret kept hidden | /reference/integrations/webhooks-and-event-feeds |
| Copy inbound webhook link | task | broadcaster | link copied | /reference/integrations/webhooks-and-event-feeds |
| Make a new inbound link (confirm dialog) | task | broadcaster | old link stops at once | /reference/integrations/webhooks-and-event-feeds |
| Turn an inbound webhook on or off and delete it | setting | broadcaster | on or off; deleted | /reference/integrations/webhooks-and-event-feeds |
| Inbound webhook endpoint (POST with the link token) | api | viewer | accepted, refused when signature or token is wrong | /reference/code/webhooks-and-events |
| Custom event feeds page | screen | broadcaster | empty, filled, could not load; last data time or no data yet; field errors on last data | /reference/integrations/webhooks-and-event-feeds |
| New and edit feed (name, event name, how data arrives, address, check every seconds, secret, fields) | setting | broadcaster | kind poll, socket or push; secret kept; start from a service preset or none | /reference/integrations/webhooks-and-event-feeds |
| Feed On switch | setting | broadcaster | on or off (off takes in nothing) | /reference/integrations/webhooks-and-event-feeds |
| Feed field map (field name and path in the data, add and remove) | setting | broadcaster | fields listed | /reference/integrations/webhooks-and-event-feeds |
| Test a feed (send a sample, fetch now, paths found) | task | broadcaster | sent and event fired; list cut off | /reference/integrations/webhooks-and-event-feeds |
| Copy feed link (push feeds) | task | broadcaster | link copied | /reference/integrations/webhooks-and-event-feeds |
| Delete a feed (confirm dialog) | task | broadcaster | used by event responses and widgets, or by nothing | /reference/integrations/webhooks-and-event-feeds |
| Dashboard SignalR hubs (dashboard, overlay, OBS relay) | api | broadcaster | connected or not | /reference/code/webhooks-and-events |
| Play sound (pipeline action) | task | broadcaster | clip by short name; plays or fails | /reference/commands/pipelines |
| Stop sound (pipeline action) | task | broadcaster | sound stops | /reference/commands/pipelines |
| Read aloud, TTS (pipeline action play_tts) | task | broadcaster | speaks the text in the channel voice | /reference/commands/pipelines |
| Tts synthesize (pipeline action) | task | broadcaster | audio made or failed | /reference/commands/pipelines |
| Tts set voice and Tts clear voice (pipeline actions) | task | broadcaster | voice set or reset | /reference/commands/pipelines |
| Scene reserve and Scene release (pipeline actions) | task | broadcaster | scene held or released | /reference/commands/pipelines |
| Submit media and Media playback (pipeline actions) | task | broadcaster | queued or refused; playback state | /reference/commands/pipelines |
| Discord notification (pipeline action send_discord_notification) | task | broadcaster | posted or failed | /reference/commands/pipelines |
| Send webhook (pipeline action) | task | broadcaster | delivered or failed | /reference/commands/pipelines |
| Widget event, Stage effect and Show raid recap (pipeline actions) | task | broadcaster | event sent to overlay | /reference/commands/pipelines |
| Request song and Song request favorite (pipeline actions) | task | broadcaster | added or refused | /reference/commands/pipelines |
| Skip song, Pause song, Resume song, Previous song (pipeline actions) | task | broadcaster | done or refused | /reference/commands/pipelines |
| Set song volume, Now playing, Song queue (pipeline actions) | task | broadcaster | value set or read | /reference/commands/pipelines |
| Song queue open, Song queue close, Song clear requester, Ban song, Wrong song (pipeline actions) | task | broadcaster | done or refused | /reference/commands/pipelines |
| Play track once, Add to playlist (pipeline actions) | task | broadcaster | queued or added | /reference/commands/pipelines |
| Music play, Music play pause, Music pause, Music next, Music previous (pipeline actions) | task | broadcaster | done or refused | /reference/commands/pipelines |
| Music set volume, Music volume up, Music volume down, Music volume mute (pipeline actions) | task | broadcaster | volume changed | /reference/commands/pipelines |
| Music seek, Music set shuffle, Music toggle shuffle, Music set repeat, Music cycle repeat (pipeline actions) | task | broadcaster | state changed | /reference/commands/pipelines |
| Music transfer device (pipeline action) | task | broadcaster | playback moved to device | /reference/commands/pipelines |
| Music save track, Music unsave track, Music toggle saved (pipeline actions) | task | broadcaster | liked songs changed | /reference/commands/pipelines |
| Music add to playlist and Music remove from playlist (pipeline actions) | task | broadcaster | playlist changed | /reference/commands/pipelines |
| Music follow artist and Music unfollow artist (pipeline actions) | task | broadcaster | artist followed or unfollowed | /reference/commands/pipelines |
| Obs switch scene and Obs set preview scene (pipeline actions) | task | broadcaster | scene switched | /reference/commands/pipelines |
| Obs set source, Obs filter, Obs input mute, Obs input volume (pipeline actions) | task | broadcaster | source or input changed | /reference/commands/pipelines |
| Obs streaming, Obs recording, Obs replay buffer, Obs save replay, Obs virtual cam (pipeline actions) | task | broadcaster | output started or stopped | /reference/commands/pipelines |
| Obs transition, Obs hotkey, Obs media, Obs refresh browser, Obs screenshot (pipeline actions) | task | broadcaster | done or failed | /reference/commands/pipelines |
| Obs request, Obs request batch, Obs call vendor (pipeline actions) | task | broadcaster | raw OBS request sent | /reference/commands/pipelines |
| Vts trigger hotkey, Vts set expression, Vts load model, Vts move model, Vts color tint, Vts request (pipeline actions) | task | broadcaster | model changed or failed | /reference/commands/pipelines |
| Moderation tools (overview of where each tool lives) | screen | moderator | reachable or hidden by role | /reference/moderation/overview |
| Review queue panel on Home | screen | moderator | empty live, empty offline, filled, shield mode on, could not load | /reference/moderation/overview |
| Review queue Allow button | task | moderator | shown or hidden by role, item allowed | /reference/moderation/overview |
| Review queue Deny button with 6 second Undo | task | moderator | denied then sent, denied then undone | /reference/moderation/overview |
| Moderation tab of the profile dialog | screen | moderator | empty, filled with Show older, role cannot see it | /reference/moderation/overview |
| Moderation history cannot be seen message | error | moderator | role cannot read the history | /reference/moderation/overview |
| Review queue could not load message | error | moderator | load failed or role cannot see the queue | /reference/moderation/overview |
| AutoMod page (four built-in filters) | screen | moderator | loaded, load error, saved, save error | /reference/moderation/automod-and-chat-filters |
| AutoMod Links filter (Delete links, Allowed domains) | setting | moderator | on or off | /reference/moderation/automod-and-chat-filters |
| AutoMod Capital letters filter (Delete shouting, percent) | setting | moderator | on or off, number out of range | /reference/moderation/automod-and-chat-filters |
| AutoMod Banned phrases filter (list) | setting | moderator | on or off, empty or filled list | /reference/moderation/automod-and-chat-filters |
| AutoMod Emote spam filter (most emotes) | setting | moderator | on or off | /reference/moderation/automod-and-chat-filters |
| Twitch AutoMod levels (Off, level 1 to 4, per category) | setting | moderator | each of eight categories off or level 1 to 4, load error | /reference/moderation/automod-and-chat-filters |
| Save Twitch levels button | task | moderator | saved, save error | /reference/moderation/automod-and-chat-filters |
| Chat filters list (Your filters) | screen | moderator | empty, filled with match counts, load error | /reference/moderation/automod-and-chat-filters |
| New chat filter and Edit chat filter dialog | task | moderator | new, editing, problems shown, saved, save error | /reference/moderation/automod-and-chat-filters |
| Chat filter fields (name, type, pattern, terms, allowed domains, bare domains, action, timeout, exempt role, case sensitive) | setting | moderator | pattern, blocked terms or links type; five actions | /reference/moderation/automod-and-chat-filters |
| Chat filter Filter is on switch | setting | moderator | on or off | /reference/moderation/automod-and-chat-filters |
| Try it test box for a chat filter | task | moderator | would match, would not match, pattern not valid, test error | /reference/moderation/automod-and-chat-filters |
| Remove filter confirm | task | moderator | confirmed, delete error | /reference/moderation/automod-and-chat-filters |
| Banned people page | screen | moderator | empty, filled, load error | /reference/moderation/bans-and-blocked-terms |
| Unban button | task | moderator | shown or hidden by role, unbanned, unban error | /reference/moderation/bans-and-blocked-terms |
| Blocked terms page | screen | lead moderator | empty, filled, load error, add panel hidden by role | /reference/moderation/bans-and-blocked-terms |
| Block a word or phrase | task | lead moderator | blocked, block error | /reference/moderation/bans-and-blocked-terms |
| Unblock button | task | lead moderator | unblocked, unblock error | /reference/moderation/bans-and-blocked-terms |
| !allow massban command | command | moderator | held mass ban runs now | /reference/moderation/bans-and-blocked-terms |
| !disallow massban command | command | moderator | held mass ban stopped | /reference/moderation/bans-and-blocked-terms |
| Linked channels page (Federation settings page) | screen | moderator | open for lead moderator and up, load error | /reference/moderation/linked-channels |
| Sharing with other bots (Accept and Share per kind of data) | setting | moderator | accept on or off, share on or off, four kinds | /reference/moderation/linked-channels |
| Choices for one bot (Turn this choice off) | setting | moderator | shown only when a choice exists, turned off | /reference/moderation/linked-channels |
| Network blocks (Ban blocked actors here) | setting | broadcaster | on or off, load error | /reference/moderation/linked-channels |
| Moderator mass bans (Accept moderator mass bans) | setting | broadcaster | on or off, load error | /reference/moderation/linked-channels |
| Viewer reports page | screen | moderator | open, escalated, dismissed, each empty or filled, load error | /reference/moderation/reports |
| Show reports that are filter | setting | moderator | open, escalated, dismissed | /reference/moderation/reports |
| Dismiss report button | task | moderator | dismissed, change error | /reference/moderation/reports |
| Escalate report button | task | moderator | escalated, change error | /reference/moderation/reports |
| Report refused messages (reason empty, reason too long, no chatter named) | error | admin | refused or accepted | /reference/moderation/reports |
| Shoutouts settings page | screen | broadcaster | loaded, load error, saved | /reference/moderation/shoutouts |
| Shout out a known streamer automatically | setting | broadcaster | on or off (off by default) | /reference/moderation/shoutouts |
| Shoutout message | setting | broadcaster | custom text or default, saved | /reference/moderation/shoutouts |
| Use the default shoutout message button | task | broadcaster | custom text cleared to default | /reference/moderation/shoutouts |
| !so shoutout command | command | moderator | user-made command, shoutout sent or rate limited | /reference/moderation/shoutouts |
| Own shoutout line for one streamer (profile Data tab) | setting | moderator | no line, line set, role cannot change it | /reference/moderation/shoutouts |
| Shout out button on a profile | task | moderator | shouted out or failed | /reference/moderation/shoutouts |
| Suggested shoutouts on Home (Shoutout, Not now) | task | moderator | empty and hidden offline, filled, sent, did not go out | /reference/moderation/shoutouts |
| Shoutout message the bot sends in chat | message | viewer | per-streamer line, pipeline step message or channel message | /reference/moderation/shoutouts |
| Shoutout rate limits | setting | moderator | within limit or limited | /reference/moderation/shoutouts |
| Spam defense settings page | screen | moderator | loaded, load error, unsaved changes, saving, saved, save error | /reference/moderation/spam-defense |
| Spam defense Master group (enabled, watch only) | setting | broadcaster | enabled or off, watch only on or off | /reference/moderation/spam-defense |
| Spam defense Trust group (established thresholds, watch hours) | setting | broadcaster | default or changed | /reference/moderation/spam-defense |
| Spam defense New accounts and new followers group | setting | broadcaster | off (0) or set, gated messages kept or removed | /reference/moderation/spam-defense |
| Spam defense Message content group | setting | broadcaster | default or changed, other alphabets restricted or free | /reference/moderation/spam-defense |
| Spam defense Coordinated campaigns group | setting | broadcaster | default or changed, pair out of order shown under the setting | /reference/moderation/spam-defense |
| Spam defense Sudden activity group | setting | broadcaster | default or changed | /reference/moderation/spam-defense |
| Spam defense Raid lockdown group (marked Not yet active) | setting | broadcaster | not yet active | /reference/moderation/spam-defense |
| Spam defense Shared spam list group | setting | broadcaster | default or changed | /reference/moderation/spam-defense |
| Trust policy page | screen | moderator | loaded, load error, saving, saved, save error | /reference/moderation/trust-and-escalation |
| Trust policy Score weights (four weights must total 1) | setting | broadcaster | total 1 or not 1 | /reference/moderation/trust-and-escalation |
| Trust policy Growth speed group | setting | broadcaster | default or changed | /reference/moderation/trust-and-escalation |
| Trust policy Boosts and multipliers group | setting | broadcaster | reputation boost on or off, default or changed | /reference/moderation/trust-and-escalation |
| Trust policy Penalties group (skip, timeout, ban) | setting | broadcaster | default or changed | /reference/moderation/trust-and-escalation |
| Trust policy Tier ceilings group | setting | broadcaster | ascending or error | /reference/moderation/trust-and-escalation |
| Trust policy Heat group | setting | broadcaster | default or changed | /reference/moderation/trust-and-escalation |
| Trust policy validation messages | error | broadcaster | valid or rejected with a reason | /reference/moderation/trust-and-escalation |
| Escalation page | screen | moderator | loaded, load error, saved, save error | /reference/moderation/trust-and-escalation |
| Escalation Policy (ladder on, count AutoMod holds, offense window, default timeout) | setting | broadcaster | ladder on or off, count on or off | /reference/moderation/trust-and-escalation |
| Escalation Ladder steps (offense number, warn timeout or ban, timeout length) | setting | broadcaster | steps added or removed, steps ascending or error | /reference/moderation/trust-and-escalation |
| Escalation validation messages | error | broadcaster | valid or rejected with a reason | /reference/moderation/trust-and-escalation |
| Economy page (Currency, Balances, Earning rules, Savings jars, Store, Leaderboards tabs) | screen | broadcaster | six tabs, role cannot read | /reference/economy/currency-and-balances |
| Channel currency (on, name, plural, starting balance, highest balance, decimals, icon) | setting | broadcaster | currency on or off, name missing error, load error | /reference/economy/currency-and-balances |
| Earning rules list | screen | broadcaster | empty, filled, load error | /reference/economy/currency-and-balances |
| Earning rule per source (chat, watch time, follow, sub, gift sub, cheer, raid, supporter) | setting | broadcaster | rule on or off, deleted | /reference/economy/currency-and-balances |
| New earning rule and Edit earning rule dialog | task | broadcaster | new, editing, every source already has a rule, pick a source error | /reference/economy/currency-and-balances |
| Delete earning rule confirm | task | broadcaster | confirmed or canceled | /reference/economy/currency-and-balances |
| Viewer balances list with search | screen | broadcaster | empty, filled, load error | /reference/economy/currency-and-balances |
| Adjust a viewer balance dialog | task | broadcaster | adjusted, invalid amount or reason | /reference/economy/currency-and-balances |
| Freeze a viewer wallet | task | broadcaster | frozen or active | /reference/economy/currency-and-balances |
| Savings jars list | screen | broadcaster | empty, filled, open or closed, load error | /reference/economy/currency-and-balances |
| New savings jar dialog | task | broadcaster | new, name missing error | /reference/economy/currency-and-balances |
| Open or close a jar switch | setting | broadcaster | open or closed | /reference/economy/currency-and-balances |
| Delete jar confirm | task | broadcaster | confirmed or canceled | /reference/economy/currency-and-balances |
| Invite a channel to a jar dialog | task | broadcaster | sent, channel missing error | /reference/economy/currency-and-balances |
| Jar deposits and withdrawals not available in the dashboard message | message | broadcaster | not yet available | /reference/economy/currency-and-balances |
| Store items tab | screen | broadcaster | empty, filled, load error | /reference/economy/store |
| New store item and Edit store item dialog | task | broadcaster | new, editing, name or effect kind missing error | /reference/economy/store |
| Store item fields (cost, who can buy, command or pipeline, cooldown, stock, per viewer per stream, sort order, icon) | setting | broadcaster | stock limited or unlimited, cooldown per viewer or shared | /reference/economy/store |
| Store item on or off switch | setting | broadcaster | on or off | /reference/economy/store |
| Delete store item confirm | task | broadcaster | confirmed or canceled | /reference/economy/store |
| Store purchase checks (item exists, role, cooldown, stock, per stream limit, balance) | task | viewer | purchase succeeds or first failing check stops it | /reference/economy/store |
| Leaderboards tab | screen | broadcaster | empty, filled, private, load error | /reference/economy/leaderboards-and-games |
| New leaderboard and Edit leaderboard dialog (ranks by, period, over, places shown, jar, visible to viewers) | task | broadcaster | whole channel or one jar, public or private, jar missing error | /reference/economy/leaderboards-and-games |
| Delete leaderboard confirm | task | broadcaster | confirmed or canceled | /reference/economy/leaderboards-and-games |
| !leaderboard command | command | viewer | ranked answer, no leaderboard answer, nobody ranked answer | /reference/economy/leaderboards-and-games |
| Leaderboard answers in chat (no leaderboard, nobody ranked) | message | viewer | no leaderboard, nobody ranked, ranked | /reference/economy/leaderboards-and-games |
| Games page: Running now, Start a game, Mini-games and Finished games | screen | broadcaster | idle, lobby, running, finished, canceled, load error | /reference/economy/leaderboards-and-games |
| Viewer pages for leaderboards, points and store, games (Coming soon today) | screen | viewer | coming soon | /reference/community/viewer-pages |
| !coinflip command | command | viewer | bet accepted, win or lose, wallet too small | /reference/commands/built-in-commands |
| !dice command | command | viewer | bet accepted, win or lose, wallet too small | /reference/commands/built-in-commands |
| !slots command | command | viewer | bet accepted, win or lose, wallet too small | /reference/commands/built-in-commands |
| Giveaways page | screen | broadcaster | empty, filled, load error, draft open closed drawn archived | /reference/economy/giveaways |
| New giveaway and Edit giveaway dialog (title, keyword, winners, entering, who may enter, tickets, drawing, prize) | task | broadcaster | new, editing, problems shown | /reference/economy/giveaways |
| Giveaway entering (keyword or active viewers, entry cost, entries per viewer) | setting | broadcaster | keyword mode or active viewers mode, free or paid | /reference/economy/giveaways |
| Giveaway who may enter (subscribers only, leave out moderators, 18 or older, standing, watch minutes, account age) | setting | broadcaster | each rule on or off | /reference/economy/giveaways |
| Giveaway tickets per viewer (tier 1, 2, 3 sub, VIP) | setting | broadcaster | default or weighted | /reference/economy/giveaways |
| Giveaway drawing (claim window, close entries at) | setting | broadcaster | claim window set or empty, close time set or empty | /reference/economy/giveaways |
| Giveaway prize (announcement, currency, pipeline, code pool) | setting | broadcaster | four prize modes, pay from the pot on or off | /reference/economy/giveaways |
| Open for entries, Close entries, Draw winners buttons | task | broadcaster | draft to open to closed to drawn | /reference/economy/giveaways |
| Draw a new winner button | task | broadcaster | redrawn, nobody left to win | /reference/economy/giveaways |
| Entries of giveaway panel | screen | broadcaster | empty, filled with tickets, load error | /reference/economy/giveaways |
| Winners of giveaway panel | screen | broadcaster | empty, filled, pending delivered claimed forfeited failed | /reference/economy/giveaways |
| Delete giveaway confirm | task | broadcaster | confirmed or canceled | /reference/economy/giveaways |
| Code pools list and New code pool dialog | task | broadcaster | empty, filled, name missing error, load error | /reference/economy/giveaways |
| Delete code pool confirm | task | broadcaster | deleted, refused while it backs an active giveaway | /reference/economy/giveaways |
| !enter giveaway keyword | command | viewer | entered or refused, no chat reply | /reference/economy/giveaways |
| Giveaway winner announcement in chat | message | viewer | announced | /reference/economy/giveaways |
| Polls and predictions page | screen | broadcaster | nothing running, poll running, prediction open, locked, resolved, history empty or filled, load error | /reference/economy/polls-and-predictions |
| Start a poll | task | broadcaster | started, refused by Twitch | /reference/economy/polls-and-predictions |
| End poll button | task | broadcaster | ended early | /reference/economy/polls-and-predictions |
| Start a prediction | task | broadcaster | started, refused by Twitch | /reference/economy/polls-and-predictions |
| Lock predictions and Pick the winner buttons | task | broadcaster | open, locked, resolved | /reference/economy/polls-and-predictions |
| Cancel prediction confirm | task | broadcaster | canceled with points returned | /reference/economy/polls-and-predictions |
| History filter (All, Twitch polls, Predictions, Chat polls) | setting | broadcaster | one of four filters | /reference/economy/polls-and-predictions |
| History card for a past poll or prediction | screen | broadcaster | completed, terminated, canceled, resolved, archived, no result recorded | /reference/economy/polls-and-predictions |
| Start a poll or prediction from Home | task | broadcaster | started from the Home quick actions | /reference/economy/polls-and-predictions |
| Settings sidebar (Settings landing page opens Readability) | screen | broadcaster | six groups, entries hidden by role | /reference/settings/readability |
| Readability page | screen | viewer | saved on this device | /reference/settings/readability |
| Readability preset (Default, Dyslexia-friendly, High contrast) | setting | viewer | one preset chosen | /reference/settings/readability |
| Readability font (Inter, Legible, Lexend) | setting | viewer | one of three fonts | /reference/settings/readability |
| Readability text size | setting | viewer | size in px, default or changed | /reference/settings/readability |
| Readability line spacing | setting | viewer | normal, wide, wider | /reference/settings/readability |
| Readability letter and word spacing | setting | viewer | normal or wide | /reference/settings/readability |
| Readability high contrast | setting | viewer | on or off | /reference/settings/readability |
| Readability reduce motion | setting | viewer | on or off | /reference/settings/readability |
| Readability size of controls | setting | viewer | compact, comfortable, touch | /reference/settings/readability |
| Commands and language page (bot basics) | screen | broadcaster | loaded, load error, saved, save error, discard changes | /reference/settings/bot-basics-and-personality |
| Command prefix | setting | broadcaster | default or changed | /reference/settings/bot-basics-and-personality |
| Bot line marker | setting | broadcaster | default or changed | /reference/settings/bot-basics-and-personality |
| Language | setting | broadcaster | one language chosen | /reference/settings/bot-basics-and-personality |
| Timezone | setting | broadcaster | one timezone chosen | /reference/settings/bot-basics-and-personality |
| Join chat automatically | setting | broadcaster | on or off | /reference/settings/bot-basics-and-personality |
| Keep commands and rewards on while offline | setting | broadcaster | on or off | /reference/settings/bot-basics-and-personality |
| Viewer activity levels (Casual, Regular, Veteran from) | setting | broadcaster | whole numbers rising, range error, order error | /reference/settings/bot-basics-and-personality |
| Reply voice page (Informative, Friendly, Sassy, Hype, Chill) | setting | broadcaster | one tone chosen, load error | /reference/settings/bot-basics-and-personality |
| Greetings and streaks page (first time, back after a break, watch streaks) | setting | broadcaster | each moment on or off, invalid numbers shown in red, saved, load error | /reference/settings/bot-basics-and-personality |
| Time between greetings | setting | broadcaster | default or changed | /reference/settings/bot-basics-and-personality |
| Streak milestones (add, remove) | setting | broadcaster | none (every stream) or list | /reference/settings/bot-basics-and-personality |
| Reset to defaults button on Greetings and streaks | task | broadcaster | defaults restored | /reference/settings/bot-basics-and-personality |
| Features page | screen | broadcaster | groups Chat, Automation, More features; empty, load error | /reference/settings/features |
| Feature switch (7TV, BetterTTV, FrankerFaceZ, Link Previews, Chat HTML Fragments, Viewer Templates, Custom Code) | setting | broadcaster | on or off, higher plan needed, missing Twitch permissions shown | /reference/settings/features |
| Permissions page (Team, Actions, Per person tabs) | screen | broadcaster | three tabs, role cannot open | /reference/settings/permissions |
| Your team list and Add to team | task | broadcaster | empty, filled, added, load error | /reference/settings/permissions |
| Role of a team member and Remove from team | setting | broadcaster | one role per person, removed | /reference/settings/permissions |
| Lowest role for an action (areas, search, per action role) | setting | broadcaster | default or changed, protected, no match for search | /reference/settings/permissions |
| Back to the default for an action | task | broadcaster | default restored | /reference/settings/permissions |
| Personal capabilities (OBS control, Bot manager) | setting | broadcaster | none given, given to a person, load error | /reference/settings/permissions |
| Give capability confirm and Take the capability | task | broadcaster | given or taken back | /reference/settings/permissions |
| !permit command | command | moderator | role or right given for a time | /reference/commands/built-in-commands |
| !unpermit command | command | moderator | role or right taken back | /reference/commands/built-in-commands |
| !whitelist command | command | broadcaster | standing given | /reference/commands/built-in-commands |
| !unwhitelist command | command | broadcaster | standing taken back | /reference/commands/built-in-commands |
| White-label bot page | screen | broadcaster | shared bot or connected, load error | /reference/settings/white-label-bot |
| Connect your own bot (device code or browser sign-in) | task | broadcaster | starting, waiting for approval, connected, code expired, denied on Twitch, sign-in error | /reference/settings/white-label-bot |
| Use another account (Change account) | task | broadcaster | connected account replaced | /reference/settings/white-label-bot |
| Go back to the shared bot (Disconnect) | task | broadcaster | confirmed, disconnect failed | /reference/settings/white-label-bot |
| Billing page | screen | broadcaster | plan card, plans, invite code, founders badge, invoices | /reference/settings/billing |
| Your plan card (status Active, Trial, Payment overdue, Canceled, Not finished) | screen | broadcaster | each status, plan from an invite code, set to end, load error | /reference/settings/billing |
| Manage payment button | task | broadcaster | payment page opens or fails | /reference/settings/billing |
| Cancel plan dialog (cancel right away, reason) | task | broadcaster | at period end, right away, cancel failed | /reference/settings/billing |
| Keep my plan button | task | broadcaster | plan kept, keep failed | /reference/settings/billing |
| Plans list (Choose plan, Switch to this plan, switch at end of period) | task | broadcaster | free, current plan, other plans, checkout or change failed, empty | /reference/settings/billing |
| Invite code (Check code, Use code) | task | broadcaster | valid, not valid, used, failed | /reference/settings/billing |
| Founders badge card | screen | broadcaster | active, no longer active, none | /reference/settings/billing |
| Invoices list with paging | screen | broadcaster | empty, filled, load error | /reference/settings/billing |
| Billing restriction notice (no earning money with NomNomzBot) | message | broadcaster | always shown | /reference/settings/billing |
| Resource limits page | screen | broadcaster | plan, limits, usage this period; load errors | /reference/settings/resource-limits |
| Plan card on Resource limits (tier, custom bot name, priority support, Change plan) | screen | broadcaster | included or not included, load error | /reference/settings/resource-limits |
| Limit meters (storage, monthly allowance, per message, abuse protection) | screen | broadcaster | used of limit, no limit, not included, no limited resources | /reference/settings/resource-limits |
| Usage this period | screen | broadcaster | empty, filled, load error | /reference/settings/resource-limits |
| Event journal page (What happened tab) | screen | broadcaster | empty, filled with paging, load error | /reference/settings/event-journal |
| Journal filters (event, source, from date, to date, show bot activity, clear filters) | setting | broadcaster | filters set or cleared, bot activity hidden or shown | /reference/settings/event-journal |
| Backup and rebuild tab: save the journal to a file | task | broadcaster | saved | /reference/settings/event-journal |
| Backup and rebuild tab: load a saved journal | task | broadcaster | loaded or refused | /reference/settings/event-journal |
| Backup and rebuild tab: rebuild the pages built from the journal | task | broadcaster | rebuilt | /reference/settings/event-journal |
| Backup and rebuild tab: copy history from the old bot | task | broadcaster | imported | /reference/settings/event-journal |
| Your data and privacy page | screen | viewer | consents, requests, export, opt out, erase | /reference/settings/your-data-and-privacy |
| Download my data | task | viewer | saved with record count and size, failed | /reference/settings/your-data-and-privacy |
| Your consents list (terms, 18 or older, pronouns, leaderboards, marketing) | setting | viewer | none yet, given, withdrawn, load error | /reference/settings/your-data-and-privacy |
| Opt out of extra processing | task | viewer | confirmed, saved | /reference/settings/your-data-and-privacy |
| Erase my data confirm (lists what is destroyed) | task | viewer | holds nothing to destroy, requested | /reference/settings/your-data-and-privacy |
| Your requests list (erase, download, opt out, consent change) | screen | viewer | none yet, waiting, running, done, failed, load error | /reference/settings/your-data-and-privacy |
| !mydata command | command | viewer | copy of own data asked for | /reference/commands/built-in-commands |
| !forgetme command | command | viewer | removal after a second confirm | /reference/commands/built-in-commands |
| !gdpr command (status, forget, export) | command | viewer | status, forget, export | /reference/commands/built-in-commands |
| Channel management page | screen | broadcaster | bot in channel, bot not in channel, channel deleted, load error | /reference/settings/channel-management |
| Let the bot join and Make the bot leave | task | broadcaster | in or out, leave confirm | /reference/settings/channel-management |
| Reset the channel settings (type the channel name) | task | broadcaster | confirmed, no settings stored | /reference/settings/channel-management |
| Delete this channel (type the channel name, lists what depends on it) | task | broadcaster | confirmed, restorable for a number of days | /reference/settings/channel-management |
| Bring the channel back | task | broadcaster | restored, restore window ended | /reference/settings/channel-management |
| First-run setup page (Twitch app, Bot account, Spotify, Discord, YouTube steps) | screen | admin | loading, not reachable, step set or not set, finished | /reference/self-hosting/first-run-setup |
| Setup step Twitch app (credentials, use the shared NomNomzBot app) | setting | admin | credentials saved, shared app, save failed | /reference/self-hosting/first-run-setup |
| Setup step Bot account (Authorize the bot account) | task | admin | waiting for approval, connected, failed to start | /reference/self-hosting/first-run-setup |
| Setup steps Spotify, Discord and YouTube (optional keys, Skip) | setting | admin | set, not set, skipped | /reference/self-hosting/first-run-setup |
| Finish setup button | task | admin | finished, failed | /reference/self-hosting/first-run-setup |
| Event feed check on setup (Grant the missing permissions, Repair the event connections, Check again) | task | admin | events reach the bot, missing permissions, broken connections, no subscriptions, not signed in yet, unknown | /reference/self-hosting/first-run-setup |
| Setup page cannot reach the bot message | error | admin | bot does not answer | /reference/self-hosting/first-run-setup |
| Install the lite setup with Docker | task | admin | running, dashboard does not open | /reference/self-hosting/install-with-docker |
| Install the full setup with Docker | task | admin | running, dashboard does not open | /reference/self-hosting/install-with-docker |
| Back up and restore the lite data | task | admin | backup made, restored | /reference/self-hosting/install-with-docker |
| Back up the full setup | task | admin | backup made | /reference/self-hosting/install-with-docker |
| Release channel (stable, beta, nightly through API_IMAGE) | setting | admin | stable, beta or nightly | /reference/self-hosting/updates |
| Update the lite setup | task | admin | updated, failed update recovered | /reference/self-hosting/updates |
| Update the full setup (switchover script) | task | admin | updated, failed update recovered | /reference/self-hosting/updates |
| Updates card on the admin System page | screen | admin | new version, newest stable, cannot compare, GitHub did not answer | /reference/self-hosting/updates |
| Scripts page (list, search, tabs All/On/Off/Failed, count) | screen | moderator | custom code off (reason shown), empty list, filled list, no search match, list failed to load | /reference/code/scripts |
| Scripts page: Base plan notice ("Code scripts need the Base plan") | message | broadcaster | plan allows scripts or blocked | /reference/code/scripts |
| New script dialog (Name, Create script) | task | moderator | name empty or filled, created, create failed | /reference/code/scripts |
| Script card (Run status, Description, Runs from, What it reads, What it can do, Version, Language, limits footer) | screen | moderator | never run, last run worked, last run failed, nothing runs it, script missing | /reference/code/scripts |
| Script on or off switch (list row and card) | setting | moderator | on or off | /reference/code/scripts |
| Edit code (opens the code editor: Explorer, Problems, SDK reference, Save & Compile) | task | moderator | editor opening, opened, SDK types not loaded, build worked, build failed | /reference/code/scripts |
| History inside the editor (Publish a saved version) | task | moderator | live version, earlier valid version, invalid version | /reference/code/scripts |
| Delete version (saved version, not the live one) | task | moderator | live version refused, older version deleted | /reference/code/scripts |
| Test card (Trigger, event to test with, Run test, Timeline) | task | moderator | no event, event chosen, worked, failed, too many tests | /reference/code/scripts |
| Test timeline entries (Started, Chat, Effect, Console, Error) | message | moderator | dry run only, nothing reaches chat | /reference/code/scripts |
| The run failed dialog (error, file line column, Steps, What it did before it stopped, Log) | error | moderator | failed test run, closed | /reference/code/scripts |
| This session runs panel (Runs button, filter All/Failed/Tests) | screen | moderator | empty, filled, no match, cleared on reload | /reference/code/scripts |
| Duplicate script ("name copy") | task | moderator | copied or copy failed | /reference/code/scripts |
| Delete script dialog (what else uses it) | task | moderator | nothing else uses it, used by pipelines, deleted | /reference/code/scripts |
| Back to the pipeline link | task | moderator | opened from a pipeline step or not | /reference/code/scripts |
| Custom Code feature switch (Features page) | setting | moderator | on or off | /reference/code/scripts |
| Script build and validation errors (Line N: message) | error | moderator | valid, build failed | /reference/code/scripts |
| Code scripts API (list, get, create, save project, versions, publish, test run, test triggers, enabled, blast radius, delete) | api | moderator | script exists or missing, enabled or disabled | /reference/code/scripts |
| SDK types file endpoint (GET sdk/types.d.ts) | api | moderator | script context or widget context, loaded or failed | /reference/code/sdk-contracts |
| SDK event catalog endpoint (GET sdk/event-catalog) | api | moderator | catalog returned | /reference/code/sdk-contracts |
| Run script pipeline step (run_code action) | task | moderator | script on or off, script missing, run worked or failed | /reference/code/how-a-script-runs |
| Script run limits (8 s, 64 calls, 64 MB) | setting | moderator | within limit or stopped | /reference/code/how-a-script-runs |
| Script run result (output, variables, stop pipeline back to the pipeline) | message | moderator | worked, failed, pipeline stopped | /reference/code/how-a-script-runs |
| Script run errors (limit exceeded, grant denied, script error) | error | moderator | run stopped or run continues | /reference/code/how-a-script-runs |
| Script grants (deny by default, declared capabilities) | setting | moderator | granted or denied, feature gate on or off | /reference/code/sdk-script-basics |
| bot facade: args, getVar, setVar, send, stopPipeline, call | api | moderator | variable set or missing, grant allowed or denied | /reference/code/sdk-script-basics |
| console: log, info, warn, error (test run panel only) | api | moderator | test run shows the line, live run hides it | /reference/code/sdk-script-basics |
| nnz.lastError and the error codes (invalid_argument, not_found, refused, rate_limited, limit_exceeded, upstream_failed) | error | moderator | null or set after a failed host call | /reference/code/sdk-script-basics |
| nnz.units.convert | api | moderator | units match or NaN | /reference/code/sdk-script-basics |
| nnz.time: now, parse, format, add, diff, sleep | api | moderator | valid date or NaN, sleep clamped to 5 s | /reference/code/sdk-script-basics |
| nnz.math: clamp, round, lerp, sum, avg, min, max, randomInt | api | moderator | empty list or filled, range valid or NaN | /reference/code/sdk-script-basics |
| nnz.str: padStart, padEnd, trim, upper, lower, title, truncate, slugify, format | api | moderator | value present or name left as is | /reference/code/sdk-script-basics |
| nnz.json: parse, stringify | api | moderator | valid JSON or null | /reference/code/sdk-script-basics |
| nnz.random: int, pick, shuffle, uuid | api | moderator | list empty (run stops) or filled | /reference/code/sdk-script-basics |
| nnz.template.render and NomNomz.template.render | api | moderator | template valid, empty or over 4096 characters refused | /reference/code/sdk-widgets-actions-templates |
| nnz.api.user: get, lookup | api | moderator | user found or null, grant allowed or denied | /reference/code/sdk-data-and-storage |
| nnz.api.economy.balance | api | moderator | viewer found or 0, grant allowed or denied | /reference/code/sdk-data-and-storage |
| nnz.api.stats: viewer, stream (stream metrics by key) | api | moderator | viewer seen or zeros, stream live or none, unknown key null | /reference/code/sdk-data-and-storage |
| nnz.api.reward: get, update | api | moderator | reward found or null, bot can manage it or not | /reference/code/sdk-data-and-storage |
| nnz.api.storage: get, set, delete, list | api | moderator | key stored or null, over 64 KB or 200 keys refused | /reference/code/sdk-data-and-storage |
| nnz.api.http.fetch | api | moderator | https and allowed, or blocked and null | /reference/code/sdk-data-and-storage |
| nnz.api.schedule.pipeline | api | moderator | pipeline found and scheduled, or refused | /reference/code/sdk-data-and-storage |
| nnz.api.chat: send, reply | api | moderator | chat message present (threaded reply) or plain line | /reference/code/sdk-chat-music-voice |
| Chat values a command script can read (command variable keys) | api | moderator | trigger sets the key or not | /reference/code/sdk-chat-music-voice |
| nnz.api.music: nowPlaying, queue, playNow | api | moderator | track playing or null, queued or refused | /reference/code/sdk-chat-music-voice |
| nnz.api.tts: speak, speakSequence, getVoice, setVoice, listVoices | api | moderator | spoken or refused, viewer voice set or channel default, test run speaks nothing | /reference/code/sdk-chat-music-voice |
| nnz.api.widget.emit | api | moderator | widget on and open in a browser source, or false | /reference/code/sdk-widgets-actions-templates |
| nnz.api.actions.invoke (grant per action type) | api | moderator | action ran, action failed, type not granted | /reference/code/sdk-widgets-actions-templates |
| Pipeline action parameters (every action type in NnzActionParams, for example chat, moderation, music, OBS, VTube Studio, TTS, giveaway, counter, flow control) | api | moderator | required parameter given or missing, optional params left out | /reference/code/sdk-widgets-actions-templates |
| Template helper names (TemplateHelperName, NnzTemplateHelperMap) | api | moderator | helper known or unknown | /reference/code/sdk-widgets-actions-templates |
| Widget SDK global NomNomz: on, off, onAny, onSettings, settings, widget.id, widget.name, reportError | api | broadcaster | live event, replayed event, test fire, settings changed | /reference/code/sdk-widgets-actions-templates |
| NomNomz.actions: invoke, claim | api | broadcaster | success, refused (AUTH_REQUIRED, FORBIDDEN, NOT_FOUND, VALIDATION_FAILED, RATE_LIMITED), claim won or lost, overlay offline | /reference/code/sdk-widgets-actions-templates |
| NomNomz.data: nowPlaying, queue, storage, streamStats | api | broadcaster | nothing playing or track, key stored or null | /reference/code/sdk-widgets-actions-templates |
| NomNomz.spotify.playbackToken | api | broadcaster | token, blocked or error | /reference/code/sdk-widgets-actions-templates |
| NomNomz.reportYouTubePlayerState and reportMediaSharePlayerState | api | broadcaster | accepted or overlay offline | /reference/code/sdk-widgets-actions-templates |
| Widget page globals WIDGET_SETTINGS and WIDGET_EVENT_SUBSCRIPTIONS | api | broadcaster | settings set or default, event subscribed or not | /reference/code/sdk-widgets-actions-templates |
| Widget events (follow, subscription, resub, gift, cheer, raid, ban and timeout, chat, hype train, poll, prediction, reward_redeemed, moderator and VIP, shoutout, music, YouTube, tts_speak, stage_effect, goal, count, supporter, voice_trigger, custom.*) | api | broadcaster | subscribed or not, live or replay or test | /reference/code/sdk-widgets-actions-templates |
| Payload fields and nested objects of every event (NnzEventMap) | api | moderator | field present or optional absent | /reference/code/sdk-contracts |
| Script call and result types (NnzApi interfaces: NnzApiUser, NnzApiTrack, NnzApiTtsResult, NnzApiReward, NnzApiViewerStats and others) | api | moderator | value present or null | /reference/code/sdk-contracts |
| Widget call and result types (NnzOverlaySdk, NnzOverlayData, NnzActionResult, NnzEventMeta) | api | broadcaster | value present or null | /reference/code/sdk-contracts |
| Stream metric types (NnzStreamMetricKey, NnzStreamStatsOptions, NnzStreamStats) | api | moderator | metric present or absent | /reference/code/sdk-contracts |
| Automation tokens (create, list, rotate, delete; scopes read, invoke, chat, events) | api | broadcaster | token active, rotated, deleted, expired | /reference/code/automation-api |
| Automation REST calls (info, pipelines, commands, invoke, chat, refresh) | api | broadcaster | scope granted or denied, target allowed or not | /reference/code/automation-api |
| Automation music and OBS reads (now-playing, devices, playlists, scenes, inputs, scene-items, transitions, filters, state) | api | broadcaster | OBS connected or not, music playing or not | /reference/code/automation-api |
| Automation WebSocket stream (/automation/v1/stream) | api | broadcaster | connected, token without events scope refused, closed | /reference/code/automation-api |
| Automation event catalog and event payloads | api | broadcaster | event subscribed or not | /reference/code/automation-api |
| Device pairing (pair codes, device init and poll, approve, pair with a code) | api | broadcaster | code issued, waiting, approved, expired | /reference/code/automation-api |
| Outbound webhooks (endpoints, deliveries, retry, rotate secret, re-enable, test, signature) | api | broadcaster | endpoint enabled or stopped, delivery succeeded or failed | /reference/code/webhooks-and-events |
| Inbound webhooks (endpoints, rotate token, receive at webhooks/in/{token}) | api | broadcaster | endpoint on or off, signature valid or not, duplicate dropped | /reference/code/webhooks-and-events |
| Custom event-feed sources (data sources, test, test fetch, presets) | api | broadcaster | poll or socket, source on or off | /reference/code/webhooks-and-events |
| Dashboard SignalR hub (/hubs/dashboard: join channel, subscribe, chat, trigger action) | api | moderator | joined, left, subscribed to event classes | /reference/code/webhooks-and-events |
| Overlay SignalR hub (/hubs/overlay: join widget, subscribe, invoke action, claim once) | api | broadcaster | widget joined or offline | /reference/code/webhooks-and-events |
| Admin SignalR hub (/hubs/admin) | api | admin | connected or refused | excluded: hub for platform admin tooling, no user-facing script or SDK content to document |
| OBS relay SignalR hub (/hubs/obs: ack command, forward OBS and VTube Studio events) | api | broadcaster | relay connected or not | excluded: carries the app's own OBS relay traffic, not a surface for user code |
| Choose where your code runs (script, widget, external tool, application, read-aloud page) | screen | broadcaster | custom code on or off, path chosen | /reference/code/overview |
| Worked example: chat command script with a count in storage | task | moderator | script created, test run worked, live run from chat, a call failed | /reference/code/worked-example |
| Component catalog page (all tabs: charts, code editor, connections, dialogs, editors, feedback, filters, flows, guide, layouts, lists, pages, panel states, rows, stats, template) | screen | developer | per tab demo states | excluded: dev-only route dashboard-catalog, not in a production build |
| Catalog frame width control and nnz.catalog.* filter keys | setting | developer | desktop, narrow, phone; all, on, off; day to year | excluded: dev-only route dashboard-catalog, not in a production build |
| Catalog code editor save to the first real script | api | developer | saved, compile error, session missing | excluded: dev-only route dashboard-catalog, not in a production build |
| Catalog script-list error message | error | developer | shown via errorText | excluded: dev-only route dashboard-catalog, not in a production build |
| Act-as banner and Exit button | screen | platform admin | hidden, acting, leaving, error | /reference/self-hosting/admin-console |
| Analytics YouTube tab | screen | broadcaster | loading, empty, error, blocked, ready, no revenue | /reference/community/analytics |
| Analytics YouTube blocked message with settings link | message | broadcaster | not_connected, not_allowed | /reference/integrations/youtube |
| Chat native notice line (announcement, moderation, held, notice) | screen | broadcaster, moderator | color variants, held status, timestamps 12/24/off | /reference/community/chat-page |
| Chat shared-chat source avatar | screen | broadcaster, moderator | image, initial fallback | /reference/community/chat-page |
| Chat reply thread popup | screen | broadcaster, moderator | loading, error, empty, ready | /reference/community/chat-page |
| Chat box sent history (Up and Down keys) | command | broadcaster, moderator | none, walking, back on draft | /reference/community/chat-page |
| Embedded Twitch stream player | screen | broadcaster, moderator | live muted, offline label | /reference/community/stream-page |
| Event response Test button and dialog | command | broadcaster, moderator | hidden without permission, running, error, result | /reference/automation/event-responses |
| Event test result sections and economy alert | message | broadcaster, moderator | warnings, real economy steps, refused speech | /reference/automation/event-responses |
| Music output device picker | setting | broadcaster | hidden, choose, switching, active | /reference/music/music-player |
| YouTube members tab (People) | screen | broadcaster | loading, empty, error, blocked, ready, show more | /reference/community/people |
| YouTube members blocked messages | message | broadcaster | not_connected, not_allowed, not_enabled | /reference/integrations/youtube |
| Pipeline live run confirm dialog | screen | broadcaster | groups by kind, real warning, cancel, confirm | /reference/commands/pipelines |
| Pipeline live run result notice | message | broadcaster | ran steps, none ran, warnings | /reference/commands/pipelines |
| Pipeline inputs editor | setting | broadcaster | empty, rows, read-only, invalid default | /reference/commands/pipelines |
| Pipeline step drag and drop | command | broadcaster | enabled, disabled, dragging | /reference/commands/pipelines |
| Script plan gate notice | message | broadcaster | blocked, not blocked | /reference/code/scripts |
| Settings page frame | screen | broadcaster | with or without panel, dense | /reference/getting-started/dashboard-tour |
| Clips panel and Upload button | screen | broadcaster, moderator | loading, empty, error, ready, uploads left, disabled at 0 | /reference/community/stream-page |
| Clip upload dialog | screen | broadcaster, moderator | open, pending, refused, uploaded | /reference/community/stream-page |
| Clip upload refusal message | error | broadcaster, moderator | each outcome, failed fallback | /reference/community/stream-page |
| Setup wizard step forms and unknown step notice | screen | broadcaster | known form per key, unknown fallback | /reference/self-hosting/first-run-setup |
| Viewer page frame | screen | viewer | loading, error with retry, empty, ready | /reference/community/viewer-pages |
| Viewer phone More drawer | screen | viewer | closed, open, current highlighted | /reference/community/viewer-pages |
| Overlay theme stylesheet and fonts | api | developer | served, cached, 404 other range | excluded: fetched by the overlay host page, no person opens it |
| Admin channel diagnostics and run detail | api | platform admin | ok, empty, 400 unknown section, not found, forbidden | /reference/self-hosting/admin-console |
| Channel clips list with uploads left today | api | broadcaster | loading, empty, ok, next page, error | /reference/community/stream-page |
| Upload a clip to YouTube | command | broadcaster | uploading, outcome, rate limited, error | /reference/integrations/youtube |
| Invite link public read | screen | viewer | valid, unusable | /reference/getting-started/redeem-an-invite |
| Stream player live playlist proxy | api | viewer | ok, 400, 404, 502 | /reference/community/stream-page |
| YouTube members list and count | screen | broadcaster | loading, empty, ok, next page, count null | /reference/community/people |
| Automation API event history | api | developer | page, next cursor, empty | /reference/code/automation-api |
| Automation event frame | message | developer | live and history share one shape | /reference/code/webhooks-and-events |
| Chat hints (first ever, first of day, first of stream, account created) | message | moderator | each flag true or false | /reference/community/chat-page |
| Chat thread read for a message | api | moderator | ok, failure | /reference/community/chat-page |
| Calendar age wording | message | viewer | under a day, start after end gives zero | /reference/commands/variables-and-templates |
| Event response test fire and its warnings | command | broadcaster | result, response_disabled, no_pipeline, no_overlay_source, not found | /reference/automation/event-responses |
| Named counters list | screen | broadcaster | empty, ok | /reference/commands/variables-and-templates |
| Pipeline input declarations and binding errors | setting | broadcaster | valid, invalid name, duplicate, bad type, long description, required with default, wrong default type, missing required | /reference/commands/pipelines |
| Held text check before speech and chat | message | moderator | held, released when approved | /reference/moderation/automod-and-chat-filters |
| Emote pronunciation rules for text to speech | setting | broadcaster | rules, empty | /reference/audio/text-to-speech |
| Viewer data keys with viewer counts | screen | broadcaster | empty, ok | /reference/code/sdk-data-and-storage |
| Code scripts plan refusal | error | broadcaster | refused on create, save, publish, turn on, run | /reference/code/scripts |
| Events page: events of this stream and the stream before, each replayable | screen | broadcaster, moderator | this stream, earlier stream, empty, error | /reference/community/events |
| Integrations page: connect, reconnect, add permission sets, disconnect | screen | broadcaster | loading, empty, connected, reconnect, extra permissions, disconnected, error | /reference/integrations/integrations-page |
