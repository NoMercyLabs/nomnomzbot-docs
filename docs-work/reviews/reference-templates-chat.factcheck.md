# Fact check: src/content/reference/en/templates/chat.mdx
Verdict: PASS
Reviewed: C:/Projects/NoMercyLabs/nomnomzbot-docs/src/content/reference/en/templates/chat.mdx
Reviewed-SHA: 72b295abcdf05dc7

Product read: NomNomzBot origin/master 779081d10d05dc6b4150732abd77bfae4dbef1d9 (git fetch run 2026-10-29; every file opened with `git show origin/master:<path>`).
The helper code and strings for this page did not change between the export commit a8f180821 and origin/master.

This pass reviewed the repaired places in full: the `{raw.message}` intro paragraph (page lines 11-14), the `{link.x}` example (line 42) and the `{tts.plain}` example (line 47). Then it sampled the table.

## All rows, scripted
A scratch script read all 29 rows. Each description equals the first line of its English string in server/i18n/strings/values (strings_template_chat.xml, or strings.xml for `raw.message`), or equals its line in docs-work/helper-groups.md "## Description corrections" (`chat.fit`, `link.mastodon`). Each key is a row of docs-work/helpers.json.

## Sample (17 rows: first, last, the three repaired rows, and every second row between)

| Page line | Key | Product file:line | Description equals product text | Example plausible |
| --- | --- | --- | --- | --- |
| 20 | `chat.fit` | ChatFitHelpers.cs:27-33, Fit :45-58 (a text within the limit is returned whole, :49-50) | correction helper-groups.md, true (EndOf :42-43 takes the end text after a pipe) | yes: `short text` fits; ChatHelpersTableTests.cs:24 |
| 22 | `chat.isShared` | ChatModeHelpers.cs:21-27 (PeopleText.Flag) | yes, strings_template_chat.xml:23 | yes: `false`; ChatHelpersTableTests.cs:40 |
| 24 | `chat.me` | ChatMentionHelpers.cs:31, Action :51-54 (`/me ` on Twitch, plain elsewhere) | yes, strings_template_chat.xml:18 | yes: `/me dances`; ChatHelpersTableTests.cs:33 |
| 26 | `chat.mention.off` | ChatMentionHelpers.cs:24 (ChatText.BareName) | yes, strings_template_chat.xml:15 | yes; ChatHelpersTableTests.cs:29 |
| 28 | `chat.mention.user` | ChatMentionHelpers.cs:30, MentionUser :36-39 (the `user` seed with an @) | yes, strings_template_chat.xml:17 | yes; ChatHelpersTableTests.cs:32 |
| 29 | `chat.message` | ChatMessageHelpers.cs:19 (the `message` seed; seeded at ChatMessageHandler.cs:1850-1851) | yes, strings_template_chat.xml:19 | yes; ChatHelpersTableTests.cs:35 |
| 31 | `chat.message.length` | ChatMessageHelpers.cs:20-27 (ChatText.Elements count) | yes, strings_template_chat.xml:20 | yes: `hello big world` has 15 characters; ChatHelpersTableTests.cs:36 |
| 33 | `chat.pinned` | ChatModeHelpers.cs:46-55 (the pinned Content, empty when none) | yes, strings_template_chat.xml:29 | yes; ChatHelpersTableTests.cs:49 |
| 35 | `chat.settings.followersOnly` | ChatModeHelpers.cs:43, FollowersOnly :76-79 (minutes as a span, `on` with no time, else `off`) | yes, strings_template_chat.xml:26 | yes: `10m`; ChatHelpersTableTests.cs:45 |
| 37 | `chat.settings.subOnly` | ChatModeHelpers.cs:44 | yes, strings_template_chat.xml:27 | yes; ChatHelpersTableTests.cs:46 |
| 39 | `link.bluesky` | LinkShareHelpers.cs:22-26, Share :44-45 | yes, strings_template_chat.xml:35 | yes; ChatHelpersTableTests.cs:67 |
| 40 | `link.mastodon` | LinkShareHelpers.cs:32-41 (host from the first argument, text from the second) | correction helper-groups.md, true | yes; ChatHelpersTableTests.cs:69-72 |
| 42 | `link.x` | LinkShareHelpers.cs:17-21, Share :44-45 (prefix + Uri.EscapeDataString of the text) | yes, strings_template_chat.xml:34 | yes, see the repaired-row check |
| 43 | `raw.message` | TemplateHelperRegistry.cs:773 (DiscordOnly); SendDiscordNotificationAction.cs:73-79; sample TemplateHelperSamples.cs:202 | yes, strings.xml:5465 | yes: `!hello world`, a whole chat line |
| 45 | `tts.lexicon` | TtsTextHelpers.cs:43-49 (ApplyLexiconAsync) | yes, strings_template_chat.xml:33 | yes; ChatHelpersTableTests.cs:60 |
| 47 | `tts.plain` | TtsTextHelpers.cs:24-36, Plain :52-60 | yes, strings_template_chat.xml:30 | yes, see the repaired-row check |
| 48 | `tts.plain.keepEmotes` | TtsTextHelpers.cs:37 (Plain with no emote list) | yes, strings_template_chat.xml:31 | yes; ChatHelpersTableTests.cs:55 |

