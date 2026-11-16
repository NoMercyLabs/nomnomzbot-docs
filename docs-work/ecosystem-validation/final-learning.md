# Final learning/reference review

Snapshot record. Later source comparisons, inventory reconciliation, factual corrections and deployment observations are recorded in [final acceptance](completion-acceptance.md). Earlier hashes and counts apply only to their dated snapshots.

## Focused current-source evidence

Product paths below are relative to `C:/Projects/NoMercyLabs/nomnomzbot`. `I/` means `server/src/NomNomzBot.Infrastructure/`; `A/` means `server/src/NomNomzBot.Application/`. These are current code reads, not adoption of the earlier report's verdicts.

| Correction / retained consequential claim | Current source read and result |
| --- | --- |
| Text/random reply speech | `I/Chat/EventHandlers/ChatMessageHandler.cs:651-710` dispatches before checking SentToChat and SpeakWithTts; `A/Chat/Services/ReplyTemplateRenderer.cs:28-79` returns no chat text for overlay-only/None. `I/Tts/PipelineActions/ReplyTtsPipeline.cs:17-42` runs play_tts. Added the delivery dependency beside the controls and linked TTS setup. |
| Whisper prefix, channel and cap notice | `I/Chat/EventHandlers/WhisperCommandHandler.cs:39-79,106-175`: fixed ! prefix, explicit first channel argument, otherwise exactly one SessionChatters match, private answer, public limit notice without the answer. Current WhisperSafe declarations found in `I/Commands/Builtins/UptimeBuiltin.cs:45` and `I/Commands/Builtins/MusicBuiltins.cs:337,625`. |
| Dynamic pipeline capacity | `I/Platform/Pipeline/PipelineEngine.cs:195-218` reads the provider; `I/Platform/Pipeline/PipelineConcurrencyLimitProvider.cs:51-85`, `I/Platform/ScalingDefaults.cs:24-50` and `I/Platform/ScalingOptions.cs:25-44` establish configuration, SQLite=3, PostgreSQL CPU clamped to 3..16 and override precedence; `I/DependencyInjection.cs:1129` registers it. The five-minute constant was checked at PipelineEngine.cs:45. These are defaults, not a measurement of this installation. |
| matches excluded from viewer text | `I/Platform/Templating/Helpers/Logic/IfTemplateHelpers.cs:35-43,170-180` excludes regex in registry metadata and runtime; `LogicHelperProvider.cs:47-64` selects Standard and `ValuePredicate.cs:42-48` identifies matches, in the same directory. `A/Abstractions/Templating/TemplateHelperContexts.cs:21-26` excludes Viewer from Standard. The registry exclusion, runtime rejection, stored JSON context and generated row now agree. No literal ForbiddenViewerText property was found in current source; the operative rules are the context list and IsViewerText check. |
| Bot lists | Full `I/Platform/Templating/Helpers/Bot/BotCommandHelpers.cs` and `BotCommands.cs`: :36-49 in the former supplies user.role; :29-69 in the latter builds lists and filters only the role floor. Changed forUser wording so it does not promise executable access. Replaced the suspect !so sample with real !song; literal keys are `A/Commands/Builtin/Personality/BuiltinResponseSlots.Music.cs:20-22,53-55` and `BuiltinResponseSlots.Core.cs:21-23`. `I/Commands/BuiltinCommandCatalog.cs:21-35` builds membership from registered implementations. |
| First-command defaults and offline testing, retained | `A/Commands/Dtos/CommandDtos.cs:107-148`: Everyone, Default prefix, StartsWith, zero waits and enabled. `dashboard/src/views/dashboard/commands/components/NewCommandDialog.vue:44-166` shows default plain reply/trigger and creation request. Full `I/Chat/OfflineCommandGate.cs:25-29` exempts broadcaster/moderator. No live reply was sent. |
| Role scopes, retained | Full `I/Identity/TwitchLoginScopes.cs:26-70` gives the three role-specific scope arrays. Full `I/Identity/ChannelTwitchBotResolver.cs:24-54` confirms custom-then-shared resolution only; the own-account send fallback was not freshly traced and is not claimed verified here. |
| Pipeline dry/live distinction, retained | `I/Platform/Pipeline/PipelineTestRunService.cs:29-198` selects four passthrough types for dry runs, real actions for live runs, validates draft graphs and gates overlapping live runs. No live test or UI confirmation-flow test was performed. |
| Availability explanation | Full `I/Platform/Templating/TemplateSurfaceAvailability.cs` was read: absence reasons explain registry contexts rather than independently making a helper available. This is not a full surface-by-surface implementation audit. |

Documentation-side supporting reads: full `AGENTS.md`, `docs-work/page-conventions.md`, `docs-work/overhaul/learning-commands-helpers.md` and product `.scratch/reference-learning-evidence.md`; relevant staged patch hunks; navigation's first three groups; generator data/options/table/main sections in `scripts/gen-template-helpers.mjs`; `scripts/export-template-helpers/Program.cs:159-184` (contexts copied from instantiated entries); relevant entries in `docs-work/helpers.json` and `docs-work/helper-groups.md`; `docs-work/helper-sections/if.md`; existing changed-page review headers; `package.json`, `scripts/check-mdx-braces.mjs` and the input/frontmatter sections of `scripts/check-reference.mjs`. These supporting reads are not additional article coverage.

All batch writes are complete. No new navigation entries or reference pages need parent integration.

