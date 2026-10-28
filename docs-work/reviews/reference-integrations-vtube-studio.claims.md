# Claims: /reference/integrations/vtube-studio

Product repo: nomnomzbot (master, read only). D = dashboard/src, S = server/src, VI = D/views/dashboard/vts.

| Claim | Page line | Proof | Verdict |
| --- | --- | --- | --- |
| Page **VTube Studio** in the sidebar, group **Live** | 6 | D/layouts/dashboard/navigation.ts:98,139-144 (group key live); D/i18n/locales/en.json:816,922 | true |
| Three tabs Connection, Hotkeys, Expressions | 8 | VI/VtsView.vue:26-29 (file lines); VI/i18n/en.json:8-12 | true |
| Moderator may open the page (vts:config:read) | 12 | VI/route.ts:19; S/NomNomzBot.Infrastructure/Content/Identity/ActionDefinitionSeeder.cs:384 | true |
| Moderator may control the model (vts:control) | 13 | ActionDefinitionSeeder.cs:386; S/NomNomzBot.Api/Controllers/V1/VtsController.cs:59-60 | true |
| Only Broadcaster changes link, authorizes, rotates (vts:config:write) | 14 | ActionDefinitionSeeder.cs:385; VtsController.cs:42-43,79-80,89-90 | true |
| Form disabled without write; control buttons hidden without vts:control | 16-17 | VI/components/VtsConnectionPanel.vue:137,168 (fieldset disabled, button row v-if); VtsHotkeysPanel.vue:77,106; VtsExpressionsPanel.vue:69,79 | true |
| Connection tab is the default view | 22 | VI/VtsView.vue:84-89 (v-else renders Connection) | true |
| Switch, Connection type Direct/Bridge, Address labels | 23-24 | VI/i18n/en.json:27-33 | true |
| Address is one field; default ws://localhost:8001 (localhost = same computer as the bot) | 24-26 | VI/components/VtsConnectionPanel.vue:152-155 (one Input); VI/i18n/en.json:33; S/NomNomzBot.Domain/Vts/Entities/VtsConnectionDefaults.cs:24; .claude/docs/design/spec/vtube-studio.md:4 (VTube Studio API default ws://localhost:8001) | true |
| Default mode direct, default address ws://localhost:8001 | 24,50-51 | VtsConnectionDefaults.cs:21,24 | true |
| Authorize needs link on and saved | 23-28,103 | S/NomNomzBot.Infrastructure/Vts/Transport/VtsPluginAuthorizer.cs:62-65 | true |
| Authorize refused unless mode is direct | 104 | VtsPluginAuthorizer.cs:67-70 (VTS_WRONG_MODE) | true |
| Waiting for approval button text and waiting help text | 29 | VtsConnectionPanel.vue:186-197; VI/i18n/en.json:52-53 | true |
| Approval waits 60 seconds | 29,111-113 | VtsPluginAuthorizer.cs:32,108,158-162 | true |
| After approval, Approval row shows "Approved. The bot keeps the key." | 31 | S/NomNomzBot.Infrastructure/Vts/VtsConnectionService.cs:123-128; VtsConnectionPanel.vue:70-76; en.json:24-25 | true |
| Status words and dots | 33-41 | VI/vtsHealth.ts:12-27; VI/i18n/en.json:13-19 | true |
| Other tabs work only when Connected | 40,66 | VI/vtsHealth.ts:30-32; VtsView.vue:70-83; en.json:7 | true |
| Last connected shows when set, relative time | 43 | VtsConnectionPanel.vue:117-124 | true |
| Link off refuses every VTS action; default off | 49 | S/NomNomzBot.Infrastructure/Vts/Transport/VtsTransportRouter.cs:24,60; VtsConnectionDefaults.cs:32 | true |
| Bridge goes through a browser source relay in OBS | 50 | S/NomNomzBot.Infrastructure/Vts/Transport/BridgeVtsTransport.cs:20-22 | true |
| Address must start ws:// or wss://; empty saves default | 51 | S/NomNomzBot.Application/Vts/Dtos/VtsConnectionDtos.cs:31-33; VtsConnectionService.cs:67-69 | true |
| Event list and labels; high-volume note | 52-55 | S/NomNomzBot.Infrastructure/Vts/Transport/DirectVtsTransport.cs:43-56; en.json:34-48 | true |
| Default mask = first eight events (0xFF) | 52,55 | VtsConnectionDefaults.cs:27; VtsConnectionService.cs:150-156 | true |
| Load model / Trigger hotkey flow | 59-63 | VtsHotkeysPanel.vue:36-48 (ModelLoadRequest, HotkeyTriggerRequest); en.json:62-71 | true |
| Hotkey list = hotkeys of the current model | 65 | S/NomNomzBot.Application/Vts/Dtos/VtsControlDtos.cs:30-36 | true |
| Activate/Deactivate expression | 70-72 | VtsExpressionsPanel.vue:32-41 (ExpressionActivationRequest, active); en.json:72-78 | true |
| Pipeline actions in category VTube Studio | 76 | S/NomNomzBot.Infrastructure/Vts/PipelineActions/VtsActions.cs:37; server/i18n/strings/values/strings.xml:5672 | true |
| Six action names | 80-85 | strings.xml:5781-5786; VtsActions.cs:107,138,169,211,274,332 | true |
| Hotkey by id or name; model by id | 80-81 | strings.xml:5634,5645 | true |
| Expression default active | 82 | VtsActions.cs:193 | true |
| Move needs one of x/y/rotation/size; default time 0.3 s | 83 | VtsActions.cs:254-262 | true |
| Tint 0-255 per channel, default opacity 255, art mesh tag optional | 84 | VtsActions.cs:313-318; strings.xml:5629-5633 | true |
| Raw request type with data | 85 | VtsActions.cs:332-346; strings.xml:5641-5642 | true |
| Failure sets vts.last_error and step fails | 87 | VtsActions.cs:95-101 | true |
| Rotate button shows only in Bridge; confirm dialog text | 92-94 | VtsConnectionPanel.vue:168-176,200-208; en.json:54-60; VtsConnectionService.cs:78-89 | true |
| 503 toast "VTube Studio did not answer" when not reachable | 107-109 | VI/vtsToast.ts:14-21; S/NomNomzBot.Api/Controllers/BaseController.cs:388 | true |
