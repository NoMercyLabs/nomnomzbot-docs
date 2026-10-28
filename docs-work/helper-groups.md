# Template helper groups

The generator `scripts/gen-template-helpers.mjs` reads this file.
Every helper key matches exactly one row of the table.

## Groups

| Order | Group | Page title | Route | Key patterns | Count |
| --- | --- | --- | --- | --- | --- |
| 10 | The viewer | Viewer name and pronouns | /reference/templates/viewer-name-and-pronouns | `user`, `user.name`, `user.display*`, `user.login*`, `user.mention*`, `user.id`, `user.platform*`, `user.provider*`, `user.link*`, `user.shoutoutLink*`, `user.color*`, `user.avatar*`, `user.bio*`, `user.pronoun*`, `user.subject*`, `user.object*`, `user.possessive*`, `user.tense*`, `user.present*`, `user.past*`, `user.gendered*`, `user.verb*`, `viewer`, `viewer.name`, `name`, `link`, `subject`, `object`, `possessive`, `tense`, `presentTense`, `genderedTerm`, `verb*` | 31 |
| 20 | The viewer | Viewer account, follow and sub | /reference/templates/viewer-account-and-follow | `user.createdAt*`, `user.accountAge*`, `user.account_age*`, `user.isFollower*`, `user.followedAt*`, `user.followAge*`, `user.follow_age*`, `user.isSub*`, `user.subTier*` | 10 |
| 30 | The viewer | Viewer chat and watch stats | /reference/templates/viewer-chat-and-watch-stats | `user.stats.*`, `user.activity.*`, `user.lastmessage*`, `user.lastMessage*`, `user.message*`, `user.randommessage*`, `viewer.*`, `engagement.*`, `!viewer.name`, `!viewer.data.*` | 24 |
| 40 | The viewer | Viewer points and saved data | /reference/templates/viewer-points-and-more | `user.*`, `viewer.data.*`, `!user.name`, `!user.display*`, `!user.login*`, `!user.mention*`, `!user.id`, `!user.platform*`, `!user.provider*`, `!user.link*`, `!user.shoutoutLink*`, `!user.color*`, `!user.avatar*`, `!user.bio*`, `!user.pronoun*`, `!user.subject*`, `!user.object*`, `!user.possessive*`, `!user.tense*`, `!user.present*`, `!user.past*`, `!user.gendered*`, `!user.verb*`, `!user.createdAt*`, `!user.accountAge*`, `!user.account_age*`, `!user.isFollower*`, `!user.followedAt*`, `!user.followAge*`, `!user.follow_age*`, `!user.isSub*`, `!user.subTier*`, `!user.stats.*`, `!user.activity.*`, `!user.lastmessage*`, `!user.lastMessage*`, `!user.message*`, `!user.randommessage*` | 10 |
| 50 | The target | Target name and pronouns | /reference/templates/target-name-and-pronouns | `target`, `target.name`, `target.display*`, `target.login*`, `target.mention*`, `target.id`, `target.known*`, `target.platform*`, `target.provider*`, `target.link*`, `target.shoutoutLink*`, `target.color*`, `target.avatar*`, `target.bio*`, `target.pronoun*`, `target.subject*`, `target.object*`, `target.possessive*`, `target.tense*`, `target.present*`, `target.past*`, `target.gendered*`, `target.verb*` | 18 |
| 60 | The target | Target account, stats and live status | /reference/templates/target-stats-and-more | `target.*`, `!target.name`, `!target.display*`, `!target.login*`, `!target.mention*`, `!target.id`, `!target.known*`, `!target.platform*`, `!target.provider*`, `!target.link*`, `!target.shoutoutLink*`, `!target.color*`, `!target.avatar*`, `!target.bio*`, `!target.pronoun*`, `!target.subject*`, `!target.object*`, `!target.possessive*`, `!target.tense*`, `!target.present*`, `!target.past*`, `!target.gendered*`, `!target.verb*` | 28 |
| 70 | The target | Person named in the message | /reference/templates/named-person | `args.*.user.*` | 41 |
| 80 | The channel and the stream | The channel | /reference/templates/channel | `channel`, `channel.*`, `streamer`, `status`, `stream.url*`, `stream.thumbnail*` | 36 |
| 90 | The channel and the stream | The live stream | /reference/templates/stream-live | `stream.*`, `!stream.url*`, `!stream.thumbnail*`, `!stream.last.*`, `!stream.followers*`, `!stream.subs*`, `!stream.bits*`, `!stream.raids*`, `!stream.hypetrains*`, `!stream.redemptions*`, `!stream.songRequesters*`, `!stream.messages*`, `!stream.chatters*`, `!stream.commandsRun*`, `!stream.topChatter*`, `!stream.topCommand*`, `!stream.games*`, `!stream.count*`, `!stream.hours*`, `!stream.number*` | 21 |
| 100 | The channel and the stream | Stream stats and history | /reference/templates/stream-stats | `stream.last.*`, `stream.followers*`, `stream.subs*`, `stream.bits*`, `stream.raids*`, `stream.hypetrains*`, `stream.redemptions*`, `stream.songRequesters*`, `stream.messages*`, `stream.chatters*`, `stream.commandsRun*`, `stream.topChatter*`, `stream.topCommand*`, `stream.games*`, `stream.count*`, `stream.hours*`, `stream.number*` | 39 |
| 110 | The channel and the stream | Schedule and ads | /reference/templates/schedule-and-ads | `schedule*`, `ad.*` | 32 |
| 120 | The chat | The chat message | /reference/templates/chat-message | `chat.*`, `tts.*`, `link.*`, `raw*` | 29 |
| 130 | The chat | Words after the command | /reference/templates/command-arguments | `args`, `args.*`, `!args.*.user.*` | 23 |
| 140 | The chat | Chat activity | /reference/templates/chat-activity | `activity.*`, `random.chatter*`, `random.user*`, `chatter*` | 23 |
| 150 | Events | Event details | /reference/templates/event-details | `followed_at`, `tier`, `months`, `streak`, `message`, `also_said`, `count`, `anonymous`, `bits`, `gifter*`, `viewers`, `reward*`, `redemption*`, `moderator`, `duration`, `broadcaster`, `title`, `game`, `supporter.*`, `provider`, `cost`, `input`, `reason`, `obs.event.*`, `vts.event.*` | 33 |
| 160 | Events | Polls and predictions | /reference/templates/polls-and-predictions | `poll*`, `prediction*` | 51 |
| 170 | Events | Hype trains, goals and charity | /reference/templates/hype-trains-goals-charity | `hypetrain*`, `hype_train*`, `hype.*`, `goal*`, `charity*` | 39 |
| 180 | The bot | The bot | /reference/templates/bot | `bot.*`, `botname` | 22 |
| 190 | Lists, quotes and saved values | Counters, lists and quotes | /reference/templates/lists-and-quotes | `count.*`, `list.*`, `quote`, `quote.*`, `random.quote*` | 26 |
| 200 | Lists, quotes and saved values | Variables and reuse | /reference/templates/variables-and-reuse | `var`, `var.*`, `set`, `set.*`, `custom.*`, `include`, `include.*`, `transform.*` | 7 |
| 210 | Music | Music | /reference/templates/music | `music.*`, `track*`, `playlist*` | 54 |
| 220 | Time and date | Time and date | /reference/templates/time-and-date | `date`, `date*`, `time`, `time.*` | 17 |
| 230 | Logic and choices | Conditions and fallbacks | /reference/templates/conditions | `if`, `if.*`, `switch*`, `coalesce*`, `default*`, `literal*`, `chars.*` | 26 |
| 240 | Logic and choices | Random picks | /reference/templates/random-picks | `pick`, `pick.*`, `chance*`, `random.*`, `!random.chatter*`, `!random.user*`, `!random.quote*` | 15 |
| 250 | Text | Letter case and styles | /reference/templates/text-style | `text.upper*`, `text.lower*`, `text.title*`, `text.sentence*`, `text.capitalize*`, `text.decapitalize*`, `text.swapcase*`, `text.spaced*`, `text.alternating*`, `text.mocking*`, `text.spongecase*`, `text.smallcaps*`, `text.upsidedown*`, `text.fullwidth*`, `text.bold*`, `text.italic*`, `text.monospace*`, `text.script*`, `text.bubble*`, `text.squared*`, `text.strike*`, `text.underline*`, `text.superscript*`, `text.plain*`, `text.leet*`, `text.rot13*`, `text.uwu*`, `text.clap*`, `text.stutter*`, `text.yell*`, `text.slug*`, `text.snake*`, `text.kebab*`, `text.camel*`, `text.pascal*`, `text.hashtag*` | 36 |
| 260 | Text | Words, letters and length | /reference/templates/text-words | `text.word*`, `text.chars*`, `text.letters*`, `text.lines*`, `text.count*`, `text.first*`, `text.last*`, `text.substring*`, `text.length*`, `text.initials*`, `text.truncate*`, `text.cut*`, `text.trim*`, `text.squish*`, `text.pad*`, `text.center*`, `text.repeat*`, `text.reverse*` | 38 |
| 270 | Text | Replace, encode and grammar | /reference/templates/text-replace-and-encode | `text`, `text.*`, `!text.upper*`, `!text.lower*`, `!text.title*`, `!text.sentence*`, `!text.capitalize*`, `!text.decapitalize*`, `!text.swapcase*`, `!text.spaced*`, `!text.alternating*`, `!text.mocking*`, `!text.spongecase*`, `!text.smallcaps*`, `!text.upsidedown*`, `!text.fullwidth*`, `!text.bold*`, `!text.italic*`, `!text.monospace*`, `!text.script*`, `!text.bubble*`, `!text.squared*`, `!text.strike*`, `!text.underline*`, `!text.superscript*`, `!text.plain*`, `!text.leet*`, `!text.rot13*`, `!text.uwu*`, `!text.clap*`, `!text.stutter*`, `!text.yell*`, `!text.slug*`, `!text.snake*`, `!text.kebab*`, `!text.camel*`, `!text.pascal*`, `!text.hashtag*`, `!text.word*`, `!text.chars*`, `!text.letters*`, `!text.lines*`, `!text.count*`, `!text.first*`, `!text.last*`, `!text.substring*`, `!text.length*`, `!text.initials*`, `!text.truncate*`, `!text.cut*`, `!text.trim*`, `!text.squish*`, `!text.pad*`, `!text.center*`, `!text.repeat*`, `!text.reverse*` | 29 |
| 280 | Numbers and math | Format numbers | /reference/templates/number-format | `num`, `num.*` | 36 |
| 290 | Numbers and math | Math and meters | /reference/templates/math | `math`, `math.*`, `meter`, `meter.*` | 20 |
| 300 | Platforms and emotes | Platforms | /reference/templates/platforms | `platform`, `platform.*` | 25 |
| 310 | Platforms and emotes | Emotes | /reference/templates/emotes | `emote`, `emote.*` | 30 |
| 320 | Look things up | Look things up | /reference/templates/lookups | `lookup.*` | 10 |
| 330 | Fun | Games and fun | /reference/templates/fun | `fun.*`, `roll*` | 29 |

