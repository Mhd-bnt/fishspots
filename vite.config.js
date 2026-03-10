import { defineConfig } from "vitest/config";
import { viteMockServe } from "vite-plugin-mock";
import path from "path";

export default defineConfig({
  // 1. Configuration des tests
  test: {
    environment: "jsdom",
    coverage: {
      provider: "v8",
      reporter: ["text", "html"],
      reportsDirectory: path.resolve(__dirname, "./coverage"),
      thresholds: {
        lines: 80,
        functions: 80,
        branches: 80,
        statements: 80,
      },
    },
  },

  // Plugins Vite
  plugins: [
    viteMockServe({
      mockPath: "mock",
      localEnabled: true,
    }),
  ],

  //  Configuration générale
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
