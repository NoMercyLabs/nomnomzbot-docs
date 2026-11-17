Route: /reference/commands/variables-and-templates
Reader: A streamer or moderator who knows stream bots, has signed in to the selected channel, and is new to this feature in NomNomzBot.
Type: concept
Arrives-with: How do I put changing information into a reply without writing a script?
Goal: How do I put changing information into a reply without writing a script.
Success: The reader can distinguish literal text from a helper and choose a helper that is available in the reply context.
Application-case: A command author copies a helper from an event response into a chat command and needs to decide whether it has the required context.
Prerequisites: Familiarity with the dashboard and the selected channel.
Project-root: .
Built-root: dist
Rendered: dist/reference/commands/variables-and-templates/index.html
Voice: docs-work/voice.md
Must know:
- setup | The brace syntax, arguments and context rules needed to write a reply template. | ../../../../nomnomzbot/server/src/NomNomzBot.Application/Abstractions/Templating/TemplateHelperRegistry.cs
- behavior | How to select and check a helper, including the result when the required value is absent. | ../../../../nomnomzbot/server/src/NomNomzBot.Application/Abstractions/Templating/TemplateHelperRegistry.cs
- parser | How colons, pipes, nested helpers and escapes form a template. | ../../../../nomnomzbot/server/src/NomNomzBot.Infrastructure/Platform/Templating/Parsing/TemplateParser.cs
Moves elsewhere:
- none
Checks:
- build: ["cmd", "/c", "yarn", "build"]
