Route: /reference/templates/goal
Reader: A streamer or moderator who knows how to edit a command reply and use template braces, and needs to refer to the active channel goal and its progress.
Type: lookup
Arrives-with: Which helper and arguments do I use to refer to the active channel goal and its progress?
Goal: Choose a supported helper form and understand the value it produces in this reply.
Success: The reader can select a documented form, supply its arguments and predict its result or fallback in the stated context.
Application-case: A reply should show progress toward an active goal, and the author needs to know what appears when no goal is active.
Prerequisites: A reply field that supports templates, and the ability to edit it; the template basics taught in /reference/commands/variables-and-templates.
Project-root: .
Built-root: dist
Rendered: dist/reference/templates/goal/index.html
Voice: docs-work/voice.md
Must know:
- syntax | The supported helper forms and required arguments needed to refer to the active channel goal and its progress. | ../../../../nomnomzbot/server/src/NomNomzBot.Infrastructure/Platform/Templating/Helpers/LiveEvents/GoalHelpers.cs
- result | The result, fallback and units of each documented helper, so the author can predict the reply. | ../../../../nomnomzbot/server/src/NomNomzBot.Infrastructure/Platform/Templating/Helpers/LiveEvents/GoalHelpers.cs
- context | The contexts in which the documented helpers are available, so a working example can be placed in the correct reply field. | ../../../../nomnomzbot/server/src/NomNomzBot.Application/Abstractions/Templating/TemplateHelperRegistry.cs
- selection | Choose the active follower, subscription or new-subscription goal. | ../../../../nomnomzbot/server/src/NomNomzBot.Infrastructure/Platform/Templating/Helpers/LiveEvents/LiveGoalRows.cs
- missing | Recognize a missing active goal and the effect of a zero target. | ../../../../nomnomzbot/server/src/NomNomzBot.Infrastructure/Platform/Templating/Helpers/LiveEvents/LiveGoalData.cs
Moves elsewhere:
- none
Checks:
- build: ["cmd", "/c", "yarn", "build"]
