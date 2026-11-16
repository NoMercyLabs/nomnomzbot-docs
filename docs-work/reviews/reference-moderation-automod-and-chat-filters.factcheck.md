# Independent source verification: /reference/moderation/automod-and-chat-filters
Verdict: PASS
Reviewed: src/content/reference/en/moderation/automod-and-chat-filters.mdx
Reviewed-SHA: 9ec3c8ae6d1aed3f79e32e1f7446a7969826c6781de96c29b5e8e99d8ea2249e

## Independent overhaul review, 2026-11-05

ChatFilterExecutionHandler.cs:86-137,149-191,257-353; AutoModerationHandler.cs:145-215; ChatFilterService.cs:85-152: staff bypass, oldest enabled match, Twitch-only reviews, fallback timeout, percent-1 exception, domain allowlist and validation.

Reviewed independently of the article author, in actual navigation order. Current product source 54da8b631 and relevant changes since b12f4f696 were read without starting the bot, executing platform actions or changing channel data. This verdict is source verification, not proof of live platform delivery. See [review-moderation-economy-community.md](../overhaul/review-moderation-economy-community.md) for the review scope and findings.

## Prior review history

The earlier text below is retained as history; it does not independently approve a later article hash.

Author source audit: 2026-11-04. Independent review of the revised article is pending; the historical PASS below does not approve this text.
Product source: C:/Projects/NoMercyLabs/nomnomzbot at b12f4f696, inspected without starting the bot or changing data.

Distinguishes Twitch holding from bot deletion, adds a link-review scenario and corrects the misleading advice that raising Never filter would filter moderators.

| Revised claim or retained core behavior | Current source opened |
| --- | --- |
| UI names, actions, role choices and Try it | dashboard/src/views/dashboard/settings/automod/i18n/en.json:4-80; dashboard/src/views/dashboard/settings/chat-filters/i18n/en.json:4-108; dashboard/src/views/dashboard/settings/chat-filters/ChatFiltersView.vue |
| Always exempt broadcaster/moderators; oldest enabled match only | server/src/NomNomzBot.Infrastructure/Moderation/EventHandlers/ChatFilterExecutionHandler.cs:86-137 |
| Delete, timeout, hold and flag behavior; non-Twitch queue exclusions | server/src/NomNomzBot.Infrastructure/Moderation/EventHandlers/ChatFilterExecutionHandler.cs:149-191,257-294 |
| Escalate removes then uses ladder, with timeout fallback | server/src/NomNomzBot.Infrastructure/Moderation/EventHandlers/ChatFilterExecutionHandler.cs:303-353 |
| Caps minimum length, domain and subdomain allowlist semantics | server/src/NomNomzBot.Infrastructure/Moderation/EventHandlers/AutoModerationHandler.cs:145-215 |
| Initial switches off, 70 percent capitals and 10 emotes; threshold 1 means 100 percent | server/src/NomNomzBot.Infrastructure/Moderation/ModerationService.cs:636-671; EventHandlers/AutoModerationHandler.cs:145-177 |
| Save validation and timeout default | server/src/NomNomzBot.Infrastructure/Moderation/ChatFilterService.cs:85-152; dashboard/src/views/dashboard/settings/chat-filters/ChatFiltersView.vue |

The practical scenarios are recommended uses of these verified controls, not promises of a new feature. Unchanged reference details were compared with the current view, labels and relevant implementation. Runtime platform calls were not performed.

## Historical evidence

The prior review is retained for its detailed claim inventory. Its verdict and file hashes refer to the earlier article; where the new evidence differs, the new evidence takes precedence.

# Fact check: src/content/reference/en/moderation/automod-and-chat-filters.mdx
Historical verdict: PASS
Reviewed: src/content/reference/en/moderation/automod-and-chat-filters.mdx
Reviewed-SHA: a8bfacac5d9731b2

Product repository: NomNomzBot master, read only. AM = dashboard/src/views/dashboard/settings/automod; CF = dashboard/src/views/dashboard/settings/chat-filters; ADS = server/src/NomNomzBot.Infrastructure/Content/Identity/ActionDefinitionSeeder.cs; MS = server/src/NomNomzBot.Infrastructure/Moderation/ModerationService.cs.

