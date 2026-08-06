import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const jobs = defineCollection({
  loader: glob({
    pattern: ["*.yaml", "!_*.yaml"], // picks up every .yaml in src/content/jobs, skips files starting with _
    base: "./src/content/jobs"
  }),
  schema: z.object({
    title: z.string(),
    department: z.string(),
    location: z.string(),
    summary: z.string(),
    datePosted: z.string(), // 'YYYY-MM-DD'
    applyUrl: z.string().url() // third-party posting this job links out to
  })
});

export const collections = { jobs };
