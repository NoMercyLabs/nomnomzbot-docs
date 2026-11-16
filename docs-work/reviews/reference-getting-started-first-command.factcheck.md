# Current independent fact check

Verdict: PASS
Reviewed: src/content/reference/en/getting-started/first-command.mdx
Reviewed-SHA: 8929dd11e29b59c38e685d0acdb1f38505415beb4efc336728fce408f1bb13f7
Reviewed-SHA256: 8929dd11e29b59c38e685d0acdb1f38505415beb4efc336728fce408f1bb13f7
Reviewed-Date: 2026-11-05
Reviewer: independent section reviewer
Product: 54da8b6318de63b5205a0ff8db35e0b9045dd959 (initial source tracing b12f4f69638553c03ed64c1518c90d7bcccd6907)

The full article was read in navigation order; consequential behavior and reference details were checked against current source. All reported documentation findings affecting this page were repaired and re-reviewed. This is a source review, not a live-channel test.

- New command enabled/role/cooldown defaults: server/src/NomNomzBot.Application/Commands/Dtos/CommandDtos.cs:96-156.
- Save validation and creation: server/src/NomNomzBot.Infrastructure/Commands/CommandService.cs:70-249.
- Broadcaster/moderator offline exception versus ordinary viewers: server/src/NomNomzBot.Infrastructure/Chat/OfflineCommandGate.cs:23-26; server/src/NomNomzBot.Infrastructure/Chat/EventHandlers/ChatMessageHandler.cs:290-379.

Report: docs-work/overhaul/review-learning-commands-helpers.md.

## Historical evidence

The material below is retained as historical evidence. Its older hashes, verdicts and values do not constitute the current review.

# Fact check: src/content/reference/en/getting-started/first-command.mdx
Verdict: PASS
Reviewed: src/content/reference/en/getting-started/first-command.mdx
Reviewed-SHA: 6e7bf29b8b9d5ef8

Round 1. Whole page (54 lines) checked against product master b6204c36c. Every row rests on a line I opened this run. No row is (lead). The three claims the writer reused from the create-a-command claims file (roles, row switch, reply behavior) were opened again here. No bare word in braces is on the page.

Paths are relative to `C:\Projects\NoMercyLabs\nomnomzbot`. Page en.json = `dashboard/src/views/dashboard/commands/i18n/en.json`. Dialog = `dashboard/src/views/dashboard/commands/components/NewCommandDialog.vue`. View = `dashboard/src/views/dashboard/commands/CommandsView.vue`. List = `dashboard/src/views/dashboard/commands/components/CommandList.vue`.

## Claim table

| Claim | Supported by file:line | Status |
| --- | --- | --- |
| Moderator, Lead moderator, Editor or Broadcaster may make a command (10) | server/src/NomNomzBot.Infrastructure/Content/Identity/ActionDefinitionSeeder.cs:180 (`commands:write` at Mod); Domain/Identity/Enums/AuthorizationLadder.cs:24-35 (Mod 10, LeadMod 20, Editor 30, Broadcaster 40); View:56,154-155 (button disabled without write) | Supported |
| **Commands** in the sidebar (15) | dashboard/src/layouts/dashboard/navigation.ts:180-184 | Supported |
| **New command** opens the dialog **New command** (17,19) | page en.json:6,114; View:153-156,223 | Supported |
| On an empty list **Make the first command** does the same (18) | List:171-172 emits create; View:180 `@create="creating = true"`; page en.json:19 | Supported |
| Field **Name** (20) | Dialog:175-184; page en.json:116 | Supported |
| **What it does** defaults to **Sends a reply** (21) | Dialog:48,62 kind 'template'; Dialog:186-199; page en.json:119-120 | Supported |
| Field **Reply** (22) | Dialog:203-209 label editor.reply; page en.json:41 | Supported |
| Other fields keep their defaults (23) | Dialog:52-55,59-72 (prefix Default, match StartsWith) | Supported |
| **Create command** closes the dialog and opens `!hello` in the editor beside the list (24-25) | page en.json:126; Dialog:155-156 (`open = false`, emit created); View:223 `@created="select"`, View:102-110 sets the `command` query | Supported |
| New command is on at once, no Save changes (27-28) | Application/Commands/Dtos/CommandDtos.cs:148 `IsEnabled ... = true`; Dialog:113-119 body sends no isEnabled | Supported |
| The bot answers with the line (34) | Infrastructure/Chat/EventHandlers/ChatMessageHandler.cs:556-563 picks the command's template response | Supported |
| `!` is the prefix when the channel set none (36-37) | Infrastructure/Commands/CommandService.cs:636-643 | Supported |
| Row switch; an Off command answers nobody (45-46) | List:217,227 Off badge, 231 Switch; page en.json:22,40-41 | Supported |
| Links: variables, create-a-command, permissions, dashboard tour (11,15,47,53-54) | link targets only; no product claim | Supported |
