# Current targeted factcheck review

Verdict: PARTIAL
Reviewed: src/content/reference/en/commands/built-in-commands.mdx
Reviewed-SHA: 16d7f2bd055dde4cfd1d4c6ae06870397b7068ebf1451b10640efcd9e4bb4cd6
Reviewed-SHA256: 16d7f2bd055dde4cfd1d4c6ae06870397b7068ebf1451b10640efcd9e4bb4cd6
Reviewed-Date: 2026-11-06
Reviewer: final-learning editing author; self-review, not independent
Product: 2dfefbb0c393f439954d79b32ac11511678d7f44

The full article was read for editorial clarity. Source verification is limited to the claims below and the focused checks in docs-work/ecosystem-validation/final-learning.md. This is not an exhaustive factual PASS, independent approval, rendered-site review or live application test.

Whisper routing: server/src/NomNomzBot.Infrastructure/Chat/EventHandlers/WhisperCommandHandler.cs:39-69 fixes the prefix at !; :106-135 resolves an explicit channel or exactly one session channel; :139-175 sends a cap notice without disclosing the answer. The channel example gives readers a recovery path.

## Preserved historical reviews

The earlier hashes, verdicts and claims below are retained as historical evidence; they do not approve this revision.

# Current independent fact check

Verdict: PASS
Reviewed: src/content/reference/en/commands/built-in-commands.mdx
Reviewed-SHA: 39c4fdf7f0487344858cb6d3d263fd22e827fccb4737cdec9584cf2277af21f9
Reviewed-SHA256: 39c4fdf7f0487344858cb6d3d263fd22e827fccb4737cdec9584cf2277af21f9
Reviewed-Date: 2026-11-05
Reviewer: independent section reviewer
Product: 54da8b6318de63b5205a0ff8db35e0b9045dd959 (initial source tracing b12f4f69638553c03ed64c1518c90d7bcccd6907)

The full article was read in navigation order; consequential behavior and reference details were checked against current source. All reported documentation findings affecting this page were repaired and re-reviewed. This is a source review, not a live-channel test.

- Catalog and default pacing re-read from current IBuiltinCommand implementations, including WhisperBuiltin.cs:54-60, AccountAgeBuiltin.cs:64-67, QuoteBuiltin.cs:71-75, GameBuiltins.cs:68-72, MusicBuiltins.cs:35-47,336-340,504-510,624-627.
- Shared replies, fixed data-rights settings, floor and cooldown bounds/reset behavior: server/src/NomNomzBot.Infrastructure/Commands/BuiltinCommandService.cs:103-145,205-301,395-427.
- Whisper dispatch accepts only explicit WhisperSafe built-ins with an Everyone floor: server/src/NomNomzBot.Infrastructure/Chat/EventHandlers/WhisperCommandHandler.cs:39-60.
- Re-review resolved the editor/effective-access finding: the table now explicitly describes effective access and explains the separate runtime music gate. Everyone is the base role for several music commands: BanSongBuiltin.cs:33-49; BuiltinCommandService.cs:413-427.

Report: docs-work/overhaul/review-learning-commands-helpers.md.

## Historical evidence

The material below is retained as historical evidence. Its older hashes, verdicts and values do not constitute the current review.

# Fact check: src/content/reference/en/commands/built-in-commands.mdx
Verdict: PASS
Reviewed: src/content/reference/en/commands/built-in-commands.mdx
Reviewed-SHA: 5b57cfa954394529

## Round 5 change: troubleshooting step 5 (line 177)

- `git diff -- <page>` shows only line 177 changed. It now names five commands that answer even when a channel command has the same name: `!permit`, `!unpermit`, `!mydata`, `!gdpr`, `!forgetme`.
- Application/Commands/Builtin/IBuiltinCommand.cs:46 `IsAlwaysOn => IsReserved`. Infra/Identity/Builtins/GdprBuiltins.cs:206,209 (forgetme), 220,223 (mydata), 238,241 (gdpr) set `IsReserved => true`. PermitBuiltins.cs:256-257, 498-499 set `IsAlwaysOn => true`. A grep of Infra this round found no other `IsReserved`/`IsAlwaysOn` true. That makes 5 of 5.
- Infra/Chat/EventHandlers/ChatMessageHandler.cs:285-293: when `isAlwaysOn` is true, the authored command is set to null, so the built-in answers. Supported.

