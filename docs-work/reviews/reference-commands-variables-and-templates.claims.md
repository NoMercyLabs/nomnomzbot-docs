# Claims: /reference/commands/variables-and-templates

All paths are in the product repo (`nomnomzbot`). `Reg` = `server/src/NomNomzBot.Application/Abstractions/Templating/TemplateHelperRegistry.cs`. `Smp` = `.../Templating/TemplateHelperSamples.cs`. `en` = `dashboard/src/i18n/schema/en.json`. `Str` = `server/i18n/strings/values/`.

| # | Claim on the page | Source file:line |
| --- | --- | --- |
| 1 | A helper is a name in braces (one word used for it on the whole page); the bot fills a value in before it types | server/src/NomNomzBot.Application/Abstractions/Templating/ITemplateResolver.cs:14-17 |
| 2 | Example "Welcome {user}! Today we play {stream.game}." renders Example_Viewer / Just Chatting | Smp:28, Smp:131 |
| 3 | The line is typed in the channel's one bot voice | server/src/NomNomzBot.Infrastructure/Chat/ReplyDispatcher.cs:55-90 (sends through the channel bot chat); overlay line uses the channel bot identity :94-99 |
| 4 | Parses once, fetches only the values the template names, puts each in place | server/src/NomNomzBot.Infrastructure/Platform/Templating/TemplateResolver.cs:24-27, 80-81, 110-152 |
| 5 | An unknown name stays exactly as written | TemplateResolver.cs:27 |
| 6 | The reply box warns before save | pilot page owns it; validator: server/src/NomNomzBot.Infrastructure/Platform/Templating/TemplateHelperValidator.cs (registry used at save time, TemplatesController.cs:24-26) |
| 7 | An event (seed) value wins over a looked-up value | ITemplateResolver.cs:22; TemplateResolver.cs:25 |
| 8 | Nowhere: nothing filled in | server/src/NomNomzBot.Application/Chat/Services/ReplyTemplateRenderer.cs:38-39 |
| 9 | Chat: resolved once as plain text | ReplyTemplateRenderer.cs:41-48 |
| 10 | Overlay only: resolved for the overlay | ReplyTemplateRenderer.cs:49-65 |
| 11 | Both without HTML: resolved once, same text; with HTML resolved twice | ReplyTemplateRenderer.cs:52-65 |
| 12 | HTML overlay reply: trigger values (name, args) HTML-encoded; looked-up values not encoded; sanitizer keeps allow-listed tags | ReplyTemplateRenderer.cs:56-58, 67-73; LegacyTemplateHelpers.cs:472, 1460-1597; ReplyDispatcher.cs:98; ChatHtmlSanitizer.cs:20-27 |
| 12a | botname: Service.UserName of twitch_bot row, else "NomNomzBot" | LegacyTemplateHelpers.cs:1333-1351 |
| 12b | user.accountAge: time since the bot's User row CreatedAt | LegacyTemplateHelpers.cs:570-574; BaseEntity.cs:16-18 |
| 12c | random.user: display name from SessionChatters (chatted this stream), else user | LegacyTemplateHelpers.cs:472-480; ChatMessageHandler.cs:153-156; ChannelOnlineHandler.cs:153 |
| 13 | Twitch pings only by login; display name differing beyond case is written as login in chat | server/src/NomNomzBot.Application/Chat/Services/ChatMentionName.cs:16-20, 26-30 |
| 14 | Applies to user, target.name, target.displayname, name | ChatMentionName.cs:70-93 |
| 15 | Speech puts the display name back | ChatMentionName.cs:32-51 |
| 18 | Escapes \{ \} \| \: \\; unclosed or empty braces stay text; nesting up to 8 | server/src/NomNomzBot.Infrastructure/Platform/Templating/Parsing/TemplateParser.cs:17-21, 25 |
| 19 | Each place has its own helper set; command has args, event response never | server/src/NomNomzBot.Application/Abstractions/Templating/TemplateHelperContext.cs:14-27 |
| 20 | Pipeline gets every helper command or event response can use | TemplateHelperContext.cs:29-35; Reg:27-31 |
| 21 | Timers: channel/time/random/counter/list, no person, no args | TemplateHelperContext.cs:26; Reg:32-40 (AllContexts includes Timer), Reg:583-652 |
| 22 | Discord: same plus Discord names such as channel.url | TemplateHelperContext.cs:37-45; Reg:765-773 |
| 23 | Webhook: channel, person, time, random, counter, list; no event values, no args | REG (server/src/NomNomzBot.Application/Abstractions/Templating/TemplateHelperRegistry.cs):32-40 (AllContexts has Webhook), 62-68 (TriggerContexts has Webhook), 91-95 (CommandArgContexts lacks it), 98-106 (EventSourceOnlyContexts lacks it) |
| 23a | Channel time = the Timezone set on the Bot basics settings page | dashboard/src/views/dashboard/settings/i18n/en.json:97-99 ("Timezone", "Used for schedules and for times shown in replies."); dashboard/src/i18n/locales/en.json:882 ("Bot basics"); BasicsView.vue:12 |
| 23b | HTML defined: markup that styles overlay text; a plain reply does not need it | ReplyDelivery.cs:38-46 (plain reply path); ReplyTemplateRenderer.cs:52-65 |
| 23c | tts.audioconnected link to widgets-and-alerts page | true only when a TTS caption widget page is open: LegacyTemplateHelpers.cs:581-586 (ResolveAudioSourceConnected); factcheck round 4 trace OPR:38, 118-122, OverlayHub.cs:221-223 (tts_caption marks TTS source); label "TTS caption" dashboard/src/views/dashboard/obs/i18n/en.json:60-61; link /reference/overlays/widgets-and-alerts |
| 26a | user.messageCount and viewer.messages give the same total | Leg:749-751 (profile TotalMessages); Leg:1213 (profile TotalMessages) |
| 35c | diff is never negative | DateSpanFormatter.cs:85-100 (counts from earlier to later) |
| 24 | All examples belong to one moment (Tue 2026-10-06 22:15 channel time, 20:15 UTC, live since 18:00 UTC) | Writer's chosen base; every time-based example computed from the code below, not from Smp. 2026-10-06 is a Tuesday (2026-01-01 Thursday + 278 days). Uptime: StreamText.cs:71 `{h}h {m}m` of 20:15 - 18:00 = `2h 15m`; {time} format is `HH:mm:ss` (Leg:394), see row 33 |
| 25 | Channel and stream table (keys, descriptions, examples); `{stream.viewers}` removed: Reg:202 lists it but no resolver sets it (LegacyTemplateHelpers.cs:399-449 never adds it; only `stream.viewers.compact` StreamLiveHelpers.cs:107 and `stream.viewers.peak` StreamStatsHelpers.cs:23 resolve) | Reg:195-207, 604; Leg:414-436; en:2540-2545, 2629-2640, 2675, 2682; Smp:23-35, 117 |
| 26 | Person table (user, user.name, user.id, provider, accountAge, followAge, pronouns, messageCount, lastmessage, link) | Reg:657-678; en:2683-2696; Smp:131-140. Description of user/user.name taken from Smp + ChatMentionName.cs:46-49, 67-68 (see Defects in return file) |
| 27 | Target is the name typed after the command | Reg:694 ("@mention target"); ChatMentionName.cs:82-85 |
| 28 | Target table | Reg:695-712; en:2648-2668; Smp:151-160 |
| 29 | name and link mirror target else user; link is `twitch.tv/<login>` with no scheme | Reg:728-730; Leg (LegacyTemplateHelpers.cs):614-646 (`$"twitch.tv/{login.ToLowerInvariant()}"`). Smp:172 shows https:// and is wrong (Defect) |
| 30 | args and args.N | Reg:654-655; en:2535-2536; Smp:129-130 |
| 31 | Pronoun helpers mirror target else user; user./target. prefixes; verb:sing\|plur | Reg:731-761; en:2575, 2593, 2605, 2615, 2640, 2673, 2700; Smp:173-192 |
| 32 | tense gives is, are, was or were, following live/offline and pronouns; example `are` (live, they/them) | Leg:601-608 (live → side presenttense, fallback `are`; offline → pasttense, fallback `were`); Leg:1405-1416, 1420-1427; en:2675 says is/was only (Defect) |
| 32b | stream.startedAt example `2026-10-06T18:00:00.0000000+00:00` | Leg:426-429 (`WentLiveAt?.ToString("O")`); WentLiveAt is DateTimeOffset? (Domain/Platform/Interfaces/IChannelRegistry.cs:171) |
| 32a | presentTense `are` and verb:plays\|play gives `play` for they/them pronouns | Reg:731-761 (plural form for "they"); page's example pronouns are they/them |
| 33 | time `22:15:00`, time.utc `20:15:00 UTC`, date `2026-10-06` | Leg:393-396 (`HH:mm:ss`; UTC + " UTC"; `yyyy-MM-dd`, channel zone) |
| 33a | Pattern letters table: dddd Tuesday, d 6, MMMM October, yyyy 2026 | .NET custom format letters on the base date (DateOutputFormatter.cs FormatPattern) |
| 34 | date: source forms (now, utc, a date, a helper) | Reg:589; en:2563 |
| 35 | Date steps table; examples computed from the code on the base moment Tue 2026-10-06 22:15 channel time (UTC+2), 20:15 UTC, stream start 18:00 UTC (see Computed examples) | Reg:590-602; Infrastructure/Platform/Templating/Dates/DateExpressionParser.cs:60-240; DateCalculator.cs (Apply, AddPart, Snap: end = next start minus one tick); DateOutputFormatter.cs (DefaultPattern "yyyy-MM-dd HH:mm", `[o]` ordinal token, relative = Humanizer against now); DateSpanFormatter.cs (Total, Breakdown skips zero parts and has no weeks, Human precision 2) |
| 35a | human is the default for until/since/diff | DateExpressionParser.cs ParseNowSpan (null argument → Human), ParseDiff (no unit → Human) |
| 35b | Pattern letters are .NET custom date format letters | DateOutputFormatter.cs FormatPattern (DateTimeOffset.ToString(piece, culture)) |
| 36 | Random, counter, list, custom, transform table; random.number.50.990.10 example `420` lies in range on the step | Reg:606-652; en:2550-2551, 2584, 2617-2619, 2681; Leg:791-795 (draws inside MIN..MAX on STEP). Smp:120 `42` is impossible (Defect) |
| 37 | Upper case shown once as text.upper (registered key); the transform.upper row is removed | server/src/NomNomzBot.Infrastructure/Platform/Templating/Helpers/Text/CaseTextHelpers.cs:19 (`text.upper`, sample `HELLO`) |
| 37a | A name may hold dots; a colon ends the name and the rest is the input | server/src/NomNomzBot.Infrastructure/Platform/Templating/Parsing/TemplateParser.cs:73, 121 |
| 38 | Unset counter shows 0; names lowercase up to 50 chars; pipeline steps set and change them | server/src/NomNomzBot.Application/Commands/Services/INamedCounterService.cs:16-19, 39-42 |
| 39 | Named rolls: once per reply (render), read again, complement = 100 minus; example 72 and 28 | Leg:824-865 ("draws once and stores the value under NAME for this render"); Reg:619-631. Smp:121-123 `13`/`87` impossible for 60..98 (Defect) |
| 40 | Chat statistics table (viewer./target.); examples computed: watchtime 43200 s → `12h 0m`; firstseen `2026-09-06` (or `unknown`); days to 2026-10-06 = `30`; avgperday 250/30 = `8`; botpercent 8*100/250 = `3` | Leg:1213-1236; Infrastructure/Analytics/WatchTimeFormatter.cs Format (`{h}h {m}m`) |
| 41 | target.lastmessage cut to 80 characters; target.lastmessage.full not cut, skips links | Leg:1491-1511 (CutWithEllipsis, LastMessageMaxLength = 80 at Leg:1598); Leg:1514-1545 (no http/https/www messages) |
| 41a | custom.<source>.<field> = latest value from the channel's custom data source; missing → empty | Leg:262-270; source set up through CustomDataSourcesController (map row /reference/integrations/webhooks-and-event-feeds) |
| 41b | Both: plain reply once, HTML reply twice | Domain/Commands/ValueObjects/ReplyDelivery.cs:38-46, 69-72; ReplyTemplateRenderer.cs:52-65 |
| 42 | More groups exist, each a namespace; the reply box lists them with an example per place | server/src/NomNomzBot.Infrastructure/Platform/Templating/TemplateHelperRegistryAggregate.cs:16-64; TemplatesController.cs:23-26, 39-47; provider rows use all non-viewer contexts: server/src/NomNomzBot.Application/Abstractions/Templating/TemplateHelperContexts.cs:17-22 |
| 43 | if, default, switch, chance, pick; if/default forms | Str/strings_template_logic.xml:7-8, 12, 28 |
| 44 | set / var | Str/strings_template_logic2.xml:23; TemplateResolver.cs:163-166 |
| 45 | text namespace, text.upper | Str/strings_template_text_a1.xml:7, 11 |
| 46 | math, num, meter | Str/strings_template_numbers.xml:7, 11 |
| 48 | user.display, user.login | Str/strings_template_people.xml:11-12 |
| 49 | stream.uptime.long gives "2 hours, 15 minutes" | Str/strings_template_stream.xml:11 |
| 50 | chat, tts, link: fit one line, speech-ready text, share links | Str/strings_template_chat.xml:7, 12; tts_plain and link_x rows |
| 51 | emote by name | Str/strings_template_emote.xml:11 |
| 52 | fun: coin, dice, rps, card, slots | Str/strings_template_fun.xml:11-20 |
| 53 | quote by number; random.chatter this stream | Str/strings_template_logic2.xml:12, 16 |
| 54 | poll, prediction, hypetrain, goal, charity running now | Str/strings_template_liveevents1.xml:7, 11; Str/strings_template_liveevents2.xml:7, 11 |
| 55 | ad, schedule, activity | Str/strings_template_broadcast.xml:7, 11, 23, 41 |
| 56 | music now playing and queue | Str/strings_template_music.xml:11 (music_now), music_queue_length row |
| 57 | lookup.twitch, lookup.game, lookup.currency, lookup.weather, lookup.time, lookup.translate | server/src/NomNomzBot.Infrastructure/Platform/Templating/Helpers/Lookups/LookupTwitchHelpers.cs:28, LookupGameHelpers.cs:23, LookupCurrencyHelpers.cs:26 (sample "10 EUR = 11.62 USD"), LookupWeatherHelpers.cs:24 (sample "Amsterdam: 12 °C, light rain"), LookupTimeHelpers.cs:26, LookupTranslateHelpers.cs:26. lookup.data is not a helper: LookupData.cs:32 is an internal cache key |
| 60 | include another command's reply | Str/strings_template_logic2.xml (template_helper_include_cmd) |
| 61 | Scripts and widgets use the same helpers | server/src/NomNomzBot.Api/Controllers/V1/OverlayController.cs template-render route (slice s17 row 206, "rendered through the one resolver"); ScriptHostBridge.cs uses ITemplateResolver |
| 62 | Discord-only helpers such as channel.url; first-use links to event responses, timers, pipelines, Discord, webhooks, TTS, pick lists | Reg:765-773; TemplateHelperContext.cs:36-44; links are map rows |
| 63 | HTML-encoded values: a typed `<` shows as the character | ReplyTemplateRenderer.cs:23-26, 68-78 (HTML encoding of each value) |
| 64 | Date sources now / utc / a date in channel time / a helper | DateSourceReader.cs:19-40 |

