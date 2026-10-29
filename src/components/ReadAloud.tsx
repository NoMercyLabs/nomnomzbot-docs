'use client';

import clsx from 'clsx';
import { useEffect, useRef } from 'react';
import { create } from 'zustand';

import { t } from '../lib/i18n';
import { chunkSentence, joinCommandBangs, rowChunks } from '../lib/readAloudChunks';
import { createClipCache, textsAhead, whenBuffered } from '../lib/readAloudClip';
import { rowText, tableIsRead } from '../lib/readAloudLabels';
import { pickVoice } from '../lib/readAloudVoice';

// Read aloud with the browser's own speech engine: no service, no key, and
// the reader's system voices. The page is split into blocks (headings,
// paragraphs, list items, cells) and each block into sentences; one sentence
// is one utterance, because Chrome cuts a long utterance off after about 15
// seconds. Pause is a cancel that remembers the sentence: speechSynthesis
// .pause() is unreliable on Android Chrome.

const BLOCKS = 'h1, h2, h3, h4, p, li, dt, dd, tr, figcaption';
// A block with one of these inside is read through them instead, so a list
// item that holds a paragraph is not read twice.
const INNER = 'p, h1, h2, h3, h4, dt, dd, figcaption';
const SKIP = 'pre, nav, header, footer, [aria-hidden="true"], [data-read-skip], .sr-only';
// Removed from a block's copy before its text is taken: code blocks, nested
// lists (read as their own items) and controls.
const STRIP = 'pre, ul, ol, table, svg, button, kbd, .sr-only, [aria-hidden="true"]';
const RATES = [0.75, 1, 1.25, 1.5];

type Status = 'idle' | 'playing' | 'paused';

let blocks: HTMLElement[] = [];
let sentences: string[] = [];
let blockIndex = 0;
let sentenceIndex = 0;
// Each speak() takes a new id; an utterance whose end arrives after a cancel
// or a skip carries an old id and is ignored.
let runId = 0;

// The bot's own voice. A site that runs its own bot sets PUBLIC_READ_ALOUD_URL.
const READ_ALOUD_URL
  = import.meta.env.PUBLIC_READ_ALOUD_URL ?? 'https://dev.nomnomz.bot/api/v1/public/read-aloud';
const clips = createClipCache(READ_ALOUD_URL, (url, options) => fetch(url, options?.fresh ? { cache: 'reload' } : undefined));
let player: HTMLAudioElement | null = null;

// Audio elements made ahead of their turn, by clip address: a sentence is fetched and decoded while the one
// before it plays, so it starts the moment it is wanted.
const warm = new Map<string, HTMLAudioElement>();

// Lets go of an element's clip. An element that is only paused keeps loading its blob, and a blob revoked
// under it fails with ERR_REQUEST_RANGE_NOT_SATISFIABLE.
function release(audio: HTMLAudioElement): void {
  audio.onended = null;
  audio.onerror = null;
  audio.pause();
  audio.removeAttribute('src');
  audio.load();
}

function releaseWarm(): void {
  warm.forEach(release);
  warm.clear();
}

function silence(): void {
  if (player) {
    release(player);
    player = null;
  }
  window.speechSynthesis.cancel();
}

// How many sentences are kept fetched ahead of the one being read. The queue sends a few requests at a time, in order, so the
// buffer fills in reading order as each clip arrives, and a sentence is rarely fetched at the moment it plays.
const BUFFER_AHEAD = 10;
// Of those, how many already have an audio element built; the rest are only fetched.
const WARM_AHEAD = 2;
// Reading starts once this many clips (the first line and the ones after it) are ready, so the lines that follow
// are already there when the first ends. The wait is capped, so a slow bot delays the start and never blocks it.
const START_BUFFER = 4;
const START_BUFFER_MAX_WAIT_MS = 12000;

function* laterBlockSentences(): Generator<string[]> {
  for (let index = blockIndex + 1; index < blocks.length; index += 1) {
    yield speechesOf(blocks[index]!);
  }
}

// The sentences after the current one, so their clips can load while this one plays.
function upcomingTexts(): string[] {
  return textsAhead(sentences, sentenceIndex, laterBlockSentences(), BUFFER_AHEAD);
}

export function readAloudSupported(): boolean {
  return typeof window !== 'undefined' && 'speechSynthesis' in window;
}

