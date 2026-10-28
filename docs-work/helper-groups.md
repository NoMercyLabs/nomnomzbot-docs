# Template helper types

The generator `scripts/gen-template-helpers.mjs` reads this file.
A type is the first word of a helper key: `user`, `target`, `text`, `stream`, `music`.
A first word with fewer than about 5 helpers joins the type it belongs to.
Every helper key matches exactly one row of the Types table, and exactly one row of the Sections table of its page.

## Types

| Order | Type | Page title | Route | Key patterns | Count |
| --- | --- | --- | --- | --- | --- |
| 10 | `{user.*}` | User helpers | /reference/templates/user | `user`, `user.*`, `viewer`, `viewer.*`, `engagement.*`, `name`, `link`, `subject`, `object`, `possessive`, `tense`, `presentTense`, `genderedTerm`, `verb:*` | 75 |
| 20 | `{target.*}` | Target helpers | /reference/templates/target | `target`, `target.*` | 46 |
| 30 | `{args.*}` | Command word helpers | /reference/templates/args | `args`, `args.*` | 64 |
| 22 | `{channel.*}` | Channel helpers | /reference/templates/channel | `channel`, `channel.*`, `streamer`, `status` | 34 |
| 24 | `{stream.*}` | Stream helpers | /reference/templates/stream | `stream.*` | 62 |
| 26 | `{chat.*}` | Chat message helpers | /reference/templates/chat | `chat.*`, `tts.*`, `link.*`, `raw`, `raw.*` | 29 |
| 70 | `{activity.*}` | Chat activity helpers | /reference/templates/activity | `activity.*` | 19 |
| 80 | `{supporter.*}` | Event helpers | /reference/templates/event | `followed_at`, `tier`, `months`, `streak`, `message`, `also_said`, `count`, `anonymous`, `bits`, `gifter*`, `viewers`, `reward*`, `redemption*`, `moderator`, `duration`, `broadcaster`, `title`, `game`, `supporter.*`, `provider`, `cost`, `input`, `reason`, `obs.event.*`, `vts.event.*` | 33 |
| 90 | `{poll.*}` | Poll and prediction helpers | /reference/templates/poll | `poll`, `poll.*`, `prediction`, `prediction.*` | 51 |
| 100 | `{hypetrain.*}` | Hype train helpers | /reference/templates/hypetrain | `hypetrain*`, `hype_train*` | 17 |
| 110 | `{goal.*}` | Goal helpers | /reference/templates/goal | `goal`, `goal.*` | 14 |
| 120 | `{charity.*}` | Charity helpers | /reference/templates/charity | `charity`, `charity.*` | 8 |
| 130 | `{schedule.*}` | Schedule helpers | /reference/templates/schedule | `schedule`, `schedule.*` | 17 |
| 140 | `{ad.*}` | Ad break helpers | /reference/templates/ad | `ad`, `ad.*` | 15 |
| 150 | `{bot.*}` | Bot helpers | /reference/templates/bot | `bot.*`, `botname` | 22 |
| 160 | `{list.*}` | List and counter helpers | /reference/templates/list | `list.*`, `count.*` | 18 |
| 170 | `{quote.*}` | Quote helpers | /reference/templates/quote | `quote`, `quote.*` | 7 |
| 180 | `{var.*}` | Variable helpers | /reference/templates/var | `var`, `var.*`, `set`, `set.*`, `custom.*`, `include`, `include.*`, `transform.*` | 7 |
| 190 | `{music.*}` | Music helpers | /reference/templates/music | `music.*`, `track*`, `playlist*` | 54 |
| 200 | `{date:*}` | Date and time helpers | /reference/templates/date | `date`, `date*`, `time`, `time.*` | 17 |
| 210 | `{if.*}` | Condition helpers | /reference/templates/if | `if`, `if.*`, `switch*`, `coalesce*`, `default*`, `literal*`, `chars.*` | 26 |
| 220 | `{random.*}` | Random helpers | /reference/templates/random | `random.*`, `pick`, `pick.*`, `chance*`, `roll`, `roll.*` | 23 |
| 230 | `{fun.*}` | Fun helpers | /reference/templates/fun | `fun.*` | 26 |
| 240 | `{text.*}` | Text helpers | /reference/templates/text | `text`, `text.*` | 103 |
| 250 | `{num.*}` | Number format helpers | /reference/templates/num | `num`, `num.*` | 36 |
| 260 | `{math.*}` | Math helpers | /reference/templates/math | `math`, `math.*`, `meter`, `meter.*` | 20 |
| 270 | `{platform.*}` | Platform helpers | /reference/templates/platform | `platform`, `platform.*` | 25 |
| 280 | `{emote.*}` | Emote helpers | /reference/templates/emote | `emote`, `emote.*` | 30 |
| 290 | `{lookup.*}` | Lookup helpers | /reference/templates/lookup | `lookup.*` | 10 |

