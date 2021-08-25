import { defineConfig } from "vite";
import reactRefresh from "@vitejs/plugin-react-refresh";

export default defineConfig({
  root: "demo/src",
  base: "./",
  plugins: [reactRefresh()],
  server: {
    port: 4000,
    open: true,
  },
  build: {
    outDir: "../build",
    emptyOutDir: true,
    assetsInlineLimit: 0,
  },
});
