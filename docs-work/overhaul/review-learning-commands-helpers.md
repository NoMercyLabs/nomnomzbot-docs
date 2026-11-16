# Independent review: Start here, Commands and Template helpers

Reviewed: 2026-11-04 and 2026-11-05.
Status: **44/44 fact checks PASS; 44/44 reader reviews PASS** at the exact article hashes below.
Reviewer: independent section reviewer; no article, navigation or product-code edits made by this reviewer.

The 6 Start here articles, 7 Commands articles and 31 Template helper articles were read in their actual sidebar order. The initial source tracing used product b12f4f69638553c03ed64c1518c90d7bcccd6907; the resumed review uses 54da8b6318de63b5205a0ff8db35e0b9045dd959. The lead confirmed no command/helper implementation changes between them. The unchanged hashes were retained; every repaired article was re-read and re-hashed. Old review verdicts are explicitly archived under the new current review, rather than counted as approval of changed text.

## Scope and method

The owner's current direction governs the reader review: explain purpose, when and why to use a feature, meaningful setup and expected results, then preserve precise configuration and exceptions for lookup. Atlas was used only as an evidence aid; neither its former sentence caps nor its pilot-page/fixed-layout rules were applied.

The source check traced consequential defaults, role checks, save-time validation, runtime gates, state lifetime and side effects. Per-page fact-check files identify those paths and line ranges. This is source verification rather than a live-channel test: no bot/API was started, no real viewer data was changed, and no product code, build or tests were run. The lead owns the combined documentation build, link/frontmatter/navigation and static-render checks. An unavailable browser surface was not treated as proof of UI behavior.

The helper reference was checked as a complete registry-backed reference, not as 908 live integrations. The exporter instantiates the actual provider types and constructs the real TemplateHelperRegistryAggregate; the generator carries exported names, descriptions and contexts into the corresponding rows. The previously completed independent check confirmed 908 current keys, zero missing descriptions, 145 changed context sets, and no added or removed keys. Relevant helper sources had no drift since the assembly baseline 9e3e84989. The generator check placed 908/908 and found 359 typed examples. Examples from product tests are source leads rather than proof that a live provider returned that value; authored examples and consequential exceptions were traced to the running implementations. All helper pages now say example values are illustrative and event-specific values require the matching trigger.

## Findings repaired and re-reviewed

| Finding | Source authority | Final result |
| --- | --- | --- |
| Pipeline tests were described as always side-effect-free even though the editor offers Run live. | Platform/Pipeline/PipelineTestRunService.cs:66-191; dashboard pipelines WorkbenchView.vue:340-413,586-600 and i18n/en.json:180-218. | The article distinguishes Dry run from Run live, draft edits from saved configuration, confirmation, real chat/moderation/currency effects, one live editor run at a time and the misleading input-help sentence. |
| A live pipeline run was said to run as the button-presser unconditionally. | Platform/Pipeline/TestRunTrigger.cs:36-48 uses TryAdd for user, user.id and user.name. | The final text describes the signed-in caller as the default, and tells readers to review explicit caller overrides and targets. |
| Pick-list deletion was described as impossible for a VIP. | Content/Identity/ActionDefinitionSeeder.cs:152-153,506-508; Identity/RoleResolver.cs:94-145. | The article distinguishes the Moderator deletion role floor from a personally granted capability. |
| The built-in table claimed to show the role defaults in the editor, although several music commands have an Everyone base role and a separate music gate. | Commands/Builtins/BanSongBuiltin.cs:33-49; Commands/BuiltinCommandService.cs:413-427. | The table now gives effective access and cooldown defaults, and explains that raising the command role adds to the music safeguard. |
| Authored random pick and viewer-written pick were both described as never immediately repeating. | Platform/Templating/Helpers/Logic/PickTemplateHelpers.cs:57-79; Application/Common/Picking/NoImmediateRepeatPicker.cs:21-63. | The row and prose distinguish ordinary viewer randomness, authored no-immediate-repeat memory, restart behavior and one-choice repetition. |
| Points helper wording could be confused with Twitch Channel Points. | Platform/Templating/Helpers/People/PeoplePointsHelpers.cs:25-110 reads wallet/ranking data. | User, Target and Command word helpers now link to bot channel currency and explicitly distinguish Twitch Channel Points. |
| A non-existent Keep my choice UI label, followed by an assumed automatic manual override, overstated viewer-pronoun persistence. | dashboard views/viewer/account/PronounsPanel.vue:38-44; api/viewerAccount.ts:102-114; Application/Identity/Dtos/UserDtos.cs:81-90; Identity/Services/PronounSelfService.cs:61-66; PronounResolutionService.cs:54-69. | The final article names no invented control and explains that viewer-form choices can be externally refreshed unless the account already has an override. Pipeline Set pronoun remains documented as protected. |
| Targeted cooldown follow-up overstated denial-speech identity as a correctly resolved Twitch owner on Kick or YouTube. | Chat/EventHandlers/ChatMessageHandler.cs:149-155,989-1010,1992-1997; Platform/ChannelRegistry.cs:80-102; Chat/Kick/KickWebhookIngest.cs:271; Chat/YouTube/YouTubeLiveChatPollWorker.cs:562. | The final text says the stored channel identity is treated as Twitch and keeps speech failure conditional. The one-page follow-up independently rechecked all platform mappings, native-flag versus stored-role exemptions, denial TTS, both waits, restart state and preset resets. See cooldowns-permissions-targeted.md for source evidence and test boundaries. |