## Sections

A page that lists these routes shows one headed table for each section, in this order.
The first section whose patterns match a helper takes it.

| Route | Section | Key patterns |
| --- | --- | --- |
| /reference/templates/user | Pronouns and grammar | `user.pronoun*`, `user.subject*`, `user.object*`, `user.possessive*`, `user.tense*`, `user.present*`, `user.past*`, `user.gendered*`, `user.verb*`, `subject`, `object`, `possessive`, `tense`, `presentTense`, `genderedTerm`, `verb:*` |
| /reference/templates/user | Names and links | `user`, `user.name`, `user.display*`, `user.login*`, `user.mention*`, `user.id`, `user.platform*`, `user.provider*`, `user.link*`, `user.shoutoutLink*`, `user.color*`, `user.avatar*`, `user.bio*`, `viewer.name`, `name`, `link` |
| /reference/templates/user | Account, follow and subscription | `user.createdAt*`, `user.accountAge*`, `user.isFollower*`, `user.followedAt*`, `user.followAge*`, `user.isSub*`, `user.subTier*` |
| /reference/templates/user | Points and saved data | `user.points*`, `user.data.*`, `viewer.data.*`, `user.quotes*` |
| /reference/templates/user | Chat, watch and visit stats | `user.*`, `viewer.*`, `engagement.*` |
| /reference/templates/target | Pronouns and grammar | `target.pronoun*`, `target.subject*`, `target.object*`, `target.possessive*`, `target.tense*`, `target.present*`, `target.past*`, `target.gendered*`, `target.verb*` |
| /reference/templates/target | Names and links | `target`, `target.name`, `target.display*`, `target.login*`, `target.mention*`, `target.id`, `target.known*`, `target.platform*`, `target.provider*`, `target.link*`, `target.shoutoutLink*`, `target.color*`, `target.avatar*`, `target.bio*` |
| /reference/templates/target | Account, follow and subscription | `target.createdAt*`, `target.accountAge*`, `target.isFollower*`, `target.followedAt*`, `target.followAge*`, `target.isSub*`, `target.subTier*` |
| /reference/templates/target | The target's own channel | `target.isLive`, `target.game`, `target.title`, `target.viewers` |
| /reference/templates/target | Points and saved data | `target.points*`, `target.data.*`, `target.quotes*` |
| /reference/templates/target | Chat and watch stats | `target.*` |
| /reference/templates/args | Person named in the message | `args.*.user.*` |
| /reference/templates/args | Words after the command | `args`, `args.*` |
| /reference/templates/stream | Live now | `stream.isLive`, `stream.status`, `stream.title*`, `stream.game`, `stream.game.*`, `stream.uptime*`, `stream.viewers*`, `stream.startedAt*`, `stream.id`, `stream.url`, `stream.thumbnail` |
| /reference/templates/stream | The last stream | `stream.last.*` |
| /reference/templates/stream | Counts and top lists | `stream.*` |
| /reference/templates/poll | Polls | `poll`, `poll.*` |
| /reference/templates/poll | Predictions | `prediction`, `prediction.*` |
| /reference/templates/music | Now playing | `music.now`, `music.now.*`, `music.provider`, `track*`, `playlist*` |
| /reference/templates/music | The queue | `music.queue.*` |
| /reference/templates/music | History and favorites | `music.history.*`, `music.favorite.*`, `music.user.*` |
| /reference/templates/music | Player and request settings | `music.*` |
| /reference/templates/text | Letter case and styles | `text.upper*`, `text.lower*`, `text.title*`, `text.sentence*`, `text.capitalize*`, `text.decapitalize*`, `text.swapcase*`, `text.spaced*`, `text.alternating*`, `text.mocking*`, `text.spongecase*`, `text.smallcaps*`, `text.upsidedown*`, `text.fullwidth*`, `text.bold*`, `text.italic*`, `text.monospace*`, `text.script*`, `text.bubble*`, `text.squared*`, `text.strike*`, `text.underline*`, `text.superscript*`, `text.plain*`, `text.leet*`, `text.rot13*`, `text.uwu*`, `text.clap*`, `text.stutter*`, `text.yell*`, `text.slug*`, `text.snake*`, `text.kebab*`, `text.camel*`, `text.pascal*`, `text.hashtag*` |
| /reference/templates/text | Words, letters and length | `text.word*`, `text.chars*`, `text.letters*`, `text.lines*`, `text.count*`, `text.first*`, `text.last*`, `text.substring*`, `text.length*`, `text.initials*`, `text.truncate*`, `text.cut*`, `text.trim*`, `text.squish*`, `text.pad*`, `text.center*`, `text.repeat*`, `text.reverse*` |
| /reference/templates/text | Replace, encode and grammar | `text`, `text.*` |

