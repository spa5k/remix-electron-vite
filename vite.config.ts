import { vitePlugin as remix } from "@remix-run/dev";
import { defineConfig } from "vite";
import envOnly from "vite-env-only";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  plugins: [
    remix({
      buildDirectory: "electron/build",
    }),
    tsconfigPaths(),
    envOnly(),
  ],
  ssr: {
    resolve: {
      externalConditions: ["node"],
    },
  },
  optimizeDeps: {
    exclude: [
      "electron",
      "electron/main",
      "fsevents",
      "drizzle-orm",
      "better-sqlite3",
    ],
  },
});