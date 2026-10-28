# Reader review: src/content/reference/en/getting-started/first-command.mdx
Verdict: PASS
Reviewed: src/content/reference/en/getting-started/first-command.mdx
Reviewed-SHA: 6e7bf29b8b9d5ef8

Round 1. Read as the file stands (full sha256: 6e7bf29b8b9d5ef84a083ba76f6aef16fd3e251c6b43ebe4e246b6d1679333e4).
Assumed pages (sign-in, connect-platforms, bot-account, dashboard-tour): not re-read in this run. I judged only against the list in the dispatch. Pilot checked: create-a-command (voice and shape).
Verdict rule for this run: FAIL only for a blocking finding (a wrong fact, or a step a non-coder cannot follow).

Blocking findings: none.

Findings (not blocking):
- [line 36-37] "The `!` is the channel prefix when you have set none. If your channel uses a different prefix, type that instead of `!`." The page does not say where the reader sees the channel's prefix. -> A streamer with a changed prefix cannot find it from this page. Name the place: **Command prefix** on the **Bot basics** settings page, as [Create a command](/reference/commands/create-a-command) does.
- [line 36] "prefix" is used before it is defined. -> Add a clause at first use: "The prefix is the text chat types before the name."
- [line 32] "Open your channel's chat." The page does not say which chat window. -> A non-coder may open a different chat. Say "Open your channel's chat on Twitch." Only if the page is meant for Twitch first; connect-platforms owns the platform list.
- [line 44-47] Troubleshooting has one cause on this page and sends the reader to another page for the rest. -> Acceptable. The pointer names its target clearly.
- [line 19] "The **New command** dialog opens." follows the line "On an empty list, **Make the first command** does the same." The sentence about the empty list sits inside step 2 and is read as a second instruction. -> Move it to its own line after the step, or cut it. Not blocking: the step's outcome is stated.
- [line 22] The reply example "Hello, welcome to the stream!" is a fine sample. It is not a finding; the reader types their own line.

Density list (measured on this file):
- Lines 6-8: 3 sentences. OK.
- Lines 10-11: 2 sentences. OK.
- Lines 27-28: 2 sentences. OK.
- Lines 36-37: 2 sentences. OK.
- Lines 39-40: 2 sentences. OK.
- Lines 45-47: 3 sentences. OK.
- Lines 53-54: two bullets, one sentence each. OK.

Parallel facts that should be a table: none. The steps are the right shape.

Where I got lost:
- Where to find the channel prefix if it was changed (line 37).
- Which chat window to open (line 32). A reader who has not yet connected Twitch may not know that chat must be reachable first; the assumed connect-platforms page covers this.

Same person: yes. The page uses the same numbered steps, bold labels, the same "Troubleshooting" block form and a Next steps list, like the pilot. Voice is active, second person, short.

Not checked (reader lane reads the page only): link targets (line 11, 15, 47, 53, 54), the dashboard label text (**Commands**, **New command**, **Name**, **What it does**, **Reply**, **Create command**), the default prefix in the code, and the empty-list button label. Fact-check owns these.
