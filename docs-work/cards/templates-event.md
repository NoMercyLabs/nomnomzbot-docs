Route: /reference/templates/event
Reader: A streamer or moderator who knows how to edit a command reply and use template braces, and needs to use values supplied by the event that triggered a reply.
Type: lookup
Arrives-with: Which helper and arguments do I use to use values supplied by the event that triggered a reply?
Goal: Choose a supported helper form and understand the value it produces in this reply.
Success: The reader can select a documented form, supply its arguments and predict its result or fallback in the stated context.
Application-case: A command author copies a subscription-event helper into an ordinary chat command; explain whether that context supplies its value.
Prerequisites: A reply field that supports templates, and the ability to edit it; the template basics taught in /reference/commands/variables-and-templates.
Project-root: C:\Projects\NoMercyLabs\nomnomzbot-docs\.claude\worktrees\finish-b
Built-root: dist
Rendered: dist/reference/templates/event/index.html
Voice: docs-work/voice.md
Must know:
- syntax | The supported helper forms and required arguments needed to use values supplied by the event that triggered a reply. | ../../../../nomnomzbot/server/src/NomNomzBot.Application/Abstractions/Templating/TemplateHelperRegistry.cs
- result | The result, fallback and units of each documented helper, so the author can predict the reply. | ../../../../nomnomzbot/server/src/NomNomzBot.Application/Abstractions/Templating/TemplateHelperRegistry.cs
- context | The contexts in which the documented helpers are available, so a working example can be placed in the correct reply field. | ../../../../nomnomzbot/server/src/NomNomzBot.Application/Abstractions/Templating/TemplateHelperRegistry.cs
- event-values | Choose the event that supplies each value, rather than copying an event helper into a normal command. | ../../../../nomnomzbot/server/src/NomNomzBot.Application/Commands/Services/EventResponsePresetCatalog.cs
- subscription | Distinguish cumulative months, streak, gifts and optional attached messages. | ../../../../nomnomzbot/server/src/NomNomzBot.Infrastructure/Rewards/EventHandlers/SubscriptionEventHandlers.cs
- supporter | Read event-specific supporter amounts and optional details. | ../../../../nomnomzbot/server/src/NomNomzBot.Infrastructure/Supporters/EventHandlers/SupporterTriggerSource.cs
- duration | Interpret a moderation duration according to the event. | ../../../../nomnomzbot/server/src/NomNomzBot.Infrastructure/Moderation/EventHandlers/ModerationAlertHandlers.cs
Moves elsewhere:
- none
Checks:
- build: ["cmd", "/c", "yarn", "build"]
