# Independent source verification: /reference/moderation/linked-channels
Verdict: PASS
Reviewed: src/content/reference/en/moderation/linked-channels.mdx
Reviewed-SHA: 0e17f3b5d9669e0fcab3648214fa6638eb89c897c8a4921882ea85716b98aaab

## Independent overhaul review, 2026-11-05

FederationInboundGateway.cs:52-146; SharedChatBanInboundHandler.cs:35-85; FederationOptInService.cs:124-132; MassBanChannelPlanner.cs:101-112,210-226,275. Repaired F3 correctly states that global Accept still permits a peer after its specific row is removed; own/attacked channels can act immediately while live, and other unserved live channels wait until offline.

Reviewed independently of the article author, in actual navigation order. Current product source 54da8b631 and relevant changes since b12f4f696 were read without starting the bot, executing platform actions or changing channel data. This verdict is source verification, not proof of live platform delivery. See [review-moderation-economy-community.md](../overhaul/review-moderation-economy-community.md) for the review scope and findings.

## Prior review history

The earlier text below is retained as history; it does not independently approve a later article hash.

Author source audit: 2026-11-04. Independent review of the revised article is pending; the historical PASS below does not approve this text.
Product source: C:/Projects/NoMercyLabs/nomnomzbot at b12f4f696, inspected without starting the bot or changing data.

Explains three separate sharing decisions, documents incomplete controls plainly and gives a narrow incoming-ban configuration example.

| Revised claim or retained core behavior | Current source opened |
| --- | --- |
| UI choice pairs and immediate saved direction | dashboard/src/views/dashboard/settings/federation/FederationView.vue:50-135; components/FederationChoiceRow.vue:30-94; i18n/en.json |
| Trust, signature and directed opt-in gates | server/src/NomNomzBot.Infrastructure/Federation/FederationInboundGateway.cs:52-146 |
| Only implemented federated shared-ban handler and local application | server/src/NomNomzBot.Infrastructure/Moderation/Federation/SharedChatBanInboundHandler.cs:35-85; server/src/NomNomzBot.Infrastructure/Moderation/SharedBanService.cs:250-350 |
| Mass-ban consent and channel planning | server/src/NomNomzBot.Infrastructure/Moderation/MassBan/MassBanConsentService.cs:70-145; MassBanChannelPlanner.cs |
| Default access roles | server/src/NomNomzBot.Infrastructure/Content/Identity/ActionDefinitionSeeder.cs:281-284,481-483 |

The practical scenarios are recommended uses of these verified controls, not promises of a new feature. Unchanged reference details were compared with the current view, labels and relevant implementation. Runtime platform calls were not performed.

## Historical evidence

The prior review is retained for its detailed claim inventory. Its verdict and file hashes refer to the earlier article; where the new evidence differs, the new evidence takes precedence.

# Fact-check: /reference/moderation/linked-channels
Historical verdict: PASS
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