function readRate(): number {
  try {
    const stored = Number(localStorage.getItem('read-aloud-rate'));
    return RATES.includes(stored) ? stored : 1;
  }
  catch {
    return 1;
  }
}

// The voice the reader picked in the reading menu; empty means automatic.
function readVoiceName(): string | null {
  try {
    return localStorage.getItem('read-aloud-voice') || null;
  }
  catch {
    return null;
  }
}

function textOf(element: HTMLElement): string {
  // A table row is one line: its first cell, then what the other cells say.
  if (element.tagName === 'TR') return rowText([...element.children].map(cell => textOf(cell as HTMLElement)));
  const copy = element.cloneNode(true) as HTMLElement;
  copy.querySelectorAll(STRIP).forEach(node => node.remove());
  // textContent drops a line break, which glues the last word of one line to
  // the first word of the next.
  copy.querySelectorAll('br').forEach(node => node.replaceWith(' '));
  return (copy.textContent ?? '').replace(/\s+/g, ' ').trim();
}

const readTables = new WeakMap<Element, boolean>();

function tableIsSpoken(table: Element): boolean {
  let spoken = readTables.get(table);
  if (spoken === undefined) {
    const texts = [...table.querySelectorAll('th, td')].map(cell => cell.textContent ?? '');
    spoken = tableIsRead(texts);
    readTables.set(table, spoken);
  }
  return spoken;
}

// Reference data (a table of one-word cells) and the header row of a table are not read.
function isSkippedInTable(element: HTMLElement): boolean {
  const row = element.closest('tr');
  if (!row) return false;
  const table = row.closest('table');
  if (table && !tableIsSpoken(table)) return true;
  return element === row && row.querySelector('td') === null;
}

function collect(): HTMLElement[] {
  const main = document.getElementById('main-content');
  if (!main) return [];
  return [...main.querySelectorAll<HTMLElement>(BLOCKS)].filter(
    element => !element.closest(SKIP)
      && !isSkippedInTable(element)
      && !element.querySelector(INNER)
      && element.getClientRects().length > 0
      && textOf(element) !== '',
  );
}

function split(text: string): string[] {
  const lang = document.documentElement.lang || 'en';
  if ('Segmenter' in Intl) {
    const segmenter = new Intl.Segmenter(lang, { granularity: 'sentence' });
    const parts = [...segmenter.segment(text)].map(part => part.segment.trim()).filter(Boolean);
    return joinCommandBangs(parts).flatMap(sentence => chunkSentence(sentence));
  }
  return joinCommandBangs((text.match(/[^.!?]+[.!?]*/g) ?? [text]).map(part => part.trim()))
    .flatMap(sentence => chunkSentence(sentence));
}

// What is spoken for a block: its sentences, or for a table row the whole row as one speech.
function speechesOf(block: HTMLElement): string[] {
  const text = textOf(block);
  return block.tagName === 'TR'
    ? rowChunks(text)
    : split(text);
}

function isSection(element: HTMLElement): boolean {
  return element.tagName === 'H1' || element.tagName === 'H2';
}

function mark(element: HTMLElement | undefined): void {
  document.querySelectorAll('[data-reading]').forEach(node => node.removeAttribute('data-reading'));
  if (!element) return;
  element.setAttribute('data-reading', '');
  const rect = element.getBoundingClientRect();
  if (rect.top < 80 || rect.bottom > window.innerHeight - 96) {
    // window.scrollTo, not scrollIntoView: a smooth scrollIntoView left the
    // page where it was (scrollY stayed 0 over six sections) while a smooth
    // window.scrollTo moved it. Centre the block, but never push its first
    // line up under the header when the block is taller than the screen.
    const smooth = !window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const offset = Math.max(96, (window.innerHeight - rect.height) / 2);
    window.scrollTo({ top: window.scrollY + rect.top - offset, behavior: smooth ? 'smooth' : 'auto' });
  }
}

// Where the reading was when a dev reload (hot module swap or a full reload) threw the module away.
interface SavedReading {
  path: string;
  blockIndex: number;
  sentenceIndex: number;
}

const SAVED_KEY = 'read-aloud-saved';

// Dev only. Production never keeps a reading across a page change: leaving the page stops it.
function saveReading(): void {
  if (!import.meta.env.DEV || useReadAloud.getState().status === 'idle') return;
  try {
    const saved: SavedReading = { path: location.pathname, blockIndex, sentenceIndex };
    sessionStorage.setItem(SAVED_KEY, JSON.stringify(saved));
  }
  catch {
    /* no storage: the bar simply does not come back */
  }
}

