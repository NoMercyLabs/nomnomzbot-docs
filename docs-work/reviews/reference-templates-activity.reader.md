# Reader review: src/content/reference/en/templates/activity.mdx
Verdict: PASS
Reviewed: C:/Projects/NoMercyLabs/nomnomzbot-docs/src/content/reference/en/templates/activity.mdx
Reviewed-SHA: ca5fb5e0b41ebbb2

## What I read
The whole page, plus the overview (templates/overview.mdx) and Variables and templates (commands/variables-and-templates.mdx) it links to.

## Tests
1. Find a helper: "busiest hour" (L16) and "top chatter" (L29, L31) each sit in one row. Found in one look.
2. Use a helper: `{activity.busiestHour}` gives `21:00` and `{activity.top.stream}` gives `ViewerOne (140)`. I can write both exactly as shown and know the chat line. `{activity.chatters.active:10}` (L17) also works as shown.
3. Intro says what the page holds (L8-9). Footer links to the overview (L35).
4. The first line (L6) names `{activity.*}` only, and every row is in that family. Pass.

## Findings
- [L17, L27, L28, L30] Helper names in the text are not in braces or backticks: `activity.chatters.active:10`, `activity.mpm:5`, `activity.random.recent:5`, `activity.top.list:3`. A reader cannot tell these are helpers to type. Fix: wrap each in backticks with braces, as in the Example column.
- [L17, L27, L28] "in the last minutes" does not say the number means minutes, or the window when no number is typed. Fix: "in the last N minutes (1 to 60, default 1)" if that is the real default. Not checked against the product source (reader review reads the page only).
- [L30] The "What it gives" cell lists two names (`ViewerOne 140, ViewerTwo 96`), but the Example column gives three names. Fix: make both show the same list.
- [L21] "since the bot joined the channel this session" uses "session", which is not explained. A streamer may not know what a session is here. Fix: say "since the bot last joined this channel" if that is the meaning.
- [L21] The name says `stream`, but the text says the count does not restart when a stream starts. Fix: state the scope in the row name or in one plain sentence.
- [L26] "(channel day)" is not explained. Fix: "today in the channel time zone", as L16 does.

## Where I got lost
- L21: I could not tell whether `{activity.commands.stream}` counts this live broadcast or the whole session. The name and the sentence point different ways.
- L17: I had to guess that 10 means minutes.
