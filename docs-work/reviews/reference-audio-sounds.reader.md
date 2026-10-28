# Reader review: reference-audio-sounds (round 2)
Verdict: PASS
Reviewed: src/content/reference/en/audio/sounds.mdx
Reviewed-SHA: ff0b35829c5551d5

## Round 1 findings, status

- [round 1, L53 four facts in one sentence] Fixed. L54-59 is a table.
- [round 1, L53 "chat word" before its meaning] Fixed. L57 links to the section, and L76 defines the word in the Edit table.
- [round 1, L98-99 vague pipeline step] Fixed. L107-108 names the command's **Pipeline** field and the reward's settings.
- [round 1, L110 "its all switch"] Fixed. L120 names **All**.
- [round 1, L101-105 "(true/false)" in a label] Still there at L114 (**Wait for finish (true/false)**). Not checked against `en.json` (reader review reads the page only). Non-blocking.
- [round 1, L130 "the list in the dialog"] Fixed. L140 says the dialog lists each kind of place that uses the clip.
- [round 1, no Troubleshooting or Related pages] Fixed. L148-168.

## Blocking findings

None. Every step in the add, edit, chat-word, turn-off and delete flows names its control and its visible result. A reader can finish each flow from the page alone.

## Non-blocking findings (style or clarity, do not decide the verdict)

- [L118-121] This paragraph has four sentences. The page-conventions rule is three sentences at most per paragraph. Split it, or move the last sentence ("A **Play sound** step fails...") to the Troubleshooting section.
- [L71-73] The Edit table column is headed "A new clip starts with", but the Edit dialog shows each clip's current value (L67). The column means the default when the clip is added. Consider the heading "Default when added".
- [L107-108] "in the reward's settings on [Rewards]" names the place, but not the setting label. The rewards page owns it. Not checked against the rewards page (assumed taught; reader review reads this page only).
- [L121] "A **Play sound** step fails" does not say where the reader sees the failure. A reader who expects a message finds none.
- [L87-89] "A chat word plays a clip when a viewer's whole message is that word." followed by "Case does not matter." Clear, no action needed.
- [L101-102] "It does not also start a chat trigger with the same word." This is a claim about the chat trigger engine. Not checked against the product code (reader review reads the page only).
- [L114] **Wait for finish (true/false)** still shows a code-style type. Check the label against `en.json`.

## Density

Paragraphs over three sentences: [L118-121] has four sentences (quoted: "The **Stop sound** step stops clips that are playing." "With **Handle** set, it stops that playback." "With **All** on, it stops every clip that is playing." "A **Play sound** step fails when the clip is switched off or does not exist.").

Sentences with four or more parallel facts: none. The table at L54-59 holds the four facts.

Sentences with two ideas: none found beyond the single-example sentence at L88.

## Where I got lost

- L121: I could not find where a **Play sound** failure appears, and the page says nothing about a message.
- L107-108: I could not find the reward's pipeline setting without the rewards page open.
- L71-73: I first read the "A new clip starts with" column as the current value in the Edit dialog.
