import { defineConfig } from "vite";
import { fileURLToPath } from "url";
import path, { join, resolve } from "path";

export default defineConfig({
  root: "src",
  plugins: [],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
  build: {
    outDir: "../dist",
  },
  server: {
    open: "/",
    // port: 3000
  },
});
