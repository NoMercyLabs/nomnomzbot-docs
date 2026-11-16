# Independent calibration evaluation: Run 2

**PASS for this agent editorial calibration:** initial reviews detected all **5/5 valid seeded defects for the right reason**. All **5/5 intact controls** avoided invented material defects and had **20/20 source-supported answers** to the four fixed questions. No legitimate control fault was mistaken for reviewer error.

Initial `blind-review.initial.json` answers and findings determine detection. After D and E confirmed frozen finals, all ten final records were checked: answer and finding text changed **0/10** times; required excerpts were present in the rendered articles; final FAIL/PASS distinctions matched the initial semantic findings. Final diagnostics did not substitute for initial detection.

| Case | Topic/type | Independent assessment of initial evidence |
| --- | --- | --- |
|101|Built-ins: reset contradiction|Q3 and finding identify one-field promise for whole Reset, conflicting with Back to default and broader reset; concrete risk of losing unrelated edits or reactivation.|
|102|Cooldowns: contradictory outcome|Q3/finding identify refused t=5 restart versus unchanged no-restart rule and incompatible t=60/t=65 predictions.|
|103|Create: intact|4/4 supported: create/enable/test, access/VIP, save/observe and duplicate defaults. No material fault invented.|
|104|Timers: late condition|Q1 identifies first-post timing only at the end; Q5/finding cite an enabled public reminder posting within 30 seconds before a reader expecting a 30-minute first wait can prepare. Correct consequential ordering finding, not a length preference. All factual answers remain supported.|
|105|Setup: missing prerequisite|Q2/finding correctly leave own-app email/2FA eligibility and authority UNKNOWN while retaining the actionable shared path.|
|106|Timers: intact|4/4 supported, including early next-poll firing, offline behavior and conditional default-prefix exclusion. No material fault invented.|
|107|Create: omitted action|Q1/finding identify absent Create command/initial-enabled outcome, unfinished dialog to chat-test jump and practical UI/reference detour.|
|108|Cooldowns: intact|4/4 supported, including platform-versus-stored role, timing and Artist-denial speech. No material fault invented.|
|109|Setup: intact|4/4 supported, including explicit Twitch email/2FA attribution and optional account/secret/feed distinction. No material fault invented.|
|110|Built-ins: intact|4/4 supported, including runtime music grant, reset scope and caller-only Nth pending request. No material fault invented.|

## Seed integrity

Nine unchanged article copies are byte-identical to their corresponding Run 1 rendered articles, including the four other mutations. Timer seed104 was independently validated before readers: both explicit initial-firing paragraphs (control106 HTML19 and124) move to after Related pages (seed445–446). Early repeating poll frequency remains accurate, but no equivalent early new-timer/already-due paragraph remains. The pre-reader check is in `seed-validation.md`. Run 1 remains invalid/inconclusive; it was not relabeled a reader miss or silently repaired in place.

## Fresh fact records and sources

The evaluator independently read the new Run 2 answers, not just previous verdicts. Each was compared with its fixed contract and current implementation anchors, including creation/editor save behavior, incoming-platform cooldown predicates, timer first-fire state, effective music gates/reset writes and setup credential/OAuth boundaries. Full factual coverage remains documented in `../../fact-review/`. Source HEAD stayed `f741789bf6b8d90ae2fd07f33a307a5a11623606`.

Five fresh route-encoded `.fact.json` files were written in intact-case `reviews/` directories (103,106,108,109,110). Each uses an independently recomputed current combined page/card/render fingerprint, names actual source and coverage evidence, and supports each newly reviewed answer1–4. Their schema was checked; no build or final acceptance command was run here. Each case’s one combined page/card/render fingerprint, initial findings, unchanged-by-direct-comparison result and answer grades are in `evaluation.json`.

## Actual execution and limits

Actual execution limit: reader D printed each full article before reasoning through the main path (and also printed input.rendered_article for the first case). Reader E printed input.rendered_article for its first case before intended chunking, then used metadata-only reads. These are retrospective agent ordering reviews, not prospective first-use observations; the requested sequence is not presented as achieved human behavior. Neither run is a human usability or read-aloud playback test. No result here proves another model/reviewer process will behave the same way.

This is **retrospective agent editorial ordering and lookup judgment**, never prospective first-use human usability. Two fresh reader contexts reviewed five topics each; this is not ten independent human subjects. No human listening/audio playback, natural-voice validation, speed comparison or runtime bot/OAuth/overlay test occurred. These cases do not prove another model/reviewer will behave the same way. The finite calibration PASS does not itself accept a documentation page: root-owned named build/batch checks and the separate human listening condition remain.
