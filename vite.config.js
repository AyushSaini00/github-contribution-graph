import { resolve } from "path";
import { defineConfig } from "vite";

export default defineConfig({
  build: {
    lib: {
      entry: resolve(__dirname, "src/index.js"),
      name: "github-contribution-graph",
      fileName: (format) => `github-contribution-graph.${format}.js`,
    },
  },
});
