// -----------------------------------------------------------------------------
//  Copyright (c) NoMercy Labs.
//
//  This file is part of NomNomzBot. You may use, change and share it for free,
//  for any noncommercial purpose, under the PolyForm Noncommercial License
//  1.0.0. You may not earn money with it. Distributed WITHOUT ANY WARRANTY.
//  See LICENSE for details, and TRADEMARKS.md for the name and logo.
//
//  SPDX-License-Identifier: PolyForm-Noncommercial-1.0.0
// -----------------------------------------------------------------------------

// Sidebar structure: the single source of truth for navigation grouping and order.
//
// To reorder a page:        move its slug within a group's `pages` array.
// To move a page elsewhere: move its slug to another group's `pages`.
// To reorder sections:      move the whole { group, pages } block.
//
// Page titles come from each page's frontmatter `title`. This file owns only structure.
// Slugs are the path under <collection>/en/ without the .mdx extension. A non-draft page
// missing here shows up under "Other" so it never vanishes silently.

export interface NavGroupDef {
  group: string;
  pages: string[];
}

export const navStructure: Record<string, NavGroupDef[]> = {
  // The user guide. One group per area, in the order of docs-work/map.md.
  // A slug without a file yet is skipped by the navigation code, so every page of the map is listed.
  reference: [
    {
      group: "Start here",
      pages: [
        'overview',
        'getting-started/sign-in',
        'getting-started/connect-platforms',
        'getting-started/bot-account',
        'getting-started/dashboard-tour',
        'getting-started/first-command',
      ],
    },
    {
      group: "Commands",
      pages: [
        'commands/create-a-command',
        'commands/variables-and-templates',
        'commands/built-in-commands',
        'commands/cooldowns-and-permissions',
        'commands/pipelines',
        'commands/pick-lists',
        'commands/quotes',
      ],
    },
    {
      group: "Template helpers",
      pages: [
        'templates/overview',
        'templates/user',
        'templates/target',
        'templates/channel',
        'templates/stream',
        'templates/chat',
        'templates/args',
        'templates/activity',
        'templates/event',
        'templates/poll',
        'templates/hypetrain',
        'templates/goal',
        'templates/charity',
        'templates/schedule',
        'templates/ad',
        'templates/bot',
        'templates/list',
        'templates/quote',
        'templates/var',
        'templates/music',
        'templates/date',
        'templates/if',
        'templates/random',
        'templates/fun',
        'templates/text',
        'templates/num',
        'templates/math',
        'templates/platform',
        'templates/emote',
        'templates/lookup',
      ],
    },
    {
      group: "Timers, events and rewards",
      pages: [
        'automation/timers-and-chat-triggers',
        'automation/event-responses',
        'automation/rewards',
      ],
    },
    {
      group: "Widgets and overlays",
      pages: [
        'overlays/set-up-overlays',
        'overlays/obs-browser-source',
        'overlays/widgets-and-alerts',
      ],
    },
    {
      group: "Music",
      pages: [
        'music/music-player',
        'music/song-requests',
      ],
    },
    {
      group: "Voice and sound",
      pages: [
        'audio/text-to-speech',
        'audio/read-aloud-api',
        'audio/voice-triggers',
        'audio/sounds',
        'audio/media-share',
      ],
    },
    {
      group: "Moderation",
      pages: [
        'moderation/overview',
        'moderation/automod-and-chat-filters',
        'moderation/bans-and-blocked-terms',
        'moderation/spam-defense',
        'moderation/trust-and-escalation',
        'moderation/reports',
        'moderation/shoutouts',
        'moderation/linked-channels',
      ],
    },
    {
      group: "Currency and games",
      pages: [
        'economy/currency-and-balances',
        'economy/store',
        'economy/leaderboards-and-games',
        'economy/giveaways',
        'economy/polls-and-predictions',
      ],
    },
    {
      group: "Integrations",
      pages: [
        'integrations/spotify',
        'integrations/discord',
        'integrations/youtube',
        'integrations/obs',
        'integrations/stream-deck-and-api-devices',
        'integrations/vtube-studio',
        'integrations/webhooks-and-event-feeds',
        'integrations/supporter-sources',
      ],
    },
    {
      group: "Community and stream",
      pages: [
        'community/people',
        'community/viewer-pages',
        'community/chat-page',
        'community/stream-page',
        'community/analytics',
      ],
    },
    {
      group: "Settings",
      pages: [
        'settings/bot-basics-and-personality',
        'settings/features',
        'settings/permissions',
        'settings/readability',
        'settings/white-label-bot',
        'settings/your-data-and-privacy',
        'settings/resource-limits',
        'settings/channel-management',
        'settings/billing',
        'settings/event-journal',
      ],
    },
    {
      group: "Self-hosting",
      pages: [
        'self-hosting/install-with-docker',
        'self-hosting/first-run-setup',
        'self-hosting/updates',
      ],
    },
    {
      group: "Code and SDK (Draft)",
      pages: [
        'code/scripts',
        'code/how-a-script-runs',
        'code/sdk-script-basics',
        'code/sdk-chat-music-voice',
        'code/sdk-data-and-storage',
        'code/sdk-widgets-actions-templates',
        'code/worked-example',
      ],
    },
  ],
};
