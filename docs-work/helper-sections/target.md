## Pronouns

The `target.` pronoun helpers sit in the first table below.
They read the saved pronouns of the person the command names.
To learn where the bot gets pronouns and how to write a reply that fits he, she and they, read [Pronouns in templates](/reference/templates/pronouns).

## Write a reply about someone else

For a command used as `!hug @someone`, try `{user} sends a hug to {target.displayname}.` as its reply.
The caller's name fills `{user}`, while the named person's display name fills `{target.displayname}`.
The bot can look up a Twitch account it has not seen in chat before; when that lookup fails, the display-name helper falls back to the word supplied.

Use a target-dependent reply for commands where viewers are expected to name someone.
A timer has no such caller or named person, which is why target helpers are not listed for timers in **Use in**.

The points helpers read the named person's balance in the bot's [channel currency](/reference/economy/currency-and-balances).
That balance is separate from Twitch Channel Points used for rewards and predictions.
