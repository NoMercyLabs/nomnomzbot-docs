## Reuse a value inside one reply

Use `{set:mood=happy}I feel {var.mood}.` when you want to name a value once and read it later in the same reply.
The assignment produces no visible text, so the result is `I feel happy.`
It lasts only for this rendering; the next command use does not remember it.

For something that should survive another use or a restart, use the relevant stored feature, such as a named counter or viewer data.
An include helper is different again: it reads another command's reply or a list entry so you can reuse wording rather than copy it into several commands.
It does not turn a template into a pipeline of actions.
