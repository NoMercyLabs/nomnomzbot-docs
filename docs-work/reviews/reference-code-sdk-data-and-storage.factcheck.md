# Fact-check: /reference/code/sdk-data-and-storage
Verdict: PASS
Reviewed: C:\Projects\NoMercyLabs\nomnomzbot-docs\src\content\reference\en\code\sdk-data-and-storage.mdx
Reviewed-SHA: 4679154be4a9ec4f

Every claim below was traced by reading the product code at master (read only). Paths are relative to `server/src/`.
Short names: Bridge = `NomNomzBot.Infrastructure/CustomCode/ScriptHostBridge.cs`; Shim = `NomNomzBot.Infrastructure/CustomCode/Jint/JintScriptExecutor.cs`; Surface = `NomNomzBot.Infrastructure/DevPlatform/SdkRuntimeSurface.cs`; Storage = `NomNomzBot.Infrastructure/CustomCode/ScriptStorageService.cs`; StatsDto = `NomNomzBot.Application/Dashboard/Dtos/StreamStatsDto.cs`; StatsSvc = `NomNomzBot.Infrastructure/Dashboard/Stats/StreamStatsService.cs`; Sched = `NomNomzBot.Infrastructure/Commands/ScheduledPipelineService.cs`.

## Claims

| # | Claim | Page line | Product file:line | Verdict |
| --- | --- | --- | --- | --- |
| 1 | Draft label in title and callout, as the map row says | 2, 10-12 | docs-work/map.md:127 | true |
| 2 | A failed call leaves its reason in `nnz.lastError`; codes listed | 7 | Bridge:113-114; Surface (NnzApiError code union) | true |
| 3 | Custom Code is a feature to turn on (link to Script basics) | 8 | NomNomzBot.Infrastructure/Platform/FeatureService.cs:52; ScriptCapabilityBroker.cs:26 | true |
| 4 | `user.get(id)` gives a public profile, `null` on failure | 18, 38 | Shim:191; Bridge:263-310 | true |
| 5 | `user.lookup(login)` gives a Twitch account or `null` | 19, 56 | Shim:192; Bridge:313-354 | true |
| 6 | `economy.balance` gives a number, `0` on failure | 20, 66-69 | Shim:195; Bridge:447-467 (Fail ... "0") | true |
| 7 | `stats.viewer` gives zeros, never `null` | 21, 78 | Bridge:910-948 (`?? 0`, firstSeen null) | true |
| 8 | `stats.stream(options)` gives `null` on failure | 22 | Shim:247; Bridge:971-989 | true |
| 9 | `reward.get` / `reward.update` return reward or `null` / `true`/`false` | 23-24 | Shim:259-264; Bridge:825-908 | true |
| 10 | storage get/set/delete/list returns (`null`, `true`/`false`, empty list) | 25-28 | Shim:206-211; Bridge:538-622 | true |
| 11 | `http.fetch(url)` gives body text or `null` | 29 | Shim:203; Bridge:359-411 | true |
| 12 | `schedule.pipeline(name, delaySeconds, variables, dedupeKey)` gives `true`/`false` | 30 | Shim:265-272; Bridge:1158-1185 | true |
| 13 | A missing value stops the script, e.g. "storage.get needs a key" | 32 | Shim:76-79 `need()` throws `call + ' needs ' + what`; Shim:207 | true |
| 14 | Leave out `id` for the triggering viewer | 39 | Bridge:268-269 | true |
| 15 | `id` may be internal id, Twitch id or login | 40 | Bridge:276-280, ResolveViewerUser 1189+ | true |
| 16 | Fields id, username, displayName, avatarUrl (absent when none), paint (absent when none) | 42-48 | Bridge:290-308 with OmitNullSettings (Bridge:105-108) | true |
| 17 | Paint has backgroundImage, color, textShadow (each absent when unset) and isImageOnly | 50 | Bridge:298-304, NullValueHandling.Ignore | true |
| 18 | No email or private data | 51 | Bridge:265-267, 290-306 | true |
| 19 | Unknown viewer gives `null`, code `not_found` | 52 | Bridge:281 | true |
| 20 | Lookup works for users who never chatted; `@` and capitals fine | 56-57 | Bridge:320-323 (TrimStart '@', ToLowerInvariant), Twitch Helix call 336-339 | true |
| 21 | Lookup gives id, login, displayName | 58 | Bridge:345-353 | true |
| 22 | Login: letters, digits, underscores, at most 25 | 60 | Bridge:356 `^[a-z0-9_]{1,25}$` | true |
| 23 | 3 Twitch asks per run; 4th gives `null`, `limit_exceeded` | 61-62 | Bridge:92, 328-333 | true |
| 24 | Balance: default trigger viewer; id or login; unknown gives `0` | 66-69 | Bridge:453-461 | true |
| 25 | Viewer stats fields messages, watchtimeSeconds, firstSeen (yyyy-MM-dd), redemptions, songRequests, commands | 80-87 | Bridge:937-946; Surface:162-180 | true |
| 26 | Example 1 uses only real calls; bot speaks in one voice | 91-98 | Shim:188, 195, 246 | true |
| 27 | `options.metrics` list; `options.stream` optional, latest live or ended | 103-104 | Shim:247; DevPlatform/StreamMetricTypeScript.cs:63-70; StatsSvc:122 | true |
| 28 | Answer always has `stream` with id, startedAt, endedAt (null while live), title, game | 106 | StatsDto:9-11, StreamStatsWindowDto | true |
| 29 | Each metric is a field of the same name; empty metric is absent | 107-108 | StatsDto `JsonIgnore(WhenWritingNull)` on every metric; Bridge:987 System.Text.Json | true |
| 30 | The 16 metric keys and their meanings (bits ... topChatters) | 110-127 | StatsDto properties; 16 classes in NomNomzBot.Infrastructure/Dashboard/Stats/*Metric.cs | true |
| 31 | chat has messages and uniqueChatters; channel has name, avatarUrl; hypeTrain level, trains; raidsIn name, viewers; subs new/resub/gift/total | 113-126 | StatsDto (StreamStatsChannelDto, StreamStatsHypeTrainDto, StreamStatsSubsDto, StreamStatsRaidDto:204-208) | true |
| 32 | Total+top shape; top entries name/count, highest first | 129-130 | StatsDto StreamStatsRankedDto, StreamStatsNamedCountDto; NomNomzBot.Infrastructure/Dashboard/Stats/StreamFactReader.cs:135-149 | true |
| 33 | Every list holds at most 5 entries | 131 | StreamFactReader.cs:135 `ListCap = 5`; NewFollowersMetric:34, RaidsInMetric:34, SelfSubsMetric:41 | true |
| 34 | Empty metrics list gives every metric | 133 | StatsSvc:84-85 | true |
| 35 | Unknown key or no such stream gives `null` | 134 | StatsSvc:91-97; Bridge:986-988 | true |
| 36 | Reward found by id or title, title case-insensitive | 150-151 | Bridge:1268-1295 OrdinalIgnoreCase | true |
| 37 | Reward fields id, title, cost, prompt (or null), isEnabled, isPaused | 153-160 | Bridge:841-850; Surface:123-139 | true |
| 38 | Patch keys title, cost, prompt, isEnabled, isPaused; omitted kept; others ignored | 164-166 | Bridge:1345-1366 ReadRewardPatch | true |
| 39 | Only a bot-created reward can change; else `false`, `refused` | 168-169 | Bridge:868-876 (IsManageable) | true |
| 40 | Same update path as the dashboard | 170 | Bridge:900-904 | true |
| 41 | Storage is per channel, shared by every script of the channel | 182-183 | Storage:20-27 (BroadcasterId filter, `script:` prefix) | true |
| 42 | Key 1-128 chars, value 64 KB, 200 keys per channel | 187-189 | Storage:154-161 (MaxKeyLength), 136-143 (MaxValueBytes); Surface "64 KB per value, 200 keys"; Bridge:558 comment | true |
| 43 | New key counts toward 200; existing key always rewritable | 194 | Storage:62-76 | true |
| 44 | Over size or full channel gives `false`, nothing stored | 195 | Storage:57-59, 70-75; Bridge:555-563; Shim:208 | true |
| 45 | get gives text or `null` | 200 | Storage:30-44 | true |
| 46 | delete of absent key still `true` | 205 | Storage:112-117 (idempotent) | true |
| 47 | list sorted by key, prefix filter | 209-210 | Storage:126-133 | true |
| 48 | fetch: https only else `null`, `invalid_argument` | 221-222 | Bridge:361-369 | true |
| 49 | Non-success answer gives `upstream_failed` | 223 | Bridge:383-388 | true |
| 50 | Blocked or failed before an answer does the same | 224 | Bridge:403-410 | true |
| 51 | 256 KB total sent and received per run, ENFORCED | 226 | Bridge:97-100 `_egressCap = maxEgressBytes ?? ScriptResourceBudget.Baseline.MaxEgressBytes`; NomNomzBot.Application/Contracts/CustomCode/ScriptContracts.cs:53 `256L * 1024`; request bytes counted Bridge:371-374, body bytes 391-399. No caller passes `maxEgressBytes` (grep: only Bridge:85,99), so the baseline is the live cap. | true |
| 52 | Going over gives `null`, `limit_exceeded` | 227 | Bridge:373, 399, 413-416 | true |
| 53 | Schedule: runs a saved channel pipeline once after a delay | 231 | Sched:239-290; Bridge:1164-1185 | true |
| 54 | Name case-insensitive, pipeline must be on | 232 | Sched:125-126 (`IsEnabled`, ToLower compare) | true |
| 55 | Not found gives `false`, `not_found` | 233 | Sched:130; Bridge:1185 | true |
| 56 | delaySeconds rounded up, then held 1 s to 24 h | 237 | Shim:265 Math.ceil; Sched:38-41, 244 Math.Clamp | true |
| 57 | variables optional text values | 238 | Shim:267; Bridge:1134-1155 Dictionary<string,string> | true |
| 58 | dedupeKey replaces the waiting run | 239 | Sched:252-260 | true |
| 59 | Examples: real calls, statements end in semicolons, blank lines between steps, objects under 3 entries | 91-96, 136-144, 174-178, 212-217, 241-245 | page text | true |
| 60 | Links: /reference/code/sdk-script-basics, /reference/economy/currency-and-balances, /reference/automation/rewards are map rows | 8, 70, 171, 249-251 | docs-work/map.md (3 of 3 rows found) | true |

## Conventions

- No people's names, no action keys, no numbered levels, no license name, no "open source": none found.
- American English: none of colour/behaviour/organis/recognis/licen found.
- No NoMercyBot spelling.
- No hosting, price or paid plan mentioned, so no hosting marker is needed.
- Bot voice: line 98 names the channel's one bot voice.
- Labels: "Custom Code" equals the feature name in FeatureService.cs:52 (the feature list is rendered from the server).

## Notes (not blocking)

- Line 195 could name the code for a refused write (`limit_exceeded` for a full channel, `invalid_argument` for size) for parity with the other sections; the code maps `LIMIT_EXCEEDED`/`VALIDATION_FAILED` through Fail (Bridge:563). Not checked which guest code `VALIDATION_FAILED` maps to.
- The response body of one fetch is also capped at 256 KB (Bridge:89); the page's total cap already covers it.
