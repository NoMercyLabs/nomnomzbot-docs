# Independent calibration evaluation: run 1

**Required calibration gate not passed: invalid timer fixture, not a demonstrated reader miss.** Initial findings caught 4/4 valid seeded defects. The key labels five seeds, but case 109 did not actually bury its initial-timer rule; it is excluded as invalid/inconclusive, not silently reclassified as a successful fifth trial. Raw key-labelled detection is 4/5. All 5 intact new controls and all 5 comparison-original pages have supported answers1-4 and no invented material defect.

Initial `blind-review.initial.json` answers/findings determine detection. Final reviews were inspected only for final fingerprints, excerpt grounding and whether answer text changed. Across all 15 cases, answer text changed 0 times; final warnings/verdicts did not rescue a missed initial detection. All final excerpts for required answers were found in their actual rendered article. Current combined page/card/render fingerprints were independently recomputed for the10 intact/new and comparison-original candidates.

| Case | Kind | Independent initial assessment |
| --- | --- | --- |
|101|Intact cooldowns|4/4 answers supported; no material finding invented.|
|102|Reset contradiction|Detected in Q3 and finding: one-field Reset promise conflicts with whole-command reset and risks unrelated changes.|
|103|Intact built-ins|4/4 supported, including effective music access, reset distinction and caller-only skip numbering; no false finding.|
|104|Intact timers|4/4 supported, including first next-poll firing and ordinary-message matching; no false finding.|
|105|Missing creation action|Detected in Q1/finding: missing submit step and its enabled outcome; does not invent a button from prior knowledge.|
|106|Cooldown contradiction|Detected in Q3/finding: refused t5 attempt both restarts and does not restart waits.|
|107|Intact setup|4/4 supported; explicitly answers verified-email/2FA question and identifies Twitch registration attribution.|
|108|Missing own-app prerequisites|Detected in Q2/finding: verification/2FA and authority absent; correctly marks UNKNOWN rather than guessing.|
|109|Intended timer burial|Invalid seed; retained early first-fire explanation makes all4 answers supported. No material finding required.|
|110|Intact creation|4/4 supported; submits/enables, saves and correctly predicts duplicate defaults; no false finding.|
|201–205|Comparison-original controls|5/5 pages,20/20 answers supported; no material defect invented.|

## Mutation isolation and case 109 diagnosis

- **105 versus110:** only HTML line 25 is removed: `Choose Create command` plus the enabled/editor outcome. One atomic workflow step is removed; other content unchanged.
- **106 versus101:** only line 38 changes the refused attempt to restart both waits. The unchanged explanation says refusal starts neither. This cleanly tests contradictory outcome.
- **102 versus103:** one paragraph is inserted at 502 promising whole Reset changes only one cooldown. The separate Back to default and broad reset reference are unchanged.
- **108 versus107:** prerequisite clauses are removed at 66 and 96, including both duplicated email/2FA explanations and registration-source link. It leaves the shared-app route and other own-app steps intact.
- **109 versus104:** only control line 19 moves to seed line 446 after Related pages. At seed **115**, the page still says it checks about every 30 seconds. At **123**, it still says a never-fired timer is already due and a new timer can post at the next check. Creation at 44 still says switched on;49 tells the reader to watch for first line and then expect the second after 30 minutes. Thus the stated initial-next-poll condition was not isolated at the end. The reader’s initial no-obstacle judgment is defensible; do not call it failure to detect a valid material ordering defect.

## Answer and source grading

Every answer1-4 was compared with the fixed per-page contract and the current source paths/ranges already reviewed in `fact-review/`. The 40 required answers on intact/new and comparison-original pages are supported. The four valid seeded cases correctly expose their affected question as unanswerable or contradictory; their other answers remain supported. Case109’s answers are supported because its early explanation survives. No legitimate baseline/control material fault was found; none was mislabeled an invented reviewer failure.

The accompanying `evaluation.json` records each case’s one combined page/card/render fingerprint, initial findings and four independent answer grades with primary source evidence. Ten route-encoded `.fact.json` records were written in the corresponding intact/new and comparison-original case `reviews/` directories, using current fingerprints and actual coverage/source reports. Those individual source/answer records do not accept this calibration run or the overall pilot.

## Limits

Only these cases and fresh reader-agent sessions were observed. Calibration used two readers with five cases each, plus one baseline reader with five cases; this is not 15 independent human participants. This does not establish human voice, actual listening usability or behavior of other models. No live command, OAuth, timer, overlay or audio tests occurred. Build/final acceptance checks remain separate. Writer pages, private seed keys and reader records were not edited.
