# Fact check: src/content/reference/en/settings/features.mdx
Verdict: PASS
Reviewed: C:/Projects/NoMercyLabs/nomnomzbot-docs/src/content/reference/en/settings/features.mdx
Reviewed-SHA: eccdda86f9e9f32c

Product: NomNomzBot origin/master 779081d10d05dc6b4150732abd77bfae4dbef1d9 (`git fetch` run in this pass, 2026-10-29). Every product file was read with `git show origin/master:<path>`.

Short paths: `FS` = server/src/NomNomzBot.Infrastructure/Platform/FeatureService.cs. `ADS` = server/src/NomNomzBot.Infrastructure/Content/Identity/ActionDefinitionSeeder.cs. `FC` = server/src/NomNomzBot.Api/Controllers/V1/FeaturesController.cs. `feat/` = dashboard/src/views/dashboard/settings/features/. `perm/` = dashboard/src/views/dashboard/settings/permissions/. `FV` = feat/FeaturesView.vue.

The page was read whole (lines 1-92). The two findings of the previous verdict (switch lock, Viewer Templates scope) are fixed in this text; both are rechecked below, with the new access section.

## Changed places, traced in full

### Switch lock (page line 32)

"While one switch saves, you cannot use any switch on the page."
- FV:71 sets `busyKey` when a flip starts; FV:78 clears it in `finally`.
- FV:126 disables every switch while `busyKey !== undefined`; FV:125 keeps each switch's own state (`:model-value="feature.isEnabled"`).
- FV:68 refuses a second flip while one is busy.
True.

### Viewer Templates row (page line 47)

"Lets a viewer with the template permission use helpers such as `{stream.game}` in the text after a command or in a reward input. Subscribers and higher hold that permission by default." Group Chat, default On.
- FS:92-100: label "Viewer Templates"; text names "the text they type after a command or in a reward input" (FS:95); the last tuple value is `true` (default On).
- feat/featureAreas.ts:26: `use_viewer_templates` is in `chat`.
- Command text: ChatMessageHandler.cs:1864-1885 (server/src/NomNomzBot.Infrastructure/Chat/EventHandlers/) calls ViewerArgsInterpreter.InterpretAsync; ViewerArgsInterpreter.cs:34-41 sends `{args}` through `ResolveRewardInputAsync`.
- server/src/NomNomzBot.Infrastructure/Rewards/ViewerInputTemplateService.cs:56-62 returns the text unchanged when the feature is off; :68 checks the viewer's permission.
- ADS:626-638: the `ViewerTemplateCapabilities.RewardInput` capability defaults to the Subscriber rung (ADS:631-632).
True.

### Who can use this page (page lines 10-20)

| Page line | Claim | Supported by | Status |
| --- | --- | --- | --- |
| 12 | By default a moderator, lead moderator, editor or broadcaster may open the page and flip a switch | feat/route.ts:21 (`meta.action: 'feature:read'`); dashboard/src/router/accessGuard.ts:104-127 (a route with `meta.action` opens only when the person holds that key); FC:39 (`feature:read` on GET) and FC:52 (`feature:write` on toggle); FV:123-124 (`GatedSwitch action="feature:write"`); ADS:440-441 (both `M(..., Mod)`); rungs ADS:51-54 (Mod 10, LeadModerator 20, Editor 30, Broadcaster 40) | true |
| 13 | A viewer or a VIP may not | ADS:49-50 (Subscriber 2, Vip 4), below Mod 10; ADS:152-153 (`M` sets default = floor) | true |
| 15 | Only the broadcaster sees Settings in the main sidebar | dashboard/src/layouts/dashboard/navigation.ts:284-291 (Settings entry, `action: 'setup:write'`); dashboard/src/layouts/dashboard/useNavigation.ts:64-81 (an entry shows only when the person holds its action); ADS:437 (`M("setup:write", Broadcaster, grant: false)`) | true |
| 16 | A moderator, lead moderator or editor does not see it, but may open Features from a direct link | as line 15 for the entry; the Features route needs only `feature:read` (feat/route.ts:21, ADS:440) | true (see note 1) |
| 19 | The Actions tab of Permissions has a Features area with "See which features are on" and "Turn features on and off" | perm/i18n/en.json: `tabs.actions` "Actions", `area.feature` "Features", `action.feature_read`, `action.feature_write` (keys resolved by perm/actionArea.ts `areaOf`, `actionNameSlug`, `useAreaLabel`, `useActionName`) | true |
| 18, 20 | The broadcaster may raise each role, not lower it below Moderator | server/src/NomNomzBot.Api/Controllers/V1/ActionPermissionsController.cs:52-53 and :80-81 (`roles:manage`); ADS:213 (`roles:manage` = Broadcaster, grant false); server/src/NomNomzBot.Infrastructure/Identity/ActionAuthorizationService.cs:190-196 (below the floor is refused, then clamped to [floor, Broadcaster]); floor = Mod from ADS:440-441 with ADS:152-153; perm/components/ActionMatrixPanel.vue:87-91 (choices below the floor are disabled) | true |

## Every other claim

