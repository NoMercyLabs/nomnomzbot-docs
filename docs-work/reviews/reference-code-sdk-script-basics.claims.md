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
| Unknown key stops the whole run before it starts; Custom Code off stops it only when the list has at least one key; an empty list still runs | How a script gets its grants; Turn on Custom Code | BRK:97-133 BuildGrantAsync loops over the declared keys only: unknown key BRK:108-112, feature check per key BRK:118-127; no keys -> Success BRK:132; sibling page step 5 | true |
| nnz.random.pick on an empty list stops the whole run with an error | Random | JSE:169 throws Error('nnz.random.pick needs a list with at least one item'); JSE:531-535 JavaScriptException -> Faulted, the run ends | true |
| A call to a key not on the list is not a failed call; it stops the whole run with the result Denied (Read why a bot call failed) | Read why a bot call failed | JSE:469-471 throws ScriptCapabilityDeniedException before any host call (no Fail, no lastError); JSE:509-512 outcome Denied | true |
| The bad-value rule covers bot calls (nnz.api and bot.call), not nnz helpers, an ungranted key or the Custom Code check | One rule for a bad value | nnz.api wrappers go through bot.call: JSE:186-258; helpers are pure JS JSE:97-182; deny JSE:469-471; feature gate BRK:118-127 | true |
| A call to an ungranted key stops the whole run with the result Denied (in The bot name and How a script gets its grants) | The bot name; How a script gets its grants | JSE:470-471 throws ScriptCapabilityDeniedException; JSE:509-512 outcome Denied, "Capability denied: <key>." | true |
| invalid_argument = the bot cannot use a value, for example text that is empty or only spaces; the script goes on | Read why a bot call failed (table, One rule bullet 3) | HB:482-488 ValidateMessage `IsNullOrWhiteSpace` -> Fail(InvalidArgument); HB:470-479 music.queue; HB:625-631 tts.speak; HB:545, HB:571, HB:585 storage; HB:1076-1080 tts.voice.set | true |
| An optional value left out or null is skipped; the call uses its normal behavior | One rule bullet 2 | JSE:71-72 comment "an optional one is skipped by the caller"; JSE:192 user.get, JSE:196 economy.balance, JSE:210 storage.list, JSE:217-222 tts.speak trailing args dropped or '', JSE:231 tts.getVoice, JSE:232 setVoice voiceId '', JSE:233-238 listVoices, JSE:242 stats.viewer | true |
| A value of another type is turned into text first (5 becomes "5") | One rule | JSE:78 need() returns String(v); JSE:92 bot.call maps args with String; JSE:196, 210, 231, 242 String(...) on optional args | true |
| A name that matches nothing is not_found; the script goes on | One rule bullet 4 | HB:461 economy no viewer -> Fail(NotFound); HB:658 tts.speak asUser; HB:1002 tts.voice.get; HB:1085 tts.voice.set | true |
| A call that breaks the rule is named on its page as an exception | One rule | tts.speakSequence sends null to the host instead of need(): JSE:227-228; documented on /reference/code/sdk-chat-music-voice | true |
| not_found = no viewer, widget or reward matches, or Twitch has no user with that login | Read why a bot call failed | HB:461 viewer, HB:766 widget, HB:839 reward, HB:343 "Twitch has no user '{login}'." | true |
| A required value left out or null stops the whole run, is not a failed call, error names call and value ("chat.send needs a message") | One rule bullet 1 | JSE:70-79 missing() and need() throw Error(call + ' needs ' + what); JSE:188 chat.send need('chat.send', 'a message', text) before bot.call('chat.send', ...), inside the nnz.api scope; JSE:531-535 JavaScriptException -> Faulted, the run ends | true |
| Non-literal action type fails save, quoted message | How a script gets its grants | JSE:303-310 (message at 307) | true |
| Grant key table | Grant keys | JSE:347-375 ApiMethodCapabilities (music.playNow -> actions.invoke:play_track_once at 357); BRK:38-89 catalog; BRK:91-101 actions.invoke:<type> | true |
| Failed call returns empty result; script continues; lastError has code and message | Read why a bot call failed | HB:167-172 Fail sets _lastError and returns the failure value; SRS:885-891 | true |
| Six codes and meanings | Read why a bot call failed | CustomCode/ScriptHostError.cs:46-53; refused example HB:771; not_found HB:281/766/839; limit_exceeded HB:331; upstream_failed HB:506; rate_limited mapped from RATE_LIMITED at ScriptHostError.cs:33 | true |
| Every call clears lastError first | Read why a bot call failed | HB:114-127 | true |
| storage.set returns boolean, false when refused | example | SRS storage.set doc ("Returns false when the write is refused"); JSE:208 | true |
| chat.send posts in the channel's one bot voice | example | SRS "Says a line in chat as the bot." (NnzApiChatNamespace) | true |
| A grant is the bot's permission for one kind of bot call | intro | JSE:469-471 each call key is checked against the granted set; BRK:38-89 one catalog entry per call kind | true |
| The calls are on three pages, the third is Widgets, actions and templates (widget.emit, actions.invoke, template.render) | Grant keys; Related pages | map row /reference/code/sdk-script-basics Links to; src/content/reference/en/code/sdk-widgets-actions-templates.mdx:2-3 title and description | true |
| The rule covers every nnz.api call and every member of bot; helpers, ungranted key and Custom Code check are excluded | One rule for a bad value | JSE:80-94 bot members use need(); JSE:186-258 nnz.api wrappers use need(); helpers JSE:97-182; deny JSE:469-471; gate BRK:118-127 | true |
| bot.getVar/setVar/send with a left-out or null value stop the run with "bot.getVar needs a key", "bot.setVar needs a key"/"a value", "bot.send needs a message" | One rule for a bad value (bot table) | JSE:76-79 need() throws Error(call + ' needs ' + what); JSE:82-84; JSE:531-535 JavaScriptException -> Faulted | true |
| bot.call left-out key: "bot.call needs a key"; left-out argument: "bot.call needs a value for argument N" | bot table | JSE:86-91 | true |
| Empty text in getVar/setVar/send is used as it is; these three never make a failed call (the invalid_argument and not_found rows do not apply); a bot.call the host fails is a failed call | bot table and the sentences above it | HB:167-172 Fail is reached only through __call (JSE:462-475);  JSE:426-435 __getVar dictionary lookup, __setVar stores v; JSE:450-460 __send appends; none calls Fail | true |
| An empty bot.call argument goes to the call, which can fail it with invalid_argument | bot table | JSE:92 args passed as text; HB:151 ValidateMessage, HB:482-488 IsNullOrWhiteSpace -> InvalidArgument | true |
| bot.stopPipeline takes no value; bot.args is a list | bot table | JSE:81, JSE:85 | true |
| storage.set refuses a new key when the channel holds 200 script keys; lastError message "Storage is full: this channel already holds 200 script keys." | example | ScriptStorageService.cs:64-76; IScriptStorageService.cs:32 (Application project) MaxKeysPerChannel = 200; HB:560-564 Fail(set); ScriptHostError.cs:27-38 message kept | true |
| On success the example posts nothing | example | the example only calls chat.send inside `if (!saved)`; HB:564 returns "ok" -> JSE:208 true | true |
