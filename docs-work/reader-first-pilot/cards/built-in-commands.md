Route: /reference/commands/built-in-commands
Reader: A streamer or moderator using the feature described by built-in-commands
Type: lookup
Arrives-with: Which command pauses music, who can actually pause it, and what are its default normal cooldowns?
Goal: Answer the reader request and retain the complete fixed contract coverage
Success: The observable result and distinctions specified by the independent contract
Application-case: Two moderators type bare `!skip` five seconds apart. Does normal moderator cooldown bypass let both skip, and could an ordinary viewer use `!skip 4`?
Prerequisites: none beyond reading for catalog lookup. Invocation needs a connected bot, enabled/available command, correct channel prefix, sufficient effective role and clear normal gates; ordinary viewer chat commands need live/offline opt-in, except reserved data-rights commands. Feature-specific commands need their feature configured (music/economy presence does not configure it). Dashboard customization needs Commands write access, Moderator by default and potentially raised; System commands is hidden from read-only access. Whispers require bot Twitch whisper availability, `!` prefix and an identifiable connected channel.
Project-root: C:\Users\patri\AppData\Local\Temp\reader-first-pilot-5l01g5w7\nomnomzbot-docs
Built-root: C:\Users\patri\AppData\Local\Temp\reader-first-pilot-5l01g5w7\new-dist
Rendered: C:\Users\patri\AppData\Local\Temp\reader-first-pilot-5l01g5w7\new-dist\reference\commands\built-in-commands\index.html
Voice: C:\Projects\NoMercyLabs\nomnomzbot-docs\docs-work\voice.md
Must know:
- fixed-coverage | Every requirement in the independent contract, verified at its primary evidence anchors | C:\Projects\NoMercyLabs\nomnomzbot-docs\docs-work\reader-first-pilot\contracts\built-in-commands.md
Moves elsewhere:
- none
Checks:
- site-build: ["C:\\Users\\patri\\AppData\\Local\\Programs\\Python\\Python310\\python.exe", "-B", "C:\\Projects\\NoMercyLabs\\nomnomzbot-docs\\docs-work\\reader-first-pilot\\tools\\pilot_site.py", "build"]
