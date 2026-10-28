// -----------------------------------------------------------------------------
//  Copyright (c) NoMercy Labs.
//
//  This file is part of NomNomzBot, free software licensed under the GNU Affero
//  General Public License v3.0 or later. You may redistribute and/or modify it
//  under those terms. Distributed WITHOUT ANY WARRANTY. See LICENSE for details.
//
//  SPDX-License-Identifier: AGPL-3.0-or-later
// -----------------------------------------------------------------------------

// @ts-check
import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import mdx from "@astrojs/mdx";
import tailwindcss from "@tailwindcss/vite";
import path from "node:path";
import { fileURLToPath } from "node:url";

import { unified } from "@astrojs/markdown-remark";

import { remarkPlugins } from "./src/lib/mdx/remark.ts";
import { rehypePlugins } from "./src/lib/mdx/rehype.ts";
import { recmaPlugins } from "./src/lib/mdx/recma.ts";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// https://astro.build/config
export default defineConfig({
  site: "https://docs.nomnomz.bot",
  redirects: {
    "/reference": "/reference/overview",
  },
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
    routing: {
      prefixDefaultLocale: false,
    },
  },
  integrations: [
    react({
      include: ["**/react/**", "**/*.{tsx,jsx}"],
    }),
    mdx({
      recmaPlugins,
      // optimize: true pre-renders MDX to static HTML and bypasses the
      // `components` prop on <Content components={...} />. That kills every
      // custom MDX component override, most importantly the h2 -> Heading
      // mapping that wraps headings in clickable `<a href="#id">` anchors.
      // Keep optimize off until we have a build-perf reason strong enough to
      // give up custom components.
      // Disable Astro's rehypeShiki so it never sees ::button; we handle highlighting in rehype
      syntaxHighlight: false,
    }),
  ],
  markdown: {
    // Completely disable Shiki - we handle syntax highlighting in rehype
    syntaxHighlight: "prism",
    // Astro 7 runs Markdown through Saetteri by default and no longer applies
    // `remarkPlugins` on the mdx() integration. The unified processor keeps the
    // pipeline this site is built on - directives, the heading anchors - and
    // MDX inherits it from here.
    processor: unified({
      remarkPlugins,
      rehypePlugins,
      syntaxHighlight: "prism",
    }),
  },
  vite: {
    plugins: [tailwindcss()],
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src"),
      },
      dedupe: ["react", "react-dom", "react/jsx-runtime"],
    },
    optimizeDeps: {
      // Pre-bundle the deps every layout island pulls, so Vite never discovers
      // them mid-session and re-optimizes (which invalidates the hash the SSR'd
      // HTML already referenced and 504s "Outdated Optimize Dep", breaking
      // island hydration). Keeping react here alongside dedupe also pins a
      // single React copy through the pre-bundle.
      include: [
        "react",
        "react-dom",
        "react/jsx-runtime",
        "framer-motion",
        "zustand",
        "@headlessui/react",
        "clsx",
      ],
    },
    server: {
      watch: {
        // Use polling for WSL/network filesystems - helps with file change detection
        usePolling: true,
        interval: 1000,
      },
    },
  },
  server: {
    host: true, // Use 'true' instead of '0.0.0.0' - allows Astro to auto-detect the best host
    port: 4321,
    allowedHosts: true,
  },
});
