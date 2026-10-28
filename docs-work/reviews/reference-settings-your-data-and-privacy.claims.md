# Claims: /reference/settings/your-data-and-privacy

Paths: D = nomnomzbot/dashboard/src/views/dashboard/settings/your-data; S = nomnomzbot/server/src.

| Claim | Source |
| --- | --- |
| Page label "Your data" | dashboard/src/i18n/locales/en.json:907; D/YourDataView.vue:25 |
| In settings sidebar, group "Account" | dashboard/src/layouts/dashboard/settingsNavigation.ts:91-96; en.json:942 |
| About you, not a channel; any signed-in person may open it | D/route.ts:21-22 |
| Acts only on your own data | S/NomNomzBot.Api/Controllers/V1/GdprController.cs:24-29, 56-58, 103-110, 162-164, 193-200 |
| Four panels in order Export, Consents, Requests, Erase | D/YourDataView.vue:29-32 |
| Panel titles and descriptions | D/i18n/en.json:5-7, 12-13, 26-27, 59-60 |
| Download button label "Download my data" | D/i18n/en.json:8; D/components/ExportPanel.vue:28-31 |
| File name nomnomzbot-my-data-<date>.json, JSON | D/components/ExportPanel.vue:24-26 |
| Result line "Saved {rows} records, {size} bytes." | D/i18n/en.json:9; ExportPanel.vue:34-39 |
| Export writes a request row of type export | S/NomNomzBot.Infrastructure/Identity/ErasureService.cs:716-725; en.json:33 |
| Consent row with switch, on while granted | D/components/ConsentsPanel.vue:44-52 |
| "Legal basis: {basis}" line | D/i18n/en.json:16; ConsentsPanel.vue:48 |
| Five consent labels | D/i18n/en.json:17-23 |
| Turning off withdraws; row stays; can grant again | D/i18n/en.json:13; GdprController.cs:205-208 |
| Saves on flip, no Save button | D/components/ConsentsPanel.vue:18-27, 52 |
| Empty text "You have not given any consent yet." | D/i18n/en.json:14 |
| Opt out stops marketing, leaderboards, analytics; data stays | D/i18n/en.json:50-56; GdprController.cs:117 |
| Opt-out dialog title, text, action, notice | D/i18n/en.json:52-56; D/components/ErasePanel.vue:56-61, 81-87 |
| Opt-out withdraws marketing and leaderboard_opt_in consents | ErasureService.cs:82-87, 931-955 |
| Opt-out with a channel open: scope channel | ErasureService.cs:915-920; GdprController.cs:125; en.json:40 |
| Erase panel rows: "Opt out of extra processing" with button "Opt out"; "Erase all my data" with button "Erase my data" | D/i18n/en.json:50,52,62,64; D/components/ErasePanel.vue:100-120 |
| Channel opt-out turns off only that channel's consent rows; other channels and platform-wide rows (no channel) stay; the list shows all of them | ErasureService.cs:935-944 (`request.BroadcasterId == null \|\| r.BroadcasterId == request.BroadcasterId`); GdprController.cs:168-182 (list with broadcasterId null) |
| Erasing cannot be undone; destroys data, ends sign-in | D/i18n/en.json:60-62, 65 |
| Count read before dialog; on failure no dialog, red reason | D/components/ErasePanel.vue:52-63, 128 |
| Dialog title "Erase all your data?", count lines "{count} {what}" | D/i18n/en.json:64, 67; ErasePanel.vue:38-50, 131-139 |
| Zero-count items hidden; "The bot holds nothing to destroy." | ErasePanel.vue:40-49; en.json:68 |
| Notice "Your erasure is requested. It shows under your requests." | D/i18n/en.json:69; ErasePanel.vue:65-73 |
| The ten item labels | D/i18n/en.json:71-80; ErasureService.cs:123-132, 202-211 |
| Erasure revokes sign-in tokens and sessions, destroys keys | ErasureService.cs:603-622, 648-665 |
| Requests list: date, scope, status; failure reason in red | D/components/RequestsPanel.vue:62-80 |
| Status labels Waiting, Done, Failed | D/i18n/en.json:43-46; RequestsPanel.vue:31-34 |
| Scope labels Whole deployment, One channel | D/i18n/en.json:38, 40 |
| Request type labels | D/i18n/en.json:32-35 |
| Empty text "You have not made a request yet."; load-failed texts with retry | D/i18n/en.json:15, 28-29; ConsentsPanel.vue:47-50; RequestsPanel.vue:51-54 |

Example values ("120 records, 48000 bytes", "3 sessions") are placeholders, not data.
