## Pronouns

The pronoun and grammar helpers sit in the first table below.
The reply uses the person's saved pronouns, which can come from their own choice or the external pronoun service.
To learn where the bot gets pronouns and how to write a reply that fits he, she and they, read [Pronouns in templates](/reference/templates/pronouns).

## Welcome the person who asked

Put `Welcome {user}!` in a command reply to greet its caller.
Use `{target.displayname}` instead when the greeting is for someone named after the command.
Keeping those two people distinct matters for replies such as `{user} sends a hug to {target.displayname}.`

The points helpers read the bot's [channel currency](/reference/economy/currency-and-balances), not a viewer's Twitch Channel Points balance.
They report values; putting `{user.points}` in a reply does not grant or spend currency.
