Route: /reference/templates/user
Reader: A streamer or moderator who knows how to edit a command reply and use template braces, and needs to describe the person who invoked a command.
Type: lookup
Arrives-with: Which helper and arguments do I use to describe the person who invoked a command?
Goal: Choose a supported helper form and understand the value it produces in this reply.
Success: The reader can select a documented form, supply its arguments and predict its result or fallback in the stated context.
Application-case: A viewer invokes a command naming another person; explain which helpers still describe the invoking viewer.
Prerequisites: A reply field that supports templates, and the ability to edit it; the template basics taught in /reference/commands/variables-and-templates.
Project-root: C:\Projects\NoMercyLabs\nomnomzbot-docs\.claude\worktrees\finish
Built-root: dist
Rendered: dist/reference/templates/user/index.html
Voice: docs-work/voice.md
Must know:
- syntax | The supported helper forms and required arguments needed to describe the person who invoked a command. | ../../../../nomnomzbot/server/src/NomNomzBot.Infrastructure/Platform/Templating/Helpers/People/UserTemplateHelpers.cs
- result | The result, fallback and units of each documented helper, so the author can predict the reply. | ../../../../nomnomzbot/server/src/NomNomzBot.Infrastructure/Platform/Templating/Helpers/People/UserTemplateHelpers.cs
- context | The contexts in which the documented helpers are available, so a working example can be placed in the correct reply field. | ../../../../nomnomzbot/server/src/NomNomzBot.Application/Abstractions/Templating/TemplateHelperRegistry.cs
- person | Explicit user forms stay with the triggering person; bare name, link and grammar follow a supplied target before the caller. | ../../../../nomnomzbot/server/src/NomNomzBot.Infrastructure/Platform/Templating/Helpers/Legacy/LegacyTemplateHelpers.cs
- unavailable | Distinguish missing trigger identity, unavailable Twitch details and profile defaults rather than promising a value in every accepted field. | ../../../../nomnomzbot/server/src/NomNomzBot.Infrastructure/Platform/Templating/Helpers/People/DbViewerDirectory.cs
- currency | Balances are bot currency, ranks can be empty, and nextRank.gap is the balance difference rather than enough to pass. | ../../../../nomnomzbot/server/src/NomNomzBot.Infrastructure/Platform/Templating/Helpers/People/PeoplePointsHelpers.cs
- history | Recorded channel totals and Twitch watch-streak notifications differ from event-specific engagement values. | ../../../../nomnomzbot/server/src/NomNomzBot.Infrastructure/Engagement/EventHandlers/EngagementTriggerSources.cs
Moves elsewhere:
- none
Checks:
- build: ["cmd", "/c", "yarn", "build"]
