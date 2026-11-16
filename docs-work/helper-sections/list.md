## Read a saved choice or count

Make a named list on [Pick lists](/reference/commands/pick-lists), then use `{list.pick.snacks}` to draw from a list called `snacks`.
Use `{list.item:snacks|2}` when you want its second entry rather than a random one.
These helpers read the list; they do not add, remove, or reorder its saved entries.

Named counters work the same way from a reply's perspective.
`{count.deaths}` shows the saved value, while **Adjust counter** or **Set counter** in a [pipeline](/reference/commands/pipelines) changes it.
Showing the counter twice does not increment it twice.
