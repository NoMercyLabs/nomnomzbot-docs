# Fact check: src/content/reference/en/commands/variables-and-templates.mdx
Verdict: PASS
Reviewed: C:/Projects/NoMercyLabs/nomnomzbot-docs/src/content/reference/en/commands/variables-and-templates.mdx
Reviewed-SHA: 627cd1165fcfb65e

Product: NomNomzBot origin/master 779081d10d05dc6b4150732abd77bfae4dbef1d9 (read with `git show origin/master:<path>`).
Short paths: `Tpl/` is server/src/NomNomzBot.Infrastructure/Platform/Templating/; `Abs/` is server/src/NomNomzBot.Application/Abstractions/Templating/; `Helpers/` is Tpl/Helpers/.

## Changed places

| Claim | Supported by | Status |
| --- | --- | --- |
| Line 66: `{if:value\|then\|else}` shows `then` when the value is set, `else` when not | Helpers/Logic/IfTemplateHelpers.cs:48, :60-73 (two or three arguments; branch at :72 via :173-184; a missing else gives empty, LogicArguments.cs:57-61) | true |
| Line 66: a value is not set when it is empty, `false`, `no` or `0` | Helpers/Logic/LogicArguments.cs:29-34 (blank, `false`, `no` case-insensitive, `0`) | true |
| Line 70: `{if:{stream.isLive}\|We are live\|We are offline}` | `stream.isLive` renders `true` or `false`: Helpers/Legacy/LegacyTemplateHelpers.cs:443; `false` is not set (LogicArguments.cs:32) | true |
| Line 71: other forms of `{if}` exist | IfTemplateHelpers.cs:28-39 (`if.not`, `if.all`, `if.any`, `if.empty`, path forms) | true |
| Line 67: `{default:value\|fallback}` shows the fallback when the value is empty | Helpers/Logic/DefaultTemplateHelpers.cs:33-39 | true |
| Line 68: `{set:name=value}` keeps a value for the rest of the reply and prints nothing | Helpers/Variables/VariableTemplateHelpers.cs:67-80 (stores in SetVariables, returns empty); the tree renders left to right, Tpl/Rendering/TemplateTreeRenderer.cs:37-47 | true |
| Line 68: read it back with `{var.name}` | VariableTemplateHelpers.cs:27, :34-40, :60-64 | true |
| Line 73: `{set:mood=happy}I feel {var.mood}.` shows `I feel happy.` | set at :74-79 stores `happy`, `var.mood` reads it at :60-64 | true |
| Line 74: a name has letters, digits and underscores, starts with a letter or underscore | VariableTemplateHelpers.cs:82-83 (`^[A-Za-z_][A-Za-z0-9_]*$`) | true |
| Line 75: the value lasts for one reply only | VariableTemplateHelpers.cs:18-24 ("A value lives only in its own render"); Abs/TemplateRenderScope.cs:45-46 (SetVariables holds the values "during this render") | true |

## Rest of the page