## Overview

A template helper is a name in braces that the bot fills in before it types a line.
For example, `{user}` becomes the name of the person who used the command.

Type the helper in a reply, an event response or a timer, with the braces.
A helper can hold another helper.

A helper that the bot does not know stays in the line exactly as you wrote it.
The **Reply** field warns you about an unknown helper before you save.

Each place has its own set of helpers.
Read [Variables and templates](/reference/commands/variables-and-templates) for the places, special characters and HTML.

The helpers are grouped by what they are about.
A person's helpers, such as their name, pronouns and follow age, are on the pages of that person.

## Intros

### /reference/templates/viewer-name-and-pronouns

These helpers name the person who used the command, such as `{user}` and `{user.name}`.
They also hold that person's pronouns and the words that follow them, such as `{user.subject}` and `{user.possessive}`.
The bare ones, such as `{name}`, `{subject}` and `{link}`, give the person the message names with an @mention, and the person who used the command when it names nobody.
Use them to greet a viewer or to write a reply that fits their pronouns.

### /reference/templates/viewer-account-and-follow

These helpers tell how long a viewer has had an account and how long they have followed the channel.
They also say whether the viewer is a subscriber, and at which tier.
Use them in a follow-age or account-age command.

### /reference/templates/viewer-chat-and-watch-stats

