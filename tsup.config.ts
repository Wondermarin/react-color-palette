import { defineConfig } from "tsup";

const config = defineConfig({
  entry: ["src/index.ts", "src/css/index.css"],
  outDir: "dist",
  format: ["esm", "cjs"],
  external: ["react"],
  clean: true,
  minify: true,
  dts: "src/index.ts",
  banner: {
    js: `"use client"`,
  },
});

export default config;
