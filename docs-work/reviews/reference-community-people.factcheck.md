# Targeted final review — 2026-11-06

Verdict: PENDING
Reviewed: src/content/reference/en/community/people.mdx
Reviewed-SHA: d0c3f202da3599668ba4f6851c40c9c7bd35ed534172483455df7d3e287ae0cf
Reviewed-SHA256: d0c3f202da3599668ba4f6851c40c9c7bd35ed534172483455df7d3e287ae0cf
Reviewer: final-features correction author; self-review, not independent PASS
Product-Revision: 2dfefbb0c393f439954d79b32ac11511678d7f44 plus working tree

The full article was read editorially. The correction was independently traced from the staged lead to current source, then applied by this reviewer. This is targeted author verification, not a new exhaustive source audit, independent final-text approval or runtime test. See [final-features.md](../ecosystem-validation/final-features.md) for exact source anchors, coverage and remaining limits.

## Historical reviews

The original records below are preserved verbatim and apply only to their recorded hashes.

# Independent source verification: /reference/community/people
Verdict: PASS
Reviewed: src/content/reference/en/community/people.mdx
Reviewed-SHA: 7229f1cb33a8a00c0b118176500f2cd898d55ef7aeb211ca13874ae47f10f245

## Independent overhaul review, 2026-11-05

PeopleView.vue:66-231; ProfileNotes.vue:45-119; ProfileStandingEdit.vue:30-125; ProfileSuspicious.vue:35-110; profile voice/data/points components: loaded-only New list, search/order, note/treatment/monitoring, session-only readback and channel voice.

Reviewed independently of the article author, in actual navigation order. Current product source 54da8b631 and relevant changes since b12f4f696 were read without starting the bot, executing platform actions or changing channel data. This verdict is source verification, not proof of live platform delivery. See [review-moderation-economy-community.md](../overhaul/review-moderation-economy-community.md) for the review scope and findings.

## Prior review history

The earlier text below is retained as history; it does not independently approve a later article hash.

Author source audit: 2026-11-04. Independent review of the revised article is pending; the historical PASS below does not approve this text.
Product source: C:/Projects/NoMercyLabs/nomnomzbot at b12f4f696, inspected without starting the bot or changing data.

Expands previously skeletal profile coverage into usable notes, standing, monitoring, data/permits and voice workflows.

| Revised claim or retained core behavior | Current source opened |
| --- | --- |
| Roster tabs, search, paged loading and local New filter | dashboard/src/views/dashboard/people/PeopleView.vue:66-231; server/src/NomNomzBot.Api/Controllers/V1/CommunityController.cs:56-57,814-839 |
| Shared profile tabs and locations | dashboard/src/components/layout/profile/ProfileView.vue:355-455 |
| Notes add/edit/delete/pin and permissions | dashboard/src/components/layout/profile/ProfileNotes.vue:45-119,163-211; ProfileNoteEdit.vue |
| Bot standing editor and actual command-feature ignore | dashboard/src/components/layout/profile/ProfileStandingEdit.vue:30-125; server/src/NomNomzBot.Infrastructure/Moderation/ModerationService.cs:1563-1640; server/src/NomNomzBot.Infrastructure/Chat/EventHandlers/ChatMessageHandler.cs:159-192 |
| Suspicious status controls and session-only answer | dashboard/src/components/layout/profile/ProfileSuspicious.vue:35-110 |
| Points/data/permit revocation and personal voice editor | dashboard/src/components/layout/profile/ProfilePoints.vue:30-83; ProfileData.vue:50-233; ProfileVoice.vue:35-137; ProfileVoiceEdit.vue:30-153 |
| Exact new labels and default action roles | dashboard/src/i18n/locales/en.json:515-543,647-661,713-775; server/src/NomNomzBot.Infrastructure/Content/Identity/ActionDefinitionSeeder.cs:214,250,288,295-297 |

The practical scenarios are recommended uses of these verified controls, not promises of a new feature. Unchanged reference details were compared with the current view, labels and relevant implementation. Runtime platform calls were not performed.

## Historical evidence

The prior review is retained for its detailed claim inventory. Its verdict and file hashes refer to the earlier article; where the new evidence differs, the new evidence takes precedence.

# Fact-check: /reference/community/people
Historical verdict: PASS
Reviewed: C:\Projects\NoMercyLabs\nomnomzbot-docs\src\content\reference\en\community\people.mdx
Reviewed-SHA: 3e482b5e7946bd9c