Round 4. Re-review after the A-to-Z reorder (docs diff 54da621..HEAD). Product repo master at b6adc85d2 (includes b6204c36c). Paths relative to `C:\Projects\NoMercyLabs\nomnomzbot`. Infra = `server/src/NomNomzBot.Infrastructure`. Page en.json = `dashboard/src/views/dashboard/commands/i18n/en.json`. Editor = `dashboard/src/views/dashboard/commands/components/BuiltinEditor.vue`. List = `.../components/BuiltinList.vue`.

## The change checked first

- Sorted row sets of 54da621 and HEAD were diffed. 41 of 42 rows are byte-identical. One row was reworded: `!unwhitelist` "Takes that standing back." became "Takes back the standing that `!whitelist` gives." Same fact; supported by Infra/Identity/Builtins/WhitelistBuiltins.cs:143 ("removes the manual override") and :24-29 (`!whitelist` writes the manual standing). No row lost or gained a fact.
- The only other changed line is 38: "lists all 42 from A to Z". The table is in A-to-Z order (checked). The dashboard list also sorts A to Z now: List:35-39 (`.sort(... localeCompare ...)`), added after b6204c36c.
- Count: Infra/DependencyInjection.cs:1280-1341 holds 42 `IBuiltinCommand` registrations (41 `AddScoped<IBuiltinCommand, X>` lines plus the factory at 1300-1302 for CommandsBuiltin; lines 1342 and 1344 are the catalog and service, not commands). Table rows: 42. Matches.

## Whole page re-check

- Product diff b6204c36c..HEAD over Commands, Identity/Builtins, Chat, Application/Commands, dashboard commands view and DependencyInjection.cs: only CommandsView.vue comment, the List sort, a test, and DependencyInjection.cs lines with no builtin change. No other claim on the page is affected.
- Every default in the table was re-read this round from the `BuiltinKey`, `DefaultCooldownSeconds`, `DefaultUserCooldownSeconds`, `DefaultMinPermissionLevel`, `IsReserved` and `IsAlwaysOn` lines (grep output this round). All match.

## Product defects

- Carried from round 3, still open: two label sets for one role. List row summary uses `dashboard.commands.builtin.roles.*` ("Moderator", "Lead moderator", "Broadcaster"); the editor picker uses `dashboard.commands.roles.*` ("Moderators", "Lead moderators", "Only you"). The page uses the editor labels and the "Everyone" example, so the page is not wrong.

## Claim table

