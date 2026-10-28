# Fact check: src/content/reference/en/integrations/vtube-studio.mdx
Verdict: PASS
Reviewed: src/content/reference/en/integrations/vtube-studio.mdx
Reviewed-SHA: 9f1e295e02da8a43

Product repo: nomnomzbot master, read only. D = dashboard/src, VI = D/views/dashboard/vts, S = server/src. Every row below was re-read this run against the current page text; nothing is carried from the older verdict.

| Claim | Page line | Supported by | Status |
| --- | --- | --- | --- |
| Sidebar entry VTube Studio in the Live group | 6, 21 | D/layouts/dashboard/navigation.ts (group key `live`, entry route dashboard-vtube-studio, label vtubeStudio); D/i18n/locales/en.json:816 "VTube Studio" | true |
| Three tabs Connection, Hotkeys, Expressions | 8 | VI/VtsView.vue VIEWS = connection, hotkeys, expressions; VI/i18n/en.json:8-12 | true |
| Moderator or higher opens the page | 12 | VI/route.ts:19 meta action vts:config:read; S/NomNomzBot.Infrastructure/Content/Identity/ActionDefinitionSeeder.cs:384 M("vts:config:read", Mod) | true |
| Moderator or higher loads models, fires hotkeys, sets expressions | 13 | ActionDefinitionSeeder.cs:386 vts:control Mod; S/NomNomzBot.Api/Controllers/V1/VtsController.cs POST control RequireAction vts:control | true |
| Only Broadcaster changes link, authorizes, rotates token | 14 | ActionDefinitionSeeder.cs:385 vts:config:write Broadcaster; VtsController.cs PUT connection, POST connection/authorize, POST connection/rotate-bridge-token all RequireAction vts:config:write | true |
| Form shows but cannot be changed for others | 16 | VI/components/VtsConnectionPanel.vue fieldset :disabled="!can('vts:config:write')" | true |
| Load model, Trigger, Activate, Deactivate show only with control right | 17 | VI/components/VtsHotkeysPanel.vue:88,117 and VtsExpressionsPanel.vue:81,91 v-if can('vts:control') | true |
| Connection tab opens first | 22 | VI/VtsView.vue v-else renders VtsConnectionPanel; VIEWS[0] = connection | true |
| Labels Link to VTube Studio, Connection type, Direct, Bridge, Address, Save, Authorize | 23-28 | VI/i18n/en.json:27-33,50-51 | true |
| Address is one field; default ws://localhost:8001 | 24-25, 51 | VtsConnectionPanel.vue single Input v-model endpoint; S/NomNomzBot.Domain/Vts/Entities/VtsConnectionDefaults.cs:24 | true |
| Default connection type Direct | 24, 50 | VtsConnectionDefaults.cs:21 Mode = "direct" | true |
| Button shows Waiting for approval and the help text while waiting | 29 | VtsConnectionPanel.vue authorize.isPending branch; VI/i18n/en.json:52-53 exact text | true |
| Approval waits up to a minute; timeout ends it | 29, 111-113 | S/NomNomzBot.Infrastructure/Vts/Transport/VtsPluginAuthorizer.cs ApprovalTimeout CTS, VTS_TIMEOUT on expiry | true |
| Approval row shows "Approved. The bot keeps the key." | 31 | VtsConnectionPanel.vue tokenText from hasPluginToken; VI/i18n/en.json:24-25 | true |
| Status shown at top of page and beside VTube Studio row | 33 | VtsView.vue PageHeader #status data-vts-overall; VtsConnectionPanel.vue SummaryRow title connection.link = "VTube Studio" | true |
| Five status texts and dots (off gray, unauthorized/authorized warn, connected ok, error bad) | 35-41 | VI/vtsHealth.ts:22-36; VI/i18n/en.json:13-19 exact text | true |
| Other tabs work only when Connected | 40, 66 | vtsHealth.ts vtsReady requires isEnabled and status connected; VtsView.vue :offline="!ready"; en.json:7 offline text exact | true |
| Last connected shows how long ago | 43 | VtsConnectionPanel.vue v-if lastConnectedAt, DateTime variant relative | true |
| Link off refuses every action; default off | 49 | S/NomNomzBot.Infrastructure/Vts/Transport/VtsTransportRouter.cs VTS_DISABLED when !IsEnabled; VtsConnectionDefaults.cs:32 IsEnabled = false | true |
| Bridge reaches VTube Studio through a browser source in OBS | 50 | S/NomNomzBot.Infrastructure/Vts/Transport/BridgeVtsTransport.cs:20-22 (relay summary); router picks _bridge when Mode == "bridge" | true |
| Address starts ws:// or wss://; empty saves default | 51 | S/NomNomzBot.Application/Vts/Dtos/VtsConnectionDtos.cs RegularExpression "^wss?://[^\s]+$"; S/NomNomzBot.Infrastructure/Vts/VtsConnectionService.cs:67-69 IsNullOrWhiteSpace -> Defaults.Endpoint | true |
| Events to listen to: eleven names in this order, labels exact | 52-54 | S/NomNomzBot.Infrastructure/Vts/Transport/DirectVtsTransport.cs EventBits order; VI/i18n/en.json:38-48 | true |
| Default = first eight events; last three high volume, off by default | 52, 55 | VtsConnectionDefaults.cs:27 mask 0xFF (bits 0-7); DirectVtsTransport.cs comment bits 8+ high-volume; reader DirectVtsTransport.cs:346 MaskedEvents(config.EventSubscriptionsMask) | true |
| Load model / Trigger hotkey flow and labels | 59-63 | VtsHotkeysPanel.vue; VI/i18n/en.json:65-70 | true |
| Hotkey list = hotkeys of the loaded model | 65 | S/NomNomzBot.Application/Vts/Dtos/VtsControlDtos.cs:30-36 (inventory hotkeys of current model) | true |
| Expression pick, Activate, Deactivate | 70-72 | VtsExpressionsPanel.vue; VI/i18n/en.json:75-78 | true |
| Pipeline category VTube Studio | 76 | S/NomNomzBot.Infrastructure/Vts/PipelineActions/VtsActions.cs:37 pipeline.category.vts; server/i18n/strings/values/strings.xml:5672 | true |
| Six action names exact | 80-85 | strings.xml:5781-5786 | true |
| Load by model id; hotkey by id or name | 80-81 | strings.xml:5634, 5645 | true |
| Expression default on | 82 | VtsActions.cs GetBool(action, "active", defaultValue: true) | true |
| Move needs one of x/y/rotation/size; default time 0.3 s | 83 | VtsActions.cs time_seconds ?? 0.3; failure when all four null | true |
| Tint whole model or tagged parts; 0-255 per channel; default opacity 255 | 84 | VtsActions.cs Math.Clamp(...,0,255), a default 255, art_mesh_tag; strings.xml:5629-5630 | true |
| Raw request: any request type with data | 85 | VtsActions.cs vts_request; strings.xml:5641-5642 | true |
| Failure: step fails, reason in vts.last_error | 87 | VtsActions.cs Map(): sets ctx.Variables["vts.last_error"] and returns Failure | true (see Note 1) |
| Rotate bridge token button shows only in Bridge; dialog Rotate token; old credential stops at once | 92-94 | VtsConnectionPanel.vue v-if mode === 'bridge', ConfirmDialog; en.json:54-59; VtsConnectionService.cs RotateBridgeTokenAsync new Guid | true |
| Authorize error at once when link off or not saved | 102-103 | VtsPluginAuthorizer.cs VTS_DISABLED when row null or !IsEnabled | true |
| Authorize only with Direct | 104 | VtsPluginAuthorizer.cs VTS_WRONG_MODE when Mode != "direct" | true |
| Authorize fails when VTube Studio is not at Address | 105 | VtsPluginAuthorizer.cs connect to config.Endpoint, VTS_NOT_CONNECTED | true |
| Message "VTube Studio did not answer. Check the connection." on unreachable | 107-109 | VI/vtsToast.ts status 503 -> dashboard.vts.unavailable; en.json:6 exact | true |
| Links /reference/commands/pipelines and /reference/getting-started/dashboard-tour | 76, 119-120 | docs-work/map.md rows 69 and 63 | true |

## Conventions

- No people's names, no action keys, no numbered levels, no license name, no "open source": checked, none found.
- American English: "color", "gray"; no British spelling found.
- No hosting, price or paid plan mentioned, so no hosting marker is needed.
- NomNomzBot naming: no NoMercyBot spelling.
- No bot speech described; one-voice rule not engaged.
- Labels equal VI/i18n/en.json text.

## Notes (non-blocking)

1. Line 87: vts.last_error is set only for a failed VTube Studio request (VtsActions.cs Map()). A missing required field (TryRequire) or a move with none of x/y/rotation/size fails the step without setting vts.last_error. Consider "When VTube Studio refuses or does not answer, ..." for precision.
2. Line 26: "unless the streamer changed its address in VTube Studio" is a fact about VTube Studio itself (its port setting), not this code; it is consistent with the default endpoint.
