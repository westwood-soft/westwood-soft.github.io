// @ts-check
import { defineConfig } from "astro/config";
import "@fontsource/inter";

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  site: 'https://westwood.software',
  integrations: [tailwind()],
});
