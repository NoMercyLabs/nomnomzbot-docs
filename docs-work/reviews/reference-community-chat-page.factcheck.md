# Independent source verification: /reference/community/chat-page
Verdict: PASS
Reviewed: src/content/reference/en/community/chat-page.mdx
Reviewed-SHA: ad1a2c8b98bcdd1a26af488f49dad9117e6b1b7c416c9f8747a97cee3ab3c7c9

## Independent overhaul review, 2026-11-05

Repaired F2 is accepted. ChatView.vue:68-93,168-185,535-578 and ChatComposer.vue:100-150,275-312,389-406 confirm reply versus thread targets, opening from Reply/parent preview, typing/Escape/close behavior, and send-box/search dependencies. ChatThreadService.cs:25-82 confirms stored ordinary-message thread growth and chronological order. ViewerChatController.cs:90-108,133-156 excludes held/deleted history and deleted thread rows; ChatController.cs:229-239,CanReadHeldAsync and DashboardNotifier.cs:191-196 gate held records to moderation access. ChatNativeLine.vue confirms native events/announcements/source labels/held status/moderation notices. The final history sentence correctly says viewer pages, since management-shell viewerMode can still load full chat history. ChatComposer.vue:54,323 confirms the repaired counter appears above 400 characters.

Reviewed independently of the article author, in actual navigation order. Current product source 54da8b631 and relevant changes since b12f4f696 were read without starting the bot, executing platform actions or changing channel data. This verdict is source verification, not proof of live platform delivery. See [review-moderation-economy-community.md](../overhaul/review-moderation-economy-community.md) for the review scope and findings.

## Prior review history

The earlier text below is retained as history; it does not independently approve a later article hash.

Author source audit: 2026-11-04. Independent review of the revised article is pending; the historical PASS below does not approve this text.
Product source: C:/Projects/NoMercyLabs/nomnomzbot at b12f4f696, inspected without starting the bot or changing data.

Adds workflow context and the missing six message-hint controls with real defaults. Distinguishes personal display preferences from channel-wide chat restrictions.

| Revised claim or retained core behavior | Current source opened |
| --- | --- |
| Input, own-identity send and suggestions | dashboard/src/views/dashboard/chat/components/ChatComposer.vue:75-205; ChatView.vue |
| Appearance defaults and new hint logic | dashboard/src/views/dashboard/chat/chatDisplay.ts:30-132 |
| Hint controls and exact labels | dashboard/src/views/dashboard/chat/components/ChatDisplayPanel.vue:65-143; i18n/en.json:61-118 |
| Viewer mode and moderation panel separation | dashboard/src/views/dashboard/chat/route.ts; ChatView.vue; components/ModToolsPanel.vue; components/ViewerPanel.vue |
| Profile and automatic output distinction | dashboard/src/components/layout/profile/ProfileView.vue; server/src/NomNomzBot.Infrastructure/Chat/EventHandlers/ChatMessageHandler.cs:151-192 |
| Default role and action access | server/src/NomNomzBot.Infrastructure/Content/Identity/ActionDefinitionSeeder.cs:242-278 |

The practical scenarios are recommended uses of these verified controls, not promises of a new feature. Unchanged reference details were compared with the current view, labels and relevant implementation. Runtime platform calls were not performed.

## Historical evidence

The prior review is retained for its detailed claim inventory. Its verdict and file hashes refer to the earlier article; where the new evidence differs, the new evidence takes precedence.

# Fact-check: /reference/community/chat-page
Historical verdict: PASS
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
