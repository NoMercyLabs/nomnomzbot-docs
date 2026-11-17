Route: /reference/templates/hypetrain
Reader: A streamer or moderator who knows how to edit a command reply and use template braces, and needs to describe an active or completed hype train.
Type: lookup
Arrives-with: Which helper and arguments do I use to describe an active or completed hype train?
Goal: Choose a supported helper form and understand the value it produces in this reply.
Success: The reader can select a documented form, supply its arguments and predict its result or fallback in the stated context.
Application-case: An event response should name a participant while a chat command asks for the current train progress.
Prerequisites: A reply field that supports templates, and the ability to edit it; the template basics taught in /reference/commands/variables-and-templates.
Project-root: .
Built-root: dist
Rendered: dist/reference/templates/hypetrain/index.html
Voice: docs-work/voice.md
Must know:
- syntax | The supported helper forms and required arguments needed to describe an active or completed hype train. | ../../../../nomnomzbot/server/src/NomNomzBot.Infrastructure/Platform/Templating/Helpers/LiveEvents/HypeTrainStateHelpers.cs
- result | The result, fallback and units of each documented helper, so the author can predict the reply. | ../../../../nomnomzbot/server/src/NomNomzBot.Infrastructure/Platform/Templating/Helpers/LiveEvents/HypeTrainStateHelpers.cs
- context | The contexts in which the documented helpers are available, so a working example can be placed in the correct reply field. | ../../../../nomnomzbot/server/src/NomNomzBot.Application/Abstractions/Templating/TemplateHelperRegistry.cs
- event | Use event values for the train that began or ended. | ../../../../nomnomzbot/server/src/NomNomzBot.Infrastructure/Community/EventHandlers/HypeTrainEventHandler.cs
- missing | Distinguish false active flags, missing current-train values and an all-time record. | ../../../../nomnomzbot/server/src/NomNomzBot.Infrastructure/Platform/Templating/Helpers/LiveEvents/LiveHypeTrainRows.cs
- contributor | Read the largest current contribution only while that train is available. | ../../../../nomnomzbot/server/src/NomNomzBot.Infrastructure/Platform/Templating/Helpers/LiveEvents/HypeTrainWhoHelpers.cs
Moves elsewhere:
- none
Checks:
- build: ["cmd", "/c", "yarn", "build"]