## Computed examples (base: Tue 2026-10-06 22:15 channel zone UTC+2 = 20:15 UTC)

| Expression | Result | How |
| --- | --- | --- |
| default output | 2026-10-06 22:15 | DefaultPattern yyyy-MM-dd HH:mm |
| format:dddd d MMMM yyyy | Tuesday 6 October 2026 | .NET ToString, en culture |
| +1d | 2026-10-07 22:15 | PlusDays(1) |
| start:month / end:month | 2026-10-01 00:00 / 2026-10-31 23:59 | Snap; end = Nov 1 minus one tick, shown HH:mm |
| next:friday / prev:monday | 2026-10-09 22:15 / 2026-10-05 22:15 | NodaTime Next/Previous (strict) |
| tz:America/New_York | 2026-10-06 16:15 | 20:15 UTC in EDT (UTC-4) |
| lang:nl + format | dinsdag 6 oktober 2026 | nl-NL day and month names |
| {stream.startedAt}\|relative | 2 hours ago | Humanizer DateTime humanize, 2h15m before now |
| ordinal | 6th | Day.Ordinalize |
| 2026-12-25\|until:days | 79 days | Period.Between days, 2026-10-06 22:15 to 2026-12-25 00:00 = 79 d 1 h 45 m |
| 2025-09-20\|since:breakdown | 1 year, 16 days, 22 hours, 15 minutes | Period Y/M/D/h/m/s, zero months dropped |
| now\|diff:2025-08-21:days | 411 days | 365 + 31 + 15 |
| stream.uptime | 2h 15m | StreamText.cs:71 |
| random.number.50.990.10 | 420 | in range, multiple of 10 from 50 |
| roll.pct.60.98 / complement | 72 / 28 | in range; 100 - 72 |
