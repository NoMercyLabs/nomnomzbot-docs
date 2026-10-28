# Fact check: src/content/reference/en/commands/variables-and-templates.mdx
Verdict: PASS
Reviewed: src/content/reference/en/commands/variables-and-templates.mdx
Reviewed-SHA: 8a34a8eb3936eb04

Round 7. The four round-6 findings are closed, each one checked against the code this round:

1. `{user.accountAge}` "How long ago the bot first saw them" (page line 101): LTH:711-714 computes `now - user.CreatedAt` on the bot's User row. Supported.
2. `{botname}` "NomNomzBot unless a name is stored for the bot" (page line 83): LTH:1333-1351 returns `service?.UserName ?? "NomNomzBot"`. Supported.
3. HTML paragraph (page lines 40-42): RTR:55-63 encodes only the variables passed in (HtmlEncoded, RTR:70-77); ChatMessageHandler seeds those as user, user.id, user.name, user.provider, args (CMH:1823-1855). Looked-up values are added later by the resolver and are not encoded. The overlay runs ChatHtmlSanitizer when Html is on (RD:98-100). Supported.
4. `{random.user}` (page line 219): LTH:472-480 picks from `SessionChatters`, falls back to `user`; filled on chat (CMH:153), cleared on go-live (ChannelOnlineHandler.cs:153). Example `Example_Viewer` is a display name. Supported.

Opened again this round: the producing code for 30 of the 68 helper keys (the changed rows, channel/stream, time, status/tense, tts, target, name/link, args, user seeds, random, counters, lists, rolls, viewer stats) and the date default output. The other rows (lastmessage family, pronoun words, date steps and units, 16 group rows) are unchanged since round 6, which opened their lines; their cited lines are unchanged in the page. No action key and no numbered permission level is on the page. The bot reply is described in the one bot voice (page line 15; RD:94-100 posts the overlay line as the channel bot).

Paths: LTH = server/src/NomNomzBot.Infrastructure/Platform/Templating/Helpers/Legacy/LegacyTemplateHelpers.cs; REG = server/src/NomNomzBot.Application/Abstractions/Templating/TemplateHelperRegistry.cs; HLP = server/src/NomNomzBot.Infrastructure/Platform/Templating/Helpers/; DATES = server/src/NomNomzBot.Infrastructure/Platform/Templating/Dates/; CMH = server/src/NomNomzBot.Infrastructure/Chat/EventHandlers/ChatMessageHandler.cs; CMN = server/src/NomNomzBot.Application/Chat/Services/ChatMentionName.cs; RTR = server/src/NomNomzBot.Application/Chat/Services/ReplyTemplateRenderer.cs; RD = server/src/NomNomzBot.Infrastructure/Chat/ReplyDispatcher.cs; TP = server/src/NomNomzBot.Infrastructure/Platform/Templating/Parsing/TemplateParser.cs.

## Product defects

- `{user.accountAge}` reads the bot's row creation date (LTH:713), not `User.AccountCreatedAt` (server/src/NomNomzBot.Domain/Identity/Entities/User.cs:80-83).
- `{botname}` reads `Service.UserName` (LTH:1341-1345); no code writes that field, so it always gives NomNomzBot.
- An HTML overlay reply does not encode looked-up viewer text (last message, random message, random user); only the seeded variables are encoded (RTR:55-77), and the sanitizer keeps its allow-listed tags (RD:98-100).
- Still open from earlier rounds: `{stream.viewers}` is requested in LTH:406 and listed in REG with no value set in LTH:416-437.

## Claim table

