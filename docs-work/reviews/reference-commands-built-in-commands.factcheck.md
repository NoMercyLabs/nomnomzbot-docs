# Fact check: src/content/reference/en/commands/built-in-commands.mdx
Verdict: PASS
Reviewed: src/content/reference/en/commands/built-in-commands.mdx
Reviewed-SHA: ce4b7064a2563d81

Round 3. Fresh review of the whole page (187 lines) against product master at b6204c36c. Paths are relative to `C:\Projects\NoMercyLabs\nomnomzbot`. Infra = `server/src/NomNomzBot.Infrastructure`. Page en.json = `dashboard/src/views/dashboard/commands/i18n/en.json`. Editor = `dashboard/src/views/dashboard/commands/components/BuiltinEditor.vue`. List = `.../components/BuiltinList.vue`.

## Round 3 change checked first: `{stats.*}` as command-only values (lines 128-130)

- The editor prints the **Variables:** label (page en.json:168) under each reply box, then one braced name per `slot.variables` entry (Editor:338-349). The list comes from the server per reply slot: `ToneTemplateCatalog.Variables(replyGroup, slot)` mapped into `BuiltinReplyVariableDto` (Infra/Commands/BuiltinReplyService.cs:299-306).
- The `!stats`/`!profile` slot declares `stats.firstseen, stats.messages, stats.points, stats.rank, stats.rankpart, stats.streak, stats.streakpart, stats.user, stats.watchtime` (Application/Commands/Builtin/Personality/ToneTemplateCatalog.Community.cs:148-167). The values are filled at run time only by the stats command (Infra/ViewerData/Builtins/StatsBuiltins.cs:114-123).
- So `{stats.points}` and `{stats.watchtime}` are values only this command's reply can use, shown under its box. The page no longer sends the reader to the general list for them; line 130 points there only for helpers every reply can use. Supported. The reader's round-2 blocking finding is fixed.

## Other checks this round

- Product master moved to b6204c36c (`{user.accountAge}` reads the Twitch account date). The `!accountage` row says "how old the caller's Twitch account is": AccountAgeBuiltin.cs:26-33 reads `User.AccountCreatedAt` from Helix. Supported.
- Lines 86-88 (split paragraph): MusicModerationGate.cs:33-57: moderator level passes; anyone else passes only with the broadcaster-granted queue-moderate right. Supported.
- Every cooldown, per-person cooldown and role default in the 42-row table re-read from the `DefaultCooldownSeconds`, `DefaultUserCooldownSeconds` and `DefaultMinPermissionLevel` lines (grep output this round). All match. Role labels match the editor picker (Editor:377 uses `dashboard.commands.roles.*`, page en.json:103-111: Everyone, Moderators, Lead moderators, Only you).

## Product defects

- Two label sets for one role. The list row summary uses `dashboard.commands.builtin.roles.*` (List:48-49; page en.json:181-190: "Moderator", "Lead moderator", "Broadcaster"). The editor picker uses `dashboard.commands.roles.*` ("Moderators", "Lead moderators", "Only you"). A `!whisper` row reads "Moderator · 3s chat · 0s each" while its editor says "Moderators". The page example (line 16) uses "Everyone", which is the same in both, so the page is not wrong. To be filed by the main session.

## Claim table

| Claim | Supported by file:line | Status |
| --- | --- | --- |
| Same set in every channel, no delete (6-7) | IBuiltinCommand.cs:18-23 (lead); BuiltinsController.cs:39-228 (lead) | Supported (round 2 opened; unchanged) |
| Commands page, System commands tab, only for someone who may change commands (8-10) | page en.json tabs.builtin; CommandsView.vue:65-67 (lead) | Supported |
| List title, search box (15) | page en.json:148; List:96-104 (lead) | Supported |
| Row summary format and example (16) | page en.json:187 "summary"; List:48-49; UptimeBuiltin cooldown 30 | Supported |
| Using the default / Overrides the default / Always on / data-rights row texts (21-24) | page en.json:166,176,188,189 | Supported |
| Switch on row, **Answers in chat** in editor (28-30) | page en.json:151 "enabled" | Supported |
| Off command ignored; refuse off while bound (32-33) | ChatMessageHandler.cs:1251-1257 (lead); BuiltinCommandService.cs:115-124 (lead) | Supported (round 2 opened) |
| 42 built-in commands (37-38) | DependencyInjection.cs:1293-1354 (lead); 42 rows in the grep this round | Supported |
| Table cooldowns and roles (43-84) | grep of Default* lines across Infra/*/Builtins this round; en.json:103-111 | Supported |
| Always on: permit, unpermit; data-rights: forgetme, mydata, gdpr (72-84) | PermitBuiltins.cs IsAlwaysOn => true (x2); GdprBuiltins.cs IsReserved => true (x3) | Supported |
| !accountage answers Twitch account age (47) | AccountAgeBuiltin.cs:26-33 | Supported |
| Music run-time gate (86-88) | MusicModerationGate.cs:33-57 | Supported |
| Whisper: uptime, song, queue answer by whisper; others "works in chat only." (94-96) | WhisperSafe => true in UptimeBuiltin.cs and MusicBuiltins.cs (x2); WhisperCommandHandler.cs:34-36 | Supported |
| Editor header Built-in, locked text, Customize (100-104) | page en.json:31,152,165 | Supported |
| Unsaved count, Save changes, Discard (106-111) | page en.json:192-194 | Supported |
| Field labels and limits (114-120) | page en.json:169-175; Editor:333 maxlength 500; Svc:208-231 (lead) | Supported |
| Only !quote speaks (120) | QuoteBuiltin.cs:140-141 (lead) | Supported (round 2 opened) |
| Reply in the channel's one bot voice; default follows personality (124-126) | BuiltinResponseComposer.cs:19-24 (lead) | Supported |
| Variables line, stats values command-only (128-130) | Editor:338-349; BuiltinReplyService.cs:299-306; ToneTemplateCatalog.Community.cs:148-167; StatsBuiltins.cs:114-123 | Supported |
| Locked reply text (132) | page en.json:167 | Supported |
| Shared replies lurk/unlurk, stats/profile (134-136) | BuiltinResponseSlots.cs:34-35 (lead) | Supported |
| Back to default, Using the default (140-142) | page en.json:189-190 | Supported |
| Reset dialog title, body, items (146-160) | page en.json:153-163 | Supported |
| Reset button visibility; shared reset (162-164) | Editor:501-511 (lead); Svc:263-300 (lead) | Supported |
| Troubleshooting order and offline rule (173-177) | OfflineCommandGate.cs (lead); IBuiltinCommand.cs:41-46 (lead) | Supported |

Rows marked (lead) were opened in round 2 on unchanged page text and unchanged product files (product change since then is b6204c36c, accountAge only); I did not reopen them this round.
