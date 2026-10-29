# Fact check: src/content/reference/en/templates/pronouns.mdx
Verdict: PASS
Reviewed: C:/Projects/NoMercyLabs/nomnomzbot-docs/src/content/reference/en/templates/pronouns.mdx
Reviewed-SHA: ff258579bd0955d3

Product: C:/Projects/NoMercyLabs/nomnomzbot at origin/master 779081d10d05dc6b4150732abd77bfae4dbef1d9 (fetched 2026-10-29), read with `git show origin/master:<path>`.

Short names used below:
- LTH = server/src/NomNomzBot.Infrastructure/Platform/Templating/Helpers/Legacy/LegacyTemplateHelpers.cs
- PS = server/src/NomNomzBot.Infrastructure/Content/Identity/PronounSeeder.cs
- APC = server/src/NomNomzBot.Infrastructure/Identity/Providers/AlejoPronounClient.cs

## Changed text (lines 43-48)

| Page line | Claim | Supported by | Status |
| --- | --- | --- | --- |
| 44 | xe: subject xe, object xem, possessive xyr | PS:186-194 (bundled row), PS:229 (KnownGrammar xe -> xyr for the live set); live API returns `xexem` Subject Xe, Object Xem, lowercased at PS:311-312 | true |
| 45 | zie: subject zie, object and possessive hir | PS:195-203, PS:230; live API `ziehir` Subject Zie, Object Hir | true |
| 46 | Both give "person" as the gendered term | PS:192, PS:201, PS:229-230 | true |
| 47 | Both take is and was | LTH:1048-1050: the verb is plural only when the shown subject is "they"; xe and zie get is/was. The stored Singular flag is not read for the verb. | true |
| 48 | Only "they" takes the plural verb | LTH:1048 for a set pronoun. The no-pronoun fallback (LTH:1440-1449, are/were) is also "they", so the sentence holds. | true |

## Unchanged text, re-verified

