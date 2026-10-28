# Reader review: src/content/reference/en/automation/event-responses.mdx
Verdict: PASS
Reviewed: src/content/reference/en/automation/event-responses.mdx
Reviewed-SHA: ddc8c868b4c8addb

Round 4. Page read as stored; it has no include or snippet directive. The new section for events with no default lines is consistent with the rest of the page:
- The badge table (lines 104-109) gives four cases, and each one matches the row text in lines 27-31.
- Line 111 (32 of 50 with no default lines) matches line 56 (18 of 50 start on) and line 81 (18 events have default lines).
- The switch table (lines 167-170) says an event with no default lines says nothing until a line is saved. That matches troubleshooting line 201.
- Line 164 ("either direction takes the event off the default") still matches the table.

Blocking findings: none.

## Notes (do not decide the verdict)

- [6-9] Four sentences in one paragraph. Unchanged since round 2. Split after line 7.
- [76-79] Four sentences in one paragraph (47 words). Unchanged since round 2. Split after line 77.
- [127] "Informative tone" is named with no list of tones. Unchanged since round 2.
- [155] Two ideas in one sentence: where pipelines are explained, and where commands are explained. Unchanged since round 2.
- [107] The badge **Platform default** sits on a row with no default lines, and the box is empty. A reader may take the badge to mean the bot posts a default line. Say that such an event posts nothing until you save a line.
- "footer" (lines 90, 95, 174) is not defined on this page. create-a-command.mdx also uses it without a definition.

## Density

- Paragraphs over three sentences: two, unchanged since round 2. Lines 6-9 (4 sentences) and lines 76-79 (4 sentences, 47 words).
- Sentences with two ideas: line 155 only. Line 138 ("starts off for every event except ...") is one idea with an exception.
- Parallel facts in prose: none. The event groups (lines 40-50), the start-on groups (lines 61-66), the badge cases (lines 104-109) and the Enabled outcomes (lines 167-170) are tables.
- Voice against create-a-command.mdx: the same person wrote both. Subjects are the actor or the thing, results are stated, and the page does not talk about itself.

## Where I got lost

1. Line 127: I could not tell which tones exist, so I could not tell which one the "Informative" default is in.
2. Line 107: I could not tell whether an event with no default lines and the **Platform default** badge posts anything. The table in lines 167-170 says it does not, but the badge row does not.

Process: nothing was edited except the verdict file. Nothing was committed. Not checked: the source of the switch and badge behavior (the reader reads the page only); whether another review of this page was running when this one started.
