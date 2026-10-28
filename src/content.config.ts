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

import { defineCollection } from "astro:content";
import { z } from "astro/zod";
import { glob } from "astro/loaders";

const pageSchema = z
  .object({
    title: z.string(),
    description: z.string().optional(),
    published: z.date().optional(),
    updated: z.date().optional(),
    tags: z.array(z.string()).optional(),
    author: z.string().optional(),
    category: z.string().optional(),
    order: z.number().optional(),
    draft: z.boolean().optional().default(false),
    helpKey: z.string().optional(),
    sections: z
      .array(
        z.object({
          id: z.string(),
          title: z.string(),
          tag: z.string().optional(),
        }),
      )
      .optional(),
  })
  .catchall(z.any());

export const collections = {
  reference: defineCollection({
    loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/reference" }),
    schema: pageSchema,
  }),
};
