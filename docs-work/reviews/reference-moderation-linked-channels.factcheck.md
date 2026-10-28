# Fact-check: /reference/moderation/linked-channels
Verdict: PASS
Reviewed: src/content/reference/en/moderation/linked-channels.mdx
Reviewed-SHA: a34125137427bb7f

Product repo: nomnomzbot master, read only. Paths are relative to it.

| Claim | Page line | Product file and line | Verdict |
| --- | --- | --- | --- |
| Page label **Federation** | 6 | dashboard/src/i18n/locales/en.json:890 | true |
| In the **Connections** group | 7 | dashboard/src/layouts/dashboard/settingsNavigation.ts:60-65; en.json:939 | true |
| Card titles: Sharing with other bots, Choices for one bot, Network blocks, Moderator mass bans | 12-15 | settings/federation/i18n/en.json title, peers.title, networkBlock.title, massBan.title | true |
| Choices for one bot shows only when such a choice exists | 13 | FederationView.vue (peer list gate, per claims file :57,:144); not re-read line by line | true |
| Everything off until turned on | 17 | federation i18n description "Everything is off until you turn it on"; networkBlock hint "Off by default" | true |
| Lead moderator opens the page and changes Accept/Share | 25 | ActionDefinitionSeeder.cs:481-482 (federation:optin:read/write, LeadModerator); route.ts:21; FederationChoiceRow.vue:64,70 | true |
| Editor: all of the above | 26 | AuthorizationLadder.cs: Editor=30 > LeadModerator=20 | true |
| Broadcaster only changes Network blocks and Mass ban switches | 27, 113 | ActionDefinitionSeeder.cs:282 (moderation:massban:optout, Broadcaster), :284 (moderation:networkblock:optin, Broadcaster); MassBanOptInCard.vue:28; NetworkBlockOptInCard.vue:29 | true |
| Moderator cannot open the page | 29 | Moderator=10 < LeadModerator=20 floor of federation:optin:read | true |
| Trusted servers set by an admin, not here | 31-32 | FederationController.cs (IamManage policy, per claims file); no trust UI under settings/federation (dir listing) | true |
| Each row has Accept and Share | 37 | federation i18n choice.accept/share; FederationChoiceRow.vue:64,70 | true |
| Saved at once, for every trusted server | 42 | FederationView.vue sends peerId null; FederationOptInService.cs:128 (per claims file) | true |
| Shared chat bans Accept bans here | 47 | SharedChatBanInboundHandler.cs; FederationInboundGateway.cs:114-118 (per claims file) | true |
| Share is saved but no server code reads it | 47 | grep FederationDirection.Share in server/src (no bin/obj): no reader; only const FederationEnums.cs:36 | true |
| Ban list, trust list, savings: no server code reads them | 48-50 | grep SharedBanList / SharedTrustList / SharedSavings: only FederationEnums.cs:27-29 | true |
| Labels of the four rows | 47-50 | federation i18n type.*.title | true |
| Ban placed with own Twitch connection, recorded as from another server, refusal goes to the action inbox | 52-54 | ISharedBanService.cs:73-84 (per claims file) | true |
| Untrusted server never reaches the channel | 56 | FederationOptInService.cs:112-119,143-150 (per claims file) | true |
| **Turn this choice off** (trash) removes the row | 65-66 | federation i18n peers.disable; FederationPeerRow.vue:365-375 (per claims file) | true |
| Network block labels **Ban blocked actors here** / **Ban here**, default Off, effect | 74 | federation i18n networkBlock.label/switch/hint | true |
| Mass ban labels **Accept moderator mass bans** / **Accept**, default Off, effect | 84 | federation i18n massBan.label/switch/hint; Channel.AcceptsModeratorMassBans read at MassBanChannelPlanner.cs:93,138 | true |
| Live channel: the mass ban waits for an approval | 86-87 | MassBanChannelPlanner.cs:170 (holdsWhileLive: !isAttacked on the owner-opt-in path), :220-224 (AwaitingApproval when the bot serves the channel) | true |
| Attacked channel and moderator's own list also reach; excluded never | 92-95 | MassBanChannelPlanner.cs:242-255 OptInFor (Attacked, Moderator); :216-217 Excluded wins first | true |
| Load error text and **Try again** | 103-105 | federation i18n loadFailed; en.json:81 retry "Try again" | true |
| Link targets bans-and-blocked-terms, trust-and-escalation | 119-120 | both are rows of docs-work/map.md | true |

## Conventions

- No people's names, action keys, numbered levels, license name or "open source": none found.
- No hosting, price or paid plan mentioned, so no marker is needed.
- American English: no British spelling found.
- NomNomzBot spelling only; no NoMercyBot.
- No bot speech described; no example scripts.

## Notes

- Line 86 holds for a channel the bot serves (AwaitingApproval). A channel the bot does not serve is held until offline instead (MassBanChannelPlanner.cs:222-224); a channel with this page is served, so the text stands.
- Owner finding already in the claims file: the ModerationController GetMassBanOptIn comment says "On by default"; the stored default is false.
