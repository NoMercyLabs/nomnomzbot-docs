# Independent source review: /reference/settings/readability
Verdict: PASS
Reviewed: src/content/reference/en/settings/readability.mdx
Reviewed-SHA: bbbc6bd1bb025660
Reviewed-SHA256: bbbc6bd1bb025660e24a45dda90e132b2ba6d48fd07ec1620b01fc9a2dc5dd81
Reviewed-Date: 2026-11-05
Reviewer: independent reviewer, separate from article author
Product-Revision: 54da8b6318de63b5205a0ff8db35e0b9045dd959

The complete current article was read in navigation order and checked against current product source. Historical PASS entries below are leads, not approval of this revision. Atlas voice/template gates do not govern this review.

## Current evidence and result

No substantive finding. Presets, 12-20px range, immediate local persistence, density and motion behavior checked.

Source files opened in this review: dashboard/src/composables/useReadability.ts:37-78,110-160; dashboard/src/views/dashboard/settings/ReadabilityView.vue:40-118.

Unqualified paths beginning Identity, CustomCode, Billing, EventStore, Engagement, Rewards, Widgets or Platform are under server/src/NomNomzBot.Infrastructure; Api and Domain identify their corresponding server projects. Dashboard shorthand is under dashboard/src/views/dashboard.

Verification is read-only source review. No bot/API startup, live account authorization, channel writes, C# host/Jint execution, Docker install or restore was performed. Documentation build/render QA belongs to the combined parent pass. The SDK reference and worked-example checks additionally ran the existing read-only nnz-code-doc-check.mjs with production JavaScript bootstrap and substituted host I/O.

## Historical review (superseded)

# Fact-check: /reference/settings/readability
Historical verdict: PENDING

2026-11-04 overhaul: the article changed, so the previous PASS and hash below are historical evidence, not approval of the current revision.
Fresh writer source checks and article inventory are recorded under S4 in `docs-work/overhaul/settings-hosting-code.md`.
Independent review of the changed text is pending.
Reviewed: C:\Projects\NoMercyLabs\nomnomzbot-docs\src\content\reference\en\settings\readability.mdx
Reviewed-SHA: cac05e66c2a0ec79

Paths are in C:\Projects\NoMercyLabs\nomnomzbot\dashboard\src. This review re-read the whole current page.

## The earlier finding is fixed

- The page now lists three ways in, and each row is true.
- Account menu, anyone signed in, **Readability**: layouts/dashboard/ProfileMenu.vue:58,62,132-136; i18n/locales/en.json:978.
- Chat **Display** panel, **Change** next to **Font and readability**: views/dashboard/chat/components/ChatDisplayPanel.vue:158-166; chat/i18n/en.json:50,53,55. The panel toggle has no gate: views/dashboard/chat/ChatView.vue:426-432,576-577.
- Settings sidebar group **You**, only for people who may open **Settings**: layouts/dashboard/navigation.ts:283-290 (setup action); layouts/dashboard/settingsNavigation.ts:45-46; label i18n/locales/en.json:881,937.
- Line 7 now names the account menu, which everyone signed in can reach.

## Checked and true

| Claim | Source |
| --- | --- |
| Card title **Text and display** | views/dashboard/settings/i18n/en.json:130; ReadabilityView.vue:147 |
| Open to every signed-in person; not a channel setting | views/dashboard/settings/route.ts:50-55 (`open: true`, `userLevel: true`); router/guard.ts:36-39 |
| Saved in this browser (localStorage) | composables/useReadability.ts:17-18,36,126-133 |
| Applies at once | useReadability.ts:135-139 |
| Footer text | settings/i18n/en.json:132; ReadabilityView.vue:286-288 |
| No save button | ReadabilityView.vue:142-291 |
| **Start from a preset**; a preset sets all the options | settings/i18n/en.json:136; useReadability.ts:158-160 |
| No preset selected when nothing matches | useReadability.ts:141-155; ReadabilityView.vue:162-163 |
| Preset table values | useReadability.ts:40-70; settings/i18n/en.json:137-196 |
| Font choices; Legible is Atkinson Hyperlegible | settings/i18n/en.json:150-156; styles/readability.css:19,23 |
| Text size 12 to 20 px, step 1, default 14 px | useReadability.ts:37-38,42; ReadabilityView.vue:212-214; settings/i18n/en.json:157-161 |
| Line spacing, default **Normal** | settings/i18n/en.json:162-167; useReadability.ts:43 |
| Letter and word spacing, WCAG 1.4.12 | settings/i18n/en.json:168-173 |
| High contrast, default Off | settings/i18n/en.json:177-180; useReadability.ts:45 |
| Reduce motion, default Off (follows the system) | settings/i18n/en.json:185-188; useReadability.ts:46 |
| Size of controls, Touch 44 px, default **Compact** | settings/i18n/en.json:189-196; useReadability.ts:47; styles/tokens.css:179-192 |
| Group titles | settings/i18n/en.json:142,175,190 |
| "Default: Inter." under each option | settings/i18n/en.json:133; ReadabilityView.vue:78-112 |
| Chat has its own **Display** panel | settings/i18n/en.json:131; chat/i18n/en.json:50 |

## Conventions

- The page has no source citation.
- It has no action key and no numbered permission level.
- It names no license.
- The frontmatter is correct.

## Style notes (not a FAIL)

- Step 3 says "Leave the page.", and the footer text follows it. The footer shows while you are on the page, not when you leave it.
