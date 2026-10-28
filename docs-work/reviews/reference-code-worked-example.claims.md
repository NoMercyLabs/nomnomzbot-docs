# Claims: /reference/code/worked-example

Product repo: NomNomzBot master, read only. Server paths are relative to `server/src/NomNomzBot.Infrastructure/`.
J = `CustomCode/Jint/JintScriptExecutor.cs`. B = `CustomCode/ScriptHostBridge.cs`. R = `CustomCode/ScriptRunner.cs`.
CB = `CustomCode/CaptureScriptHostBridge.cs`. CM = `Chat/EventHandlers/ChatMessageHandler.cs`.
D = `server/src/NomNomzBot.Infrastructure/DevPlatform/SdkRuntimeSurface.cs` (generated SDK declarations).
SE = `dashboard/src/views/dashboard/scripts/i18n/en.json`. CE = `dashboard/src/views/dashboard/commands/i18n/en.json`.

| Claim | Page section | Proof | Verdict |
| --- | --- | --- | --- |
| Custom Code is off for a new channel | Before you start | `Platform/FeatureService.cs`:51-55 (custom_code, default false) | true |
| storage.get(key) gives the stored text or null | The script | D:790 `get(key: string): string \| null`; J:207; B:538-547; `CustomCode/ScriptStorageService.cs`:41-45 (`row?.Value`) | true |
| storage.set takes a text value, gives true when stored, false when refused | The script | D:794 `set(key: string, value: string): boolean`; J:208 (`=== 'ok'`); B:549-565 | true |
| chat.reply answers the triggering message as a threaded reply; mention fallback when the thread is refused | The script, Follow one run 7 | D:760; J:189; B:508-535 (SendReplyAsync, then ReplyOrMentionComposer) | true |
| Storage belongs to the channel (one count for every viewer) | The script | ScriptStorageService.cs:41-44 (keyed by broadcasterId and key only) | true |
| A refused store does not stop the script; lastError says why | The script, When a call fails | B:555-565 Fail(...) returns failure value; J:96 lastError getter | true |
| Labels New script, Name, Create script, Edit code, Save & Compile | 1. Create | SE:176-180, SE:119; `dashboard/src/i18n/locales/en.json`:1199 | true |
| Save builds and saves the next version | 1. Create | `CustomCode/CodeScriptService.cs`:620-621 (stores compiled DeclaredCapabilities with the version) | true |
| Grants are read from the calls the code names; this script gets storage.get, storage.set, chat.reply | 1. Create | J:315, J:351-361 (call-to-grant map), J:377 DeclaredCapabilities; `CustomCode/ScriptCapabilityBroker.cs`:47, 53-54 | true |
| Test card, Trigger, No event, Run test, Worked with ms, dry-run note | 2. Test run | SE:126-135 | true |
| In a test, reads run for real, storage.set and chat.reply are recorded only | 2. Test run | CB:37-46 (canned returns for chat.send, chat.reply, storage.set), CB:75-83 (read capability runs for real), CB:98-101 (record) | true |
| Timeline kinds Started, Effect, Chat; effect row holds name and args | 2. Test run | SE:136-142; `TestRun/CaptureSink.cs`:44, 57 | true |
| Command labels New command, Name, What it does, Runs a code script, Script, Create command | 3. Run from chat | CE:6, 61, 114-126 | true |
| A new command is switched on | 3. Run from chat | pilot page create-a-command step 5 (reviewed) | true |
| A code command runs its script directly, no pipeline | Follow one run 1 | CM:476-490 | true |
| The chat message id is kept as reply target | Follow one run 2 | CM:1020-1028; `CustomCode/ScriptInvocationFactory.cs`:32-47 | true |
| Checks: exists, switched on, script time left, valid version | Follow one run 3 | R:44-77 | true |
| Grants of the version checked, run denied otherwise | Follow one run 4 | R:93-115 | true |
| Run time saved on the script; error saved as last error | Follow one run 8 | R:135-138 | true |
| Run that is not a success sends one failure notice, default text | Follow one run | CM:1035-1038, CM:1052-1060 | true |
| Last run failed shown on Scripts | Follow one run | reviewed page /reference/code/scripts (Read a script table) | true |
| These calls follow the Script basics rule "One rule for a bad value" (same wording) | When a call fails | `nomnomzbot-docs/src/content/reference/en/code/sdk-script-basics.mdx`:184-192; same proofs as the three rows below | true |
| Reply not reaching chat is a failed call with upstream_failed; script goes on | When a call fails | B:503-506 FailNotSent (returns failure value, no throw) | true |
| A required value left out or null is not a failed call; it stops the whole run, the error names the call and the value | When a call fails | J:73-79 missing/need throws; J:189 'chat.reply', 'a message' | true |
| A value the bot cannot use (empty text) is a failed call with invalid_argument, script goes on | When a call fails | B:482-488 ValidateMessage; B:567-579 ValidateStorageSet | true |
| Store full or value too long refused | When a call fails | ScriptStorageService.cs:72-75 (key cap), 137-145 (value bytes) | true |
| Bot posts in the channel's one bot voice | Follow one run 7 | B:490-500 chatProvider.SendMessageAsync(broadcasterId, ...) (the channel's bot sender) | true |
