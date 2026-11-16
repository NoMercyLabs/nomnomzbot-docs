Route: /reference/templates/chat
Reader: A streamer or moderator who knows how to edit a command reply and use template braces, and needs to use the incoming message and chat settings in a reply.
Type: lookup
Arrives-with: Which helper and arguments do I use to use the incoming message and chat settings in a reply?
Goal: Choose a supported helper form and understand the value it produces in this reply.
Success: The reader can select a documented form, supply its arguments and predict its result or fallback in the stated context.
Application-case: A command author wants to inspect the incoming message and keep the resulting reply within the chat length limit.
Prerequisites: A reply field that supports templates, and the ability to edit it; the template basics taught in /reference/commands/variables-and-templates.
Project-root: C:\Projects\NoMercyLabs\nomnomzbot-docs\.claude\worktrees\finish-c
Built-root: dist
Rendered: dist/reference/templates/chat/index.html
Voice: docs-work/voice.md
Must know:
- syntax | The supported helper forms and required arguments needed to use the incoming message and chat settings in a reply. | ../../../../nomnomzbot/server/src/NomNomzBot.Infrastructure/Platform/Templating/Helpers/Chat/ChatData.cs
- result | The result, fallback and units of each documented helper, so the author can predict the reply. | ../../../../nomnomzbot/server/src/NomNomzBot.Infrastructure/Platform/Templating/Helpers/Chat/ChatData.cs
- context | The contexts in which the documented helpers are available, so a working example can be placed in the correct reply field. | ../../../../nomnomzbot/server/src/NomNomzBot.Application/Abstractions/Templating/TemplateHelperRegistry.cs
- trigger | Choose helpers for a trigger that supplies the matching message or person. | ../../../../nomnomzbot/server/src/NomNomzBot.Infrastructure/Platform/Templating/Helpers/Chat/ChatMessageHelpers.cs
- length | Fit the complete reply to the trigger platform limit with an optional ending. | ../../../../nomnomzbot/server/src/NomNomzBot.Infrastructure/Platform/Templating/Helpers/Chat/ChatFitHelpers.cs
- speech | Prepare text with cleanup, spoken numbers or the channel pronunciation list. | ../../../../nomnomzbot/server/src/NomNomzBot.Infrastructure/Platform/Templating/Helpers/Chat/TtsTextHelpers.cs
- sharing | Build sharing links with the required arguments, including a Mastodon host name. | ../../../../nomnomzbot/server/src/NomNomzBot.Infrastructure/Platform/Templating/Helpers/Chat/LinkShareHelpers.cs
Moves elsewhere:
- none
Checks:
- build: ["cmd", "/c", "yarn", "build"]
