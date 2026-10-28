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

type PlatformName = 'windows' | 'linux' | 'macos';

// Content for some operating systems only. `os` takes one or more names,
// space-separated: <Platform os="linux macos">...</Platform>. The header switch
// picks which blocks show; global.css hides the rest.
export function Platform({ os, children }: { os: `${PlatformName}` | string; children: React.ReactNode }) {
  return <div data-platform-only={os}>{children}</div>;
}
