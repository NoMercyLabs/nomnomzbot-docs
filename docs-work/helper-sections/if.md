## Change the wording without building a pipeline

A condition helper chooses text inside a reply.
For example, `{if:{stream.isLive}|We are live!|See you next stream.}` gives the first sentence while your channel is live and the second while it is offline.
The outer helper makes the choice; the nested `{stream.isLive}` supplies the value it checks.

Use this for wording such as a live/offline message or a fallback when an optional value is empty.
It does not decide who may use the command or stop other actions: use [command permissions](/reference/commands/cooldowns-and-permissions) for access and [pipelines](/reference/commands/pipelines) for sequences and branches of actions.

Only the selected branch is evaluated.
For `{default:value|fallback}`, the fallback is evaluated only when the first value is blank.
