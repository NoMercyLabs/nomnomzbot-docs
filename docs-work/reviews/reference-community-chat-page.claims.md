# Claims: /reference/community/chat-page

Paths: D = dashboard/src/views/dashboard/chat; S = dashboard/src; Seeder = server/src/NomNomzBot.Infrastructure/Content/Identity/ActionDefinitionSeeder.cs. Labels: D/i18n/en.json (line numbers below). Lead: docs-work/slices/s02.md.

| Claim | Source |
| --- | --- |
| Chat in Live group, title Chat, Live/Offline badge | S/layouts/dashboard/navigation.ts:100-106; en.json:4-11; D/ChatView.vue:386-392 |
| Chat opens for moderator and up; broadcaster may let a VIP | Seeder:275 (`MFloor("chat:read", Mod, Vip)`); D/route.ts:22-27 |
| Viewer chat for signed-in viewer, same page in viewer mode | D/route.ts:30-38; Seeder:661-662; D/ChatView.vue:66-71 |
| Viewer mode hides search, mod toggles, identity, viewer panel; Display stays | D/ChatView.vue:396-451, 561-584 |
| No chat-settings read key also gives viewer mode | D/ChatView.vue:68-71 |
| Feed count "{count} messages" | en.json:152 |
| Placeholder "Send a message as you"; `c` shortcut | en.json:214; D/components/ChatComposer.vue:149 |
| Enter sends; text stays on failure; "The message was not sent." | ChatComposer.vue:242, 263-275; en.json:223 |
| Sends as you, not the bot | en.json:214; slice s02 trap row (bot voice) |
| 500 limit, counter from 400, tooLong text | S/api/chat.ts:57; ChatComposer.vue:52, 263, 270, 394; en.json:221-222 |
| ":" 2 letters, "@" 1 letter, 12 items, keys | D/composerSuggest.ts:36-54; ChatComposer.vue:215-261 |
| Send box only with send key | ChatComposer.vue:64-68, 331 |
| Picker opens above, stays open, sections, jump, fold | D/components/EmotePicker.vue:101-105, 193-205, 353-410; D/emotePicker.ts:25-33, 68-148; en.json:226-261 |
| Right-click toggles star on an item without tones; an emoji with tones forgets its tone and opens the tone menu, which holds the star button; tone for all; search | EmotePicker.vue:161-171, 286-303, 322-335, 488-521, 543-557; D/components/PickerToneMenu.vue:22-75 |
| Favorites via API; recent 24; folded/tones in browser | EmotePicker.vue:59, 62-63, 169-172, 194, 289, 292; emotePicker.ts:45 |
| Line tray at top right; Reply; banner; cancel/Escape | D/components/ChatLine.vue:389-410; ChatComposer.vue:248-253, 332-352; en.json:183-190 |
| Reply parent banner | ChatLine.vue:189-202, 323-330; en.json:188 |
| Mod buttons need moderation:ban / delete_message / community:read; default moderator | ChatLine.vue:158-167; Seeder:246, 248, 403 |
| Timeout lengths 1 min..1 day | S/lib/time.ts:73; en.json:120-125 |
| Delete at once, no confirm | ChatLine.vue:239-246 |
| Ban confirm text, this channel only | D/ChatView.vue:359-382; en.json:203-211 |
| Timed out / Banned marks; failure toasts | ChatLine.vue:213-228; en.json:174-175, 196, 201, 210 |
| No Timeout/Ban on self, broadcaster, moderator unless broadcaster | ChatLine.vue:135-153; S/components/layout/profile/profileRoles.ts:99-113 |
| Click a line focuses, Viewer panel opens | ChatView.vue:259-282, 351-357 |
| Viewer panel: roles, currency tile, latest 6, Profile | D/components/ViewerPanel.vue:42, 60-78, 88-91, 206-263 |
| Clear focus on, Escape | en.json:129; ChatView.vue:351-357, 493-498 |
| Viewer panel timeout 3 lengths, Undo/Unban, failed text, this channel | ViewerPanel.vue:41, 143-201, 271-328; en.json:138-147; Seeder:247 |
| Search min 2, results, further back, end, send box replaced | S/api/chat.ts:274; ChatView.vue:206-209, 230-238, 536-559; en.json:161-170 |
| Display defaults | D/chatDisplay.ts:44-59 |
| Kept in browser (nnz.chat.display); Reset | chatDisplay.ts:115-117; D/components/ChatDisplayPanel.vue:147-155, 207-210; en.json:51-52 |
| Readable name colors lift contrast | chatDisplay.ts:91-106 |
| Commands off hides commands; emptyCommands text | ChatView.vue:189; en.json:154 |
| Deleted Show marks "(deleted)" | ChatLine.vue:483; en.json:97 |
| Font and readability Change link | ChatDisplayPanel.vue:156-169 |
| HTML as text only when use_chat_html feature on | ChatDisplayPanel.vue:129-136; S/views/dashboard/settings/features/featureAreas.ts:25 |
| Panels: 1 below 1800 px, 2 from 1800, oldest closes | S/composables/useLayout.ts:32; ChatView.vue:295-337 |
| Chat modes order, hints, default moderator read/write | D/components/ModToolsPanel.vue:36-37, 211-266; en.json:271-286; Seeder:267-268 |
| Ranges 3-120, 0-129600, 2/4/6; fill-ins 30 and 2; Followers-only keeps its value (unset reads as 0, fill-in only below 0) | ModToolsPanel.vue:60-75, 100-128; server/src/NomNomzBot.Api/Controllers/V1/ChatController.cs:163; en.json:281, 314-318 |
| External Twitch chat opens from the viewer pages | dashboard link per fact-checker: ViewerChannelGroups.vue:55-63; D/route.ts:52-65 |
| Switch saves at once; number saves on change; out of range not saved | ModToolsPanel.vue:115-128, 145-170 |
| Mass ban: hostile, blocked, not banned count; disabled at 0; confirm text | ModToolsPanel.vue:39, 82-89, 184-188, 278-287; en.json:289-299; Seeder:242, 246 |
| Clear chat confirm | ModToolsPanel.vue:40, 189-193, 289-297; en.json:292-303 |
| Failure text | ModToolsPanel.vue:195-200; en.json:267 |
| Chat identity description, preview, colors, hex, hexNote, Twitch reason shown | D/components/ChatIdentityPanel.vue:63-71, 95-183; en.json:27-46 |
| Badges list, Choose on Twitch new tab | ChatIdentityPanel.vue:42-45, 186-207 |
| Grant permission again flow | ChatIdentityPanel.vue:116-142; en.json:35-39 |
| Pop out window, Copy dock link, hidden on phone/viewer mode | ChatView.vue:95-103, 437-452 |
| Slim header, dock search, More chat tools | D/components/ChatDockHeader.vue:55-155; ChatView.vue:109-113 |

## Left out (see report)

- Viewer panel "In other channels you moderate" note: a fixed note with no data (ViewerPanel.vue:264-269).
- Chat settings "Shield mode ..." note: text with no control in the panel (ModToolsPanel.vue:265).
- The any-Twitch-channel page (ExternalChatView): only a one-line pointer to /reference/community/viewer-pages.
