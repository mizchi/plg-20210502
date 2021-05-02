import { defineConfig } from "vite";
import svelte from "@sveltejs/vite-plugin-svelte";
import autoPreprocess from "svelte-preprocess";

// https://vitejs.dev/config/
export default defineConfig({
  cacheDir: ".vite",
  plugins: [
    svelte({
      preprocess: autoPreprocess({
        postcss: {
          plugins: [require("tailwindcss"), require("autoprefixer")],
        },
      }),
    }),
  ],
});