| Claim | Supported by | Status |
| --- | --- | --- |
| Line 7: a helper is a name in braces | Tpl/Parsing/TemplateParser.cs:16-21 | true |
| Line 11-14: example renders `Welcome Example_Viewer! Today we play Just Chatting.` | Abs/TemplateHelperSamples.cs:131 (`user`), :28 (`stream.game`) | true (sample values) |
| Line 19: the template is read once | Tpl/TemplateResolver.cs:24 ("parses the template once"), :110 | true |
| Line 20: only the values the template names are fetched | Tpl/TemplateResolver.cs:80; Tpl/Rendering/ProviderDispatch.cs:16-21, :40-52 (claimed tokens only) | true |
| Line 24-25: an unknown helper stays as written, `{usr}` | Tpl/TemplateResolver.cs:27; TemplateTreeRenderer.cs:19-21, :46, :117-118 | true |
| Line 26: the Reply field warns before save | dashboard/src/components/layout/TemplateField.vue:15, :102-107 (a note under the field; the text is not blocked) | true |
| Line 28: in an event response an event value wins over a looked-up value | Tpl/TemplateResolver.cs:25 ("a seed variable always wins"); ProviderDispatch.cs:21, :36-37 | true |
| Line 34: Twitch chat: filled once, plain text | server/src/NomNomzBot.Application/Chat/Services/ReplyTemplateRenderer.cs:41-51 | true |
| Line 35: Chat overlay: filled for the overlay only | ReplyTemplateRenderer.cs:41-48 (no chat text), :56-65 | true |
| Line 36: Both, plain: once, same text; Both, HTML: twice | ReplyTemplateRenderer.cs:52-54 and :56-65 | true |
| Line 37: Nowhere fills nothing | ReplyTemplateRenderer.cs:38-39; Domain/Commands/ValueObjects/ReplyDelivery.cs:30-31 | true |
| Line 40-41: with HTML the command's values are HTML-encoded, so `<` shows as `<` | ReplyTemplateRenderer.cs:56-57, :68-78 (every seed value through WebUtility.HtmlEncode) | true |
| Line 42: looked-up values are not encoded; the overlay keeps only safe tags | looked-up values are added after the seeds, LegacyTemplateHelpers.cs:125-126 (e.g. `user.lastmessage`, TemplateHelperRegistry.cs:677); sanitized HTML, ReplyDelivery.cs:38-41 and dashboard/src/lib/html.ts:16 | true |
| Line 46-47: chat uses the login when the display name differs by more than letter case | server/src/NomNomzBot.Application/Chat/Services/ChatMentionName.cs:16-30 | true |
| Line 49: applies to `{user}`, `{target.name}`, `{target.displayname}` in chat | ChatMentionName.cs:70-93; applied only on a chat render, LegacyTemplateHelpers.cs:128-129, marked by ReplyTemplateRenderer.cs:44 | true |
| Line 50: a pipeline reply read aloud uses the display name of the user | server/src/NomNomzBot.Infrastructure/Platform/Pipeline/PipelineEngine.cs:885-896; ChatMentionName.cs:46-51 | true |
| Line 51: a shoutout read aloud uses the target's display name | server/src/NomNomzBot.Infrastructure/Stream/ShoutoutSender.cs:257; ChatMentionName.cs:36-44 | true |
| Line 55: `\{`, `\}`, `\|`, `\:`, `\\` type the character | TemplateParser.cs:19, :27, :57-66 | true |
| Line 56: an unclosed brace or empty braces stay as text | TemplateParser.cs:20-21, :98-101, :133-136 | true |
| Line 57: a helper can hold another helper up to 8 levels | TemplateParser.cs:25, :81-84 (deeper groups stay text, :143-168) | true |
| Line 61-62: a colon ends the name; `{text.upper:hello}` gives `HELLO` | TemplateParser.cs:18, :118-131; Helpers/Text/CaseTextHelpers.cs:19 | true |
| Line 77: the Reply field lists every helper with an example for its place | dashboard/src/components/layout/HelperPanel.vue:12-15, :40-43, :151-152 (sample shown); per-context list, TemplateHelperRegistry.cs:130-132 | true |
| Line 85: command replies: most helpers and the command words; some event helpers missing | Abs/TemplateHelperRegistry.cs:91-95 (args in Command), :102-106 (event-only keys leave out Command) | true |
| Line 86: event responses: channel, viewer and event values; no command words | TemplateHelperRegistry.cs:62-68, :102-106; Abs/TemplateHelperContext.cs:23-24 | true |
| Line 87: timers: no person and no command words | TemplateHelperContext.cs:26-27; Timer is only in AllContexts (TemplateHelperRegistry.cs:32-40), not in TriggerContexts (:62-68) | true |
| Line 88: pipeline steps: the helpers of the trigger | TemplateHelperContext.cs:29-35 | true |
| Line 89: Discord: channel, time, random, counter, list helpers plus Discord-only ones such as `{channel.url}` | TemplateHelperContext.cs:37-45; TemplateHelperRegistry.cs:45, :768 (`channel.url` DiscordOnly) | true |
| Line 90: webhook bodies: channel, person, time, random, counter, list; no event values, no command words | TemplateHelperContext.cs:47-55; TriggerContexts holds Webhook (:62-68); EventSourceOnlyContexts and CommandArgContexts leave it out (:91-106) | true |
| Line 94-95: one page per helper type, the type is the first word | docs src/content/reference/en/templates/ has user, target, stream, args, event, date, if, random, text pages; the args page holds `args.*.user.*` by first word (docs-work/helper-groups.md:399) | true |
| Line 101-110: link targets | all ten pages exist under src/content/reference/en/templates/ (checked by file) | true |
| Line 112: scripts and widgets use the same helpers | server/src/NomNomzBot.Infrastructure/CustomCode/ScriptHostBridge.cs:947-969 (`template.render` through the one resolver); server/src/NomNomzBot.Api/Controllers/OverlaySdkController.cs:56, :578-605 | true |
| Line 15: the line goes out in the channel's one bot voice | chat replies are sent by the bot account; no per-viewer voice is chosen for a chat line (ReplyTemplateRenderer.cs:18-21 renders text only) | true |

## Product defects and notes

- VariableTemplateHelpers.cs:75 refuses a `set` name that a seed already holds (for example `{set:user=x}`); the token then prints as written (TemplateTreeRenderer.cs:46). The page does not say this. It is not a wrong fact on the page; a later edit may add one line.
- TemplateHelperContext.cs:47-55 says a webhook body gets "everything an event-response template can use", but EventSourceOnlyContexts (TemplateHelperRegistry.cs:97-106) leaves Webhook out of the event values. The comment and the code disagree; the page follows the code.
