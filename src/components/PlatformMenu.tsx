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

'use client';

import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react';
import clsx from 'clsx';
import { useEffect, useState } from 'react';

// Header control for the reader's operating system. The PlatformSwitcher
// script owns the state: it sets data-platform on <html>, persists it, and
// dispatches `platform:change`. The menu items carry data-platform-value so
// that script handles the click; this component only follows the event.

const PLATFORMS = [
  { value: 'windows', label: 'Windows' },
  { value: 'linux', label: 'Linux' },
  { value: 'macos', label: 'macOS' },
] as const;
type Platform = (typeof PLATFORMS)[number]['value'];

const isPlatform = (value: string | null | undefined): value is Platform =>
  PLATFORMS.some((platform) => platform.value === value);

const labelOf = (value: Platform) => PLATFORMS.find((platform) => platform.value === value)!.label;

function ChevronIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 16 16" fill="none" aria-hidden="true" {...props}>
      <path d="m4 6 4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function PlatformMenu() {
  const [mounted, setMounted] = useState(false);
  const [current, setCurrent] = useState<Platform>('windows');

  useEffect(() => {
    setMounted(true);
    const initial = document.documentElement.dataset.platform;
    if (isPlatform(initial)) setCurrent(initial);

    const onChange = (event: Event) => {
      const detail = (event as CustomEvent<string>).detail;
      if (isPlatform(detail)) setCurrent(detail);
    };
    document.addEventListener('platform:change', onChange);
    return () => document.removeEventListener('platform:change', onChange);
  }, []);

  const triggerClassName =
    'flex h-6 cursor-pointer items-center gap-1 rounded-md px-1.5 text-2xs text-zinc-600 transition hover:bg-zinc-900/5 dark:text-zinc-400 dark:hover:bg-white/5';

  if (!mounted) {
    return (
      <div className="relative">
        <button type="button" className={triggerClassName} aria-label="Select your operating system">
          {labelOf(current)}
          <ChevronIcon className="h-3 w-3 stroke-zinc-400" />
        </button>
      </div>
    );
  }

  return (
    <Menu as="div" className="relative">
      <MenuButton className={triggerClassName} aria-label="Select your operating system">
        {labelOf(current)}
        <ChevronIcon className="h-3 w-3 stroke-zinc-400" />
      </MenuButton>
      <MenuItems
        anchor="bottom end"
        className="z-50 w-28 rounded-lg bg-white p-1 shadow-lg ring-1 ring-zinc-900/5 [--anchor-gap:0.5rem] focus:outline-none dark:bg-zinc-800 dark:ring-white/10"
      >
        {PLATFORMS.map((platform) => (
          <MenuItem key={platform.value}>
            <button
              type="button"
              data-platform-value={platform.value}
              onClick={() => setCurrent(platform.value)}
              className={clsx(
                'flex w-full cursor-pointer items-center justify-between rounded-md px-2 py-1 text-2xs transition data-focus:bg-zinc-900/5 dark:data-focus:bg-white/5',
                platform.value === current ? 'text-primary' : 'text-zinc-700 dark:text-zinc-300',
              )}
            >
              {platform.label}
              {platform.value === current && (
                <span aria-hidden="true" className="text-primary">
                  &#10003;
                </span>
              )}
            </button>
          </MenuItem>
        ))}
      </MenuItems>
    </Menu>
  );
}