| Page line | Claim | Supported by | Status |
| --- | --- | --- | --- |
| 12-13 | List loaded from `https://api.pronouns.alejo.io/v1/pronouns` | APC:27, APC:46-47. Plain GET this run: HTTP 200, 13 pronouns. | true |
| 15 | One viewer looked up at `https://api.pronouns.alejo.io/v1/users/` plus the Twitch login | APC:28, APC:85-87. Base URL needs the reader's login; not fetched. | true |
| 16 | Twitch logins only, Twitch viewers only | server/src/NomNomzBot.Infrastructure/Chat/EventHandlers/PronounHydrationHandler.cs:48 (Provider != Twitch returns early) | true |
| 18 | Saved when the person chats in any channel the bot is in | PronounHydrationHandler.cs handles every ChatMessageReceivedEvent, then PronounResolutionService.ResolveAndApplyAsync writes User.PronounId | true |
| 19 | Same pronouns in every channel | server/src/NomNomzBot.Domain/Identity/Entities/User.cs:106-113 (PronounId on the global User row, no channel key) | true |
| 20 | A reply reads the saved pronouns, no new lookup | LTH:723 and LTH:936 read `Users.Include(u => u.Pronoun)`; no IPronounProvider call in LTH | true |
| 22 | A viewer can pick pronouns in the bot | server/src/NomNomzBot.Infrastructure/Identity/Services/PronounSelfService.cs:64; docs viewer-pages.mdx:94-99 | true |
| 24 | The API lists base pronouns such as he, she and they | Live API: hehim, sheher, theythem, plus neopronouns, any, other | true |
| 25 | Pairs such as he/they come from the bundled set | PS:47-76 (Combos), PS:239 (always added to the live set) | true |
| 26 | API down: the bot uses the bundled set | PS:237-241, APC:48-75 (FetchAsync returns null on failure) | true |
| 28-29 | Set pronoun action stays set; API does not overwrite | server/src/NomNomzBot.Infrastructure/Identity/PipelineActions/SetPronounAction.cs:154-156 (ManualOverride true); server/src/NomNomzBot.Infrastructure/Identity/Services/PronounResolutionService.cs:65 (skips a manual override) | true |
| 31 | The bot adds the words for each pronoun | PS:213-231 KnownGrammar, PS:318-323 | true |
| 36-41 | Table: he him his is was guy; she her her is was gal; they them their are were person | PS:84-110, LTH:1043-1051 | true |
| 36-41 | Any or other column: name, name, name's, is, was, person | LTH:1020-1041, LTH:1059-1075 | true |
| 40 | Past tense comes from `{tense}` when offline | LTH:614-626 | true |
| 60-63 | `{subject}`, `{object}`, `{possessive}`, `{genderedTerm}` values | LTH:1043-1051 | true |
| 64 | `{presentTense}` does not change with the stream | LTH:1049 (set from the subject only); only `tense` reads isLive (LTH:619-626) | true |
| 65 | `{tense}`: is/are live, was/were offline; in a shoutout the shouted-out person's stream; else your channel | LTH:614-626; target.isLive is seeded only in server/src/NomNomzBot.Infrastructure/Stream/PipelineActions/ShoutoutAction.cs:433 (git grep, one hit) | true |
| 66, 99 | `{verb:a|b}` first form for he/she, second for they | LTH:200-233 (singular when presenttense is "is") | true |
| 72-74 | Bare helper follows the named person, else the user | LTH:532 (target set), LTH:1463; ChatMessageHandler.cs:1890-1898 (target = first argument mention) | true |
| 77-80 | `user.` and `target.` choose a side; verb and tense work per side | LTH:204-217, LTH:1437 GrammarSides, LTH:619-626 | true |
| 81 | The side does not change which stream `{target.tense}` follows | LTH:614-616 (one isLive for all sides) | true |
| 85-87 | Upper-case first letter capitalizes; `{Tense}` too | LTH:138-149, LTH:1489-1495 | true |
| 89 | `{target.Subject}` is not capitalized | LTH:145 checks key[0] only | true |
| 91 | `{verb:...}` gets no capital | LTH:140-141 returns ResolveVerbAgreement unchanged | true |
| 100 | Without a pipe, the text stays as typed | LTH:224-226 (returns null, token left raw) | true |
| 103-104 | presentTense is/are; tense live/offline | LTH:1049-1050, LTH:619-626 | true |
| 108 | No pronouns: they, them, their, person, are, were | LTH:1440-1449, LTH:1475-1485 | true |
| 111-112 | Helpers never raw; verb plural "they play" | LTH:1475-1485 (fallback for every needed key); LTH:228-233 ("are" is not "is", second form) | true |
| 116-117 | any and other are the open-choice sets; xe and zie are not | LTH:1020-1023 | true |
| 120 | API reachable: names `any` and `other` | PS:313 (subject == object collapses to one word); live API Any/Any, Other/Other | true |
| 121 | Bundled names `any/all` and `other/ask` | PS:111-128 | true |
| 122 | Both spellings treated the same | LTH:1020-1023, LTH:1037 (keys on Subject "any"/"other", which both spellings share) | true |
| 125-131 | Name stands in; name's; is/was; first verb form; person | LTH:1059-1075, LTH:228-233 | true |
| 133-134 | The name keeps its own capitals in `{Subject}` | LTH:146, LTH:155-162, LTH:1464-1465 | true |
| 138 | `{Subject} {presentTense} great.` gives "Alex is great." / "He is great." | LTH:1068, LTH:1071, LTH:146; LTH:1043, LTH:1049, LTH:147 | true |
| 147-181 | Four examples: each output traced through the rules above (target side, name form, verb, tense in a shoutout) | LTH:200-233, LTH:614-626, LTH:1043-1075; ShoutoutAction.cs:433 | true |

Links on the page resolve to existing docs pages: templates/user, templates/target, community/viewer-pages, commands/pipelines (Set pronoun row at pipelines.mdx:228), templates/overview, commands/variables-and-templates.

Bot voice: the page describes only template text. It names no voice. No finding.

## Product defects (not page facts)

1. PS:82-205: the bundled fallback rows carry no Key. PronounResolutionService.cs:95 maps a looked-up alejo key to a row by Key. So on a box whose first boot had no network, a viewer's alejo pronoun cannot match any row until a later boot reaches the API. The page does not claim otherwise.
