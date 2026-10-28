# Fact check: /reference/code/sdk-script-basics
Verdict: PASS
Reviewed: src/content/reference/en/code/sdk-script-basics.mdx
Reviewed-SHA: 43a67d7b8cbf4393

This verdict judges the current text (sha256 43a67d7b8cbf4393...). It re-checks every claim against product master and does not carry the older verdict (8a0de18761f85cba) forward.

Paths: SRV = server/src/NomNomzBot.Infrastructure/. JSE = SRV CustomCode/Jint/JintScriptExecutor.cs; BRK = SRV CustomCode/ScriptCapabilityBroker.cs; HB = SRV CustomCode/ScriptHostBridge.cs; HE = SRV CustomCode/ScriptHostError.cs.

| Claim | Page line | Supported by | Status |
| --- | --- | --- | --- |
| A script has the names `bot` and `nnz` | 6 | JSE:69 `var bot, nnz;`, JSE:80, JSE:95 | true |
| A grant is permission for one kind of bot call | 7 | BRK:38-81 one catalog entry per call key; JSE:469-470 each key checked | true |
| Custom Code is off for a new channel | 17 | SRV Platform/FeatureService.cs:51-55 `custom_code` DefaultOn false | true |
| Off: every grant is refused; a script with a bot call does not run | 18, 132 | BRK:35 FeatureGate; BRK:118-127 fails the whole grant per declared key | true |
| Features page, Custom Code, Automation area | 20-21 | dashboard/src/views/dashboard/settings/features/featureAreas.ts:27; features/i18n/en.json:11 "Automation"; FeatureService.cs:52 label "Custom Code" | true |
| Takes effect right away | 23 | BRK:118-124 the gate is read per grant build (each run), no cache in the broker | true |
| bot members and types (args, getVar, setVar, send, stopPipeline, call) | 30-37 | JSE:80-94; JSE:426-435 __getVar returns string or null, __setVar stores text; JSE:462-475 __call returns string? | true |
| bot.call is the door every nnz.api call goes through; takes key and text args | 39-40 | JSE:186-258 wrappers call bot.call; JSE:92 args mapped with String | true |
| console.log/info one line; warn "warn:", error "error:"; to the test run panel; viewers never see | 44-46 | JSE:62-67; JSE:437-449 `{level}: {text}`, OnConsoleLine and LogLines (Application/Contracts/CustomCode/ScriptContracts.cs:72, 101); not sent to chat | true |
| Helpers make no bot call | 50-51 | JSE:97-182 pure JS, no __call | true |
| units.convert: length, weight, time, temperature; NaN on mismatch | 55-57 | JSE:98-122 | true |
| time now/parse/format/add/diff | 63-67 | JSE:124-128 | true |
| time.sleep at most 5 s, counts against run time limit | 68-70 | JSE:39 MaxSleepMs 5000; JSE:488-498 clamp and same timeout token | true |
| math table, round default 0, avg 0 for empty, randomInt both ends | 76-83 | JSE:140-147 | true |
| str table, default pad space, truncate default "…" incl. in length, slugify, format keeps unknown names | 89-97 | JSE:150-158 | true |
| json.parse null on invalid; stringify "null"; neither throws | 101-103 | JSE:160-165 | true |
| random int/pick (empty list stops run)/shuffle copy/uuid v4 | 109-112 | JSE:167-170; JSE:531-535 JavaScriptException -> Faulted | true |
| nnz.lastError: last failed call or null; no grant, not a bot call | 116-117 | JSE:96; JSE:468-471 last.error skips grant and host-call count; HB:117-118 | true |
| Grants read from the code at save and kept with the version | 121-122 | JSE:312-317 ScriptCompilation carries DeclaredCapabilities | true |
| Four sources of keys (nnz.api, bot.call literal, template.render, actions.invoke literal) | 124-127 | JSE:322, 330, 335, 340-343, 377-394 | true |
| Unknown key stops the run before it starts | 130 | BRK:108-112 | true |
| Empty key list still runs when Custom Code is off | 133 | BRK:104-131 loop only over declared keys; success when none | true |
| Key not on the list stops the run with Denied | 135, 183 | JSE:470-471; JSE:509-512 outcome Denied | true |
| Non-literal action type fails the save with the quoted message | 137-138 | JSE:303-310 (message verbatim) | true |
| Grant key table (26 rows) | 144-169 | JSE:347-375 ApiMethodCapabilities (music.playNow -> actions.invoke:play_track_once); JSE:183-195 actions.invoke prefix; JSE:181 template.render | true |
| Failed call gives empty result, script goes on, lastError has code and message | 179-181 | HB:167-172 Fail; HE:22-24 ToJson code, message | true |
| Six error codes and meanings | 187-192 | HE:26-38 mapping (RATE_LIMITED, LIMIT_EXCEEDED, FORBIDDEN -> refused, else upstream_failed), HE:46-53 | true |
| Every bot call clears lastError first | 194 | HB:120-125 | true |
| Bad-value rule scope and exclusions | 198-205 | JSE:80-94 and 186-258 use need(); helpers JSE:97-182; deny JSE:470; gate BRK:118-127 | true |
| Required value left out or null stops the run, error names call and value ("chat.send needs a message") | 209 | JSE:76-79 need(); JSE:188 | true |
| Optional value left out is skipped | 210 | JSE:192, 196, 210, 217-222, 231-238, 242 | true |
| Empty/space text -> invalid_argument; no match -> not_found | 211-212 | HB ValidateMessage IsNullOrWhiteSpace; HB:150-166 ValidateWrite; HE:30-31 | true |
| Other types turned into text (5 -> "5") | 214 | JSE:78 String(v); JSE:92 | true |
| bot member table messages ("bot.getVar needs a key", "bot.setVar needs a key/a value", "bot.send needs a message", "bot.call needs a key", "bot.call needs a value for argument 1") | 222-227 | JSE:82-91 | true |
| getVar/setVar/send never make a failed call; empty text used as is | 217, 222-224 | JSE:426-460 no Fail path | true |
| Example: storage.set returns false when refused | 232-236 | JSE:208 `=== 'ok'`; HB:560-564 Fail(set) returns null | true |
| 200-key limit for new keys and the exact message | 240-241 | SRV CustomCode/ScriptStorageService.cs:64-76 (LIMIT_EXCEEDED, message verbatim); HE:39 message kept | true |
| Chat line sent in the channel's one bot voice | 241 | JSE:188 chat.send -> bot.call('chat.send'); posts as the bot | true |

## Links

All link targets are map rows: /reference/code/how-a-script-runs (map.md:124), /reference/code/sdk-chat-music-voice (126), /reference/code/sdk-data-and-storage (127), /reference/code/sdk-widgets-actions-templates (128). Anchors #one-rule-for-a-bad-value and #how-a-script-gets-its-grants match page headings.

## Conventions

- No people's names, no action keys shown as UI, no numbered levels, no license name, no "open source".
- No hosting, price or paid plan is mentioned, so no hosting marker is needed.
- American English throughout.
- NomNomzBot naming only; no NoMercyBot.
- Example script: statements end with semicolons, blank line between steps, no object with 3 or more entries, call nesting at most two deep.
- Labels "Features", "Custom Code", "Automation" equal the dashboard and server text.

## Notes

- None blocking.
