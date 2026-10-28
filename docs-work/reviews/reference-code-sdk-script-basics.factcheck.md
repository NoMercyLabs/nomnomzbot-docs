# Fact-check: /reference/code/sdk-script-basics
Verdict: PASS
Reviewed: src/content/reference/en/code/sdk-script-basics.mdx
Reviewed-SHA: 72bde38d9a518811

Product repo: nomnomzbot master (read only). Paths below are relative to `server/src/NomNomzBot.Infrastructure/` unless they start with `dashboard/`.
JSE = `CustomCode/Jint/JintScriptExecutor.cs` (the `Bootstrap` script and the save-time scan).

## Claims

| # | Claim | Page line | Product file:line | Verdict |
| --- | --- | --- | --- | --- |
| 1 | Title carries "(Draft)" and a Draft callout | 2, 10-12 | map.md row 125 "(Draft)" | true |
| 2 | Custom Code is off for a new channel | 16 | `Platform/FeatureService.cs:51-56` (DefaultOn false) | true |
| 3 | While off, every grant is refused | 17 | `CustomCode/ScriptCapabilityBroker.cs:35,118-128` | true |
| 4 | Features page, Custom Code in the Automation area | 19-20 | `dashboard/src/views/dashboard/settings/features/featureAreas.ts:27`; `.../features/i18n/en.json:5,11`; label `FeatureService.cs:52` | true |
| 5 | The switch takes effect right away | 22 | `.../features/i18n/en.json:6`; `FeaturesView.vue:66-79` (mutation on flip) | true |
| 6 | bot.args string[] | 31 | `DevPlatform/SdkRuntimeSurface.cs:543`; JSE:79 | true |
| 7 | bot.getVar returns string or null | 32 | `SdkRuntimeSurface.cs:549` | true |
| 8 | bot.setVar returns nothing; value is text | 33 | `SdkRuntimeSurface.cs:565`; JSE:81 | true |
| 9 | bot.send / bot.stopPipeline return nothing | 34-35 | `SdkRuntimeSurface.cs:567,569` | true |
| 10 | bot.call(key, ...args) returns string or null | 36 | `SdkRuntimeSurface.cs:573`; JSE:84-91 | true |
| 11 | Every nnz.api call goes through bot.call | 38 | JSE:154-286 (every wrapper calls bot.call) | true |
| 12 | An ungranted key is denied | 40 | JSE:470-471 (ScriptCapabilityDeniedException) | true |
| 13 | console.log/info plain; warn/error prefixed "warn:"/"error:" | 42-43 | JSE:53-66, 445 | true |
| 14 | Console lines go to the test run panel, not viewers | 42-44 | JSE:447; `CustomCode/ScriptTestRunService.cs:184`; ScriptRunner has no log output | true |
| 15 | Helpers make no bot call, need no grant | 48-49 | JSE:42-44, 96-176 (pure JS) | true |
| 16 | units.convert: length, weight, time, temperature; NaN on mismatch | 53-55 | JSE:97-122 | true |
| 17 | time.now/parse/format/add/diff behavior | 61-65 | JSE:124-129 | true |
| 18 | time.sleep at most 5 seconds, counts against time limit | 66-68 | JSE:39 (MaxSleepMs 5000), 488-495 (shared timeout token) | true |
| 19 | math.clamp/round (default 0)/lerp/sum/avg (0 for empty)/min/max/randomInt inclusive | 74-81 | JSE:140-147 | true |
| 20 | str.padStart/padEnd default space; trim/upper/lower/title | 87-92 | JSE:150-155 | true |
| 21 | str.truncate includes ellipsis, default "…" | 93 | JSE:156 | true |
| 22 | str.slugify "Hello World" gives "hello-world" | 94 | JSE:157 | true |
| 23 | str.format leaves unknown {name} as is | 95 | JSE:158 | true |
| 24 | json.parse null on bad text; stringify "null"; neither throws | 99-101 | JSE:161-164 | true |
| 25 | random.int/pick (empty list throws)/shuffle (copy)/uuid v4 | 107-110 | JSE:167-170 | true |
| 26 | nnz.lastError: last failed call or null; reading needs no grant | 114-115 | JSE:96, 468-471; `CustomCode/ScriptHostBridge.cs:118-121` | true |
| 27 | Grant list is read at save and kept with the version | 120 | JSE:315-319, 375-393; `CustomCode/ScriptRunner.cs:93-94` (DeclaredCapabilitiesJson) | true |
| 28 | Four sources of grant keys (nnz.api, quoted bot.call, template.render, actions.invoke type) | 122-125 | JSE:323-324, 329, 335, 339-341, 384-392 | true |
| 29 | Unknown key or Custom Code off stops the whole run before it starts | 128 | `ScriptCapabilityBroker.cs:108-128`; `ScriptRunner.cs:95-112` | true |
| 30 | Computed action type fails save with the quoted message | 131-132 | JSE:307, 344-345 | true (text matches verbatim) |
| 31 | Grant key table, 24 nnz.api rows | 138-161 | JSE:347-373 (ApiMethodCapabilities, all 24 match) | true |
| 32 | actions.invoke key is "actions.invoke:" plus type | 162 | JSE:174, 391; `ScriptCapabilityBroker.cs:87-93` | true |
| 33 | nnz.template.render key template.render | 163 | JSE:335, 389-390; broker:71 | true |
| 34 | Failed call returns empty result, script continues | 169-170 | `ScriptHostBridge.cs:461,766` (Fail returns a fallback); JSE wrappers (e.g. storage.set === 'ok') | true |
| 35 | lastError has code and message | 171 | `CustomCode/ScriptHostError.cs:15` | true |
| 36 | Six error codes | 175-180 | `ScriptHostError.cs:48-53`; `SdkRuntimeSurface.cs:889` | true |
| 37 | Code meanings (mapping VALIDATION_FAILED/NOT_FOUND/FORBIDDEN/RATE_LIMITED/LIMIT_EXCEEDED/other) | 175-180 | `ScriptHostError.cs:21-28` | true |
| 38 | not_found for viewer, widget, reward; refused e.g. widget turned off | 176-177 | `ScriptHostBridge.cs:461,766,771,839` | true |
| 39 | Every bot call clears lastError first | 182 | `ScriptHostBridge.cs:114-127` | true |
| 40 | Example: storage.set returns false on refusal, chat.send posts | 186-192 | JSE:220, 197 | true |
| 41 | Chat post in the channel's one bot voice | 194 | chat.send posts as the bot (`SdkRuntimeSurface.cs:752`) | true |

## Links

| Target | In map.md |
| --- | --- |
| /reference/code/how-a-script-runs | row 124 |
| /reference/code/sdk-chat-music-voice | row 126 |
| /reference/code/sdk-data-and-storage | row 127 |

All three targets are map rows.

## Conventions

- No people's names, no action keys, no numbered levels, no license name, no "open source": checked, none.
- No hosting, price or paid plan is mentioned, so no hosting marker is needed.
- No NoMercyBot spelling. American English: no British spelling found.
- Labels "Features", "Automation" and "Custom Code" match the dashboard i18n file and the server feature label.
- Example: a blank line between steps, statements end with semicolons, no object with 3 or more entries, calls nest at most two deep.

## Notes (not blocking)

- Line 40 and line 129: a call to an ungranted key does not fail softly. It ends the run with the outcome Denied (JSE:470-471, 508-511). The page could say "stops the run" so readers do not expect `nnz.lastError` to explain it.
- Line 176: `not_found` also covers a Twitch login that does not exist (`ScriptHostBridge.cs:343`). The list "viewer, widget or reward" gives examples; it is not complete.
