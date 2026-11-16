'use client';

import { useEffect } from 'react';

export function bindCopyButtons(root: ParentNode = document): () => void {
  const cleanups: Array<() => void> = [];
  root.querySelectorAll<HTMLButtonElement>('button[data-code]').forEach((button) => {
    const label = button.querySelector('span');
    const original = label?.innerHTML;
    let timer: ReturnType<typeof setTimeout> | undefined;
    let busy = false;
    let disposed = false;
    const existingStatus = button.querySelector<HTMLElement>('[role="status"]');
    const status = existingStatus ?? document.createElement('span');
    if (!existingStatus) {
      status.className = 'sr-only';
      status.setAttribute('role', 'status');
      status.setAttribute('aria-live', 'polite');
      button.append(status);
    }
    button.setAttribute('aria-label', 'Copy code to clipboard');

    const onClick = async () => {
      const code = button.getAttribute('data-code');
      if (code === null || busy) return;
      busy = true;
      if (timer) clearTimeout(timer);
      status.textContent = '';
      let message: string;
      try {
        await navigator.clipboard.writeText(code);
        message = 'Code copied to clipboard';
        if (!disposed && label) label.textContent = 'Copied';
      } catch {
        message = 'Could not copy code. Select the code and copy it manually.';
        if (!disposed && label) label.textContent = 'Copy failed';
      } finally {
        busy = false;
      }
      if (disposed) return;
      status.textContent = message;
      button.setAttribute('aria-label', message);
      timer = setTimeout(() => {
        if (label && original !== undefined) label.innerHTML = original;
        status.textContent = '';
        button.setAttribute('aria-label', 'Copy code to clipboard');
      }, 2000);
    };
    button.addEventListener('click', onClick);
    cleanups.push(() => {
      disposed = true;
      if (timer) clearTimeout(timer);
      button.removeEventListener('click', onClick);
      if (label && original !== undefined) label.innerHTML = original;
      button.setAttribute('aria-label', 'Copy code to clipboard');
      status.textContent = '';
      if (!existingStatus) status.remove();
    });
  });
  return () => cleanups.forEach(cleanup => cleanup());
}

export function CodeHighlighter() {
  useEffect(() => bindCopyButtons(), []);
  return null;
}
