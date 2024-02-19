import { defineConfig } from "tsup";

export default defineConfig({
  minify: true,
  dts: true,
  format: ["esm", "cjs"],
  sourcemap: true,
  clean: true,
  splitting: true,
  esbuildOptions: (options) => {
    options.banner = {
      js: '"use client";'
    };
  },
  entry: ["src/index.tsx"],
  outDir: "dist"
});
