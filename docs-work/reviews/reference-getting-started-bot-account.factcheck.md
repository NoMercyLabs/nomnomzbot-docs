# Fact-check: /reference/getting-started/bot-account
Verdict: PASS
Reviewed: src/content/reference/en/getting-started/bot-account.mdx
Reviewed-SHA: ad0b7c1fe40fad4f

Paths are relative to C:\Projects\NoMercyLabs\nomnomzbot.

## Verified claims

| Page line | Claim | Proof |
| --- | --- | --- |
| 14-18 | Order: own bot, then shared bot only when connected, then own account | server/src/NomNomzBot.Infrastructure/Identity/ChannelTwitchBotResolver.cs:31-53 (ConnectionId != null at :48) |
| 24 | Badges "Connected" / "Shared bot" | dashboard/src/views/dashboard/settings/white-label-bot/i18n/en.json:9-10 |
| 16, 37 | "White-label bot", "Bot basics" | dashboard/src/i18n/locales/en.json:882, 885 |
| 38 | "Bot line marker" label | dashboard/src/views/dashboard/settings/i18n/en.json:89-90 |
| 38-39, 44 | 1-4 characters, no whitespace, empty means none | server/src/NomNomzBot.Infrastructure/Identity/ChannelService.cs:562-571 |
| 40-41 | "Save", "Basics saved." | dashboard/src/views/dashboard/settings/i18n/en.json:80, 82 |
| 43, 45 | Marker only when no dedicated bot (own or shared) | server/src/NomNomzBot.Infrastructure/Chat/ChatPlatformRouter.cs:523-553 |
| 46 | Lines sent as the broadcaster never get the marker | ChatPlatformRouter.cs:247-251 |
| 53-54 | Notice title and message text | dashboard/src/i18n/locales/en.json:1142-1143 |

Other rows (moderator notice clearing, shared-bot re-grant, scope gap) rest on the writer's claims file citations; not re-read in this run beyond the claims list.

## Lead: plan gate on own bot account (NOT_ENTITLED)

server/src/NomNomzBot.Infrastructure/.../AuthService.cs (RequireCustomBotEntitlementAsync, near 842-861) refuses a channel's own bot when the plan has no `AllowsCustomBotName`; the doc comment says self-host always allows it (not checked beyond the comment).
The page never claims that every channel can connect its own bot. Row 1 is conditional ("You connected one"), and line 8 "A bot account is never required" stays true: rows 2 and 3 need no plan. So no fact is wrong.

## Notes (style, not failures)

- Line 38: the code counts UTF-16 units (`prefix.Length > 4`), so one emoji can use two of the four. Consider "up to four characters; an emoji can count as two".
- Optional: a hosted-install reader may hit the plan refusal on the White-label bot page. Mentioning it would need the page-conventions hosting marker sentence; leaving it out is not a fact error.
- No NoMercyBot name, no source citation, no numbered permission level, American spelling throughout.
