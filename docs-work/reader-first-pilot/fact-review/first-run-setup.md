# Independent fact and coverage review: First-run setup

Reviewed 2026-11-09 independently of writer. Source-level factual/coverage evidence only: **no reader score, pilot acceptance, runtime proof or prose verdict**. Calibration cases/private keys not read. Author confirmed stable copies and hashes were independently re-read.

| Final reviewed input | SHA256 |
| --- | --- |
| `new/self-hosting/first-run-setup.mdx` | `b710190417564d4bdb9f82a4971e118f15160c27d7bf9575aae8482e049686fe` |
| `comparison-original/self-hosting/first-run-setup.mdx` | `a3a95fc655c0c908808254f4d3962f0cd3ac74864a15a4840d58768f74235c16` |
| `contracts/first-run-setup.md` | `10d0504fdcd3367345086e7f7f8f108eeabfa5c98d7392e2ebeeb5270fcb742d` |

Before blind packets/observations, root requested that contract Q2 explicitly test an own-app registrant with unverified Twitch email and 2FA off, retaining the three optional-item questions and asking where the prerequisite is established. Question-only refinement recorded in contract; factual scope remains unchanged. Source identification accepts the article’s Twitch attribution/own-app instructions rather than requiring a URL available only in the rewritten variant. This review includes that final refined contract fingerprint.

Inputs: full `new/self-hosting/first-run-setup.mdx` (145 lines on first read); every comparison-original delta against immutable original, which was read in full before contract fixing; `contracts/first-run-setup.md`. Current product root `C:/Projects/NoMercyLabs/nomnomzbot`, HEAD `f741789bf6b8d90ae2fd07f33a307a5a11623606`.

## Findings

**No factual/coverage blockers identified in either current copy.** Both preserve **8/8 contract requirement groups**, including own-app, bot-account and optional-service advanced procedures after the faster minimal path. Added prerequisites and explicit application/account distinctions are supported.

| Consequential/new claim checked | Current primary source (relative to product root) | Result |
| --- | --- | --- |
| Six step labels/cards, required Twitch choice versus optional providers/bot, Next/Skip/Back, compact progress | `server/src/NomNomzBot.Api/Models/SetupWizardDtos.cs:81-239`; `dashboard/src/views/site/setup/SetupView.vue:36-50,95-127`; `components/StepsFrame.vue:38-83` in same directory | Supported. New article’s optional advanced sections retain all original steps. |
| Existing resolved Client ID does not complete Twitch decision; explicit shared or saved own ID needed; secret optional, code without/one-tap with | `server/src/NomNomzBot.Api/Controllers/V1/SystemController.cs:122-141,217-234,305-366`; `server/src/NomNomzBot.Api/Models/SetupWizardDtos.cs:83-136` | Supported. Procedure recommends finishing wizard; it does not claim service login must wait for optional app configuration. |
| Shared app needs no own fields; own registration needs verified email/2FA, exact callback, Chat Bot category and saved ID | `SetupWizardDtos.cs:98-136`; `dashboard/src/views/site/setup/components/CredentialsStep.vue:22-72`; [Twitch app registration](https://dev.twitch.tv/docs/authentication/register-app/) (official prerequisite consulted during contract fixing) | Supported. External prerequisites apply to registering an own app, not to selecting shared app. |
| Optional separate bot account; skip uses broadcaster; new tab/wait/approval/Connected; copyable URL supports another profile | `SetupWizardDtos.cs:138-157`; `dashboard/src/views/site/setup/components/BotAccountStep.vue:28-86` | Supported. |
| Until explicit Finish setup, reachable visitors can replace keys; after finish bot admin required, channel Moderator alone insufficient | `server/src/NomNomzBot.Api/Controllers/V1/SystemController.cs:276-277,314-315,353-354,377,406,425,449,469-491` | Supported. Completion is explicit config flag, not inferred from having credentials/bot. |
| Optional credentials each ID+secret, exact callback copy locations, later personal link/device setup; Spotify does not gate all music requests | `SetupWizardDtos.cs:159-232`; `CredentialsStep.vue:28-29,38-72`; `server/src/NomNomzBot.Infrastructure/Music/SpotifyMusicProvider.cs:36-39,205-225,299-325` | Supported. Saving app keys is not user authorization or player/device selection. |
| Google OAuth app is account-connection plane; YouTube music works without it through public/keyless search/playback | `server/src/NomNomzBot.Infrastructure/Music/YouTubeMusicProvider.cs:139-164,348-374`; setup field definitions above | Supported. Both articles explicitly retain setup-card misleading-wording caveat. |
| Finish list/Not set acceptable, Event feed sign-in-first expected; feed health not prerequisite; Finish saves flag and routes app, then broadcaster connection/first command | `dashboard/src/views/site/setup/SetupView.vue:47-50,95-127`; `components/EventFeedHealth.vue:31-59`; `server/src/NomNomzBot.Api/Controllers/V1/SystemController.cs:469-491` | Supported. No promise that saving application credentials already connected the broadcaster. |
| Unreachable/retry/save/finish errors and compose health troubleshooting | `SetupView.vue:69-72,106-108`; `CredentialsStep.vue:70-72`; `dashboard/src/views/site/setup/i18n/en.json:6-59`; `docker-compose.lite.yml:35,60-63`; `docker-compose.yml:125-139` | Preserved, with correct lite/full ps commands; healthcheck definition is not a claim current services were run. |

OAuth explanation, secret privacy, exact callback copy advice, after-sign-in integration guides and original related pages are retained. No unsupported claim outside the contract identified.

## Pending boundaries

Final source review is current only for the fingerprints above; later article/contract edits require recheck. No Docker service, OAuth session, bot-account authorization, personal integration link, player device or EventSub feed was exercised. Reader results, rendered MDX/link checks and shared site build are separate root-owned gates. No acceptance JSON written.
