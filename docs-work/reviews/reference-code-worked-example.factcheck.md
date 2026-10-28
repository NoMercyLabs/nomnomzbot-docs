# Fact check: src/content/reference/en/code/worked-example.mdx
Verdict: PASS
Reviewed: C:\Projects\NoMercyLabs\nomnomzbot-docs\src\content\reference\en\code\worked-example.mdx
Reviewed-SHA: 81c21ce8f77a61f3

Fresh review of the text edited after the reader FAIL. The older verdict was not carried forward.
Product repo: C:\Projects\NoMercyLabs\nomnomzbot (master, read only). Paths below are under server/src unless marked.

| Claim | Page line | Supported by | Status |
| --- | --- | --- | --- |
| `storage.get(key)` returns stored text or null | 25, 39 | Infrastructure/CustomCode/Jint/JintScriptExecutor.cs:207; ScriptHostBridge.cs:538-547; ScriptStorageService.cs:32 (`Task<string?>`) | true |
| `storage.set` returns true when stored, false when refused | 28, 41 | JintScriptExecutor.cs:208 (`=== 'ok'`); ScriptHostBridge.cs:564 (`"ok"` or `Fail(set)` = null) | true |
| `nnz.lastError.message` reads the reason | 31 | JintScriptExecutor.cs:96; ScriptHostError.cs:24 (`{code, message}`) | true |
| `chat.reply` answers as a threaded reply | 42, 106 | ScriptHostBridge.cs:519-524 (`SendReplyAsync` with `replyTo.MessageId`) | true |
| Refused thread falls back to a mention | 107 | ScriptHostBridge.cs:526-535 (`ReplyOrMentionComposer`) | true |
| Lead: failed call gives empty result, lastError says why, script goes on | 117-118 | ScriptHostBridge.cs:167-172 (`Fail` sets `_lastError`, returns value, no throw); 124-128 (cleared each call) | true |
| Lead: required value left out or null stops the whole run | 119 | JintScriptExecutor.cs:76-79 (`need` throws `Error`) | true |
| Row 1: store full or value too long -> `storage.set` gives false, script goes on | 123 | ScriptStorageService.cs:72-74 (full), 142-144 (value bytes); ScriptHostBridge.cs:564, 574-578 | true |
| Row 2: reply not reaching chat -> `upstream_failed`, script goes on | 124 | ScriptHostBridge.cs:505-506, 535; ScriptHostError.cs:53 | true |
| Row 3: empty text -> `invalid_argument`, script goes on | 125 | ScriptHostBridge.cs:482-488 (`needs a non-empty message`, no throw) | true |
| Row 4: missing/null value stops the run, error "chat.reply needs a message" | 126 | JintScriptExecutor.cs:77, 189 (`need('chat.reply', 'a message', text)`) | true |
| Test run is a dry run: read real, store and reply only recorded | 69-72 | Infrastructure/CustomCode/CaptureScriptHostBridge.cs:20-26, 42-45, 76-84 | true |
| Three grants: storage.get, storage.set, chat.reply | 60 | ScriptCapabilityBroker.cs:53-54; JintScriptExecutor.cs:360-361 | true |
| Default failure notice "Sorry, that command hit a snag and didn't finish." | 111 | Application/Commands/Builtin/Personality/ToneTemplateCatalog.Core.cs:307 (informative); Domain/Identity/Enums/PersonalityTone.cs:43 (Default = Informative) | true |
| One bot voice for the reply | 106 | ScriptHostBridge.cs:519-534 (bot chat provider, broadcaster channel) | true |
| Label **Scripts** page labels: New script, Name, Create script, Edit code, Test, Trigger, No event, Run test, Worked, Timeline, Started, Effect, Chat, Last run failed | 50-112 | dashboard/src/views/dashboard/scripts/i18n/en.json (each string found, grep count >= 1) | true |
| Label **Save & Compile** | 56 | dashboard/src/i18n/locales/en.json:1199 | true |
| Labels New command, What it does, Runs a code script, Script, Create command | 84-88 | dashboard/src/views/dashboard/commands/i18n/en.json:6, 119, 123, 61, 126 | true |

## Script checks

- Statements end with semicolons; blank lines separate steps; no object literals; calls nest at most two deep.
- No `...` elision in the script.

## Conventions

- No people's names, no action keys, no numbered levels, no license name, no NoMercyBot spelling, no hosting or price mention.
- American English throughout.
- Links: /reference/code/scripts, sdk-chat-music-voice, sdk-data-and-storage, sdk-script-basics; each is a row of docs-work/map.md (grep counts 3, 4, 3, 5).
