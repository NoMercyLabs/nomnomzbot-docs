Route: /reference/commands/pipelines
Reader: A streamer or moderator who knows stream bots, has signed in to the selected channel, and is new to this feature in NomNomzBot.
Type: task
Arrives-with: How do I build and check a sequence of command actions?
Goal: How do I build and check a sequence of command actions.
Success: The reader can save a pipeline, inspect its test results and attach it to a trigger with the expected effects.
Application-case: A moderator wants to test a pipeline that sends chat and changes a balance before allowing viewers to trigger it.
Prerequisites: Access to the selected channel and permission for the described action; any platform connection or output required by that action must be established before the steps.
Project-root: C:\Projects\NoMercyLabs\nomnomzbot-docs\.claude\worktrees\finish-b
Built-root: dist
Rendered: dist/reference/commands/pipelines/index.html
Voice: docs-work/voice.md
Must know:
- setup | How to add, configure and order steps, save the pipeline and connect it to a trigger. | ../../../../nomnomzbot/dashboard/src/views/dashboard/pipelines/PipelinesView.vue
- behavior | What a test run does and how to distinguish its result from effects of a real invocation. | ../../../../nomnomzbot/server/src/NomNomzBot.Api/Controllers/V1/PipelinesController.cs
- run-mode | Dry run captures external actions while live mode performs them, and both use unsaved editor steps and supplied input. | ../../../../nomnomzbot/server/src/NomNomzBot.Infrastructure/Platform/Pipeline/PipelineTestRunService.cs
Moves elsewhere:
- action-catalog | Exact action names and parameters for the full action catalog. | ../../../../nomnomzbot/server/src/NomNomzBot.Api/Controllers/V1/SdkController.cs | /reference/code/sdk-contracts
Checks:
- build: ["cmd", "/c", "yarn", "build"]
