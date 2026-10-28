# Fact-check: /reference/getting-started/sign-in
Verdict: PASS
Reviewed: C:\Projects\NoMercyLabs\nomnomzbot-docs\src\content\reference\en\getting-started\sign-in.mdx
Reviewed-SHA: aea6ad938fcc83dc

This review checks the whole current text, including the moved role table.
Paths: L = nomnomzbot/dashboard/src/views/site/login; E = L/i18n/en.json; S = nomnomzbot/server/src.

## Claims

| Page claim | Proof | Result |
| --- | --- | --- |
| Signed-out visit to a dashboard page goes to sign-in | dashboard/src/router/guard.ts:89-99 | true |
| Card title **Welcome** | L/LoginView.vue:151; E:12 | true |
| Three Twitch role buttons, labels and order broadcaster, moderator, viewer | L/LoginView.vue:118,221-231; E:22-24 | true |
| Only broadcaster opens a channel; others identity-only | S/NomNomzBot.Api/Controllers/V1/AuthController.cs:382-386 | true |
| Bot row text "The bot this page belongs to", **Change** | L/LoginView.vue:38-45,159-163; E:15,17 | true (see note 1) |
| Button goes to Twitch and comes back to the dashboard | L/LoginView.vue:124-126; AuthController.cs:410-418 | true |
| Broadcaster scopes: read chat, type in chat, moderated channels | S/NomNomzBot.Infrastructure/Identity/TwitchLoginScopes.cs:56-61 | true |
| Viewer scopes: read chat, send as you, emotes | TwitchLoginScopes.cs:26-31 | true |
| Moderator list (10 bullets) | TwitchLoginScopes.cs:36-52 (14 scopes, read/manage pairs merged) | true |
| Re-sign-in while signed in widens, never drops | AuthController.cs:387,410-416,420-470 (union of role set and held scopes) | true |
| "Continue with {provider}" for other platforms | L/LoginView.vue:233-241; E:19 | true |
| Platform table: Twitch, YouTube code + button; Kick, Twitter / X button only | S/NomNomzBot.Infrastructure/Identity/LoginProviderRegistry.cs:35-64 | true |
| Twitch always on; others need flag and app credentials | LoginProviderRegistry.cs:84-108 | true |
| Footer "Kick is off on this bot." | L/LoginView.vue:89-98,253-255; E:31 | true |
| **Sign in with a code instead**; one provider shows code at once; chooser text and **Get a Twitch code** | L/LoginView.vue:101-110,174-185,243-250; E:20,26-27 | true |
| Code has no role; Twitch code = broadcaster scope set | L/components/DeviceCodePanel.vue:29 (provider key only); S/NomNomzBot.Infrastructure/Identity/AuthService.cs:150,706-708 | true |
| "Go to {site} and enter this code."; **Open {site}** in new tab; waiting line; auto-continue | DeviceCodePanel.vue:31-34,55-58,71,80,84,87; E:38,40,41 | true |
| Four outcome messages, **Get a new code**, **Back** | DeviceCodePanel.vue:38-53,92-100; E:42-47 | true |
| Code-only lines and their causes (other bot / not secure context) | L/LoginView.vue:46-49,112-115,213-218; E:28-29 | true |
| **Choose a bot** card, description, **Bot address**, **Check**, **Use this bot** | L/components/BotChooser.vue:89-91,126,161; E:50-51,56,58,60 | true |
| Address format and placeholder | E:59 | true |
| Four Check results; unreachable and mixed content add nothing | BotChooser.vue:65-85; E:63-66 | true |
| "Used on this browser"; icon-only cross, accessible name "Forget {host}" | BotChooser.vue:40-47,111-120; E:55,57 | true |
| Closed page title, body, **Coming soon**, note, **Back to the home page** | L/LoginGate.vue:39-55; E:6-10 | true |
| Public site build has sign-in closed | dashboard/.env.site:2; dashboard/src/lib/flags.ts:14-17 | true |
| Troubleshooting: unreachable, no providers, rate limit countdown, **Try again** off until 0 | L/LoginView.vue:51-83,197-210; E:32-35 | true |

## Conventions

- No source citation, action key, numbered level, license name or "open source" on the page.
- The hosting marker (line 173) is exact and is required, since the page names the hosted NomNomzBot.
- No NoMercyBot name. American spelling. Bot voice is not described (no bot replies on this page).

## Notes (style, not failing)

1. The bot row detail text depends on the bot: "The bot this page belongs to" for this page's own bot, "The official NomNomzBot" for the official one, "Used on this browser" for an added one (L/LoginView.vue:38-45). Step 1 is true for the normal case; a fuller line could say the text differs after a change.
2. On a code-only page, the buttons read "Continue with Twitch" (L/LoginView.vue:233-241, hasRoles false at :120-122), and choosing one shows a code. The page calls them "code buttons"; naming the real label would help.
3. A broadcaster re-sign-in widens from the channel's stored grant (AuthController.cs:420-424); "every permission you gave it before" is a fair plain summary.
