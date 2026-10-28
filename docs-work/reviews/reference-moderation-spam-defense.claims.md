# Claims: /reference/moderation/spam-defense

Page: src/content/reference/en/moderation/spam-defense.mdx (repair after fact-check FAIL finding 1, the seven-day observation window, 2026-10-28; reader notes applied without a fact change)
Product repo: NomNomzBot master, read only. Server paths are under server/src/.
A = dashboard/src/views/dashboard/admin/i18n/en.json. F = dashboard/src/components/spam/SpamSettingsForm.vue. D = NomNomzBot.Domain/Moderation/SpamDefense/SpamDefenseDefaults.cs. C = NomNomzBot.Domain/Moderation/SpamDefense/SpamDefenseSettings.cs (SpamSettingCatalogue.All). V = dashboard/src/views/dashboard/settings/spam-defense/SpamDefenseView.vue. L = NomNomzBot.Domain/Moderation/SpamDefense/TrustTierLadder.cs. S = NomNomzBot.Infrastructure/Moderation/SpamDefenseService.cs. K = NomNomzBot.Infrastructure/Moderation/Lockdown/LockdownService.cs. W = NomNomzBot.Infrastructure/Moderation/SpamObservationWindow.cs.

Reader search (earlier run): `grep -rn --include=*.cs -F <name> server/src`, one literal name per search, Migrations and Tests excluded.
- SemiTrustedWatchHoursHere, SemiTrustedWatchHoursInstance: read at S:783-784.
- NonLatinScriptGate: read at S:452, S:469.
- RequiredCorroborations: read at S:604.
- LockdownMinutes, LockdownAutoExtend, LockdownMaxMinutes: read at K:212-215, K:285.
- FollowSpikeFactor: read at NomNomzBot.Infrastructure/Moderation/EventHandlers/FollowSpikeHandler.cs:66.
- JoinBurstFactor, NetworkSubscribe, NetworkContribute: no reader; only the entity (SpamDefensePolicy.cs), D and C.
- EnforcementEligibleAt (this run): only writer is S:131-134.

