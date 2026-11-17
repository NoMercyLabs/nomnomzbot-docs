Route: /reference/templates/text
Reader: A streamer or moderator who knows how to edit a command reply and use template braces, and needs to transform the intended text with the correct arguments.
Type: lookup
Arrives-with: Which helper and arguments do I use to transform the intended text with the correct arguments?
Goal: Choose a supported helper form and understand the value it produces in this reply.
Success: The reader can select a documented form, supply its arguments and predict its result or fallback in the stated context.
Application-case: A reply should replace part of a message and pluralize a word based on a count; identify the accepted forms.
Prerequisites: A reply field that supports templates, and the ability to edit it; the template basics taught in /reference/commands/variables-and-templates.
Project-root: .
Built-root: dist
Rendered: dist/reference/templates/text/index.html
Voice: docs-work/voice.md
Must know:
- syntax | The supported helper forms and required arguments needed to transform the intended text with the correct arguments. | ../../../../nomnomzbot/server/src/NomNomzBot.Infrastructure/Platform/Templating/Helpers/Text/TextTemplateHelpers.cs
- result | The result, fallback and units of each documented helper, so the author can predict the reply. | ../../../../nomnomzbot/server/src/NomNomzBot.Infrastructure/Platform/Templating/Helpers/Text/TextTemplateHelpers.cs
- context | The contexts in which the documented helpers are available, so a working example can be placed in the correct reply field. | ../../../../nomnomzbot/server/src/NomNomzBot.Application/Abstractions/Templating/TemplateHelperRegistry.cs
- arguments | Follow helper-specific argument order, whole-number bounds and missing or invalid versus empty results. | ../../../../nomnomzbot/server/src/NomNomzBot.Infrastructure/Platform/Templating/Helpers/Text/TextArguments.cs
- length | Distinguish strict cut, appended ellipsis, no-ending fit, padding and the viewer repeat and width cap. | ../../../../nomnomzbot/server/src/NomNomzBot.Infrastructure/Platform/Templating/Helpers/Text/CutTextHelpers.cs
- replacement | Literal matching is case-sensitive except explicit icase and censor; search text must be nonempty. | ../../../../nomnomzbot/server/src/NomNomzBot.Infrastructure/Platform/Templating/Helpers/Text/ReplaceTextHelpers.cs
- grammar | Explicit plural forms use signed whole counts; automatic forms and joining words have documented language behavior. | ../../../../nomnomzbot/server/src/NomNomzBot.Infrastructure/Platform/Templating/Helpers/Text/PluralTextHelpers.cs
Moves elsewhere:
- none
Checks:
- build: ["cmd", "/c", "yarn", "build"]
