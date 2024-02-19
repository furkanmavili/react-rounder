import typescript from "rollup-plugin-typescript2";
import { babel } from "@rollup/plugin-babel";
import commonjs from "@rollup/plugin-commonjs";
import { nodeResolve } from "@rollup/plugin-node-resolve";
import { terser } from "rollup-plugin-terser";
import pkg from "./package.json";
import multiInput from "rollup-plugin-multi-input";

export default {
  input: ["src/index.tsx", "src/**/*.tsx"],
  output: [
    {
      dir: "dist",
      plugins: [terser()],
      format: "esm",
      exports: "named",
      strict: false
    }
  ],
  plugins: [
    multiInput(),
    nodeResolve(),
    typescript({
      objectHashIgnoreUnknownHack: true
    }),

    commonjs(),
    babel({
      presets: ["@babel/preset-env", "@babel/preset-react"]
    })
  ],
  external: ["react", "react-dom"]
};
