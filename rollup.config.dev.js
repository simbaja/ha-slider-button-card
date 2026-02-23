import resolve from "@rollup/plugin-node-resolve";
import typescript from "rollup-plugin-typescript2";
import { babel } from "@rollup/plugin-babel";
import serve from "rollup-plugin-serve";
import terser from "@rollup/plugin-terser";
import ignoreWrapper  from './rollup-plugins/ignoreWrapper.js';
import json from '@rollup/plugin-json';

export default {
  input: ["src/slider-button-card.ts"],
  output: {
    dir: "./dist",
    format: "es",
  },
  plugins: [
    resolve(),
    typescript(),
    json(),
    babel({
      babelHelpers: 'bundled',
      exclude: "node_modules/**",
    }),
    terser(),
    serve({
      contentBase: "./dist",
      host: "0.0.0.0",
      port: 5000,
      allowCrossOrigin: true,
      headers: {
        "Access-Control-Allow-Origin": "*",
      },
    }),
    ignoreWrapper()
  ],
};