## Overview

A template helper is a name in braces.
The bot puts the real value in its place wherever a viewer sees or hears the text: in chat, on an overlay or read aloud.
For example, `{user}` becomes the name of the person who used the command.

Type the helper in a reply, an event response or a timer, with the braces.
A helper can hold another helper.

A helper that the bot does not know stays in the line exactly as you wrote it.
The **Reply** field warns you about an unknown helper before you save.

Each place has its own set of helpers.
Read [Variables and templates](/reference/commands/variables-and-templates) for the places, special characters and HTML.

### Find a helper by its type

The type of a helper is the first word of its name.
All `{user.*}` helpers are on the user page, and all `{text.*}` helpers are on the text page.
Pronoun and grammar helpers such as `{subject}` and `{verb:plays|play}` are on the user page too.
A word with only a few helpers joins the type it belongs to.
For example, the prediction helpers are on the poll page.

### Give a helper input

Some helpers take input.
Type the input after a colon, as in `{text.upper:hello}`.
Separate more than one input with a pipe, as in `{text.repeat:3|ha}`.
A few helpers name an input, as in `{text.cut:hello world|max=8}`.
The Example column shows a typed example and what it gives.

### Write correct sentences

The pronoun and grammar helpers let one reply fit every viewer.
They give the right pronoun, verb and tense for he, she, they and other pronouns.
Read [Write correct sentences](/reference/templates/user#write-correct-sentences) to build a line that reads right for everyone.

## Intros

### /reference/templates/user

These helpers are about the person who used the command, such as `{user}`, `{user.points}` and `{user.followAge}`.
They also hold that person's pronouns and the words that go with them, such as `{user.subject}` and `{user.possessive}`.
The bare helpers `{name}`, `{link}`, `{subject}`, `{object}`, `{possessive}`, `{tense}`, `{presentTense}`, `{genderedTerm}` and `{verb:plays|play}` are here too.
Use them to greet a viewer, to show their stats, or to write a reply that fits their pronouns.

`{user}` is the display name, written the way the viewer writes it.
In a chat reply, the bot writes the display name only when it matches the login apart from letter case. Otherwise, for example for a name in another alphabet, it writes the login.
`{user.name}` is the login name, in lower case.

### /reference/templates/target

The target is the person a command names, such as `@someone` in `!hug @someone`.
These helpers give the target's name, pronouns, account, stats and live status, such as `{target.name}` and `{target.subject}`.
Use them in a reply that talks about another person, such as a hug or a shoutout.

### /reference/templates/args

These helpers read the words a viewer typed after the command, such as the first word or the second word.
Use them to take a word, a number or a duration from the command.
They can also read a person from a word, such as `{args.1.user.points}`, and give facts about that person.

### /reference/templates/channel

These helpers describe the channel: its name, links, followers and settings.
Use the channel, channel.display, channel.id and streamer helpers in any reply that names the channel.
A row marked "Discord seed alias" works only in a Discord notification, which fills in the value itself when it sends the message. In a command or an event response it stays as typed.

### /reference/templates/stream

These helpers describe the stream right now, the last stream, and the counts of a stream.
Use them in an uptime command, a "what are we playing" command, or an end-of-stream recap.
A row marked "Discord seed alias" works only in a Discord notification, which fills in the value itself when it sends the message. In a command or an event response it stays as typed.

### /reference/templates/chat

These helpers read the chat message that started the reply, and the chat settings.
They also fit a reply to the chat length limit, share a message to a social site and prepare text for speech.

### /reference/templates/activity

These helpers count chat activity, such as messages per minute and active chatters.
They can also name the top chatter and a random chatter.

### /reference/templates/event

These helpers carry the values of an event, such as the tier of a sub or the bits of a cheer.
Use them in an event response.
The events `stream.online` and `stream.offline` fire when the channel goes live and when it goes offline.
A row marked "Discord seed alias" is a value that the Discord go-live notification fills in itself when it sends the message.

### /reference/templates/poll

These helpers read the current or last poll and prediction.
Use them to announce a result in chat, on an overlay or read aloud.

### /reference/templates/hypetrain

These helpers read a hype train: its level, progress, and the people who took part.
Use them to show progress in chat, on an overlay or read aloud.

### /reference/templates/goal

These helpers read the channel goals, such as follower goals and sub goals.
Use them to show progress in chat, on an overlay or read aloud.

### /reference/templates/charity

These helpers read a charity campaign: its name, target and the amount raised.
Use them to show progress in chat, on an overlay or read aloud.

### /reference/templates/schedule

These helpers read the channel's stream schedule.
Use them to tell viewers when the next stream starts.

### /reference/templates/ad

These helpers read the ad breaks of the channel.
Use them to tell chat when the next ad starts.

### /reference/templates/bot

These helpers describe the bot: its name, version, uptime and commands.
Use them in a help or "about the bot" command.

### /reference/templates/list

These helpers read the channel's lists and named counters.
Use them to pick a list item or to show a count, such as a death count.

### /reference/templates/quote

These helpers read the quotes the channel saved.
Use them to show a quote by its number, or its author, date and game.

### /reference/templates/var

These helpers keep a value for the rest of a reply, read custom data, or put another command's reply inside this one.
Use them to keep a long reply short.

### /reference/templates/music

These helpers read the song that plays now, the queue and song requests.
Use them in a "song" or "queue" command.

### /reference/templates/date

These helpers give the time and the date, in any format and time zone.
Use them to count down to a moment or to show the channel time.

### /reference/templates/if

These helpers choose a text by a condition, or give a fallback when a value is empty.
Use them when a reply must change with the situation.

### /reference/templates/random

These helpers pick a random value, number, item or roll.
They give a different value each time, so the example shows one possible result.
Use them for a random answer or a giveaway pick.

### /reference/templates/fun

These helpers play small games, such as dice, a coin flip and the 8-ball.
Most give a different result each time, so the example shows one possible result.

### /reference/templates/text

These helpers change a text: letter case, style, words, length, replacing, encoding and plurals.
Put the text after a colon, as in `{text.upper:hello}`.
Separate more than one input with a pipe.

### /reference/templates/num

These helpers format a number: round it, add separators, or write it as a currency or a duration.

### /reference/templates/math

These helpers do math with numbers, and draw a number as a meter.

### /reference/templates/platform

These helpers read the platforms the channel streams to, such as Twitch, Kick and YouTube.
Use them to show viewers and links for every platform.

### /reference/templates/emote

These helpers show emotes from the channel and from 7TV, BTTV and FFZ.
They can also count and pick emotes.

### /reference/templates/lookup

These helpers look up facts outside the channel: a game, the weather, a time zone, a currency rate or a translation.

## Sample corrections

A line here replaces the product sample with a value the helper can return. Each line cites the code that proves it. The product samples to fix are in server/src/NomNomzBot.Application/Abstractions/Templating/TemplateHelperSamples.cs.

- `link` = `twitch.tv/example_viewer`: LegacyTemplateHelpers.cs:634 and :646-647 build the link without https (sample at TemplateHelperSamples.cs:172).
- `viewer.watchtime` = `12h 0m`: WatchTimeFormatter.cs:22 always writes the minutes (sample at TemplateHelperSamples.cs:142).
- `target.watchtime` = `12h 0m`: WatchTimeFormatter.cs:22 always writes the minutes (sample at TemplateHelperSamples.cs:162).
- `ad.when` = `in ~5 minutes`: AdScheduleWarner.cs:261-267 writes "in ~N minutes" (sample at TemplateHelperSamples.cs:38).
- `also_said` = `They also said: "Great stream!"`: AlsoSaidClause.cs:21-23 returns the lead-in with the quoted message (sample at TemplateHelperSamples.cs:68).
- `poll.results` = `Pizza: 28 (56%) | Pasta: 22 (44%)`: PollEventHandler.cs:88-95 returns every choice with votes and share (sample at TemplateHelperSamples.cs:46).
- `supporter.amount` = `5`: SupporterTriggerSource.cs:80-83 formats the amount with "0.##", which drops trailing zeros (sample at TemplateHelperSamples.cs:93).
- `time` = `20:15:00`: LegacyTemplateHelpers.cs:395 writes HH:mm:ss.
- `time.utc` = `18:15:00 UTC`: LegacyTemplateHelpers.cs:396 writes HH:mm:ss and " UTC".
- `stream.startedAt` = `2026-10-06T18:00:00.0000000+00:00`: LegacyTemplateHelpers.cs:427-430 writes the went-live time in the round-trip ("O") format (sample at TemplateHelperSamples.cs:32).
- `followed_at` = `2026-10-06T18:30:00.0000000+00:00`: FollowEventHandlers.cs:44 writes the follow time in the round-trip ("O") format (sample at TemplateHelperSamples.cs:63).
- `music.favorite.outcome` = `queued`: SongRequestFavoriteAction.cs:146, :159 and :166 set queued, unavailable or none (sample at TemplateHelperSamples.cs:208).

## Description corrections

A line here replaces a product description that the code contradicts. Each line cites the code that proves it.

- `user` = "The name of the person who used the command, as they write it (the display name). A chat reply uses the login when the two differ by more than letter case": ChatMessageHandler.cs:1823-1825 seeds user with the display name; strings.xml:5470 says login name.
- `user.name` = "The login name of the person who used the command, in lower case": ChatMessageHandler.cs:1825 and TemplateSubject.cs:39 seed user.name with the login; strings.xml:5478 says display name.
- `bot.license` = "The license of the bot source code: PolyForm-Noncommercial-1.0.0": strings.xml uses the British spelling.
- `args.duration` = "Reads the word at a position as a time (5m, 1h30m, 90) and gives it in seconds. Type the position after a colon: when the second word is 5m, 2 gives 300": ArgumentParseHelpers.cs:79-87 reads the position from its one argument; ArgumentHelpersTableTests.cs:62.
- `activity.commands.stream` = "Commands that ran successfully since the bot joined the channel this session. The count does not restart when a stream starts": IChannelRegistry.cs:319-320 and CommandExecutedBroadcastHandler.cs:34-41 count them; ChannelOnlineHandler.cs:146-158 does not reset the count.
- `chat.fit` = "The text cut to fit one chat line of the platform. A cut text ends in an ellipsis, or in your own end text after a pipe; a text that already fits stays whole": ChatFitHelpers.cs:26-33 and :42-60; ChatTemplateHelpersTests.cs:51-60.
- `link.mastodon` = "A link that opens a Mastodon server with the text ready to post. Type the server host name first, then a pipe and the text": LinkShareHelpers.cs:32-41 reads the host from the first argument and the text from the second.
- `music.now.bar` = "A progress bar of the track that plays now, with the clock. Add a width from 1 to 50 after a colon to get the bare bar of that many cells; the default width is 11": MusicProgressHelpers.cs:41-55; MusicText.cs:22-23 and :68-69.
- `fun.dice` = "Rolls dice and gives the total. With no input it rolls one six-sided die. A number is one die with that many sides (2 to 1000), and 2d6 is two six-sided dice (up to 100 dice)": FunDiceHelpers.cs:26-30; FunDiceSpec.cs:22-24 and :26-48.
- `fun.love` = "A love score from 0 to 100 percent for two names typed with a pipe between them, the same all day whichever name comes first": FunRatingHelpers.cs:33-41 and :78-81.
- `fun.ship` = "Blends two names, typed with a pipe between them, into a ship name": FunRatingHelpers.cs:58-71.
- `list.inline.join` = "An inline list a;b;c joined with your own separator. Type the separator first, then a pipe and the list; use a backslash and s for a space": ListInlineHelpers.cs:23-27 puts the separator first; ListText.cs:37-41 turns the backslash s into a space.
- `text.lines.count` = "Counts the lines in the text. Type a backslash and n where a line ends": TextArguments.cs:22-26 turns a backslash n into a line break.
- `text.lines.first` = "The first line of the text. Type a backslash and n where a line ends": SliceTextHelpers.cs:74-75 and TextArguments.cs:22-26.
- `text.lines.join` = "The lines of the text joined with a separator, one space when you give none. Type a backslash and n where a line ends, then a pipe and the separator": SliceTextHelpers.cs:77-90 and TextArguments.cs:22-26.

## Inputs

A line here gives a typed example for a helper that takes input and has no test row that shows it.
The form is: key = typed example, then the result when it is not the product sample, then the code line that reads the input.
Other typed examples come from the product tests: `scripts/export-helper-inputs.mjs` writes them to `docs-work/helper-inputs.json`.
A position key such as `args.<n>.upper` is typed with the first word (ArgumentKeys.cs:17-19 and :24-34).
A result after an arrow comes from a product test row (the test fixture's viewer, counter and clock) or from the resolver code; a random helper shows one possible result.

- `verb:<sing|plur>` = `{subject} {verb:plays|play}` -> `he plays`: LegacyTemplateHelpers.cs:183
- `user.verb:<sing|plur>` = `{user.verb:has|have}` -> `has`: LegacyTemplateHelpers.cs:183
- `target.verb:<sing|plur>` = `{target.verb:has|have}` -> `have`: LegacyTemplateHelpers.cs:183
- `args.<n>.user.data.<key>` = `{args.1.user.data.food:none}` -> `none`: ArgumentUserHelpersTableTests.cs:63
- `viewer.data.<key>` = `{viewer.data.deaths}` -> `12`: LegacyTemplateHelpers.cs:1075
- `target.data.<key>` = `{target.data.deaths}` -> `5`: LegacyTemplateHelpers.cs:1083
- `count.<key>` = `{count.deaths}` -> `12`: LegacyTemplateHelpers.cs:670
- `poll.winner.percentage` = `{poll.winner}{poll.winner.percentage}` -> `Pizza (56%)`: PollEventHandler.cs:85-86 (the share in brackets, with a space in front)
- `date` = `{date}` -> `2026-10-26`: LegacyTemplateHelpers.cs:397 (yyyy-MM-dd, in the channel's time zone)
- `text.chars.shuffle` = `{text.chars.shuffle:abc}` -> `bca`: TextHelpersTableTests.cs:112 (a random order of the input)
- `text.words.shuffle` = `{text.words.shuffle:a b c}` -> `c a b`: TextHelpersTableTests.cs:111 (a random order of the input)
- `emote.image` = `{emote.image:catJAM}` -> `https://cdn.7tv.app/emote/<emote id>/2x.webp`: SevenTvEmoteProvider.cs:94-112
- `custom.<name>.<field>` = `{custom.heartrate.bpm}` -> `128`: LegacyTemplateHelpers.cs:272
- `list.pick.<name>` = `{list.pick.snacks}` -> `cookies`: LegacyTemplateHelpers.cs:261
- `transform.<name>:<text>` = `{transform.upper:hi}` -> `HI`: LegacyTemplateHelpers.cs:173
- `var.<name>` = `{set:x=5}{var.x}` -> `5`: VariableTemplateHelpers.cs:27
- `obs.event.<field>` = `{obs.event.sceneName}` -> `Scene 1`: EventResponsePresetCatalog.cs:151
- `vts.event.<field>` = `{vts.event.modelName}` -> `Model 1`: EventResponsePresetCatalog.cs:168
- `random.number.<min>.<max>[.<step>]` = `{random.number.50.990.10}` -> `430`: LegacyTemplateHelpers.cs:814
- `random.pick.<a.b.c>` = `{random.pick.red.green.blue}` -> `green`: LegacyTemplateHelpers.cs:484
- `roll.<name>.<min>.<max>[.<step>]` = `{roll.pct.60.98}` -> `73`: LegacyTemplateHelpers.cs:837
- `roll.<name>` = `{roll.pct.60.98} and {roll.pct}` -> `73 and 73`: LegacyTemplateHelpers.cs:837
- `roll.<name>.complement` = `{roll.pct.60.98} and {roll.pct.complement}` -> `73 and 27`: LegacyTemplateHelpers.cs:837
- `date:<source>` = `{date:2026-12-25|format:dd/MM/yyyy HH:mm}` -> `25/12/2026 00:00`: DateExpressionParser.cs:60
- `date:<source>|<+/-amount><unit>` = `{date:now|+1d}` -> `2026-10-27 15:30`: DateExpressionParser.cs:99
- `if.<path>` = `{if.stream.live:on|off}` -> `on`: IfTemplateHelpers.cs:35
- `if.<path>.equals` = `{if.user.login.equals:viewerone:hi me|hi}` -> `hi me`: ValuePredicate.cs:29
- `if.<path>.iequals` = `{if.user.login.iequals:VIEWERONE:yes|no}` -> `yes`: ValuePredicate.cs:30
- `if.<path>.contains` = `{if.args.all.contains:hello:hi back|}` -> `hi back`: ValuePredicate.cs:31
- `if.<path>.startswith` = `{if.args.1.startswith:@:mention|word}` -> `mention`: ValuePredicate.cs:32
- `if.<path>.endswith` = `{if.args.all.endswith:world:yes|no}` -> `yes`: ValuePredicate.cs:33
- `if.<path>.matches` = `{if.args.2.matches:^h:h-word|other}` -> `h-word`: ValuePredicate.cs:34
- `if.<path>.gt` = `{if.count.deaths.gt:10:rough day|ok}` -> `rough day`: ValuePredicate.cs:35
- `if.<path>.lt` = `{if.stream.viewers.lt:10:cozy|busy}` -> `busy`: ValuePredicate.cs:36
- `if.<path>.gte` = `{if.user.months.gte:6:veteran|new}` -> `veteran`: ValuePredicate.cs:37
- `if.<path>.lte` = `{if.count.wins.lte:3:keep going|great}` -> `keep going`: ValuePredicate.cs:38
- `list.inline.join` = `{list.inline.join:\s+\s|a;b}` -> `a + b`: ListHelpersTableTests.cs:41
- `music.now.bar` = `{music.now.bar:5}` -> `▬▬🔘▬▬`: MusicHelpersTableTests.cs:36
- `fun.dice` = `{fun.dice:20}` -> `5`: FunHelpersTableTests.cs:38 (a random total)
- `fun.dice.emoji` = `{fun.dice.emoji:3}` -> `⚁ ⚀ ⚂`: FunHelpersTableTests.cs:42 (random faces)
- `fun.love` = `{fun.love:{user.display}|{target.display}}` -> `22%`: FunHelpersTableTests.cs:53 (the score is fixed for the two names and the day)
- `fun.ship` = `{fun.ship:Alexander|Bo}` -> `Alexander + Bo = Alexo`: FunHelpersBehaviorTests.cs:268
- `text.lines.count` = `{text.lines.count:a\nb}` -> `2`: TextHelpersTableTests.cs:73
- `text.lines.first` = `{text.lines.first:a\nb}` -> `a`: TextHelpersTableA2Tests.cs:39
- `text.lines.join` = `{text.lines.join:a\nb|\s/\s}` -> `a / b`: TextHelpersTableA2Tests.cs:40
- `link.mastodon` = `{link.mastodon:mastodon.social|Live now}` -> `https://mastodon.social/share?text=Live%20now`: ChatHelpersTableTests.cs:70-73
- `chat.fit` = `{chat.fit:short text|(more on the page)}` -> `short text`: ChatHelpersTableTests.cs:24
- `args.duration` = `{args.duration:2}` -> `300`: ArgumentHelpersTableTests.cs:62

## Decisions

- `name`, `link`, `subject`, `object`, `possessive`, `tense`, `presentTense`, `genderedTerm`, `verb:*` (bare legacy keys) -> user: they are about the person who used the command, or the person the command names.
- `viewer.*` and `engagement.*` -> user: same person as `user.*`, grouped on the same page.
- `args.*.user.*` -> args: the first word of the key is `args`, so the person named in the message sits on the args page, in its own section.
- `stream.url*`, `stream.thumbnail*` -> stream: the first word is `stream`. `streamer` and `status` -> channel: a streamer looks for the owner on the channel page.
- `link.*` (X, Bluesky, Threads, Mastodon share links) -> chat: they share the message text to a social site.
- `random.*`, `pick*`, `chance`, `roll*` -> random: they all draw a value by chance.
- `prediction*` -> poll; `hype_train*` -> hypetrain: fewer than 5 helpers join the type they belong to.
- `title`, `game`, `broadcaster`, `viewers`, `count`, `duration`, `message` (bare keys) -> event: the registry describes them as values an event carries.
- `cost`, `input`, `reason`, `provider` -> event: they are values of a redemption, a moderation event or a chat event.
- `obs.event.*`, `vts.event.*` -> event: they are fields of an OBS or VTube Studio event.
- `meter*` -> math: it draws a number as a bar. `chars.*` -> if: they are fixed characters used inside other helpers.
- `tts.*` -> chat: they prepare the message for speech. `raw.*` -> chat.
- `count.*` -> list: named counters sit with the lists. `set`, `custom.*`, `include*`, `transform.*` -> var.
