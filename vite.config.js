import { defineConfig } from "vite";

export default defineConfig({
  root: "./src",
  build: {
    outDir: "../dist",
    emptyOutDir: true, // Pour supprimer le warning
  },
  server: {
    port: 3000,
    open: true,
  },
});
