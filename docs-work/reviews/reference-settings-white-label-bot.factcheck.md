# Fact-check: /reference/settings/white-label-bot
Verdict: PASS
Reviewed: C:\Projects\NoMercyLabs\nomnomzbot-docs\src\content\reference\en\settings\white-label-bot.mdx
Reviewed-SHA: 671a0a2dc3a3d70f

Paths are relative to C:\Projects\NoMercyLabs\nomnomzbot. W = dashboard/src/views/dashboard/settings/white-label-bot.
The whole current text was checked again. The three findings of the previous review (SHA 13a4afecb3c32ffa) are fixed.

## Fixed findings

1. Lines 42-43: the connected text is now a pop-up message, and the badge change is a separate sentence. Source: toast at W/WhiteLabelBotView.vue:75-78. The cached status is replaced on an authorized poll at dashboard/src/api/whiteLabelBot.ts:53,77.
2. Lines 48-49: Cancel shows next to the code and under a failed sign-in. Source: W/components/BotLoginPanel.vue:136-138,164-166. No Cancel shows while the sign-in starts (:113-115). The page no longer says "at any time".
3. Line 74: the disconnect text is now a pop-up message. Source: toast at W/WhiteLabelBotView.vue:84.

## Verified claims

- Sidebar: Settings, the Bot group, the White-label bot entry. Sources: dashboard/src/layouts/dashboard/settingsNavigation.ts:48-55; dashboard/src/i18n/locales/en.json:885,938.
- The broadcaster may open the page. Sources: W/route.ts:21; server/src/NomNomzBot.Infrastructure/Content/Identity/ActionDefinitionSeeder.cs:237. Other roles can get this right, because grant is true by default (:150-151). The **Permissions** label is at en.json:894.
- Only the broadcaster connects, changes or disconnects. Sources: ActionDefinitionSeeder.cs:236,238 (grant: false); W/WhiteLabelBotView.vue:52,128-151.
- Other roles see the status and no buttons. Source: W/WhiteLabelBotView.vue:105-158.
- Card title, badges, connected identity and shared texts. Sources: W/i18n/en.json:5,8-10,16-17; W/WhiteLabelBotView.vue:55-58,107-125.
- The load error comes with a retry. Sources: en.json:7; W/WhiteLabelBotView.vue:101-103.
- The bot account hint and the private window hint. Sources: en.json:45,47; BotLoginPanel.vue:117,125.
- Starting text, code, "Open {site}" in a new tab, waiting text. Sources: en.json:23,44,48,49; BotLoginPanel.vue:113-142.
- Viewers see the bot's name and picture. Source: en.json:6.
- The browser fallback text and button open a new tab. Sources: en.json:31-32; BotLoginPanel.vue:93-97,143-155.
- The replace flow. Sources: en.json:26-28; W/WhiteLabelBotView.vue:132-140.
- The disconnect flow, the dialog "Disconnect {name}?" and its consequences. Sources: en.json:35-41; W/WhiteLabelBotView.vue:150-172.
- The expired, denied and other error texts, and Try again. Sources: en.json:51-54; BotLoginPanel.vue:30,49-52,158-163.
- Both link targets are on the map. Source: docs-work/map.md:62,121.

## Conventions

- The page has no source citation, no action key, no numbered permission level and no license name.
- The page does not mention hosting, a plan or a price, so it needs no hosting marker.

## Style notes (not a FAIL)

- Line 40 places the waiting text after you type the code. The text shows as soon as the code shows (BotLoginPanel.vue:140-142).
- Line 46 "one bot voice" is a ledger concept. It is not a label on this page.