function takeSavedReading(): SavedReading | null {
  try {
    const raw = sessionStorage.getItem(SAVED_KEY);
    sessionStorage.removeItem(SAVED_KEY);
    const saved = raw ? JSON.parse(raw) as SavedReading : null;
    return saved?.path === location.pathname ? saved : null;
  }
  catch {
    return null;
  }
}

interface ReadAloudState {
  status: Status;
  // True while the reader waits for the first clips to be ready (or for a clip that is not ready yet).
  loading: boolean;
  rate: number;
  start: () => void;
  // Puts the bar back at a saved place, paused, after a dev reload.
  restore: (saved: SavedReading) => void;
  toggle: () => void;
  stop: () => void;
  step: (delta: 1 | -1, unit: 'paragraph' | 'section') => void;
  cycleRate: () => void;
}

export const useReadAloud = create<ReadAloudState>()((set, get) => {
  function finished(id: number): void {
    if (id !== runId) return;
    if (sentenceIndex + 1 < sentences.length) {
      sentenceIndex += 1;
    }
    else {
      blockIndex += 1;
      sentenceIndex = 0;
    }
    speak();
  }

  // The browser voice speaks a sentence the bot could not.
  function speakWithBrowser(text: string, lang: string, id: number): void {
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = lang;
    utterance.rate = get().rate;
    const voice = pickVoice(window.speechSynthesis.getVoices(), lang, readVoiceName());
    if (voice) utterance.voice = voice;
    utterance.onend = () => finished(id);
    utterance.onerror = (event) => {
      if (id !== runId || event.error === 'interrupted' || event.error === 'canceled') return;
      get().stop();
    };
    window.speechSynthesis.speak(utterance);
  }

  // Fetches a sentence ahead of its turn. A sentence that is next in line also gets its audio element built now,
  // so it starts the moment it is wanted.
  function prepare(text: string, lang: string, buildElement: boolean): Promise<string | null> {
    const pending = clips.clip(text, lang);
    void pending.then((clip) => {
      if (!clip || !buildElement || warm.has(clip)) return;
      const audio = new Audio();
      audio.preload = 'auto';
      audio.src = clip;
      warm.set(clip, audio);
    });
    return pending;
  }

  function playClip(clip: string, text: string, lang: string, id: number): void {
    const audio = warm.get(clip) ?? new Audio(clip);
    warm.delete(clip);
    audio.playbackRate = get().rate;
    audio.onended = () => finished(id);
    audio.onerror = () => {
      if (id === runId) speakWithBrowser(text, lang, id);
    };
    player = audio;
    audio.play().catch(() => {
      if (id === runId) speakWithBrowser(text, lang, id);
    });
  }

  // `fillBuffer` is true when the queue is cold (start, resume, a jump): the first line then waits for the lines
  // after it. Between two lines the buffer is already full and the next clip plays as soon as it is there.
  function speak(fillBuffer = false): void {
    const id = ++runId;
    silence();
    const block = blocks[blockIndex];
    if (!block) {
      get().stop();
      return;
    }
    if (sentenceIndex === 0 || sentences.length === 0) sentences = speechesOf(block);
    mark(block);
    const text = sentences[sentenceIndex] ?? '';
    const lang = document.documentElement.lang || 'en';
    // Lines that waited for an earlier position are no longer wanted. The current sentence goes to the front of
    // the queue; the ones after it follow, in order.
    clips.dropQueued();
    const current = clips.clip(text, lang, true);
    const ahead = upcomingTexts().map((upcoming, position) => prepare(upcoming, lang, position < WARM_AHEAD));
    const ready = fillBuffer
      ? whenBuffered([current, ...ahead], START_BUFFER, START_BUFFER_MAX_WAIT_MS)
      : current.then(() => undefined);
    set({ loading: true });
    void ready.then(() => current).then((clip) => {
      if (id !== runId) return;
      set({ loading: false });
      if (clip) playClip(clip, text, lang, id);
      else speakWithBrowser(text, lang, id);
    });
  }

  function jumpTo(index: number): void {
    blockIndex = Math.max(0, Math.min(index, blocks.length - 1));
    sentenceIndex = 0;
    sentences = [];
    if (get().status === 'playing') speak(true);
    else mark(blocks[blockIndex]);
  }

  return {
    status: 'idle',
    loading: false,
    rate: 1,
    start: () => {
      if (!readAloudSupported()) return;
      blocks = collect();
      if (blocks.length === 0) return;
      releaseWarm();
      clips.reset();
      // Start where the reader is looking, not at the top of the page.
      const first = blocks.findIndex(block => block.getBoundingClientRect().bottom > 96);
      blockIndex = Math.max(first, 0);
      sentenceIndex = 0;
      sentences = [];
      set({ status: 'playing', rate: readRate() });
      speak(true);
    },
    restore: (saved) => {
      blocks = collect();
      if (blocks.length === 0) return;
      blockIndex = Math.max(0, Math.min(saved.blockIndex, blocks.length - 1));
      sentences = speechesOf(blocks[blockIndex]!);
      sentenceIndex = Math.max(0, Math.min(saved.sentenceIndex, sentences.length - 1));
      // Paused, not playing: a browser does not let a page start sound after a reload without a click.
      set({ status: 'paused', rate: readRate() });
      mark(blocks[blockIndex]);
    },
    toggle: () => {
      const { status } = get();
      if (status === 'playing') {
        runId += 1;
        silence();
        set({ status: 'paused', loading: false });
      }
      else if (status === 'paused') {
        set({ status: 'playing' });
        speak(true);
      }
    },
    stop: () => {
      runId += 1;
      if (readAloudSupported()) silence();
      releaseWarm();
      clips.reset();
      mark(undefined);
      blocks = [];
      sentences = [];
      set({ status: 'idle', loading: false });
    },
    step: (delta, unit) => {
      if (unit === 'paragraph') {
        jumpTo(blockIndex + delta);
        return;
      }
      let index = blockIndex + delta;
      while (index > 0 && index < blocks.length && !isSection(blocks[index]!)) index += delta;
      jumpTo(index);
    },
    cycleRate: () => {
      const rate = RATES[(RATES.indexOf(get().rate) + 1) % RATES.length]!;
      try {
        localStorage.setItem('read-aloud-rate', String(rate));
      }
      catch {
        /* the new rate still applies to this visit */
      }
      set({ rate });
      // The playing clip changes speed where it is, and the next one reads the rate when it starts. A sentence
      // the browser voice is speaking keeps its speed until the next sentence: that voice fixes it per utterance.
      if (player) player.playbackRate = rate;
    },
  };
});

