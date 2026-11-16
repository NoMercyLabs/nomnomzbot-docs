# Reader-first Atlas pilot results

The five rewritten copies passed the source, automated and agent acceptance gates. **The human voice verdict remains pending.** This pilot does not establish that the new wording beats the current guide.

## Scope and implemented changes

Five page pairs were completed: Create a command; Cooldowns and permissions; Timers and chat triggers; Built-in commands; First-run setup. `original/` preserves immutable starting articles. `comparison-original/` keeps their wording/layout with factual corrections only; `new/` contains the rewrites. Both comparison variants have the same fixed factual requirements. No live article was replaced.

The draft skill now has 1103 words. It includes the nine voice decisions, project-local B and three explained before/after pairs, exact named checks, batched execution and a recomputed resume checkpoint. One combined page/card/render fingerprint binds each review; card changes invalidate reviews. Citation evidence can use separate exact excerpts, with invented text rejected. Reader answers precede length warnings. The checker implements these rules rather than merely describing them.

## Evidence and acceptance

| Check | Result | Evidence |
| --- | --- | --- |
| Checker regression suite | 41/41 passed | [Full test log](results/checker-tests.log); page and batch tests in the draft skill. |
| Skill structure | Valid | `skill-creator/scripts/quick_validate.py` command result. |
| Independent source/coverage review | 10/10 candidate files clear | [Fact review](fact-review/): 62 required coverage groups per variant, plus all 43 built-in catalog entries in each. These are coverage groups, not a count of every factual claim. |
| New and factual-control isolated builds | Passed | [Current new preflight](results/preflight-current.log), [comparison build](results/comparison-build.log). MDX, content/navigation, types, 79 documentation tests, search, Astro and rendered targets checked. |
| Corrected reader calibration | 5/5 valid defects caught; 5/5 intact controls clear | [Independent evaluation](calibration/run-2/evaluation.md): all 20 required intact answers source-supported, zero invented material control faults. |
| Final shared named checks and fresh reviews | 5/5 ACCEPTED | [Final command output](results/final-acceptance.log), [checkpoint](progress.md), [review records](reviews/). One identical full build command ran once for the five-page batch. |
| Human listening / natural voice | Pending | [Blinded listening pairs](listening/index.html), [notes sheet](listening/observations.md). No preference entered by an agent. |

Source corrections in both variants include configurable management floors, creation-dialog delivery and name cleanup, bound-command disabling, caller-relative numbered song removal, timer first-fire/counting/speech distinctions, and the separate account-connection/music prerequisites in first-run setup. Code evidence is in the contracts and fact reports. No live bot, chat, TTS, OAuth or restart experiment was performed.

## Calibration outcome and limits

[Run 1](calibration/evaluation.md) is retained as **invalid/inconclusive**, not relabelled a success or a reader miss. Four valid defects were caught, but the timer mutation left a duplicate early explanation. After independent diagnosis, both initial-fire paragraphs were moved after the related links. That corrected stimulus was checked before fresh readers received Run 2.

Run 2 caught the omitted creation action, contradictory cooldown outcome, buried timer condition, contradictory reset promise and missing own-app prerequisites for the intended reasons. Initial answers/findings determined detection; after-warning verdicts did not replace those records. Citation repairs preserved answer/findings text.

These are retrospective agent editorial reviews. One context printed every complete article before main-path reasoning; another exposed its first whole article before using ordered chunks. The limits are recorded in [the protocol](calibration/protocol.md) and evaluation. There were two fresh reader contexts in the corrected run, not ten independent people. This does not prove prospective first-use behavior, playback quality, usability or performance by another model.

The additional independent baseline reader answered the same four factual tasks on all five factual-control pages correctly (20/20 supported). Its whole-article lookup process differs from the refined ordering review. Neither those scores nor the shape counts establish a comparative voice win.

## Shape measurements

Across these five pairs, rendered non-code words **including table text** changed from 9,540 to 9,093; visible table rows **including headers** from 172 to 158. Both built-in catalogs retain all 43 commands. These are diagnostics, not quality scores. Per-page counts and their exact definitions are in [shape-metrics.json](results/shape-metrics.json). They are not documentation inventory or generated-page counts.

## Adoption and remaining human work

Open `listening/index.html` locally and try each page's short task with read-aloud. A/B identities vary by page. Save pauses, guesses and preferences before opening its private key. Both versions share presentation and verified requirements; related links open the public development preview outside the paired extracts.

The owner's listening result, first-time streamer/moderator usability, and actual browser/read-aloud playback remain unverified. **Canonical Atlas is not yet replaced.** Its old voice, writer, reader and checker resources must be reconciled together at eventual adoption; [the replacement boundary](atlas-replacement.md) lists them. Current installed skills were not changed.

Builds ran in a temporary isolated copy. The five live articles still match their immutable originals byte for byte. Nothing was pushed, published or restarted, and production/public-preview deployment was not reverified by this pilot.