Paths are in C:\Projects\NoMercyLabs\nomnomzbot. D = dashboard/src.

## Checked claims

| Page claim | Evidence | Verdict |
| --- | --- | --- |
| People is a sidebar entry; Moderator, Lead moderator, Editor, Broadcaster may open it | D/layouts/dashboard/navigation.ts:86-95 (action community:read); D/views/dashboard/people/route.ts (meta action community:read); ActionDefinitionSeeder.cs:51-54,403 (community:read at Mod, the lowest rung, so every higher role passes) | true |
| Tab labels All, Moderators, VIPs, Twitch subscribers, Regulars, New | people/i18n/en.json tabs | true |
| Hints for All, Moderators, VIPs, Twitch subscribers, New | people/i18n/en.json hints | true (New hint says "pages loaded so far"; page says "part of the list loaded so far": same meaning) |
| Regulars = at least 50 messages, first seen 30 days ago or more | CommunityController.cs:56-57 (RegularMinMessages = 50, RegularMinDays = 30), :814-828 (TotalMessages >= 50, FirstSeenAt <= now - 30 days) | true. The page states the code rule, not the en.json hint ("People who come back stream after stream."), which is correct. |
| Sort Last seen / A to Z | people/i18n/en.json sort | true |
| Search people, Nobody matches, Not in this channel, Look up on Twitch, not-found and error texts, Back to the list | people/i18n/en.json search, noMatch, notInChannel, lookup.*, back | true |
| Row marks: Gifted Twitch subscription, Banned, Moderator, VIP, Last seen, Not seen yet | people/i18n/en.json list.* | true |
| Open full page in the dialog | D/i18n/locales/en.json:414 | true |
| Profile tabs Overview, Chat, Emotes, Moderation, Points, Data, Settings; Points and Data only with stored profile | D/components/layout/profile/profileTabs.ts (BASE_TABS, PROFILE_TABS, SETTINGS_TABS); locales profile.tabs | true (locale also has "Activity", which no tab list uses; correctly omitted) |
| Actions taken, Ban history, "No bans stored for this person." | locales profile.moderation.counts/title/empty | true |
| Action buttons shown only per role; none on the channel's own account | ProfileView.vue (canShoutout..canUnban via access.can; row v-if `!isOwner && hasActions`) | true |
| Shout out, Warn, Ban, Unban: moderator and up | ActionDefinitionSeeder.cs:246-249,277 (Mod) | true |
| Timeout: moderator and up | Timeout menu is gated by canBan (moderation:ban, Mod) in ProfileView.vue; moderation:timeout is also Mod (seeder:245) | true |
| Timeout lengths 1 minute, 10 minutes, 1 hour, 1 day; menu "Time out for" | D/lib/time.ts:73 TIMEOUT_LENGTHS [60, 600, 3600, 86400]; locales profile.timeout.menu | true |
| Make/Remove VIP, Make/Remove moderator: the broadcaster | seeder:279-280 (Broadcaster); locales profile.vip, profile.mod | true |
| Warn asks a reason; must accept before chatting | ProfileWarn.vue:12-13; locales profile.warn.description | true |
| Unban shows in place of Ban for a banned person | ProfileView.vue (Unban v-if person.isBanned; Ban/Timeout v-if !person.isBanned) | true |
| Warn, Timeout, Ban never on own profile; on a moderator's profile only for the broadcaster | profileRoles.ts:101-113 canSanction (false on self and channel; moderator target only when me = channel login) | true |
| Make VIP grayed out with VIP status unknown | ProfileView.vue `:disabled="isVip === null"`, vipLabel unknown | true |
| Toast "is now a moderator." | locales profile.mod.made "{name} is now a moderator." | true |
| Ban dialog: "Ban" with the name; cannot chat until unbanned; Ban button with name | locales profile.ban.title "Ban {name}?", description, action "Ban {name}" | true |
| Troubleshooting texts | people/i18n/en.json detail.notFound, list.noSubscribers | true |

## Conventions

No source citation, no action key, no numbered level, no license name, no hosting text (no marker needed). Pass.

## Style notes (not blocking)

- Ban dialog description ends "on Twitch"; the page could add it: "says the person cannot chat until you unban them on Twitch."
- Not checked in depth: the per-role visibility of the Moderation and Settings profile tabs (the page makes no role claim about them).
