## Let viewers supply part of the answer

A command argument is a word after the command name.
In `!hello chat`, `chat` is the first argument, so the reply `Hello {args.1:friend}!` becomes `Hello chat!`.
Typing just `!hello` gives `Hello friend!` because the text after the colon is the fallback for a missing word.

Use `{args}` when you want all the supplied text together, or `{args.2+}` when the first word has another job and the rest is the message.
The numbered forms count from 1, starting after the command name.
An input such as `{args.1.number:1}` reads a number or supplies the fallback; it does not change a balance or counter by itself.

The `args.<n>.user.points` family reads the named person's balance in the bot's [channel currency](/reference/economy/currency-and-balances).
It does not read their Twitch Channel Points balance.
