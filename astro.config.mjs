// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import mdx from "@astrojs/mdx";
import "@fontsource/inter";

// https://astro.build/config
export default defineConfig({
  site: 'https://westwood.software',

  vite: {
    plugins: [tailwindcss()],
  },

  integrations: [mdx()],
});