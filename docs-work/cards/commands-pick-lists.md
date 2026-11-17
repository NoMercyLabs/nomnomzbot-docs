Route: /reference/commands/pick-lists
Reader: A streamer or moderator who knows stream bots, has signed in to the selected channel, and is new to this feature in NomNomzBot.
Type: task
Arrives-with: How do I keep a set of replies that a command can choose from?
Goal: How do I keep a set of replies that a command can choose from.
Success: A command or pipeline uses an entry from the saved list.
Application-case: A moderator adds new replies to an existing list and wants commands already using it to use the updated contents.
Prerequisites: Access to the selected channel and permission for the described action; any platform connection or output required by that action must be established before the steps.
Project-root: .
Built-root: dist
Rendered: dist/reference/commands/pick-lists/index.html
Voice: docs-work/voice.md
Must know:
- setup | Where to create and edit a list, its entry format and how changes are saved. | ../../../../nomnomzbot/dashboard/src/views/dashboard/picklists/PickListsView.vue
- behavior | How to reference a list from a command or pipeline, including empty-list and deletion consequences. | ../../../../nomnomzbot/server/src/NomNomzBot.Api/Controllers/V1/PickListsController.cs
- shared-list | Saved entries replace the previous list and later picks read the updated contents; renaming or deleting breaks references to the old name. | ../../../../nomnomzbot/server/src/NomNomzBot.Infrastructure/PickLists/PickListService.cs
- pipeline-pick | A pipeline draw stores one resolved choice for later steps and fails for an absent or empty list. | ../../../../nomnomzbot/server/src/NomNomzBot.Infrastructure/PickLists/PipelineActions/PickFromListAction.cs
Moves elsewhere:
- none
Checks:
- build: ["cmd", "/c", "yarn", "build"]
