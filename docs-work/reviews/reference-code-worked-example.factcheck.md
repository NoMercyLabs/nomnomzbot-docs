# Current targeted source review — 2026-11-06

Verdict: TARGETED AUTHOR SELF-REVIEW; no independent or exhaustive PASS.
Reviewed: src/content/reference/en/code/worked-example.mdx
Reviewed-SHA256: 55f87fc8432a2c55922ed79210cd65e3d89df3d55e3de85ee5bcd4511a69ddc4
Reviewer: editing agent (author self-review)

Full editorial read; removed blanket Draft. Direct source: Infrastructure/CustomCode/ScriptStorageService.cs:31-166 and Jint/JintScriptExecutor.cs bootstrap for storage/chat wrappers. Counter remains explicitly non-atomic. Live chat and full command creation flow were not executed.

Coverage details and final static-check results: [final-developer.md](../ecosystem-validation/final-developer.md). Full reading is distinct from focused source verification. No live application/provider test or whole-project build in this batch.

## Historical records below — verdicts and hashes preserved

# Independent source review: /reference/code/worked-example
Verdict: PASS
Reviewed: src/content/reference/en/code/worked-example.mdx
Reviewed-SHA: 594291d55fc9c7da
Reviewed-SHA256: 594291d55fc9c7da17652ddd917a23ce0a471db0755a8571ab4c1d8671839261
Reviewed-Date: 2026-11-05
Reviewer: independent reviewer, separate from article author
Product-Revision: 54da8b6318de63b5205a0ff8db35e0b9045dd959

The complete current article was read in navigation order and checked against current product source. Historical PASS entries below are leads, not approval of this revision. Atlas voice/template gates do not govern this review.

## Current evidence and result

No substantive finding. Three bootstrap executions (first count, stored count, refused write) produce expected replies; real C# host/Jint not run.

Source files opened in this review: CustomCode/CodeScriptService.cs:188-212; ScriptRunner.cs:45-180; CaptureScriptHostBridge.cs:37-92; ScriptHostBridge.cs:500-548,553-625; ScriptStorageService.cs:32-154; production bootstrap example check.

Unqualified paths beginning Identity, CustomCode, Billing, EventStore, Engagement, Rewards, Widgets or Platform are under server/src/NomNomzBot.Infrastructure; Api and Domain identify their corresponding server projects. Dashboard shorthand is under dashboard/src/views/dashboard.

Verification is read-only source review. No bot/API startup, live account authorization, channel writes, C# host/Jint execution, Docker install or restore was performed. Documentation build/render QA belongs to the combined parent pass. The SDK reference and worked-example checks additionally ran the existing read-only nnz-code-doc-check.mjs with production JavaScript bootstrap and substituted host I/O.

## Historical review (superseded)

# Fact check: src/content/reference/en/code/worked-example.mdx
Historical verdict: PENDING

2026-11-04 overhaul: the article changed, so the previous PASS and hash below are historical evidence, not approval of the current revision.
Fresh writer source checks and article inventory are recorded under C1/C3/C4 in `docs-work/overhaul/settings-hosting-code.md`.
Independent review of the changed text is pending.
Reviewed: C:\Projects\NoMercyLabs\nomnomzbot-docs\src\content\reference\en\code\worked-example.mdx
Reviewed-SHA: 4784df9f0857d816

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
