# Current independent fact check

Verdict: PASS
Reviewed: src/content/reference/en/commands/cooldowns-and-permissions.mdx
Reviewed-SHA: 414929d9f14474b8cddc2b718e7d3517125da2286ce78fc46faa14b904370f50
Reviewed-SHA256: 414929d9f14474b8cddc2b718e7d3517125da2286ce78fc46faa14b904370f50
Reviewed-Date: 2026-11-05
Reviewer: independent targeted reviewer
Product: 54da8b6318de63b5205a0ff8db35e0b9045dd959; current checkout inspected read-only.

The complete current article was independently read again after the platform-role and cooldown follow-up. The three related articles were read for consistency. Source and reader verdicts are separate; this PASS does not claim native-platform delivery, audible playback or an executed restart test.

- Eight editor choices, role labels, field order, 0..86400-second validation, new custom-command defaults and folded summaries: dashboard/src/views/dashboard/commands/components/CommandEditor.vue:103-126,307-320,370-433; dashboard/src/views/dashboard/commands/i18n/en.json:68-111; server/src/NomNomzBot.Application/Commands/Dtos/CommandDtos.cs:96-150.
- Twitch subscriber/founder, VIP, Artist flag, ordinary/lead moderator and broadcaster production mapping: server/src/NomNomzBot.Infrastructure/Platform/Eventing/Translators/ChatTranslators.cs:248-286. The command role resolver ignores IsArtist, checks the lead badge before Moderator and has no native Editor branch: server/src/NomNomzBot.Domain/Identity/ChatRole.cs:27-65.
- Kick sender badge flags and broadcaster identity: server/src/NomNomzBot.Infrastructure/Chat/Kick/KickWebhookIngest.cs:257-291. YouTube member/moderator/owner mapping: server/src/NomNomzBot.Infrastructure/Chat/YouTube/YouTubeLiveChatClient.cs:506-523,805-823; server/src/NomNomzBot.Infrastructure/Chat/YouTube/YouTubeLiveChatPollWorker.cs:555-582.
- Effective access takes the higher live/stored level; stored standing, team membership and active role permits can supply access: server/src/NomNomzBot.Infrastructure/Chat/EventHandlers/EffectiveLevelLookup.cs:21-44; server/src/NomNomzBot.Infrastructure/Chat/EventHandlers/ChatMessageHandler.cs:1301-1353; server/src/NomNomzBot.Infrastructure/Identity/RoleResolver.cs:155-270. Twitch Editor import supplies stored membership: server/src/NomNomzBot.Infrastructure/Identity/TwitchManagementSnapshotBuilder.cs:109-140.
- Access before both cooldown checks, accepted operator uses still write waits, rejected access/cooldown attempts return before writes, and exemptions depend only on incoming IsBroadcaster/IsModerator flags: server/src/NomNomzBot.Infrastructure/Chat/EventHandlers/ChatMessageHandler.cs:321-375,421-484,1949-1950. The Twitch translator sets the moderator flag for the lead badge too.
- Denial chat wording, unconditional speech path, shared 30-second per-viewer attempt throttle, zero bits and Twitch-typed identity lookup: server/src/NomNomzBot.Infrastructure/Chat/EventHandlers/ChatMessageHandler.cs:79-80,940-1028. Default Speaker.Bot and no voice override use the channel voice, not the requester's saved voice: server/src/NomNomzBot.Application/Contracts/Tts/ITtsDispatchService.cs:161-180; server/src/NomNomzBot.Infrastructure/Tts/TtsDispatchService.cs:304-350,396-439,1265-1287,1348-1389.
- The repaired identity sentence avoids guaranteeing a real Twitch owner identity: ChatMessageHandler.cs:149-155,989-1010,1992-1997 passes the stored context field as Twitch; server/src/NomNomzBot.Infrastructure/Platform/ChannelRegistry.cs:80-102 can initially populate that field from the Kick or YouTube broadcaster ID. Failure remains explicitly conditional.
- Waits are in the singleton's in-memory dictionary, rather than persisted command state: server/src/NomNomzBot.Infrastructure/Platform/RateLimiting/CooldownManager.cs:22-52,78-113; server/src/NomNomzBot.Infrastructure/DependencyInjection.cs:1106.
- Reset scope is supported by the real writes, not just dialog labels: server/src/NomNomzBot.Infrastructure/Commands/CommandPresetService.cs:103-149,173-194; dashboard/src/views/dashboard/commands/components/presetDiff.ts:15-51. Name and enabled state are untouched; role, both cooldown lengths, response, description, aliases and matching are reset.

Detailed findings, official platform sources and remaining runtime boundaries: docs-work/overhaul/cooldowns-permissions-targeted.md.

## Historical evidence

The earlier review headers and their evidence below are archived. Their hashes and verdicts do not approve later article bytes.

### Previous independent fact check

Verdict: PASS
Reviewed: src/content/reference/en/commands/cooldowns-and-permissions.mdx
Reviewed-SHA: 845032f86ace33443e7256ad6d7682deb788b1930a685b3cd6a5c1ea7132ae2b
Reviewed-SHA256: 845032f86ace33443e7256ad6d7682deb788b1930a685b3cd6a5c1ea7132ae2b
Reviewed-Date: 2026-11-05
Reviewer: independent section reviewer
Product: 54da8b6318de63b5205a0ff8db35e0b9045dd959 (initial source tracing b12f4f69638553c03ed64c1518c90d7bcccd6907)

The full article was read in navigation order; consequential behavior and reference details were checked against current source. All reported documentation findings affecting this page were repaired and re-reviewed. This is a source review, not a live-channel test.

