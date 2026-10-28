# Claims: /reference/code/sdk-data-and-storage

Product repo: NomNomzBot master, read only. Paths are relative to `server/src/`.
B = `NomNomzBot.Infrastructure/CustomCode/ScriptHostBridge.cs`.
J = `NomNomzBot.Infrastructure/CustomCode/Jint/JintScriptExecutor.cs`.
S = `NomNomzBot.Infrastructure/DevPlatform/SdkRuntimeSurface.cs` (the served .d.ts).

| Claim | Page section | Proof | Verdict |
| --- | --- | --- | --- |
| The calls exist with these names and parameters | Overview | S:733-891 (namespace interfaces); J:191-269 (runtime wrappers) | true |
| Each call needs its grant (keys listed on Script basics) | Opening | `NomNomzBot.Infrastructure/CustomCode/ScriptCapabilityBroker.cs`:43-80; J:355-374 | true |
| A failed call leaves its reason in nnz.lastError | Opening | B:167-179 (Fail sets _lastError) | true |
| Missing required value throws "<call> needs <what>" | Overview | J:76-79 `need`; J:207 storage.get uses it | true |
| user.get defaults to the triggering user; accepts internal id, Twitch id or login | Get a viewer | B:268-269; B:1191-1208 ResolveViewerUser | true |
| user.get fields id, username, displayName, avatarUrl, paint (omitted when none) | Get a viewer | B:290-308 (OmitNullSettings); S:45-73 | true |
| No email or private data | Get a viewer | B:265-267, B:290-308 (only public fields serialized) | true |
| Unknown viewer gives null and not_found | Get a viewer | B:279-280; J:192 | true |
| user.lookup: @ and capitals fine; login pattern; 3 per run, then limit_exceeded | Look up a Twitch account | B:319-322, B:323-327, B:356-357, B:92, B:329-333 | true |
| user.lookup gives id, login, displayName | Look up a Twitch account | B:344-351 | true |
| economy.balance number; defaults to trigger user; id or login; unknown gives 0 | Points | J:196; B:453-459 | true |
| stats.viewer defaults to trigger user; unknown gives zeros and firstSeen null | Viewer stats | B:916-917, B:920-944; J:242 | true |
| stats.viewer fields and yyyy-MM-dd | Viewer stats | B:937-944 | true |
| stats.stream options metrics and stream; latest stream when left out | Stream stats | J:243; B:976-981; `NomNomzBot.Infrastructure/Dashboard/Stats/StreamStatsService.cs`:116-123 | true |
| Answer always has stream window id/startedAt/endedAt/title/game | Stream stats | StreamStatsService.cs:61-70; `NomNomzBot.Application/Dashboard/Dtos/StreamStatsDto.cs`:109-130 | true |
| Metric absent when nothing to show | Stream stats | StreamStatsDto.cs:16-19 and WhenWritingNull on each property | true |
| The 16 metric keys and their meaning | Stream stats | `NomNomzBot.Infrastructure/Dashboard/Stats/*Metric.cs` Key lines (16 files); StreamStatsDto.cs:27-105 | true |
| Ranked shape total/top, entries name/count highest first | Stream stats | StreamStatsDto.cs:176-198; `Dashboard/Stats/StreamFactReader.cs`:137-145 | true |
| Lists hold at most 5 | Stream stats | StreamFactReader.cs:135 ListCap=5; NewFollowersMetric.cs:34, RaidsInMetric.cs:34, SelfSubsMetric.cs:41 | true |
| Empty metrics list gives every metric | Stream stats | StreamStatsService.cs:84-85 | true |
| Unknown key or no stream gives null | Stream stats | StreamStatsService.cs:40-41, 48-49, 89-97; B:983-985; J:243 | true |
| reward.get by id or title, title case-insensitive | Read a reward | B:1268-1295 (OrdinalIgnoreCase at 1288) | true |
| reward.get fields | Read a reward | B:841-850 | true |
| reward.update patch fields; others ignored; unset keep value | Change a reward | B:1345-1367 | true |
| Only bot-created rewards change; else false and refused | Change a reward | B:869-876; J:258 (=== 'ok') | true |
| Same update path as the dashboard | Change a reward | B:901-904 (rewardService.UpdateAsync) | true |
| Storage per channel, shared by all channel scripts | Storage | `NomNomzBot.Infrastructure/CustomCode/ScriptStorageService.cs`:41-44, 60-63 (keyed by broadcasterId only) | true |
| Limits 128 chars, 64 KB, 200 keys | Storage | `NomNomzBot.Application/Contracts/CustomCode/IScriptStorageService.cs`:26, 29, 32; ScriptStorageService.cs:142-166 | true |
| Existing key always fits; new key over cap refused, nothing stored | Store a value | ScriptStorageService.cs:64-75; B:562-565 | true |
| set gives true/false | Store a value | J:208; B:565 | true |
| get gives null when no value | Read a value | ScriptStorageService.cs:45 | true |
| delete of absent key gives true | Delete a value | ScriptStorageService.cs:116; J:209 | true |
| list sorted, prefix filter, empty list | List the keys | ScriptStorageService.cs:119-133; J:210 | true |
| fetch https only, else invalid_argument | Fetch a web page | B:361-369 | true |
| Non-success gives upstream_failed; blocked/failed same | Fetch a web page | B:383-387, B:400-407 | true |
| 256 KB per run over sent and received, then limit_exceeded | Fetch a web page | B:98-99; `NomNomzBot.Application/Contracts/CustomCode/ScriptContracts.cs`:53; B:371-373, 391-398, 412-416 | true |
| schedule rounds up to whole seconds | Schedule a pipeline | J:263-265 | true |
| delay clamped 1 s to 24 h | Schedule a pipeline | `NomNomzBot.Infrastructure/Commands/ScheduledPipelineService.cs`:38, 41, 244 | true |
| Name case-insensitive, pipeline must be enabled; not found gives false/not_found | Schedule a pipeline | ScheduledPipelineService.cs:121-130; B:1188; J:266-269 | true |
| variables optional text values; dedupeKey replaces pending run | Schedule a pipeline | B:1130-1150; ScheduledPipelineService.cs:250-268 | true |
| Bot speaks the chat line in the channel's one bot voice | Viewer stats | B:SendChat (chatProvider.SendMessageAsync as the bot) | true |
| Custom Code turn-on is linked, not repeated | Opening | page sdk-script-basics "Turn on Custom Code" | true |
