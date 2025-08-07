import { defineConfig } from "tsup";

const config = defineConfig({
  entry: ["src/rcp.ts", "src/css/rcp.css"],
  outDir: "dist",
  format: ["esm", "cjs"],
  external: ["react"],
  clean: true,
  minify: false,
  dts: "src/rcp.ts",
  banner: {
    js: `"use client"`,
  },
});

export default config;
