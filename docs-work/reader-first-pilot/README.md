# Reader-first Atlas pilot

Scope is fixed at five page pairs: Create a command; Cooldowns and permissions; Timers and chat triggers; Built-in commands; First-run setup.

- `original/`: immutable copies of the starting articles.
- `comparison-original/`: original wording/layout with source-backed factual corrections only.
- `new/`: rewritten copies with the same fixed factual requirements.
- `contracts/`: independent required coverage, source evidence, questions and evaluator-only answers.
- `fact-review/`: independent full-page source/coverage results for both variants.
- `manifest.json` + `progress.md`: complete scope and recomputed acceptance/resume checkpoint.
- `results/`: build logs and precisely labelled shape metrics.
- `calibration/`: blinded model-review trials, initial records, final reviews, seed keys and independent evaluation. Evaluator keys are not reader material.
- `listening/index.html`: start the owner's unlabelled A/B listening comparison. Labels vary by page; keep its private key closed until notes are saved.
- `atlas-replacement.md`: resources that must be reconciled at eventual in-place migration. Canonical Atlas is not yet replaced.

Use the listening task on each page and record pauses, guesses and preference in `listening/observations.md`. The paired pages are rendered extracts with common presentation, not interactive application tests. Related links open the public development preview and are outside the paired copies. Nothing in this pilot publishes or deploys those copies.

Current evidence: all ten candidates independently source/coverage-reviewed; both full isolated site builds passed; checker tests 41/41 passed. Run 1 was invalid because its timer fixture retained an early duplicate. Corrected Run 2 passed independent calibration: 5/5 defects caught and 5/5 intact controls clear; final batch gates accepted 5/5 rewritten copies. Agent reviews are not the owner's listening test and do not establish that the new voice wins. [RESULTS.md](RESULTS.md) distinguishes final evidence and remaining boundaries; a preflight result or manual label does not count as acceptance.