Unless a path starts with Application or dashboard, abbreviated source paths in this table are under server/src/NomNomzBot.Infrastructure. Application means server/src/NomNomzBot.Application. Every finding was sent to the lead for repair; this reviewer did not change article text.

The lead also replaced invalid fixture-only example paths before the final helper read. The final if examples use stream.isLive, args and user.stats.streak; the target example uses target.displayname. They are not being approved merely because a test fixture supplied an arbitrary seed.

## Final per-page verdicts

The SHA256 is over the actual article bytes. Fact and reader evidence are separate files in docs-work/reviews. Each current evidence file repeats this full hash; older shortened hashes below its Historical evidence heading are not the reviewed version.

| Page | Fact check | Reader | SHA256 |
| --- | --- | --- | --- |
| overview | PASS | PASS | `f1600825a3d5e0d3e3435f07a2f1b1e495ed4b610286c0983446ea9d50d30757` |
| getting-started/sign-in | PASS | PASS | `5589cf741348040cefa7add750a05898bc41250a6746b549bce9fbb902a6b11f` |
| getting-started/connect-platforms | PASS | PASS | `f858c3643cc20681bb4102151093db2a77a7d789ca42622f8a3912673560e512` |
| getting-started/bot-account | PASS | PASS | `8aff774b7f204f22f22972aebaa833d18a6f42a32c4ecc8f7633e1255a722154` |
| getting-started/dashboard-tour | PASS | PASS | `2c5bfc3522fee070eb3c3e9713a892ac95888b0705d631990b50e2a73983f56d` |
| getting-started/first-command | PASS | PASS | `8929dd11e29b59c38e685d0acdb1f38505415beb4efc336728fce408f1bb13f7` |
| commands/create-a-command | PASS | PASS | `7ffdf9aa691ef6bdf46f8cb8f5ac9350f8867c40c65b7da48031a10476346f62` |
| commands/variables-and-templates | PASS | PASS | `6a3208da2951710f8995728055700745804b027b66d04afb5d81a3205c7e46af` |
| commands/built-in-commands | PASS | PASS | `39c4fdf7f0487344858cb6d3d263fd22e827fccb4737cdec9584cf2277af21f9` |
| commands/cooldowns-and-permissions | PASS | PASS | `414929d9f14474b8cddc2b718e7d3517125da2286ce78fc46faa14b904370f50` |
| commands/pipelines | PASS | PASS | `affa7c03d2a260208903bf54b8f27b7a54cfbfd0b899bf0bcce0e86666377681` |
| commands/pick-lists | PASS | PASS | `32a267e0f0b7756a6b6e9fd26d0157d70470f2f40107b5c75505389756cdb3a6` |
| commands/quotes | PASS | PASS | `97f7d95e2a1c929b6f13b32af3046264273c3cb4521aa4d0831d8aa5e1ed2ea3` |
| templates/overview | PASS | PASS | `dceb316751072cf0dfb47e52a36dcdd10e3690b5795b3679ab71f61d779e504a` |
| templates/activity | PASS | PASS | `b93f6b6b863543859c3bb03fefc3c7fd8d554fc6f11fd274e960b5ea954a83b8` |
| templates/ad | PASS | PASS | `387955ec09b791c1863c13331ece68ba2e719b9cb1e174567c0ff628ed980a4a` |
| templates/args | PASS | PASS | `ac81ee79731bac2f0d81899cccae2ba440b7a5272955a5447a8106ad2eb92216` |
| templates/bot | PASS | PASS | `ce71cc5dac51a5f5b71c7086f448db83125be423e9109112154f054282aca37f` |
| templates/channel | PASS | PASS | `488faf01eb0b12bf3b8ad418b25f6d1023704ee459333022adbe304cd7788bb1` |
| templates/charity | PASS | PASS | `98aee96b964e010151356b1b0caeb98da47ee620bcd6c7f41721d11dd8a36826` |
| templates/chat | PASS | PASS | `7f99cd9fe5c36d6a4e1a8cdc02fb2d03a75f3db42f9773736c397b80b126d3b9` |
| templates/date | PASS | PASS | `422e711397dc595173ed9ec2220bd63243277a6a37edaf5ce15b17ed7ffa7ccf` |
| templates/emote | PASS | PASS | `168f2d55b8016a058877f2b69bf3c27bdd7313cdedf075cf04c7732907c8f4a2` |
| templates/event | PASS | PASS | `6c11ab1c4d4c36b490ceb0eac4849b9e649b2872a337745e56d00fcc00060d4a` |
| templates/fun | PASS | PASS | `403bc7e8365bff36e3abdd2918852c9cf74259376f5a5ebed8d9062d27015399` |
| templates/goal | PASS | PASS | `ccae5cba6dbd25309a3f1a650131784ee31590381f6c64587c97c9129d1288c8` |
| templates/hypetrain | PASS | PASS | `6670554cc702896c6e8bca3fee4af083cbf03055c258ba715c5aeff6f5f0093b` |
| templates/if | PASS | PASS | `7452eeb207aca9c07c835663527b6e1ac7c5f4fb67860d2a69ce81b1303c6753` |
| templates/list | PASS | PASS | `dbc5d3d0ab575b3273f6f6286a01c3f17f4c0f45d0e4683f79617d18d3fd4759` |
| templates/lookup | PASS | PASS | `671a5aca14300b6d10c13d1fd9f5785c0a50fbece4de790549aeb068d81c3172` |
| templates/math | PASS | PASS | `63a448d60811037d3e4ac619d8750732a1d3fab7ab9535707db19851f02bf51e` |
| templates/music | PASS | PASS | `e8bbf5776a745792cecbf7fe2de8c334f2f285519646608826671b443dfd2d00` |
| templates/num | PASS | PASS | `204c5649386c5c3f7c5db3f9d24b4c966be9e31a0aeff931ee0a574036a5362f` |
| templates/platform | PASS | PASS | `c241ac78c3fe64e14f3fba9dd274caf916e362e44452aacc66741d74158582f0` |
| templates/poll | PASS | PASS | `d3d4b1b6a2e96e4e6bfe06670e190e250f4a42c5b997b894b4b0ba05adfd7bb9` |
| templates/pronouns | PASS | PASS | `85b63f721d0d58dba8b0f3fa1c348d9c423e910c33f5e06a05a963bd25747072` |
| templates/quote | PASS | PASS | `09d34cc4950a6c966d81c8de3e715156e0a7aefdfce5f7e2bd668b540b9553ce` |
| templates/random | PASS | PASS | `edb9657961d858daa50c3773145cded7cee96a3484220108eafb568fd19a4d6e` |
| templates/schedule | PASS | PASS | `8532537b6343ac60f1aa453c908ae9b125e710d50dd49788aee1a18ee6ce7d42` |
| templates/stream | PASS | PASS | `40e6342de3a534cce16b40f897d7f9e582a05e4bb88356c932e28ba5883985bd` |
| templates/target | PASS | PASS | `b4c7a9133fc5dded70c7e609291dbffec419452b87fbc33ff308ae254db7e085` |
| templates/text | PASS | PASS | `ab223061e5298b34df428828df45cfda6337a063f5a08d554b7b636ccd9edbf5` |
| templates/user | PASS | PASS | `7b3beb93f37b6eedabbf0d2f55e81f67be64c000fb0622cdfb23088228d1aa20` |
| templates/var | PASS | PASS | `da74b5e3f4a3c4fb9162dc462238830a7fe7ed3c2c934f64e30a2350953f1fe8` |

