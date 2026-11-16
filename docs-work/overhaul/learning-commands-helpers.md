# Learning path, commands and template helpers

Author audit: 44/44 articles read, checked and improved. This section covers the front door and first setup (6), command use and customization (7), and the complete template-helper reference (31). The independent review is in `review-learning-commands-helpers.md`, with current full article hashes and separate source/reader evidence for all 44 pages in `docs-work/reviews`.

The user’s current editorial direction governs this work. Atlas supplied evidence and validation aids; its sentence caps, repeated page shapes and old pilot matching were not editorial acceptance criteria. Accurate existing reference tables, routes, useful examples and project components were retained.

## Learning and feature inventory

Source paths below are relative to the read-only product repository. `Infrastructure` abbreviates `server/src/NomNomzBot.Infrastructure`; `Application` abbreviates `server/src/NomNomzBot.Application`. Detailed path/line evidence for each article is in its current factcheck artifact, rather than repeated verbatim here.

| Article | What readers learn and why | Start, configuration and access | Important behavior and audit decision |
| --- | --- | --- | --- |
| overview | Understand the bot, dashboard and practical role in a stream before choosing a feature. | Access a running installation; begin with sign-in, connection and a working reply. | Rewrite the front door without a feature catalog. Distinguish Twitch/Kick/YouTube support from X Live unavailability, hosted access from self-hosting, and platform connection from being live. Source: dashboard connection cards, sign-in configuration, platform implementations and first-run paths. |
| getting-started/sign-in | Sign into the correct installation without assuming OAuth knowledge. | Explain why the browser visits a provider and returns, and how another installation is selected. | Preserve authentication/status/error reference; make running-instance and account prerequisites explicit. Source: dashboard authentication views and identity/authentication endpoints. |
| getting-started/connect-platforms | Connect the broadcaster’s streaming account so the bot can receive events and act where authorized. | Use Home connection cards and provider permission prompts; integration write access applies. | Explain reconnect and platform differences; a connected service is not a started broadcast. Source: dashboard home ConnectionsPanel.vue:41–155; Infrastructure/Content/Identity/ActionDefinitionSeeder.cs:402. |
| getting-started/bot-account | Understand whose name appears on automated chat replies. | The broadcaster can use their own connection or connect the optional separate bot account. | Separate the bot chat identity from the channel’s spoken TTS voice. Retain practical permission/reconnect information. Source: bot-account controls, channel identity/token resolution and chat-send routing. |
| getting-started/dashboard-tour | Find the everyday stream workspace, configuration and optional advanced areas. | Begin with Home, Chat, Commands and OBS, then follow task links. | Explain dashboard roles and page visibility without making Settings or Code/SDK a prerequisite. Preserve exact navigation labels. Source: dashboard shell/router, access queries and settings navigation. |
| getting-started/first-command | Create a useful first response and confirm the full chat path works. | Make a simple command, save/enable it and test in the connected channel as broadcaster or moderator. | Explain expected reply and common setup failures; offline viewer restrictions are distinguished from broadcaster/moderator testing. Source: command editor/service and ChatMessageHandler. |
| commands/create-a-command | Build reusable chat behavior from a trigger, response and access rules. | Work through a realistic schedule response, then settings, aliases, delivery and management. Moderator management defaults apply; configurable permissions are linked. | Preserve validation, duplicate/enable/delete and matching details. Source: Infrastructure/Commands/CommandService.cs:70–249; Application/Commands/Dtos/CommandDtos.cs:96–156; dashboard CommandEditor.vue:256–286; ChatMessageHandler.cs:290–485,734–847. |
| commands/built-in-commands | Find ready-made commands and distinguish them from authored commands. | Lookup table covers 42 commands with arguments, cooldowns and effective default access. | Correct the distinction between the editor’s base role and separate music safeguards. Preserve collisions/reserved-command exceptions. Source: built-in implementations, BuiltinCommandService.cs:413–427 and dispatcher. |
| commands/variables-and-templates | Turn one fixed reply into a response that adapts to a person, message or event. | Begin with one helper, braces and arguments, then nesting, fallback values, surfaces and optional HTML. | Unknown helper validation at save differs from runtime literal preservation. Viewer-authored templates have their own feature/permission gate. Source: template parser/renderer/registry, command validation and viewer-template expansion. |
| commands/cooldowns-and-permissions | Distinguish who can use a command from how frequently it can run. | Configure access and shared/personal waits; the 10-second shared/60-second personal example explains their interaction. | Document direct-binding differences, moderator/broadcaster badge exemptions and the music skip exception. Source: ChatMessageHandler access/cooldown paths and Infrastructure/Platform/RateLimiting/CooldownManager.cs. |
| commands/pipelines | Combine actions when one reply is insufficient. | Begin with Send message, then branches, arguments and conditions. Advanced reference keeps 114 steps, parameters and practical examples. | Explain real Run live effects versus default Dry run, draft versus saved graphs, caller override inputs, limits and incomplete editor controls. Source: pipeline executor/actions, PipelineTestRunService.cs:66–191, TestRunTrigger.cs:36–48 and dashboard WorkbenchView.vue:340–413,586–600. |
| commands/pick-lists | Reuse a collection of choices across commands instead of duplicating text. | Make a snack list and read it in replies; distinguish shared lists from one command’s own variation. | Preserve item/name limits, rename dependencies and the distinction between a role floor and individual action grants. Source: pick-list service/dialogs, role resolver and picking implementation. |
| commands/quotes | Save memorable stream moments and retrieve them in chat. | Use the verified add/edit/update/delete aliases and random or numbered retrieval. Explain capture from a replied-to message. | A bare quote command with a permitted reply can capture it; without capture permission it remains a read. Source: Infrastructure/Quotes/Builtins/QuoteBuiltin.cs and quote management service/UI. |

