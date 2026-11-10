import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "astro/config";

export default defineConfig({
  site: "https://minghanzhu.com",
  integrations: [mdx(), sitemap({ filter: (page) => !page.includes("/resume") })],
  redirects: {
    "/resume": "/cv/",
  },
  vite: {
    plugins: [tailwindcss()],
  },
});