## Reader review by page

- **overview:** The introduction teaches the bot/dashboard relationship, gives a short first-use path, and makes deeper everyday, self-hosting and Code and SDK paths optional. It avoids turning the opening into a feature catalog.
- **getting-started/sign-in:** The reader learns why sign-in asks for access, which role button matches their task, and what to expect next. Provider limitations and code sign-in remain available without interrupting the normal path.
- **getting-started/connect-platforms:** The page separates connecting the bot from starting a broadcast, explains channel/platform relationships, and gives visible outcomes and reconnection checks. Related integration guides carry service-specific setup.
- **getting-started/bot-account:** The page explains which account sends chat, why someone might connect a separate one, and how to tell it is working. The separate bot account remains optional; it is not confused with a TTS voice.
- **getting-started/dashboard-tour:** The opening gives newcomers a useful home base before the longer navigation lookup. Responsive navigation, roles and the difference between visible controls and granted access are explained; categories match the actual dashboard.
- **getting-started/first-command:** A beginner can create one practical reply, send the trigger, recognize the expected result and check likely failures. Advanced pipeline/script choices are contextual links instead of prerequisites.
- **commands/create-a-command:** The article teaches trigger to response through a useful schedule command, then exposes reply kinds, matching, aliases and maintenance. Reference fields retain limits/defaults without forcing readers to absorb them before their first command.
- **commands/variables-and-templates:** The page starts with useful changing text and explains the brace syntax before nesting, conditions, HTML and local variables. Examples show inputs and outcomes. Runtime literal fallback is distinguished from command-save validation.
- **commands/built-in-commands:** The opening explains why built-ins are useful; the alphabetical catalog supports lookup, feature links explain prerequisites, and editing/reset/troubleshooting remain precise. The reviewed repair distinguishes the editor base role from effective music access.
- **commands/cooldowns-and-permissions:** Permission and pacing remain distinct decisions, with a concrete 10-second shared/60-second personal interaction. The targeted re-review preserves the existing headings and voice while confirming platform-specific mappings, the Artist-badge limitation, native flags versus bot-assigned access, denial-speech attempts and conditional delivery, preset scope and command-wait restart behavior. Separate fact and reader PASS verdicts and the final hash are recorded in cooldowns-permissions-targeted.md.
- **commands/pipelines:** Trigger versus sequence is explained before editor controls; the welcome sequence gives a reachable first result. Dry run versus live consequences are now explicit and the full action reference is retained. The reviewed caller/input exception explains how supplied values affect real targets.
- **commands/pick-lists:** The shared-choice use case is clear, examples show a saved list and visible result, and it distinguishes a command draw from a pipeline variable reused later. The reviewed repair correctly separates the deletion role floor from personal grants.
- **commands/quotes:** The page teaches keeping memorable stream moments, gives dashboard/chat paths and expected results, and preserves numbered lookup, attribution, editing/deletion and TTS details. It distinguishes displaying a random dashboard quote from posting one to chat.
- **templates/overview:** The task-to-helper index supports discovery, the syntax explanation distinguishes family placeholders from pasteable examples, and links back to the command tutorial provide a gentle learning path. The complete alphabetical lookup remains intact.
- **templates/activity:** A short purpose explanation leads to an exact activity lookup. Session versus stream counting is explicitly distinguished for commands.stream; availability prevents readers from treating trigger data as universally present.
- **templates/ad:** The table keeps next-ad lookups separate from event-scoped break values and provides units and countdown forms. The availability note explains why an event-only row needs its event.
- **templates/args:** The greeting example explains positional input and fallback with visible outcomes. Viewer-template expansion versus original numbered words is retained, and the added currency clarification prevents confusion with Twitch Channel Points.
- **templates/bot:** The compact reference fits lookup use: name, commands, restart/uptime and dashboard values remain findable. Illustrative values are explicitly identified as examples rather than actual deployment settings.
- **templates/channel:** Channel identity and settings are grouped together. The introduction explains platform IDs and Discord-only seed aliases, so readers can distinguish a supported field from a value available only in a notification.
- **templates/charity:** The brief introduction gives the progress-display use case, followed by exact campaign, amount and bar values. Currency-bearing examples stay visible in the reference.
- **templates/chat:** The page separates triggering-message values, formatting helpers and speech preparation. The Discord pipeline raw-message alias is explained before readers can paste it into an ordinary command.
- **templates/date:** The worked time-zone and fixed-date examples show expected results and explain that presentation does not alter channel settings. Detailed operations, formats, units and daylight-saving-sensitive examples remain in the reference.
- **templates/emote:** The reference distinguishes channel/provider sets, message-derived counts, image links and selection. Trigger-dependent rows are marked and example values are presented as illustrative.
- **templates/event:** The introduction ties values to matching event responses rather than general replies. Names, kinds, currencies, IDs and platform payload fields remain precise; Discord seed aliases have an explicit explanation.
- **templates/fun:** Playful outputs are presented as one possible result. Dice limits, stable-per-day values, required 8ball list and same-message slots state remain available rather than being hidden by a shorter introduction.
- **templates/goal:** The progress-display purpose is clear, with separate follower, subscriber and new-sub goal rows. Current, target, remaining and bar values are easy to compare.
- **templates/hypetrain:** The reference preserves event-only hype_train rows separately from live hypetrain state; the shared availability note makes the event prerequisite clear.
- **templates/if:** A meaningful live/offline reply shows how nesting supplies the condition. It distinguishes wording choices from permissions and action branches, then retains truthiness, lazy evaluation, comparisons and fallback syntax.
- **templates/list:** The page explains that reading a saved choice or counter does not modify it. A named snack-list example and second-entry lookup connect the reference to the dashboard feature and pipeline counter actions.
- **templates/lookup:** External lookups are kept in a compact reference with accepted fields, syntax and deployment-mode limitations. Examples describe possible values, avoiding a promise of current exchange rates or weather.
- **templates/math:** Exact arithmetic and meter syntax is easy to look up; examples include expected values and the division-by-zero behavior is retained.
- **templates/music:** The player/queue relationship is explained before the grouped lookup. The article explicitly distinguishes read-only values from playback controls and pipeline-supplied favorite/playlist-add values from general lookups.
- **templates/num:** The lookup keeps formatting distinct from stored data changes, with conversion, bounds, ordinal, rounding and duration examples. Optional inputs and expected outcomes remain accessible.
- **templates/platform:** The reference explains connected versus live platform counts and preserves empty-value behavior for disconnected/offline platforms. It separates channel-wide state from the triggering user/event platform.
- **templates/poll:** Separate poll and prediction tables support lookup without merging their concepts. Current-state values, event values, zero-participation cases and locked prediction timing remain available.
- **templates/pronouns:** The article teaches adapting a sentence, choosing a person, capitalizing and agreeing verbs through meaningful outcomes. Saved-choice origin, unknown/open-choice fallbacks, neopronouns and shoutout live-state differences retain their full explanations.
- **templates/quote:** The small reference cleanly separates numbered quote content from attribution, date, game, count and latest values. It serves lookup while linking back to the broader template explanation.
- **templates/random:** The named-roll example explains when two mentions should agree. The reviewed repair now states authored no-immediate-repeat behavior, viewer-text ordinary randomness, restart memory and single-choice exceptions; giveaway links explain the appropriate managed workflow.
- **templates/schedule:** The reference preserves next-stream, time-zone, recurrence, calendar, today/week and vacation lookups with formats and empty-state behavior.
- **templates/stream:** Headed tables separate live state, the previous stream and aggregate counts. The introduction explains Discord-only seed aliases, and lookup retains exact categories, counts, units and truncation behavior.
- **templates/target:** The hug example distinguishes caller from named person and explains lookup fallback. Person, grammar, account/channel and stored statistics stay grouped; the added balance clarification separates bot currency from Twitch Channel Points.
- **templates/text:** Simple uppercase and eight-character cut examples teach composition before the long reference. Headed tables retain transformations, counts, encodings, grammar and importantly different cut/truncate ending behavior.
- **templates/user:** The greeting example distinguishes caller and target; bare versus user-prefixed helpers and display versus login names are explained. Pronouns, balances, identity and long-term statistics remain grouped, with a clear bot-currency distinction.
- **templates/var:** The added assignment example shows its invisible assignment and visible result. It distinguishes render-local memory from stored counters/viewer data and explains that including wording is not running a pipeline.

