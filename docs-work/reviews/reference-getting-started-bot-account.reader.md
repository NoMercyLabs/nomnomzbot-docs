# Reader review: src/content/reference/en/getting-started/bot-account.mdx
Verdict: PASS
Reviewed: src/content/reference/en/getting-started/bot-account.mdx
Reviewed-SHA: 97b48435f38a35b2

Round 2. Fresh review of the whole page, read as the file stands (sha256 full: 97b48435f38a35b2d6acd35e2ac729f4aa06d473c75185747bf0dcad06849e02).
Assumed pages: sign-in and connect-platforms. Pilot checked: create-a-command (tables, numbered steps, bold labels, Related pages).
Read rules used: docs-work/page-conventions.md first, then the Atlas reader rules.
Verdict rule for this run: FAIL only for a blocking finding (a wrong fact, or a step a non-coder cannot follow).

Blocking findings: none.

Why PASS, with two open items:
- The self-hosted account rule (line 20) and the table (line 17) may conflict. I cannot confirm a wrong fact from the page alone. Fact-check must settle it. If it is wrong, this becomes blocking.
- The shared-bot recovery (lines 61-63) names no action. I judged it a gap, not a step a reader is told to take. Not blocking.

Findings (not blocking):
- [line 20 vs line 17] A self-hosted reader cannot tell which account applies. Line 20 says a self-hosted bot uses the streamer's own account until a separate bot account is registered. The table row 2 says the shared bot is used when the install has one connected. The page does not say whether a self-hosted install can have a shared bot. -> The reader cannot predict which row applies to them. Fact-check item.
- [line 45] Sentence 3 carries two ideas: the marker is skipped, and the reason. -> Split it into two sentences.
- [line 43-46] Paragraph over three sentences. See density list. -> Split or cut one sentence.
- [line 53-56] Paragraph over three sentences. See density list. -> Split it. The notice quote and its explanation are the core; the timing sentence can stay alone.
- [line 16 vs line 20] Term drift: "connected" (line 16) and "registered" (line 20) for the same bot account. -> A reader may look for a registration step the page does not describe. Use "connected" in both places.
- [line 17] "the install has a shared bot connected." "Install" is not defined on this page, and the page does not say who connects a shared bot. -> A streamer may not know what "install" means here.
- [line 20] "A self-hosted bot" is used before any definition. -> A streamer on the hosted service may not know the term. Define it in one clause, or link the self-hosting page.
- [line 20] Voice: "the streamer's own account" is third person. The rest of the page says "your own account" (line 34, 51). -> Use "your" to match the pilot's voice.
- [line 7] "This page explains which account that is." A sentence about the page, not the subject. -> Cut it, or start with the account.
- [line 21] Opens with "So". Filler. -> Start with "After you connect Twitch, the bot can already type in your chat."
- [line 6] "The bot types its lines in your chat from one Twitch account." The table then lists three accounts. -> Say "from one account at a time" or "from one of three accounts".
- [line 38] "**Bot line marker**" is bold, but the rest of the step text uses plain words for other labels. -> Check that every label in the steps is bold the same way (step 1 bolds **Settings** and **Bot basics**; check **Save** and **Basics saved.** too).
- [line 61-63] "the dashboard asks you for it in its notices" names no notice, no action and no place. A reader cannot tell what to do when the permission is missing. -> Name the notice and the step, or say that the sign-in page covers it. Not blocking because the notice itself is the step, and the page does not claim a path.
- [line 58-65] "the permission to manage moderators on your Twitch account." A streamer may not know what this permission is called on Twitch. -> Name the Twitch permission in the words the Twitch sign-in screen uses, if the reader must act on it.

Density list (measured on this file):
- Lines 6-8: 3 sentences, 25 words. OK.
- Lines 20-21: 2 sentences. OK.
- Lines 23-24: 2 sentences. OK.
- Lines 28-30: 3 sentences. OK.
- Lines 34-35: 2 sentences. OK.
- Lines 43-46: 4 sentences, 53 words. Over the limit. Sentence 3 (line 45, 21 words) has two ideas.
- Lines 50-51: 2 sentences. OK.
- Lines 53-56: 5 sentences, 66 words. Over the limit. Sentences: (1) "When the bot account loses ... in your channel"." (2) "The notice says: "Type /mod BotName in your Twitch chat." (3) "Twitch limits what a bot without the moderator role can do."" (4) "BotName stands for ... bot account." (5) "The notice clears ... again."
- Lines 61-63 (inside details): 3 sentences. OK.
- Parallel facts: the table at lines 14-18 holds them. Lines 23-24 (two status words) are fine in prose.

Generic-rule note: the Atlas reader rule says an undefined term at first use decides the verdict. This run's verdict rule says FAIL only for a blocking finding. I applied this run's rule. The undefined terms ("self-hosted", "install") are listed above and do not decide the verdict.

Where I got lost:
- Which account a self-hosted streamer gets (line 20 against the table on line 17). I could not tell from the page alone whether a shared bot applies to a self-hosted install.
- What to do when a shared bot is missing its moderator permission (lines 61-63). The page names no action.

Changes since round 1 (checked as read):
- The notice (lines 53-56) now says BotName and line 55 explains it: "BotName stands for the name of your bot account." Resolved for a reader.

Same person: yes. Headings, the labels table, the numbered steps and the Related pages list match the pilot page. Sentence voice is active and plain. One third-person phrase (line 20) and one sentence about the page (line 7) differ.

Not checked (reader lane reads the page only): link targets (line 16, 21, 70-72), the dashboard label text (Settings, Bot basics, Bot line marker, Save, Basics saved.), the notice text, and the code. Fact-check owns these.