| Page line | Claim | Supported by | Status |
| --- | --- | --- | --- |
| 6-7 | Features sits in the Bot group of the settings sidebar | dashboard/src/layouts/dashboard/settingsNavigation.ts:48-57 (`settings.bot` holds `dashboard-settings-features`, :56) | true |
| 8 | Page text "Switch on the parts of NomNomzBot your channel uses. Each switch takes effect right away." | feat/i18n/en.json:6; shown at FV:91 | true |
| 24 | Open Settings in the sidebar, then Features in the Bot group | navigation.ts:287 (Settings opens `dashboard-settings`); settingsNavigation.ts:56 | true |
| 25 | Each feature shows name, short description and a switch | FV:109, :114, :123-129 | true |
| 27 | The switch saves at once, no save button | FV:67-80 (`flip` on `update:model-value`, FV:128); no save control in FV:83-137 | true |
| 29 | A switched-on feature shows "On since" and the date it was last switched on | FV:60-65, :121; feat/i18n/en.json:16; FS:234 sets `EnabledAt` on each switch-on | true |
| 30 | On by default and never switched shows no date | no row gives `EnabledAt` null (FS:157-158); FV:61-62 | true |
| 33 | A refusal shows red text under the list with the reason | FV:75-76 (`errorText(failure, t)`), FV:134 (`text-destructive`, after the list) | true |
| 37-38 | Groups Chat, Automation, More features; an empty group is not shown | feat/featureAreas.ts:16, :35-41; feat/i18n/en.json:10-12 | true |
| 42 | 7TV Emotes, Chat, animated and zero-width overlay emotes, On | FS:60-65; featureAreas.ts:21 | true |
| 43 | BetterTTV Emotes, Chat, On | FS:66-71; featureAreas.ts:22 | true |
| 44 | FrankerFaceZ Emotes, Chat, On | FS:72-77; featureAreas.ts:23 | true |
| 45 | Link Previews, Chat, preview card (title, description, image) for a link a subscriber or higher shares, Off | FS:78-84; featureAreas.ts:24; ADS:616-624 (PreviewLinks at Subscriber) | true (see note 2) |
| 46 | Chat HTML Fragments, Chat, subscriber or higher, cleaned HTML, shown by the overlay, Off | FS:85-91; featureAreas.ts:25; ADS:606-614 (RenderHtml at Subscriber) | true (see note 2) |
| 48 | Custom Code, Automation, JavaScript scripts as pipeline actions, Off | FS:51-56; featureAreas.ts:27 | true |
| 50 | Link Previews is off because the bot fetches every shared link | FS:80-81; server/src/NomNomzBot.Infrastructure/Chat/ChatMessageDecorator.cs:47 | true |
| 51 | A moderator's or the broadcaster's message meets the subscriber rule | ChatMessageDecorator.cs:145-147 | true |
| 55-56 | With Custom Code off every script request is refused with "Custom code is not enabled for this channel. Enable it on the Features page." | server/src/NomNomzBot.Api/Controllers/V1/CodeScriptsController.cs:267-277; 14 `[Http` attributes and 14 `FeatureGateAsync(ct)` calls in the file | true |
| 57 | A script uses a bot ability only when the feature behind that ability is on | server/src/NomNomzBot.Infrastructure/CustomCode/ScriptCapabilityBroker.cs:118-128 | true (see note 3) |
| 61-62 | A feature outside the plan shows a badge with the plan name or "Higher plan" | FV:110-112; feat/i18n/en.json:14 | true |
| 63 | A line under the description can give the reason | FV:115-117 | true |
| 65-66 | The switch shows on or off but cannot be changed, also when on | FV:125-126 (`!feature.entitled` disables it), FV:68 | true |
| 67 | Usage limits per plan are on Resource limits | docs page src/content/reference/en/settings/resource-limits.mdx exists | true |
| 71 | Callout: free for yourself, friends and community; no earning money | matches the PolyForm Noncommercial terms in the product CLAUDE.md and LICENSE statement | true |
| 79-80 | "The features could not be loaded." with Try again | feat/i18n/en.json:7; FV:93, :95; dashboard/src/components/layout/PanelCard.vue:191-193; dashboard/src/i18n/locales/en.json:81 ("Try again") | true |
| 82-84 | "No features are available for this channel." when the bot sends none | feat/i18n/en.json:8; FV:51-53, :94; FS:125-126 (a bad channel id gives an empty list) | true |

## Notes (not verdict items)

1. Line 16 names one way in. A moderator can also open Settings from the profile menu (dashboard/src/layouts/dashboard/ProfileMenu.vue:60, :135 links `dashboard-settings`, which is `open: true` at dashboard/src/views/dashboard/settings/route.ts:47-55), and the settings sidebar then lists Features, because the entry shows when the person holds its route action (useNavigation.ts:78-80, feat/route.ts:21). The sentence is true; the writer may add this path.
2. Lines 45-46 give the default standing. A `!permit` grant also unlocks both steps (ADS:602-604 comment; ChatMessageDecorator.cs:135-138), and the rows are permittable (`true` at ADS:612, :622).
3. Line 57: every script ability names Custom Code as its feature (`FeatureGate = "custom_code"`, ScriptCapabilityBroker.cs:35, used by every catalog entry and by `ActionGate`). So today the sentence adds no condition beyond line 55. It is true, not wrong.
4. `feature:read` and `feature:write` are grantable to one person (`M` default `grant = true`, ADS:152-153). Line 12 says "By default", so it stays true.
5. A person who holds `feature:read` but not `feature:write` sees an on/off badge instead of a switch (dashboard/src/components/layout/GatedSwitch.vue:12, :45). The page does not claim otherwise.

## Product defects

- None found on this page's surface. The UI locks a not-entitled switch even when the feature is on (FV:68, :126), while the server allows turning it off (FS:205-216 comment and check, FS:207 and :212: only a switch-on is refused). The page describes the UI correctly.
