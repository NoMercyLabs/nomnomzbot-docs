# Claims: /reference/moderation/shoutouts

Product repository: nomnomzbot, master, read only. S = server/src/NomNomzBot.Infrastructure/Stream. V = dashboard/src/views/dashboard. L = dashboard/src/i18n/locales/en.json.

| Claim | Page line | Proof | Verdict |
| --- | --- | --- | --- |
| Page **Shoutouts**, settings page; card labels Automatic shoutouts, Shoutout message, Message, Save, Use the default, "Shoutout message saved." | 6, 12-13, 69-71, 98-103 | L:899; V/settings/shoutouts/route.ts; V/settings/shoutouts/i18n/en.json:6-20 | true |
| **Suggested shoutouts** in **Quick actions** on Home | 7, 15, 155 | V/home/components/QuickActionsPanel.vue:359; V/home/i18n/en.json:31-38 | true |
| Profile has **Own shoutout line** and **Shout out** | 14 | L:523,667; ProfileData.vue:181-185; ProfileView.vue:467-473 | true |
| No built-in shoutout command; chat needs a command whose pipeline has a Shoutout step | 17-18 | server/src/NomNomzBot.Infrastructure/Commands/BuiltinCommandCatalog.cs (no "shout" match); ShoutoutAction.cs:60 (action type "shoutout") | true |
| New pipeline, Make pipeline, "This pipeline has no steps yet.", Add a step at the end, Steps to add, Step details, Save, "Pipeline saved." | 25-33 | pipelines.mdx:42-46,75-79,124-127 (owner page, fact-checked there) | true |
| Step label **Shoutout**; field **User ID** takes `{args.1}`, the first word after the command; a name or @name is resolved | 28-31 | dashboard/src/i18n/schema/en.json:3416,3520,2276-2278; server/src/NomNomzBot.Infrastructure/Chat/EventHandlers/ChatMessageHandler.cs:1855-1864; ShoutoutAction.cs:34-36,180-206 | true |
| Commands, New command, Name, What it does, Runs a pipeline, Pipeline, Create command, opens in the editor switched on | 34-38 | create-a-command.mdx:26-42 (owner page); V/commands/i18n/en.json:58 | true |
| Chat test posts the announcement | 40-41 | ShoutoutAction.cs:325-331; S/ShoutoutSender.cs:171-185 | true |
| Queued line is the channel's personality line; default (informative) `Shoutout for {target.displayname} queued.` | 42-43, 186 | ShoutoutAction.cs:333-357; server/src/NomNomzBot.Infrastructure/Commands/Builtins/BuiltinResponseComposer.cs:49-63; server/src/NomNomzBot.Application/Commands/Builtin/Personality/ToneTemplateCatalog.Community.cs:83-98; PersonalityTone.Normalize (default informative) | true |
| `{target.displayname}` is the shouted-out streamer's name; `{args.1}` / the chat word is the streamer to shout out | 31, 40, 43, 101 | ShoutoutAction.cs:46-49 ({target}/{target.name} seeded from the shoutout's own target), 178-206 | true |
| Test run sends nothing | 45 | pipelines.mdx:14,320-325 | true |
| Moderator and above open and change; viewer read only | 49-51 | route.ts meta moderation:read; ModerationController.cs:1854,1918,1940,2000,2119; ActionDefinitionSeeder.cs:51,241,277; ShoutoutsView.vue:46,110-111,132,134 | true |
| Twitch shoutout first, announcement after acceptance | 55-56, 60 | S/ShoutoutSender.cs:136-185 | true |
| Speech in the one bot voice; step sets it, raid default on | 57-58 | S/ShoutoutSender.cs:204-206,242; ShoutoutAction.cs:38-41,307-319; schema en.json:2273-2275 | true |
| Exception: chat request inside per-streamer wait posts announce-only, spoken, at most once every 2 minutes | 61, 188-190 | ShoutoutAction.cs:236-263 (Speak: true, SkipNative: true, DefaultGlobalCooldown) | true |
| Other refusal posts nothing; rate limit or dropped connection queues shoutout with announcement | 62, 64-65, 182-183 | S/ShoutoutSender.cs:297-319 (IsTransient: RateLimited or Transport); ShoutoutAction.cs:300-322 | true |
| Settings in Bot group; card order | 69-70, 98-99 | dashboard/src/layouts/dashboard/settingsNavigation.ts:48-54; L:936-938; ShoutoutsView.vue:97-133 | true |
| Switch saves at once, default off | 71-74 | ShoutoutsView.vue:51-60; shoutouts i18n en.json:11 | true |
| Known streamer = enabled channel on this server; once per stream on first chat | 76-77 | S/AutoShoutout/AutoShoutoutScheduler.cs:88,106-108,126-132,247 | true |
| 10 / 5 / 8 / 60 minutes; not yet shouted out this stream | 82-86 | AutoShoutoutScheduler.cs:41-44,294-326,334-365 | true |
| 8 minutes count from any shoutout and replace the 2-minute wait; waits while queue holds one | 88-90 | AutoShoutoutScheduler.cs:297-299,446-456; ShoutoutSender.cs:162-167 | true |
| Never broadcaster or bot; pending dropped on stream end and switch off | 92-94 | AutoShoutoutScheduler.cs:86-99,262-288,399-411 | true |
| Message up to 500 characters; Save off until changed; Use the default clears and saves | 100-108 | ShoutoutsView.vue:36,76,85-88,122,134-152 | true |
| Built-in line follows personality | 110-111 | ShoutoutAction.cs:49-52,64-65; ShoutoutSender.cs:101 | true |
| Message order: step template, per-streamer line, target's Message, own Message, built-in | 115-124 | S/ShoutoutSender.cs:73-101 (override :87-92) | true |
| Profile opens from a name on a Chat line or in Suggested shoutouts; Data tab; texts and labels of the line editor; 500 characters; Save line closes and shows the line | 128-140 | dashboard/src/components/layout/UserName.vue:43-66; V/chat/components/ChatLine.vue:28; ShoutoutSuggestions.vue:100-104; ProfileView.vue:343,417; ProfileShoutoutLine.vue:49-59,69-119; L:426,523,666-681,810 | true |
| People page shows the same profile beside the list | 142 | V/people/PeopleView.vue:322,534; L:828 | true |
| Remove opens a confirm; afterwards next message in order; no-write text | 144-149 | ProfileShoutoutLine.vue:114-122; L:674,680; ShoutoutSender.cs:94-101 | true |
| Shout out shows "Shouted out {name}." | 151-152 | ProfileView.vue:293-298; L:668 | true |
| Suggestions only when live, heading hidden offline; counts unsent; row detail; Shoutout / Not now / sent / failed | 156-166, 172 | ShoutoutSuggestionService.cs:50; ShoutoutSuggestions.vue:39-68,70-72 (section v-if),107-120; home en.json:31-37 | true |
| Up to 10, most streams first, streamed in 30 days, excludes broadcaster, bot, already shouted out | 168-171 | ShoutoutSuggestionService.cs:38-39,73-75,107-134,222; IShoutoutSuggestionService.cs summary | true |
| Defaults 2 minutes channel, 60 minutes per streamer; Shoutout step sets its own in Step details | 177-178, 192-193 | ShoutoutAction.cs:36-37,73-74,210-213; schema en.json:2260-2266,3455 | true |
| Queue holds back while one waits; raid or priority first | 184-185 | ShoutoutAction.cs:215-221,266-271 | true |
