import nodeResolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import babel from "@rollup/plugin-babel";
import copy from "rollup-plugin-copy";
import { terser } from "rollup-plugin-terser";

const production = !process.env.ROLLUP_WATCH;
const extensions = [".tsx", ".ts", ".js"];

const config = {
  input: "src/index.ts",
  output: {
    file: "lib/index.js",
    format: "cjs",
  },
  external: [/@babel\/runtime/, "react", "react/jsx-runtime"],
  plugins: [
    nodeResolve({ extensions }),
    commonjs({ include: /node_modules/ }),
    babel({
      exclude: /node_modules/,
      extensions,
      babelHelpers: "runtime",
    }),
    copy({
      targets: [{ src: "src/css/styles.css", dest: "lib/css" }],
      verbose: true,
    }),
    production && terser({
      ecma: 5,
      module: true,
      toplevel: true,
      safari10: true,
    }),
  ],
};

export default config;
