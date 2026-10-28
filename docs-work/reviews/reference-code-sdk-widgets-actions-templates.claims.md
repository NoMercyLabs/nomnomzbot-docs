# Claims: /reference/code/sdk-widgets-actions-templates

Product repo: C:\Projects\NoMercyLabs\nomnomzbot (master, read only).
Abbreviations: D = dashboard/src/api/nnz-widget.d.ts; O = server/src/NomNomzBot.Api/Controllers/OverlaySdkController.cs; J = server/src/NomNomzBot.Infrastructure/CustomCode/Jint/JintScriptExecutor.cs; B = server/src/NomNomzBot.Infrastructure/CustomCode/ScriptHostBridge.cs; A = server/src/NomNomzBot.Infrastructure/CustomCode/ScriptActionInvoker.cs; T = TemplateRenderInput.cs (server/src).

| Claim | Page section | Proof | Verdict |
| --- | --- | --- | --- |
| A widget uses `NomNomz`; a script uses `nnz` | intro | D:2156 `declare const NomNomz`; J:173-177 `template`, `api` under nnz | true |
| Custom Code is off for a new channel and gates script calls; how to switch on lives on Script basics | Before you start | B: `widget.emit` capability uses FeatureGate, ScriptCapabilityBroker.cs:62; switch steps owned by sdk-script-basics | true |
| SDK loaded before widget code; registrations return the SDK so calls chain | The widget SDK | D:2039-2044 doc comment; O:91-108 `return api` | true |
| on/off/onAny/onSettings handler shapes | table | D:2058-2066; O:91-108 (onAny run(fn, eventType, data, meta)) | true |
| onSettings fires at once, then on every dashboard change | table | D:2065; O:106-108 | true |
| settings, widget.id, widget.name | table | D:2077, 2085, 2125-2128; O:582-586 | true |
| reportError logs and reports a widget runtime error | table | D:2067 | true |
| actions.invoke, actions.claim, data.*, template.render, spotify.playbackToken, reportYouTubePlayerState, reportMediaSharePlayerState | table | D:2068-2084, 2098-2133; O:560-588 | true |
| Widget gets only events it registered; onAny registers every event | The widget SDK | O:45-46 comment, O:91-104 `want(type)` / `want("*")`, O:111-130 sendSubscribe | true |
| meta replay / occurredAt / test meanings | Live events and replays | D:2047-2055; O:137-151, O:430 | true |
| Late handler still gets remembered events | Live events | O:89-95 replaySeed in on() | true |
| claim: true for first copy, ten minutes, false for others, rejects offline / empty or >200 chars | Claim an event | D:2134-2141 | true |
| data calls reject when request fails; streamStats stream/metrics, latest when left out | Read the channel's state | D:2097-2107, 1098-1103 | true |
| playbackToken never rejects; blocked / error; ask again | Read the channel's state | D:2110-2113 | true |
| Event names and payload fields (every row) | Widget events | D:1911-1972 event map; payload interfaces D:82,94,102,113,125,138,150,188,204,235,239,246,253,264,274,284,292,300,307,315,323,330,336,345,362,371,377,388,393,406,421,438,449,457,463,467,472,477,485,494,503,510,516,532,539,549,564,570,579,588,603,610,618 (fields extracted by script from each interface) | true |
| `?` means the field can be absent | Widget events | D: TypeScript optional members, e.g. D:24 `colorHex?` | true |
| `custom.<source>` carries `fields`, every value as text | Widget events | D:623-626, D:2036, D:2059 | true |
| Widget example: on, meta.test, template.render | example | D:2058, 2053, 2119 | true |
| Widget actions.invoke runs as the channel owner within owner's permissions; params optional for actions with no required field | From a widget | D:2129-2133, D:1906-1908 | true |
| invoke resolves also on refusal/failure, rejects only offline | From a widget | D:2130; O:43-44 | true |
| Result fields success/output/error/errorCode/variables | From a widget | D:2144-2154 | true |
| Refusal codes AUTH_REQUIRED, FORBIDDEN (other channel or widget off), NOT_FOUND, VALIDATION_FAILED, RATE_LIMITED; unknown = refusal | From a widget | D:2148-2150 | true |
| Script nnz.api.actions.invoke; grant actions.invoke:<type>; literal type | From a script | J:177-185, J:337-340, J:394, J:307 | true |
| Script result has success, output, error, variables | From a script | A:119-133 ResultJson | true |
| Failure: script goes on, lastError says why; params/variables must be objects | From a script | A:36-46, A:79-89; B:189-200 `_lastError = error` | true |
| Script example tts_synthesize text | From a script | D:1848 `tts_synthesize` text required | true |
| Action types and parameters, bold = required (every row) | Action parameters | D:1491-1904, required = member without `?` | true |
| Pipelines run the same action types | Run a pipeline action | D:1490 "The parameters of every pipeline action, keyed by action type" | true |
| widget.emit(widgetIdOrName, eventType, data) sends to one widget of the channel; data optional | Send a widget an event | J:246-251; B:797-818 SendWidgetEventAsync(broadcasterId, widget.Id, args[1], data) | true |
| Widget receives it by that event name | Send a widget an event | B:807 eventType = args[1]; O:424-430 emit(e.eventType, ...) | true |
| Returns true when sent, false otherwise; lastError | Send a widget an event | J:250 `r === 'ok'`; B:804, 818 | true |
| Error codes invalid_argument / not_found / refused (off, no browser source) / upstream_failed | Send a widget an event | B:748-792, B:812-816 | true |
| Widget name lookup | example | B:1237-1262 id or case-insensitive name | true |
| Template helpers in braces {name} / {name:argument}; list lives on Variables and templates | Render a template | D:1106-1107, D:2117-2118 | true |
| Widget render gives a promise of text; script render gives text | Render a template | D:2119; O:555-560; J:174 | true |
| values: text, number, true/false | Render a template | D:2119; T:56 | true |
| At most 4096 characters; empty refused | Render a template | T:24, T:31-38 | true |
| Widget promise rejects; script gives empty text, lastError | Render a template | D:2118; B:950-962 Fail(..., "") | true |
| Script replies post in the channel's one bot voice | examples | nnz.api.chat.send path, as sdk-script-basics | true |
