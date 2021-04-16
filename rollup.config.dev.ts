import replace from "@rollup/plugin-replace";
import nodeResolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import babel from "@rollup/plugin-babel";
import html from "@rollup/plugin-html";
import postcss from "rollup-plugin-postcss";
import dev from "rollup-plugin-dev";
import del from "rollup-plugin-delete";
import progress from "rollup-plugin-progress";

const production = !process.env.ROLLUP_WATCH;
const mode = production ? "production" : "development";
const extensions = [".tsx", ".ts", ".js"];

const config = {
  input: "demo/index.tsx",
  output: {
    dir: "demo/build",
    format: "iife",
    entryFileNames: "main.[hash].js",
  },
  plugins: [
    replace({
      preventAssignment: true,
      "process.env.NODE_ENV": JSON.stringify(mode),
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
    html({
      fileName: "index.html",
      title: "react-color-palette",
      template: ({ publicPath, files, title }) => {
        const css = files.css || [];
        const js = files.js || [];

        const links = css.map(({ fileName }) => `<link href="${publicPath}${fileName}" rel="stylesheet">`);
        const scripts = js.map(({ fileName }) => `<script src="${publicPath}${fileName}"></script>`);

        return `
        <!DOCTYPE html>
        <html>
          <head>
            <meta charset="UTF-8">
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>${title}</title>
            <style type="text/css">
              * {
                box-sizing: border-box;
                padding: 0;
                margin: 0;
              }
              
              html,
              body {
                font-family: "Montserrat", sans-serif;
              }
            </style>
            ${links}
          </head>
          <body>
            <div id="app"></div>
            ${scripts}
          </body>
        </html>
      `;
      },
    }),
    postcss({
      extensions: [".css"],
    }),
    dev({
      dirs: ["demo/build"],
      port: 3000,
    }),
    del({
      targets: ["demo/build"],
      verbose: true,
    }),
    progress(),
  ],
};

export default config;
