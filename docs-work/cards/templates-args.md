Route: /reference/templates/args
Reader: A streamer or moderator who knows how to edit a command reply and use template braces, and needs to read a command argument in the right position and type.
Type: lookup
Arrives-with: Which helper and arguments do I use to read a command argument in the right position and type?
Goal: Choose a supported helper form and understand the value it produces in this reply.
Success: The reader can select a documented form, supply its arguments and predict its result or fallback in the stated context.
Application-case: A command takes a viewer name followed by a duration; explain which arguments to read and what happens when the duration is missing.
Prerequisites: A reply field that supports templates, and the ability to edit it; the template basics taught in /reference/commands/variables-and-templates.
Project-root: .
Built-root: dist
Rendered: dist/reference/templates/args/index.html
Voice: docs-work/voice.md
Must know:
- syntax | The supported helper forms and required arguments needed to read a command argument in the right position and type. | ../../../../nomnomzbot/server/src/NomNomzBot.Infrastructure/Platform/Templating/Helpers/Arguments/ArgumentTemplateHelpers.cs
- result | The result, fallback and units of each documented helper, so the author can predict the reply. | ../../../../nomnomzbot/server/src/NomNomzBot.Infrastructure/Platform/Templating/Helpers/Arguments/ArgumentTemplateHelpers.cs
- context | The contexts in which the documented helpers are available, so a working example can be placed in the correct reply field. | ../../../../nomnomzbot/server/src/NomNomzBot.Application/Abstractions/Templating/TemplateHelperRegistry.cs
- words | Use word positions, slices and fallbacks for absent arguments. | ../../../../nomnomzbot/server/src/NomNomzBot.Infrastructure/Platform/Templating/Helpers/Arguments/ArgumentPickHelpers.cs
- duration | Read a duration in seconds or a numeric fallback and recognize invalid input. | ../../../../nomnomzbot/server/src/NomNomzBot.Infrastructure/Platform/Templating/Helpers/Arguments/ArgumentParseHelpers.cs
- person | Resolve the person named at a word position and recognize a missing name. | ../../../../nomnomzbot/server/src/NomNomzBot.Infrastructure/Platform/Templating/Helpers/Arguments/ArgumentUserHelpers.cs
- currency | Read channel currency and distinguish missing-wallet and ranking results. | ../../../../nomnomzbot/server/src/NomNomzBot.Infrastructure/Platform/Templating/Helpers/People/PeoplePointsHelpers.cs
- viewer-input | Distinguish expanded argument text from the original numbered words when Viewer Templates is enabled. | ../../../../nomnomzbot/server/src/NomNomzBot.Infrastructure/Chat/EventHandlers/ViewerArgsInterpreter.cs
Moves elsewhere:
- none
Checks:
- build: ["cmd", "/c", "yarn", "build"]
