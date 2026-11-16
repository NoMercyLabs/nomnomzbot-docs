# Current independent reader review

Verdict: PASS
Reviewed: src/content/reference/en/integrations/spotify.mdx
Reviewed-SHA: 6baffbcd331924968f8cf0f9703b87480108829a2e8d79be7a7d521cad3257c5
Reviewed-SHA256: 6baffbcd331924968f8cf0f9703b87480108829a2e8d79be7a7d521cad3257c5
Reviewed-Date: 2026-11-05
Reviewer: independent media-section reviewer
Product: 54da8b6318de63b5205a0ff8db35e0b9045dd959 plus preserved current music UI edits

Account versus app is explained before personal app setup, allowing the shared-app path to stay simple. The first-device check separates account connection from audio capture. It preserves exact callback/scopes/secrets and truthfully explains why normal Reconnect cannot add the missing streaming grant.

The full page was read with adjacent navigation and related links. The owner's natural explanatory style governs: no Atlas sentence caps, pilot imitation or rigid article template was imposed. No substantive reader finding remains at this hash. Combined build, rendered-output and link/frontmatter checks belong to the lead's separate validation.

Report: docs-work/overhaul/review-automation-media-integrations.md.

## Historical evidence

Older hashes and verdicts below are retained for history and are not the current review.

# Reader review: src/content/reference/en/integrations/spotify.mdx
Verdict: PASS
Reviewed: src/content/reference/en/integrations/spotify.mdx
Reviewed-SHA: a3deb528dc6c017e

Round 2. Read as rendered, all 117 lines. The round 1 blocking findings are cleared:
- Moderator path: lines 17-19 now say a moderator, lead moderator or editor opens the page from a direct link.
- Developer site: lines 22-34 now name `https://developer.spotify.com/dashboard`, give the redirect address as a numbered step, and say where the Client ID and Client secret come from.

Findings (none blocking):
- [19] The direct link path `/settings/integrations` is not checked against the dashboard route. The `/app/u/<channel>` form matches `src/content/reference/en/templates/bot.mdx:17`. Not checked: the last segment.
- [28] Step 2 says "Add this redirect address to the app" without naming the Spotify form field (Redirect URIs). A non-coder can likely find it, so this is a note only.
- [51] "The secret is stored encrypted, and the dashboard never shows it again." has two ideas. Minor.
- [80] "Spotify no longer accepts the saved login" and [109] "The bot cannot read the saved Spotify login" describe the same **Sign in again** state with two causes. Minor, unchanged from round 1.
- [71-76] Connect asks for two permission sets, and the table lists those two. Round 1's "Play in the browser" point is cleared.

Density (paragraph = text between two blank lines):
- Lines 50-52, 3 sentences, 1 with two ideas (line 52: change the secret, and the edit step). Within the limit.
- Lines 17-20, 4 lines, 3 sentences plus the roles link. Within the limit.
- No paragraph is over three sentences.

Voice against `create-a-command` (pilot): the sentence-level voice matches. The actor is the subject, results are checkable, and the page does not talk about itself.

Where I got lost: nowhere blocking. The only open question is the `/settings/integrations` path in line 19 (not checked).

Checked: sha256 of the page file, this run: `c7d3e0e8e3db47060e92889d6af408b5bada5949436b4b562f706e78734f5ca9`. Read: the whole page, `bot.mdx:17`. Not checked: the direct-link last segment, the Spotify form field names.
