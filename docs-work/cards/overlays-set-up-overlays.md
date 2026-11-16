Route: /reference/overlays/set-up-overlays
Reader: A streamer or moderator who knows stream bots, has signed in to the selected channel, and is new to this feature in NomNomzBot.
Type: task
Arrives-with: How do I make an overlay and get the link for my stream?
Goal: How do I make an overlay and get the link for my stream.
Success: The overlay is saved, contains the intended content and has a usable link for the streaming software.
Application-case: A streamer wants a second overlay with different content without altering the first one.
Prerequisites: Access to the selected channel and permission for the described action; any platform connection or output required by that action must be established before the steps.
Project-root: C:\Projects\NoMercyLabs\nomnomzbot-docs\.claude\worktrees\finish
Built-root: dist
Rendered: dist/reference/overlays/set-up-overlays/index.html
Voice: docs-work/voice.md
Must know:
- setup | Distinguish supplied sources on OBS from custom code overlays; new and copied overlays start enabled, and each copy has its own address. | ../../../../nomnomzbot/dashboard/src/views/dashboard/overlays/OverlaysView.vue
- behavior | Settings push immediately, successful code builds reload connected sources, tests target live output and deletion affects existing sources. | ../../../../nomnomzbot/server/src/NomNomzBot.Infrastructure/Widgets/WidgetService.cs
- audio | Audio levels are channel-wide and save on release, blur or Enter; distinguish master speech/clip scaling, voice level and music ducking. | ../../../../nomnomzbot/dashboard/src/views/dashboard/overlays/components/AudioMixPanel.vue
Moves elsewhere:
- none
Checks:
- build: ["cmd", "/c", "yarn", "build"]
