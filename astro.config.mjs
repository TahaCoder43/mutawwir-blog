// @ts-check
import { defineConfig } from "astro/config";
import svelte from "@astrojs/svelte";
import mdx from "@astrojs/mdx";
import remarkSectionize from "remark-sectionize";
import remarkGithubAlerts from "remark-github-alerts";

// https://astro.build/config
export default defineConfig({
    markdown: {
        remarkPlugins: [remarkSectionize, remarkGithubAlerts],
    },
    integrations: [svelte(), mdx()],
});
