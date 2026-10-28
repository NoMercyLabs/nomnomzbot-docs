# Reader review: /reference/getting-started/connect-platforms
Verdict: PASS
Reviewed: C:\Projects\NoMercyLabs\nomnomzbot-docs\src\content\reference\en\getting-started\connect-platforms.mdx
Reviewed-SHA: 48b18bae7dfb3c4a

Scope: read the page, the Assumes page /reference/getting-started/sign-in (it owns signing in), the pilot page /reference/commands/create-a-command, docs-work/page-conventions.md and docs-work/ledger.md. No product source read. No directive blocks or code blocks on the page, so nothing was expanded or elided.

Blocking findings: none. Every step names its control, states its result, and can be followed without code.

Density (measured): every paragraph is at most 3 sentences. The longest is lines 23-25, 3 sentences, 31 words. No table is replaced by prose. Parallel facts sit in tables.

Voice: reads as the same writer as the pilot. Same "Choose **Label**" steps, same "The panel asks" and "The dialog asks" pattern, same "::Troubleshooting" shape.

Notes (not blocking):

- [7] "Twitch comes first, then you can add Kick and YouTube." Two ideas joined by a comma. Split into two sentences.
- [41] "The window closes, and the row shows the account name." Two ideas. Split.
- [43] "the same button is in the **Where it goes** panel" names the panel before the page says what it is. The explanation comes at [85]. A reader meets the name first without context.
- [47] "shows 'The connect did not work:' with the reason, and 'Try again.'" The page does not say whether "Try again." is a button. Name it as a button, or say it is a message.
- [81] "When the panel cannot load, it shows "Connections could not load." and a way to try again." (1 sentence, 17 words.) "a way to try again" does not name the control. Name the button, as the Troubleshooting blocks do.
- [96] "The connections could not load." The Home text at [81] is "Connections could not load." One message, two texts. The fact-checker should confirm the exact en.json text for each panel, and the page should use the same wording.
- [79] and [112] "the Integrations settings page" gives no route to it. The reader does not know it sits under Settings, in the Connections group. Name the route, or link the page that shows it.
- [94] "X Live" appears only in the table. Lines 6-8 name Twitch, Kick and YouTube as the platforms. Introduce X Live in one clause at the table, or leave it out.
- [64] "The stream state has not loaded yet." The term "stream state" is not defined on the page. A reader cannot tell what is missing. Say what is not loaded, for example "The live status has not loaded yet," if the dashboard shows that.
- [21] and [25] "every role above it." The page does not list the roles above Moderator. The reader must go to Permissions. This follows the ledger, so it is a note only.
- Order: "Who can connect a platform" ([18]) comes after the Twitch section, not before the flow as page-conventions item 2 says. The quickstart rule allows the first section to reach a result and say where to stop, and this page does both at [16]. Note only.

Where I got lost: at [43] I did not know what the Where it goes panel was until [85]. At [79] I could not find the Integrations settings page from this page alone.
