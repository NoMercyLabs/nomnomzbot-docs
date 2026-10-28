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

import clsx from 'clsx';

// The bot glyph from dashboard/public/icon.svg, drawn in the current text
// color so it follows the theme, beside the product name.
export function Logo({ className, ...props }: React.ComponentPropsWithoutRef<'span'>) {
  return (
    <span className={clsx('flex h-full items-center gap-2 text-foreground', className)} {...props}>
      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className="h-full max-h-8 w-auto">
        <path
          d="M22 12V15M2 12V15M9 8H7C5.34315 8 4 9.34315 4 11V16C4 17.6569 5.34315 19 7 19H10L12 21L14 19H17C18.6569 19 20 17.6569 20 16V11C20 9.34315 18.6569 8 17 8H15M9 8L8 5M9 8H15M8 5C8.55228 5 9 4.55228 9 4C9 3.44772 8.55228 3 8 3C7.44772 3 7 3.44772 7 4C7 4.55228 7.44772 5 8 5ZM15 8L16 5M16 5C16.5523 5 17 4.55228 17 4C17 3.44772 16.5523 3 16 3C15.4477 3 15 3.44772 15 4C15 4.55228 15.4477 5 16 5ZM10 14V13.5C10 12.6716 9.32843 12 8.5 12C7.67157 12 7 12.6716 7 13.5V14M17 14V13.5C17 12.6716 16.3284 12 15.5 12C14.6716 12 14 12.6716 14 13.5V14"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      <span className="text-base font-semibold tracking-tight whitespace-nowrap">NomNomzBot</span>
    </span>
  );
}
