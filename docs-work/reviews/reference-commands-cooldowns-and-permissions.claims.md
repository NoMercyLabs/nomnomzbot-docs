# Claims: /reference/commands/cooldowns-and-permissions

Product repo paths are relative to C:\Projects\NoMercyLabs\nomnomzbot. E = dashboard/src/views/dashboard/commands; H = server/src/NomNomzBot.Infrastructure/Chat/EventHandlers/ChatMessageHandler.cs.

| # | Claim | Source |
| --- | --- | --- |
| 1 | Labels **Who can use it**, **Chat cooldown (seconds)**, **Per-person cooldown (seconds)**, **Trigger and cooldowns** | E/i18n/en.json keys editor.role, editor.chatCooldown, editor.personCooldown, editor.limits |
| 2 | Chat cooldown row: waits for everyone except the broadcaster and moderators (help text "nobody" is overridden by the code exemption); per-person help text paraphrased | E/i18n/en.json editor.chatCooldownHelp, editor.personCooldownHelp; ChatMessageHandler.cs:1885-1886; CooldownManager.cs:35-36 |
| 3 | **Who can use it** is the first field in the editor | E/components/CommandEditor.vue:308-321 |
| 4 | 8 of 8 roles, lowest first, with labels | dashboard/src/api/permissions.ts:31-40 (rungs); E/i18n/en.json commands.roles.* (Broadcaster = "Only you") ; CommandEditor.vue:315 |
| 5 | Viewer runs command when role is at or above the chosen one | H:403 level.MeetsAsync(command.MinPermissionLevel) |
| 6 | Default is **Everyone** | create-a-command page (reviewed); rungOf fallback dashboard/src/api/permissions.ts:57 - not checked on the create path in this run, inherited from the reviewed pilot |
| 7 | Unsaved count "1 unsaved change" | E/i18n/en.json:77 |
| 8 | Save then count leaves footer | same pattern as reviewed pilot; CommandEditor.vue dirtyCount :103 |
| 9 | Denied: command does not run, default line "You don't have permission to use that command." | H:403-412, H:913-927 |
| 10 | Denied line also sent to TTS when TTS is on and read in the channel's default (bot) voice: no speaker set so Speaker = Bot, VoiceIdOverride null falls to config.DefaultVoiceId; ignores Read it aloud, at most once per 30 s per viewer below moderator; TTS skips it only for a minimum bits amount (request carries 0 bits); the channel TTS cooldown applies to Speaker.Viewer only (ITtsDispatchService.cs:165; TtsDispatchService.cs:890-896, 1003-1007) | H:76-77, H:908-910, H:926 (SpeakDenialAsync called unconditionally), H:937-952 (IsCooldownExempt), H:962-981 (owner, BitsAmount 0, VoiceIdOverride null); H:1885-1886; CooldownManager.cs:35-36; server/src/NomNomzBot.Infrastructure/Tts/TtsDispatchService.cs:106-112, 116-127, 144-151 |
| 10a | Both cooldowns 0 to 86400 seconds | server/src/NomNomzBot.Application/Commands/Dtos/CommandDtos.cs:135-140, 196-201 [Range(0, 86400)] |
| 11 | Cooldowns start at 0, 0 = no cooldown | server/src/NomNomzBot.Application/Commands/Dtos/CommandDtos.cs:138-140,199-201 ("0 = off"); H:418,432 (> 0 check) |
| 12 | Boxes step whole seconds, min 0 | CommandEditor.vue:393-419 (type=number min=0 step=1) |
| 13 | Closed group summary "30 s chat · 10 s per person" / "No cooldown" | CommandEditor.vue:106-122; en.json editor.limitChat, limitPerson, limitsNone |
| 14 | Chat cooldown holds everyone except broadcaster and moderators (H:1885-1886, CooldownManager.cs:35-36); per-person holds that viewer | H:416-450 (userId only on per-user key) |
| 15 | Both checked; a viewer must clear both | H:416-450 |
| 16 | Permission checked before cooldowns | H:403 precedes H:416 |
| 17 | Broadcaster and moderators exempt | H:1885-1886; CooldownManager.cs IsOnCooldown returns false when exempt |
| 18 | Their uses still start the chat cooldown for everyone else (per-person key holds only themselves, and they are exempt) | H:452-464 SetCooldown is unconditional; CooldownManager.cs:23-24 |
| 19 | Cooldown line "That command is still on cooldown." | H:895-906 |
| 20 | Cooldowns in memory, cleared by restart | server/src/NomNomzBot.Infrastructure/Platform/RateLimiting/CooldownManager.cs:22-26 ConcurrentDictionary |
| 21 | Reset to preset covers role and both cooldowns; dialog lists differing ones | E/components/presetDiff.ts:19-21,39-43; en.json editor.resetFields.* |
| 22 | Bot answers in the channel's one bot voice | BuiltinResponseSlots.Core.cs:249-262 (system replies spoken in channel personality) |
