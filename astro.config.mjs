import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  //UPDATE THIS FOR EVERY NEW CLIENT
  site: "https://beaconsearchgroup.com",
  output: "static",
  vite: {
    plugins: [tailwindcss()]
  },
  integrations: [sitemap()]
});
