# Final features review — 2026-11-06

Snapshot record. Later source comparisons, inventory reconciliation, factual corrections and deployment observations are recorded in [final acceptance](completion-acceptance.md). Earlier hashes and counts apply only to their dated snapshots.

Status: 51/51 articles fully read editorially; nine articles changed. Focused current-source verification, not an exhaustive source audit or whole-scope PASS. All assigned writes complete; parent owns final build and rendered QA.

Scope: 51 reference articles in automation, overlays, music, audio (excluding read-aloud-api), integrations, moderation, economy, community, settings and self-hosting. One documentation project: production docs.nomnomz.bot and public Astro preview docs-dev.nomnomz.bot. Shared files and build remain parent-owned.

Read docs AGENTS.md. Prior `.scratch/reference-features-docs.patch` and `reference-features-evidence.md` were leads; their earlier coverage and verdicts are not this review's coverage. Product HEAD at start: `2dfefbb0c393f439954d79b32ac11511678d7f44`, plus current working tree. Existing unrelated edits were preserved.

## Applied corrections

Six staged article corrections independently traced to current implementation and applied with apply_patch. This reviewer also applied the corrections, so this is not a separate independent approval of their final wording.

| Article under src/content/reference/en/ | Correction | Current source anchors under product root |
| --- | --- | --- |
| community/viewer-pages.mdx | Reset clears a saved voice; subsequent viewer speech can save a new automatic assignment. | dashboard/src/views/viewer/account/ChannelVoicePanel.vue:33-93; server/src/NomNomzBot.Infrastructure/Tts/TtsConfigService.cs:804-864; Tts/TtsDispatchService.cs:1359-1455; Tts/TtsFirstVoicePicker.cs:30-59 |
| community/people.mdx | Same voice reset distinction for moderator profile controls. | dashboard/src/components/layout/profile/ProfileVoiceEdit.vue:42-88; same TTS service paths above; server/src/NomNomzBot.Api/Controllers/V1/TtsConfigController.cs:532,595 |
| self-hosting/first-run-setup.mdx | Separate optional Google account credentials from connection-free YouTube music. | server/src/NomNomzBot.Api/Controllers/V1/SystemController.cs:440-461; server/src/NomNomzBot.Infrastructure/Music/YouTubeMusicProvider.cs:143-146,345-414 |
| settings/your-data-and-privacy.mdx | Opt-out records scoped consent withdrawals and flags existing analytics profiles; it is not a blanket recording/ranking stop. | server/src/NomNomzBot.Infrastructure/Identity/ErasureService.cs:894-990; Identity/ConsentService.cs:135-161,222-240; Services/Analytics/ChannelAnalyticsService.cs:157-163; Analytics/ChatterPresencePollService.cs:191-196 |
| economy/leaderboards-and-games.mdx | Currency ranking uses a separate exclusion, not the privacy consent switches; viewer rankings remain a placeholder. | server/src/NomNomzBot.Infrastructure/Economy/EconomyLeaderboardService.cs:215-320; server/src/NomNomzBot.Api/Controllers/V1/EconomyLeaderboardsController.cs:126-156; dashboard/src/views/viewer/nav/route.ts:24-28 |
| moderation/spam-defense.mdx | Strike-free threshold is saved but supplied maximum age rather than actual strike history; suspicious-user flags override earned/watch-hour status. | server/src/NomNomzBot.Infrastructure/Moderation/SpamDefenseService.cs:692-823 (especially 746); server/src/NomNomzBot.Domain/Moderation/SpamDefense/TrustTierLadder.cs:Resolve, ResolveEarned, IsEstablished |

Abbreviated service paths in the table are relative to server/src/NomNomzBot.Infrastructure/. A current server/src search for ConsentChangedEvent found ConsentService as publisher and DataRightsBroadcastHandler as the handler, not an economy exclusion consumer. Dashboard source search found no leaderboard opt-out call outside the generated API schema. These are static observations, not provider or live UI proof.

## Other changes and focused checks

- automation/rewards.mdx: put role and Twitch prerequisites before the first editing task. Current source: server/src/NomNomzBot.Api/Controllers/V1/RewardsController.cs:121,159-195; server/src/NomNomzBot.Infrastructure/Content/Identity/ActionDefinitionSeeder.cs:488.
- music/music-player.mdx: enable YouTube songs before the first request. Current source: server/src/NomNomzBot.Application/Music/Dtos/MusicConfigDefaults.cs:27; server/src/NomNomzBot.Infrastructure/Music/MusicConfigService.cs:84-85 and MusicService.cs:1912. ActionDefinitionSeeder.cs:563-568 confirms broadcaster-only initial YouTube access.
- integrations/stream-deck-and-api-devices.mdx: added the parent's requested /reference/code/automation-api related link after confirming the new target and reading its introduction. No new page or shared navigation was created by this batch.
- Further source confirmation, without changing those pages: music/song-requests.mdx four-hour restore and fifteen-minute in-memory refusals (server/src/NomNomzBot.Infrastructure/Music/SongRequestQueueRestoreHostedService.cs:47-103, full file read; RefusedSongRequestStore.cs:36-63, targeted search); audio/voice-triggers.mdx live transcript retention (server/src/NomNomzBot.Api/Controllers/VoiceTriggerReportController.cs:25-77; server/src/NomNomzBot.Infrastructure/Commands/VoiceTriggerService.cs:220-242); settings/channel-management.mdx soft deletion and thirty-day restore window (server/src/NomNomzBot.Infrastructure/Identity/ChannelService.cs:820-883; server/src/NomNomzBot.Domain/Identity/ChannelDeletionPolicy.cs, full file); moderation/automod-and-chat-filters.mdx moderator exemption and Twitch-only flag action (server/src/NomNomzBot.Infrastructure/Moderation/EventHandlers/ChatFilterExecutionHandler.cs:85-87,158-166,207-208, targeted search).
- YouTube account authorization separately confirmed in server/src/NomNomzBot.Infrastructure/Integrations/OAuthProviderRegistry.cs:216-245. TTS assignment defaults/call sites additionally inspected in server/src/NomNomzBot.Application/Contracts/Tts/ITtsDispatchService.cs:183 and server/src/NomNomzBot.Infrastructure/Rewards/EventHandlers/RewardRedeemedHandler.cs:409.

