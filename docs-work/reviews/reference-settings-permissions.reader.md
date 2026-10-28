# Reader review: C:\Projects\NoMercyLabs\nomnomzbot-docs\src\content\reference\en\settings\permissions.mdx
Verdict: PASS
Reviewed: C:\Projects\NoMercyLabs\nomnomzbot-docs\src\content\reference\en\settings\permissions.mdx
Reviewed-SHA: 310e46d0423a67f7

Re-review of the current page. The earlier FAIL (2026-10-28, SHA 079f365bf5f39dfd) is withdrawn: the page text now defines a capability as "one bot action" and explains **Bot manager** as one capability covering many kinds of items (L103-104). Both confirm dialogs are described (L115-117). The "Give name OBS control?" quote and the "Everyone else" phrase are gone.

Pages read before this page (Assumes): /reference/getting-started/dashboard-tour. Pilot: /reference/commands/create-a-command.

## Blocking

None.

## Notes (style and clarity, verdict stays PASS)

- [L35-36] **Lead moderator** and **Editor** rows now say what each may use. Good.
- [L33] The **Artist** row gives a position ("A rung between **VIP** and **Moderator**") but not how someone gets it. "Who has it" is still not answered.
- [L19] One sentence carries two ideas: the role does not see **Settings** in the sidebar, and it may open the page from a direct link. Split it.
- [L6] "which is under **Settings** in the sidebar" does not name the **Access** group that holds **Permissions** (dashboard-tour L68). A reader can still find it.
- [L92] "A protected action has a lowest allowed role." The page does not say what that role is or where to see it. The picker shows the switched-off roles, so the step still works.
- [L6-8] Three sentences are about the page ("The page has three tabs", "Each tab shows a count beside its name"). The tab table carries the same facts. Minor.

## Density

- Measured every paragraph (text between blank lines). None is over three sentences.
- The longest paragraphs are L6-8 (3 sentences, 34 words) and L18-20 (3 sentences, 52 words).
- No run of parallel facts sits in a paragraph. Tabs, roles and capabilities are tables.

## Same writer as the pilot

Yes. Section order matches the pilot (opening, **Who can use this page**, numbered flow, table, other flows, **Related pages**). The sentence pattern matches too: "Choose **X**. The change saves at once." The voice is second person and active.

## Where I got lost

- The **Artist** role (L33): I could not tell how someone gets it.
- Nothing else. The capability section and the access rules now read as one consistent set.

## Links

- /reference/getting-started/dashboard-tour, /reference/commands/cooldowns-and-permissions, /reference/moderation/trust-and-escalation: each target file exists under src/content/reference/en.
