# Independent fact and coverage review: Built-in commands

Reviewed 2026-11-09 independently of writer. Source-level factual/coverage review only; no reader score, acceptance, runtime proof or prose verdict. No calibration cases/private keys read.

| Input | SHA256 at initial review |
| --- | --- |
| `new/commands/built-in-commands.mdx` (178 lines) | `0900bfc26a92ce11d1915729e4994a683a22782a4d6a989bc382403451ea6801` |
| `comparison-original/commands/built-in-commands.mdx` (212 lines) | `2678711f0253c1cc46f533cce7d544f2cdc2de2ea4bde860621fb92a900d12f1` |
| `contracts/built-in-commands.md` | `12653f0efe95513121b2c7f3a18eb7e3357fe465f1ffd35538478ccdf8974940` |

Paths relative to pilot folder. Current source root `C:/Projects/NoMercyLabs/nomnomzbot`, HEAD `f741789bf6b8d90ae2fd07f33a307a5a11623606`. Original read in full before contract fixing; new article read in full and all comparison-original deltas read against original.

## Required correction

**F-01 — new variant, line 70, numeric skip counting needs clarification.** “`!skip 4` ... removes only the caller’s own queued request at that position” leaves “position” unqualified. The implementation counts **only that caller’s own pending requests in queue order**; it does not interpret 4 as global queue position. This added statement can send a viewer to the wrong request even though ownership remains enforced.

Required correction: state that `!skip 4` removes **the caller’s fourth pending request, counting only their own requests in queue order**. Source: `server/src/NomNomzBot.Infrastructure/Commands/Builtins/MusicBuiltins.cs:227-233,241-288`: `ownMatchesSeen` advances only after `IsCallers`, and the resulting global index is passed internally to removal. Author and root were notified. The comparison-original table does not add a position interpretation and does not have this finding.

Status at initial fingerprints: **new variant needs F-01 correction/recheck; comparison-original has no unresolved fact/coverage blockers.** This report is not pilot acceptance.

### Final correction recheck

Author/root confirmed final stable copies; reviewer independently re-read F-01 wording and hashes afterward. Rewrite line 70 now says `!skip 4` removes the caller’s **fourth pending request, counting only their own requests in queue order**, and leaves the playing song alone. Comparison-original row 82 now explains the same caller-only Nth-pending-request interpretation. Both match the executable loop at `MusicBuiltins.cs:241-288`; no additional claim is introduced by the repair.

**F-01 resolved. No unresolved factual/coverage blockers in either variant at these final fingerprints:**

| Final reviewed input | SHA256 |
| --- | --- |
| `new/commands/built-in-commands.mdx` | `e585f4b601e6b68bc0965895d0299ea32a58b5f093ffb48ab5fccc81276928b1` |
| `comparison-original/commands/built-in-commands.mdx` | `9f8cf2677831cab1fffa870ba2b72f67a31a55d6adaa24fc5376351109212206` |
| `contracts/built-in-commands.md` | `12653f0efe95513121b2c7f3a18eb7e3357fe465f1ffd35538478ccdf8974940` |

## Coverage and source checks

Both variants preserve **11/11 contract heading groups**, and **43/43 unique catalog command rows**. All names/functions/default normal cooldowns and access levels from the required catalog remain; “Broadcaster” and “Only you” express the same highest rung. Preserved advanced details include runtime music gates versus editor floor, extra shared moderator skip window, whispers, reserved settings, shared reply groups and reset effects.

| Consequential/new claim checked | Primary source (relative to source root) | Result |
| --- | --- | --- |
| Exactly 43 registered commands/defaults and no built-in deletion | `server/src/NomNomzBot.Infrastructure/DependencyInjection.cs:1307-1369`; defaults/classes enumerated with line anchors in fixed contract; `server/src/NomNomzBot.Application/Commands/Builtin/IBuiltinCommand.cs:18-61` | Catalog coverage retained; inherited default personal wait is 0 where not overridden. |
| `commands` lists enabled eligible authored/built-in triggers, excludes authored Regex, respects custom/none prefix, checks built-in availability | `server/src/NomNomzBot.Infrastructure/Commands/Builtins/CommandsBuiltin.cs:116-187` | Correctly repaired in both. |
| Music floor can display Everyone while runtime requires effective moderator/queue-moderate right; increased base floor adds another gate | `server/src/NomNomzBot.Infrastructure/Commands/Builtins/MusicModerationGate.cs:21-57`; `server/src/NomNomzBot.Infrastructure/Commands/Builtins/PlaybackControlBuiltins.cs:27-103`; `server/src/NomNomzBot.Infrastructure/Chat/EventHandlers/ChatMessageHandler.cs:321-376` | Supported. |
| Extra 30 s bare-skip window shared by music moderators; viewer only own playing request; numeric skip distinct | `server/src/NomNomzBot.Infrastructure/Commands/Builtins/MusicBuiltins.cs:35-116,123-164,227-288` | Core behavior retained; F-01 specifies numbering. |
| Quote reading Everyone while add/edit/delete have separate permissions | `server/src/NomNomzBot.Infrastructure/Quotes/Builtins/QuoteBuiltin.cs:71-75,77-140` and mutation branches | Supported; neither variant promises Everyone may mutate. |
| Only uptime/song/queue whisper-safe; fixed `!`; connected channel selection from first argument/session; other known built-ins chat-only; cap fallback contains no answer | `server/src/NomNomzBot.Infrastructure/Chat/EventHandlers/WhisperCommandHandler.cs:40-60,108-178`; built-in `WhisperSafe` declarations in `UptimeBuiltin.cs:45`, `MusicBuiltins.cs:337,625` | Supported. |
| Default/override rows, locked/customized fields, 500-character reply and 0–3600 waits, raise-only base role, quote-only TTS use | `dashboard/src/views/dashboard/commands/components/BuiltinList.vue:47-125`; `components/BuiltinEditor.vue:90-147,180-290,313-511` in same directory; `server/src/NomNomzBot.Infrastructure/Commands/BuiltinCommandService.cs:29,202-253`; `server/src/NomNomzBot.Infrastructure/Quotes/Builtins/QuoteBuiltin.cs:140` | Supported. |
| Single-field reset immediate; whole reset restores own settings/enabled and shared sibling wording without sibling’s unrelated settings | `dashboard/src/views/dashboard/commands/components/BuiltinEditor.vue:205-251`; `server/src/NomNomzBot.Infrastructure/Commands/BuiltinCommandService.cs:262-301` | Supported in both. |
| Default Moderator write requirement configurable upward; normal cooldown exemption needs incoming flags; offline and collision checks not blanket guaranteed replies | `server/src/NomNomzBot.Infrastructure/Content/Identity/ActionDefinitionSeeder.cs:151-180`; `server/src/NomNomzBot.Infrastructure/Chat/EventHandlers/ChatMessageHandler.cs:291-376,1944-1950`; `server/src/NomNomzBot.Infrastructure/Chat/OfflineCommandGate.cs:18-28` | Supported in both. |

## Pending boundaries

No actual built-in invocation, service connection, whisper, music playback or reset was exercised. Blind-reader answers and shared rendered/build checks remain separate gates. No acceptance JSON written. Final review is current only at the final fingerprints above; further article/contract edits require recheck. Initial fingerprints/findings remain as correction history, not current unresolved status.