These helpers count what a viewer did in the channel: messages, watch time, and the days they were seen.
They also give their last chat message.
Use them in a stats or "last seen" command.

### /reference/templates/viewer-points-and-more

These helpers give a viewer's points and rank, and the values saved for them.
Use them in a points or rank command, or to read a value a command saved for the viewer.

### /reference/templates/target-name-and-pronouns

The target is the person a command names, such as `@someone` in `!hug @someone`.
These helpers give the target's name and pronouns, such as `{target.name}` and `{target.subject}`.
Use them in a reply that talks about another person.

### /reference/templates/target-stats-and-more

These helpers tell about the target's account, follow age, chat history and points.
They also say whether the target is live, and what they stream.
Use them in a shoutout or a lookup of another viewer.

### /reference/templates/named-person

These helpers read a person from the words after the command, such as the first word or the second word.
They give facts about that person, such as their points, rank and saved values.

### /reference/templates/channel

These helpers describe the channel: its name, links, followers and settings.
Use them in any reply that names the channel.

### /reference/templates/stream-live

These helpers describe the stream right now: its title, game, uptime and viewers.
Use them in an uptime or "what are we playing" command.

### /reference/templates/stream-stats

These helpers count what happened in a stream: new followers, subs, bits, raids and chat.
Some read the last stream, such as when it ended and how long it ran.
Use them in an end-of-stream or recap message.

