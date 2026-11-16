# Independent fact and coverage review: Cooldowns and permissions

Reviewed 2026-11-09 independently of the writer. This is **source-level factual/coverage evidence only**; no blind-reader result, acceptance, runtime proof or prose verdict is asserted. Calibration cases/private keys were not read.

| Input | SHA256 |
| --- | --- |
| `new/commands/cooldowns-and-permissions.mdx` (145 lines) | `6817535a01a9b0ae42972d21fc48b90e10df87d0357659ebfc26218797bf2a0a` |
| `comparison-original/commands/cooldowns-and-permissions.mdx` (178 lines) | `da8ba81cdd736db99b87a392e2d5f33e0aa4afd132f618412ae2ad168a9f12c5` |
| `contracts/cooldowns-and-permissions.md` | `88f61fdc555c0c124795b6256a6431f26e0e7d5e4d32ef88cbdaa03576fd0672` |

Paths above relative to pilot folder. Product source root `C:/Projects/NoMercyLabs/nomnomzbot`, HEAD `f741789bf6b8d90ae2fd07f33a307a5a11623606`. Immutable original was read in full when fixing the contract; new article read in full and full comparison-original delta read against original.

## Findings

**No unresolved factual or coverage blockers at these hashes.** Both variants retain **11/11 contract requirement groups**, including the detailed platform-role and denial-audio limitations. The rewrite’s section reordering does not remove factual coverage.

| Consequential/new claim checked | Current primary evidence (relative to source root) | Result |
| --- | --- | --- |
| Shared/personal waits are independent; permission precedes waits; only gate-accepted uses write waits, including operators; downstream action success not guaranteed | `server/src/NomNomzBot.Infrastructure/Chat/EventHandlers/ChatMessageHandler.cs:321-376,421-484`; `server/src/NomNomzBot.Infrastructure/Platform/RateLimiting/CooldownManager.cs:22-52,78-113` | Supported. The A0/B50/A60 example follows expiry using `now >= expiresAt`; the alternative B55 example says “instead”, not an accepted ordinary B50+B55 sequence. |
| Bot-assigned Editor/Moderator access does not grant incoming-platform cooldown bypass | `server/src/NomNomzBot.Infrastructure/Chat/EventHandlers/EffectiveLevelLookup.cs:21-44`; `server/src/NomNomzBot.Infrastructure/Chat/EventHandlers/ChatMessageHandler.cs:1301-1354,1944-1950` | Supported. |
| Eight access levels and Twitch/Kick/YouTube mappings, founder/member distinctions, Artist-badge omission and stored Editor/team/permit access | `server/src/NomNomzBot.Domain/Identity/ChatRole.cs:27-64`; `server/src/NomNomzBot.Infrastructure/Platform/Eventing/Translators/ChatTranslators.cs:255-286`; `server/src/NomNomzBot.Infrastructure/Chat/Kick/KickWebhookIngest.cs:257-291`; `server/src/NomNomzBot.Infrastructure/Chat/YouTube/YouTubeLiveChatClient.cs:506-523`; `server/src/NomNomzBot.Infrastructure/Chat/YouTube/YouTubeLiveChatPollWorker.cs:555-582`; `server/src/NomNomzBot.Infrastructure/Identity/RoleResolver.cs:155-270` | Supported; the rewrite does not equate native platform Editor/Artist roles with automatically supplied command access. |
| Denial speech occurs independently of Read it aloud, has a separate 30 s per-viewer attempt throttle and zero bits; chat notices unaffected; platform flags alone bypass | `server/src/NomNomzBot.Infrastructure/Chat/EventHandlers/ChatMessageHandler.cs:79-80,940-1028,1949-1950` | Supported; wording does not promise audible output. |
| Positive Minimum bits refuses denial speech; approval/current queue limitation remains; bot speech separate from viewer frequency | `server/src/NomNomzBot.Infrastructure/Tts/TtsDispatchService.cs:304-439,1265-1287`; `server/src/NomNomzBot.Application/Contracts/Tts/ITtsDispatchService.cs:161-180`; `dashboard/src/views/dashboard/tts/i18n/en.json:115`; existing TTS approval guide/source boundary in contract | Supported. “Minimum bits” matches current label. |
| Kick/YouTube denial uses shared path with Twitch-typed stored identity lookup; lookup/delivery can fail independently of chat | `server/src/NomNomzBot.Infrastructure/Chat/EventHandlers/ChatMessageHandler.cs:940-1028`; `server/src/NomNomzBot.Infrastructure/Platform/ChannelRegistry.cs:80-102` | Supported with conditional failure language. |
| Active waits clear at restart, lengths persist; preset reset includes more than role/waits and preserves name/enabled | `server/src/NomNomzBot.Infrastructure/Platform/RateLimiting/CooldownManager.cs:22-26`; `server/src/NomNomzBot.Infrastructure/Commands/CommandPresetService.cs:103-149,173-194` | Supported. |

Controls/defaults, 0–86400 custom-command range, folded summaries, saved-change feedback, ordinary-viewer testing prerequisites, directly bound trigger scope and related references all remain. Existing source anchors are in the fixed contract. No unsupported additional claim was identified.

## Pending boundaries

No live role payload, cross-platform identity link, spoken refusal, approval queue or process restart was exercised. Blind-reader answers, MDX/link/render checks and shared site build remain separate. Any article/contract edit requires rechecking this review’s fingerprints. No acceptance JSON was written.
