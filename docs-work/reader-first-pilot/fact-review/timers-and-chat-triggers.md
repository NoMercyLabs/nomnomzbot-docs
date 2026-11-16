# Independent fact and coverage review: Timers and chat triggers

Reviewed 2026-11-09 independently of the writer. This is source-level factual/coverage evidence, **not** reader scoring, pilot acceptance, runtime proof or a prose verdict. No calibration cases/private keys read. Author confirmed stable copies; final fingerprints were independently re-read after F-02 correction.

| Final reviewed input | SHA256 |
| --- | --- |
| `new/automation/timers-and-chat-triggers.mdx` | `ad595300e295492f6398cbde63e0636e3a5cc06eee57d9428c737634d7f637a0` |
| `comparison-original/automation/timers-and-chat-triggers.mdx` | `463c5acc251929a215f4826723bd3ada4b14568c2f07f864ae048e24ad436c06` |
| `contracts/timers-and-chat-triggers.md` | `6a8890d085d6fa7c507d779f68c151938ebacf82e6b3b95a87ed30ad5b4d8dd9` |

Inputs read: full `new/automation/timers-and-chat-triggers.mdx` (213 lines when initially read); full `comparison-original` delta against the immutable original previously read in full; fixed corrected contract `contracts/timers-and-chat-triggers.md`. Source root: `C:/Projects/NoMercyLabs/nomnomzbot`, HEAD `f741789bf6b8d90ae2fd07f33a307a5a11623606`.

## Required correction

**F-02 — both variants’ Read it aloud table row needs a simple-reply qualifier.** Initial rewrite line 101 and comparison-original’s corresponding field row say speech requires successful chat delivery and overlay-only/Nowhere is silent without explicitly limiting this to **simple replies**. The setting also appears for bound reactions. A bound pipeline receives the timer’s `SpeakWithTts` flag; its successful `send_message`/`send_reply` action can auto-speak returned output when delivery succeeded through the overlay alone. Therefore blanket overlay-only silence across reaction types is unsupported.

Required correction sent to author/root: begin the field explanation **“For a simple reply, …”** or otherwise scope this rule unambiguously. Bound commands/actions/pipelines use their target settings/steps; do not state they all ignore the timer flag. Evidence: `dashboard/src/views/dashboard/timers/components/TimerEditor.vue:273-283`; `server/src/NomNomzBot.Infrastructure/Commands/Jobs/TimerService.cs:317-326,396-421`; `server/src/NomNomzBot.Infrastructure/Platform/Pipeline/PipelineEngine.cs:1007-1020`; `server/src/NomNomzBot.Infrastructure/Chat/PipelineActions/SendMessageAction.cs:103-119`. This corrects the article to the contract’s existing simple-reply boundary; no contract/question change is needed.

**F-02 resolved:** final rewrite line 101 and comparison-original line 123 explicitly begin “For a simple reply” and state that bound reactions follow target behavior. Independently inspected after author-stable confirmation. **No unresolved factual/coverage blockers in either variant at final hashes above.**

## Coverage and source checks

Both variants retain **13/13 contract requirement groups**. First-post timing, copied activity threshold, input exclusion and the complete one-shot/retry distinction remain. No other factual blocker identified.

| Consequential/new claim | Primary source, relative to product root | Finding |
| --- | --- | --- |
| New timer enabled, 30-minute interval, zero activity threshold, first firing next eligible poll; only connected channels, live status irrelevant | `server/src/NomNomzBot.Application/Commands/Dtos/TimerDtos.cs:59-84`; `server/src/NomNomzBot.Infrastructure/Commands/Jobs/TimerService.cs:45-61,108-150,161-189`; `dashboard/src/views/dashboard/timers/components/NewTimerDialog.vue:42-109` | Supported. Poll timing is described approximately, not an exact deadline. |
| Creation delivery controls/defaults and all validation messages; chat-trigger create delivery also exists | `dashboard/src/views/dashboard/timers/components/NewTimerDialog.vue:42-113,142-154`; `components/NewChatTriggerDialog.vue:33-72,105` in same directory; corresponding English labels | Supported, including claims added outside original contract’s creation procedure. |
| Simple-reply delivery success: Chat accepted, Overlay received, Both either, None intentional success; failure preserves last-fire/rotation and retries next poll | `server/src/NomNomzBot.Application/Chat/Services/IReplyDispatcher.cs:70-87`; `server/src/NomNomzBot.Infrastructure/Commands/Jobs/TimerService.cs:191-215,248-334` | Supported in both. |
| Command/action/pipeline returned failures count an attempted firing; missing/disabled/no-graph pipelines also count; interval/activity state advances and Post once disables | `server/src/NomNomzBot.Infrastructure/Commands/Jobs/TimerService.cs:191-245,351-421` | Prior contract correction now accurately present in both articles. Exception before reaction return does not reach state writes. |
| Duplicate uses saved settings, preserves activity, off; first activity threshold from channel context start; rotation wraps | `dashboard/src/views/dashboard/timers/components/TimerEditor.vue:135-162`; `server/src/NomNomzBot.Infrastructure/Commands/Jobs/TimerService.cs:173-215`; `server/src/NomNomzBot.Infrastructure/Platform/ChannelRegistry.cs:80-102,228-230,725-737` | Supported. |
| Changing simple→Pipeline in dashboard clears messages | `dashboard/src/views/dashboard/timers/components/timerDraft.ts:107-114` | Correctly limited to the mode change rather than claiming every existing bound timer has no messages. |
| Trigger Contains is substring, case toggle/Exact/Starts/Regex; invalid regex refused; defaults and 0–86400 range | `server/src/NomNomzBot.Infrastructure/Chat/EventHandlers/ChatMessageHandler.cs:1589-1609`; `server/src/NomNomzBot.Infrastructure/Commands/ChatTriggerService.cs:80-111,160-182,247-269`; `server/src/NomNomzBot.Application/Commands/Dtos/ChatTriggerDtos.cs:39-77` | Supported. |
| Prefix/command/soundboard lines excluded, at most one eligible trigger; below-role candidate skipped; cooling eligible match stops; platform-flag cooldown exemption | `server/src/NomNomzBot.Infrastructure/Chat/EventHandlers/ChatMessageHandler.cs:194-237,1388-1430,1944-1950` | Supported. Ordinary-message examples do not claim all possible additional message consumers are absent. |
| Default management access configurable upward; VIP separate read grants/editor hidden | `server/src/NomNomzBot.Infrastructure/Content/Identity/ActionDefinitionSeeder.cs:151-195`; dashboard TimersView/ChatTriggersPanel gates | Supported. |

Original field ranges, enabled/save/discard/delete feedback, template helpers, supported reactions, overlay prerequisites, troubleshooting and related guides are retained. Detailed anchors also exist in the fixed contract.

## Pending boundaries

Final source review is current only for the fingerprints above; further article/contract edits require recheck. No live timer, chat, pipeline, overlay or TTS was executed. Root owns blind-reader collection, rendered/link checks and shared isolated build. No acceptance JSON written.
