# Current targeted source review

Verdict: PARTIAL
Reviewed: src/content/reference/en/audio/read-aloud-api.mdx
Reviewed-Date: 2026-11-06
Reviewer: final-pass author; not an independent reviewer

The full article was read. The request example now includes the Origin required by `server/src/NomNomzBot.Api/Controllers/ReadAloudOriginGate.cs:25-38` and the controller's refusal path. `ReadAloudCors.cs:47-52` defines the named policy without exposed headers; `Program.cs:300-323` separately registers the default policy. `RateLimiting/RateLimitPolicyRegistration.cs:60-71` supplies Retry-After. The [Fetch Standard](https://fetch.spec.whatwg.org/#cors-safelisted-response-header-name) confirms that this header is not automatically exposed to cross-origin scripts. These checks verify the corrected claims, not every earlier claim or live behavior. Independent full-page review remains incomplete.

## Additional current source checks

Additional final-pass source verification: `ReadAloudController.cs:31-101`, all of `ReadAloudService.cs` and `ReadAloudRateLimitPolicy.cs`, `TtsService.cs:42-118`, and singleton registration at `Infrastructure/DependencyInjection.cs:1387`. Corrected UTF-16 length, public GET caching/privacy, per-process admission, cache lookup after slot acquisition, queue-wait versus total timeout, duplicate concurrent cache misses and provider fallback. This is implementation inspection, not synthesis or browser testing. The source snapshot comment saying cached clips bypass the semaphore is contradicted by the executable call order and was not repeated.

## Historical independent fact check

The following PASS applies only to the earlier recorded hash.

Verdict: PASS
Reviewed: src/content/reference/en/audio/read-aloud-api.mdx
Reviewed-SHA: a925a99fbc7849d079bf696152559b673d6fb4bf15c69c2d0b0144d72bb19776
Reviewed-SHA256: a925a99fbc7849d079bf696152559b673d6fb4bf15c69c2d0b0144d72bb19776
Reviewed-Date: 2026-11-05
Reviewer: independent media-section reviewer
Product: 54da8b6318de63b5205a0ff8db35e0b9045dd959 plus preserved current music UI edits

The full article was read in sidebar order. Consequential defaults, permissions, prerequisites, state lifetime and effects were traced against current source; repaired findings were re-read before this verdict. This is source verification, not a live-channel or visible/audible output test.

- server/src/NomNomzBot.Api/Controllers/ReadAloudController.cs:31-101 implements anonymous POST/GET, MP3, locale validation, GET cache headers and no-store controller refusals; Controllers/ReadAloudOriginGate.cs:28-38 enforces exact allowed Origin.
- server/src/NomNomzBot.Infrastructure/Tts/ReadAloudService.cs:30-104 implements trimmed1..500 text, two synthesis slots,30-second wait and locale/catalog/default voice selection; Tts/TtsService.cs:56-110,131-174 shares bounded200-entry memory caching.
- server/src/NomNomzBot.Api/RateLimiting/ReadAloudRateLimitPolicy.cs:25-40 implements40/minute/IP. Existing compose/public-address origin configuration was checked with the self-hosting sources; the JavaScript example is source-reviewed only.

Source paths without a repeated layer prefix in a bullet are relative to its preceding Infrastructure or dashboard scope. The section report records method, repaired findings, external sources and remaining product limitations: docs-work/overhaul/review-automation-media-integrations.md.

## Historical evidence

Older hashes, verdicts and values below are retained for history and are not the current review.

# Fact check: src/content/reference/en/audio/read-aloud-api.mdx
Verdict: PENDING
Reviewed: C:/Projects/NoMercyLabs/nomnomzbot-docs/src/content/reference/en/audio/read-aloud-api.mdx
Reviewed-SHA: a925a99fbc7849d079bf696152559b673d6fb4bf15c69c2d0b0144d72bb19776

## 2026-11-05 author source verification

