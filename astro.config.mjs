import { defineConfig, fontProviders } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: "https://beaconsearchgroup.com",
  output: "static",
  build: {
    inlineStylesheets: "always"
  },
  // Fonts are downloaded at build time and self-hosted (no render-blocking Google request)
  fonts: [
    {
      provider: fontProviders.google(),
      name: "Source Sans 3",
      cssVariable: "--font-source-sans",
      weights: [400, 500, 600, 700],
      styles: ["normal"],
      subsets: ["latin"],
      fallbacks: ["system-ui", "sans-serif"]
    },
    {
      provider: fontProviders.google(),
      name: "Fraunces",
      cssVariable: "--font-fraunces",
      weights: [600, 700],
      styles: ["normal", "italic"],
      subsets: ["latin"],
      fallbacks: ["Georgia", "serif"]
    }
  ],
  vite: {
    plugins: [tailwindcss()]
  },
  integrations: [sitemap()]
});
