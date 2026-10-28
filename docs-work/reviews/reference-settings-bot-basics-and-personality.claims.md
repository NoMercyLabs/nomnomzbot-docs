# Claims: /reference/settings/bot-basics-and-personality

Product repo: C:\Projects\NoMercyLabs\nomnomzbot (local master). Paths are repo-relative. `en.json (settings)` = dashboard/src/views/dashboard/settings/i18n/en.json; `en.json (shared)` = dashboard/src/i18n/locales/en.json.

| Claim | Source |
| --- | --- |
| Sidebar entries "Bot basics", "Bot personality", "Engagement triggers" | en.json (shared):882-884; SettingsView.vue:26-31 |
| Three pages, one route each, routes settings/bot-basics, settings/bot-personality, settings/engagement-triggers | dashboard/src/views/dashboard/settings/route.ts:60-91 |
| Card titles "Commands and language", "Reply voice", "Greetings and streaks" | en.json (settings) basics.title, personality.title, engagement.title; BasicsView.vue:252, PersonalityView.vue:66, EngagementView.vue:211 |
| Bot basics / personality open: Moderator and above; broadcaster may lower to VIP | route.ts:65,76 (dashboard:read); server/src/NomNomzBot.Infrastructure/Content/Identity/ActionDefinitionSeeder.cs:406 (MFloor Mod, floor Vip), :159-165, :50-54 |
| Bot basics / personality change: Broadcaster only | ChannelsController.cs:493 and :531 RequireAction("setup:write"); ActionDefinitionSeeder.cs:437 M("setup:write", Broadcaster) |
| Engagement open and change: Moderator and above | route.ts:87; EngagementController.cs:44,55,62; ActionDefinitionSeeder.cs:530-531 |
| Fields disabled and save buttons hidden without the write right | BasicsView.vue:268,281,289,309,325,331,359,369; PersonalityView.vue:453; EngagementView.vue:227,309,326,342 |
| Save, Discard changes, "Basics saved." | BasicsView.vue:236,371-376; en.json (settings) basics.save/discard/saved |
| Save active only when changed and valid | BasicsView.vue:174-180 |
| Prefix/language change applies at once without restart | server/src/NomNomzBot.Infrastructure/Identity/ChannelService.cs:608-609 (registry invalidate) and comment :574-576 |
| Discard puts back the saved values | BasicsView.vue:242-244 |
| Field labels and descriptions | en.json (settings) basics.prefix/botLinePrefix/locale/timezone/autoJoin/keepActiveWhileOffline |
| Prefix 1-5 chars, no spaces | BasicsView.vue:54; ChannelService.cs:545-555 |
| Bot line marker up to 4 chars, empty = none | BasicsView.vue:55,279; ChannelService.cs:562-571, :589-591 |
| Default prefix "!" | server/src/NomNomzBot.Domain/Identity/Entities/Channel.cs:97 |
| Default bot line marker none | Channel.cs:109 (nullable, no initializer) |
| Language default not set; list names languages in own language; list is the dashboard locales | Channel.cs:179; BasicsView.vue:192-202; dashboard/src/i18n/index.ts:24 |
| Timezone default not set; list from browser zones | ChannelService.cs:597-598 (User.Timezone nullable); BasicsView.vue:204-210 |
| Join chat automatically default on | Channel.cs:69 (Enabled = true); ChannelService.cs:595-596 maps AutoJoin to Enabled |
| Keep active while offline default off | Channel.cs:117 |
| Auto-join change takes effect at once (subscribe/unsubscribe channel events) | ChannelService.cs:611-620 |
| Activity labels and description | en.json (settings) basics.activity.* |
| Activity defaults 10 / 100 / 500 | server/src/NomNomzBot.Domain/Identity/ViewerActivitySteps.cs:21-23; BasicsView.vue:140-142 |
| Step range 1..1,000,000 and must rise | BasicsView.vue:56-57,152-161,164-172; ViewerActivitySteps.cs:26,43-48; ChannelService.cs:523-539 |
| Error shows under the field | BasicsView.vue:362-364 |
| Tone list and descriptions; Informative default | en.json (settings) personality.tones; server/src/NomNomzBot.Domain/Identity/Enums/PersonalityTone.cs:43,46; Channel.cs:88 |
| Tone saved at once, no save button | PersonalityView.vue:433-437,475-479 (footer is text only) |
| Tone applies to built-in commands only; next reply | en.json (settings) personality.description, personality.footer; ChannelService.cs:682-684 |
| Moment labels, descriptions | en.json (settings) engagement.firstTime/returning/streak |
| Moments default off, no milestones, cooldown 5 seconds | server/src/NomNomzBot.Infrastructure/Engagement/EngagementService.cs:294-295; server/src/NomNomzBot.Domain/Engagement/Entities/EngagementDefaults.cs:22 |
| No saved row resolves to defaults | EngagementService.cs:159 |
| Cooldown 0 = no limit, integer >= 0 | en.json (settings) engagement.cooldown.description; EngagementView.vue:74 |
| Each field shows its default | EngagementView.vue:125-165 |
| Reset to defaults fills the form, nothing sent | EngagementView.vue:111-122,347-356 |
| Save changes | EngagementView.vue:357-359 |
| Add milestone adds last + 5 | EngagementView.vue:179-183 |
| Milestone integer >= 1 | EngagementView.vue:73,75 |
| Trash button removes a milestone | EngagementView.vue:308-320 |
| Empty milestones text | EngagementView.vue:322-324; en.json (settings) engagement.milestones.empty |
| Invalid text "Fix the numbers marked in red to save." | EngagementView.vue:343-346 |

## Notes for the fact-checker

- ChannelsController.cs:490-491 and :527-528 comments say "Broadcaster/Editor-gated", but the seeder grants setup:write at the Broadcaster level (ActionDefinitionSeeder.cs:437). The page follows the seeder.
- The page does not describe the greeting text the bot posts; that lives in the built-in replies, outside this row.
