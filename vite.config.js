import { defineConfig } from "vite";

export default defineConfig({
  root: "./",
  build: {
    outDir: "dist",
    emptyOutDir: true,
  },
  server: {
    port: 9000,
    open: true,
  },
});
