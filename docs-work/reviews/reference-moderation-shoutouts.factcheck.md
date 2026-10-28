# Fact-check: /reference/moderation/shoutouts
Verdict: PASS
Reviewed: src/content/reference/en/moderation/shoutouts.mdx
Reviewed-SHA: 2762e15d292daab9

This review judges the current page text (sha256 2762e15d292daab9...). Product repository: nomnomzbot, master, read only.
S = server/src/NomNomzBot.Infrastructure/Stream. L = dashboard/src/i18n/locales/en.json. SV = dashboard/src/views/dashboard/settings/shoutouts.

| Claim | Page line | Product file and line | Verdict |
| --- | --- | --- | --- |
| Page label **Shoutouts** | 6, 69 | L:899; SV/route.ts:16-21 | true |
| **Shoutouts** is in the **Bot** settings group | 69, 98 | dashboard/src/layouts/dashboard/settingsNavigation.ts:49-54 | true |
| Labels Automatic shoutouts, Shout out a known streamer automatically, Shoutout message, Message, Save, Use the default, "Shoutout message saved." | 12-13, 70-71, 99-104, 107 | SV/i18n/en.json:6-20 | true |
| Message holds up to 500 characters; Save and Use the default only for editors | 102, 106-108 | SV/ShoutoutsView.vue:36,130,134 | true |
| Message is announced; empty uses built-in line from personality | 13, 110-111 | S/ShoutoutSender.cs:94-102; S/PipelineActions/ShoutoutAction.cs:48-53 | true |
| Message order: step template, per-streamer line, target's Message, own Message, built-in | 115-124 | S/ShoutoutSender.cs:73-101 | true |
| No built-in shoutout command; Shoutout step type "shoutout"; User ID takes `{args.1}`, a name is resolved | 17-18, 28-31 | ShoutoutAction.cs:34-36,58,177-208 | true |
| Pipeline and command editor labels and texts | 25-38 | owner pages pipelines.mdx and create-a-command.mdx (fact-checked there); claims file proof | true (via owner pages) |
| Queued line in personality; default tone informative gives `Shoutout for {target.displayname} queued.` | 42-43, 186 | ShoutoutAction.cs:287-288,321-360; server/src/NomNomzBot.Application/Commands/Builtin/Personality/ToneTemplateCatalog.Community.cs:86-88; server/src/NomNomzBot.Domain/Identity/Enums/PersonalityTone.cs:43,56-59 | true |
| Queued line only for a chat request (not raid, not dashboard) | 186 | ShoutoutAction.cs:328-329 | true |
| Twitch shoutout first, announcement only after Twitch accepts | 55-56, 60 | S/ShoutoutSender.cs:138-185 | true |
| Speech in the channel's one bot voice; step `tts` turns it on; raid default on | 57-58 | S/ShoutoutSender.cs:201-206; ShoutoutAction.cs:39-41,282,298 | true (see Notes) |
| Other refusal posts nothing; rate limit or dropped connection queues shoutout with announcement | 62-65, 182-183 | ShoutoutAction.cs:292-323; S/ShoutoutSender.cs:159 | true |
| Chat request inside per-streamer wait: announce-only, spoken, at most once every 2 minutes per streamer | 61, 188-190 | ShoutoutAction.cs:236-262 (Speak: true, SkipNative: true, DefaultGlobalCooldown 2 min :74) | true |
| Waiting queue holds back a later run; raid or priority goes first | 184-185 | ShoutoutAction.cs:215-221,264-269 | true |
| Defaults 2 min channel, 60 min per streamer; step sets its own | 177-178, 192-193 | ShoutoutAction.cs:37-38,210-213 | true |
| Moderator and up open and change; same roles send suggestion | 49-50 | SV/route.ts:19-21 (moderation:read); SV/ShoutoutsView.vue:47 (moderation:shoutout); server ActionDefinitionSeeder.cs:241,277 (both Mod) | true |
| Read-only viewer sees switch and message, cannot change | 51 | SV/ShoutoutsView.vue:110-111,132,134 | true |
| Automatic default off; saves at once | 71-74 | SV/i18n/en.json:11; SV/ShoutoutsView.vue:51-60 (claims file) | true |
| 10 / 5 / 8 / 60 minutes; once per stream; waits while queue holds one | 82-90 | S/AutoShoutout/AutoShoutoutScheduler.cs:41-44,292-316; :446-456 passes 8 min as global cooldown | true |
| Never broadcaster or bot; pending dropped at stream end and switch off | 92-94 | AutoShoutoutScheduler.cs:86-99,262-288,399-411 (claims file, spot-checked range) | true |
| Profile labels Own shoutout line, Uses the channel shoutout line., Write line, Shoutout line for, Save line, Your role cannot change a shoutout line., Shout out, Shouted out | 129-152 | L:523,667-679 | true |
| Suggested shoutouts labels: heading with count, streams in 30 days, Shoutout, Not now, Shoutout sent., failed text | 156-166 | dashboard/src/views/dashboard/home/i18n/en.json:31-37 | true |
| Only when live; up to 10; most streams first; streamed in last 30 days; excludes broadcaster, bot, already shouted out, dismissed | 156, 168-172 | server .../Moderation ShoutoutSuggestionService.cs:38-39,50-51,71-76,120-134 | true |

Links: all 5 targets (/reference/commands/create-a-command, /reference/commands/pipelines, /reference/settings/bot-basics-and-personality, /reference/community/chat-page, /reference/community/people) are rows of docs-work/map.md. Anchors #rate-limits, #make-a-shoutout-command, #write-a-line-for-one-streamer exist on the page.

Conventions: no people's names, no action keys, no numbered levels, no license name, no "open source", no NoMercyBot, American English. No hosting, price or paid plan mentioned, so no marker is needed. One bot voice described (line 57).

## Notes (not blocking)

- Line 58 "A pipeline's shoutout step turns speech on." reads as always on. In code speech is off by default and the step can turn it on (ShoutoutAction.cs:39-41). Suggest: "A pipeline's shoutout step can turn speech on."
- Line 51: moderation:read and moderation:shoutout are both at Moderator (seeder :241,:277), so a read-only viewer exists only through a per-user permission change. The claim holds.