| Claim | Supported by | Status |
| --- | --- | --- |
| Reply is a template; unknown helper stays as written; `{usr}` stays | TP:17-22; LTH:615-619 (resolver leaves unknown variables as-is) | supported |
| Reply field warns before save | dashboard/src/i18n/locales/en.json:185; commands/i18n/en.json:41 "Reply" | supported |
| Reads once, fetches only named values | LTH:388, 400-413, 520-529 (NeedsAny gates) | supported |
| Event value wins over a looked-up value | LTH:394-396, 416-427 (TryAdd) | supported |
| One bot voice | RD:94-100 | supported |
| Send the reply to: Twitch chat / Chat overlay / Both / Nowhere | RTR:38-65 | supported |
| Only values that come with the command are HTML-encoded; looked-up values are not; overlay keeps safe tags | RTR:55-77; CMH:1823-1855; RD:98-100 | supported |
| Chat uses login when display differs beyond case; speech uses display | CMN:26-37 | supported |
| Escapes `\{ \} \| \: \\`; unclosed/empty braces stay; depth 8 | TP:17-25 | supported |
| Colon ends the name; dots allowed | TP:17-19 | supported |
| Places table (command, event response, timer, pipeline, Discord, webhook) | REG:32-40, 62-68, 91-106, 194-206, 654-672, 768 | supported |
| Channel time = Timezone on Bot basics; time, time.utc, date formats | LTH:388-396 | supported |
| channel, channel.display, channel.id, streamer | LTH:416-421 | supported |
| botname: NomNomzBot unless a name is stored | LTH:1333-1351 | supported |
| stream.title, stream.game, stream.isLive, stream.startedAt "O" | LTH:422-427 | supported |
| stream.uptime `2h 15m` | LTH:429-437 (FormatUptime) | supported |
| status live/offline; tense is/are/was/were | LTH:597-609 | supported |
| tts.audioconnected = TTS caption page open | LTH:580-585 | supported |
| user, user.name, user.id, user.provider | CMH:1823-1828 | supported |
| user.accountAge = since the bot first saw them | LTH:711-714 | supported |
| user.followAge, target.followAge | LTH:728-736, 762-790 | supported |
| user.pronouns | LTH:717-721 | supported |
| user.messageCount = viewer.messages total | LTH:740-749, 1082 | supported |
| user.lastmessage, target.lastmessage cut to 80, .full, randommessage | LTH:648-650 and following blocks (round 6: 1460-1612) | supported |
| user.link, target.link, link `twitch.tv/<login>` | LTH:625-646 | supported |
| target, target.name, target.id, target.known, target.displayname | LTH:572-579; CMH (MentionParser) | supported |
| name, link mirror target else user | LTH:611-646 | supported |
| args, args.1 | CMH:1854-1855 | supported |
| subject, object, possessive, presentTense, genderedTerm; verb:plays\|play | LTH:589-591 (ApplyPronounGrammarBareAndFallback), 182-215 | supported |
| random.user display name of a chatter this stream, else user | LTH:472-480; CMH:153; ChannelOnlineHandler.cs:153 | supported |
| random.number.N, min.max.step | LTH:795-812 | supported |
| random.pick.a.b.c | LTH:481-492 | supported |
| roll.name.min.max, roll.name, roll.name.complement | LTH:825-860 | supported |
| count.<key>, unset 0, lowercase, max 50 | LTH:669-670, 1026-1040; INamedCounterService.cs:16-19 | supported |
| list.pick.<name> | LTH:249-262 | supported |
| custom.<src>.<field> | LTH:265-310 | supported |
| viewer.* stats, firstseen or unknown, data.key | LTH:1082-1090, 1172-1236 | supported |
| Date sources now / utc / ISO date / helper | DATES/DateSourceReader.cs:34-61 | supported |
| Default `yyyy-MM-dd HH:mm`; format; [o]; relative; ordinal | DATES/DateOutputFormatter.cs:24-45 | supported |
| Offsets, start/end, next/prev, tz, lang | DATES/DateExpressionParser.cs:48, 83-87, 112-163 | supported |
| until, since, diff units; breakdown; human default | DATES/DateExpressionParser.cs:175-226; DateSpanFormatter.cs:43-63 | supported |
| Date example values | Hand arithmetic on Tue 2026-10-06 20:15 UTC with the code above | supported |
| Helper groups (if..include) | HLP files listed in round 6 (IfTemplateHelpers.cs:26, VariableTemplateHelpers.cs:33-39, CaseTextHelpers.cs:19, StreamText.cs:23-37, QuoteTemplateHelpers.cs:19-30, IncludeTemplateHelpers.cs:19-32, Lookups) | supported |
