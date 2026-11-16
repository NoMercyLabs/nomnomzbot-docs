## Make a time clear to your audience

Use the channel's local time for a quick clock reply, or specify a time zone when you want to show the same moment elsewhere.
For example, `{date:now|tz:America/New_York|format:HH:mm}` displays the current hour and minute in New York.
The `tz` part changes the zone and `format` chooses how the result looks; neither changes your channel's time-zone setting.

For a fixed date, `{date:2026-12-25|format:dd/MM/yyyy}` gives `25/12/2026`.
The letters are formatting tokens: `dd` is the day, `MM` the month, and `yyyy` the year.
Use `until` for a countdown to a date and `since` for elapsed time; their values depend on when the reply runs.