2026-11-06: assigned targeted batch complete. **44/44 full editorial reads; 5 articles corrected; 10/10 corresponding review headers updated.** Product HEAD inspected: `2dfefbb0c393f439954d79b32ac11511678d7f44`. This editing agent performed the source checks and self-review; no independent reviewer or exhaustive factual PASS is claimed. Parent's final navigation/type/build/render validation remains outstanding.

One documentation project serves `docs.nomnomz.bot` production and `docs-dev.nomnomz.bot` public live Astro preview. No navigation, new reference pages, site split, README, framework, read-aloud article/reviews or parent's final-pass.md changes were made. Existing uncommitted parent edits were preserved.

## Exact full-article coverage

Every article below was read in full, including reference tables and examples. Paths are relative to `src/content/reference/en/`; listed in current navigation order. Onboarding was read in this order. Later command/helper reading followed focused batches, with truncated output re-read before counting coverage. Unmarked articles were retained, not assigned a new source-verification PASS.

- `overview.mdx`
- `getting-started/sign-in.mdx`
- `getting-started/connect-platforms.mdx`
- `getting-started/bot-account.mdx`
- `getting-started/dashboard-tour.mdx`
- `getting-started/first-command.mdx`
- `commands/create-a-command.mdx` — changed
- `commands/variables-and-templates.mdx`
- `commands/built-in-commands.mdx` — changed
- `commands/cooldowns-and-permissions.mdx`
- `commands/pipelines.mdx` — changed
- `commands/pick-lists.mdx`
- `commands/quotes.mdx`
- `templates/overview.mdx`
- `templates/activity.mdx`
- `templates/ad.mdx`
- `templates/args.mdx`
- `templates/bot.mdx` — changed
- `templates/channel.mdx`
- `templates/charity.mdx`
- `templates/chat.mdx`
- `templates/date.mdx`
- `templates/emote.mdx`
- `templates/event.mdx`
- `templates/fun.mdx`
- `templates/goal.mdx`
- `templates/hypetrain.mdx`
- `templates/if.mdx` — changed
- `templates/list.mdx`
- `templates/lookup.mdx`
- `templates/math.mdx`
- `templates/music.mdx`
- `templates/num.mdx`
- `templates/platform.mdx`
- `templates/poll.mdx`
- `templates/pronouns.mdx`
- `templates/quote.mdx`
- `templates/random.mdx`
- `templates/schedule.mdx`
- `templates/stream.mdx`
- `templates/target.mdx`
- `templates/text.mdx`
- `templates/user.mdx`
- `templates/var.mdx`

## Editorial result

- The six onboarding articles establish what the bot does, the running-installation/account prerequisite, platform connection versus broadcasting, optional bot identity, dashboard orientation and an observable first chat reply. The tour lets readers return to advanced controls later. Existing wording is retained.
- The seven command articles progress from a useful reply to helpers, built-ins, access/pacing, multi-step actions, shared choices and remembered quotes. The pipeline article distinguishes dry-run inspection from real effects; pick lists explain shared dependencies and quotes distinguish reading from capture/edit/delete. Targeted additions clarify consequential delivery/routing/capacity boundaries without changing their structure.
- The 31 helper articles supply the lookup overview, 29 family tables and the pronoun explanation. Worked introductions already explain arguments, conditions, local variables, named rolls, formatting, music context, caller versus target, and bot currency versus Twitch points. Smaller families remain concise references. Event/seed dependencies and illustrative outcomes remain visible. The two corrected families are conditions and bot command lists. All rows were read, but all 908 helper implementations/examples were not re-executed or re-audited.

## Changed files and review provenance

Article changes are exactly the five marked above. Generation inputs changed: `docs-work/helpers.json` (only removes Viewer from the matches row) and `docs-work/helper-groups.md` (four description overrides and two sample overrides). Generator/framework code was not changed.

Both `.factcheck.md` and `.reader.md` were updated for each of these exact stems under `docs-work/reviews/`:

- `reference-commands-create-a-command`
- `reference-commands-built-in-commands`
- `reference-commands-pipelines`
- `reference-templates-if`
- `reference-templates-bot`

The ten new headers use current SHA256 values, `Verdict: PARTIAL`, the date and product commit, and explicitly identify author self-review. All historical review content, including hashes, PASS verdicts and old claims, remains verbatim after line-ending normalization. Unchanged articles' old reviews are not relabeled as newly verified. This report is the only new durable report.

## Validation completed

- `node scripts/gen-template-helpers.mjs --check`: 908/908 helpers placed, 359 typed examples, zero missing descriptions.
- Generated to a fresh temporary directory using `--out`: 30/30 generated pages match current articles after CRLF/LF normalization, including both corrected helper pages. Pronouns is authored separately. This tests input/output consistency, not runtime accuracy or export freshness.
- Parsed frontmatter on 44/44 articles; resolved 315/315 internal /reference page-link targets to existing MDX files. Link fragments, external links and rendered anchors were not tested.
- Existing `check-mdx-braces.mjs` passed separately on commands, getting-started and templates (43 articles). The unchanged root overview was included in the frontmatter/page-link check, not that directory-based brace check.
- 10/10 review headers match their article's actual SHA256; all ten historical bodies match the prior Git version after line-ending normalization.

## Remaining limits and handoff

No whole-project build, product tests, live application/provider calls, OAuth, restart, commit, push or publish occurred. No secrets or deployment settings were read. Current-source checks below are focused, not certification of every limit, platform promise, permission, 42-command row or 114-step row. Source metadata and stored exports can diverge; the matches correction demonstrates that boundary. Future exports must use current assemblies. Parent owns final shared validation and artifacts; all writes for this batch are complete once this report's source-evidence section is present.