| Claim | Supported by file:line | Status |
| --- | --- | --- |
| 42 built-in commands (37-38) | Infra/DependencyInjection.cs:1280-1341 | Supported |
| Table is A to Z; list shows A to Z (38) | page lines 43-84; List:35-39 | Supported |
| `!accountage` Everyone 15/0 | Infra/Commands/Builtins/AccountAgeBuiltin.cs:60-62 | Supported |
| `!allow`, `!disallow` Lead moderators 3/0 | Infra/Moderation/Builtins/AllowBuiltin.cs:37,40; DisallowBuiltin.cs:36,39 | Supported |
| `!banger`, `!bansong`, `!clearsongs` Everyone 5/0 | BangerBuiltin.cs:39-41; BanSongBuiltin.cs:33-39; ClearSongsBuiltin.cs:32,35 | Supported |
| `!closequeue`, `!openqueue` Everyone 5/0 | QueueRequestsBuiltins.cs:31,34 | Supported |
| `!coinflip`, `!dice`, `!slots` Everyone 0/0 | GameBuiltins.cs:71-72 | Supported |
| `!commands`, `!help` Everyone 15/0 | CommandsBuiltin.cs:53-55; HelpBuiltin.cs:45-47 | Supported |
| `!discord`, `!update`, `!uptime` Everyone 30/0 | DiscordInviteBuiltin.cs:36-38; UpdateUserInfoBuiltin.cs:58-60; UptimeBuiltin.cs:41-42 | Supported |
| `!followage` Everyone 15/0 | FollowAgeBuiltin.cs:44-45 | Supported |
| `!forgetme`, `!mydata`, `!gdpr` 0/0, data-rights, always on | Infra/Identity/Builtins/GdprBuiltins.cs:207-209,220-223,238-241; Application/Commands/Builtin/IBuiltinCommand.cs:46 | Supported |
| `!leaderboard`, `!playlist` Everyone 10/0 | LeaderboardBuiltin.cs:34-35; PlaylistBuiltin.cs:35-37 | Supported |
| `!lurk`, `!unlurk` Everyone 5/0 | LurkBuiltins.cs:55-56,139,153 | Supported |
| `!media` Everyone 0/0 | Infra/MediaShare/Builtins/MediaBuiltin.cs:47-49 | Supported |
| `!pause`, `!resume` Everyone 5/0 | PlaybackControlBuiltins.cs:28,32,57,60 | Supported |
| `!permit`, `!unpermit` Moderators 0/0, always on | PermitBuiltins.cs:256-259,498-501 | Supported |
| `!profile`, `!stats` Everyone 5/0 | Infra/ViewerData/Builtins/StatsBuiltins.cs:63-64,239,255 | Supported |
| `!queue`, `!song` Everyone 10/0 | MusicBuiltins.cs:316-317,603-604 | Supported |
| `!quote` Everyone 5/0 | Infra/Quotes/Builtins/QuoteBuiltin.cs:71-75 | Supported |
| `!skip`, `!volume` Everyone 5/0 | MusicBuiltins.cs:34,40,481-487 | Supported |
| `!sr`, `!wrongsong` Everyone 0/5 | SongRequestBuiltin.cs:46-48; WrongSongBuiltin.cs:29-34 | Supported |
| `!voice` Everyone 5/0 | Infra/Tts/Builtins/VoiceBuiltin.cs:78-82 | Supported |
| `!whisper` Moderators 3/0 | WhisperBuiltin.cs:50-55 | Supported |
| `!whitelist`, `!unwhitelist` Only you 0/0; unwhitelist takes the standing back | WhitelistBuiltins.cs:24-29,47-49,143,152-154,248 (BroadcasterLevel 40) | Supported |
| Whisper: only `!uptime`, `!song`, `!queue`; others "works in chat only." (94-96) | MusicBuiltins.cs:315,602; UptimeBuiltin.cs:45; Infra/Chat/EventHandlers/WhisperCommandHandler.cs:53-55 | Supported |
| Always-on and reserved cannot be switched off; disabled built-in ignored (28-33) | Infra/Commands/BuiltinCommandService.cs:103,109; ChatMessageHandler.cs:285,299 | Supported |
| Labels: System commands, Search commands, Customize, customize help, Reset to default + dialog title/body, Save changes, Discard, unsaved count, Variables:, data-rights text, Always on, Using the default | page en.json:10,14,152-155,159,165-166,168,171,188-189,192-194 | Supported |
| Reply up to 500 characters; cooldowns 0 to 3600 s | Editor:333; BuiltinCommandService.cs:29 | Supported |
| Role can be raised, never lowered | BuiltinCommandService.cs:227-229 | Supported |
| Shared replies lurk/unlurk, stats/profile | Application/Commands/Builtin/Personality/BuiltinResponseSlots.cs:29,68 | Supported |
| A same-named channel command answers instead, except these five: `!permit`, `!unpermit`, `!mydata`, `!gdpr`, `!forgetme` (177) | IBuiltinCommand.cs:46; GdprBuiltins.cs:206-241; PermitBuiltins.cs:256-257,498-499; ChatMessageHandler.cs:285-293 | Supported |
| Reply is a line in the channel's one bot voice (124) | page wording; composer path unchanged since round 3 (diff b6204c36c..HEAD empty for Commands) | Supported |
