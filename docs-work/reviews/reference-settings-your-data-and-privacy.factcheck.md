# Targeted final review — 2026-11-06

Verdict: PENDING
Reviewed: src/content/reference/en/settings/your-data-and-privacy.mdx
Reviewed-SHA: 25c9a9d842afa77bfbcb6ff1e9e746e0fda467b102f1dc73200c0e304a209097
Reviewed-SHA256: 25c9a9d842afa77bfbcb6ff1e9e746e0fda467b102f1dc73200c0e304a209097
Reviewer: final-features correction author; self-review, not independent PASS
Product-Revision: 2dfefbb0c393f439954d79b32ac11511678d7f44 plus working tree

The full article was read editorially. The correction was independently traced from the staged lead to current source, then applied by this reviewer. This is targeted author verification, not a new exhaustive source audit, independent final-text approval or runtime test. See [final-features.md](../ecosystem-validation/final-features.md) for exact source anchors, coverage and remaining limits.

## Historical reviews

The original records below are preserved verbatim and apply only to their recorded hashes.

# Independent source review: /reference/settings/your-data-and-privacy
Verdict: PASS
Reviewed: src/content/reference/en/settings/your-data-and-privacy.mdx
Reviewed-SHA: 6e5ded23cc40724f
Reviewed-SHA256: 6e5ded23cc40724facacc5d3b11e634d93016b2930d7b70c2b2801745b7b86d2
Reviewed-Date: 2026-11-05
Reviewer: independent reviewer, separate from article author
Product-Revision: 54da8b6318de63b5205a0ff8db35e0b9045dd959

The complete current article was read in navigation order and checked against current product source. Historical PASS entries below are leads, not approval of this revision. Atlas voice/template gates do not govern this review.

## Current evidence and result

No substantive finding. Caller identity, explicit export fields/no tokens, consent scope and irreversible erasure checked.

Source files opened in this review: Api/Controllers/V1/GdprController.cs:55-70,96-129,178-231; Identity/ErasureService.cs:699-826,935-985; dashboard/settings/your-data/YourDataView.vue:24-34.

Unqualified paths beginning Identity, CustomCode, Billing, EventStore, Engagement, Rewards, Widgets or Platform are under server/src/NomNomzBot.Infrastructure; Api and Domain identify their corresponding server projects. Dashboard shorthand is under dashboard/src/views/dashboard.

Verification is read-only source review. No bot/API startup, live account authorization, channel writes, C# host/Jint execution, Docker install or restore was performed. Documentation build/render QA belongs to the combined parent pass. The SDK reference and worked-example checks additionally ran the existing read-only nnz-code-doc-check.mjs with production JavaScript bootstrap and substituted host I/O.

## Historical review (superseded)

# Fact-check: /reference/settings/your-data-and-privacy
Historical verdict: PENDING

2026-11-04 overhaul: the article changed, so the previous PASS and hash below are historical evidence, not approval of the current revision.
Fresh writer source checks and article inventory are recorded under S8 in `docs-work/overhaul/settings-hosting-code.md`.
Independent review of the changed text is pending.
Reviewed: src/content/reference/en/settings/your-data-and-privacy.mdx
Reviewed-SHA: 373e2676c5fa9294

Re-review 2026-10-28 after the writer's edit. The whole page was read again. New claims:
- Line 25, two rows with their buttons (**Opt out**, **Erase my data**): true, D/components/ErasePanel.vue rows (optOut.title + optOut.action; erase.rowTitle + erase.action).
- Lines 69-71, a channel opt-out turns off only that channel's consents; other-channel and channel-free consents keep their switches: true, ErasureService.cs:935-944 filter `request.BroadcasterId == null || r.BroadcasterId == request.BroadcasterId` (a null-channel consent fails the match when a channel is set).

Paths: D = nomnomzbot/dashboard/src/views/dashboard/settings/your-data; S = nomnomzbot/server/src.

## Claims checked

