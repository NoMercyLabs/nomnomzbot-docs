Route: /reference/templates/overview
Reader: A streamer or moderator who knows how to edit a command reply and use template braces, and needs to find a helper family and understand where it is usable.
Type: lookup
Arrives-with: Which helper and arguments do I use to find a helper family and understand where it is usable?
Goal: Choose a supported helper form and understand the value it produces in this reply.
Success: The reader can select a documented form, supply its arguments and predict its result or fallback in the stated context.
Application-case: A command author finds a helper listed for an event response and wants to use it in a normal command; explain how to check its context.
Prerequisites: A reply field that supports templates, and the ability to edit it; the template basics taught in /reference/commands/variables-and-templates.
Project-root: C:\Projects\NoMercyLabs\nomnomzbot-docs\.claude\worktrees\finish-c
Built-root: dist
Rendered: dist/reference/templates/overview/index.html
Voice: docs-work/voice.md
Must know:
- families | Where to find the helper family for the value the author wants to put in a reply. | ../../../../nomnomzbot/server/src/NomNomzBot.Application/Abstractions/Templating/TemplateHelperRegistry.cs
- syntax | How to read the helper notation, arguments and context labels before copying a form. | ../../../../nomnomzbot/server/src/NomNomzBot.Application/Abstractions/Templating/TemplateHelperRegistry.cs
- editor | Find the helpers offered for this reply field. | ../../../../nomnomzbot/dashboard/src/components/layout/TemplateField.vue
- arguments | Read colon inputs, pipe separators and numbered placeholders before copying a helper. | ../../../../nomnomzbot/server/src/NomNomzBot.Infrastructure/Platform/Templating/Parsing/TemplateParser.cs
Moves elsewhere:
- none
Checks:
- build: ["cmd", "/c", "yarn", "build"]
