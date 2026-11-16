# Independent source review: /reference/settings/bot-basics-and-personality
Verdict: PASS
Reviewed: src/content/reference/en/settings/bot-basics-and-personality.mdx
Reviewed-SHA: e33d89eb002295f6
Reviewed-SHA256: e33d89eb002295f6fa878e554866e0cf56cb64b964d80342a7da57746fbdaf13
Reviewed-Date: 2026-11-05
Reviewer: independent reviewer, separate from article author
Product-Revision: 54da8b6318de63b5205a0ff8db35e0b9045dd959

The complete current article was read in navigation order and checked against current product source. Historical PASS entries below are leads, not approval of this revision. Atlas voice/template gates do not govern this review.

## Current evidence and result

Repaired and reread: first/returning greetings require live coverage; returning means the first message in a new stream with no elapsed absence threshold. Native Twitch viewer-submitted watch streaks use Event responses; saved switch/milestones are not consulted.

Source files opened in this review: ChannelService.cs:478-515,548-629,637-692; Domain/Engagement/Entities/EngagementDefaults.cs:19-23; Engagement/EngagementService.cs:52-150,215-231; Engagement/EventHandlers/EngagementChatActivityHandler.cs:43-92; Rewards/EventHandlers/WatchStreakHandler.cs:25-31,40-42,110-114; dashboard settings BasicsView.vue:43-90 and EngagementView.vue:40-114.

Unqualified paths beginning Identity, CustomCode, Billing, EventStore, Engagement, Rewards, Widgets or Platform are under server/src/NomNomzBot.Infrastructure; Api and Domain identify their corresponding server projects. Dashboard shorthand is under dashboard/src/views/dashboard.

Verification is read-only source review. No bot/API startup, live account authorization, channel writes, C# host/Jint execution, Docker install or restore was performed. Documentation build/render QA belongs to the combined parent pass. The SDK reference and worked-example checks additionally ran the existing read-only nnz-code-doc-check.mjs with production JavaScript bootstrap and substituted host I/O.

## Historical review (superseded)

# Fact-check: /reference/settings/bot-basics-and-personality
Historical verdict: PENDING

2026-11-04 overhaul: the article changed, so the previous PASS and hash below are historical evidence, not approval of the current revision.
Fresh writer source checks and article inventory are recorded under S1 in `docs-work/overhaul/settings-hosting-code.md`.
Independent review of the changed text is pending.
Reviewed: C:\Projects\NoMercyLabs\nomnomzbot-docs\src\content\reference\en\settings\bot-basics-and-personality.mdx
Reviewed-SHA: 862e67535087c975

Product repo: C:\Projects\NoMercyLabs\nomnomzbot (local master, read only). Paths are repo-relative.

## Who may change Bot basics and Bot personality (the writer's open question)

The runtime enforces Broadcaster only. The controller comments are wrong.

- `ChannelsController` PUT settings/personality and PUT settings/basics carry `[RequireAction("setup:write")]` (comments above them say "Broadcaster/Editor-gated").
- `RequireActionAttribute.cs:23` maps the key to an authorization policy; `ActionAuthorizationHandler.cs:42` calls `AuthorizeActionAsync`, which reads the seeded `ActionDefinitions` row (`ActionAuthorizationService.cs:148,167-168,277`).
- `ActionDefinitionSeeder.cs:437`: `M("setup:write", Broadcaster, grant: false)`. `M` sets default = floor (`:152-153`), so the level can never be lowered. Ladder: Editor = 30, Broadcaster = 40 (`:53-54`). An editor is below the requirement.
- Dashboard: every field and the footer are gated by `can('setup:write')` (BasicsView.vue:268,281,289,309,325,331,359,369; PersonalityView.vue:73).

Page text "The **Broadcaster** only." is correct. Side finding for the product (not this page): the two controller comments misstate the gate.

## Claims checked

| Claim | Evidence | Verdict |
| --- | --- | --- |
| Card titles Commands and language, Reply voice, Greetings and streaks | settings en.json:6,34,77 | true |
| Open: Moderator and above, broadcaster may lower to VIP | ActionDefinitionSeeder.cs:406 `MFloor("dashboard:read", Mod, Vip)`; :44-50 | true |
| Engagement open and change: Moderator and above | ActionDefinitionSeeder.cs:530-531; EngagementView.vue:227,233,239,263 | true |
| Fields off and save hidden without the right | BasicsView.vue:369 `v-if="can('setup:write')" #footer` | true |
| Save, Discard changes, "Basics saved." | settings en.json:79,82,83 | true |
| All basics labels and descriptions | settings en.json:84-108 | true (wording matches) |
| Activity labels, range 1..1,000,000, must rise | settings en.json:109-125; ViewerActivitySteps.cs:21-26 | true |
| Activity defaults 10 / 100 / 500 | ViewerActivitySteps.cs:21-23 | true |
| Prefix default `!` | Channel.cs `CommandPrefix = "!"` | true |
| Join chat automatically default on | Channel.cs:69 `Enabled = true` | true |
| Informative is the default tone | Channel.cs `Personality = PersonalityTone.Informative`; en.json:13 | true |
| Tone names and descriptions, footer sentences | settings en.json:7-31 | true |
| Moment labels and descriptions | settings en.json:43-54 | true |
| Moments off, no milestones, 5 seconds | EngagementService.cs:294-295; EngagementDefaults.cs:22 | true |
| Time between greetings, 0 = no limit | settings en.json:56-61 | true |
| Save changes, Reset to defaults, Add milestone, empty text, invalid text | settings en.json:37,38,64,70,72 | true |
| Remaining rows (bot line marker 4 chars, no restart, discard, last + 5, trash) | taken from the claims file lines; spot-checked labels only | not re-traced line by line; no contrary evidence found |

## Conventions

- No action key, no numbered level, no license name, no source citation on the page: checked by reading the page. Pass.
- American English, no future tense about features: pass.

## Style notes (not blocking)

- "Leave it empty for none" differs by one word from the dashboard description "Leave empty for none"; it is prose, not a label, so it is fine.