### /reference/templates/schedule-and-ads

These helpers read the channel's stream schedule and its ad breaks.
Use them to tell chat when the next stream or the next ad starts.

### /reference/templates/chat-message

These helpers read the chat message that started the reply, and the chat settings.
They also fit a reply to the chat length limit and prepare text for speech.

### /reference/templates/command-arguments

These helpers read the words a viewer typed after the command.
Use them to take a word, a number or a duration from the command.

### /reference/templates/chat-activity

These helpers count chat activity, such as messages per minute and active chatters.
They can also pick a random chatter.

### /reference/templates/event-details

These helpers carry the values of an event, such as the tier of a sub or the bits of a cheer.
Use them in an event response.

### /reference/templates/polls-and-predictions

These helpers read the current or last poll and prediction.
Use them to announce a result in chat.

### /reference/templates/hype-trains-goals-charity

These helpers read a hype train, a channel goal or a charity campaign.
Use them to show progress in chat.

### /reference/templates/bot

These helpers describe the bot: its name, version, uptime and commands.
Use them in a help or "about the bot" command.

### /reference/templates/lists-and-quotes

These helpers read the channel's lists and quotes.
Use them to pick a list item or to show a quote.

### /reference/templates/variables-and-reuse

These helpers store a value for the rest of a reply, or put another command's reply inside this one.
Use them to keep a long reply short.

### /reference/templates/music

These helpers read the song that plays now, the queue and song requests.
Use them in a "song" or "queue" command.

### /reference/templates/time-and-date

These helpers give the time and the date, in any format and time zone.
Use them to count down to a moment or to show the channel time.

### /reference/templates/conditions

These helpers choose a text by a condition, or give a fallback when a value is empty.
Use them when a reply must change with the situation.

### /reference/templates/random-picks

These helpers pick a random value, number or item.
Use them for a random answer or a giveaway pick.

### /reference/templates/text-style

These helpers change the letter case and the style of a text.
Use them to shout, whisper or decorate a word.

### /reference/templates/text-words

These helpers take words or letters from a text, count them, or cut a text to length.

### /reference/templates/text-replace-and-encode

These helpers replace or remove parts of a text, encode it for a link, and fix plurals.

### /reference/templates/number-format

These helpers format a number: round it, add separators, or write it as a currency or a duration.

### /reference/templates/math

