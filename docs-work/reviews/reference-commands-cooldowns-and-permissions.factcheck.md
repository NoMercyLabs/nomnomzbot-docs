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
