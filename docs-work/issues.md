# Product defects found by the docs run

Arc files these as issues on the product repository. The pages describe what the code does today.

## Code scripts

1. A new script starts switched on, but the New script dialog says it stays off until the user switches it on.
   - Dialog text: dashboard/src/views/dashboard/scripts/i18n/en.json:178 and starterSource.ts.
   - Code: server/src/NomNomzBot.Infrastructure/CustomCode/CodeScriptService.cs:191 sets `IsEnabled = true`.

## Spam defense

2. Stale dashboard text: dashboard/src/views/dashboard/admin/i18n/en.json (dashboard.admin.spamDefaults settings.semiTrustedWatchHoursHere/Instance.inactive and settings.nonLatinScriptGate.inactive) says the bot does nothing with these settings, but the engine reads them (SpamDefenseService.cs:452, 604, 783-784; AccountRisk.cs:155-156). The earlier claim in this file that no code reads them was wrong and is corrected here. Only Join rate that counts as unusual, Use the shared spam list and Share what you catch have no reader.
2b. The watch-only text `dryRun.cost` in the same file says that turning it off makes the bot act at once, but a new channel is first held in a seven-day observation window (SpamObservationWindow.cs:24, 41-57; SpamDefenseService.cs:128-134, 441-442).
2c. The generated SDK comment at server/src/NomNomzBot.Infrastructure/DevPlatform/SdkRuntimeSurface.cs:102 says the browser voice makes durationMs 0, but the browser voice is retired (TtsConfig.cs:38; TtsDispatchService.cs:635, 840-846).
3. The Follow rate that counts as unusual setting is active (server/src/NomNomzBot.Application/Moderation/.../FollowSpikeHandler.cs:66 reads FollowSpikeFactor), but its dashboard text `settings.followSpikeFactor.inactive` says no spike is noticed today.

## Trust and escalation

4. Details are at the end of docs-work/reviews/reference-moderation-trust-and-escalation.claims.md ("Product defects found") and .factcheck.md ("Product defects"): trust-score inputs never passed in (ModerationProjectionService.cs:421-430), tier ceilings never read (TrustScoreCalculator.cs:105), wrong Reputation boost and growth help text, no dashboard field for the heat threshold.

## Viewer reports

5. The dashboard has no form to file a viewer report. Only the API takes one (server/src/NomNomzBot.Api/Controllers/ModerationController.cs POST reports; the dashboard lists the form as missing in crudBaseline.ts).

## Linked channels

6. The settings Share, Shared ban list, Shared trust list and Shared savings are saved, but no server code reads them.
7. The comment on GetMassBanOptIn in ModerationController.cs says mass ban is On by default. The stored default is false (Channel.cs:217, ChannelConfiguration.cs:73).

## Shoutouts

8. The dashboard card "Shoutout message" says it is what the bot announces for every shoutout. The code picks in this order: the pipeline step message, the shouted streamer's own message, then the channel's (ShoutoutSender.cs:73-101).

## Currency and balances

9. No payout code exists for the Watch time or Twitch gift subscriptions earning rules.
10. Seconds per payout needs a per-window cap that the dashboard cannot set (CurrencyEarningService.cs:84).
11. Decimal places and Currency icon URL are saved and never read.
12. The jar card says "Viewers use the chat commands for now", but no jar chat command exists (JarContributeAction.cs is a pipeline action). The jar role is stored and never read. The dashboard shows no channel ID to copy for the jar invite.

## Store

13. A store item linked to a pipeline never runs it: CatalogService.cs:444-458 sends an event nothing handles, and 475-477 runs only a command or an action.
14. Effect kind is saved and nothing acts on it.
15. There is no buy or refund button. Store purchases exist only through the web API (CatalogController.cs:161). The viewer Store page shows Coming soon.

## Giveaways

16. Least account age counts from the bot's own user row date (GiveawayService.cs:887-897).
17. Entries per viewer is saved and never read (GiveawayService.cs:350-359).
18. The prize "An announcement in chat" posts nothing (GiveawayFulfillment.cs:92).
19. Winners with status drawn or redrawn have no label in en.json.
20. The help texts "Empty uses the default" (claim window) and "You can add codes later" (code pools) do not match the code. The prize pot is split by the set Number of winners, not by the winners actually drawn, so part of it can go unpaid (giveaways fact check, 2026-10-28).

## Leaderboards

21. A leaderboard set to One jar saves but ranks nobody.

## Discord

22. The dashboard help under Send a direct message says members are messaged when they take or leave the role. The code sends the DM when a notification pings that role (DiscordNotificationDispatcher.cs:228-260).

## Webhooks and event feeds

23. The warning shown before making a new outbound signing secret says "The old secret stops working at once". The server keeps the old secret and signs every later delivery with both (details at the end of docs-work/reviews/reference-integrations-webhooks-and-event-feeds.claims.md).

## Read aloud for a page

24. The framework 400 for a missing or empty `text` or `locale` carries no `Cache-Control: no-store` and comes before the site check, but the comment at ReadAloudController.cs:95 says every refusal is never cached. The tests call the action directly (ReadAloudControllerTests.cs:91-94) and skip model binding.
25. The GET form is refused for any request without an `Origin` header (ReadAloudOriginGate.cs:38), so an audio element and a same-origin GET get 403, although the comment at ReadAloudController.cs:26-27 says the GET form exists so the browser and Cloudflare keep each sentence.
26. A cached clip still waits for one of the 2 slots: the cache lookup is inside TtsService.SynthesizeAsync (TtsService.cs:56-61), which ReadAloudService calls after it takes a slot (ReadAloudService.cs:59-64). The comment at ReadAloudService.cs:36 is true only for the Cloudflare cache.
27. The compose files and `.env.example` have no variable for `ReadAloud:Origins` (docker-compose.yml, docker-compose.lite.yml), so an operator must edit the compose file.

## Template helper registry

28. The resolver builds a past-tense value for each side (LegacyTemplateHelpers.cs:623, :1050, :1072, :1432, :1514) but TemplateHelperRegistry has no row for pastTense, user.pastTense or target.pastTense, so no helper page lists it. The pronouns page no longer names it. Whether a typed `{pastTense}` renders was not checked.

## Text to speech

30. A script's `tts.speakSequence` accepts `breakAfterMs` and `pause` up to 10,000 ms (ScriptTtsSegmentParser.cs:27, :136, :177). The Edge provider cuts every pause to `TtsProsody.MaxBreakMs`, 5,000 ms (TtsProsody.cs:30, EdgeTtsProvider.cs:250), and the Play TTS step's help text says up to 5000 ms (dashboard/src/i18n/schema/en.json:2123). A script asking for 8 seconds of silence gets 5.

## Trust policy

31. The growth speed text says the opposite of the code. The dashboard says "A higher number grows more slowly" and "How slowly ... reaches its full value" (dashboard/src/views/dashboard/settings/trust-policy/i18n/en.json:19, :57, :61, :65). TrustScoreCalculator.cs:39-43 computes 100 × (1 − e^(−rate × amount)), so a higher number reaches the full value faster. The docs follow the code.

29. The clip cache drops `_cache.Keys.First()` when it holds more than 200 clips and the code comment calls it the oldest clip (TtsService.cs:108-113). `_cache` is a `Dictionary<string, byte[]>` (TtsService.cs:33), which has no age order, so the clip dropped can be a new one.
