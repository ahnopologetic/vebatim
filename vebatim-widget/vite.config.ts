import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { viteSingleFile } from "vite-plugin-singlefile";

// https://vitejs.dev/config/
export default defineConfig({
  root: "./src/iframes/app",
  plugins: [react(), viteSingleFile()],
  build: {
    target: "esnext",
    assetsInlineLimit: 100000000,
    chunkSizeWarningLimit: 100000000,
    cssCodeSplit: false,
    outDir: "../../../dist",
    rollupOptions: {
      inlineDynamicImports: true,
      // output: {
      //   manualChunks: () => "everything.js",
      // },
    },
  },
});