These articles support both learning and lookup. New users can stop after their first working reply; experienced users can jump to the command reference, exact cooldown behavior, pipeline action tables or helper family they need. The Code/SDK links remain optional and its Draft status is preserved.

## Complete helper inventory

The reference covers **908 registered helpers across 29 families**, plus the overview and the separate pronoun explanation. The `Use in` column records each helper’s actual supported surfaces. An available helper still needs the relevant message, user, event, integration or other context; an event-specific example is not a promise that the same event data exists in an ordinary chat command.

Shared setup: use helpers in the response/action field of a supported surface, initially through the command tutorial. Configuration and precise syntax belong in each family’s tables. Permissions belong to the command/action or surface; letting a viewer write helpers in their own input additionally depends on Viewer Templates and its permission. No programming is needed for ordinary template use. Code-oriented scripting remains in Code and SDK.

| Article | Helpers | Purpose, practical use and boundaries |
| --- | ---: | --- |
| templates/overview | Index | Introduce substitution, illustrated examples and surface availability; link all families in alphabetical lookup order with the overview pinned first. |
| templates/user | 75 | Describe the person who triggered the reply, their saved identity, pronouns and channel statistics. Points mean the bot’s channel currency, not Twitch Channel Points. |
| templates/target | 46 | Describe a named person independently of the caller; explain a useful mention and the fallback behavior, saved pronouns and bot-currency distinction. |
| templates/channel | 34 | Read channel identity and configuration values in a reply. The current trigger supplies the channel context. |
| templates/stream | 62 | Use live state, category, title and stream statistics in context-aware replies. Available values depend on recorded platform/stream data. |
| templates/chat | 29 | Read message and chat context rather than hard-coding a response. Event/surface availability remains explicit per row. |
| templates/args | 64 | Use whole input or individual command words, convert/read values and apply fallbacks; the greeting example explains the missing-name result. Numeric reads do not mutate balances. |
| templates/activity | 19 | Refer to recorded activity and engagement context. These helpers read context rather than manufacturing an event. |
| templates/event | 33 | Read the matching follow/sub/raid/reward/supporter/OBS/VTube Studio event details. The triggering event determines which values exist. |
| templates/poll | 51 | Read poll and prediction context/results without requiring every reader to use the API. A matching event or available state is required. |
| templates/hypetrain | 17 | Describe the current hype-train event and its progress using the supplied context. |
| templates/goal | 14 | Read goal values and progress for a contextual response. |
| templates/charity | 8 | Read charity-event information supplied by the integration/event. |
| templates/schedule | 17 | Reuse schedule data in replies rather than copying the same schedule text into commands. |
| templates/ad | 15 | Use ad-break context and timing in a response. Helpers do not themselves start an ad. |
| templates/bot | 22 | Read bot/installation values and reply context. |
| templates/list | 18 | Read shared lists and counters; link the actions that actually change a counter rather than implying a read increments it. |
| templates/quote | 7 | Read stored quote values and link back to quote creation/management. |
| templates/var | 7 | Store local values for one render, read custom feed fields and reuse included text. Distinguish render-local state from persistent counters and execution of actions. |
| templates/music | 54 | Describe playback, tracks and playlists. Clarify action-provided favorite/playlist fields versus generally available music state. |
| templates/date | 17 | Format dates/times and explain timezone, fixed-date and relative-time examples. |
| templates/if | 26 | Choose wording using conditions, fallbacks and lazy branches. Template selection is distinct from command access or a pipeline action. |
| templates/random | 23 | Pick alternatives or numbers and reuse a named roll. Preserve authored no-immediate-repeat behavior, viewer-text randomness, single-choice and restart exceptions; giveaways are separate. |
| templates/fun | 26 | Add small playful transformations with verified nested helper names and illustrative output. |
| templates/text | 103 | Change case, trim, replace and shape strings. The cut example explains that the suffix counts toward the requested limit. |
| templates/num | 36 | Format numbers for readable output using exact documented arguments. |
| templates/math | 20 | Calculate numeric values and meters without suggesting that displaying a value changes bot state. |
| templates/platform | 25 | Read platform context and account/service values, with per-helper surface availability. |
| templates/emote | 30 | Use available emote information in a reply; actual data depends on the context and provider. |
| templates/lookup | 10 | Read supported external/provider lookup values. Connection/data requirements remain in the individual reference rows. |
| templates/pronouns | Concept | Write one sentence that agrees with the chosen person’s pronouns, with realistic expected wording. Explain saved/global values, external refresh, manual override, capitalization, verbs and uncommon sets. The viewer form currently does not enable manual protection; the Set pronoun action does. |

