# Claims: /reference/audio/media-share

Paths: S = server/src, D = dashboard/src. Product repo is NomNomzBot (read only).

| # | Claim | Evidence |
| --- | --- | --- |
| 1 | Sidebar label **Media share** | D/i18n/locales/en.json:837 |
| 2 | Viewers share a Twitch clip or YouTube video; only those two sources | S/NomNomzBot.Infrastructure/MediaShare/MediaSourceResolver.cs:62-79 |
| 3 | Overlay must be loaded in OBS; warning text and **Set up in OBS** | D/views/dashboard/media-share/MediaShareView.vue:57-64; components/MediaSharePlayer.vue:214-228; media-share/i18n/en.json player.overlayMissing, setupOverlay |
| 4 | Page needs media:read; queue actions media:moderate; settings save media:write; all default Moderator | D/views/dashboard/media-share/route.ts:19; MediaShareController.cs:57,92,105,119,131,181; S/NomNomzBot.Infrastructure/Content/Identity/ActionDefinitionSeeder.cs:536-538,51 |
| 5 | Without write, settings show but are disabled; Save/Discard hidden | components/MediaShareSettings.vue:114,120,136,143 |
| 6 | **Settings** button opens a side panel | MediaShareView.vue:130-138,189-196 |
| 7 | Settings labels (9 of 9: 4 switches, sub-only switch, 4 numbers) | MediaShareSettings.vue:51-57,117-123; media-share/i18n/en.json config.* |
| 8 | Defaults: off, approval on, clips on, YouTube on, 180 s, cost null (free), queue 20, cooldown 60 s, eligibility null (sub-only off) | S/NomNomzBot.Domain/MediaShare/Entities/MediaShareConfig.cs:29-49 |
| 9 | Disabled refuses every item | MediaShareService.cs:69-73 |
| 10 | Approval off -> straight to play order | MediaShareService.cs:137,177-178 |
| 11 | YouTube Shorts accepted | MediaSourceResolver.cs:256-258 |
| 12 | Sub-only: only Twitch subscribers; help text | MediaShareService.cs:599-626; en.json config.subOnlyHelp |
| 13 | Longest item refuses longer; min 1 | MediaShareService.cs:85-89,464-468 |
| 14 | Cost 0 = free; paid in channel currency (ledger debit) | MediaShareService.cs:143-163,509 |
| 15 | Longest queue counts pending+approved+playing; min 1 | MediaShareService.cs:121-135,469-473 |
| 16 | Wait between items per viewer; 0 = no wait | MediaShareService.cs:104-119 |
| 17 | Save keeps values; Discard restores saved | MediaShareSettings.vue:86-98,144-149 |
| 18 | Reject, remove (=reject), skip refund only an item that was charged (EntryCostLedgerEntryId set, :550-551); the refund is the CURRENT Cost per item, 0 when cost is 0 (stored null) | MediaShareService.cs:259,284,509,544-582; MediaShareView.vue:119-124 |
| 18a | Play now with an item playing: the playing item is skipped (History as skipped, refund) | MediaShareView.vue:105-112; MediaSharePlaybackService.cs:163-173; MediaShareService.cs:268-290 |
| 18b | Player use defaults to moderator and above (pipelines:write) | MediaShareView.vue:148; ActionDefinitionSeeder.cs:184 |
| 19 | `!media <link>` built-in, Everyone by default | S/NomNomzBot.Infrastructure/MediaShare/Builtins/MediaBuiltin.cs:47-49,56; DependencyInjection.cs:1346 |
| 20 | **Submit media** pipeline step (title humanized from submit_media), URL field takes templates, shares for the triggering viewer | S/NomNomzBot.Infrastructure/MediaShare/PipelineActions/SubmitMediaAction.cs; D/views/dashboard/pipelines/components/stepWords.ts:38-44; D/lib/text.ts:14-22; D/i18n/schema/en.json:2379-2384 |
| 21 | Reply table rows (12 of 12 reply slots) | MediaBuiltin.cs:57-64,94-108,117-181 |
| 22 | Refused item costs nothing (debit after all checks) | MediaShareService.cs:69-163 |
| 23 | Queue sections, order, empty sections hidden; playing item not in a section | D/views/dashboard/media-share/queueSections.ts:17-39 |
| 24 | Count in heading = items not played/rejected/skipped | MediaShareView.vue:77-79,156-160; en.json queue.waiting |
| 25 | Row actions per section | components/MediaShareQueueRow.vue:97-157 |
| 26 | Row shows title, "Shared by", length, source, position | MediaShareQueueRow.vue:61-87; en.json queue.by, position, source |
| 27 | Empty text | en.json queue.empty; MediaShareView.vue:162 |
| 28 | Approve -> end of Up next | MediaShareService.cs:217-228,533-541 |
| 29 | Move up/down by one; positions renumber | MediaShareView.vue:96-98; MediaShareService.cs:293-330 |
| 30 | Play now: to top, then skip current or play; not on first item | MediaShareView.vue:105-112; MediaShareQueueRow.vue:112 |
| 31 | Skip -> History as skipped | MediaShareService.cs:268-290; queueSections.ts:25-32 |
| 32 | Remove dialog title, shows title, confirms -> rejected | MediaShareView.vue:114-124,199-209; en.json remove.title |
| 33 | **On stream** card contents, Playing/Paused, time | MediaSharePlayer.vue:109-161; en.json player.* |
| 34 | Player controls (6 of 6) behavior | MediaSharePlayer.vue:147-210; S/NomNomzBot.Infrastructure/MediaShare/Playback/MediaSharePlaybackService.cs:43-52,119-175 |
| 35 | Ended -> played, next starts | MediaSharePlaybackService.cs:104-116 |
| 36 | "Approve an item to play it on stream." when nothing to play | MediaSharePlayer.vue:211-213 |
| 37 | Player needs pipelines:write (Moderator default) | MediaShareView.vue:148; ActionDefinitionSeeder.cs:184 |
| 38 | **Media playback** step also plays a finished item again, or an approved item at once (the editor shows only help text, no option labels) | S/NomNomzBot.Application/MediaShare/Dtos/MediaPlaybackDtos.cs:17-26; MediaPlaybackAction.cs:32,101-107; schema/en.json:1744-1751 |
