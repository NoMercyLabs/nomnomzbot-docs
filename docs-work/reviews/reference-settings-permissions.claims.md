# Claims: /reference/settings/permissions

Product paths are relative to C:\Projects\NoMercyLabs\nomnomzbot. P = dashboard/src/views/dashboard/settings/permissions. EN = P/i18n/en.json.

| Claim | Source |
| --- | --- |
| Page label "Permissions", a settings page | P/route.ts:21-23 (navMode settings); dashboard/src/i18n/locales/en.json:894; P/PermissionsView.vue:90 |
| Tabs Team, Actions, Per person, each with a count | P/PermissionsView.vue:49-64; EN:29-33 |
| Broadcaster sees Settings in the sidebar; Moderator, Lead moderator, Editor do not but may open by direct link | dashboard/src/components/layout/navigation.ts:286-290 (setup:write); ActionDefinitionSeeder.cs:437 (setup:write Broadcaster); useNavigation.ts:77-80; dashboard/src/router/accessGuard.ts:101-115 (per fact-check) |
| Lead moderator / Editor may use every action set to their rung or lower | dashboard/src/api/permissions.ts:31-40,53-58 (rungOf); ActionDefinitionSeeder.cs:52-53 |
| Person to add box (aria-label; placeholder Search a person) | EN:16,25; PersonPicker.vue Input aria-label |
| Moderator and up may open the page route | P/route.ts:22 (roles:read); server/src/NomNomzBot.Infrastructure/Content/Identity/ActionDefinitionSeeder.cs:212 (Mod) |
| Only the broadcaster may change | ActionDefinitionSeeder.cs:213 (roles:manage Broadcaster, Critical, grant false); P/PermissionsView.vue:112,119,120 |
| Others see lists with controls off or hidden | TeamRolesPanel.vue:828,832,845; ActionMatrixPanel.vue:340,344; PersonGrantsPanel.vue:592,610 (line numbers as in each component file: TeamRolesPanel.vue:98,102,115; ActionMatrixPanel.vue:135,139; PersonGrantsPanel.vue:22,40) |
| Ladder order and names | dashboard/src/api/permissions.ts:31-40; EN:5-14 |
| Lead moderator and Editor are team roles | dashboard/src/api/permissions.ts:48 |
| Who has Subscriber/VIP | confirmed by fact-check (EN:7-8) |
| Artist is a rung between VIP and Moderator (no holder claimed; the code gives it to nobody per fact-check) | dashboard/src/api/permissions.ts:34-36; EN:9 |
| Higher rung includes lower | dashboard/src/api/permissions.ts:53-58 (rungOf: highest rung at or below level); ActionDefinitionSeeder.cs:45-48 |
| Your team card title and text | EN:20-21; TeamRolesPanel.vue (component) title/description |
| Person to add, Search a person, list of known people | EN:16,25; PersonPicker.vue:5-17,26-44 (component lines); useViewerSearch |
| New role choices Moderator/Lead moderator/Editor, starts Moderator | TeamRolesPanel.vue:37,42-44 (component lines: newRole 'Moderator', grantable excludes Broadcaster) |
| Add to team | EN:27 |
| Pick someone else | EN:17; PersonPicker.vue (clear button) |
| Error in red under card | TeamRolesPanel.vue run()/error p role=alert |
| Row role picker saves at once; trash removes | TeamRolesPanel.vue changeRole, remove; server RolesController.cs:67-107 |
| Broadcaster left out of Role for the new person; listed but switched off in a row picker; owner row locked | TeamRolesPanel.vue:42-51 (grantable excludes Broadcaster; rowOptions disabled Broadcaster), :disabled isOwner |
| A capability is one action given to one person; Bot manager is one action covering many kinds of items | dashboard/src/api/permissions.ts:272-278 (namedGrants: obs:control, bot:manager:author, one action key each); PersonGrantsPanel.vue grant body { userId, permission } single key; EN:412 |
| OBS control and Bot manager both confirm; dialog names person and capability, lists can/cannot | PersonGrantsPanel.vue picking (namedGrantSlug defined), confirmTitle, consequences; EN:400,403-414 |
| Areas list with counts; Moderation, Music | ActionAreaList.vue; EN:35,38,72,73 |
| Panel description, planes | EN:379,382-385; ActionMatrixPanel.vue byPlane |
| Picker saves at once; "{n} changed" | ActionMatrixPanel.vue changeLevel; actionArea.ts isChanged/changed; EN:39 |
| Search by name or description, all areas | actionArea.ts matchesSearch; PermissionsView.vue:66-72; EN:36-37 |
| Phone back link All areas | PermissionsView.vue:79-86,105-111; EN:40 |
| Protected badge, roles below floor off | ActionMatrixPanel.vue optionsFor, isProtected; EN:387; server ActionAuthorizationService.cs:190-193 refuses below floor |
| Reset button only on changed action | ActionMatrixPanel.vue v-if overrideLevel != null; ActionPermissionsController.cs:77-95 |
| Per person card title and text | EN:392-393 |
| Person to give a capability, Capability grouped by area, only grantable actions | EN:397-398; PersonGrantsPanel.vue options filter isGrantableViaPermit, group areaLabel |
| Give capability | EN:399 |
| Confirm for two named capabilities, dialog title, Give it | PersonGrantsPanel.vue picking/add/ConfirmDialog; EN:400-401,403-414 |
| OBS control / Bot manager can and cannot | EN:403-414 |
| Empty text | EN:395 |
| Trash revokes | PersonGrantsPanel.vue revoke button; EN:396 |