Author source audit complete; independent verdict pending. This hash binds the current text, not the historical PASS below. The article was read in full and revised toward the user's explainer style while preserving precise reference detail. ReadAloudController.cs; ReadAloudService.cs; ReadAloudOriginGate.cs; ReadAloudRateLimitPolicy.cs. The optional developer example handles HTTP errors, audio playback failure and object URL cleanup; locale and voice selection were traced.

The section inventory and known implementation gaps are in [automation-media-integrations.md](../overhaul/automation-media-integrations.md). This is source verification, not a live-channel execution claim. Independent review must account for product changes after the original author pass at b12f4f696.

## Historical review (SHA 71edec4abbe00716)

Historical verdict: PASS. The earlier evidence below is retained as history and is superseded where the current article or source changed.

Product: NomNomzBot origin/master 779081d10d05dc6b4150732abd77bfae4dbef1d9 (fetched this run; every file opened with `git show origin/master:<path>`).
Method: hand-written page, so every factual claim was traced to product code. Nothing was built or run. The framework 400 (lines 35, 101-103) is traced from the controller setup, not run.

Short names used below:
- RAC = server/src/NomNomzBot.Api/Controllers/ReadAloudController.cs
- RAS = server/src/NomNomzBot.Infrastructure/Tts/ReadAloudService.cs
- CORS = server/src/NomNomzBot.Api/Controllers/ReadAloudCors.cs
- GATE = server/src/NomNomzBot.Api/Controllers/ReadAloudOriginGate.cs

## Claims

