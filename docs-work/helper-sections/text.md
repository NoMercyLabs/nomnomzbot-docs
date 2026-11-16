## Start with a small transformation

Text helpers change the value you give them before it appears in the reply.
`{text.upper:hello chat}` gives `HELLO CHAT`; `{text.upper:{args}}` applies the same operation to the words after a command.
The nested helper supplies the input, so you can change the presentation without asking viewers to type capitals themselves.

For a short display, `{text.cut:hello world|max=8|end=...}` gives `hello...`.
The maximum includes the ending, so the final text fits in eight characters.
The table distinguishes this from helpers that append an ellipsis after taking a specified number of characters or words.
