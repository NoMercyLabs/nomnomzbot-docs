# Fact-check: /reference/community/chat-page
Verdict: PASS
Reviewed: C:\Projects\NoMercyLabs\nomnomzbot-docs\src\content\reference\en\community\chat-page.mdx
Reviewed-SHA: 8b8ee1dfd0eee3fd

Paths: D = dashboard/src/views/dashboard/chat; C = server/src/NomNomzBot.Api/Controllers/V1; Seeder = server/src/NomNomzBot.Infrastructure/Content/Identity/ActionDefinitionSeeder.cs. All read in this run.

## Changes in this version, checked

- Star row: right-click stars, a second right-click takes the star off, and an emoji with tones opens the tone menu, which has its own star. True: D/components/EmotePicker.vue:161-171 (`favorite: !isFavorite(item)`), 322-335 (`secondary`), 488-521 (`data-tone-star`, `starToned`). The earlier finding is fixed.
- Tone for one emoji: a right-click opens the tone menu and forgets the saved tone. True: EmotePicker.vue:331-334.

## Rest of the page, checked

- Emote picker: opens above the box (EmotePicker.vue:368). A pick goes in at the cursor and the picker stays open; the pick handler does not close it (D/components/ChatComposer.vue:186-192, 383-384). Section order (D/emotePicker.ts:25-27, 68-85). Labels "You", "Search emotes and emoji", "Jump to a section" (en.json:227-228, 246). **Skin tone for all emoji** beside the search (EmotePicker.vue:544-556; en.json:234). Recent 24 (emotePicker.ts:45). Recent picks, folded sections and tones in local storage (EmotePicker.vue:59, 194, 289, 292). Favorites on the account (EmotePicker.vue:161-171; C/FavoriteEmotesController.cs:24-30).
- Display defaults all match D/chatDisplay.ts:44-59. "Kept on this device" and "Font and readability" (en.json:52-53).
- Side panels: two from 1800 px, else one, oldest closes (dashboard/src/composables/useLayout.ts:32; D/ChatView.vue:295-337).
- Followers-only keeps its number (C/ChatController.cs:163; D/components/ModToolsPanel.vue:115-123). Slow mode 3 to 120 with fill-in 30, delay 2/4/6 with fill-in 2, followers 0 to 129600 (ModToolsPanel.vue:62-74, 104-123; en.json:315-317).
- Timeout lengths: line 1 min to 1 day (dashboard/src/lib/time.ts:73), Viewer panel 1 min, 10 min, 1 hour (D/components/ViewerPanel.vue:41).
- Moderator lines (dashboard/src/components/layout/profile/profileRoles.ts:101-113; ChatLine.vue:137-167). The Twitch-only chat opens from the viewer pages (dashboard/src/layouts/dashboard/ViewerChannelGroups.vue:55-63).
- Who may open and all permissions, default Moderator (Seeder:242-276, 403, 661-662; C/ChatController.cs:380, 488, 543, 561, 573; C/ChatIdentityController.cs:55, 70; server/src/NomNomzBot.Domain/Identity/Enums/PermissionLevel.cs:20-30).
- Every bold label and quoted string on the page was found verbatim in D/i18n/en.json.
- Conventions: no action key, no numbered level, no source citation, no license name, no hosting text, American English.