## Navigation and cross-page reading

A newcomer can move from the bot/dashboard explanation through sign-in, connections and account choice to a tested first reply without needing pipelines, scripts, Docker or helper syntax first. The dashboard tour is longer lookup material within that path, but its opening provides orientation and its group names match the application. The first-command and creation pages link to each other without requiring duplicate setup.

An experienced streamer or moderator can move from a command's role and pacing controls to exact built-in syntax, then use the variables tutorial as a bridge to the full helper reference. The cooldown article explains a genuinely different concept from access, including the concrete 10-second channel/60-second person interaction, role bypass and restart consequences. Pipeline instructions now distinguish inspecting a path from producing real channel effects. Pick lists explain shared choice versus command-specific random replies, and quotes retain attribution and numbered lookup.

The helper overview supports tasks before listing every family, while the actual sidebar retains its established overview-first alphabetical route grouping. Longer references use topic tables, not dozens of isolated pages or a forced identical tutorial. Availability is visible on every helper row, including event-only, Discord seed and pipeline-only values. Pronoun grammar has its own explanatory article, while the User and Target tables remain complete. Links to Code and SDK are optional advanced paths rather than prerequisites for normal use.

## Checks and remaining boundaries

- Whole-article reads: **44/44**, including re-reading repaired core/helper content on 2026-11-05.
- Fresh full-hash evidence: **44 fact checks and 44 reader reviews**.
- Final artifact consistency: **44/44 article hashes match both current review headers and this report**; all current evidence files have separate PASS verdicts.
- Helper generator, already run in this review: **908/908 placed**, **359 typed examples**, no missing descriptions, check-only mode wrote nothing.
- MDX brace validation, already run in this review: passed. The lead re-ran generation/braces/navigation after the final regeneration.
- Product modifications by this reviewer: **0**. Product startup/live operations: **0**.
- Substantive unresolved documentation findings within these 44 articles: **0** at the hashes above.
- Existing product limitations remain documented: the pipeline input help still contains a dry-run-only no-effects sentence while live mode is selected; the viewer pronoun form does not send manualOverride even though its optimistic cache initially assumes it. No product fix is claimed.
- Combined build, rendered output, complete internal-link/frontmatter/asset/navigation validation and deployment are outside this independent review and must be reported by the lead from its own results.