| Page claim | Proof | Result |
| --- | --- | --- |
| Page label **Your data**, settings sidebar, group **Account** | dashboard/src/i18n/locales/en.json:907, :942; dashboard/src/layouts/dashboard/settingsNavigation.ts (settings.account group, entry dashboard-settings-your-data) | true |
| About you, not a channel; anyone signed in may open it | D/route.ts:20-22 (`open: true`); GdprController.cs:32 `[Authorize]` only | true |
| Each action works only on your own data | GdprController.cs:56-58 (caller from JWT sub), :65-69, :101-112, :124-128, :217-218 | true |
| Four panels in order Export, Consents, Requests, Erase | D/YourDataView.vue:29-32 | true |
| Panel titles and labels (Download your data, Your consents, Your requests, Erase your data, Download my data, Opt out, Erase my data, Erase all my data, Opt out of extra processing) | D/i18n/en.json | true |
| File name nomnomzbot-my-data-<date>.json | D/components/ExportPanel.vue `downloadText(\`nomnomzbot-my-data-${stamp}.json\`...)` | true |
| "Saved {rows} records, {size} bytes." | D/i18n/en.json export.result; ExportPanel.vue result block | true |
| Download shows as **Download my data** under requests | ErasureService.cs:716-725 (export row); en.json requests.type.export | true |
| Switch on while granted; Legal basis line | ConsentsPanel.vue `:model-value="record.status === 'granted'"`, basis key | true |
| Five consent labels | D/i18n/en.json consents.type | true |
| Withdraw keeps the row; can agree again; saves at once | GdprController.cs:205-208 NotDestructive text; ConsentsPanel.vue flip() on update, no Save button | true |
| Empty consent text | en.json consents.empty | true |
| Opt-out stops marketing, leaderboards, analytics; data stays; dialog texts; notice | en.json optOut.*; ErasePanel.vue confirmOptOut | true |
| Opt-out withdraws marketing and leaderboard_opt_in | ErasureService.cs:82-87, :931-955 | true |
| With a channel open: that channel only, scope **One channel** | GdprController.cs:125 (tenant BroadcasterId); ErasureService.cs:919, :940-943; en.json scope.channel | true |
| Erase: count first; failure = no dialog, red reason | ErasePanel.vue askErase() (catch sets failure, eraseOpen stays false), role=alert text-destructive | true |
| Dialog title, "The bot holds nothing to destroy.", zero counts hidden | ErasePanel.vue previewLines() filter rowCount > 0; en.json erase.* | true |
| Ten item labels | en.json erase.category (10 keys) | true |
| Ends every sign-in, destroys keys | ErasureService.cs:603-622 (refresh tokens and sessions revoked), :648-665 (DestroyKeyAsync per key) | true |
| Requests: date, scope, status; failure reason red | RequestsPanel.vue meta line, data-failure text-destructive, StatusBadge | true |
| Status Waiting, Done, Failed; scope Whole deployment, One channel | en.json requests.status, requests.scope | true |
| Retry on load failure | PanelCard.vue:58, :192-193 emits retry; ConsentsPanel/RequestsPanel `@retry` refetch | true |
| Dashboard erasure scope | yourData.ts:125-127 sends no body; GdprController.cs:110 default "deployment" | consistent (page does not claim otherwise) |

## Extra checks from the brief

1. ViewerData left out: confirmed. ViewerDataController.cs:33 is `viewers/{viewerId}/data`, a per-viewer key/value store. No dashboard code calls it: the only hit outside schema.d.ts is the route list in dashboard/src/__tests__/crudBaseline.ts:79. The `data-viewer-data` panel in dashboard/src/views/viewer/account/AccountView.vue:76-85 is only a link to this page, not a use of that store.
2. Status label defect: confirmed. ErasureService.cs:66-69 and :302, :319, :1159 write status "running". D/i18n/en.json labels only "in_progress" as "Running". RequestsPanel.vue word() falls back to the raw key, so a running request shows the lowercase text "running". The page lists only Waiting, Done and Failed, so it states no wrong label. Product defect to file separately.

## Conventions

- No source citation, action key, numbered level or license name on the page.
- No hosting mention, so no hosting marker is needed.
- Troubleshooting directive and Related pages are in the right shape.

## Style notes (not failures)

- Line 63 joins the dialog title and part of its description with a colon. Quoting the title alone, then "Nothing is deleted." as its own sentence, reads more clearly.
- The viewer Account page has a link to this page (AccountView.vue:76-85). The page could name it as a second way in.
- Once the "running" label defect is fixed in the product, add **Running** to the status table.
