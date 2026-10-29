# Fact check: src/content/reference/en/templates/overview.mdx
Verdict: PASS
Reviewed: C:/Projects/NoMercyLabs/nomnomzbot-docs/src/content/reference/en/templates/overview.mdx
Reviewed-SHA: 9971bdacb6065ec8

Product: origin/master 779081d10d05dc6b4150732abd77bfae4dbef1d9 (git fetch run this pass). Files read with `git show origin/master:<path>`.
The page was read whole (73 lines). Its intro text comes from docs-work/helper-groups.md "## Overview" (lines 75-110), and the page matches it.

Short paths: `Res` = server/src/NomNomzBot.Infrastructure/Platform/Templating/TemplateResolver.cs. `Parser` = server/src/NomNomzBot.Infrastructure/Platform/Templating/Parsing/TemplateParser.cs. `Reg` = server/src/NomNomzBot.Application/Abstractions/Templating/TemplateHelperRegistry.cs.

## Claims

| Page line | Claim | Supported by | Status |
| --- | --- | --- | --- |
| 3 | 908 template helpers | The 29 page links sum to 908 (counted this pass); docs-work/helpers.json meta count 908; `git diff --stat a8f180821 origin/master` shows no registry, sample or helper provider change since the export | true |
| 6-7 | A helper is a name in braces; the bot fills in the value in chat, on an overlay or read aloud | Res:23-27; server/src/NomNomzBot.Application/Chat/Services/ReplyTemplateRenderer.cs:29-65; server/src/NomNomzBot.Infrastructure/Platform/Pipeline/PipelineEngine.cs:892 (the spoken reply) | true |
| 8 | `{user}` becomes the name of the person who used the command | server/src/NomNomzBot.Infrastructure/Chat/EventHandlers/ChatMessageHandler.cs:1840 | true |
| 10 | Type the helper in a reply, an event response or a timer | server/src/NomNomzBot.Application/Abstractions/Templating/TemplateHelperContext.cs:20-27 (Command, EventResponse, Timer) | true |
| 11 | A helper can hold another helper | Parser:18-19 (a `{...}` inside a key or argument is a nested token) | true |
| 13 | An unknown helper stays exactly as written | Res:27; server/src/NomNomzBot.Infrastructure/Platform/Templating/Rendering/TemplateTreeRenderer.cs:118 | true |
| 14 | The Reply field warns about an unknown helper before you save | dashboard/src/components/layout/TemplateField.vue:276; dashboard/src/i18n/locales/en.json:185 | true |
| 16 | Each place has its own set of helpers | TemplateHelperContext.cs:14-17; Reg:130 | true |
| 21-22 | The type is the first word; all `{user.*}` helpers are on the user page, all `{text.*}` on the text page | docs-work/helper-groups.md "## Types" rows for /reference/templates/user (`user.*`) and /reference/templates/text (`text.*`); user.mdx and text.mdx hold those rows | true |
| 23 | `{subject}` and `{verb:plays\|play}` are on the user page | user.mdx:33 and :43 | true |
| 24-25 | A word with few helpers joins its type; prediction helpers are on the poll page | helper-groups.md Types row for /reference/templates/poll lists `prediction`, `prediction.*` | true |
| 30 | Input after a colon, as in `{text.upper:hello}` | Parser:18; server/src/NomNomzBot.Infrastructure/Platform/Templating/Helpers/Text/CaseTextHelpers.cs:19 | true |
| 31 | More than one input with a pipe, as in `{text.repeat:3\|ha}` | Parser:18 (`\|` splits the arguments); text.mdx:77 (`{text.repeat:3\|ha}` gives `hahaha`) | true |
| 32 | A few helpers name an input, as in `{text.cut:hello world\|max=8}` | server/src/NomNomzBot.Infrastructure/Platform/Templating/Helpers/Text/CutTextHelpers.cs:36 reads the named argument `max` | true |
| 33 | The Example column shows a typed example and what it gives | user.mdx:42-43, text.mdx:63, :77 (rows of the form "`{...}` gives `...`") | true |
| 37-38 | The pronoun and grammar helpers give the right pronoun, verb and tense for he, she, they and other pronouns | server/src/NomNomzBot.Infrastructure/Platform/Templating/Helpers/Legacy/LegacyTemplateHelpers.cs:1043-1051 (the saved pronoun's words), :1037-1041 and :1059-1075 ("any" and "other" use the name), :200-234 (verb), :611-626 (tense) | true |

## Row count (the 29 page links)

Each link count equals the Count of its route in docs-work/helper-groups.md "## Types", and equals the table rows on the page file (counted with `grep -c '^| \`'` this pass):
user 75, target 46, channel 34, stream 62, chat 29, args 64, activity 19, event 33, poll 51, hypetrain 17, goal 14, charity 8, schedule 17, ad 15, bot 22, list 18, quote 7, var 7, music 54, date 17, if 26, random 23, fun 26, text 103, num 36, math 20, platform 25, emote 30, lookup 10. Sum 908. All match.

## Product changes after 564109db6

- The "any" and "other" name grammar (LegacyTemplateHelpers.cs:1037-1041, :1059-1075) keeps line 38 true: those people get correct words (their name, is, was).
- The text after a chat command is now interpreted once at input (server/src/NomNomzBot.Infrastructure/Chat/EventHandlers/ViewerArgsInterpreter.cs:24-42). The page says nothing about who may type helpers, so no sentence is made false.

## Product defects (not verdict items)

- None found on this page's claims.
