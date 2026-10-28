# Fact check: src/content/reference/en/audio/media-share.mdx
Verdict: PASS
Reviewed: src/content/reference/en/audio/media-share.mdx
Reviewed-SHA: 9c827efc69e9365a

## Round 4 changes checked

- Lines 150-151 "It can also play a finished item again, or play an approved item at once.": replay takes a played or skipped item back to approved at position 1 and loads it when the player is idle (S/MediaShareService.cs:332-353; S/Playback/MediaSharePlaybackService.cs ReplayAsync). play_now moves an approved item to 1 (ReorderAsync takes only Approved items), skips what plays and loads it (MediaSharePlaybackService.cs PlayNowAsync). Supported.
- Line 152 Pipelines link: the Pipelines page lists **Media playback** (src/content/reference/en/commands/pipelines.mdx:230). Supported.
- Paragraph splits (refund rule, lines 6-9, 116-121): same sentences as round 3, only blank lines added. No claim changed.

Round 3 text below stays valid.

Round 3. Product paths are relative to C:\Projects\NoMercyLabs\nomnomzbot (master, includes b6204c36c). S = server/src/NomNomzBot.Infrastructure/MediaShare, D = dashboard/src/views/dashboard/media-share.

## Round 2 finding: checked first

Line 46 now reads "When an item the viewer paid for is rejected, removed or skipped, the bot gives the viewer a refund." RefundIfChargedAsync returns when `EntryCostLedgerEntryId is null` (S/MediaShareService.cs RefundIfChargedAsync, first statement); the id is set only inside `if (config.EntryCost is > 0)` at submit (S/MediaShareService.cs debit block, `costLedgerEntryId = debit.Value.Id`). Fixed. Lines 47-48 (refund = current cost, 0 when 0): `Math.Abs(await OriginalCostAsync(...))` and `return cost ?? 0;`, with 0 stored as null (`config.EntryCost = request.EntryCost is > 0 ? request.EntryCost : null`). Supported.

## Notes (not failures)

- The reply table has 12 rows; MediaBuiltin.cs has 13 reply slots. The `AccountUnresolved` slot ("Your account could not be resolved.") has no own row; the "Any other failure" row covers it in meaning (the item is not shared). Not a false statement.

## Product defects

- S/MediaShareService.cs RefundIfChargedAsync / OriginalCostAsync: the refund uses the current cost, not the charged amount.
- S/MediaShareService.cs RefundIfChargedAsync: a failed refund is dropped silently (`_ = refund;`).

## Claim table

| Claim | Supported by file:line | Status |
| --- | --- | --- |
| Sidebar label Media share | dashboard/src/i18n/locales/en.json:837; D/i18n/en.json title | Supported |
| Only Twitch clips and YouTube videos | S/MediaShareService.cs SubmitAsync resolver call (AllowTwitchClips, AllowYouTube); D/i18n/en.json queue.source | Supported |
| Overlay plays only when loaded in OBS; warning text; Set up in OBS | D/MediaShareView.vue:54-60; D/i18n/en.json player.overlayMissing, setupOverlay | Supported |
| Page, queue, settings, player default moderator and above | D/route.ts:19; D/MediaShareView.vue:131,144,148,154; ActionDefinitionSeeder.cs:184,536-538 | Supported |
| No-write user sees settings disabled | D/components/MediaShareSettings.vue:114,120,136,143 | Supported |
| Settings opens a side panel | D/MediaShareView.vue:189-196 | Supported |
| Settings labels (9) and Save settings / Discard | D/i18n/en.json config.* | Supported |
| Defaults off/on/on/on/off/180/free/20/60 | server/src/NomNomzBot.Domain/MediaShare/Entities/MediaShareConfig.cs:29-49 | Supported |
| Off refuses every item | S/MediaShareService.cs `if (!config.IsEnabled)` DISABLED | Supported |
| Approval off goes straight to play order | S/MediaShareService.cs `autoApproved = !config.RequireApproval` | Supported |
| Longest item refuses longer; at least 1 | S/MediaShareService.cs DURATION_EXCEEDED; UpdateConfigAsync `MaxDurationSeconds < 1` | Supported |
| Cost 0 = free, paid in channel currency | S/MediaShareService.cs debit block `EntryCost is > 0`, SpendMedia ledger entry | Supported |
| Longest queue counts pending, approved, playing; at least 1 | S/MediaShareService.cs liveCount, QUEUE_FULL; `MaxQueueLength < 1` | Supported |
| Wait 0 = no wait | S/MediaShareService.cs `if (config.PerUserCooldownSeconds > 0)` | Supported |
| Sub-only help text | D/i18n/en.json config.subOnlyHelp; S/MediaShareService.cs CheckEligibilityAsync | Supported |
| Refund only for a paid item; current cost; 0 when 0 | S/MediaShareService.cs RefundIfChargedAsync, OriginalCostAsync | Supported |
| `!media` built-in, everyone by default | S/Builtins/MediaBuiltin.cs BuiltinKey "media", DefaultMinPermissionLevel 0 | Supported |
| Submit media step, URL field takes templates | S/PipelineActions/SubmitMediaAction.cs:24,33,46,56 (submit_media, url Templated: true, resolved, for the triggering viewer) | Supported |
| Reply table rows | S/Builtins/MediaBuiltin.cs ExecuteAsync and FailureAsync slots | Supported |
| Refused item costs nothing | S/MediaShareService.cs: all checks precede the debit; debit failure persists nothing | Supported |
| Three sections, empty hidden, playing not listed | D/queueSections.ts sectionOf, groupQueue | Supported |
| Heading count | D/MediaShareView.vue:156-160; en.json queue.waiting | Supported |
| Row actions per section; Move up/down in More actions; no Play now on first | D/components/MediaShareQueueRow.vue:97-157 | Supported |
| Row shows title, Shared by, length, source, position | D/components/MediaShareQueueRow.vue:66,84; en.json queue.by, position | Supported |
| Empty text | D/i18n/en.json queue.empty; D/MediaShareView.vue:162 | Supported |
| Approve -> end of Up next | S/MediaShareService.cs ApproveAsync NextQueuePositionAsync (max+1) | Supported |
| Move by one; positions renumber | D/MediaShareView.vue move(); S/MediaShareService.cs ReorderAsync renumber loop | Supported |
| Play now: top, then skip or play | D/MediaShareView.vue playNow() | Supported |
| Skip -> History as skipped, refund | S/MediaShareService.cs SkipAsync | Supported |
| Remove dialog title, shows title, rejects with refund | D/MediaShareView.vue:199-209, confirmRemove `action: 'reject'`; RejectAsync | Supported |
| On stream card, Playing/Paused | D/i18n/en.json player.* | Supported |
| Player controls 6 and labels; volume 0-100 | D/i18n/en.json player.*; MediaSharePlayer.vue:204; MediaSharePlaybackService.cs Play/Stop/Skip | Supported |
| Stop marks played, next does not start | MediaSharePlaybackService.cs StopAsync (MarkPlayedAsync, GoIdleAsync) | Supported |
| Ended -> played, next starts | MediaSharePlaybackService.cs ReportStateAsync Ended branch, LoadNextOrIdleAsync | Supported |
| "Approve an item to play it on stream." | D/i18n/en.json player.nothingToPlay | Supported |
| Media playback step plays a finished item again, or an approved item at once | MediaSharePlaybackService.cs command switch, ReplayAsync, PlayNowAsync; MediaShareService.cs:332-353 | Supported |
| Pipelines page explains the step | nomnomzbot-docs pipelines.mdx:230 | Supported |
