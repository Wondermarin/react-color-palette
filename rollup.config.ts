import nodeResolve from "@rollup/plugin-node-resolve";
import babel from "@rollup/plugin-babel";
import copy from "rollup-plugin-copy";
import { terser } from "rollup-plugin-terser";

import pkg from "./package.json";

const extensions = [".tsx", ".ts", ".js"];

const config = {
  input: "src/index.ts",
  output: [
    {
      file: pkg.exports["."].import,
      format: "es",
    },
    {
      file: pkg.exports["."].require,
      format: "cjs",
    },
    {
      file: pkg.exports["."].browser,
      format: "es",
    },
  ],
  external: ["react", "react/jsx-runtime"],
  plugins: [
    nodeResolve({
      extensions,
    }),
    babel({
      exclude: /node_modules/,
      extensions,
      babelHelpers: "bundled",
    }),
    copy({
      targets: [{ src: "src/css/styles.css", dest: "lib/css" }],
    }),
    terser({
      ecma: 5,
      module: true,
      toplevel: true,
      safari10: true,
    }),
  ],
};

export default config;