| Claim | Page line | Proof | Verdict |
| --- | --- | --- | --- |
| Page title "Spam defense" | 6 | dashboard/src/i18n/locales/en.json:898; V:55 | true |
| Under Settings, Access group | 7, 24 | dashboard/src/layouts/dashboard/settingsNavigation.ts:77,82; locales/en.json:941, :839 | true |
| Each setting shows an explanation and what moving it costs | 8 | dashboard/src/components/spam/SpamSettingRow.vue:34-35; F:340-341 | true |
| Moderator and up may open; Broadcaster may change | 14-15 | ActionDefinitionSeeder.cs:426-427; NomNomzBot.Api/Controllers/V1/SpamDefenseController.cs:66,91; V:29 | true |
| Save shows only to who may change | 19 | V:63 | true |
| Others: inputs locked, switch shown as on/off badge | 20 | F:359,388; dashboard/src/components/layout/GatedSwitch.vue:12,45 | true |
| One card per group | 25 | F:326-333 | true |
| "Unsaved changes" and Save active after a change | 27 | V:59-60,66; spam-defense/i18n/en.json:10 | true |
| Saves every setting at once; "Spam defense saved." | 29 | V:45-46; F:288-295; spam-defense/i18n/en.json:9 | true |
| Save inactive while out of range; message under the setting | 31-32 | V:66; F:185-194,228-233,259-264; A error.outOfRange | true |
| Unsaved channel uses defaults; after save keeps own values | 36-37 | S:87-103,119-124 | true |
| Operator can change defaults; unsaved channels follow them | 39-41 | A explain; S:91-103 | true |
| Hosting marker | 43 | docs-work/page-conventions.md:133-135 | true |
| Watch only on by default; detects and records, acts on nothing | 47-48 | D:24; S:441-461 (`observing` into SpamEnforcement.Decide) | true |
| No dashboard screen for the records | 49 | SpamDefenseController.cs:127-308 have no dashboard caller | true |
| Seven-day first watch period; only watches even with watch-only off | 51-52 | W:17-20 ("turning dry run off early cannot skip it"), W:24 ObservationDays = 7, W:49-57; S:439-442 `observing = settings.DryRun \|\| await IsInObservationWindowAsync(...)` | true |
| Seven days start when the channel joins the bot | 53 | W:41-46 (channel CreatedAt + 7 when no stamp); S:128-134 (a channel that had the stack on stamps CreatedAt + 7) | true |
| If spam defense was off at the first save that turns it on, the seven days start at that save | 55 | S:128-134 (`wasEnabled` false gives null, so the stamp is now + 7) | true |
| Acts only when watch-only is off and the seven days have passed | 56, 75 | S:441-442 (observing is true while either holds); W:57 | true |
| Share is a number from 0 to 1 | 62 | C:251-256 | true |
| Spam defense enabled On; off = no detection, no records | 70, 73 | D:21; A isEnabled.explanation; FollowSpikeHandler.cs:55 | true |
| Watch-only on: records and does not act | 74 | S:441-442, S:441-461 | true |
| Trust thresholds 90/300/30/180, min 0 | 81-84 | D:29-32; F:224-226,387 | true |
| Watch hours here 10 (1-200), across 25 (1-500) | 85-86 | D:27-28; C:246-247 | true |
| Established = all four reached; moderator or VIP always; days from first message here | 88-90 | L:225-236 | true |
| Four values under "Trust ladder thresholds" | 93 | F:367-392; A trustThresholds.label | true |
| The bot counts the hours each viewer watches | 95 | NomNomzBot.Infrastructure/Analytics/WatchSessionProjection.cs:208 (TotalWatchSeconds += delta) | true |
| Reaching either value earns protection; here = this channel, across = every channel on the server | 96-99 | S:755-785; NomNomzBot.Domain/Moderation/SpamDefense/AccountRisk.cs:155-156, 227-236; L:162-163 (SemiTrusted) | true |
| Protected viewer never banned or timed out automatically; message may be removed and flagged; a moderator decides the rest | 101-103 | L:244-249 (IsShieldedFromAutomatedAccountAction, tier >= SemiTrusted; "may delete and flag"); A semiTrustedWatchHoursHere.explanation (A:392) | true |
| Account age 0 off (0-365), follow 0 off (0-90), keep gated On | 109-111 | D:35-37; C:248-250 | true |
| Gated message removed; on waits in moderation queue; off removed | 113-115 | A accountAgeGateDays/followAgeGateDays/accountGateHoldsForReview explanations; AccountAgeGate.cs:26-30,62,73 | true |
| Similarity 0.6 (0-1); length 8 (2-50); other alphabets Off | 121-123 | D:40-42; C:251-253 | true |
| Other alphabets = non-Latin, e.g. Japanese, Korean, Cyrillic, Arabic | 125 | A nonLatinScriptGate.explanation (A:414) | true |
| Off: anyone may write in another alphabet | 126 | NomNomzBot.Domain/Moderation/SpamDefense/CapabilityGate.cs:46-47 | true |
| On: message from a viewer not yet established looks more suspicious | 127 | S:447 (check skipped only for TrustTierLadder.IsImmune, the established tier); CapabilityGate.cs:78-90; S:447-458 | true |
| Raised to medium at most, never higher because of the alphabet | 129 | S:454 RaiseConfidence; CapabilityGate.cs:93-96; S:444-446 comment | true |
| Established viewer never affected | 130 | S:447; L:240 | true |
| Campaign, stranger, exonerated definitions | 134-136 | A qualify/dequalifyNoStandingShare explanations | true |
| Campaign defaults and ranges | 140-146 | D:45-51; C:254-260 | true |
| Pairs must stay in order; page names it; Save inactive | 150-153 | F:196-222,228-233,247-254; V:66 | true |
| Follow 5 (1.5-50), join 4 (1.5-50); times normal rate | 159-162 | D:54-55; C:261-268; FollowSpikeHandler.cs:66 | true |
| Tighten = stricter rules such as slow mode and followers-only, put back | 166 | A lockdownMinutes.explanation (A:482); K:110-120 | true |
| Dashboard marks the three lockdown settings Not yet active | 167 | C:269-287 (PendingSlices.LockdownWire); F:342; A inactiveBadge (A:361) | true |
| Nothing tightens automatically; no dashboard button | 168 | only caller of ILockdownService.EngageAsync is SpamDefenseController.cs:297; no dashboard caller of spam-defense/lockdown | true |
| Settings read only for a lockdown started by hand, outside the dashboard | 170 | SpamDefenseController.cs:279-297 (POST {channelId}/spam-defense/lockdown, "manual:" trigger); K:212-215, 285 | true |
| Room stays tightened for How long the room stays tightened | 171 | K:285 | true |
| Second request while tightened extends when auto-extend on | 173-174 | K:126-128; K:212-219 | true |
| Never past the longest value, counted from the start | 175 | K:214-216 (ceiling = StartedAt + LockdownMaxMinutes) | true |
| Longest at least how long | 183 | S:945; F:206-209 | true |
| Shared list holds patterns and links from other servers | 187 | A networkSubscribe.explanation (A:500) | true |
| Subscribe and share marked Not yet active; stored, not read | 188-189 | C:288-297 (PendingSlices.Network); reader search above | true |
| Subscribe On, share Off, reports 3 (1-20) | 193-195 | D:63-65; C:288-298 | true |
| Share sends only confirmed patterns, never text or names | 197 | A networkContribute.explanation | true |
| Reports needed read each check; held-back pattern used only with that many reports | 199-200 | S:595-606; S:436 caller per message; NomNomzBot.Domain/Moderation/Entities/SpamSignature.cs:62-72 | true |
| Today no pattern is held back; own-server patterns never held back | 202-203 | SpamCorrelationService.cs:262-270; TrustSafetyReviewService.cs:195; SpamSignature.cs:69; no writer of `IsQuarantined = true` or `SignatureSource.Network` | true |
| Six settings carry Not yet active | 209-214 | C:262-297; F:342 | true |
| Join rate, subscribe, share stored and not read | 216 | reader search above | true |
| Lockdown settings read only for a manual lockdown | 217 | SpamDefenseController.cs:279-297 | true |
| Guarantees card; established viewer never acted on automatically | 221-222 | F:397-403; A invariants.sd8; L:240 IsImmune | true |

Left out by the map row: detections, campaigns, follow-bot blocks, lockdown endpoints (SpamDefenseController.cs:127-308 have no dashboard caller).
Product defects noted for the manager (no issue filed; the brief allows only two writes): A dryRun.cost says turning watch-only off starts acting, which skips the seven-day window (W:17-20); the lockdown `.inactive` copy in A (A:484,490,496) is true for raids only; A followSpikeFactor.inactive is stale, FollowSpikeHandler.cs:66 uses the value.