These helpers do math with numbers, and draw a number as a meter.

### /reference/templates/platforms

These helpers read the platforms the channel streams to, such as Twitch, Kick and YouTube.
Use them to show viewers and links for every platform.

### /reference/templates/emotes

These helpers show emotes from the channel and from 7TV, BTTV and FFZ.
They can also count and pick emotes.

### /reference/templates/lookups

These helpers look up facts outside the channel: a game, the weather, a time zone, a currency rate or a translation.

### /reference/templates/fun

These helpers play small games in chat, such as dice, a coin flip and the 8-ball.

## Sample corrections

A line here replaces the product sample with a value the helper can return. Each line cites the code that proves it. The product samples to fix are in server/src/NomNomzBot.Application/Abstractions/Templating/TemplateHelperSamples.cs.

- `link` = `twitch.tv/example_viewer`: LegacyTemplateHelpers.cs:634 and :646-647 build the link without https (sample at TemplateHelperSamples.cs:172).
- `viewer.watchtime` = `12h 0m`: WatchTimeFormatter.cs:22 always writes the minutes (sample at TemplateHelperSamples.cs:142).
- `target.watchtime` = `12h 0m`: WatchTimeFormatter.cs:22 always writes the minutes (sample at TemplateHelperSamples.cs:162).
- `ad.when` = `in ~5 minutes`: AdScheduleWarner.cs:261-267 writes "in ~N minutes" (sample at TemplateHelperSamples.cs:38).
- `also_said` = `They also said: "Great stream!"`: AlsoSaidClause.cs:21-23 returns the lead-in with the quoted message (sample at TemplateHelperSamples.cs:68).
- `poll.winner.percentage` = `(56%)`: PollEventHandler.cs:86-87 returns the share in brackets (sample at TemplateHelperSamples.cs:45).
- `poll.results` = `Pizza: 28 (56%) | Pasta: 22 (44%)`: PollEventHandler.cs:88-95 returns every choice with votes and share (sample at TemplateHelperSamples.cs:46).
- `supporter.amount` = `5`: SupporterTriggerSource.cs:80-83 formats the amount with "0.##", which drops trailing zeros (sample at TemplateHelperSamples.cs:93).
- `music.favorite.outcome` = `queued`: SongRequestFavoriteAction.cs:146, :159 and :166 set queued, unavailable or none (sample at TemplateHelperSamples.cs:208).

## Decisions

- `name`, `link`, `subject`, `object`, `possessive`, `tense`, `pasttense`, `presenttense`, `genderedterm`, `verb*` (bare legacy keys) -> viewer-name-and-pronouns: they are about the person who used the command.
- `viewer.*` (legacy viewer stats) -> viewer-chat-and-watch-stats; `viewer.name` -> viewer-name-and-pronouns; `viewer.data.*` -> viewer-points-and-more: same person as `user.*`, grouped by topic.
- `engagement.*` -> viewer-chat-and-watch-stats: they count the viewer's visits.
- `args.user.*` -> named-person, in the group The target: the person named in the message is a person, not a word of the message.
- `stream.url*`, `stream.thumbnail*`, `streamer`, `status` -> channel: a streamer looks for the channel link and owner on the channel page.
- `link.*` (X, Bluesky, Threads, Mastodon share links) -> chat-message: they share the message text to a social site.
- `random.chatter*`, `random.user*`, `chatter*` -> chat-activity: they pick from the people in chat.
- `random.quote*` -> lists-and-quotes: a streamer looks for quotes on the quote page.
- `title`, `game`, `broadcaster`, `viewers`, `count`, `duration`, `message` (bare keys) -> event-details: the registry describes them as values an event carries.
- `cost`, `input`, `reason` -> event-details: they are values of a redemption or a moderation event.
- `obs.event.*`, `vts.event.*` -> event-details: they are fields of an OBS or VTube Studio event.
- `roll*` -> fun: a dice roll is a game.
- `meter*` -> math: it draws a number as a bar.
- `tts.*` -> chat-message: they prepare the message for speech.
- `chars.*` -> conditions: they are fixed characters used inside other helpers.
