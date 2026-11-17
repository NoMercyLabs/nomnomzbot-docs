Route: /reference/templates/charity
Reader: A streamer or moderator who knows how to edit a command reply and use template braces, and needs to describe the active charity campaign or a donation.
Type: lookup
Arrives-with: Which helper and arguments do I use to describe the active charity campaign or a donation?
Goal: Choose a supported helper form and understand the value it produces in this reply.
Success: The reader can select a documented form, supply its arguments and predict its result or fallback in the stated context.
Application-case: A command needs the campaign progress and latest donation; explain which helpers to use and what happens when there is no active campaign.
Prerequisites: A reply field that supports templates, and the ability to edit it; the template basics taught in /reference/commands/variables-and-templates.
Project-root: .
Built-root: dist
Rendered: dist/reference/templates/charity/index.html
Voice: docs-work/voice.md
Must know:
- syntax | The supported helper forms and required arguments needed to describe the active charity campaign or a donation. | ../../../../nomnomzbot/server/src/NomNomzBot.Infrastructure/Platform/Templating/Helpers/LiveEvents/CharityCampaignHelpers.cs
- result | The result, fallback and units of each documented helper, so the author can predict the reply. | ../../../../nomnomzbot/server/src/NomNomzBot.Infrastructure/Platform/Templating/Helpers/LiveEvents/CharityCampaignHelpers.cs
- context | The contexts in which the documented helpers are available, so a working example can be placed in the correct reply field. | ../../../../nomnomzbot/server/src/NomNomzBot.Application/Abstractions/Templating/TemplateHelperRegistry.cs
- campaign | Read the active Twitch campaign rather than an unrelated supporter event. | ../../../../nomnomzbot/server/src/NomNomzBot.Infrastructure/Platform/Templating/Helpers/LiveEvents/LiveCharityData.cs
- donations | Read the current donation count or newest donation, including an empty donation list. | ../../../../nomnomzbot/server/src/NomNomzBot.Infrastructure/Platform/Templating/Helpers/LiveEvents/CharityDonationHelpers.cs
- missing | Recognize helpers left in braces when their data is unavailable. | ../../../../nomnomzbot/server/src/NomNomzBot.Infrastructure/Platform/Templating/Rendering/TemplateTreeRenderer.cs
Moves elsewhere:
- none
Checks:
- build: ["cmd", "/c", "yarn", "build"]
