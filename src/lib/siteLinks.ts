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

// Where the docs send a reader who wants the bot itself: the public site of the bot, whose home page has the
// button into the dashboard for a signed-in person. A self-hoster points this at their own bot.
export const botUrl: string = import.meta.env.PUBLIC_BOT_URL ?? 'https://nomnomz.bot';
