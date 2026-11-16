# Targeted source review: /reference/code/automation-api

Verdict: TARGETED AUTHOR SELF-REVIEW; not independent or exhaustive.
Reviewed-SHA256: e084b37a26fe589d4e28533fd52927f5d59863f66c24e36a08dd672e93fdd3bc
Reviewed-Date: 2026-11-06
Reviewer: parent editing agent

The preceding contract was read in full. Added dashboard-code redemption after reading `AutomationDataController.cs:47-64`, `AutomationPairingDtos.cs:18-68` and `AutomationPairingService.cs:30-202`. The code expires in five minutes; DTO lengths, rate buckets, code normalization, returned fields and remove-before-mint failure behavior match those paths. Separate cache read/remove does not prove atomic consumption. No pairing or concurrent-request runtime test was performed. The new full build is recorded in the final-pass report.

## Earlier author review, before dashboard-code redemption

Verdict: TARGETED AUTHOR SELF-REVIEW; no independent or exhaustive PASS.
Reviewed: src/content/reference/en/code/automation-api.mdx
Reviewed-SHA256: 4107757e42237e6cac5dc28264ec7d473198c8bf98dbd007826ba673596f06ad
Reviewed-Date: 2026-11-06
Reviewer: editing agent (author self-review)

The 15 authenticated data routes, device-init/poll, target DTOs, empty allowlist semantics, scope/rate gates, queue acceptance, WS auth/operations/errors, 9 event projections, expiry/refresh and pairing consumption were checked against current source. The WS principal lifetime limitation is documented. Exact files and anchors are in final-developer.md. No live service, concurrency test, provider test or exhaustive security audit.

Validation: the nine Code articles compile with @mdx-js/mdx and remark-gfm; all local route targets exist. Shared navigation and final type/build/render checks belong to the parent. [Exact coverage and limits](../ecosystem-validation/final-developer.md).