Every family’s full syntax, descriptions, illustrative examples and context matrix remain in the articles. Provider and branch-specific source anchors are recorded in the corresponding factcheck files. The registry authorities are Application/Abstractions/Templating/TemplateHelperRegistry.cs and Infrastructure/Platform/Templating/TemplateHelperRegistryAggregate.cs, plus the actual provider classes under that templating tree.

## Export, generator and source verification

The existing exporter was built and run in a temporary directory against the product’s existing built assemblies, without starting the bot/API. It instantiated 40 real providers and exported 908 helpers with zero missing descriptions. The template implementation had no source drift from the assembly baseline `9e3e84989` to the reviewed source. Current source inspection and independent review supplied the behavior checks; the export alone is not a live integration test.

The refresh added no helper keys and removed none. It updated 145 availability/context sets and one time-sensitive illustrative sample. The generator now prints the supported surfaces as a readable fourth column, and its authored sections are retained in `docs-work/helper-sections` so a later regeneration preserves the teaching prose. Invalid fixture-only helper examples were corrected against the actual registry. The helper grouping/overview source preserves the owner’s alphabetization and the overview-first navigation refinement.

`node scripts/gen-template-helpers.mjs --check` places 908/908 helpers, finds 359 typed examples and zero missing descriptions. This command validates grouping/coverage; it does not compare the existing files byte-for-byte. The lead’s final validation separately checks regeneration consistency and the compiled site.

## Boundaries and remaining implementation limitations

No application code, channel settings or live data were changed. Source reviews do not establish that a live OAuth connection, provider response, browser source or external service worked. The guide now describes the verified pipeline editor limitations and viewer-pronoun refresh limitation rather than inventing controls. The separate Code and SDK material stays Draft.

The broader inventory and other 59 articles are in the three companion author reports. Combined build/link/navigation/asset results and outstanding product limitations belong in the final progress/report, not in a claim that the runtime itself was tested.
