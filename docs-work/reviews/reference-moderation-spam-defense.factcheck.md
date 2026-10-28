# Fact-check: /reference/moderation/spam-defense
Verdict: PASS
Reviewed: src/content/reference/en/moderation/spam-defense.mdx
Reviewed-SHA: 6f82127ac970ec7c

Product repo: NomNomzBot master, read only. Paths under server/src unless marked. W = NomNomzBot.Infrastructure/Moderation/SpamObservationWindow.cs. S = NomNomzBot.Infrastructure/Moderation/SpamDefenseService.cs. D = NomNomzBot.Domain/Moderation/SpamDefense/SpamDefenseDefaults.cs. C = NomNomzBot.Domain/Moderation/SpamDefense/SpamDefenseSettings.cs. A = dashboard/src/views/dashboard/admin/i18n/en.json.

## The seven-day observation window (the earlier FAIL), checked with extra care

| Claim | Page line | Proof | Verdict |
| --- | --- | --- | --- |
| Each channel has a first watch period of seven days | 51 | W:24 `ObservationDays = 7`; S:41 same constant | true |
| During the seven days the bot only watches, even with watch-only off | 52 | S:439-442 `observing = settings.DryRun \|\| await IsInObservationWindowAsync(...)`; S:833-834 calls W.IsActiveAsync; W:17-20; observing passed to SpamEnforcement.Decide (S:461) | true |
| The seven days start when the channel joins the bot | 53 | W:33-46: with no stamp, eligible = Channels.CreatedAt + 7. A first save while the stack was already on keeps that start: S:118, S:131-134 (`wasEnabled` true gives ChannelCreatedAtAsync + 7, S:836-841) | true |
| If spam defense was off when first saved on, the seven days start at that save | 55 | S:118 `wasEnabled` reads the effective setting before the save (own row or operator defaults, S:82-105); S:131-135: `wasEnabled` false gives null, so the stamp is now + 7. The stamp is set only once (`EnforcementEligibleAt is null`, S:131) | true |
| Acts only when watch-only is off and the seven days have passed | 56, 75 | S:441-442; W:57 (`now < eligibleAt` means still observing) | true |

## Every other claim, re-checked

| Claim | Page line | Proof | Verdict |
| --- | --- | --- | --- |
| Labels (Watch only, do not act; Spam defense enabled; Not yet active; Guarantees with no switch; Trust ladder thresholds; Head start before acting; Reports needed...; Restrict other alphabets...; Keep it tightened...; Share at which the group is exonerated; Newest follow...; Separate active days...; "Enter a value from") | various | each found as literal text in A | true |
| "Unsaved changes", "Spam defense saved." | 27, 29 | dashboard/src/i18n/locales/en.json; dashboard/src/views/dashboard/settings/spam-defense/i18n/en.json | true |
| Unsaved channel uses defaults, operator defaults followed, own values after save | 36-41 | S:82-105 | true |
| Hosting marker present | 43 | page line 43 | true |
| Watch only on by default; enabled on by default | 47, 70-71 | D:21, D:24 | true |
| Trust defaults 90/300/30/180; watch hours 10 (1-200) and 25 (1-500) | 81-86 | D:27-32; C:246-247 | true |
| Account age 0 (0-365), follow 0 (0-90), keep gated on | 109-111 | D:35-37; C:248-250 | true |
| Similarity 0.6 (0-1), length 8 (2-50), other alphabets off | 121-123 | D:40-42; C:251-253 | true |
| Alphabet raise to medium at most; established never affected | 127-130 | S:444-458 (IsImmune skip, RaiseConfidence) | true |
| Campaign defaults and ranges 0.8/0.65/5/600/1800/8/on | 140-146 | D:45-51; C:254-260 | true |
| Follow 5, join 4, both 1.5-50 | 159-160 | D:54-55; C:261-268 | true |
| Lockdown 15 (1-240), auto-extend on, 60 (5-480); marked Not yet active | 167, 179-181 | D:58-60; C:269-287 (PendingSlices.LockdownWire) | true |
| Network subscribe on, contribute off, reports 3 (1-20); two marked Not yet active | 188, 193-195 | D:63-65; C:288-298 | true |
| Six settings carry Not yet active (join rate, three lockdown, two network) | 209-214 | C:261-297: exactly these six carry a PendingSlice | true |
| Remaining claims (roles, Save visibility, locked inputs, cards, pair order, lockdown extension and ceiling, held-back patterns, guarantees card) | 14-32, 88-103, 113-115, 134-136, 148-153, 166-203, 216-222 | the writer's claims file rows and their cited lines; the code paths were spot-read where they touch the values above; no contradiction found | true |

## Links and conventions

- Link targets /reference/moderation/overview, /reference/moderation/trust-and-escalation, /reference/settings/permissions: each is one row of docs-work/map.md.
- No people's names, no action keys, no numbered levels, no license name or "open source", no NoMercyBot spelling.
- No British spelling found (searched colour, behaviour, defence, licence).

## Notes (not blocking)

- Product copy defect, outside the page: A dryRun.cost says turning watch-only off starts acting, which ignores the seven-day window (W:17-20). The page states the code behavior correctly.
- Edge case not on the page: if the channel row has no CreatedAt, the stamp falls back to now + 7 (S:133-135). Not worth a reader's attention.