// Dev only: a hot swap of this module drops the bar and the reading, and Vite may reload the page instead.
// Either way the place was saved on the way out, and the bar comes back there, paused.
if (import.meta.env.DEV && typeof window !== 'undefined') {
  import.meta.hot?.dispose(() => {
    saveReading();
    useReadAloud.getState().stop();
  });
  const saved = takeSavedReading();
  if (saved) window.setTimeout(() => useReadAloud.getState().restore(saved), 0);
}

function Icon({ d, filled = false }: { d: string; filled?: boolean }) {
  return (
    <svg viewBox="0 0 20 20" aria-hidden="true" className="h-[20px] w-[20px]">
      <path
        d={d}
        fill={filled ? 'currentColor' : 'none'}
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

// Shown in the play button while the first clips are fetched. Still under reduced motion, where it is a ring.
function Spinner() {
  return (
    <svg viewBox="0 0 20 20" aria-hidden="true" className="h-[20px] w-[20px] animate-spin motion-reduce:animate-none">
      <circle cx="10" cy="10" r="7" fill="none" stroke="currentColor" strokeWidth="1.5" opacity="0.25" />
      <path d="M10 3a7 7 0 0 1 7 7" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

const ICONS = {
  prevSection: 'M5 5v10M15 5l-6 5 6 5',
  prevParagraph: 'M13 5l-6 5 6 5',
  nextParagraph: 'M7 5l6 5-6 5',
  nextSection: 'M15 5v10M5 5l6 5-6 5',
  play: 'M7 4.5v11l8.5-5.5z',
  pause: 'M7 5v10M13 5v10',
  stop: 'M5 5l10 10M15 5L5 15',
};

function Control({
  label,
  onClick,
  children,
  primary = false,
}: {
  label: string;
  onClick: () => void;
  children: React.ReactNode;
  primary?: boolean;
}) {
  // Pixels, not rem: at 150% text a rem-sized bar wrapped to two rows and
  // covered 135px of a phone screen. 44px meets the AAA target size. The
  // icons are not text; the speed label inside stays in rem and still grows
  // with the reader's text size.
  return (
    <button
      type="button"
      aria-label={label}
      title={label}
      onClick={onClick}
      className={clsx(
        'flex h-[44px] min-w-[44px] items-center justify-center rounded-full px-[10px] transition',
        primary
          ? 'bg-(--color-accent-soft) text-(--color-accent)'
          : 'text-zinc-700 hover:bg-zinc-900/5 hover:text-zinc-900 dark:text-zinc-300 dark:hover:bg-white/5 dark:hover:text-white',
      )}
    >
      {children}
    </button>
  );
}

/**
 * The controls while the page is read aloud. Hidden until a reader starts it
 * from the reading settings; stopping hides it again. Escape stops, and
 * leaving the page stops, so speech never outlives the page it reads.
 *
 * A group, not a toolbar: the toolbar role promises one tab stop with arrow
 * keys between the buttons, and these are plain buttons reached with Tab.
 */
export function ReadAloudBar() {
  const { status, loading, rate, toggle, stop, step, cycleRate } = useReadAloud();
  const group = useRef<HTMLDivElement>(null);
  const shown = status !== 'idle';

  // The popover returns focus to its own button as it closes; after that,
  // move it to Pause so a keyboard reader lands on the controls they just
  // opened instead of hunting for a bar at the bottom of the page.
  useEffect(() => {
    if (!shown) return;
    const timer = window.setTimeout(() => {
      group.current?.querySelectorAll('button')[2]?.focus({ preventScroll: true });
    }, 50);
    return () => window.clearTimeout(timer);
  }, [shown]);

  useEffect(() => {
    if (status === 'idle') return;
    // Escape stops reading only when nothing else owns it: focus in the bar
    // or on the page itself. Escape in the settings popover or the search
    // dialog closes those and leaves the voice running.
    const onKey = (event: KeyboardEvent) => {
      if (event.key !== 'Escape') return;
      const active = document.activeElement;
      if (active === document.body || active === null || group.current?.contains(active)) stop();
    };
    window.addEventListener('keydown', onKey);
    // Leaving the page stops the reading. In dev the place is kept first, so a reload brings the bar back.
    const onPageHide = () => {
      saveReading();
      stop();
    };
    window.addEventListener('keydown', onKey);
    window.addEventListener('pagehide', onPageHide);
    return () => {
      window.removeEventListener('keydown', onKey);
      window.removeEventListener('pagehide', onPageHide);
    };
  }, [status, stop]);

  if (status === 'idle') return null;

  const playing = status === 'playing';
  return (
    <div
      ref={group}
      role="group"
      aria-label={t('readAloud.controls')}
      className={clsx(
        'fixed inset-x-0 z-50 mx-auto flex w-fit max-w-[calc(100vw-1rem)] flex-wrap items-center justify-center gap-0.5 rounded-full bg-white p-1 shadow-lg ring-1 ring-zinc-900/7.5 dark:bg-zinc-800 dark:ring-white/10',
        'bottom-[max(1rem,env(safe-area-inset-bottom))]',
      )}
    >
      <Control label={t('readAloud.prevSection')} onClick={() => step(-1, 'section')}>
        <Icon d={ICONS.prevSection} />
      </Control>
      <Control label={t('readAloud.prevParagraph')} onClick={() => step(-1, 'paragraph')}>
        <Icon d={ICONS.prevParagraph} />
      </Control>
      <Control
        label={loading ? t('readAloud.loading') : playing ? t('readAloud.pause') : t('readAloud.play')}
        onClick={toggle}
        primary
      >
        {loading
          ? <Spinner />
          : <Icon d={playing ? ICONS.pause : ICONS.play} filled={!playing} />}
      </Control>
      <Control label={t('readAloud.nextParagraph')} onClick={() => step(1, 'paragraph')}>
        <Icon d={ICONS.nextParagraph} />
      </Control>
      <Control label={t('readAloud.nextSection')} onClick={() => step(1, 'section')}>
        <Icon d={ICONS.nextSection} />
      </Control>
      <Control label={t('readAloud.speed', { rate: `${rate}×` })} onClick={cycleRate}>
        <span className="text-sm/5 font-medium tabular-nums">{`${rate}×`}</span>
      </Control>
      <Control label={t('readAloud.stop')} onClick={stop}>
        <Icon d={ICONS.stop} />
      </Control>
    </div>
  );
}
