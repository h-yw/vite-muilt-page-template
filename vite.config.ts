import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { createPages, regexScript, regexStyle } from "./scripts/pages";
// https://vitejs.dev/config/
const input = createPages();
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: "dist",
    rollupOptions: {
      input: input,
      output: {
        entryFileNames: "assets/[name].[hash].js",
        assetFileNames: (chunkInfo) => {
          // const extType = chunkInfo?.name?.split(".").pop() ?? "";
          const isStyle = regexStyle.test(chunkInfo?.name ?? "");
          const isScript = regexScript.test(chunkInfo?.name ?? "");
          if (isStyle) {
            return "styles/[name].[hash].[ext]";
          }
          if (isScript) {
            return "scripts/[name].[hash].[ext]";
          }
          return "assets/[name].[hash].[ext]";
        },
        dir: "dist",
      },
    },
    manifest: true,
  },
});
