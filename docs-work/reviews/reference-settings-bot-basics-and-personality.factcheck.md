# Fact-check: /reference/settings/bot-basics-and-personality
Verdict: PASS
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
