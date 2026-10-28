# Claims: /reference/moderation/linked-channels

Product repo: nomnomzbot master, read only. Paths are relative to it.

| Claim | Page line | Proof | Verdict |
| --- | --- | --- | --- |
| The page is **Federation** in the settings sidebar | 6 | dashboard/src/i18n/locales/en.json:890; FederationView.vue:119 | true |
| It is in the **Connections** group | 7 | dashboard/src/layouts/dashboard/settingsNavigation.ts:60-65; en.json:939 | true |
| Four cards, labels and descriptions | 12-15 | settings/federation/i18n/en.json (title, peers.title, networkBlock.title, massBan.title); FederationView.vue:122-163 | true |
| **Choices for one bot** shows only when such a choice exists | 13 | FederationView.vue:57,144 | true |
| Everything is off until turned on | 17 | federation i18n description; FederationView.vue:63-68; ChannelConfiguration.cs:73-74 | true |
| Lead moderator opens the page and changes Accept/Share; Editor and Broadcaster too | 25-27 | route.ts meta action federation:optin:read; ActionDefinitionSeeder.cs:481-483 (LeadModerator); AuthorizationLadder.cs:31-34 | true |
| Only the Broadcaster changes Network blocks and Moderator mass bans | 27, 113 | ActionDefinitionSeeder.cs:282,284; ModerationController.cs SetMassBanOptIn/SetNetworkBlockOptIn RequireAction; OptInCard.vue GatedSwitch action | true |
| A Moderator cannot open the page | 29 | ActionDefinitionSeeder.cs:481 floor LeadModerator; ladder Moderator=10 < LeadModerator=20 | true |
| Trusted servers are set by an admin, not on this page | 31-32 | FederationController.cs:67-112 (IamManage policy); no peer-trust UI in settings/federation | true |
| Each row has Accept and Share switches | 37 | FederationChoiceRow.vue:311-322; i18n choice.accept/share | true |
| Saved at once for every trusted server | 42 | FederationView.vue:87-111 (peerId null); FederationOptInService.cs:128 (null = any trusted peer) | true |
| Both switches off turns it off | 43 | FederationChoiceRow.vue:281-291; FederationView.vue:90-99 | true |
| Shared chat bans Accept: an inbound ban from a trusted server bans here | 47 | SharedChatBanInboundHandler.cs:38,64; FederationInboundGateway.cs:114-118 (Accept) | true |
| Share direction stored, no server code reads it | 47 | grep FederationDirection.Share: only enum FederationEnums.cs:36; callers of IsActionPermittedAsync pass Accept only (FederationInboundGateway.cs:118, FederationInboundTranslator.cs:81) | true |
| Shared ban list, trust list, savings: stored, no server code reads them | 48-50 | FederationEnums.cs:27-29 are the only refs; SharedChatBanInboundHandler is the only IFederationInboundHandler | true |
| Ban placed with the channel's own Twitch connection; recorded as from federation | 52-53 | ISharedBanService.cs:73-84 (own tenant token, Origin=federation) | true |
| Twitch refusal reported in the action-required inbox | 54 | ISharedBanService.cs:81-82 (SharedChatBanNotAppliedEvent) | true |
| Untrusted server never reaches the channel | 56 | FederationOptInService.cs:112-119, 143-150 | true |
| Peer row shows type, Accept/Share badge and peer id | 61 | FederationPeerRow.vue:358-363 | true |
| Peer choices are made outside this page | 62 | FederationView.vue:94-109 always sends peerId null | true |
| **Turn this choice off** (trash) removes the row and stops that server | 65-66 | FederationPeerRow.vue:365-375; FederationView.vue:113-114; ChannelFederationController.cs:69-70; IsActionPermittedAsync requires an enabled row | true |
| Network block labels, default Off, effect | 74 | networkBlock i18n label/switch/hint; Channel.cs:224; ChannelConfiguration.cs:74 | true |
| A block reaches the channel when applied while on | 76 | NetworkBlockReach.cs:15-24 (apply leg reads AcceptsNetworkBlocks) | true |
| Mass ban labels, default Off, effect | 84 | massBan i18n label/switch/hint; Channel.cs:217; ChannelConfiguration.cs:73 (HasDefaultValue false). Note: ModerationController.cs GetMassBanOptIn doc comment says "On by default"; the stored default is false | true |
| Live channel: the mass ban waits for approval | 86-87 | MassBanChannelPlanner.cs:208-224 (AwaitingApproval when live and holdsWhileLive); IMassBanConsentService ApproveAsync(channelId) | true |
| Attacked channel and moderator's own list also reach; excluded never | 92-95 | MassBanChannelPlanner.cs:191-205 (Attacked, Moderator sources), 215-216 (Excluded first) | true |
| Load error text and **Try again** | 103-105 | federation i18n loadFailed; PanelCard.vue:191-193; en.json:81 common.panel.retry | true |
| Links: bans-and-blocked-terms (Assumes), trust-and-escalation (Links to) | 119-120 | docs-work/map.md:91 | true |

Finding for the owner: ModerationController.cs GetMassBanOptIn comment says mass bans are "On by default", but Channel.cs:217 and ChannelConfiguration.cs:73 default to false. The page follows the stored default.
