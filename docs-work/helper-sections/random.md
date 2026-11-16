## Decide whether each mention should draw again

Use `{pick:Pizza|Pasta|Soup}` when you want one suggestion from a short set written directly in the reply.
For a set you want to manage separately or share across commands, use a [pick list](/reference/commands/pick-lists).
Random draws can repeat; they are not a way to guarantee that every choice appears before another is picked.

When the same number needs to appear twice, give it a roll name.
`{roll.score.1.100} out of 100; score again: {roll.score}` draws the number once for that reply and reuses it, so both places agree.
Ordinary random helpers draw independently.

In an authored reply, `{pick:Pizza|Pasta|Soup}` avoids selecting the same entry immediately twice when there is more than one choice.
That short-term memory ends when the bot restarts, and viewer-written `{pick:...}` uses ordinary random selection instead.
A single available choice can always repeat.

A random-chatter helper is a playful choice from the chatters it can see.
Use [Giveaways](/reference/economy/giveaways) when you need entry rules, a recorded winner, and a claim process.
