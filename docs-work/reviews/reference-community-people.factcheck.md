# Fact-check: /reference/community/people
Verdict: PASS
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
