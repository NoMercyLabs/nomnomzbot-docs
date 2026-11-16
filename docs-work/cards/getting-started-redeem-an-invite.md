Route: /reference/getting-started/redeem-an-invite
Reader: A streamer who knows stream bots, received an invite link, and is new to NomNomzBot.
Type: task
Arrives-with: I got an invite link; what does it give me and how do I claim it?
Goal: Open an invite link, read what it gives and claim it for the channel.
Success: The invite is claimed for the channel, or the reader understands why it cannot be used.
Application-case: A streamer opens an invite while signed out and must sign in with Twitch before the claim.
Prerequisites: An invite link or code; a Twitch account for the claim step.
Project-root: C:\Projects\NoMercyLabs\nomnomzbot-docs\.claude\worktrees\finish
Built-root: dist
Rendered: dist/reference/getting-started/redeem-an-invite/index.html
Voice: docs-work/voice.md
Must know:
- lookup | The page reads the invite as soon as it opens and shows what it gives before any sign-in. | ../../../../nomnomzbot/dashboard/src/views/site/invite/InvitePage.vue
- claim | Only the claim step uses the invite up; the public read returns valid or unusable. | ../../../../nomnomzbot/server/src/NomNomzBot.Api/Controllers/V1/InvitesController.cs
Moves elsewhere:
- plans | What a plan tier includes. | ../../../../nomnomzbot/dashboard/src/views/dashboard/settings/billing/planLimits.ts | /reference/settings/billing
Checks:
- build: ["cmd", "/c", "yarn", "build"]
