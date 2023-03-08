import vsharp from "vite-plugin-vsharp";
import progress from "vite-plugin-progress";
import { optimizeCssModules } from "vite-plugin-optimize-css-modules";
import htmlPurge from "vite-plugin-purgecss";

export default {
  root: "./src",
  publicDir: true,
  build: {
    outDir: "../dist",
    outDir: "../docs",
    emptyOutDir: true,
    rollupOptions: {
      output: {
        assetFileNames: `assets/[name].[hash].[ext]`,
      },
    },
  },
  plugins: [
    vsharp({
      exclude: ["nina.webp"],
      scale: 0.15,
    }),
    // htmlPurge(),
    progress(),
    optimizeCssModules(),
  ],
};
