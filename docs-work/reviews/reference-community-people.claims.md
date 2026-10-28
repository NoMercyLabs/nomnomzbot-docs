# Claims: /reference/community/people

Paths are in the product repo C:\Projects\NoMercyLabs\nomnomzbot. D = dashboard/src, P = D/views/dashboard/people, L = D/components/layout/profile.

| Claim | Source |
| --- | --- |
| Sidebar entry **People** opens the page, gated by community:read | D/layouts/dashboard/navigation.ts:86-95; P/route.ts:19 |
| community:read defaults to Moderator (level 10), no lower floor | server/src/NomNomzBot.Infrastructure/Content/Identity/ActionDefinitionSeeder.cs:51,152-153,403 |
| Tabs All, Moderators, VIPs, Twitch subscribers, Regulars, New and their hints | P/i18n/en.json:15-30; P/PeopleView.vue:173-200 |
| Regulars = at least 50 messages and first seen 30 days ago or more | server/src/NomNomzBot.Api/Controllers/V1/CommunityController.cs:56-57,814-828 |
| New = first seen within 90 days, from loaded rows; no count | P/PeopleView.vue:151,199,253-266,357-363 |
| Sort Last seen / A to Z, remembered (local storage) | P/PeopleView.vue:166; P/i18n/en.json:10-14 |
| Next page loads at list end | P/PeopleView.vue:244-250,572 |
| Count line + hint under People | P/PeopleView.vue:364-373,533 |
| Row: avatar, name, Last seen / Not seen yet; gift, Banned, shield Moderator, gem VIP | P/components/PersonRow.vue:23-28,43-75; P/i18n/en.json:41-49 |
| Search box Search people; searches all known users; Not in this channel; Enter opens first | P/PeopleView.vue:100-101,184,454-460,548-553; P/components/SearchResultRow.vue:32-36 |
| Nobody matches text | P/i18n/en.json:8; P/PeopleView.vue:349-350 |
| Look up on Twitch while typing; not found / error texts | P/PeopleView.vue:462-481,582-592; P/i18n/en.json:31-35 |
| Profile beside list; phone Back to the list; close button; Escape; address holds person | P/PeopleView.vue:376-379,426-434,483-519,598-619 |
| Dialog elsewhere has Open full page to People | D/components/layout/ProfileDialog.vue:45-60,85-93; D/i18n/locales/en.json:414 |
| Profile tabs; Points and Data only with stored profile | L/profileTabs.ts:17-21; L/ProfileView.vue:176-179,334-455; locales en.json profile.tabs |
| Moderation tab: notes, history, Actions taken, Ban history, empty text, by/lifted | L/ProfileView.vue:371-408; locales en.json profile.moderation |
| Settings tab: bot standing, trust, voice | L/ProfileView.vue:426-454 |
| Action row hidden for channel owner; buttons by role | L/ProfileView.vue:149-164,462-545 |
| shoutout/warn/ban/unban Mod; VIP and moderator change Broadcaster | ActionDefinitionSeeder.cs:246-249,277-280 |
| Warn asks a reason; must accept before chatting | L/ProfileWarn.vue:12-13 |
| Timeout lengths 60, 600, 3600, 86400 s | D/lib/time.ts:73; L/ProfileView.vue:529-538 |
| Warn/Timeout/Ban not on self or channel; moderator target only for broadcaster | L/profileRoles.ts:101-113; L/ProfileView.vue:132-139 |
| VIP disabled, VIP status unknown | L/ProfileView.vue:167-175,480 |
| Toast confirmations | L/ProfileView.vue:253-300 |
| Ban confirm dialog texts | L/ProfileView.vue:549-556; locales en.json profile.ban |
| Detail not found text; subscribers empty text | P/i18n/en.json:50,56; P/PeopleView.vue:343-344,393-399,627-631 |
