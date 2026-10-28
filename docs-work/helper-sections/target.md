## Where pronouns come from

The target's pronouns come from the same place as a viewer's pronouns.
The bot looks up a person's pronouns on the alejo.io pronoun API and saves them when that person chats in any channel the bot is in.
The saved pronouns are the same in every channel.
A reply about the target reads the saved pronouns. It does not look them up again.
A target the bot has never seen chat, and who never picked pronouns in the bot, gets "they".
Pronouns set by a command that runs the Set pronoun action stay set.
Read [Where pronouns come from](/reference/templates/user#where-pronouns-come-from) for the full list of words.

## Write correct sentences about the target

Use the `target.` helpers when a line talks about the person a command names.
Do not type "he", "she" or "his" for the target.
The bot picks the right word for each target.

- `{target.subject}` gives he, she or they.
- `{target.object}` gives him, her or them.
- `{target.possessive}` gives his, her or their.
- `{target.presentTense}` gives is or are.
- `{target.tense}` gives is or are while live, and was or were when offline. In a shoutout it follows the target's stream. Everywhere else it follows your channel's stream.
- `{target.verb:plays|play}` gives the first form for he and she, and the second form for they.

Write the first letter of the helper name in upper case to start a sentence.
`{Target.Subject}` gives He, She or They.

For example, type `Say hi to {target.displayname}! {Target.Subject} {target.presentTense} new here, so help {target.object} feel at home.`
For he, the bot writes "Say hi to Alex! He is new here, so help him feel at home."
For they, it writes "Say hi to Alex! They are new here, so help them feel at home."

If the bot has no pronouns for the target, it uses they, them, their, person, are and were.
Read [Write correct sentences](/reference/templates/user#write-correct-sentences) for the verb rules, the capital letter and more examples.
