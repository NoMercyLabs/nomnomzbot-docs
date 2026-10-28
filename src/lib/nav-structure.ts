// -----------------------------------------------------------------------------
//  Copyright (c) NoMercy Labs.
//
//  This file is part of NomNomzBot, free software licensed under the GNU Affero
//  General Public License v3.0 or later. You may redistribute and/or modify it
//  under those terms. Distributed WITHOUT ANY WARRANTY. See LICENSE for details.
//
//  SPDX-License-Identifier: AGPL-3.0-or-later
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
  // The area pages are generated from the bot's capability ledger and are
  // added here by that generator, so a capability cannot be left out.
  reference: [{ group: "Reference", pages: ['overview'] }],
};
