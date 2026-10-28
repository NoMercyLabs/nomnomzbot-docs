# Fact-check: /reference/settings/permissions
Verdict: PASS
Reviewed: C:\Projects\NoMercyLabs\nomnomzbot-docs\src\content\reference\en\settings\permissions.mdx
Reviewed-SHA: 310e46d0423a67f7

I read the whole current page and checked it against the code in this run. Product paths are relative to C:\Projects\NoMercyLabs\nomnomzbot. P = dashboard/src/views/dashboard/settings/permissions. EN = P/i18n/en.json. L = dashboard/src/layouts/dashboard.

The earlier FAIL (who can reach the page) is fixed by the new "Who can use this page" text.

## Claims

| Claim | Proof |
| --- | --- |
| The broadcaster sets permissions; page under Settings in the sidebar | L/settingsNavigation.ts:79; ActionDefinitionSeeder.cs:212 (`roles:manage`, Broadcaster) |
| Only the Broadcaster sees Settings in the sidebar | L/navigation.ts:286-290 (`setup:write`); server/src/NomNomzBot.Infrastructure/Content/Identity/ActionDefinitionSeeder.cs:437 (Broadcaster, grant false); L/useNavigation.ts:77-80 |
| Moderator, Lead moderator, Editor may open the page from a direct link | P/route.ts:22 (`roles:read`); ActionDefinitionSeeder.cs:211 (Mod); dashboard/src/router/accessGuard.ts:101-115 |
| They see the lists with controls off or hidden | TeamRolesPanel.vue, ActionMatrixPanel.vue, PersonGrantsPanel.vue `canManage` guards; P/PermissionsView.vue `access.can('roles:manage')` |
| Three tabs, each with a count | P/PermissionsView.vue `VIEWS`, `counts`, `tabs`; EN `tabs` |
| Ladder, order, Subscriber/VIP/Moderator holders, Artist between VIP and Moderator | dashboard/src/api/permissions.ts:31-40; EN:5-14; server/src/NomNomzBot.Domain/Identity/ChatRole.cs:56-61; AuthorizationLadder.cs:28-30 |
| Lead moderator / Editor: a team member the broadcaster gives the role, may use actions set to that rung or lower | dashboard/src/api/permissions.ts:48 `teamRoles`; ActionDefinitionSeeder.cs:212; RoleResolver.cs:229-241 (membership level, highest wins) |
| Broadcaster: the owner | RoleResolver.cs:226-229 |
| Team add flow: Person to add box, list of known people, name replaces box, roles, starts Moderator, Add to team | PersonPicker.vue (input `:aria-label="label"`, Popover list, `v-if="picked"`); TeamRolesPanel.vue `newRole`, `grantable`, `add()`; EN team.person "Person to add", team.newRole, team.add |
| Pick someone else (X); red text on refusal | PersonPicker.vue Cross button, EN person.clear; TeamRolesPanel.vue `role="alert"` text-destructive |
| Row picker saves at once; trash removes | TeamRolesPanel.vue `changeRole`, `remove.mutateAsync` |
| Add list omits Broadcaster; row picker lists it switched off; owner row locked | TeamRolesPanel.vue `grantable`, `rowOptions` `disabled`, `member.isOwner` |
| Actions tab: areas with counts, two groups, picker saves, "1 changed", search, no match, phone back | ActionAreaList.vue:55-56; ActionMatrixPanel.vue `planes`, `changeLevel`; actionArea.ts `matchesSearch`, `changed`; PermissionsView.vue `ListDetail`, BackLink; EN areas.*, matrix.* |
| Protected badge, roles under the floor off | ActionMatrixPanel.vue `isProtected`, `optionsFor` |
| Reset only on a changed action | ActionMatrixPanel.vue `v-if="row.overrideLevel != null ..."` |
| A capability is one action given to one person; Bot manager covers many items | PersonGrantsPanel.vue `options`, `give()`; EN grants.known.botManager.can |
| Card title and text; Person to give a capability box; Capability grouped by area; only grantable | EN grants.*; PersonGrantsPanel.vue PersonPicker label, `options` filter `isGrantableViaPermit`, `group` |
| Give capability; capability under the name | EN grants.add; PersonGrantsPanel.vue SummaryRow `:detail` |
| OBS control and Bot manager confirm; dialog names person and capability, lists can/cannot; Give it | dashboard/src/api/permissions.ts:275-278 `namedGrants`; PersonGrantsPanel.vue `add()`, `confirmTitle`, `consequences`; EN grants.confirmTitle "Give {name} {capability}?", grants.confirm |
| Can and cannot table | EN grants.known.obsControl, grants.known.botManager |
| Empty text; trash takes it back | EN grants.empty; PersonGrantsPanel.vue revoke button |

## Conventions

- The page shows no numbered permission level (page-conventions.md:60), no action key, no source citation and no license name.
- No hosting or price is mentioned, so the hosting marker is not needed.

## Notes (style, not a FAIL)

- A chatter with Twitch's lead-moderator badge also reaches the Lead moderator rung in chat (ChatRole.cs:34-41, 54-55). The Lead moderator row names only the team role. That is true but not complete.
- A person given `!whitelist @user subscriber` or `vip` also holds that rung (server/src/NomNomzBot.Infrastructure/Identity/Builtins/WhitelistBuiltins.cs:38-44).