| Page line | Claim | Supported by | Status |
| --- | --- | --- | --- |
| 7 | A neural voice from the bot's server, not the browser's voice | RAS:64 (ITtsService synthesis on the server); dashboard/src/composables/useReadAloud.ts:14-18, :143-154 (plays the server clip) | Supported |
| 10 | The dashboard uses it on the Privacy Policy and Terms of Service pages | dashboard/src/views/site/legal/LegalView.vue:19, :70 (`<ReadAloud />`); dashboard/src/views/site/legal/route.ts:19-33 (privacy and terms routes) | Supported |
| 25 | Route `POST /api/v1/public/read-aloud` | RAC:31, :51 | Supported |
| 29, 32-35 | Body fields `text` and `locale` | RAC:49 (`ReadAloudRequest(string Text, string Locale)`) | Supported |
| 34 | 1 to 500 characters, counted after trimming both ends | RAS:31 (MaxTextLength 500), :51-52 (`text.Trim()`, length 0 or over 500 fails) | Supported |
| 35 | Locale `en`, `nl`, `nl-NL`, `pt_BR` accepted | RAC:45 regex `^[A-Za-z]{2,3}([-_][A-Za-z0-9]{2,8})?$`; tests ReadAloudControllerTests.cs:218-223 | Supported |
| 35 | No `locale`, or an empty one, gets a 400 | Framework: RAC:30 `[ApiController]`, :49 and :60 non-nullable `string`, server/Directory.Build.props:10 `Nullable enable` (implicit required). No ApiBehaviorOptions override (grep of server/src for ConfigureApiBehaviorOptions, InvalidModelStateResponseFactory, SuppressImplicitRequired: no hit) | Supported (traced) |
| 37 | No sign-in needed | RAC:32 `[AllowAnonymous]` | Supported |
| 38, 90 | A good answer is `audio/mpeg` | RAC:84-85 | Supported |
| 56 | GET takes the same two fields as query values | RAC:57-61 | Supported |
| 57-58 | GET success carries a cache header: browser 7 days, shared cache 30 days | RAC:41 `public, max-age=604800, s-maxage=2592000`, :64-66 (only on FileContentResult) | Supported |
| 59 | POST carries no such header | RAC:51-55 (no header set) | Supported |
| 60-61, 116-117 | A request with no `Origin` is refused with 403 | RAC:77-78; GATE:30-38 (exact set lookup of the Origin header; an absent header is ""); tests ReadAloudControllerTests.cs:127-132 (`InlineData(null)`) | Supported |
| 70-71 | The dashboard reads headings, paragraphs, list items and table cells, and skips code blocks, menus, headers, footers and hidden text | useReadAloud.ts:23 (BLOCKS h1-h4, p, li, dt, dd, th, td, figcaption), :26 (SKIP pre, nav, header, footer, aria-hidden, .sr-only), :76 (`getClientRects().length > 0`, so hidden blocks drop) | Supported |
| 69 | Keep each clip until the reading stops (the dashboard does) | useReadAloud.ts:135-161 (clip map), :164-166 (forgetClips) | Supported |
| 75-76 | No channel voice setting is used; the route picks the voice from the request language | RAS:88-103 (only `locale`, the TtsVoices catalogue and the platform default) | Supported |
| 80 | English (`en` or `en-US`) uses the platform default voice | RAS:90-92 | Supported |
| 80 | A channel follows the platform default until it picks its own voice | server/src/NomNomzBot.Infrastructure/Tts/TtsConfigService.cs:889-896 (DefaultVoiceId null follows the platform default), :137-138 | Supported |
| 81 | Any other language: the first Edge voice of that language the bot knows | RAS:95-100 (`Provider == "edge"`, `Locale.StartsWith(language + "-")`, FirstOrDefault) | Supported |
| 81 | The `{lang}-{LANG}` voice comes first, for example `nl-NL` for `nl` | RAS:94 (`mainLocale = language-LANGUAGE`), :97 | Supported |
| 81 | Without one, alphabetical order of the voice name, so the first country code wins | RAS:98 (`ThenBy(v => v.Id)`); the id is the Edge ShortName that starts with the locale, such as `en-US-AnaNeural`: server/src/NomNomzBot.Infrastructure/Tts/EdgeTtsProvider.cs:436-451, TtsVoiceCatalogSync.cs:90 (`Id = info.Id`) | Supported ("name" here is the ShortName id; the clause "so the first country code wins" holds only for that id, and it does) |
| 82 | A language with no voice gets the platform default | RAS:102 | Supported |
| 84 | The same page always sounds the same | RAS:95-100 (deterministic order) | Supported |
| 91 | 400 for a locale that is not a language code | RAC:80-81 | Supported |
| 91 | 400 for text missing, empty or over 500 | RAS:52-56 (VALIDATION_FAILED) mapped at RAC:88-91; missing or empty is the framework 400 (see line 101) | Supported |
| 92 | 403 for a site that is not allowed | RAC:77-78 | Supported |
| 93 | 429 at 40 requests a minute per IP | server/src/NomNomzBot.Api/RateLimiting/ReadAloudRateLimitPolicy.cs:25-38 (PermitLimit 40, 1 minute, partition per IP); RAC:34; RateLimitPolicyRegistration.cs:45, :56 | Supported |
| 94 | 503 when the voice cannot speak | RAS:69-78, :85-86 (TTS_UNAVAILABLE); RAC:88-91 | Supported |
| 96 | 429 carries `Retry-After` in seconds | server/src/NomNomzBot.Api/RateLimiting/RateLimitPolicyRegistration.cs:60-70 | Supported |
| 97 | An empty clip is a failure and answers 503 | RAS:67; RAC:84-92 | Supported |
| 99 | A 400, 403 or 503 the route sends carries `Cache-Control: no-store` | RAC:96-99 (Refuse sets no-store), used at :78, :81, :88 | Supported |
| 100-103 | Missing, empty or all-space `text` or `locale`, GET or POST, gets the framework 400 without `no-store` | RAC:30, :49, :59-60 (non-nullable, implicit required with Nullable enable, Directory.Build.props:10). In GET, an empty or all-space query value binds to null; in POST, the implicit required check refuses null, empty and all-space strings. The automatic 400 is returned before the action runs, so Refuse (RAC:96-99) never sets no-store. No global no-store on API answers (grep of server/src/NomNomzBot.Api for no-store/CacheControl: only static shell and asset files, Program.cs:754 is the landing page) | Supported (traced, not run) |
| 105 | At most 2 clips at the same moment, for all visitors | RAS:38, :42 (static SemaphoreSlim of 2) | Supported |
| 106 | Waits up to 30 seconds for a slot, then 503 | RAS:43, :59-60 | Supported |
| 108 | Up to 200 clips kept in memory; the same text and voice cost one synthesis | server/src/NomNomzBot.Infrastructure/Tts/TtsService.cs:33 (in-memory dictionary), :56-67 (key from text and voice), :102-113 (keeps 200) | Supported |
| 109 | The bot's text to speech shares that memory | TtsService is one singleton: server/src/NomNomzBot.Infrastructure/DependencyInjection.cs:1364; RAS:26, :64 | Supported |
| 110 | When full, one clip is dropped; a restart clears all | TtsService.cs:109-112 (removes one key); :33 (process memory only) | Supported |
| 114 | Only a request whose `Origin` names an allowed site is answered | GATE:38; RAC:77-78 | Supported |
| 121 | The bot's public address from `App:BaseUrl`, set as `API_BASE_URL` | GATE:33; docker-compose.yml:82 and docker-compose.lite.yml:47 (`App__BaseUrl=${API_BASE_URL:-http://localhost:5080}`) | Supported |
| 122 | `ReadAloud:Origins`; without it, `https://docs.nomnomz.bot` and `https://docs-dev.nomnomz.bot` | CORS:25-33 | Supported |
| 125 | A site in `ReadAloud:Origins` replaces the two defaults | CORS:33 (`?? DefaultOrigins`, used only when the setting is absent) | Supported |
| 126 | No cookies or sign-in details from the other site | CORS:39-43 (AllowAnyOrigin, no AllowCredentials) | Supported |
| 130-131 | Only the operator changes the settings; the bot reads them when it starts | Configuration values; CORS registered at startup (server/src/NomNomzBot.Api/Program.cs:312), gate is a singleton reading configuration once (Program.cs:314, GATE:30-36) | Supported |
| 133 | Copy `.env.example` to `.env` | .env.example exists at the repo root on origin/master | Supported |
| 134-135 | Set `API_BASE_URL`; the default is `http://localhost:5080` | .env.example:52-56; docker-compose.yml:82; docker-compose.lite.yml:47 | Supported |
| 136 | The compose file passes it as `App:BaseUrl` | docker-compose.yml:82; docker-compose.lite.yml:47 | Supported |
| 137-139 | One line per site, `__0`, `__1` | CORS:33 (`GetSection("ReadAloud:Origins").Get<string[]>()`, a .NET array from indexed keys) | Supported |
| 140-142 | In docker-compose.yml the list sits in `x-api-service`, four spaces of indent; a second `environment` key in `api-blue` or `api-green` replaces the shared list | docker-compose.yml:61, :69-70, :121 (last item `    - Api__ExposeDocs=...`), :162-168 (`<<: *api-service`, no own environment key) | Supported |
| 143 | In docker-compose.lite.yml, end of `environment` under `api`, six spaces of indent | docker-compose.lite.yml:28, :38, :59 (last item `      - YouTube__ApiKey=...`) | Supported |
| 160 | The shipped compose files have no `.env` variable for `ReadAloud:Origins` | `git grep -i readaloud origin/master -- '*.yml' '*.yaml' .env.example`: no hit | Supported |

## Checks from the role

- URLs: `https://bot.example.com` and `https://www.example.com` are plainly the reader's own placeholders (lines 21-22 say so). `https://docs.nomnomz.bot` and `https://docs-dev.nomnomz.bot` are product defaults (CORS:27-28). No URL was fetched.
- Elided snippets: none on the page.
- Bot voice: the page describes no bot chat reply, so the one-voice rule is not touched.

## Product defects (not page facts)

1. Comment contradiction: GATE:24 says the clips "are cached per site on Cloudflare", while CORS:35-38 says Cloudflare keeps one copy for all callers. The code (CORS:42, `AllowAnyOrigin`, one header for every caller) matches CORS. The GATE comment is wrong.
2. The framework 400 for a missing, empty or all-space field has no unit test: ReadAloudControllerTests.cs calls the action directly, so the model-validation path and its missing `no-store` are not proven by a test.
