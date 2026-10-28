# Claims: /reference/moderation/automod-and-chat-filters

Product repository: NomNomzBot, master, read only. AM = dashboard/src/views/dashboard/settings/automod; CF = dashboard/src/views/dashboard/settings/chat-filters; ADS = server/src/NomNomzBot.Infrastructure/Content/Identity/ActionDefinitionSeeder.cs.

| Claim | Page line | Proof | Verdict |
| --- | --- | --- | --- |
| Page names **AutoMod filters** and **Chat filters** | 6-7 | dashboard/src/i18n/locales/en.json:900-901; AM/AutomodView.vue:94; CF/ChatFiltersView.vue:86 | true |
| Both pages sit under **Moderation** | 8 | AM/i18n/en.json:5; CF/i18n/en.json:5 (crumb) | true |
| Moderator may open both pages | 19 | AM/route.ts:16 and CF/route.ts:16 (read actions); ADS:253,255 (Mod) | true |
| Lead moderator may change the four filters and the chat filters | 20 | AM/AutomodView.vue:51; CF/ChatFiltersView.vue:39; ADS:254,256 (LeadModerator) | true |
| Broadcaster changes Twitch levels; Twitch panel readable by Moderator | 21 | AM/TwitchAutomodPanel.vue:32; AM/AutomodView.vue:220; ADS:418-419 | true |
| Read-only view; On/Off badge for non-writers | 23-24 | AM/AutomodView.vue:119 (ReadOnlyScope); CF/ChatFiltersView.vue:129-135; locales/en.json:36-37 | true |
| Explain sentence of AutoMod page | 28 | AM/i18n/en.json:6 | true |
| Four panels, switches, fields and descriptions | 31,37-42 | AM/AutomodView.vue:121-217; AM/i18n/en.json:38-62 | true |
| Save active only when changed and valid; toast "AutoMod saved." | 33-35,196 | AM/AutomodView.vue:85,101 | true |
| One entry per line; blanks and doubles drop out | 44-45 | AM/i18n/en.json:11; AM/automodDraft.ts:20-25 | true |
| Ranges 1-100 and 1-50, out-of-range message | 47-49 | AM/automodDraft.ts:15-16,56-65; AM/i18n/en.json:12 | true |
| Twitch AutoMod panel text, save label, saved toast | 53-59 | AM/i18n/en.json:14-18; AM/TwitchAutomodPanel.vue:132-139 | true |
| Five level labels, eight categories | 61-69 | AM/i18n/en.json:20-36 | true |
| Page Save does not save Twitch levels | 71-72 | AM/AutomodView.vue:81-88 (toConfig only); AM/TwitchAutomodPanel.vue:13,88-96 | true |
| Chat filter explain | 76-77 | CF/i18n/en.json:6 | true |
| New filter opens editor in place of list; title | 79-80 | CF/ChatFiltersView.vue:86-99; CF/i18n/en.json:19 | true |
| Fields Name, What it checks, When a message matches, Never filter, Save filter, saved toast, editor closes | 81-86 | CF/ChatFilterEditor.vue:65-76,130-205; CF/i18n/en.json:13,15,47,54,57 | true |
| Type to field mapping; bare-domain help | 88-94 | CF/ChatFilterEditor.vue:146-171; CF/i18n/en.json:26-29,49-53 | true |
| Defaults: Blocked terms, Delete, 600 s, Moderator, bare on, case off, enabled on | 96-104 | CF/chatFilterDraft.ts:29,42-53 | true |
| Empty list text | 106 | CF/i18n/en.json:8; CF/ChatFiltersView.vue:105 | true |
| Editor refusals and their messages | 110-118 | CF/chatFilterDraft.ts:84-104; CF/ChatFilterEditor.vue:66-68; CF/i18n/en.json:61-65 | true |
| Invalid regex refused on save, error toast | 120-121 | server/src/NomNomzBot.Application/Moderation/Services/IChatFilterService.cs:36; CF/ChatFilterEditor.vue:74; CF/i18n/en.json:16 | true |
| Action labels | 127-133 | CF/i18n/en.json:30-36; ChatFiltersController.cs:17-18 | true |
| Timeout field only with timeout action | 135 | CF/ChatFilterEditor.vue:183 | true |
| Never filter: role and above exempt; seven choices, Everyone excluded | 137-149 | CF/chatFilterDraft.ts:23-26; CF/i18n/en.json:37-45 | true |
| Try it panel: nothing saved, labels, verdicts, compile error | 153-161 | CF/ChatFilterEditor.vue:84-117,221-244; CF/i18n/en.json:67-75; ChatFiltersController.cs:142-150 | true |
| Edit opens editor with name in title; Cancel closes | 165-171 | CF/ChatFiltersView.vue:124; CF/ChatFilterEditor.vue:122-125,250-252; CF/i18n/en.json:20 | true |
| Row detail: type · action · N matches | 173 | CF/ChatFiltersView.vue:50-56; CF/i18n/en.json:21 | true |
| Row switch saves at once; off filter does not check chat | 177-179 | CF/ChatFiltersView.vue:58-63,118-123; IChatFilterService.cs:16-17 (each enabled filter) | true |
| Remove dialog, action, consequence | 183-189 | CF/ChatFiltersView.vue:140-147; CF/i18n/en.json:22-24 | true |
| Moderators skipped by default | 212 | CF/chatFilterDraft.ts:41-43; ChatFilterDtos.cs:46 | true |

No SDK claims on this page.
