# Claims: /reference/settings/readability

Paths are in C:\Projects\NoMercyLabs\nomnomzbot\dashboard\src.

| Claim | Source |
| --- | --- |
| Sidebar label **Readability** | i18n/locales/en.json:881; layouts/dashboard/settingsNavigation.ts:46 |
| Group **You** | i18n/locales/en.json:937; layouts/dashboard/settingsNavigation.ts:45 |
| Card title **Text and display** | views/dashboard/settings/i18n/en.json:130; ReadabilityView.vue:147 |
| Open to every signed-in person; not a channel setting | views/dashboard/settings/route.ts:50-55; router/guard.ts:30-37 |
| Saved in this browser on this device (localStorage) | composables/useReadability.ts:17-18,126-133; ReadabilityView.vue:12-13 |
| Account menu item **Readability** | layouts/dashboard/ProfileMenu.vue:58,62,132-136; i18n/locales/en.json:978 |
| Chat Display panel: **Change** next to **Font and readability** opens the page | views/dashboard/chat/components/ChatDisplayPanel.vue:158-166; views/dashboard/chat/i18n/en.json:50,53,55 |
| Settings sidebar entry needs the setup action | layouts/dashboard/navigation.ts:283-290; group You settingsNavigation.ts:45-46 |
| Account menu shows the user's name | layouts/dashboard/ProfileMenu.vue:130 |
| Applies at once on every page; sample shows it | useReadability.ts:135-139; settings/i18n/en.json:143,132 |
| Footer text | settings/i18n/en.json:132; ReadabilityView.vue:286-288 |
| No save button | ReadabilityView.vue:142-291 (no button) |
| Preset sets all options; change after | settings/i18n/en.json:136; useReadability.ts:50-70 |
| No preset selected when options differ | ReadabilityView.vue:162-163; useReadability.ts:141-150 |
| Preset values | useReadability.ts:40-70; labels settings/i18n/en.json:137-195 |
| Font choices; Legible = Atkinson Hyperlegible | settings/i18n/en.json:150-156; styles/readability.css:15-22 |
| Text size 12-20 px step 1, default 14 px, scales all text | useReadability.ts:37-42,104-109; ReadabilityView.vue:212-214; settings/i18n/en.json:157-161 |
| Line spacing choices, default Normal | settings/i18n/en.json:162-167; useReadability.ts:43,84-88 |
| Letter and word spacing, WCAG 1.4.12 | settings/i18n/en.json:168-173; styles/readability.css:27 |
| High contrast text, default Off | settings/i18n/en.json:177-180; useReadability.ts:45; styles/readability.css:33 |
| Reduce motion text, default Off (system) | settings/i18n/en.json:185-188; ReadabilityView.vue:94-105; useReadability.ts:46 |
| Size of controls choices, 44 px Touch, default Compact | settings/i18n/en.json:189-196; useReadability.ts:47; styles/tokens.css:170-179 |
| Group titles Text, Contrast and motion, Density | settings/i18n/en.json:142,175,190; ReadabilityView.vue:174,248,268 |
| "Default: {value}." under each option | settings/i18n/en.json:133; ReadabilityView.vue:78-131 |
| Chat has its own Display options | settings/i18n/en.json:131; ReadabilityView.vue:185 |