| Claim | Page line | Supported by | Status |
| --- | --- | --- | --- |
| Page titles **AutoMod filters**, **Chat filters** | 6-7 | dashboard/src/i18n/locales/en.json:900-901; AM/AutomodView.vue:94; CF/ChatFiltersView.vue (PageHeader title) | true |
| Both pages in the **Moderation** group | 8 | AM/i18n/en.json:5; CF/i18n/en.json:5 | true |
| Moderator opens both pages | 19 | AM/route.ts:21; CF/route.ts:21; ADS:253,255 | true |
| Lead moderator changes the four filters and chat filters | 20 | AM/AutomodView.vue:51; CF/ChatFiltersView.vue:49; ADS:254,256 | true |
| Broadcaster changes Twitch levels | 21 | ADS:418-419; AM/TwitchAutomodPanel.vue (canManage gates select and save) | true |
| Read-only view; On/Off badge on Chat filters | 23-24 | AM/AutomodView.vue:119; CF/ChatFiltersView.vue StatusBadge v-else; locales/en.json:36-37 | true |
| Explain sentence quoted | 28 | AM/i18n/en.json:6 | true |
| Four panels, switch labels, field labels, descriptions | 31,37-42 | AM/AutomodView.vue:121-217; AM/i18n/en.json:38-62 | true |
| Save active only when changed and valid; "AutoMod saved." | 33-35,196 | AM/AutomodView.vue:72-79,85,101 | true |
| One entry per line; blanks and doubles drop out | 44-45 | AM/i18n/en.json:11; AM/automodDraft.ts:32-36,55-57 | true |
| Ranges 1-100 and 1-50; out-of-range text; Save stays off | 47-49 | AM/automodDraft.ts:26-27,67-75; AM/i18n/en.json:12; AM/AutomodView.vue:101 | true |
| Twitch panel under the four filters; description; save label; toast | 53-59 | AM/AutomodView.vue:220; AM/i18n/en.json:14-18; AM/TwitchAutomodPanel.vue:92-98,131-139 | true |
| Five level labels; eight categories | 61-69 | AM/i18n/en.json:20-36 | true |
| Page Save does not save Twitch levels | 71-72,204-205 | AM/AutomodView.vue:81-89 (toConfig only); AM/TwitchAutomodPanel.vue:92-98 | true |
| Chat filter explain | 76-77 | CF/i18n/en.json:6 | true (see Notes) |
| New filter replaces the list; "New chat filter" title | 79-80 | CF/ChatFiltersView.vue:97-107; CF/i18n/en.json:19 | true |
| Name, What it checks, When a message matches, Never filter, Save filter, toast, list returns | 81-86 | CF/ChatFilterEditor.vue:72-85 (emit close), 184-207; CF/i18n/en.json:13,15,47,48,54,57 | true |
| Type labels and fields; bare-domain help | 88-94 | CF/i18n/en.json:26-29,49-53; CF/ChatFilterEditor.vue (bareDomains row) | true |
| Defaults: Blocked terms, Delete, 600, Moderators and above, bare on, case off, on | 96-104 | CF/chatFilterDraft.ts:40,54-65 | true |
| Empty list text | 106 | CF/i18n/en.json:8; CF/ChatFiltersView.vue empty-text | true |
| Refusals on Save filter and their texts | 110-118 | CF/chatFilterDraft.ts:96-116; CF/ChatFilterEditor.vue:72-75; CF/i18n/en.json:61-66 | true |
| Invalid regex refused by the bot; error toast | 120-121 | IChatFilterService.cs:36; CF/ChatFilterEditor.vue:82-83; CF/i18n/en.json:16 | true |
| Five action labels | 127-133 | CF/i18n/en.json:30-36 | true |
| Timeout field only with Timeout action | 135 | CF/ChatFilterEditor.vue `RowGroup v-if="draft.action === 'Timeout'"` | true |
| Never filter: role and above; seven choices, Everyone excluded | 137-149 | CF/chatFilterDraft.ts:36-38; dashboard/src/api/permissions.ts:31-39; CF/i18n/en.json:37-45 | true |
| Try it panel below the editor; nothing saved; labels; verdicts; compile error | 153-161 | CF/ChatFilterEditor.vue:87-119 and Try it PanelCard; CF/i18n/en.json:67-75 | true |
| Edit opens editor with name in title; Cancel closes | 165-171 | CF/ChatFiltersView.vue Edit button; CF/i18n/en.json:11,14,20; CF/ChatFilterEditor.vue cancel emit close | true |
| Row detail "type · action · N matches" | 173 | CF/ChatFiltersView.vue:58-64; CF/i18n/en.json:21 | true |
| Row switch saves at once | 177-179 | CF/ChatFiltersView.vue:66-71 and Switch in row | true |
| Remove dialog title, action, consequence | 183-189 | CF/i18n/en.json:22-24 | true |
| Moderators skipped by default | 212 | CF/chatFilterDraft.ts:61-63; ChatFilterDtos.cs:46 | true |
| Link targets overview, trust-and-escalation, bans-and-blocked-terms are map rows | 133,219-221 | docs-work/map.md:84,86,88 | true |

Conventions: no people's names, no action keys, no numbered levels, no license name, no hosting or price mention, American English, no NoMercyBot spelling, no second bot voice. No SDK claims, no scripts, no URLs to fetch.

## Notes

- AutoMod defaults (extra check). The page names no default for the four filters, so nothing on it is wrong. A reader would benefit from them, and the code states them: with no saved rule, all four filters are off, both lists are empty, **Capital letters, percent** is 70 and **Most emotes in a message** is 10 (MS:637-640; the same fallbacks for a stored rule without the value at MS:661,669). Suggest a defaults table under the AutoMod filters table.
- Line 76 says "link rule"; the dashboard text says "link policy" (CF/i18n/en.json:6). It is not a quote and not a label, so it is not blocking, but matching the dashboard word is better.
