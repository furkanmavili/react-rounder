import typescript from "rollup-plugin-typescript2";
import { babel } from "@rollup/plugin-babel";
import commonjs from "@rollup/plugin-commonjs";
import { nodeResolve } from "@rollup/plugin-node-resolve";
import { terser } from "rollup-plugin-terser";
import pkg from "./package.json";
import multiInput from "rollup-plugin-multi-input";
const createStyledComponentsTransformer = require("typescript-plugin-styled-components").default;
const styledComponentsTransformer = createStyledComponentsTransformer();

export default {
  input: ["src/index.tsx", "src/**/*.tsx"],
  output: [
    {
      dir: "dist",
      plugins: [terser()],
      format: "cjs",
      exports: "named",
      strict: false
    }
  ],
  plugins: [
    multiInput(),
    nodeResolve(),
    typescript({
      objectHashIgnoreUnknownHack: true,
      transformers: [
        () => ({
          before: [styledComponentsTransformer]
        })
      ]
    }),

    commonjs(),
    babel({
      presets: ["@babel/preset-env", "@babel/preset-react"],
      plugins: [
        [
          "babel-plugin-styled-components",
          {
            minify: true,
            pure: true,
            transpileTemplateLiterals: true
          }
        ]
      ]
    })
  ],
  external: ["react", "react-dom"]
};
