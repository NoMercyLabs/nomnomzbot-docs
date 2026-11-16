# Independent fact and coverage review: Create a command

Reviewed 2026-11-09 by the contract/evidence reviewer, independently of the writer. This is **source-level factual/coverage evidence only**, not blind-reader scoring, final acceptance, runtime proof or a prose-quality verdict. No calibration cases or private keys were read.

| Input | SHA256 |
| --- | --- |
| `new/commands/create-a-command.mdx` (227 lines) | `942771eb7e3c3627b6f023acd1bd60691e732a5ed3b27e4bb7e904c9813498f1` |
| `comparison-original/commands/create-a-command.mdx` (312 lines) | `cf1149df811ec026871fcf98dde5fd7ba6692d2820df7c9e48eafee08b6e24e9` |
| `contracts/create-a-command.md` | `dce03642083dffb7c87c74c59105ca124f3cb3f6de5853a5995171a1e945093d` |

Paths above are relative to this pilot folder. Source checkout `C:/Projects/NoMercyLabs/nomnomzbot`, HEAD `f741789bf6b8d90ae2fd07f33a307a5a11623606`; source paths below relative to it. The immutable original had been read in full before contract drafting; the new article was read in full, and the entire comparison-original change set was read against that original.

## Findings

**No unresolved factual or coverage blockers at these hashes.** Both variants retain **19/19 contract heading groups**. This includes response alternatives, random-list editing/copy independence, helpers/limits, all trigger choices, draft/save feedback, delivery/TTS prerequisites, preset distinction, immediate toggles, duplicate defaults, all original binding categories, system collisions and troubleshooting. Heading movement is not counted as lost coverage.

| Consequential/new claim checked | Current primary evidence | Result |
| --- | --- | --- |
| Command read/write default Moderator; broadcaster may raise; VIP list access is read-only and hides System commands | `server/src/NomNomzBot.Infrastructure/Content/Identity/ActionDefinitionSeeder.cs:151-180`; `dashboard/src/views/dashboard/commands/CommandsView.vue:54-68,139-169` | Supported in both. |
| Creation has Send the reply to for text/random; strips **all** leading `!`, trims and lowercases; remains open on failure | `dashboard/src/views/dashboard/commands/components/NewCommandDialog.vue:83-94,127-170,216-239` | Supported in both. |
| Whitespace trigger boundary; Regex is a search in message text, not an implicit whole-string match; all command matching ignores case | `server/src/NomNomzBot.Infrastructure/Chat/EventHandlers/ChatMessageHandler.cs:733-801,832-852`; `server/src/NomNomzBot.Infrastructure/Platform/ChannelRegistry.cs:511-515` | Supported; misleading old Regex interpretation corrected symmetrically. |
| Text/random TTS requires successful chat send; overlay-only/Nowhere silent; pipeline/code own steps | `dashboard/src/views/dashboard/commands/components/CommandEditor.vue:322-363`; `server/src/NomNomzBot.Infrastructure/Chat/EventHandlers/ChatMessageHandler.cs:664-708` | Supported. |
| Duplicate uses saved settings, copies TTS flag, omits aliases/preset/delivery, starts off | `dashboard/src/views/dashboard/commands/components/CommandEditor.vue:254-287`; `server/src/NomNomzBot.Application/Commands/Dtos/CommandDtos.cs:135-150` | Supported; Twitch chat default follows omitted delivery. |
| Delete and disable both guard bound users; scheduled-task usage is included under other places | `server/src/NomNomzBot.Infrastructure/Commands/CommandService.cs:355-369,395-495`; `server/src/NomNomzBot.Infrastructure/Commands/ScheduledTaskBindingUsageSource.cs:20-49`; `dashboard/src/i18n/locales/en.json:185` | Supported; only pending directly bound scheduled tasks count. |
| Authored match normally precedes built-in; five always-on names win; removing copies does not override built-in enabled/access/cooldown gates | `server/src/NomNomzBot.Infrastructure/Chat/EventHandlers/ChatMessageHandler.cs:291-376` | Supported. |
| Connected chat needed for observed result; platform broadcaster/moderator can test offline and bypass normal waits | `server/src/NomNomzBot.Infrastructure/Chat/OfflineCommandGate.cs:18-28`; `server/src/NomNomzBot.Infrastructure/Chat/EventHandlers/ChatMessageHandler.cs:421-484,1944-1950` | Supported; article does not claim dashboard save alone proves delivery. |

The remaining retained facts were checked against the primary anchors recorded in the fixed contract, including name/field limits, editor draft operations, random-reply controls and preset writes. Added examples are stated as example values, not shipped defaults. No unsupported claim outside the contract was identified.

## Pending boundaries

Blind-reader answers, rendered MDX/link checks and the shared isolated site build are separate gates owned by the root workflow. No bot, platform account, overlay or TTS run occurred here. Any article/contract edit invalidates this hash-bound review until rechecked. No acceptance JSON was written.
