Route: /reference/templates/poll
Reader: A streamer or moderator who knows how to edit a command reply and use template braces, and needs to read the current or most recent poll or prediction.
Type: lookup
Arrives-with: Which helper and arguments do I use to read the current or most recent poll or prediction?
Goal: Choose a supported helper form and understand the value it produces in this reply.
Success: The reader can select a documented form, supply its arguments and predict its result or fallback in the stated context.
Application-case: An announcement needs a completed poll result while another command asks about an active prediction.
Prerequisites: A reply field that supports templates, and the ability to edit it; the template basics taught in /reference/commands/variables-and-templates.
Project-root: .
Built-root: dist
Rendered: dist/reference/templates/poll/index.html
Voice: docs-work/voice.md
Must know:
- syntax | The supported helper forms and required arguments needed to read the current or most recent poll or prediction. | ../../../../nomnomzbot/server/src/NomNomzBot.Infrastructure/Platform/Templating/Helpers/LiveEvents/PollTemplateHelpers.cs
- result | The result, fallback and units of each documented helper, so the author can predict the reply. | ../../../../nomnomzbot/server/src/NomNomzBot.Infrastructure/Platform/Templating/Helpers/LiveEvents/PollTemplateHelpers.cs
- context | The contexts in which the documented helpers are available, so a working example can be placed in the correct reply field. | ../../../../nomnomzbot/server/src/NomNomzBot.Application/Abstractions/Templating/TemplateHelperRegistry.cs
- state | Distinguish active polls, open versus locked predictions, and saved finished history; explain zero and empty results. | ../../../../nomnomzbot/server/src/NomNomzBot.Infrastructure/Platform/Templating/Helpers/LiveEvents/PredictionRow.cs
- event-values | Event values need their supplying trigger and differ from current lookups; Discord notification fields have their own result formatting. | ../../../../nomnomzbot/server/src/NomNomzBot.Infrastructure/Discord/EventHandlers/DiscordPollEndNotificationHandler.cs
Moves elsewhere:
- none
Checks:
- build: ["cmd", "/c", "yarn", "build"]
