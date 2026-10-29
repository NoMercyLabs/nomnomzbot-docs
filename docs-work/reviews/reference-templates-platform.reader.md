# Reader review: src/content/reference/en/templates/platform.mdx
Verdict: PASS
Reviewed: C:/Projects/NoMercyLabs/nomnomzbot-docs/src/content/reference/en/templates/platform.mdx
Reviewed-SHA: ae27446ac9f71f9d

Tests:
1. Find a helper: "viewers and links for every platform" (L9) matches `{platform.viewers.total}` (L37) and `{platform.links}` (L25). Found.
2. Use a helper: `{platform.isLive:youtube}` gives `true` (L20). `{platform.viewers.share:kick}` gives `17%` (L36). Both typed.
3. Intro (L6-9) names `{platform.*}`. Every row is `platform.`. Footer links to the overview.
4. Backticks correct. Table is intact.

Findings:
- [L18] `{platform.event}`: "the platform the event came from." The reader does not know that this works only in an event response. Fix: name where it works (see the variables page).
- [L33] `{platform.user.name}`: "The display name of that platform: Twitch" with example `Twitch`. A reader expects a person's name. Fix: say it gives the platform's own name, or give a person's example.
- [L24] `{platform.link.youtube.live}`: the result when no stream is live is not stated. Fix: add "Empty when no stream is live".
- [L32] `{platform.user.icon}`: the purple, green and red dots are not tied to a platform. Fix: name the colour for each platform.
