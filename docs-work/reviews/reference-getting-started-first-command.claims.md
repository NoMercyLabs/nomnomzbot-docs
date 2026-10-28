# Claims: /reference/getting-started/first-command

Product paths are relative to the product root. Page en.json is `dashboard/src/views/dashboard/commands/i18n/en.json`. Rows marked (pilot) reuse evidence from the reviewed `reference-commands-create-a-command.claims.md`.

| # | Claim | Evidence |
| --- | --- | --- |
| 1 | Moderator, Lead moderator, Editor or Broadcaster may make commands | pilot claims (Who can use this page rows) |
| 2 | **Commands** in the sidebar | pilot claim 1 (navigation.ts:180-184) |
| 3 | **New command** opens dialog titled **New command**; empty list shows **Make the first command** that opens it | page en.json:19,114; pilot claims 8, 14 |
| 4 | Field **Name**, **What it does** default **Sends a reply**, field **Reply** | page en.json:41,116,119-120; NewCommandDialog.vue:48 (kind 'template'), 171-207 |
| 5 | Other fields default (prefix Default, match StartsWith) | NewCommandDialog.vue:52-55, 59-72 |
| 6 | **Create command** closes the dialog and opens the command in the editor | page en.json:126; NewCommandDialog.vue:155-156; CommandsView.vue:223 (@created="select"), 102 |
| 7 | New command is switched on, no save needed | CommandDtos.cs:147-148 (IsEnabled = true); NewCommandDialog.vue:116-122 sends no isEnabled |
| 8 | Chat types `!hello`; `!` is the prefix when the channel set none | CommandService.cs:638-643 |
| 9 | Bot answers with the reply line | pilot (What a command does: Sends a reply) |
| 10 | Row switch; **Off** command answers nobody | pilot claim 58; page en.json:22,40 |