- Role check precedes cooldown checks; broadcaster/Twitch-mod exemption; uses still write timers: server/src/NomNomzBot.Infrastructure/Chat/EventHandlers/ChatMessageHandler.cs:333-379,421-485,1949-1950.
- In-memory expiry and exempt bypass: server/src/NomNomzBot.Infrastructure/Platform/RateLimiting/CooldownManager.cs:23-100.
- Denial chat/TTS path, per-viewer notice cooldown and 0 bits: server/src/NomNomzBot.Infrastructure/Chat/EventHandlers/ChatMessageHandler.cs:938-1020.
- Custom-command 0..86400-second bounds/defaults: server/src/NomNomzBot.Application/Commands/Dtos/CommandDtos.cs:96-156.

Report: docs-work/overhaul/review-learning-commands-helpers.md.

## Historical evidence

The material below is retained as historical evidence. Its older hashes, verdicts and values do not constitute the current review.

# Fact check: src/content/reference/en/commands/cooldowns-and-permissions.mdx
Verdict: PASS
Reviewed: src/content/reference/en/commands/cooldowns-and-permissions.mdx
Reviewed-SHA: 44d1bc6dbc3f6eb9

Round 4. Product repo at b6204c36c. Paths: H = server/src/NomNomzBot.Infrastructure/Chat/EventHandlers/ChatMessageHandler.cs; T = server/src/NomNomzBot.Infrastructure/Tts/TtsDispatchService.cs; E = dashboard/src/views/dashboard/commands; C = server/src/NomNomzBot.Infrastructure/Platform/RateLimiting/CooldownManager.cs.

Round 3 items rechecked first:
- Denied line voice: SpeakDenialAsync passes VoiceIdOverride null and no Speaker (default TtsSpeaker.Bot, ITtsDispatchService.cs:165). ResolveVoiceAsync (T:966-1007) reads a viewer voice only for Speaker.Viewer, so a Bot request gets config.DefaultVoiceId, the channel's one bot voice. Page line 48 is true.
- TTS cooldown row: the channel TTS cooldown applies only to Speaker.Viewer (T:885-896), so it does not hold this line. The page states only the 30 second per-viewer denial limit (H:76-77, H:937-952), exempt for broadcaster and moderators via IsCooldownExempt (H:1885-1886). True.

## Product defects

- E/i18n/en.json:74 chatCooldownHelp says "How long nobody can use it after one use." The code exempts the broadcaster and moderators (H:416-420, H:1885-1886, C:35-36). The page follows the code.

| Claim | Supported by | Status |
| --- | --- | --- |
| Labels Who can use it, Chat cooldown (seconds), Per-person cooldown (seconds), Trigger and cooldowns | E/i18n/en.json:68,69,73,75 | true |
| Both cooldowns 0 to 86400 seconds | server/src/NomNomzBot.Application/Commands/Dtos/CommandDtos.cs:135-140, 196-201 | true |
| Per-person: same viewer waits | E/i18n/en.json:76; H:428-440 (userId key) | true |
| Who can use it is the first field | E/components/CommandEditor.vue:307-321 | true |
| Default is Everyone | CommandDtos.cs:107 | true |
| 8 roles lowest first with labels | dashboard/src/api/permissions.ts:31-40; E/i18n/en.json:103-111; CommandEditor.vue:315 | true |
| Viewer runs at chosen role or higher | H:403 MeetsAsync | true |
| Footer count "1 unsaved change" | E/i18n/en.json:77; CommandEditor.vue:103,124-126 | true |
| Save changes label; turns off with no change | E/i18n/en.json:78; CommandEditor.vue:433 (can-save dirtyCount > 0) | true |
| Denied: command does not run; line "You don't have permission to use that command." in the bot voice | H:403-412, H:913-927 (system reply slot) | true |
| Denied line spoken when TTS on, in bot voice | H:926, H:962-981; T:106-112; ITtsDispatchService.cs:165; T:966-1007 | true |
| Does not follow Read it aloud | E/i18n/en.json:43; H:926 called unconditionally | true |
| At most once per 30 s per viewer below moderator | H:76-77, H:937-952, H:1885-1886 | true |
| Skipped when channel sets minimum bits (request carries 0 bits) | H:976; T:115-127 | true |
| Cooldown waits after a use, in seconds; 0 = none, starts at 0 | H:416-420,428-430 (> 0), H:452-464; CommandDtos.cs:136-140 | true |
| Boxes min 0 step 1 | CommandEditor.vue:393-419 | true |
| Closed summary "30 s chat · 10 s per person" / "No cooldown" | CommandEditor.vue:106-122; E/i18n/en.json:70-72 | true |
| Chat cooldown holds everyone except broadcaster and moderators | H:416-420; H:1885-1886; C:35-36 | true |
| Per-person holds only that viewer | H:428-440, H:458-464 | true |
| Must clear both | H:416-450 (two sequential gates) | true |
| Permission checked before cooldowns | H:403 precedes H:416 | true |
| Broadcaster and moderators exempt, run every time | H:1885-1886; C:35-36 | true |
| Their uses still start chat cooldown | H:452-457 SetCooldown unconditional | true |
| Cooldown line "That command is still on cooldown." | H:895-906 | true |
| Cooldowns in memory, cleared by restart | C:22-26 ConcurrentDictionary | true |
| Reset to preset in footer; covers role and both cooldowns; dialog lists differing ones | E/i18n/en.json:86,90; E/components/presetDiff.ts:15-45 | true |
| No action key or numbered level on page | page text read in full | true |
