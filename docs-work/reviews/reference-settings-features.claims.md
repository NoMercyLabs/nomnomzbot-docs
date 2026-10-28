# Claims: /reference/settings/features

Product repo root: C:\Projects\NoMercyLabs\nomnomzbot (local master). Paths are repo-relative.

| Claim | Source |
| --- | --- |
| Page label **Features** | dashboard/src/i18n/locales/en.json:886; FeaturesView.vue:84 |
| In the **Bot** group of the settings sidebar | dashboard/src/layouts/dashboard/settingsNavigation.ts:49-56; en.json:938 |
| Page description text | dashboard/src/views/dashboard/settings/features/i18n/en.json:6 |
| Moderator and up may open and flip | features/route.ts:21 (feature:read); FeaturesView.vue:124 (feature:write); FeaturesController.cs:39,52; ActionDefinitionSeeder.cs:440-441 (M(key, Mod), floor = default, doc :29-37) |
| Row shows name, description, switch | FeaturesView.vue:109,114,123-129 |
| Switch saves at once | FeaturesView.vue:67-80 (toggle.mutateAsync on change) |
| "On since {date}" only when switched (enabledAt set); default-on never switched shows no date | features/i18n/en.json:16; FeaturesView.vue:60-65,121; FeatureService.cs:156-157 (EnabledAt = row?.EnabledAt) |
| Other switches off while one saves | FeaturesView.vue:126 (busyKey) |
| Refusal shown as red text under the list | FeaturesView.vue:75-76,134 |
| Groups Chat / Automation / More features; empty group hidden | featureAreas.ts:16-28,35-41; features/i18n/en.json:10-12 |
| Feature names, descriptions, defaults | server/src/NomNomzBot.Infrastructure/Platform/FeatureService.cs:51-99 |
| Emote defaults honored in chat | ChatMessageDecorator.cs:42-49,339-342 |
| Link preview / HTML need subscriber or higher; mod/broadcaster meet it | FeatureService.cs:80,87; ChatMessageDecorator.cs:145-158 |
| Viewer Templates permission, subscribers by default | FeatureService.cs:94-96; ViewerTemplateCapabilities.cs:24 |
| Custom Code off refuses script requests with that text | CodeScriptsController.cs:267-276 |
| Script ability needs its feature on | ScriptCapabilityBroker.cs:118-128 |
| Not-entitled badge: tier name or **Higher plan**; reason line | FeaturesView.vue:110-117; features/i18n/en.json:14 |
| Not-entitled switch shows real state and cannot be changed on the page, on or off | FeaturesView.vue:68 (flip returns early), :125 (model-value = isEnabled), :126 (disabled when !entitled) |
| Load error text and **Try again** | features/i18n/en.json:7; PanelCard.vue:191-193; locales/en.json:81 |
| Empty text | features/i18n/en.json:8; FeatureService.cs:124-125 |
| Hosting marker | docs-work/page-conventions.md:135 (page mentions plans) |
