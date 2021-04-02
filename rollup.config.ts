import replace from "@rollup/plugin-replace";
import nodeResolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import babel from "@rollup/plugin-babel";
import copy from "rollup-plugin-copy";
import { terser } from "rollup-plugin-terser";
import del from "rollup-plugin-delete";
import progress from "rollup-plugin-progress";

const production = !process.env.ROLLUP_WATCH;
const extensions = [".tsx", ".ts", ".js"];

const config = {
  input: "src/index.ts",
  output: {
    format: "cjs",
    dir: "lib",
    exports: "named",
    preserveModules: true,
  },
  external: ["react", "react/jsx-runtime"],
  plugins: [
    replace({
      preventAssignment: true,
      "process.env.NODE_ENV": JSON.stringify(production ? "production" : "development"),
    }),
    nodeResolve({
      extensions,
    }),
    commonjs({
      include: /node_modules/,
    }),
    babel({
      extensions,
      exclude: /node_modules/,
      babelHelpers: "inline",
    }),
    copy({
      targets: [{ src: "src/css/styles.css", dest: "lib/css" }],
      verbose: true,
    }),
    production && terser(),
    del({
      targets: ["lib"],
      verbose: true,
    }),
    progress(),
  ],
};

export default config;
