# Targeted editorial review: /reference/code/automation-api

Verdict: TARGETED AUTHOR SELF-REVIEW; not independent or exhaustive.
Reviewed-SHA256: e084b37a26fe589d4e28533fd52927f5d59863f66c24e36a08dd672e93fdd3bc
Reviewed-Date: 2026-11-06
Reviewer: parent editing agent

The full page was read. The additional pairing subsection distinguishes the five-minute dashboard code from device-init/poll, places the required operator-created code before the request, identifies every input and result field, and explains lost-code and concurrent-redemption limits. The unchanged REST/WebSocket sections retain their credential, error and lifecycle distinctions. Broader dashboard contracts remain outside this article. No live client walkthrough was performed.

## Earlier author review, before dashboard-code redemption

Verdict: TARGETED AUTHOR SELF-REVIEW; no independent or exhaustive PASS.
Reviewed: src/content/reference/en/code/automation-api.mdx
Reviewed-SHA256: 4107757e42237e6cac5dc28264ec7d473198c8bf98dbd007826ba673596f06ad
Reviewed-Date: 2026-11-06
Reviewer: editing agent (author self-review)

Read in full. The reference starts with purpose and credential prerequisites, then REST shapes and a replaceable pipeline example, followed by WS authentication/subscription and recovery limits. Error shapes and queue acceptance prevent false success assumptions. Pairing identifies sequential polling and lost-response recovery. Legacy pairing and dashboard contract coverage remain gaps.

Validation: the nine Code articles compile with @mdx-js/mdx and remark-gfm; all local route targets exist. Shared navigation and final type/build/render checks belong to the parent. [Exact coverage and limits](../ecosystem-validation/final-developer.md).
