# Claims: /reference/code/sdk-script-basics

Product repo: C:\Projects\NoMercyLabs\nomnomzbot (master, read only). Paths below are under `server/src/NomNomzBot.Infrastructure/`.
SRS = DevPlatform/SdkRuntimeSurface.cs; JSE = CustomCode/Jint/JintScriptExecutor.cs; BRK = CustomCode/ScriptCapabilityBroker.cs; HB = CustomCode/ScriptHostBridge.cs.

| Claim | Page section | Proof | Verdict |
| --- | --- | --- | --- |
| A script has the globals `bot` and `nnz` | intro | SRS:223-252 ScriptGlobals; JSE:69 `var bot, nnz;` | true |
| Custom Code gates every grant; off means a script with a bot call does not run | Turn on Custom Code | BRK:35 FeatureGate "custom_code", BRK:118-127 "Capability is not enabled" fails the whole grant | true |
| Features / Custom Code / Automation steps, takes effect at once | Turn on Custom Code | same steps and labels as the sibling page /reference/code/how-a-script-runs (its claims file); BRK:27-30 summary names the per-channel toggle | true |
| bot.args string[], getVar string or null, setVar text, send, stopPipeline, call(key, ...args) string or null | The bot name | SRS:541-574; JSE:80-94 | true |
| bot.call is the bridge every nnz.api call goes through; an ungranted key is denied | The bot name | SRS:571-573; JSE:186-258 wrappers call bot.call; JSE:469-471 deny | true |
| console.log/info one line; warn "warn:", error "error:"; viewers never see them | The bot name | SRS:576-585; JSE:62-67 | true |
| Helpers make no bot call | Helpers that need no grant | JSE:97-182 pure JS (no __call), except template.render (listed separately) | true |
| units.convert, example km to mi, NaN on mismatch; length, weight, time, temperature | Units | SRS:597-600; JSE:98-122 (temp table, three dims tables) | true |
| time now/parse/format/add/diff semantics | Time | SRS:603-626; JSE:124-128 | true |
| sleep at most 5 seconds, counts against run time | Time | SRS:627-632 "Blocks up to 5000ms (clamped)... Counts against the run's own wall-clock budget" | true |
| math clamp/round (default 0)/lerp/sum/avg (0 empty)/min/max/randomInt | Math | SRS:636-658; JSE:140-147 | true |
| str padStart/padEnd (default space), trim, upper, lower, title, truncate (default ellipsis char), slugify example, format keeps unknown names | Text | SRS:662-688; JSE:150-158 (`'…'`) | true |
| json.parse null on invalid, stringify 'null', never throw | JSON | SRS:690-698 "JSON helpers that never throw" (SRS:246); JSE:160-165 | true |
| random int/pick (empty list errors)/shuffle copy/uuid v4 | Random | SRS:715-724; JSE:167-170 | true |
| nnz.lastError: last failed call or null; reading needs no grant and is no bot call | Last error | SRS:234-235; JSE:96, JSE:469-472 | true |
| Grants come from a save-time scan of the code, kept with the version | How a script gets its grants | JSE:315, JSE:377-394; CustomCode/CodeScriptService.cs:620-621 | true |
| nnz.api calls, bot.call('key'), nnz.template.render, actions.invoke('type') each add a key | How a script gets its grants | JSE:322 HostCallPattern, JSE:330 ApiCallPattern, JSE:335/390-391 template.render, JSE:340-343/392-394 actions.invoke | true |
| Unknown key or Custom Code off stops the whole run before it starts | How a script gets its grants | BRK:96-131 (any failure fails the grant); sibling page step 5 | true |
| Undeclared key denied while running | How a script gets its grants | JSE:469-471 | true |
| Non-literal action type fails save, quoted message | How a script gets its grants | JSE:303-310 (message at 307) | true |
| Grant key table | Grant keys | JSE:347-375 ApiMethodCapabilities (music.playNow -> actions.invoke:play_track_once at 357); BRK:38-89 catalog; BRK:91-101 actions.invoke:<type> | true |
| Failed call returns empty result; script continues; lastError has code and message | Read why a bot call failed | HB:167-172 Fail sets _lastError and returns the failure value; SRS:885-891 | true |
| Six codes and meanings | Read why a bot call failed | CustomCode/ScriptHostError.cs:46-53; refused example HB:771; not_found HB:281/766/839; limit_exceeded HB:331; upstream_failed HB:506; rate_limited mapped from RATE_LIMITED at ScriptHostError.cs:33 | true |
| Every call clears lastError first | Read why a bot call failed | HB:114-127 | true |
| storage.set returns boolean, false when refused | example | SRS storage.set doc ("Returns false when the write is refused"); JSE:208 | true |
| chat.send posts in the channel's one bot voice | example | SRS "Says a line in chat as the bot." (NnzApiChatNamespace) | true |
