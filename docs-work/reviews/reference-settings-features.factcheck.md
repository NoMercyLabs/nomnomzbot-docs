# Fact-check: /reference/settings/features
Verdict: PASS
Reviewed: C:\Projects\NoMercyLabs\nomnomzbot-docs\src\content\reference\en\settings\features.mdx
Reviewed-SHA: eaec2636054228ba

Product repo: C:\Projects\NoMercyLabs\nomnomzbot, local master, read in this run. Paths are repo-relative.
This is a re-review of the changed page. The whole current page was re-read against the code.

## Earlier findings, now fixed

1. Switch outside the plan. The page now says the switch shows the state and cannot be changed on this page, also when on. Proof: FeaturesView.vue:125 (`:model-value="feature.isEnabled"`), :126 (`:disabled="!feature.entitled || ..."`), :68 (`flip()` returns when not entitled).
2. "The switch is off". Replaced by "shows whether the feature is on or off". Proof: FeaturesView.vue:125.
3. "On since". The page now says only a switched-on feature shows the date it was last switched on, and a default-on feature that was never switched shows no date. Proof: FeaturesView.vue:60-65 (`since()` needs `enabledAt`); FeatureService.cs GetFeaturesAsync returns `row?.EnabledAt` (null with no row); ToggleFeatureAsync sets `EnabledAt` to now on every switch-on (about line 231).

## Verified claims

| Claim | Proof |
| --- | --- |
| Page label Features, in Bot group | dashboard/src/i18n/locales/en.json:886, :938; dashboard/src/layouts/dashboard/settingsNavigation.ts:49-56 |
| Page description quote | features/i18n/en.json "description" |
| Moderator and up may open and flip | route.ts meta action `feature:read`; FeaturesController `[RequireAction("feature:read")]`, `[RequireAction("feature:write")]`; ActionDefinitionSeeder `M("feature:read", Mod)`, `M("feature:write", Mod)`. Lead moderator and editor above Mod: not checked separately in this run. |
| Row: name, description, switch | FeaturesView.vue:109-129 |
| Saves at once, no save button | FeaturesView.vue:67-80; `@update:model-value="flip(feature)"` |
| Other switches off while one saves | FeaturesView.vue:126 busyKey |
| Refusal as red text under list | FeaturesView.vue:134 `text-destructive` |
| Groups Chat / Automation / More features; empty group hidden | featureAreas.ts:16-41; features/i18n/en.json areas |
| Seven features, names, groups, defaults | FeatureService.cs:51-99; featureAreas.ts:20-28 |
| Subscriber or higher for links and HTML; mod and broadcaster meet it | ChatMessageDecorator.cs:145-147 |
| Link Previews off because of a fetch per link | FeatureService.cs:80-81 |
| Viewer Templates, subscribers by default | FeatureService.cs:91-96 |
| Custom Code off: quoted refusal | CodeScriptsController.cs:270-274 |
| Script ability needs its feature on | ScriptCapabilityBroker.cs:118-128 |
| Badge: plan name or "Higher plan"; reason line | FeaturesView.vue:110-117; features/i18n/en.json "upgrade" |
| Load error, Try again, empty text | features/i18n/en.json loadFailed, empty; PanelCard @retry |
| Hosting marker present (page names plans) | page Callout |

## Writer's two code defects

1. Plan check missing in the chat decorator: CONFIRMED. ChatMessageDecorator.cs:329-342 uses only `IsEnabled` and never `Entitled`.
2. Unknown feature names accepted: CONFIRMED. ToggleFeatureAsync has no catalogue check. An unknown key creates a ChannelFeature row and publishes ChannelConfigChangedEvent.
- The page has no "this does not work" note. It does not claim either check runs. OK.
- Product lane note: the dashboard also blocks a switch-off that the server allows (FeaturesView.vue:126). The page now documents what the page does.

## Conventions

- No source citation, no action key, no numbered permission level, no license name. OK.

## Style notes

- None.