## Repaired rows
- Line 42, `{link.x:Live now}` gives `https://x.com/intent/post?text=Live%20now`: true. LinkShareHelpers.cs:17-21 builds `link.x` with the prefix `https://x.com/intent/post?text=`, and Share (:44-45) appends `Uri.EscapeDataString(text)`, which writes the space as `%20`. The same form for Bluesky and Threads is tested at ChatHelpersTableTests.cs:67-68; the registry sample is the same URL (LinkShareHelpers.cs:19).
- Line 47, `{tts.plain:hi @ViewerTwo KEKW https://a.b 𝐡𝐢}` gives `hi ViewerTwo hi`: true for a channel that has the emote KEKW. Plain (TtsTextHelpers.cs:52-60) folds the bold letters with NFKC (`𝐡𝐢` becomes `hi`), replaces the link (regex `(?:https?://|www\.)\S+`, :81-83), drops the @ (ChatText.BareName) and drops every channel emote code (:58; codes from EmoteCodesAsync, :31). ChatHelpersTableTests.cs:51-54 asserts this exact input and result; its fixture makes KEKW a channel emote (ChatHelperFixture.cs:34, :144). The row description says "no emotes of the channel", so the condition is on the page.

## Intro check (page lines 8-14)
- Lines 8-9, "read the chat message that started the reply, and the chat settings. They also fit a reply to the chat length limit, share a message to a social site and prepare text for speech": true for the rows on the page (message lines 29-32, settings lines 34-37, fit lines 20-21, share lines 39-42, speech lines 44-48).
- Line 11, "The row `{raw.message}` is marked "Discord pipeline seed alias"": true (line 43; strings.xml:5465).
- Line 12, "It works only in a Discord notification that a pipeline sends. The bot then fills in the chat message that started the pipeline": true. The row is registered for DiscordOnly (TemplateHelperRegistry.cs:773), "never resolved by TemplateResolver itself" (:42-45). The only code that sets `raw.message` is SendDiscordNotificationAction.cs:73-79, the pipeline action, which seeds `ctx.RawMessage`. A pipeline started by a chat command or a chat trigger gets the whole chat line as RawMessage (ChatMessageHandler.cs:534, :1636).
- Line 13, "In a command or an event response it stays as typed. In a command, use `{chat.message}` to read the chat message": true. No resolver at origin/master sets `raw.message` outside the Discord action (`git grep '"raw.message"'` over server/src finds only the registry, the samples and SendDiscordNotificationAction.cs:78). `{chat.message}` reads the `message` seed (ChatMessageHelpers.cs:19), which a chat command seeds with the whole line (ChatMessageHandler.cs:1850-1851).
- Line 14, "The channel helpers page explains the same mark for its rows": true; channel.mdx:11 explains "Discord seed alias".
- Line 16, "Each row is its own example": true.
- The intro names no helper that is missing from the page.

## Row count
29 table rows. docs-work/helper-groups.md:17 gives Count 29 for /reference/templates/chat. The front matter says 29. Equal.

## Findings
None.

## Product defects (not verdict items)
- A pipeline run through the command invoker (a chat trigger bound straight to a command, CommandInvoker.cs:382-392) sets RawMessage to the command arguments (`context.Args`, :390), not to the whole chat line. In that path `{raw.message}` in a Discord notification gives the arguments only, unlike the direct chat paths (ChatMessageHandler.cs:534, :1636). The string "The raw triggering chat message" (strings.xml:5465) does not cover that case.
