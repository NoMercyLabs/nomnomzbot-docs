Route: /reference/code/sdk-widgets-actions-templates
Reader: A developer who knows JavaScript or HTTP integration basics and is new to the NomNomzBot surface described here.
Type: lookup
Arrives-with: Which SDK surface applies to my widget, pipeline action or template?
Goal: Which SDK surface applies to my widget, pipeline action or template.
Success: The developer can select the correct environment and construct a call or subscription with its documented shape.
Application-case: A widget receives a stream event and the author must avoid assuming script globals also exist in the widget.
Prerequisites: Access to the intended bot and its documented SDK or API surface; authorization for the chosen script, widget or external action.
Project-root: C:\Projects\NoMercyLabs\nomnomzbot-docs\.claude\worktrees\finish
Built-root: dist
Rendered: dist/reference/code/sdk-widgets-actions-templates/index.html
Voice: docs-work/voice.md
Must know:
- setup | The widget SDK initialization, methods and event payloads available in the browser environment. | ../../../../nomnomzbot/dashboard/src/api/nnz-widget.d.ts
- behavior | How pipeline action parameters and template helper forms differ from widget and script calls, with links to their exact contracts. | ../../../../nomnomzbot/server/src/NomNomzBot.Infrastructure/DevPlatform/ActionParamsTypeWriter.cs
- speech | How speech actions wait, reserve a sequence and assign voices, including live output and authorization through the triggering workflow. | ../../../../nomnomzbot/server/src/NomNomzBot.Infrastructure/Tts/PipelineActions/PlayTtsAction.cs
Moves elsewhere:
- none
Checks:
- build: ["cmd", "/c", "yarn", "build"]