## Exact editorial coverage

51/51 full articles read, including frontmatter, tables, collapsed details, procedures, troubleshooting and related links. Every filename below is relative to src/content/reference/en/ and ends in .mdx. This is reading coverage, not source-audit PASS coverage. Truncated initial reads of first-run setup, leaderboards, rewards and webhooks were followed by complete rereads.

| Directory | Exact article basenames read in full | Editorial disposition |
| --- | --- | --- |
| automation/ | event-responses, rewards, timers-and-chat-triggers | Preserved purpose, examples and real-effect test explanation; made reward prerequisites visible before procedure. |
| overlays/ | obs-browser-source, set-up-overlays, widgets-and-alerts | Preserved supplied/custom distinction, source prerequisites and visual/audio outcome checks. |
| music/ | music-player, song-requests | Added missing YouTube enable step; retained source permissions, queue persistence and Spotify distinction. |
| audio/ | media-share, sounds, text-to-speech, voice-triggers | Retained distinct playback/listener paths, approval limitations and transcript disclosure. read-aloud-api excluded. |
| integrations/ | discord, obs, spotify, stream-deck-and-api-devices, supporter-sources, vtube-studio, webhooks-and-event-feeds, youtube | Retained feature-specific prerequisites, credential scope and advanced details; added API link only. |
| moderation/ | automod-and-chat-filters, bans-and-blocked-terms, linked-channels, overview, reports, shoutouts, spam-defense, trust-and-escalation | Corrected spam-tier calculation; retained platform, review-versus-enforcement and inactive-setting distinctions. |
| economy/ | currency-and-balances, giveaways, leaderboards-and-games, polls-and-predictions, store | Corrected leaderboard privacy boundary; retained first-task examples, fulfillment effects and absent viewer controls. |
| community/ | analytics, chat-page, people, stream-page, viewer-pages | Corrected saved-voice reset behavior; retained account/channel/browser distinctions and measured-outcome explanations. |
| settings/ | billing, bot-basics-and-personality, channel-management, event-journal, features, permissions, readability, resource-limits, white-label-bot, your-data-and-privacy | Corrected opt-out scope; preserved existing purpose-first prose and distinctions between saved values and active behavior. |
| self-hosting/ | first-run-setup, install-with-docker, updates | Corrected YouTube prerequisite; retained install/backup/update sequencing and recovery limits. |

No additional editorial rewrite was justified by this targeted pass. Unchanged factual details were not all independently retraced. This review applies the user's natural prose and progressive-disclosure criteria, not a uniform Atlas template.

## Review records and checks

All nine changed articles have both existing records updated: docs-work/reviews/reference-<directory>-<basename>.factcheck.md and .reader.md. The eighteen headers record current article SHA256 and author self-review with Verdict: PENDING, not independent PASS. The six staged factual changes were freshly investigated, but the same reviewer applied the final text. Historical hashes, claims and verdicts remain below the new headers.

Completed before the final API-link addition: 8/8 changed articles passed frontmatter and standalone MDX compilation; 66/66 absolute local reference links and their heading fragments resolved; 16/16 current review hashes matched and 16/16 original review texts matched HEAD after newline normalization. Scoped git diff --check passed. The eight article diffs were reread. Standalone MDX compilation checks syntax, not the site's complete rendering pipeline.

The final API-link addition passed standalone MDX/frontmatter checks, 6/6 local links, 2/2 review hashes and 2/2 preserved histories. Combined changed-page totals: 9/9 MDX/frontmatter, 72/72 absolute local reference links, 18/18 review hashes and 18/18 preserved historical review texts. The two new in-page prerequisite links in rewards also point to headings read in that article. All batch writes are complete. Parent owns the whole-site build, navigation/type checks and rendered QA. Other tooling inspected only for check selection: package.json, scripts/check-mdx-braces.mjs and src/lib/mdx/remark.ts; none changed.

## Remaining limits

- No exhaustive 51-page source audit, independent final-text approval, browser rendering, live app tests, provider calls, secret reads, whole-project build, commits, publishing or restarts were performed.
- Privacy verification covers the identified opt-out paths, not complete erasure/export correctness, every analytics writer, profile recreation or consent behavior after a projection rebuild.
- Channel deletion verification covers soft-delete/restore and the window, not every external disconnection/reconnection or purge worker. API-key rotation/revocation across already-connected devices, webhook retry/signature edge cases, federation/mass-ban paths, giveaway fulfillment/refunds, and all role/platform exceptions remain outside this focused source review.
- Provider policies, release availability, Docker backup/restore and real service delivery were not revalidated. Existing statements on those topics are not newly certified here.
- No shared nav, README, framework/build file, final-pass.md, read-aloud article or read-aloud review was edited. Existing uncommitted parent work was preserved.
